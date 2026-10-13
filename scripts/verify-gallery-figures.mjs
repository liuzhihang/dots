import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {ARTWORKS, getArtwork} from '../dist/studio-artwork-catalog.js?v=110';
import {
  TEMPLATE_REGISTRY,
  getTemplateForArtwork
} from '../dist/studio-edit-templates.js?v=110';
import {GALLERY_LOOKS, getGalleryLook} from '../dist/studio-gallery-looks.js?v=110';
import {
  GALLERY_FIGURES,
  getGalleryFigure,
  getFigureForLook,
  queryGalleryFigures,
  getFigureStates,
  getFigureInitialState,
  getFigureFields,
  resolveFigureSelection
} from '../dist/studio-gallery-figures.js?v=110';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reportDir = path.join(root, '.artifacts/shape-merge-20261013/core');
const groupExpectations = [
  {
    id: 'dots-orb',
    members: ['candidate-dots-20261005', 'dots-rose-glasses', 'dots-lilac-bucket'],
    defaultLookId: 'candidate-dots-20261005'
  },
  {
    id: 'dots-cloud',
    members: [
      'candidate-dots-20261005--cloud',
      'dots-rose-glasses--cloud',
      'dots-lilac-bucket--cloud',
      'dots-butter-beret--cloud',
      'dots-blue-beret-cloud'
    ],
    defaultLookId: 'candidate-dots-20261005--cloud'
  },
  {
    id: 'dots-rounded-triangle',
    members: ['dots-butter-beret', 'dots-yellow-glasses-triangle'],
    defaultLookId: 'dots-butter-beret'
  }
];

assert.equal(ARTWORKS.length, 44, 'Figure grouping does not add or rewrite approved Artworks.');
assert.equal(TEMPLATE_REGISTRY.length, 44, 'Figure grouping preserves the 44 registered Templates.');
assert.equal(GALLERY_LOOKS.length, 90, 'The source GalleryLook registry remains unchanged.');
assert.equal(GALLERY_FIGURES.length, 83, 'The three explicit groups reduce 90 GalleryLooks to 83 Figures.');
assert(Object.isFrozen(GALLERY_FIGURES), 'The GalleryFigure registry is immutable.');

const expectedGroupedIds = new Set(groupExpectations.flatMap(group => group.members));
const figureMembers = GALLERY_FIGURES.flatMap(figure => figure.memberLookIds);
assert.equal(figureMembers.length, GALLERY_LOOKS.length, 'Every source GalleryLook is represented once.');
assert.equal(new Set(figureMembers).size, GALLERY_LOOKS.length, 'No source GalleryLook is grouped twice.');
assert.deepEqual(new Set(figureMembers), new Set(GALLERY_LOOKS.map(look => look.id)));
assert.deepEqual(new Set(GALLERY_FIGURES.filter(figure => figure.memberLookIds.length > 1)
  .flatMap(figure => figure.memberLookIds)), expectedGroupedIds, 'Only explicitly approved duplicate silhouettes are merged.');

for (const expected of groupExpectations) {
  const figure = getGalleryFigure(expected.id, 'v1');
  assert(figure, `Merged Figure is registered: ${expected.id}`);
  assert.deepEqual(figure.memberLookIds, expected.members, `Stable member mapping: ${expected.id}`);
  assert.equal(figure.defaultLookId, expected.defaultLookId, `Stable representative: ${expected.id}`);
  assert.equal(figure.assetRefs, getGalleryLook(expected.defaultLookId).assetRefs,
    `Figure cover uses the canonical registered look assets: ${expected.id}`);
  assert.equal(getGalleryFigure(expected.id, 'v999'), null, `Unknown Figure version fails closed: ${expected.id}`);
  assert.equal(getFigureForLook(expected.members[0]), figure, `Member route resolves its Figure: ${expected.id}`);
  for (const lookId of expected.members) {
    const look = getGalleryLook(lookId);
    assert.equal(getFigureForLook(look), figure, `Exact source GalleryLook resolves its Figure: ${lookId}`);
    assert.equal(getFigureInitialState(figure, lookId)?.look, look, `Legacy route opens on its exact source look: ${lookId}`);
  }
}

for (const figure of GALLERY_FIGURES) {
  assert.equal(figure.kind, 'gallery-figure');
  assert(figure.sourceVersionsSignature.length > 0, `Source look/artwork/template versions bind Figure ${figure.id}.`);
  assert.equal(getGalleryFigure(figure.id, figure.version), figure);
  assert.equal(getFigureForLook(figure.memberLookIds[0]), figure);
  const initial = getFigureInitialState(figure);
  const defaultLook = getGalleryLook(figure.defaultLookId);
  assert(initial && defaultLook, `Default state resolves for ${figure.id}`);
  assert.equal(initial.look, defaultLook);
  assert.equal(initial.recipe.id, defaultLook.defaultRecipeId, `Initial state uses the exact registered default recipe: ${figure.id}`);
  assert.equal(initial.template, getTemplateForArtwork(getArtwork(initial.artwork.id)), `State keeps the registered Template identity: ${figure.id}`);
  assert.equal(initial.recipe, initial.template.recipes.find(recipe => recipe.id === initial.recipe.id), `State keeps the registered recipe identity: ${figure.id}`);

  const fields = getFigureFields(figure);
  assert(fields.every(field => field.key !== 'appearance'), `Appearance is the Figure identity, never an editor field: ${figure.id}`);
  assert(fields.every(field => field.options.length >= 2), `Only adjustable fields are exposed: ${figure.id}`);
  for (const field of fields) {
    assert(field.labelByLanguage.en && field.labelByLanguage['zh-CN'], `Bilingual field label: ${figure.id} ${field.key}`);
    for (const option of field.options) {
      assert(option.id.startsWith(`${field.key}:`), `Semantic option id is namespaced: ${figure.id} ${field.key}`);
      assert(option.sourceLookId && option.sourceOptionId, `Semantic option identifies its exact source: ${figure.id} ${field.key}`);
      assert.equal(option.sourceOption.id, option.sourceOptionId, `Source option metadata remains exact: ${figure.id} ${field.key}`);
    }
  }
}

const allStates = GALLERY_FIGURES.flatMap(figure => getFigureStates(figure));
assert.equal(allStates.length, 540, 'All 540 existing recipe states remain available through Figures.');
const stateIds = new Set(allStates.map(state => state.id));
assert.equal(stateIds.size, 540, 'Figure state IDs are unique.');
const recipeKeys = new Set();
for (const state of allStates) {
  assert.equal(state.figureId, getFigureForLook(state.look).id);
  assert.equal(state.artwork, getArtwork(state.look.artworkId));
  assert.equal(state.template, getTemplateForArtwork(state.artwork));
  assert(state.template.recipes.includes(state.recipe), `Figure state retains an exact registered recipe: ${state.id}`);
  assert.equal(state.selections, state.recipe.selections, `Figure state selections are the original recipe selections: ${state.id}`);
  assert.equal(state.selections.appearance, state.look.appearance, `State remains bound to its registered appearance: ${state.id}`);
  assert.deepEqual(Object.keys(state.values).sort(), Object.keys(state.selections).filter(key => key !== 'appearance').sort(),
    `Semantic values cover all editable source selections: ${state.id}`);
  const key = `${state.template.id}\u0000${state.template.version}\u0000${state.recipe.id}`;
  assert(!recipeKeys.has(key), `A registered recipe appears exactly once: ${state.id}`);
  recipeKeys.add(key);
}
const expectedRecipeCount = TEMPLATE_REGISTRY.reduce((count, template) => count + template.recipes.length, 0);
assert.equal(recipeKeys.size, expectedRecipeCount);
assert.equal(expectedRecipeCount, 540, 'The current registered source recipe count remains 540.');

function tupleKey(state) {
  return JSON.stringify(Object.fromEntries(Object.entries(state.values).sort(([left], [right]) => left.localeCompare(right))));
}

let semanticTupleCount = 0;
let reachableSemanticTupleCount = 0;
for (const figure of GALLERY_FIGURES) {
  const states = getFigureStates(figure);
  const stateById = new Map(states.map(state => [state.id, state]));
  const expectedTuples = new Set(states.map(tupleKey));
  const initial = getFigureInitialState(figure);
  const queue = [initial];
  const visitedStateIds = new Set();
  const reachableTuples = new Set();
  while (queue.length) {
    const state = queue.shift();
    if (!state || visitedStateIds.has(state.id)) continue;
    visitedStateIds.add(state.id);
    reachableTuples.add(tupleKey(state));
    for (const field of getFigureFields(figure)) {
      for (const option of field.options) {
        const next = resolveFigureSelection(figure, state.id, {[field.key]: option.id});
        if (next && stateById.has(next.id) && !visitedStateIds.has(next.id)) queue.push(next);
      }
    }
  }
  assert.deepEqual(reachableTuples, expectedTuples,
    `Every registered semantic option tuple is reachable from the canonical initial state through single-field edits: ${figure.id}`);
  semanticTupleCount += expectedTuples.size;
  reachableSemanticTupleCount += reachableTuples.size;
}
assert.equal(semanticTupleCount, 512, 'The source registry contains 512 distinct Figure semantic tuples.');
assert.equal(reachableSemanticTupleCount, semanticTupleCount, 'All 512 semantic tuples are reachable from canonical Figure states.');

const orb = getGalleryFigure('dots-orb', 'v1');
const orbFields = new Map(getFigureFields(orb).map(field => [field.key, field]));
assert.deepEqual(orbFields.get('colors').options.map(option => option.id), [
  'colors:blue', 'colors:rose', 'colors:ivory', 'colors:charcoal', 'colors:lilac'
]);
assert(orbFields.get('accessories').options.some(option => option.id === 'accessories:round-glasses'));
assert(getFigureStates(orb).some(state => state.look.id === 'dots-rose-glasses'
  && state.selections.accessories === 'rose-round-glasses'), 'Rose glasses source state remains registered behind the shared glasses semantic option.');

const triangle = getGalleryFigure('dots-rounded-triangle', 'v1');
assert(getFigureFields(triangle).find(field => field.key === 'colors').options
  .some(option => option.id === 'colors:warm-yellow'), 'Warm yellow aliases the source option named original without globalizing original.');
assert.deepEqual(getFigureForLook('candidate-grok-20261005').memberLookIds, ['candidate-grok-20261005'],
  'No geometric look is merged solely because another family uses a round shape.');
assert.equal(getFigureForLook('dots-flower-cloud').id, 'dots-flower-cloud', 'Flower cloud remains a separate silhouette.');
assert.equal(getFigureForLook('grok-green-cloud').id, 'grok-green-cloud', 'Grok cloud retains its distinct material and identity.');
assert.equal(getFigureForLook('dots-yellow-glasses-triangle--soft').id, 'dots-yellow-glasses-triangle--soft',
  'The taller triangle contour remains a separate Figure.');

const orbInitial = getFigureInitialState(orb);
const roseOnOrb = resolveFigureSelection(orb, orbInitial.id, {colors: 'colors:rose'});
assert(roseOnOrb, 'Color selection resolves to an exact registered recipe.');
assert.equal(roseOnOrb.look.id, orbInitial.look.id, 'Keep the current source member when it contains the requested legal tuple.');
assert.equal(roseOnOrb.selections.accessories, orbInitial.selections.accessories, 'Unpatched accessory stays selected.');
const lilacWithBucket = resolveFigureSelection(orb, orbInitial.id, {
  colors: 'colors:lilac', accessories: 'accessories:bucket-hat'
});
assert(lilacWithBucket, 'A cross-source combination resolves when a registered member has that exact tuple.');
assert.equal(lilacWithBucket.look.id, 'dots-lilac-bucket', 'Cross-source resolution retains exact source identity.');
assert.equal(resolveFigureSelection(orb, orbInitial.id, {colors: 'colors:lilac'}), null,
  'An unavailable color-plus-current-accessory tuple is not invented.');
assert.equal(resolveFigureSelection(orb, orbInitial.id, {colors: 'colors:ivory', accessories: 'accessories:bucket-hat'}), null,
  'Unsupported combinations fail closed.');
assert.equal(resolveFigureSelection(orb, orbInitial.id, {appearance: 'cloud'}), null,
  'Appearance cannot be changed inside a Figure.');
assert.equal(resolveFigureSelection(orb, 'unknown-state', {}), null, 'Unknown state fails closed.');
assert.equal(getFigureInitialState(orb, 'dots-flower-cloud'), null, 'A source look outside the Figure cannot seed its state.');

const cloudSearch = queryGalleryFigures({text: '云朵'});
assert(cloudSearch.some(figure => figure.id === 'dots-cloud'), 'Chinese source search resolves to the deduplicated Cloud Figure.');
assert.equal(queryGalleryFigures({text: 'cloud'}).filter(figure => figure.id === 'dots-cloud').length, 1,
  'A multi-source Figure appears once in search results.');
assert.equal(queryGalleryFigures({seriesId: '__proto__'}).length, 0, 'Invalid series filters fail closed.');
for (const figure of GALLERY_FIGURES) {
  for (const language of ['en', 'zh-CN']) {
    const title = figure.titleByLanguage[language];
    assert(title, `Figure title exists for search: ${figure.id} ${language}`);
    assert(queryGalleryFigures({text: title, language}).some(row => row === figure),
      `A Figure can be found by its full localized title: ${figure.id} ${language}`);
  }
}
const sourceTitleSearch = queryGalleryFigures({text: '青绿云', language: 'zh-CN'});
assert(sourceTitleSearch.some(figure => figure.id === 'grok-green-cloud'),
  'Legacy source Artwork titles remain searchable after Figure titles are normalized.');
assert.equal(new Set(sourceTitleSearch.map(figure => figure.id)).size, sourceTitleSearch.length,
  'Source-title search still returns each Figure once.');

const evidence = {
  status: 'passed',
  figures: GALLERY_FIGURES.length,
  sourceGalleryLooks: GALLERY_LOOKS.length,
  sourceArtworks: ARTWORKS.length,
  sourceTemplates: TEMPLATE_REGISTRY.length,
  exactSourceRecipeStates: allStates.length,
  semanticTuples: semanticTupleCount,
  reachableSemanticTuples: reachableSemanticTupleCount,
  mergedGroups: groupExpectations,
  groupedLookCount: expectedGroupedIds.size,
  unsupportedCombinationsFabricated: 0,
  checks: [
    'all source looks belong to exactly one Figure',
    'all source recipes remain one exact source state each',
    'all semantic option tuples are reachable through registered single-field edits',
    'source Artwork, Template, and recipe object identities preserved',
    'semantic options are deduplicated only by explicit group mappings',
    'source-version signature and versioned lookups validated',
    'search returns merged Figures once',
    'localized Figure title and description search coexists with source-member search',
    'unregistered cross-source combinations fail closed'
  ]
};
await fs.mkdir(reportDir, {recursive: true});
await fs.writeFile(path.join(reportDir, 'report.json'), `${JSON.stringify(evidence, null, 2)}\n`);
console.log(`GalleryFigure core verification passed: ${evidence.figures} figures; ${evidence.exactSourceRecipeStates} exact registered states; ${evidence.sourceArtworks} source Artworks unchanged.`);
