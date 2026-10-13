// Node-only contract test for registered fixed GalleryLooks. Canvas and asset
// decoding are simulated; this is not browser, visual, pixel, or download QA.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createEditor} from '../dist/studio-editor.js?v=110';
import {createDraft, updateDraft} from '../dist/studio-draft.js?v=110';
import {
  describeTemplateSelection,
  getTemplateOptionFields,
  TEMPLATE_REGISTRY
} from '../dist/studio-edit-templates.js?v=110';
import {
  GALLERY_LOOKS,
  getLookOptionFields,
  validateGalleryLook
} from '../dist/studio-gallery-looks.js?v=110';
import {getArtwork} from '../dist/studio-artwork-catalog.js?v=110';

class Element {
  constructor(tag, ownerDocument) {
    this.tagName = tag.toUpperCase();
    this.ownerDocument = ownerDocument;
    this.children = [];
    this.dataset = {};
    this.attrs = {};
    this.events = {};
    this.hidden = false;
    this.disabled = false;
    this.className = '';
    this.style = {setProperty() {}};
    this.classList = {
      add: name => { if (!this.classList.contains(name)) this.className = `${this.className} ${name}`.trim(); },
      contains: name => this.className.split(/\s+/).includes(name)
    };
    this.context = {
      clearRect() {}, setTransform() {}, drawImage() {}, save() {}, restore() {},
      createImageData(width, height) { return {data: new Uint8ClampedArray(width * height * 4)}; },
      getImageData(_x, _y, width, height) { return {data: new Uint8ClampedArray(width * height * 4)}; },
      putImageData() {}
    };
  }
  append(...children) { for (const child of children) { child.remove?.(); this.children.push(child); child.parentElement = this; } }
  prepend(child) { child.remove?.(); this.children.unshift(child); child.parentElement = this; }
  remove() { if (this.parentElement) this.parentElement.children = this.parentElement.children.filter(row => row !== this); this.parentElement = null; }
  replaceChildren(...children) { for (const child of [...this.children]) child.remove(); this.append(...children); }
  setAttribute(key, value) {
    this.attrs[key] = String(value);
    if (key.startsWith('data-')) this.dataset[key.slice(5).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = String(value);
  }
  getAttribute(key) {
    if (key.startsWith('data-')) return this.dataset[key.slice(5).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] ?? null;
    return this.attrs[key] ?? null;
  }
  removeAttribute(key) { delete this.attrs[key]; }
  addEventListener(key, fn) { (this.events[key] ||= []).push(fn); }
  click() { if (!this.disabled) for (const fn of this.events.click || []) fn({preventDefault() {}}); }
  matches(selector) {
    if (selector.includes(',')) return selector.split(',').some(part => this.matches(part.trim()));
    const tag = selector.match(/^[a-zA-Z][\w-]*/)?.[0];
    if (tag && this.tagName.toLowerCase() !== tag.toLowerCase()) return false;
    const classNames = [...selector.matchAll(/\.([\w-]+)/g)].map(match => match[1]);
    if (classNames.some(name => !this.classList.contains(name))) return false;
    const attributes = [...selector.matchAll(/\[([^\]=]+)(?:=["']?([^\]"']+)["']?)?\]/g)];
    for (const [, key, value] of attributes) {
      const actual = this.getAttribute(key);
      if (actual == null || (value !== undefined && actual !== value)) return false;
    }
    return Boolean(tag || classNames.length || attributes.length);
  }
  querySelectorAll(selector) { return this.children.flatMap(child => [...(child.matches(selector) ? [child] : []), ...child.querySelectorAll(selector)]); }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  focus() {}
  getBoundingClientRect() { return {left: 0, right: 100}; }
  getContext() { return this.context; }
  toBlob(callback, mime) { callback(new Blob(['mock PNG bytes'], {type: mime})); }
}

const document = {
  baseURI: 'http://localhost/',
  createElement: tag => new Element(tag, document),
  body: new Element('body', null)
};
globalThis.document = document;

const templatesByVersion = new Map(TEMPLATE_REGISTRY.map(template => [`${template.id}\0${template.version}`, template]));
const lookRows = GALLERY_LOOKS.map(look => ({
  look,
  template: templatesByVersion.get(`${look.templateId}\0${look.templateVersion}`),
  fields: getLookOptionFields(templatesByVersion.get(`${look.templateId}\0${look.templateVersion}`), look)
}));
const editableLookRow = lookRows.find(row => !row.look.isDefault && row.fields.length > 0 && validateGalleryLook(row.look));
const fixedOnlyLookRow = lookRows.find(row => !row.look.isDefault && row.fields.length === 0 && validateGalleryLook(row.look));
assert(editableLookRow, 'A canonical non-default GalleryLook with editable fields is registered.');
assert(fixedOnlyLookRow, 'A canonical single-recipe GalleryLook has no editable fields.');

const {look, template, fields} = editableLookRow;
const artwork = getArtwork(look.artworkId);
assert(artwork && validateGalleryLook(look));
assert(fields.length > 0 && fields.every(field => field.key !== 'appearance'));
const sameAppearanceRecipes = template.recipes.filter(recipe => recipe.selections.appearance === look.appearance);
for (const rawField of getTemplateOptionFields(template).filter(field => field.key !== 'appearance')) {
  const reachable = new Set(sameAppearanceRecipes.map(recipe => recipe.selections[rawField.key]));
  const visible = fields.find(field => field.key === rawField.key);
  assert.equal(Boolean(visible), reachable.size >= 2, `${look.id}/${rawField.key}: only varying values are editable.`);
  if (visible) assert.deepEqual(visible.options.map(option => option.id), rawField.options.filter(option => reachable.has(option.id)).map(option => option.id));
}

const draft = createDraft({artwork, template, look});
assert.deepEqual(draft.options, draft.defaultOptions, 'A look Draft starts at its own creation baseline.');
for (const [field, value] of Object.entries(look.defaultOptions)) {
  assert.equal(draft.options[field], value, `A look Draft starts at the registered recipe value for ${field}.`);
}
assert.equal(draft.options.appearance, look.appearance);
assert.equal(draft.lookId, look.id);
assert.equal(draft.lookVersion, look.version);
const foreignAppearance = template.options.appearance.find(option => option.id !== look.appearance)?.id;
assert(foreignAppearance, 'The bound template has another appearance to reject.');
assert.throws(() => updateDraft(draft, {appearance: foreignAppearance}, {template}), /appearance is fixed/i);

const alternateRecipe = sameAppearanceRecipes.find(recipe => fields.some(field => recipe.selections[field.key] !== draft.options[field.key])
  && Object.keys(recipe.selections).filter(key => recipe.selections[key] !== draft.options[key]).length === 1);
assert(alternateRecipe, `${look.id}: a reachable one-field edit is available.`);
const editedField = fields.find(field => alternateRecipe.selections[field.key] !== draft.options[field.key]);
const editedDraft = updateDraft(draft, {[editedField.key]: alternateRecipe.selections[editedField.key]}, {template});
assert.equal(editedDraft.options.appearance, look.appearance);
assert.equal(editedDraft.options[editedField.key], alternateRecipe.selections[editedField.key]);
for (const field of fields) for (const option of field.options) {
  const result = describeTemplateSelection(template, draft.options, field.key, option.id, {
    fixedOptions: {appearance: look.appearance},
    defaultOptions: look.defaultOptions
  });
  assert(!result.restore.some(row => row.field === 'appearance'), `${look.id}: recovery cannot cross to another appearance.`);
}

// Low-level callers without a GalleryLook retain the original complete template
// contract, including its registered appearance choice.
const rawDraft = createDraft({artwork, template});
const otherAppearanceRecipe = template.recipes.find(recipe => recipe.selections.appearance !== rawDraft.options.appearance);
assert(otherAppearanceRecipe, `${template.id}: the source template retains its other appearance recipes.`);
const rawUpdated = updateDraft(rawDraft, otherAppearanceRecipe.selections, {template});
assert.equal(rawUpdated.options.appearance, otherAppearanceRecipe.selections.appearance);

const rows = JSON.parse(await fs.readFile(new URL('../dist/assets/templates/sources.json', import.meta.url))).assets;
const loader = {
  getRegisteredAsset: reference => rows.find(row => row.id === reference.id && row.version === reference.version && row.purpose === reference.purpose),
  registerAssets() {},
  acquire: async asset => ({asset, bitmap: {}, release() {}})
};
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
async function waitForSnapshot(editor, label) {
  for (let attempt = 0; attempt < 100; attempt++) {
    const snapshot = editor.getSnapshot();
    if (snapshot) return snapshot;
    await tick();
  }
  throw new Error(`${label}: renderer did not produce a current snapshot.`);
}
const canvasFactory = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

const editorRoot = document.createElement('main');
const exports = [];
assert.throws(() => createEditor({
  root: document.createElement('main'), artwork, template, look,
  draft: {...draft, options: {...draft.options, appearance: foreignAppearance}},
  loader, assetRegistry: rows, canvasFactory
}), /does not match the selected GalleryLook/i, 'Editor rejects a prebuilt Draft that changes the registered appearance.');
const editor = createEditor({
  root: editorRoot, artwork, template, look, draft, loader, assetRegistry: rows,
  canvasFactory,
  onExport: payload => exports.push(payload)
});
const snapshot = await waitForSnapshot(editor, look.id);
assert.equal(snapshot.options.appearance, look.appearance);
assert.equal(snapshot.lookId, look.id);
assert.equal(snapshot.lookVersion, look.version);
assert.throws(() => editor.setDraft({...editedDraft, options: {...editedDraft.options, appearance: foreignAppearance}}), /does not match this editor session/i);
assert.throws(() => editor.setDraft({...editedDraft, look: {...editedDraft.look, appearance: foreignAppearance}}), /does not match this editor session/i);
assert.equal(await editor.exportPNG(), true);
assert.equal(exports.length, 1);
assert(exports[0].filename.startsWith(`${look.id}-`), `Expected the renderer PNG filename to identify ${look.id}, got ${exports[0].filename}.`);
assert.equal(exports[0].snapshot.lookId, look.id);
editor.destroy();

const singleRecipe = fixedOnlyLookRow.look;
const singleTemplate = fixedOnlyLookRow.template;
const singleArtwork = getArtwork(singleRecipe.artworkId);
assert.equal(singleTemplate.recipes.filter(recipe => recipe.selections.appearance === singleRecipe.appearance).length, 1);
const singleDraft = createDraft({artwork: singleArtwork, template: singleTemplate, look: singleRecipe});
const singleEditor = createEditor({
  root: document.createElement('main'), artwork: singleArtwork, template: singleTemplate,
  look: singleRecipe, draft: singleDraft, loader, assetRegistry: rows, canvasFactory
});
const singleSnapshot = await waitForSnapshot(singleEditor, singleRecipe.id);
assert.equal(singleSnapshot.lookId, singleRecipe.id);
assert.equal(singleSnapshot.options.appearance, singleRecipe.appearance);
assert.equal(singleEditor.element.querySelectorAll('.studio-editor-tab[role="tab"]').length, 0);
assert.equal(singleEditor.element.querySelectorAll('[role="tablist"]').length, 0);
assert(singleEditor.element.querySelector('.studio-editor-fixed-look-note')?.textContent, 'A fixed-look explanation is shown without an empty tab list.');
assert.equal(singleEditor.element.querySelector('.studio-editor-selection-summary').hidden, true, 'Single-recipe looks do not repeat their fixed-configuration explanation.');
assert.equal(singleEditor.element.querySelector('.studio-editor-hint').hidden, true, 'Single-recipe looks do not promise selection-driven preview updates.');
singleEditor.destroy();

const rawExports = [];
const rawEditor = createEditor({
  root: document.createElement('main'), artwork, template, loader, assetRegistry: rows, canvasFactory,
  onExport: payload => rawExports.push(payload)
});
const rawSnapshot = await waitForSnapshot(rawEditor, `${template.id} raw editor`);
assert.equal(rawSnapshot.lookId, null);
assert.equal(rawSnapshot.lookVersion, null);
assert.equal(await rawEditor.exportPNG(), true);
assert.equal(rawExports[0].filename, `${artwork.id}-${template.id}-draft-r0.png`, 'No-look export keeps its established filename.');
rawEditor.destroy();

console.log(`Fixed GalleryLook editing: ${look.id} held appearance and exposed ${fields.length} varying fields; ${singleRecipe.id} had no empty tabs; raw template editing retained appearance capability; look-tagged PNG metadata passed.`);
