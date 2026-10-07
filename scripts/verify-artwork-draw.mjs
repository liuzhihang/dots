import assert from 'node:assert/strict';
import {
  ARTWORKS, CATALOG_REVISION, getAsset, isEligible
} from '../dist/studio-artwork-catalog.js';
import {
  createDrawEngine, FEATURE_CATEGORIES, REVEAL_SLOTS, revealFeaturesFor
} from '../dist/studio-draw.js';
import { FEATURE_VISUAL_REGISTRY, featureVisualFor } from '../dist/studio-feature-visuals.js?v=90';
import { queryArtworks } from '../dist/studio-tags.js';

assert.equal(ARTWORKS.length, 15);
assert.deepEqual(FEATURE_CATEGORIES.map(category => category.key), [
  'style', 'shape', 'facialFeatures', 'paletteMaterial', 'clothing', 'headAccessory', 'bodyAccessory', 'prop'
]);
assert.deepEqual(FEATURE_CATEGORIES.map(category => category.dimensions), [
  ['style'], ['shape'], ['facial-features'], ['color', 'material'], ['clothing'], ['head-accessory'], ['body-accessory'], ['prop']
]);
assert.deepEqual(REVEAL_SLOTS.map(slot => slot.key), [
  'style', 'appearance', 'palette-material', 'clothing', 'accessory', 'prop'
], 'The UI always derives six fixed slots from the eight searchable fact categories.');

const all = createDrawEngine({ rng: () => 0 }).select({});
assert.equal(all.status, 'selected');
assert.equal(all.pool.length, 15, 'All published works with registered source crops are available to the default draw pool.');
assert.deepEqual(all.pool.map(artwork => artwork.id).sort(), ARTWORKS.map(artwork => artwork.id).sort());

const dotsScope = { tagsByDimension: { style: ['style:dots'] } };
let random = 0;
const engine = createDrawEngine({ rng: () => random });
const first = engine.select({ query: dotsScope, requiredFeatures: ['accessory:headphones'] });
assert.equal(first.status, 'selected');
assert.ok(first.pool.length >= 1);
assert.equal(first.result.artwork.styleIdentity, 'dots');
assert.ok(first.result.artwork.featureIds.includes('accessory:headphones'));
assert.equal(first.result.artworkId, first.result.artwork.id);
assert.equal(first.result.asset.id, first.result.artwork.assetRefs.original);
assert.equal(first.result.asset.ownerArtworkId, first.result.artworkId);
assert.equal(first.result.asset.sha256, first.result.artwork.artApproval.assetSha256);
assert.equal(first.result.asset.sha256, getAsset(first.result.artwork.assetRefs.original).sha256);
assert.equal(first.result.prompt.artworkId, first.result.artworkId);
assert.equal(first.result.promptText, first.result.prompt.text);
assert.ok(first.result.prompt.text.length > 0);
assert.equal(first.result.catalogRevision, CATALOG_REVISION);
assert.deepEqual(first.result.requiredFeatures, ['accessory:headphones']);
assert.equal(first.result.querySnapshot.tagsByDimension.style[0], 'style:dots');
assert.ok(Object.isFrozen(first.result) && Object.isFrozen(first.result.querySnapshot.tagsByDimension.style));
assert.ok(Object.isFrozen(first.result.asset) && Object.isFrozen(first.result.prompt));

const revealed = first.result.revealFeatures;
assert.deepEqual(revealed.map(item => item.kind), REVEAL_SLOTS.map(slot => slot.key));
for (const [index, slot] of REVEAL_SLOTS.entries()) {
  const feature = revealed[index];
  assert.ok(Array.isArray(feature.value), `${slot.key} carries atomic tag IDs, including the empty case`);
  assert.ok(feature.value.every(id => first.result.artwork.featureIds.includes(id)), `${slot.key} does not invent facts outside the frozen Artwork`);
  assert.equal(feature.id.startsWith(`reveal:${slot.key}:`), true);
  assert.equal(typeof feature.label, 'string');
  assert.ok(['known', 'none', 'not-applicable'].includes(feature.state));

  const visual = featureVisualFor(revealed, slot.key, first.result.artwork);
  if (feature.state === 'known') {
    assert.equal(visual.state, 'known');
    assert.equal(visual.assetRef, first.result.asset.id);
    assert.equal(visual.source.artworkId, first.result.artworkId);
    assert.equal(visual.source.assetId, first.result.asset.id);
    assert.equal(visual.source.version, first.result.asset.version);
    assert.equal(visual.source.sha256, first.result.asset.sha256);
    assert.ok(Array.isArray(visual.sourceRect) && visual.sourceRect.length === 4);
    if (slot.key === 'style') assert.equal(visual.kind, 'artwork-preview', 'The style slot may preview the registered full Artwork.');
    else assert.equal(visual.kind, 'source-crop', `${slot.key} uses its registered source crop, never a full Artwork fallback.`);
  } else {
    assert.equal(visual.kind, 'empty-value');
    assert.equal(visual.state, feature.state);
    assert.ok(['none', 'notApplicable'].includes(visual.emptyKind));
  }
}
assert.ok(revealed.some(item => item.kind === 'style' && item.label.startsWith('Dots')));
assert.ok(revealed.some(item => item.kind === 'accessory' && item.value.includes('head-accessory:over-ear-headphones')));
assert.ok(revealed.some(item => item.kind === 'prop' && item.state === 'none' && item.label === '无道具'));

// Composite none + NA facts retain their distinct labels. An obsolete high-level
// `accessory:none` ID in the input record cannot be synthesized into a reveal value.
const base = ARTWORKS.find(artwork => artwork.id === 'candidate-grok-20261005');
const mixedNoneAndNa = {
  ...base,
  featureIds: base.featureIds.filter(id => !['accessory:none', 'body-accessory:none'].includes(id)),
  tagIds: base.tagIds.filter(id => !['accessory:none', 'body-accessory:none'].includes(id)),
  features: {
    ...base.features,
    accessory: { state: 'not-applicable', ids: [], label: '部分不适用' },
    'head-accessory': { ...base.features['head-accessory'], state: 'none', ids: ['head-accessory:none'], label: '无头部配饰' },
    'body-accessory': { state: 'not-applicable', ids: [], label: '不适用' }
  }
};
const mixedAccessory = revealFeaturesFor(mixedNoneAndNa).find(item => item.kind === 'accessory');
assert.equal(mixedAccessory.state, 'none');
assert.deepEqual(mixedAccessory.value, ['head-accessory:none']);
assert.equal(mixedAccessory.label, '无头部配饰 · 不适用');

const pureNa = {
  ...base,
  featureIds: base.featureIds.filter(id => !['accessory:none', 'head-accessory:none', 'body-accessory:none'].includes(id)),
  tagIds: base.tagIds.filter(id => !['accessory:none', 'head-accessory:none', 'body-accessory:none'].includes(id)),
  features: {
    ...base.features,
    accessory: { state: 'not-applicable', ids: [], label: '不适用' },
    'head-accessory': { state: 'not-applicable', ids: [], label: '不适用' },
    'body-accessory': { state: 'not-applicable', ids: [], label: '不适用' }
  }
};
assert.equal(pureNa.featureIds.includes('accessory:none'), false, 'A valid pure-NA fixture has no legacy aggregate none tag.');
assert.equal(isEligible(pureNa), true, 'A complete NA record is valid when its non-applicable dimensions carry no selectable tag.');
const pureNaAccessory = revealFeaturesFor(pureNa).find(item => item.kind === 'accessory');
assert.equal(pureNaAccessory.state, 'not-applicable');
assert.deepEqual(pureNaAccessory.value, [], 'Pure NA does not fall back to an old aggregate none tag as a synthetic reveal fact.');
assert.doesNotMatch(pureNaAccessory.label, /无配饰/);
const naCatalog = ARTWORKS.map(artwork => artwork.id === base.id ? pureNa : artwork);
const naHardLock = createDrawEngine({ catalog: naCatalog, rng: () => 0 }).select({
  query: { tagsByDimension: { style: ['style:grok'] } },
  requiredFeatures: ['accessory:none']
});
assert.equal(naHardLock.status, 'selected');
assert.ok(!naHardLock.pool.some(artwork => artwork.id === pureNa.id), 'The old none hard lock cannot match a valid pure-NA record.');

const unknownFacts = {
  ...base,
  features: { ...base.features, shape: { state: 'unknown', ids: [], label: '待核实' } }
};
const unknownAppearance = revealFeaturesFor(unknownFacts).find(item => item.kind === 'appearance');
assert.equal(unknownAppearance.state, 'unknown');
assert.deepEqual(unknownAppearance.value, []);
assert.equal(unknownAppearance.label, '待核实');
assert.equal(createDrawEngine({ catalog: [unknownFacts], rng: () => 0 }).select({}).status, 'empty', 'Unknown facts fail closed in draw eligibility.');

// A registered full Artwork is allowed in the style slot; missing known-feature
// crops remove only the draw candidate and do not remove it from gallery queries.
{
  const cropArtwork = ARTWORKS.find(artwork => FEATURE_VISUAL_REGISTRY[artwork.id]?.appearance);
  const registry = FEATURE_VISUAL_REGISTRY[cropArtwork.id];
  const savedAppearanceCrop = registry.appearance;
  delete registry.appearance;
  try {
    const styleQuery = { tagsByDimension: { style: [`style:${cropArtwork.styleIdentity}`] } };
    const galleryMatches = queryArtworks(styleQuery);
    assert.ok(galleryMatches.some(artwork => artwork.id === cropArtwork.id), 'Gallery search remains based on published Artwork and tags, not reveal crops.');
    const draw = createDrawEngine({ rng: () => 0 }).select({ query: styleQuery });
    assert.equal(draw.status, 'selected');
    assert.ok(!draw.pool.some(artwork => artwork.id === cropArtwork.id), 'A known slot without its registered source crop is excluded before drawing.');
  } finally {
    registry.appearance = savedAppearanceCrop;
  }
}

const bagEngine = createDrawEngine({ rng: () => 0 });
const bagFirst = bagEngine.select({ query: dotsScope });
assert.equal(bagFirst.status, 'selected');
assert.ok(bagFirst.pool.length > 1);
const distinct = new Set([bagFirst.result.artworkId]);
let lastDrawnId = bagFirst.result.artworkId;
while (distinct.size < bagFirst.pool.length) {
  const next = bagEngine.select({ query: dotsScope });
  assert.equal(next.status, 'selected');
  assert.ok(!distinct.has(next.result.artworkId), 'The query-specific bag avoids repeats before exhaustion.');
  distinct.add(next.result.artworkId);
  lastDrawnId = next.result.artworkId;
}
const afterBag = bagEngine.select({ query: dotsScope });
assert.equal(afterBag.status, 'selected');
assert.ok(distinct.has(afterBag.result.artworkId));
assert.notEqual(afterBag.result.artworkId, lastDrawnId, 'The bag boundary also avoids an immediate repeat when multiple candidates exist.');
assert.match(afterBag.notice, /都已抽过一遍/);

const singleEngine = createDrawEngine({ rng: () => 0.7 });
const single = singleEngine.select({
  query: { tagsByDimension: { style: ['style:dots'], accessory: ['accessory:bucket-hat'] } }
});
assert.equal(single.status, 'selected');
assert.equal(single.pool.length, 1);
assert.match(single.notice, /只有 1 款/);
assert.equal(single.result.artworkId, 'dots-lilac-bucket');

const impossibleLocks = engine.select({ requiredFeatures: ['accessory:headphones', 'accessory:round-glasses'] });
assert.equal(impossibleLocks.status, 'empty', 'Hard locks use AND semantics and are never relaxed.');
assert.match(impossibleLocks.message, /全部条件/);
const zeroResult = engine.select({ query: { tagsByDimension: { style: ['style:animals'], shape: ['shape:sphere'] } } });
assert.equal(zeroResult.status, 'empty');
const invalidQuery = engine.select({ query: { tagsByDimension: { unknown: ['unknown:x'] } } });
assert.equal(invalidQuery.status, 'error');
assert.equal(engine.select({ requiredFeatures: ['shape:not-real'] }).status, 'error');

const failedAssetEngine = createDrawEngine({ rng: () => 0 });
const failedAssetCandidate = failedAssetEngine.select({ query: dotsScope });
assert.equal(failedAssetCandidate.status, 'selected');
failedAssetEngine.markUnavailable(failedAssetCandidate.result.artworkId, 'test resource failure');
assert.ok(failedAssetEngine.unavailableArtworkIds().includes(failedAssetCandidate.result.artworkId));
const afterResourceFailure = failedAssetEngine.select({ query: dotsScope });
assert.equal(afterResourceFailure.status, 'selected');
assert.notEqual(afterResourceFailure.result.artworkId, failedAssetCandidate.result.artworkId);
failedAssetEngine.clearUnavailable();
assert.equal(failedAssetEngine.unavailableArtworkIds().length, 0);

const alternateApproval = {
  ...ARTWORKS[0],
  source: { ...ARTWORKS[0].source, id: 'later-import', sourceId: 'approved-source-v2', sourceSnapshot: 'evidence/source-v2.json' },
  artApproval: { ...ARTWORKS[0].artApproval, sourceId: 'approved-source-v2', record: 'evidence/approval-v2.json', sourceSnapshot: 'evidence/source-v2.json' }
};
assert.equal(isEligible(alternateApproval), true, 'A traceable new source is accepted when its approval and asset hash match.');
assert.ok(getAsset(alternateApproval.assetRefs.original));

const malformedRandom = createDrawEngine({ rng: () => Number.NaN }).select({});
assert.equal(malformedRandom.status, 'error');

console.log(`Artwork draw: ${ARTWORKS.length} works, 8 fact categories, 6 reveal slots, source-bound snapshots, crop eligibility, hard locks, repeat bag, and unavailable-resource handling verified.`);
