import assert from 'node:assert/strict';
import {createRevealView} from '../dist/studio-fullscreen-random.js';
import {REVEAL_SLOTS, displaySlotsFor, revealFeaturesFor} from '../dist/studio-draw.js?v=95';
import {chatGPTUrlForPrompt} from '../dist/studio-actions.js?v=95';
import {ARTWORKS, getAsset as getCatalogAsset} from '../dist/studio-artwork-catalog.js?v=95';
import {FEATURE_VISUAL_REVISION, featureVisualFor} from '../dist/studio-feature-visuals.js?v=95';
import {expectedDisplayKeys, reviewPolicy} from './reveal-test-fixtures.mjs';

assert.deepEqual(REVEAL_SLOTS.map(slot => slot.key), ['style', 'appearance', 'palette-material', 'clothing', 'accessory', 'prop']);
assert.ok(REVEAL_SLOTS.every(slot => slot.kinds.length === 1 && slot.kinds[0] === slot.key));
const missingFeature = {kind:'accessory',state:'known',value:['head-accessory:future-item'],label:'尚未登记的配饰'};
const missingVisual = featureVisualFor([missingFeature], 'accessory', {id:'future-artwork',assetRefs:{original:'asset:future'}});
assert.equal(missingVisual.kind, 'unknown-value', 'an unregistered reveal visual stays explicit and never borrows another visual');
assert.equal(missingVisual.assetRef, undefined, 'an unknown feature crop has no fallback asset');

const originalSetTimeout = globalThis.setTimeout;
const originalClearTimeout = globalThis.clearTimeout;
const originalRequestAnimationFrame = globalThis.requestAnimationFrame;
const originalCancelAnimationFrame = globalThis.cancelAnimationFrame;
const originalMatchMedia = globalThis.matchMedia;
const originalDocument = globalThis.document;
const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
let clipboardWriter;

const landOrder = [];
class FakeClassList {
  constructor(node) { this.node = node; this.values = new Set(); }
  add(...values) {
    for (const value of values) {
      this.values.add(value);
      if (value === 'is-landed' && this.node.classList.values.has('fr-reel')) landOrder.push(Number(this.node.dataset.index));
    }
  }
  remove(...values) { for (const value of values) this.values.delete(value); }
  toggle(value, force) {
    const shouldAdd = force === undefined ? !this.values.has(value) : Boolean(force);
    if (shouldAdd) this.values.add(value); else this.values.delete(value);
    return shouldAdd;
  }
  contains(value) { return this.values.has(value); }
}

class FakeElement {
  constructor(tagName, ownerDocument) {
    this.tagName = tagName.toUpperCase();
    this.ownerDocument = ownerDocument;
    this.children = [];
    this.parentNode = null;
    this.dataset = {};
    this.attributes = new Map();
    this.listeners = new Map();
    this.classList = new FakeClassList(this);
    this.style = {
      setProperty(name, value) { this[name] = String(value); },
      getPropertyValue(name) { return this[name] || ''; }
    };
    this.hidden = false;
    this.disabled = false;
    this.readOnly = false;
    this.value = '';
    this.textContent = '';
    this.innerHTML = '';
    this.src = '';
    this.alt = '';
    this.download = '';
    this.scrollTop = 0;
    this.scrollLeft = 0;
    this.scrollRequests = [];
  }
  set className(value) { this.classList.values = new Set(String(value).split(/\s+/).filter(Boolean)); }
  get className() { return [...this.classList.values].join(' '); }
  setAttribute(name, value) { this.attributes.set(name, String(value)); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  append(...nodes) {
    for (const node of nodes) {
      node.remove?.();
      node.parentNode = this;
      this.children.push(node);
    }
  }
  replaceChildren(...nodes) {
    for (const child of [...this.children]) child.remove();
    this.append(...nodes);
  }
  remove() {
    if (this.parentNode) this.parentNode.children = this.parentNode.children.filter(child => child !== this);
    this.parentNode = null;
  }
  addEventListener(type, listener) {
    const rows = this.listeners.get(type) || [];
    rows.push(listener);
    this.listeners.set(type, rows);
  }
  removeEventListener(type, listener) { this.listeners.set(type, (this.listeners.get(type) || []).filter(row => row !== listener)); }
  dispatchEvent(event) {
    event.target ||= this;
    event.currentTarget = this;
    for (const listener of [...(this.listeners.get(event.type) || [])]) listener.call(this, event);
    if (event.bubbles !== false && this.parentNode) this.parentNode.dispatchEvent(event);
    return !event.defaultPrevented;
  }
  click() {
    if (this.tagName === 'A') this.ownerDocument.downloads.push({href: this.href, download: this.download});
    this.dispatchEvent({type: 'click', bubbles: true});
  }
  focus() { this.ownerDocument.activeElement = this; }
  select() { this.selected = true; }
  scrollTo(options = {}) {
    this.scrollRequests.push(options);
    if (typeof options === 'number') { this.scrollLeft = options; return; }
    if (Number.isFinite(options.left)) this.scrollLeft = options.left;
    if (Number.isFinite(options.top)) this.scrollTop = options.top;
  }
  matches(selector) {
    if (selector.startsWith('.')) return this.classList.contains(selector.slice(1));
    if (selector.startsWith('#')) return this.id === selector.slice(1);
    if (selector === '[data-fr]') return this.dataset.fr !== undefined;
    const match = selector.match(/^\[data-fr="([^"]+)"\]$/);
    return match ? this.dataset.fr === match[1] : selector.toLowerCase() === this.tagName.toLowerCase();
  }
  querySelector(selector) {
    const nodes = [...this.children];
    while (nodes.length) {
      const node = nodes.shift();
      if (node.matches(selector)) return node;
      nodes.push(...node.children);
    }
    return null;
  }
  querySelectorAll(selector) {
    const found = [];
    const nodes = [...this.children];
    while (nodes.length) {
      const node = nodes.shift();
      if (node.matches(selector)) found.push(node);
      nodes.push(...node.children);
    }
    return found;
  }
  closest(selector) {
    for (let node = this; node; node = node.parentNode) if (node.matches(selector)) return node;
    return null;
  }
  contains(node) { return node === this || this.children.some(child => child.contains(node)); }
}

class FakeDocument {
  constructor() { this.body = new FakeElement('body', this); this.scrollingElement = new FakeElement('html', this); this.downloads = []; this.textDownloads = []; }
  createElement(tagName) { return new FakeElement(tagName, this); }
  querySelector(selector) { return this.body.querySelector(selector); }
}

const fakeDocument = new FakeDocument();
globalThis.document = fakeDocument;
let pageScrollY = 0;
const pageScrollRequests = [];
const fakeWindow = {
  setTimeout: originalSetTimeout,
  get scrollY() { return pageScrollY; },
  scrollTo(options = {}) { pageScrollRequests.push(options); if (Number.isFinite(options.top)) pageScrollY = options.top; }
};
Object.defineProperty(globalThis, 'window', {configurable: true, value: fakeWindow});
let prefersReducedMotion = false;
const motionListeners = new Set();
globalThis.matchMedia = () => ({
  get matches() { return prefersReducedMotion; },
  addEventListener(_type, listener) { motionListeners.add(listener); },
  removeEventListener(_type, listener) { motionListeners.delete(listener); }
});
globalThis.setTimeout = (callback, milliseconds = 0, ...args) => originalSetTimeout(callback,
  milliseconds === 900 ? 80 : Math.min(8, Math.max(0, Number(milliseconds) * 0.05)), ...args);
globalThis.clearTimeout = originalClearTimeout;
globalThis.requestAnimationFrame = callback => originalSetTimeout(() => callback(Date.now()), 0);
globalThis.cancelAnimationFrame = originalClearTimeout;
clipboardWriter = async text => { fakeDocument.copiedText = text; };
Object.defineProperty(globalThis, 'navigator', {configurable: true, value: {clipboard: {writeText(text) { return clipboardWriter(text); }}}});

const assets = new Map(ARTWORKS.map(artwork => [artwork.assetRefs.original, getCatalogAsset(artwork.assetRefs.original)]));
const pool = ARTWORKS.slice(0, 5);
const blondArtwork = ARTWORKS.find(artwork => artwork.id === 'human-blond-glasses');
const flowersArtwork = ARTWORKS.find(artwork => artwork.id === 'muse-rose-flowers');
const fiveCardFixture = Object.freeze({
  ...blondArtwork,
  id: 'fixture-five-cards',
  title: '五卡隔离测试角色',
  tagIds: Object.freeze([...blondArtwork.tagIds, 'prop:flowers']),
  featureIds: Object.freeze([...blondArtwork.featureIds, 'prop:flowers']),
  features: Object.freeze({...blondArtwork.features, prop: flowersArtwork.features.prop}),
  revealVisuals: Object.freeze({...blondArtwork.revealVisuals, prop: flowersArtwork.revealVisuals.prop})
});

function fixtureFeatureVisualFor(features, slot, artwork, options = {}) {
  return featureVisualFor(features, slot, artwork, {
    resourcePolicy: options.resourcePolicy || reviewPolicy.resourcePolicy,
    assetResolver: ref => {
      const asset = getCatalogAsset(ref);
      if (!asset || artwork?.id !== 'fixture-five-cards') return asset;
      return {...asset, applicableArtworkIds: [...new Set([...(asset.applicableArtworkIds || []), artwork.id]) ]};
    }
  });
}

function makeResult(artwork, index = 1, conditions = {}) {
  const revealFeatures = revealFeaturesFor(artwork);
  const displaySlotKeys = expectedDisplayKeys(artwork.id);
  const query = conditions.query || {tagsByDimension: {style: [`style:${artwork.styleIdentity}`]}};
  assert.deepEqual(displaySlotsFor(revealFeatures).map(slot => slot.key), displaySlotKeys,
    `${artwork.id} display keys match the independent lifecycle fixture`);
  return Object.freeze({
    artworkId: artwork.id,
    artwork,
    asset: getCatalogAsset(artwork.assetRefs.original),
    prompt: Object.freeze({language: 'zh', text: `为${artwork.title}制作的准确 Prompt ${index}`}),
    catalogRevision: 'fixture-r1',
    drawId: `draw-${index}`,
    querySnapshot: Object.freeze({tagsByDimension: Object.freeze(Object.fromEntries(Object.entries(query.tagsByDimension || {}).map(([key, ids]) => [key, Object.freeze([...ids])])))}),
    requiredFeatures: Object.freeze([...(conditions.requiredFeatures || [])]),
    revealFeatures: Object.freeze(revealFeatures.map(feature => Object.freeze({...feature}))),
    displaySlotKeys: Object.freeze(displaySlotKeys),
    visualResourcePolicy: reviewPolicy.resourcePolicy,
    poolFingerprint: `pool-${index}`
  });
}

function makeEngine(selections) {
  const calls = [];
  const unavailable = [];
  const unavailableIds = new Set();
  return {
    calls,
    unavailable,
    async select(conditions) {
      calls.push(conditions);
      const next = selections.shift();
      return typeof next === 'function' ? next(conditions) : next;
    },
    markUnavailable(artworkId, reason) {
      unavailable.push({artworkId, reason});
      unavailableIds.add(artworkId);
    },
    clearUnavailable(artworkId) { artworkId ? unavailableIds.delete(artworkId) : unavailableIds.clear(); },
    unavailableArtworkIds() { return Object.freeze([...unavailableIds]); }
  };
}

function selection(result, candidates = pool, notice = '') { return {status: 'selected', result, pool: candidates, notice}; }
function getAsset(ref) {
  if (ref && typeof ref === 'object') return ref;
  const asset = assets.get(ref) || getCatalogAsset(ref);
  if (!asset) throw new Error(`missing test asset: ${ref}`);
  return asset;
}
function handleFor(asset, disposed = []) {
  return {blob: new Blob([asset.id], {type: asset.mime}), url: `blob:${asset.id}`, asset, dispose() { disposed.push(asset.id); }};
}
async function fakeDownloadAsset(asset, {signal} = {}) {
  if (signal?.aborted) throw new DOMException('download canceled', 'AbortError');
  const manifest = getAsset(asset);
  const loaded = handleFor(manifest);
  const anchor = fakeDocument.createElement('a');
  anchor.href = loaded.url;
  anchor.download = `${manifest.ownerArtworkId || manifest.id}.png`;
  fakeDocument.body.append(anchor);
  anchor.click();
  anchor.remove();
  return {blob: loaded.blob, filename: anchor.download, dispose: loaded.dispose};
}
function waitUntil(predicate, message, timeout = 2500) {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const poll = () => {
      if (predicate()) { resolve(); return; }
      if (Date.now() - started > timeout) { reject(new Error(message)); return; }
      originalSetTimeout(poll, 2);
    };
    poll();
  });
}

const immediateLoader = async asset => handleFor(asset);
const createdViews = [];
function viewFor({engine, loader = immediateLoader, downloadAsset = fakeDownloadAsset, openChatGPT = async text => {fakeDocument.openedPrompt=text;return {copied:true,opened:true};}, onDetail = () => {}, onResult = () => {}, notify = () => {}, getConditions = () => ({query: {tagsByDimension: {style: ['style:dots']}}, requiredFeatures: []}), autoStart = false, resourcePolicy = reviewPolicy.resourcePolicy, resolveFeatureVisual = featureVisualFor}) {
  const view = createRevealView({engine, getConditions, onDetail, onResult, notify, autoStart, resourcePolicy, resolveFeatureVisual, getAsset, loadAsset: loader, downloadAsset, openChatGPT});
  const dialog = fakeDocument.createElement('dialog');
  const overlayBody = fakeDocument.createElement('div');
  overlayBody.id = 'overlayBody';
  dialog.append(overlayBody);
  fakeDocument.body.append(dialog);
  overlayBody.append(view.element);
  view.testSurfaces = {dialog, overlayBody};
  createdViews.push(view);
  return view;
}
function pageViewFor({engine, resourcePolicy = reviewPolicy.resourcePolicy}) {
  const view = createRevealView({engine, resourcePolicy, getAsset, loadAsset: immediateLoader, downloadAsset: fakeDownloadAsset});
  const main = fakeDocument.createElement('main');
  main.append(view.element);
  fakeDocument.body.append(main);
  const documentTop = pageScrollY + 240;
  view.element.getBoundingClientRect = () => ({top: documentTop - pageScrollY});
  createdViews.push(view);
  return view;
}

async function waitForResult(view, message = 'frozen result did not become visible') {
  await waitUntil(() => ['result', 'awaiting-reveal', 'error', 'empty'].includes(view.getState().phase), message);
  if (view.getState().phase === 'awaiting-reveal') {
    const action = view.element.querySelector('[data-fr="reveal-partner"]');
    if (!action.hidden) action.click();
  }
  await waitUntil(() => ['result', 'error', 'empty'].includes(view.getState().phase), message);
}

try {
  assert.equal(revealFeaturesFor(pool[0]).length, 6, 'all six factual groups remain available even when fewer cards are displayed');

  for (const artwork of ARTWORKS) {
    const features = revealFeaturesFor(artwork);
    assert.deepEqual(features.map(feature => feature.kind), REVEAL_SLOTS.map(slot => slot.key), `${artwork.id} has one fact for every fixed slot`);
    assert.deepEqual(expectedDisplayKeys(artwork.id), displaySlotsFor(features).map(slot => slot.key), artwork.id + ' has the expected ordered display-card set');
    assert.ok(features.every(feature => Array.isArray(feature.value) && ['known', 'none', 'not-applicable'].includes(feature.state)));
    for (const slot of REVEAL_SLOTS) {
      const feature = features.find(item => item.kind === slot.key);
      const visual = featureVisualFor(features, slot.key, artwork, reviewPolicy);
      assert.equal(visual.version, FEATURE_VISUAL_REVISION);
      if (slot.key === 'style') {
        assert.equal(visual.kind, 'dedicated-asset', artwork.id + ' uses its neutral dedicated identity clue');
        assert.notEqual(visual.assetRef, getCatalogAsset(artwork.assetRefs.original).id, 'the complete Artwork is never reused as its style clue');
      } else if (feature.state === 'none' || feature.state === 'not-applicable') {
        assert.equal(visual.kind, 'empty-value', `${artwork.id}/${slot.key} communicates its explicit empty state`);
        assert.equal(visual.assetRef, undefined, 'empty states do not borrow a character image');
      } else {
        assert.ok(['dedicated-asset', 'unknown-value'].includes(visual.kind), `${artwork.id}/${slot.key} uses an independently registered display asset or stays an explicit gap`);
        if (visual.kind === 'dedicated-asset') {
          assert.ok(visual.assetRef, `${artwork.id}/${slot.key} resolves the dedicated display asset`);
          const asset = getCatalogAsset(visual.assetRef);
          assert.ok(asset, `${artwork.id}/${slot.key} references a catalogued asset`);
          assert.ok((visual.visualStatus || visual.status) && visual.artApproval, `${artwork.id}/${slot.key} exposes material status and art approval`);
          assert.equal(visual.purpose, 'reveal-only-display', 'feature assets are display-only and cannot become wearable components');
        } else {
          assert.equal(visual.assetRef, undefined, 'missing reveal art does not fall back to an Artwork crop');
        }
      }
    }
  }

  prefersReducedMotion = true;
  for (const [artwork, expectedCount] of [[pool[1], 2], [pool[0], 3], [blondArtwork, 4], [fiveCardFixture, 5]]) {
    const result = makeResult(artwork, 200 + expectedCount);
    const dynamic = viewFor({
      engine: makeEngine([selection(result, [artwork])]),
      resolveFeatureVisual: artwork.id === 'fixture-five-cards' ? fixtureFeatureVisualFor : featureVisualFor
    });
    assert.equal(await dynamic.start(), true, expectedCount + '-card fixture preloads and starts');
    assert.equal(dynamic.getState().phase, 'awaiting-reveal', expectedCount + '-card fixture shares the reduced-motion gate');
    assert.equal(dynamic.getState().slotCount, expectedCount);
    assert.deepEqual(dynamic.element.querySelectorAll('.fr-reel').map(reel => reel.dataset.slot), expectedDisplayKeys(artwork.id));
    assert.deepEqual(dynamic.getState().stoppedSlots, Array.from({length: expectedCount}, (_, index) => index));
    assert.equal(dynamic.element.querySelector('.fr-result-card').hidden, true, 'the complete character stays hidden before confirmation');
    assert.ok(dynamic.element.querySelectorAll('.fr-reel-item').every(card => card.querySelectorAll('img').length === 1),
      'each category card shows only its clue image');
    assert.equal(dynamic.element.querySelector('.fr-reel-value'), null, 'cards do not reveal descriptive or component-name text');
    dynamic.element.querySelector('[data-fr="reveal-partner"]').click();
    assert.equal(dynamic.getState().phase, 'result');
    assert.strictEqual(dynamic.getResult(), result);
  }

  const publicPolicyResult = makeResult(pool[1], 204);
  const publicPolicyView = viewFor({
    engine: makeEngine([selection(publicPolicyResult, [pool[1]])]),
    resourcePolicy: 'published'
  });
  assert.equal(await publicPolicyView.start(), false, 'a candidate-preview result cannot enable unpublished assets in a published view');
  assert.equal(publicPolicyView.getState().phase, 'error');
  assert.equal(publicPolicyView.element.querySelector('.fr-result-card').hidden, true);

  const firstResult = makeResult(pool[0], 1);
  const firstIndices = Array.from({length: firstResult.displaySlotKeys.length}, (_, index) => index);
  const firstEngine = makeEngine([selection(firstResult)]);
  let details = null;
  const completed = [];
  const first = viewFor({
    engine: firstEngine,
    onDetail: result => { details = result; },
    onResult: result => completed.push(result)
  });
  assert.equal(first.getState().phase, 'ready');
  assert.equal(first.element.querySelector('.fr-result-card').hidden, true, 'the result begins hidden');
  assert.equal(first.element.dataset.displayResult, 'false');
  first.testSurfaces.overlayBody.scrollTop = 415;
  first.testSurfaces.dialog.scrollTop = 230;
  first.element.scrollTop = 180;
  first.element.querySelector('.fr-reel-stage').scrollLeft = 38;
  prefersReducedMotion = true;
  pageScrollY = 640;
  const pageView = pageViewFor({engine: makeEngine([
    selection(makeResult(pool[4], 101)),
    selection(makeResult(pool[0], 102))
  ])});
  assert.equal(pageScrollY, 640, 'mounting the ready game view does not reposition the page');
  assert.equal(await pageView.start(), true);
  assert.equal(pageScrollY, 868, 'game reroll positions the document at the attached reveal view, leaving a 12px top gap');
  assert.equal(pageScrollRequests.at(-1)?.behavior, 'instant', 'game reroll uses an instant page scroll');
  assert.equal(pageView.getState().scrollTop.overlayBody, 0);
  assert.equal(pageView.getState().scrollTop.dialog, 0);
  assert.equal(pageView.getState().phase, 'awaiting-reveal', 'the game view uses the same reduced-motion feature-first flow');
  pageView.element.querySelector('[data-fr="reveal-partner"]').click();
  assert.equal(pageView.getState().phase, 'result');
  pageScrollY = 1100;
  assert.equal(await pageView.start(), true, 'rerolling from the game result resets the actual page scroller');
  assert.equal(pageScrollY, 868, 'a deep game-page position returns to the top of the reveal card stage');
  assert.equal(pageView.getState().scrollTop.page, 868);
  assert.equal(pageView.getState().resultHidden, true);
  assert.equal(pageView.getState().displayResult, false);
  pageScrollY = 910;
  assert.equal(await first.start(), true);
  assert.equal(pageScrollY, 910, 'modal reroll does not move the background document');
  assert.deepEqual(first.getState().scrollTop, {overlayBody: 0, dialog: 0, page: 910, view: 0, stage: 0}, 'modal reroll resets the overlay, dialog, view and card-stage scroll positions without moving the page');
  assert.deepEqual(firstEngine.calls[0], {query: {tagsByDimension: {style: ['style:dots']}}, requiredFeatures: []}, 'fresh query and hard requirements go to the single draw engine');
  assert.equal(first.getState().phase, 'awaiting-reveal', 'reduced motion retains the feature-first confirmation state');
  assert.equal(first.element.dataset.phase, 'awaiting-reveal');
  assert.equal(first.getState().resultHidden, true);
  assert.equal(first.getState().displayResult, false);
  assert.equal(first.element.dataset.displayResult, 'false');
  assert.equal(first.element.querySelector('.fr-result-card').hidden, true);
  assert.deepEqual(first.getState().stoppedSlots, firstIndices);
  assert.equal(first.element.querySelector('[data-fr="reveal-partner"]').hidden, false, 'reduced motion asks for an explicit reveal confirmation');
  assert.equal(first.element.querySelector('[data-fr="reveal-partner"]').textContent, '揭晓伙伴');
  const revealChildren = first.element.querySelector('.fr-reveal').children;
  assert.ok(revealChildren.indexOf(first.element.querySelector('.fr-reel-stage'))
    < revealChildren.indexOf(first.element.querySelector('[data-fr="reveal-partner"]')),
  'the reduced-motion confirmation follows the selected feature cards');
  assert.ok(revealChildren.indexOf(first.element.querySelector('[data-fr="reveal-partner"]'))
    < revealChildren.indexOf(first.element.querySelector('.fr-result-card')),
  'the complete Artwork remains after the explicit reduced-motion confirmation');
  assert.deepEqual(completed, [], 'onResult waits until the user confirms the partner reveal');
  first.element.querySelector('.fr-reel-stage').scrollLeft = 482;
  first.element.querySelector('[data-fr="reveal-partner"]').click();
  assert.equal(first.getState().phase, 'result');
  assert.equal(first.getState().resultVisible, true);
  assert.equal(first.element.dataset.displayResult, 'true');
  assert.equal(first.element.querySelector('.fr-result-card').hidden, false);
  assert.equal(first.element.querySelector('.fr-reel-stage').scrollLeft, 0, 'the result summary rail returns to its first feature after the final Artwork appears');
  assert.deepEqual(completed, [firstResult]);
  assert.deepEqual(first.getState().stoppedSlots, firstIndices, 'completed state retains the selected stopped cards after activeRun is cleared');
  assert.equal(first.element.dataset.artworkId, firstResult.artworkId, 'the DOM exposes the completed frozen Artwork id');
  assert.strictEqual(first.getResult(), firstResult, 'the selected frozen DrawResult is the view result');
  const reels = first.element.querySelectorAll('.fr-reel');
  assert.equal(reels.length, firstResult.displaySlotKeys.length, 'renders only the selected Artwork display slots');
  for (const [index, reel] of reels.entries()) {
    const slot = REVEAL_SLOTS.find(item => item.key === firstResult.displaySlotKeys[index]);
    const distinctFacts = new Set(pool.map(artwork => {
      const feature = revealFeaturesFor(artwork).find(item => item.kind === slot.key);
      if (feature?.state !== 'known' || featureVisualFor(revealFeaturesFor(artwork), slot.key, artwork, reviewPolicy).kind !== 'dedicated-asset') return null;
      return `${feature.kind}:${JSON.stringify(feature.value ?? feature.id)}`;
    }).filter(Boolean)).size;
    const trackLength = reel.querySelector('.fr-reel-track').children.length;
    assert.equal(trackLength, distinctFacts > 1 ? 3 : 1,
      `${slot.key} shows adjacent real candidates when the pool has alternatives, and one factual card when it does not`);
  }
  assert.ok(reels.every(reel => [...reel.querySelectorAll('.fr-reel-item')].every(card => {
    const visual = card.querySelector('.fr-reel-visual');
    return Boolean(visual?.dataset.visualId && visual?.dataset.visualVersion === FEATURE_VISUAL_REVISION);
  })), 'all displayed candidates carry versioned semantic visual records');
  for (const reel of reels) {
    const visuals = [...reel.querySelectorAll('.fr-reel-visual')];
    assert.equal(visuals.every(visual => visual.dataset.visualKind === 'dedicated-asset'), true, 'visible feature cards use independently registered semantic display assets');
    assert.equal(visuals.some(visual => visual.querySelector('.fr-feature-crop')), false, 'production feature cards never render source crops');
    for (const visual of visuals) {
      assert.ok(visual.querySelector('img'), 'registered feature display assets render as uncropped images');
      if (visual.dataset.visualKind === 'dedicated-asset') {
        assert.equal(visual.dataset.visualPurpose, 'reveal-only-display', 'dedicated visuals remain display-only');
        assert.ok(visual.dataset.artApproval && visual.dataset.artApproval !== '[object Object]', 'art approval metadata is rendered as its status rather than an object string');
      }
    }
    assert.equal(visuals.some(visual => visual.innerHTML.includes('<svg')), false, 'the reveal does not substitute generated SVG feature art');
  }
  assert.ok(reels.every(reel => reel.dataset.stopped === 'true' && !reel.classList.contains('is-rolling')), 'reduced motion statically resolves all cards without reel movement before result');
  for (const feature of firstResult.revealFeatures.filter(item => firstResult.displaySlotKeys.includes(item.kind))) {
    const reel = reels.find(item => item.dataset.slot === feature.kind);
    const center = [...reel.querySelectorAll('.fr-reel-item')].find(card => card.classList.contains('is-centered'));
    assert.equal(center.querySelector('.fr-reel-value'), null, 'feature cards do not display a descriptive name');
    assert.equal(center.querySelectorAll('img').length, 1, feature.kind + ' displays only its registered clue image');
  }
  assert.equal(first.element.querySelector('.fr-result-card').hidden, false, 'the complete Artwork appears after all cards stop');
  assert.equal(first.element.querySelector('.fr-result-image').src, `blob:${getCatalogAsset(pool[0].assetRefs.original).id}`);
  assert.equal(first.element.querySelector('.fr-result-title').textContent, firstResult.artwork.title);
  assert.equal(first.element.querySelector('.fr-result-traits').textContent,
    `透明 PNG · 静态 · ${firstResult.asset.width} × ${firstResult.asset.height}`,
    'the result summary describes the source file type and registered dimensions without duplicating feature cards');

  assert.equal(first.element.querySelector('.fr-identity').textContent, 'Dots', 'identity is a concise badge after the first stopped clue');
  assert.equal(first.element.querySelector('.fr-takeaway').hidden, true, 'result actions begin collapsed');
  assert.equal(first.element.querySelector('[data-fr="takeaway"]').hidden, false);
  first.element.querySelector('[data-fr="takeaway"]').click();
  assert.equal(first.element.querySelector('.fr-takeaway').hidden, false, 'takeaway opens real download and Prompt actions');
  assert.equal(first.element.querySelector('[data-fr="takeaway"]').getAttribute('aria-expanded'), 'true');
  first.element.querySelector('[data-fr="close-takeaway"]').click();
  assert.equal(first.element.querySelector('.fr-takeaway').hidden, true);
  first.element.querySelector('[data-fr="takeaway"]').click();
  first.element.querySelector('[data-fr="detail"]').click();
  assert.strictEqual(details, firstResult, 'detail receives the frozen result');
  first.element.querySelector('[data-fr="copy"]').click();
  await waitUntil(() => fakeDocument.copiedText, 'prompt copy was not completed');
  assert.equal(fakeDocument.copiedText, firstResult.prompt.text, 'copy uses the selected result prompt');
  first.element.querySelector('[data-fr="chatgpt"]').click();
  await waitUntil(() => fakeDocument.openedPrompt, 'ChatGPT action did not receive Prompt');
  assert.equal(fakeDocument.openedPrompt, firstResult.prompt.text, 'ChatGPT receives the same frozen result');
  assert.equal(new URL(chatGPTUrlForPrompt(firstResult.prompt.text)).searchParams.get('prompt'), firstResult.prompt.text);
  for (const removed of ['prompt-download','reference']) assert.equal(first.element.querySelector(`[data-fr="${removed}"]`), null, 'retired operations are absent from random view');
  assert.deepEqual(first.element.querySelector('.fr-actions').children.filter(el=>!el.hidden).map(el=>el.dataset.fr), ['takeaway','random','detail'], 'reveal keeps takeaway, reroll and a quiet detail action');
  assert.deepEqual(first.element.querySelector('.fr-extra-actions').children.filter(el=>!el.hidden).map(el=>el.dataset.fr), [], 'download and creation actions live in the takeaway panel');
  assert.ok(first.element.children.indexOf(first.element.querySelector('.fr-reveal'))
    < first.element.children.indexOf(first.element.querySelector('.fr-actions')),
  'the feature summary and complete Artwork precede primary actions in document order');
  assert.ok(first.element.children.indexOf(first.element.querySelector('.fr-actions'))
    < first.element.children.indexOf(first.element.querySelector('.fr-extra-actions')),
  'main result actions precede auxiliary recovery actions');

  prefersReducedMotion = false;
  let resolveSelecting;
  let selectionWasRequested = false;
  const selecting = viewFor({engine: {select() {
    selectionWasRequested = true;
    return new Promise(resolve => { resolveSelecting = resolve; });
  }}});
  const selectingStart = selecting.start();
  await waitUntil(() => selectionWasRequested, 'draw selection did not begin');
  assert.equal(selecting.getState().phase, 'selecting');
  assert.equal(selecting.getState().resultHidden, true);
  assert.equal(selecting.getState().displayResult, false);
  assert.equal(selecting.element.dataset.displayResult, 'false');
  assert.equal(selecting.element.dataset.feedback, 'shuffling', 'normal mode begins a visual response before selection resolves');
  assert.equal(selecting.element.querySelector('.fr-reveal').classList.contains('is-preparing'), true);
  assert.equal(selecting.element.querySelectorAll('.fr-reel').length, 0, 'selection begins without revealing a fixed card count');
  assert.equal(selecting.element.querySelectorAll('.fr-card-back-face').length, 0, 'selection feedback does not expose cards before the result is known');
  assert.equal(selecting.element.querySelector('[data-fr="random"]').hidden, true, 'the busy view hides the duplicate random action');
  assert.equal(selecting.element.querySelector('[data-fr="random"]').disabled, true);
  resolveSelecting({status: 'empty', pool: [], message: '测试空池'});
  assert.equal(await selectingStart, false);
  assert.equal(selecting.element.querySelector('.fr-reveal').classList.contains('is-preparing'), false, 'an empty pool stops the card-back shuffle without landing on invented facts');
  assert.equal(selecting.element.querySelector('.fr-result-card').hidden, true);

  let resolveSelectingSkip;
  const selectingSkipResult = makeResult(pool[1], 39);
  const selectingSkip = viewFor({engine: {select() {
    return new Promise(resolve => { resolveSelectingSkip = () => resolve(selection(selectingSkipResult, [pool[1]])); });
  }}});
  const selectingSkipStart = selectingSkip.start();
  await waitUntil(() => typeof resolveSelectingSkip === 'function', 'skip-on-selection test did not start drawing');
  assert.equal(selectingSkip.skip(), true, 'skip during selection remembers the user intent');
  assert.equal(selectingSkip.getState().phase, 'selecting', 'selection still finishes before any card stops');
  assert.equal(selectingSkip.element.querySelector('.fr-result-card').hidden, true);
  resolveSelectingSkip();
  assert.equal(await selectingSkipStart, true);
  assert.equal(selectingSkip.getState().phase, 'awaiting-reveal', 'a remembered skip stops cards only after selection and preload finish');
  assert.deepEqual(selectingSkip.getState().stoppedSlots, Array.from({length: selectingSkipResult.displaySlotKeys.length}, (_, index) => index));
  selectingSkip.element.querySelector('[data-fr="reveal-partner"]').click();
  assert.strictEqual(selectingSkip.getResult(), selectingSkipResult);

  const preloadingSkipResult = makeResult(pool[0], 391);
  const pendingPreloadSkip = [];
  const preloadingSkip = viewFor({
    engine: makeEngine([selection(preloadingSkipResult, [pool[0]])]),
    loader: asset => new Promise(resolve => pendingPreloadSkip.push(() => resolve(handleFor(asset))))
  });
  const preloadingSkipStart = preloadingSkip.start();
  await waitUntil(() => preloadingSkip.getState().phase === 'preloading' && pendingPreloadSkip.length > 0,
    'skip-on-preload test did not begin loading resources');
  assert.equal(preloadingSkip.skip(), true, 'skip during preload remembers the user intent');
  assert.equal(preloadingSkip.getState().phase, 'preloading', 'skip does not bypass resource verification');
  assert.equal(preloadingSkip.element.querySelector('.fr-result-card').hidden, true);
  for (const finishLoad of pendingPreloadSkip.splice(0)) finishLoad();
  assert.equal(await preloadingSkipStart, true);
  assert.equal(preloadingSkip.getState().phase, 'awaiting-reveal', 'preload completion honors the remembered skip');
  assert.deepEqual(preloadingSkip.getState().stoppedSlots, Array.from({length: preloadingSkipResult.displaySlotKeys.length}, (_, index) => index));
  preloadingSkip.element.querySelector('[data-fr="reveal-partner"]').click();
  assert.strictEqual(preloadingSkip.getResult(), preloadingSkipResult);

  let unblockAutoSelection;
  let autoSelectionStarted = false;
  let pendingAutoLoads = [];
  const autoResult = makeResult(pool[1], 40);
  const autoView = viewFor({
    autoStart: true,
    engine: {select() {
      autoSelectionStarted = true;
      return new Promise(resolve => { unblockAutoSelection = () => resolve(selection(autoResult)); });
    }},
    loader: asset => new Promise(resolve => pendingAutoLoads.push(() => resolve(handleFor(asset))))
  });
  await waitUntil(() => autoSelectionStarted, 'auto-start did not call the draw engine after mounting');
  assert.equal(autoView.getState().phase, 'selecting');
  assert.equal(autoView.element.dataset.feedback, 'shuffling', 'the one-click entry starts the branded card motion while choosing a result');
  assert.equal(autoView.element.querySelector('.fr-result-card').hidden, true);
  unblockAutoSelection();
  await waitUntil(() => autoView.getState().phase === 'preloading' && pendingAutoLoads.length > 0, 'selected result did not enter delayed asset preparation');
  assert.equal(autoView.element.dataset.feedback, 'shuffling', 'card backs continue moving while required sources load');
  assert.equal(autoView.element.querySelector('.fr-result-card').hidden, true, 'a frozen selection remains hidden until every required asset verifies');
  assert.equal(autoView.element.querySelectorAll('.fr-reel-track').length, 0, 'unverified feature previews do not appear as finished candidates');
  for (const finishLoad of pendingAutoLoads.splice(0)) finishLoad();
  await waitForResult(autoView, 'one-click auto-start did not reach its result');
  assert.strictEqual(autoView.getResult(), autoResult, 'auto-start preserves the exact Artwork selected before preload');
  assert.equal(autoView.element.dataset.feedback, 'idle', 'verified candidates replace the preparation track before reveal');
  assert.equal(autoView.element.querySelector('.fr-result-image').src, `blob:${getCatalogAsset(autoResult.asset).id}`);

  let unblockReduceSelection;
  let reduceSelectionStarted = false;
  let pendingReduceLoads = [];
  const reduceResult = makeResult(pool[2], 41);
  prefersReducedMotion = true;
  const reduceAutoView = viewFor({
    autoStart: true,
    engine: {select() {
      reduceSelectionStarted = true;
      return new Promise(resolve => { unblockReduceSelection = () => resolve(selection(reduceResult)); });
    }},
    loader: asset => new Promise(resolve => pendingReduceLoads.push(() => resolve(handleFor(asset))))
  });
  await waitUntil(() => reduceSelectionStarted, 'reduced-motion auto-start did not begin selection');
  assert.equal(reduceAutoView.element.dataset.feedback, 'static', 'reduced motion identifies the static preparation state');
  assert.equal(reduceAutoView.element.querySelector('.fr-reveal').classList.contains('is-preparing'), false, 'reduced motion has no card-back movement class');
  unblockReduceSelection();
  await waitUntil(() => reduceAutoView.getState().phase === 'preloading' && pendingReduceLoads.length > 0, 'reduced-motion result did not enter asset preparation');
  assert.equal(reduceAutoView.element.dataset.feedback, 'static');
  for (const finishLoad of pendingReduceLoads.splice(0)) finishLoad();
  await waitUntil(() => reduceAutoView.getState().phase === 'awaiting-reveal', 'reduced motion did not pause on the artwork-specific static cards');
  assert.equal(reduceAutoView.getState().resultHidden, true);
  assert.equal(reduceAutoView.element.querySelector('.fr-result-card').hidden, true);
  assert.equal(reduceAutoView.element.querySelectorAll('.fr-reel-track').length, reduceResult.displaySlotKeys.length);
  assert.equal(reduceAutoView.element.querySelectorAll('.fr-card-back-face').length, 0, 'verified factual cards replace the static preparation backs');
  reduceAutoView.element.querySelector('[data-fr="reveal-partner"]').click();
  assert.strictEqual(reduceAutoView.getResult(), reduceResult, 'manual reduced-motion reveal keeps the selected Artwork');
  assert.equal(reduceAutoView.element.dataset.feedback, 'static');

  prefersReducedMotion = false;
  let releaseClosedSelection;
  let closedSelectionStarted = false;
  let closedLoaderCalls = 0;
  const closedAuto = viewFor({
    autoStart: true,
    engine: {select() {
      closedSelectionStarted = true;
      return new Promise(resolve => { releaseClosedSelection = () => resolve(selection(makeResult(pool[0], 42))); });
    }},
    loader: async asset => { closedLoaderCalls += 1; return handleFor(asset); }
  });
  await waitUntil(() => closedSelectionStarted, 'close-race auto-start did not reach selection');
  assert.equal(closedAuto.element.dataset.feedback, 'shuffling');
  closedAuto.dispose();
  releaseClosedSelection();
  await new Promise(resolve => originalSetTimeout(resolve, 4));
  assert.equal(closedLoaderCalls, 0, 'closing during selection prevents stale result resources from loading');
  assert.equal(closedAuto.getResult(), null, 'closing during selection cannot install a late result');

  const downloadA = makeResult(pool[2], 21);
  const downloadB = makeResult(pool[3], 22);
  const downloadAssetA = getAsset(downloadA.asset);
  const downloadAssetB = getAsset(downloadB.asset);
  const pendingDownloads = [];
  const completedDownloads = [];
  const disposedDownloads = [];
  const deferredDownload = (assetRef, {signal} = {}) => new Promise((resolve, reject) => {
    const asset = getAsset(assetRef);
    const operation = {
      asset,
      signal,
      aborted: false,
      finish() {
        completedDownloads.push(asset.id);
        resolve({blob: new Blob([asset.id], {type: asset.mime}), filename: `${asset.ownerArtworkId}.png`, dispose() { disposedDownloads.push(asset.id); }});
      }
    };
    signal?.addEventListener('abort', () => {
      operation.aborted = true;
      reject(new DOMException('download canceled', 'AbortError'));
    }, {once: true});
    pendingDownloads.push(operation);
  });
  const downloadView = viewFor({engine: makeEngine([selection(downloadA), selection(downloadB)]), downloadAsset: deferredDownload});
  assert.equal(await downloadView.start(), true);
  await waitForResult(downloadView);
  downloadView.element.querySelector('[data-fr="download"]').click();
  await waitUntil(() => pendingDownloads.length === 1, 'Artwork A download did not start');
  assert.equal(pendingDownloads[0].asset.id, downloadAssetA.id, 'download freezes Artwork A asset before a later draw');
  assert.equal(downloadView.element.querySelector('[data-fr="download"]').disabled, true, 'the same in-flight download cannot be duplicated');
  const rerollDuringDownload = downloadView.start();
  assert.equal(await rerollDuringDownload, true, 'a new Artwork draw can finish while A download is pending');
  await waitForResult(downloadView);
  assert.strictEqual(downloadView.getResult(), downloadB, 'the visible result advances to Artwork B');
  assert.equal(pendingDownloads[0].signal.aborted, false, 'starting B does not cancel the frozen A download');
  assert.equal(downloadView.element.querySelector('[data-fr="download"]').disabled, false, 'B can expose its own download action');
  const statusForB = downloadView.element.querySelector('.fr-status').textContent;
  pendingDownloads[0].finish();
  await waitUntil(() => disposedDownloads.includes(downloadAssetA.id), 'completed A download lease was not released');
  assert.deepEqual(completedDownloads, [downloadAssetA.id], 'only the frozen A resource completed the pending download');
  assert.equal(downloadView.element.querySelector('.fr-status').textContent, statusForB, 'late A completion cannot overwrite B status');

  downloadView.element.querySelector('[data-fr="download"]').click();
  await waitUntil(() => pendingDownloads.length === 2, 'Artwork B download did not start');
  const disposedDownloadStatus = downloadView.element.querySelector('.fr-status').textContent;
  downloadView.dispose();
  assert.equal(pendingDownloads[1].signal.aborted, true, 'disposing the reveal aborts its active image download');
  await new Promise(resolve => originalSetTimeout(resolve, 4));
  assert.equal(pendingDownloads[1].asset.id, downloadAssetB.id);
  assert.deepEqual(completedDownloads, [downloadAssetA.id], 'an aborted B download cannot produce a completed output');
  assert.equal(downloadView.element.querySelector('.fr-status').textContent, disposedDownloadStatus, 'aborting on dispose does not write stale status');

  const fallbackResult = makeResult(pool[0], 15);
  const fallback = viewFor({engine: makeEngine([selection(fallbackResult)])});
  assert.equal(await fallback.start(), true);
  await waitForResult(fallback);
  clipboardWriter = async () => { throw new Error('clipboard denied'); };
  fallback.element.querySelector('[data-fr="copy"]').click();
  await waitUntil(() => fallback.element.querySelector('.fr-prompt-fallback').hidden === false, 'copy failure did not show the manual fallback');
  assert.equal(fallback.element.querySelector('.fr-prompt-fallback').value, fallbackResult.prompt.text);
  clipboardWriter = async text => { fakeDocument.copiedText = text; };
  const blockedResult=makeResult(pool[0],16);
  const blocked=viewFor({engine:makeEngine([selection(blockedResult)]),openChatGPT:async()=>({copied:false,opened:false})});
  await blocked.start();await waitForResult(blocked);blocked.element.querySelector('[data-fr="chatgpt"]').click();
  await waitUntil(()=>blocked.element.querySelector('.fr-manual-chat-link').hidden===false,'blocked open has no manual fallback');
  assert.equal(blocked.element.querySelector('.fr-prompt-fallback').value,blockedResult.prompt.text);
  assert.equal(new URL(blocked.element.querySelector('.fr-manual-chat-link').href).searchParams.get('prompt'),blockedResult.prompt.text);

  prefersReducedMotion = false;
  landOrder.length = 0;
  const secondResult = makeResult(pool[1], 2);
  const secondIndices = Array.from({length: secondResult.displaySlotKeys.length}, (_, index) => index);
  const second = viewFor({engine: makeEngine([selection(secondResult)]), onResult: result => completed.push(result)});
  assert.equal(await second.start(), true);
  assert.equal(second.getState().phase, 'revealing');
  assert.equal(second.element.dataset.phase, 'revealing');
  assert.equal(second.element.dataset.artworkId, secondResult.artworkId, 'the active reveal stays bound to its frozen Artwork');
  assert.equal(second.element.dataset.activeSlot, '0', 'DOM exposes the zero-based first active slot for process recording');
  assert.equal(second.getState().activeSlot, 0);
  assert.equal(second.element.querySelector('.fr-result-card').hidden, true, 'the full result remains hidden while any card is rolling');
  assert.equal(second.element.dataset.displayResult, 'false');
  const rollingSlots = second.element.querySelectorAll('.fr-reel');
  assert.equal(rollingSlots.length, secondResult.displaySlotKeys.length, 'the reveal uses the selected Artwork card count');
  assert.equal(rollingSlots[0].classList.contains('is-rolling'), true, 'the first card starts rolling first');
  assert.equal(rollingSlots.slice(1).some(reel => reel.classList.contains('is-rolling')), false, 'later cards wait until the previous card stops');
  await waitUntil(() => second.getState().phase === 'awaiting-reveal', 'last card did not enter the observable all-stopped boundary');
  assert.deepEqual(second.getState().stoppedSlots, secondIndices, 'the boundary waits for every factual card');
  assert.deepEqual(second.getState().stopOrder, secondIndices, 'cards stop in their displayed order');
  assert.equal(second.getState().resultHidden, true, 'the full result stays hidden until every displayed card stops');
  assert.equal(second.getState().displayResult, false);
  assert.equal(second.getState().activeSlot, -1, 'the stopped boundary has no active rolling slot');
  assert.equal(second.element.dataset.displayResult, 'false');
  assert.equal(second.element.querySelector('.fr-result-card').hidden, true);
  assert.equal(second.element.querySelector('[data-fr="reveal-partner"]').hidden, true, 'normal motion keeps the confirmation button out of the automatic path');
  await waitUntil(() => second.getState().phase === 'result', 'normal reveal did not continue after its all-stopped boundary');
  assert.deepEqual([...new Set(landOrder)], rollingSlots.map(reel => Number(reel.dataset.index)), 'cards stop in order');
  assert.deepEqual(second.getState().stoppedSlots, secondIndices, 'completed state retains all stopped slots');
  assert.deepEqual(second.getState().stopOrder, secondIndices, 'completed state retains the observed stop order');
  assert.strictEqual(second.getResult(), secondResult);
  assert.deepEqual(completed, [firstResult, secondResult], 'onResult fires only for completed frozen results');

  const skipResult = makeResult(pool[4], 23);
  const skipIndices = Array.from({length: skipResult.displaySlotKeys.length}, (_, index) => index);
  const skipEngine = makeEngine([selection(skipResult)]);
  const skipped = viewFor({engine: skipEngine});
  assert.equal(await skipped.start(), true);
  assert.equal(skipped.getState().phase, 'revealing');
  const skippedArtworkId = skipped.getState().artworkId;
  assert.equal(skipped.skip(), true, 'the user can skip the active rolling sequence');
  assert.equal(skipped.getState().phase, 'awaiting-reveal');
  assert.deepEqual(skipped.getState().stoppedSlots, skipIndices, 'skip statically stops every displayed card before result');
  assert.equal(skipped.getState().resultHidden, true);
  assert.equal(skipped.getState().displayResult, false);
  assert.equal(skipped.getState().artworkId, skippedArtworkId, 'skip retains the already frozen Artwork');
  assert.equal(skipEngine.calls.length, 1, 'skip does not redraw');
  assert.equal(skipped.element.querySelector('.fr-reel-stage').scrollRequests.at(-1)?.behavior, 'instant', 'skip cancels any in-flight smooth card-track scroll');
  await waitUntil(() => skipped.getState().phase === 'result', 'skipped frozen result did not appear after the boundary');
  assert.strictEqual(skipped.getResult(), skipResult, 'skip reveals the same Artwork/Prompt result');
  assert.equal(skipped.element.querySelector('.fr-result-image').src, `blob:${getCatalogAsset(skipResult.asset).id}`);

  prefersReducedMotion = false;
  const midMotionResult = makeResult(pool[3], 24);
  const midMotionIndices = Array.from({length: midMotionResult.displaySlotKeys.length}, (_, index) => index);
  const midMotionEngine = makeEngine([selection(midMotionResult)]);
  const midMotion = viewFor({engine: midMotionEngine});
  assert.equal(await midMotion.start(), true);
  assert.equal(midMotion.getState().phase, 'revealing');
  prefersReducedMotion = true;
  for (const listener of [...motionListeners]) listener({matches: true});
  assert.equal(midMotion.getState().phase, 'awaiting-reveal', 'enabling reduce during a roll stops motion and waits for confirmation');
  assert.equal(midMotion.getState().resultHidden, true);
  assert.equal(midMotion.getState().displayResult, false);
  assert.equal(midMotion.element.querySelector('[data-fr="reveal-partner"]').hidden, false);
  assert.equal(midMotion.element.querySelector('.fr-reel-stage').scrollRequests.at(-1)?.behavior, 'instant', 'enabling reduced motion cancels any in-flight smooth card-track scroll');
  assert.deepEqual(midMotion.getState().stoppedSlots, midMotionIndices);
  assert.equal(midMotionEngine.calls.length, 1, 'motion preference change does not redraw');
  midMotion.element.querySelector('[data-fr="reveal-partner"]').click();
  assert.strictEqual(midMotion.getResult(), midMotionResult);
  assert.equal(midMotion.getState().resultVisible, true);

  prefersReducedMotion = false;
  const staleAwaitingA = makeResult(pool[0], 25);
  const freshAwaitingB = makeResult(pool[2], 26);
  const staleAwaitingEngine = makeEngine([selection(staleAwaitingA), selection(freshAwaitingB)]);
  const staleAwaiting = viewFor({engine: staleAwaitingEngine});
  assert.equal(await staleAwaiting.start(), true);
  await waitUntil(() => staleAwaiting.getState().phase === 'awaiting-reveal', 'old run never reached the all-stopped boundary');
  assert.equal(staleAwaiting.cancel(), true, 'closing at the boundary cancels the pending reveal timer');
  assert.equal(staleAwaiting.getState().resultHidden, true);
  assert.equal(staleAwaiting.element.dataset.displayResult, 'false');
  assert.equal(await staleAwaiting.start(), true, 'reopening starts a fresh frozen selection');
  await waitForResult(staleAwaiting, 'reopened run did not reveal');
  await new Promise(resolve => originalSetTimeout(resolve, 100));
  assert.strictEqual(staleAwaiting.getResult(), freshAwaitingB, 'a canceled prior auto-reveal cannot contaminate the reopened result');
  assert.equal(staleAwaitingEngine.calls.length, 2, 'reopen selects exactly once after cancel');

  const prior = makeResult(pool[1], 7);
  const failedSelection = makeResult(pool[2], 8);
  let failNextArtwork = false;
  const failureEngine = makeEngine([selection(prior), selection(failedSelection)]);
  const failedRetry = viewFor({
    engine: failureEngine,
    loader: async asset => {
      if (failNextArtwork && asset.id === getCatalogAsset(pool[2].assetRefs.original).id) throw new Error('injected hash/decode failure');
      return handleFor(asset);
    }
  });
  prefersReducedMotion = true;
  assert.equal(await failedRetry.start(), true);
  await waitForResult(failedRetry);
  assert.strictEqual(failedRetry.getResult(), prior);
  failNextArtwork = true;
  assert.equal(await failedRetry.start(), false);
  assert.equal(failureEngine.calls.length, 2, 'resource failure never silently reselects a different work');
  assert.equal(failedRetry.getState().phase, 'error');
  assert.match(failedRetry.element.querySelector('.fr-status').textContent, /图片暂时无法载入/);
  assert.ok(failureEngine.unavailable.some(item => item.artworkId === failedSelection.artworkId), 'asset failures exclude their owning Artwork from future draws');
  assert.strictEqual(failedRetry.getResult(), prior, 'the previous result remains frozen and visible after a later resource failure');
  assert.equal(failedRetry.element.querySelector('.fr-result-badge').textContent, '上一款');
  const restoredResult = makeResult(pool[4], 9);
  const restoredIndices = Array.from({length: restoredResult.displaySlotKeys.length}, (_, index) => index);
  assert.equal(await failedRetry.restore(restoredResult), true);
  assert.strictEqual(failedRetry.getResult(), restoredResult, 'restore returns to the exact saved DrawResult without another selection');
  assert.equal(failureEngine.calls.length, 2);
  const restoredCards = failedRetry.element.querySelectorAll('.fr-reel');
  assert.equal(failedRetry.element.querySelector('.fr-reveal').hidden, false, 'restore shows the stopped feature-card view');
  assert.equal(restoredCards.length, restoredResult.displaySlotKeys.length, `restore rebuilds the selected factual cards from the frozen result, got ${restoredCards.length}`);
  assert.ok(restoredCards.every(card => card.dataset.stopped === 'true' && card.classList.contains('is-restored')), 'restored cards are already stopped');
  assert.ok(restoredCards.every(card => card.querySelector('.fr-reel-track').classList.contains('is-static') && card.querySelector('.fr-reel-track').children.length === 1), 'restore shows one factual selected card per slot without invented neighbors');
  assert.deepEqual(restoredCards.map(card => card.dataset.slot), restoredResult.displaySlotKeys);
  assert.deepEqual(failedRetry.getState().stoppedSlots, restoredIndices);
  for (const feature of restoredResult.revealFeatures.filter(item => restoredResult.displaySlotKeys.includes(item.kind))) {
    const card = restoredCards.find(item => item.dataset.slot === feature.kind);
    assert.ok(card, `restored cards preserve feature ${feature.kind}`);
    assert.equal(card.dataset.centerValue, feature.label, `restored card ${feature.kind} remains bound to its real frozen fact`);
  }
  assert.match(failedRetry.element.querySelector('.fr-result-traits').textContent, /透明 PNG/, 'the result summary identifies the transparent source format');

  const candidateFailureEngine = makeEngine([selection(makeResult(pool[0], 18), pool)]);
  const failedCandidateVisual = getCatalogAsset(pool[1].revealVisuals.appearance.assetRef);
  const candidateFailure = viewFor({
    engine: candidateFailureEngine,
    loader: async asset => {
      if (asset.id === failedCandidateVisual.id) throw new Error('candidate preview hash mismatch');
      return handleFor(asset);
    }
  });
  assert.equal(await candidateFailure.start(), false, 'a required card candidate resource failure stops before animation');
  assert.ok(candidateFailureEngine.unavailable.some(item => item.artworkId === pool[1].id), 'candidate resource failure excludes its actual owning Artwork');
  assert.match(candidateFailure.element.querySelector('.fr-status').textContent, /图片暂时无法载入/);

  const sharedDotsArtworks = ['candidate-dots-20261005', 'dots-rose-glasses', 'dots-lilac-bucket']
    .map(id => ARTWORKS.find(artwork => artwork.id === id));
  const sharedAppearanceAsset = getCatalogAsset(sharedDotsArtworks[0].revealVisuals.appearance.assetRef);
  const sharedRetryArtwork = sharedDotsArtworks.find(artwork => artwork.id === 'dots-rose-glasses');
  const sharedRetryResult = makeResult(sharedRetryArtwork, 19);
  const sharedFailureEngine = makeEngine([selection(sharedRetryResult, sharedDotsArtworks)]);
  let sharedAssetBroken = true;
  const sharedFailure = viewFor({
    engine: sharedFailureEngine,
    loader: async asset => {
      if (sharedAssetBroken && asset.id === sharedAppearanceAsset.id) throw new Error('shared candidate visual unavailable');
      return handleFor(asset);
    }
  });
  assert.equal(await sharedFailure.start(), false, 'a failed shared appearance clue stops the selected draw before animation');
  assert.deepEqual([...sharedFailureEngine.unavailableArtworkIds()].sort(), [...sharedAppearanceAsset.applicableArtworkIds].sort(),
    'a shared clue failure quarantines every Artwork registered to use that asset, not only its owner example');
  assert.ok(sharedFailureEngine.unavailableArtworkIds().includes(sharedRetryArtwork.id),
    'the selected non-owner Artwork is quarantined when its shared clue fails');
  const sharedRetryButton = sharedFailure.element.querySelector('[data-fr="retry-resources"]');
  assert.equal(sharedRetryButton.hidden, false, 'shared resource quarantine offers explicit recovery');
  sharedAssetBroken = false;
  sharedRetryButton.click();
  await waitForResult(sharedFailure, 'explicit retry did not recover the repaired shared appearance clue');
  assert.strictEqual(sharedFailure.getResult(), sharedRetryResult, 'shared-asset retry keeps the exact frozen DrawResult');
  assert.equal(sharedFailureEngine.calls.length, 1, 'shared-asset retry does not select another Artwork');
  assert.deepEqual(sharedFailureEngine.unavailableArtworkIds(), [], 'successful retry restores all quarantined Artwork IDs');
  assert.equal(sharedRetryButton.hidden, true, 'successful shared-asset retry clears the recovery action');

  let unblockStale;
  let staleLoadStarted = false;
  let staleDisposed = 0;
  let selectionIndex = 0;
  const staleA = makeResult(pool[0], 4);
  const freshB = makeResult(pool[3], 5);
  const changingEngine = {
    async select() { selectionIndex += 1; return selectionIndex === 1 ? selection(staleA) : selection(freshB); }
  };
  const rapid = viewFor({
    engine: changingEngine,
    loader: (asset, {signal}) => {
      if (asset.id === getCatalogAsset(pool[0].assetRefs.original).id && !staleLoadStarted) {
        staleLoadStarted = true;
        return new Promise(resolve => { unblockStale = () => resolve({...handleFor(asset), dispose() { staleDisposed += 1; }}); });
      }
      return Promise.resolve(handleFor(asset));
    }
  });
  const staleStart = rapid.start();
  await waitUntil(() => staleLoadStarted, 'slow selected result never entered preload');
  assert.equal(rapid.getState().phase, 'preloading');
  assert.equal(rapid.getState().resultHidden, true);
  assert.equal(rapid.getState().displayResult, false);
  assert.equal(rapid.element.dataset.displayResult, 'false');
  assert.equal(rapid.skip(), true, 'skip during the required asset preload remembers intent without bypassing it');
  assert.equal(rapid.getState().phase, 'preloading');
  assert.equal(rapid.element.querySelector('.fr-result-card').hidden, true);
  assert.equal(rapid.cancel(), true);
  assert.equal(await rapid.start(), true, 'a fresh session can start immediately after cancel');
  await waitForResult(rapid, 'new session did not finish');
  unblockStale();
  await staleStart;
  await waitUntil(() => staleDisposed === 1, 'late stale asset handle was not disposed');
  assert.strictEqual(rapid.getResult(), freshB, 'a late load cannot overwrite the newer DrawResult');

  let failStaleResource;
  let staleFailureLoadStarted = false;
  const staleFailureResult = makeResult(pool[0], 40);
  const currentAfterStaleFailure = makeResult(pool[3], 41);
  const staleFailureEngine = makeEngine([selection(staleFailureResult), selection(currentAfterStaleFailure)]);
  const staleFailureView = viewFor({
    engine: staleFailureEngine,
    loader: (asset, {signal}) => {
      if (asset.id === getCatalogAsset(pool[0].assetRefs.original).id && !staleFailureLoadStarted) {
        staleFailureLoadStarted = true;
        return new Promise((_resolve, reject) => { failStaleResource = () => reject(new Error('late ordinary resource failure')); });
      }
      return immediateLoader(asset, {signal});
    }
  });
  const staleFailureAttempt = staleFailureView.start();
  await waitUntil(() => staleFailureLoadStarted, 'stale failure case never entered preload');
  assert.equal(staleFailureView.cancel(), true, 'the pending resource request is canceled before its ordinary failure arrives');
  assert.equal(await staleFailureView.start(), true, 'a fresh selection starts while the canceled resource request is pending');
  await waitForResult(staleFailureView, 'fresh selection did not finish before the stale failure');
  assert.strictEqual(staleFailureView.getResult(), currentAfterStaleFailure);
  failStaleResource();
  assert.equal(await staleFailureAttempt, false, 'the canceled attempt remains stale after its loader rejects');
  assert.deepEqual(staleFailureEngine.unavailableArtworkIds(), [], 'an ordinary error from a stale run cannot quarantine the shared health pool');
  assert.strictEqual(staleFailureView.getResult(), currentAfterStaleFailure, 'a stale resource failure cannot replace the active DrawResult');

  const raceOld = makeResult(pool[2], 10);
  const raceNew = makeResult(pool[3], 11);
  const raceNotices = [];
  const raceView = viewFor({engine: makeEngine([selection(raceOld), selection(raceNew)]), notify: message => raceNotices.push(message)});
  prefersReducedMotion = true;
  assert.equal(await raceView.start(), true);
  await waitForResult(raceView);
  let finishClipboard;
  clipboardWriter = text => new Promise(resolve => { finishClipboard = () => { fakeDocument.copiedText = text; resolve(); }; });
  raceView.element.querySelector('[data-fr="copy"]').click();
  await waitUntil(() => typeof finishClipboard === 'function', 'copy did not enter async clipboard operation');
  const staleStatus = raceView.element.querySelector('.fr-status');
  const retrying = raceView.start();
  assert.equal(await retrying, true, 'a new run may replace the current result while clipboard work is pending');
  const currentStatus = staleStatus.textContent;
  finishClipboard();
  await new Promise(resolve => originalSetTimeout(resolve, 4));
  assert.equal(staleStatus.textContent, currentStatus, 'late copy completion does not overwrite a newer run status');
  assert.deepEqual(raceNotices, [], 'late copy completion does not notify after its run was replaced');

  const disposedResult = makeResult(pool[4], 14);
  const disposedNotices = [];
  const disposedCopy = viewFor({engine: makeEngine([selection(disposedResult)]), notify: message => disposedNotices.push(message)});
  assert.equal(await disposedCopy.start(), true);
  await waitForResult(disposedCopy);
  let finishDisposedClipboard;
  clipboardWriter = text => new Promise(resolve => { finishDisposedClipboard = () => { fakeDocument.copiedText = text; resolve(); }; });
  disposedCopy.element.querySelector('[data-fr="copy"]').click();
  await waitUntil(() => typeof finishDisposedClipboard === 'function', 'copy did not enter async clipboard operation before dispose');
  const disposedStatus = disposedCopy.element.querySelector('.fr-status').textContent;
  disposedCopy.dispose();
  finishDisposedClipboard();
  await new Promise(resolve => originalSetTimeout(resolve, 4));
  assert.equal(disposedCopy.element.querySelector('.fr-status').textContent, disposedStatus, 'late clipboard completion cannot write into a disposed view');
  assert.deepEqual(disposedNotices, [], 'late clipboard completion cannot notify after dispose');

  const emptyEngine = makeEngine([{status: 'empty', pool: [], message: '没有同时命中的已发布作品。', notice: '较低优先级的备用说明。'}]);
  const empty = viewFor({engine: emptyEngine});
  prefersReducedMotion = true;
  assert.equal(await empty.start(), false);
  assert.equal(empty.getState().phase, 'empty');
  const emptyReels = empty.element.querySelectorAll('.fr-reel');
  assert.equal(emptyReels.length, 0, 'an empty pool does not fabricate cards');
  assert.equal(empty.element.querySelector('.fr-result-card').hidden, true, 'empty pools never reveal a result');
  assert.equal(empty.element.querySelector('[data-fr="retry-resources"]').hidden, true, 'resource recovery only appears after an Artwork is quarantined');
  assert.match(empty.element.querySelector('.fr-status').textContent, /没有找到符合条件的伙伴/);

  const one = pool[0];
  const single = viewFor({engine: makeEngine([selection(makeResult(one, 6), [one])])});
  assert.equal(await single.start(), true);
  await waitForResult(single);
  assert.equal(single.element.querySelector('.fr-result-badge').textContent, '', 'result caption stays focused on the partner');
  assert.match(single.getState().notice, /只有一款/, 'single-pool truth remains in the draw state and gallery count');

  const retryArtwork = pool[0];
  const hardConditions = {
    query: {tagsByDimension: {style: ['style:dots'], action: ['action:front-static']}},
    requiredFeatures: ['head-accessory:over-ear-headphones', 'prop:none']
  };
  const retryFirstResult = makeResult(retryArtwork, 17, hardConditions);
  const retryEngine = makeEngine([selection(retryFirstResult, [retryArtwork])]);
  let resourceBroken = true;
  const explicitRetry = viewFor({
    engine: retryEngine,
    getConditions: () => ({query: {...hardConditions.query}, requiredFeatures: [...hardConditions.requiredFeatures]}),
    loader: async asset => {
      if (resourceBroken && asset.id === getCatalogAsset(retryArtwork.assetRefs.original).id) throw new Error('404 resource unavailable');
      return handleFor(asset);
    }
  });
  assert.equal(await explicitRetry.start(), false, 'the single broken candidate fails before any animation');
  assert.equal(retryEngine.calls.length, 1);
  assert.deepEqual(retryEngine.unavailableArtworkIds(), [retryArtwork.id]);
  const retryButton = explicitRetry.element.querySelector('[data-fr="retry-resources"]');
  assert.equal(retryButton.hidden, false, 'resource quarantine exposes an explicit retry action');
  assert.equal(retryButton.textContent, '再试一次');
  resourceBroken = false;
  retryButton.click();
  await waitForResult(explicitRetry, 'explicit retry did not recover the repaired single candidate');
  assert.strictEqual(explicitRetry.getResult(), retryFirstResult, 'retry keeps the same frozen DrawResult after its source is repaired');
  assert.deepEqual(retryEngine.unavailableArtworkIds(), [], 'explicit retry clears the resource quarantine before selection');
  assert.equal(retryEngine.calls.length, 1, 'retry does not silently select a different DrawResult');
  assert.deepEqual(retryEngine.calls[0], hardConditions, 'the failed attempt used the locked query and required features');
  assert.deepEqual(explicitRetry.getResult().requiredFeatures, hardConditions.requiredFeatures, 'the frozen result retains every hard feature lock');
  assert.deepEqual(explicitRetry.getResult().querySnapshot.tagsByDimension, hardConditions.query.tagsByDimension, 'the frozen result retains its complete query scope');
  assert.equal(explicitRetry.element.querySelector('.fr-status').textContent, '', 'successful reveal does not repeat filler status below the main actions');
  assert.equal(retryButton.hidden, true, 'the recovery action hides after the quarantined Artwork is re-included');

  for (const view of createdViews) view.dispose();
  assert.equal(motionListeners.size, 0, 'disposing each view removes reduced-motion listeners');
  console.log('Card reveal verification passed: versioned semantic feature visuals, frozen Artwork/Prompt/download binding, sequential stops, skip/reduced motion, preload guard, restore cards, empty/single pools, stale async actions, cancellation, A-download/B-reroll isolation, dispose abort, and action hierarchy.');
} finally {
  for (const view of createdViews) view.dispose();
  globalThis.setTimeout = originalSetTimeout;
  globalThis.clearTimeout = originalClearTimeout;
  if (originalRequestAnimationFrame) globalThis.requestAnimationFrame = originalRequestAnimationFrame;
  else delete globalThis.requestAnimationFrame;
  if (originalCancelAnimationFrame) globalThis.cancelAnimationFrame = originalCancelAnimationFrame;
  else delete globalThis.cancelAnimationFrame;
  if (originalMatchMedia) globalThis.matchMedia = originalMatchMedia;
  else delete globalThis.matchMedia;
  if (originalDocument) globalThis.document = originalDocument;
  else delete globalThis.document;
  if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
  else delete globalThis.window;
  if (originalNavigator) Object.defineProperty(globalThis, 'navigator', originalNavigator);
  else delete globalThis.navigator;
}
