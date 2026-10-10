import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import {
  ARTWORKS, ASSETS, CATALOG_INVENTORY, CHARACTER_IDENTITIES, DETAIL_PREVIEW_ASSETS, DISPLAY_DERIVATIVES, PREVIEW_ARTWORKS, PREVIEW_ASSETS, PREVIEW_PROMPTS, PROMPTS, SERIES,
  canOpenArtwork, createSnapshot, getAsset, getArtwork, getPrompt, getVariants, isEligible, isPreviewArtwork, isTransparentCharacter, validateArtwork, validatePreviewArtwork
} from '../dist/studio-artwork-catalog.js?v=99';
import { ARTWORK_CONTENT, CHARACTER_IDENTITIES as CONTENT_CHARACTERS, DOTS_PROMPT, LEGACY_ARTWORK_TEXT, POSTER_ASSETS, PREVIEW_ARTWORK_CONTENT, PREVIEW_ORIGINAL_ASSETS, THUMBNAIL_ASSETS } from '../dist/studio-content.js?v=99';
import { queryArtworks } from '../dist/studio-tags.js?v=99';
import { createNewArtworkFixture } from './fixtures/new-artwork.mjs';

const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const releasePath = '../design/acceptance/current-20261010-v99/release-20261011/approval.json';
const releaseApproval = JSON.parse(await readFile(new URL(releasePath, import.meta.url), 'utf8'));
const approvalPath = '../openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json';
const snapshotPath = '../openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json';
const approval = JSON.parse(await readFile(new URL(approvalPath, import.meta.url), 'utf8'));
const sourceSnapshot = JSON.parse(await readFile(new URL(snapshotPath, import.meta.url), 'utf8'));
const frozenArtworkIds = approval.scope.registeredLooks.map(item => item.id).sort();
const artworkIds = ARTWORKS.map(artwork => artwork.id).sort();
const originalAssets = ASSETS.filter(asset => ['transparent-character-still', 'opaque-character-still'].includes(asset.resourceKind));
const posterAssets = ASSETS.filter(asset => asset.resourceKind === 'gallery-poster');
const publishedThumbnails = THUMBNAIL_ASSETS.filter(asset => asset.publicationStatus === 'published-derivative');
const publishedDetailPreviews = DETAIL_PREVIEW_ASSETS.filter(asset => asset.publicationStatus === 'published-derivative');
const previewOriginalIds = new Set(PREVIEW_ORIGINAL_ASSETS.map(asset => asset.id));
const previewArtworkIds = new Set(PREVIEW_ARTWORKS.map(artwork => artwork.id));
const registeredPendingOriginals = PREVIEW_ASSETS.filter(asset => previewArtworkIds.has(asset.ownerArtworkId) && ['transparent-character-still', 'opaque-character-still'].includes(asset.resourceKind));
const coreCategories = ['appearance', 'bodyAccessory', 'characterStyle', 'clothing', 'colorMaterial', 'facialFeatures', 'headAccessory', 'prop'];
const newCandidateIds = ['dots-butter-beret', 'grok-coral-drop', 'muse-lavender-lantern', 'human-rust-jacket', 'animal-cocoa-bear', 'dots-lime-frog-bow', 'dots-pink-heart-shades'];
const releaseArtworkById = new Map(releaseApproval.scope.artworks.map(item => [item.id, item]));
const sourceSnapshotCache = new Map([[snapshotPath.slice(3), sourceSnapshot]]);
async function sourceRecordFor(asset) {
  const [snapshotFile, itemPath] = String(asset.sourceSnapshotRef || '').split('#');
  assert(snapshotFile && itemPath, `${asset.id} must identify its source snapshot record.`);
  const relativeSnapshotPath = snapshotFile.replace(/^\.\.\//, '');
  let snapshot = sourceSnapshotCache.get(relativeSnapshotPath);
  if (!snapshot) {
    snapshot = JSON.parse(await readFile(new URL(`../${relativeSnapshotPath}`, import.meta.url), 'utf8'));
    sourceSnapshotCache.set(relativeSnapshotPath, snapshot);
  }
  return snapshot.files.find(file => file.path === itemPath);
}

assert.equal(frozenArtworkIds.length, 15, 'The v83 approval record freezes the historical 15-artwork subset.');
assert.equal(releaseApproval.approvalId, 'dots-current-v99-artwork-ui-template-approval-20261011');
assert.equal(releaseApproval.scope.revision, 99);
assert.equal(releaseApproval.scope.artworkCount, 24);
assert.equal(releaseApproval.userConfirmation.messages.includes('用户确认 ok'), true, 'The current user approval is traceable to the explicit confirmation.');
assert.equal(new Set(artworkIds).size, ARTWORKS.length, 'The current approved catalog has unique Artwork IDs.');
assert.equal(ARTWORKS.length, 24, 'All 24 exact artworks approved for this release enter the catalog.');
assert.ok(frozenArtworkIds.every(id => artworkIds.includes(id)), 'All 15 historical approved Artworks remain in the active catalog.');
assert.deepEqual([...releaseArtworkById.keys()].sort(), artworkIds, 'The current release approval enumerates every active Artwork exactly once.');
assert.equal(approval.userArtApproved, true);
assert.equal(approval.sourceId, sourceSnapshot.sourceId);
assert.equal(sourceSnapshot.cacheRevision, '83');
assert.equal(originalAssets.length, ARTWORKS.length, 'Each currently approved Artwork has one complete original PNG.');
assert.equal(publishedThumbnails.length, ARTWORKS.length, 'Each approved Artwork has one 256px gallery poster.');
assert.equal(publishedDetailPreviews.length, ARTWORKS.length * 2, 'Each approved Artwork has separate 512px and 1024px detail previews.');
assert.equal(posterAssets.length, publishedThumbnails.length + POSTER_ASSETS.length, 'New thumbnails and preserved historical posters are registered separately.');
assert.equal(ASSETS.length, originalAssets.length + POSTER_ASSETS.length + publishedThumbnails.length + publishedDetailPreviews.length);
assert.equal(CATALOG_INVENTORY.approvedArtworkCount, ARTWORKS.length);
assert.equal(CATALOG_INVENTORY.posterAssetCount, ARTWORKS.length);
assert.equal(CATALOG_INVENTORY.coreFactCategoryCount, 8);
assert.equal(PROMPTS.length, ARTWORKS.length * 2, 'Each Artwork keeps its attached Chinese and English image prompts.');
assert.equal(PREVIEW_ARTWORKS.length, 0, 'The exact approved release has no pending Artwork records.');
assert.equal(PREVIEW_ASSETS.length, 0, 'The exact approved release has no pending Asset records.');
assert.equal(PREVIEW_PROMPTS.length, 0, 'The exact approved release has no pending Prompt records.');
assert.equal(Object.keys(PREVIEW_ARTWORK_CONTENT).length, 9, 'The source candidate set remains available for exact approval binding.');
assert.equal(PREVIEW_ORIGINAL_ASSETS.length, 9, 'Candidate originals remain registered as immutable source inputs.');
assert.ok(newCandidateIds.every(id => releaseArtworkById.has(id)), 'All seven newly produced candidates are included in the exact current approval.');
assert.ok(['robot-ivory-capsule-face-v98-candidate', 'animal-white-rabbit-v98-candidate'].every(id => releaseArtworkById.has(id)), 'The two earlier pending candidates are included in the explicit current approval.');
assert.equal(PREVIEW_ASSETS.filter(asset => previewOriginalIds.has(asset.id)).length, 0, 'Approved candidate sources do not leak into the pending Asset registry.');
assert.equal(PREVIEW_ASSETS.length, registeredPendingOriginals.length + PREVIEW_ARTWORKS.length * 3, 'Any future pending Artwork keeps its own original and three isolated display derivatives.');
assert.equal(PREVIEW_PROMPTS.length, PREVIEW_ARTWORKS.length * 2, 'Any future pending Artwork keeps bilingual Prompts outside production.');
assert.equal(SERIES.length, 5);
const museSeries = SERIES.find(series => series.id === 'meta-muse');
assert.deepEqual(museSeries?.labelByLanguage, { en: 'Muse', 'zh-CN': 'Muse' }, 'The public series label is Muse in both site languages.');
for (const artwork of [...ARTWORKS, ...PREVIEW_ARTWORKS]) {
  const series = SERIES.find(item => item.id === artwork.seriesId);
  const explicitSeriesLabels = artwork.seriesLabelByLanguage;
  assert.ok(series || (explicitSeriesLabels?.en && explicitSeriesLabels?.['zh-CN']), `${artwork.id} resolves either a current public series or an explicit localized label.`);
  for (const language of ['en', 'zh-CN']) {
    const title = artwork.titleByLanguage?.[language]?.trim().toLocaleLowerCase(language === 'zh-CN' ? 'zh-CN' : 'en');
    const label = (explicitSeriesLabels?.[language] || series?.labelByLanguage[language] || '').trim().toLocaleLowerCase(language === 'zh-CN' ? 'zh-CN' : 'en');
    assert.ok(title && label && title !== label && !title.endsWith(` ${label}`), `${artwork.id} ${language} title has no series-name suffix; the series is rendered separately.`);
  }
}
assert.equal(CHARACTER_IDENTITIES.length, CONTENT_CHARACTERS.length);
assert.ok(DOTS_PROMPT.en && DOTS_PROMPT['zh-CN'] && Object.isFrozen(DOTS_PROMPT));

for (const artwork of ARTWORKS) {
  const original = getAsset(artwork.assetRefs.original);
  const poster = getAsset(artwork.assetRefs.poster);
  const poster512 = getAsset(artwork.assetRefs.poster512);
  const detail512 = getAsset(artwork.assetRefs.detail512);
  const detail1024 = getAsset(artwork.assetRefs.detail1024);
  const character = CHARACTER_IDENTITIES.find(item => item.id === artwork.characterId);
  const content = ARTWORK_CONTENT[artwork.id] || PREVIEW_ARTWORK_CONTENT[artwork.id];
  const legacyText = LEGACY_ARTWORK_TEXT[artwork.id];
  assert.ok(original, `${artwork.id} has a registered original asset`);
  assert.ok(poster, `${artwork.id} has a registered poster`);
  assert.ok(detail512 && detail1024, `${artwork.id} has separately registered detail display resources`);
  assert.equal(artwork.version, original.version, `${artwork.id} version binds to its original asset`);
  assert.equal(artwork.title, content.titleByLanguage['zh-CN'], 'The catalog title mirrors the current localized Chinese Artwork title.');
  assert.equal(artwork.description, legacyText?.description || content.descriptionByLanguage['zh-CN'], 'The description follows the immutable historical text or its approved current source.');
  assert.equal(artwork.titleByLanguage.en, content.titleByLanguage.en);
  assert.equal(artwork.titleByLanguage['zh-CN'], content.titleByLanguage['zh-CN']);
  assert.ok(artwork.titleByLanguage.en && artwork.titleByLanguage['zh-CN']);
  assert.ok(artwork.descriptionByLanguage.en && artwork.descriptionByLanguage['zh-CN']);
  assert.ok(artwork.aliases.en.length && artwork.aliases['zh-CN'].length);
  assert.ok(character, `${artwork.id} links to a static Character identity`);
  assert.equal(character.seriesId, artwork.seriesId, `${artwork.id} keeps identity separate from its series`);
  assert.equal(content.characterId, artwork.characterId);
  assert.equal(artwork.characterLabelByLanguage.en, character.labelByLanguage.en);
  assert.ok(SERIES.some(series => series.id === artwork.seriesId) || (artwork.seriesLabelByLanguage?.en && artwork.seriesLabelByLanguage?.['zh-CN']), `${artwork.id} has a registered or explicitly localized series label.`);
  assert.deepEqual(Object.keys(artwork.coreFacts).sort(), coreCategories);
  assert.ok(artwork.detailFactIds.length >= 3 && artwork.detailFactIds.length <= 5);
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

  assert.equal(original.resourceKind, artwork.resourceKind);
  assert.equal(original.publicationStatus, 'published');
  assert.equal(original.artApproval.status, 'approved');
  assert.equal(original.artApproval.artworkId, artwork.id);
  assert.equal(original.artApproval.assetSha256, original.sha256);
  assert.equal(artwork.artApproval.assetSha256, original.sha256);
  assert.equal(original.sourceSnapshotMatch, true);
  if (frozenArtworkIds.includes(artwork.id)) {
    assert.equal(original.artApproval.scope, 'scope.registeredLooks');
    assert.equal(original.artApproval.cacheRevision, '83');
    assert.equal(original.resourceKind, 'transparent-character-still');
    assert.equal(original.alpha.hasAlpha, true);
    assert.equal(original.alpha.hasTransparency, true);
  } else {
    const approved = releaseArtworkById.get(artwork.id);
    assert.ok(approved, `${artwork.id} appears in the current approval scope.`);
    assert.equal(original.artApproval.record, releasePath.slice(3));
    assert.equal(original.artApproval.sourceId, releaseApproval.approvalId);
    assert.equal(original.artApproval.scope, 'scope.currentV99ArtworkApproval');
    assert.equal(approved.version, artwork.version);
    assert.equal(approved.original.sha256, original.sha256);
    assert.equal(approved.original.byteSize, original.byteSize);
    assert.equal(approved.original.path, original.path);
    assert.equal(original.alpha.hasAlpha, original.resourceKind === 'transparent-character-still');
    assert.equal(original.alpha.hasTransparency, original.resourceKind === 'transparent-character-still');
  }
  assert.equal(poster.ownerArtworkId, artwork.id);
  assert.equal(poster.version, 'v99');
  assert.equal(poster.purpose, 'poster');
  assert.equal(poster.downloadable, false);
  assert.equal(poster.derivedFrom, original.id);
  assert.equal(poster.sourceAssetId, original.id);
  assert.equal(poster.sourceAssetSha256, original.sha256);
  assert.equal(Math.max(poster.width, poster.height), 256);
  if (poster512) {
    assert.equal(poster512.version, 'v1');
    assert.equal(poster512.width, 512);
    assert.equal(poster512.height, 512);
  }
  for (const [preview, side] of [[detail512, 512], [detail1024, 1024]]) {
    assert.equal(Math.max(preview.width, preview.height), side);
    assert.equal(preview.resourceKind, 'display-preview');
    assert.equal(preview.downloadable, false);
    assert.equal(preview.sourceAssetId, original.id);
    assert.equal(preview.sourceAssetSha256, original.sha256);
  }
  assert.equal(isEligible(artwork), true);
  assert.equal(isTransparentCharacter(artwork), artwork.resourceKind === 'transparent-character-still');
  assert.deepEqual(getVariants(artwork.id), [], 'Unregistered variants are omitted rather than represented by placeholders.');

  const originalBytes = await readFile(new URL(`../${original.sourcePath}`, import.meta.url));
  assert.equal(originalBytes.byteLength, original.byteSize, `${original.path} byte length`);
  assert.equal(digest(originalBytes), original.sha256, `${original.path} approved SHA-256`);
  assert.deepEqual([...originalBytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  const originalView = new DataView(originalBytes.buffer, originalBytes.byteOffset, originalBytes.byteLength);
  assert.equal(originalView.getUint32(16), original.width);
  assert.equal(originalView.getUint32(20), original.height);
  assert.equal(originalBytes[25], original.resourceKind === 'transparent-character-still' ? 6 : 2, `${original.id} PNG channel type matches its registered resource kind`);
  if (original.alpha.hasAlpha) assert.equal(original.alpha.transparentPixels + original.alpha.opaquePixels + original.alpha.partialAlphaPixels, original.width * original.height);
  if (frozenArtworkIds.includes(artwork.id)) {
    const sourceRecord = await sourceRecordFor(original);
    assert.ok(sourceRecord, `${original.id} links to an exact source snapshot record`);
    assert.equal(sourceRecord.bytes, original.byteSize);
    assert.equal(sourceRecord.sha256, original.sha256);
    assert.equal(original.sourceSnapshotRef.split('#')[0], snapshotPath.slice(3), `${original.id} retains the frozen v83 source snapshot.`);
  } else {
    assert.equal(original.artApproval.status, 'approved', `${artwork.id} has explicit artwork approval.`);
    assert.equal(original.artApproval.artworkId, artwork.id, `${artwork.id} approval is bound to this Artwork.`);
    assert.equal(original.sourceSnapshotRef.split('#')[0], releasePath.slice(3), `${artwork.id} binds to the current approval record.`);
  }

  if (poster512) {
  const posterBytes = await readFile(new URL(`../${poster512.sourcePath}`, import.meta.url));
  assert.equal(posterBytes.byteLength, poster512.byteSize, `${poster512.path} byte length`);
  assert.ok(posterBytes.byteLength <= 100 * 1024, `${poster512.path} stays within the legacy poster budget`);
  assert.equal(digest(posterBytes), poster512.sha256, `${poster512.path} manifest SHA-256`);
  assert.equal(posterBytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(posterBytes.toString('ascii', 8, 12), 'WEBP');
  let chunks = [];
  for (let offset = 12; offset + 8 <= posterBytes.length;) {
    const name = posterBytes.toString('ascii', offset, offset + 4);
    const size = posterBytes.readUInt32LE(offset + 4);
    chunks.push(name);
    offset += 8 + size + (size & 1);
  }
  assert.ok(chunks.includes('ALPH'), `${poster512.path} retains its alpha chunk`);
  assert.ok(chunks.includes('VP8 '), `${poster512.path} uses the actual lossy VP8 image chunk`);
  assert.ok(poster512.transformation.includes('lossy VP8 WebP with alpha'));
  assert.ok(poster512.approvalRelation.includes('no independent Artwork approval'));
  assert.equal(POSTER_ASSETS.find(item => item.artworkId === artwork.id)?.sha256, poster512.sha256);
  } else {
    assert.equal(frozenArtworkIds.includes(artwork.id), false, `${artwork.id} has no legacy 512px poster registration.`);
  }

  for (const preview of [poster, detail512, detail1024]) {
    const bytes = await readFile(new URL(`../${preview.sourcePath}`, import.meta.url));
    assert.equal(bytes.byteLength, preview.byteSize, `${preview.path} byte length`);
    assert.equal(digest(bytes), preview.sha256, `${preview.path} SHA-256`);
    assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], `${preview.path} remains PNG`);
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    assert.equal(view.getUint32(16), preview.width);
    assert.equal(view.getUint32(20), preview.height);
    assert.equal(bytes[25], original.resourceKind === 'transparent-character-still' ? 6 : 2, `${preview.path} preserves the original channel type`);
  }

  const snapshot = createSnapshot(artwork.id);
  assert.equal(snapshot.artworkId, artwork.id);
  assert.equal(snapshot.asset.sha256, original.sha256);
  assert.equal(snapshot.prompt.artworkId, artwork.id);
  assert.ok(Object.isFrozen(snapshot) && Object.isFrozen(snapshot.artwork));
}

for (const artwork of PREVIEW_ARTWORKS) {
  const content = PREVIEW_ARTWORK_CONTENT[artwork.id];
  const asset = getAsset(artwork.assetRefs.original);
  assert.ok(content && asset, `${artwork.id} has registered pending content and a local original.`);
  assert.equal(artwork.version, asset.version);
  assert.equal(artwork.publicationStatus, 'preview-only');
  assert.equal(artwork.reviewStatus, 'pending-user-art-approval');
  assert.equal(artwork.status, 'pending-review');
  assert.equal(artwork.artApproval.status, 'pending');
  assert.equal(artwork.artApproval.record, null);
  assert.equal(artwork.artApproval.sourceSnapshot, null);
  assert.equal(artwork.artApproval.sourceId, null);
  assert.equal(artwork.sourceSnapshotMatch, false);
  assert.equal(asset.publicationStatus, 'preview-only');
  assert.equal(asset.artApproval.status, 'pending');
  assert.equal(asset.artApproval.record, null);
  assert.equal(asset.artApproval.sourceSnapshot, null);
  assert.equal(asset.artApproval.sourceId, null);
  assert.equal(asset.artApproval.assetSha256, asset.sha256);
  assert.equal(artwork.resourceKind, asset.resourceKind, 'The pending Artwork accurately declares its original resource kind.');
  assert.ok(['transparent-character-still', 'opaque-character-still'].includes(asset.resourceKind));
  assert.equal(isPreviewArtwork(artwork), true);
  assert.equal(isPreviewArtwork(artwork.id), true);
  assert.equal(validatePreviewArtwork(artwork), true);
  assert.equal(validatePreviewArtwork({ ...artwork, resourceKind: asset.resourceKind === 'opaque-character-still' ? 'transparent-character-still' : 'opaque-character-still' }), false, 'Pending Artwork cannot mislabel the original resource kind.');
  assert.equal(isEligible(artwork), false, 'A pending preview never becomes gallery eligible.');
  assert.equal(isTransparentCharacter(artwork), false, 'Preview transparency does not grant approved Artwork status.');
  assert.equal(canOpenArtwork(artwork.id, artwork.version), true);
  assert.equal(canOpenArtwork(artwork.id, `${artwork.version}-stale`), false, 'Direct detail links must bind the preview version.');
  assert.ok(getArtwork(artwork.id), 'Shared identity lookup can resolve a local preview.');
  assert.equal(getArtwork(artwork.id).id, artwork.id);
  assert.equal(getArtwork(artwork.id, ARTWORKS), null, 'Pending Artwork remains outside the currently approved catalog.');
  assert.equal(ARTWORKS.some(item => item.id === artwork.id), false);
  assert.equal(getPrompt(artwork.promptRefs.enImage)?.status, 'pending-review');
  assert.equal(getPrompt(artwork.promptRefs.zhImage)?.status, 'pending-review');
  const pendingEnglishPrompt = getPrompt(artwork.promptRefs.enImage).text;
  const pendingChinesePrompt = getPrompt(artwork.promptRefs.zhImage).text;
  if (asset.alpha.hasTransparency) {
    assert.match(pendingEnglishPrompt, /transparent background/i, 'Transparent pending art and Prompt agree.');
    assert.match(pendingChinesePrompt, /透明/, 'Chinese transparent-art Prompt agrees.');
  } else {
    assert.match(pendingEnglishPrompt, /pale cool-gray studio background/i, 'Opaque pending art and Prompt agree.');
    assert.match(pendingChinesePrompt, /浅冷灰色摄影棚背景/, 'Chinese opaque-art Prompt agrees.');
    assert.doesNotMatch(`${pendingEnglishPrompt} ${pendingChinesePrompt}`, /transparent background|透明背景/i, 'Opaque previews are not described as transparent.');
  }
  assert.equal(getAsset(asset.id)?.sha256, asset.sha256);
  assert.equal(getAsset({ ...asset, sha256: '0'.repeat(64) }), null, 'Preview asset lookups still bind immutable metadata.');
  assert.equal(createSnapshot(artwork.id), null, 'Pending content cannot enter a default approved snapshot.');
  const snapshot = createSnapshot(artwork.id, { allowPreview: true });
  assert.equal(snapshot.artworkId, artwork.id);
  assert.equal(snapshot.asset.sha256, asset.sha256);
  assert.equal(snapshot.prompt.status, 'pending-review');
  assert.equal(snapshot.artwork.artApproval.status, 'pending');
  assert.equal(snapshot.artwork.sourceSnapshotMatch, false);
  assert.equal(queryArtworks({ text: artwork.titleByLanguage.en }).some(item => item.id === artwork.id), false);

  const bytes = await readFile(new URL(`../${asset.sourcePath}`, import.meta.url));
  const sourceBytes = await readFile(new URL(`../${content.sourcePath}`, import.meta.url));
  assert.equal(bytes.byteLength, asset.byteSize, `${asset.path} byte length`);
  assert.equal(digest(bytes), asset.sha256, `${asset.path} local preview SHA-256`);
  assert.deepEqual(bytes, sourceBytes, `${asset.path} matches its preserved candidate source bytes`);
  assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  assert.equal(view.getUint32(16), asset.width);
  assert.equal(view.getUint32(20), asset.height);
  const expectedColorType = asset.resourceKind === 'transparent-character-still' ? 6 : 2;
  assert.equal(bytes[25], expectedColorType, `${asset.id} PNG encoding matches its registered resource kind`);
  assert.equal(asset.alpha.hasAlpha, expectedColorType === 6, `${asset.id} alpha-channel metadata matches its PNG encoding`);
  assert.equal(asset.alpha.hasTransparency, expectedColorType === 6, `${asset.id} transparency metadata matches its PNG encoding`);
}
assert.equal(ASSETS.length, originalAssets.length + POSTER_ASSETS.length + publishedThumbnails.length + publishedDetailPreviews.length, 'Pending preview files remain outside the approved asset list.');
assert.equal(PROMPTS.length, ARTWORKS.length * 2, 'Preview Prompts remain outside the approved Prompt list.');
assert.equal(queryArtworks({}).length, ARTWORKS.length, 'Default gallery query returns the current approved Artwork count.');

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
assert.ok(ASSETS.every(asset => ['transparent-character-still', 'opaque-character-still', 'gallery-poster', 'display-preview'].includes(asset.resourceKind)));

// This test-only new Character is generated from actual catalog bytes. It is
// isolated from the production list, publish inventory, and approval records.
const fixture = createNewArtworkFixture();
assert.equal(validateArtwork(fixture.artwork, fixture.validationContext), true, 'An isolated new Character/Artwork passes the shared data contract.');
assert.deepEqual(fixture.queryArtworks({ text: 'fixture only', seriesId: 'animals' }).map(item => item.id), [fixture.artwork.id]);
assert.equal(getArtwork(fixture.artwork.id), null, 'The fixture is absent from production lookup.');
assert.equal(fixture.getArtwork(fixture.artwork.id), fixture.artwork, 'The injected catalog uses generic identity lookup.');
assert.equal(fixture.canOpenArtwork(fixture.artwork.id, fixture.artwork.version), true);
const fixtureSnapshot = fixture.createSnapshot(fixture.artwork.id);
assert.equal(fixtureSnapshot.artworkId, fixture.artwork.id, 'The normal detail snapshot API accepts an injected static Artwork.');
assert.equal(fixtureSnapshot.asset.id, fixture.artwork.assetRefs.original);
assert.equal(fixtureSnapshot.prompt.artworkId, fixture.artwork.id);
assert.equal(fixture.promptFor(fixture.artwork, { language: 'en' }).language, 'en');
assert.equal(fixture.promptFor(fixture.artwork, { language: 'zh-CN' }).language, 'zh');
assert.ok(frozenArtworkIds.every(id => ARTWORKS.some(artwork => artwork.id === id)), 'The frozen 15 approved historical artworks remain intact as a protected subset.');
const pendingMutation = { ...ARTWORKS[0], publicationStatus: 'preview-only', status: 'pending-review', reviewStatus: 'pending-user-art-approval', previewOnly: true, sourceSnapshotMatch: false, artApproval: { ...ARTWORKS[0].artApproval, status: 'pending', record: null, sourceSnapshot: null, sourceId: null } };
assert.equal(isEligible(pendingMutation), false, 'A pending status mutation cannot enter the production catalog.');
assert.equal(validatePreviewArtwork(pendingMutation), false, 'A pending record must also be explicitly registered in the isolated preview registry.');
assert.equal(canOpenArtwork(pendingMutation), false, 'A pending Artwork without registered preview resources cannot open.');
assert.equal(ARTWORKS.some(item => item.id === fixture.artwork.id), false);
assert.equal(ASSETS.some(asset => fixture.assets.some(entry => entry.id === asset.id)), false, 'Fixture assets never enter the production manifest.');
assert.equal(isEligible(fixture.artwork), false, 'The fixture cannot publish without its isolated validation context.');

console.log(`Artwork catalog: ${ARTWORKS.length} approved Artworks; 15 historical approvals and 9 exact v99 approvals verified; ${PREVIEW_ARTWORKS.length} pending local previews; source, approval, and byte hashes checked.`);
