import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import { createPreviewLoader, normalizeTemplatePlacement, templatePlacementMatrix, transformTemplatePoint } from '../dist/studio-preview-loader.js?v=102';
import { ASSETS } from '../dist/studio-artwork-catalog.js?v=102';
import { TEMPLATE_REGISTRY, enumerateValidConfigurations, getRequiredTemplateAssets } from '../dist/studio-edit-templates.js?v=102';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const tick = async predicate => {
  for (let i = 0; i < 100; i += 1) {
    if (predicate()) return;
    await wait(2);
  }
  throw new Error('Timed out waiting for preview loader state.');
};

const templateAsset = (id, purpose, suffix) => ({
  id,
  version: 'v1',
  purpose,
  path: `./assets/templates/dots-orb-v1/${suffix}.png`,
  sha256: 'a'.repeat(64),
  byteSize: 4,
  width: 1,
  height: 1,
  mime: 'image/png',
  alpha: { hasAlpha: true, hasTransparency: true },
  status: 'pending'
});
const body = templateAsset('template:dots-orb-v1:body-neutral', 'body-neutral', 'body-neutral');
const eyes = templateAsset('template:dots-orb-v1:eyes:original', 'eyes', 'eyes-original');
// Two independently authorized Template rows may intentionally reference the
// same immutable file for separate layer roles.
const bodyMaskAlias = { ...body, id: 'template:dots-orb-v1:body-silhouette-mask', purpose: 'silhouette-mask' };
const eyesMaskAlias = { ...eyes, id: 'template:dots-orb-v1:eyes-silhouette-mask', purpose: 'silhouette-mask' };

function makeLosslessWebP({ width = 1, height = 1, alphaHint = true, extendedAlpha = null } = {}) {
  const vp8lOffset = extendedAlpha === null ? 12 : 30;
  const bytes = Buffer.alloc(vp8lOffset + 14);
  bytes.write('RIFF', 0, 'ascii');
  bytes.writeUInt32LE(bytes.length - 8, 4);
  bytes.write('WEBP', 8, 'ascii');
  if (extendedAlpha !== null) {
    bytes.write('VP8X', 12, 'ascii');
    bytes.writeUInt32LE(10, 16);
    bytes[20] = extendedAlpha ? 0x10 : 0;
    bytes.writeUIntLE(width - 1, 24, 3);
    bytes.writeUIntLE(height - 1, 27, 3);
  }
  bytes.write('VP8L', vp8lOffset, 'ascii');
  bytes.writeUInt32LE(5, vp8lOffset + 4);
  bytes[vp8lOffset + 8] = 0x2f;
  const bits = ((width - 1) & 0x3fff)
    | (((height - 1) & 0x3fff) << 14)
    | (alphaHint ? 0x10000000 : 0);
  bytes.writeUInt32LE(bits >>> 0, vp8lOffset + 9);
  return bytes;
}

function makeDelivery(source, bytes, overrides = {}) {
  return {
    source: { path: source.path, sha256: source.sha256, byteSize: source.byteSize, width: source.width, height: source.height, mime: source.mime },
    path: `./assets/delivery/${source.sha256}.webp`,
    sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
    byteSize: bytes.length,
    width: source.width,
    height: source.height,
    mime: 'image/webp',
    version: 'lossless-v1',
    pixelSha256: 'c'.repeat(64),
    alpha: { hasAlpha: true, hasTransparency: true },
    encoding: { lossless: true, exact: true },
    ...overrides
  };
}

const transformFixture = {
  ...body,
  placement: {
    canvas: [1, 1], anchor: 'canvas', offset: [0.25, -0.5],
    transform: { pivot: [0.5, 0.5], scale: [2, 0.5], rotationDegrees: 30 }
  }
};
const normalizedPlacement = normalizeTemplatePlacement(transformFixture, [1, 1]);
assert.deepEqual(normalizedPlacement.transform, { pivot: [0.5, 0.5], scale: [2, 0.5], shear: [0, 0], rotationDegrees: 30 }, 'Trusted transforms normalize into immutable renderer metadata.');
const transformMatrix = templatePlacementMatrix(transformFixture, [1, 1]);
const transformedPivot = transformTemplatePoint(0.5, 0.5, transformFixture, [1, 1]);
assert.ok(Math.abs(transformedPivot[0] - 0.75) < 1e-12 && Math.abs(transformedPivot[1]) < 1e-12, 'The affine transform rotates/scales around its pivot, then applies the registered offset.');
assert.ok(Math.abs(transformMatrix.a - Math.sqrt(3)) < 1e-12 && Math.abs(transformMatrix.d - Math.sqrt(3) / 4) < 1e-12, 'The shared Canvas matrix composes anisotropic scale and rotation consistently.');
const shearFixture = { ...transformFixture, placement: { ...transformFixture.placement, transform: { ...transformFixture.placement.transform, scale: [1, 1], shear: [0, -0.5], rotationDegrees: 0 } } };
const shearedPoint = transformTemplatePoint(0.6, 0.5, shearFixture, [1, 1]);
assert.ok(Math.abs(shearedPoint[0] - 0.85) < 1e-12 && Math.abs(shearedPoint[1] + 0.05) < 1e-12, 'The trusted affine shear maps around the pivot before applying the final offset.');
assert.throws(() => normalizeTemplatePlacement({ ...transformFixture, placement: { ...transformFixture.placement, transform: { ...transformFixture.placement.transform, scale: [0, 1] } } }, [1, 1]), error => error.code === 'template-placement-invalid', 'Malformed scale values are rejected.');
assert.throws(() => normalizeTemplatePlacement({ ...transformFixture, placement: { ...transformFixture.placement, transform: { ...transformFixture.placement.transform, pivot: [2, 0] } } }, [1, 1]), error => error.code === 'template-placement-invalid', 'Transform pivots cannot escape the source canvas.');
const anchoredFixture = {
  ...body,
  placement: { canvas: [1, 1], anchor: 'face.center', sourceAnchor: [0.25, 0.5], offset: [0.1, -0.05] }
};
const anchorPoints = { 'face.center': [0.75, 0.25] };
const anchoredPoint = transformTemplatePoint(0.25, 0.5, anchoredFixture, [1, 1], anchorPoints);
assert.ok(Math.abs(anchoredPoint[0] - 0.85) < 1e-12 && Math.abs(anchoredPoint[1] - 0.2) < 1e-12, 'Named anchors map the registered source point to the exact Template target plus offset.');
assert.throws(() => templatePlacementMatrix(anchoredFixture, [1, 1], {}), error => error.code === 'template-placement-invalid', 'A named anchor that is absent from the exact Template is rejected.');
const independentCanvasFixture = {
  ...body,
  width: 4,
  height: 2,
  placement: { canvas: [10, 10], anchor: 'face.center', sourceAnchor: [2, 1], offset: [1, 0] }
};
const independentAnchorPoint = transformTemplatePoint(2, 1, independentCanvasFixture, undefined, { 'face.center': [5, 4] });
assert.deepEqual(independentAnchorPoint, [6, 4], 'A smaller independent source canvas maps its source anchor to the registered point on the target Template canvas.');
assert.throws(() => normalizeTemplatePlacement({ ...independentCanvasFixture, placement: undefined }, [10, 10]), error => error.code === 'template-placement-invalid', 'Independent source dimensions require explicit Template placement rather than implicit top-left rendering.');

let fetchCount = 0;
const fetchUrls = [];
let decodeCount = 0;
let closeCount = 0;
const revoked = [];
const created = [];
const decodeOptions = [];
let nextUrl = 0;
const urlRef = {
  createObjectURL() { const value = `blob:preview-${++nextUrl}`; created.push(value); return value; },
  revokeObjectURL(value) { revoked.push(value); }
};
const fetchImpl = async (url, { signal } = {}) => {
  fetchCount += 1;
  fetchUrls.push(String(url));
  if (signal?.aborted) throw Object.assign(new Error('aborted'), { name: 'AbortError' });
  return new Response(new Uint8Array([1, 2, 3, 4]), { status: 200, headers: { 'content-type': 'image/png' } });
};
const createImageBitmapImpl = async (_blob, options) => {
  decodeOptions.push(options);
  decodeCount += 1;
  return { width: 1, height: 1, close() { closeCount += 1; } };
};

const loader = createPreviewLoader({
  assetRegistry: [body, bodyMaskAlias, eyes, eyesMaskAlias],
  deliveryRegistry: [],
  baseURL: 'https://dots.example/',
  fetchImpl,
  createImageBitmapImpl,
  urlRef,
  maxConcurrent: 2,
  maxDecodedBytes: 8,
  maxIdleEntries: 1
});

const [leaseA, leaseB] = await Promise.all([
  loader.acquire(body, { purpose: 'body-neutral' }),
  loader.acquire(bodyMaskAlias, { purpose: 'silhouette-mask' })
]);
assert.equal(fetchCount, 1, 'Different canonical ids and purposes for one immutable physical resource share the inflight request.');
const cachedResourceURL = new URL(fetchUrls[0]);
assert.equal(cachedResourceURL.searchParams.get('v'), body.version, 'The HTTP cache key includes the immutable resource version.');
assert.equal(cachedResourceURL.searchParams.get('sha256'), body.sha256, 'The HTTP cache key includes the exact content hash.');
assert.equal(decodeCount, 1, 'Different authorized aliases of one physical resource are decoded once.');
assert.equal(leaseA.asset, loader.getRegisteredAsset(body), 'A shared-resource lease keeps the first caller’s exact canonical asset.');
assert.equal(leaseB.asset, loader.getRegisteredAsset(bodyMaskAlias), 'A shared-resource lease keeps the second caller’s exact canonical asset and purpose.');
assert.notEqual(leaseA.asset, leaseB.asset, 'Resource deduplication does not collapse canonical layer identity.');
assert.equal(loader.stats().activeLeases, 2, 'Each consumer receives an independent lease to the shared decode.');
assert.equal(loader.stats().pendingRequests, 0, 'Resolved consumers observe a settled request counter.');
assert.match(leaseA.url, /^blob:/, 'A lease lazily creates its Blob URL only on use.');
leaseA.release();
assert.equal(loader.stats().activeLeases, 1, 'Releasing one consumer leaves the other lease active.');
leaseB.release();
const cached = await loader.acquire(bodyMaskAlias, { purpose: 'silhouette-mask' });
assert.equal(cached.asset, loader.getRegisteredAsset(bodyMaskAlias), 'A physical cache hit still returns the requesting alias’s exact canonical asset.');
assert.equal(fetchCount, 1, 'A released-but-cached physical bitmap is reused across canonical ids and purposes.');
assert.equal(decodeCount, 1, 'Cross-alias cache reuse does not decode the physical image again.');
cached.release();

const abortController = new AbortController();
const beforeAliasAbortFetches = fetchCount;
const beforeAliasAbortDecodes = decodeCount;
const sharedA = loader.acquire(eyes, { purpose: 'eyes', signal: abortController.signal });
const sharedB = loader.acquire(eyesMaskAlias, { purpose: 'silhouette-mask' });
abortController.abort();
await assert.rejects(sharedA, error => error.name === 'AbortError', 'One aborted consumer releases only its own subscription.');
const sharedLease = await sharedB;
assert.equal(sharedLease.asset, loader.getRegisteredAsset(eyesMaskAlias), 'An alias survivor receives its own canonical asset after another consumer aborts.');
assert.equal(loader.stats().activeLeases, 1, 'The surviving alias consumer still owns the shared decode.');
assert.equal(fetchCount, beforeAliasAbortFetches + 1, 'Cancelling one alias does not abort the shared physical request while another consumer remains.');
assert.equal(decodeCount, beforeAliasAbortDecodes + 1, 'The surviving alias consumer receives the one shared decode.');
sharedLease.release();

const beforeWrongPurpose = fetchCount;
await assert.rejects(loader.acquire(bodyMaskAlias, { purpose: 'body-neutral' }), error => error.code === 'template-purpose-mismatch', 'A physical cache hit cannot bypass the alias asset’s exact purpose validation.');
assert.equal(fetchCount, beforeWrongPurpose, 'An invalid purpose is rejected before joining or fetching a shared physical resource.');

const identityDisplayPath = './assets/posters/identity-shared.png';
const identityDisplayAsset = (id, overrides = {}) => ({
  id: `asset:identity:${id}`,
  version: 'v1',
  path: identityDisplayPath,
  sha256: 'a'.repeat(64),
  byteSize: 4,
  width: 1,
  height: 1,
  mime: 'image/png',
  resourceKind: 'gallery-poster',
  publicationStatus: 'published-derivative',
  downloadable: false,
  ...overrides
});
const identityBase = identityDisplayAsset('base');
const identityVariants = [
  identityBase,
  identityDisplayAsset('version', { version: 'v2' }),
  identityDisplayAsset('hash', { sha256: 'b'.repeat(64) }),
  identityDisplayAsset('mime', { mime: 'image/webp' }),
  identityDisplayAsset('bytes', { byteSize: 5 }),
  identityDisplayAsset('dimensions', { width: 2, height: 1 })
];
const identityFetchUrls = [];
let identityDecodeCount = 0;
const identityLoader = createPreviewLoader({
  assetRegistry: identityVariants,
  baseURL: 'https://dots.example/',
  fetchImpl: async url => {
    identityFetchUrls.push(String(url));
    return new Response(new Uint8Array([1, 2, 3, 4]), { status: 200, headers: { 'content-type': 'image/png' } });
  },
  createImageBitmapImpl: async () => {
    identityDecodeCount += 1;
    return { width: 1, height: 1, close() {} };
  },
  urlRef
});
const identityBaseLease = await identityLoader.acquire(identityBase, { purpose: 'detailPreview' });
identityBaseLease.release();
for (const variant of identityVariants.slice(1)) {
  const beforeFetches = identityFetchUrls.length;
  const beforeDecodes = identityDecodeCount;
  if (variant === identityVariants[1] || variant === identityVariants[2]) {
    const lease = await identityLoader.acquire(variant, { purpose: 'detailPreview' });
    assert.equal(lease.asset, identityLoader.getRegisteredAsset(variant), `${variant.id}: distinct tuple keeps its own canonical lease asset.`);
    lease.release();
    assert.equal(identityFetchUrls.length, beforeFetches + 1, `${variant.id}: a different version or hash cannot reuse another physical identity.`);
    assert.equal(identityDecodeCount, beforeDecodes + 1, `${variant.id}: a different version or hash is decoded independently.`);
  } else if (variant === identityVariants[3]) {
    await assert.rejects(identityLoader.acquire(variant, { purpose: 'detailPreview' }), error => error.code === 'mime-mismatch', 'Different MIME identity is fetched and checked independently.');
    assert.equal(identityFetchUrls.length, beforeFetches + 1, 'Different MIME cannot piggyback on the PNG cache entry.');
    assert.equal(identityDecodeCount, beforeDecodes, 'A MIME mismatch is rejected before decode.');
  } else if (variant === identityVariants[4]) {
    await assert.rejects(identityLoader.acquire(variant, { purpose: 'detailPreview' }), error => error.code === 'byte-size-mismatch', 'Different byte-size identity is fetched and checked independently.');
    assert.equal(identityFetchUrls.length, beforeFetches + 1, 'Different byte size cannot piggyback on another cache entry.');
    assert.equal(identityDecodeCount, beforeDecodes, 'A byte-size mismatch is rejected before decode.');
  } else {
    await assert.rejects(identityLoader.acquire(variant, { purpose: 'detailPreview' }), error => error.code === 'dimension-mismatch', 'Different dimensions cannot borrow another resource’s decoded bitmap.');
    assert.equal(identityFetchUrls.length, beforeFetches + 1, 'Different dimensions require a separate physical-resource request.');
    assert.equal(identityDecodeCount, beforeDecodes + 1, 'Different dimensions are decoded and independently verified.');
  }
}
identityLoader.releaseAll();
assert.equal(identityLoader.stats().cacheEntries, 0, 'Identity-isolation teardown drops every cached entry.');

assert.throws(() => loader.registerAssets([ASSETS.find(asset => asset.resourceKind === 'transparent-character-still')]), error => error.code === 'not-a-display-preview', 'Registered original Artwork bytes are excluded from display preview loads.');
await assert.rejects(loader.acquire(body, { purpose: 'eyes' }), error => error.code === 'template-purpose-mismatch', 'Template layers require their exact registered purpose.');

const cachedStats = loader.stats();
assert.equal(cachedStats.activeLeases, 0, 'All consumer leases have been returned.');
assert.equal(cachedStats.objectURLs, 0, 'LRU eviction revokes the unused Blob URL.');
assert.equal(cachedStats.bitmaps, cachedStats.cacheEntries, 'Every cached decoded entry has exactly one tracked ImageBitmap.');
assert.ok(cachedStats.cachedDecodedBytes <= cachedStats.maxDecodedBytes, 'Decoded cache remains under its byte cap.');

const loader2 = createPreviewLoader({
  assetRegistry: [body, eyes],
  deliveryRegistry: [],
  baseURL: 'https://dots.example/',
  fetchImpl,
  createImageBitmapImpl,
  urlRef,
  maxConcurrent: 1,
  maxDecodedBytes: 8,
  maxIdleEntries: 1
});
const oldLease = await loader2.acquire(body, { purpose: 'body-neutral' });
oldLease.url;
oldLease.release();
const nextLease = await loader2.acquire(eyes, { purpose: 'eyes' });
nextLease.release();
assert.equal(loader2.stats().cacheEntries, 1, 'Least-recently-used decoded entries are evicted at the idle entry limit.');
assert.ok(revoked.includes('blob:preview-2'), 'Evicting a resource revokes its lazily-created Blob URL.');

const productionManifest = JSON.parse(fs.readFileSync(new URL('../dist/assets/templates/sources.json', import.meta.url), 'utf8'));
assert.equal(TEMPLATE_REGISTRY.length, 44, 'The current registry contains all 44 approved Template definitions.');
assert.equal(productionManifest.templates.length, TEMPLATE_REGISTRY.length, 'The current source manifest is bound to the active registry, not the retained legacy profiles.');
assert.equal(productionManifest.assets.length, 309, 'The active runtime closure contains only currently referenced package tuples.');
assert.equal(productionManifest.retainedSourceAssets?.length, 6, 'Six unreferenced approved mask tuples remain outside the active runtime closure.');
const productionLoaderState = { fetchCount, decodeCount };
const productionLoader = createPreviewLoader({ assetRegistry: productionManifest.assets, requireDeliveryCoverage: true, baseURL: 'https://dots.example/', fetchImpl, createImageBitmapImpl, urlRef });
const productionDisplayLoader = createPreviewLoader({ requireDeliveryCoverage: true, baseURL: 'https://dots.example/', fetchImpl, createImageBitmapImpl, urlRef });
let requiredProductionReferences = 0;
const requiredProductionAssetIds = new Set();
const requiredProductionAssetTuples = new Set();
let legalProductionRecipes = 0;
const verifiedFilePaths = new Map();
const activePublishedPaths = new Set(productionManifest.assets.map(asset => asset.path));
for (const asset of [...productionManifest.assets, ...productionManifest.retainedSourceAssets]) {
  const publishedPath = asset.path.replace(/^\.\//, '');
  const target = new URL(`../dist/${publishedPath}`, import.meta.url);
  const targetKey = target.href;
  const previous = verifiedFilePaths.get(targetKey);
  if (previous) {
    assert.equal(previous.sha256, asset.sha256, `Shared published file keeps a single exact byte identity: ${publishedPath}`);
    assert.equal(previous.byteSize, asset.byteSize, `Shared published file keeps a single exact size: ${publishedPath}`);
    continue;
  }
  const bytes = fs.readFileSync(target);
  assert.equal(bytes.length, asset.byteSize, `Published layer size matches its immutable tuple: ${asset.id}`);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), asset.sha256, `Published layer hash matches its immutable tuple: ${asset.id}`);
  verifiedFilePaths.set(targetKey, { sha256: asset.sha256, byteSize: asset.byteSize });
}
assert.equal(activePublishedPaths.size, 302, 'All unique paths in the active 309-tuple closure are preserved.');
assert.equal(verifiedFilePaths.size, 306, 'All unique active and retained approved source files are hash-verified at their original paths.');
for (const template of TEMPLATE_REGISTRY) {
  const manifestTemplate = productionManifest.templates.find(row => row.id === template.id && row.version === template.version);
  assert.ok(manifestTemplate && manifestTemplate.status === 'approved' && manifestTemplate.engineeringStatus === 'passed' && manifestTemplate.publicEditable === true,
    `Production Template approval must match ${template.id}@${template.version}.`);
  const configurations = enumerateValidConfigurations(template);
  assert.equal(configurations.length, manifestTemplate.declaredLegalConfigurations, `Finite recipe count must match the source manifest for ${template.id}.`);
  legalProductionRecipes += configurations.length;
  for (const options of configurations) {
    for (const reference of getRequiredTemplateAssets(template, options)) {
      requiredProductionReferences += 1;
      requiredProductionAssetIds.add(reference.id);
      requiredProductionAssetTuples.add(`${reference.id}\u0000${reference.version}\u0000${reference.purpose}`);
      const registered = productionManifest.assets.find(asset => asset.id === reference.id
        && asset.version === reference.version && asset.purpose === reference.purpose);
      assert.ok(registered, `Every production layer and option thumbnail is registered: ${reference.id}`);
      assert.equal(registered.purpose, reference.purpose, `Every production asset keeps its exact purpose: ${reference.id}`);
      assert.equal(registered.owner?.templateId, template.id, `Every production layer remains owned by its exact Template: ${reference.id}`);
      assert.equal(registered.owner?.artworkId, template.artworkBinding.artworkId, `Every production layer remains bound to its exact Artwork: ${reference.id}`);
      assert.equal(registered.owner?.artworkVersion, template.artworkBinding.artworkVersion, `Every production layer remains bound to its exact Artwork version: ${reference.id}`);
      normalizeTemplatePlacement(registered, [template.canvas.width, template.canvas.height], template.anchors || null);
    }
  }
}
assert.equal(legalProductionRecipes, 540, 'All 540 approved finite recipes are declared in the current registry.');
assert.equal(requiredProductionAssetIds.size, 309, 'The active registry uses exactly 309 approved source IDs.');
assert.deepEqual([...requiredProductionAssetTuples].sort(), productionManifest.assets.map(asset => `${asset.id}\u0000${asset.version}\u0000${asset.purpose}`).sort(), 'The active manifest has every and only source tuple required by all recipes and thumbnails.');
assert.equal(productionManifest.retainedSourceAssets.some(asset => requiredProductionAssetTuples.has(`${asset.id}\u0000${asset.version}\u0000${asset.purpose}`)), false, 'Retained source tuples are never exposed to the active Template loader.');
assert.equal(new Set([...requiredProductionAssetTuples, ...productionManifest.retainedSourceAssets.map(asset => `${asset.id}\u0000${asset.version}\u0000${asset.purpose}`)]).size, 315, 'Active and retained inventories preserve all 315 package tuples.');
productionLoader.releaseAll();
productionDisplayLoader.releaseAll();
assert.equal(productionLoader.stats().cacheEntries, 0, 'Registering the production closure performs no eager image loads.');
assert.deepEqual({ fetchCount, decodeCount }, productionLoaderState, 'Registering the production closure performs no network fetch or image decode.');

const transformedLoader = createPreviewLoader({
  assetRegistry: [transformFixture],
  deliveryRegistry: [],
  baseURL: 'https://dots.example/',
  fetchImpl,
  createImageBitmapImpl,
  urlRef
});
assert.deepEqual(transformedLoader.getRegisteredAsset(transformFixture).placement.transform, { ...transformFixture.placement.transform, shear: [0, 0] }, 'The registered lease returns the frozen canonical transform.');
assert.throws(() => transformedLoader.registerAssets([{
  ...transformFixture,
  placement: { ...transformFixture.placement, offset: [0, 0] }
}]), error => error.code === 'registration-conflict', 'One asset version cannot be re-registered with a different transform or offset.');
await assert.rejects(transformedLoader.acquire({
  ...transformFixture,
  placement: { ...transformFixture.placement, transform: { ...transformFixture.placement.transform, rotationDegrees: 0, shear: [0, -0.2] } }
}, { purpose: 'body-neutral' }), error => error.code === 'unregistered-asset', 'A lease cannot reuse cached decoded bytes under a different placement than the canonical registration.');

loader.releaseAll();
loader2.releaseAll();
transformedLoader.releaseAll();
await tick(() => loader.stats().activeRequests === 0 && loader2.stats().activeRequests === 0 && identityLoader.stats().activeRequests === 0);
for (const current of [loader, loader2, transformedLoader, identityLoader]) {
  const final = current.stats();
  assert.equal(final.pendingRequests, 0, 'Teardown leaves no queued or active request.');
  assert.equal(final.activeLeases, 0, 'Teardown releases all leases.');
  assert.equal(final.cacheEntries, 0, 'Teardown clears all decoded cache entries.');
  assert.equal(final.bitmaps, 0, 'Teardown closes every cached ImageBitmap.');
  assert.equal(final.objectURLs, 0, 'Teardown revokes every cached Blob URL.');
  assert.equal(final.cachedDecodedBytes, 0, 'Teardown frees all decoded cache bytes.');
}
assert.ok(closeCount >= 2, 'Eviction and final teardown close browser image resources.');

const losslessBytes = makeLosslessWebP();
const losslessDelivery = makeDelivery(body, losslessBytes);
const deliveryFetches = [];
let deliveryDecodeCount = 0;
const deliveryDecodeOptions = [];
const deliveryDecodeBlobTypes = [];
const deliveryObjectURLBlobTypes = [];
const deliveryUrlRef = {
  createObjectURL(blob) { deliveryObjectURLBlobTypes.push(blob.type); return `blob:delivery-${deliveryObjectURLBlobTypes.length}`; },
  revokeObjectURL() {}
};
const deliveryLoader = createPreviewLoader({
  assetRegistry: [body, bodyMaskAlias],
  deliveryRegistry: [losslessDelivery],
  baseURL: 'https://dots.example/',
  fetchImpl: async url => {
    deliveryFetches.push(String(url));
    return new Response(losslessBytes, { status: 200, headers: { 'content-type': 'application/octet-stream' } });
  },
  createImageBitmapImpl: async (blob, options) => { deliveryDecodeBlobTypes.push(blob.type); deliveryDecodeOptions.push(options); deliveryDecodeCount += 1; return { width: 1, height: 1, close() {} }; },
  urlRef: deliveryUrlRef
});
const [deliveredLease, deliveredAliasLease] = await Promise.all([
  deliveryLoader.acquire(body, { purpose: body.purpose }),
  deliveryLoader.acquire(bodyMaskAlias, { purpose: bodyMaskAlias.purpose })
]);
assert.equal(deliveredLease.asset, deliveryLoader.getRegisteredAsset(body), 'Lossless delivery keeps the exact canonical PNG asset and placement on its lease.');
assert.equal(deliveredAliasLease.asset, deliveryLoader.getRegisteredAsset(bodyMaskAlias), 'An alias sharing the same derivative retains its separate canonical PNG lease identity.');
assert.notEqual(deliveredLease.asset, deliveredAliasLease.asset, 'Derived physical-resource sharing does not collapse canonical template roles.');
assert.equal(deliveryFetches.length, 1, 'Authorized aliases share a single derived WebP request.');
assert.equal(deliveryDecodeCount, 1, 'Authorized aliases share a single derived WebP decode.');
assert.deepEqual(deliveryDecodeOptions, [{ premultiplyAlpha: 'none' }], 'WebP delivery decodes without premultiplying alpha, preserving exact RGBA values.');
assert.deepEqual(deliveryDecodeBlobTypes, ['image/webp'], 'A verified generic-MIME derivative is normalized before image decode.');
assert.equal(deliveredLease.blob.type, 'image/webp', 'The physical preview lease contains the registered WebP delivery bytes.');
assert.match(deliveredLease.url, /^blob:delivery-/, 'The derived lease creates a Blob URL for its verified physical bytes.');
assert.deepEqual(deliveryObjectURLBlobTypes, ['image/webp'], 'A verified generic-MIME derivative is normalized before Blob URL creation.');
assert.equal(new URL(deliveryFetches[0]).pathname, '/assets/delivery/' + body.sha256 + '.webp', 'Only the derived WebP path is fetched after canonical source authorization.');
assert.equal(new URL(deliveryFetches[0]).searchParams.get('sha256'), losslessDelivery.sha256, 'The HTTP cache key uses the derived WebP hash.');
assert.equal(deliveryFetches.some(url => new URL(url).pathname === '/assets/templates/dots-orb-v1/body-neutral.png'), false, 'A mapped delivery never silently falls back to the source PNG.');
deliveredLease.release();
assert.equal(deliveryLoader.stats().activeLeases, 1, 'Releasing one derived consumer preserves the other alias lease.');
deliveredAliasLease.release();
deliveryLoader.releaseAll();

const unrelatedSource = { ...body, path: './assets/templates/dots-orb-v1/unrelated.png', sha256: 'b'.repeat(64) };
assert.throws(() => createPreviewLoader({
  assetRegistry: [body],
  deliveryRegistry: [makeDelivery(unrelatedSource, losslessBytes)],
  requireDeliveryCoverage: true,
  fetchImpl,
  createImageBitmapImpl
}), error => error.code === 'delivery-missing', 'Required registered sources reject an absent exact path/hash/metadata delivery mapping before use.');
const mismatchedMetadataSource = { ...body, byteSize: body.byteSize + 1 };
assert.throws(() => createPreviewLoader({
  assetRegistry: [body],
  deliveryRegistry: [makeDelivery(mismatchedMetadataSource, losslessBytes)],
  requireDeliveryCoverage: true,
  fetchImpl,
  createImageBitmapImpl
}), error => error.code === 'delivery-missing', 'A source with the correct path and hash but a different byte-size tuple cannot borrow another derivative.');

assert.throws(() => createPreviewLoader({
  assetRegistry: [],
  deliveryRegistry: [makeDelivery(body, losslessBytes, { encoding: { lossless: false, exact: true } })],
  fetchImpl,
  createImageBitmapImpl
}), error => error.code === 'invalid-delivery-asset', 'A delivery registry cannot claim a lossy encoding is lossless.');

async function rejectDerived({ delivery = losslessDelivery, bytes = losslessBytes, mime = 'image/webp', status = 200, bitmap = { width: 1, height: 1, close() {} }, code }) {
  let requests = 0;
  const requestedUrls = [];
  const current = createPreviewLoader({
    assetRegistry: [body],
    deliveryRegistry: [delivery],
    baseURL: 'https://dots.example/',
    fetchImpl: async url => {
      requests += 1;
      requestedUrls.push(String(url));
      return new Response(bytes, { status, headers: { 'content-type': mime } });
    },
    createImageBitmapImpl: async () => ({ ...bitmap, close() {} }),
    urlRef
  });
  await assert.rejects(current.acquire(body, { purpose: body.purpose }), error => error.code === code, `Mapped delivery rejects ${code} without accepting PNG fallback.`);
  assert.equal(requests, 1, `${code}: one derived request was made and no source fallback was attempted.`);
  assert.equal(new URL(requestedUrls[0]).pathname.startsWith('/assets/delivery/'), true, `${code}: the only request was for the derived path.`);
  current.releaseAll();
}

const badHashDelivery = { ...losslessDelivery, sha256: '0'.repeat(64) };
await rejectDerived({ delivery: badHashDelivery, code: 'hash-mismatch' });
await rejectDerived({ delivery: badHashDelivery, mime: 'application/octet-stream', code: 'hash-mismatch' });
await rejectDerived({ delivery: { ...losslessDelivery, byteSize: losslessDelivery.byteSize + 1 }, code: 'byte-size-mismatch' });
await rejectDerived({ delivery: losslessDelivery, mime: 'image/png', code: 'mime-mismatch' });
await rejectDerived({ delivery: losslessDelivery, mime: 'application/octet-text', code: 'mime-mismatch' });
await rejectDerived({ delivery: losslessDelivery, status: 404, code: 'http-error' });
const lossyBytes = Buffer.from(losslessBytes);
lossyBytes.write('VP8 ', 12, 'ascii');
await rejectDerived({ delivery: makeDelivery(body, lossyBytes), bytes: lossyBytes, code: 'webp-lossless-required' });
await rejectDerived({ delivery: losslessDelivery, bytes: makeLosslessWebP({ alphaHint: false }), code: 'hash-mismatch' });
await rejectDerived({ delivery: losslessDelivery, bitmap: { width: 2, height: 1 }, code: 'dimension-mismatch' });

let genericPngRequests = 0;
const strictNonDeliveryMimeLoader = createPreviewLoader({
  assetRegistry: [body],
  deliveryRegistry: [],
  baseURL: 'https://dots.example/',
  fetchImpl: async () => {
    genericPngRequests += 1;
    return new Response(new Uint8Array([1, 2, 3, 4]), { status: 200, headers: { 'content-type': 'application/octet-stream' } });
  },
  createImageBitmapImpl,
  urlRef
});
await assert.rejects(strictNonDeliveryMimeLoader.acquire(body, { purpose: body.purpose }), error => error.code === 'mime-mismatch', 'Generic MIME remains invalid for a canonical PNG source without a registered delivery derivative.');
assert.equal(genericPngRequests, 1, 'The non-delivery MIME negative fixture reaches only the canonical PNG request.');
strictNonDeliveryMimeLoader.releaseAll();

const opaquePreview = {
  id: 'asset:test-opaque-preview',
  version: 'v99',
  purpose: 'detail512',
  path: './assets/previews/test-opaque-preview-detail512-v99.png',
  sha256: 'd'.repeat(64),
  byteSize: 4,
  width: 1,
  height: 1,
  mime: 'image/png',
  resourceKind: 'display-preview',
  publicationStatus: 'preview-only',
  downloadable: false
};
const opaqueBytes = makeLosslessWebP({ alphaHint: false });
const opaqueDelivery = makeDelivery(opaquePreview, opaqueBytes, { alpha: { hasAlpha: false, hasTransparency: false } });
const opaqueLoader = createPreviewLoader({
  assetRegistry: [opaquePreview],
  deliveryRegistry: [opaqueDelivery],
  baseURL: 'https://dots.example/',
  fetchImpl: async () => new Response(opaqueBytes, { status: 200, headers: { 'content-type': 'image/webp' } }),
  createImageBitmapImpl: async () => ({ width: 1, height: 1, close() {} }),
  urlRef
});
const opaqueLease = await opaqueLoader.acquire(opaquePreview, { purpose: 'detailPreview' });
opaqueLease.release();
opaqueLoader.releaseAll();

const alphaMismatchBytes = makeLosslessWebP({ extendedAlpha: true });
const alphaMismatchDelivery = makeDelivery(body, alphaMismatchBytes, { alpha: { hasAlpha: false, hasTransparency: false } });
await rejectDerived({ delivery: alphaMismatchDelivery, bytes: alphaMismatchBytes, code: 'webp-alpha-metadata-mismatch' });

console.log('PASS lossless delivery resolves only after canonical PNG authorization and preserves canonical lease identity');
console.log('PASS source coverage, delivery MIME/size/hash, VP8L lossless signature, alpha metadata, and decoded dimensions fail closed without PNG fallback');
assert.ok(decodeOptions.length > 0 && decodeOptions.every(options => options?.premultiplyAlpha === 'none'), 'All PNG source and WebP delivery decoding uses exact unpremultiplied RGBA values.');
console.log('PASS PNG and WebP decode requests use premultiplyAlpha:none for exact pixel parity');

console.log('PASS physical-resource inflight/cache dedupe across canonical IDs and purposes, with exact per-consumer lease identity');
console.log('PASS independent cross-alias cancellation/refcounts and version/hash/MIME/byte-size/dimension cache isolation');
console.log('PASS explicit display-preview allowlist excludes original Artwork resources');
console.log('PASS bounded LRU, Blob URL revocation, and ImageBitmap teardown');
console.log('PASS manifest-owned affine placement validation, matrix math, and registration identity');
console.log('PASS named source-to-template anchors and exact anchor registration');
console.log(`PASS current manifest registers all 44 Templates and 540 recipes, with 309 active plus 6 retained immutable tuples; ${verifiedFilePaths.size} files are hash-verified and ${requiredProductionReferences} exact layer/thumbnail references remain lazy`);
console.log(`PASS tracked ${decodeCount} decodes, ${created.length} Blob URLs, ${revoked.length} revocations`);
