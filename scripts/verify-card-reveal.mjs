import assert from 'node:assert/strict';
import {createRevealView} from '../dist/studio-fullscreen-random.js';
import {REVEAL_SLOTS, revealFeaturesFor} from '../dist/studio-draw.js?v=90';
import {chatGPTUrlForPrompt} from '../dist/studio-actions.js?v=90';
import {ARTWORKS, getAsset as getCatalogAsset} from '../dist/studio-artwork-catalog.js?v=90';
import {FEATURE_VISUAL_REVISION, featureVisualFor} from '../dist/studio-feature-visuals.js?v=90';

assert.deepEqual(REVEAL_SLOTS.map(slot => slot.key), ['style', 'appearance', 'palette-material', 'clothing', 'accessory', 'prop']);
assert.ok(REVEAL_SLOTS.every(slot => slot.kinds.length === 1 && slot.kinds[0] === slot.key));
const missingFeature = {kind:'accessory',state:'known',value:['head-accessory:future-item'],label:'尚未登记的配饰'};
const missingVisual = featureVisualFor([missingFeature], 'accessory', {id:'future-artwork',assetRefs:{original:'asset:future'}});
assert.equal(missingVisual.kind, 'unknown-value', 'an unregistered feature crop stays explicit and never borrows another visual');
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
    this.style = {};
    this.hidden = false;
    this.disabled = false;
    this.readOnly = false;
    this.value = '';
    this.textContent = '';
    this.innerHTML = '';
    this.src = '';
    this.alt = '';
    this.download = '';
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
  constructor() { this.body = new FakeElement('body', this); this.downloads = []; this.textDownloads = []; }
  createElement(tagName) { return new FakeElement(tagName, this); }
}

const fakeDocument = new FakeDocument();
globalThis.document = fakeDocument;
Object.defineProperty(globalThis, 'window', {configurable: true, value: {setTimeout: originalSetTimeout}});
let prefersReducedMotion = false;
const motionListeners = new Set();
globalThis.matchMedia = () => ({
  get matches() { return prefersReducedMotion; },
  addEventListener(_type, listener) { motionListeners.add(listener); },
  removeEventListener(_type, listener) { motionListeners.delete(listener); }
});
globalThis.setTimeout = (callback, milliseconds = 0, ...args) => originalSetTimeout(callback, Math.min(8, Math.max(0, Number(milliseconds) * 0.05)), ...args);
globalThis.clearTimeout = originalClearTimeout;
globalThis.requestAnimationFrame = callback => originalSetTimeout(() => callback(Date.now()), 0);
globalThis.cancelAnimationFrame = originalClearTimeout;
clipboardWriter = async text => { fakeDocument.copiedText = text; };
Object.defineProperty(globalThis, 'navigator', {configurable: true, value: {clipboard: {writeText(text) { return clipboardWriter(text); }}}});

const assets = new Map(ARTWORKS.map(artwork => [artwork.assetRefs.original, getCatalogAsset(artwork.assetRefs.original)]));
const pool = ARTWORKS.slice(0, 5);

function makeResult(artwork, index = 1) {
  const revealFeatures = revealFeaturesFor(artwork);
  return Object.freeze({
    artworkId: artwork.id,
    artwork,
    asset: getCatalogAsset(artwork.assetRefs.original),
    prompt: Object.freeze({language: 'zh', text: `为${artwork.title}制作的准确 Prompt ${index}`}),
    catalogRevision: 'fixture-r1',
    drawId: `draw-${index}`,
    querySnapshot: Object.freeze({tagsByDimension: {style: [`style:${artwork.styleIdentity}`]}}),
    requiredFeatures: Object.freeze([]),
    revealFeatures: Object.freeze(revealFeatures.map(feature => Object.freeze({...feature}))),
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
function viewFor({engine, loader = immediateLoader, downloadAsset = fakeDownloadAsset, openChatGPT = async text => {fakeDocument.openedPrompt=text;return {copied:true,opened:true};}, onDetail = () => {}, onResult = () => {}, notify = () => {}, getConditions = () => ({query: {tagsByDimension: {style: ['style:dots']}}, requiredFeatures: []})}) {
  const view = createRevealView({engine, getConditions, onDetail, onResult, notify, getAsset, loadAsset: loader, downloadAsset, openChatGPT});
  fakeDocument.body.append(view.element);
  createdViews.push(view);
  return view;
}

try {
  assert.equal(revealFeaturesFor(pool[0]).length, 6, 'fixture uses the fixed six-slot contract');

  for (const artwork of ARTWORKS) {
    const features = revealFeaturesFor(artwork);
    assert.deepEqual(features.map(feature => feature.kind), REVEAL_SLOTS.map(slot => slot.key), `${artwork.id} has one fact for every fixed slot`);
    assert.ok(features.every(feature => Array.isArray(feature.value) && ['known', 'none', 'not-applicable'].includes(feature.state)));
    for (const slot of REVEAL_SLOTS) {
      const feature = features.find(item => item.kind === slot.key);
      const visual = featureVisualFor([feature], slot.key, artwork);
      assert.equal(visual.version, FEATURE_VISUAL_REVISION);
      if (slot.key === 'style') {
        assert.equal(visual.kind, 'artwork-preview', `${artwork.id} uses the full approved Artwork for the style slot`);
        assert.deepEqual(visual.sourceRect, [0, 0, 1, 1]);
      } else if (feature.state === 'none' || feature.state === 'not-applicable') {
        assert.equal(visual.kind, 'empty-value', `${artwork.id}/${slot.key} communicates its explicit empty state`);
        assert.equal(visual.assetRef, undefined, 'empty states do not borrow a character image');
      } else {
        assert.equal(visual.kind, 'source-crop', `${artwork.id}/${slot.key} uses a registered local view into the same PNG`);
        assert.ok(visual.assetRef);
        assert.equal(visual.source.artworkId, artwork.id);
        assert.equal(visual.source.sha256, getCatalogAsset(artwork.assetRefs.original).sha256);
        assert.equal(visual.source.assetId, getCatalogAsset(artwork.assetRefs.original).id);
        assert.equal(visual.source.version, getCatalogAsset(artwork.assetRefs.original).version);
        assert.equal(visual.sourceRect.length, 4);
        assert.ok(visual.sourceRect.every(value => value >= 0 && value <= 1));
        assert.ok(visual.sourceRect[2] < 1 || visual.sourceRect[3] < 1, 'non-style features use a local source crop rather than a full-image fallback');
      }
    }
  }

  const firstResult = makeResult(pool[0], 1);
  const firstEngine = makeEngine([selection(firstResult)]);
  let details = null;
  const completed = [];
  const first = viewFor({
    engine: firstEngine,
    onDetail: result => { details = result; },
    onResult: result => completed.push(result)
  });
  prefersReducedMotion = true;
  assert.equal(await first.start(), true);
  assert.deepEqual(firstEngine.calls[0], {query: {tagsByDimension: {style: ['style:dots']}}, requiredFeatures: []}, 'fresh query and hard requirements go to the single draw engine');
  assert.equal(first.getState().phase, 'result');
  assert.equal(first.element.dataset.phase, 'result');
  assert.equal(first.element.dataset.artworkId, firstResult.artworkId, 'the DOM exposes the completed frozen Artwork id');
  assert.strictEqual(first.getResult(), firstResult, 'the selected frozen DrawResult is the view result');
  const reels = first.element.querySelectorAll('.fr-reel');
  assert.equal(reels.length, 6, 'renders all six fixed feature slots');
  for (const [index, reel] of reels.entries()) {
    const slot = REVEAL_SLOTS[index];
    const distinctFacts = new Set(pool.map(artwork => {
      const feature = revealFeaturesFor(artwork).find(item => item.kind === slot.key);
      return `${feature.kind}:${JSON.stringify(feature.value ?? feature.id)}`;
    })).size;
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
    assert.equal(visuals.every(visual => ['artwork-preview', 'source-crop', 'empty-value'].includes(visual.dataset.visualKind)), true, 'feature cards use either the same Artwork source, a source crop, or an explicit empty state');
    assert.equal(visuals.some(visual => visual.innerHTML.includes('<svg')), false, 'the reveal does not substitute generated SVG feature art');
  }
  assert.ok(reels.every(reel => reel.dataset.stopped === 'true'), 'reduced motion atomically stops all cards');
  assert.equal(first.element.querySelector('.fr-result-card').hidden, false, 'the complete Artwork appears after all cards stop');
  assert.equal(first.element.querySelector('.fr-result-image').src, `blob:${getCatalogAsset(pool[0].assetRefs.original).id}`);
  assert.deepEqual(completed, [firstResult]);
  assert.equal(first.element.querySelector('.fr-result-title').textContent, firstResult.artwork.title);
  assert.equal(first.element.querySelector('.fr-result-traits').textContent,
    `透明 PNG · 静态 · ${firstResult.asset.width} × ${firstResult.asset.height}`,
    'the result summary describes the source file type and registered dimensions without duplicating feature cards');

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
  assert.deepEqual(first.element.querySelector('.fr-actions').children.filter(el=>!el.hidden).map(el=>el.dataset.fr), ['copy','download','random']);
  assert.deepEqual(first.element.querySelector('.fr-extra-actions').children.filter(el=>!el.hidden).map(el=>el.dataset.fr), ['chatgpt'], 'ChatGPT remains available as an auxiliary action');

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
  downloadView.element.querySelector('[data-fr="download"]').click();
  await waitUntil(() => pendingDownloads.length === 1, 'Artwork A download did not start');
  assert.equal(pendingDownloads[0].asset.id, downloadAssetA.id, 'download freezes Artwork A asset before a later draw');
  assert.equal(downloadView.element.querySelector('[data-fr="download"]').disabled, true, 'the same in-flight download cannot be duplicated');
  const rerollDuringDownload = downloadView.start();
  assert.equal(await rerollDuringDownload, true, 'a new Artwork draw can finish while A download is pending');
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
  clipboardWriter = async () => { throw new Error('clipboard denied'); };
  fallback.element.querySelector('[data-fr="copy"]').click();
  await waitUntil(() => fallback.element.querySelector('.fr-prompt-fallback').hidden === false, 'copy failure did not show the manual fallback');
  assert.equal(fallback.element.querySelector('.fr-prompt-fallback').value, fallbackResult.prompt.text);
  clipboardWriter = async text => { fakeDocument.copiedText = text; };
  const blockedResult=makeResult(pool[0],16);
  const blocked=viewFor({engine:makeEngine([selection(blockedResult)]),openChatGPT:async()=>({copied:false,opened:false})});
  await blocked.start();blocked.element.querySelector('[data-fr="chatgpt"]').click();
  await waitUntil(()=>blocked.element.querySelector('.fr-manual-chat-link').hidden===false,'blocked open has no manual fallback');
  assert.equal(blocked.element.querySelector('.fr-prompt-fallback').value,blockedResult.prompt.text);
  assert.equal(new URL(blocked.element.querySelector('.fr-manual-chat-link').href).searchParams.get('prompt'),blockedResult.prompt.text);

  prefersReducedMotion = false;
  landOrder.length = 0;
  const secondResult = makeResult(pool[1], 2);
  const second = viewFor({engine: makeEngine([selection(secondResult)]), onResult: result => completed.push(result)});
  assert.equal(await second.start(), true);
  assert.equal(second.getState().phase, 'revealing');
  assert.equal(second.element.dataset.phase, 'revealing');
  assert.equal(second.element.dataset.artworkId, secondResult.artworkId, 'the active reveal stays bound to its frozen Artwork');
  assert.equal(second.element.querySelector('.fr-result-card').hidden, true, 'the full result remains hidden while any card is rolling');
  const rollingSlots = second.element.querySelectorAll('.fr-reel');
  assert.equal(rollingSlots.length, 6, 'the reveal keeps one fixed card for each registered slot');
  assert.equal(rollingSlots[0].classList.contains('is-rolling'), true, 'the first card starts rolling first');
  assert.equal(rollingSlots.slice(1).some(reel => reel.classList.contains('is-rolling')), false, 'later cards wait until the previous card stops');
  await waitUntil(() => second.getState().phase === 'result', 'sequential card reveal did not finish');
  assert.deepEqual([...new Set(landOrder)], rollingSlots.map(reel => Number(reel.dataset.index)), 'cards stop in order');
  assert.strictEqual(second.getResult(), secondResult);
  assert.deepEqual(completed, [firstResult, secondResult], 'onResult fires only for completed frozen results');

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
  assert.strictEqual(failedRetry.getResult(), prior);
  failNextArtwork = true;
  assert.equal(await failedRetry.start(), false);
  assert.equal(failureEngine.calls.length, 2, 'resource failure never silently reselects a different work');
  assert.equal(failedRetry.getState().phase, 'error');
  assert.match(failedRetry.element.querySelector('.fr-status').textContent, /没有更换成另一张作品/);
  assert.match(failedRetry.element.querySelector('.fr-status').textContent, /\d+ 款图片暂不可用的作品移出后续抽取范围/);
  assert.ok(failureEngine.unavailable.some(item => item.artworkId === failedSelection.artworkId), 'asset failures exclude their owning Artwork from future draws');
  assert.strictEqual(failedRetry.getResult(), prior, 'the previous result remains frozen and visible after a later resource failure');
  assert.equal(failedRetry.element.querySelector('.fr-result-badge').textContent, '上一款');
  const restoredResult = makeResult(pool[4], 9);
  assert.equal(await failedRetry.restore(restoredResult), true);
  assert.strictEqual(failedRetry.getResult(), restoredResult, 'restore returns to the exact saved DrawResult without another selection');
  assert.equal(failureEngine.calls.length, 2);
  const restoredCards = failedRetry.element.querySelectorAll('.fr-reel');
  assert.equal(failedRetry.element.querySelector('.fr-reveal').hidden, false, 'restore shows the stopped feature-card view');
  assert.equal(restoredCards.length, 6, `restore rebuilds all six factual cards from the frozen result, got ${restoredCards.length}`);
  assert.ok(restoredCards.every(card => card.dataset.stopped === 'true' && card.classList.contains('is-restored')), 'restored cards are already stopped');
  assert.ok(restoredCards.every(card => card.querySelector('.fr-reel-track').classList.contains('is-static') && card.querySelector('.fr-reel-track').children.length === 1), 'restore shows one factual selected card per slot without invented neighbors');
  for (const feature of restoredResult.revealFeatures) {
    assert.ok(restoredCards.some(card => card.dataset.slot === feature.kind), `restored cards preserve the fixed ${feature.kind} slot`);
    assert.ok(restoredCards.some(card => card.dataset.centerValue.includes(String(feature.label || feature.value))), `restored cards preserve feature ${feature.kind}`);
  }
  assert.match(failedRetry.element.querySelector('.fr-result-traits').textContent, /透明 PNG/, 'the result summary identifies the transparent source format');

  const candidateFailureEngine = makeEngine([selection(makeResult(pool[0], 18), pool)]);
  const candidateFailure = viewFor({
    engine: candidateFailureEngine,
    loader: async asset => {
      if (asset.id === getCatalogAsset(pool[1].assetRefs.original).id) throw new Error('candidate preview hash mismatch');
      return handleFor(asset);
    }
  });
  assert.equal(await candidateFailure.start(), false, 'a required card candidate resource failure stops before animation');
  assert.ok(candidateFailureEngine.unavailable.some(item => item.artworkId === pool[1].id), 'candidate resource failure excludes its actual owning Artwork');
  assert.match(candidateFailure.element.querySelector('.fr-status').textContent, /\d+ 款图片暂不可用的作品移出后续抽取范围/);

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
  assert.equal(rapid.skip(), false, 'skip cannot bypass the required asset preload');
  assert.equal(rapid.element.querySelector('.fr-result-card').hidden, true);
  assert.equal(rapid.cancel(), true);
  assert.equal(await rapid.start(), true, 'a fresh session can start immediately after cancel');
  await waitUntil(() => rapid.getState().phase === 'result', 'new session did not finish');
  unblockStale();
  await staleStart;
  await waitUntil(() => staleDisposed === 1, 'late stale asset handle was not disposed');
  assert.strictEqual(rapid.getResult(), freshB, 'a late load cannot overwrite the newer DrawResult');

  const raceOld = makeResult(pool[2], 10);
  const raceNew = makeResult(pool[3], 11);
  const raceNotices = [];
  const raceView = viewFor({engine: makeEngine([selection(raceOld), selection(raceNew)]), notify: message => raceNotices.push(message)});
  prefersReducedMotion = true;
  assert.equal(await raceView.start(), true);
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
  assert.equal(emptyReels.length, 6, 'an empty pool retains the six static card backs');
  assert.ok(emptyReels.every(reel => !reel.querySelector('.fr-reel-track') && reel.dataset.stopped !== 'true'), 'empty pools never start a candidate animation or stop on invented facts');
  assert.equal(empty.element.querySelector('.fr-result-card').hidden, true, 'empty pools never reveal a result');
  assert.equal(empty.element.querySelector('[data-fr="retry-resources"]').hidden, true, 'resource recovery only appears after an Artwork is quarantined');
  assert.match(empty.element.querySelector('.fr-status').textContent, /没有同时命中的已发布作品/);

  const one = pool[0];
  const single = viewFor({engine: makeEngine([selection(makeResult(one, 6), [one])])});
  assert.equal(await single.start(), true);
  assert.match(single.element.querySelector('.fr-status').textContent, /只有一款符合条件/);
  assert.equal(single.element.querySelector('.fr-result-badge').textContent, '当前范围仅此一款');

  const retryArtwork = pool[0];
  const retryFirstResult = makeResult(retryArtwork, 17);
  const retrySecondResult = makeResult(retryArtwork, 19);
  const retryEngine = makeEngine([selection(retryFirstResult, [retryArtwork]), selection(retrySecondResult, [retryArtwork])]);
  const hardConditions = {
    query: {tagsByDimension: {style: ['style:dots'], action: ['action:front-static']}},
    requiredFeatures: ['head-accessory:over-ear-headphones', 'prop:none']
  };
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
  assert.match(explicitRetry.element.querySelector('.fr-status').textContent, /重试资源并重新抽取/);
  resourceBroken = false;
  retryButton.click();
  await waitUntil(() => explicitRetry.getState().phase === 'result', 'explicit retry did not recover the repaired single candidate');
  assert.strictEqual(explicitRetry.getResult(), retrySecondResult, 'after the user retries, the repaired same Artwork can be selected again');
  assert.deepEqual(retryEngine.unavailableArtworkIds(), [], 'explicit retry clears the resource quarantine before selection');
  assert.equal(retryEngine.calls.length, 2, 'explicit retry performs a fresh selection');
  assert.deepEqual(retryEngine.calls[0], hardConditions, 'the failed attempt used the locked query and required features');
  assert.deepEqual(retryEngine.calls[1], hardConditions, 'retry preserves the same query and hard feature locks');
  assert.match(explicitRetry.element.querySelector('.fr-status').textContent, /沿用本次作品范围重新抽取/);
  assert.match(explicitRetry.element.querySelector('.fr-status').textContent, /结果可能是其他作品/);
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
