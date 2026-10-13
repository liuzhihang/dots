import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createServer } from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import { TEMPLATE_REGISTRY, enumerateValidConfigurations, getTemplateOptionFields } from '../dist/studio-edit-templates.js?v=102';

const execFileAsync = promisify(execFile);
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const evidenceRoot = resolveEvidenceDirectory('.artifacts/studio-editing');
const harnessFixtureRoot = path.join(repoRoot, 'scripts/fixtures/editor');
const manifestPath = path.join(repoRoot, 'dist/assets/templates/sources.json');
const runId = new Date().toISOString().replace(/[:.]/g, '-');
const runRoot = path.join(evidenceRoot, `run-${runId}`);
const compositeRoot = path.join(runRoot, 'composites');
const downloadRoot = path.join(runRoot, 'downloads');
const screenshotRoot = path.join(runRoot, 'screenshots');
const videoStageRoot = path.join(runRoot, 'video-segments');
const WIDTH = 1440;
const HEIGHT = 900;
const focusedRaceOnly = process.argv.includes('--focused-race-only');
const focusedCycleOnly = process.argv.includes('--focused-cycle-only');
const focusedCycleRaceOnly = process.argv.includes('--focused-cycle-race-only');
const TAB_FOR_FIELD = Object.freeze({ appearance: 'appearance', colors: 'colors', face: 'face', clothing: 'clothing', accessories: 'accessories', color: 'colors', eyes: 'face', glasses: 'accessories', accessory: 'accessories' });

function configurationFlow(template) {
  const fields = getTemplateOptionFields(template).map(row => row.key);
  const key = options => JSON.stringify(fields.map(field => options[field]));
  const configurations = enumerateValidConfigurations(template);
  const paths = new Map([[key(template.defaultOptions), []]]);
  const queue = [template.defaultOptions];
  while (queue.length) {
    const current = queue.shift();
    for (const next of configurations) {
      const changes = fields.filter(field => current[field] !== next[field]);
      if (changes.length !== 1 || paths.has(key(next))) continue;
      paths.set(key(next), [...paths.get(key(current)), [changes[0], next[changes[0]]]]);
      queue.push(next);
    }
  }
  assert.equal(paths.size, configurations.length, `${template.id}: every legal recipe is reachable through visible single-option controls.`);
  const target = configurations.reduce((best, row) => paths.get(key(row)).length > paths.get(key(best)).length ? row : best);
  const steps = paths.get(key(target));
  assert(steps.length > 0, `${template.id}: public editing has an actual changed recipe.`);
  return { label: template.id, templateId: template.id, artworkId: template.artworkBinding.artworkId, artworkVersion: template.artworkBinding.artworkVersion, options: Object.fromEntries(fields.map(field => [field, target[field]])), steps };
}

for (const directory of [runRoot, compositeRoot, downloadRoot, screenshotRoot, videoStageRoot]) {
  await fs.mkdir(directory, { recursive: true });
}

const sourceBytes = await fs.readFile(manifestPath);
const sourceManifest = JSON.parse(sourceBytes.toString('utf8'));
assert.equal(sourceManifest.schemaVersion, 1, 'Runtime template manifest must use the installed schema.');
assert.deepEqual(new Set(sourceManifest.templates.map(row => row.id)), new Set(TEMPLATE_REGISTRY.map(row => row.id)), 'The runtime manifest covers the actual public Template registry.');
const approvedLayerRecords = new Map();
for (const template of sourceManifest.templates) {
  const approvalPath = path.resolve(repoRoot, template.artApproval.record);
  const approval = JSON.parse(await fs.readFile(approvalPath, 'utf8'));
  const approvedTemplate = approval.scope.templates.find(row => row.id === template.id);
  assert(approval.scope.publicEditability.approvedTemplateIds.includes(template.id), `${template.id} is explicitly in its exact approval record.`);
  assert(approvedTemplate, `${template.id} has a versioned approved template record.`);
  assert.equal(template.status, 'approved', `${template.id} runtime status follows approval.`);
  assert.equal(template.engineeringStatus, 'passed', `${template.id} has passed engineering checks.`);
  assert.equal(template.publicEditable, true, `${template.id} is publicly editable.`);
  assert.equal(template.artApproval.approvalId, approval.approvalId, `${template.id} points to the current approval record.`);
  assert.equal(template.artApproval.record, path.relative(repoRoot, approvalPath), `${template.id} names the current approval evidence.`);
  assert.equal(approvedTemplate.version, template.version, `${template.id} version is exact.`);
  for (const asset of approvedTemplate.sourceAssets) approvedLayerRecords.set(`${asset.id}|${asset.version}|${asset.purpose}`, asset);
}
for (const row of sourceManifest.assets) {
  const bytes = await fs.readFile(path.join(repoRoot, 'dist', row.path.replace(/^\.\//, '')));
  assert.equal(bytes.length, row.byteSize, `Byte size matches ${row.id}.`);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), row.sha256, `SHA-256 matches ${row.id}.`);
  const header = parsePngHeader(bytes);
  assert.equal(row.width, header.width, `Registered width matches the actual PNG for ${row.id}.`);
  assert.equal(row.height, header.height, `Registered height matches the actual PNG for ${row.id}.`);
  assert.equal(row.mime, 'image/png', `Template source is PNG: ${row.id}.`);
  assert.equal(row.status, 'approved', `The public Template layer is approved: ${row.id}.`);
  const approvedAsset = approvedLayerRecords.get(`${row.id}|${row.version}|${row.purpose}`);
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
    root: path.resolve(process.env.DOTS_QA_DIST || path.join(repoRoot, 'dist')),
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

const browser = await launchBrowser({ headless: true });
const browserFailures = [];
const consoleErrors = [];
const httpFailures = [];
const networkEvidence = [];
const allVideoSegments = [];
let engineeringReport;

function assertNoRuntimeErrors(label, { allowedBrowserFailures = [], segmentName = null } = {}) {
  const relevant = consoleErrors.filter(item => !item.text.includes('favicon.ico') && (!segmentName || item.segmentName === segmentName));
  assert.deepEqual(relevant, [], `${label}: browser console has no errors.`);
  const allowed = new Set(allowedBrowserFailures);
  assert.deepEqual(browserFailures.filter(item => (!segmentName || item.segmentName === segmentName) && !allowed.has(item)), [], `${label}: browser has no unexpected failed requests.`);
  assert.deepEqual(httpFailures.filter(row => !row.url.endsWith('/favicon.ico') && (!segmentName || row.segmentName === segmentName)), [], `${label}: browser responses have no HTTP errors.`);
}

function matchSignalAbortFailures(failures, observations, segmentName) {
  const keyForURL = value => {
    const url = new URL(value);
    return `${url.origin}${url.pathname}${url.search}`;
  };
  const abortsByURL = new Map();
  for (const observation of observations) {
    if (observation.segmentName !== segmentName || observation.signalAborted !== true || observation.outcome !== 'rejected' || observation.errorName !== 'AbortError') continue;
    const key = keyForURL(observation.url);
    if (!abortsByURL.has(key)) abortsByURL.set(key, []);
    abortsByURL.get(key).push(observation);
  }
  const allowed = [];
  for (const failure of failures) {
    if (failure.segmentName !== segmentName || failure.error !== 'net::ERR_ABORTED') continue;
    const key = keyForURL(failure.url);
    const candidates = abortsByURL.get(key) || [];
    if (candidates.length === 0) continue;
    const observation = candidates.shift();
    failure.matchedSignalAbort = {
      url: observation.url,
      origin: observation.origin,
      pathAndQuery: observation.pathAndQuery,
      segmentName: observation.segmentName,
      signalAborted: observation.signalAborted,
      outcome: observation.outcome,
      errorName: observation.errorName,
      rejectedStage: observation.rejectedStage,
      responseStatus: observation.responseStatus,
      startedAtMs: observation.startedAtMs,
      abortedAtMs: observation.abortedAtMs,
      initiatorStack: observation.initiatorStack
    };
    allowed.push(failure);
  }
  return allowed;
}

async function installPageFetchObserver(page, initialSegmentName) {
  await page.addInitScript(segmentName => {
    const nativeFetch = window.fetch.bind(window);
    const observations = [];
    window.__dotsQAFetchObservations = observations;
    window.__dotsQAFetchPhase = segmentName;
    window.fetch = (input, init = {}) => {
      const requestURL = typeof input === 'string' || input instanceof URL ? String(input) : input.url;
      const absoluteURL = new URL(requestURL, location.href);
      if (!/\/assets\/(characters|delivery|previews|templates)\//.test(absoluteURL.pathname)) return nativeFetch(input, init);
      const requestSignal = init.signal || (typeof Request !== 'undefined' && input instanceof Request ? input.signal : null);
      const observation = {
        url: absoluteURL.href,
        origin: absoluteURL.origin,
        pathAndQuery: `${absoluteURL.pathname}${absoluteURL.search}`,
        method: init.method || (typeof Request !== 'undefined' && input instanceof Request ? input.method : 'GET'),
        segmentName: window.__dotsQAFetchPhase || 'unattributed',
        startedAtMs: performance.now(),
        signalAborted: Boolean(requestSignal?.aborted),
        responseStatus: null,
        outcome: 'pending',
        initiatorStack: new Error().stack?.split('\n').slice(2, 8) || []
      };
      observations.push(observation);
      const onAbort = () => {
        observation.signalAborted = true;
        observation.abortedAtMs = performance.now();
      };
      requestSignal?.addEventListener('abort', onAbort, { once: true });
      if (requestSignal?.aborted) onAbort();
      let settled = false;
      const settle = () => {
        if (settled) return;
        settled = true;
        observation.settledAtMs = performance.now();
        requestSignal?.removeEventListener('abort', onAbort);
      };
      return nativeFetch(input, init).then(response => {
        observation.responseStatus = response.status;
        observation.headersAtMs = performance.now();
        observation.outcome = 'headers-received';
        let bodyReaderInstalled = false;
        for (const method of ['arrayBuffer', 'blob', 'formData', 'json', 'text']) {
          if (typeof response[method] !== 'function') continue;
          bodyReaderInstalled = true;
          const readBody = response[method].bind(response);
          response[method] = (...args) => Promise.resolve(readBody(...args)).then(value => {
            observation.outcome = 'body-read';
            return value;
          }, error => {
            observation.outcome = 'rejected';
            observation.rejectedStage = 'body';
            observation.errorName = error?.name || 'Error';
            observation.errorMessage = String(error?.message || error);
            throw error;
          }).finally(settle);
        }
        if (!bodyReaderInstalled || response.body === null) settle();
        return response;
      }, error => {
        observation.outcome = 'rejected';
        observation.rejectedStage = 'fetch';
        observation.errorName = error?.name || 'Error';
        observation.errorMessage = String(error?.message || error);
        settle();
        throw error;
      });
    };
  }, initialSegmentName);
}

async function newRecordedPage(segmentName) {
  const context = await browser.newContext({
    viewport: { width: WIDTH, height: HEIGHT },
    acceptDownloads: true,
    permissions: ['clipboard-read', 'clipboard-write'],
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
    if (/\/assets\/(characters|previews|posters|templates|delivery)\//.test(url)) networkEvidence.push({ url, segmentName });
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

async function openArtwork(page, artworkId, artworkVersion) {
  const result = await page.evaluate(async ({ id, version }) => {
    const { ARTWORKS, getAsset } = await import('/studio-artwork-catalog.js?v=102');
    const artwork = ARTWORKS.find(row => row.id === id && row.version === version);
    if (!artwork) throw new Error(`Artwork not found: ${id}`);
    const opened = window.__dotsQAApp.openArtwork(artwork.id, artwork.version);
    return { id: artwork.id, version: artwork.version, opened, publicationStatus: artwork.publicationStatus, asset: getAsset(artwork.assetRefs?.original) };
  }, { id: artworkId, version: artworkVersion });
  assert.equal(result.version, artworkVersion, 'The UI journey opens the exact template-bound Artwork version.');
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
      requests: performance.getEntriesByType('resource').filter(entry => /assets\/(posters|previews|characters|templates|delivery)/.test(entry.name)).map(entry => entry.name)
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
      assetRequests: performance.getEntriesByType('resource').map(entry => entry.name).filter(url => /\/assets\/(characters|previews|posters|templates|delivery)\//.test(url))
    };
  });
  assert.ok(info.src.startsWith('blob:'), 'The registered sharper preview is decoded while the CharacterStudio canvas is active.');
  assert.ok(info.assetRequests.some(url => /\/assets\/(posters|previews|delivery)\//.test(url)), 'The Artwork loaded a registered display derivative.');
  if (info.editable) assert.equal(info.canvasRevision, info.draftRevision, 'An eligible Artwork opens directly to a successful matching local preview.');
  if (expectNoOriginal) assert.ok(!info.assetRequests.some(url => url.includes('/assets/characters/')), 'Viewing and editing did not fetch the original artwork PNG.');
  assert.ok(info.assetRequests.every(url => !url.includes('/@fs/')), 'Studio did not request a Vite filesystem URL.');
  return info;
}

async function waitForEditor(page, config) {
  const fields = getTemplateOptionFields(TEMPLATE_REGISTRY.find(row => row.id === config.templateId)).map(row => row.key);
  const tabs = [...new Set(fields.map(field => TAB_FOR_FIELD[field]))];
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
  for (const tabKey of tabs) {
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
        return ['color', 'colors'].includes(button.dataset.field)
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
        conflict: button.dataset.conflict || '',
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
  for (const field of fields) {
    assert.equal(visualOptions.filter(option => option.field === field && option.pressed).length, 1, `${config.templateId} exposes one visibly selected ${field} button.`);
  }
  assert.ok(visualOptions.every(option => option.disabled === Boolean(option.conflict)), `${config.templateId} disables only incompatible choices and supplies their reason.`);
  assert.ok(visualOptions.filter(option => option.pressed).every(option => !option.disabled), 'The selected legal recipe remains available.');
  assert.ok(visualOptions.filter(option => ['color', 'colors'].includes(option.field)).every(option => option.colorSwatch), `${config.templateId} color choices use visible swatches.`);
  assert.ok(visualOptions.filter(option => !['color', 'colors'].includes(option.field) && option.optionId === 'none').every(option => option.thumbnailState === 'empty'), `${config.templateId} explicit no-layer options are visibly empty.`);
  assert.ok(visualOptions.filter(option => !['color', 'colors'].includes(option.field) && option.optionId !== 'none').every(option => option.thumbnailState === 'ready' && option.thumbnailCanvas && option.thumbnailAssets.length > 0 && option.thumbnailAlphaPixels > 0), `${config.templateId} real layer choices show nonempty-alpha canvas thumbnails.`);
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
  await page.waitForFunction(() => { const state=window.__dotsQAApp.detail.getState();const canvas=document.querySelector('.studio-editor-canvas');return state.promptReady&&state.exportReady&&canvas&&Number(canvas.dataset.renderRevision)===state.draft?.revision; }, null, { timeout: 30_000 });
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

let downloadSequence = 0;
async function saveDownloadedPng(page, target, evidenceKind) {
  const expected = await page.locator('.studio-editor-canvas').evaluate(canvas => ({ width: canvas.width, height: canvas.height }));
  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 45_000 }),
    target.click()
  ]);
  const filePath = path.join(downloadRoot, `${String(++downloadSequence).padStart(4, '0')}-${download.suggestedFilename()}`);
  await download.saveAs(filePath);
  const bytes = await fs.readFile(filePath);
  const header = parsePngHeader(bytes);
  assert.equal(header.width, expected.width, `${evidenceKind} PNG has the successful preview width.`);
  assert.equal(header.height, expected.height, `${evidenceKind} PNG has the successful preview height.`);
  assert.equal(header.bitDepth, 8, `${evidenceKind} PNG uses 8-bit channels.`);
  assert.equal(header.colorType, 6, `${evidenceKind} PNG stores real RGBA alpha.`);
  return { filePath, filename: download.suggestedFilename(), sha256: createHash('sha256').update(bytes).digest('hex'), byteSize: bytes.length, header };
}

async function verifyEveryRecipeThroughControls(page, template, artwork, rendererReport) {
  const fields = getTemplateOptionFields(template).map(field => field.key);
  const configurations = enumerateValidConfigurations(template);
  const key = options => JSON.stringify(fields.map(field => options[field]));
  async function navigateTo(target) {
    const current = await page.evaluate(() => window.__dotsQAApp.detail.getState().draft.options);
    const routes = new Map([[key(current), []]]), queue = [current];
    while (queue.length && !routes.has(key(target))) {
      const from = queue.shift();
      for (const next of configurations) {
        const differences = fields.filter(field => from[field] !== next[field]);
        if (differences.length !== 1 || routes.has(key(next))) continue;
        routes.set(key(next), [...routes.get(key(from)), [differences[0], next[differences[0]]]]);
        queue.push(next);
      }
    }
    assert(routes.has(key(target)), `${template.id}: target is reachable by legal UI changes.`);
    for (const [field, value] of routes.get(key(target))) await choose(page, field, value);
  }
  const records = [];
  for (const options of configurations) {
    await navigateTo(options);
    const state = await page.evaluate(() => window.__dotsQAApp.detail.getState());
    assert.equal(key(state.draft.options), key(options));
    assert(state.promptReady && state.exportReady, 'Only the matching successful revision is exported.');
    await page.locator('.studio-actions [data-action="copy-prompt"]').click();
    await page.waitForFunction(async expected => await navigator.clipboard.readText() === expected, state.modifiedPrompt, { timeout: 5000 });
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    assert.equal(clipboard, state.modifiedPrompt, 'Real browser clipboard contains this recipe’s successful Prompt.');
    const downloaded = await saveDownloadedPng(page, page.locator('.studio-actions [data-action="export"]'), 'Every-recipe UI export');
    const baseline = key(options) === key(template.defaultOptions);
    const rendered = rendererReport.configurations.find(row => key(row.options) === key(options));
    assert(rendered, 'The UI recipe has independent renderer evidence.');
    assert.equal(downloaded.sha256, baseline ? artwork.asset.sha256 : rendered.outputSha256, baseline ? 'Default export preserves approved original bytes.' : 'Changed export matches the independently rendered transparent recipe.');
    records.push({ options, recipeKey: rendered.recipeKey, revision: state.draft.revision, clipboardSha256: createHash('sha256').update(clipboard).digest('hex'), clipboardMatched: true, originalByteExport: baseline, download: downloaded });
  }
  await navigateTo(template.defaultOptions);
  assert.equal(records.length, configurations.length);
  return records;
}

async function renderAllRealConfigurations(page) {
  const browserOutput = await page.evaluate(async () => {
    const [catalog, templates, draftAPI, renderer, loaderAPI, promptAPI] = await Promise.all([
      import('/studio-artwork-catalog.js?v=102'),
      import('/studio-edit-templates.js?v=102'),
      import('/studio-draft.js?v=102'),
      import('/studio-renderer.js?v=102'),
      import('/studio-preview-loader.js?v=102'),
      import('/studio-prompt.js?v=102')
    ]);
    const manifestResponse = await fetch('/assets/templates/sources.json', { cache: 'no-cache' });
    if (!manifestResponse.ok) throw new Error(`Manifest fetch failed (${manifestResponse.status}).`);
    const manifest = await manifestResponse.json();
    const loader = loaderAPI.createPreviewLoader();
    loader.registerAssets(manifest.assets);
    const report = { manifestAssetCount: manifest.assets.length, templates: [], reviewBackgrounds: [], loaderBeforeRelease: null, loaderAfterRelease: null };
    for (const templateDefinition of templates.TEMPLATE_REGISTRY) {
      const artwork = catalog.ARTWORKS.find(row => row.id === templateDefinition.artworkBinding.artworkId && row.version === templateDefinition.artworkBinding.artworkVersion);
      if (!artwork) throw new Error(`No exact Artwork binding for ${templateDefinition.id}.`);
      const template = templates.getTemplateForArtwork(artwork);
      if (!template || template.status !== 'approved' || template.engineeringStatus !== 'passed' || template.artApproval?.status !== 'approved') throw new Error(`Public approved-template access is unavailable for ${templateDefinition.id}.`);
      const configurations = templates.enumerateValidConfigurations(template);
      const references = configurations.flatMap(options => templates.getRequiredTemplateAssets(template, options));
      const rows = manifest.assets.filter(row => references.some(ref => ref.id === row.id && ref.version === row.version && ref.purpose === row.purpose));
      if (references.some(ref => !rows.some(row => ref.id === row.id && ref.version === row.version && ref.purpose === row.purpose))) throw new Error(`${template.id}: a required layer or thumbnail is unregistered.`);
      const baseDraft = draftAPI.createDraft({ artwork, template, sessionId: `all-configs-${template.id}` });
      const templateReport = { templateId: template.id, artworkId: artwork.id, artworkVersion: artwork.version, status: template.status, engineeringStatus: template.engineeringStatus, artApprovalId: template.artApproval.approvalId, publicEditable: true, assetCount: rows.length, legalCount: configurations.length, configurations: [] };
      for (let index = 0; index < configurations.length; index += 1) {
        const options = configurations[index];
        const draft = draftAPI.updateDraft(baseDraft, options, { template });
        const result = await renderer.renderDraft({ draft, template, loader, assetRegistry: rows, sessionId: draft.sessionId });
        const snapshot = renderer.createExportSnapshot(result);
        const promptChecks = ['en', 'zh'].map(language => {
          const text = promptAPI.buildConfigurationPrompt({ artwork, template, snapshot, language });
          const locale = language === 'en' ? 'en' : 'zh-CN';
          for (const field of templates.getTemplateOptionFields(template)) {
            const option = field.options.find(row => row.id === snapshot.options[field.key]);
            const semantic = option.semanticByLanguage?.[locale] || option.labelByLanguage?.[locale];
            if (!semantic || !text.includes(semantic)) throw new Error(`${template.id}: ${language} Prompt differs from successful ${field.key} semantics.`);
          }
          return { language, text, revision: snapshot.revision, recipeKey: snapshot.recipeKey };
        });
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
        if (!alphaNonzero || !alphaTransparent) throw new Error(`${template.id}: recipe must contain actual subject pixels and transparent pixels.`);
        const sample = context.getImageData(Math.floor(result.width / 2), Math.floor(result.height * 0.64), 1, 1).data;
        const stem = `${template.id}-${String(index + 1).padStart(2, '0')}`;
        const bytes = new Uint8Array(outBytes);
        let binary = '';
        for (let offset = 0; offset < bytes.length; offset += 0x8000) binary += String.fromCharCode(...bytes.subarray(offset, Math.min(offset + 0x8000, bytes.length)));
        await window.__writeStudioEvidence(`composites/${stem}.png`, btoa(binary));
        {
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
          promptChecks,
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
      const fieldKeys = templates.getTemplateOptionFields(template).map(row => row.key);
      templateReport.optionPixelWitnesses = templates.getTemplateOptionFields(template).flatMap(field => field.options.map(option => {
        for (const selected of templateReport.configurations.filter(row => row.options[field.key] === option.id)) {
          const neighbor = templateReport.configurations.find(row => row.options[field.key] !== option.id
            && fieldKeys.filter(key => key !== field.key).every(key => row.options[key] === selected.options[key])
            && row.outputSha256 !== selected.outputSha256);
          if (neighbor) return { field: field.key, option: option.id, selectedRecipe: selected.recipeKey, comparisonRecipe: neighbor.recipeKey };
        }
        throw new Error(`${template.id}: ${field.key}=${option.id} lacks a legal single-field pixel-change witness.`);
      }));
      if (!rows.length) throw new Error(`${template.id} has no exact source rows.`);
      report.templates.push(templateReport);
    }
    report.loaderBeforeRelease = loader.stats();
    loader.releaseAll();
    report.loaderAfterRelease = loader.stats();
    return report;
  });
  const expectedRecipeCount = TEMPLATE_REGISTRY.reduce((sum, template) => sum + enumerateValidConfigurations(template).length, 0);
  assert.equal(browserOutput.templates.reduce((sum, row) => sum + row.legalCount, 0), expectedRecipeCount, 'The real renderer completed every registered legal recipe.');
  assert.equal(browserOutput.templates.length, TEMPLATE_REGISTRY.length, 'Every actual public template was rendered exactly.');
  assert.equal(browserOutput.reviewBackgrounds.length, expectedRecipeCount, 'Every recipe has actual deep/light inspection composites.');
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
  const plansByTemplate = new Map(TEMPLATE_REGISTRY.map(template => {
    const fields = getTemplateOptionFields(template).map(row => row.key);
    const key = options => JSON.stringify(fields.map(field => options[field]));
    const configurations = enumerateValidConfigurations(template);
    const paths = new Map([[key(template.defaultOptions), []]]);
    const queue = [template.defaultOptions];
    while (queue.length) {
      const current = queue.shift();
      for (const next of configurations) {
        const changes = fields.filter(field => current[field] !== next[field]);
        if (changes.length !== 1 || paths.has(key(next))) continue;
        paths.set(key(next), [...paths.get(key(current)), [changes[0], next[changes[0]]]]);
        queue.push(next);
      }
    }
    assert.equal(paths.size, configurations.length, `${template.id}: every legal recipe is reachable through real single-field controls.`);
    const recipes = configurations.filter(options => key(options) !== key(template.defaultOptions)).map(options => ({
      templateId: template.id,
      artworkId: template.artworkBinding.artworkId,
      fields,
      options: Object.fromEntries(fields.map(field => [field, options[field]])),
      steps: paths.get(key(options))
    }));
    assert.ok(recipes.length > 0, `${template.id}: at least one non-default reachable recipe drives lifecycle stress.`);
    return [template.id, recipes];
  }));
  const cyclePlans = Array.from({ length: 20 }, (_, index) => {
    const templateDefinition = TEMPLATE_REGISTRY[index % TEMPLATE_REGISTRY.length];
    const recipes = plansByTemplate.get(templateDefinition.id);
    return recipes[Math.floor(index / TEMPLATE_REGISTRY.length) % recipes.length];
  });

  await page.evaluate(async ({ cyclePlans, tabForField }) => {
    const [catalog, templates, draftAPI, renderer, loaderAPI, editorAPI] = await Promise.all([
      import('/studio-artwork-catalog.js?v=102'),
      import('/studio-edit-templates.js?v=102'),
      import('/studio-draft.js?v=102'),
      import('/studio-renderer.js?v=102'),
      import('/studio-preview-loader.js?v=102'),
      import('/studio-editor.js?v=102')
    ]);
    const manifest = await fetch('/assets/templates/sources.json', { cache: 'no-cache' }).then(response => {
      if (!response.ok) throw new Error(`Manifest fetch failed (${response.status}).`);
      return response.json();
    });
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const referenceKey = reference => `${reference?.id || ''}\u0000${reference?.version || ''}\u0000${reference?.purpose || ''}`;
    const rowsForTemplate = template => {
      const references = new Map();
      const add = reference => {
        if (reference?.id && reference?.version && reference?.purpose) references.set(referenceKey(reference), reference);
      };
      for (const options of templates.enumerateValidConfigurations(template)) {
        for (const reference of templates.getRequiredTemplateAssets(template, options, { includeAllOptionThumbnails: true })) add(reference);
      }
      for (const field of templates.getTemplateOptionFields(template)) {
        for (const option of field.options) {
          const refs = templates.getTemplateOptionAssetRefs(template, field.key, option.id);
          for (const reference of [...refs.thumbnailAssets, ...refs.layerAssets, ...refs.maskAssets]) add(reference);
        }
      }
      const rows = [...references.values()].map(reference => {
        const row = manifest.assets.find(candidate => referenceKey(candidate) === referenceKey(reference));
        if (!row || typeof row.path !== 'string') throw new Error(`${template.id}: registered resource ${reference.id} has no exact manifest path/version/purpose.`);
        return row;
      });
      if (!rows.length) throw new Error(`${template.id}: no exact registered resources were found for its recipes.`);
      return rows;
    };
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
    window.__dotsRunEditorCycle = async (index, plan) => {
      const templateDefinition = templates.TEMPLATE_REGISTRY.find(row => row.id === plan.templateId);
      if (!templateDefinition) throw new Error(`Cycle ${index}: Template ${plan.templateId} is not in the runtime registry.`);
      const artwork = catalog.ARTWORKS.find(row => row.id === templateDefinition.artworkBinding.artworkId && row.version === templateDefinition.artworkBinding.artworkVersion);
      if (!artwork) throw new Error(`Cycle ${index}: exact bound Artwork is missing for ${templateDefinition.id}.`);
      const template = templates.getTemplateForArtwork(artwork);
      const rows = rowsForTemplate(template);
      let transportAbortCount = 0;
      const transportAbortURLs = [];
      const transportAbortObservations = [];
      const delayedFetch = (url, options = {}) => new Promise((resolve, reject) => {
        let settled = false;
        let networkFetchStarted = false;
        const signal = options.signal;
        const onAbort = () => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          transportAbortCount += 1;
          if (networkFetchStarted) {
            const requestURL = new URL(String(url), location.href);
            transportAbortURLs.push(`${requestURL.pathname}${requestURL.search}`);
            transportAbortObservations.push({ url: requestURL.href, origin: requestURL.origin, pathAndQuery: `${requestURL.pathname}${requestURL.search}`, signalAborted: true, abortedAtMs: performance.now() });
          }
          reject(new DOMException('Cycle fetch was canceled.', 'AbortError'));
        };
        const timer = setTimeout(() => {
          if (settled) return;
          networkFetchStarted = true;
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
      // Allow the default render to enter the pending state before rapid edits preempt it.
      await wait(35);
      const set = (field, value) => {
        const tabKey = tabForField[field] || field;
        const tab = editor.element.querySelector('.studio-editor-tab[data-editor-tab="' + tabKey + '"]');
        if (!tab) throw new Error(`Cycle is missing the registered ${field} tab (${tabKey}).`);
        tab.click();
        const panel = editor.element.querySelector('.studio-editor-category[role="tabpanel"][data-editor-tab="' + tabKey + '"]');
        if (tab.getAttribute('aria-selected') !== 'true' || !panel || panel.hidden) throw new Error(`Cycle failed to activate the visible ${field} panel.`);
        const control = panel.querySelector('button.studio-editor-option[data-field="' + field + '"][data-option-id="' + value + '"]');
        if (!control || control.disabled) throw new Error(`Cycle cannot reach registered ${field} option ${value} through the UI.`);
        control.click();
        if (editor.getDraft().options[field] !== value) throw new Error(`Cycle UI did not apply ${field}=${value}.`);
      };
      if (!Array.isArray(plan.steps) || plan.steps.length === 0) throw new Error(`Cycle ${index}: selected recipe has no legal UI route.`);
      let disabledDuringPending = false;
      for (let step = 0; step < plan.steps.length; step += 1) {
        const [field, value] = plan.steps[step];
        set(field, value);
        if (step === 0) disabledDuringPending = editor.getSnapshot() === null;
      }
      await wait(0);
      const canceledConsumersAfterRapidChange = loader.getCanceledConsumers();
      const pendingRequestsAfterRapidChange = loader.stats().pendingRequests;
      for (let attempt = 0; attempt < 300; attempt += 1) {
        if (status?.canExport && status.snapshot?.revision === editor.getDraft().revision) break;
        await wait(10);
      }
      if (!status?.canExport || status.snapshot?.revision !== editor.getDraft().revision) throw new Error(`Cycle ${index} never rendered its current Draft revision.`);
      for (const field of plan.fields) {
        if (editor.getDraft().options[field] !== plan.options[field]) throw new Error(`Cycle ${index} did not reach selected recipe field ${field}.`);
      }
      const finalOptions = Object.fromEntries(plan.fields.map(field => [field, editor.getDraft().options[field]]));
      const expectedRevision = editor.getDraft().revision;
      const currentCanvas = editor.previewElement.querySelector('canvas[data-render-revision]');
      if (Number(currentCanvas?.dataset.renderRevision) !== expectedRevision) throw new Error(`Cycle ${index} Canvas revision is stale.`);
      // A successful preview need not wait for every option thumbnail. Verify
      // those independent consumers eventually settle before measuring teardown.
      for (let attempt = 0; attempt < 300; attempt += 1) {
        const stats = loader.stats();
        if (stats.pendingRequests === 0 && stats.activeLeases === 0) break;
        await wait(10);
      }
      const statsBeforeExport = loader.stats();
      if (statsBeforeExport.pendingRequests !== 0 || statsBeforeExport.activeLeases !== 0) throw new Error(`Cycle ${index} has unsettled requests/leases before export: ${JSON.stringify(statsBeforeExport)}.`);
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
        pendingRequestsAfterRapidChange,
        successfulStatuses,
        transportAbortCount,
        transportAbortURLs,
        transportAbortObservations,
        statsBeforeExport,
        statsAfterDestroy,
        statsAfterRelease,
        expectedFilename: exportedFilename
      };
    };
    window.__dotsDestroyPendingEditor = async () => {
      const templateDefinition = templates.TEMPLATE_REGISTRY.find(row => templates.enumerateValidConfigurations(row).length > 1);
      if (!templateDefinition) throw new Error('No registered editable Template is available for the pending-destroy check.');
      const artwork = catalog.ARTWORKS.find(row => row.id === templateDefinition.artworkBinding.artworkId && row.version === templateDefinition.artworkBinding.artworkVersion);
      if (!artwork) throw new Error(`Exact bound Artwork is missing for ${templateDefinition.id}.`);
      const template = templates.getTemplateForArtwork(artwork);
      const rows = rowsForTemplate(template);
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
      const editor = editorAPI.createEditor({ root: host, artwork, template, draft, loader, assetRegistry: rows });
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
      return { pendingFetchCalls, pendingFetchAborts, canceledConsumers: loader.getCanceledConsumers(), statsBeforeDestroy, statsAfterDestroy, statsAfterRelease };
    };
  }, { cyclePlans, tabForField: TAB_FOR_FIELD });

  const cycles = [];
  for (let index = 0; index < cyclePlans.length; index += 1) {
    const plan = cyclePlans[index];
    const cycle = await page.evaluate(({ index, plan }) => window.__dotsRunEditorCycle(index, plan), { index, plan });
    assert.equal(cycle.index, index + 1);
    assert.equal(cycle.templateId, plan.templateId, `Cycle ${index + 1} uses its registry-selected Template.`);
    assert.equal(cycle.disabledDuringPending, true, `Cycle ${index + 1} disables export while a new revision is rendering.`);
    assert.equal(cycle.statsAfterDestroy.activeLeases, 0, `Cycle ${index + 1} destroys all render leases.`);
    assert.equal(cycle.statsAfterDestroy.pendingRequests, 0, `Cycle ${index + 1} settles/aborts pending resources.`);
    assert.equal(cycle.statsAfterDestroy.objectURLs, 0, `Cycle ${index + 1} does not leak object URLs.`);
    assert.ok(cycle.statsAfterDestroy.cachedDecodedBytes <= cycle.statsAfterDestroy.maxDecodedBytes, `Cycle ${index + 1} stays inside decoded cache budget.`);
    assert.equal(cycle.statsAfterRelease.bitmaps, 0, `Cycle ${index + 1} closes every bitmap at loader disposal.`);
    assert.equal(cycle.statsAfterRelease.cachedDecodedBytes, 0, `Cycle ${index + 1} releases cached decoded memory.`);
    assert.ok(cycle.exportCapture.filename.endsWith('.png'), `Cycle ${index + 1} created a PNG through the isolated Editor export API.`);
    assert.equal(cycle.exportCapture.bytes > 100_000, true, `Cycle ${index + 1} produced nonempty PNG bytes.`);
    if (index === 0 || index === cyclePlans.length - 1) {
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
    assert.ok(cycle.pendingRequestsAfterRapidChange > 0, `Cycle ${cycle.index} has pending work for the current render after optional thumbnail work is canceled (observed ${cycle.pendingRequestsAfterRapidChange}).`);
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
  return page.evaluate(async tabForField => {
    const [catalog, templates, draftAPI, loaderAPI, editorAPI] = await Promise.all([
      import('/studio-artwork-catalog.js?v=102'),
      import('/studio-edit-templates.js?v=102'),
      import('/studio-draft.js?v=102'),
      import('/studio-preview-loader.js?v=102'),
      import('/studio-editor.js?v=102')
    ]);
    const manifest = await fetch('/assets/templates/sources.json', { cache: 'no-cache' }).then(response => {
      if (!response.ok) throw new Error('Manifest fetch failed (' + response.status + ').');
      return response.json();
    });
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const referenceKey = reference => `${reference?.id || ''}\u0000${reference?.version || ''}\u0000${reference?.purpose || ''}`;
    const observedFetches = [];
    const nativeFetch = window.fetch.bind(window);
    const observeFetch = (fetchImpl, ownerName) => (url, options = {}) => {
      const absoluteURL = new URL(String(url), location.href);
      const observation = {
        url: absoluteURL.href,
        origin: absoluteURL.origin,
        pathAndQuery: `${absoluteURL.pathname}${absoluteURL.search}`,
        method: options.method || 'GET',
        ownerName,
        startedAtMs: performance.now(),
        signalAborted: Boolean(options.signal?.aborted),
        responseStatus: null,
        outcome: 'pending'
      };
      observedFetches.push(observation);
      const signal = options.signal;
      const onAbort = () => {
        observation.signalAborted = true;
        observation.abortedAtMs = performance.now();
      };
      signal?.addEventListener('abort', onAbort, { once: true });
      if (signal?.aborted) onAbort();
      let observationSettled = false;
      const settleObservation = () => {
        if (observationSettled) return;
        observationSettled = true;
        observation.settledAtMs = performance.now();
        signal?.removeEventListener('abort', onAbort);
      };
      let result;
      try {
        result = fetchImpl ? fetchImpl(url, options) : nativeFetch(url, options);
      } catch (error) {
        observation.outcome = 'threw';
        observation.errorName = error?.name || 'Error';
        observation.errorMessage = String(error?.message || error);
        settleObservation();
        throw error;
      }
      return Promise.resolve(result).then(response => {
        observation.responseStatus = response?.status ?? null;
        observation.headersAtMs = performance.now();
        observation.outcome = 'headers-received';
        let bodyReaderInstalled = false;
        for (const method of ['arrayBuffer', 'blob', 'formData', 'json', 'text']) {
          if (typeof response?.[method] !== 'function') continue;
          bodyReaderInstalled = true;
          const readBody = response[method].bind(response);
          response[method] = (...args) => Promise.resolve(readBody(...args)).then(value => {
            observation.outcome = 'body-read';
            return value;
          }, error => {
            observation.outcome = 'rejected';
            observation.rejectedStage = 'body';
            observation.errorName = error?.name || 'Error';
            observation.errorMessage = String(error?.message || error);
            throw error;
          }).finally(settleObservation);
        }
        if (!bodyReaderInstalled || response.body === null) settleObservation();
        return response;
      }, error => {
        observation.outcome = 'rejected';
        observation.rejectedStage = 'fetch';
        observation.errorName = error?.name || 'Error';
        observation.errorMessage = String(error?.message || error);
        settleObservation();
        throw error;
      });
    };
    const rowForReference = reference => manifest.assets.find(row => referenceKey(row) === referenceKey(reference)) || null;
    const rowsForTemplate = template => {
      const references = new Map();
      const add = reference => {
        if (reference?.id && reference?.version && reference?.purpose) references.set(referenceKey(reference), reference);
      };
      for (const options of templates.enumerateValidConfigurations(template)) {
        for (const reference of templates.getRequiredTemplateAssets(template, options, { includeAllOptionThumbnails: true })) add(reference);
      }
      for (const field of templates.getTemplateOptionFields(template)) {
        for (const option of field.options) {
          const refs = templates.getTemplateOptionAssetRefs(template, field.key, option.id);
          for (const reference of [...refs.thumbnailAssets, ...refs.layerAssets, ...refs.maskAssets]) add(reference);
        }
      }
      return [...references.values()].map(reference => {
        const row = rowForReference(reference);
        if (!row || typeof row.path !== 'string') throw new Error(`${template.id}: registered resource ${reference.id} has no exact manifest path/version/purpose.`);
        return row;
      });
    };
    const candidateScenarios = [];
    for (const definition of templates.TEMPLATE_REGISTRY) {
      const artwork = catalog.ARTWORKS.find(row => row.id === definition.artworkBinding.artworkId && row.version === definition.artworkBinding.artworkVersion);
      if (!artwork) continue;
      const template = templates.getTemplateForArtwork(artwork);
      const fields = templates.getTemplateOptionFields(template);
      const configurations = templates.enumerateValidConfigurations(template);
      const baselineKeys = new Set(templates.getRequiredTemplateAssets(template, template.defaultOptions, { includeAllOptionThumbnails: false }).map(referenceKey));
      for (const field of fields) {
        if (field.key === 'color' || field.key === 'colors') continue;
        const defaultOption = template.defaultOptions[field.key];
        for (const option of field.options) {
          if (option.id === defaultOption || option.id === 'none') continue;
          const targetOptions = configurations.find(configuration => fields.every(row => configuration[row.key] === (row.key === field.key ? option.id : template.defaultOptions[row.key])));
          if (!targetOptions) continue;
          const targetReferences = templates.getRequiredTemplateAssets(template, targetOptions, { includeAllOptionThumbnails: false });
          const renderAsset = targetReferences.find(reference => !baselineKeys.has(referenceKey(reference)) && rowForReference(reference));
          const optionReferences = templates.getTemplateOptionAssetRefs(template, field.key, option.id);
          const thumbnailReferences = optionReferences.thumbnailAssets.length ? optionReferences.thumbnailAssets : optionReferences.layerAssets;
          const thumbnailAsset = thumbnailReferences.map(rowForReference).find(row => row && !baselineKeys.has(referenceKey(row)));
          if (!renderAsset || !thumbnailAsset) continue;
          candidateScenarios.push({ definition, artwork, template, field: field.key, defaultOption, alternateOption: option.id, targetOptions, renderAsset: rowForReference(renderAsset), thumbnailAsset });
        }
      }
    }
    const scenario = candidateScenarios[0];
    if (!scenario) throw new Error('No registered Template has a reachable non-default option with real render and thumbnail assets for lifecycle races.');
    const { artwork, template, field: raceField, defaultOption, alternateOption, renderAsset, thumbnailAsset } = scenario;
    const allRows = rowsForTemplate(template);
    if (!allRows.length) throw new Error(`${template.id}: focused race has no manifest-backed resources.`);
    const waitFor = async (predicate, label, timeout = 8000) => {
      const deadline = Date.now() + timeout;
      while (Date.now() < deadline) {
        if (predicate()) return;
        await wait(10);
      }
      throw new Error('Timed out waiting for ' + label + '.');
    };
    const createHost = name => {
      const host = document.createElement('div');
      host.dataset.raceHost = name;
      host.style.cssText = 'position:fixed;left:-8000px;top:0;width:420px;height:520px;overflow:hidden;';
      document.body.append(host);
      return host;
    };
    const chooseVisualOption = (editor, optionField, value) => {
      const tabKey = tabForField[optionField] || optionField;
      const tab = editor.element.querySelector('.studio-editor-tab[data-editor-tab="' + tabKey + '"]');
      if (!tab) throw new Error(`Editor tab is missing for registered field ${optionField} (${tabKey}).`);
      tab.click();
      const panel = editor.element.querySelector('.studio-editor-category[role="tabpanel"][data-editor-tab="' + tabKey + '"]');
      if (tab.getAttribute('aria-selected') !== 'true' || !panel || panel.hidden) throw new Error(`Editor failed to activate the visible ${optionField} panel.`);
      const option = panel.querySelector('button.studio-editor-option[data-field="' + optionField + '"][data-option-id="' + value + '"]');
      if (!option || option.disabled) throw new Error(`Editor visual option is not reachable: ${optionField}=${value}.`);
      option.click();
      if (editor.getDraft().options[optionField] !== value) throw new Error(`Editor did not apply ${optionField}=${value}.`);
    };
    const newEditor = ({ name, rows = allRows, fetchImpl, decorateLoader, sessionId }) => {
      const host = createHost(name);
      const rawLoader = loaderAPI.createPreviewLoader({ assetRegistry: rows, fetchImpl: observeFetch(fetchImpl, name) });
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
    const waitReady = async (state, expectedOptions = {}) => waitFor(() => state.statuses.at(-1)?.canExport
      && state.editor.getSnapshot()?.revision === state.editor.getDraft().revision
      && Object.entries(expectedOptions).every(([optionField, value]) => state.editor.getSnapshot()?.options[optionField] === value),
    'current render' + (Object.keys(expectedOptions).length ? ' with ' + JSON.stringify(expectedOptions) : ''));
    const thumbnailOption = editor => {
      const category = tabForField[raceField] || raceField;
      const tab = editor.element.querySelector('.studio-editor-tab[data-editor-tab="' + category + '"]');
      if (!tab) throw new Error(`Editor is missing the ${raceField} tab.`);
      tab.click();
      const button = editor.element.querySelector('button.studio-editor-option[data-field="' + raceField + '"][data-option-id="' + alternateOption + '"]');
      const visual = button?.querySelector('.studio-editor-option-visual');
      if (!button || !visual) throw new Error(`Editor is missing the selected ${raceField} option thumbnail.`);
      return { button, visual };
    };
    const waitForThumbnail = async editor => {
      const { button, visual } = thumbnailOption(editor);
      await waitFor(() => visual.dataset.thumbnailState === 'ready', `real ${raceField} option thumbnail`);
      return { button, visual };
    };
    const waitForThumbnailIdle = async state => waitFor(() => {
      const visuals = [...state.editor.element.querySelectorAll('.studio-editor-category:not([hidden]) .studio-editor-option-visual')];
      return visuals.every(visual => !['loading', 'waiting-for-manifest'].includes(visual.dataset.thumbnailState));
    }, `${state.editor.getDraft().templateId} option thumbnails to settle before teardown`);

    let delayRenderAsset = false;
    let delayedRenderAcquisitions = 0;
    const outOfOrder = newEditor({
      name: 'a-b-a',
      sessionId: 'race-a-b-a',
      decorateLoader: raw => ({
        acquire(asset, options = {}) {
          if (delayRenderAsset && asset.id === renderAsset.id) {
            delayedRenderAcquisitions += 1;
            const delay = delayedRenderAcquisitions === 1 ? 260 : 35;
            // Keep the older acquisition outside the abortable cache until the newer A→B→A revision wins.
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
    await waitForThumbnail(outOfOrder.editor);
    delayRenderAsset = true;
    chooseVisualOption(outOfOrder.editor, raceField, alternateOption);
    await wait(12);
    const firstPendingExportDisabled = outOfOrder.editor.getSnapshot() === null;
    const firstPendingExportAccepted = await outOfOrder.editor.exportPNG();
    chooseVisualOption(outOfOrder.editor, raceField, defaultOption);
    await waitReady(outOfOrder, { [raceField]: defaultOption });
    chooseVisualOption(outOfOrder.editor, raceField, alternateOption);
    const latestPendingExportDisabled = outOfOrder.editor.getSnapshot() === null;
    const latestPendingExportAccepted = await outOfOrder.editor.exportPNG();
    if (firstPendingExportAccepted || latestPendingExportAccepted) throw new Error('Editor.exportPNG accepted an obsolete out-of-order revision before its render completed.');
    await waitReady(outOfOrder, { [raceField]: alternateOption });
    const finalSnapshot = outOfOrder.editor.getSnapshot();
    const statusCountBeforeLateCompletion = outOfOrder.statuses.length;
    await wait(300);
    if (delayedRenderAcquisitions < 2) throw new Error(`Expected two deliberately reordered ${renderAsset.id} acquisitions, got ${delayedRenderAcquisitions}.`);
    if (outOfOrder.statuses.length !== statusCountBeforeLateCompletion) throw new Error('A late obsolete render emitted a status after the latest revision had succeeded.');
    if (outOfOrder.editor.getSnapshot()?.revision !== finalSnapshot.revision || outOfOrder.editor.getSnapshot()?.options[raceField] !== alternateOption) {
      throw new Error('A late obsolete A→B→A render replaced the latest successful Draft snapshot.');
    }
    await waitForThumbnailIdle(outOfOrder);
    const outOfOrderReport = {
      templateId: template.id,
      field: raceField,
      sequence: [defaultOption, alternateOption, defaultOption, alternateOption],
      delayedAssetId: renderAsset.id,
      delayedAssetPath: renderAsset.path,
      delayedAcquisitions: delayedRenderAcquisitions,
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

    let failLatestRenderAsset = false;
    let latestFailureInjected = false;
    const failedLatest = newEditor({
      name: 'latest-failure',
      sessionId: 'race-latest-failure',
      decorateLoader: raw => ({
        acquire(asset, options = {}) {
          if (failLatestRenderAsset && asset.id === renderAsset.id) {
            failLatestRenderAsset = false;
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
    await waitForThumbnail(failedLatest.editor);
    failLatestRenderAsset = true;
    chooseVisualOption(failedLatest.editor, raceField, alternateOption);
    await waitFor(() => failedLatest.statuses.at(-1)?.error?.code === 'missing-template-layer', 'latest missing-layer render failure');
    const failedState = {
      canExport: failedLatest.statuses.at(-1).canExport,
      exportDisabled: failedLatest.editor.getSnapshot() === null,
      exportAccepted: await failedLatest.editor.exportPNG(),
      snapshot: failedLatest.editor.getSnapshot(),
      retryVisible: !failedLatest.editor.element.querySelector('[data-action="retry"]').hidden,
      error: failedLatest.statuses.at(-1).error
    };
    if (failedState.canExport || !failedState.exportDisabled || failedState.exportAccepted || failedState.snapshot || !failedState.retryVisible || !latestFailureInjected) {
      throw new Error('A failed latest revision must disable export, report the real failed layer, and offer explicit Retry.');
    }
    failedLatest.editor.element.querySelector('[data-action="retry"]').click();
    await waitReady(failedLatest, { [raceField]: alternateOption });
    const retryState = { canExport: failedLatest.statuses.at(-1).canExport, snapshot: failedLatest.editor.getSnapshot(), failureWasInjected: latestFailureInjected };
    if (!retryState.canExport || !retryState.failureWasInjected) throw new Error('Explicit Retry did not recover the failed latest recipe.');
    await waitForThumbnailIdle(failedLatest);
    failedLatest.editor.destroy();
    failedLatest.host.remove();
    failedLatest.loader.releaseAll();

    let thumbnailFetches = 0;
    const { DELIVERY_ASSETS } = await import('/studio-delivery-assets.js?v=102');
    const thumbnailDelivery = DELIVERY_ASSETS.find(row => row.source.path === thumbnailAsset.path && row.source.sha256 === thumbnailAsset.sha256);
    if (!thumbnailDelivery) throw new Error('Race fixture thumbnail has no exact registered delivery mapping.');
    const thumbnailPath = new URL('/' + thumbnailDelivery.path.replace(/^\.\//, ''), location.origin).pathname;
    const failThumbnailOnce = async (url, options = {}) => {
      if (new URL(url).pathname === thumbnailPath) {
        thumbnailFetches += 1;
        if (thumbnailFetches === 1) return new Response('temporary option thumbnail failure', { status: 503, headers: { 'content-type': 'text/plain' } });
      }
      return fetch(url, options);
    };
    const thumbnailRetry = newEditor({ name: 'thumbnail-retry', fetchImpl: failThumbnailOnce, sessionId: 'race-thumbnail-retry' });
    await waitReady(thumbnailRetry);
    const { button: alternateButton, visual: alternateVisual } = thumbnailOption(thumbnailRetry.editor);
    const imageRetryButton = alternateButton.parentElement.querySelector('[data-action="retry-thumbnail"]');
    await waitFor(() => alternateButton?.disabled === false
      && alternateButton.dataset.thumbnailError === 'true'
      && alternateVisual?.dataset.thumbnailState === 'error'
      && !imageRetryButton.hidden,
    'thumbnail failure to preserve its legal option and show item Retry');
    const failedThumbnail = {
      disabled: alternateButton.disabled,
      reason: alternateButton.dataset.thumbnailError,
      retryVisible: !imageRetryButton.hidden,
      failedFetchCount: thumbnailFetches,
      assetId: thumbnailAsset.id,
      assetPath: thumbnailAsset.path
    };
    const beforeThumbnailRetry = thumbnailRetry.editor.getSnapshot();
    imageRetryButton.click();
    await waitFor(() => alternateVisual.dataset.thumbnailState === 'ready'
      && alternateVisual.querySelector('canvas.studio-editor-option-thumbnail')
      && alternateButton.disabled === false,
    'failed option thumbnail retry to recover a selectable canvas');
    if (thumbnailRetry.editor.getSnapshot() !== beforeThumbnailRetry && thumbnailRetry.editor.getSnapshot()?.revision !== beforeThumbnailRetry?.revision) throw new Error('Thumbnail retry changed the draft revision.');
    chooseVisualOption(thumbnailRetry.editor, raceField, alternateOption);
    await waitReady(thumbnailRetry, { [raceField]: alternateOption });
    const recoveredThumbnailCanvas = alternateVisual.querySelector('canvas.studio-editor-option-thumbnail');
    const recoveredThumbnailPixels = recoveredThumbnailCanvas.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, recoveredThumbnailCanvas.width, recoveredThumbnailCanvas.height).data;
    let recoveredThumbnailAlphaPixels = 0;
    for (let offset = 3; offset < recoveredThumbnailPixels.length; offset += 4) if (recoveredThumbnailPixels[offset] > 0) recoveredThumbnailAlphaPixels += 1;
    const thumbnailRecovery = {
      templateId: template.id,
      field: raceField,
      option: alternateOption,
      failedThumbnail,
      retryCount: thumbnailFetches,
      recovered: alternateVisual.dataset.thumbnailState === 'ready' && recoveredThumbnailAlphaPixels > 0,
      alphaPixels: recoveredThumbnailAlphaPixels,
      pressed: alternateButton.getAttribute('aria-pressed') === 'true',
      canExport: thumbnailRetry.editor.getSnapshot()?.options[raceField] === alternateOption
    };
    if (thumbnailFetches < 2 || !thumbnailRecovery.recovered || !thumbnailRecovery.pressed || !thumbnailRecovery.canExport) {
      throw new Error('Retry did not recover a real thumbnail canvas and selectable rendered recipe.');
    }
    await waitForThumbnailIdle(thumbnailRetry);
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
          if (delayCloseAcquire && asset.id === renderAsset.id) {
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
    await waitForThumbnail(closing.editor);
    await waitForThumbnailIdle(closing);
    delayCloseAcquire = true;
    chooseVisualOption(closing.editor, raceField, alternateOption);
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
      || replacement.editor.getSnapshot()?.revision !== replacementSnapshot.revision
      || replacement.editor.getSnapshot()?.options[raceField] !== defaultOption) {
      throw new Error('A closed session late callback changed the replacement editor session or its default recipe.');
    }
    await waitForThumbnailIdle(replacement);
    const closeStats = closing.loader.stats();
    if (closeStats.pendingRequests !== 0 || closeStats.activeLeases !== 0 || closeStats.objectURLs !== 0) {
      throw new Error('The destroyed editor retained pending requests, leases, or object URLs after its delayed completion settled.');
    }
    const closeReport = {
      templateId: template.id,
      field: raceField,
      delayedAssetId: renderAsset.id,
      delayedLateAcquisitions: closeDelayedAcquisitions,
      oldSessionStatusCountUnchanged: true,
      replacementSession: replacementSnapshot,
      oldLoaderBeforeRelease: closeStats
    };
    closing.loader.releaseAll();
    replacement.editor.destroy();
    replacement.host.remove();
    replacement.loader.releaseAll();
    return {
      selectedScenario: { templateId: template.id, field: raceField, defaultOption, alternateOption, renderAsset: { id: renderAsset.id, path: renderAsset.path }, thumbnailAsset: { id: thumbnailAsset.id, path: thumbnailAsset.path } },
      outOfOrder: outOfOrderReport,
      latestFailure: { ...failedState, retry: retryState },
      thumbnailFailureRecovery: thumbnailRecovery,
      closeLateCallback: closeReport,
      observedFetches
    };
  }, TAB_FOR_FIELD);
}
try {
  if (focusedCycleOnly || focusedCycleRaceOnly) {
    const context = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT }, acceptDownloads: true, reducedMotion: 'reduce' });
    const page = await context.newPage();
    let phase = 'focused-editor-cycles';
    const requestPhases = new WeakMap();
    await installPageFetchObserver(page, phase);
    page.on('pageerror', error => consoleErrors.push({ type: 'pageerror', text: error.message, segmentName: phase }));
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push({ type: 'console', text: message.text(), segmentName: phase }); });
    page.on('request', request => requestPhases.set(request, phase));
    page.on('requestfailed', request => browserFailures.push({ url: request.url(), error: request.failure()?.errorText, segmentName: requestPhases.get(request) || phase }));
    page.on('response', response => { if (response.status() >= 400) httpFailures.push({ url: response.url(), status: response.status(), segmentName: requestPhases.get(response.request()) || phase }); });
    await page.goto(harnessURL, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => Boolean(window.__dotsQAApp), null, { timeout: 15_000 });
    await page.evaluate(segmentName => { window.__dotsQAFetchPhase = segmentName; }, phase);
    const report = await runTwentyEditCycles(page);
    let raceReport = null;
    if (focusedCycleRaceOnly) {
      phase = 'focused-editor-races';
      await page.evaluate(segmentName => { window.__dotsQAFetchPhase = segmentName; }, phase);
      raceReport = await runFocusedEditorRaces(page);
    }
    const pageFetchObservations = await page.evaluate(() => window.__dotsQAFetchObservations || []);
    await context.close();
    const cycleFailures = browserFailures.filter(row => row.segmentName === 'focused-editor-cycles');
    const allowedFailures = matchSignalAbortFailures(cycleFailures, pageFetchObservations, 'focused-editor-cycles');
    const raceFailures = browserFailures.filter(row => row.segmentName === 'focused-editor-races');
    const allowedRaceFailures = raceReport ? matchSignalAbortFailures(raceFailures, pageFetchObservations, 'focused-editor-races') : [];
    await fs.writeFile(path.join(runRoot, focusedCycleRaceOnly ? 'focused-cycle-race.json' : 'focused-editor-cycles.json'), JSON.stringify({ runId, sourceManifestSha256: createHash('sha256').update(sourceBytes).digest('hex'), scope: focusedCycleRaceOnly ? 'Focused real-source edit/export cycles followed by focused editor races in the same harness page; no full recipe or journey claims.' : 'Focused real-source edit/export cycles and controlled pending-fetch destruction; no full recipe or journey claims.', report, raceReport, pageFetchObservations, observedIntentionalCycleRequestAborts: allowedFailures, observedIntentionalRaceRequestAborts: allowedRaceFailures, consoleErrors, browserFailures, httpFailures }, null, 2));
    assertNoRuntimeErrors('focused editor lifecycle checks', { allowedBrowserFailures: allowedFailures, segmentName: 'focused-editor-cycles' });
    if (raceReport) assertNoRuntimeErrors('focused editor races following lifecycle cycles', { allowedBrowserFailures: allowedRaceFailures, segmentName: 'focused-editor-races' });
    assertNoRuntimeErrors('complete focused lifecycle/race acceptance', { allowedBrowserFailures: [...allowedFailures, ...allowedRaceFailures] });
    console.log(`PASS: ${report.cycles.length} cycles; ${report.totalCanceledConsumerCount} canceled consumers; ${report.pendingDestroy.pendingFetchAborts} controlled pending-fetch aborts.`);
    console.log(`EVIDENCE: ${path.relative(repoRoot, runRoot)}`);
  } else if (focusedRaceOnly) {
    const cycleContext = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT }, acceptDownloads: true, reducedMotion: 'reduce' });
    const focusedPage = await cycleContext.newPage();
    await installPageFetchObserver(focusedPage, 'focused-editor-races');
    focusedPage.on('pageerror', error => consoleErrors.push({ type: 'pageerror', text: error.message, segmentName: 'focused-editor-races' }));
    focusedPage.on('console', message => { if (message.type() === 'error') consoleErrors.push({ type: 'console', text: message.text(), segmentName: 'focused-editor-races' }); });
    focusedPage.on('requestfailed', request => browserFailures.push({ url: request.url(), error: request.failure()?.errorText, segmentName: 'focused-editor-races' }));
    focusedPage.on('response', response => { if (response.status() >= 400) httpFailures.push({ url: response.url(), status: response.status(), segmentName: 'focused-editor-races' }); });
    await focusedPage.goto(harnessURL, { waitUntil: 'domcontentloaded' });
    await focusedPage.waitForFunction(() => Boolean(window.__dotsQAApp), null, { timeout: 15_000 });
    const focusedReport = await runFocusedEditorRaces(focusedPage);
    const pageFetchObservations = await focusedPage.evaluate(() => window.__dotsQAFetchObservations || []);
    await cycleContext.close();
    const raceFailures = browserFailures.filter(row => row.segmentName === 'focused-editor-races');
    const allowedFailures = matchSignalAbortFailures(raceFailures, pageFetchObservations, 'focused-editor-races');
    await fs.writeFile(path.join(runRoot, 'focused-editor-races.json'), JSON.stringify({
      runId,
      sourceManifestSha256: createHash('sha256').update(sourceBytes).digest('hex'),
      scope: 'Focused current visual-editor asynchronous races and failed-thumbnail retry; no full recipe, journey-video, or lifecycle-cycle claims.',
      focusedReport,
      pageFetchObservations,
      observedIntentionalRequestAborts: allowedFailures,
      consoleErrors,
      browserFailures,
      httpFailures
    }, null, 2));
    assertNoRuntimeErrors('focused editor race and thumbnail retry browser checks', { allowedBrowserFailures: allowedFailures, segmentName: 'focused-editor-races' });
    console.log('PASS: focused asynchronous editor races, failed thumbnail disable/Retry/recovery, and late-session isolation.');
    console.log(`EVIDENCE: ${path.relative(repoRoot, runRoot)}`);
  } else {
  const engineeringSession = await newRecordedPage('real-registered-recipes');
  await engineeringSession.page.exposeFunction('__writeStudioEvidence', writeEvidence);
  engineeringReport = await renderAllRealConfigurations(engineeringSession.page);
  await fs.writeFile(path.join(runRoot, 'real-registered-recipes.json'), JSON.stringify(engineeringReport, null, 2));
  assertNoRuntimeErrors('all registered recipe browser renderer');
  await finishSegment(engineeringSession, path.join(videoStageRoot, 'real-registered-recipes.webm'));

  const characterFlows = TEMPLATE_REGISTRY.map(configurationFlow);
  const selectedCharacterFlows = characterFlows;
  const flowEvidence = [];
  for (const config of selectedCharacterFlows) {
    const appSession = await newRecordedPage(`${config.label}-wysiwyg-export`);
    const { page } = appSession;
    const artwork = await openArtwork(page, config.artworkId, config.artworkVersion);
    assert.ok(artwork.version, 'The selected Artwork has a pinned version.');
    const initialPreview = await waitForPreview(page, { expectNoOriginal: true });
    assert.equal(initialPreview.editable, true, 'This Artwork opens through its publicly approved exact Template binding.');
    const templateId = config.templateId;
    const template = TEMPLATE_REGISTRY.find(item => item.id === templateId);
    await waitForEditor(page, { templateId });
    assert.equal(await page.locator('.studio-original').evaluate(details => details.open), false, 'Editable Artwork keeps original metadata and original actions collapsed.');
    await fs.writeFile(path.join(screenshotRoot, `${config.label}-studio-initial.png`), await page.screenshot({ fullPage: false }));
    const allRecipeUI = await verifyEveryRecipeThroughControls(page, template, artwork, engineeringReport.templates.find(row => row.templateId === template.id || row.id === template.id));
    console.log(`UI recipes: ${template.id} ${allRecipeUI.length}/${enumerateValidConfigurations(template).length} clipboard and PNG verified.`);
    for (const [field, value] of config.steps) await choose(page, field, value);
    await waitForEditor(page, { templateId });
    const rendered = await page.evaluate(() => {
      const canvas = document.querySelector('.studio-editor-canvas');
      const draft = window.__dotsQAApp.detail.getState().draft;
      const context = canvas.getContext('2d', { alpha: true, willReadFrequently: true });
      const data = context.getImageData(Math.floor(canvas.width / 2), Math.floor(canvas.height * 0.64), 1, 1).data;
      return { options: draft.options, revision: draft.revision, sessionId: draft.sessionId, canvasRevision: Number(canvas.dataset.renderRevision), recipeKey: canvas.dataset.recipeKey, colorSample: [...data], previewWidth: canvas.width, previewHeight: canvas.height, canExport: document.querySelector('.studio-editor-controls[data-can-export]')?.dataset.canExport };
    });
    assert.deepEqual(Object.fromEntries(Object.entries(config.options)), Object.fromEntries(Object.keys(config.options).map(key => [key, rendered.options[key]])));
    assert.equal(rendered.revision, rendered.canvasRevision, 'The visible preview uses the latest Draft revision.');
    assert.equal(rendered.canExport, 'true', 'The latest real composition is exportable only after successful render.');
    await fs.writeFile(path.join(screenshotRoot, `${config.label}-studio-current.png`), await page.screenshot({ fullPage: false }));

    assert.equal(await page.locator('.studio-actions [data-action="copy-prompt"],.studio-actions [data-action="open-chatgpt"],.studio-actions [data-action="export"]').count(),3,'The editable detail exposes exactly the three main actions.');
    assert.equal(await page.locator('.studio-editor-controls button[data-action="export"],.studio-editor-controls button[data-action="reset"],.studio-editor-controls button[data-action="cancel"]').count(),0,'The Editor controls contain no duplicate export or Reset/Cancel actions.');
    const baseCanvas=await page.locator('.studio-draft-host canvas.studio-editor-canvas').evaluate(canvas=>canvas.toDataURL());
    const stateBeforeIntent=await page.evaluate(()=>window.__dotsQAApp.detail.getState());
    const extraDirection='Preserve the family identity and the final selected configuration.';
    await page.locator('.artwork-detail__additional-direction').fill(extraDirection);
    const stateAfterIntent=await page.evaluate(()=>window.__dotsQAApp.detail.getState());
    const canvasAfterIntent=await page.locator('.studio-draft-host canvas.studio-editor-canvas').evaluate(canvas=>canvas.toDataURL());
    assert.equal(canvasAfterIntent,baseCanvas,'Additional prompt text does not redraw or alter the successful preview pixels.');
    assert.equal(stateAfterIntent.draft.revision,stateBeforeIntent.draft.revision,'Additional prompt text does not change the local render revision.');
    assert.equal(stateAfterIntent.promptReady,true);assert.equal(stateAfterIntent.exportReady,true);
    assert(!stateAfterIntent.modifiedPrompt.includes(templateId), 'The user-facing Prompt excludes internal Template identifiers.');
    for (const [field, value] of Object.entries(config.options)) {
      const selected = template.options[field]?.find(option => option.id === value);
      if (selected) assert(stateAfterIntent.modifiedPrompt.includes((selected.semanticByLanguage?.en || selected.labelByLanguage.en)), `Unified Prompt describes the successful ${field} in readable language.`);
    }
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
    await pngPage.waitForFunction(() => document.contentType === 'image/png' || document.querySelector('img')?.naturalWidth > 0, null, { timeout: 10_000 });
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
      allRecipeUI,
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
    const firstArtwork = await openArtwork(page, config.artworkId, config.artworkVersion);
    await waitForPreview(page, { expectNoOriginal: true });
    const templateId = config.templateId;
    await waitForEditor(page, { templateId });
    for (const [field, value] of config.steps) await choose(page, field, value);
    await waitForEditor(page, { templateId });
    const edited = await saveDownloadedPng(page, page.locator('.studio-actions [data-action="export"]'), 'Journey edited Draft');
    await page.goto(pathToFileURL(edited.filePath).href, { waitUntil: 'load' });
    await page.waitForFunction(() => document.contentType === 'image/png' || document.querySelector('img')?.naturalWidth > 0, null, { timeout: 10_000 });
    await page.waitForTimeout(900);
    await fs.writeFile(path.join(screenshotRoot, `${config.label}-journey-png-view.png`), await page.screenshot({ fullPage: false }));

    await page.goto(harnessURL, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => Boolean(window.__dotsQAApp), null, { timeout: 15_000 });
    const reopenedArtwork = await openArtwork(page, config.artworkId, config.artworkVersion);
    assert.equal(reopenedArtwork.asset.sha256, firstArtwork.asset.sha256, 'The round-trip reopens the exact same registered Artwork.');
    const reopenedPreview = await waitForPreview(page, { expectNoOriginal: true });
    assert.equal(reopenedPreview.editable, true, 'The pinned Artwork reopens directly into its one eligible CharacterStudio.');
    const reopenedBaseline=await page.evaluate(async()=>{const {TEMPLATE_REGISTRY,normalizeTemplateOptions}=await import('/studio-edit-templates.js?v=102');const state=window.__dotsQAApp.detail.getState();const template=TEMPLATE_REGISTRY.find(item=>item.id===state.templateId);return{options:state.draft.options,defaults:normalizeTemplateOptions(template,template.defaultOptions),dirty:window.__dotsQAApp.detail.hasDirty(),sessionId:state.sessionId};});
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
  const guardConfig = selectedCharacterFlows[0];
  let expectedGalleryHash = await guardPage.evaluate(() => location.hash);
  await openArtwork(guardPage, guardConfig.artworkId, guardConfig.artworkVersion);
  await waitForEditor(guardPage, guardConfig);
  const applyDirtyIntent = async label => {
    for (const [field, value] of guardConfig.steps) await choose(guardPage, field, value);
    await waitForEditor(guardPage, guardConfig);
    await guardPage.locator('.artwork-detail__additional-direction').fill(`Preserve the character identity and material (${label}).`);
    const state = await guardPage.evaluate(() => ({ dirty: window.__dotsQAApp.detail.hasDirty(), hash: location.hash, promptReady: window.__dotsQAApp.detail.getState().promptReady, exportReady: window.__dotsQAApp.detail.getState().exportReady }));
    assert.equal(state.dirty, true, `${label}: a local option change marks the current Studio dirty.`);
    assert.equal(state.promptReady, true, `${label}: the successful Prompt remains available.`);
    assert.equal(state.exportReady, true, `${label}: the successful PNG remains available.`);
    return state;
  };
  const reopenedDefault = async label => {
    await openArtwork(guardPage, guardConfig.artworkId, guardConfig.artworkVersion);
    await waitForEditor(guardPage, guardConfig);
    const state = await guardPage.evaluate(async () => {
      const { TEMPLATE_REGISTRY, normalizeTemplateOptions } = await import('/studio-edit-templates.js?v=102');
      const current = window.__dotsQAApp.detail.getState();
      const template = TEMPLATE_REGISTRY.find(row => row.id === current.templateId);
      return {
        options: current.draft.options,
        defaults: normalizeTemplateOptions(template, template.defaultOptions),
        dirty: window.__dotsQAApp.detail.hasDirty(),
        additionalDirection: document.querySelector('.artwork-detail__additional-direction')?.value ?? null
      };
    });
    assert.deepEqual(state.options, state.defaults, `${label}: reopening starts at the registered Template defaults.`);
    assert.equal(state.dirty, false, `${label}: reopening does not restore the previous in-memory Draft.`);
    assert.equal(state.additionalDirection, '', `${label}: reopening clears prior external intent.`);
    return { artworkId: guardConfig.artworkId, artworkVersion: guardConfig.artworkVersion, ...state };
  };
  const dirtyState = await applyDirtyIntent('initial dirty exit');
  assert.equal(dirtyState.dirty, true, 'A local option change marks the current Studio dirty.');
  assert.equal(dirtyState.promptReady, true);
  assert.equal(dirtyState.exportReady, true);
  const unguardedExits = [];
  for (const [name, action, targetHash] of [
    ['Escape', () => guardPage.keyboard.press('Escape'), null],
    ['overlay close', () => guardPage.locator('#overlayClose').click(), null],
    ['overlay back', () => guardPage.locator('#overlayBack').click(), null],
    ['history back', () => guardPage.goBack(), null],
    ['Characters gallery navigation', () => guardPage.evaluate(() => { location.hash = '#/?series=grok'; }), '#/?series=grok']
  ]) {
    if (unguardedExits.length > 0) await applyDirtyIntent(name);
    if (name === 'overlay close') await guardPage.locator('#overlayClose').focus();
    else if (name === 'overlay back') await guardPage.locator('#overlayBack').focus();
    else await guardPage.locator('.artwork-detail__additional-direction').focus();
    const before = await guardPage.evaluate(() => location.hash);
    const dialogs = [];
    const dismissUnexpectedDialog = dialog => { dialogs.push({ type: dialog.type(), message: dialog.message() }); void dialog.dismiss(); };
    guardPage.on('dialog', dismissUnexpectedDialog);
    try {
      await action();
      await guardPage.waitForTimeout(100);
      assert.deepEqual(dialogs, [], `${name} closes or navigates away without a discard confirmation.`);
      const expectedHash = targetHash ?? expectedGalleryHash;
      await guardPage.waitForFunction(hash => location.hash === hash && !document.querySelector('#studioOverlay')?.open, expectedHash, { timeout: 10_000 });
      expectedGalleryHash = expectedHash;
      const reopened = await reopenedDefault(name);
      unguardedExits.push({ name, fromHash: before, toHash: expectedHash, dialogs, reopened });
    } finally {
      guardPage.off('dialog', dismissUnexpectedDialog);
    }
  }
  assert.equal(await guardPage.locator('.studio-nav a[data-page="guide"],#guidePortal').count(),0,'No Guide exit route remains in the shell.');
  assert.equal(await guardPage.locator('.studio-related').evaluate(section=>section.tagName==='SECTION'&&!section.querySelector('summary')) ,true,'Related artworks remain directly visible under the media preview.');
  await guardPage.locator('.related-character').first().waitFor({ state: 'visible', timeout: 10_000 });
  await applyDirtyIntent('related Artwork navigation');
  const relatedBefore = await guardPage.evaluate(() => location.hash);
  const relatedDialogPromise = guardPage.waitForEvent('dialog', { timeout: 5_000 });
  const relatedButton = guardPage.locator('.related-character').first();
  const relatedClick = relatedButton.click().catch(error => error);
  const relatedDialog = await relatedDialogPromise;
  const guardedSwitches = [{ name: 'related Artwork navigation', type: relatedDialog.type(), message: relatedDialog.message() }];
  await relatedDialog.dismiss();
  await relatedClick;
  await guardPage.waitForTimeout(80);
  assert.equal(await guardPage.evaluate(() => location.hash), relatedBefore, 'Canceling a related Artwork navigation leaves the same Studio open.');
  assert.equal(await relatedButton.evaluate(element => document.activeElement === element), true, 'Canceling related Artwork navigation preserves focus on its trigger.');
  assert.equal(await guardPage.evaluate(() => window.__dotsQAApp.detail.hasDirty()), true, 'Canceling related Artwork navigation preserves the current Draft.');
  await fs.writeFile(path.join(runRoot, 'dirty-exit-guards.json'), JSON.stringify({ unguardedExits, guardedSwitches, dirtyState }, null, 2));
  assertNoRuntimeErrors('dirty exit guard flow');
  await finishSegment(guardSession, path.join(videoStageRoot, 'dirty-exit-guards.webm'));

  const cycleContext = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT }, acceptDownloads: true, reducedMotion: 'reduce' });
  const cyclePage = await cycleContext.newPage();
  let cyclePagePhase = '20-edit-cycles';
  const cyclePageRequestPhases = new WeakMap();
  await installPageFetchObserver(cyclePage, cyclePagePhase);
  cyclePage.on('pageerror', error => consoleErrors.push({ type: 'pageerror', text: error.message, segmentName: cyclePagePhase }));
  cyclePage.on('console', message => { if (message.type() === 'error') consoleErrors.push({ type: 'console', text: message.text(), segmentName: cyclePagePhase }); });
  cyclePage.on('request', request => cyclePageRequestPhases.set(request, cyclePagePhase));
  cyclePage.on('requestfailed', request => browserFailures.push({ url: request.url(), error: request.failure()?.errorText, segmentName: cyclePageRequestPhases.get(request) || cyclePagePhase }));
  cyclePage.on('response', response => { if (response.status() >= 400) httpFailures.push({ url: response.url(), status: response.status(), segmentName: cyclePageRequestPhases.get(response.request()) || cyclePagePhase }); });
  await cyclePage.goto(harnessURL, { waitUntil: 'domcontentloaded' });
  await cyclePage.waitForFunction(() => Boolean(window.__dotsQAApp), null, { timeout: 15_000 });
  await cyclePage.evaluate(segmentName => { window.__dotsQAFetchPhase = segmentName; }, cyclePagePhase);
  cycleReport = await runTwentyEditCycles(cyclePage);
  const cycleBrowserFailures = browserFailures.filter(row => row.segmentName === '20-edit-cycles');
  const cyclePageFetchObservations = await cyclePage.evaluate(() => window.__dotsQAFetchObservations || []);
  const allowedCycleBrowserFailures = matchSignalAbortFailures(cycleBrowserFailures, cyclePageFetchObservations, '20-edit-cycles');
  assert.deepEqual(allowedCycleBrowserFailures, cycleBrowserFailures, 'Only network requests recorded as actively aborted by a rapid-edit cycle may fail in that segment.');
  assert.ok(allowedCycleBrowserFailures.length <= cycleReport.totalTransportAbortCount, 'Observed browser aborts do not exceed the Editor transport abort count.');
  cycleReport.observedIntentionalRequestAborts = allowedCycleBrowserFailures;
  cycleReport.pageFetchObservations = cyclePageFetchObservations;
  await fs.writeFile(path.join(runRoot, '20-edit-cycles.json'), JSON.stringify(cycleReport, null, 2));
  cyclePagePhase = 'focused-editor-races';
  await cyclePage.evaluate(segmentName => { window.__dotsQAFetchPhase = segmentName; }, cyclePagePhase);
  raceReport = await runFocusedEditorRaces(cyclePage);
  const racePageFetchObservations = await cyclePage.evaluate(() => window.__dotsQAFetchObservations || []);
  await cycleContext.close();
  const raceBrowserFailures = browserFailures.filter(row => row.segmentName === 'focused-editor-races');
  const allowedRaceBrowserFailures = matchSignalAbortFailures(raceBrowserFailures, racePageFetchObservations, 'focused-editor-races');
  raceReport.observedIntentionalRequestAborts = allowedRaceBrowserFailures;
  raceReport.pageFetchObservations = racePageFetchObservations;
  await fs.writeFile(path.join(runRoot, 'editor-races.json'), JSON.stringify({ raceReport, consoleErrors, browserFailures, httpFailures }, null, 2));
  assertNoRuntimeErrors('20 real-source editor lifecycle cycles', { allowedBrowserFailures: allowedCycleBrowserFailures, segmentName: '20-edit-cycles' });
  assertNoRuntimeErrors('focused asynchronous editor races', { allowedBrowserFailures: allowedRaceBrowserFailures, segmentName: 'focused-editor-races' });
  assertNoRuntimeErrors('complete editing browser acceptance', { allowedBrowserFailures: [...allowedCycleBrowserFailures, ...allowedRaceBrowserFailures] });
  const report = {
    runId,
    scope: 'Complete editing acceptance for the actual public approved Template registry.',
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
  console.log('PASS: preview Canvas and PNG export hashes match for all registered legal recipes through public approved-template access.');
  if (cycleReport.cycles) console.log(`PASS: ${cycleReport.cycles.length} rapid edit/render/export/destroy cycles; ${cycleReport.totalCanceledConsumerCount} stale consumers canceled during edits; ${cycleReport.pendingDestroy.pendingFetchAborts} pending fetch aborts observed on Editor.destroy(); all per-cycle resources released.`);
  if (raceReport.outOfOrder) console.log('PASS: A→B→A out-of-order render, latest missing-layer failure/retry, and close-late-session races.');
  console.log(`PASS: ${selectedCharacterFlows.map(config => config.label).join(' and ')} automatic CharacterStudio editing → unified Prompt → transparent PNG export → original-materials disclosure.`);
  console.log(`PASS: Recorded ${selectedCharacterFlows.map(config => config.label).join(' and ')} single-page journeys reopen the same Artwork at its Template default after viewing the exported PNG.`);
  console.log('PASS: dirty Escape, Close, Back, and Characters navigation close without confirmation and reopen at Template defaults; related Artwork navigation remains cancelable.');
  console.log(`EVIDENCE: ${path.relative(repoRoot, runRoot)}`);
  }
} finally {
  await browser.close();
  if (harnessServer) await harnessServer.close();
}
