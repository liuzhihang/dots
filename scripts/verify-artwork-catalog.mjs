import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import {
  ARTWORKS, ASSETS, CATALOG_INVENTORY, CATALOG_REVISION, CHARACTER_IDENTITIES, DETAIL_PREVIEW_ASSETS,
  DISPLAY_ASSETS, PREVIEW_ARTWORKS, PREVIEW_ASSETS, PREVIEW_PROMPTS, PROMPTS, SERIES,
  canOpenArtwork, createSnapshot, getAsset, getArtwork, getPrompt, getVariants, isEligible,
  isPreviewArtwork, isTransparentCharacter, validateArtwork
} from '../dist/studio-artwork-catalog.js?v=111';
import { ARTWORK_CONTENT, CHARACTER_IDENTITIES as CONTENT_CHARACTERS, POSTER_ASSETS, PREVIEW_ARTWORK_CONTENT, PREVIEW_ORIGINAL_ASSETS } from '../dist/studio-content.js?v=111';
import {
  V100_ADDITIONAL_CONTENT, V100_ADDITIONAL_IDENTITIES, V100_APPROVAL_ID,
  V100_APPROVAL_RECORD, V100_APPROVAL_RECORD_SHA256, V100_ARTWORK_ROWS,
  V100_REVIEW_PACKAGE, V100_REVIEW_PACKAGE_SHA256, V100_SERIES_NORMALIZATION
} from '../dist/studio-content-v100.js?v=111';
import { queryArtworks } from '../dist/studio-tags.js?v=111';
import { createNewArtworkFixture } from './fixtures/new-artwork.mjs';
import { resolveProvenancePath } from './resolve-provenance-path.mjs';

const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const readRepoFile = path => readFile(resolveProvenancePath(path));
const approvalBytes = await readRepoFile(V100_APPROVAL_RECORD);
const packageBytes = await readRepoFile(V100_REVIEW_PACKAGE);
const approval = JSON.parse(approvalBytes);
const reviewPackage = JSON.parse(packageBytes);
const baselineRelease = JSON.parse(await readRepoFile('design/acceptance/current-20261010-v99/release-20261011/approval.json'));
const v83Approval = JSON.parse(await readRepoFile('openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json'));
const v83Snapshot = JSON.parse(await readRepoFile('openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json'));
const v83ArtworkIds = new Set(v83Approval.scope.registeredLooks.map(row => row.id));
const approvalArtworkById = new Map(approval.scope.artworks.map(row => [row.id, row]));
const v100RowById = new Map(V100_ARTWORK_ROWS.map(row => [row.id, row]));
const baselineById = new Map(baselineRelease.scope.artworks.map(row => [row.id, row]));
const currentOriginals = ARTWORKS.map(artwork => getAsset(artwork.assetRefs.original));
const currentPosters = DISPLAY_ASSETS.filter(asset => asset.purpose === 'poster' && asset.publicationStatus === 'published-derivative');
const currentDetails = DETAIL_PREVIEW_ASSETS.filter(asset => asset.publicationStatus === 'published-derivative');
const historicalOriginals = ASSETS.filter(asset => asset.resourceKind === 'opaque-character-still' && asset.publicationStatus === 'historical-only');
const historicalDisplays = DISPLAY_ASSETS.filter(asset => asset.publicationStatus === 'historical-only');

assert.equal(digest(approvalBytes), V100_APPROVAL_RECORD_SHA256, 'The approval record hash is pinned in the runtime metadata.');
assert.equal(digest(packageBytes), V100_REVIEW_PACKAGE_SHA256, 'The frozen review-package SHA is pinned and not read from an absent field.');
assert.equal(V100_REVIEW_PACKAGE_SHA256, 'c9d1096258291a9d62e185a274ecf0bb0f1deba97010f96f96b688e41f01c49c');
assert.equal(approval.approvalId, V100_APPROVAL_ID);
assert.equal(approval.approvedReviewPackage.sha256, V100_REVIEW_PACKAGE_SHA256);
assert.equal(approval.scope.revision, 100);
assert.equal(approval.scope.artworkCount, 44);
assert.equal(approval.scope.templateCount, 44);
assert.equal(approval.scope.recipeCount, 540);
assert.equal(reviewPackage.rows.length, 44);
assert.equal(approval.scope.templates.length, 44);
assert.equal(reviewPackage.recipeCount, 540);
assert.equal(CATALOG_REVISION, 'artwork-catalog-20261011-v100');
assert.equal(CATALOG_INVENTORY.approvalRecord, V100_APPROVAL_RECORD);
assert.equal(CATALOG_INVENTORY.approvalId, V100_APPROVAL_ID);
assert.equal(CATALOG_INVENTORY.approvalPackageSha256, V100_REVIEW_PACKAGE_SHA256);
assert.equal(CATALOG_INVENTORY.approvalScope.recipes, 540);

assert.equal(new Set(ARTWORKS.map(item => item.id)).size, 44);
assert.deepEqual(new Set(ARTWORKS.map(item => item.id)), new Set(approvalArtworkById.keys()), 'Runtime Artwork identities match the frozen user-approved scope exactly.');
assert.deepEqual(ARTWORKS.map(item => item.id), V100_ARTWORK_ROWS.map(row => row.id), 'Curated registration order follows the approval package.');
assert.equal(CHARACTER_IDENTITIES.length, 38);
assert.equal(CHARACTER_IDENTITIES.length, CONTENT_CHARACTERS.length + V100_ADDITIONAL_IDENTITIES.length, 'Twenty new identities extend the protected prior identities.');
assert.equal(Object.keys(V100_ADDITIONAL_CONTENT).length, 20);
assert.equal(ARTWORKS.length, 44);
assert.equal(currentOriginals.length, ARTWORKS.length);
assert.equal(currentOriginals.filter(Boolean).length, 44);
assert.equal(currentOriginals.every(asset => asset.publicationStatus === 'published' && asset.resourceKind === 'transparent-character-still' && asset.alpha.hasTransparency), true);
assert.equal(currentPosters.length, 44);
assert.equal(currentDetails.length, 88);
assert.equal(POSTER_ASSETS.length, 15, 'The prior 512px poster assets remain registered as compatibility derivatives.');
assert.equal(historicalOriginals.length, 2, 'Replaced opaque rabbit and robot originals stay registered as history.');
assert.equal(historicalDisplays.length, 6, 'The six v99 rabbit/robot derivatives remain historical and are excluded from current Artwork refs.');
assert.equal(ASSETS.length, 199);
assert.equal(CATALOG_INVENTORY.approvedArtworkCount, 44);
assert.equal(CATALOG_INVENTORY.originalAssetCount, 44);
assert.equal(CATALOG_INVENTORY.posterAssetCount, 44);
assert.equal(CATALOG_INVENTORY.detailPreviewAssetCount, 88);
assert.equal(CATALOG_INVENTORY.historicalOriginalAssetCount, 2);
assert.equal(CATALOG_INVENTORY.historicalDisplayAssetCount, 6);
assert.equal(CATALOG_INVENTORY.previewArtworkCount, 0);
assert.equal(PREVIEW_ARTWORKS.length, 0);
assert.equal(PREVIEW_ASSETS.length, 0);
assert.equal(PREVIEW_PROMPTS.length, 0);
assert.equal(PROMPTS.length, 88);
assert.equal(PREVIEW_ARTWORK_CONTENT && Object.keys(PREVIEW_ARTWORK_CONTENT).length, 9, 'The original candidate input records remain available and unchanged.');
assert.equal(PREVIEW_ORIGINAL_ASSETS.length, 9, 'The prior candidate source inputs remain intact.');
assert.equal(SERIES.length, 5);
assert.deepEqual(SERIES.map(item => item.id), ['dots', 'grok', 'meta-muse', 'animals', 'humans']);

const museRows = ARTWORKS.filter(item => item.approvalSeriesId === 'muse');
assert.ok(museRows.length > 0);
assert.ok(museRows.every(item => item.seriesId === 'meta-muse'), 'Muse keeps its runtime family ID and records its approval family ID explicitly.');
assert.deepEqual(V100_SERIES_NORMALIZATION.muse, { runtimeSeriesId: 'meta-muse', approvalSeriesId: 'muse' });
const independentRobot = ARTWORKS.find(item => item.id === 'robot-ivory-capsule-face-v98-candidate');
assert.equal(independentRobot.seriesId, 'independent-original');
assert.ok(independentRobot.seriesLabelByLanguage.en && independentRobot.seriesLabelByLanguage['zh-CN']);
assert.deepEqual([...new Set(queryArtworks({ sort: 'curated' }).map(item => item.seriesId))], ['dots', 'grok', 'meta-muse', 'animals', 'humans', 'independent-original']);

for (let index = 0; index < V100_ARTWORK_ROWS.length; index += 1) {
  const row = V100_ARTWORK_ROWS[index];
  const approved = approval.scope.artworks[index];
  const artwork = ARTWORKS[index];
  assert.equal(approved.id, row.id, `Approval row ${index} retains exact artwork identity.`);
  assert.equal(artwork.version, row.version);
  assert.equal(artwork.approvalSeriesId, row.approvalSeriesId);
  assert.equal(artwork.seriesId, row.seriesId);
  assert.equal(artwork.artworkChange, row.change);
  assert.equal(artwork.templateBinding.id, row.template.id);
  assert.equal(artwork.templateBinding.reviewManifestSha256, row.template.reviewManifestSha256);
  assert.equal(artwork.approvalPackage.path, V100_REVIEW_PACKAGE);
  assert.equal(artwork.approvalPackage.sha256, V100_REVIEW_PACKAGE_SHA256);
  assert.equal(approved.version, row.version);
  assert.equal(approved.original.sha256, row.original.sha256);
  assert.equal(approved.original.byteSize, row.original.byteSize);
  assert.equal(artwork.assetRefs.original, row.originalAssetId);
  assert.equal(artwork.artApproval.status, 'approved');
  assert.equal(artwork.artApproval.sourceId, V100_APPROVAL_ID);
  assert.equal(artwork.artApproval.approvalId, V100_APPROVAL_ID);
  assert.equal(artwork.artApproval.assetSha256, row.original.sha256);
  assert.equal(artwork.sourceSnapshotMatch, true);
  assert.equal(artwork.resourceKind, 'transparent-character-still');
  assert.equal(validateArtwork(artwork), true, `${artwork.id} meets the shared published Artwork contract.`);
  assert.equal(isEligible(artwork), true);
  assert.equal(isTransparentCharacter(artwork), true);
  assert.equal(canOpenArtwork(artwork.id, artwork.version), true);
  assert.deepEqual(getVariants(artwork.id), []);
  assert.equal(getArtwork(artwork.id), artwork);

  const content = ARTWORK_CONTENT[artwork.id] || PREVIEW_ARTWORK_CONTENT[artwork.id] || V100_ADDITIONAL_CONTENT[artwork.id];
  assert.ok(content, `${artwork.id} has bilingual static content.`);
  for (const language of ['en', 'zh-CN']) {
    assert.ok(artwork.titleByLanguage[language]?.trim(), `${artwork.id} has a ${language} title.`);
    assert.ok(artwork.descriptionByLanguage[language]?.trim(), `${artwork.id} has a ${language} description.`);
    assert.ok(artwork.aliases[language]?.length, `${artwork.id} has ${language} aliases.`);
  }
  assert.ok(artwork.detailFactIds.length >= 3 && artwork.detailFactIds.length <= 5);
  assert.ok(artwork.detailFactIds.every(id => artwork.featureIds.includes(id)));
  assert.ok(artwork.featureIds.length && artwork.featureIds.every(id => artwork.tagIds.includes(id)));
  for (const [dimension, feature] of Object.entries(artwork.features)) {
    assert.ok(['known', 'none', 'not-applicable'].includes(feature.state));
    if (feature.state === 'not-applicable') continue;
    const ids = feature.ids || [feature.id];
    for (const id of ids) {
      assert.ok(id.startsWith(`${dimension}:`));
      assert.ok(feature.labelsByLanguage[id]?.en && feature.labelsByLanguage[id]?.['zh-CN']);
    }
  }

  const original = getAsset(artwork.assetRefs.original);
  const poster = getAsset(artwork.assetRefs.poster);
  const detail512 = getAsset(artwork.assetRefs.detail512);
  const detail1024 = getAsset(artwork.assetRefs.detail1024);
  const character = CHARACTER_IDENTITIES.find(item => item.id === artwork.characterId);
  assert.ok(original && poster && detail512 && detail1024 && character);
  assert.equal(original.version, row.version);
  assert.equal(original.sha256, row.original.sha256);
  assert.equal(original.byteSize, row.original.byteSize);
  assert.equal(original.path, row.original.path);
  assert.equal(original.artApproval.record, V100_APPROVAL_RECORD);
  assert.equal(original.artApproval.scope, `scope.artworks[${index}].original`);
  assert.equal(original.sourceSnapshotRef, `${V100_APPROVAL_RECORD}#scope.artworks[${index}].original`);
  assert.equal(poster.publicationStatus, 'published-derivative');
  assert.equal(poster.sourceAssetId, original.id);
  assert.equal(poster.sourceAssetSha256, original.sha256);
  assert.equal(detail512.sourceAssetId, original.id);
  assert.equal(detail1024.sourceAssetId, original.id);
  assert.equal(artwork.characterLabelByLanguage.en, character.labelByLanguage.en);
  assert.equal(character.seriesId, artwork.seriesId);

  const promptZh = getPrompt(artwork.promptRefs.zhImage);
  const promptEn = getPrompt(artwork.promptRefs.enImage);
  assert.ok(promptZh && promptEn);
  assert.equal(promptZh.artworkId, artwork.id);
  assert.equal(promptZh.language, 'zh');
  assert.equal(promptEn.language, 'en');
  assert.match(promptZh.text, /透明/);
  assert.match(promptEn.text, /transparen/i);

  const bytes = await readRepoFile(original.sourcePath);
  assert.equal(bytes.byteLength, original.byteSize);
  assert.equal(digest(bytes), original.sha256);
  assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  assert.equal(view.getUint32(16), original.width);
  assert.equal(view.getUint32(20), original.height);
  assert.equal(bytes[25], 6, `${original.id} is encoded as an RGBA PNG.`);
  assert.equal(original.alpha.hasAlpha, true);
  assert.equal(original.alpha.hasTransparency, true);

  const snapshot = createSnapshot(artwork.id);
  assert.equal(snapshot.artworkId, artwork.id);
  assert.equal(snapshot.asset.sha256, original.sha256);
  assert.equal(snapshot.prompt.artworkId, artwork.id);
  assert.ok(Object.isFrozen(snapshot) && Object.isFrozen(snapshot.artwork));
}

const retainedRows = V100_ARTWORK_ROWS.filter(row => row.change === 'existing-original-retained');
const newRows = V100_ARTWORK_ROWS.filter(row => row.change === 'new-artwork');
const replacementRows = V100_ARTWORK_ROWS.filter(row => row.change === 'new-transparent-version');
assert.equal(retainedRows.length, 22);
assert.equal(newRows.length, 20);
assert.equal(replacementRows.length, 2);
assert.equal(baselineById.size, 24, 'All 24 existing Artwork identities remain accounted for against the prior approval.');
assert.ok([...baselineById.keys()].every(id => v100RowById.has(id)), 'No prior Artwork identity was removed.');
for (const prior of baselineRelease.scope.artworks) {
  const current = v100RowById.get(prior.id);
  if (['animal-white-rabbit-v98-candidate', 'robot-ivory-capsule-face-v98-candidate'].includes(prior.id)) {
    assert.equal(current.change, 'new-transparent-version');
    const historical = historicalOriginals.find(asset => asset.ownerArtworkId === prior.id);
    assert.ok(historical);
    assert.equal(historical.sha256, prior.original.sha256);
    assert.equal(historical.byteSize, prior.original.byteSize);
    assert.notEqual(ARTWORKS.find(item => item.id === prior.id).assetRefs.original, historical.id);
    const oldBytes = await readRepoFile(historical.sourcePath);
    assert.equal(digest(oldBytes), historical.sha256, `${prior.id} historical original bytes are preserved.`);
  } else {
    assert.equal(current.change, 'existing-original-retained');
    assert.equal(current.original.sha256, prior.original.sha256);
    assert.equal(current.original.byteSize, prior.original.byteSize);
  }
}
for (const historical of historicalDisplays) {
  assert.ok(['animal-white-rabbit-v98-candidate', 'robot-ivory-capsule-face-v98-candidate'].includes(historical.artworkId));
  assert.ok(historical.id.endsWith(':v99'));
  assert.equal(historical.sourceAssetId, historicalOriginals.find(asset => asset.ownerArtworkId === historical.artworkId).id);
  assert.equal(historical.downloadable, false);
}
for (const display of DISPLAY_ASSETS) {
  const bytes = await readRepoFile(display.sourcePath);
  const source = getAsset(display.sourceAssetId);
  assert.ok(source, `${display.id} resolves an exact active or historical original.`);
  assert.equal(bytes.byteLength, display.byteSize, `${display.id} byte length.`);
  assert.equal(digest(bytes), display.sha256, `${display.id} registered derivative SHA-256.`);
  assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], `${display.id} remains PNG.`);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  assert.equal(view.getUint32(16), display.width);
  assert.equal(view.getUint32(20), display.height);
  assert.equal(bytes[25], source.alpha?.hasAlpha === true ? 6 : 2, `${display.id} channel type matches its bound original.`);
  assert.equal(display.downloadable, false);
}
for (const legacyPoster of POSTER_ASSETS) {
  const registered = getAsset(legacyPoster.id);
  assert.ok(registered, `${legacyPoster.id} remains in the compatibility asset registry.`);
  const bytes = await readRepoFile(registered.sourcePath);
  assert.equal(bytes.byteLength, registered.byteSize);
  assert.equal(digest(bytes), registered.sha256);
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
}
assert.equal(v83Approval.userArtApproved, true);
assert.equal(v83Approval.sourceId, v83Snapshot.sourceId);
const v83ApprovalPath = 'openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json';
const v99ApprovalPath = 'design/acceptance/current-20261010-v99/release-20261011/approval.json';
for (const priorRow of v83Approval.scope.registeredLooks) {
  const priorId = priorRow.id;
  const current = ARTWORKS.find(item => item.id === priorId);
  assert.ok(current, `${priorId} remains active from the v83 historical approval baseline.`);
  assert.equal(current.artApproval.status, 'approved');
  const original = getAsset(current.assetRefs.original);
  assert.equal(original.previousArtApproval?.record, v83ApprovalPath, `${priorId} retains its v83 approval record reference.`);
  assert.equal(original.previousArtApproval?.sourceId, v83Snapshot.sourceId);
  assert.equal(original.previousArtApproval?.scope, 'scope.registeredLooks');
}
for (const priorId of baselineById.keys()) {
  const current = getAsset(ARTWORKS.find(item => item.id === priorId).assetRefs.original);
  assert.ok(current.previousArtApproval, `${priorId} retains its prior approval metadata.`);
  assert.equal(current.previousArtApproval.record, v83ArtworkIds.has(priorId) ? v83ApprovalPath : v99ApprovalPath, `${priorId} records its exact prior approval lineage.`);
}

assert.equal(queryArtworks({}).length, 44);
assert.deepEqual(queryArtworks({ text: 'white rabbit' }).map(item => item.id), ['animal-white-rabbit-v98-candidate']);
assert.deepEqual(queryArtworks({ text: 'capsule robot' }).map(item => item.id), ['robot-ivory-capsule-face-v98-candidate']);
assert.equal(getArtwork('missing-artwork'), null);
assert.equal(isEligible({ ...ARTWORKS[0], version: 'stale' }), false);
assert.equal(isEligible({ ...ARTWORKS[0], sourceSnapshotMatch: false }), false);
assert.equal(isEligible({ ...ARTWORKS[0], artApproval: { ...ARTWORKS[0].artApproval, status: 'pending' } }), false);
assert.equal(validateArtwork(ARTWORKS[0], { prompts: PROMPTS.filter(item => item.id !== ARTWORKS[0].promptRefs.enImage) }), false);
assert.ok(ARTWORKS.every(item => !('revealVisuals' in item) && !('targetValidation' in item)));
assert.ok(ASSETS.every(asset => ['transparent-character-still', 'opaque-character-still', 'gallery-poster', 'display-preview'].includes(asset.resourceKind)));

const fixture = createNewArtworkFixture();
assert.equal(validateArtwork(fixture.artwork, fixture.validationContext), true);
assert.deepEqual(fixture.queryArtworks({ text: 'fixture only', seriesId: 'animals' }).map(item => item.id), [fixture.artwork.id]);
assert.equal(getArtwork(fixture.artwork.id), null);
assert.equal(fixture.canOpenArtwork(fixture.artwork.id, fixture.artwork.version), true);
assert.equal(fixture.createSnapshot(fixture.artwork.id).asset.id, fixture.artwork.assetRefs.original);
assert.equal(isEligible(fixture.artwork), false, 'An isolated fixture cannot publish without its injected validation context.');

console.log(`Artwork catalog: ${ARTWORKS.length} approved artworks, ${PROMPTS.length} bilingual prompts, ${currentPosters.length} posters, ${currentDetails.length} detail previews; frozen approval/package hashes, 24-identity retention, two historical replacements, and transparent source bytes verified.`);
