import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {matchingFamilies} from '../dist/studio-home.js';
import {createCharacter, FAMILIES} from '../dist/studio-model.js';
import {exportProject, makeProject, parseProject, setProjectCharacter} from '../dist/studio-creation.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const familyIds = ['dots', 'grok', 'meta-muse', 'humans', 'animals'];
const entries = [
  ['Dots', '圆球', '耳机', 'dots'],
  ['Grok Bot', '几何', '磨砂', 'grok'],
  ['Meta Muse', '奶油', '毛绒', 'meta-muse'],
  ['Humans', '人物', '栗发', 'humans'],
  ['Animals', '动物', '柴犬', 'animals']
];

assert.deepEqual(matchingFamilies('').map(item => item.id), familyIds, 'the home index contains exactly five independent families');
for (const [english, chinese, keyword, id] of entries) {
  assert.deepEqual(matchingFamilies(english).map(item => item.id), [id], `${english} is searchable by its English name`);
  assert.deepEqual(matchingFamilies(chinese).map(item => item.id), [id], `${english} is searchable by its Chinese name`);
  assert.deepEqual(matchingFamilies(keyword).map(item => item.id), [id], `${english} is searchable by a family keyword`);
  assert.deepEqual(matchingFamilies('', id).map(item => item.id), [id], `${english} can be filtered as its own family`);
}
assert.deepEqual(matchingFamilies('gRoK bOt').map(item => item.id), ['grok'], 'matching is case-insensitive across multiple words');
assert.deepEqual(matchingFamilies('Ｄｏｔｓ').map(item => item.id), ['dots'], 'full-width search text is normalized');
assert.deepEqual(matchingFamilies('圆球 耳机').map(item => item.id), ['dots'], 'all search terms must match the same family');
assert.deepEqual(matchingFamilies('耳机', 'grok'), [], 'search and family filter intersect');
assert.deepEqual(matchingFamilies('unregistered-material'), [], 'unknown search terms produce no results');
for (const historic of ['baseline-dots', 'grok-arch', 'muse-mu', 'pet-shiba', 'pet-owl', 'app-blue', 'historical-human-reading-v2']) {
  assert.deepEqual(matchingFamilies(historic), [], `${historic} is not a home family-search result`);
}

const source = await readFile(path.join(root, 'dist/studio.js'), 'utf8');
const productionRemember = source.match(/function remember\(\)\{[^]*?\}\n(?=function toast\()/)?.[0]?.trim();
const productionSwitchFamily = source.match(/function switchFamily\(id\)\{[^]*?\}\n(?=function undo\()/)?.[0]?.trim();
assert(productionRemember, 'could not locate the production remember() function');
assert(productionSwitchFamily, 'could not locate the production switchFamily() function');

function character(family, {name, notes, output, referenceEnabled, referenceNotes}) {
  const value = createCharacter(family);
  value.name = name;
  value.notes = notes;
  value.output = output;
  value.reference = {
    ...value.reference,
    enabled: referenceEnabled,
    notes: referenceNotes
  };
  return value;
}

const initialProject = makeProject(character('dots', {
  name: 'Dots 私人草稿',
  notes: 'dots project notes',
  output: 'sticker',
  referenceEnabled: true,
  referenceNotes: '保留 Dots 参考图的短发与脸型'
}), {mode: 'composer', artworkId: null});
const storage = new Map();
const context = vm.createContext({
  state: initialProject.character,
  project: initialProject,
  familyDrafts: new Map(),
  FAMILIES,
  structuredClone,
  makeProject,
  parseProject,
  setProjectCharacter,
  exportProject,
  createCharacter,
  sessionStorage: {setItem: (key, value) => storage.set(key, value)}
});
vm.runInContext(`
let commitCount = 0;
function commit(next) {
  commitCount++;
  const clean = next?.format ? parseProject(next) : setProjectCharacter(project, next);
  if (JSON.stringify(clean) === JSON.stringify(project)) return;
  project = clean;
  state = project.character;
  remember();
}
${productionRemember}
${productionSwitchFamily}
globalThis.review = {
  switchFamily,
  remember,
  replaceProject(next) { project = parseProject(next); state = project.character; },
  get commitCount() { return commitCount; },
  get project() { return project; },
  get state() { return state; },
  getDraft(id) { return familyDrafts.get(id); },
  get draftCount() { return familyDrafts.size; }
};`, context);

const review = context.review;
review.remember();
review.switchFamily('grok');
assert.equal(review.state.family, 'grok', 'switchFamily selects a new valid family');
assert.equal(review.project.creation.mode, 'artwork', 'an unseen family starts with its default artwork mode');
assert.equal(review.state.reference.enabled, false, 'an unseen family starts without the previous family reference flag');
assert.equal(review.state.notes, '', 'an unseen family starts without the previous family notes');

review.replaceProject(makeProject(character('grok', {
  name: 'Grok 私人草稿',
  notes: 'grok project notes',
  output: 'pet',
  referenceEnabled: false,
  referenceNotes: 'Grok 的独立参考说明'
}), {mode: 'composer', artworkId: null}));
review.remember();

review.switchFamily('dots');
assert.equal(review.project.creation.mode, 'composer', 'returning to Dots restores its creation mode');
assert.equal(review.project.creation.artworkId, null, 'returning to Dots restores an explicitly empty artwork selection');
assert.equal(review.state.name, 'Dots 私人草稿');
assert.equal(review.state.notes, 'dots project notes');
assert.equal(review.state.output, 'sticker');
assert.equal(review.state.reference.enabled, true);
assert.equal(review.state.reference.notes, '保留 Dots 参考图的短发与脸型');

review.switchFamily('grok');
assert.equal(review.project.creation.mode, 'composer', 'Grok restores its own creation mode independently');
assert.equal(review.state.name, 'Grok 私人草稿');
assert.equal(review.state.notes, 'grok project notes');
assert.equal(review.state.output, 'pet');
assert.equal(review.state.reference.enabled, false);
assert.equal(review.state.reference.notes, 'Grok 的独立参考说明');

const cachedGrok = review.getDraft('grok');
const cachedSnapshot = JSON.stringify(cachedGrok);
review.project.creation.mode = 'artwork';
review.project.character.reference.notes = 'mutated active project only';
assert.equal(JSON.stringify(review.getDraft('grok')), cachedSnapshot, 'remember() and switchFamily() keep independent deep-cloned drafts');
assert(storage.has('dot-studio-project-v1'), 'the active wrapper is persisted through the existing session storage key');
assert.equal(JSON.parse(storage.get('dot-studio-project-v1')).format, 'dot-studio-project');
assert(review.draftCount >= 2, 'both family wrappers stay cached independently in the current page');

const beforeInvalid = JSON.stringify(review.project);
const commitsBeforeInvalid = review.commitCount;
review.switchFamily('not-a-family');
assert.equal(JSON.stringify(review.project), beforeInvalid, 'an invalid family id leaves the project unchanged');
assert.equal(review.commitCount, commitsBeforeInvalid, 'an invalid family id does not call commit');
assert.equal(FAMILIES[review.state.family] !== undefined, true, 'the active family remains valid after invalid input');

console.log('Family search and production family-draft navigation checks passed.');
