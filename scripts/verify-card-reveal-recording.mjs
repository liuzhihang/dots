import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {ARTWORKS, createSnapshot, getAsset} from '../dist/studio-artwork-catalog.js?v=90';
import {revealFeaturesFor} from '../dist/studio-draw.js?v=90';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(process.env.DOTS_EVIDENCE_DIR || 'design/acceptance/current-20261007-v90/reveal-recording');
const base = process.env.DOTS_BASE_URL || 'http://127.0.0.1:5180/';
const playwrightPath = process.env.DOTS_PLAYWRIGHT_MODULE || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium} = await import(pathToFileURL(playwrightPath));

const expectedIds = ['animal-white-cat', 'dots-rose-glasses', 'muse-rose-flowers', 'candidate-humans-20261005', 'grok-green-cloud'];
const expectedIndices = expectedIds.map(id => ARTWORKS.findIndex(artwork => artwork.id === id));
assert(expectedIndices.every(index => index >= 0), `recording works are missing from the live catalogue: ${expectedIds.join(', ')}`);
assert.equal(ARTWORKS.length, 15, 'this recording is tied to the current 15-work catalogue snapshot');
const outputPaths = {
  videoDirectory: path.join(output, 'video'),
  frames: path.join(output, 'video', 'frames'),
  screenshots: path.join(output, 'screenshots')
};
await fs.mkdir(outputPaths.frames, {recursive: true});
await fs.mkdir(outputPaths.screenshots, {recursive: true});
const ffmpegPath = process.env.DOTS_FFMPEG_PATH || '/opt/homebrew/bin/ffmpeg';
await fs.access(ffmpegPath);

const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.DOTS_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const context = await browser.newContext({
  viewport: {width: 1440, height: 900},
  reducedMotion: 'no-preference',
  acceptDownloads: true,
  permissions: ['clipboard-read', 'clipboard-write']
});
const page = await context.newPage();
const consoleEntries = [];
const pageErrors = [];
const failedRequests = [];
const httpErrors = [];
const results = [];
let recording = false;
let frameCapturePromise = null;
let frameCount = 0;
const frameTimes = [];
const factsBySlot = Object.fromEntries(['style','appearance','palette-material','clothing','accessory','prop'].map(key=>[key,[key]]));
page.on('console', message => consoleEntries.push({type: message.type(), text: message.text(), location: message.location()}));
page.on('pageerror', error => pageErrors.push(error.stack || error.message));
page.on('requestfailed', request => failedRequests.push({url: request.url(), error: request.failure()?.errorText || 'unknown'}));
page.on('response', response => { if (response.status() >= 400) httpErrors.push({status: response.status(), url: response.url()}); });

async function waitForDecodedArtwork() {
  await page.waitForFunction(() => {
    const dialog = document.querySelector('dialog[open]');
    const view = dialog?.querySelector('.fr-view[data-phase="result"]');
    const image = view?.querySelector('.fr-result-image');
    return Boolean(image?.complete && image.naturalWidth > 0 && image.naturalHeight > 0);
  }, {timeout: 20000});
}

async function inspectPaintedImage(selector) {
  return page.locator(selector).evaluate(async image => {
    if (typeof image.decode === 'function') await image.decode();
    else if (!image.complete) await new Promise((resolve, reject) => {
      image.addEventListener('load', resolve, {once: true});
      image.addEventListener('error', reject, {once: true});
    });
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const canvas = document.createElement('canvas');
    canvas.width = 48;
    canvas.height = 48;
    const context = canvas.getContext('2d', {willReadFrequently: true});
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let nonTransparentPixelCount = 0;
    let maxAlpha = 0;
    for (let index = 3; index < pixels.length; index += 4) {
      const alpha = pixels[index];
      if (alpha > 0) nonTransparentPixelCount += 1;
      if (alpha > maxAlpha) maxAlpha = alpha;
    }
    const rect = image.getBoundingClientRect();
    const style = getComputedStyle(image);
    return {
      src: image.currentSrc,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      complete: image.complete,
      nonTransparentPixelCount,
      maxAlpha,
      rect: {x: rect.x, y: rect.y, width: rect.width, height: rect.height},
      display: style.display,
      visibility: style.visibility,
      opacity: style.opacity
    };
  });
}

async function readResult(expectedId, stage) {
  await page.waitForFunction(() => {
    const view=document.querySelector('dialog[open] .fr-view');
    return view?.dataset.phase==='revealing' && view.querySelectorAll('.fr-reel[data-stopped="true"]').length===6 && view.querySelector('.fr-result-card').hidden;
  }, {timeout:20000});
  await page.screenshot({path:path.join(outputPaths.screenshots, `${stage}-all-stopped-before-result.png`)});
  await page.waitForFunction(() => document.querySelector('dialog[open] .fr-view')?.dataset.phase === 'result', {timeout: 20000});
  await waitForDecodedArtwork();
  const current = await page.evaluate(() => {
    const view = document.querySelector('dialog[open] .fr-view[data-phase="result"]');
    const image = view.querySelector('.fr-result-image');
    return {
      artworkId: view.dataset.artworkId,
      title: view.querySelector('.fr-result-title')?.textContent?.trim() || '',
      resultImage: {src: image.currentSrc, width: image.naturalWidth, height: image.naturalHeight, complete: image.complete},
      phase: view.dataset.phase,
      slotCount: Number(view.querySelector('.fr-reel-stage')?.dataset.slotCount || view.querySelectorAll('.fr-reel').length),
      slots: [...view.querySelectorAll('.fr-reel')].map(reel => ({
        index: Number(reel.dataset.index),
        key: reel.dataset.slot,
        stopped: reel.dataset.stopped,
        artworkId: reel.dataset.centerArtwork,
        value: reel.dataset.centerValue,
        visualKind: reel.querySelector('.fr-reel-item.is-centered .fr-reel-visual')?.dataset.visualKind || '',
        visualId: reel.querySelector('.fr-reel-item.is-centered .fr-reel-visual')?.dataset.visualId || '',
        image: reel.querySelector('.fr-reel-item.is-centered .fr-reel-image')?.getAttribute('src') || ''
      })),
      actions: [...view.querySelectorAll('.fr-actions [data-fr]')].filter(control => !control.hidden).map(control => control.dataset.fr),
      extraActions: [...view.querySelectorAll('.fr-extra-actions [data-fr]')].filter(control => !control.hidden).map(control => control.dataset.fr)
    };
  });
  assert.equal(current.phase, 'result');
  assert.equal(current.artworkId, expectedId, `${stage}: actual DrawEngine selection is ${current.artworkId}, expected ${expectedId}`);
  assert.equal(current.slotCount, 6, `${stage}: six actual feature cards should be shown`);
  assert.equal(current.slots.length, 6);
  assert(current.slots.every(slot => slot.stopped === 'true' && slot.artworkId === expectedId), `${stage}: every stopped card must point to the frozen Artwork`);
  assert.deepEqual(current.actions, ['copy', 'download', 'random'], `${stage}: result actions put copy and download before secondary reroll`);
  assert.deepEqual(current.extraActions, ['chatgpt'], `${stage}: ChatGPT continuation remains secondary`);
  const artwork = ARTWORKS.find(item => item.id === expectedId);
  const expectedByKind = revealFeaturesFor(artwork);
  for (const slot of current.slots) {
    const expectedValue = expectedByKind.filter(feature => factsBySlot[slot.key].includes(feature.kind)).map(feature => feature.label).join(' · ');
    assert.equal(slot.value, expectedValue, `${stage}: ${slot.key} card should show only the selected Artwork's real feature`);
  }
  assert(current.resultImage.src.startsWith('blob:'), `${stage}: final result uses the verified preloaded local image blob`);
  assert(current.resultImage.complete && current.resultImage.width > 0 && current.resultImage.height > 0, `${stage}: final image decoded before the result was recorded`);
  const resultPixels = await inspectPaintedImage('dialog[open] .fr-result-image');
  const stylePixels = await inspectPaintedImage('dialog[open] .fr-reel[data-slot="style"] .fr-reel-item.is-centered .fr-reel-image');
  for (const [label, image] of [['final result', resultPixels], ['style card', stylePixels]]) {
    assert(image.nonTransparentPixelCount > 0 && image.maxAlpha > 0, `${stage}: ${label} HTMLImageElement draws non-transparent source pixels to a test canvas`);
    assert(image.rect.width > 0 && image.rect.height > 0 && image.display !== 'none' && image.visibility !== 'hidden' && Number(image.opacity) > 0, `${stage}: ${label} occupies a visible layout box after decode and double animation frame`);
  }
  const snapshot = createSnapshot(expectedId);
  const original = getAsset(snapshot.artwork.assetRefs.original);
  const events = await page.evaluate(id => window.__revealRecordingTimeline.filter(event => event.artworkId === id && ['revealing', 'result'].includes(event.phase)), expectedId);
  results.push({stage, artworkId: expectedId, title: snapshot.artwork.title, result: current, paintedImages: {result: resultPixels, style: stylePixels}, sourceAsset: {id: original.id, sha256: original.sha256, width: original.width, height: original.height}});
  assert(events.some(event => event.phase === 'revealing'), `${stage}: timeline missed normal rolling state: ${JSON.stringify(events)}`);
  let previousStops = [];
  for (const event of events) {
    const currentStops = event.stoppedSlots;
    assert.deepEqual(currentStops.slice(0, previousStops.length), previousStops, `${stage}: stopped slots never regress`);
    assert.deepEqual(currentStops, Array.from({length: currentStops.length}, (_, index) => index), `${stage}: feature cards stop in index order`);
    if (event.phase === 'revealing') assert.equal(event.resultHidden,true,`${stage}: result stays hidden throughout all rolling stages`);
    if (event.phase === 'result') assert.deepEqual(currentStops, [0, 1, 2, 3, 4, 5], `${stage}: result cannot appear before all six slots stop`);
    previousStops = currentStops;
  }
  assert(events.some(e=>e.phase==='revealing'&&e.stoppedSlots.length===6&&e.resultHidden), `${stage}: all cards stop before complete work is revealed`);
  assert.deepEqual(previousStops, [0, 1, 2, 3, 4, 5], `${stage}: timeline reaches all six sequentially stopped cards`);
  await page.screenshot({path: path.join(outputPaths.screenshots, `${stage}.png`)});
  return current;
}

function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function startFrameCapture() {
  recording = true;
  frameCapturePromise = (async () => {
    while (recording) {
      const frame = await page.screenshot({type: 'jpeg', quality: 78, animations: 'allow'});
      await fs.writeFile(path.join(outputPaths.frames, `frame-${String(frameCount).padStart(5, '0')}.jpg`), frame);
      frameCount += 1;
      frameTimes.push(Number(process.hrtime.bigint()) / 1e6);
      await delay(25);
    }
  })();
}

async function stopFrameCapture() {
  recording = false;
  if (frameCapturePromise) await frameCapturePromise;
  frameCapturePromise = null;
}

try {
  await page.addInitScript(() => {
    const nativeRandom = Math.random.bind(Math);
    let nextDraw = null;
    window.__recordingDraw = {
      consumed: [],
      force(value) { nextDraw = value; },
      get pending() { return nextDraw; }
    };
    Math.random = () => {
      if (nextDraw !== null) {
        const value = nextDraw;
        nextDraw = null;
        window.__recordingDraw.consumed.push(value);
        return value;
      }
      return nativeRandom();
    };
    const entries = [];
    let last = '';
    const snapshot = () => {
      const modalView = document.querySelector('dialog[open] .fr-view');
      const view = modalView || [...document.querySelectorAll('.fr-view')].find(element => element.getClientRects().length && !element.closest('[hidden]'));
      if (!view) return;
      const state = {
        t: Math.round(performance.now()),
        phase: view.dataset.phase || '',
        artworkId: view.dataset.artworkId || '',
        stoppedSlots: [...view.querySelectorAll('.fr-reel[data-stopped="true"]')].map(reel => Number(reel.dataset.index)),
        activeSlot: view.querySelector('.fr-reel.is-rolling')?.dataset.index ?? null,
        resultHidden: view.querySelector('.fr-result-card')?.hidden ?? true,
        scrollLeft: view.querySelector('.fr-reel-stage')?.scrollLeft || 0
      };
      const key = JSON.stringify([state.phase, state.artworkId, state.stoppedSlots, state.activeSlot]);
      if (key !== last) { entries.push(state); last = key; }
    };
    window.__revealRecordingTimeline = entries;
    const observer = new MutationObserver(snapshot);
    const installObserver = () => {
      if (!document.documentElement) { setTimeout(installObserver, 0); return; }
      observer.observe(document.documentElement, {subtree: true, childList: true, attributes: true, attributeFilter: ['data-phase', 'data-artwork-id', 'data-stopped', 'class']});
      snapshot();
      setInterval(snapshot, 16);
    };
    installObserver();
    window.addEventListener('load', snapshot, {once: true});
  });

  await page.goto(`${base.replace(/#.*$/, '')}#home`, {waitUntil: 'load'});
  await page.waitForFunction(() => document.documentElement.dataset.cache === '90' && document.documentElement.dataset.catalogRevision);
  assert.equal(await page.locator('.hero-actions [data-command="random"]').count(), 1);
  assert.equal(await page.locator('dialog').count(), 1);
  await startFrameCapture();

  await page.locator('.hero-actions [data-command="random"]').click();
  await page.locator('dialog[open] .fr-view').waitFor({state: 'visible'});
  assert.equal(await page.locator('dialog[open] .fr-view').getAttribute('data-phase'),'ready');
  await page.screenshot({path: path.join(outputPaths.screenshots,'initial-ready.png')});
  const stages=['cat-no-accessory','dots-with-glasses','muse-holding-flowers','candidate-humans-recaptured-1440','grok-capsule-eyes'];
  for(let index=0;index<expectedIds.length;index++){
    // Only the RNG is controlled. The actual shared engine keeps its hard pool,
    // no-replacement bag, asset validation, timing, and frozen result contract.
    const remaining=ARTWORKS.map(artwork=>artwork.id).filter(id=>!expectedIds.slice(0,index).includes(id));
    const position=remaining.indexOf(expectedIds[index]);
    assert(position>=0);
    await page.evaluate(value=>window.__recordingDraw.force(value),(position+0.2)/remaining.length);
    await page.locator('dialog[open] [data-fr="random"]').click();
    await page.waitForFunction(()=>document.querySelector('dialog[open] .fr-view')?.dataset.phase==='revealing');
    await readResult(expectedIds[index],stages[index]);
  }

  const dialogState = await page.evaluate(() => ({
    open: document.querySelector('dialog')?.open,
    timeline: window.__revealRecordingTimeline,
    draws: window.__recordingDraw.consumed,
    pending: window.__recordingDraw.pending
  }));
  assert.equal(dialogState.open, true);
  assert.equal(dialogState.pending, null, 'each forced draw value is consumed once by the actual shared DrawEngine');
  assert.equal(dialogState.draws.length, expectedIds.length);
  assert(dialogState.timeline.some(event => event.phase === 'revealing'), `recording includes the normal card animation, not Skip or reduced motion: ${JSON.stringify(dialogState.timeline)}`);
  assert(dialogState.timeline.some(event => event.phase === 'result' && event.artworkId === expectedIds[2]), 'recording reaches the final frozen result');
  await page.locator('#overlayClose').click();
  await page.waitForFunction(() => !document.querySelector('dialog')?.open && !history.state?.overlayTrail?.length);
  assert.equal(await page.locator('dialog[open]').count(), 0, 'close action dismisses the single result overlay');
  dialogState.timeline.push({t: null, phase: 'closed', artworkId: '', stoppedSlots: [], activeSlot: null});
  await page.screenshot({path: path.join(outputPaths.screenshots, 'closed-home.png'), fullPage: true});
  await stopFrameCapture();

  assert.deepEqual(pageErrors, [], `browser page errors: ${pageErrors.join('\n')}`);
  assert(frameCount >= 30, `capture should include a continuous real UI sequence, got ${frameCount} frames`);
  const elapsedMs = frameTimes.length > 1 ? frameTimes.at(-1) - frameTimes[0] : 0;
  const meanCaptureFps = elapsedMs > 0 ? (frameTimes.length - 1) * 1000 / elapsedMs : 0;
  const frameDurations = frameTimes.slice(0, -1).map((time, index) => Math.max(0.035, (frameTimes[index + 1] - time) / 1000));
  const lastDuration = frameDurations.at(-1) || 0.1;
  const concatEntries = frameDurations.map((duration, index) => `file 'frames/frame-${String(index).padStart(5, '0')}.jpg'\nduration ${duration.toFixed(6)}`);
  concatEntries.push(`file 'frames/frame-${String(frameCount - 1).padStart(5, '0')}.jpg'\nduration ${lastDuration.toFixed(6)}`);
  concatEntries.push(`file 'frames/frame-${String(frameCount - 1).padStart(5, '0')}.jpg'`);
  const concatFile = path.join(outputPaths.videoDirectory, 'frames.txt');
  await fs.writeFile(concatFile, `${concatEntries.join('\n')}\n`);
  const videoPath = path.join(outputPaths.videoDirectory, 'reveal-flow.mp4');
  const encode = spawnSync(ffmpegPath, [
    '-hide_banner', '-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', concatFile,
    '-fps_mode', 'vfr',
    '-vf', 'scale=1440:900', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '23',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', videoPath
  ], {encoding: 'utf8'});
  assert.equal(encode.status, 0, `ffmpeg encode failed: ${encode.stderr || encode.error || encode.status}`);
  const videoInfo = await fs.stat(videoPath);
  assert(videoInfo.size > 10000, `encoded video is unexpectedly small (${videoInfo.size} bytes)`);
  let encodedDuration = null;
  let encodedFrameRate = null;
  const ffprobePath = process.env.DOTS_FFPROBE_PATH || '/opt/homebrew/bin/ffprobe';
  try {
    const probe = spawnSync(ffprobePath, ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=avg_frame_rate', '-show_entries', 'format=duration', '-of', 'json', videoPath], {encoding: 'utf8'});
    if (probe.status === 0) {
      const parsed = JSON.parse(probe.stdout);
      encodedDuration = Number(parsed.format?.duration) || null;
      encodedFrameRate = parsed.streams?.[0]?.avg_frame_rate || null;
    }
  } catch { /* The video itself remains the evidence; metadata is optional if ffprobe is absent. */ }
  const relativeVideo = path.relative(root, videoPath);
  const report = {
    cache: '90',
    base,
    catalogue: {count: ARTWORKS.length, selectedIds: expectedIds, expectedIndices},
    results,
    timeline: dialogState.timeline,
    timing: {elapsedMs, frameCount, meanCaptureFps, encodedDurationSeconds: encodedDuration, encodedAverageFrameRate: encodedFrameRate, frameDurationsSeconds: frameDurations},
    forcedDrawValues: dialogState.draws,
    consoleEntries,
    pageErrors,
    failedRequests,
    httpErrors,
    video: relativeVideo,
    videoSource: `Continuous Chromium viewport screenshots (${frameCount} frames) encoded as variable frame rate with existing ${ffmpegPath}; Playwright packaged ffmpeg was unavailable, so no dependency was installed`,
    screenshots: results.map(result => path.relative(root, path.join(outputPaths.screenshots, `${result.stage}.png`))).concat(path.relative(root, path.join(outputPaths.screenshots, 'closed-home.png'))),
    simulation: 'Playwright Chromium 1440 x 900 CSS viewport; no physical device was tested',
    artApproval: 'not performed; recording and screenshots are engineering evidence only',
    published: false
  };
  await fs.writeFile(path.join(output, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
  await fs.writeFile(path.join(output, 'console.json'), `${JSON.stringify({consoleEntries, pageErrors, failedRequests, httpErrors}, null, 2)}\n`);
  console.log(`Card reveal recording passed: ${expectedIds.join(' -> ')}; video: ${relativeVideo}`);
} finally {
  await stopFrameCapture().catch(() => {});
  await context.close();
  await browser.close();
}
