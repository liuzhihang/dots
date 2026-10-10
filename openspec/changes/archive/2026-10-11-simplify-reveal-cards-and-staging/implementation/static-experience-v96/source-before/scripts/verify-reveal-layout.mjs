import {expectedDisplayKeys, reviewPolicy} from './reveal-test-fixtures.mjs';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {ARTWORKS, getAsset, createSnapshot, STYLE_IDENTITIES} from '../dist/studio-artwork-catalog.js';
import {createDrawEngine} from '../dist/studio-draw.js';
import {revealFeaturesFor} from '../dist/studio-draw.js';
import {featureVisualFor} from '../dist/studio-feature-visuals.js';

const playwrightModule = process.env.DOTS_PLAYWRIGHT_MODULE
  || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium} = await import(pathToFileURL(playwrightModule));
const baseUrl = process.env.DOTS_BASE_URL || 'http://127.0.0.1:5180/';
const evidenceDirectory = process.env.DOTS_LAYOUT_EVIDENCE
  || 'design/acceptance/current-20261008-v95/layout';
const reportPath = process.env.DOTS_LAYOUT_REPORT || path.join(evidenceDirectory, 'reveal-layout-report.json');
const requestedViewports = new Set((process.env.DOTS_LAYOUT_VIEWPORTS || '').split(',').map(value => value.trim()).filter(Boolean).map(Number).filter(Number.isFinite));
const viewportCases = [
  {width: 1440, height: 900},
  {width: 1280, height: 900},
  {width: 768, height: 844},
  {width: 390, height: 844},
  {width: 320, height: 700}
].filter(viewport => requestedViewports.size === 0 || requestedViewports.has(viewport.width));
assert(viewportCases.length > 0, 'at least one configured layout viewport is selected');
const expectedSlots = ['appearance', 'palette-material', 'clothing', 'accessory', 'prop'];
const indicesFor = id => expectedDisplayKeys(id).map((_, index) => String(index));
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.DOTS_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});
const context = await browser.newContext({viewport: viewportCases[0], reducedMotion: 'no-preference'});
const page = await context.newPage();
const pageErrors = [];
const checks = [];
page.on('pageerror', error => pageErrors.push(error.message));
await fs.mkdir(evidenceDirectory, {recursive: true});

function revealSelector(surface) {
  return surface === 'modal' ? '#studioOverlay .fr-view' : '#gameReveal .fr-view';
}

async function openSurface(surface, viewport, {watchStops = false} = {}) {
  await page.setViewportSize(viewport);
  await page.goto(`${baseUrl}#${surface === 'game' ? 'game' : 'home'}`);
  await page.reload();
  await page.waitForFunction(() => Boolean(document.documentElement.dataset.catalogRevision));
  if (surface === 'game') {
    if (watchStops) await installStopWatcher(surface);
    await assertNoScopeControls(surface);
  } else if (watchStops) await installStopWatcher(surface);
  if (surface === 'modal') await page.locator('.hero-actions [data-command="random"]').click();
  const selector = revealSelector(surface);
  await page.locator(selector).waitFor({state: 'visible'});
  if (surface === 'game') {
    assert.equal(await page.locator(selector).getAttribute('data-phase'), 'ready', 'the separate game page still waits for its explicit start action');
    assert.equal(await page.locator(`${selector} .fr-preparing-window`).count(), 0, 'the game page opens with neutral feedback before an Artwork is selected');
    assert.equal(await page.locator(`${selector} .fr-preparing-window .fr-card-back`).count(), 0, 'no fake card count is shown before selection');
  } else {
    await page.waitForFunction(sel => ['selecting', 'preloading', 'revealing', 'awaiting-reveal', 'result', 'empty', 'error'].includes(document.querySelector(sel)?.dataset.phase), selector, {timeout: 10000});
    assert(['selecting', 'preloading', 'revealing', 'awaiting-reveal', 'result', 'empty', 'error'].includes(await page.locator(selector).getAttribute('data-phase')), 'one home click immediately starts the random discovery flow');
    const loading = await page.locator(selector).evaluate(root => ({phase:root.dataset.phase, artworkId:root.dataset.artworkId, windows:root.querySelectorAll('.fr-preparing-window').length, faces:root.querySelectorAll('.fr-preparing-window .fr-card-back').length}));
    if (loading.phase === 'preloading') {
      const count=expectedDisplayKeys(loading.artworkId).length;
      assert.equal(loading.windows,count,'single-click modal uses the frozen card count');
      assert.equal(loading.faces,count*3,'each waiting card exposes a three-position card-back track');
    }
  }
  assert.equal(await page.locator(`${selector} .fr-result-card`).evaluate(card => card.hidden), true, `${surface}: opening does not expose a result`);
  assert.equal(await page.locator(selector).getAttribute('data-display-result'), 'false', `${surface}: opening exposes no completed result`);
  const ready = await page.locator(selector).evaluate(root => ({
    artworkId: root.dataset.artworkId,
    phase: root.dataset.phase || '',
    slots: [...root.querySelectorAll('.fr-reel')].map(slot => {const r=slot.getBoundingClientRect();return {key:slot.dataset.slot, stopped:slot.dataset.stopped==='true', x:r.x, width:r.width, height:r.height};}),
    stage: (()=>{const s=root.querySelector('.fr-reel-stage');const r=s.getBoundingClientRect();return {x:r.x,width:r.width};})(),
    visibleActions: [...root.querySelectorAll('[data-fr]')].filter(button=>!button.hidden && getComputedStyle(button).display !== 'none' && getComputedStyle(button).visibility !== 'hidden' && button.getClientRects().length>0).map(button=>button.dataset.fr),
    locksHidden: (() => { const element=root.querySelector('.fr-feature-locks'); return !element || element.hidden || getComputedStyle(element).display==='none' || getComputedStyle(element).visibility==='hidden' || element.getClientRects().length===0; })(),
    identityHidden: (() => { const element=root.querySelector('.fr-identity'); return !element || element.hidden || getComputedStyle(element).display==='none' || getComputedStyle(element).visibility==='hidden' || element.getClientRects().length===0; })(),
    feedback: root.dataset.feedback || '',
    preparing: root.querySelector('.fr-reveal')?.classList.contains('is-preparing') ?? false
  }));
  if (surface === 'game') assert.deepEqual(ready.visibleActions, ['random'], 'the game page has one explicit primary start action');
  else if (ready.phase === 'preloading') {assert.equal(ready.feedback, 'shuffling');assert.equal(ready.preparing, true, 'home modal gives immediate waiting-card feedback while assets prepare');}
  assert.equal(ready.locksHidden, true, `${surface}: locks are absent before a result`);
  if (!ready.slots[0]?.stopped) assert.equal(ready.identityHidden, true, `${surface}: identity label stays hidden before the first clue card lands`);
  assert.deepEqual(ready.slots.map(slot=>slot.key), ready.artworkId ? expectedDisplayKeys(ready.artworkId) : []);
  for(const slot of ready.slots) assert(Math.abs(slot.width/slot.height-5/6)<0.015, `${surface}: ${slot.key} uses the agreed 5:6 card ratio`);
  if(viewport.width<=600 && ready.slots.length) assert(Math.abs(ready.slots[0].x+ready.slots[0].width/2-(ready.stage.x+ready.stage.width/2))<2, `${surface}: mobile starts with the first card centered`);
  await page.waitForFunction(sel=>[...document.querySelectorAll(`${sel} .fr-card-back-mark`)].every(image=>image.complete&&image.naturalWidth>0),selector);
  await saveEvidence(surface, viewport.width, surface === 'game' ? 'ready' : 'single-click-opening');
  await installPhaseObserver(selector);
  if (surface === 'game') await page.locator(`${selector} [data-fr="random"]`).click();
  await page.waitForFunction(sel => {
    const phase = document.querySelector(sel)?.dataset.phase;
    return ['revealing', 'awaiting-reveal', 'result', 'error', 'empty'].includes(phase);
  }, selector, {timeout: 20000});
  await page.waitForFunction(sel => [...document.querySelectorAll(`${sel} .fr-reel-image`)].every(image => image.complete && image.naturalWidth > 0), selector, {timeout: 15000});
  if (surface === 'modal') await assertNoScopeControls(surface);
  return selector;
}

async function installPhaseObserver(selector) {
  await page.locator(selector).evaluate(root => {
    const sample = () => ({
      at: performance.now(),
      phase: root.dataset.phase || '',
      activeSlot: root.dataset.activeSlot || '-1',
      stopped: [...root.querySelectorAll('.fr-reel')].map(slot => slot.dataset.stopped || 'false'),
      displayResult: root.dataset.displayResult === 'true',
      resultHidden: root.querySelector('.fr-result-card')?.hidden ?? true,
      resultDisplay: getComputedStyle(root.querySelector('.fr-result-card')).display,
      reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    window.__layoutPhaseTrace = [sample()];
    const observer = new MutationObserver(() => window.__layoutPhaseTrace.push(sample()));
    observer.observe(root, {attributes: true, attributeFilter: ['data-phase', 'data-display-result', 'data-active-slot'], subtree: true});
    window.__layoutPhaseObserver = observer;
  });
}

async function readPhaseTrace() {
  return page.evaluate(() => {
    window.__layoutPhaseObserver?.disconnect?.();
    return window.__layoutPhaseTrace || [];
  });
}

async function assertNoScopeControls(surface) {
  const selectors = surface === 'modal'
    ? ['#studioOverlay .random-scope', '#studioOverlay .hard-locks', '#studioOverlay .tag-browser']
    : ['#gameSearch', '#requiredFeatures', '#resetGame', '#gameScopeLabel', '#gameTags', '#gamePortal .hard-locks', '#gamePortal .random-scope'];
  const visible = await page.evaluate(list => list.flatMap(selector => [...document.querySelectorAll(selector)]
    .filter(element => !element.hidden && getComputedStyle(element).display !== 'none' && element.getClientRects().length)
    .map(element => ({selector, text: element.textContent.trim().slice(0, 80)}))), selectors);
  assert.deepEqual(visible, [], `${surface}: range and must-have controls are absent from the reveal experience`);
}

async function installStopWatcher(surface) {
  const hostSelector = surface === 'modal' ? '#studioOverlay' : '#gameReveal';
  await page.evaluate(sel => {
    const host = document.querySelector(sel);
    if (!host) throw new Error(`Missing reveal host for ${sel}`);
    const order = [];
    const centers = [];
    const seen = new Set();
    const collect = () => {
      for (const slot of host.querySelectorAll('.fr-reel.is-landed')) {
        const index = slot.dataset.index;
        if (index !== undefined && !seen.has(index)) {
          seen.add(index);
          order.push(index);
        }
      }
    };
    const observer = new MutationObserver(collect);
    observer.observe(host, {subtree: true, childList: true, attributes: true, attributeFilter: ['class']});
    let running=true;
    const sample=()=>{if(!running)return;const root=host.querySelector('.fr-view');const active=[...(root?.querySelectorAll('.fr-reel.is-active')||[])].at(-1);if(active&&root.dataset.phase==='revealing'&&window.innerWidth<=600){const stage=root.querySelector('.fr-reel-stage');const s=stage.getBoundingClientRect(),r=active.getBoundingClientRect();centers.push({index:active.dataset.index,offset:r.x+r.width/2-(s.x+s.width/2),scrollLeft:stage.scrollLeft});}requestAnimationFrame(sample);};
    requestAnimationFrame(sample);
    window.__revealLayoutStopWatch = {order, centers, collect, stop: () => {running=false;observer.disconnect();}};
  }, hostSelector);
}

async function stopOrder() {
  return page.evaluate(() => {
    window.__revealLayoutStopWatch?.collect?.();
    window.__revealLayoutStopWatch?.stop?.();
    return window.__revealLayoutStopWatch?.order || [];
  });
}

async function inspectRow(selector, {checkDarkSurface = true} = {}) {
  await page.waitForFunction(sel => [...document.querySelectorAll(`${sel} .fr-reel-image`)].every(image => image.complete && image.naturalWidth > 0), selector, {timeout:15000});
  await page.locator(selector).evaluate(async root => {
    await Promise.all([...root.querySelectorAll('.fr-reel-image')].map(image => image.decode()));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  const row = await page.locator(selector).evaluate(root => {
    const stage = root.querySelector('.fr-reel-stage');
    const viewRect = root.getBoundingClientRect();
    const stageRect = stage?.getBoundingClientRect();
    const slots = [...(stage?.querySelectorAll(':scope > .fr-reel') || [])];
    const rect = element => {
      const box = element.getBoundingClientRect();
      return {x: box.x, y: box.y, right: box.right, bottom: box.bottom, width: box.width, height: box.height};
    };
    return {
      phase: root.dataset.phase,
      activeSlot: root.dataset.activeSlot || '-1',
      slotStopped: [...root.querySelectorAll('.fr-reel')].map(slot => ({slot: slot.dataset.index || '', stopped: slot.dataset.stopped || 'false'})),
      artworkId: root.dataset.artworkId || null,
      dataDisplayResult: root.dataset.displayResult || 'false',
      reducedMotion: {rootValue: root.dataset.reducedMotion || 'false', mediaMatches: matchMedia('(prefers-reduced-motion: reduce)').matches},
      resultComputedDisplay: getComputedStyle(root.querySelector('.fr-result-card')).display,
      resultCardHidden: root.querySelector('.fr-result-card')?.hidden ?? true,
      domOrder: (() => {
        const follows = (first, second) => Boolean(first && second && (first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING));
        const stage = root.querySelector('.fr-reel-stage');
        const result = root.querySelector('.fr-result-card');
        return {stageBeforeResult: follows(stage, result), takeawayInsideResult: result?.contains(root.querySelector('.fr-takeaway')) ?? false};
      })(),
      scrollTops: {
        overlayBody: Number(root.closest('#overlayBody')?.scrollTop || 0),
        dialog: Number(root.closest('dialog')?.scrollTop || 0),
        view: Number(root.scrollTop || 0)
      },
      view: {x: viewRect.x, right: viewRect.right, width: viewRect.width, height: viewRect.height, scrollWidth: root.scrollWidth, clientWidth: root.clientWidth},
      flowChildren: [...root.children].flatMap(child => getComputedStyle(child).display === 'contents' ? [...child.children] : [child]).filter(child => !child.hidden && child.getClientRects().length).map(child => ({
        class: String(child.className || child.tagName),
        rect: rect(child)
      })),
      stage: stage ? {...rect(stage), scrollWidth: stage.scrollWidth, clientWidth: stage.clientWidth} : null,
      slots: slots.map(slot => ({
        key: slot.dataset.slot,
        index: slot.dataset.index,
        stopped: slot.dataset.stopped,
        rect: rect(slot),
        window: rect(slot.querySelector('.fr-reel-window')),
        trackId: [...root.querySelectorAll('.fr-reel-track')].indexOf(slot.querySelector('.fr-reel-track')),
        itemCount: slot.querySelectorAll('.fr-reel-item').length,
        visuals: [...slot.querySelectorAll('.fr-reel-item .fr-reel-visual')].map(visual => ({
          id: visual.dataset.visualId || '',
          kind: visual.dataset.visualKind || '',
          version: visual.dataset.visualVersion || '',
          centered: Boolean(visual.closest('.fr-reel-item')?.classList.contains('is-centered')),
          artworkImage: Boolean(visual.querySelector('.fr-reel-image')),
          src: visual.querySelector('.fr-reel-image')?.currentSrc || visual.querySelector('.fr-reel-image')?.src || '',
          inlineSvg: Boolean(visual.querySelector('svg')),
          imageLoaded: Boolean(visual.querySelector('.fr-reel-image')?.complete && visual.querySelector('.fr-reel-image')?.naturalWidth > 0),
          visualStatus: visual.dataset.visualStatus || '',
          artApproval: visual.dataset.artApproval || '',
          sourceArtwork: visual.dataset.sourceArtwork || '',
          sourceAsset: visual.dataset.sourceAsset || '',
          sourceHash: visual.dataset.sourceHash || ''
        })),
        label: slot.querySelector('.fr-reel-label')?.textContent?.trim() || '',
        summary: (() => {
          const value = slot.querySelector('.fr-reel-item.is-centered .fr-reel-value') || slot.querySelector('.fr-reel-value');
          if (!value) return null;
          const style = getComputedStyle(value);
          return {text: value.textContent.trim(), overflow: style.overflow, textOverflow: style.textOverflow, whiteSpace: style.whiteSpace, clientHeight: value.clientHeight, scrollHeight: value.scrollHeight};
        })()
      })),
      progress: [...root.querySelectorAll('.fr-reveal-progress [data-slot-progress]')].map(step => ({
        index: step.dataset.slotProgress,
        state: step.dataset.state,
        landed: step.classList.contains('is-landed'),
        active: step.classList.contains('is-active'),
        rect: rect(step)
      })),
      resultHidden: root.querySelector('.fr-result-card')?.hidden ?? true,
      result: rect(root.querySelector('.fr-result-card')),
      image: rect(root.querySelector('.fr-result-image')),
      imageHost: rect(root.querySelector('.fr-result-image-host')),
      imageLoaded: Boolean(root.querySelector('.fr-result-image')?.naturalWidth),
      actions: rect(root.querySelector('.fr-actions')),
      detail: rect(root.querySelector('[data-fr="detail"]')),
      identity: (() => { const element=root.querySelector('.fr-identity'); return {hidden:!element || element.hidden || getComputedStyle(element).display==='none' || getComputedStyle(element).visibility==='hidden' || element.getClientRects().length===0, label:element?.textContent.trim()||''}; })(),
      takeawayHidden: (() => { const element=root.querySelector('.fr-takeaway'); return !element || element.hidden || getComputedStyle(element).display==='none' || getComputedStyle(element).visibility==='hidden' || element.getClientRects().length===0; })(),
      outerOverflow: {
        document: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        dialog: root.closest('dialog') ? root.closest('dialog').scrollWidth - root.closest('dialog').clientWidth : 0,
        overlayBody: root.closest('#overlayBody') ? root.closest('#overlayBody').scrollWidth - root.closest('#overlayBody').clientWidth : 0
      },
      actionState: [...root.querySelectorAll('[data-fr]')].map(button => ({
        action: button.dataset.fr || button.dataset.action || '',
        tag: button.tagName.toLowerCase(),
        hidden: button.hidden || getComputedStyle(button).display === 'none' || getComputedStyle(button).visibility === 'hidden' || !button.getClientRects().length,
        disabled: button.disabled === true,
        text: button.textContent.trim(),
        href: button.href || null,
        height: button.getBoundingClientRect().height
      })),
      takeawayActionState: [...(root.querySelector('.fr-takeaway')?.querySelectorAll('[data-fr]') || [])].map(button => ({
        action: button.dataset.fr || '',
        tag: button.tagName.toLowerCase(),
        hidden: button.hidden || getComputedStyle(button).display === 'none' || getComputedStyle(button).visibility === 'hidden' || !button.getClientRects().length,
        disabled: button.disabled === true,
        text: button.textContent.trim(),
        height: button.getBoundingClientRect().height
      }))
    };
  });

  assert(row.stage, `${selector}: feature card stage exists`);
  const expectedKeys=expectedDisplayKeys(row.artworkId), expectedIndices=indicesFor(row.artworkId);
  assert.deepEqual(row.slots.map(slot => slot.key), expectedKeys, `${selector}: frozen feature slots remain in product order`);
  assert.deepEqual(row.slots.map(slot => slot.index), expectedIndices, `${selector}: each slot has an independent sequence index`);
  assert.equal(new Set(row.slots.map(slot => slot.trackId)).size, expectedKeys.length, `${selector}: each slot owns its own vertical rolling track`);
  assert.deepEqual(row.progress.map(step => step.index), expectedIndices, `${selector}: progress indicators map one-to-one to the active slots`);
  if (row.resultHidden) assert(row.progress.every(step => step.rect.width > 0 && step.rect.height > 0), `${selector}: each progress indicator is visible during reveal`);
  else assert(row.progress.every(step => step.rect.width === 0 && step.rect.height === 0), `${selector}: progress is removed from the compact result state`);
  assert(row.slots.every(slot => slot.itemCount >= 1 && slot.window.width > 0 && slot.window.height > 0), `${selector}: each slot and its candidate cards are visible`);
  for (const slot of row.slots) {
    assert(slot.visuals.length > 0, `${selector}: ${slot.key} has visible semantic visuals`);
    assert(slot.visuals.every(visual => visual.id && visual.version), `${selector}: ${slot.key} visuals carry stable ids and versions`);
    assert.equal(slot.summary, null, `${selector}: card has no value or description text`);
    assert(slot.visuals.every(visual => visual.kind === 'dedicated-asset' && !visual.inlineSvg), `${selector}: ${slot.key} uses an independent visual`);
    for (const visual of slot.visuals) {
      assert(visual.artworkImage && visual.imageLoaded && visual.sourceAsset && visual.sourceHash, `${selector}: visual is decoded and carries provenance`);
      if (visual.visualStatus==='candidate-preview') assert.equal(visual.artApproval,'pending');
    }
  }
  assert(row.slots.every(slot => slot.rect.width > 0 && slot.rect.height > 0), `${selector}: every slot has a visible box`);
  assert(row.slots.every((slot, index) => index === 0 || slot.rect.x > row.slots[index - 1].rect.x), `${selector}: slots remain in left-to-right order`);
  const ySpread = Math.max(...row.slots.map(slot => slot.rect.y)) - Math.min(...row.slots.map(slot => slot.rect.y));
  assert(ySpread <= 2, `${selector}: all active slots share one track; y spread ${ySpread.toFixed(2)}px`);
  assert(Object.values(row.outerOverflow).every(excess => excess <= 2), `${selector}: page/dialog surfaces have no horizontal overflow (${JSON.stringify(row.outerOverflow)})`);
  assert(row.flowChildren.every(child => child.rect.x >= row.view.x - 1 && child.rect.right <= row.view.right + 1), `${selector}: panel content stays within its visible bounds`);
  if(page.viewportSize().width>=1280){
    assert(row.stage.scrollWidth <= row.stage.clientWidth + 2, `${selector}: wide desktop shows all active cards at once`);
    assert(row.slots[0].rect.x >= row.stage.x - 1 && row.slots.at(-1).rect.right <= row.stage.right + 1, `${selector}: wide desktop does not clip cards`);
  }else if(row.phase==='revealing') assert(row.stage.scrollWidth>row.stage.clientWidth, `${selector}: narrow view uses the intended horizontal track`);

  if (checkDarkSurface) {
    const png = await page.locator(selector).screenshot({animations: 'disabled', caret: 'hide'});
    const pixels = await page.evaluate(async dataUrl => {
      const image = new Image();
      image.src = dataUrl;
      await image.decode();
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d', {willReadFrequently: true});
      context.drawImage(image, 0, 0);
      const points = [[.02, .35], [.02, .5], [.02, .65], [.98, .35], [.98, .5], [.98, .65]];
      return points.map(([x, y]) => {
        const [r, g, b] = context.getImageData(Math.min(canvas.width - 1, Math.floor(canvas.width * x)), Math.min(canvas.height - 1, Math.floor(canvas.height * y)), 1, 1).data;
        return {r, g, b, luminance: (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255};
      });
    }, `data:image/png;base64,${png.toString('base64')}`);
    const darkCount = pixels.filter(pixel => pixel.luminance < 0.48).length;
    assert(darkCount >= 4, `${selector}: the reveal uses the dark-panel direction from Photo 2; samples=${JSON.stringify(pixels)}`);
    row.darkSurfaceSamples = pixels;
  }

  return {...row, ySpread};
}

async function openTakeaway(selector) {
  const panel = page.locator(`${selector} .fr-takeaway`);
  if (!await panel.isVisible()) await page.locator(`${selector} [data-fr="takeaway"]`).click();
  await panel.waitFor({state: 'visible'});
}

async function closeTakeaway(selector) {
  const panel = page.locator(`${selector} .fr-takeaway`);
  if (await panel.isVisible()) await page.locator(`${selector} [data-fr="close-takeaway"]`).click();
  await page.waitForFunction(sel => {
    const element=document.querySelector(`${sel} .fr-takeaway`);
    return !element || element.hidden || getComputedStyle(element).display==='none' || getComputedStyle(element).visibility==='hidden' || element.getClientRects().length===0;
  }, selector);
}

async function assertResultAndActions(selector) {
  await page.waitForFunction(sel => {
    const root = document.querySelector(sel);
    return root?.dataset.phase === 'result' && root.dataset.displayResult === 'true' && !root.querySelector('.fr-result-card')?.hidden;
  }, selector, {timeout: 25000});
  await page.waitForFunction(sel => {
    const image = document.querySelector(`${sel} .fr-result-image`);
    return Boolean(image?.complete && image.naturalWidth > 0);
  }, selector, {timeout: 15000});
  const row = await inspectRow(selector, {checkDarkSurface: false});
  assert(row.artworkId, `${selector}: completed result belongs to a frozen Artwork`);
  const snapshot=createSnapshot(row.artworkId);
  const facts=revealFeaturesFor(snapshot.artwork);
  for(const slot of row.slots){
    const fact=facts.find(feature=>feature.kind===slot.key);
    assert(fact,`${selector}: ${slot.key} has a fact in the selected Artwork`);
    const expected=featureVisualFor([fact],slot.key,snapshot.artwork,reviewPolicy);
    const center=slot.visuals.find(visual=>visual.centered);
    assert.equal(center?.id,expected.id,`${selector}: ${slot.key} visual is bound to the selected fact`);
    assert.equal(center.kind,expected.kind);
    if(expected.source){assert.equal(center.sourceHash,expected.source.sha256);assert.equal(center.sourceArtwork,snapshot.artwork.id);}
    if(expected.kind==='empty-value')assert.equal(center.artworkImage,false,`${selector}: none does not fabricate an object`);
  }
  assert.equal(row.resultHidden, false, `${selector}: complete result appears after card stops`);
  assert.equal(row.dataDisplayResult, 'true', `${selector}: data-display-result becomes true only in result phase`);
  assert.equal(row.resultComputedDisplay === 'none', false, `${selector}: result is visibly rendered after reveal`);
  assert.deepEqual(row.domOrder, {stageBeforeResult: true, takeawayInsideResult: true}, `${selector}: the completed Artwork and inline takeaway controls stay in the same result stage`);
  if(page.viewportSize().width<=600) {
    assert(row.slots.every(slot => slot.rect.width >= 110 && slot.rect.width <= 120), `${selector}: mobile result summaries are 110–120px wide`);
    assert(row.slots.every(slot => slot.summary === null && slot.label), `${selector}: compact summaries show only visual and category`);
  }
  assert(row.progress.every(step => step.state === 'stopped' && step.landed), `${selector}: progress indicators land with their stopped cards`);
  assert(!row.slots.some(slot => slot.key === 'style'), `${selector}: identity is not duplicated as a reel card`);
  assert.equal(row.slots[0]?.key, 'appearance', `${selector}: the first clue card begins with appearance`);
  const identityFact = revealFeaturesFor(snapshot.artwork).find(feature => feature.kind === 'style');
  assert.equal(row.identity.hidden, false, `${selector}: the identity label appears after the first clue card lands`);
  assert.equal(row.identity.label, identityFact.label, `${selector}: the identity label preserves the Artwork's style identity`);
  assert(row.image.width >= 240 && row.image.height >= 240 && row.imageLoaded, `${selector}: complete artwork is prominent and loaded`);
  assert(row.image.x >= row.imageHost.x - 1 && row.image.y >= row.imageHost.y - 1 && row.image.right <= row.imageHost.right + 1 && row.image.bottom <= row.imageHost.bottom + 1, `${selector}: original image box stays wholly inside its result host`);
  const visibleActions = row.actionState.filter(action => !action.hidden);
  assert.deepEqual(visibleActions.map(action=>action.action).sort(),['detail','random','takeaway'],`${selector}: only takeaway, repeat, and detail are visible by default`);
  assert.equal(row.takeawayHidden, true, `${selector}: copy/download continuation panel starts closed`);
  assert(row.actionState.filter(action=>['copy','download','chatgpt','close-takeaway'].includes(action.action)).every(action=>action.hidden), `${selector}: copy, download, ChatGPT and panel close remain hidden with the panel`);
  const repeat = visibleActions.find(action => action.action === 'random' && /再遇一位/.test(action.text));
  const takeaway = visibleActions.find(action => action.action === 'takeaway' && /带走伙伴/.test(action.text));
  const copy = row.actionState.find(action => action.action === 'copy' && /复制 Prompt/.test(action.text));
  const download = row.actionState.find(action => action.action === 'download' && /下载/.test(action.text));
  const chatgpt = row.actionState.find(action => action.action === 'chatgpt' && /ChatGPT/.test(action.text));
  const detailAction = visibleActions.find(action => action.action === 'detail');
  assert(repeat && !repeat.disabled, `${selector}: repeat action is available`);
  assert(takeaway && !takeaway.disabled, `${selector}: the primary takeaway action is available`);
  assert(detailAction && !detailAction.disabled, `${selector}: secondary detail remains available`);
  for (const action of [repeat, takeaway, detailAction]) assert(action.height >= 40, `${selector}: ${action.text} has a usable touch target`);
  assert(row.detail.width >= 44 && row.detail.height >= 44, `${selector}: secondary detail stays visible with a usable touch target`);
  assert.equal(await page.locator(`${selector} [data-fr=detail]`).count(), 1, `${selector}: one detail action is available`);
  await openTakeaway(selector);
  const openActions = await page.locator(`${selector} .fr-takeaway`).evaluate(panel => {
    const visible=element=>!element.hidden&&getComputedStyle(element).display!=='none'&&element.getClientRects().length>0;
    return {actions:[...panel.querySelectorAll('[data-fr]')].filter(visible).map(element=>element.dataset.fr),locks:visible(panel.querySelector('.fr-feature-locks'))};
  });
  assert.deepEqual(openActions.actions.sort(), ['chatgpt','close-takeaway','copy','download']);
  assert.equal(openActions.locks, true, `${selector}: lock controls are available inside the open takeaway panel`);
  assert(copy && !copy.disabled, `${selector}: Prompt copy is available inside takeaway`);
  assert(download && !download.disabled, `${selector}: raw image download is available inside takeaway`);
  assert(chatgpt && !chatgpt.disabled, `${selector}: ChatGPT continuation is available inside takeaway`);
  await closeTakeaway(selector);
  const imageStyle = await page.locator(`${selector} .fr-result-image`).evaluate(image => getComputedStyle(image).objectFit);
  assert.equal(imageStyle, 'contain', `${selector}: complete artwork keeps its full image bounds`);
  return row;
}

async function assertChatGPTPrefill(selector, artworkId) {
  await page.evaluate(() => {
    window.__layoutChatGPTTargets = [];
    window.__layoutOriginalOpen = window.open;
    window.open = (url, target, features) => {
      window.__layoutChatGPTTargets.push({url: String(url), target: String(target || ''), features: String(features || '')});
      return {opener: null};
    };
  });
  try {
    await openTakeaway(selector);
    await page.locator(`${selector} [data-fr="chatgpt"]`).click();
    await page.waitForFunction(() => window.__layoutChatGPTTargets?.length === 1, null, {timeout: 5000});
    const captured = await page.evaluate(() => window.__layoutChatGPTTargets[0]);
    const url = new URL(captured.url);
    assert(['chatgpt.com', 'www.chatgpt.com'].includes(url.hostname), `${selector}: continuation targets official ChatGPT`);
    assert.equal(captured.target, '_blank', `${selector}: ChatGPT opens in a separate tab`);
    assert.equal(url.searchParams.get('prompt'), createSnapshot(artworkId).prompt.text, `${selector}: ChatGPT prefill matches the frozen Artwork Prompt`);
    return {artworkId, target: captured.target, url: captured.url, promptPrefillMatches: true, externalPageOpened: false};
  } finally {
    await closeTakeaway(selector);
    await page.evaluate(() => { if (window.__layoutOriginalOpen) window.open = window.__layoutOriginalOpen; });
  }
}

async function saveEvidence(surface, width, state) {
  const selector = revealSelector(surface);
  const name = `${surface}-${width}-${state}.png`;
  if (surface === 'game') {
    await page.locator(selector).evaluate(root => root.scrollIntoView({block: 'start', behavior: 'instant'}));
  }
  await page.screenshot({path: path.join(evidenceDirectory, name), animations: 'disabled', caret: 'hide'});
  return name;
}

async function finishSurface(surface, viewport, {naturalStops = false, verifyChatGPT = false} = {}) {
  const selector = await openSurface(surface, viewport, {watchStops: naturalStops});
  const phase = await page.locator(selector).getAttribute('data-phase');
  assert(['revealing', 'awaiting-reveal', 'result'].includes(phase), `${surface} ${viewport.width}: expected an active reveal, got ${phase}`);
  if (phase === 'revealing') {
    assert.equal(await page.locator(`${selector} .fr-result-card`).evaluate(card => card.hidden), true, `${surface}: finished artwork stays hidden while feature cards roll`);
  }
  const rollingLayout = await inspectRow(selector);
  const revealEvidence = await saveEvidence(surface, viewport.width, 'rolling');

  const frozenArtworkId = await page.locator(selector).getAttribute('data-artwork-id');
  let awaitingEvidence = null;
  let awaitingMetrics = null;
  if (phase === 'revealing' && !naturalStops) {
    await page.locator(`${selector} [data-fr="skip"]`).click();
    await page.waitForFunction(sel => document.querySelector(sel)?.dataset.phase === 'awaiting-reveal', selector, {timeout: 10000});
    assert.equal(await page.locator(selector).getAttribute('data-artwork-id'), frozenArtworkId, `${surface}: skip retains the same frozen Artwork`);
    assert.equal(await page.locator(`${selector} .fr-result-card`).evaluate(card => card.hidden), true, `${surface}: skip enters the hidden-result boundary`);
    assert.equal(await page.locator(selector).getAttribute('data-display-result'), 'false', `${surface}: skip keeps data-display-result false`);
    awaitingMetrics = await inspectRow(selector, {checkDarkSurface: false});
    assert.equal(awaitingMetrics.reducedMotion.mediaMatches, false, `${surface}: skip path runs with no-preference`);
    assert.equal(awaitingMetrics.dataDisplayResult, 'false', `${surface}: skip path holds result hidden during awaiting-reveal`);
    awaitingEvidence = await saveEvidence(surface, viewport.width, 'skip-awaiting-reveal');
  }
  if ((phase === 'revealing' || phase === 'awaiting-reveal') && naturalStops) {
    await page.waitForFunction(sel => document.querySelector(sel)?.dataset.phase === 'awaiting-reveal', selector, {timeout: 25000});
    assert.equal(await page.locator(selector).getAttribute('data-display-result'), 'false', `${surface}: all active cards stop before the result is revealed`);
    assert.equal(await page.locator(`${selector} .fr-result-card`).evaluate(card => card.hidden), true, `${surface}: last-stop boundary keeps the result hidden`);
    assert.deepEqual((await page.locator(selector).evaluate(root => [...root.querySelectorAll('.fr-reel')].map(slot => slot.dataset.stopped))), Array(expectedDisplayKeys(frozenArtworkId).length).fill('true'), `${surface}: every card is stopped at the awaiting boundary`);
    awaitingMetrics = await inspectRow(selector, {checkDarkSurface: false});
    assert.equal(awaitingMetrics.reducedMotion.mediaMatches, false, `${surface}: natural stop path runs with no-preference`);
    assert.equal(awaitingMetrics.dataDisplayResult, 'false', `${surface}: natural stop path holds result hidden during awaiting-reveal`);
    awaitingEvidence = await saveEvidence(surface, viewport.width, 'all-stopped-awaiting-reveal');
    await page.waitForFunction(sel => document.querySelector(sel)?.dataset.phase === 'result', selector, {timeout: 5000});
  }
  const resultLayout = await assertResultAndActions(selector);
  const phaseTrace = await readPhaseTrace();
  assert(phaseTrace.length > 0 && phaseTrace.some(event => event.phase === 'result'), `${surface}: phase trace records reveal completion`);
  assert(phaseTrace.filter(event => event.phase !== 'result').every(event => !event.displayResult && event.resultHidden && event.resultDisplay === 'none'), `${surface}: result remains hidden in every pre-result phase`);
  for (const requiredPhase of ['selecting', 'preloading', 'revealing', 'awaiting-reveal']) {
    for (const event of phaseTrace.filter(item => item.phase === requiredPhase)) assert(!event.displayResult && event.resultHidden && event.resultDisplay === 'none', `${surface}: ${requiredPhase} keeps the result hidden`);
  }
  const resultEvidence = await saveEvidence(surface, viewport.width, 'result');
  let stopSequence = null;
  if (naturalStops) {
    stopSequence = await stopOrder();
    assert.deepEqual(stopSequence, indicesFor(frozenArtworkId), `${surface}: the active cards stop in order before the artwork is revealed`);
    assert.equal(await page.locator(`${selector} .fr-reel:not(.is-landed)`).count(), 0, `${surface}: all slots have stopped before the result appears`);
    if(viewport.width<=600){const centers=await page.evaluate(()=>window.__revealLayoutStopWatch.centers);assert.equal(new Set(centers.map(item=>item.index)).size,expectedDisplayKeys(frozenArtworkId).length,`${surface}: mobile follows every active clue slot`);for(const index of indicesFor(frozenArtworkId))assert(centers.some(item=>item.index===index&&Math.abs(item.offset)<3),`${surface}: mobile centers active card ${index}`);}
  }
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    const overlayBody = document.querySelector('#overlayBody');
    if (overlayBody) overlayBody.scrollTop = 0;
  });
  await page.waitForTimeout(30);
  const visibleHeight = viewport.height;
  const reachability = await page.locator(selector).evaluate((root, height) => {
    const panel = root.getBoundingClientRect();
    const result = root.querySelector('.fr-result-card').getBoundingClientRect();
    const image = root.querySelector('.fr-result-image').getBoundingClientRect();
    const actions = root.querySelector('.fr-actions').getBoundingClientRect();
    const detail = root.querySelector('.fr-result-detail').getBoundingClientRect();
    const metrics = {panelHeight: panel.height, clientHeight: height};
    const offset = rect => rect.bottom - panel.top;
    return {
      imageWithinFirstScreen: image.top < panel.top + height && image.bottom > panel.top,
      resultWithinOneScreenScroll: offset(result) <= height,
      actionsWithinShortScroll: offset(actions) <= height * 1.2,
      detailWithinShortScroll: offset(detail) <= height * 1.2,
      imageOffsetBottom: offset(image),
      actionOffsetBottom: offset(actions),
      detailOffsetBottom: offset(detail),
      panelHeight: metrics.panelHeight
    };
  }, visibleHeight);
  assert(reachability.imageWithinFirstScreen && reachability.resultWithinOneScreenScroll, `${surface} ${viewport.width}: complete result image stays in the first panel screen (${JSON.stringify(reachability)})`);
  assert(reachability.actionsWithinShortScroll, `${surface} ${viewport.width}: result actions stay within a small scroll of the panel top (${JSON.stringify(reachability)})`);
  assert(reachability.detailWithinShortScroll, `${surface} ${viewport.width}: secondary detail action stays within a short panel scroll (${JSON.stringify(reachability)})`);
  const chatgptPrefill = verifyChatGPT ? await assertChatGPTPrefill(selector, resultLayout.artworkId) : null;
  let rerollScroll = null;
  if (viewport.width === 390) {
    rerollScroll = await page.locator(selector).evaluate(root => {
      const surfaces = [root.closest('#overlayBody'), root.closest('dialog'), root].filter(Boolean);
      const host = surfaces.find(element => element.scrollHeight > element.clientHeight + 2 && /auto|scroll/.test(getComputedStyle(element).overflowY)) || null;
      if (host) host.scrollTop = host.scrollHeight;
      const stage = root.querySelector('.fr-reel-stage');
      if (stage) stage.scrollLeft = stage.scrollWidth;
      const read = element => element ? {id: element.id || element.className || element.tagName.toLowerCase(), scrollTop: Number(element.scrollTop || 0), scrollHeight: element.scrollHeight, clientHeight: element.clientHeight} : null;
      return {host: read(host), overlayBody: read(root.closest('#overlayBody')), dialog: read(root.closest('dialog')), view: read(root), stage: stage ? {scrollLeft: Number(stage.scrollLeft || 0), scrollWidth: stage.scrollWidth, clientWidth: stage.clientWidth} : null};
    });
    await page.locator(`${selector} [data-fr="random"]`).evaluate(button => button.click());
    await page.waitForFunction(sel => ['selecting', 'preloading', 'revealing', 'awaiting-reveal', 'result'].includes(document.querySelector(sel)?.dataset.phase), selector, {timeout: 15000});
    rerollScroll.after = await page.locator(selector).evaluate(root => ({
      overlayBody: Number(root.closest('#overlayBody')?.scrollTop || 0),
      dialog: Number(root.closest('dialog')?.scrollTop || 0),
      view: Number(root.scrollTop || 0),
      stage: Number(root.querySelector('.fr-reel-stage')?.scrollLeft || 0),
      activeSlot: root.dataset.activeSlot || '-1',
      phase: root.dataset.phase || ''
    }));
    if (rerollScroll.host) assert(rerollScroll.host.scrollTop > 0, `${surface}: test setup scrolled the actual reveal container before reroll`);
    assert(rerollScroll.stage.scrollLeft > 0, `${surface}: test setup scrolled the horizontal card stage before reroll`);
    assert([rerollScroll.after.overlayBody, rerollScroll.after.dialog, rerollScroll.after.view, rerollScroll.after.stage].every(value => value <= 1), `${surface}: reroll resets actual overlay/dialog/view and card stage scrolling (${JSON.stringify(rerollScroll)})`);
    assert.notEqual(rerollScroll.after.phase, 'result', `${surface}: reroll does not leave the previous result visible`);
    rerollScroll.screenshot = await saveEvidence(surface, 390, 'reroll-stage-reset');
    await page.waitForFunction(sel => document.querySelector(sel)?.dataset.phase === 'result', selector, {timeout: 15000});
  }

  if (surface === 'modal') {
    await page.locator('#overlayClose').click();
    await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
  }
  return {surface, viewport, phase, rollingLayout, awaitingMetrics, resultLayout, phaseTrace, stopSequence, chatgptPrefill, reachability, rerollScroll, screenshots: [revealEvidence, awaitingEvidence, resultEvidence, rerollScroll?.screenshot].filter(Boolean)};
}

async function runCardCountMatrix() {
  const matrix = [];
  const ids = ['animal-white-cat', 'dots-rose-glasses', 'human-blond-glasses', 'fixture-five-cards'];
  await page.emulateMedia({reducedMotion: 'reduce'});
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({width, height: width === 320 ? 568 : 900});
    for (const id of ids) {
      await page.goto(`${baseUrl}#game`);
      await page.waitForFunction(() => Boolean(document.documentElement.dataset.catalogRevision));
      const five = id === 'fixture-five-cards';
      const baseArtwork = ARTWORKS.find(a => a.id === (five ? 'human-blond-glasses' : id));
      const selection = structuredClone(createDrawEngine({...reviewPolicy, catalog: [baseArtwork], rng: () => 0}).select({}));
      const registry = {};
      if (five) {
        const artwork = selection.result.artwork;
        const propArtwork = ARTWORKS.find(a => a.id === 'muse-rose-flowers');
        artwork.id = id;
        artwork.title = '五卡工程样例';
        artwork.description = '仅验证卡数与布局，不是新增成品。';
        artwork.features.prop = structuredClone(propArtwork.features.prop);
        artwork.featureIds.push(...propArtwork.features.prop.ids);
        selection.result.revealFeatures = revealFeaturesFor(artwork);
        selection.result.displaySlotKeys = expectedDisplayKeys(id);
        selection.result.artworkId = id;
        artwork.revealVisuals.prop = structuredClone(propArtwork.revealVisuals.prop);
        for (const key of ['appearance','paletteMaterial','clothing','accessory','prop']) {
          const record = artwork.revealVisuals[key];
          const asset = structuredClone(getAsset(record.assetRef));
          asset.applicableArtworkIds = [id];
          registry[asset.id] = asset;
        }
        selection.pool = [artwork];
      }
      await page.evaluate(async ({selection, registry, five}) => {
        const cache = document.documentElement.dataset.cache;
        const {createRevealView} = await import(`./studio-fullscreen-random.js?v=${cache}`);
        const {featureVisualFor} = await import(`./studio-feature-visuals.js?v=${cache}`);
        const {getAsset} = await import(`./studio-artwork-catalog.js?v=${cache}`);
        const resolveAsset = ref => typeof ref === 'object' ? ref : registry[ref] || getAsset(ref);
        const view = createRevealView({
          engine: {select: async () => selection}, resourcePolicy: 'candidate-preview',
          getAsset: resolveAsset,
          resolveFeatureVisual: (features, slot, artwork, options) => featureVisualFor(features, slot, artwork, {...options, assetResolver: resolveAsset})
        });
        const host = document.querySelector('#gameReveal');
        host.replaceChildren(view.element);
        if (five) {
          const note = document.createElement('p'); note.textContent = '工程样例 · 五张线索卡布局，不是新增成品';
          note.className = 'fixture-label'; host.prepend(note);
        }
        window.__matrixView = view;
        await view.start();
      }, {selection, registry, five});
      const selector = '#gameReveal .fr-view';
      await page.waitForFunction(sel => document.querySelector(sel)?.dataset.phase === 'awaiting-reveal', selector);
      const awaiting = await inspectRow(selector, {checkDarkSurface: false});
      const expected = expectedDisplayKeys(id);
      assert.deepEqual(awaiting.slots.map(slot => slot.key), expected);
      assert(awaiting.slots.every(slot => Math.abs(slot.rect.width / slot.rect.height - 5/6) < .02 && slot.rect.width <= 181));
      assert.equal(await page.locator(`${selector} .fr-reel-value, ${selector} .fr-reel-number, ${selector} .fr-reel [title]`).count(), 0);
      if (width === 1440) {
        assert(awaiting.stage.scrollWidth <= awaiting.stage.clientWidth + 1, 'desktop matrix keeps each content-driven card set in one centered row');
        const left = awaiting.slots[0].rect.x - awaiting.stage.x;
        const right = awaiting.stage.right - awaiting.slots.at(-1).rect.right;
        assert(Math.abs(left-right) < 3, 'desktop cards are centered without stretching');
      }
      const before = `matrix-${width}-${expected.length}-cards-awaiting.png`;
      await page.locator(selector).screenshot({path: path.join(evidenceDirectory, before)});
      await page.locator(`${selector} [data-fr="reveal-partner"]`).click();
      await page.waitForFunction(sel => document.querySelector(sel)?.dataset.phase === 'result', selector);
      const result = await inspectRow(selector, {checkDarkSurface: false});
      assert.deepEqual(result.slots.map(slot => slot.key), expected);
      const stacking = await page.locator(selector).evaluate(root => {
        const rect = cls => root.querySelector(cls).getBoundingClientRect();
        return {cardsBottom: rect('.fr-reel-stage').bottom, imageTop: rect('.fr-result-image-host').top,
          imageBottom: rect('.fr-result-image-host').bottom, titleTop: rect('.fr-result-title').top,
          titleBottom: rect('.fr-result-info').bottom, actionsTop: rect('.fr-actions').top};
      });
      assert(stacking.cardsBottom <= stacking.imageTop && stacking.imageBottom <= stacking.titleTop && stacking.titleBottom <= stacking.actionsTop, 'same-panel result stacks cards, original, title, actions');
      const after = `matrix-${width}-${expected.length}-cards-result.png`;
      await page.locator(selector).screenshot({path: path.join(evidenceDirectory, after)});
      matrix.push({id, cardCount: expected.length, viewport: page.viewportSize(), engineeringFixture: five, awaiting, result, stacking, screenshots: [before, after]});
      await page.evaluate(() => window.__matrixView.dispose());
    }
  }
  await page.emulateMedia({reducedMotion: 'no-preference'});
  return matrix;
}

try {
  const runs = [];
  for (const viewport of viewportCases) {
    runs.push(await finishSurface('game', viewport, {naturalStops: viewport.width === 1440}));
    runs.push(await finishSurface('modal', viewport, {verifyChatGPT: viewport.width === 390, naturalStops: viewport.width===390}));
  }

  const cardCountMatrix = await runCardCountMatrix();
  const gameKeys = runs.filter(run => run.surface === 'game').map(run => run.resultLayout.slots.map(slot => slot.key));
  const modalKeys = runs.filter(run => run.surface === 'modal').map(run => run.resultLayout.slots.map(slot => slot.key));
  for (const keys of [...gameKeys, ...modalKeys]) {assert.deepEqual(keys.slice(0,2),expectedSlots.slice(0,2)); assert(keys.length>=2&&keys.length<=4); assert(!keys.includes('style'));}
  checks.push('game page and modal share frozen 2–4 content-driven cards, with a five-card boundary fixture; identity stays outside the reel; takeaway actions and locks open on demand');
  checks.push('ChatGPT action opens an intercepted official prefill URL for the frozen Artwork Prompt; no external page or message is sent');

  await page.emulateMedia({reducedMotion: 'reduce'});
  const reducedSelector = await openSurface('game', {width: 390, height: 844});
  await page.waitForFunction(sel => document.querySelector(sel)?.dataset.phase === 'awaiting-reveal', reducedSelector, {timeout: 15000});
  assert.equal(await page.locator(reducedSelector).getAttribute('data-display-result'), 'false', 'reduced motion keeps result hidden until user confirmation');
  assert.equal(await page.locator(`${reducedSelector} .fr-result-card`).evaluate(card => card.hidden), true, 'reduced motion static card stage does not expose the final Artwork');
  assert.equal(await page.locator(`${reducedSelector} [data-fr="reveal-partner"]`).isVisible(), true, 'reduced motion presents the explicit reveal action');
  const reducedAwaiting = await inspectRow(reducedSelector, {checkDarkSurface: false});
  await saveEvidence('game', 390, 'reduced-motion-awaiting-reveal');
  const reducedDurations = await page.locator(`${reducedSelector} .fr-reel-item`).first().evaluate(element => {
    const seconds = value => Math.max(...value.split(',').map(part => {
      const amount = Number.parseFloat(part);
      return part.trim().endsWith('ms') ? amount / 1000 : amount;
    }));
    const style = getComputedStyle(element);
    const track = element.closest('.fr-reel')?.querySelector('.fr-reel-track');
    const stage = element.closest('.fr-view')?.querySelector('.fr-reel-stage');
    return {
      animation: seconds(style.animationDuration),
      transition: seconds(style.transitionDuration),
      trackAnimation: track ? seconds(getComputedStyle(track).animationDuration) : 0,
      trackTransition: track ? seconds(getComputedStyle(track).transitionDuration) : 0,
      stageScrollBehavior: stage ? getComputedStyle(stage).scrollBehavior : 'auto',
      trackTransform: track ? getComputedStyle(track).transform : 'none'
    };
  });
  assert(reducedAwaiting.slots.every(slot => slot.stopped === 'true'), 'reduced motion lands all feature cards');
  assert.equal(reducedAwaiting.reducedMotion.mediaMatches, true, 'reduced motion browser media query is active');
  assert.equal(reducedAwaiting.dataDisplayResult, 'false', 'reduced motion awaiting stage does not display the result');
  assert.equal(reducedAwaiting.resultCardHidden, true, 'reduced motion keeps result DOM hidden before the explicit action');
  await page.locator(`${reducedSelector} [data-fr="reveal-partner"]`).click();
  const reducedLayout = await assertResultAndActions(reducedSelector);
  assert(reducedDurations.animation <= 0.001 && reducedDurations.transition <= 0.001 && reducedDurations.trackAnimation <= 0.001 && reducedDurations.trackTransition <= 0.001 && reducedDurations.stageScrollBehavior === 'auto', `reduced motion removes motion and smooth scrolling: ${JSON.stringify(reducedDurations)}`);
  assert.equal(await page.locator(`${reducedSelector} [data-fr="reveal-partner"]`).isVisible(), false, 'explicit reveal action is consumed after confirmation');
  checks.push('reduced-motion presents the frozen static cards, keeps the result hidden, and waits for explicit reveal confirmation');
  await page.emulateMedia({reducedMotion: 'no-preference'});

  await page.goto(`${baseUrl}#home`);
  await page.waitForFunction(() => Boolean(document.documentElement.dataset.catalogRevision));
  await page.setViewportSize({width: 390, height: 844});
  await page.locator('.hero-actions [data-command="random"]').click();
  await page.locator('#studioOverlay .fr-view').waitFor({state: 'visible'});
  await page.waitForFunction(() => document.querySelector('#studioOverlay .fr-view')?.dataset.phase === 'revealing');
  await page.evaluate(() => { window.__oldRevealRoot = document.querySelector('#studioOverlay .fr-view'); });
  const oldArtworkId = await page.locator('#studioOverlay .fr-view').getAttribute('data-artwork-id');
  await page.locator('#overlayClose').click();
  await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
  await page.locator('.hero-actions [data-command="random"]').click();
  const reopenedSelector = '#studioOverlay .fr-view';
  await page.locator(reopenedSelector).waitFor({state: 'visible'});
  await page.waitForFunction(sel => ['selecting','preloading','revealing','awaiting-reveal','result'].includes(document.querySelector(sel)?.dataset.phase), reopenedSelector);
  await page.waitForFunction(sel => ['revealing', 'result'].includes(document.querySelector(sel)?.dataset.phase), reopenedSelector);
  if (await page.locator(`${reopenedSelector}[data-phase="revealing"]`).count()) await page.locator(`${reopenedSelector} [data-fr="skip"]`).click();
  const reopened = await assertResultAndActions(reopenedSelector);
  const lifecycle = await page.evaluate(() => ({
    oldConnected: window.__oldRevealRoot?.isConnected ?? null,
    oldPhase: window.__oldRevealRoot?.dataset.phase ?? null,
    dialogCount: [...document.querySelectorAll('dialog[open]')].length,
    newArtworkId: document.querySelector('#studioOverlay .fr-view')?.dataset.artworkId || null
  }));
  assert.equal(lifecycle.oldConnected, false, 'closing a reveal disposes its old root before reopening');
  assert.equal(lifecycle.oldPhase, 'disposed', 'a cancelled reveal cannot update after a new session opens');
  assert.equal(lifecycle.dialogCount, 1, 'rapid close and reopen leaves one focused dialog');
  assert(lifecycle.newArtworkId && lifecycle.newArtworkId === reopened.artworkId, 'the reopened result and its feature cards share the new frozen Artwork');
  assert(!oldArtworkId || lifecycle.newArtworkId !== oldArtworkId || lifecycle.oldPhase === 'disposed', 'a late result from the closed session cannot replace the new result');
  await page.locator('#overlayClose').click();
  await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
  checks.push('quick close/reopen disposes stale work and keeps the new result bound to its cards');

  assert.equal(pageErrors.length, 0, pageErrors.join('\n'));
  const report = {
    baseUrl,
    sourceCache: 94,
    generatedAt: new Date().toISOString(),
    viewports: viewportCases,
    expectedSlots,
    checks,
    runs,
    cardCountMatrix,
    reducedMotion: {awaiting: reducedAwaiting, durations: reducedDurations, artworkId: reducedLayout.artworkId},
    closeReopen: lifecycle,
    pageErrors,
    browser: 'Chromium CSS viewport through existing Playwright; no physical device verified',
    visualApproval: 'pending user review',
    published: false
  };
  await fs.mkdir(path.dirname(reportPath), {recursive: true});
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`Reveal layout checks passed: ${checks.length}, ${runs.length} surface/viewport runs.`);
} finally {
  await browser.close();
}
