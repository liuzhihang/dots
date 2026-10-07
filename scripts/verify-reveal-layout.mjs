import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {createSnapshot} from '../dist/studio-artwork-catalog.js';
import {revealFeaturesFor} from '../dist/studio-draw.js';
import {featureVisualFor} from '../dist/studio-feature-visuals.js';

const playwrightModule = process.env.DOTS_PLAYWRIGHT_MODULE
  || '/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const {chromium} = await import(pathToFileURL(playwrightModule));
const baseUrl = process.env.DOTS_BASE_URL || 'http://127.0.0.1:5180/';
const evidenceDirectory = process.env.DOTS_LAYOUT_EVIDENCE
  || 'design/acceptance/current-20261007-v90/layout';
const viewportCases = [
  {width: 1440, height: 900},
  {width: 1280, height: 900},
  {width: 768, height: 844},
  {width: 390, height: 844},
  {width: 320, height: 700}
];
const expectedSlots = ['style', 'appearance', 'palette-material', 'clothing', 'accessory', 'prop'];
const expectedIndices = expectedSlots.map((_, index) => String(index));
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
  } else {
    if (watchStops) await installStopWatcher(surface);
    await page.locator('.hero-actions [data-command="random"]').click();
  }
  const selector = revealSelector(surface);
  await page.locator(selector).waitFor({state: 'visible'});
  assert.equal(await page.locator(selector).getAttribute('data-phase'), 'ready', `${surface}: opening waits for an explicit start`);
  assert.equal(await page.locator(`${selector} .fr-card-back`).count(), 6, `${surface}: six uniform card backs are visible before selection`);
  assert.equal(await page.locator(`${selector} .fr-result-card`).evaluate(card => card.hidden), true, `${surface}: opening does not expose a result`);
  const ready = await page.locator(selector).evaluate(root => ({
    slots: [...root.querySelectorAll('.fr-reel')].map(slot => {const r=slot.getBoundingClientRect();return {key:slot.dataset.slot, x:r.x, width:r.width, height:r.height};}),
    stage: (()=>{const s=root.querySelector('.fr-reel-stage');const r=s.getBoundingClientRect();return {x:r.x,width:r.width};})(),
    visibleActions: [...root.querySelectorAll('.fr-actions [data-fr]')].filter(button=>!button.hidden).map(button=>button.dataset.fr),
    locksHidden: root.querySelector('.fr-feature-locks').hidden
  }));
  assert.deepEqual(ready.visibleActions, ['random'], `${surface}: initial state has one primary start action`);
  assert.equal(ready.locksHidden, true, `${surface}: locks are absent before a result`);
  assert.deepEqual(ready.slots.map(slot=>slot.key), expectedSlots);
  for(const slot of ready.slots) assert(Math.abs(slot.width/slot.height-5/6)<0.015, `${surface}: ${slot.key} uses the agreed 5:6 card ratio`);
  if(viewport.width<=600) assert(Math.abs(ready.slots[0].x+ready.slots[0].width/2-(ready.stage.x+ready.stage.width/2))<2, `${surface}: mobile starts with the first card centered`);
  await page.waitForFunction(sel=>[...document.querySelectorAll(`${sel} .fr-card-back-mark`)].every(image=>image.complete&&image.naturalWidth>0),selector);
  await saveEvidence(surface, viewport.width, 'ready');
  await page.locator(`${selector} [data-fr="random"]`).click();
  await page.waitForFunction(sel => {
    const phase = document.querySelector(sel)?.dataset.phase;
    return ['revealing', 'result', 'error', 'empty'].includes(phase);
  }, selector, {timeout: 20000});
  await page.waitForFunction(sel => [...document.querySelectorAll(`${sel} .fr-reel-image`)].every(image => image.complete && image.naturalWidth > 0), selector, {timeout: 15000});
  if (surface === 'modal') await assertNoScopeControls(surface);
  return selector;
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
      artworkId: root.dataset.artworkId || null,
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
          imageLoaded: Boolean(visual.querySelector('.fr-reel-image')?.complete && visual.querySelector('.fr-reel-image')?.naturalWidth > 0)
          ,sourceArtwork:visual.dataset.sourceArtwork||'',sourceAsset:visual.dataset.sourceAsset||'',sourceHash:visual.dataset.sourceHash||''
        })),
        label: slot.querySelector('.fr-reel-label')?.textContent?.trim() || ''
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
      detail: rect(root.querySelector('.fr-result-detail')),
      outerOverflow: {
        document: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        dialog: root.closest('dialog') ? root.closest('dialog').scrollWidth - root.closest('dialog').clientWidth : 0,
        overlayBody: root.closest('#overlayBody') ? root.closest('#overlayBody').scrollWidth - root.closest('#overlayBody').clientWidth : 0
      },
      actionState: [...root.querySelectorAll('.fr-actions button, .fr-actions a')].map(button => ({
        action: button.dataset.fr || button.dataset.action || '',
        tag: button.tagName.toLowerCase(),
        hidden: button.hidden || getComputedStyle(button).display === 'none' || !button.getClientRects().length,
        disabled: button.disabled === true,
        text: button.textContent.trim(),
        href: button.href || null,
        height: button.getBoundingClientRect().height
      })),
      extraActionState: [...root.querySelectorAll('.fr-extra-actions [data-fr]')].map(button => ({
        action: button.dataset.fr || '',
        tag: button.tagName.toLowerCase(),
        hidden: button.hidden || getComputedStyle(button).display === 'none' || !button.getClientRects().length,
        disabled: button.disabled === true,
        text: button.textContent.trim(),
        height: button.getBoundingClientRect().height
      }))
    };
  });

  assert(row.stage, `${selector}: feature card stage exists`);
  assert.deepEqual(row.slots.map(slot => slot.key), expectedSlots, `${selector}: six independent feature slots remain in product order`);
  assert.deepEqual(row.slots.map(slot => slot.index), expectedIndices, `${selector}: each slot has an independent sequence index`);
  assert.equal(new Set(row.slots.map(slot => slot.trackId)).size, 6, `${selector}: each slot owns its own vertical rolling track`);
  assert.deepEqual(row.progress.map(step => step.index), expectedIndices, `${selector}: progress indicators map one-to-one to the six slots`);
  if (row.resultHidden) assert(row.progress.every(step => step.rect.width > 0 && step.rect.height > 0), `${selector}: each progress indicator is visible during reveal`);
  else assert(row.progress.every(step => step.rect.width === 0 && step.rect.height === 0), `${selector}: progress is removed from the compact result state`);
  assert(row.slots.every(slot => slot.itemCount >= 1 && slot.window.width > 0 && slot.window.height > 0), `${selector}: each slot and its candidate cards are visible`);
  for (const slot of row.slots) {
    assert(slot.visuals.length > 0, `${selector}: ${slot.key} has visible semantic visuals`);
    assert(slot.visuals.every(visual => visual.id && visual.version), `${selector}: ${slot.key} visuals carry stable ids and versions`);
    if (slot.key === 'style') {
      assert(slot.visuals.every(visual => visual.kind === 'artwork-preview' && visual.artworkImage && visual.src), `${selector}: style candidates use registered real Artwork previews`);
    } else {
      assert(slot.visuals.every(visual => ['source-crop', 'empty-value'].includes(visual.kind) && !visual.inlineSvg), `${selector}: ${slot.key} uses registered original-image details or an accurate empty value`);
      for(const visual of slot.visuals) if(visual.kind==='source-crop') assert(visual.artworkImage && visual.imageLoaded && visual.sourceArtwork && visual.sourceAsset && visual.sourceHash, `${selector}: crop has a decoded source and provenance`);
    }
  }
  assert(row.slots.every(slot => slot.rect.width > 0 && slot.rect.height > 0), `${selector}: every slot has a visible box`);
  assert(row.slots.every((slot, index) => index === 0 || slot.rect.x > row.slots[index - 1].rect.x), `${selector}: slots remain in left-to-right order`);
  const ySpread = Math.max(...row.slots.map(slot => slot.rect.y)) - Math.min(...row.slots.map(slot => slot.rect.y));
  assert(ySpread <= 2, `${selector}: all six slots share one track; y spread ${ySpread.toFixed(2)}px`);
  assert(Object.values(row.outerOverflow).every(excess => excess <= 2), `${selector}: page/dialog surfaces have no horizontal overflow (${JSON.stringify(row.outerOverflow)})`);
  assert(row.flowChildren.every(child => child.rect.x >= row.view.x - 1 && child.rect.right <= row.view.right + 1), `${selector}: panel content stays within its visible bounds`);
  if(page.viewportSize().width>=1280){
    assert(row.stage.scrollWidth <= row.stage.clientWidth + 2, `${selector}: wide desktop shows all six cards at once`);
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

async function assertResultAndActions(selector) {
  await page.waitForFunction(sel => {
    const root = document.querySelector(sel);
    return root?.dataset.phase === 'result' && !root.querySelector('.fr-result-card')?.hidden;
  }, selector, {timeout: 25000});
  await page.waitForFunction(sel => {
    const image = document.querySelector(`${sel} .fr-result-image`);
    return Boolean(image?.complete && image.naturalWidth > 0);
  }, selector, {timeout: 15000});
  await page.waitForFunction(sel => {
    const image = document.querySelector(`${sel} .fr-reel[data-slot="style"] .fr-reel-item.is-centered .fr-reel-image`);
    return Boolean(image?.complete && image.naturalWidth > 0);
  }, selector, {timeout: 15000});
  const row = await inspectRow(selector, {checkDarkSurface: false});
  assert(row.artworkId, `${selector}: completed result belongs to a frozen Artwork`);
  const snapshot=createSnapshot(row.artworkId);
  const facts=revealFeaturesFor(snapshot.artwork);
  for(const slot of row.slots){
    const fact=facts.find(feature=>feature.kind===slot.key);
    assert(fact,`${selector}: ${slot.key} has a fact in the selected Artwork`);
    const expected=featureVisualFor([fact],slot.key,snapshot.artwork);
    const center=slot.visuals.find(visual=>visual.centered);
    assert.equal(center?.id,expected.id,`${selector}: ${slot.key} visual is bound to the selected fact`);
    assert.equal(center.kind,expected.kind);
    if(expected.source){assert.equal(center.sourceHash,expected.source.sha256);assert.equal(center.sourceArtwork,snapshot.artwork.id);}
    if(expected.kind==='empty-value')assert.equal(center.artworkImage,false,`${selector}: none does not fabricate an object`);
  }
  assert.equal(row.resultHidden, false, `${selector}: complete result appears after card stops`);
  assert(row.progress.every(step => step.state === 'stopped' && step.landed), `${selector}: progress indicators land with their stopped cards`);
  const styleCenter = row.slots.find(slot => slot.key === 'style')?.visuals.find(visual => visual.centered);
  assert(styleCenter?.imageLoaded, `${selector}: selected style preview is decoded from its actual Artwork image`);
  assert(row.image.width >= 240 && row.image.height >= 240 && row.imageLoaded, `${selector}: complete artwork is prominent and loaded`);
  assert(row.image.x >= row.imageHost.x - 1 && row.image.y >= row.imageHost.y - 1 && row.image.right <= row.imageHost.right + 1 && row.image.bottom <= row.imageHost.bottom + 1, `${selector}: original image box stays wholly inside its result host`);
  const visibleActions = row.actionState.filter(action => !action.hidden);
  assert.deepEqual(visibleActions.map(action=>action.action),['copy','download','random'],`${selector}: copy and download precede secondary reroll`);
  assert.equal(visibleActions.length, 3, `${selector}: exactly three bottom actions remain`);
  const repeat = visibleActions.find(action => /再来一款/.test(action.text));
  const copy = visibleActions.find(action => /复制 Prompt/.test(action.text));
  const download = visibleActions.find(action => action.action === 'download' && /下载/.test(action.text));
  const chatgpt = row.extraActionState.find(action => action.action === 'chatgpt' && /ChatGPT/.test(action.text) && !action.hidden);
  assert(repeat && !repeat.disabled, `${selector}: repeat action is available`);
  assert(copy && !copy.disabled, `${selector}: Prompt copy is available`);
  assert(download && !download.disabled, `${selector}: raw image download is available`);
  assert(chatgpt && !chatgpt.disabled, `${selector}: ChatGPT continuation remains available as an auxiliary action`);
  for (const action of [repeat, copy, download, chatgpt]) assert(action.height >= 40, `${selector}: ${action.text} has a usable touch target`);
  assert(row.detail.width >= 44 && row.detail.height >= 44, `${selector}: secondary detail stays visible with a usable touch target beside the result`);
  assert(row.detail.x >= row.result.x - 1 && row.detail.right <= row.result.right + 1, `${selector}: detail action is inside the result area`);
  assert.equal(await page.locator(`${selector} .fr-result-card`).locator('.fr-result-detail').count(), 1, `${selector}: one detail action is attached to the revealed artwork`);
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
    await page.locator(`${selector} [data-fr="chatgpt"]`).click();
    await page.waitForFunction(() => window.__layoutChatGPTTargets?.length === 1, null, {timeout: 5000});
    const captured = await page.evaluate(() => window.__layoutChatGPTTargets[0]);
    const url = new URL(captured.url);
    assert(['chatgpt.com', 'www.chatgpt.com'].includes(url.hostname), `${selector}: continuation targets official ChatGPT`);
    assert.equal(captured.target, '_blank', `${selector}: ChatGPT opens in a separate tab`);
    assert.equal(url.searchParams.get('prompt'), createSnapshot(artworkId).prompt.text, `${selector}: ChatGPT prefill matches the frozen Artwork Prompt`);
    return {artworkId, target: captured.target, url: captured.url, promptPrefillMatches: true, externalPageOpened: false};
  } finally {
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
  assert(['revealing', 'result'].includes(phase), `${surface} ${viewport.width}: expected an active reveal, got ${phase}`);
  if (phase === 'revealing') {
    assert.equal(await page.locator(`${selector} .fr-result-card`).evaluate(card => card.hidden), true, `${surface}: finished artwork stays hidden while feature cards roll`);
  }
  const rollingLayout = await inspectRow(selector);
  const revealEvidence = await saveEvidence(surface, viewport.width, 'rolling');

  if (phase === 'revealing' && !naturalStops) await page.locator(`${selector} [data-fr="skip"]`).click();
  if (phase === 'revealing' && naturalStops) {
    await page.waitForFunction(sel => document.querySelector(sel)?.dataset.phase === 'result', selector, {timeout: 25000});
  }
  const resultLayout = await assertResultAndActions(selector);
  const resultEvidence = await saveEvidence(surface, viewport.width, 'result');
  let stopSequence = null;
  if (naturalStops) {
    stopSequence = await stopOrder();
    assert.deepEqual(stopSequence, expectedIndices, `${surface}: the six cards stop in order before the artwork is revealed`);
    assert.equal(await page.locator(`${selector} .fr-reel:not(.is-landed)`).count(), 0, `${surface}: all slots have stopped before the result appears`);
    if(viewport.width<=600){const centers=await page.evaluate(()=>window.__revealLayoutStopWatch.centers);assert.equal(new Set(centers.map(item=>item.index)).size,6,`${surface}: mobile follows all six active slots`);for(const index of expectedIndices)assert(centers.some(item=>item.index===index&&Math.abs(item.offset)<3),`${surface}: mobile centers active card ${index}`);}
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
      detailWithinFirstScreen: offset(detail) <= height,
      imageOffsetBottom: offset(image),
      actionOffsetBottom: offset(actions),
      detailOffsetBottom: offset(detail),
      panelHeight: metrics.panelHeight
    };
  }, visibleHeight);
  assert(reachability.imageWithinFirstScreen && reachability.resultWithinOneScreenScroll, `${surface} ${viewport.width}: complete result image stays in the first panel screen (${JSON.stringify(reachability)})`);
  assert(reachability.actionsWithinShortScroll, `${surface} ${viewport.width}: result actions stay within a small scroll of the panel top (${JSON.stringify(reachability)})`);
  assert(reachability.detailWithinFirstScreen, `${surface} ${viewport.width}: primary detail action stays in the first panel screen (${JSON.stringify(reachability)})`);
  const chatgptPrefill = verifyChatGPT ? await assertChatGPTPrefill(selector, resultLayout.artworkId) : null;

  if (surface === 'modal') {
    await page.locator('#overlayClose').click();
    await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
  }
  return {surface, viewport, phase, rollingLayout, resultLayout, stopSequence, chatgptPrefill, reachability, screenshots: [revealEvidence, resultEvidence]};
}

try {
  const runs = [];
  for (const viewport of viewportCases) {
    runs.push(await finishSurface('game', viewport, {naturalStops: viewport.width === 1440}));
    runs.push(await finishSurface('modal', viewport, {verifyChatGPT: viewport.width === 390, naturalStops: viewport.width===390}));
  }

  const gameKeys = runs.filter(run => run.surface === 'game').map(run => run.resultLayout.slots.map(slot => slot.key));
  const modalKeys = runs.filter(run => run.surface === 'modal').map(run => run.resultLayout.slots.map(slot => slot.key));
  for (const keys of [...gameKeys, ...modalKeys]) assert.deepEqual(keys, expectedSlots, 'game and modal share the same six slot definitions');
  checks.push('game page and modal share six fixed slots, real source-image feature crops, accurate none cards, post-result locks, copy/download priority, and auxiliary ChatGPT continuation');
  checks.push('ChatGPT action opens an intercepted official prefill URL for the frozen Artwork Prompt; no external page or message is sent');

  await page.emulateMedia({reducedMotion: 'reduce'});
  const reducedSelector = await openSurface('game', {width: 390, height: 844});
  await page.waitForFunction(sel => document.querySelector(sel)?.dataset.phase === 'result', reducedSelector, {timeout: 15000});
  const reducedLayout = await assertResultAndActions(reducedSelector);
  const reducedDurations = await page.locator(`${reducedSelector} .fr-reel-item`).first().evaluate(element => {
    const seconds = value => Math.max(...value.split(',').map(part => {
      const amount = Number.parseFloat(part);
      return part.trim().endsWith('ms') ? amount / 1000 : amount;
    }));
    const style = getComputedStyle(element);
    return {animation: seconds(style.animationDuration), transition: seconds(style.transitionDuration)};
  });
  assert(reducedLayout.slots.every(slot => slot.stopped === 'true'), 'reduced motion lands all feature cards');
  assert(reducedDurations.animation <= 0.001 && reducedDurations.transition <= 0.001, `reduced motion removes long card transitions: ${JSON.stringify(reducedDurations)}`);
  checks.push('reduced-motion completes the same frozen result without long card animation');
  await page.emulateMedia({reducedMotion: 'no-preference'});

  await page.goto(`${baseUrl}#home`);
  await page.waitForFunction(() => Boolean(document.documentElement.dataset.catalogRevision));
  await page.setViewportSize({width: 390, height: 844});
  await page.locator('.hero-actions [data-command="random"]').click();
  await page.locator('#studioOverlay .fr-view').waitFor({state: 'visible'});
  await page.locator('#studioOverlay [data-fr="random"]').click();
  await page.waitForFunction(() => document.querySelector('#studioOverlay .fr-view')?.dataset.phase === 'revealing');
  await page.evaluate(() => { window.__oldRevealRoot = document.querySelector('#studioOverlay .fr-view'); });
  const oldArtworkId = await page.locator('#studioOverlay .fr-view').getAttribute('data-artwork-id');
  await page.locator('#overlayClose').click();
  await page.waitForFunction(() => !document.querySelector('#studioOverlay')?.open);
  await page.locator('.hero-actions [data-command="random"]').click();
  const reopenedSelector = '#studioOverlay .fr-view';
  await page.locator(reopenedSelector).waitFor({state: 'visible'});
  assert.equal(await page.locator(reopenedSelector).getAttribute('data-phase'),'ready','reopening shows fresh card backs without an automatic draw');
  await page.locator(`${reopenedSelector} [data-fr="random"]`).click();
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
    generatedAt: new Date().toISOString(),
    viewports: viewportCases,
    expectedSlots,
    checks,
    runs,
    reducedMotion: {durations: reducedDurations, artworkId: reducedLayout.artworkId},
    closeReopen: lifecycle,
    pageErrors,
    browser: 'Chromium CSS viewport through existing Playwright; no physical device verified',
    visualApproval: 'pending user review',
    published: false
  };
  await fs.writeFile(path.join(evidenceDirectory, 'reveal-layout-report.json'), `${JSON.stringify(report, null, 2)}\n`);
  console.log(`Reveal layout checks passed: ${checks.length}, ${runs.length} surface/viewport runs.`);
} finally {
  await browser.close();
}
