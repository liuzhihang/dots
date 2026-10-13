// Node-only control-state test. Canvas drawing and network are simulated; this
// is not pixel, browser, accessibility or visual acceptance evidence.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createEditor } from '../dist/studio-editor.js?v=110';
import { TEMPLATE_REGISTRY } from '../dist/studio-edit-templates.js?v=110';
import { getArtwork } from '../dist/studio-artwork-catalog.js?v=110';

class Element {
  constructor(tag, ownerDocument) { this.tagName = tag.toUpperCase(); this.ownerDocument = ownerDocument; this.children = []; this.dataset = {}; this.attrs = {}; this.events = {}; this.hidden = false; this.disabled = false; this.className = ''; this.style = { setProperty() {} }; this.classList = { add: name => { this.className += ` ${name}`; }, contains: name => this.className.split(/\s+/).includes(name) }; }
  append(...children) { for (const child of children) { child.remove?.(); this.children.push(child); child.parentElement = this; } }
  prepend(child) { child.remove?.(); this.children.unshift(child); child.parentElement = this; }
  remove() { if (this.parentElement) this.parentElement.children = this.parentElement.children.filter(row => row !== this); this.parentElement = null; }
  replaceChildren(...children) { for (const child of [...this.children]) child.remove(); this.append(...children); }
  setAttribute(key, value) { this.attrs[key] = String(value); }
  getAttribute(key) { return this.attrs[key] ?? null; }
  removeAttribute(key) { delete this.attrs[key]; }
  addEventListener(key, fn) { (this.events[key] ||= []).push(fn); }
  click() { if (!this.disabled) for (const fn of this.events.click || []) fn({ preventDefault() {} }); }
  matches(selector) { return selector.startsWith('.') ? this.classList.contains(selector.slice(1)) : this.tagName.toLowerCase() === selector; }
  querySelectorAll(selector) { return this.children.flatMap(child => [...(child.matches(selector) ? [child] : []), ...child.querySelectorAll(selector)]); }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  focus() {}
  getBoundingClientRect() { return { left: 0, right: 100 }; }
  getContext() { return { clearRect() {}, setTransform() {}, drawImage() {}, save() {}, restore() {} }; }
}
const document = { createElement: tag => new Element(tag, document) };
globalThis.document = document;
const root = document.createElement('main');
const template = TEMPLATE_REGISTRY.find(row => row.id === 'animal-gray-husky-adjustments-v1');
const artwork = getArtwork(template.artworkBinding.artworkId);
const rows = JSON.parse(await fs.readFile(new URL('../dist/assets/templates/sources.json', import.meta.url))).assets;
const broadRef = template.recipes.find(row => row.selections.appearance === 'broad').layers[0].asset;
const vestRef = template.recipes.find(row => row.selections.clothing === 'vest').layers[0].asset;
const requests = [];
const abortedSignals = [];
let failBroad = true;
let hold = false;
let failNextRender = false;
const pending = [];
const loader = {
  getRegisteredAsset: ref => rows.find(row => row.id === ref.id),
  acquire: async (asset, { signal }) => {
    requests.push(asset.id);
    signal?.addEventListener('abort', () => abortedSignals.push(asset.id), { once: true });
    if (failNextRender) { failNextRender = false; throw new Error('simulated current preview 503'); }
    if (asset.id === broadRef.id && failBroad) { failBroad = false; throw new Error('simulated thumbnail 503'); }
    if (hold) await new Promise(resolve => { pending.push(resolve); signal?.addEventListener('abort', resolve, { once: true }); });
    if (signal?.aborted) throw new DOMException('Canceled', 'AbortError');
    return { asset, bitmap: {}, release() {} };
  }
};
const states = [];
const editor = createEditor({ root, artwork, template, loader, assetRegistry: rows, onStatus: value => states.push(value) });
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
const settle = async () => { for (let i = 0; i < 8; i++) await tick(); };
await settle();
assert(editor.getSnapshot());
const options = editor.element.querySelectorAll('.studio-editor-option');
const option = (field, value) => options.find(row => row.dataset.field === field && row.value === value);
const tab = field => editor.element.querySelectorAll('.studio-editor-tab').find(row => row.dataset.editorTab === field);
const broad = option('appearance', 'broad');
assert.equal(broad.disabled, false, 'A failed thumbnail is still a legal selection.');
assert.equal(broad.dataset.thumbnailError, 'true');
assert.equal(broad.querySelector('.studio-editor-option-visual').dataset.thumbnailState, 'error');
assert(!requests.includes(vestRef.id), 'Hidden clothing thumbnails were never requested.');
const retry = broad.parentElement.querySelector('.studio-editor-thumbnail-retry');
assert.equal(retry.hidden, false);
const snapshotBefore = editor.getSnapshot();
const statusCount = states.length;
retry.click();
await settle();
assert.equal(broad.querySelector('.studio-editor-option-visual').dataset.thumbnailState, 'ready');
assert.equal(editor.getSnapshot().revision, snapshotBefore.revision);
assert.equal(states.length, statusCount, 'Item retry does not rerender the main preview.');
broad.click();
await settle();
assert.equal(editor.getSnapshot().options.appearance, 'broad');
tab('clothing').click();
await settle();
const vest = option('clothing', 'vest');
assert.equal(vest.disabled, true);
assert.equal(vest.dataset.compatibility, 'missing-combination');
assert(vest.dataset.conflict.includes('Appearance'));
assert.equal(vest.querySelector('.studio-editor-option-reason').textContent, 'Adjust first Appearance', 'The small option card keeps a short category hint.');
const guidance = vest.parentElement.parentElement.parentElement.querySelector('.studio-editor-option-guidance');
assert(guidance.children.some(row => row.textContent.includes('Appearance:') && row.textContent.includes('First choose')), 'The full-width guidance retains the executable recovery value.');
assert(requests.includes(vestRef.id));
const draft = editor.getDraft();
editor.setLanguage('zh-CN');
assert.equal(editor.getDraft(), draft);
assert.equal(editor.element.dataset.activeCategory, 'clothing');
assert(vest.dataset.conflict.includes('外观'));
assert.equal(vest.querySelector('.studio-editor-option-reason').textContent, '先调整 外观');
assert(guidance.children.some(row => row.textContent.includes('请先选择 外观:')), 'Recovery guidance follows the site language.');
assert(editor.element.querySelector('.studio-editor-selection-summary').textContent.includes('当前选择'));
// A canceled optional thumbnail returns to waiting, never a capability failure.
hold = true;
tab('face').click();
await tick();
const closed = option('face', 'closed');
assert.equal(closed.querySelector('.studio-editor-option-visual').dataset.thumbnailState, 'loading');
tab('clothing').click();
await tick();
assert.equal(closed.querySelector('.studio-editor-option-visual').dataset.thumbnailState, 'waiting-for-manifest');
assert.notEqual(closed.dataset.thumbnailError, 'true');
hold = false;
for (const resolve of pending.splice(0)) resolve();
tab('face').click();
await settle();
assert.equal(closed.querySelector('.studio-editor-option-visual').dataset.thumbnailState, 'ready');
// A pending new preview keeps the previous canvas, prevents export, and rejects
// obsolete render completion after rapid changes or destroy.
tab('appearance').click();
hold = true;
option('appearance', template.defaultOptions.appearance).click();
await tick();
assert.equal(editor.getSnapshot(), null);
assert(editor.previewElement.querySelector('canvas'));
assert.equal(editor.previewElement.dataset.stale, 'true');
broad.click();
await tick();
hold = false;
for (const resolve of pending.splice(0)) resolve();
await settle();
assert.equal(editor.getSnapshot().options.appearance, 'broad');
assert.equal(editor.getSnapshot().revision, editor.getDraft().revision);
failNextRender = true;
option('appearance', template.defaultOptions.appearance).click();
await settle();
assert.equal(editor.getSnapshot(), null);
assert.equal(states.at(-1).canExport, false);
assert.equal(await editor.exportPNG(), false, 'Failed latest rendering cannot export old pixels.');
assert(editor.previewElement.querySelector('canvas'), 'Failed latest preview retains prior successful pixels.');
const mainRetry = editor.element.children.find(row => row.dataset.action === 'retry');
assert.equal(mainRetry.hidden, false);
mainRetry.click();
await settle();
assert.equal(editor.getSnapshot().options.appearance, template.defaultOptions.appearance);
editor.destroy();
await settle();
assert.equal(editor.previewElement.children.length, 0);
let pauseFirstThumbnails = true;
const preempted = createEditor({ root, artwork, template, loader, assetRegistry: rows, onStatus: status => {
  if (status.canExport && pauseFirstThumbnails) { pauseFirstThumbnails = false; hold = true; }
} });
await settle();
const preemptBroad = preempted.element.querySelectorAll('.studio-editor-option').find(row => row.dataset.field === 'appearance' && row.value === 'broad');
assert.equal(preemptBroad.querySelector('.studio-editor-option-visual').dataset.thumbnailState, 'loading');
const abortedBefore = abortedSignals.length;
preemptBroad.click();
await tick();
assert(abortedSignals.length > abortedBefore, 'New preview cancels optional thumbnail consumers.');
assert.equal(preemptBroad.querySelector('.studio-editor-option-visual').dataset.thumbnailState, 'waiting-for-manifest');
hold = false;
for (const resolve of pending.splice(0)) resolve();
await settle();
assert.equal(preempted.getSnapshot().options.appearance, 'broad');
assert.equal(preemptBroad.querySelector('.studio-editor-option-visual').dataset.thumbnailState, 'ready');
assert.notEqual(preemptBroad.dataset.thumbnailError, 'true');
preempted.destroy();
console.log('Simulated editor state: lazy thumbnails, per-item failure/retry, compatibility, language preservation, rapid-render and teardown guards passed.');
