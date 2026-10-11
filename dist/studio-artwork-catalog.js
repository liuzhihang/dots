import { LEGACY_ARTWORK_TEXT, POSTER_ASSETS, PREVIEW_ARTWORK_CONTENT, PREVIEW_ORIGINAL_ASSETS, PREVIEW_PROMPT_ROWS, SERIES } from './studio-content.js?v=100';
import { DISPLAY_ASSETS as RAW_DISPLAY_ASSETS } from './studio-display-assets.js?v=100';
import { V100_ADDITIONAL_CONTENT, V100_ADDITIONAL_IDENTITIES, V100_APPROVAL_ID, V100_APPROVAL_RECORD, V100_APPROVAL_RECORD_SHA256, V100_ARTWORK_ROWS, V100_CHARACTER_IDENTITIES, V100_CONTENT_BY_ID, V100_ORIGINAL_ASSETS, V100_PROMPT_ROWS, V100_REVIEW_PACKAGE, V100_REVIEW_PACKAGE_SHA256, V100_SERIES_NORMALIZATION } from './studio-content-v100.js?v=100';
export { SERIES };

const deepFreeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
};

export const CATALOG_REVISION = 'artwork-catalog-20261011-v100';

const SOURCE_SNAPSHOT = 'openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json';
const ART_APPROVAL_RECORD = 'openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json';
const V83_SOURCE_ID = '30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451';
const RELEASE_APPROVAL_RECORD = 'design/acceptance/current-20261010-v99/release-20261011/approval.json';
const RELEASE_APPROVAL_ID = 'dots-current-v99-artwork-ui-template-approval-20261011';
const RELEASED_CANDIDATE_ARTWORKS = deepFreeze({
  'robot-ivory-capsule-face-v98-candidate': { version: 'v1', sha256: '9f4eb820cd9cb1d24deb64097279ff29693bc7c683fb3f775292983f7b1bc6c0' },
  'animal-white-rabbit-v98-candidate': { version: 'v1', sha256: '571920fb262079b49097b9f7f468264b65eacfc6dc6ffc0bfaffd451cc7c9963' },
  'dots-butter-beret': { version: 'v2', sha256: '284093696b5e244a8ebd6f5ef433c50059b81bdaf7709ba1d60bd68321ccae00' },
  'grok-coral-drop': { version: 'v1', sha256: '443d0143546c74822387f898471030621c011d2b549bf48ee60857dd1e3d1af8' },
  'muse-lavender-lantern': { version: 'v1', sha256: 'ecf97bcb22678cd4461da27c0ec2a7a4721137081c1b42e25cef115666137574' },
  'human-rust-jacket': { version: 'v1', sha256: 'f53049ad40e0781453ba90c8bcc88b6b30c460fd2b27c9302463df4076208cf4' },
  'animal-cocoa-bear': { version: 'v1', sha256: '3eb35d93bccd37542bbbca3aa0216b5102bf25183168aeca9392b959061d5f57' },
  'dots-lime-frog-bow': { version: 'v1', sha256: 'bc8aa7fa0fe4ea5e4ba2bf36f74703ed33d80036fdfd1cb7027571ed365c2d0f' },
  'dots-pink-heart-shades': { version: 'v1', sha256: 'df3dcfc4468f6fe24f202395dd98957c4d439adb8c80b1357f4a91f9b07a1384' }
});

export const CHARACTER_IDENTITIES = V100_CHARACTER_IDENTITIES;

const runtimeSourcePathFor = asset => {
  if (typeof asset?.path === 'string' && asset.path.startsWith('./assets/')) return `dist/${asset.path.slice(2)}`;
  const sourcePath = String(asset?.sourcePath || '');
  const distIndex = sourcePath.lastIndexOf('/dist/');
  if (distIndex >= 0) return sourcePath.slice(distIndex + 1);
  if (sourcePath.startsWith('dist/')) return sourcePath;
  return sourcePath || asset?.path || null;
};

for (const [approvalSeriesId, mapping] of Object.entries(V100_SERIES_NORMALIZATION)) {
  if (mapping.approvalSeriesId !== approvalSeriesId || mapping.runtimeSeriesId !== 'meta-muse') throw new Error(`Invalid approved series normalization for ${approvalSeriesId}`);
  const museRows = V100_ARTWORK_ROWS.filter(row => row.approvalSeriesId === approvalSeriesId);
  if (!museRows.length || museRows.some(row => row.seriesId !== mapping.runtimeSeriesId)) throw new Error(`Muse approval series must normalize to runtime series ${mapping.runtimeSeriesId}`);
}

const assetRows = [
  ['asset:candidate-dots-20261005:original', 'v2', './assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png', 1720054, '2f680b276f76c2a1c6faeb7d496f16a41327f1186bca27d0acf5197997309455', 1254, 1254, [742591, 478, 829447], 'candidate-dots-20261005', 'artwork'],
  ['asset:candidate-grok-20261005:original', 'v2', './assets/characters/grok-bot-purple-orb-candidate-v2.png', 971168, 'e4730f2957d64b8b2b7eb49c09a21f7a9c1ea352870bd2bf4c0649c7eeec0874', 1254, 1254, [780111, 1168, 791237], 'candidate-grok-20261005', 'artwork'],
  ['asset:candidate-meta-muse-20261005:original', 'v1', './assets/characters/meta-muse-cream-hooded-candidate-v1.png', 1003955, '12ec7cee17f4948d5dd4258b3ad0fe5b44a38e9506b13f5ff39aa3856b3b3ea6', 1235, 1274, [985428, 21, 587941], 'candidate-meta-muse-20261005', 'artwork'],
  ['asset:candidate-humans-20261005:original', 'v1', './assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png', 1151483, '56423f860f47bbad212875aeecdda40e6c86382b6d15a61b5c1a2ffd723fc521', 1254, 1254, [1069183, 514, 502819], 'candidate-humans-20261005', 'artwork'],
  ['asset:candidate-animals-20261005:original', 'v1', './assets/characters/animals-original-shiba-candidate-v1.png', 1413426, 'f6e731ad99f85a20681588e14e2f93279707897da7ff50769f6f29bb62893c62', 1254, 1254, [832059, 48, 740409], 'candidate-animals-20261005', 'artwork'],
  ['asset:dots-rose-glasses:original', 'v1', './assets/looks/dots-rose-glasses.png', 1860436, 'a95261160aa0a6223bab0a3b38d080a4fa5b1b6315593bb6631d820732578d75', 1254, 1254, [731940, 26, 840550], 'dots-rose-glasses', 'artwork'],
  ['asset:dots-lilac-bucket:original', 'v1', './assets/looks/dots-lilac-bucket.png', 1605008, '50ddea9f24e82c02b14cc5374d4b3ae08b00954aa4bcdcbb6aa24dc2a8b3d615', 1254, 1254, [808076, 66, 764374], 'dots-lilac-bucket', 'artwork'],
  ['asset:grok-green-cloud:original', 'v1', './assets/looks/grok-green-cloud.png', 790009, 'd186c5b0837b15c6177b476729b463a7542fdc559d606c6d5818bbad274bad96', 1254, 1254, [949952, 956, 621608], 'grok-green-cloud', 'artwork'],
  ['asset:grok-teal-square:original', 'v1', './assets/looks/grok-teal-square.png', 828844, '81b63d5a809c381f7617261ee4c186031acdc984bac7844d4820c732d44b5f6d', 1254, 1254, [816693, 264, 755559], 'grok-teal-square', 'artwork'],
  ['asset:muse-rose-flowers:original', 'v1', './assets/looks/muse-rose-flowers.png', 1185166, 'd0865bc0a0df4e0e9451c702dac8db0a4bf7e6aa0820657edffa239d24b367be', 1254, 1254, [966879, 193, 605444], 'muse-rose-flowers', 'artwork'],
  ['asset:muse-sage-reading:original', 'v1', './assets/looks/muse-sage-reading.png', 1142481, '82f85f8abce3d425381c54c3d54b116a4e9ab6af2f782792377bbd6ed79f0f3a', 1254, 1254, [1009482, 32, 563002], 'muse-sage-reading', 'artwork'],
  ['asset:human-bun-yellow:original', 'v1', './assets/looks/human-bun-yellow.png', 1086214, 'f7a5f87daa25e1171f8c42db6ed8b668b695bf6f40cbed0aa31d5f8ca7052ccc', 1254, 1254, [1087604, 328, 484584], 'human-bun-yellow', 'artwork'],
  ['asset:human-blond-glasses:original', 'v1', './assets/looks/human-blond-glasses.png', 1058375, '84d20915564eac63f5e33834e221bd73ef7530c8ea331c730503e9de0dafc0f6', 1254, 1254, [1099076, 410, 473030], 'human-blond-glasses', 'artwork'],
  ['asset:animal-white-cat:original', 'v1', './assets/looks/animal-white-cat.png', 1382027, '6b6e0cc65b7edef88b0b19a948444a261a4050ccdcba942fd5941bc2aa2f499a', 1254, 1254, [790208, 16, 782292], 'animal-white-cat', 'artwork'],
  ['asset:animal-gray-husky:original', 'v1', './assets/looks/animal-gray-husky.png', 1623665, '21fa19552ec9c93282985aecf80a1c89d38d15064cf27c3a8bafc8cacdb315ca', 1254, 1254, [790161, 24, 782331], 'animal-gray-husky', 'artwork'],
];

// Cache 90 alpha scan, threshold >= 1. These are source-image pixel bounds;
// the original PNGs remain byte-identical and this metadata never crops exports.
const visibleBoundsByAsset = {
  'asset:candidate-dots-20261005:original': { x: 35, y: 21, width: 1187, height: 1169, alphaThreshold: 1 },
  'asset:candidate-grok-20261005:original': { x: 0, y: 81, width: 1192, height: 1173, alphaThreshold: 1 },
  'asset:candidate-meta-muse-20261005:original': { x: 33, y: 20, width: 1188, height: 1182, alphaThreshold: 1 },
  'asset:candidate-humans-20261005:original': { x: 33, y: 21, width: 1193, height: 1217, alphaThreshold: 1 },
  'asset:candidate-animals-20261005:original': { x: 0, y: 19, width: 1242, height: 1235, alphaThreshold: 1 },
  'asset:dots-rose-glasses:original': { x: 0, y: 57, width: 1214, height: 1197, alphaThreshold: 1 },
  'asset:dots-lilac-bucket:original': { x: 79, y: 17, width: 1095, height: 1163, alphaThreshold: 1 },
  'asset:grok-green-cloud:original': { x: 49, y: 0, width: 1129, height: 1254, alphaThreshold: 1 },
  'asset:grok-teal-square:original': { x: 0, y: 9, width: 1214, height: 1245, alphaThreshold: 1 },
  'asset:muse-rose-flowers:original': { x: 0, y: 20, width: 1216, height: 1164, alphaThreshold: 1 },
  'asset:muse-sage-reading:original': { x: 33, y: 20, width: 1193, height: 1210, alphaThreshold: 1 },
  'asset:human-bun-yellow:original': { x: 0, y: 1, width: 1228, height: 1253, alphaThreshold: 1 },
  'asset:human-blond-glasses:original': { x: 19, y: 21, width: 1195, height: 1233, alphaThreshold: 1 },
  'asset:animal-white-cat:original': { x: 0, y: 23, width: 1238, height: 1231, alphaThreshold: 1 },
  'asset:animal-gray-husky:original': { x: 0, y: 23, width: 1230, height: 1231, alphaThreshold: 1 }
};

const makeApproval = (artworkId, asset) => ({
  status: 'approved',
  record: ART_APPROVAL_RECORD,
  sourceSnapshot: SOURCE_SNAPSHOT,
  sourceId: V83_SOURCE_ID,
  siteVersion: 35,
  cacheRevision: '83',
  scope: 'scope.registeredLooks',
  artworkId,
  assetSha256: asset.sha256,
  note: '该Artwork ID列于v83 registeredLooks；当前资源hash与source-snapshot.json精确匹配。'
});

const artworkAssets = assetRows.map(([id, version, path, byteSize, sha256, width, height, alphaPixels, artworkId]) => {
  const resourceKind = 'transparent-character-still';
  const [transparentPixels, opaquePixels, partialAlphaPixels] = alphaPixels;
  const sourcePath = `dist/${path.slice(2)}`;
  const snapshotPath = sourcePath;
  const asset = {
    id,
    version,
    path,
    sourcePath,
    publicationStatus: 'published',
    sha256,
    mime: 'image/png',
    byteSize,
    width,
    height,
    alpha: {
      hasAlpha: true, hasTransparency: true, min: 0, max: 255, transparentPixels, opaquePixels, partialAlphaPixels,
      ...(visibleBoundsByAsset[id] ? { visibleBounds: visibleBoundsByAsset[id] } : {})
    },
    resourceKind,
    resourceStatus: 'verified-source',
    runtimeVerification: 'not-browser-checked',
    sourceRef: 'historical-runtime/dist/studio-creation-assets.js:16-17',
    sourceSnapshotRef: `${SOURCE_SNAPSHOT}#${snapshotPath}`,
    sourceSnapshotMatch: true,
    artApproval: makeApproval(artworkId, { resourceKind, sha256 }),
    ownerArtworkId: artworkId
  };
  return asset;
});
const originalAssetByArtworkId = new Map(artworkAssets.map(asset => [asset.ownerArtworkId, asset]));
const releaseArtworkAssetRows = PREVIEW_ORIGINAL_ASSETS.filter(asset => RELEASED_CANDIDATE_ARTWORKS[asset.artworkId]).map(asset => {
  const approved = RELEASED_CANDIDATE_ARTWORKS[asset.artworkId];
  if (asset.version !== approved.version || asset.sha256 !== approved.sha256) throw new Error(`Release approval does not match original Artwork bytes: ${asset.artworkId}`);
  return {
    ...asset,
    sourcePath: runtimeSourcePathFor(asset),
    publicationStatus: 'published',
    resourceStatus: 'verified-source',
    sourceSnapshotRef: `${RELEASE_APPROVAL_RECORD}#scope/artworks/${asset.artworkId}/original`,
    sourceSnapshotMatch: true,
    artApproval: {
      status: 'approved', record: RELEASE_APPROVAL_RECORD, sourceSnapshot: RELEASE_APPROVAL_RECORD,
      sourceId: RELEASE_APPROVAL_ID, siteVersion: 99, cacheRevision: '99',
      scope: 'scope.currentV99ArtworkApproval', artworkId: asset.artworkId, assetSha256: asset.sha256,
      note: '用户于 2026-10-11 确认当前 v99 完整Artwork；批准只绑定登记ID、版本与原图SHA-256。'
    },
    ownerArtworkId: asset.artworkId
  };
});
const releaseAssetById = new Map(releaseArtworkAssetRows.map(asset => [asset.id, asset]));
const pendingPreviewContent = Object.fromEntries(Object.entries(PREVIEW_ARTWORK_CONTENT).filter(([id]) => !RELEASED_CANDIDATE_ARTWORKS[id]));
const pendingPreviewOriginalAssetRows = PREVIEW_ORIGINAL_ASSETS.filter(asset => !RELEASED_CANDIDATE_ARTWORKS[asset.artworkId]).map(asset => ({ ...asset, ownerArtworkId: asset.artworkId }));
const previewOriginalAssetRows = pendingPreviewOriginalAssetRows;
const priorOriginalAssetByArtworkId = new Map([...artworkAssets, ...releaseArtworkAssetRows].map(asset => [asset.ownerArtworkId, asset]));
const v100OriginalAssetByArtworkId = new Map(V100_ORIGINAL_ASSETS.map(asset => [asset.id.replace(/^asset:/, '').replace(/:original$/, ''), asset]));
const v100ArtworkById = new Map(V100_ARTWORK_ROWS.map(row => [row.id, row]));
if (V100_ARTWORK_ROWS.length !== 44 || new Set(V100_ARTWORK_ROWS.map(row => row.id)).size !== 44) throw new Error('The frozen v100 approval must bind 44 unique Artwork identities.');
if (V100_ADDITIONAL_CONTENT && Object.keys(V100_ADDITIONAL_CONTENT).length !== 20) throw new Error('The v100 integration must add exactly 20 new Artwork content rows.');
const makeV100Approval = (row, asset) => ({
  status: 'approved', record: V100_APPROVAL_RECORD, sourceSnapshot: V100_APPROVAL_RECORD,
  sourceId: V100_APPROVAL_ID, approvalId: V100_APPROVAL_ID, localRevision: 100,
  scope: `scope.artworks[${row.approvalScopeIndex}].original`, artworkId: row.id,
  assetSha256: asset.sha256, byteSize: asset.byteSize, version: row.version,
  templateId: row.template.id, templateVersion: row.template.version,
  reviewManifest: row.template.reviewManifest, reviewManifestSha256: row.template.reviewManifestSha256,
  recipeSetSha256: row.template.recipeSetSha256,
  approvalSeriesId: row.approvalSeriesId,
  note: 'Approved local v100 Artwork source; this approval records material integration and does not claim a Site deployment.'
});
const currentArtworkAssetRows = V100_ARTWORK_ROWS.map(row => {
  const prior = priorOriginalAssetByArtworkId.get(row.id);
  const source = row.change === 'existing-original-retained' ? prior : v100OriginalAssetByArtworkId.get(row.id);
  if (!source || source.version !== row.version || source.sha256 !== row.original.sha256 || source.byteSize !== row.original.byteSize) {
    throw new Error(`v100 Artwork original does not match its frozen approval: ${row.id}`);
  }
  if (source.path !== row.original.path) throw new Error(`v100 Artwork path does not match its frozen approval: ${row.id}`);
  const original = {
    ...source,
    id: row.originalAssetId,
    artworkId: row.id,
    ownerArtworkId: row.id,
    version: row.version,
    path: row.original.path,
    sourcePath: runtimeSourcePathFor({ path: row.original.path, sourcePath: row.original.sourcePath || source.sourcePath }),
    publicationStatus: 'published',
    mime: 'image/png',
    resourceKind: 'transparent-character-still',
    resourceStatus: 'verified-source',
    runtimeVerification: 'not-browser-checked',
    sourceSnapshotRef: `${V100_APPROVAL_RECORD}#scope.artworks[${row.approvalScopeIndex}].original`,
    sourceSnapshotMatch: true,
    artApproval: makeV100Approval(row, source),
    previousArtApproval: prior?.artApproval || null,
    approvalSeriesId: row.approvalSeriesId,
    templateBinding: row.template,
    approvalPackage: { path: V100_REVIEW_PACKAGE, sha256: V100_REVIEW_PACKAGE_SHA256 }
  };
  return original;
});
const currentArtworkAssetById = new Map(currentArtworkAssetRows.map(asset => [asset.id, asset]));
const currentArtworkAssetByArtworkId = new Map(currentArtworkAssetRows.map(asset => [asset.ownerArtworkId, asset]));
const historicalReplacementAssetRows = ['animal-white-rabbit-v98-candidate', 'robot-ivory-capsule-face-v98-candidate'].map(artworkId => {
  const prior = releaseAssetById.get(`asset:${artworkId}:original`);
  if (!prior) throw new Error(`Missing retained v99 source for transparent replacement ${artworkId}`);
  return {
    ...prior,
    id: `asset:${artworkId}:original:v1-historical`,
    publicationStatus: 'historical-only',
    resourceKind: 'opaque-character-still',
    sourceSnapshotMatch: false,
    ownerArtworkId: artworkId,
    historicalOnly: true,
    historyNote: 'Preserved original v1 bytes; superseded by the approved transparent v2 Artwork and not used by current Artwork or display references.'
  };
});
const historicalReplacementAssetByArtworkId = new Map(historicalReplacementAssetRows.map(asset => [asset.ownerArtworkId, asset]));
const legacyPosterAssets = POSTER_ASSETS.map(poster => {
  const sourceAsset = currentArtworkAssetByArtworkId.get(poster.artworkId) || originalAssetByArtworkId.get(poster.artworkId);
  if (!sourceAsset) throw new Error(`Poster ${poster.id} has no registered original source`);
  return {
    ...poster,
    sourcePath: runtimeSourcePathFor(poster),
    publicationStatus: 'published-derivative',
    resourceStatus: 'verified-local-derivative',
    runtimeVerification: 'not-browser-checked',
    sourceRef: `derived from ${sourceAsset.id} sha256:${sourceAsset.sha256}; ${poster.transformation}`,
    sourceAssetId: sourceAsset.id,
    sourceAssetSha256: sourceAsset.sha256,
    sourceAssetSnapshotRef: sourceAsset.sourceSnapshotRef,
    ownerArtworkId: poster.artworkId
  };
});
const displayAssetRows = RAW_DISPLAY_ASSETS.map(displayAsset => {
  const activeSource = currentArtworkAssetByArtworkId.get(displayAsset.artworkId);
  const historicalSource = historicalReplacementAssetByArtworkId.get(displayAsset.artworkId);
  const sourceAsset = activeSource?.sha256 === displayAsset.sourceAssetSha256 ? activeSource
    : historicalSource?.sha256 === displayAsset.sourceAssetSha256 ? historicalSource : null;
  if (!sourceAsset || sourceAsset.ownerArtworkId !== displayAsset.artworkId) {
    throw new Error(`Display derivative ${displayAsset.id} has no exact registered source`);
  }
  const previewOnly = displayAsset.publicationStatus === 'preview-only';
  const historicalOnly = sourceAsset.publicationStatus === 'historical-only';
  return {
    ...displayAsset,
    sourcePath: runtimeSourcePathFor(displayAsset),
    originalAssetId: sourceAsset.id,
    publicationStatus: historicalOnly ? 'historical-only' : previewOnly ? 'preview-only' : 'published-derivative',
    resourceStatus: 'verified-local-derivative',
    runtimeVerification: 'not-browser-checked',
    sourceRef: `derived from ${sourceAsset.id} sha256:${sourceAsset.sha256}; ${displayAsset.transformation}`,
    derivedFrom: sourceAsset.id,
    sourceAssetId: sourceAsset.id,
    sourceAssetSnapshotRef: sourceAsset.sourceSnapshotRef ?? null,
    ownerArtworkId: displayAsset.artworkId,
    alpha: {
      hasAlpha: sourceAsset.alpha?.hasAlpha === true,
      hasTransparency: sourceAsset.alpha?.hasTransparency === true
    },
    sourceSnapshotMatch: !previewOnly && !historicalOnly,
    ...(previewOnly ? { artApproval: {
      status: 'pending', record: null, sourceSnapshot: null, sourceId: null,
      scope: 'local-preview-only', artworkId: displayAsset.artworkId, assetSha256: displayAsset.sha256,
      note: '待用户美术确认；展示派生图不继承其它 Artwork 批准。'
    } } : { artApproval: sourceAsset.artApproval })
  };
});
const approvedDisplayAssetRows = displayAssetRows.filter(asset => asset.publicationStatus === 'published-derivative');
const historicalDisplayAssetRows = displayAssetRows.filter(asset => asset.publicationStatus === 'historical-only');
const previewDisplayAssetRows = displayAssetRows.filter(asset => asset.publicationStatus === 'preview-only');
export const DISPLAY_ASSETS = deepFreeze(displayAssetRows);
export const THUMBNAIL_ASSETS = deepFreeze(displayAssetRows.filter(asset => asset.purpose === 'poster'));
export const DETAIL_PREVIEW_ASSETS = deepFreeze(displayAssetRows.filter(asset => asset.purpose === 'detail512' || asset.purpose === 'detail1024'));
export const ASSETS = deepFreeze([...currentArtworkAssetRows, ...historicalReplacementAssetRows, ...legacyPosterAssets, ...approvedDisplayAssetRows, ...historicalDisplayAssetRows]);
export const PREVIEW_ASSETS = deepFreeze([...previewOriginalAssetRows, ...previewDisplayAssetRows].map(asset => ({
  ...asset,
  publicationStatus: 'preview-only',
  resourceKind: asset.resourceKind || (asset.alpha?.hasTransparency ? 'transparent-character-still' : 'opaque-character-still'),
  resourceStatus: 'verified-local-source',
  runtimeVerification: 'not-browser-checked',
  sourceSnapshotMatch: false,
  artApproval: {
    status: 'pending', record: null, sourceSnapshot: null, sourceId: null,
    scope: 'local-preview-only', artworkId: asset.artworkId, assetSha256: asset.sha256,
    note: '待用户美术确认；可供本地检查，不继承已有作品批准。'
  },
  ownerArtworkId: asset.ownerArtworkId || asset.artworkId
})));

const assetById = new Map(ASSETS.map(asset => [asset.id, asset]));
const previewAssetById = new Map(PREVIEW_ASSETS.map(asset => [asset.id, asset]));
const allAssetById = new Map([...ASSETS, ...PREVIEW_ASSETS].map(asset => [asset.id, asset]));
const assetByPath = new Map([...ASSETS, ...PREVIEW_ASSETS].filter(asset => asset.path).map(asset => [asset.path, asset]));

const promptRows = [
  ['candidate-dots-20261005', '蓝色短绒圆球形 Dots，正面有一对黑色椭圆眼睛，佩戴黑色头带和紫色耳罩的包耳式耳机；不加嘴、手脚或其它配饰。保持单体居中、透明背景。', 'A blue short-pile plush orb-shaped Dots character, front-facing with two black oval eyes and over-ear headphones with a black headband and violet ear cups. Add no mouth, limbs, or other accessories. Keep the single character centered on a transparent background.'],
  ['candidate-grok-20261005', '紫色柔和圆球形 Grok Bot，右上区域有两枚成对、平行倾斜的白色胶囊眼；无嘴、无肢体、无配饰。保持圆润软几何外形和透明背景。', 'A purple soft geometric orb-shaped Grok Bot with a pair of parallel, slanted white capsule eyes toward the upper-right area. No mouth, limbs, or accessories. Preserve the rounded soft geometry on a transparent background.'],
  ['candidate-meta-muse-20261005', '奶油色包覆式 Meta Muse，暖桃色内嵌脸面，深色圆眼和轻柔微笑，短圆手臂与双脚自然下垂。保持完整包覆轮廓、正面静态站姿和透明背景。', 'A cream hooded Meta Muse with a warm peach inset face, dark round eyes, a gentle smile, short rounded arms, and small feet. Preserve the continuous wrapped silhouette in a front-facing still standing pose on a transparent background.'],
  ['candidate-humans-20261005', '原创栗发 Q 版人物，细致分层的栗色头发、青绿色针织上衣、米白短裤和浅色运动鞋；双手在身前自然交握，表情温和。保持完整人物、正面站姿和透明背景。', 'An original chibi person with layered chestnut hair, a teal knit sweater, ivory shorts, and light sneakers. Rest both hands together naturally in front with a gentle expression. Show the complete person in a front-facing standing pose on a transparent background.'],
  ['candidate-animals-20261005', '原创暖橙柴犬，立起的三角耳、清楚的茶白口鼻与胸腹色块、四爪坐姿和卷起的尾巴；表情温和。保持物种结构和透明背景。', 'An original warm-orange Shiba Inu with upright triangular ears, a distinct cream muzzle and chest, a seated four-paw pose, and a curled tail. Keep a gentle expression and clear canine features on a transparent background.'],
  ['dots-rose-glasses', '莓粉色短绒圆球形 Dots，佩戴透明粉色圆框眼镜，眼镜后的黑色椭圆眼清晰可见；无嘴、无肢体和其它配饰。保持正面单体与透明背景。', 'A berry-pink short-pile plush orb-shaped Dots wearing clear rose-pink round glasses, with black oval eyes visible behind the lenses. No mouth, limbs, or other accessories. Keep the front-facing single character on a transparent background.'],
  ['dots-lilac-bucket', '浅薰衣草紫短绒圆球形 Dots，戴一顶黄色软布渔夫帽，黑色椭圆眼睛外露；无嘴、无肢体和其它配饰。保持正面单体与透明背景。', 'A light-lilac short-pile plush orb-shaped Dots wearing a yellow soft-fabric bucket hat, with black oval eyes visible below the brim. No mouth, limbs, or other accessories. Keep the front-facing single character on a transparent background.'],
  ['grok-green-cloud', '青绿色软云形 Grok Bot，表面平滑柔和，带一对平行倾斜的白色胶囊眼；无嘴、无肢体、无配饰。保持软几何轮廓与透明背景。', 'A vivid green soft-cloud Grok Bot with a smooth, gentle surface and a pair of parallel slanted white capsule eyes. No mouth, limbs, or accessories. Preserve the soft geometric cloud outline on a transparent background.'],
  ['grok-teal-square', '蓝绿色圆角方形 Grok Bot，带一对平行倾斜的白色胶囊眼；无嘴、无肢体、无配饰。保持柔和几何外形和透明背景。', 'A teal rounded-square Grok Bot with a pair of parallel slanted white capsule eyes. No mouth, limbs, or accessories. Preserve the soft geometric silhouette on a transparent background.'],
  ['muse-rose-flowers', '玫粉色绒面包覆式 Meta Muse，暖桃色内嵌脸面、深色圆眼和微笑；短圆手臂在胸前抱着一束白色雏菊和绿色花茎。不要把静态持花姿势描述为动画，背景透明。', 'A rose-pink plush hooded Meta Muse with a warm peach inset face, dark round eyes, and a smile. Its short rounded arms hold white daisies with green stems at the chest. Treat this as a still pose, not animation, on a transparent background.'],
  ['muse-sage-reading', '浅鼠尾草绿绒面包覆式 Meta Muse，暖桃色内嵌脸面、深色圆眼和微笑；双臂抱着一本竖直的合拢绿色书。书本是闭合的，不描述为正在阅读；背景透明。', 'A pale-sage plush hooded Meta Muse with a warm peach inset face, dark round eyes, and a smile. Both arms hold a closed green book upright. Keep the book closed and do not describe the character as reading; use a transparent background.'],
  ['human-bun-yellow', '原创 Q 版人物，栗色高丸子头和自然垂落的发丝，穿暖黄色连帽衫、米白短裤与黄白运动鞋；微笑并抬起一只手挥手问好。保持完整人物和透明背景。', 'An original chibi person with a high chestnut bun and loose face-framing strands, wearing a warm-yellow hoodie, ivory shorts, and yellow-and-white sneakers. Smile and raise one hand in a greeting wave. Show the complete person on a transparent background.'],
  ['human-blond-glasses', '原创 Q 版金发人物，短而蓬松的浅金发，佩戴透明圆框眼镜；穿浅蓝衬衣、米白针织开衫和浅蓝长裤，双手在身前自然交握并微笑。保持正面完整人物和透明背景。', 'An original chibi person with short fluffy blond hair and clear round glasses, wearing a light-blue shirt, an ivory knit cardigan, and light-blue trousers. Rest both hands together naturally in front and smile. Show the complete person on a transparent background.'],
  ['animal-white-cat', '原创奶油白猫，灰色三角耳与灰色蓬松尾巴，保留蓝色眼睛、粉色鼻头、清楚口鼻和细胡须；以四爪自然坐姿呈现，不佩戴饰物。背景透明。', 'An original cream-white cat with gray triangular ears and a fluffy gray tail. Keep blue eyes, a pink nose, a clear feline muzzle, and fine whiskers. Sit naturally on four paws with no accessories, on a transparent background.'],
  ['animal-gray-husky', '原创灰白哈士奇，三角立耳、灰白脸部面罩、深色鼻头和蓬松卷尾清楚可辨；以四爪自然坐姿呈现，不佩戴饰物。背景透明。', 'An original gray-and-white Husky with triangular upright ears, a distinct gray-and-white facial mask, a dark nose, and a fluffy curled tail. Sit naturally on four paws with no accessories, on a transparent background.']
];

const approvedCandidatePromptRows = PREVIEW_PROMPT_ROWS.filter(([artworkId]) => RELEASED_CANDIDATE_ARTWORKS[artworkId]);
const pendingCandidatePromptRows = PREVIEW_PROMPT_ROWS.filter(([artworkId]) => !RELEASED_CANDIDATE_ARTWORKS[artworkId]);
const currentV99PromptRows = approvedCandidatePromptRows.filter(([artworkId]) => !['animal-white-rabbit-v98-candidate', 'robot-ivory-capsule-face-v98-candidate'].includes(artworkId));
export const PROMPTS = deepFreeze([...promptRows, ...currentV99PromptRows, ...V100_PROMPT_ROWS].flatMap(([artworkId, zh, en]) => [
  { id: `prompt:${artworkId}:zh-image`, artworkId, language: 'zh', target: 'image', text: zh, source: 'maintainer-authored-from-verified-artwork-facts', revision: '1' },
  { id: `prompt:${artworkId}:en-image`, artworkId, language: 'en', target: 'image', text: en, source: 'maintainer-authored-from-verified-artwork-facts', revision: '1' }
]));
export const PREVIEW_PROMPTS = deepFreeze(pendingCandidatePromptRows.flatMap(([artworkId, zh, en]) => [
  { id: `prompt:${artworkId}:zh-image`, artworkId, language: 'zh', target: 'image', text: zh, source: 'maintainer-authored-from-pending-preview-facts', revision: '1', status: 'pending-review' },
  { id: `prompt:${artworkId}:en-image`, artworkId, language: 'en', target: 'image', text: en, source: 'maintainer-authored-from-pending-preview-facts', revision: '1', status: 'pending-review' }
]));
export const ALL_PROMPTS = deepFreeze([...PROMPTS, ...PREVIEW_PROMPTS]);

const fact = (id, label, state = 'known') => ({ id, label, value: label, state });
const visualFacts = {
  'candidate-dots-20261005': [fact('style:dots', 'Dots'), fact('object-type:orb-character', '圆球角色'), fact('shape:sphere', '圆球形'), fact('accessory:headphones', '包耳式耳机'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:blue', '蓝色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'candidate-grok-20261005': [fact('style:grok', 'Grok Bot'), fact('object-type:orb-character', '圆球角色'), fact('shape:sphere', '圆球形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:purple', '紫色'), fact('material:soft-matte', '柔和哑光质感'), fact('usage:transparent-character', '透明角色图')],
  'candidate-meta-muse-20261005': [fact('style:meta-muse', 'Meta Muse'), fact('object-type:hooded-mascot', '包覆式角色'), fact('shape:hooded', '包覆式轮廓'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:standing', '正面站姿'), fact('expression:smile', '轻柔微笑'), fact('background:transparent', '透明背景'), fact('color:cream', '奶油色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'candidate-humans-20261005': [fact('style:humans', '原创人物'), fact('object-type:person', '人物'), fact('shape:chibi-person', '精致 Q 版人物'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:standing-hands-together', '站立、双手交握'), fact('expression:gentle-smile', '温和微笑'), fact('background:transparent', '透明背景'), fact('color:teal', '青绿色'), fact('material:knit-fabric', '针织衣料'), fact('usage:transparent-character', '透明角色图')],
  'candidate-animals-20261005': [fact('style:animals', '原创动物'), fact('object-type:dog', '犬类'), fact('shape:shiba', '柴犬外形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:sitting', '坐姿'), fact('expression:gentle-smile', '温和微笑'), fact('background:transparent', '透明背景'), fact('color:orange', '暖橙色'), fact('material:short-fur', '短绒毛质感'), fact('usage:transparent-character', '透明角色图')],
  'dots-rose-glasses': [fact('style:dots', 'Dots'), fact('object-type:orb-character', '圆球角色'), fact('shape:sphere', '圆球形'), fact('accessory:round-glasses', '透明圆框眼镜'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:pink', '莓粉色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'dots-lilac-bucket': [fact('style:dots', 'Dots'), fact('object-type:orb-character', '圆球角色'), fact('shape:sphere', '圆球形'), fact('accessory:bucket-hat', '黄色渔夫帽'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:lilac', '浅紫色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'grok-green-cloud': [fact('style:grok', 'Grok Bot'), fact('object-type:soft-geometry', '柔和几何角色'), fact('shape:cloud', '云形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:green', '青绿色'), fact('material:soft-matte', '柔和哑光质感'), fact('usage:transparent-character', '透明角色图')],
  'grok-teal-square': [fact('style:grok', 'Grok Bot'), fact('object-type:soft-geometry', '柔和几何角色'), fact('shape:rounded-square', '圆角方形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:teal', '蓝绿色'), fact('material:soft-matte', '柔和哑光质感'), fact('usage:transparent-character', '透明角色图')],
  'muse-rose-flowers': [fact('style:meta-muse', 'Meta Muse'), fact('object-type:hooded-mascot', '包覆式角色'), fact('shape:hooded', '包覆式轮廓'), fact('accessory:none', '无配饰', 'none'), fact('prop:flowers', '白色雏菊花束'), fact('action:holding-flowers', '双手抱花'), fact('expression:smile', '微笑'), fact('background:transparent', '透明背景'), fact('color:pink', '玫粉色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'muse-sage-reading': [fact('style:meta-muse', 'Meta Muse'), fact('object-type:hooded-mascot', '包覆式角色'), fact('shape:hooded', '包覆式轮廓'), fact('accessory:none', '无配饰', 'none'), fact('prop:closed-book', '合拢的绿色书'), fact('action:holding-book', '双手抱书'), fact('expression:smile', '微笑'), fact('background:transparent', '透明背景'), fact('color:sage', '浅鼠尾草绿'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'human-bun-yellow': [fact('style:humans', '原创人物'), fact('object-type:person', '人物'), fact('shape:chibi-person', '精致 Q 版人物'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:waving', '挥手问好'), fact('expression:gentle-smile', '温和微笑'), fact('background:transparent', '透明背景'), fact('color:yellow', '暖黄色'), fact('material:soft-fabric', '柔软衣料'), fact('usage:transparent-character', '透明角色图')],
  'human-blond-glasses': [fact('style:humans', '原创人物'), fact('object-type:person', '人物'), fact('shape:chibi-person', '精致 Q 版人物'), fact('accessory:round-glasses', '透明圆框眼镜'), fact('prop:none', '无道具', 'none'), fact('action:standing-hands-together', '站立、双手交握'), fact('expression:gentle-smile', '温和微笑'), fact('background:transparent', '透明背景'), fact('color:blond', '浅金色'), fact('material:knit-fabric', '针织衣料'), fact('usage:transparent-character', '透明角色图')],
  'animal-white-cat': [fact('style:animals', '原创动物'), fact('object-type:cat', '猫'), fact('shape:cat', '猫形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:sitting', '坐姿'), fact('expression:gentle-smile', '温和表情'), fact('background:transparent', '透明背景'), fact('color:white', '奶油白'), fact('material:short-fur', '短绒毛质感'), fact('usage:transparent-character', '透明角色图')],
  'animal-gray-husky': [fact('style:animals', '原创动物'), fact('object-type:dog', '犬类'), fact('shape:husky', '哈士奇外形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:sitting', '坐姿'), fact('expression:gentle-smile', '温和表情'), fact('background:transparent', '透明背景'), fact('color:gray', '灰白色'), fact('material:short-fur', '短绒毛质感'), fact('usage:transparent-character', '透明角色图')]
};

// These are visible facts in the registered PNGs. Search dimensions remain
// atomic so the gallery can index every source-verified fact.
const categoryFacts = {
  'candidate-dots-20261005': [
    fact('facial-features:black-oval-eyes', '一对黑色椭圆眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:over-ear-headphones', '包耳式耳机'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'candidate-grok-20261005': [
    fact('facial-features:white-capsule-eyes', '一对倾斜白色胶囊眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'candidate-meta-muse-20261005': [
    fact('facial-features:inset-peach-face', '内嵌暖桃色脸面'), fact('facial-features:dark-round-eyes', '深色圆眼'), fact('facial-features:soft-smile', '轻柔微笑'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'candidate-humans-20261005': [
    fact('facial-features:large-brown-eyes', '大而清晰的棕色眼睛'), fact('facial-features:small-nose', '小巧鼻子'), fact('facial-features:gentle-smile', '温和微笑'),
    fact('clothing:teal-knit-top', '青绿色针织上衣'), fact('clothing:ivory-shorts', '米白短裤'), fact('clothing:light-sneakers', '浅色运动鞋'),
    fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'candidate-animals-20261005': [
    fact('facial-features:brown-eyes', '棕色眼睛'), fact('facial-features:black-nose', '黑色鼻头'), fact('facial-features:cream-muzzle', '茶白口鼻'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'dots-rose-glasses': [
    fact('facial-features:black-oval-eyes', '一对黑色椭圆眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:round-glasses', '透明圆框眼镜'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'dots-lilac-bucket': [
    fact('facial-features:black-oval-eyes', '一对黑色椭圆眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:yellow-bucket-hat', '黄色软布渔夫帽'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'grok-green-cloud': [
    fact('facial-features:white-capsule-eyes', '一对倾斜白色胶囊眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'grok-teal-square': [
    fact('facial-features:white-capsule-eyes', '一对倾斜白色胶囊眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'muse-rose-flowers': [
    fact('facial-features:inset-peach-face', '内嵌暖桃色脸面'), fact('facial-features:dark-round-eyes', '深色圆眼'), fact('facial-features:soft-smile', '轻柔微笑'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'muse-sage-reading': [
    fact('facial-features:inset-peach-face', '内嵌暖桃色脸面'), fact('facial-features:dark-round-eyes', '深色圆眼'), fact('facial-features:soft-smile', '轻柔微笑'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'human-bun-yellow': [
    fact('facial-features:large-brown-eyes', '大而清晰的棕色眼睛'), fact('facial-features:small-nose', '小巧鼻子'), fact('facial-features:gentle-smile', '温和微笑'),
    fact('clothing:yellow-hoodie', '暖黄色连帽衫'), fact('clothing:ivory-shorts', '米白短裤'), fact('clothing:yellow-white-sneakers', '黄白运动鞋'),
    fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'human-blond-glasses': [
    fact('facial-features:large-brown-eyes', '大而清晰的棕色眼睛'), fact('facial-features:small-nose', '小巧鼻子'), fact('facial-features:gentle-smile', '温和微笑'),
    fact('clothing:light-blue-shirt', '浅蓝衬衣'), fact('clothing:ivory-knit-cardigan', '米白针织开衫'), fact('clothing:light-blue-trousers', '浅蓝长裤'), fact('clothing:ivory-sneakers', '米白运动鞋'),
    fact('head-accessory:round-glasses', '透明圆框眼镜'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'animal-white-cat': [
    fact('facial-features:blue-eyes', '蓝色眼睛'), fact('facial-features:pink-nose', '粉色鼻头'), fact('facial-features:feline-muzzle', '清楚的猫科口鼻'), fact('facial-features:whiskers', '细胡须'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'animal-gray-husky': [
    fact('facial-features:brown-eyes', '棕色眼睛'), fact('facial-features:dark-nose', '深色鼻头'), fact('facial-features:husky-mask', '灰白面部面罩'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ]
};
for (const [artworkId, facts] of Object.entries(categoryFacts)) visualFacts[artworkId].push(...facts);

const approvalIds = new Set(V100_ARTWORK_ROWS.map(row => row.id));

const thumbnailAssetByArtworkId = new Map(THUMBNAIL_ASSETS.filter(asset => asset.publicationStatus === 'published-derivative').map(asset => [asset.artworkId, asset]));
const legacyPosterAssetByArtworkId = new Map(legacyPosterAssets.map(asset => [asset.artworkId, asset]));
const detailAssetByKey = new Map(DETAIL_PREVIEW_ASSETS.filter(asset => asset.publicationStatus === 'published-derivative').map(asset => [`${asset.artworkId}:${asset.purpose}`, asset]));
const characterById = new Map(CHARACTER_IDENTITIES.map(character => [character.id, character]));
const artworkAsset = currentArtworkAssetByArtworkId;

const CORE_FACT_DIMENSIONS = deepFreeze({
  characterStyle: ['style'],
  appearance: ['object-type', 'shape'],
  facialFeatures: ['facial-features'],
  colorMaterial: ['color', 'material'],
  clothing: ['clothing'],
  headAccessory: ['head-accessory'],
  bodyAccessory: ['body-accessory'],
  prop: ['prop']
});
function coreFactsFor(features) {
  return Object.fromEntries(Object.entries(CORE_FACT_DIMENSIONS).map(([category, dimensions]) => {
    const values = dimensions.flatMap(dimension => {
      const feature = features[dimension];
      if (!feature) return [];
      return (feature.ids || [feature.id]).filter(Boolean).map(id => ({ id, label: feature.labelsById?.[id] || feature.label, state: feature.state }));
    });
    return [category, values];
  }));
}

export const ARTWORKS = deepFreeze([...approvalIds].map(id => {
  const content = V100_CONTENT_BY_ID[id];
  if (!content) throw new Error(`Missing localized static content for ${id}`);
  const approvalRow = v100ArtworkById.get(id);
  if (!approvalRow || content.seriesId !== approvalRow.seriesId) throw new Error(`v100 Artwork content does not match its approved series: ${id}`);
  const legacyText = LEGACY_ARTWORK_TEXT[id];
  const title = content.titleByLanguage['zh-CN'];
  const description = legacyText?.description || content.descriptionByLanguage['zh-CN'];
  const character = characterById.get(content.characterId);
  const asset = artworkAsset.get(id);
  const poster = thumbnailAssetByArtworkId.get(id);
  const poster512 = legacyPosterAssetByArtworkId.get(id);
  const detail512 = detailAssetByKey.get(`${id}:detail512`);
  const detail1024 = detailAssetByKey.get(`${id}:detail1024`);
  if (!asset || !poster || !detail512 || !detail1024 || !character) throw new Error(`Artwork ${id} is missing registered identity or display resources`);
  const facts = visualFacts[id] || content.facts.map(item => ({
    id: item.id,
    label: item.labelByLanguage['zh-CN'],
    labelByLanguage: item.labelByLanguage,
    state: item.state || 'known'
  }));
  const groupedFacts = new Map();
  for (const item of facts) {
    const dimension = item.id.split(':', 1)[0];
    const group = groupedFacts.get(dimension) || { dimension, facts: [] };
    group.facts.push(item);
    groupedFacts.set(dimension, group);
  }
  const features = Object.fromEntries([...groupedFacts].map(([dimension, group]) => {
    const ids = group.facts.map(item => item.id);
    const states = new Set(group.facts.map(item => item.state));
    const state = states.has('unknown') ? 'unknown'
      : states.has('known') ? 'known'
        : states.has('none') ? 'none' : 'not-applicable';
    const labelsById = Object.fromEntries(group.facts.map(item => [item.id, item.label]));
    const labelsByLanguage = Object.fromEntries(group.facts.map(item => [item.id, item.labelByLanguage || { en: item.label, 'zh-CN': item.label }]));
    const label = group.facts.map(item => item.label).join(' · ');
    return [dimension, { id: ids[0], ids, labelsById, labelsByLanguage, label, value: label, state }];
  }));
  return {
    id,
    title,
    description,
    source: {
      id: content.sourceId || asset.id,
      kind: 'generated-original-artwork',
      registrationRef: asset.sourcePath || asset.path,
      promptRef: content.sourcePromptRef || null,
      sourceSnapshot: V100_APPROVAL_RECORD,
      sourceId: V100_APPROVAL_ID
    },
    status: 'published',
    publicationStatus: 'published',
    characterId: content.characterId,
    characterLabelByLanguage: character.labelByLanguage,
    tagIds: facts.map(item => item.id),
    featureIds: facts.map(item => item.id),
    features,
    featureReview: { status: 'verified-visible-facts', method: 'frozen v100 approval package, approved originals, and bilingual default facts' },
    titleByLanguage: content.titleByLanguage,
    descriptionByLanguage: content.descriptionByLanguage,
    aliases: content.aliases,
    seriesId: content.seriesId,
    approvalSeriesId: approvalRow.approvalSeriesId,
    artworkChange: approvalRow.change,
    templateBinding: approvalRow.template,
    approvalPackage: { path: V100_REVIEW_PACKAGE, sha256: V100_REVIEW_PACKAGE_SHA256 },
    ...(content.seriesLabelByLanguage ? { seriesLabelByLanguage: content.seriesLabelByLanguage } : {}),
    detailFactIds: content.detailFactIds,
    coreFacts: coreFactsFor(features),
    version: asset.version,
    assetRefs: { original: asset.id, poster: poster.id, ...(poster512 ? { poster512: poster512.id } : {}), detail512: detail512.id, detail1024: detail1024.id },
    displayPreviews: { small: detail512.id, large: detail1024.id },
    promptRefs: {
      zhImage: `prompt:${id}:zh-image`,
      enImage: `prompt:${id}:en-image`
    },
    resourceKind: asset.resourceKind,
    exportFormats: ['image/png'],
    artApproval: asset.artApproval,
    sourceSnapshotMatch: asset.sourceSnapshotMatch
  };
}));

const previewOriginalIds = new Set(pendingPreviewOriginalAssetRows.map(asset => asset.id));
const previewAssetByArtworkId = new Map(PREVIEW_ASSETS.filter(asset => previewOriginalIds.has(asset.id)).map(asset => [asset.ownerArtworkId, asset]));
const previewThumbnailAssetByArtworkId = new Map(previewDisplayAssetRows.filter(asset => asset.purpose === 'poster').map(asset => [asset.ownerArtworkId, asset]));
const previewDetailAssetByKey = new Map(previewDisplayAssetRows.filter(asset => asset.purpose === 'detail512' || asset.purpose === 'detail1024').map(asset => [`${asset.ownerArtworkId}:${asset.purpose}`, asset]));
export const PREVIEW_ARTWORKS = deepFreeze(Object.entries(pendingPreviewContent).map(([id, content]) => {
  const asset = previewAssetByArtworkId.get(id);
  const character = characterById.get(content.characterId);
  const poster = previewThumbnailAssetByArtworkId.get(id);
  const detail512 = previewDetailAssetByKey.get(`${id}:detail512`);
  const detail1024 = previewDetailAssetByKey.get(`${id}:detail1024`);
  if (!asset || !character || !poster || !detail512 || !detail1024 || content.originalAssetId !== asset.id) throw new Error(`Preview Artwork ${id} is missing its bound identity or display assets`);
  const facts = content.facts.map(item => ({
    id: item.id,
    label: item.labelByLanguage['zh-CN'],
    value: item.labelByLanguage['zh-CN'],
    labelByLanguage: item.labelByLanguage,
    state: 'known'
  }));
  const groupedFacts = new Map();
  for (const item of facts) {
    const dimension = item.id.split(':', 1)[0];
    const group = groupedFacts.get(dimension) || { dimension, facts: [] };
    group.facts.push(item);
    groupedFacts.set(dimension, group);
  }
  const features = Object.fromEntries([...groupedFacts].map(([dimension, group]) => {
    const ids = group.facts.map(item => item.id);
    const labelsById = Object.fromEntries(group.facts.map(item => [item.id, item.label]));
    const labelsByLanguage = Object.fromEntries(group.facts.map(item => [item.id, item.labelByLanguage]));
    const label = group.facts.map(item => item.label).join(' · ');
    return [dimension, { id: ids[0], ids, labelsById, labelsByLanguage, label, value: label, state: 'known' }];
  }));
  return {
    id,
    title: content.titleByLanguage['zh-CN'],
    description: content.descriptionByLanguage['zh-CN'],
    source: { id: content.sourceId, kind: 'generated-original-artwork-candidate', registrationRef: content.sourcePath, promptRef: content.sourcePromptRef || null },
    status: 'pending-review',
    publicationStatus: 'preview-only',
    reviewStatus: 'pending-user-art-approval',
    previewOnly: true,
    characterId: content.characterId,
    characterLabelByLanguage: character.labelByLanguage,
    tagIds: facts.map(item => item.id),
    featureIds: facts.map(item => item.id),
    features,
    featureReview: { status: 'pending-visual-review', method: 'local preview; no user approval recorded' },
    titleByLanguage: content.titleByLanguage,
    descriptionByLanguage: content.descriptionByLanguage,
    aliases: content.aliases,
    seriesId: content.seriesId,
    ...(content.seriesLabelByLanguage ? { seriesLabelByLanguage: content.seriesLabelByLanguage } : {}),
    detailFactIds: content.detailFactIds,
    coreFacts: coreFactsFor(features),
    version: asset.version,
    assetRefs: { original: asset.id, poster: poster.id, detail512: detail512.id, detail1024: detail1024.id },
    displayPreviews: { small: detail512.id, large: detail1024.id },
    promptRefs: { zhImage: `prompt:${id}:zh-image`, enImage: `prompt:${id}:en-image` },
    resourceKind: asset.resourceKind,
    artApproval: asset.artApproval,
    sourceSnapshotMatch: false
  };
}));

const artworkById = new Map(ARTWORKS.map(artwork => [artwork.id, artwork]));
const previewArtworkById = new Map(PREVIEW_ARTWORKS.map(artwork => [artwork.id, artwork]));
const promptById = new Map(ALL_PROMPTS.map(prompt => [prompt.id, prompt]));

export const DISPLAY_DERIVATIVES = deepFreeze([...approvedDisplayAssetRows, ...previewDisplayAssetRows]);

export function getArtwork(id, catalog) {
  if (typeof id !== 'string') return null;
  if (arguments.length < 2) return artworkById.get(id) ?? previewArtworkById.get(id) ?? null;
  if (catalog === ARTWORKS) return artworkById.get(id) ?? null;
  return Array.isArray(catalog) ? catalog.find(artwork => artwork?.id === id) ?? null : null;
}

function assetIdFromRef(value) {
  if (typeof value === 'string') return value.startsWith('asset:') ? value : `asset:${value}`;
  if (value && typeof value === 'object' && typeof value.id === 'string') return value.id.startsWith('asset:') ? value.id : `asset:${value.id}`;
  return null;
}

export function getAsset(idOrRef) {
  if (typeof idOrRef === 'string') return allAssetById.get(assetIdFromRef(idOrRef)) ?? null;
  if (!idOrRef || typeof idOrRef !== 'object') return null;
  const registered = allAssetById.get(assetIdFromRef(idOrRef));
  if (!registered) return null;
  const bindingFields = ['version', 'path', 'sha256', 'mime', 'byteSize', 'width', 'height'];
  if (bindingFields.some(field => idOrRef[field] !== registered[field])) return null;
  return registered;
}

/** Resolve an exact registered Prompt reference, including local-review prompts. */
export function getPrompt(idOrRecord) {
  const id = typeof idOrRecord === 'string' ? idOrRecord : idOrRecord?.id;
  const registered = promptById.get(id);
  if (!registered) return null;
  if (idOrRecord && typeof idOrRecord === 'object') {
    const fields = ['artworkId', 'language', 'target', 'revision', 'text'];
    if (fields.some(field => idOrRecord[field] !== registered[field])) return null;
  }
  return registered;
}

function promptForArtwork(artwork, language = 'zh', target = 'image', prompts = PROMPTS) {
  if (!artwork || target !== 'image') return null;
  const requested = language === 'en' ? 'enImage' : 'zhImage';
  const alternate = requested === 'enImage' ? 'zhImage' : 'enImage';
  const ids = artwork.promptRefs || {};
  const promptRows = Array.isArray(prompts) ? prompts : [];
  const prompt = promptRows.find(item => item.id === ids[requested]) ?? promptRows.find(item => item.id === ids[alternate]) ?? null;
  return prompt && prompt.artworkId === artwork.id && prompt.target === target ? prompt : null;
}

/** Apply the publication contract against the production manifest or an isolated fixture context. */
export function validateArtwork(artwork, context = {}) {
  if (!artwork || typeof artwork !== 'object') return false;
  const lookupAsset = typeof context.getAsset === 'function' ? context.getAsset : getAsset;
  const prompts = Array.isArray(context.prompts) ? context.prompts : PROMPTS;
  const characterIdentities = Array.isArray(context.characterIdentities) ? context.characterIdentities : CHARACTER_IDENTITIES;
  if ((artwork.publicationStatus ?? artwork.status) !== 'published') return false;
  if (artwork.featureReview?.status !== 'verified-visible-facts') return false;
  if (artwork.sourceSnapshotMatch !== true || !artwork.source?.id || !artwork.source?.kind || !artwork.source?.sourceSnapshot) return false;
  const character = characterIdentities.find(item => item.id === artwork.characterId);
  if (!character || character.seriesId !== artwork.seriesId) return false;
  const series = SERIES.find(item => item.id === artwork.seriesId);
  if (!series && !(artwork.seriesLabelByLanguage?.en?.trim() && artwork.seriesLabelByLanguage?.['zh-CN']?.trim())) return false;
  for (const language of ['en', 'zh-CN']) {
    if (typeof artwork.titleByLanguage?.[language] !== 'string' || !artwork.titleByLanguage[language].trim()) return false;
    if (typeof artwork.descriptionByLanguage?.[language] !== 'string' || !artwork.descriptionByLanguage[language].trim()) return false;
  }
  const asset = lookupAsset(artwork.assetRefs?.original);
  const poster = lookupAsset(artwork.assetRefs?.poster);
  const detail512 = lookupAsset(artwork.assetRefs?.detail512);
  const detail1024 = lookupAsset(artwork.assetRefs?.detail1024);
  if (!asset || !poster || poster.resourceKind !== 'gallery-poster' || poster.publicationStatus !== 'published-derivative' || poster.ownerArtworkId !== artwork.id) return false;
  if (typeof poster.path !== 'string' || !poster.path.startsWith('./assets/posters/')) return false;
  if (asset.ownerArtworkId !== artwork.id || poster.sourceAssetId !== asset.id || poster.sourceAssetSha256 !== asset.sha256) return false;
  if (!detail512 || !detail1024 || detail512.purpose !== 'detail512' || detail1024.purpose !== 'detail1024') return false;
  for (const preview of [detail512, detail1024]) {
    if (preview.ownerArtworkId !== artwork.id || preview.sourceAssetId !== asset.id || preview.sourceAssetSha256 !== asset.sha256
      || preview.publicationStatus !== 'published-derivative' || preview.downloadable !== false
      || typeof preview.path !== 'string' || !preview.path.startsWith('./assets/previews/')) return false;
  }
  const poster512 = artwork.assetRefs?.poster512 ? lookupAsset(artwork.assetRefs.poster512) : null;
  if (artwork.assetRefs?.poster512 && (!poster512 || poster512.ownerArtworkId !== artwork.id || poster512.sourceAssetId !== asset.id)) return false;
  if (artwork.displayPreviews?.small !== detail512.id || artwork.displayPreviews?.large !== detail1024.id) return false;
  if (artwork.version !== asset.version || typeof poster.version !== 'string' || !poster.version) return false;
  if (!['verified-source', 'verified-in-browser'].includes(asset.resourceStatus) || asset.resourceVerified === false || artwork.resourceVerified === false) return false;
  if (!asset.sourceSnapshotMatch) return false;
  if (artwork.artApproval?.status !== 'approved' || asset.artApproval?.status !== 'approved') return false;
  if (artwork.artApproval.assetSha256 !== asset.sha256 || asset.artApproval.assetSha256 !== asset.sha256) return false;
  const zhPrompt = prompts.find(prompt => prompt.id === artwork.promptRefs?.zhImage);
  const enPrompt = prompts.find(prompt => prompt.id === artwork.promptRefs?.enImage);
  if (!zhPrompt || zhPrompt.artworkId !== artwork.id || zhPrompt.language !== 'zh' || zhPrompt.target !== 'image') return false;
  if (!enPrompt || enPrompt.artworkId !== artwork.id || enPrompt.language !== 'en' || enPrompt.target !== 'image') return false;
  if (!Array.isArray(artwork.featureIds) || !artwork.featureIds.length) return false;
  if (!Array.isArray(artwork.tagIds) || artwork.featureIds.some(id => !artwork.tagIds.includes(id))) return false;
  if (!artwork.features || typeof artwork.features !== 'object' || Array.isArray(artwork.features)) return false;
  for (const [dimension, feature] of Object.entries(artwork.features)) {
    if (!feature || !['known', 'none', 'not-applicable'].includes(feature.state)) return false;
    if (feature.state === 'not-applicable') continue;
    if (typeof feature.id !== 'string' || !feature.id.startsWith(`${dimension}:`)) return false;
    const ids = Array.isArray(feature.ids) ? feature.ids : [feature.id];
    if (!ids.length || ids.some(id => typeof id !== 'string' || !id.startsWith(`${dimension}:`) || !artwork.featureIds.includes(id) || !artwork.tagIds.includes(id))) return false;
  }
  if (!Object.keys(artwork.features).length) return false;
  if (!artwork.artApproval.record || !artwork.artApproval.sourceSnapshot || !artwork.artApproval.sourceId) return false;
  if (artwork.artApproval.artworkId !== artwork.id || artwork.artApproval.assetSha256 !== asset.sha256 || asset.artApproval?.assetSha256 !== asset.sha256) return false;
  return true;
}

/** Validate a registered pending candidate without granting it gallery eligibility. */
export function validatePreviewArtwork(artwork, context = {}) {
  if (!artwork || typeof artwork !== 'object') return false;
  const registered = previewArtworkById.get(artwork.id);
  if (!registered || artwork.version !== registered.version || artwork.assetRefs?.original !== registered.assetRefs.original) return false;
  if (artwork.status !== 'pending-review' || artwork.publicationStatus !== 'preview-only' || artwork.reviewStatus !== 'pending-user-art-approval' || artwork.previewOnly !== true) return false;
  if (artwork.sourceSnapshotMatch !== false || artwork.artApproval?.status !== 'pending' || artwork.artApproval?.record !== null || artwork.artApproval?.sourceSnapshot !== null || artwork.artApproval?.sourceId !== null) return false;
  const lookupAsset = typeof context.getAsset === 'function' ? context.getAsset : getAsset;
  const prompts = Array.isArray(context.prompts) ? context.prompts : PREVIEW_PROMPTS;
  const asset = lookupAsset(artwork.assetRefs.original);
  const poster = lookupAsset(artwork.assetRefs?.poster);
  const detail512 = lookupAsset(artwork.assetRefs?.detail512);
  const detail1024 = lookupAsset(artwork.assetRefs?.detail1024);
  if (!asset || asset.ownerArtworkId !== artwork.id || asset.version !== artwork.version || asset.publicationStatus !== 'preview-only') return false;
  if (![poster, detail512, detail1024].every(item => item && item.ownerArtworkId === artwork.id
    && item.sourceAssetId === asset.id && item.sourceAssetSha256 === asset.sha256
    && item.publicationStatus === 'preview-only' && item.downloadable === false)) return false;
  if (poster.resourceKind !== 'gallery-poster' || detail512.purpose !== 'detail512' || detail1024.purpose !== 'detail1024') return false;
  if (artwork.displayPreviews?.small !== detail512.id || artwork.displayPreviews?.large !== detail1024.id) return false;
  if (artwork.resourceKind !== asset.resourceKind) return false;
  if (!['transparent-character-still', 'opaque-character-still'].includes(asset.resourceKind) || asset.artApproval?.status !== 'pending' || asset.artApproval?.record !== null || asset.artApproval?.sourceSnapshot !== null || asset.artApproval?.sourceId !== null) return false;
  if (asset.resourceKind === 'transparent-character-still' && (asset.alpha?.hasAlpha !== true || asset.alpha?.hasTransparency !== true)) return false;
  if (asset.resourceKind === 'opaque-character-still' && (asset.alpha?.hasAlpha !== false || asset.alpha?.hasTransparency !== false)) return false;
  if (asset.sha256 !== artwork.artApproval?.assetSha256 || asset.sha256 !== asset.artApproval?.assetSha256 || asset.sourceSnapshotMatch !== false) return false;
  for (const language of ['zh', 'en']) {
    const ref = language === 'en' ? artwork.promptRefs?.enImage : artwork.promptRefs?.zhImage;
    const prompt = prompts.find(item => item.id === ref);
    if (!prompt || prompt.artworkId !== artwork.id || prompt.language !== language || prompt.target !== 'image' || prompt.status !== 'pending-review') return false;
  }
  if (!Array.isArray(artwork.featureIds) || !artwork.featureIds.length || !Array.isArray(artwork.tagIds) || artwork.featureIds.some(id => !artwork.tagIds.includes(id))) return false;
  for (const language of ['en', 'zh-CN']) {
    if (!artwork.titleByLanguage?.[language]?.trim() || !artwork.descriptionByLanguage?.[language]?.trim()) return false;
  }
  return true;
}

export function isPreviewArtwork(artworkOrId) {
  const id = typeof artworkOrId === 'string' ? artworkOrId : artworkOrId?.id;
  const registered = previewArtworkById.get(id);
  if (!registered) return false;
  if (typeof artworkOrId === 'string') return true;
  if (!artworkOrId || typeof artworkOrId !== 'object') return false;
  return artworkOrId.version === registered.version
    && artworkOrId.assetRefs?.original === registered.assetRefs.original
    && artworkOrId.publicationStatus === 'preview-only'
    && artworkOrId.reviewStatus === 'pending-user-art-approval'
    && artworkOrId.artApproval?.status === 'pending';
}

export function canOpenArtwork(idOrRecord, version) {
  const id = typeof idOrRecord === 'string' ? idOrRecord : idOrRecord?.id;
  const artwork = typeof idOrRecord === 'string' ? getArtwork(id) : idOrRecord;
  if (!artwork || (version !== undefined && artwork.version !== version)) return false;
  if (isPreviewArtwork(artwork)) return validatePreviewArtwork(artwork);
  return validateArtwork(artwork);
}

export function isEligible(artwork) {
  return validateArtwork(artwork);
}

export function isTransparentCharacter(artwork) {
  const asset = getAsset(artwork?.assetRefs?.original);
  return isEligible(artwork) && artwork.resourceKind === 'transparent-character-still'
    && asset?.resourceKind === 'transparent-character-still' && asset.alpha?.hasAlpha === true && asset.alpha?.hasTransparency === true;
}

export function getVariants(id) {
  const artwork = getArtwork(id);
  if (!artwork?.variantGroupId) return [];
  return ARTWORKS.filter(candidate => candidate.id !== artwork.id && candidate.variantGroupId === artwork.variantGroupId && isEligible(candidate));
}

export function createSnapshot(id, context = {}) {
  const allowPreview = context.allowPreview === true;
  const catalog = Array.isArray(context.catalog) ? context.catalog : allowPreview ? [...ARTWORKS, ...PREVIEW_ARTWORKS] : ARTWORKS;
  const artwork = getArtwork(id, catalog);
  const valid = isPreviewArtwork(artwork)
    ? allowPreview && validatePreviewArtwork(artwork, context)
    : validateArtwork(artwork, context);
  if (!valid) return null;
  const lookupAsset = typeof context.getAsset === 'function' ? context.getAsset : getAsset;
  const prompts = Array.isArray(context.prompts) ? context.prompts : isPreviewArtwork(artwork) ? PREVIEW_PROMPTS : PROMPTS;
  const asset = lookupAsset(artwork.assetRefs.original);
  const prompt = promptForArtwork(artwork, 'zh', 'image', prompts);
  if (!asset || !prompt) return null;
  return deepFreeze({ artworkId: artwork.id, artwork, asset, prompt, catalogRevision: context.catalogRevision || CATALOG_REVISION });
}

export const CATALOG_INVENTORY = deepFreeze({
  catalogRevision: CATALOG_REVISION,
  approvedArtworkCount: ARTWORKS.length,
  approvedArtworkIdCount: new Set(ARTWORKS.map(artwork => artwork.id)).size,
  originalAssetCount: ASSETS.filter(asset => ['transparent-character-still', 'opaque-character-still'].includes(asset.resourceKind) && asset.publicationStatus === 'published').length,
  posterAssetCount: THUMBNAIL_ASSETS.filter(asset => asset.publicationStatus === 'published-derivative').length,
  legacyPoster512AssetCount: POSTER_ASSETS.length,
  detailPreviewAssetCount: DETAIL_PREVIEW_ASSETS.filter(asset => asset.publicationStatus === 'published-derivative').length,
  historicalOriginalAssetCount: historicalReplacementAssetRows.length,
  historicalDisplayAssetCount: historicalDisplayAssetRows.length,
  previewArtworkCount: PREVIEW_ARTWORKS.length,
  previewDerivativeAssetCount: DISPLAY_DERIVATIVES.filter(asset => asset.publicationStatus === 'preview-only').length,
  coreFactCategoryCount: Object.keys(CORE_FACT_DIMENSIONS).length,
  approvalRecord: V100_APPROVAL_RECORD,
  approvalRecordSha256: V100_APPROVAL_RECORD_SHA256,
  approvalId: V100_APPROVAL_ID,
  approvalPackage: V100_REVIEW_PACKAGE,
  approvalPackageSha256: V100_REVIEW_PACKAGE_SHA256,
  retainedHistoricalApprovalRecord: ART_APPROVAL_RECORD,
  retainedHistoricalSourceSnapshot: SOURCE_SNAPSHOT,
  retainedHistoricalSourceId: V83_SOURCE_ID,
  approvalScope: { artworks: V100_ARTWORK_ROWS.length, templates: V100_ARTWORK_ROWS.length, recipes: V100_ARTWORK_ROWS.reduce((sum, row) => sum + row.template.recipeCount, 0) },
  queriedAt: '2026-10-11T00:00:00+08:00'
});
