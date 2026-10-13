import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import path from 'node:path';
import {createServer} from 'node:http';
import {createHash, randomUUID} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {launchBrowser} from './browser-runtime.mjs';
import {stageStaticPublish} from './stage-static-publish.mjs';

const root = path.resolve(import.meta.dirname, '..');
const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'], ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'], ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'], ['.svg', 'image/svg+xml'], ['.webp', 'image/webp'],
  ['.woff2', 'font/woff2']
]);
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const timestamp = new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-');

async function getStage() {
  const supplied = process.argv[2];
  if (supplied) return path.resolve(supplied);
  const destination = path.join(root, '.artifacts', 'modal-typography-20261013', 'figure-thumbnail-stages', randomUUID());
  await stageStaticPublish(destination);
  return destination;
}

const stage = await getStage();
const stageVerification = JSON.parse(await fs.readFile(path.join(stage, 'stage-verification.json'), 'utf8'));
assert(Number.isInteger(stageVerification.revision), 'Static stage must declare its numeric cache revision.');
assert(Array.isArray(stageVerification.files), 'Static stage must contain its frozen file inventory.');
const revision = String(stageVerification.revision);
const publishRoot = path.join(stage, 'dist');
const publishManifest = JSON.parse(await fs.readFile(path.join(root, 'design/static-publish-manifest.json'), 'utf8'));
const sourceOnlyPaths = new Set(publishManifest.sourceOnlyFiles.map(file => `/${file.replace(/^dist\//, '')}`));
const stagedFiles = new Set(stageVerification.files.map(row => row.path.replaceAll('\\', '/')));
const missingListed = [];
for (const row of stageVerification.files) {
  if (!await fs.stat(path.join(stage, row.path)).then(() => true, () => false)) missingListed.push(row.path);
}
assert.equal(missingListed.length, 0, 'Every file in the stage verification inventory must exist.');
assert.equal(stageVerification.excludedSourcePngCount, sourceOnlyPaths.size,
  'The stage must record the current explicit source-only PNG inventory.');
assert([...sourceOnlyPaths].every(urlPath => !stagedFiles.has(`dist${urlPath}`)),
  'The static publish stage must exclude every source-only PNG.');
assert(await fs.stat(path.join(publishRoot, 'index.html')).then(() => true, () => false),
  'The static publish stage must contain its website entry point.');

const output = path.join(path.dirname(stage), `figure-thumbnail-qa-${revision}-${timestamp}`);
await fs.mkdir(output, {recursive: true});
const failures = [];
const checks = [];
const browserErrors = [];
const requestFailures = [];
const pngRequests = [];
const sourceOnlyRequests = [];
const serverErrors = [];

function check(name, passed, detail) {
  checks.push({name, passed: Boolean(passed), detail});
  if (!passed) failures.push(name);
}

const server = createServer(async (request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }
  if (pathname === '/') pathname = '/index.html';
  const normalized = path.resolve(publishRoot, `.${pathname}`);
  if (normalized !== publishRoot && !normalized.startsWith(publishRoot + path.sep)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  if (sourceOnlyPaths.has(pathname)) sourceOnlyRequests.push({path: pathname, method: request.method});
  if (pathname.toLowerCase().endsWith('.png')) pngRequests.push(pathname);
  let stat;
  try {
    stat = await fs.stat(normalized);
    if (!stat.isFile()) throw new Error('Not a file');
  } catch {
    serverErrors.push({path: pathname, status: 404});
    response.writeHead(404, {'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store'}).end('Not found');
    return;
  }
  response.writeHead(200, {
    'content-length': stat.size,
    'content-type': mimeTypes.get(path.extname(normalized).toLowerCase()) || 'application/octet-stream',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff'
  });
  if (request.method === 'HEAD') response.end();
  else createReadStream(normalized).on('error', error => {
    serverErrors.push({path: pathname, status: 500, error: error.message});
    if (!response.headersSent) response.writeHead(500);
    response.end();
  }).pipe(response);
});

await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolve);
});
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
let context;
let page;
let selectedState = null;
let thumbnailAudit = [];
let exportAudit = null;
let closedGlasses = null;
let openGlasses = null;
let finalState = null;
let browserStateAtFailure = null;
const thumbnailWaits = [];

async function waitForStableSelection({color = 'colors:blue', face, accessory} = {}) {
  await page.waitForFunction(expected => {
    const editor = document.querySelector('.studio-figure-editor');
    const canvas = document.querySelector('.studio-editor-canvas');
    const exportButton = document.querySelector('.artwork-detail__export');
    if (!editor || editor.dataset.pending || !editor.dataset.stateId || !canvas || exportButton?.disabled) return false;
    const selected = key => document.querySelector(`.studio-figure-option[data-field="${key}"][aria-pressed="true"]`)?.dataset.optionId;
    return (!expected.color || selected('colors') === expected.color)
      && (!expected.face || selected('face') === expected.face)
      && (!expected.accessory || selected('accessories') === expected.accessory);
  }, {color, face, accessory}, {timeout: 45000});
}

async function clickField(field) {
  await page.locator(`.studio-figure-editor .studio-editor-tab[data-editor-tab="${field}"]`).click();
  await page.waitForFunction(key => document.querySelector(`.studio-figure-editor .studio-editor-tab[data-editor-tab="${key}"]`)?.getAttribute('aria-selected') === 'true', field);
}

async function clickOption(field, optionId, expected) {
  const locator = page.locator(`.studio-figure-option[data-field="${field}"][data-option-id="${optionId}"]`);
  assert.equal(await locator.count(), 1, `Expected exactly one ${field}/${optionId} control.`);
  if (await locator.getAttribute('aria-pressed') !== 'true') {
    assert.equal(await locator.isEnabled(), true, `${field}/${optionId} must be available for the selected Figure state.`);
    await locator.click();
  }
  await waitForStableSelection(expected);
}

async function waitForAccessoryThumbnails() {
  let timeout = null;
  try {
    await page.waitForFunction(() => {
      const buttons = [...document.querySelectorAll('.studio-figure-option[data-field="accessories"]')];
      return buttons.length === 7 && buttons.every(button => {
        const state = button.querySelector('.studio-figure-option-visual')?.dataset.thumbnailState;
        return ['ready', 'empty', 'error'].includes(state);
      });
    }, null, {timeout: 20000});
  } catch (error) {
    timeout = error.message;
  }
  const audit = await getThumbnailAudit();
  const result = {settled: timeout === null, timeout, audit};
  thumbnailWaits.push({settled: result.settled, timeout: result.timeout,
    states: audit.map(row => ({optionId: row.optionId, state: row.state}))});
  return result;
}

async function getThumbnailAudit() {
  return page.locator('.studio-figure-option[data-field="accessories"]').evaluateAll(buttons => buttons.map(button => {
    const visual = button.querySelector('.studio-figure-option-visual');
    const canvas = visual?.querySelector('canvas.studio-editor-option-thumbnail');
    let visiblePixels = 0;
    if (canvas?.width && canvas?.height) {
      try {
        const pixels = canvas.getContext('2d', {willReadFrequently: true}).getImageData(0, 0, canvas.width, canvas.height).data;
        for (let index = 3; index < pixels.length; index += 4) if (pixels[index] > 0) visiblePixels += 1;
      } catch {}
    }
    return {
      optionId: button.dataset.optionId,
      state: visual?.dataset.thumbnailState || 'missing',
      isNone: button.dataset.optionId === 'accessories:none',
      canvasCount: visual?.querySelectorAll('canvas.studio-editor-option-thumbnail').length || 0,
      width: canvas?.width || 0,
      height: canvas?.height || 0,
      visiblePixels,
      unavailableMark: Boolean(visual?.querySelector('.studio-editor-option-unavailable-mark'))
    };
  }));
}

async function canvasSnapshot() {
  return page.evaluate(async () => {
    const canvas = document.querySelector('.studio-editor-canvas');
    const editor = document.querySelector('.studio-figure-editor');
    const blob = await new Promise(resolve => canvas?.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('Renderer did not produce a PNG canvas blob.');
    const digest = await crypto.subtle.digest('SHA-256', await blob.arrayBuffer());
    const selected = key => document.querySelector(`.studio-figure-option[data-field="${key}"][aria-pressed="true"]`)?.dataset.optionId || null;
    const context = canvas.getContext('2d', {willReadFrequently: true});
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparentPixels = 0, visiblePixels = 0;
    for (let index = 3; index < pixels.length; index += 4) {
      if (pixels[index] === 0) transparentPixels += 1;
      if (pixels[index] > 0) visiblePixels += 1;
    }
    return {
      sha256: [...new Uint8Array(digest)].map(value => value.toString(16).padStart(2, '0')).join(''),
      stateId: editor?.dataset.stateId || null,
      recipeId: editor?.dataset.recipeId || null,
      color: selected('colors'), face: selected('face'), accessory: selected('accessories'),
      canvasWidth: canvas.width, canvasHeight: canvas.height,
      transparentPixels, visiblePixels,
      canvasRevision: canvas.dataset.renderRevision,
      exportDisabled: document.querySelector('.artwork-detail__export')?.disabled ?? true
    };
  });
}

try {
  browser = await launchBrowser({headless: true});
  context = await browser.newContext({viewport: {width: 1440, height: 960}, acceptDownloads: true});
  page = await context.newPage();
  page.setDefaultTimeout(20000);
  page.on('pageerror', error => browserErrors.push({kind: 'pageerror', message: error.message}));
  page.on('console', message => {
    if (message.type() === 'error') browserErrors.push({kind: 'console', message: message.text()});
  });
  page.on('requestfailed', request => requestFailures.push({url: new URL(request.url()).pathname, error: request.failure()?.errorText || 'failed'}));
  page.on('dialog', dialog => {
    browserErrors.push({kind: 'unexpected-dialog', type: dialog.type(), message: dialog.message()});
    void dialog.dismiss();
  });

  await page.goto(`${origin}/`, {waitUntil: 'domcontentloaded'});
  await page.locator('.artwork-select[data-figure-id="dots-orb"]').click();
  await page.waitForFunction(() => {
    const dialog = document.querySelector('#studioOverlay');
    const editor = document.querySelector('.studio-figure-editor');
    const canvas = document.querySelector('.studio-editor-canvas');
    return dialog?.open && editor?.dataset.stateId && !editor.dataset.pending && canvas
      && document.querySelector('.artwork-detail__export')?.disabled === false;
  }, null, {timeout: 60000});
  check('Served the actual static publish closure and opened the Orb Figure in Character Studio.', true,
    {url: page.url(), stageRevision: revision, stagePath: stage});

  await clickField('colors');
  await clickOption('colors', 'colors:blue', {color: 'colors:blue'});
  await clickField('accessories');
  const firstThumbnailWait = await waitForAccessoryThumbnails();
  thumbnailAudit = firstThumbnailWait.audit;
  await page.screenshot({path: path.join(output, 'accessory-thumbnails.png'), fullPage: false});
  const nonEmptyThumbnails = thumbnailAudit.filter(row => !row.isNone);
  const readyThumbnails = nonEmptyThumbnails.filter(row => row.state === 'ready' && row.canvasCount === 1
    && row.width > 0 && row.height > 0 && row.visiblePixels > 0);
  check('All six non-empty accessory thumbnails render non-empty canvases.',
    nonEmptyThumbnails.length === 6 && readyThumbnails.length === 6,
    {nonEmptyOptionCount: nonEmptyThumbnails.length, readyCount: readyThumbnails.length, thumbnails: thumbnailAudit});
  check('The None accessory remains an intentional empty option, not a failed thumbnail.',
    thumbnailAudit.filter(row => row.isNone).length === 1
      && thumbnailAudit.find(row => row.isNone)?.state === 'empty'
      && !thumbnailAudit.find(row => row.isNone)?.unavailableMark,
    thumbnailAudit.find(row => row.isNone));

  await clickField('face');
  await clickOption('face', 'face:closed', {color: 'colors:blue', face: 'face:closed'});
  await clickField('accessories');
  await waitForAccessoryThumbnails();
  closedGlasses = await page.locator('.studio-figure-option[data-field="accessories"]').evaluateAll(buttons => {
    const byId = id => buttons.find(button => button.dataset.optionId === id);
    return Object.fromEntries(['accessories:cool-sunglasses', 'accessories:cyber-glasses'].map(id => [id, {
      found: Boolean(byId(id)), disabled: byId(id)?.disabled ?? null,
      available: byId(id)?.dataset.optionAvailable ?? null
    }]));
  });
  const closedGlassesDisabled = Object.values(closedGlasses).every(item => item.found && item.disabled && item.available === 'false');
  check('Cool and Cyber glasses are disabled with closed eyes.', closedGlassesDisabled, closedGlasses);

  await clickOption('accessories', 'accessories:chef-toque', {
    color: 'colors:blue', face: 'face:closed', accessory: 'accessories:chef-toque'
  });
  selectedState = await canvasSnapshot();
  check('Orb selection reaches Blue + Closed eyes + Chef toque and exports are enabled.',
    selectedState.color === 'colors:blue' && selectedState.face === 'face:closed'
      && selectedState.accessory === 'accessories:chef-toque' && selectedState.stateId?.includes('orb-blue-closed-none-chef-toque')
      && !selectedState.exportDisabled && selectedState.canvasWidth > 0 && selectedState.canvasHeight > 0,
    selectedState);

  await clickField('face');
  await clickOption('face', 'face:open', {color: 'colors:blue', face: 'face:open', accessory: 'accessories:chef-toque'});
  await clickField('accessories');
  openGlasses = await page.locator('.studio-figure-option[data-field="accessories"]').evaluateAll(buttons =>
    Object.fromEntries(['accessories:cool-sunglasses', 'accessories:cyber-glasses'].map(id => {
      const button = buttons.find(row => row.dataset.optionId === id);
      return [id, {found: Boolean(button), disabled: button?.disabled ?? null, available: button?.dataset.optionAvailable ?? null}];
    })));
  const openGlassesEnabled = Object.values(openGlasses).every(item => item.found && !item.disabled && item.available === 'true');
  check('Cool and Cyber glasses become available with open eyes.', openGlassesEnabled, openGlasses);

  await clickField('face');
  await clickOption('face', 'face:closed', {color: 'colors:blue', face: 'face:closed', accessory: 'accessories:chef-toque'});
  await clickField('accessories');
  await waitForAccessoryThumbnails();
  finalState = await canvasSnapshot();
  const finalClosedGlasses = await page.locator('.studio-figure-option[data-field="accessories"]').evaluateAll(buttons =>
    Object.fromEntries(['accessories:cool-sunglasses', 'accessories:cyber-glasses'].map(id => {
      const button = buttons.find(row => row.dataset.optionId === id);
      return [id, {disabled: button?.disabled ?? null, available: button?.dataset.optionAvailable ?? null}];
    })));
  check('Returning to Closed eyes restores the Blue + Closed eyes + Chef toque selection.',
    finalState.color === selectedState.color && finalState.face === selectedState.face
      && finalState.accessory === selectedState.accessory && finalState.stateId === selectedState.stateId
      && Object.values(finalClosedGlasses).every(item => item.disabled && item.available === 'false'),
    {finalState, closedGlasses: finalClosedGlasses});
  await page.screenshot({path: path.join(output, 'orb-blue-closed-chef-toque.png'), fullPage: false});

  const beforeExport = await canvasSnapshot();
  const downloadPending = page.waitForEvent('download');
  await page.locator('.artwork-detail__export').click();
  const download = await downloadPending;
  const downloadPath = await download.path();
  const png = await fs.readFile(downloadPath);
  const exportedPngPath = path.join(output, 'exported-blue-closed-chef-toque.png');
  await fs.writeFile(exportedPngPath, png);
  const afterExport = await canvasSnapshot();
  const pngSignature = png.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  exportAudit = {
    filename: download.suggestedFilename(),
    savedPath: exportedPngPath,
    bytes: png.length,
    sha256: hash(png),
    canvasSha256: beforeExport.sha256,
    pngSignature,
    beforeExport,
    afterExport
  };
  check('PNG export is valid and byte-identical to the current selected-state canvas.',
    pngSignature && png.length > 1000 && hash(png) === beforeExport.sha256
      && afterExport.sha256 === beforeExport.sha256 && afterExport.stateId === beforeExport.stateId
      && afterExport.color === 'colors:blue' && afterExport.face === 'face:closed'
      && afterExport.accessory === 'accessories:chef-toque' && !afterExport.exportDisabled
      && beforeExport.transparentPixels > 0 && beforeExport.visiblePixels > 0,
    exportAudit);

  check('No excluded original source PNG is requested by the browser.', sourceOnlyRequests.length === 0,
    {count: sourceOnlyRequests.length, requests: sourceOnlyRequests});
  check('The browser does not raise uncaught JavaScript errors or native dialogs.', browserErrors.length === 0, browserErrors);

} catch (error) {
  failures.push(`execution: ${error.message}`);
  browserErrors.push({kind: 'test-execution', message: error.stack || error.message});
  if (page) {
    try {
      browserStateAtFailure = await page.evaluate(() => ({
        url: location.href,
        overlayOpen: document.querySelector('#studioOverlay')?.open ?? false,
        figure: (() => {
          const editor = document.querySelector('.studio-figure-editor');
          return editor ? {stateId: editor.dataset.stateId, recipeId: editor.dataset.recipeId,
            pending: editor.dataset.pending ?? null, summary: editor.querySelector('.studio-editor-selection-summary')?.textContent}
            : null;
        })(),
        canvas: (() => {
          const canvas = document.querySelector('.studio-editor-canvas');
          return canvas ? {width: canvas.width, height: canvas.height, renderRevision: canvas.dataset.renderRevision}
            : null;
        })(),
        accessories: [...document.querySelectorAll('.studio-figure-option[data-field="accessories"]')].map(button => ({
          optionId: button.dataset.optionId,
          disabled: button.disabled,
          state: button.querySelector('.studio-figure-option-visual')?.dataset.thumbnailState,
          assetIds: button.querySelector('.studio-figure-option-visual')?.dataset.assetIds || null
        }))
      }));
    } catch {}
    try { thumbnailAudit = await getThumbnailAudit(); } catch {}
  }
} finally {
  if (page && failures.length) {
    try { await page.screenshot({path: path.join(output, 'final-state-on-error.png'), fullPage: false}); } catch {}
  }
  const report = {
    result: failures.length ? 'failed' : 'passed',
    stageRevision: stageVerification.revision,
    stagePath: stage,
    servedRoot: publishRoot,
    staticClosure: {
      fileCount: stageVerification.fileCount,
      excludedSourcePngCount: stageVerification.excludedSourcePngCount,
      stagedSourceOnlyPaths: [...sourceOnlyPaths].filter(urlPath => stagedFiles.has(`dist${urlPath}`)),
      sourceOnlyRequestCount: sourceOnlyRequests.length,
      sourceOnlyRequests,
      allPngRequestCount: pngRequests.length,
      allPngRequests: pngRequests,
      serverErrors
    },
    checks,
    failures,
    selections: {closedGlasses: closedGlasses ?? null, openGlasses: openGlasses ?? null,
      selectedState, finalState},
    thumbnailAudit,
    thumbnailWaits,
    exportAudit,
    browserErrors,
    requestFailures,
    browser: 'Project Playwright Chromium fallback after in-app Browser invocation was blocked by a native modal / locked Mac.',
    viewport: {width: 1440, height: 960},
    browserStateAtFailure,
    screenshots: failures.length
      ? ['accessory-thumbnails.png', 'orb-blue-closed-chef-toque.png', 'final-state-on-error.png']
      : ['accessory-thumbnails.png', 'orb-blue-closed-chef-toque.png'],
    artifacts: exportAudit ? [exportAudit.savedPath] : []
  };
  await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  if (context) await context.close().catch(() => {});
  if (browser) await browser.close().catch(() => {});
  await new Promise(resolve => server.close(resolve));
  console.log(JSON.stringify({result: report.result, stageRevision: report.stageRevision, stagePath: report.stagePath,
    reportPath: path.join(output, 'report.json'), checks: checks.map(item => ({name: item.name, passed: item.passed})), failures}, null, 2));
}

if (failures.length) process.exitCode = 1;
