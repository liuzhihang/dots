import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createReadStream} from 'node:fs';
import {createServer} from 'node:http';
import {createHash} from 'node:crypto';
import {launchBrowser} from './browser-runtime.mjs';

const root = path.resolve(import.meta.dirname, '..');
assert(process.argv[2], 'Usage: node scripts/verify-option-thumbnail-ui.mjs <existing static publish stage>');
const stage = path.resolve(process.argv[2]);
const stageVerification = JSON.parse(await fs.readFile(path.join(stage, 'stage-verification.json'), 'utf8'));
assert(Number.isInteger(stageVerification.revision), 'Static publish stage must declare a numeric revision.');
assert(Array.isArray(stageVerification.files), 'Static publish stage must include its verified file inventory.');
const revision = String(stageVerification.revision);
const publishRoot = path.join(stage, 'dist');
const inventory = new Map(stageVerification.files.map(row => [row.path.replaceAll('\\', '/'), row]));
assert(inventory.has('dist/index.html'), 'Static publish stage must contain dist/index.html.');

const output = path.join(path.dirname(stage), `option-thumbnail-ui-qa-${revision}-${new Date().toISOString().replaceAll(':', '-').replaceAll('.', '-')}`);
await fs.mkdir(output, {recursive: true});
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'], ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'], ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'], ['.svg', 'image/svg+xml'], ['.webp', 'image/webp'], ['.woff2', 'font/woff2']
]);
const checks = [];
const failures = [];
const browserErrors = [];
const failedRequests = [];
const deliveredImages = new Set();
const delayedResponses = [];
const check = (name, passed, detail = null) => {
  const result = {name, passed: Boolean(passed), detail};
  checks.push(result);
  if (!result.passed) failures.push(name);
};

const server = createServer(async (request, response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { response.writeHead(400).end('Bad request'); return; }
  if (pathname === '/') pathname = '/index.html';
  const filePath = path.resolve(publishRoot, `.${pathname}`);
  if (filePath !== publishRoot && !filePath.startsWith(publishRoot + path.sep)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  if (pathname.startsWith('/assets/delivery/') && pathname.endsWith('.webp')) deliveredImages.add(pathname);
  let stat;
  try {
    stat = await fs.stat(filePath);
    if (!stat.isFile()) throw new Error('Not a file');
  } catch {
    response.writeHead(404, {'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store'}).end('Not found');
    return;
  }
  response.writeHead(200, {
    'content-length': stat.size,
    'content-type': mimeTypes.get(path.extname(filePath).toLowerCase()) || 'application/octet-stream',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff'
  });
  if (request.method === 'HEAD') response.end();
  else createReadStream(filePath).pipe(response);
});

await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolve);
});
const origin = `http://127.0.0.1:${server.address().port}`;
let browser;
let context;
let page;
let delayWebpResponses = false;
let roundGlassesPng = null;
let chefToquePng = null;
let humanClothingPng = null;
let spinnerEvidence = null;
let reducedMotionEvidence = null;
let responsiveEvidence = [];
let materialAudit = [];

async function waitStudioReady() {
  await page.waitForFunction(() => {
    const editor = document.querySelector('.studio-figure-editor');
    const canvas = document.querySelector('.studio-editor-canvas');
    return document.querySelector('#studioOverlay')?.open && editor?.dataset.stateId
      && !editor.dataset.pending && canvas && document.querySelector('.artwork-detail__export')?.disabled === false;
  }, null, {timeout: 60000});
}

async function waitSelection(field, optionId) {
  await page.waitForFunction(({field: key, option}) => {
    const editor = document.querySelector('.studio-figure-editor');
    const selected = document.querySelector(`.studio-figure-option[data-field="${key}"][aria-pressed="true"]`);
    return editor?.dataset.stateId && !editor.dataset.pending && selected?.dataset.optionId === option
      && document.querySelector('.artwork-detail__export')?.disabled === false;
  }, {field, option: optionId}, {timeout: 45000});
}

async function inspectSettledSelection(field) {
  return page.locator(`.studio-figure-editor .studio-figure-option[data-field="${field}"]`).evaluateAll(async buttons => {
    const options = buttons.filter(button => button.getClientRects().length);
    for (let pass = 0; pass < 3; pass += 1) {
      const active = options.flatMap(button => button.getAnimations({subtree: true}))
        .filter(animation => animation.playState === 'running');
      if (!active.length) break;
      await Promise.all(active.map(animation => animation.finished.catch(() => {})));
    }
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    return options.map(button => {
      const style = getComputedStyle(button);
      const selected = button.getAttribute('aria-pressed') === 'true';
      return {optionId: button.dataset.optionId, pressed: selected, hovered: button.matches(':hover'), borderColor: style.borderColor,
        backgroundColor: style.backgroundColor, boxShadow: style.boxShadow,
        activeTransitions: button.getAnimations({subtree: true}).filter(animation => animation.playState === 'running').length};
    });
  });
}

async function openFigure(id) {
  await page.locator(`.artwork-select[data-figure-id="${id}"]`).click();
  await waitStudioReady();
}

async function closeStudio() {
  await page.locator('#overlayClose').click();
  await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open, null, {timeout: 10000});
}

async function clickTab(field) {
  const tab = page.locator(`.studio-figure-editor .studio-editor-tab[data-editor-tab="${field}"]`);
  assert.equal(await tab.count(), 1, `Missing ${field} adjustment tab.`);
  await tab.click();
  await page.waitForFunction(key => document.querySelector(`.studio-figure-editor .studio-editor-tab[data-editor-tab="${key}"]`)?.getAttribute('aria-selected') === 'true', field);
}

async function clickOption(field, optionId) {
  const option = page.locator(`.studio-figure-option[data-field="${field}"][data-option-id="${optionId}"]`);
  assert.equal(await option.count(), 1, `Missing ${field}/${optionId} choice.`);
  if (await option.getAttribute('aria-pressed') !== 'true') {
    assert.equal(await option.isEnabled(), true, `${field}/${optionId} must be enabled.`);
    await option.click();
  }
  await waitSelection(field, optionId);
  await page.mouse.move(640, 72);
  const states = await inspectSettledSelection(field);
  const selected = states.filter(row => row.pressed);
  const target = selected.find(row => row.optionId === optionId);
  const unselected = states.filter(row => !row.pressed);
  check(`${field}/${optionId} is the only selected option after its visual transition settles.`,
    selected.length === 1 && target?.hovered === false && target?.boxShadow !== 'none'
      && unselected.length > 0 && unselected.every(row => row.borderColor !== target.borderColor)
      && states.every(row => row.activeTransitions === 0), states);
}

async function waitFieldThumbnails(field) {
  await page.waitForFunction(key => {
    const buttons = [...document.querySelectorAll(`.studio-figure-option[data-field="${key}"]`)];
    return buttons.length > 0 && buttons.every(button => {
      const state = button.querySelector('.studio-figure-option-visual')?.dataset.thumbnailState;
      const busy = button.getAttribute('aria-busy');
      if (state === 'empty') return busy === null || busy === 'false';
      return ['ready', 'error'].includes(state) && busy === 'false';
    });
  }, field, {timeout: 45000});
}

function settledBusy(row) {
  return row.state === 'empty' ? row.busy === null || row.busy === 'false'
    : ['ready', 'error'].includes(row.state) && row.busy === 'false';
}

async function inspectBusyVisuals(field) {
  return page.locator(`.studio-figure-option[data-field="${field}"]`).evaluateAll(buttons => {
    const animationsFor = (button, visual) => {
      const candidates = [];
      for (const [element, name] of [[button, 'button'], [visual, 'visual']]) {
        if (!element) continue;
        for (const pseudo of ['::before', '::after']) {
          const style = getComputedStyle(element, pseudo);
          candidates.push({target: `${name}${pseudo}`, content: style.content, animationName: style.animationName,
            animationDuration: style.animationDuration, animationPlayState: style.animationPlayState,
            opacity: style.opacity, width: style.width, height: style.height});
        }
      }
      for (const element of visual?.querySelectorAll('*') || []) {
        const style = getComputedStyle(element);
        candidates.push({target: element.className?.baseVal || element.className || element.tagName,
          content: '', animationName: style.animationName, animationDuration: style.animationDuration,
          animationPlayState: style.animationPlayState, opacity: style.opacity,
          width: style.width, height: style.height});
      }
      return candidates.filter(candidate => candidate.animationName !== 'none'
        && candidate.animationDuration.split(',').some(value => parseFloat(value) > 0)
        && candidate.animationPlayState.split(',').some(value => value.trim() === 'running')
        && Number(candidate.opacity) > 0
        && (candidate.content !== 'none' || !candidate.target.endsWith('::before') && !candidate.target.endsWith('::after'))
        && candidate.width !== '0px' && candidate.height !== '0px');
    };
    return buttons.filter(button => ['waiting-for-manifest', 'loading'].includes(
      button.querySelector('.studio-figure-option-visual')?.dataset.thumbnailState
    )).map(button => {
      const visual = button.querySelector('.studio-figure-option-visual');
      const spinner = visual ? getComputedStyle(visual, '::after') : null;
      return {optionId: button.dataset.optionId, state: visual?.dataset.thumbnailState,
        ariaBusy: button.getAttribute('aria-busy'), animations: animationsFor(button, visual),
        spinner: spinner ? {content: spinner.content, animationName: spinner.animationName,
          animationDuration: spinner.animationDuration, animationPlayState: spinner.animationPlayState,
          width: spinner.width, height: spinner.height, opacity: spinner.opacity} : null};
    });
  });
}

async function inspectField(field) {
  return page.locator(`.studio-figure-option[data-field="${field}"]`).evaluateAll(buttons => {
    const rect = element => {
      const box = element.getBoundingClientRect();
      return {x: box.x, y: box.y, left: box.left, right: box.right, width: box.width, height: box.height};
    };
    const colorChannels = color => {
      const match = color.match(/rgba?\(([^)]+)\)/i);
      if (!match) return null;
      const values = match[1].split(/[\s,/]+/).filter(Boolean).map(Number);
      return values.length >= 3 ? values.slice(0, 4) : null;
    };
    const panel = buttons[0]?.closest('.studio-editor-category');
    const list = panel?.querySelector('.studio-figure-option-list');
    const tabs = document.querySelector('.studio-editor-tabs');
    const dialog = document.querySelector('#studioOverlay');
    const options = buttons.filter(button => button.getClientRects().length).map(button => {
      const label = button.querySelector('.studio-editor-option-label');
      const visual = button.querySelector('.studio-figure-option-visual');
      const visualStyle = getComputedStyle(visual);
      const beforeStyle = getComputedStyle(visual, '::before');
      const afterStyle = getComputedStyle(visual, '::after');
      const buttonStyle = getComputedStyle(button);
      const canvas = visual.querySelector('canvas.studio-editor-option-thumbnail');
      let alpha = null;
      if (canvas?.width && canvas?.height) {
        const data = canvas.getContext('2d', {willReadFrequently: true}).getImageData(0, 0, canvas.width, canvas.height).data;
        let visible = 0, transparent = 0;
        for (let index = 3; index < data.length; index += 4) {
          if (data[index] > 0) visible += 1;
          else transparent += 1;
        }
        alpha = {visible, transparent, width: canvas.width, height: canvas.height};
      }
      return {
        id: button.dataset.optionId, labelText: label?.textContent?.trim(), state: visual.dataset.thumbnailState,
        busy: button.getAttribute('aria-busy'), disabled: button.disabled,
        button: rect(button), label: label ? {...rect(label), scrollWidth: label.scrollWidth, clientWidth: label.clientWidth} : null,
        visual: {...rect(visual), backgroundColor: visualStyle.backgroundColor, backgroundImage: visualStyle.backgroundImage,
          borderRadius: visualStyle.borderRadius,
          before: {content: beforeStyle.content, backgroundColor: beforeStyle.backgroundColor,
            backgroundImage: beforeStyle.backgroundImage},
          after: {content: afterStyle.content, backgroundColor: afterStyle.backgroundColor,
            backgroundImage: afterStyle.backgroundImage, animationName: afterStyle.animationName,
            animationDuration: afterStyle.animationDuration, animationPlayState: afterStyle.animationPlayState,
            width: afterStyle.width, height: afterStyle.height, opacity: afterStyle.opacity}},
        buttonBackground: buttonStyle.backgroundColor, buttonBackgroundImage: buttonStyle.backgroundImage,
        visualBackgroundChannels: colorChannels(visualStyle.backgroundColor), alpha
      };
    });
    return {
      viewport: {width: innerWidth, height: innerHeight},
      document: {clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth,
        bodyClientWidth: document.body.clientWidth, bodyScrollWidth: document.body.scrollWidth},
      dialog: {clientWidth: dialog.clientWidth, scrollWidth: dialog.scrollWidth, box: rect(dialog)},
      tabs: tabs ? {clientWidth: tabs.clientWidth, scrollWidth: tabs.scrollWidth, box: rect(tabs)} : null,
      list: list ? {clientWidth: list.clientWidth, scrollWidth: list.scrollWidth, box: rect(list)} : null,
      options
    };
  });
}

function hasNoHorizontalOverflow(measurement) {
  const w = measurement.viewport.width;
  return measurement.document.scrollWidth <= w + 1
    && measurement.document.bodyScrollWidth <= w + 1
    && measurement.dialog.scrollWidth <= measurement.dialog.clientWidth + 1
    && (!measurement.tabs || measurement.tabs.scrollWidth <= measurement.tabs.clientWidth + 1)
    && measurement.list.scrollWidth <= measurement.list.clientWidth + 1
    && measurement.options.every(row => row.button.left >= measurement.list.box.left - 1
      && row.button.right <= measurement.list.box.right + 1
      && (!row.label || row.label.scrollWidth <= row.label.clientWidth + 1));
}

async function capture(name, fullPage = false) {
  await page.locator('.studio-figure-editor').scrollIntoViewIfNeeded();
  const file = path.join(output, name);
  await page.screenshot({path: file, fullPage});
  return file;
}

async function canvasSnapshot() {
  return page.evaluate(async () => {
    const canvas = document.querySelector('.studio-editor-canvas');
    const editor = document.querySelector('.studio-figure-editor');
    const blob = await new Promise(resolve => canvas?.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('The current renderer canvas did not produce PNG bytes.');
    const digest = await crypto.subtle.digest('SHA-256', await blob.arrayBuffer());
    const pixels = canvas.getContext('2d', {willReadFrequently: true}).getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0, visible = 0;
    for (let index = 3; index < pixels.length; index += 4) {
      if (pixels[index] === 0) transparent += 1;
      if (pixels[index] > 0) visible += 1;
    }
    const style = getComputedStyle(canvas);
    return {sha256: [...new Uint8Array(digest)].map(n => n.toString(16).padStart(2, '0')).join(''),
      stateId: editor.dataset.stateId, recipeId: editor.dataset.recipeId,
      transparentPixels: transparent, visiblePixels: visible,
      canvasBackgroundColor: style.backgroundColor, canvasBackgroundImage: style.backgroundImage,
      options: [...document.querySelectorAll('.studio-figure-option[aria-pressed="true"]')]
        .map(button => [button.dataset.field, button.dataset.optionId])};
  });
}

async function exportPng(name) {
  const before = await canvasSnapshot();
  const pending = page.waitForEvent('download');
  await page.locator('.artwork-detail__export').click();
  const download = await pending;
  const bytes = await fs.readFile(await download.path());
  const after = await canvasSnapshot();
  const file = path.join(output, name);
  await fs.writeFile(file, bytes);
  const result = {file, suggestedFilename: download.suggestedFilename(), byteSize: bytes.length,
    sha256: digest(bytes), canvasSha256: before.sha256, pngSignature: bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])),
    before, after};
  check(`PNG ${name} preserves transparency and matches the current renderer canvas.`,
    result.pngSignature && result.byteSize > 1000 && result.sha256 === before.sha256
      && after.sha256 === before.sha256 && after.stateId === before.stateId
      && before.transparentPixels > 0 && before.visiblePixels > 0
      && ['rgba(0, 0, 0, 0)', 'transparent'].includes(before.canvasBackgroundColor)
      && before.canvasBackgroundImage === 'none', result);
  return result;
}

async function responsiveMatrix(field, prefix) {
  const matrix = [];
  for (const size of [{name: 'desktop', width: 1440, height: 960}, {name: '390', width: 390, height: 844}, {name: '320', width: 320, height: 700}]) {
    await page.setViewportSize({width: size.width, height: size.height});
    for (const locale of ['en', 'zh-CN']) {
      const language = page.locator('#studioOverlay #languagePreference');
      await language.selectOption(locale);
      await page.waitForFunction(value => document.documentElement.lang === value, locale);
      const measurements = await inspectField(field);
      const minVisualSize = size.width <= 350 ? 60 : 68;
      const visualsLargeEnough = measurements.options.every(row => row.visual.width >= minVisualSize
        && row.visual.height >= minVisualSize);
      const labelsFit = measurements.options.every(row => !row.label || row.label.scrollWidth <= row.label.clientWidth + 1);
      const layout = {viewport: size.name, locale, measurements, noHorizontalOverflow: hasNoHorizontalOverflow(measurements),
        visualsLargeEnough, labelsFit, minVisualSize};
      matrix.push(layout);
      check(`${prefix} ${size.name}px ${locale} controls fit without horizontal clipping and retain large thumbnails.`,
        layout.noHorizontalOverflow && visualsLargeEnough && labelsFit, layout);
      await capture(`${prefix}-${size.name}-${locale}.png`);
    }
  }
  responsiveEvidence.push(...matrix);
  return matrix;
}

try {
  browser = await launchBrowser({headless: true});
  context = await browser.newContext({viewport: {width: 1440, height: 960}, acceptDownloads: true});
  page = await context.newPage();
  page.setDefaultTimeout(20000);
  page.on('pageerror', error => browserErrors.push({kind: 'pageerror', message: error.message}));
  page.on('console', message => { if (message.type() === 'error') browserErrors.push({kind: 'console', message: message.text()}); });
  page.on('requestfailed', request => failedRequests.push({url: new URL(request.url()).pathname, error: request.failure()?.errorText || 'failed'}));
  page.on('dialog', dialog => { browserErrors.push({kind: 'unexpected-dialog', type: dialog.type(), message: dialog.message()}); void dialog.dismiss(); });

  await page.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (delayWebpResponses && url.origin === origin && url.pathname.startsWith('/assets/delivery/') && url.pathname.endsWith('.webp')) {
      delayedResponses.push(url.pathname);
      await new Promise(resolve => setTimeout(resolve, 1200));
    }
    await route.continue();
  });

  await page.goto(`${origin}/`, {waitUntil: 'domcontentloaded'});
  await openFigure('dots-orb');
  check('Loaded Orb from the verified static publish stage.', true, {stageRevision: revision, url: page.url()});

  await clickTab('face');
  await waitFieldThumbnails('face');
  const faceInitial = await inspectField('face');
  check('Orb Face thumbnails are ready, visually sized, and remain transparent on the option canvas.',
    faceInitial.options.length === 2 && faceInitial.options.every(row => row.state === 'ready' && row.busy === 'false'
      && row.visual.width >= 68 && row.alpha?.visible > 0 && row.alpha?.transparent > 0), faceInitial);
  await capture('orb-face-desktop-en.png');
  await clickOption('face', 'face:closed');
  await capture('orb-face-closed-desktop-en.png');
  await clickOption('face', 'face:open');

  delayWebpResponses = true;
  await clickTab('accessories');
  await page.waitForFunction(() => [...document.querySelectorAll('.studio-figure-option[data-field="accessories"]')]
    .some(button => ['waiting-for-manifest', 'loading'].includes(button.querySelector('.studio-figure-option-visual')?.dataset.thumbnailState)),
  null, {timeout: 10000});
  await page.waitForFunction(() => [...document.querySelectorAll('.studio-figure-option[data-field="accessories"]')]
    .some(button => button.querySelector('.studio-figure-option-visual')?.dataset.thumbnailState === 'loading'),
  null, {timeout: 10000});
  await page.waitForFunction(() => performance.getEntriesByType('resource').some(entry => {
    const url = new URL(entry.name);
    return url.pathname.startsWith('/assets/delivery/') && url.pathname.endsWith('.webp');
  }), null, {timeout: 10000});
  await page.waitForTimeout(120);
  const busyRows = await inspectBusyVisuals('accessories');
  spinnerEvidence = {delayedWebpRequests: [...new Set(delayedResponses)], busyRows};
  await capture('orb-accessory-loading-spinner.png');
  const animatedBusy = busyRows.filter(row => row.ariaBusy === 'true' && row.animations.some(animation =>
    animation.target === 'visual::after' && animation.animationName !== 'none'));
  check('A delayed WebP response exposes an animated loading spinner and aria-busy state.',
    delayedResponses.length > 0 && busyRows.length > 0 && busyRows.every(row => row.ariaBusy === 'true') && animatedBusy.length > 0,
    spinnerEvidence);

  delayWebpResponses = false;
  await waitFieldThumbnails('accessories');
  const accessoryReady = await inspectField('accessories');
  check('Orb accessory thumbnails finish loading, clear aria-busy, and have visible non-empty transparent pixels.',
    accessoryReady.options.length === 7 && accessoryReady.options.every(settledBusy)
      && accessoryReady.options.filter(row => row.id !== 'accessories:none').every(row => row.state === 'ready'
        && row.visual.width >= 68 && row.alpha?.visible > 0 && row.alpha?.transparent > 0
        && row.visual.after.content === 'none' && row.visual.after.animationName === 'none'), accessoryReady);
  check('Option cards use the site lavender glow while thumbnail visuals stay transparent and have no inner well.',
    accessoryReady.options.every(row => row.buttonBackgroundImage.startsWith('radial-gradient('))
      && accessoryReady.options.filter(row => row.id !== 'accessories:none').every(row =>
        row.visual.backgroundColor === 'rgba(0, 0, 0, 0)' && row.visual.backgroundImage === 'none'
          && row.visual.borderRadius === '0px'),
    accessoryReady.options.map(row => ({id: row.id, visual: row.visual, buttonBackground: row.buttonBackground,
      buttonBackgroundImage: row.buttonBackgroundImage})));

  await clickOption('accessories', 'accessories:round-glasses');
  await capture('orb-round-glasses-desktop-en.png');
  roundGlassesPng = await exportPng('orb-round-glasses.png');
  await clickOption('accessories', 'accessories:chef-toque');
  await capture('orb-chef-toque-desktop-en.png');
  chefToquePng = await exportPng('orb-chef-toque.png');
  await responsiveMatrix('accessories', 'orb-accessories');

  await closeStudio();
  await page.setViewportSize({width: 1440, height: 960});
  await page.emulateMedia({reducedMotion: 'reduce'});
  await openFigure('candidate-humans-20261005');
  await page.locator('#studioOverlay #languagePreference').selectOption('en');
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  delayedResponses.length = 0;
  delayWebpResponses = true;
  await clickTab('clothing');
  await page.waitForFunction(() => [...document.querySelectorAll('.studio-figure-option[data-field="clothing"]')]
    .some(button => button.querySelector('.studio-figure-option-visual')?.dataset.thumbnailState === 'loading'),
  null, {timeout: 10000});
  const reducedBusyRows = await inspectBusyVisuals('clothing');
  reducedMotionEvidence = {media: await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches),
    delayedWebpRequests: [...new Set(delayedResponses)], busyRows: reducedBusyRows};
  await capture('human-clothing-reduced-motion-loading.png');
  check('Reduced-motion loading remains identifiable and aria-busy while spinner animation is disabled.',
    reducedMotionEvidence.media && reducedBusyRows.length > 0
      && reducedBusyRows.every(row => row.ariaBusy === 'true' && row.spinner?.content === '""'
        && row.spinner.width !== '0px' && row.spinner.height !== '0px' && Number(row.spinner.opacity) > 0
        && row.spinner.animationName === 'none' && row.animations.length === 0),
    reducedMotionEvidence);

  delayWebpResponses = false;
  await waitFieldThumbnails('clothing');
  const clothingReady = await inspectField('clothing');
  check('Person clothing thumbnails finish loading and clear aria-busy.',
    clothingReady.options.length >= 2 && clothingReady.options.every(settledBusy)
      && clothingReady.options.filter(row => row.id !== 'clothing:none').every(row => row.state === 'ready'
        && row.alpha?.visible > 0 && row.alpha?.transparent > 0), clothingReady);
  await clickOption('clothing', 'clothing:navy-vest');
  await page.locator('#studioOverlay #languagePreference').selectOption('zh-CN');
  await page.waitForFunction(() => document.documentElement.lang === 'zh-CN');
  const humanZh = await inspectField('clothing');
  check('The human clothing panel localizes in Chinese without clipping.',
    humanZh.options.length >= 2 && humanZh.options.every(row => settledBusy(row)
      && row.label.scrollWidth <= row.label.clientWidth + 1), humanZh);
  await capture('human-clothing-navy-vest-desktop-zh-CN.png');
  humanClothingPng = await exportPng('human-clothing-navy-vest.png');
  await page.locator('#studioOverlay #languagePreference').selectOption('en');
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  await capture('human-clothing-navy-vest-desktop-en.png');

  const inventoryByPath = new Map(stageVerification.files.map(row => [row.path.replaceAll('\\', '/'), row]));
  for (const urlPath of [...deliveredImages].sort()) {
    const relative = `dist${urlPath}`;
    const expected = inventoryByPath.get(relative);
    const actual = digest(await fs.readFile(path.join(stage, relative)));
    materialAudit.push({path: relative, expectedSha256: expected?.sha256 || null, actualSha256: actual,
      unchanged: Boolean(expected && expected.sha256 === actual)});
  }
  check('Every published WebP material served by this test retains its stage-verification hash.',
    materialAudit.length > 0 && materialAudit.every(row => row.unchanged), materialAudit);
  check('Browser run has no uncaught errors or dialogs.', browserErrors.length === 0 && failedRequests.length === 0,
    {browserErrors, failedRequests});
} catch (error) {
  failures.push(`execution: ${error.message}`);
  browserErrors.push({kind: 'test-execution', message: error.stack || error.message});
} finally {
  if (page && failures.length) {
    try { await page.screenshot({path: path.join(output, 'final-state-on-error.png'), fullPage: false}); } catch {}
  }
  const report = {
    result: failures.length ? 'failed' : 'passed',
    stageRevision: stageVerification.revision,
    stagePath: stage,
    servedRoot: publishRoot,
    checks,
    failures,
    browserErrors,
    failedRequests,
    spinnerEvidence,
    reducedMotionEvidence,
    responsiveEvidence,
    exports: {roundGlasses: roundGlassesPng, chefToque: chefToquePng, humanClothing: humanClothingPng},
    materialAudit,
    browser: 'Project Playwright Chromium fallback after in-app Browser invocation was blocked by a native modal / locked Mac.',
    emulatedSlowNetwork: {kind: 'artificial response delay for same-origin lossless WebP requests', delayMs: 1200,
      paths: [...new Set(delayedResponses)]},
    screenshots: failures.length
      ? ['orb-face-desktop-en.png', 'orb-face-closed-desktop-en.png', 'orb-accessory-loading-spinner.png',
        'orb-round-glasses-desktop-en.png', 'orb-chef-toque-desktop-en.png', 'human-clothing-reduced-motion-loading.png',
        'human-clothing-navy-vest-desktop-zh-CN.png', 'human-clothing-navy-vest-desktop-en.png', 'final-state-on-error.png']
      : ['orb-face-desktop-en.png', 'orb-face-closed-desktop-en.png', 'orb-accessory-loading-spinner.png',
        'orb-round-glasses-desktop-en.png', 'orb-chef-toque-desktop-en.png', 'human-clothing-reduced-motion-loading.png',
        'human-clothing-navy-vest-desktop-zh-CN.png', 'human-clothing-navy-vest-desktop-en.png',
        ...responsiveEvidence.map(row => `orb-accessories-${row.viewport}-${row.locale}.png`)]
  };
  await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  if (context) await context.close().catch(() => {});
  if (browser) await browser.close().catch(() => {});
  await new Promise(resolve => server.close(resolve));
  console.log(JSON.stringify({result: report.result, stageRevision: report.stageRevision,
    stagePath: report.stagePath, reportPath: path.join(output, 'report.json'),
    checks: checks.map(row => ({name: row.name, passed: row.passed})), failures}, null, 2));
}

if (failures.length) process.exitCode = 1;
