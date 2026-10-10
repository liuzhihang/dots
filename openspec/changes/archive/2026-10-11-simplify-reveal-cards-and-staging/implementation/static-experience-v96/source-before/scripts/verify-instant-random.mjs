import {expectedDisplayKeys, reviewPolicy} from './reveal-test-fixtures.mjs';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {ARTWORKS} from '../dist/studio-artwork-catalog.js?v=95';

// Browser-level checks for one-click discovery. This deliberately delays real
// registered asset fetches; it does not forge phases or reveal state.
const playwrightModule = process.env.DOTS_PLAYWRIGHT_MODULE
  || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium} = await import(pathToFileURL(playwrightModule));
const baseUrl = process.env.DOTS_BASE_URL || 'http://127.0.0.1:5180/';
const output = path.resolve(process.env.DOTS_INSTANT_EVIDENCE || 'design/acceptance/current-20261008-v95/instant-random');
await fs.mkdir(output, {recursive: true});
const browser = await chromium.launch({headless: true, executablePath: process.env.DOTS_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const context = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'no-preference'});
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
const root = '#studioOverlay .fr-view';
const checks = [];

async function ready(hash = 'home') {
  await page.goto(`${baseUrl}#${hash}`);
  await page.waitForFunction(() => document.documentElement.dataset.cache === '94' && document.documentElement.dataset.catalogRevision);
}
async function phaseIsAny(phases) {
  await page.waitForFunction(({root, phases}) => phases.includes(document.querySelector(root)?.dataset.phase), {root, phases}, {timeout: 20000});
}
async function visibleRoot() {
  await page.locator(root).waitFor({state: 'visible'});
  return page.locator(root);
}
async function resultReady() {
  await page.waitForFunction(root => {
    const view = document.querySelector(root);
    return view?.dataset.phase === 'result' && view.dataset.displayResult === 'true' && !view.querySelector('.fr-result-card')?.hidden;
  }, root, {timeout: 30000});
}
async function closeRandom() {
  await page.locator('#overlayClose').click();
  await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
}
async function assertHiddenUntilResult() {
  const bad = await page.evaluate(root => {
    const view = document.querySelector(root), card = view?.querySelector('.fr-result-card');
    if (!view || !card) return 'random view/result missing';
    const visible = !card.hidden && getComputedStyle(card).display !== 'none' && card.getClientRects().length > 0;
    return view.dataset.phase !== 'result' && (visible || view.dataset.displayResult === 'true') ? `${view.dataset.phase} exposed the result` : null;
  }, root);
  assert.equal(bad, null);
}

try {
  // A single home click must create a live, visibly shuffling modal while the
  // selected Artwork's real image/display resources are still in flight.
  await ready();
  const delayedRequests = [];
  await page.route('**/*', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (request.resourceType() === 'fetch' && /\.(?:png|webp|jpe?g|avif)$/i.test(url.pathname)) {
      delayedRequests.push({url: url.pathname, startedAt: Date.now()});
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    try { await route.continue(); } catch {}
  });
  await page.locator('.hero-actions [data-command="random"]').click();
  const homeView = await visibleRoot();
  await page.waitForFunction(root => document.querySelector(root)?.dataset.phase === 'preloading', root, {timeout: 10000});
  await assertHiddenUntilResult();
  const opening = await homeView.evaluate(view => {
    const result = view.querySelector('.fr-result-card');
    const tracks = [...view.querySelectorAll('.fr-card-back-track')];
    return {
      artworkId: view.dataset.artworkId,
      phase: view.dataset.phase,
      feedback: view.dataset.feedback,
      preparing: view.querySelector('.fr-reveal')?.classList.contains('is-preparing') ?? false,
      cardBackFaces: view.querySelectorAll('.fr-preparing-window .fr-card-back').length,
      preparingWindows: view.querySelectorAll('.fr-preparing-window').length,
      tracks: tracks.length,
      animations: tracks.map(track => getComputedStyle(track).animationName),
      resultHidden: result.hidden,
      resultDisplay: getComputedStyle(result).display,
      dataDisplayResult: view.dataset.displayResult,
      statusText: view.querySelector('.fr-status')?.textContent.trim() || '',
      hiddenEngineeringCopy: /已选定完整作品|校验原图和卡片资源|displaySlotKeys|styleIdentity/.test(view.innerText)
    };
  });
  assert.equal(opening.phase, 'preloading');
  assert.equal(opening.feedback, 'shuffling');
  assert.equal(opening.preparing, true);
  assert.equal(opening.cardBackFaces, expectedDisplayKeys(opening.artworkId).length * 3);
  assert.equal(opening.preparingWindows, expectedDisplayKeys(opening.artworkId).length);
  assert.equal(opening.tracks, expectedDisplayKeys(opening.artworkId).length);
  assert(opening.animations.every(name => name && name !== 'none'), `card backs show a real continuous shuffle while resources load: ${JSON.stringify(opening.animations)}`);
  assert.equal(opening.resultHidden, true);
  assert.equal(opening.dataDisplayResult, 'false');
  assert.equal(opening.hiddenEngineeringCopy, false, 'user-facing status does not expose asset-validation implementation details');
  await page.screenshot({path: path.join(output, 'home-single-click-shuffling-390.png')});
  const initialTransforms = await homeView.locator('.fr-card-back-track').evaluateAll(async tracks => {
    const before = tracks.map(track => getComputedStyle(track).transform);
    await new Promise(resolve => setTimeout(resolve, 180));
    return {before, after: tracks.map(track => getComputedStyle(track).transform)};
  });
  assert(initialTransforms.after.some((value, index) => value !== initialTransforms.before[index]), 'card-back motion changes during real delayed asset requests');
  await assertHiddenUntilResult();
  await page.locator(`${root} [data-fr="skip"]`).click();
  assert.equal(await homeView.getAttribute('data-phase'), 'preloading', 'skip does not stop cards before resources finish');
  assert.equal(await homeView.locator('.fr-reel[data-stopped="true"]').count(), 0);
  assert(delayedRequests.length > 0, 'the 3-second route delay intercepted actual registered asset fetches');
  await page.waitForFunction(root => ['revealing', 'awaiting-reveal', 'result'].includes(document.querySelector(root)?.dataset.phase), root, {timeout: 30000});
  const beforeResult = await homeView.evaluate(view => ({phase: view.dataset.phase, resultHidden: view.querySelector('.fr-result-card').hidden, resultVisible: view.dataset.displayResult === 'true'}));
  await page.locator(`${root} .fr-reel-image`).evaluateAll(async images => {
    await Promise.all(images.map(image => image.decode()));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await page.screenshot({path: path.join(output, 'home-single-click-after-preload-390.png')});
  checks.push({oneClickHome: {opening, transformChanged: true, delayedAssetFetches: delayedRequests.length, firstPostPreloadState: beforeResult}});
  await page.unroute('**/*');
  await resultReady();
  const frozenHomeArtwork = opening.artworkId;
  assert.equal(await homeView.locator('.fr-reel').count(), expectedDisplayKeys(frozenHomeArtwork).length, 'same card count survives the resource wait and skip');
  assert.equal(await homeView.getAttribute('data-artwork-id'), frozenHomeArtwork, 'the selected Artwork identity stays frozen through completion');
  await closeRandom();

  // Gallery launch is also one click and freezes the current typed-tag query.
  await page.locator('[data-page="gallery"]').click();
  await page.locator('#galleryTags [data-tag-id="style:dots"]').click();
  assert.equal(await page.locator('[data-artwork-card]').count(), ARTWORKS.filter(item => item.status === 'published' && item.tagIds.includes('style:dots')).length);
  await page.locator('#galleryPortal [data-command="random"]').click();
  await visibleRoot();
  await resultReady();
  const galleryArtworkId = await page.locator(root).getAttribute('data-artwork-id');
  const selected = ARTWORKS.find(item => item.id === galleryArtworkId);
  assert(selected && selected.tagIds.includes('style:dots'), 'one-click gallery discovery returns an Artwork in the frozen style:dots query');
  assert.deepEqual(await page.locator(`${root} .fr-reel`).evaluateAll(cards => cards.map(card => card.dataset.centerArtwork)), Array(expectedDisplayKeys(galleryArtworkId).length).fill(galleryArtworkId));
  checks.push({galleryOneClickQueryBinding: {query: 'style:dots', artworkId: galleryArtworkId, resultBelongsToFrozenQuery: true}});
  await page.locator(`${root} [data-fr="detail"]`).click();
  await page.locator('.artwork-detail__image').waitFor({state: 'visible'});
  await page.locator('#overlayBack').click();
  await page.waitForFunction(({root, galleryArtworkId}) => {
    const view = document.querySelector(root);
    return view?.dataset.phase === 'result' && view.dataset.artworkId === galleryArtworkId;
  }, {root, galleryArtworkId});
  assert.equal(await page.locator(`${root} .fr-reel.is-landed`).count(), expectedDisplayKeys(galleryArtworkId).length, 'returning from detail restores the same frozen feature cards');
  checks.push({detailReturn: {artworkId: galleryArtworkId, sameResultAndCardsRestored: true}});
  await closeRandom();

  // Reduce motion still starts on the first home click, but shows the frozen static
  // cards and waits for the user's explicit reveal action.
  await page.emulateMedia({reducedMotion: 'reduce'});
  await page.locator('[data-page="home"]').click();
  await page.locator('.hero-actions [data-command="random"]').click();
  const reducedView = await visibleRoot();
  await page.waitForFunction(root => document.querySelector(root)?.dataset.phase === 'awaiting-reveal', root, {timeout: 30000});
  const reduced = await reducedView.evaluate(view => ({
    artworkId: view.dataset.artworkId,
    phase: view.dataset.phase,
    feedback: view.dataset.feedback,
    preparing: view.querySelector('.fr-reveal')?.classList.contains('is-preparing') ?? false,
    mediaMatches: matchMedia('(prefers-reduced-motion: reduce)').matches,
    moving: view.querySelectorAll('.fr-reel.is-rolling').length,
    stopped: view.querySelectorAll('.fr-reel[data-stopped="true"]').length,
    backTrackAnimations: [...view.querySelectorAll('.fr-card-back-track')].map(track => getComputedStyle(track).animationName),
    resultHidden: view.querySelector('.fr-result-card').hidden,
    revealActionVisible: !view.querySelector('[data-fr="reveal-partner"]').hidden
  }));
  assert.equal(reduced.mediaMatches, true);
  assert.equal(reduced.feedback, 'static');
  assert.equal(reduced.preparing, false);
  assert.equal(reduced.moving, 0);
  assert.equal(reduced.stopped, expectedDisplayKeys(reduced.artworkId).length);
  assert(reduced.backTrackAnimations.every(name => name === 'none'));
  assert.equal(reduced.resultHidden, true);
  assert.equal(reduced.revealActionVisible, true);
  await assertHiddenUntilResult();
  await page.screenshot({path: path.join(output, 'home-reduced-motion-static-cards-390.png')});
  await reducedView.locator('[data-fr="reveal-partner"]').click();
  await resultReady();
  checks.push({reducedMotion: reduced});
  await closeRandom();

  assert.deepEqual(errors, [], `browser/console errors: ${errors.join('\n')}`);
  await fs.writeFile(path.join(output, 'report.json'), JSON.stringify({
    sourceCache: 94,
    baseUrl,
    viewport: {width: 390, height: 844},
    viewportKind: 'simulated CSS viewport; physical phone not tested',
    checks,
    delayedAssetRequests: delayedRequests,
    errors,
    artApproval: 'pending user review',
    generatedAt: new Date().toISOString()
  }, null, 2) + '\n');
  console.log(`One-click random browser checks passed: ${checks.length}; ${output}`);
} finally {
  await context.close();
  await browser.close();
}
