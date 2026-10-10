import assert from 'node:assert/strict';
import {
  ARTWORKS, CATALOG_REVISION, getAsset, isEligible
} from '../dist/studio-artwork-catalog.js';
import {
  createDrawEngine, displaySlotsFor, FEATURE_CATEGORIES, REVEAL_SLOTS, REQUIRED_DISPLAY_SLOT_KEYS, revealFeaturesFor
} from '../dist/studio-draw.js';
import { featureVisualFor } from '../dist/studio-feature-visuals.js?v=95';
import { queryArtworks } from '../dist/studio-tags.js';
import { expectedDisplayKeys } from './reveal-test-fixtures.mjs';

assert.equal(ARTWORKS.length, 15);
assert.deepEqual(FEATURE_CATEGORIES.map(category => category.key), [
  'style', 'shape', 'facialFeatures', 'paletteMaterial', 'clothing', 'headAccessory', 'bodyAccessory', 'prop'
]);
assert.deepEqual(FEATURE_CATEGORIES.map(category => category.dimensions), [
  ['style'], ['shape'], ['facial-features'], ['color', 'material'], ['clothing'], ['head-accessory'], ['body-accessory'], ['prop']
]);
assert.deepEqual(REVEAL_SLOTS.map(slot => slot.key), [
  'style', 'appearance', 'palette-material', 'clothing', 'accessory', 'prop'
], 'The six factual groups remain available independently of each round’s display card count.');
assert.deepEqual(REQUIRED_DISPLAY_SLOT_KEYS, ['appearance', 'palette-material']);
assert.ok(Object.isFrozen(REQUIRED_DISPLAY_SLOT_KEYS));

const expectedKeysByArtwork = Object.fromEntries(ARTWORKS.map(artwork => [artwork.id, expectedDisplayKeys(artwork.id)]));
assert.deepEqual(Object.keys(expectedKeysByArtwork).length, 15);
const expectedDistribution = Object.values(expectedKeysByArtwork).reduce((counts, keys) => {
  counts[keys.length] = (counts[keys.length] || 0) + 1;
  return counts;
}, {});
assert.deepEqual(expectedDistribution, { 2: 7, 3: 7, 4: 1 });
for (const artwork of ARTWORKS) {
  const fullFacts = revealFeaturesFor(artwork);
  assert.deepEqual(fullFacts.map(item => item.kind), REVEAL_SLOTS.map(slot => slot.key), `${artwork.id} retains all six reveal facts`);
  const displaySlots = displaySlotsFor(fullFacts);
  assert.deepEqual(displaySlots.map(slot => slot.key), expectedKeysByArtwork[artwork.id], `${artwork.id} has its independently specified ordered card set`);
  assert.ok(Object.isFrozen(displaySlots));
}

const twoCard = displaySlotsFor(revealFeaturesFor(ARTWORKS.find(artwork => artwork.id === 'candidate-grok-20261005')));
assert.deepEqual(twoCard.map(slot => slot.key), ['appearance', 'palette-material']);
assert.equal(twoCard.length, 2);
const fiveFixtureBase = revealFeaturesFor(ARTWORKS.find(artwork => artwork.id === 'human-blond-glasses'));
const fiveCardFixture = fiveFixtureBase.map(feature => feature.kind === 'prop'
  ? { ...feature, state: 'known', status: 'present', value: ['prop:flowers'] }
  : feature);
assert.deepEqual(displaySlotsFor(fiveCardFixture).map(slot => slot.key), [
  'appearance', 'palette-material', 'clothing', 'accessory', 'prop'
], 'An isolated five-card fixture shows every display category without duplicating the identity label.');
const fiveFixtureId = 'fixture-human-five-card';
const fiveFixtureSource = ARTWORKS.find(artwork => artwork.id === 'human-blond-glasses');
const propFixtureSource = ARTWORKS.find(artwork => artwork.id === 'muse-rose-flowers');
const fiveFixtureArtwork = {
  ...fiveFixtureSource,
  id: fiveFixtureId,
  featureIds: [...fiveFixtureSource.featureIds, 'prop:flowers'],
  tagIds: [...fiveFixtureSource.tagIds, 'prop:flowers'],
  features: { ...fiveFixtureSource.features, prop: { id: 'prop:flowers', ids: ['prop:flowers'], label: '白色雏菊花束', state: 'known' } },
  revealVisuals: { ...fiveFixtureSource.revealVisuals, prop: propFixtureSource.revealVisuals.prop }
};
const fixtureAssetResolver = assetRef => {
  const asset = getAsset(assetRef);
  return asset ? { ...asset, applicableArtworkIds: [...new Set([...(asset.applicableArtworkIds || []), fiveFixtureId])] } : null;
};
const fiveFixtureFacts = revealFeaturesFor(fiveFixtureArtwork);
const fiveFixtureKeys = displaySlotsFor(fiveFixtureFacts).map(slot => slot.key);
assert.deepEqual(fiveFixtureKeys, ['appearance', 'palette-material', 'clothing', 'accessory', 'prop']);
for (const key of fiveFixtureKeys) {
  assert.equal(featureVisualFor(fiveFixtureFacts, key, fiveFixtureArtwork, {
    resourcePolicy: 'candidate-preview', assetResolver: fixtureAssetResolver
  }).kind, 'dedicated-asset', `The isolated five-card ${key} resource is explicit and identity/fact checked.`);
}

const formal = createDrawEngine({ rng: () => 0 }).select({});
assert.equal(formal.status, 'empty', 'Pending independent line art stays out of the formal default draw pool.');
assert.throws(() => createDrawEngine({ resourcePolicy: 'candidate-preview-from-query' }), /resourcePolicy/);

const previewEngine = createDrawEngine({ rng: () => 0, resourcePolicy: 'candidate-preview' });
const all = previewEngine.select({});
assert.equal(all.status, 'selected');
assert.equal(all.pool.length, 15, 'All approved works with complete candidate line art can be inspected only under explicit preview policy.');
assert.deepEqual(all.pool.map(artwork => artwork.id).sort(), ARTWORKS.map(artwork => artwork.id).sort());

const dotsScope = { tagsByDimension: { style: ['style:dots'] } };
let random = 0;
const engine = createDrawEngine({ rng: () => random, resourcePolicy: 'candidate-preview' });
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
assert.equal(first.result.visualResourcePolicy, 'candidate-preview');
assert.deepEqual(first.result.displaySlotKeys, expectedKeysByArtwork[first.result.artworkId]);
assert.ok(!first.result.displaySlotKeys.includes('style'), 'Identity remains a fact and lock dimension but is not a reel card.');
assert.ok(Object.isFrozen(first.result.displaySlotKeys));
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

  const visual = featureVisualFor(revealed, slot.key, first.result.artwork, { resourcePolicy: 'candidate-preview' });
  if (feature.state === 'known') {
    assert.equal(visual.state, 'known');
    const displayAsset = getAsset(visual.assetRef);
    assert(displayAsset);
    assert.equal(visual.source.artworkId, first.result.artworkId);
    assert.equal(visual.source.assetId, displayAsset.id);
    assert.equal(visual.source.version, displayAsset.version);
    assert.equal(visual.source.sha256, displayAsset.sha256);
    assert.equal(visual.sourceRect, undefined, 'Production feature visuals never crop the final Artwork.');
    assert.ok(feature.shortName && !feature.shortName.includes('…'));
    assert.equal(visual.kind, 'dedicated-asset', `${slot.key} uses an independently registered illustration.`);
    assert.notEqual(displayAsset.id, first.result.asset.id);
    assert.equal(displayAsset.displayOnly, true);
    assert.equal(visual.artApproval.status, 'pending', 'Engineering validation cannot approve new art.');
    if (slot.key === 'style') {
      assert.equal(displayAsset.identityId, first.result.artwork.styleIdentity);
      assert.ok(displayAsset.id.startsWith('asset:reveal:style:'));
    }
  } else {
    assert.equal(visual.kind, 'empty-value');
    assert.equal(visual.state, feature.state);
    assert.ok(['none', 'notApplicable'].includes(visual.emptyKind));
  }
}
assert.ok(revealed.some(item => item.kind === 'style' && item.label.startsWith('Dots')));
assert.ok(revealed.some(item => item.kind === 'style' && item.value.includes('style:dots')));
assert.ok(revealed.some(item => item.kind === 'accessory' && item.value.includes('head-accessory:over-ear-headphones')));
assert.ok(revealed.some(item => item.kind === 'prop' && item.state === 'none' && item.label === '无道具'));
assert.equal(featureVisualFor(revealed, 'style', first.result.artwork).kind, 'unknown-value', 'Candidate style art is hidden by the formal resolver default.');
assert.equal(featureVisualFor(revealed, 'accessory', first.result.artwork).kind, 'unknown-value', 'Candidate accessory art is hidden by the formal resolver default.');
{
  const styleRecord = first.result.artwork.revealVisuals.style;
  const pendingStyleAsset = getAsset(styleRecord.assetRef);
  const approvedStyleAsset = {
    ...pendingStyleAsset,
    publicationStatus: 'published',
    artApproval: {
      ...pendingStyleAsset.artApproval, status: 'approved', assetSha256: pendingStyleAsset.sha256,
      assetVersion: pendingStyleAsset.version, purpose: 'reveal-only-display', record: 'acceptance/style-art-approval.json'
    }
  };
  const approvedStyleArtwork = {
    ...first.result.artwork,
    revealVisuals: {
      ...first.result.artwork.revealVisuals,
      style: { ...styleRecord, status: 'published', artApproval: approvedStyleAsset.artApproval }
    }
  };
  const approvedAssetResolver = assetRef => assetRef === approvedStyleAsset.id ? approvedStyleAsset : getAsset(assetRef);
  assert.equal(featureVisualFor(revealed, 'style', approvedStyleArtwork, { assetResolver: approvedAssetResolver }).kind, 'dedicated-asset', 'Only a published asset with matching approval enters the formal resolver.');
  for (const [field, value] of [
    ['assetSha256', '0'.repeat(64)], ['assetVersion', 'older-version'],
    ['purpose', 'character-export'], ['record', '']
  ]) {
    const artApproval = { ...approvedStyleAsset.artApproval, [field]: value };
    const staleAsset = { ...approvedStyleAsset, artApproval };
    const staleArtwork = { ...approvedStyleArtwork, revealVisuals: {
      ...approvedStyleArtwork.revealVisuals,
      style: { ...approvedStyleArtwork.revealVisuals.style, artApproval }
    } };
    assert.equal(featureVisualFor(revealed, 'style', staleArtwork, {
      assetResolver: assetRef => assetRef === staleAsset.id ? staleAsset : getAsset(assetRef)
    }).kind, 'unknown-value', `Formal publication rejects approval mismatch for ${field}.`);
  }
  const unapprovedPublishedAsset = { ...approvedStyleAsset, artApproval: { ...approvedStyleAsset.artApproval, status: 'pending' } };
  const unapprovedArtwork = { ...approvedStyleArtwork, revealVisuals: { ...approvedStyleArtwork.revealVisuals, style: { ...approvedStyleArtwork.revealVisuals.style, artApproval: unapprovedPublishedAsset.artApproval } } };
  assert.equal(featureVisualFor(revealed, 'style', unapprovedArtwork, { resourcePolicy: 'candidate-preview', assetResolver: () => unapprovedPublishedAsset }).kind, 'unknown-value', 'Candidate policy cannot accept published but unapproved artwork.');
}

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

const multiAccessory = {
  ...ARTWORKS.find(artwork => artwork.id === 'human-blond-glasses'),
  featureIds: [...ARTWORKS.find(artwork => artwork.id === 'human-blond-glasses').featureIds, 'body-accessory:watch'],
  tagIds: [...ARTWORKS.find(artwork => artwork.id === 'human-blond-glasses').tagIds, 'body-accessory:watch'],
  features: {
    ...ARTWORKS.find(artwork => artwork.id === 'human-blond-glasses').features,
    'body-accessory': { id: 'body-accessory:watch', ids: ['body-accessory:watch'], label: '腕表', state: 'known' }
  }
};
const multiAccessoryFacts = revealFeaturesFor(multiAccessory);
const multiAccessoryGroup = multiAccessoryFacts.find(item => item.kind === 'accessory');
assert.deepEqual(multiAccessoryGroup.value, ['head-accessory:round-glasses', 'body-accessory:watch'], 'All known head/body accessories stay in one factual group.');
assert.deepEqual(displaySlotsFor(multiAccessoryFacts).filter(slot => slot.key === 'accessory').map(slot => slot.key), ['accessory'], 'Multiple accessory facts still yield one display card.');
assert.equal(featureVisualFor(multiAccessoryFacts, 'accessory', multiAccessory, { resourcePolicy: 'candidate-preview' }).kind, 'unknown-value', 'A glasses-only visual cannot stand in for a multi-item accessory card.');

const mismatchedAppearance = {
  ...base,
  featureIds: [...base.featureIds.filter(id => id !== 'shape:sphere'), 'shape:rounded-square'],
  features: { ...base.features, shape: { id: 'shape:rounded-square', ids: ['shape:rounded-square'], label: '圆角方形', state: 'known' } }
};
const mismatchedAppearanceFacts = revealFeaturesFor(mismatchedAppearance);
assert.equal(featureVisualFor(mismatchedAppearanceFacts, 'appearance', mismatchedAppearance, { resourcePolicy: 'candidate-preview' }).kind, 'unknown-value', 'A visually or factually unrelated asset is rejected.');

const mismatchedAssetVersion = {
  ...base,
  revealVisuals: { ...base.revealVisuals, appearance: { ...base.revealVisuals.appearance, assetVersion: 'wrong-version' } }
};
assert.equal(featureVisualFor(revealFeaturesFor(mismatchedAssetVersion), 'appearance', mismatchedAssetVersion, { resourcePolicy: 'candidate-preview' }).kind, 'unknown-value', 'An asset-version mismatch fails closed.');
const mismatchedSource = {
  ...base,
  revealVisuals: { ...base.revealVisuals, appearance: { ...base.revealVisuals.appearance, sourceRef: 'unregistered-source' } }
};
assert.equal(featureVisualFor(revealFeaturesFor(mismatchedSource), 'appearance', mismatchedSource, { resourcePolicy: 'candidate-preview' }).kind, 'unknown-value', 'A source mismatch fails closed.');

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
const naHardLock = createDrawEngine({ catalog: naCatalog, rng: () => 0, resourcePolicy: 'candidate-preview' }).select({
  query: { tagsByDimension: { style: ['style:grok'] } },
  requiredFeatures: ['accessory:none']
});
assert.equal(naHardLock.status, 'selected');
assert.ok(!naHardLock.pool.some(artwork => artwork.id === pureNa.id), 'The old none hard lock cannot match a valid pure-NA record.');

const identityHardLock = createDrawEngine({ rng: () => 0, resourcePolicy: 'candidate-preview' }).select({
  requiredFeatures: ['style:dots']
});
assert.equal(identityHardLock.status, 'selected');
assert.ok(identityHardLock.pool.every(artwork => artwork.styleIdentity === 'dots'), 'Style identity remains a hard-lockable Artwork fact.');
assert.ok(identityHardLock.result.revealFeatures.some(item => item.kind === 'style' && item.value.includes('style:dots')));
assert.ok(!identityHardLock.result.displaySlotKeys.includes('style'), 'The identity hard lock does not add a duplicate style reel card.');

const unknownFacts = {
  ...base,
  features: { ...base.features, shape: { state: 'unknown', ids: [], label: '待核实' } }
};
const unknownAppearance = revealFeaturesFor(unknownFacts).find(item => item.kind === 'appearance');
assert.equal(unknownAppearance.state, 'unknown');
assert.deepEqual(unknownAppearance.value, []);
assert.equal(unknownAppearance.label, '待核实');
assert.equal(createDrawEngine({ catalog: [unknownFacts], rng: () => 0 }).select({}).status, 'empty', 'Unknown facts fail closed in draw eligibility.');

const knownHeadUnknownBody = {
  ...ARTWORKS.find(artwork => artwork.id === 'human-blond-glasses'),
  features: {
    ...ARTWORKS.find(artwork => artwork.id === 'human-blond-glasses').features,
    'body-accessory': { id: 'body-accessory:unknown', ids: [], label: '待核实', state: 'unknown' }
  }
};
assert.equal(revealFeaturesFor(knownHeadUnknownBody).find(item => item.kind === 'accessory').state, 'unknown', 'A known head accessory cannot conceal an unknown body accessory.');
assert.deepEqual(displaySlotsFor(revealFeaturesFor(knownHeadUnknownBody)), [], 'Unknown accessory sub-facts cannot be treated as an absent display category.');
assert.equal(createDrawEngine({ catalog: [knownHeadUnknownBody], rng: () => 0, resourcePolicy: 'candidate-preview' }).select({}).status, 'empty');

// Missing style illustrations do not gate a draw because identity is rendered
// as a label outside the reel. Missing displayed known-feature resources do.
{
  const original = ARTWORKS[0];
  const missingStyle = { ...original, revealVisuals: { ...original.revealVisuals, style: undefined } };
  const styleDraw = createDrawEngine({ catalog: [missingStyle], rng: () => 0, resourcePolicy: 'candidate-preview' }).select();
  assert.equal(styleDraw.status, 'selected', 'A style illustration is not required for random eligibility.');
  assert.ok(styleDraw.result.revealFeatures.some(item => item.kind === 'style' && item.state === 'known'));
  assert.ok(!styleDraw.result.displaySlotKeys.includes('style'));

  const missing = {...original, revealVisuals: {...original.revealVisuals, appearance: undefined}};
  const catalog = ARTWORKS.map(artwork => artwork.id === missing.id ? missing : artwork);
  const styleQuery = { tagsByDimension: { style: [`style:${original.styleIdentity}`] } };
  assert.ok(queryArtworks(styleQuery, catalog).some(artwork => artwork.id === missing.id), 'Gallery search is independent of reveal illustrations.');
  const draw = createDrawEngine({ catalog, rng: () => 0, resourcePolicy: 'candidate-preview' }).select({ query: styleQuery });
  assert.equal(draw.status, 'selected');
  assert.ok(!draw.pool.some(artwork => artwork.id === missing.id), 'Missing independent visual fails closed before drawing.');
}

const bagEngine = createDrawEngine({ rng: () => 0, resourcePolicy: 'candidate-preview' });
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

const singleEngine = createDrawEngine({ rng: () => 0.7, resourcePolicy: 'candidate-preview' });
const single = singleEngine.select({
  query: { tagsByDimension: { style: ['style:dots'], accessory: ['accessory:bucket-hat'] } }
});
assert.equal(single.status, 'selected');
assert.equal(single.pool.length, 1);
assert.match(single.notice, /只有 1 款/);
assert.equal(single.result.artworkId, 'dots-lilac-bucket');

const impossibleLocks = engine.select({ requiredFeatures: ['accessory:headphones', 'accessory:round-glasses'] });
assert.equal(impossibleLocks.status, 'empty', 'Hard locks use AND semantics and are never relaxed.');
assert.match(impossibleLocks.message, /没有找到.*条件.*调整筛选/, 'An empty pool explains the next step without technical resource terminology.');
const zeroResult = engine.select({ query: { tagsByDimension: { style: ['style:animals'], shape: ['shape:sphere'] } } });
assert.equal(zeroResult.status, 'empty');
const invalidQuery = engine.select({ query: { tagsByDimension: { unknown: ['unknown:x'] } } });
assert.equal(invalidQuery.status, 'error');
assert.equal(engine.select({ requiredFeatures: ['shape:not-real'] }).status, 'error');

const failedAssetEngine = createDrawEngine({ rng: () => 0, resourcePolicy: 'candidate-preview' });
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

const malformedRandom = createDrawEngine({ rng: () => Number.NaN, resourcePolicy: 'candidate-preview' }).select({});
assert.equal(malformedRandom.status, 'error');

console.log(`Artwork draw: ${ARTWORKS.length} works, 8 fact categories, 6 complete reveal facts, 2–5 identity-free clue cards, source-bound snapshots, independent display eligibility, hard locks, repeat bag, and unavailable-resource handling verified.`);
