import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createServer } from 'vite';
import { chromium } from '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const execFileAsync = promisify(execFile);
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const evidenceRoot = path.resolve(process.env.DOTS_EVIDENCE_DIR || path.join(repoRoot, 'design/acceptance/current-20261010-v99/cr-polish-20261011/editing'));
const harnessFixtureRoot = path.join(repoRoot, 'design/acceptance/current-20261010-v99/editor');
const manifestPath = path.join(repoRoot, 'dist/assets/templates/sources.json');
const runId = new Date().toISOString().replace(/[:.]/g, '-');
const runRoot = path.join(evidenceRoot, `run-${runId}`);
const compositeRoot = path.join(runRoot, 'composites');
const downloadRoot = path.join(runRoot, 'downloads');
const screenshotRoot = path.join(runRoot, 'screenshots');
const videoStageRoot = path.join(runRoot, 'video-segments');
const chromePath = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const WIDTH = 1440;
const HEIGHT = 900;
const focusedRaceOnly = process.argv.includes('--focused-race-only');
const focusedCycleOnly = process.argv.includes('--focused-cycle-only');
const TAB_FOR_FIELD = Object.freeze({ color: 'appearance', eyes: 'face', glasses: 'accessories', accessory: 'accessories' });

for (const directory of [runRoot, compositeRoot, downloadRoot, screenshotRoot, videoStageRoot]) {
  await fs.mkdir(directory, { recursive: true });
}

const sourceBytes = await fs.readFile(manifestPath);
const sourceManifest = JSON.parse(sourceBytes.toString('utf8'));
assert.equal(sourceManifest.schemaVersion, 1, 'Runtime template manifest must use the installed schema.');
assert.deepEqual(sourceManifest.canvas, { width: 1254, height: 1254 }, 'Both templates share the declared 1254×1254 canvas.');
assert.equal(sourceManifest.assets.length, 14, 'The two templates have seven physical layers each.');
assert.equal(sourceManifest.templates.length, 2, 'The runtime manifest declares both approved public Templates.');
const approvalPath = path.join(repoRoot, 'design/acceptance/current-20261010-v99/release-20261011/approval.json');
const approval = JSON.parse(await fs.readFile(approvalPath, 'utf8'));
assert.equal(approval.scope.revision, 99, 'The approval record is bound to current v99.');
assert.equal(approval.scope.artworkCount, 24, 'The approval record covers all 24 public Artwork records.');
const approvedTemplateIds = approval.scope.publicEditability.approvedTemplateIds;
assert.deepEqual(new Set(approvedTemplateIds), new Set(['dots-orb-v1', 'grok-orb-v1']), 'Both exact Template families are explicitly approved.');
const approvedTemplateRecords = new Map(approval.scope.templates.map(row => [row.id, row]));
const approvedLayerRecords = new Map(approval.scope.templates.flatMap(template => template.sourceAssets.map(asset => [asset.id, asset])));
assert.equal(approvedTemplateRecords.size, 2, 'The approval record covers both Templates.');
for (const template of sourceManifest.templates) {
  assert(approvedTemplateIds.includes(template.id), `${template.id} is in the approval record.`);
  assert.equal(template.status, 'approved', `${template.id} runtime status follows approval.`);
  assert.equal(template.engineeringStatus, 'passed', `${template.id} has passed engineering checks.`);
  assert.equal(template.publicEditable, true, `${template.id} is publicly editable.`);
  assert.equal(template.artApproval.approvalId, approval.approvalId, `${template.id} points to the current approval record.`);
  assert.equal(template.artApproval.record, path.relative(repoRoot, approvalPath), `${template.id} names the current approval evidence.`);
  assert.equal(approvedTemplateRecords.get(template.id)?.version, template.version, `${template.id} version is exact.`);
}
for (const row of sourceManifest.assets) {
  const bytes = await fs.readFile(path.join(repoRoot, 'dist', row.path.replace(/^\.\//, '')));
  assert.equal(bytes.length, row.byteSize, `Byte size matches ${row.id}.`);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), row.sha256, `SHA-256 matches ${row.id}.`);
  assert.equal(row.width, 1254, `Width matches the common canvas for ${row.id}.`);
  assert.equal(row.height, 1254, `Height matches the common canvas for ${row.id}.`);
  assert.equal(row.mime, 'image/png', `Template source is PNG: ${row.id}.`);
  assert.equal(row.status, 'approved', `The public Template layer is approved: ${row.id}.`);
  const approvedAsset = approvedLayerRecords.get(row.id);
  assert(approvedAsset, `${row.id} is registered in the exact approval record.`);
  for (const key of ['version', 'purpose', 'path', 'sha256', 'byteSize']) assert.equal(row[key], approvedAsset[key], `${row.id}: ${key} matches approved bytes.`);
}

let harnessServer = null;
let baseURL = process.env.DOTS_QA_BASE_URL || null;
if (!baseURL) {
  const harnessDirectory = path.join(harnessFixtureRoot, 'harness.html');
  const harnessScript = path.join(harnessFixtureRoot, 'harness.js');
  harnessServer = await createServer({
    configFile: path.join(repoRoot, 'vite.config.mjs'),
    server: { host: '127.0.0.1', port: 0, strictPort: true, hmr: false },
    plugins: [{
      name: 'dots-editor-external-qa-harness',
      configureServer(server) {
        server.middlewares.use('/__dots_editor_harness__', async (request, response, next) => {
          if (request.method !== 'GET') return next();
          const pathname = new URL(request.url || '/', 'http://localhost').pathname;
          try {
            const filePath = pathname.endsWith('.js') ? harnessScript : harnessDirectory;
            const source = await fs.readFile(filePath);
            response.statusCode = 200;
            response.setHeader('Cache-Control', 'no-store');
            response.setHeader('Content-Type', filePath.endsWith('.js') ? 'text/javascript; charset=utf-8' : 'text/html; charset=utf-8');
            response.end(source);
          } catch (error) {
            next(error);
          }
        });
      }
    }]
  });
  await harnessServer.listen();
  const address = harnessServer.httpServer.address();
  assert.ok(address && typeof address === 'object', 'The isolated external QA server binds a local ephemeral port.');
  baseURL = `http://127.0.0.1:${address.port}`;
}
const harnessURL = process.env.DOTS_QA_BASE_URL
  ? `${baseURL}/__dots_review__/`
  : `${baseURL}/__dots_editor_harness__/`;

const browser = await chromium.launch({ headless: true, executablePath: chromePath });
const browserFailures = [];
const consoleErrors = [];
const httpFailures = [];
const networkEvidence = [];
const allVideoSegments = [];
let engineeringReport;

function assertNoRuntimeErrors(label) {
  const relevant = consoleErrors.filter(item => !item.text.includes('favicon.ico'));
  assert.deepEqual(relevant, [], `${label}: browser console has no errors.`);
  assert.deepEqual(browserFailures, [], `${label}: browser has no failed requests.`);
  assert.deepEqual(httpFailures.filter(row => !row.url.endsWith('/favicon.ico')), [], `${label}: browser responses have no HTTP errors.`);
}

async function newRecordedPage(segmentName) {
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    acceptDownloads: true,
    reducedMotion: 'reduce',
    recordVideo: { dir: videoStageRoot, size: { width: WIDTH, height: HEIGHT } }
  });
  const page = await context.newPage();
  page.on('pageerror', error => consoleErrors.push({ type: 'pageerror', text: error.message, segmentName }));
  page.on('console', message => { if (message.type() === 'error') consoleErrors.push({ type: 'console', text: message.text(), segmentName }); });
  page.on('requestfailed', request => browserFailures.push({ url: request.url(), error: request.failure()?.errorText, segmentName }));
  page.on('response', response => { if (response.status() >= 400) httpFailures.push({ url: response.url(), status: response.status(), segmentName }); });
  page.on('request', request => {
    const url = request.url();
    if (/\/assets\/(characters|previews|posters|templates)\//.test(url)) networkEvidence.push({ url, segmentName });
  });
  await page.goto(harnessURL, { waitUntil: 'domcontentloaded' });
  try {
    await page.waitForFunction(() => Boolean(window.__dotsQAApp), null, { timeout: 15_000 });
  } catch (error) {
    console.error(JSON.stringify({ segmentName, consoleErrors, browserFailures, bodyText: await page.locator('body').innerText().catch(() => '') }, null, 2));
    throw error;
  }
  await page.locator('#studioOverlay').waitFor({ state: 'attached' });
  return { context, page, segmentName };
}

async function finishSegment({ context, page, segmentName }, outputPath) {
  const video = page.video();
  await context.close();
  assert.ok(video, `Video recording exists for ${segmentName}.`);
  await video.saveAs(outputPath);
  allVideoSegments.push({ segmentName, path: outputPath });
}

async function openArtwork(page, artworkId) {
  const result = await page.evaluate(async id => {
    const { ARTWORKS, getAsset } = await import('/studio-artwork-catalog.js?v=99');
    const artwork = ARTWORKS.find(row => row.id === id);
    if (!artwork) throw new Error(`Artwork not found: ${id}`);
    const opened = window.__dotsQAApp.openArtwork(artwork.id, artwork.version);
    return { id: artwork.id, version: artwork.version, opened, publicationStatus: artwork.publicationStatus, asset: getAsset(artwork.assetRefs?.original) };
  }, artworkId);
  assert.equal(result.opened, undefined, 'The root bootstrap openArtwork method completes synchronously.');
  await page.waitForFunction(id => {
    const detail = document.querySelector('.character-studio');
    return detail?.dataset.artworkId === id && detail.dataset.state === 'ready';
  }, artworkId, { timeout: 15_000 });
  await page.locator('#studioOverlay').evaluate(dialog => dialog.open || dialog.showModal());
  return result;
}

async function waitForPreview(page, { expectNoOriginal = false } = {}) {
  try {
    await page.waitForFunction(() => {
      const state = window.__dotsQAApp.detail.getState();
      const image = document.querySelector('.artwork-detail__image');
      if (state.editable) {
        const canvas = document.querySelector('.studio-draft-host canvas.studio-editor-canvas');
        return state.editorReady && state.draft && canvas
          && Number(canvas.dataset.renderRevision) === state.draft.revision
          && document.querySelector('.studio-editor-controls[data-can-export="true"]');
      }
      return image && !image.hidden && image.complete && image.naturalWidth > 0 && (image.currentSrc || image.src).startsWith('blob:');
    }, null, { timeout: 30_000 });
  } catch (error) {
    console.error(JSON.stringify(await page.evaluate(() => ({
      state: window.__dotsQAApp.detail.getState(),
      image: [...document.querySelectorAll('.artwork-detail__image')].map(image => ({ src: image.src, currentSrc: image.currentSrc, complete: image.complete, width: image.naturalWidth, hidden: image.hidden })),
      canvas: [...document.querySelectorAll('.studio-draft-host canvas')].map(canvas => ({ revision: canvas.dataset.renderRevision, hidden: canvas.closest('.studio-draft-host')?.hidden })),
      preview: [...document.querySelectorAll('.preview-status')].map(node => node.textContent),
      requests: performance.getEntriesByType('resource').filter(entry => /assets\/(posters|previews|characters|templates)/.test(entry.name)).map(entry => entry.name)
    })), null, 2));
    throw error;
  }
  const info = await page.evaluate(() => {
    const state = window.__dotsQAApp.detail.getState();
    const image = document.querySelector('.artwork-detail__image');
    const canvas = document.querySelector('.studio-draft-host canvas.studio-editor-canvas');
    return {
      src: image.currentSrc || image.src,
      width: image.naturalWidth,
      height: image.naturalHeight,
      imageHidden: image.hidden,
      editable: state.editable,
      editorReady: state.editorReady,
      draftRevision: state.draft?.revision ?? null,
      canvasRevision: canvas ? Number(canvas.dataset.renderRevision) : null,
      assetRequests: performance.getEntriesByType('resource').map(entry => entry.name).filter(url => /\/assets\/(characters|previews|posters|templates)\//.test(url))
    };
  });
  assert.ok(info.src.startsWith('blob:'), 'The registered sharper preview is decoded while the CharacterStudio canvas is active.');
  assert.ok(info.assetRequests.some(url => /\/assets\/(posters|previews)\//.test(url)), 'The Artwork loaded a registered display derivative.');
  if (info.editable) assert.equal(info.canvasRevision, info.draftRevision, 'An eligible Artwork opens directly to a successful matching local preview.');
  if (expectNoOriginal) assert.ok(!info.assetRequests.some(url => url.includes('/assets/characters/')), 'Viewing and editing did not fetch the original artwork PNG.');
  assert.ok(info.assetRequests.every(url => !url.includes('/@fs/')), 'Studio did not request a Vite filesystem URL.');
  return info;
}

async function waitForEditor(page, config) {
  const state = await page.evaluate(() => window.__dotsQAApp.detail.getState());
  assert.equal(state.editable, true, `${config.templateId} is bound to its exact publicly approved Artwork.`);
  assert.equal(state.templateId, config.templateId);
  assert.equal(state.editorReady, true, 'An eligible CharacterStudio auto-loads its editor without a mode switch.');
  const editorRoot = page.locator('.studio-editor-controls[data-template-id]');
  await editorRoot.waitFor({ state: 'visible', timeout: 15_000 });
  await page.waitForFunction(() => {
    const canvas = document.querySelector('.studio-editor-canvas');
    const draft = window.__dotsQAApp.detail.getState().draft;
    return canvas && draft && Number(canvas.dataset.renderRevision) === draft.revision && document.querySelector('.studio-editor-controls[data-can-export="true"]');
  }, null, { timeout: 30_000 });
  const initialTab = await page.locator('.studio-editor-tabs .studio-editor-tab[role="tab"][aria-selected="true"]').getAttribute('data-editor-tab');
  const visualOptions = [];
  for (const tabKey of ['appearance', 'face', 'accessories']) {
    const tab = page.locator(`.studio-editor-tabs .studio-editor-tab[role="tab"][data-editor-tab="${tabKey}"]`);
    await tab.click();
    await page.waitForFunction(expected => {
      const active = document.querySelector(`.studio-editor-tabs .studio-editor-tab[role="tab"][data-editor-tab="${expected}"]`);
      const panel = document.querySelector(`.studio-editor-category[role="tabpanel"][data-editor-tab="${expected}"]`);
      return active?.getAttribute('aria-selected') === 'true' && panel && !panel.hidden;
    }, tabKey);
    await page.waitForFunction(expected => {
      const panel = document.querySelector(`.studio-editor-category[role="tabpanel"][data-editor-tab="${expected}"]`);
      const buttons = [...(panel?.querySelectorAll('button.studio-editor-option[data-field][data-option-id]') || [])];
      return buttons.length > 0 && buttons.every(button => {
        const visual = button.querySelector('.studio-editor-option-visual');
        return button.dataset.field === 'color'
          ? visual?.classList.contains('studio-editor-color-swatch')
          : button.dataset.optionId === 'none'
            ? visual?.dataset.thumbnailState === 'empty'
            : visual?.dataset.thumbnailState === 'ready' && visual.querySelector('.studio-editor-option-thumbnail');
      });
    }, tabKey, { timeout: 30_000 });
    visualOptions.push(...await page.locator(`.studio-editor-category[role="tabpanel"][data-editor-tab="${tabKey}"] button.studio-editor-option[data-field][data-option-id]`).evaluateAll(buttons => buttons.map(button => {
      const visual = button.querySelector('.studio-editor-option-visual');
      const thumbnail = visual?.querySelector('.studio-editor-option-thumbnail');
      const pixels = thumbnail?.getContext('2d', { willReadFrequently: true })?.getImageData(0, 0, thumbnail.width, thumbnail.height).data;
      let thumbnailAlphaPixels = 0;
      if (pixels) for (let offset = 3; offset < pixels.length; offset += 4) if (pixels[offset] > 0) thumbnailAlphaPixels += 1;
      return {
        field: button.dataset.field,
        optionId: button.dataset.optionId,
        pressed: button.getAttribute('aria-pressed') === 'true',
        disabled: button.disabled,
        colorSwatch: visual?.classList.contains('studio-editor-color-swatch') === true,
        thumbnailState: visual?.dataset.thumbnailState || null,
        thumbnailCanvas: Boolean(thumbnail && thumbnail.width > 0 && thumbnail.height > 0),
        thumbnailAssets: thumbnail?.dataset.assetIds?.split(' ') || [],
        thumbnailAlphaPixels
      };
    })));
  }
  if (initialTab) await page.locator(`.studio-editor-tabs .studio-editor-tab[role="tab"][data-editor-tab="${initialTab}"]`).click();
  assert.ok(visualOptions.length > 0, `${config.templateId} renders real visual option buttons.`);
  for (const field of ['color', 'eyes', 'glasses', 'accessory']) {
    assert.equal(visualOptions.filter(option => option.field === field && option.pressed).length, 1, `${config.templateId} exposes one visibly selected ${field} button.`);
  }
  assert.ok(visualOptions.every(option => !option.disabled), `${config.templateId} keeps registered visual options available.`);
  assert.ok(visualOptions.filter(option => option.field === 'color').every(option => option.colorSwatch), `${config.templateId} color choices use visible swatches.`);
  assert.ok(visualOptions.filter(option => option.field !== 'color' && option.optionId === 'none').every(option => option.thumbnailState === 'empty'), `${config.templateId} explicit no-layer options are visibly empty.`);
  assert.ok(visualOptions.filter(option => option.field !== 'color' && option.optionId !== 'none').every(option => option.thumbnailState === 'ready' && option.thumbnailCanvas && option.thumbnailAssets.length > 0 && option.thumbnailAlphaPixels > 0), `${config.templateId} real layer choices show nonempty-alpha canvas thumbnails.`);
  const review = await page.evaluate(() => ({
    reviewOnly: document.querySelector('.studio-editor-controls[data-template-id]')?.dataset.reviewOnly,
    oldLongCopy: /not approved for public editing/i.test(document.querySelector('.studio-editor-review')?.textContent || '')
  }));
  assert.equal(review.reviewOnly, 'false', `${config.templateId} is exercised through public editing eligibility.`);
  assert.equal(review.oldLongCopy, false, `${config.templateId} does not show retired review-only copy.`);
}

async function choose(page, field, value) {
  const tabKey = TAB_FOR_FIELD[field];
  assert.ok(tabKey, `A visible editor group is registered for ${field}.`);
  const tab = page.locator(`.studio-editor-tabs .studio-editor-tab[role="tab"][data-editor-tab="${tabKey}"]`);
  if (await tab.count()) {
    await page.evaluate(() => {
      const detail = window.__dotsQAApp.detail.getState();
      window.__beforeEditorTabSwitch = {
        editorRoot: document.querySelector('.studio-editor-controls').firstElementChild,
        sessionId: detail.sessionId,
        revision: detail.draft?.revision,
        canvasRevision: document.querySelector('.studio-editor-canvas')?.dataset.renderRevision
      };
    });
    await tab.click();
    await page.waitForFunction(expected => {
      const current = document.querySelector(`.studio-editor-tabs .studio-editor-tab[role="tab"][data-editor-tab="${expected}"]`);
      const panel = document.querySelector(`.studio-editor-category[role="tabpanel"][data-editor-tab="${expected}"]`);
      return current?.getAttribute('aria-selected') === 'true' && panel && !panel.hidden;
    }, tabKey);
    const stable = await page.evaluate(() => {
      const before = window.__beforeEditorTabSwitch;
      const detail = window.__dotsQAApp.detail.getState();
      return {
        sameEditor: before.editorRoot === document.querySelector('.studio-editor-controls').firstElementChild,
        sameSession: before.sessionId === detail.sessionId,
        sameRevision: before.revision === detail.draft?.revision,
        sameCanvasRevision: before.canvasRevision === document.querySelector('.studio-editor-canvas')?.dataset.renderRevision
      };
    });
    assert.deepEqual(stable, { sameEditor: true, sameSession: true, sameRevision: true, sameCanvasRevision: true }, 'Switching a visual category tab preserves the same editor and current successful preview.');
  }
  const option = page.locator(`.studio-editor-options button[data-field="${field}"][data-option-id="${value}"]`);
  assert.equal(await option.count(), 1, 'The visible template option has a stable button identity.');
  await option.click();
  await page.waitForFunction(({ expectedField, expectedOption }) => {
    const buttons = [...document.querySelectorAll(`.studio-editor-options button[data-field="${expectedField}"]`)];
    return buttons.filter(button => button.getAttribute('aria-pressed') === 'true').length === 1
      && buttons.some(button => button.dataset.optionId === expectedOption && button.getAttribute('aria-pressed') === 'true');
  }, { expectedField: field, expectedOption: value }, { timeout: 5_000 });
}

function parsePngHeader(bytes) {
  assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', 'Downloaded file has the PNG signature.');
  let offset = 8;
  let width = 0, height = 0, bitDepth = 0, colorType = 0;
  while (offset + 12 <= bytes.length) {
    const length = bytes.readUInt32BE(offset);
    const type = bytes.toString('ascii', offset + 4, offset + 8);
    if (type === 'IHDR') {
      width = bytes.readUInt32BE(offset + 8);
      height = bytes.readUInt32BE(offset + 12);
      bitDepth = bytes[offset + 16];
      colorType = bytes[offset + 17];
      break;
    }
    offset += 12 + length;
  }
  return { width, height, bitDepth, colorType };
}

async function saveDownloadedPng(page, target, evidenceKind) {
  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 45_000 }),
    target.click()
  ]);
  const filePath = path.join(downloadRoot, download.suggestedFilename());
  await download.saveAs(filePath);
  const bytes = await fs.readFile(filePath);
  const header = parsePngHeader(bytes);
  assert.equal(header.width, 1254, `${evidenceKind} PNG has the canonical 1254px width.`);
  assert.equal(header.height, 1254, `${evidenceKind} PNG has the canonical 1254px height.`);
  assert.equal(header.bitDepth, 8, `${evidenceKind} PNG uses 8-bit channels.`);
  assert.equal(header.colorType, 6, `${evidenceKind} PNG stores real RGBA alpha.`);
  return { filePath, filename: download.suggestedFilename(), sha256: createHash('sha256').update(bytes).digest('hex'), byteSize: bytes.length, header };
}

async function renderAllRealConfigurations(page) {
  const browserOutput = await page.evaluate(async () => {
    const [catalog, templates, draftAPI, renderer, loaderAPI] = await Promise.all([
      import('/studio-artwork-catalog.js?v=99'),
      import('/studio-edit-templates.js?v=99'),
      import('/studio-draft.js?v=99'),
      import('/studio-renderer.js?v=99'),
      import('/studio-preview-loader.js?v=99')
    ]);
    const manifestResponse = await fetch('/assets/templates/sources.json', { cache: 'no-cache' });
    if (!manifestResponse.ok) throw new Error(`Manifest fetch failed (${manifestResponse.status}).`);
    const manifest = await manifestResponse.json();
    const loader = loaderAPI.createPreviewLoader();
    loader.registerAssets(manifest.assets);
    const report = { manifestAssetCount: manifest.assets.length, templates: [], reviewBackgrounds: [], loaderBeforeRelease: null, loaderAfterRelease: null };
    const reviewBackgroundRecipes = new Set([
      'dots-orb-v1|blue|original|none|headphones',
      'dots-orb-v1|blue|original|round|none',
      'grok-orb-v1|purple|angled-capsules|none|none',
      'grok-orb-v1|purple|angled-capsules|round|none',
      'grok-orb-v1|purple|angled-capsules|none|soft-cap',
      'grok-orb-v1|purple|angled-capsules|round|soft-cap'
    ]);
    for (const templateDefinition of templates.TEMPLATE_REGISTRY) {
      const artwork = catalog.ARTWORKS.find(row => row.id === templateDefinition.artworkBinding.artworkId && row.version === templateDefinition.artworkBinding.artworkVersion);
      if (!artwork) throw new Error(`No exact Artwork binding for ${templateDefinition.id}.`);
      const template = templates.getTemplateForArtwork(artwork);
      if (!template || template.status !== 'approved' || template.engineeringStatus !== 'passed' || template.artApproval?.status !== 'approved') throw new Error(`Public approved-template access is unavailable for ${templateDefinition.id}.`);
      const rows = manifest.assets.filter(row => row.id.startsWith(`template:${template.id}:`));
      const configurations = templates.enumerateValidConfigurations(template);
      const baseDraft = draftAPI.createDraft({ artwork, template, sessionId: `all-configs-${template.id}` });
      const templateReport = { templateId: template.id, artworkId: artwork.id, artworkVersion: artwork.version, status: template.status, engineeringStatus: template.engineeringStatus, artApprovalId: template.artApproval.approvalId, publicEditable: true, assetCount: rows.length, legalCount: configurations.length, configurations: [] };
      for (let index = 0; index < configurations.length; index += 1) {
        const options = configurations[index];
        const draft = draftAPI.updateDraft(baseDraft, options, { template });
        const result = await renderer.renderDraft({ draft, template, loader, assetRegistry: rows, sessionId: draft.sessionId });
        const snapshot = renderer.createExportSnapshot(result);
        const blob = await renderer.exportSnapshot(snapshot);
        const directBlob = await new Promise((resolve, reject) => result.canvas.toBlob(value => value ? resolve(value) : reject(new Error('canvas.toBlob returned empty output.')), 'image/png'));
        const [outBytes, directBytes] = await Promise.all([blob.arrayBuffer(), directBlob.arrayBuffer()]);
        const outputHash = await crypto.subtle.digest('SHA-256', outBytes).then(value => [...new Uint8Array(value)].map(byte => byte.toString(16).padStart(2, '0')).join(''));
        const directHash = await crypto.subtle.digest('SHA-256', directBytes).then(value => [...new Uint8Array(value)].map(byte => byte.toString(16).padStart(2, '0')).join(''));
        if (outputHash !== directHash) throw new Error(`Preview and immutable export pixels differ for ${template.id} #${index + 1}.`);
        const context = result.canvas.getContext('2d', { alpha: true, willReadFrequently: true });
        const pixels = context.getImageData(0, 0, result.width, result.height).data;
        const alpha = new Uint8Array(result.width * result.height);
        let alphaNonzero = 0, alphaTransparent = 0, minX = result.width, minY = result.height, maxX = -1, maxY = -1;
        for (let pixel = 0; pixel < alpha.length; pixel += 1) {
          const channel = pixels[pixel * 4 + 3];
          alpha[pixel] = channel;
          if (channel === 0) { alphaTransparent += 1; continue; }
          alphaNonzero += 1;
          const x = pixel % result.width, y = Math.floor(pixel / result.width);
          minX = Math.min(minX, x); minY = Math.min(minY, y); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
        }
        const alphaHash = await crypto.subtle.digest('SHA-256', alpha).then(value => [...new Uint8Array(value)].map(byte => byte.toString(16).padStart(2, '0')).join(''));
        const sample = context.getImageData(627, 800, 1, 1).data;
        const stem = `${template.id}-${String(index + 1).padStart(2, '0')}`;
        const bytes = new Uint8Array(outBytes);
        let binary = '';
        for (let offset = 0; offset < bytes.length; offset += 0x8000) binary += String.fromCharCode(...bytes.subarray(offset, Math.min(offset + 0x8000, bytes.length)));
        await window.__writeStudioEvidence(`composites/${stem}.png`, btoa(binary));
        const reviewKey = `${template.id}|${options.color}|${options.eyes}|${options.glasses}|${options.accessory}`;
        if (reviewBackgroundRecipes.has(reviewKey)) {
          const backgrounds = [];
          for (const [name, color] of [['dark', '#0b0d12'], ['white', '#ffffff']]) {
            const reviewCanvas = document.createElement('canvas');
            reviewCanvas.width = result.width;
            reviewCanvas.height = result.height;
            const reviewContext = reviewCanvas.getContext('2d', { alpha: false });
            reviewContext.fillStyle = color;
            reviewContext.fillRect(0, 0, reviewCanvas.width, reviewCanvas.height);
            reviewContext.drawImage(result.canvas, 0, 0);
            const reviewBlob = await new Promise((resolve, reject) => reviewCanvas.toBlob(value => value ? resolve(value) : reject(new Error('Review background canvas returned empty output.')), 'image/png'));
            const reviewBytes = new Uint8Array(await reviewBlob.arrayBuffer());
            let reviewBinary = '';
            for (let offset = 0; offset < reviewBytes.length; offset += 0x8000) reviewBinary += String.fromCharCode(...reviewBytes.subarray(offset, Math.min(offset + 0x8000, reviewBytes.length)));
            const reviewPath = `review-backgrounds/${stem}-${name}.png`;
            await window.__writeStudioEvidence(reviewPath, btoa(reviewBinary));
            backgrounds.push({ name, path: reviewPath, sha256: await reviewBlob.arrayBuffer().then(bytes => crypto.subtle.digest('SHA-256', bytes)).then(value => [...new Uint8Array(value)].map(byte => byte.toString(16).padStart(2, '0')).join('')) });
            reviewCanvas.width = 0;
            reviewCanvas.height = 0;
          }
          report.reviewBackgrounds.push({ templateId: template.id, options, transparentComposite: `composites/${stem}.png`, backgrounds });
        }
        templateReport.configurations.push({
          index: index + 1,
          options,
          revision: result.revision,
          recipeKey: result.recipeKey,
          outputSha256: outputHash,
          outputByteSize: blob.size,
          previewAndExportSha256Match: outputHash === directHash,
          canvas: [result.width, result.height],
          alphaSha256: alphaHash,
          alphaNonzero,
          alphaTransparent,
          alphaBounds: alphaNonzero ? [minX, minY, maxX + 1, maxY + 1] : null,
          bodySampleRGBA: [...sample],
          loader: loader.stats()
        });
        result.release();
        if (loader.stats().activeLeases !== 0 || loader.stats().pendingRequests !== 0) throw new Error(`Loader did not settle after ${stem}.`);
      }
      templateReport.distinctOutputCount = new Set(templateReport.configurations.map(row => row.outputSha256)).size;
      if (templateReport.distinctOutputCount !== templateReport.legalCount) throw new Error(`${template.id}: some legally selectable configurations produced identical PNG bytes.`);
      if (rows.length !== 7) throw new Error(`${template.id} expected seven exact source rows, got ${rows.length}.`);
      report.templates.push(templateReport);
    }
    report.loaderBeforeRelease = loader.stats();
    loader.releaseAll();
    report.loaderAfterRelease = loader.stats();
    return report;
  });
  assert.equal(browserOutput.templates.reduce((sum, row) => sum + row.legalCount, 0), 28,
    'The real renderer completed all 12 Dots and 16 Grok valid recipes.');
  assert.equal(browserOutput.templates.length, 2, 'Both source templates were rendered exactly.');
  assert.ok(browserOutput.templates.every(row => row.status === 'approved' && row.engineeringStatus === 'passed' && row.publicEditable), 'Real asset Templates pass the exact public approval path.');
  assert.equal(browserOutput.loaderAfterRelease.activeLeases, 0);
  assert.equal(browserOutput.loaderAfterRelease.pendingRequests, 0);
  assert.equal(browserOutput.loaderAfterRelease.objectURLs, 0);
  assert.equal(browserOutput.loaderAfterRelease.bitmaps, 0);
  assert.equal(browserOutput.loaderAfterRelease.cachedDecodedBytes, 0);
  return browserOutput;
}

const writeEvidence = async (relativePath, base64) => {
  const target = path.resolve(runRoot, relativePath);
  assert.ok(target.startsWith(`${runRoot}${path.sep}`), 'Evidence writes remain inside the dedicated editor QA run.');
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, Buffer.from(base64, 'base64'));
  return { path: target, byteSize: (await fs.stat(target)).size };
};

async function runTwentyEditCycles(page) {
  await page.evaluate(async () => {
    const [catalog, templates, draftAPI, renderer, loaderAPI, editorAPI] = await Promise.all([
      import('/studio-artwork-catalog.js?v=99'),
      import('/studio-edit-templates.js?v=99'),
      import('/studio-draft.js?v=99'),
      import('/studio-renderer.js?v=99'),
      import('/studio-preview-loader.js?v=99'),
      import('/studio-editor.js?v=99')
    ]);
    const manifest = await fetch('/assets/templates/sources.json', { cache: 'no-cache' }).then(response => {
      if (!response.ok) throw new Error(`Manifest fetch failed (${response.status}).`);
      return response.json();
    });
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const createObservedLoader = fetchImpl => {
      const delegate = loaderAPI.createPreviewLoader({ fetchImpl });
      let canceledConsumers = 0;
      return {
        acquire(asset, options = {}) {
          return delegate.acquire(asset, options).catch(error => {
            if (error?.name === 'AbortError' && options.signal?.aborted) canceledConsumers += 1;
            throw error;
          });
        },
        registerAssets: rows => delegate.registerAssets(rows),
        getRegisteredAsset: reference => delegate.getRegisteredAsset(reference),
        stats: () => delegate.stats(),
        releaseAll: () => delegate.releaseAll(),
        getCanceledConsumers: () => canceledConsumers
      };
    };
    window.__dotsRunEditorCycle = async index => {
      const templateDefinition = templates.TEMPLATE_REGISTRY[index % 2];
      const artwork = catalog.ARTWORKS.find(row => row.id === templateDefinition.artworkBinding.artworkId && row.version === templateDefinition.artworkBinding.artworkVersion);
      const template = templates.getTemplateForArtwork(artwork);
      const rows = manifest.assets.filter(row => row.id.startsWith(`template:${template.id}:`));
      let transportAbortCount = 0;
      const delayedFetch = (url, options = {}) => new Promise((resolve, reject) => {
        let settled = false;
        const signal = options.signal;
        const onAbort = () => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          transportAbortCount += 1;
          reject(new DOMException('Cycle fetch was canceled.', 'AbortError'));
        };
        const timer = setTimeout(() => {
          if (settled) return;
          fetch(url, options).then(value => {
            if (settled) return;
            settled = true;
            signal?.removeEventListener('abort', onAbort);
            resolve(value);
          }, error => {
            if (settled) return;
            settled = true;
            signal?.removeEventListener('abort', onAbort);
            reject(error);
          });
        }, 80);
        signal?.addEventListener('abort', onAbort, { once: true });
        if (signal?.aborted) onAbort();
      });
      const loader = createObservedLoader(delayedFetch);
      loader.registerAssets(rows);
      let draft = draftAPI.createDraft({ artwork, template, sessionId: `cycle-${index}-${template.id}` });
      const host = document.createElement('div');
      host.dataset.cycle = String(index);
      host.style.cssText = 'position:fixed;left:-5000px;top:0;width:360px;height:420px;overflow:hidden;';
      document.body.append(host);
      let status = null;
      const successfulStatuses = [];
      const exportCaptures = [];
      const editor = editorAPI.createEditor({
        root: host,
        artwork,
        template,
        draft,
        loader,
        assetRegistry: rows,
        onDraftChange: next => { draft = next; },
        onExport: async payload => {
          const capture = { filename: payload.filename, revision: payload.snapshot.revision, bytes: payload.blob.size };
          if (index === 0 || index === 19) {
            const bytes = new Uint8Array(await payload.blob.arrayBuffer());
            let binary = '';
            for (let offset = 0; offset < bytes.length; offset += 0x8000) binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
            capture.base64 = btoa(binary);
          }
          exportCaptures.push(capture);
        },
        onStatus: next => {
          status = next;
          if (next.canExport) successfulStatuses.push({ snapshotRevision: next.snapshot?.revision ?? null, draftRevision: draft.revision });
        }
      });
      host.append(editor.previewElement);
      // Let the initial real render and its shared thumbnail consumers attach
      // to the same pending resources before superseding its Draft revision.
      await wait(35);
      const set = (field, value) => {
        const tabKey = ({ color: 'appearance', eyes: 'face', glasses: 'accessories', accessory: 'accessories' })[field];
        const tab = editor.element.querySelector('.studio-editor-tab[data-editor-tab="' + tabKey + '"]');
        if (!tab) throw new Error('Cycle is missing the ' + field + ' tab.');
        tab.click();
        const panel = editor.element.querySelector('.studio-editor-category[role="tabpanel"][data-editor-tab="' + tabKey + '"]');
        if (tab.getAttribute('aria-selected') !== 'true' || !panel || panel.hidden) throw new Error('Cycle failed to activate the visible ' + field + ' panel.');
        const control = panel.querySelector('button.studio-editor-option[data-field="' + field + '"][data-option-id="' + value + '"]');
        if (!control) throw new Error('Cycle is missing visual ' + field + ' option ' + value + '.');
        control.click();
      };
      const dots = template.id === 'dots-orb-v1';
      const finalOptions = dots
        ? { color: index % 2 ? 'warm-yellow' : 'blue', eyes: 'closed', glasses: 'none', accessory: index % 2 ? 'none' : 'headphones' }
        : { color: index % 2 ? 'mint' : 'purple', eyes: 'upright-capsules', glasses: 'round', accessory: index % 2 ? 'soft-cap' : 'none' };
      set('color', finalOptions.color);
      const disabledDuringPending = editor.getSnapshot() === null;
      await wait(8);
      set('eyes', finalOptions.eyes);
      set('glasses', finalOptions.glasses);
      set('accessory', finalOptions.accessory);
      await wait(0);
      const canceledConsumersAfterRapidChange = loader.getCanceledConsumers();
      const sharedRequestsAfterRapidChange = loader.stats().pendingRequests;
      for (let attempt = 0; attempt < 300; attempt += 1) {
        if (status?.canExport && status.snapshot?.revision === editor.getDraft().revision) break;
        await wait(10);
      }
      if (!status?.canExport || status.snapshot?.revision !== editor.getDraft().revision) throw new Error(`Cycle ${index} never rendered its current Draft revision.`);
      const expectedRevision = editor.getDraft().revision;
      const currentCanvas = editor.previewElement.querySelector('canvas[data-render-revision]');
      if (Number(currentCanvas?.dataset.renderRevision) !== expectedRevision) throw new Error(`Cycle ${index} Canvas revision is stale.`);
      const statsBeforeExport = loader.stats();
      if (statsBeforeExport.pendingRequests !== 0 || statsBeforeExport.activeLeases !== 0) throw new Error(`Cycle ${index} has unsettled requests/leases before export.`);
      const exportAccepted = await editor.exportPNG();
      if (!exportAccepted || exportCaptures.length !== 1 || exportCaptures[0].revision !== expectedRevision) throw new Error(`Cycle ${index} did not export its latest successful snapshot through the Editor API.`);
      const exportedFilename = exportCaptures[0].filename;
      editor.destroy();
      host.remove();
      await wait(30);
      const statsAfterDestroy = loader.stats();
      loader.releaseAll();
      const statsAfterRelease = loader.stats();
      return {
        index: index + 1,
        templateId: template.id,
        artworkId: artwork.id,
        options: finalOptions,
        revision: expectedRevision,
        recipeKey: currentCanvas.dataset.recipeKey,
        disabledDuringPending,
        exportAccepted,
        exportCapture: exportCaptures[0],
        canceledConsumersAfterRapidChange,
        sharedRequestsAfterRapidChange,
        successfulStatuses,
        transportAbortCount,
        statsBeforeExport,
        statsAfterDestroy,
        statsAfterRelease,
        expectedFilename: exportedFilename
      };
    };
    window.__dotsDestroyPendingEditor = async () => {
      const templateDefinition = templates.TEMPLATE_REGISTRY.find(row => row.id === 'dots-orb-v1');
      const artwork = catalog.ARTWORKS.find(row => row.id === templateDefinition.artworkBinding.artworkId && row.version === templateDefinition.artworkBinding.artworkVersion);
      const template = templates.getTemplateForArtwork(artwork);
      const rows = manifest.assets.filter(row => row.id.startsWith(`template:${template.id}:`));
      let pendingFetchAborts = 0;
      let pendingFetchCalls = 0;
      const pendingFetch = (_url, options = {}) => new Promise((_resolve, reject) => {
        pendingFetchCalls += 1;
        const signal = options.signal;
        const onAbort = () => {
          pendingFetchAborts += 1;
          reject(new DOMException('Pending QA fetch aborted by Editor.destroy().', 'AbortError'));
        };
        signal?.addEventListener('abort', onAbort, { once: true });
        if (signal?.aborted) onAbort();
      });
      const loader = createObservedLoader(pendingFetch);
      loader.registerAssets(rows);
      const host = document.createElement('div');
      host.style.cssText = 'position:fixed;left:-5000px;top:0;width:360px;height:420px;overflow:hidden;';
      document.body.append(host);
      const draft = draftAPI.createDraft({ artwork, template, sessionId: 'destroy-pending-editor' });
      const editor = editorAPI.createEditor({
        root: host, artwork, template, draft, loader, assetRegistry: rows
      });
      host.append(editor.previewElement);
      for (let attempt = 0; attempt < 100; attempt += 1) {
        if (loader.stats().activeRequests > 0 && pendingFetchCalls > 0) break;
        await wait(5);
      }
      const statsBeforeDestroy = loader.stats();
      if (statsBeforeDestroy.activeRequests === 0 || pendingFetchCalls === 0) throw new Error('Destroy-pending harness never started a pending loader fetch.');
      editor.destroy();
      host.remove();
      for (let attempt = 0; attempt < 100; attempt += 1) {
        if (loader.stats().pendingRequests === 0 && pendingFetchAborts > 0) break;
        await wait(5);
      }
      const statsAfterDestroy = loader.stats();
      loader.releaseAll();
      const statsAfterRelease = loader.stats();
      return {
        pendingFetchCalls,
        pendingFetchAborts,
        canceledConsumers: loader.getCanceledConsumers(),
        statsBeforeDestroy,
        statsAfterDestroy,
        statsAfterRelease
      };
    };
  });

  const cycles = [];
  for (let index = 0; index < 20; index += 1) {
    const cycle = await page.evaluate(index => window.__dotsRunEditorCycle(index), index);
    assert.equal(cycle.index, index + 1);
    assert.equal(cycle.disabledDuringPending, true, `Cycle ${index + 1} disables export while a new revision is rendering.`);
    assert.equal(cycle.statsAfterDestroy.activeLeases, 0, `Cycle ${index + 1} destroys all render leases.`);
    assert.equal(cycle.statsAfterDestroy.pendingRequests, 0, `Cycle ${index + 1} settles/aborts pending resources.`);
    assert.equal(cycle.statsAfterDestroy.objectURLs, 0, `Cycle ${index + 1} does not leak object URLs.`);
    assert.ok(cycle.statsAfterDestroy.cachedDecodedBytes <= cycle.statsAfterDestroy.maxDecodedBytes, `Cycle ${index + 1} stays inside decoded cache budget.`);
    assert.equal(cycle.statsAfterRelease.bitmaps, 0, `Cycle ${index + 1} closes every bitmap at loader disposal.`);
    assert.equal(cycle.statsAfterRelease.cachedDecodedBytes, 0, `Cycle ${index + 1} releases cached decoded memory.`);
    assert.ok(cycle.exportCapture.filename.endsWith('.png'), `Cycle ${index + 1} created a PNG through the isolated Editor export API.`);
    assert.equal(cycle.exportCapture.bytes > 100_000, true, `Cycle ${index + 1} produced nonempty PNG bytes.`);
    if (index === 0 || index === 19) {
      const target = path.join(downloadRoot, `cycle-${String(index + 1).padStart(2, '0')}.png`);
      const base64 = cycle.exportCapture.base64;
      assert.equal(typeof base64, 'string', `Cycle ${index + 1} captures the PNG bytes for alpha verification.`);
      await fs.writeFile(target, Buffer.from(base64, 'base64'));
      delete cycle.exportCapture.base64;
      const bytes = await fs.readFile(target);
      const header = parsePngHeader(bytes);
      assert.equal(header.colorType, 6, `Cycle ${index + 1} export retains RGBA alpha.`);
      cycle.exportFile = path.relative(evidenceRoot, target);
      cycle.exportBytes = bytes.length;
    } else {
      assert.equal(cycle.exportCapture.base64, undefined, `Cycle ${index + 1} does not inflate the report with redundant PNG bytes.`);
    }
    cycles.push(cycle);
  }
  const pendingDestroy = await page.evaluate(() => window.__dotsDestroyPendingEditor());
  return {
    cycles,
    totalCanceledConsumerCount: cycles.reduce((sum, row) => sum + row.canceledConsumersAfterRapidChange, 0),
    totalTransportAbortCount: cycles.reduce((sum, row) => sum + row.transportAbortCount, 0),
    pendingDestroy
  };
}

function assertCycleEvidence(cycleReport) {
  for (const cycle of cycleReport.cycles) {
    assert.ok(cycle.canceledConsumersAfterRapidChange > 0, `Cycle ${cycle.index} canceled stale renderer consumers after rapid Draft edits (observed ${cycle.canceledConsumersAfterRapidChange}).`);
    assert.ok(cycle.sharedRequestsAfterRapidChange > 0, `Cycle ${cycle.index} retained pending layer fetches while thumbnails still owned shared consumers (observed ${cycle.sharedRequestsAfterRapidChange}).`);
    assert.ok(cycle.successfulStatuses.every(status => status.snapshotRevision === status.draftRevision), `Cycle ${cycle.index} never published a stale successful revision.`);
  }
  const pendingDestroy = cycleReport.pendingDestroy;
  assert.ok(pendingDestroy.statsBeforeDestroy.activeRequests > 0 && pendingDestroy.pendingFetchCalls > 0, 'The destroy harness begins with actual in-flight template fetch jobs.');
  assert.ok(pendingDestroy.pendingFetchAborts > 0, 'Editor.destroy aborts unfinished underlying fetch jobs after releasing the last shared consumers.');
  assert.equal(pendingDestroy.statsAfterDestroy.pendingRequests, 0, 'Editor.destroy settles every pending request before loader disposal.');
  assert.equal(pendingDestroy.statsAfterDestroy.activeLeases, 0, 'Editor.destroy releases all active resource leases.');
  assert.equal(pendingDestroy.statsAfterDestroy.objectURLs, 0, 'Editor.destroy leaves no Blob URLs.');
  assert.equal(pendingDestroy.statsAfterDestroy.bitmaps, 0, 'Editor.destroy leaves no decoded bitmaps.');
  assert.equal(pendingDestroy.statsAfterRelease.cachedDecodedBytes, 0, 'Final loader disposal releases all decoded cache bytes.');
}

async function runFocusedEditorRaces(page) {
  return page.evaluate(async () => {
    const [catalog, templates, draftAPI, loaderAPI, editorAPI] = await Promise.all([
      import('/studio-artwork-catalog.js?v=99'),
      import('/studio-edit-templates.js?v=99'),
      import('/studio-draft.js?v=99'),
      import('/studio-preview-loader.js?v=99'),
      import('/studio-editor.js?v=99')
    ]);
    const manifest = await fetch('/assets/templates/sources.json', { cache: 'no-cache' }).then(response => {
      if (!response.ok) throw new Error('Manifest fetch failed (' + response.status + ').');
      return response.json();
    });
    const dotsDefinition = templates.TEMPLATE_REGISTRY.find(row => row.id === 'dots-orb-v1');
    const artwork = catalog.ARTWORKS.find(row => row.id === dotsDefinition.artworkBinding.artworkId && row.version === dotsDefinition.artworkBinding.artworkVersion);
    const template = templates.getTemplateForArtwork(artwork);
    const allRows = manifest.assets.filter(row => row.id.startsWith('template:' + template.id + ':'));
    const closedEye = allRows.find(row => row.id === 'template:dots-orb-v1:eyes:closed');
    if (!closedEye) throw new Error('The Dots controlled template is missing its registered closed-eye layer.');
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const createHost = name => {
      const host = document.createElement('div');
      host.dataset.raceHost = name;
      host.style.cssText = 'position:fixed;left:-8000px;top:0;width:420px;height:520px;overflow:hidden;';
      document.body.append(host);
      return host;
    };
    const chooseVisualOption = (editor, field, value) => {
      const tabKey = ({ color: 'appearance', eyes: 'face', glasses: 'accessories', accessory: 'accessories' })[field];
      const tab = editor.element.querySelector('.studio-editor-tab[data-editor-tab="' + tabKey + '"]');
      if (!tab) throw new Error('Editor tab is missing: ' + field);
      tab.click();
      const panel = editor.element.querySelector('.studio-editor-category[role="tabpanel"][data-editor-tab="' + tabKey + '"]');
      if (tab.getAttribute('aria-selected') !== 'true' || !panel || panel.hidden) throw new Error('Editor failed to activate the visible ' + field + ' panel.');
      const option = panel.querySelector('button.studio-editor-option[data-field="' + field + '"][data-option-id="' + value + '"]');
      if (!option) throw new Error('Editor visual option is missing: ' + field + '=' + value);
      option.click();
    };
    const waitFor = async (predicate, label, timeout = 8000) => {
      const deadline = Date.now() + timeout;
      while (Date.now() < deadline) {
        if (predicate()) return;
        await wait(10);
      }
      throw new Error('Timed out waiting for ' + label + '.');
    };
    const newEditor = ({ name, rows = allRows, fetchImpl, decorateLoader, sessionId }) => {
      const host = createHost(name);
      const rawLoader = loaderAPI.createPreviewLoader({ assetRegistry: rows, ...(fetchImpl ? { fetchImpl } : {}) });
      const loader = decorateLoader ? decorateLoader(rawLoader) : rawLoader;
      const draft = draftAPI.createDraft({ artwork, template, sessionId });
      const statuses = [];
      const exports = [];
      const editor = editorAPI.createEditor({
        root: host, artwork, template, draft, loader, assetRegistry: rows,
        onExport: payload => { exports.push({ filename: payload.filename, revision: payload.snapshot.revision, bytes: payload.blob.size }); },
        onStatus: status => statuses.push(status)
      });
      host.append(editor.previewElement);
      return { host, loader, editor, statuses, exports };
    };
    const waitReady = async (state, expectedEyes) => waitFor(() => state.statuses.at(-1)?.canExport
      && state.editor.getSnapshot()?.revision === state.editor.getDraft().revision
      && (!expectedEyes || state.editor.getSnapshot()?.options.eyes === expectedEyes), 'current ' + (expectedEyes || 'default') + ' render');

    let delayClosedAcquire = false;
    let closedAcquireCount = 0;
    const outOfOrder = newEditor({
      name: 'a-b-a',
      sessionId: 'race-a-b-a',
      decorateLoader: raw => ({
        acquire(asset, options = {}) {
          if (delayClosedAcquire && asset.id === closedEye.id) {
            closedAcquireCount += 1;
            const delay = closedAcquireCount === 1 ? 260 : 35;
            // Hold the old acquisition outside the abortable cache. When it
            // returns with an aborted render signal, the renderer must discard
            // that obsolete completion without publishing status or pixels.
            return wait(delay).then(() => raw.acquire(asset, options));
          }
          return raw.acquire(asset, options);
        },
        registerAssets: rows => raw.registerAssets(rows),
        getRegisteredAsset: reference => raw.getRegisteredAsset(reference),
        releaseAll: () => raw.releaseAll(),
        stats: () => raw.stats()
      })
    });
    await waitReady(outOfOrder);
    outOfOrder.editor.element.querySelector('.studio-editor-tab[data-editor-tab="face"]').click();
    await waitFor(() => outOfOrder.editor.element.querySelector('button[data-field="eyes"][data-option-id="closed"] .studio-editor-option-visual')?.dataset.thumbnailState === 'ready', 'the closed-eye thumbnail to load before injecting render delays');
    delayClosedAcquire = true;
    chooseVisualOption(outOfOrder.editor, 'eyes', 'closed');
    await wait(12);
    const firstPendingExportDisabled = outOfOrder.editor.getSnapshot() === null;
    const firstPendingExportAccepted = await outOfOrder.editor.exportPNG();
    chooseVisualOption(outOfOrder.editor, 'eyes', 'original');
    await waitReady(outOfOrder, 'original');
    chooseVisualOption(outOfOrder.editor, 'eyes', 'closed');
    const latestPendingExportDisabled = outOfOrder.editor.getSnapshot() === null;
    const latestPendingExportAccepted = await outOfOrder.editor.exportPNG();
    if (firstPendingExportAccepted || latestPendingExportAccepted) throw new Error('Editor.exportPNG accepted an obsolete out-of-order revision before its render completed.');
    await waitReady(outOfOrder, 'closed');
    const finalSnapshot = outOfOrder.editor.getSnapshot();
    const statusCountBeforeLateCompletion = outOfOrder.statuses.length;
    await wait(300);
    if (closedAcquireCount < 2) throw new Error('Expected two deliberately reordered closed-eye render acquisitions, got ' + closedAcquireCount + '.');
    if (outOfOrder.statuses.length !== statusCountBeforeLateCompletion) throw new Error('A late obsolete render emitted a status after the latest revision had succeeded.');
    if (outOfOrder.editor.getSnapshot()?.revision !== finalSnapshot.revision || outOfOrder.editor.getSnapshot()?.options.eyes !== 'closed') {
      throw new Error('A late obsolete A→B→A render replaced the latest successful Draft snapshot.');
    }
    const outOfOrderReport = {
      sequence: ['closed', 'original', 'closed'],
      delayedClosedEyeAcquisitions: closedAcquireCount,
      firstPendingExportDisabled,
      firstPendingExportAccepted,
      latestPendingExportDisabled,
      latestPendingExportAccepted,
      latestSnapshot: finalSnapshot,
      latestDraftRevision: outOfOrder.editor.getDraft().revision,
      lateCompletionStatusCountUnchanged: true,
      loaderAfterLateCompletion: outOfOrder.loader.stats()
    };
    outOfOrder.editor.destroy();
    outOfOrder.host.remove();
    outOfOrder.loader.releaseAll();

    let failLatestClosedAcquire = false;
    let latestFailureInjected = false;
    const failedLatest = newEditor({
      name: 'latest-failure',
      sessionId: 'race-latest-failure',
      decorateLoader: raw => ({
        acquire(asset, options = {}) {
          if (failLatestClosedAcquire && asset.id === closedEye.id) {
            failLatestClosedAcquire = false;
            latestFailureInjected = true;
            return Promise.reject(Object.assign(new Error('Injected one current-revision layer failure.'), { code: 'missing-template-layer', assetId: asset.id }));
          }
          return raw.acquire(asset, options);
        },
        registerAssets: rows => raw.registerAssets(rows),
        getRegisteredAsset: reference => raw.getRegisteredAsset(reference),
        releaseAll: () => raw.releaseAll(),
        stats: () => raw.stats()
      })
    });
    await waitReady(failedLatest);
    failedLatest.editor.element.querySelector('.studio-editor-tab[data-editor-tab="face"]').click();
    await waitFor(() => failedLatest.editor.element.querySelector('button[data-field="eyes"][data-option-id="closed"] .studio-editor-option-visual')?.dataset.thumbnailState === 'ready', 'closed-eye thumbnail before injecting current render failure');
    failLatestClosedAcquire = true;
    chooseVisualOption(failedLatest.editor, 'eyes', 'closed');
    await waitFor(() => failedLatest.statuses.at(-1)?.error?.code === 'missing-template-layer', 'latest missing-layer render failure');
    const failedState = {
      canExport: failedLatest.statuses.at(-1).canExport,
      exportDisabled: failedLatest.editor.getSnapshot() === null,
      exportAccepted: await failedLatest.editor.exportPNG(),
      snapshot: failedLatest.editor.getSnapshot(),
      retryVisible: !failedLatest.editor.element.querySelector('[data-action="retry"]').hidden,
      error: failedLatest.statuses.at(-1).error
    };
    if (failedState.canExport || !failedState.exportDisabled || failedState.exportAccepted || failedState.snapshot || !failedState.retryVisible) {
      throw new Error('A failed latest revision must disable export and offer explicit Retry.');
    }
    failedLatest.editor.element.querySelector('[data-action="retry"]').click();
    await waitReady(failedLatest, 'closed');
    const retryState = { canExport: failedLatest.statuses.at(-1).canExport, snapshot: failedLatest.editor.getSnapshot(), failureWasInjected: latestFailureInjected };
    failedLatest.editor.destroy();
    failedLatest.host.remove();
    failedLatest.loader.releaseAll();

    let closedThumbnailFetches = 0;
    const failClosedThumbnailOnce = async (url, options = {}) => {
      if (new URL(url).pathname.endsWith('/eyes/closed.png')) {
        closedThumbnailFetches += 1;
        if (closedThumbnailFetches === 1) return new Response('temporary thumbnail failure', { status: 503, headers: { 'content-type': 'text/plain' } });
      }
      return fetch(url, options);
    };
    const thumbnailRetry = newEditor({ name: 'thumbnail-retry', fetchImpl: failClosedThumbnailOnce, sessionId: 'race-thumbnail-retry' });
    await waitReady(thumbnailRetry);
    thumbnailRetry.editor.element.querySelector('.studio-editor-tab[data-editor-tab="face"]').click();
    const closedButton = thumbnailRetry.editor.element.querySelector('button.studio-editor-option[data-field="eyes"][data-option-id="closed"]');
    const closedVisual = closedButton?.querySelector('.studio-editor-option-visual');
    await waitFor(() => closedButton?.disabled === true
      && closedButton.dataset.unavailableReason === 'thumbnail-load-failed'
      && closedVisual?.dataset.thumbnailState === 'error'
      && !thumbnailRetry.editor.element.querySelector('[data-action="retry"]').hidden,
    'thumbnail failure to disable its option and show Retry');
    const failedThumbnail = {
      disabled: closedButton.disabled,
      reason: closedButton.dataset.unavailableReason,
      retryVisible: !thumbnailRetry.editor.element.querySelector('[data-action="retry"]').hidden,
      failedFetchCount: closedThumbnailFetches
    };
    thumbnailRetry.editor.element.querySelector('[data-action="retry"]').click();
    await waitFor(() => closedVisual.dataset.thumbnailState === 'ready'
      && closedVisual.querySelector('canvas.studio-editor-option-thumbnail')
      && closedButton.disabled === false,
    'failed option thumbnail retry to recover a selectable canvas');
    chooseVisualOption(thumbnailRetry.editor, 'eyes', 'closed');
    await waitReady(thumbnailRetry, 'closed');
    const recoveredThumbnailCanvas = closedVisual.querySelector('canvas.studio-editor-option-thumbnail');
    const recoveredThumbnailPixels = recoveredThumbnailCanvas.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, recoveredThumbnailCanvas.width, recoveredThumbnailCanvas.height).data;
    let recoveredThumbnailAlphaPixels = 0;
    for (let offset = 3; offset < recoveredThumbnailPixels.length; offset += 4) if (recoveredThumbnailPixels[offset] > 0) recoveredThumbnailAlphaPixels += 1;
    const thumbnailRecovery = {
      failedThumbnail,
      retryCount: closedThumbnailFetches,
      recovered: closedVisual.dataset.thumbnailState === 'ready' && recoveredThumbnailAlphaPixels > 0,
      alphaPixels: recoveredThumbnailAlphaPixels,
      pressed: closedButton.getAttribute('aria-pressed') === 'true',
      canExport: thumbnailRetry.editor.getSnapshot()?.options.eyes === 'closed'
    };
    if (closedThumbnailFetches < 2 || !thumbnailRecovery.recovered || !thumbnailRecovery.pressed || !thumbnailRecovery.canExport) {
      throw new Error('Retry did not recover a real thumbnail canvas and selectable rendered option.');
    }
    thumbnailRetry.editor.destroy();
    thumbnailRetry.host.remove();
    thumbnailRetry.loader.releaseAll();

    let delayCloseAcquire = false;
    let closeDelayedAcquisitions = 0;
    const closing = newEditor({
      name: 'close-late',
      sessionId: 'race-closed-session',
      decorateLoader: raw => ({
        acquire(asset, options = {}) {
          if (delayCloseAcquire && asset.id === closedEye.id) {
            closeDelayedAcquisitions += 1;
            return wait(260).then(() => raw.acquire(asset, options));
          }
          return raw.acquire(asset, options);
        },
        registerAssets: rows => raw.registerAssets(rows),
        getRegisteredAsset: reference => raw.getRegisteredAsset(reference),
        releaseAll: () => raw.releaseAll(),
        stats: () => raw.stats()
      })
    });
    await waitReady(closing);
    closing.editor.element.querySelector('.studio-editor-tab[data-editor-tab="face"]').click();
    await waitFor(() => closing.editor.element.querySelector('button[data-field="eyes"][data-option-id="closed"] .studio-editor-option-visual')?.dataset.thumbnailState === 'ready', 'closed-eye thumbnail before close-late race');
    delayCloseAcquire = true;
    chooseVisualOption(closing.editor, 'eyes', 'closed');
    await waitFor(() => closeDelayedAcquisitions > 0, 'the delayed close-race acquisition');
    closing.editor.destroy();
    closing.host.remove();
    const oldStatusCountAfterDestroy = closing.statuses.length;
    const replacement = newEditor({ name: 'replacement-session', sessionId: 'race-replacement-session' });
    await waitReady(replacement);
    const replacementSnapshot = replacement.editor.getSnapshot();
    await wait(300);
    if (closing.statuses.length !== oldStatusCountAfterDestroy) throw new Error('A closed editor emitted a late status callback after its session was destroyed.');
    if (replacement.editor.getSnapshot()?.sessionId !== replacementSnapshot.sessionId
      || replacement.editor.getSnapshot()?.revision !== replacementSnapshot.revision) {
      throw new Error('A closed session late callback changed the replacement editor session.');
    }
    const closeReport = {
      delayedLateAcquisitions: closeDelayedAcquisitions,
      oldSessionStatusCountUnchanged: true,
      replacementSession: replacementSnapshot,
      oldLoaderBeforeRelease: closing.loader.stats()
    };
    closing.loader.releaseAll();
    replacement.editor.destroy();
    replacement.host.remove();
    replacement.loader.releaseAll();
    return {
      outOfOrder: outOfOrderReport,
      latestFailure: { ...failedState, retry: retryState },
      thumbnailFailureRecovery: thumbnailRecovery,
      closeLateCallback: closeReport
    };
  });
}

try {
  if (focusedCycleOnly) {
    const context = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT }, acceptDownloads: true, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', error => consoleErrors.push({ type: 'pageerror', text: error.message, segmentName: 'focused-editor-cycles' }));
    await page.goto(harnessURL, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => Boolean(window.__dotsQAApp), null, { timeout: 15_000 });
    const report = await runTwentyEditCycles(page);
    await fs.writeFile(path.join(runRoot, 'focused-editor-cycles.json'), JSON.stringify({ runId, sourceManifestSha256: createHash('sha256').update(sourceBytes).digest('hex'), scope: 'Focused real-source edit/export cycles and controlled pending-fetch destruction; no full recipe or journey claims.', report, consoleErrors }, null, 2));
    assertNoRuntimeErrors('focused editor lifecycle checks');
    await context.close();
    console.log(`PASS: ${report.cycles.length} cycles; ${report.totalCanceledConsumerCount} canceled consumers; ${report.pendingDestroy.pendingFetchAborts} controlled pending-fetch aborts.`);
    console.log(`EVIDENCE: ${path.relative(repoRoot, runRoot)}`);
  } else if (focusedRaceOnly) {
    const cycleContext = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT }, acceptDownloads: true, reducedMotion: 'reduce' });
    const focusedPage = await cycleContext.newPage();
    focusedPage.on('pageerror', error => consoleErrors.push({ type: 'pageerror', text: error.message, segmentName: 'focused-editor-races' }));
    focusedPage.on('console', message => { if (message.type() === 'error') consoleErrors.push({ type: 'console', text: message.text(), segmentName: 'focused-editor-races' }); });
    focusedPage.on('requestfailed', request => browserFailures.push({ url: request.url(), error: request.failure()?.errorText, segmentName: 'focused-editor-races' }));
    focusedPage.on('response', response => { if (response.status() >= 400) httpFailures.push({ url: response.url(), status: response.status(), segmentName: 'focused-editor-races' }); });
    await focusedPage.goto(harnessURL, { waitUntil: 'domcontentloaded' });
    await focusedPage.waitForFunction(() => Boolean(window.__dotsQAApp), null, { timeout: 15_000 });
    const focusedReport = await runFocusedEditorRaces(focusedPage);
    await fs.writeFile(path.join(runRoot, 'focused-editor-races.json'), JSON.stringify({
      runId,
      sourceManifestSha256: createHash('sha256').update(sourceBytes).digest('hex'),
      scope: 'Focused current visual-editor asynchronous races and failed-thumbnail retry; no full 28-recipe, journey-video, or lifecycle-cycle claims.',
      focusedReport,
      consoleErrors,
      browserFailures,
      httpFailures
    }, null, 2));
    assertNoRuntimeErrors('focused editor race and thumbnail retry browser checks');
    await cycleContext.close();
    console.log('PASS: focused asynchronous editor races, failed thumbnail disable/Retry/recovery, and late-session isolation.');
    console.log(`EVIDENCE: ${path.relative(repoRoot, runRoot)}`);
  } else {
  const engineeringSession = await newRecordedPage('real-28-recipes');
  await engineeringSession.page.exposeFunction('__writeStudioEvidence', writeEvidence);
  engineeringReport = await renderAllRealConfigurations(engineeringSession.page);
  await fs.writeFile(path.join(runRoot, 'real-28-recipes.json'), JSON.stringify(engineeringReport, null, 2));
  assertNoRuntimeErrors('real 28-recipe browser renderer');
  await finishSegment(engineeringSession, path.join(videoStageRoot, 'real-28-recipes.webm'));

  const characterFlows = [
    {
      label: 'dots',
      artworkId: 'candidate-dots-20261005',
      options: { color: 'warm-yellow', eyes: 'closed', glasses: 'none', accessory: 'none' },
      expectedRecipe: options => options.color === 'warm-yellow' && options.eyes === 'closed' && options.glasses === 'none' && options.accessory === 'none'
    },
    {
      label: 'grok',
      artworkId: 'candidate-grok-20261005',
      options: { color: 'mint', eyes: 'upright-capsules', glasses: 'round', accessory: 'soft-cap' },
      expectedRecipe: options => options.color === 'mint' && options.eyes === 'upright-capsules' && options.glasses === 'round' && options.accessory === 'soft-cap'
    }
  ];
  const selectedCharacterFlows = characterFlows;
  const flowEvidence = [];
  for (const config of selectedCharacterFlows) {
    const appSession = await newRecordedPage(`${config.label}-wysiwyg-export`);
    const { page } = appSession;
    const artwork = await openArtwork(page, config.artworkId);
    assert.ok(artwork.version, 'The selected Artwork has a pinned version.');
    const initialPreview = await waitForPreview(page, { expectNoOriginal: true });
    assert.equal(initialPreview.editable, true, 'This Artwork opens through its publicly approved exact Template binding.');
    const templateId = config.label === 'dots' ? 'dots-orb-v1' : 'grok-orb-v1';
    await waitForEditor(page, { templateId });
    assert.equal(await page.locator('.studio-original').evaluate(details => details.open), false, 'Editable Artwork keeps original metadata and original actions collapsed.');
    await fs.writeFile(path.join(screenshotRoot, `${config.label}-studio-initial.png`), await page.screenshot({ fullPage: false }));
    for (const [field, value] of Object.entries(config.options)) await choose(page, field, value);
    await waitForEditor(page, { templateId });
    const rendered = await page.evaluate(() => {
      const canvas = document.querySelector('.studio-editor-canvas');
      const draft = window.__dotsQAApp.detail.getState().draft;
      const context = canvas.getContext('2d', { alpha: true, willReadFrequently: true });
      const data = context.getImageData(627, 800, 1, 1).data;
      return { options: draft.options, revision: draft.revision, sessionId: draft.sessionId, canvasRevision: Number(canvas.dataset.renderRevision), recipeKey: canvas.dataset.recipeKey, colorSample: [...data], previewWidth: canvas.width, previewHeight: canvas.height, canExport: document.querySelector('.studio-editor-controls[data-can-export]')?.dataset.canExport };
    });
    assert.deepEqual(Object.fromEntries(Object.entries(config.options)), Object.fromEntries(Object.entries(rendered.options).filter(([key]) => key !== 'shape')));
    assert.equal(rendered.revision, rendered.canvasRevision, 'The visible preview uses the latest Draft revision.');
    assert.equal(rendered.canExport, 'true', 'The latest real composition is exportable only after successful render.');
    await fs.writeFile(path.join(screenshotRoot, `${config.label}-studio-current.png`), await page.screenshot({ fullPage: false }));

    assert.equal(await page.locator('.studio-actions [data-action="copy-prompt"],.studio-actions [data-action="open-chatgpt"],.studio-actions [data-action="export"]').count(),3,'The editable detail exposes exactly the three main actions.');
    assert.equal(await page.locator('.studio-editor-controls button[data-action="export"],.studio-editor-controls button[data-action="reset"],.studio-editor-controls button[data-action="cancel"]').count(),0,'The Editor controls contain no duplicate export or Reset/Cancel actions.');
    const baseCanvas=await page.locator('.studio-draft-host canvas.studio-editor-canvas').evaluate(canvas=>canvas.toDataURL());
    const stateBeforeIntent=await page.evaluate(()=>window.__dotsQAApp.detail.getState());
    const extraDirection=config.label==='dots'?'Keep the compact round body and do not add limbs.':'Keep the paired soft capsule eyes and do not add limbs.';
    await page.locator('.artwork-detail__additional-direction').fill(extraDirection);
    const stateAfterIntent=await page.evaluate(()=>window.__dotsQAApp.detail.getState());
    const canvasAfterIntent=await page.locator('.studio-draft-host canvas.studio-editor-canvas').evaluate(canvas=>canvas.toDataURL());
    assert.equal(canvasAfterIntent,baseCanvas,'Additional prompt text does not redraw or alter the successful preview pixels.');
    assert.equal(stateAfterIntent.draft.revision,stateBeforeIntent.draft.revision,'Additional prompt text does not change the local render revision.');
    assert.equal(stateAfterIntent.promptReady,true);assert.equal(stateAfterIntent.exportReady,true);
    assert(stateAfterIntent.modifiedPrompt.includes(`${templateId}@v1, revision ${rendered.revision}`),'The unified Prompt describes the latest successful local preview revision.');
    for (const [field, value] of Object.entries(config.options)) assert(stateAfterIntent.modifiedPrompt.includes(`${field}: ${value}`), `Unified Prompt includes successful ${field}=${value}.`);
    assert(stateAfterIntent.modifiedPrompt.includes(extraDirection),'The additional intent is appended to the successful configuration Prompt.');
    assert.equal(JSON.stringify(stateAfterIntent.artwork),JSON.stringify(stateBeforeIntent.artwork),'Prompt-only intent leaves the registered Artwork facts unchanged.');
    await page.evaluate(() => {window.__copiedPrompt='';window.__openedPromptUrls=[];Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async value=>{window.__copiedPrompt=value;}}});window.__realWindowOpen=window.open;window.open=url=>{window.__openedPromptUrls.push(String(url));return null;};});
    await page.locator('.studio-actions [data-action="copy-prompt"]').click();await page.waitForFunction(()=>window.__copiedPrompt===window.__dotsQAApp.detail.getState().modifiedPrompt);assert.equal(await page.evaluate(()=>window.__copiedPrompt),stateAfterIntent.modifiedPrompt);
    await page.locator('.studio-actions [data-action="open-chatgpt"]').click();const openedPromptURL=await page.evaluate(()=>window.__openedPromptUrls.at(-1));assert.equal(new URL(openedPromptURL).searchParams.get('prompt'),stateAfterIntent.modifiedPrompt,'ChatGPT receives the same complete successful-revision Prompt as Copy Prompt.');

    const editedExport = await saveDownloadedPng(page, page.locator('.studio-actions [data-action="export"]'), 'Edited Draft');
    assert.equal(editedExport.header.colorType, 6, 'Edited export has alpha.');
    assert.equal(await page.evaluate(()=>window.__dotsQAApp.detail.hasDirty()),true,'Export does not clear the dirty local Draft or external intent.');
    const pngViewer = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT } });
    const pngPage = await pngViewer.newPage();
    await pngPage.goto(pathToFileURL(editedExport.filePath).href, { waitUntil: 'load' });
    await pngPage.waitForFunction(() => document.contentType === 'image/png' || document.querySelector('img')?.naturalWidth === 1254, null, { timeout: 10_000 });
    await fs.writeFile(path.join(screenshotRoot, `${config.label}-export-open.png`), await pngPage.screenshot({ fullPage: false }));
    await pngViewer.close();

    const beforeDisclosure = await page.evaluate(() => window.__dotsQAApp.detail.getState().draft);
    assert.equal(await page.locator('.studio-original').evaluate(details=>details.open),false,'Original Artwork metadata and Prompt start collapsed beside the active preview.');
    assert.equal(await page.locator('.studio-original>summary').isVisible(),true,'Editable Artwork exposes a read-only original-materials disclosure.');
    await page.locator('.studio-original>summary').click();
    assert.equal(await page.locator('.studio-original').evaluate(details => details.open), true);
    assert.equal(await page.locator('.studio-original .studio-artwork-info .artwork-detail__description').isVisible(), true, 'Original descriptive metadata appears inside its disclosure.');
    assert.equal(await page.locator('.studio-original .artwork-detail__tags .artwork-detail__tag').count()>0,true,'Original Artwork tags remain inside the read-only disclosure.');
    await page.locator('.studio-original .studio-prompt>summary').click();
    assert.equal(await page.locator('.studio-original .studio-prompt').evaluate(details=>details.open),true,'The immutable original Prompt remains available inside the read-only disclosure.');
    const retained = await page.evaluate(() => window.__dotsQAApp.detail.getState().draft);
    assert.equal(retained.sessionId, beforeDisclosure.sessionId, 'Opening original metadata does not replace the active Draft session.');
    assert.equal(retained.revision, beforeDisclosure.revision, 'Opening original metadata does not change the active Draft revision.');
    assert.deepEqual(retained.options, beforeDisclosure.options, 'The editor and options remain active beside original metadata.');
    const currentAfterDisclosure = await page.evaluate(() => ({ state: window.__dotsQAApp.detail.getState(), canvasRevision: document.querySelector('.studio-draft-host canvas.studio-editor-canvas')?.dataset.renderRevision ?? null }));
    assert.equal(currentAfterDisclosure.state.draft.revision, beforeDisclosure.revision, 'Opening original materials does not change the local Draft revision.');
    assert.equal(currentAfterDisclosure.canvasRevision, String(beforeDisclosure.revision), 'The same CharacterStudio preview remains visible beside original materials.');
    assert.equal(await page.locator('.studio-actions [data-action="export"]').count(), 1, 'CharacterStudio owns exactly one Edit Preview Export action.');
    assert.equal(await page.locator('.studio-original button,[data-action="download-original"],.artwork-detail__download-original').count(),0,'Read-only source material has no duplicate original-image button.');
    assertNoRuntimeErrors(`${config.label} WYSIWYG edit/export/original flow`);
    const report = {
      artwork: { id: artwork.id, version: artwork.version, originalSha256: artwork.asset.sha256 },
      initialStudioPreview: initialPreview,
      editedOptions: rendered.options,
      editedRevision: rendered.revision,
      editedRecipeKey: rendered.recipeKey,
      editedPNG: editedExport,
      originalSha256: artwork.asset.sha256,
      extraDirection,
      fullPromptSha256: createHash('sha256').update(stateAfterIntent.modifiedPrompt).digest('hex'),
      previewUnchangedByExtraPrompt: canvasAfterIntent === baseCanvas,
      disclosureRetainedSession: retained.sessionId === beforeDisclosure.sessionId,
      disclosureRetainedRevision: retained.revision === beforeDisclosure.revision,
      copiedPromptMatched: await page.evaluate(()=>window.__copiedPrompt)===stateAfterIntent.modifiedPrompt,
      chatPromptMatched: new URL(openedPromptURL).searchParams.get('prompt')===stateAfterIntent.modifiedPrompt,
      currentPreviewRevision: currentAfterDisclosure.canvasRevision
    };
    flowEvidence.push(report);
    await fs.writeFile(path.join(runRoot, `${config.label}-flow.json`), JSON.stringify(report, null, 2));
    await finishSegment(appSession, path.join(videoStageRoot, `${config.label}-app-flow.webm`));
  }

  const journeyVideos = [];
  for (const config of selectedCharacterFlows) {
    const journeySession = await newRecordedPage(`${config.label}-app-png-app-journey`);
    const { page } = journeySession;
    const firstArtwork = await openArtwork(page, config.artworkId);
    await waitForPreview(page, { expectNoOriginal: true });
    const templateId = config.label === 'dots' ? 'dots-orb-v1' : 'grok-orb-v1';
    await waitForEditor(page, { templateId });
    for (const [field, value] of Object.entries(config.options)) await choose(page, field, value);
    await waitForEditor(page, { templateId });
    const edited = await saveDownloadedPng(page, page.locator('.studio-actions [data-action="export"]'), 'Journey edited Draft');
    await page.goto(pathToFileURL(edited.filePath).href, { waitUntil: 'load' });
    await page.waitForFunction(() => document.contentType === 'image/png' || document.querySelector('img')?.naturalWidth === 1254, null, { timeout: 10_000 });
    await page.waitForTimeout(900);
    await fs.writeFile(path.join(screenshotRoot, `${config.label}-journey-png-view.png`), await page.screenshot({ fullPage: false }));

    await page.goto(harnessURL, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => Boolean(window.__dotsQAApp), null, { timeout: 15_000 });
    const reopenedArtwork = await openArtwork(page, config.artworkId);
    assert.equal(reopenedArtwork.asset.sha256, firstArtwork.asset.sha256, 'The round-trip reopens the exact same registered Artwork.');
    const reopenedPreview = await waitForPreview(page, { expectNoOriginal: true });
    assert.equal(reopenedPreview.editable, true, 'The pinned Artwork reopens directly into its one eligible CharacterStudio.');
    const reopenedBaseline=await page.evaluate(async()=>{const {TEMPLATE_REGISTRY}=await import('/studio-edit-templates.js?v=99');const state=window.__dotsQAApp.detail.getState();const template=TEMPLATE_REGISTRY.find(item=>item.id===state.templateId);return{options:state.draft.options,defaults:template.defaultOptions,dirty:window.__dotsQAApp.detail.hasDirty(),sessionId:state.sessionId};});
    assert.deepEqual(reopenedBaseline.options,reopenedBaseline.defaults,'Opening the same Artwork again starts at the approved template default, not the prior in-memory Draft.');assert.equal(reopenedBaseline.dirty,false);assert.equal(await page.locator('.studio-original').evaluate(details=>details.open),false);assert.equal(await page.locator('.studio-original button,.artwork-detail__download-original').count(),0);
    assertNoRuntimeErrors(`${config.label} recorded App → exported PNG → App journey`);
    const videoPath = path.join(videoStageRoot, `${config.label}-app-png-app-journey.webm`);
    await finishSegment(journeySession, videoPath);
    const journey = {
      artworkId: config.artworkId,
      editedPNG: edited,
      reopenedDefaultOptions: reopenedBaseline.options,
      sourceArtworkSha256: firstArtwork.asset.sha256,
      video: path.relative(evidenceRoot, videoPath),
      order: ['open eligible Artwork in CharacterStudio', 'edit and export transparent PNG', 'open exported PNG in browser image viewer', 'reopen same Artwork with its default configuration and unchanged source record']
    };
    journeyVideos.push(journey);
    await fs.writeFile(path.join(runRoot, `${config.label}-recorded-journey.json`), JSON.stringify(journey, null, 2));
  }

  let cycleReport = null;
  let raceReport = null;
  const guardSession = await newRecordedPage('dirty-exit-guards');
  const guardPage = guardSession.page;
  await openArtwork(guardPage, 'candidate-dots-20261005');
  await waitForEditor(guardPage, { templateId: 'dots-orb-v1' });
  await choose(guardPage, 'color', 'warm-yellow');
  await waitForEditor(guardPage, { templateId: 'dots-orb-v1' });
  await guardPage.locator('.artwork-detail__additional-direction').fill('Keep the Dots material compact and soft.');
  const dirtyState = await guardPage.evaluate(() => ({ dirty: window.__dotsQAApp.detail.hasDirty(), hash: location.hash, promptReady: window.__dotsQAApp.detail.getState().promptReady, exportReady: window.__dotsQAApp.detail.getState().exportReady }));
  assert.equal(dirtyState.dirty, true, 'A local option change marks the current Studio dirty.');
  assert.equal(dirtyState.promptReady,true);assert.equal(dirtyState.exportReady,true);
  const deniedExits = [];
  for (const [name, action] of [
    ['Escape', () => guardPage.keyboard.press('Escape')],
    ['overlay close', () => guardPage.locator('#overlayClose').click()],
    ['overlay back', () => guardPage.locator('#overlayBack').click()],
    ['Characters gallery navigation', () => guardPage.evaluate(() => { location.hash = '#/?series=grok'; })]
  ]) {
    if (name === 'overlay close') await guardPage.locator('#overlayClose').focus();
    else if (name === 'overlay back') await guardPage.locator('#overlayBack').focus();
    else await guardPage.locator('.artwork-detail__additional-direction').focus();
    const before = await guardPage.evaluate(() => location.hash);
    const focusBefore = await guardPage.evaluate(() => ({ tag: document.activeElement?.tagName, id: document.activeElement?.id, className: typeof document.activeElement?.className === 'string' ? document.activeElement.className : '' }));
    const dialogEvent = guardPage.waitForEvent('dialog', { timeout: 5_000 });
    const actionResult = action().catch(error => error);
    let dialog;
    try {
      dialog = await dialogEvent;
    } catch (error) {
      console.error(JSON.stringify({ failedExit: name, dialogOpen: await guardPage.locator('#studioOverlay').evaluate(element => element.open), focused: await guardPage.evaluate(() => ({ tag: document.activeElement?.tagName, id: document.activeElement?.id, className: document.activeElement?.className })), hash: await guardPage.evaluate(() => location.hash), dirty: await guardPage.evaluate(() => window.__dotsQAApp.detail.hasDirty()) }, null, 2));
      throw error;
    }
    deniedExits.push({ name, message: dialog.message() });
    await dialog.dismiss();
    await actionResult;
    await guardPage.waitForTimeout(80);
    assert.equal(await guardPage.evaluate(() => location.hash), before, `${name} dismissal keeps the current Artwork route.`);
    assert.equal(await guardPage.evaluate(() => window.__dotsQAApp.detail.hasDirty()), true, `${name} dismissal keeps Draft intent.`);
    const focusAfter = await guardPage.evaluate(() => ({ tag: document.activeElement?.tagName, id: document.activeElement?.id, className: typeof document.activeElement?.className === 'string' ? document.activeElement.className : '' }));
    assert.deepEqual(focusAfter, focusBefore, `${name} dismissal preserves the focused control.`);
  }
  assert.equal(await guardPage.locator('.studio-nav a[data-page="guide"],#guidePortal').count(),0,'No Guide exit route remains in the shell.');
  assert.equal(await guardPage.locator('.studio-related').evaluate(section=>section.tagName==='SECTION'&&!section.querySelector('summary')) ,true,'Related artworks remain directly visible under the media preview.');
  await guardPage.locator('.related-character').first().waitFor({ state: 'visible', timeout: 10_000 });
  const relatedBefore = await guardPage.evaluate(() => location.hash);
  const relatedDialogPromise = guardPage.waitForEvent('dialog', { timeout: 5_000 });
  const relatedButton = guardPage.locator('.related-character').first();
  const relatedClick = relatedButton.click().catch(error => error);
  const relatedDialog = await relatedDialogPromise;
  deniedExits.push({ name: 'related Artwork navigation', message: relatedDialog.message() });
  await relatedDialog.dismiss();
  await relatedClick;
  await guardPage.waitForTimeout(80);
  assert.equal(await guardPage.evaluate(() => location.hash), relatedBefore, 'Canceling a related Artwork navigation leaves the same Studio open.');
  assert.equal(await relatedButton.evaluate(element => document.activeElement === element), true, 'Canceling related Artwork navigation preserves focus on its trigger.');
  await fs.writeFile(path.join(runRoot, 'dirty-exit-guards.json'), JSON.stringify({ tested: deniedExits, dirtyState }, null, 2));
  assertNoRuntimeErrors('dirty exit guard flow');
  await finishSegment(guardSession, path.join(videoStageRoot, 'dirty-exit-guards.webm'));

  const cycleContext = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT }, acceptDownloads: true, reducedMotion: 'reduce' });
  const cyclePage = await cycleContext.newPage();
  cyclePage.on('pageerror', error => consoleErrors.push({ type: 'pageerror', text: error.message, segmentName: '20-edit-cycles' }));
  cyclePage.on('console', message => { if (message.type() === 'error') consoleErrors.push({ type: 'console', text: message.text(), segmentName: '20-edit-cycles' }); });
  cyclePage.on('requestfailed', request => browserFailures.push({ url: request.url(), error: request.failure()?.errorText, segmentName: '20-edit-cycles' }));
  cyclePage.on('response', response => { if (response.status() >= 400) httpFailures.push({ url: response.url(), status: response.status(), segmentName: '20-edit-cycles' }); });
  await cyclePage.goto(harnessURL, { waitUntil: 'domcontentloaded' });
  await cyclePage.waitForFunction(() => Boolean(window.__dotsQAApp), null, { timeout: 15_000 });
  cycleReport = await runTwentyEditCycles(cyclePage);
  await fs.writeFile(path.join(runRoot, '20-edit-cycles.json'), JSON.stringify(cycleReport, null, 2));
  raceReport = await runFocusedEditorRaces(cyclePage);
  await fs.writeFile(path.join(runRoot, 'editor-races.json'), JSON.stringify(raceReport, null, 2));
  assertNoRuntimeErrors('20 real-source editor lifecycle cycles');
  await cycleContext.close();
  const report = {
    runId,
    scope: 'Complete public approval-path Dots and Grok Template editing acceptance.',
    baseURL,
    harnessURL,
    browser: 'Project Playwright QA runner with installed local Chrome; automated interaction and downloads are from Playwright. Codex in-app browser was used for visual inspection only; no interaction pass is claimed.',
    viewport: [WIDTH, HEIGHT],
    sourceManifestSha256: createHash('sha256').update(sourceBytes).digest('hex'),
    actualAssetRows: sourceManifest.assets.length,
    engineeringReport,
    editingCycles: cycleReport,
    editorRaces: raceReport,
    flows: flowEvidence,
    journeyVideos,
    dirtyExitGuards: JSON.parse(await fs.readFile(path.join(runRoot, 'dirty-exit-guards.json'), 'utf8')),
    observedDisplayAndTemplateRequests: networkEvidence,
    consoleErrors,
    browserFailures,
    httpFailures,
    videoSegments: allVideoSegments.map(row => ({ segmentName: row.segmentName, path: path.relative(evidenceRoot, row.path) }))
  };
  await fs.writeFile(path.join(runRoot, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`PASS: ${engineeringReport.templates.map(row => row.legalCount + ' ' + row.templateId).join(' + ')} real-source recipes rendered and exported.`);
  console.log('PASS: preview Canvas and PNG export hashes match for all 28 legal recipes through public approved-template access.');
  if (cycleReport.cycles) console.log(`PASS: ${cycleReport.cycles.length} rapid edit/render/export/destroy cycles; ${cycleReport.totalCanceledConsumerCount} stale consumers canceled during edits; ${cycleReport.pendingDestroy.pendingFetchAborts} pending fetch aborts observed on Editor.destroy(); all per-cycle resources released.`);
  if (raceReport.outOfOrder) console.log('PASS: A→B→A out-of-order render, latest missing-layer failure/retry, and close-late-session races.');
  console.log(`PASS: ${selectedCharacterFlows.map(config => config.label).join(' and ')} automatic CharacterStudio editing → unified Prompt → transparent PNG export → original-materials disclosure.`);
  console.log(`PASS: Recorded ${selectedCharacterFlows.map(config => config.label).join(' and ')} single-page journeys reopen the same Artwork at its Template default after viewing the exported PNG.`);
  console.log('PASS: dirty Escape, Close, Back, Characters navigation, and related Artwork navigation were canceled without leaving the Draft.');
  console.log(`EVIDENCE: ${path.relative(repoRoot, runRoot)}`);
  }
} finally {
  await browser.close();
  if (harnessServer) await harnessServer.close();
}
