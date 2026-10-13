import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  TEMPLATE_REGISTRY,
  LEGACY_TEMPLATE_REGISTRY,
  enumerateValidConfigurations,
  getRequiredTemplateAssets,
  getTemplateOptionAssetRefs,
  getTemplateOptionFields,
  getTemplateForArtwork,
  resolveTemplateAsset,
  validateTemplateDefinition,
  validateTemplateOptions
} from '../dist/studio-edit-templates.js?v=110';
import {
  cancelDraft,
  createDraft,
  isDraftDirty,
  markExternalIntent,
  resetDraft,
  updateDraft,
  updateDraftLanguage
} from '../dist/studio-draft.js?v=110';
import { FIXTURE_ARTWORK, FIXTURE_ASSETS, FIXTURE_DOTS_TEMPLATE, FIXTURE_GROK_TEMPLATE, FIXTURE_TEMPLATE } from './fixtures/character-adjustment-v2.mjs';

const dots = LEGACY_TEMPLATE_REGISTRY.find(template => template.id === 'dots-orb-v1');
const grok = LEGACY_TEMPLATE_REGISTRY.find(template => template.id === 'grok-orb-v1');
assert.ok(dots && grok, 'Both bound template definitions exist.');
assert.equal(LEGACY_TEMPLATE_REGISTRY.length, 2, 'Both original v1 profiles remain available for isolated compatibility regressions.');

const sourceManifest = JSON.parse(fs.readFileSync(new URL('../dist/assets/templates/sources.json', import.meta.url), 'utf8'));
assert.equal(TEMPLATE_REGISTRY.length, 44, 'The current public registry contains the exact 44 approved Templates.');
assert.equal(sourceManifest.templates.length, TEMPLATE_REGISTRY.length, 'The runtime source manifest covers the current public registry exactly.');
assert.equal(sourceManifest.templates.reduce((sum, row) => sum + row.declaredLegalConfigurations, 0), 540, 'The current package contains all 540 approved finite recipes.');
assert.equal(sourceManifest.templates.every(row => row.status === 'approved' && row.engineeringStatus === 'passed' && row.publicEditable === true), true, 'Every exact package Template is approved, engineered, and public-editable.');
assert.equal(sourceManifest.assets.length, 309, 'The active asset manifest contains only layer and thumbnail tuples referenced by current recipes.');
assert.equal(sourceManifest.retainedSourceAssets?.length, 6, 'Six approved but now-unreferenced silhouette masks remain in the separate retained source inventory.');
const sourceTupleKey = row => `${row.id}\u0000${row.version}\u0000${row.purpose}`;
const requiredSourceTuples = new Set();
for (const template of TEMPLATE_REGISTRY) {
  for (const options of enumerateValidConfigurations(template)) {
    for (const reference of getRequiredTemplateAssets(template, options)) requiredSourceTuples.add(sourceTupleKey(reference));
  }
}
const activeSourceTuples = new Set(sourceManifest.assets.map(sourceTupleKey));
const retainedSourceTuples = new Set(sourceManifest.retainedSourceAssets.map(sourceTupleKey));
assert.equal(requiredSourceTuples.size, 309, 'The full 44-template recipe and thumbnail closure contains exactly 309 active tuples.');
assert.deepEqual(activeSourceTuples, requiredSourceTuples, 'The active manifest contains every and only tuple required by current recipes and thumbnails.');
assert.equal(retainedSourceTuples.size, 6, 'Retained source tuple identities are unique.');
assert.equal([...retainedSourceTuples].some(key => requiredSourceTuples.has(key)), false, 'Retained source tuples are outside the active loader closure.');
assert.equal(new Set([...activeSourceTuples, ...retainedSourceTuples]).size, 315, 'The active and retained inventories preserve all 315 exact approved package tuples.');
assert.equal(sourceManifest.assets.every(row => row.status === 'approved' && row.publicEditable === true && row.artApproval?.approvalId === 'character-adjustments-20261011-v1'), true, 'Every package source layer is approved within the exact package scope.');
assert.equal(sourceManifest.retainedSourceAssets.every(row => row.status === 'approved' && row.publicEditable === true && row.artApproval?.approvalId === 'character-adjustments-20261011-v1'), true, 'Retained source rows preserve their approval metadata.');
assert.equal(new Set(TEMPLATE_REGISTRY.map(template => template.id)).size, 44, 'The current registry has no duplicate Template identities.');
assert.equal(TEMPLATE_REGISTRY.some(template => ['dots-orb-v1', 'grok-orb-v1'].includes(template.id)), false, 'Superseded v1 profiles do not shadow the current Artwork bindings.');
let approvedRecipeCount = 0;
for (const template of TEMPLATE_REGISTRY) {
  assert.equal(template.schemaVersion, 2, `${template.id} is an explicitly declared v2 Template.`);
  assert.equal(template.status, 'approved');
  assert.equal(template.engineeringStatus, 'passed');
  assert.equal(template.publicEditable, true, `${template.id} is explicitly enabled for public editing under the approved package.`);
  assert.deepEqual(template.artApproval, { status: 'approved', record: 'design/acceptance/20261011-character-adjustments-v1/approval.json', approvalId: 'character-adjustments-20261011-v1' });
  const configRows = enumerateValidConfigurations(template);
  assert.equal(configRows.length, template.recipes.length, `${template.id} exposes only its explicit recipe set.`);
  approvedRecipeCount += configRows.length;
  assert.equal(validateTemplateDefinition(template, { assetRegistry: sourceManifest.assets }).valid, true, `${template.id} remains a valid exact owner-bound production definition.`);
  const expectedFields = ['dots', 'grok'].includes(template.family)
    ? ['appearance', 'colors', 'face', 'accessories']
    : ['appearance', 'colors', 'face', 'clothing', 'accessories'];
  assert.deepEqual(getTemplateOptionFields(template).map(field => field.key), expectedFields, `${template.id} exposes only its family-appropriate adjustment categories.`);
  assert.equal(getTemplateForArtwork({ id: template.artworkBinding.artworkId, version: template.artworkBinding.artworkVersion, publicationStatus: 'published', artApproval: { status: 'approved' } })?.id, template.id, `${template.id} is selected only for its exact published Artwork version.`);
}
assert.equal(approvedRecipeCount, 540, 'Every current Template recipe is included exactly once in the approved runtime registry.');

const dotsArtwork = { id: dots.artworkBinding.artworkId, version: dots.artworkBinding.artworkVersion, publicationStatus: 'published', artApproval: { status: 'approved' } };
const grokArtwork = { id: grok.artworkBinding.artworkId, version: grok.artworkBinding.artworkVersion, publicationStatus: 'published', artApproval: { status: 'approved' } };
assert.equal(getTemplateForArtwork(dotsArtwork, { registry: LEGACY_TEMPLATE_REGISTRY })?.id, dots.id, 'The exactly approved legacy Dots Template remains available to compatibility tests.');
assert.equal(getTemplateForArtwork(grokArtwork, { registry: LEGACY_TEMPLATE_REGISTRY })?.id, grok.id, 'The exactly approved legacy Grok Template remains available to compatibility tests.');
assert.equal(getTemplateForArtwork({ ...dotsArtwork, version: 'v1' }, { registry: LEGACY_TEMPLATE_REGISTRY }), null, 'A different Artwork version is never implicitly adapted.');
assert.equal(getTemplateForArtwork({ ...grokArtwork, id: 'unbound-artwork' }, { registry: LEGACY_TEMPLATE_REGISTRY }), null, 'An unbound artwork cannot receive a template.');

const pendingDots = { ...dots, status: 'pending', engineeringStatus: 'pending', artApproval: { status: 'pending', record: null } };
assert.equal(getTemplateForArtwork(dotsArtwork, { registry: [pendingDots] }), null, 'A pending Template stays unavailable in production.');
assert.equal(getTemplateForArtwork(dotsArtwork, { registry: [pendingDots], reviewHarness: true })?.accessMode, 'review-only', 'Only the explicit review harness can inspect a pending Template.');
assert.equal(getTemplateForArtwork({ ...dotsArtwork, artApproval: { status: 'pending' } }, { registry: LEGACY_TEMPLATE_REGISTRY }), null, 'Approved Template status cannot bypass Artwork approval.');
assert.equal(getTemplateForArtwork({ ...dotsArtwork, publicationStatus: 'preview-only' }, { registry: LEGACY_TEMPLATE_REGISTRY }), null, 'An approved Template cannot expose an unpublished Artwork.');

const dotsRows = enumerateValidConfigurations(dots);
const grokRows = enumerateValidConfigurations(grok);
assert.equal(dotsRows.length, 12, 'Dots has exactly 12 legal combinations.');
assert.equal(grokRows.length, 16, 'Grok has exactly 16 legal combinations.');
assert.equal(new Set(dotsRows.map(row => JSON.stringify(row))).size, 12, 'Dots combinations are unique.');
assert.equal(new Set(grokRows.map(row => JSON.stringify(row))).size, 16, 'Grok combinations are unique.');
assert.equal(dotsRows.some(row => row.glasses === 'round' && row.accessory === 'headphones'), false, 'Dots rejects all four glasses-plus-headphones combinations.');
assert.equal(grokRows.some(row => row.glasses === 'round' && row.accessory === 'soft-cap'), true, 'Grok includes the specifically adapted cap-plus-glasses combinations.');
assert.ok(dotsRows.every(row => row.shape === 'orb') && grokRows.every(row => row.shape === 'orb'), 'Shape remains fixed and is not a hidden selector.');
assert.equal(validateTemplateOptions(dots, { ...dots.defaultOptions, shape: 'triangle' }).valid, false, 'A non-orb shape is rejected.');

const defaultRefs = getRequiredTemplateAssets(dots, dots.defaultOptions);
assert.deepEqual(defaultRefs.map(row => row.id), [
  'template:dots-orb-v1:body-neutral',
  'template:dots-orb-v1:eyes:original',
  'template:dots-orb-v1:headphones:default:rear',
  'template:dots-orb-v1:headphones:default:front'
], 'The Dots default recipe requires real body, eye, and both headphone planes.');
assert.equal(resolveTemplateAsset(defaultRefs[0], [defaultRefs[0]]), defaultRefs[0], 'Exact asset id/version/purpose resolves.');
assert.equal(resolveTemplateAsset({ ...defaultRefs[0], purpose: 'original-artwork' }, [defaultRefs[0]]), null, 'Purpose mismatch never resolves.');
const uprightEyesRef = getRequiredTemplateAssets(grok, { ...grok.defaultOptions, eyes: 'upright-capsules' })
  .find(reference => reference.id === 'template:grok-orb-v1:eyes:upright-capsules');
assert.equal(uprightEyesRef?.version, 'v2', 'The revised upright-eye source is independently versioned without replacing its earlier registered bytes.');
assert.equal(grok.layers.eyes['angled-capsules']?.version, 'v2', 'The registered angled eye placement uses an immutable v2 resource tuple.');
assert.equal(grok.layers.glasses.round.rear?.version, 'v2', 'The registered glasses rear plane uses its revised v2 resource tuple.');
assert.equal(grok.layers.accessories['soft-cap'].rear?.version, 'v2', 'The cap rear placement uses an immutable v2 resource tuple.');
assert.equal(grok.layers.accessories['soft-cap'].front?.version, 'v2', 'The cap front placement uses an immutable v2 resource tuple.');
assert.throws(() => getRequiredTemplateAssets({ ...dots, layers: { ...dots.layers, eyes: {} } }, dots.defaultOptions), /no registered .* eye layer/i, 'Missing layer definition blocks the recipe.');
assert.deepEqual(getTemplateOptionAssetRefs(dots, 'eyes', 'closed').layerAssets.map(reference => reference.id), [
  'template:dots-orb-v1:eyes:closed'
], 'Legacy v1 eye options still expose their real eye layer reference.');
assert.deepEqual(getTemplateOptionFields(dots).map(field => field.key), ['color', 'eyes', 'glasses', 'accessory'], 'Legacy templates expose only their actual supported option groups.');

const dotsDraft = createDraft({ artwork: dotsArtwork, template: dots, sessionId: 'verify-dots-session', reviewHarness: true });
assert.equal(isDraftDirty(dotsDraft), false, 'New Draft starts clean.');
assert.equal(markExternalIntent(dotsDraft, { direction: '', edits: [] }), dotsDraft, 'Empty external intent is a no-op.');
assert.equal(markExternalIntent(dotsDraft, { direction: '', edits: [{ label: 'real fact', action: 'keep' }] }), dotsDraft, 'Unchanged fact rows do not dirty the Draft.');
const externalDraft = markExternalIntent(dotsDraft, { direction: 'external', edits: [{ label: 'add wings', action: 'add' }] });
assert.equal(externalDraft.revision, dotsDraft.revision, 'ChatGPT-only intent does not schedule a canvas render.');
assert.equal(isDraftDirty(externalDraft), true, 'Non-empty external intent participates in dirty state.');
const changedDraft = updateDraft(externalDraft, { color: 'warm-yellow' }, { template: dots });
assert.equal(changedDraft.revision, 1, 'A legal local option change increments the render revision.');
assert.equal(changedDraft.options.color, 'warm-yellow', 'The accepted value is committed to the isolated Draft.');
assert.throws(() => updateDraft(changedDraft, { glasses: 'round' }, { template: dots }), /do not fit|不兼容/i, 'Conflicting combination is rejected without mutating the previous Draft.');
assert.equal(changedDraft.options.glasses, 'none', 'Rejected patch leaves the prior configuration intact.');
const reset = resetDraft(changedDraft, { template: dots });
assert.equal(reset.options.color, dots.defaultOptions.color, 'Reset restores the Template baseline.');
assert.equal(reset.externalIntent, null, 'Reset clears outside intent alongside local changes.');
assert.equal(reset.revision, 2, 'Reset to different rendered options creates a new revision.');
assert.equal(isDraftDirty(reset), false, 'Returning to both baselines clears dirty state.');
assert.equal(cancelDraft(reset, { template: dots }), reset, 'Cancel on a clean baseline remains a no-op; the caller switches to View.');
const localized = updateDraftLanguage(changedDraft, 'zh-CN');
assert.equal(localized.language, 'zh-CN', 'Language can change without touching the Artwork snapshot.');
assert.equal(localized.revision, changedDraft.revision, 'Language changes do not trigger a canvas render.');
assert.equal(isDraftDirty(localized), isDraftDirty(changedDraft), 'Language changes do not affect dirty state.');

const v2Fields = getTemplateOptionFields(FIXTURE_TEMPLATE);
assert.deepEqual(v2Fields.map(field => field.key), ['appearance', 'colors', 'face', 'clothing', 'accessories'], 'V2 uses five canonical option keys in the required order.');
assert.ok(v2Fields.every(field => field.options.length >= 2), 'The v2 fixture contains at least two visual choices in all five groups.');
const glassesRefs = getTemplateOptionAssetRefs(FIXTURE_TEMPLATE, 'accessories', 'glasses');
assert.deepEqual(glassesRefs.layerAssets.map(reference => reference.id).sort(), [
  'template:fixture-cloud-v2:accessories:glasses-front',
  'template:fixture-cloud-v2:accessories:glasses-rear',
  'template:fixture-cloud-v2:body:cloud',
  'template:fixture-cloud-v2:face:oval'
].sort(), 'Option refs expose the real full-canvas rear/body/face/front recipe assets for the UI.');
assert.ok(glassesRefs.maskAssets.some(reference => reference.id.endsWith(':mask:body')), 'Option refs expose the exact silhouette mask required by the recipe.');
const v2Definition = validateTemplateDefinition(FIXTURE_TEMPLATE, { assetRegistry: FIXTURE_ASSETS });
assert.equal(v2Definition.valid, true, `The test-only v2 fixture is a valid reachable declaration: ${v2Definition.errors.map(row => row.code).join(', ')}`);
assert.equal(FIXTURE_TEMPLATE.status, 'pending', 'The engine fixture remains pending and cannot be read as production approval.');
for (const familyTemplate of [FIXTURE_DOTS_TEMPLATE, FIXTURE_GROK_TEMPLATE]) {
  const familyFields = getTemplateOptionFields(familyTemplate).map(field => field.key);
  assert.deepEqual(familyFields, ['appearance', 'colors', 'face', 'accessories'], `${familyTemplate.family} v2 exposes exactly its four real adjustment groups.`);
  assert.equal(Object.hasOwn(familyTemplate.options, 'clothing'), false, `${familyTemplate.family} fixture omits clothing options.`);
  assert.equal(validateTemplateDefinition(familyTemplate, { assetRegistry: FIXTURE_ASSETS }).valid, true, `${familyTemplate.family} four-field fixture is a valid reachable declaration.`);
  const familyDraft = createDraft({ artwork: FIXTURE_ARTWORK, template: familyTemplate, sessionId: `verify-${familyTemplate.family}-four-tabs`, reviewHarness: true });
  assert.equal(familyDraft.options.clothing, 'none', `${familyTemplate.family} keeps only the hidden Draft compatibility value.`);
  assert.equal(updateDraft(familyDraft, { clothing: 'none' }, { template: familyTemplate }), familyDraft, `${familyTemplate.family} clothing none remains a no-op.`);
  assert.throws(() => updateDraft(familyDraft, { clothing: 'collar' }, { template: familyTemplate }), /clothing is fixed|clothing/i, `${familyTemplate.family} rejects non-none clothing patches.`);
}
const hiddenClothingDefault = structuredClone(FIXTURE_DOTS_TEMPLATE);
hiddenClothingDefault.defaultOptions.clothing = 'none';
assert.equal(validateTemplateDefinition(hiddenClothingDefault, { assetRegistry: FIXTURE_ASSETS }).errors.some(row => row.code === 'disabled-family-field'), true, 'Dots cannot declare a hidden clothing default.');
const hiddenClothingLayer = structuredClone(FIXTURE_GROK_TEMPLATE);
hiddenClothingLayer.recipes[0].layers.push({ slot: 'clothing-hidden', asset: FIXTURE_ASSETS[0] });
assert.equal(validateTemplateDefinition(hiddenClothingLayer, { assetRegistry: FIXTURE_ASSETS }).errors.some(row => row.code === 'disabled-family-layer'), true, 'Grok cannot hide a clothing layer inside a recipe.');
const v2Configs = enumerateValidConfigurations(FIXTURE_TEMPLATE);
assert.equal(v2Configs.length, 7, 'V2 enumerates only the seven explicitly registered recipes, not a generated Cartesian product.');
assert.ok(v2Configs.some(row => row.appearance === 'diamond'), 'The alternative silhouette has a legal recipe.');
assert.ok(v2Configs.some(row => row.colors === 'coral'), 'The alternative color has a legal recipe.');
assert.ok(v2Configs.some(row => row.face === 'closed'), 'The alternative face has a legal recipe.');
assert.ok(v2Configs.some(row => row.clothing === 'collar'), 'The clothing option has a legal recipe.');
assert.ok(v2Configs.some(row => row.accessories === 'glasses'), 'The accessory option has a legal recipe.');
const fixtureDefaultRefs = getRequiredTemplateAssets(FIXTURE_TEMPLATE, FIXTURE_TEMPLATE.defaultOptions);
assert.ok(fixtureDefaultRefs.some(reference => reference.id.endsWith(':mask:body')), 'Renderer refs include the real region mask used by the recipe.');
assert.ok(fixtureDefaultRefs.some(reference => reference.id.endsWith(':body:diamond')), 'The editor manifest refs include real option thumbnails outside the selected recipe.');
assert.throws(() => updateDraft(createDraft({ artwork: FIXTURE_ARTWORK, template: FIXTURE_TEMPLATE, sessionId: 'verify-v2-session', reviewHarness: true }), { clothing: 'collar', accessories: 'glasses' }, { template: FIXTURE_TEMPLATE }), /not approved together|未批准/i, 'An incompatible v2 patch is rejected atomically.');
const missingMask = validateTemplateDefinition(FIXTURE_TEMPLATE, { assetRegistry: FIXTURE_ASSETS.filter(row => !row.id.endsWith(':mask:body')) });
assert.equal(missingMask.errors.some(row => row.code === 'missing-template-asset'), true, 'A missing color/occlusion mask rejects the declaration.');
const crossBoundAssets = FIXTURE_ASSETS.map(row => row.id === FIXTURE_ASSETS[0].id ? { ...row, owner: { ...row.owner, templateId: 'other-template' } } : row);
const crossBound = validateTemplateDefinition(FIXTURE_TEMPLATE, { assetRegistry: crossBoundAssets });
assert.equal(crossBound.errors.some(row => row.code === 'template-asset-owner-mismatch'), true, 'A layer owned by a different Template cannot be borrowed.');
const missingArtworkOwnerAssets = FIXTURE_ASSETS.map(row => row.id === FIXTURE_ASSETS[0].id ? { ...row, owner: { templateId: FIXTURE_TEMPLATE.id } } : row);
const missingArtworkOwner = validateTemplateDefinition(FIXTURE_TEMPLATE, { assetRegistry: missingArtworkOwnerAssets });
assert.equal(missingArtworkOwner.errors.some(row => row.code === 'template-asset-owner-mismatch'), true, 'Template assets must identify the exact Artwork version they were built for.');
const invalidTransformAssets = FIXTURE_ASSETS.map(row => row.id === FIXTURE_ASSETS[3].id ? {
  ...row,
  placement: { ...row.placement, transform: { pivot: [64, 61], scale: [0, 1], rotationDegrees: 0 } }
} : row);
const invalidTransform = validateTemplateDefinition(FIXTURE_TEMPLATE, { assetRegistry: invalidTransformAssets });
assert.equal(invalidTransform.errors.some(row => row.code === 'invalid-template-anchor'), true, 'Invalid transforms are rejected by the shared placement contract.');
const unreachable = structuredClone(FIXTURE_TEMPLATE);
unreachable.options.face.push({ ...unreachable.options.face[0], id: 'unreachable-face' });
const unreachableReport = validateTemplateDefinition(unreachable, { assetRegistry: FIXTURE_ASSETS });
assert.equal(unreachableReport.errors.some(row => row.code === 'unreachable-option' && row.optionId === 'unreachable-face'), true, 'An option without a legal recipe cannot be claimed as supported.');
const isolatedRecipe = structuredClone(FIXTURE_TEMPLATE);
isolatedRecipe.recipes.push({
  ...structuredClone(FIXTURE_TEMPLATE.recipes[4]),
  id: 'isolated-multi-field-recipe',
  selections: { appearance: 'diamond', colors: 'coral', face: 'closed', clothing: 'collar', accessories: 'none' }
});
const isolatedRecipeReport = validateTemplateDefinition(isolatedRecipe, { assetRegistry: FIXTURE_ASSETS });
assert.equal(isolatedRecipeReport.errors.some(row => row.code === 'unreachable-recipe' && row.recipeId === 'isolated-multi-field-recipe'), true, 'A legal recipe disconnected by multiple simultaneous field changes is rejected by production definition validation.');

console.log('PASS exact artwork/template binding and approval gates');
console.log('PASS legacy v1 orb options remain compatible without claiming five-category coverage');
console.log('PASS schema-v2 canonical fields, finite recipes, UI asset refs, masks, exact ownership, and single-field recipe reachability');
console.log('PASS in-memory Draft, external intent, revision, reset and cancel semantics');
