import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import {
  ARTWORKS, ASSETS, CATALOG_INVENTORY, PROMPTS, SERIES, STYLE_IDENTITIES,
  createSnapshot, getAsset, getArtwork, getVariants, isEligible, isTransparentCharacter, validateArtwork
} from '../dist/studio-artwork-catalog.js?v=97';
import { ARTWORK_CONTENT, LEGACY_ARTWORK_TEXT, POSTER_ASSETS } from '../dist/studio-content.js?v=97';
import { queryArtworks } from '../dist/studio-tags.js?v=97';

const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const expectedVersions = new Map([
  ['candidate-dots-20261005', 'v2'], ['candidate-grok-20261005', 'v2'],
  ['candidate-meta-muse-20261005', 'v1'], ['candidate-humans-20261005', 'v1'],
  ['candidate-animals-20261005', 'v1'], ...ARTWORKS.slice(5).map(artwork => [artwork.id, 'v1'])
]);
const approvalPath = '../openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json';
const snapshotPath = '../openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json';
const approval = JSON.parse(await readFile(new URL(approvalPath, import.meta.url), 'utf8'));
const sourceSnapshot = JSON.parse(await readFile(new URL(snapshotPath, import.meta.url), 'utf8'));
const sourceRows = new Map(sourceSnapshot.files.map(file => [file.path, file]));
const approvedIds = approval.scope.registeredLooks.map(item => item.id).sort();
const artworkIds = ARTWORKS.map(artwork => artwork.id).sort();
const originalAssets = ASSETS.filter(asset => asset.resourceKind === 'transparent-character-still');
const posterAssets = ASSETS.filter(asset => asset.resourceKind === 'gallery-poster');
const coreCategories = ['appearance', 'bodyAccessory', 'characterStyle', 'clothing', 'colorMaterial', 'facialFeatures', 'headAccessory', 'prop'];

assert.equal(ARTWORKS.length, 15);
assert.deepEqual(artworkIds, approvedIds, 'The published catalog is exactly the v83 user-approved Artwork set.');
assert.equal(approval.userArtApproved, true);
assert.equal(approval.sourceId, sourceSnapshot.sourceId);
assert.equal(sourceSnapshot.cacheRevision, '83');
assert.equal(originalAssets.length, 15, 'The active catalog contains only the 15 complete original PNGs.');
assert.equal(posterAssets.length, 15, 'Each Artwork has one separate gallery poster.');
assert.equal(ASSETS.length, 30, 'Only original Artwork and its gallery poster are in the active asset catalog.');
assert.equal(CATALOG_INVENTORY.approvedArtworkCount, 15);
assert.equal(CATALOG_INVENTORY.posterAssetCount, 15);
assert.equal(CATALOG_INVENTORY.coreFactCategoryCount, 8);
assert.equal(PROMPTS.length, 30, 'Each Artwork keeps its attached Chinese and English image prompts.');
assert.equal(SERIES.length, 5);
assert.equal(STYLE_IDENTITIES.length, 5);

for (const artwork of ARTWORKS) {
  const original = getAsset(artwork.assetRefs.original);
  const poster = getAsset(artwork.assetRefs.poster);
  const content = ARTWORK_CONTENT[artwork.id];
  const legacyText = LEGACY_ARTWORK_TEXT[artwork.id];
  assert.ok(original, `${artwork.id} has a registered original asset`);
  assert.ok(poster, `${artwork.id} has a registered poster`);
  assert.equal(artwork.version, expectedVersions.get(artwork.id), `${artwork.id} keeps its approved version`);
  assert.equal(artwork.version, original.version, `${artwork.id} version binds to its original asset`);
  assert.equal(artwork.title, legacyText.title, 'The existing title field stays byte-for-byte unchanged.');
  assert.equal(artwork.description, legacyText.description, 'The existing description field stays byte-for-byte unchanged.');
  assert.equal(artwork.titleByLanguage.en, content.titleByLanguage.en);
  assert.equal(artwork.titleByLanguage['zh-CN'], content.titleByLanguage['zh-CN']);
  assert.ok(artwork.titleByLanguage.en && artwork.titleByLanguage['zh-CN']);
  assert.ok(artwork.descriptionByLanguage.en && artwork.descriptionByLanguage['zh-CN']);
  assert.ok(artwork.aliases.en.length && artwork.aliases['zh-CN'].length);
  assert.ok(STYLE_IDENTITIES.some(character => character.id === artwork.characterId), `${artwork.id} links to a static Character identity`);
  assert.ok(SERIES.some(series => series.id === artwork.seriesId));
  assert.deepEqual(Object.keys(artwork.coreFacts).sort(), coreCategories);
  assert.ok(artwork.detailFactIds.length >= 3 && artwork.detailFactIds.length <= 4);
  assert.ok(artwork.detailFactIds.every(id => artwork.featureIds.includes(id)), `${artwork.id} detail labels refer to real registered facts`);
  assert.ok(artwork.featureIds.length > 0 && artwork.featureIds.every(id => artwork.tagIds.includes(id)));
  for (const values of Object.values(artwork.coreFacts)) {
    assert.ok(Array.isArray(values));
    for (const item of values) {
      assert.ok(artwork.featureIds.includes(item.id));
      assert.equal(typeof item.label, 'string');
      assert.ok(['known', 'none', 'not-applicable'].includes(item.state));
    }
  }

  assert.equal(original.resourceKind, 'transparent-character-still');
  assert.equal(original.publicationStatus, 'published');
  assert.equal(original.artApproval.status, 'approved');
  assert.equal(original.artApproval.scope, 'scope.registeredLooks');
  assert.equal(original.artApproval.cacheRevision, '83');
  assert.equal(original.artApproval.artworkId, artwork.id);
  assert.equal(original.artApproval.assetSha256, original.sha256);
  assert.equal(artwork.artApproval.assetSha256, original.sha256);
  assert.equal(original.sourceSnapshotMatch, true);
  assert.equal(original.alpha.hasAlpha, true);
  assert.equal(original.alpha.hasTransparency, true);
  assert.equal(poster.ownerArtworkId, artwork.id);
  assert.equal(poster.version, 'v1');
  assert.equal(poster.purpose, 'gallery-cover-only');
  assert.equal(poster.downloadable, false);
  assert.equal(poster.derivedFrom, original.id);
  assert.equal(poster.sourceAssetId, original.id);
  assert.equal(poster.sourceAssetSha256, original.sha256);
  assert.equal(poster.width, 512);
  assert.equal(poster.height, 512);
  assert.equal(poster.alpha.hasAlpha, true);
  assert.equal(poster.alpha.hasTransparency, true);
  assert.equal(poster.alpha.transparentPixels + poster.alpha.opaquePixels + poster.alpha.partialAlphaPixels, 512 * 512);
  assert.equal(isEligible(artwork), true);
  assert.equal(isTransparentCharacter(artwork), true);
  assert.deepEqual(getVariants(artwork.id), [], 'Unregistered variants are omitted rather than represented by placeholders.');

  const originalBytes = await readFile(new URL(`../${original.sourcePath}`, import.meta.url));
  assert.equal(originalBytes.byteLength, original.byteSize, `${original.path} byte length`);
  assert.equal(digest(originalBytes), original.sha256, `${original.path} approved SHA-256`);
  assert.deepEqual([...originalBytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  const originalView = new DataView(originalBytes.buffer, originalBytes.byteOffset, originalBytes.byteLength);
  assert.equal(originalView.getUint32(16), original.width);
  assert.equal(originalView.getUint32(20), original.height);
  assert.ok([4, 6].includes(originalBytes[25]), `${original.id} source PNG retains an alpha channel`);
  assert.equal(original.alpha.transparentPixels + original.alpha.opaquePixels + original.alpha.partialAlphaPixels, original.width * original.height);
  const frozenOriginal = sourceRows.get(original.sourceSnapshotRef.split('#')[1]);
  assert.ok(frozenOriginal, `${original.id} links to its frozen v83 source record`);
  assert.equal(frozenOriginal.bytes, original.byteSize);
  assert.equal(frozenOriginal.sha256, original.sha256);

  const posterBytes = await readFile(new URL(`../${poster.sourcePath}`, import.meta.url));
  assert.equal(posterBytes.byteLength, poster.byteSize, `${poster.path} byte length`);
  assert.ok(posterBytes.byteLength <= 100 * 1024, `${poster.path} stays within the 100 KiB gallery-poster budget`);
  assert.equal(digest(posterBytes), poster.sha256, `${poster.path} manifest SHA-256`);
  assert.equal(posterBytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(posterBytes.toString('ascii', 8, 12), 'WEBP');
  let chunks = [];
  for (let offset = 12; offset + 8 <= posterBytes.length;) {
    const name = posterBytes.toString('ascii', offset, offset + 4);
    const size = posterBytes.readUInt32LE(offset + 4);
    chunks.push(name);
    offset += 8 + size + (size & 1);
  }
  assert.ok(chunks.includes('ALPH'), `${poster.path} retains its alpha chunk`);
  assert.ok(chunks.includes('VP8 '), `${poster.path} uses the actual lossy VP8 image chunk`);
  assert.ok(poster.transformation.includes('lossy VP8 WebP with alpha'));
  assert.ok(poster.approvalRelation.includes('no independent Artwork approval'));
  assert.equal(POSTER_ASSETS.find(item => item.artworkId === artwork.id)?.sha256, poster.sha256);

  const snapshot = createSnapshot(artwork.id);
  assert.equal(snapshot.artworkId, artwork.id);
  assert.equal(snapshot.asset.sha256, original.sha256);
  assert.equal(snapshot.prompt.artworkId, artwork.id);
  assert.ok(Object.isFrozen(snapshot) && Object.isFrozen(snapshot.artwork));
}

assert.equal(getArtwork('missing-artwork'), null);
assert.equal(getAsset({ ...originalAssets[0], path: './assets/elsewhere.png' }), null);
assert.equal(isEligible({ ...ARTWORKS[0], version: 'wrong-version' }), false, 'A stale Artwork version cannot bind to the original.');
assert.equal(isEligible({ ...ARTWORKS[0], sourceSnapshotMatch: false }), false, 'Missing source verification cannot enter the gallery.');
assert.equal(isEligible({ ...ARTWORKS[0], artApproval: { ...ARTWORKS[0].artApproval, status: 'pending' } }), false);
assert.equal(isEligible({ ...ARTWORKS[0], assetRefs: { ...ARTWORKS[0].assetRefs, poster: 'asset:missing:poster:v1' } }), false);
assert.equal(isEligible({ ...ARTWORKS[0], titleByLanguage: { ...ARTWORKS[0].titleByLanguage, en: '' } }), false, 'Missing English title fails closed.');
const { en: _englishTitle, ...titleWithoutEnglish } = ARTWORKS[0].titleByLanguage;
assert.equal(isEligible({ ...ARTWORKS[0], titleByLanguage: titleWithoutEnglish }), false, 'An omitted English title fails closed.');
assert.equal(isEligible({ ...ARTWORKS[0], descriptionByLanguage: { en: '', 'zh-CN': ARTWORKS[0].descriptionByLanguage['zh-CN'] } }), false, 'Missing English description fails closed.');
assert.equal(isEligible({ ...ARTWORKS[0], promptRefs: { ...ARTWORKS[0].promptRefs, enImage: 'missing-en-prompt' } }), false, 'Missing English Prompt fails closed.');
assert.equal(validateArtwork(ARTWORKS[0], { prompts: PROMPTS.filter(prompt => prompt.id !== ARTWORKS[0].promptRefs.enImage) }), false, 'An absent English Prompt record fails closed.');
assert.equal(isEligible({ ...ARTWORKS[0], seriesId: 'unregistered-series' }), false, 'Unknown series fails closed.');
const unknownFeature = {
  ...ARTWORKS[0],
  features: { ...ARTWORKS[0].features, accessory: { ...ARTWORKS[0].features.accessory, state: 'unknown' } }
};
assert.equal(isEligible(unknownFeature), false, 'An unknown fact does not publish as verified Artwork.');
assert.ok(ARTWORKS.every(artwork => !('revealVisuals' in artwork) && !('targetValidation' in artwork)));
assert.ok(ASSETS.every(asset => ['transparent-character-still', 'gallery-poster'].includes(asset.resourceKind)));

// This test-only entry exercises the same static model without joining the
// production approval list or writing any fixture files into dist/.
const fixtureId = 'fixture-new-static-artwork';
const sourceArtwork = ARTWORKS[0];
const sourceOriginal = getAsset(sourceArtwork.assetRefs.original);
const sourcePoster = getAsset(sourceArtwork.assetRefs.poster);
const fixtureOriginal = {
  ...sourceOriginal,
  id: `asset:${fixtureId}:original`,
  ownerArtworkId: fixtureId,
  artApproval: { ...sourceOriginal.artApproval, artworkId: fixtureId, scope: 'fixture-only', record: 'fixture-only/approval.json' }
};
const fixturePoster = {
  ...sourcePoster,
  id: `asset:${fixtureId}:poster:v1`,
  artworkId: fixtureId,
  ownerArtworkId: fixtureId,
  derivedFrom: fixtureOriginal.id,
  sourceAssetId: fixtureOriginal.id,
  sourceAssetSha256: fixtureOriginal.sha256,
  approvalRelation: 'test fixture only; no production Artwork approval'
};
const fixtureArtwork = {
  ...structuredClone(sourceArtwork),
  id: fixtureId,
  title: 'fixture title',
  description: 'fixture description',
  titleByLanguage: { en: 'Test Fixture Dots', 'zh-CN': '新增测试 Dots' },
  descriptionByLanguage: { en: 'Isolated static catalog fixture.', 'zh-CN': '隔离的静态目录测试作品。' },
  aliases: { en: ['fixture discovery token'], 'zh-CN': ['fixture discovery token'] },
  source: { id: 'fixture-source-id', kind: 'test-only-original-artwork', sourceSnapshot: 'fixture-only/source-snapshot.json', sourceId: 'fixture-source-id' },
  artApproval: { ...sourceArtwork.artApproval, artworkId: fixtureId, scope: 'fixture-only', record: 'fixture-only/approval.json', sourceSnapshot: 'fixture-only/source-snapshot.json', sourceId: 'fixture-source-id', assetSha256: fixtureOriginal.sha256 },
  assetRefs: { original: fixtureOriginal.id, poster: fixturePoster.id },
  version: fixtureOriginal.version
};
const fixturePrompts = [
  ...PROMPTS,
  { ...PROMPTS.find(prompt => prompt.id === sourceArtwork.promptRefs.zhImage), id: `prompt:${fixtureId}:zh-image`, artworkId: fixtureId },
  { ...PROMPTS.find(prompt => prompt.id === sourceArtwork.promptRefs.enImage), id: `prompt:${fixtureId}:en-image`, artworkId: fixtureId }
];
fixtureArtwork.promptRefs = { zhImage: `prompt:${fixtureId}:zh-image`, enImage: `prompt:${fixtureId}:en-image` };
const fixtureAssets = new Map([[fixtureOriginal.id, fixtureOriginal], [fixturePoster.id, fixturePoster]]);
const fixtureGetAsset = idOrRef => {
  const id = typeof idOrRef === 'string' ? idOrRef : idOrRef?.id;
  const fixtureAsset = fixtureAssets.get(id);
  if (fixtureAsset) {
    if (typeof idOrRef === 'object' && idOrRef) {
      const fields = ['version', 'path', 'sha256', 'mime', 'byteSize', 'width', 'height'];
      if (fields.some(field => idOrRef[field] !== fixtureAsset[field])) return null;
    }
    return fixtureAsset;
  }
  return getAsset(idOrRef);
};
const fixtureContext = { getAsset: fixtureGetAsset, prompts: fixturePrompts };
const fixtureCatalog = [...ARTWORKS, fixtureArtwork];
assert.equal(validateArtwork(fixtureArtwork, fixtureContext), true, 'An isolated complete new record passes the same publication contract.');
assert.deepEqual(queryArtworks({ text: 'fixture discovery', seriesId: 'dots' }, fixtureCatalog, fixtureContext).map(item => item.id), [fixtureId]);
assert.equal(getArtwork(fixtureId), null, 'The test fixture is absent from the production lookup.');
assert.equal(getArtwork(fixtureId, fixtureCatalog), fixtureArtwork, 'Generic catalog lookup discovers a new static entry.');
const fixtureSnapshot = createSnapshot(fixtureId, { ...fixtureContext, catalog: fixtureCatalog, catalogRevision: 'fixture-only' });
assert.equal(fixtureSnapshot.artworkId, fixtureId, 'The same detail snapshot API can discover an injected static entry.');
assert.equal(fixtureSnapshot.asset.id, fixtureOriginal.id);
assert.equal(fixtureSnapshot.prompt.artworkId, fixtureId);
assert.equal(ARTWORKS.length, 15);
assert.equal(ASSETS.some(asset => asset.id === fixtureOriginal.id || asset.id === fixturePoster.id), false, 'Fixture assets are never written to the production manifest.');
assert.equal(isEligible(fixtureArtwork), false, 'The fixture cannot publish without its isolated validation context.');

console.log(`Artwork catalog: ${ARTWORKS.length} approved originals, ${posterAssets.length} verified gallery posters, v83 source/approval and all byte hashes checked.`);
