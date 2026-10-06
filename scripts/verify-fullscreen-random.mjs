import assert from 'node:assert/strict';
import {createResolvedRandomizerAdapters, createFullscreenRandomizer, isResolvedRandomCandidate, isSafeArtworkSource} from '../dist/studio-fullscreen-random.js';
import {BUILT_IN_LOOKS} from '../dist/studio-looks.js';
import {getTemplateAssetStates} from '../dist/studio-composition-resolver.js?v=83';
import {COMPOSITION_CATALOG_VERSION} from '../dist/studio-composition-catalog.js';

class FakeClassList {
  constructor(node) { this.node = node; this.values = new Set(); }
  toggle(name, force) { const add = force === undefined ? !this.values.has(name) : Boolean(force); if (add) this.values.add(name); else this.values.delete(name); return add; }
  add(...names) { for (const name of names) this.values.add(name); }
  remove(...names) { for (const name of names) this.values.delete(name); }
  contains(name) { return this.values.has(name); }
}

class FakeElement {
  constructor(tagName, ownerDocument) {
    this.tagName = tagName.toUpperCase(); this.ownerDocument = ownerDocument; this.children = []; this.parentNode = null;
    this.dataset = {}; this.attributes = new Map(); this.listeners = new Map(); this.classList = new FakeClassList(this);
    this.style = {setProperty() {}}; this.hidden = false; this.disabled = false; this.open = false; this.isConnected = false;
    this.scrollTop = 0; this.textContent = ''; this.src = ''; this.alt = ''; this.complete = false; this.naturalWidth = 0;
  }
  set className(value) { this.classList.values = new Set(String(value).split(/\s+/).filter(Boolean)); }
  get className() { return [...this.classList.values].join(' '); }
  set innerHTML(value) { this._html = String(value); if (this.tagName === 'DIALOG') this.makeDialogMarkup(); }
  get innerHTML() { return this._html || ''; }
  append(...nodes) { for (const node of nodes) { node.remove?.(); node.parentNode = this; node.updateConnection?.(this.isConnected); this.children.push(node); } }
  replaceChildren(...nodes) { for (const child of [...this.children]) child.remove(); this.append(...nodes); }
  updateConnection(connected) { this.isConnected = connected; for (const child of this.children) child.updateConnection(connected); }
  remove() { if (this.parentNode) this.parentNode.children = this.parentNode.children.filter(child => child !== this); this.updateConnection(false); this.parentNode = null; }
  setAttribute(name, value) { this.attributes.set(name, String(value)); if (name === 'id') this.id = String(value); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  addEventListener(type, listener, options = false) { const rows = this.listeners.get(type) || []; rows.push({listener, capture: options === true || options?.capture === true}); this.listeners.set(type, rows); }
  removeEventListener(type, listener, options = false) { const capture = options === true || options?.capture === true; this.listeners.set(type, (this.listeners.get(type) || []).filter(row => row.listener !== listener || row.capture !== capture)); }
  dispatchEvent(event) { event.target ||= this; event.currentTarget = this; for (const {listener} of [...(this.listeners.get(event.type) || [])]) { listener.call(this, event); if (event.cancelBubble) break; } if (!event.cancelBubble && event.bubbles !== false && this.parentNode) this.parentNode.dispatchEvent(event); else if (!event.cancelBubble && event.bubbles !== false && this === this.ownerDocument.body) this.ownerDocument.dispatchEvent(event); return !event.defaultPrevented; }
  matches(selector) {
    if (selector.startsWith('.')) return this.classList.contains(selector.slice(1));
    if (selector.startsWith('#')) return this.id === selector.slice(1);
    if (selector === '[data-fr]') return this.dataset.fr !== undefined;
    if (selector === '[data-fr-lock]') return this.dataset.frLock !== undefined;
    const fr = selector.match(/^\[data-fr="([^\"]+)"\]$/); if (fr) return this.dataset.fr === fr[1];
    const lock = selector.match(/^\[data-fr-lock="([^\"]+)"\]$/); if (lock) return this.dataset.frLock === lock[1];
    return selector.toLowerCase() === this.tagName.toLowerCase();
  }
  querySelector(selector) { const queue = [...this.children]; while (queue.length) { const node = queue.shift(); if (node.matches(selector)) return node; queue.push(...node.children); } return null; }
  querySelectorAll(selector) { const result = []; const queue = [...this.children]; while (queue.length) { const node = queue.shift(); if (node.matches(selector)) result.push(node); queue.push(...node.children); } return result; }
  contains(node) { return node === this || this.children.some(child => child.contains(node)); }
  closest(selector) { for (let node = this; node; node = node.parentNode) if (node.matches(selector)) return node; return null; }
  focus() { this.ownerDocument.activeElement = this; }
  showModal() { this.open = true; }
  close() { this.open = false; queueMicrotask(() => this.dispatchEvent({type: 'close', bubbles: false})); }
  makeDialogMarkup() {
    const d = this.ownerDocument;
    const add = (tag, className, parent = this) => { const node = d.createElement(tag); node.className = className; parent.append(node); return node; };
    const shell = add('div', 'fr-shell'); add('header', 'fr-header', shell); const main = add('main', 'fr-main', shell);
    const title = add('h1', '', main); title.setAttribute('id', 'fr-title');
    add('span', 'fr-scope-label', main); const clear = add('button', '', main); clear.dataset.fr = 'clear-scope';
    const result = add('section', 'fr-result-card', main); add('div', 'fr-canvas-host', result); add('b', 'fr-result-name', result);
    const reveal = add('section', 'fr-reveal', main); add('b', 'fr-reveal-title', reveal); add('div', 'fr-reel-stage', reveal);
    const locks = add('section', 'fr-locks', main);
    for (const key of ['artworkId', 'recipeId']) { const button = add('button', '', locks); button.dataset.frLock = key; button.append(add('svg', '', button), add('span', '', button)); }
    const advanced = add('details', 'fr-advanced', main); add('summary', '', advanced); add('p', '', advanced); const prompt = add('button', '', advanced); prompt.dataset.fr = 'prompt-only';
    add('p', 'fr-status', main);
    const random = add('button', 'fr-random', main); random.dataset.fr = 'random'; random.append(add('svg', '', random), add('span', '', random), add('svg', '', random));
    const skip = add('button', 'fr-skip', main); skip.dataset.fr = 'skip';
    const apply = add('button', 'fr-apply', main); apply.dataset.fr = 'apply';
    const close = add('button', 'fr-close', main); close.dataset.fr = 'close';
  }
}

class FakeDocument {
  constructor() { this.listeners = new Map(); this.body = new FakeElement('body', this); this.body.isConnected = true; this.activeElement = this.body; }
  createElement(tag) { return new FakeElement(tag, this); }
  addEventListener(type, listener, options = false) { const rows = this.listeners.get(type) || []; rows.push({listener, capture: options === true || options?.capture === true}); this.listeners.set(type, rows); }
  removeEventListener(type, listener, options = false) { const capture = options === true || options?.capture === true; this.listeners.set(type, (this.listeners.get(type) || []).filter(row => row.listener !== listener || row.capture !== capture)); }
  dispatchEvent(event) { for (const {listener, capture} of this.listeners.get(event.type) || []) if (capture) listener.call(this, event); for (const {listener, capture} of this.listeners.get(event.type) || []) if (!capture) listener.call(this, event); }
}

const document = new FakeDocument();
const oldGlobals = {document: globalThis.document, HTMLElement: globalThis.HTMLElement, matchMedia: globalThis.matchMedia, location: globalThis.location, Image: globalThis.Image};
globalThis.document = document; globalThis.HTMLElement = FakeElement; globalThis.location = {href: 'https://dot.invalid/app'};
let reduced = true;
const mediaListeners = new Set();
const media = {get matches() { return reduced; }, addEventListener(_type, listener) { mediaListeners.add(listener); }, removeEventListener(_type, listener) { mediaListeners.delete(listener); }};
globalThis.matchMedia = () => media;
const tick = async () => { await Promise.resolve(); await Promise.resolve(); await new Promise(resolve => setTimeout(resolve, 0)); await Promise.resolve(); };

const hash = char => char.repeat(64);
const pngBlob = payload => new Blob([new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), payload], {type: 'image/png'});
function candidate(id, {artworkId = id, recipeId = 'fixed', stages = ['角色'], version = 10, projectVersion = 2, composition = true, kind = 'template'} = {}) {
  const assets = stages.map((stage, index) => ({stage, asset: {id: `${id}-asset-${index}`, version: 1, sha256: hash(String(index + 1)), src: `./assets/test/${id}-${index}.png`, previewSrc: `./assets/test/${id}-${index}.png`, width: 8, height: 8}}));
  const refs = assets.map(({asset}) => ({id: asset.id, version: asset.version, sha256: asset.sha256}));
  const resolved = composition ? {kind, catalogVersion: 'test-v1', baseId: artworkId, recipeId, assetRefs: refs, inputs: {}, inputFingerprint: 'input', resolvedFingerprint: 'resolved'} : null;
  const project = {format: 'dot-studio-project', version: projectVersion, character: {version, name: id, family: 'dots', background: 'transparent'}, creation: {mode: 'composer', artworkId, composition: resolved}};
  const resolution = resolved ? {availability: 'available', composition: resolved, renderPlan: {kind, layers: []}, stageMetadata: assets} : {availability: 'prompt-only', composition: null, renderPlan: null, stageMetadata: []};
  return {id, project, composition: resolved, resolution, renderPlan: resolution.renderPlan, stageMetadata: assets};
}

function harness({candidates = [candidate('alpha')], scope = null, preload = async () => ({getPreview: asset => `blob:${asset.id}`, dispose() {}}), render = async () => ({canvas: document.createElement('canvas'), blob: pngBlob('rendered-pixels'), dispose() {}}), reducedMotion = true, getSeed, onCommit, onPromptOnly = null} = {}) {
  const trigger = document.createElement('button'); document.body.append(trigger); document.activeElement = trigger;
  const project = {format: 'dot-studio-project', version: 2, character: {version: 10, name: 'original', family: 'dots', background: 'transparent'}, creation: {mode: 'composer', artworkId: 'original', composition: null}};
  const commits = []; const queries = []; const calls = {preload: [], render: []};
  const randomizer = createFullscreenRandomizer({
    mount: document.body, getCurrentProject: () => structuredClone(project),
    getCandidateSet: async input => { queries.push(input); return {candidates: typeof candidates === 'function' ? candidates(input) : candidates, availability: 'available', reason: ''}; },
    preloadCandidate: async args => { calls.preload.push(args.candidate.id); return preload(args); },
    renderCandidate: async args => { calls.render.push(args.candidate.id); return render(args); },
    commitCandidate: (next, meta) => { commits.push({next, meta}); return onCommit?.(next, meta); },
    onPromptOnly,
    ...(getSeed ? {getSeed} : {}),
    getReducedMotion: () => reducedMotion
  });
  randomizer.open(scope || {});
  return {randomizer, trigger, commits, queries, calls, project};
}

async function spinToResult(instance) {
  await instance.randomizer.spin();
  for (let i = 0; i < 8 && instance.randomizer.phase !== 'result' && instance.randomizer.phase !== 'failed'; i++) await tick();
}

try {
  for (const source of ['./assets/atelier/base.png', '/assets/characters/dots.png']) assert.equal(isSafeArtworkSource(source), true);
  for (const source of ['../assets/a.png', './assets/../secret.png', 'https://attacker.test/assets/a.png', 'data:image/png;base64,AA==', './assets/a.png?token=x']) assert.equal(isSafeArtworkSource(source), false);

  const valid = candidate('candidate');
  assert.equal(isResolvedRandomCandidate(valid), true);
  assert.equal(isResolvedRandomCandidate(candidate('old-project', {projectVersion: 1})), false, 'old project wrappers are unsupported');
  assert.equal(isResolvedRandomCandidate(candidate('old-character', {version: 9})), false, 'candidate role must use VERSION 10');
  assert.equal(isResolvedRandomCandidate(candidate('prompt-only', {composition: false})), false, 'null composition is not a default rendered candidate');
  const tampered = structuredClone(valid); tampered.project.creation.composition = {...tampered.project.creation.composition, recipeId: 'different'};
  assert.equal(isResolvedRandomCandidate(tampered), false, 'project refs and candidate refs must agree');
  const orphanStage = structuredClone(valid);
  orphanStage.stageMetadata.push({stage: '道具', asset: {...orphanStage.stageMetadata[0].asset, id: 'unreferenced-asset', sha256: hash('f'), src: './assets/test/unreferenced.png', previewSrc: './assets/test/unreferenced.png'}});
  assert.equal(isResolvedRandomCandidate(orphanStage), false, 'stage metadata must bind one-to-one to composition asset refs');
  const missingStage = structuredClone(valid); missingStage.stageMetadata.pop();
  assert.equal(isResolvedRandomCandidate(missingStage), false, 'every composition asset ref needs exactly one reveal stage');

  const queryCalls = [];
  const adapter = createResolvedRandomizerAdapters({
    getCurrentProject: () => ({}),
    getCandidates: async args => { queryCalls.push(args); return {candidates: [candidate('allowed', {artworkId: 'look-allowed'}), candidate('blocked', {artworkId: 'look-blocked'}), candidate('prompt', {composition: false})], reason: ''}; },
    Composer: class {}
  });
  const queryResult = await adapter.getCandidateSet({query: {styles: ['dots'], lookIds: ['look-allowed']}, project: {}, locks: {}, seed: 'seed'});
  assert.deepEqual(queryCalls[0].query, {styles: ['dots']}, 'home lookIds are not passed as an unknown TagQuery field');
  assert.deepEqual(queryResult.candidates.map(item => item.id), ['allowed'], 'home lookIds intersect registered rendered candidates');
  assert.equal(queryResult.availability, 'available');

  const templateStates = getTemplateAssetStates();
  assert.equal(COMPOSITION_CATALOG_VERSION, 1, 'the resolver candidate contract uses the registered composition catalog version');
  const baseState = templateStates[0];
  const currentProject = {format: 'dot-studio-project', version: 2, character: baseState.config, creation: {mode: 'composer', artworkId: baseState.artworkId, composition: null}};
  const realResolverAdapter = createResolvedRandomizerAdapters({getCurrentProject: () => currentProject});
  const currentTemplateCandidates = await realResolverAdapter.getCandidateSet({query: {}, project: currentProject, locks: {}, seed: 'current-catalog'});
  assert.deepEqual(
    currentTemplateCandidates.candidates.map(item => item.project.creation.artworkId).sort(),
    BUILT_IN_LOOKS.map(look => look.artworkId).sort(),
    'the shared resolver exposes every currently registered gallery look with approved template support'
  );
  assert.ok(currentTemplateCandidates.candidates.every(isResolvedRandomCandidate), 'every live resolver candidate uses v2, VERSION 10, non-null refs and trusted stage assets');
  const lockedArtworkId = currentTemplateCandidates.candidates[0].project.creation.artworkId;
  const exactLockedCandidates = await realResolverAdapter.getCandidateSet({query: {}, project: currentProject, locks: {artworkId: lockedArtworkId}, seed: 'locked-catalog'});
  assert.ok(exactLockedCandidates.candidates.length > 0);
  assert.ok(exactLockedCandidates.candidates.every(item => item.project.creation.artworkId === lockedArtworkId), 'resolver locks constrain the candidate set to the exact registered identity');
  assert.deepEqual(exactLockedCandidates.candidates[0].composition.assetRefs, currentTemplateCandidates.candidates[0].composition.assetRefs, 'locking a look preserves its exact asset IDs, versions, and hashes');
  const impossibleLock = await realResolverAdapter.getCandidateSet({query: {}, project: currentProject, locks: {artworkId: 'unregistered-look'}, seed: 'impossible-lock'});
  assert.equal(impossibleLock.availability, 'empty');
  assert.equal(impossibleLock.candidates.length, 0, 'an impossible lock is never silently relaxed');
  assert.match(impossibleLock.reason, /锁定/);

  const verifiedBytes = new TextEncoder().encode('registered-image-bytes');
  const digestBytes = await globalThis.crypto.subtle.digest('SHA-256', verifiedBytes);
  const verifiedHash = [...new Uint8Array(digestBytes)].map(byte => byte.toString(16).padStart(2, '0')).join('');
  const registered = candidate('verified', {artworkId: 'look-verified'});
  const verifiedAsset = registered.stageMetadata[0].asset;
  verifiedAsset.sha256 = verifiedHash;
  const verifiedComposition = {...registered.composition, assetRefs: [{id: verifiedAsset.id, version: verifiedAsset.version, sha256: verifiedHash}]};
  registered.composition = verifiedComposition;
  registered.project.creation.composition = structuredClone(verifiedComposition);
  registered.resolution.composition = structuredClone(verifiedComposition);
  globalThis.Image = class {
    constructor() { this.naturalWidth = 0; this.naturalHeight = 0; }
    async decode() { this.naturalWidth = 8; this.naturalHeight = 8; }
  };
  class ComposerStub {
    constructor(container) { this.canvas = document.createElement('canvas'); this.canvas.dataset.previewStatus = 'empty'; container.append(this.canvas); }
    async updateResolved(resolution) { assert.equal(resolution.availability, 'available'); this.canvas.dataset.previewStatus = 'ready'; return true; }
    async captureBlob() { return pngBlob(verifiedBytes); }
    dispose() { this.disposed = true; }
  }
  const trustedFetcher = async source => ({
    ok: true, status: 200, url: new URL(source, globalThis.location.href).href,
    blob: async () => new Blob([verifiedBytes], {type: 'image/png'})
  });
  const productionAdapters = createResolvedRandomizerAdapters({
    getCandidates: async () => ({candidates: [registered], availability: 'available', reason: ''}),
    Composer: ComposerStub, fetcher: trustedFetcher
  });
  const verifiedSet = await productionAdapters.getCandidateSet({query: {}, project: {}, locks: {}, seed: 'verified'});
  const assetPreload = await productionAdapters.preloadCandidate({candidate: verifiedSet.candidates[0], reelStages: [], signal: new AbortController().signal});
  assert.match(assetPreload.getPreview(verifiedAsset), /^blob:/, 'verified thumbnails use a checked local Blob URL');
  const renderedPng = await productionAdapters.renderCandidate({candidate: verifiedSet.candidates[0], signal: new AbortController().signal});
  assert.equal(renderedPng.blob.type, 'image/png');
  assert.ok(renderedPng.blob.size > verifiedBytes.length);
  renderedPng.dispose(); assetPreload.dispose();

  const badHashAdapter = createResolvedRandomizerAdapters({getCandidates: async () => ({candidates: [registered]}), Composer: ComposerStub, fetcher: async source => ({
    ok: true, status: 200, url: new URL(source, globalThis.location.href).href,
    blob: async () => new Blob(['corrupted'], {type: 'image/png'})
  })});
  const badHashSet = await badHashAdapter.getCandidateSet({query: {}, project: {}, locks: {}, seed: 'bad-hash'});
  await assert.rejects(() => badHashAdapter.preloadCandidate({candidate: badHashSet.candidates[0], reelStages: [], signal: new AbortController().signal}), /SHA-256/,
    'the production preloader rejects bytes that differ from the registered digest');

  const initial = harness({scope: {query: {style: ['dots']}, scopeLabel: 'Dots · 阅读', source: 'gallery'}});
  const initialDialog = initial.randomizer.dialog;
  assert.equal(initialDialog.querySelector('.fr-result-card').hidden, true);
  assert.equal(initialDialog.querySelector('.fr-advanced').hidden, true, 'Prompt-only remains out of the initial surface');
  assert.equal(initialDialog.querySelector('[data-fr="apply"]').hidden, true);
  assert.equal(initialDialog.querySelector('[data-fr="clear-scope"]').hidden, true);
  assert.equal(initialDialog.querySelector('.fr-scope-label').textContent, 'Dots · 阅读');
  assert.equal(initialDialog.querySelector('[data-fr="random"]').hidden, false, 'the primary CTA is visible at intro');
  assert.equal(initialDialog.querySelector('[data-fr="close"]').hidden, false, 'the close control is visible at intro');
  assert.equal(initialDialog.querySelector('[data-fr="skip"]').hidden, true);
  initial.randomizer.dispose();

  const applied = harness({candidates: [candidate('approved-look', {artworkId: 'look-15'})], scope: {query: {style: ['dots']}, scopeLabel: 'Dots', source: 'gallery'}, onPromptOnly:()=>{}});
  const beforeProject = structuredClone(applied.project);
  await spinToResult(applied);
  assert.equal(applied.randomizer.phase, 'result', applied.randomizer.dialog.querySelector('.fr-status').textContent);
  assert.equal(applied.calls.preload.length, 1, 'only the frozen selected candidate is preloaded by this integration');
  assert.deepEqual(applied.calls.render, ['approved-look']);
  assert.equal(applied.commits.length, 0, 'resolve, preload, reveal and Canvas rendering do not commit');
  assert.ok(applied.randomizer.dialog.querySelector('.fr-canvas-host').querySelector('canvas'), 'the final result is a real Canvas element');
  assert.equal(applied.randomizer.dialog.querySelector('.fr-result-card').hidden, false);
  assert.equal(applied.randomizer.dialog.querySelector('.fr-advanced').hidden, false, 'Prompt-only is available only after a result and with an explicit callback');
  const artworkLock = applied.randomizer.dialog.querySelector('[data-fr-lock="artworkId"]');
  applied.randomizer.handleClick({target: artworkLock});
  assert.equal(applied.randomizer.locks.artworkId, 'look-15');
  const candidateBeforeClear = applied.randomizer.currentResult.candidate;
  applied.randomizer.clearScope();
  assert.equal(applied.randomizer.scope.query, null, '切回全部只清除候选查询');
  assert.equal(applied.randomizer.locks.artworkId, 'look-15', '切回全部不会清除精确锁定');
  assert.equal(applied.randomizer.currentResult.candidate, candidateBeforeClear, '切回全部 does not replace the current result');
  assert.deepEqual(applied.project, beforeProject);
  applied.randomizer.applyCandidate();
  assert.equal(applied.commits.length, 1, 'explicit application invokes one atomic project commit');
  assert.equal(applied.commits[0].meta.origin, 'random');
  assert.equal(applied.commits[0].next.version, 2);
  assert.ok(applied.commits[0].next.creation.composition);
  assert.equal(applied.randomizer.dialog.open, false);
  assert.equal(document.activeElement, applied.trigger, 'closing restores focus to the opener');
  applied.randomizer.dispose();

  const promptOnlyCalls = [];
  const promptOnly = harness({candidates: [candidate('prompt-reset', {artworkId: 'look-prompt-reset'})], scope: {query: {style: ['dots']}, scopeLabel: 'Dots', source: 'gallery'}, onPromptOnly:args=>promptOnlyCalls.push(args)});
  const promptProject = structuredClone(promptOnly.project);
  await spinToResult(promptOnly);
  promptOnly.randomizer.toggleLock('artworkId');
  assert.equal(promptOnly.randomizer.dialog.querySelector('[data-fr="apply"]').disabled, false);
  promptOnly.randomizer.handleClick({target:promptOnly.randomizer.dialog.querySelector('[data-fr="prompt-only"]')});
  assert.equal(promptOnlyCalls.length,1,'advanced Prompt-only uses its explicit callback');
  assert.equal(promptOnlyCalls[0].source,'gallery');
  assert.deepEqual(promptOnlyCalls[0].query,{style:['dots']});
  assert.equal(promptOnlyCalls[0].locks.artworkId,'look-prompt-reset','Prompt-only snapshots the current lock before clearing the rendered candidate');
  assert.equal(promptOnly.commits.length,0,'Prompt-only does not use the rendered-result commit path');
  assert.deepEqual(promptOnly.project, promptProject, 'candidate and Prompt-only selection do not mutate the current project');
  assert.equal(promptOnly.randomizer.phase,'intro');
  assert.equal(promptOnly.randomizer.currentResult,null,'Prompt-only clears the prior rendered result');
  assert.equal(promptOnly.randomizer.dialog.querySelector('.fr-result-card').hidden,true);
  assert.equal(promptOnly.randomizer.dialog.querySelector('.fr-canvas-host').children.length,0,'the prior Canvas is removed');
  assert.equal(promptOnly.randomizer.dialog.querySelector('.fr-result-name').textContent,'');
  assert.equal(promptOnly.randomizer.dialog.querySelector('[data-fr="apply"]').hidden,true);
  assert.equal(promptOnly.randomizer.dialog.querySelector('[data-fr="apply"]').disabled,true);
  assert.equal(promptOnly.randomizer.dialog.querySelector('.fr-reveal').hidden,true);
  assert.equal(promptOnly.randomizer.dialog.querySelector('.fr-reel-stage').children.length,0,'stale reel thumbnails are removed');
  assert.equal(promptOnly.randomizer.dialog.querySelector('.fr-advanced').hidden,true);
  assert.equal(promptOnly.randomizer.locks.artworkId,'look-prompt-reset','reset keeps the explicit lock for the next random turn');
  assert.equal(document.activeElement,promptOnly.randomizer.dialog.querySelector('[data-fr="random"]'),'focus moves out of the now-hidden advanced section');
  await spinToResult(promptOnly);
  assert.equal(promptOnly.randomizer.phase,'result','the clean intro can start another real rendered-result turn');
  assert.ok(promptOnly.randomizer.dialog.querySelector('.fr-canvas-host').querySelector('canvas'));
  assert.equal(promptOnly.randomizer.dialog.querySelector('[data-fr="apply"]').disabled,false,'the new result restores the normal Apply lifecycle');
  promptOnly.randomizer.applyCandidate();
  assert.equal(promptOnly.commits.length,1,'the post-reset result still applies exactly once');
  assert.equal(promptOnly.commits[0].meta.origin,'random');
  promptOnly.randomizer.dispose();

  const escape = harness();
  const escapeProject = structuredClone(escape.project);
  const cancelEvent = {type: 'cancel', defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }};
  escape.randomizer.dialog.dispatchEvent(cancelEvent);
  assert.equal(cancelEvent.defaultPrevented, true, 'native Escape cancellation is handled by the dialog lifecycle');
  assert.equal(escape.randomizer.dialog.open, false);
  assert.equal(escape.commits.length, 0);
  assert.deepEqual(escape.project, escapeProject, 'Escape closes without changing the source project');
  assert.equal(document.activeElement, escape.trigger);
  escape.randomizer.dispose();

  const reopen = harness();
  const sharedDialog = reopen.randomizer.dialog;
  reopen.randomizer.close();
  reopen.randomizer.open({query: {tag: ['animals']}, scopeLabel: '动物', source: 'gallery'});
  await tick();
  assert.equal(reopen.randomizer.dialog, sharedDialog);
  assert.equal(sharedDialog.open, true, 'a delayed native close event cannot close a reopened dialog');
  assert.equal(reopen.randomizer.scope.scopeLabel, '动物');
  reopen.randomizer.dispose();

  let deliveredLocks;
  const noMatch = harness({candidates: input => { deliveredLocks = input.locks; return [candidate(input.locks.artworkId ? 'different' : 'conflict', {artworkId: input.locks.artworkId ? 'another-look' : 'conflict'})]; }});
  await spinToResult(noMatch);
  noMatch.randomizer.toggleLock('artworkId');
  await spinToResult(noMatch);
  assert.equal(deliveredLocks.artworkId, 'conflict');
  assert.equal(noMatch.randomizer.phase, 'result', 'an empty locked pool preserves the previous valid result');
  assert.equal(noMatch.randomizer.currentResult.candidate.id, 'conflict');
  assert.match(noMatch.randomizer.dialog.querySelector('.fr-status').textContent, /没有可用|锁定/);
  noMatch.randomizer.dispose();

  let renderAttempts = 0;
  const renderFailure = harness({candidates: [candidate('kept')], render: async () => {
    renderAttempts++;
    if (renderAttempts > 1) throw new Error('Canvas 解码失败');
    return {canvas: document.createElement('canvas'), blob: pngBlob('rendered-pixels'), dispose() {}};
  }});
  await spinToResult(renderFailure);
  const retained = renderFailure.randomizer.currentResult;
  await spinToResult(renderFailure);
  assert.equal(renderFailure.randomizer.currentResult, retained, 'failed rerolls preserve the previous rendered result');
  assert.match(renderFailure.randomizer.dialog.querySelector('.fr-status').textContent, /Canvas 解码失败/);
  assert.equal(renderFailure.commits.length, 0);
  renderFailure.randomizer.dispose();

  let preloadCalls = 0; let renderCalls = 0;
  const preloadFailure = harness({candidates: [candidate('broken')], preload: async () => { preloadCalls++; throw new Error('SHA-256 不匹配'); }, render: async () => { renderCalls++; }});
  await spinToResult(preloadFailure);
  assert.equal(preloadFailure.randomizer.phase, 'failed');
  assert.equal(preloadCalls, 1);
  assert.equal(renderCalls, 0, 'a failed chosen resource cannot trigger a silent candidate substitution');
  assert.match(preloadFailure.randomizer.dialog.querySelector('.fr-status').textContent, /SHA-256/);
  preloadFailure.randomizer.dispose();

  let resolveLate;
  let lateRenderCalls = 0;
  const stale = harness({getCurrentProject: undefined, candidates: () => [candidate('late')]});
  stale.randomizer.getCandidateSet = () => new Promise(resolve => { resolveLate = resolve; });
  stale.randomizer.renderCandidate = async () => { lateRenderCalls++; return {canvas: document.createElement('canvas'), blob: pngBlob('rendered-pixels'), dispose() {}}; };
  const staleDraw = stale.randomizer.spin();
  stale.randomizer.close();
  resolveLate({candidates: [candidate('late')], availability: 'available'});
  await staleDraw; await tick();
  assert.equal(lateRenderCalls, 0, 'a delayed resolver result cannot repaint after close');
  assert.equal(stale.commits.length, 0);
  stale.randomizer.dispose();

  reduced = false;
  const skipped = harness({candidates: [candidate('same-choice', {stages: ['角色', '配饰']})], reducedMotion: false});
  const run = skipped.randomizer.spin();
  for (let i = 0; i < 8 && skipped.randomizer.phase !== 'revealing'; i++) await tick();
  assert.equal(skipped.randomizer.phase, 'revealing');
  skipped.randomizer.finishReveal(true);
  await run; await tick();
  assert.equal(skipped.randomizer.phase, 'result', 'skip assembles the already frozen candidate');
  assert.deepEqual(skipped.calls.render, ['same-choice']);
  assert.equal(skipped.randomizer.currentResult.candidate.id, 'same-choice');
  skipped.randomizer.dispose();
  reduced = true;

  reduced = false;
  const sevenRawCategories = ['character', 'palette', 'outfit', 'headphones', 'eyewear', 'prop', 'gesture'];
  const mappedStages = harness({candidates: [candidate('seven-categories', {stages: sevenRawCategories, kind: 'modular'})], reducedMotion: false});
  const mappedTurn = mappedStages.randomizer.spin();
  for (let i = 0; i < 8 && mappedStages.randomizer.phase !== 'revealing'; i++) await tick();
  assert.equal(mappedStages.randomizer.phase, 'revealing', mappedStages.randomizer.dialog.querySelector('.fr-status').textContent);
  assert.equal(mappedStages.randomizer.pendingReels.length, 6, 'seven raw categories collapse into the six presentation stages');
  assert.deepEqual(mappedStages.randomizer.pendingReels.map(stage => stage.stage), ['角色', '配色', '穿搭', '配饰', '道具', '神态动作']);
  const fixtureIds = sevenRawCategories.map((_, index) => `seven-categories-asset-${index}`).sort();
  const selectedReelIds = mappedStages.randomizer.pendingReels.flatMap(stage => stage.chosenAssets.map(asset => asset.id)).sort();
  const rollingSelectedIds = mappedStages.randomizer.pendingReels.flatMap(stage => stage.items.filter(item => item.candidateId === 'seven-categories').map(item => item.asset.id)).sort();
  assert.deepEqual(selectedReelIds, fixtureIds, 'all seven selected refs are assigned to a presentation stage');
  assert.deepEqual(rollingSelectedIds, fixtureIds, 'all seven selected refs remain in the reel sequence');
  assert.equal(mappedStages.randomizer.pendingReels.find(stage => stage.stage === '配饰').chosenAssets.length, 2, 'headphones and eyewear merge without losing either asset');
  mappedStages.randomizer.finishReveal(true);
  await mappedTurn; await tick();
  const mappedCards = mappedStages.randomizer.dialog.querySelectorAll('.fr-reel');
  const landedIds = mappedCards.flatMap(card => card.querySelectorAll('.fr-reel-landed-image').map(image => image.alt.split(' · ').at(-1))).sort();
  assert.deepEqual(landedIds, fixtureIds, 'static reveal presents every selected asset in its mapped stage');
  mappedStages.randomizer.dispose();

  const neckwearAlias = harness({candidates: [candidate('neckwear-alias', {stages: ['neckwear'], kind: 'modular'})]});
  await spinToResult(neckwearAlias);
  assert.equal(neckwearAlias.randomizer.dialog.querySelector('.fr-reel').dataset.stage, '配饰', 'the modular resolver neckwear category maps to accessories');
  neckwearAlias.randomizer.dispose();

  const accessoryStages = ['headphones', 'eyewear', 'neckwear', 'headwear', 'jewelry', 'wristwear', 'bag'];
  const manyAccessories = harness({candidates: [candidate('many-accessories', {stages: accessoryStages, kind: 'modular'})], reducedMotion: false});
  const accessoryTurn = manyAccessories.randomizer.spin();
  for (let i = 0; i < 8 && manyAccessories.randomizer.phase !== 'revealing'; i++) await tick();
  const accessoryReel = manyAccessories.randomizer.pendingReels[0];
  assert.equal(accessoryReel.stage, '配饰');
  assert.equal(accessoryReel.chosenAssets.length, 7);
  assert.equal(accessoryReel.items.length, 7, 'more than five selected items remain in one reel rather than being sliced away');
  manyAccessories.randomizer.finishReveal(true);
  await accessoryTurn; await tick();
  assert.equal(manyAccessories.randomizer.dialog.querySelectorAll('.fr-reel-landed-image').length, 7);
  manyAccessories.randomizer.dispose();

  const unknownStage = harness({candidates: [candidate('unknown-stage', {stages: ['unregistered-layer-class']})]});
  await spinToResult(unknownStage);
  assert.equal(unknownStage.randomizer.phase, 'failed');
  assert.match(unknownStage.randomizer.dialog.querySelector('.fr-status').textContent, /unregistered-layer-class/);
  assert.equal(unknownStage.calls.preload.length, 0, 'unknown categories fail before any candidate resource is preloaded');
  assert.equal(unknownStage.calls.render.length, 0, 'unknown categories cannot silently produce a partial final composition');
  unknownStage.randomizer.dispose();
  reduced = true;

  const seedPool = [candidate('seed-a'), candidate('seed-b'), candidate('seed-c')];
  const staticReveal = harness({candidates: seedPool, reducedMotion: true, getSeed: () => 'frozen-seed'});
  await spinToResult(staticReveal);
  const staticChoice = staticReveal.randomizer.currentResult.candidate.id;
  staticReveal.randomizer.dispose();
  reduced = false;
  const animatedReveal = harness({candidates: seedPool, reducedMotion: false, getSeed: () => 'frozen-seed'});
  const animatedTurn = animatedReveal.randomizer.spin();
  for (let i = 0; i < 8 && animatedReveal.randomizer.phase !== 'revealing'; i++) await tick();
  assert.equal(animatedReveal.randomizer.phase, 'revealing');
  animatedReveal.randomizer.finishReveal(true);
  await animatedTurn; await tick();
  assert.equal(animatedReveal.randomizer.currentResult.candidate.id, staticChoice, 'reduced-motion and skip paths keep the same seed-selected candidate');
  animatedReveal.randomizer.dispose();
  reduced = true;

  const empty = harness({candidates: [], scope: {query: {series: ['nobody']}, scopeLabel: '未匹配专题'}});
  empty.randomizer.getCandidateSet = async () => ({candidates: [], availability: 'empty', reason: '锁定角色与当前专题冲突。'});
  await spinToResult(empty);
  assert.equal(empty.randomizer.phase, 'failed');
  assert.match(empty.randomizer.dialog.querySelector('.fr-status').textContent, /冲突/);
  assert.equal(empty.randomizer.dialog.querySelector('[data-fr="clear-scope"]').hidden, false, 'empty scoped state can switch to all');
  const emptyProject = structuredClone(empty.project);
  empty.randomizer.clearScope();
  assert.equal(empty.randomizer.scope.query, null);
  assert.deepEqual(empty.project, emptyProject);
  empty.randomizer.dispose();

  const css = await (await import('node:fs/promises')).readFile(new URL('../dist/studio-fullscreen-random.css', import.meta.url), 'utf8');
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(css, /@media \(max-width: 370px\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /\.fr-reel-image/);
  assert.match(css, /\.fr-canvas-host canvas/);
  const lockSvgRule = css.match(/dialog\.fullscreen-randomizer \.fr-locks button > svg\s*\{([^}]*)\}/s);
  assert.ok(lockSvgRule, 'lock icons need a dialog-scoped sizing rule to resist host SVG styles');
  assert.match(lockSvgRule[1], /width:\s*18px\s*!important/);
  assert.match(lockSvgRule[1], /height:\s*18px\s*!important/);
  assert.match(lockSvgRule[1], /min-width:\s*18px\s*!important/);
  assert.match(lockSvgRule[1], /min-height:\s*18px\s*!important/);
  assert.match(lockSvgRule[1], /max-width:\s*18px\s*!important/);
  assert.match(lockSvgRule[1], /max-height:\s*18px\s*!important/);
  assert.match(lockSvgRule[1], /flex:\s*0 0 18px\s*!important/);
  console.log('Rendered randomizer checks passed: six-stage category merging without asset loss, v2/VERSION 10 candidates, typed scope, verified resolver adapters, selected-only preload, exact locks, real Canvas/PNG gating, one-commit apply, and stale callback isolation.');
} finally {
  globalThis.document = oldGlobals.document; globalThis.HTMLElement = oldGlobals.HTMLElement; globalThis.matchMedia = oldGlobals.matchMedia;
  globalThis.location = oldGlobals.location; globalThis.Image = oldGlobals.Image;
}
