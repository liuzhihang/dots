import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import {
  ARTWORKS, ASSETS, CATALOG_INVENTORY, PROMPTS, TARGET_PROFILES, STYLE_IDENTITIES,
  createSnapshot, getAsset, getArtwork, getTargetProfile, getVariants, isEligible, isTransparentCharacter
} from '../dist/studio-artwork-catalog.js';
import { downloadAsset, loadAsset } from '../dist/studio-asset-loader.js';

const publishedArtworks = ARTWORKS.filter(isEligible);
assert.equal(ARTWORKS.length, 15, 'The current approved directory contains the 15 registered Artwork records.');
assert.ok(publishedArtworks.length > 0, 'The catalog includes eligible published Artwork.');
assert.equal(publishedArtworks.length, 15, 'All 15 registered works are currently published and eligible.');
assert.equal(publishedArtworks.filter(isTransparentCharacter).length, publishedArtworks.length);
assert.equal(CATALOG_INVENTORY.approvedArtworkCount, publishedArtworks.length);
assert.equal(CATALOG_INVENTORY.candidatePoseAssetCount, ASSETS.filter(asset => asset.candidateOnly).length);
assert.equal(PROMPTS.length, ARTWORKS.length * 2, 'Each Artwork has a paired zh/en image prompt.');
assert.equal(STYLE_IDENTITIES.length, 5);
assert.ok(getTargetProfile('chatgpt-work-web-custom-pet'));

for (const artwork of publishedArtworks) {
  const asset = getAsset(artwork.assetRefs.original);
  assert.ok(asset, `${artwork.id} references a registered asset`);
  assert.equal(asset.publicationStatus, 'published');
  assert.equal(typeof asset.path, 'string');
  assert.equal(artwork.artApproval.status, 'approved');
  assert.equal(artwork.artApproval.assetSha256, asset.sha256);
  assert.equal(asset.artApproval.assetSha256, asset.sha256);
  assert.equal(asset.resourceStatus, 'verified-source');
  assert.equal(asset.sourceSnapshotMatch, true);
  assert.equal(asset.alpha.hasAlpha, true);
  assert.equal(asset.alpha.hasTransparency, true);
  assert.equal(artwork.tagIds.length, artwork.featureIds.length);
  assert.ok(artwork.featureIds.every(id => artwork.tagIds.includes(id)));
  for (const [dimension, feature] of Object.entries(artwork.features)) {
    assert.ok(['known', 'none', 'not-applicable'].includes(feature.state), `${artwork.id}.${dimension} has an explicit resolved fact state`);
    assert.ok(Array.isArray(feature.ids), `${artwork.id}.${dimension} preserves atomic fact ids`);
    assert.ok(feature.labelsById && typeof feature.labelsById === 'object', `${artwork.id}.${dimension} preserves a label for each atomic fact`);
    for (const id of feature.ids) {
      assert.ok(artwork.featureIds.includes(id), `${artwork.id}.${dimension} atom ${id} is indexed`);
      assert.equal(typeof feature.labelsById[id], 'string', `${artwork.id}.${dimension} atom ${id} has its own label`);
      assert.ok(feature.labelsById[id].trim(), `${artwork.id}.${dimension} atom ${id} label is non-empty`);
    }
    if (feature.state === 'not-applicable') assert.equal(feature.ids.length, 0, `${artwork.id}.${dimension} NA does not mint a selectable tag`);
  }
  assert.ok(isEligible(artwork));
  assert.ok(isTransparentCharacter(artwork));
  const snapshot = createSnapshot(artwork.id);
  assert.equal(snapshot.artworkId, artwork.id);
  assert.equal(snapshot.asset.sha256, asset.sha256);
  assert.equal(snapshot.prompt.artworkId, artwork.id);
  assert.ok(Object.isFrozen(snapshot) && Object.isFrozen(snapshot.artwork));
  const filePath = new URL(`../dist/${asset.path.slice(2)}`, import.meta.url);
  const bytes = await readFile(filePath);
  assert.equal(bytes.byteLength, asset.byteSize, `${asset.path} byte size`);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256, `${asset.path} source hash`);
}

const poses = ASSETS.filter(asset => asset.publicationStatus === 'pending-individual-approval');
assert.ok(poses.length > 0, 'Unapproved variant resources remain represented as pending assets.');
assert.ok(poses.every(asset => asset.artApproval.status === 'pending'));
assert.ok(poses.every(asset => asset.resourceKind === 'still-variant-candidate'));
assert.ok(poses.every(asset => asset.path === null), 'Pending assets have no runtime publication path.');
assert.ok(poses.every(asset => asset.sourcePath.startsWith('historical-runtime/retired-assets/')));
assert.ok(poses.every(asset => !ARTWORKS.some(artwork => artwork.assetRefs.original === asset.id)));
assert.deepEqual(getVariants(publishedArtworks[0].id), [], 'Unapproved pose candidates are not published as variants.');
assert.equal(getArtwork('missing-artwork'), null);
assert.equal(getAsset({ ...ASSETS[0], path: './assets/elsewhere.png' }), null, 'An altered resource binding is rejected.');

const sourceSnapshot = JSON.parse(await readFile(new URL('../openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json', import.meta.url), 'utf8'));
const frozenSources = new Map(sourceSnapshot.files.map(file => [file.path, file]));
for (const asset of ASSETS.filter(asset => !asset.displayOnly)) {
  assert.equal(asset.sourceSnapshotMatch, true);
  const snapshotPath = asset.sourceSnapshotRef.split('#')[1];
  const frozen = frozenSources.get(snapshotPath);
  assert.ok(frozen, `${asset.id} points to a frozen source record`);
  const sourceBytes = await readFile(new URL(`../${asset.sourcePath}`, import.meta.url));
  assert.equal(sourceBytes.byteLength, asset.byteSize, `${asset.id} source file size`);
  assert.equal(createHash('sha256').update(sourceBytes).digest('hex'), asset.sha256, `${asset.id} source file SHA-256`);
  assert.equal(frozen.bytes, asset.byteSize, `${asset.id} frozen byte size`);
  assert.equal(frozen.sha256, asset.sha256, `${asset.id} frozen SHA-256`);
}

const revealAssets = ASSETS.filter(asset => asset.displayOnly);
assert(revealAssets.length > 0, 'Independent reveal illustrations are registered separately from complete Artwork assets.');
for (const asset of revealAssets) {
  assert.equal(asset.resourceKind, 'reveal-illustration');
  assert.equal(asset.publicationStatus, 'candidate-preview');
  assert.equal(asset.artApproval?.status || asset.artApproval, 'pending');
  assert.equal(asset.sourceSnapshotMatch === true, false, 'New illustrations cannot inherit a historical Artwork approval.');
  const bytes = await readFile(new URL(`../${asset.sourcePath}`, import.meta.url));
  assert.equal(bytes.length, asset.byteSize); assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256);
  assert.ok(asset.sourceRef && asset.width > 0 && asset.height > 0);
  assert.ok(!ARTWORKS.some(artwork => artwork.assetRefs.original === asset.id), 'Display-only assets are never full Artwork exports.');
}

// A pending asset must be rejected before any network read is attempted.
{
  const originalFetch = globalThis.fetch;
  let fetchCount = 0;
  globalThis.fetch = async () => { fetchCount += 1; throw new Error('pending assets must not fetch'); };
  try {
    for (const pose of poses) await assert.rejects(loadAsset(pose), /资源路径必须来自登记的本地 assets 目录/);
    assert.equal(fetchCount, 0, 'Pending assets are rejected before fetch.');
  } finally {
    globalThis.fetch = originalFetch;
  }
}

// Eligibility is based on traceable approval + matching source/asset evidence,
// not a global lock to the original v83 source identifier.
const alternateSourceApproval = {
  ...ARTWORKS[0],
  source: { ...ARTWORKS[0].source, id: 'verified-independent-import-1', sourceId: 'later-source-2026', sourceSnapshot: 'evidence/later-source.json' },
  artApproval: { ...ARTWORKS[0].artApproval, sourceId: 'later-source-2026', record: 'evidence/later-approval.json', sourceSnapshot: 'evidence/later-source.json' }
};
assert.equal(isEligible(alternateSourceApproval), true);
const unknownFeatureCandidate = {
  ...ARTWORKS[0],
  features: { ...ARTWORKS[0].features, accessory: { ...ARTWORKS[0].features.accessory, state: 'unknown' } }
};
assert.equal(isEligible(unknownFeatureCandidate), false, 'Unverified feature facts do not enter the published pool.');

// Browser loader contract under a deterministic fetch/decode shim: source
// bytes stay byte-identical; MIME/hash/size/decode and abort failures stop.
const firstAsset = ASSETS.find(asset => !asset.candidateOnly);
const firstAssetPath = new URL(`../dist/${firstAsset.path.slice(2)}`, import.meta.url);
const validBytes = await readFile(firstAssetPath);
const originalFetch = globalThis.fetch;
const originalBitmap = globalThis.createImageBitmap;
const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
let responseBytes = validBytes;
let responseMime = 'image/png';
let decodedWidth = firstAsset.width;
let decodedHeight = firstAsset.height;
globalThis.fetch = async () => new Response(responseBytes, { headers: { 'content-type': responseMime } });
globalThis.createImageBitmap = async () => ({ width: decodedWidth, height: decodedHeight, close() {} });
try {
  const lease = await loadAsset(firstAsset);
  assert.equal(lease.asset.resourceStatus, 'verified-in-browser');
  assert.deepEqual(Buffer.from(await lease.blob.arrayBuffer()), validBytes);
  lease.dispose();

  responseMime = 'image/jpeg';
  await assert.rejects(loadAsset(firstAsset), /MIME 与登记不一致/);
  responseMime = 'image/png';
  responseBytes = Buffer.from(validBytes);
  responseBytes[responseBytes.length - 5] ^= 1;
  await assert.rejects(loadAsset(firstAsset), /SHA-256/);
  responseBytes = validBytes;
  decodedWidth += 1;
  await assert.rejects(loadAsset(firstAsset), /解码尺寸/);
  decodedWidth = firstAsset.width;
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(loadAsset(firstAsset, { signal: controller.signal }), { name: 'AbortError' });

  const clicked = [];
  globalThis.document = {
    baseURI: 'https://studio.example/',
    body: { append() {} },
    createElement(tag) {
      assert.equal(tag, 'a');
      return { click() { clicked.push(this.download); }, remove() {}, set href(value) { this._href = value; }, get href() { return this._href; } };
    }
  };
  const downloaded = await downloadAsset(firstAsset);
  assert.deepEqual(Buffer.from(await downloaded.blob.arrayBuffer()), validBytes);
  assert.equal(clicked[0], `${firstAsset.ownerArtworkId}.png`);
  downloaded.dispose();
} finally {
  globalThis.fetch = originalFetch;
  if (originalBitmap === undefined) delete globalThis.createImageBitmap;
  else globalThis.createImageBitmap = originalBitmap;
  if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument);
  else delete globalThis.document;
}

console.log(`Artwork catalog: ${publishedArtworks.length} published works, ${poses.length} pending assets, archived/current hashes and loader byte checks verified.`);

// SVG validation uses a deterministic Image decoder shim. Actual decoding and
// painting are separately checked in the browser process/layout tests.
{
  const svgAsset = revealAssets.find(asset => asset.mime === 'image/svg+xml');
  assert(svgAsset);
  const savedFetch = globalThis.fetch, savedImage = globalThis.Image, savedDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  let bytes = await readFile(new URL(`../${svgAsset.sourcePath}`, import.meta.url));
  const original = bytes;
  globalThis.fetch = async () => new Response(bytes, {headers:{'content-type':'image/svg+xml'}});
  globalThis.Image = class {naturalWidth=svgAsset.width;naturalHeight=svgAsset.height;async decode(){}};
  globalThis.document = {baseURI:'https://studio.example/',body:{}};
  try {
    const loaded = await loadAsset(svgAsset);assert.equal(loaded.blob.type, 'image/svg+xml');loaded.dispose();
    for (const unsafe of ['<script>alert(1)</script>', '<image href="https://outside.example/image.png"/>', '<g onload="alert(1)"/>']) {
      bytes = Buffer.alloc(original.length, 32);
      bytes.write(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">${unsafe}</svg>`);
      await assert.rejects(loadAsset(svgAsset), /脚本、事件、嵌入图片或外部资源/);
    }
    bytes=original;
    await assert.rejects(downloadAsset(svgAsset), /下载必须使用作品 PNG 原图/);
  } finally {
    globalThis.fetch=savedFetch;if(savedImage===undefined)delete globalThis.Image;else globalThis.Image=savedImage;
    if(savedDocument)Object.defineProperty(globalThis,'document',savedDocument);else delete globalThis.document;
  }
}
