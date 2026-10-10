import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
const outDir = path.dirname(fileURLToPath(import.meta.url));
const playwrightPath = process.env.DOTS_PLAYWRIGHT_MODULE || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium} = await import(pathToFileURL(playwrightPath));
const chromePath = process.env.DOTS_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const base = process.env.DOTS_BASE_URL || 'http://127.0.0.1:5181/';
const artworkId = 'candidate-dots-20261005';
const version = 'v2';
const originalPath = '/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png';
const recordVideo = process.argv.includes('--record-video');

const instrumentation = () => {
  const capture = {armed: false, clickAt: null, marks: {}};
  const now = () => performance.now();
  const set = key => { if (capture.armed && capture.marks[key] == null) capture.marks[key] = now(); };
  const inspect = () => {
    if (!capture.armed) return;
    const dialog = document.querySelector('#studioOverlay');
    const detail = document.querySelector('.artwork-detail');
    if (dialog?.open) set('panel');
    const currentArtwork = detail?.dataset.artworkId === capture.artworkId
      && Boolean(detail.querySelector('.artwork-detail__title')?.textContent.trim());
    if (currentArtwork) set('metadata');
    const actions = detail?.querySelector('.artwork-detail__actions');
    const buttons = actions ? [...actions.querySelectorAll('button')] : [];
    if (buttons.length === 3 && buttons.every(button => button.textContent.trim() && button.getClientRects().length)) set('actionsVisible');
    if (currentArtwork && buttons.length === 3 && buttons.every(button => !button.disabled && button.getClientRects().length)) set('actionsUsable');
    const image = detail?.querySelector('.artwork-detail__image');
    if (currentArtwork && image && !image.hidden && image.complete && image.naturalWidth > 0) set('preview');
  };
  document.addEventListener('click', event => {
    const card = event.target.closest?.('.artwork-select');
    if (!capture.armed || card?.dataset.artworkId !== capture.artworkId) return;
    capture.clickAt = now();
    capture.marks = {};
    inspect();
  }, true);
  new MutationObserver(inspect).observe(document, {subtree: true, childList: true, attributes: true, characterData: true});
  window.__dotsPerfCapture = {
    arm(id) { capture.artworkId = id; capture.marks = {}; capture.clickAt = null; capture.armed = true; },
    disarm() { capture.armed = false; },
    snapshot() { inspect(); return {clickAt: capture.clickAt, marks: {...capture.marks}}; }
  };
};

function timingRecord(snapshot) {
  assert(Number.isFinite(snapshot.clickAt), 'The gallery card click was not captured.');
  const marks = snapshot.marks;
  for (const required of ['panel', 'metadata', 'actionsVisible', 'actionsUsable', 'preview']) {
    assert(Number.isFinite(marks[required]), `Missing timing milestone: ${required}`);
  }
  return Object.fromEntries(Object.entries(marks).map(([key, value]) => [key, Number((value - snapshot.clickAt).toFixed(3))]));
}

async function newContext(browser, videoPath = null) {
  const context = await browser.newContext({
    viewport: {width: 1440, height: 900},
    acceptDownloads: true,
    ...(videoPath ? {recordVideo: {dir: videoPath, size: {width: 1440, height: 900}}} : {})
  });
  await context.addInitScript(instrumentation);
  const page = await context.newPage();
  const responses = [];
  page.on('response', async response => {
    const headers = response.headers();
    responses.push({url: response.url(), status: response.status(), contentLength: Number(headers['content-length'] || 0)});
  });
  await page.goto(`${base}#/gallery`, {waitUntil: 'load'});
  await page.waitForFunction(() => document.documentElement.dataset.catalogRevision === 'artwork-catalog-20261009-v98');
  await page.locator(`#artworkGrid .artwork-select[data-artwork-id="${artworkId}"]`).waitFor({state: 'visible'});
  return {context, page, responses};
}

async function openSample(session, index, mode) {
  const {page, responses} = session;
  await page.evaluate(id => window.__dotsPerfCapture.arm(id), artworkId);
  const responseStart = responses.length;
  await page.locator(`#artworkGrid .artwork-select[data-artwork-id="${artworkId}"]`).click();
  await page.waitForFunction(() => Boolean(window.__dotsPerfCapture.snapshot().marks.preview), null, {timeout: 30000});
  const snapshot = await page.evaluate(() => window.__dotsPerfCapture.snapshot());
  const timing = timingRecord(snapshot);
  const entries = await page.evaluate(({clickAt, previewDelta}) => {
    const previewAt = clickAt + previewDelta;
    return performance.getEntriesByType('resource')
      .filter(entry => entry.startTime >= clickAt && entry.startTime <= previewAt)
      .map(entry => ({name: new URL(entry.name).pathname, initiatorType: entry.initiatorType, startTimeMs: Number((entry.startTime - clickAt).toFixed(3)), durationMs: Number(entry.duration.toFixed(3)), transferSize: entry.transferSize, encodedBodySize: entry.encodedBodySize, decodedBodySize: entry.decodedBodySize}));
  }, {clickAt: snapshot.clickAt, previewDelta: timing.preview});
  const detailResponses = responses.slice(responseStart);
  const originalResponses = detailResponses.filter(item => new URL(item.url).pathname === originalPath);
  const originalResources = entries.filter(item => item.name === originalPath);
  const row = {
    mode,
    sample: index,
    artwork: `${artworkId}@${version}`,
    clickToMs: timing,
    requestsFromClickToPreview: entries.length,
    resourceTiming: entries,
    responsesFromClick: detailResponses,
    originalFetchCount: originalResponses.length,
    originalResponseBytes: originalResponses.reduce((sum, item) => sum + item.contentLength, 0),
    originalResourceTiming: originalResources
  };
  await page.evaluate(() => window.__dotsPerfCapture.disarm());
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
  return row;
}

async function videoDemo(browser, name, repeat) {
  const videoDir = path.join(outDir, 'video', name);
  await fs.mkdir(videoDir, {recursive: true});
  const {context, page, responses} = await newContext(browser, videoDir);
  const rows = [];
  try {
    for (let index = 1; index <= repeat; index++) rows.push(await openSample({context, page, responses}, index, name));
  } finally {
    await context.close();
  }
  const videos = await fs.readdir(videoDir);
  const source = videos.find(file => file.endsWith('.webm'));
  if (source) await fs.rename(path.join(videoDir, source), path.join(outDir, 'video', `${name}.webm`));
  return rows;
}

await fs.mkdir(outDir, {recursive: true});
await fs.mkdir(path.join(outDir, 'video'), {recursive: true});
const browser = await chromium.launch({headless: true, executablePath: chromePath});
const cold = [];
const hot = [];
try {
  for (let index = 1; index <= 5; index++) {
    const session = await newContext(browser);
    try { cold.push(await openSample(session, index, 'cold-new-context')); }
    finally { await session.context.close(); }
  }
  const warmSession = await newContext(browser);
  try {
    for (let index = 1; index <= 5; index++) hot.push(await openSample(warmSession, index, 'hot-same-page-reopen'));
  } finally { await warmSession.context.close(); }

  const report = {
    baseline: 'v98 frozen runtime detail open; click through verified full-original preview decode',
    capturedAt: new Date().toISOString(),
    source: 'historical-runtime/v98-before-dark-gallery/dist',
    server: base,
    browser: {name: 'Google Chrome', version: browser.version(), executablePath: chromePath, headless: true},
    host: {platform: `${os.type()} ${os.release()}`, arch: os.arch(), cpu: os.cpus()[0]?.model, node: process.version},
    viewport: {width: 1440, height: 900},
    method: {
      cold: 'Five independent fresh browser contexts; each navigates to the frozen v98 gallery before measuring the card-click event through metadata, visible and enabled actions, and decoded preview.',
      hot: 'One context and page; after each close, the same artwork is reopened. The v98 loader uses fetch(cache: no-cache) plus full-byte SHA-256 and browser decode, so a hot sample is runtime-warm, not assumed to be network-free.',
      metrics: 'Browser performance.now milestones are captured in a document event listener and MutationObserver. ResourceTiming reports resource transferSize/encodedBodySize/decodedBodySize; HTTP response content-length is recorded for the source PNG. These are local browser measurements, not production network or user-perceived metrics.',
      video: recordVideo ? 'Separate illustrative recordings are produced after the raw samples to avoid recording overhead changing the timed runs.' : 'Video not requested in this run.'
    },
    target: {artworkId, version, originalPath},
    cold,
    hot,
    videoRows: null
  };
  await fs.writeFile(path.join(outDir, 'v98-detail-performance.json'), `${JSON.stringify(report, null, 2)}\n`);
  if (recordVideo) {
    try {
      report.videoRows = {
        cold: await videoDemo(browser, 'cold-detail-demo', 1),
        hot: await videoDemo(browser, 'hot-five-reopen-demo', 5)
      };
    } catch (error) {
      report.videoError = String(error?.message || error);
    }
    await fs.writeFile(path.join(outDir, 'v98-detail-performance.json'), `${JSON.stringify(report, null, 2)}\n`);
  }
  console.log(JSON.stringify({cold: cold.map(row => row.clickToMs), hot: hot.map(row => row.clickToMs), originalBytes: cold.map(row => row.originalResponseBytes), videoRows: report.videoRows ? 'recorded' : (report.videoError || 'not-recorded')}, null, 2));
} finally {
  await browser.close();
}
