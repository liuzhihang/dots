import assert from 'node:assert/strict';
import { createPreviewLoader, normalizeTemplatePlacement, templatePlacementMatrix, transformTemplatePoint } from '../dist/studio-preview-loader.js?v=99';
import { ASSETS } from '../dist/studio-artwork-catalog.js?v=99';

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

let fetchCount = 0;
const fetchUrls = [];
let decodeCount = 0;
let closeCount = 0;
const revoked = [];
const created = [];
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
const createImageBitmapImpl = async () => {
  decodeCount += 1;
  return { width: 1, height: 1, close() { closeCount += 1; } };
};

const loader = createPreviewLoader({
  assetRegistry: [body, eyes],
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
  loader.acquire(body, { purpose: 'body-neutral' })
]);
assert.equal(fetchCount, 1, 'Identical inflight resource requests are deduplicated.');
const cachedResourceURL = new URL(fetchUrls[0]);
assert.equal(cachedResourceURL.searchParams.get('v'), body.version, 'The HTTP cache key includes the immutable resource version.');
assert.equal(cachedResourceURL.searchParams.get('sha256'), body.sha256, 'The HTTP cache key includes the exact content hash.');
assert.equal(decodeCount, 1, 'A deduplicated key is decoded once.');
assert.equal(loader.stats().activeLeases, 2, 'Each consumer receives its own lease.');
assert.equal(loader.stats().pendingRequests, 0, 'Resolved consumers observe a settled request counter.');
assert.match(leaseA.url, /^blob:/, 'A lease lazily creates its Blob URL only on use.');
leaseA.release();
assert.equal(loader.stats().activeLeases, 1, 'Releasing one consumer leaves the other lease active.');
leaseB.release();
const cached = await loader.acquire(body, { purpose: 'body-neutral' });
assert.equal(fetchCount, 1, 'A released-but-cached bitmap is reused.');
cached.release();

const abortController = new AbortController();
const sharedA = loader.acquire(eyes, { purpose: 'eyes', signal: abortController.signal });
const sharedB = loader.acquire(eyes, { purpose: 'eyes' });
abortController.abort();
await assert.rejects(sharedA, error => error.name === 'AbortError', 'One aborted consumer releases only its own subscription.');
const sharedLease = await sharedB;
assert.equal(loader.stats().activeLeases, 1, 'The second consumer still owns the shared decode.');
sharedLease.release();

assert.throws(() => loader.registerAssets([ASSETS.find(asset => asset.resourceKind === 'transparent-character-still')]), error => error.code === 'not-a-display-preview', 'Registered original Artwork bytes are excluded from display preview loads.');
await assert.rejects(loader.acquire(body, { purpose: 'eyes' }), error => error.code === 'template-purpose-mismatch', 'Template layers require their exact registered purpose.');

const cachedStats = loader.stats();
assert.equal(cachedStats.activeLeases, 0, 'All consumer leases have been returned.');
assert.equal(cachedStats.objectURLs, 0, 'LRU eviction revokes the unused Blob URL.');
assert.equal(cachedStats.bitmaps, cachedStats.cacheEntries, 'Every cached decoded entry has exactly one tracked ImageBitmap.');
assert.ok(cachedStats.cachedDecodedBytes <= cachedStats.maxDecodedBytes, 'Decoded cache remains under its byte cap.');

const loader2 = createPreviewLoader({
  assetRegistry: [body, eyes],
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

const transformedLoader = createPreviewLoader({
  assetRegistry: [transformFixture],
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
await tick(() => loader.stats().activeRequests === 0 && loader2.stats().activeRequests === 0);
for (const current of [loader, loader2, transformedLoader]) {
  const final = current.stats();
  assert.equal(final.pendingRequests, 0, 'Teardown leaves no queued or active request.');
  assert.equal(final.activeLeases, 0, 'Teardown releases all leases.');
  assert.equal(final.cacheEntries, 0, 'Teardown clears all decoded cache entries.');
  assert.equal(final.bitmaps, 0, 'Teardown closes every cached ImageBitmap.');
  assert.equal(final.objectURLs, 0, 'Teardown revokes every cached Blob URL.');
  assert.equal(final.cachedDecodedBytes, 0, 'Teardown frees all decoded cache bytes.');
}
assert.ok(closeCount >= 2, 'Eviction and final teardown close browser image resources.');

console.log('PASS inflight dedupe, independent leases, and decoded cache reuse');
console.log('PASS explicit display-preview allowlist excludes original Artwork resources');
console.log('PASS bounded LRU, Blob URL revocation, and ImageBitmap teardown');
console.log('PASS manifest-owned affine placement validation, matrix math, and registration identity');
console.log(`PASS tracked ${decodeCount} decodes, ${created.length} Blob URLs, ${revoked.length} revocations`);
