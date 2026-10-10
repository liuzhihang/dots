import { ASSETS, PREVIEW_ASSETS } from './studio-artwork-catalog.js?v=99';

// A single bounded loader serves approved detail covers and explicitly pending
// View-only previews by default. Template layers are absent until Edit registers
// the reviewed sources.json asset rows. Originals are never loadable here.
export const PREVIEW_LOADER_REVISION = 'preview-loader-20261010-v99';
const DEFAULT_LIMITS = Object.freeze({ maxConcurrent: 4, maxDecodedBytes: 64 * 1024 * 1024, maxIdleEntries: 16 });
const DISPLAY_PURPOSE = 'detailPreview';
const loaderModuleURL = String(import.meta.url);
const defaultBaseURL = new URL('.', loaderModuleURL);

export class PreviewLoaderError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = 'PreviewLoaderError';
    this.code = code;
    Object.assign(this, details);
  }
}

const freezePlacement = placement => Object.freeze({
  canvas: Object.freeze([...placement.canvas]),
  anchor: placement.anchor,
  offset: Object.freeze([...placement.offset]),
  transform: Object.freeze({
    pivot: Object.freeze([...placement.transform.pivot]),
    scale: Object.freeze([...placement.transform.scale]),
    shear: Object.freeze([...placement.transform.shear]),
    rotationDegrees: placement.transform.rotationDegrees
  })
});

/** Validate and normalize the fixed, manifest-owned placement of one template PNG. */
export function normalizeTemplatePlacement(asset, expectedCanvas = [asset?.width, asset?.height]) {
  const width = expectedCanvas?.[0], height = expectedCanvas?.[1];
  if (!Number.isSafeInteger(width) || width < 1 || !Number.isSafeInteger(height) || height < 1) {
    throw new PreviewLoaderError('template-placement-canvas-invalid', 'Template placement needs a positive canvas size.', { assetId: asset?.id || null });
  }
  const raw = asset?.placement;
  if (raw == null) {
    return freezePlacement({
      canvas: [width, height], anchor: 'canvas', offset: [0, 0],
      transform: { pivot: [0, 0], scale: [1, 1], shear: [0, 0], rotationDegrees: 0 }
    });
  }
  const fail = message => { throw new PreviewLoaderError('template-placement-invalid', message, { assetId: asset?.id || null }); };
  const allowedPlacementKeys = new Set(['canvas', 'anchor', 'offset', 'transform']);
  if (!raw || typeof raw !== 'object' || Array.isArray(raw) || Object.keys(raw).some(key => !allowedPlacementKeys.has(key))) {
    fail('Template placement contains unsupported fields.');
  }
  const canvas = raw.canvas;
  const offset = raw.offset;
  if (!Array.isArray(canvas) || canvas.length !== 2 || canvas[0] !== width || canvas[1] !== height
    || raw.anchor !== 'canvas'
    || !Array.isArray(offset) || offset.length !== 2 || !offset.every(Number.isFinite)
    || Math.abs(offset[0]) > width || Math.abs(offset[1]) > height) {
    fail('Template placement must use the exact canvas anchor and a bounded finite [dx,dy] offset.');
  }
  const sourceTransform = raw.transform;
  let transform = { pivot: [0, 0], scale: [1, 1], shear: [0, 0], rotationDegrees: 0 };
  if (sourceTransform != null) {
    const allowedTransformKeys = new Set(['pivot', 'scale', 'shear', 'rotationDegrees']);
    if (!sourceTransform || typeof sourceTransform !== 'object' || Array.isArray(sourceTransform)
      || Object.keys(sourceTransform).some(key => !allowedTransformKeys.has(key))) {
      fail('Template placement transform contains unsupported fields.');
    }
    const pivot = sourceTransform.pivot;
    const scale = sourceTransform.scale;
    const shear = sourceTransform.shear ?? [0, 0];
    const rotationDegrees = sourceTransform.rotationDegrees;
    if (!Array.isArray(pivot) || pivot.length !== 2 || !pivot.every(Number.isFinite)
      || pivot[0] < 0 || pivot[0] > width || pivot[1] < 0 || pivot[1] > height
      || !Array.isArray(scale) || scale.length !== 2 || !scale.every(Number.isFinite)
      || scale.some(value => value < 0.25 || value > 4)
      || !Array.isArray(shear) || shear.length !== 2 || !shear.every(Number.isFinite)
      || shear.some(value => value < -2 || value > 2)
      || !Number.isFinite(rotationDegrees) || rotationDegrees < -45 || rotationDegrees > 45) {
      fail('Template placement transform needs an in-canvas pivot, scale in [0.25,4], shear in [-2,2], and rotation in [-45,45] degrees.');
    }
    transform = { pivot: [...pivot], scale: [...scale], shear: [...shear], rotationDegrees };
  }
  return freezePlacement({ canvas: [width, height], anchor: 'canvas', offset: [...offset], transform });
}

/** Return the shared Canvas 2D matrix for a manifest-owned template placement. */
export function templatePlacementMatrix(asset, expectedCanvas = [asset?.width, asset?.height]) {
  const placement = normalizeTemplatePlacement(asset, expectedCanvas);
  const { pivot: [pivotX, pivotY], scale: [scaleX, scaleY], shear: [shearX, shearY], rotationDegrees } = placement.transform;
  const radians = rotationDegrees * Math.PI / 180;
  const cosine = Math.cos(radians);
  const sine = Math.sin(radians);
  const a = cosine * scaleX - sine * shearY;
  const b = sine * scaleX + cosine * shearY;
  const c = cosine * shearX - sine * scaleY;
  const d = sine * shearX + cosine * scaleY;
  const [offsetX, offsetY] = placement.offset;
  const e = pivotX + offsetX - a * pivotX - c * pivotY;
  const f = pivotY + offsetY - b * pivotX - d * pivotY;
  return Object.freeze({ a, b, c, d, e, f, placement });
}

export function transformTemplatePoint(x, y, asset, expectedCanvas = [asset?.width, asset?.height]) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) throw new TypeError('Template point must use finite coordinates.');
  const { a, b, c, d, e, f } = templatePlacementMatrix(asset, expectedCanvas);
  return [a * x + c * y + e, b * x + d * y + f];
}

const recordPurpose = asset => typeof asset?.purpose === 'string' ? asset.purpose : '';
const tupleKey = asset => [asset.id, asset.version, recordPurpose(asset), asset.sha256, asset.path].join('\u0000');
const cacheKey = (asset, purpose) => `${tupleKey(asset)}\u0000${purpose}\u0000${asset.byteSize}\u0000${asset.width}x${asset.height}`;
const abortError = () => typeof DOMException === 'function'
  ? new DOMException('The preview request was aborted.', 'AbortError')
  : Object.assign(new Error('The preview request was aborted.'), { name: 'AbortError' });

function asAssetRows(registry) {
  if (registry instanceof Map) return [...registry.values()];
  return Array.isArray(registry) ? registry : [];
}

function assetKind(asset) {
  if (typeof asset?.id === 'string' && asset.id.startsWith('template:')) return 'template';
  if (typeof asset?.id === 'string' && asset.id.startsWith('asset:')) return 'display';
  return null;
}

function normalizedPath(asset) {
  return asset.path.replace(/^dist\//, '').replace(/^\.\//, '');
}

function assertAssetShape(asset) {
  const kind = assetKind(asset);
  const validMime = asset?.mime === 'image/png' || asset?.mime === 'image/webp';
  if (!asset || typeof asset !== 'object'
    || !kind
    || typeof asset.id !== 'string'
    || typeof asset.version !== 'string' || !asset.version
    || typeof asset.path !== 'string'
    || typeof asset.sha256 !== 'string' || !/^[a-f0-9]{64}$/i.test(asset.sha256)
    || !Number.isSafeInteger(asset.byteSize) || asset.byteSize < 1
    || !Number.isSafeInteger(asset.width) || asset.width < 1
    || !Number.isSafeInteger(asset.height) || asset.height < 1
    || !validMime) {
    throw new PreviewLoaderError('unregistered-asset-shape', 'Preview resource metadata is incomplete or malformed.');
  }
  const path = normalizedPath(asset);
  const safeRelativePath = !path.startsWith('/') && !path.includes('..') && !path.includes('\\') && !/[?#]/.test(path);
  if (!safeRelativePath) throw new PreviewLoaderError('untrusted-asset-path', 'Preview resources must use registered same-origin paths.');

  if (kind === 'template') {
    if (!asset.purpose || !path.startsWith('assets/templates/') || asset.mime !== 'image/png') {
      throw new PreviewLoaderError('untrusted-template-asset', 'Template layers must be registered PNGs under assets/templates/.');
    }
    if (asset.alpha?.hasAlpha === false || asset.alpha?.hasTransparency === false) {
      throw new PreviewLoaderError('opaque-template-asset', 'Template layers must preserve real alpha transparency.');
    }
    normalizeTemplatePlacement(asset, [asset.width, asset.height]);
  } else {
    const previewRecord = asset.resourceKind === 'gallery-poster'
      ? asset.publicationStatus === 'published-derivative' && path.startsWith('assets/posters/')
      : asset.resourceKind === 'display-preview'
        && ['published-derivative', 'preview-only'].includes(asset.publicationStatus) && path.startsWith('assets/previews/');
    if (!previewRecord || asset.downloadable === true) {
      throw new PreviewLoaderError('not-a-display-preview', 'Only registered gallery posters or pending View-only covers can use the preview loader.');
    }
  }
  return asset;
}

function sameRegistration(a, b) {
  return tupleKey(a) === tupleKey(b)
    && a.byteSize === b.byteSize && a.width === b.width && a.height === b.height
    && a.mime === b.mime && a.resourceKind === b.resourceKind
    && a.publicationStatus === b.publicationStatus
    && (assetKind(a) !== 'template' || JSON.stringify(normalizeTemplatePlacement(a)) === JSON.stringify(normalizeTemplatePlacement(b)));
}

function catalogDisplayAssets() {
  return [
    ...ASSETS.filter(asset => asset.resourceKind === 'gallery-poster' && asset.publicationStatus === 'published-derivative'),
    ...ASSETS.filter(asset => asset.resourceKind === 'display-preview' && asset.publicationStatus === 'published-derivative'),
    ...PREVIEW_ASSETS.filter(asset => asset.resourceKind === 'display-preview' && asset.publicationStatus === 'preview-only')
  ];
}

export function createPreviewLoader({
  assetRegistry = catalogDisplayAssets(),
  baseURL = defaultBaseURL,
  fetchImpl = globalThis.fetch?.bind(globalThis),
  createImageBitmapImpl = globalThis.createImageBitmap?.bind(globalThis),
  urlRef = globalThis.URL,
  maxConcurrent = DEFAULT_LIMITS.maxConcurrent,
  maxDecodedBytes = DEFAULT_LIMITS.maxDecodedBytes,
  maxIdleEntries = DEFAULT_LIMITS.maxIdleEntries,
  verifyHash = false
} = {}) {
  if (typeof fetchImpl !== 'function' || typeof createImageBitmapImpl !== 'function') {
    throw new TypeError('Preview loader needs fetch and createImageBitmap support.');
  }
  const config = {
    maxConcurrent: Math.max(1, Math.floor(maxConcurrent || DEFAULT_LIMITS.maxConcurrent)),
    maxDecodedBytes: Math.max(1, Math.floor(maxDecodedBytes || DEFAULT_LIMITS.maxDecodedBytes)),
    maxIdleEntries: Math.max(0, Math.floor(maxIdleEntries ?? DEFAULT_LIMITS.maxIdleEntries))
  };
  const registered = new Map();
  const cache = new Map();
  const inflight = new Map();
  const queue = [];
  let active = 0;
  let activeLeases = 0;
  let reservedBytes = 0;
  let clock = 0;
  let peakDecodedBytes = 0;
  let disposed = false;

  function registerAssets(rows) {
    if (disposed) throw new PreviewLoaderError('loader-disposed', 'Preview loader has been released.');
    const accepted = asAssetRows(rows).map(assertAssetShape);
    const added = [];
    for (const row of accepted) {
      const key = tupleKey(row);
      const existing = registered.get(key);
      if (existing && !sameRegistration(existing, row)) {
        throw new PreviewLoaderError('registration-conflict', `Conflicting registered metadata for ${row.id}@${row.version}.`, { assetId: row.id });
      }
      if (!existing) {
        const canonical = assetKind(row) === 'template'
          ? Object.freeze({ ...row, placement: normalizeTemplatePlacement(row) })
          : Object.freeze({ ...row });
        registered.set(key, canonical);
        added.push(key);
      }
    }
    return Object.freeze({ registered: accepted.length, added: added.length });
  }

  registerAssets(assetRegistry);

  const decodedBytes = () => [...cache.values()].reduce((sum, item) => sum + item.decodedBytes, 0);
  const pinnedBytes = () => [...cache.values()].reduce((sum, item) => sum + (item.references > 0 ? item.decodedBytes : 0), 0);
  const idleRows = () => [...cache.values()].filter(item => item.references === 0).sort((a, b) => a.lastUsed - b.lastUsed);
  const objectUrlCount = () => [...cache.values()].filter(item => item.objectUrl).length;
  const bitmapCount = () => [...cache.values()].filter(item => item.bitmap).length;
  const leaseCount = () => [...cache.values()].reduce((sum, item) => sum + item.references, 0);

  function dropEntry(item) {
    if (!item || item.references > 0) return false;
    if (cache.get(item.key) === item) cache.delete(item.key);
    try { item.bitmap?.close?.(); } catch { /* Already released by the browser. */ }
    item.bitmap = null;
    item.blob = null;
    if (item.objectUrl) {
      try { urlRef?.revokeObjectURL?.(item.objectUrl); } catch { /* Revocation is best effort during teardown. */ }
      item.objectUrl = null;
    }
    item.decodedBytes = 0;
    return true;
  }

  function prune({ neededBytes = 0, enforceIdleCount = true } = {}) {
    let rows = idleRows();
    while (rows.length && (decodedBytes() + reservedBytes + neededBytes > config.maxDecodedBytes
      || (enforceIdleCount && rows.length > config.maxIdleEntries))) {
      const victim = rows.shift();
      dropEntry(victim);
      rows = idleRows();
    }
    return decodedBytes() + reservedBytes + neededBytes <= config.maxDecodedBytes;
  }

  function canonicalAsset(input) {
    if (disposed) throw new PreviewLoaderError('loader-disposed', 'Preview loader has been released.');
    assertAssetShape(input);
    const canonical = registered.get(tupleKey(input));
    if (!canonical || !sameRegistration(canonical, input)) {
      throw new PreviewLoaderError('unregistered-asset', `Unregistered preview resource: ${input.id}@${input.version}`);
    }
    return canonical;
  }

  function requestedPurpose(asset, requested) {
    const purpose = requested || (assetKind(asset) === 'template' ? asset.purpose : '');
    if (assetKind(asset) === 'template' && purpose !== asset.purpose) {
      throw new PreviewLoaderError('template-purpose-mismatch', `Template layer purpose does not match ${asset.id}.`, { assetId: asset.id, expected: asset.purpose, actual: purpose });
    }
    if (assetKind(asset) === 'display' && purpose !== DISPLAY_PURPOSE) {
      throw new PreviewLoaderError('display-purpose-required', 'Gallery resources are available only for the detailPreview purpose.', { assetId: asset.id, expected: DISPLAY_PURPOSE, actual: purpose });
    }
    return purpose;
  }

  function assetUrl(asset) {
    const normalized = normalizedPath(asset);
    const kind = assetKind(asset);
    const allowed = kind === 'template' ? normalized.startsWith('assets/templates/')
      : normalized.startsWith('assets/posters/') || normalized.startsWith('assets/previews/');
    if (!allowed) throw new PreviewLoaderError('untrusted-asset-path', 'Resolved preview URL escaped its registered same-origin asset directory.');
    const base = baseURL instanceof URL ? baseURL : new URL(String(baseURL), import.meta.url);
    const url = new URL(normalized, base);
    if (url.origin !== base.origin) throw new PreviewLoaderError('untrusted-asset-url', 'Preview resource URL is cross-origin.');
    // Bind browser HTTP cache entries to the exact immutable resource record.
    // Replacing bytes under a stable path must never let force-cache serve an
    // older template layer before the SHA-256 check can run.
    url.searchParams.set('v', asset.version);
    url.searchParams.set('sha256', asset.sha256.toLowerCase());
    return url;
  }

  async function readAndDecode(job) {
    const asset = job.asset;
    const url = assetUrl(asset);
    const response = await fetchImpl(url.href, { signal: job.controller.signal, cache: 'force-cache', credentials: 'same-origin' });
    if (!response?.ok) throw new PreviewLoaderError('http-error', `Preview request failed (${response?.status ?? 'no response'}).`, { status: response?.status ?? 0, assetId: asset.id });
    const mime = (response.headers?.get?.('content-type') || '').split(';', 1)[0].trim().toLowerCase();
    if (mime !== asset.mime) throw new PreviewLoaderError('mime-mismatch', `Expected ${asset.mime} for ${asset.id}, received ${mime || 'unknown MIME'}.`, { assetId: asset.id });
    const blob = await response.blob();
    if (blob.size !== asset.byteSize) throw new PreviewLoaderError('byte-size-mismatch', `Preview byte size changed for ${asset.id}.`, { expected: asset.byteSize, actual: blob.size, assetId: asset.id });
    if (verifyHash) {
      if (!globalThis.crypto?.subtle) throw new PreviewLoaderError('hash-unavailable', 'Web Crypto is required for requested preview hash verification.');
      const bytes = await blob.arrayBuffer();
      const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes);
      const hex = [...new Uint8Array(digest)].map(value => value.toString(16).padStart(2, '0')).join('');
      if (hex.toLowerCase() !== asset.sha256.toLowerCase()) throw new PreviewLoaderError('hash-mismatch', `Preview hash changed for ${asset.id}.`, { expected: asset.sha256, actual: hex, assetId: asset.id });
    }

    const expectedDecodedBytes = asset.width * asset.height * 4;
    if (!prune({ neededBytes: expectedDecodedBytes })) {
      throw new PreviewLoaderError('decoded-budget-exceeded', 'Current preview resources are pinned above the decoded-memory budget; release a lease before loading another resource.', { pinnedBytes: pinnedBytes(), expectedDecodedBytes, maxDecodedBytes: config.maxDecodedBytes });
    }
    reservedBytes += expectedDecodedBytes;
    let bitmap;
    try {
      bitmap = await createImageBitmapImpl(blob);
      if (job.cancelled || job.controller.signal.aborted) {
        bitmap?.close?.();
        throw abortError();
      }
      if (bitmap.width !== asset.width || bitmap.height !== asset.height) {
        bitmap.close?.();
        throw new PreviewLoaderError('dimension-mismatch', `Preview dimensions changed for ${asset.id}.`, { expected: [asset.width, asset.height], actual: [bitmap.width, bitmap.height], assetId: asset.id });
      }
      reservedBytes -= expectedDecodedBytes;
      if (!prune({ neededBytes: expectedDecodedBytes })) {
        bitmap.close?.();
        throw new PreviewLoaderError('decoded-budget-exceeded', 'Decoded preview does not fit the bounded cache.', { pinnedBytes: pinnedBytes(), expectedDecodedBytes, maxDecodedBytes: config.maxDecodedBytes });
      }
      return { bitmap, blob, decodedBytes: expectedDecodedBytes };
    } catch (error) {
      if (reservedBytes >= expectedDecodedBytes) reservedBytes -= expectedDecodedBytes;
      throw error;
    }
  }

  function removeJob(job) {
    if (inflight.get(job.key) === job) inflight.delete(job.key);
  }

  function cancelConsumer(job, consumer) {
    if (!consumer.active) return;
    consumer.active = false;
    job.consumers.delete(consumer);
    consumer.signal?.removeEventListener?.('abort', consumer.onAbort);
    consumer.reject(abortError());
    if (!job.consumers.size) {
      job.cancelled = true;
      removeJob(job);
      const queuedIndex = queue.indexOf(job);
      if (queuedIndex >= 0) queue.splice(queuedIndex, 1);
      job.controller.abort();
    }
  }

  function makeLease(item) {
    if (disposed || item.released) throw new PreviewLoaderError('loader-disposed', 'Preview resource is no longer available.');
    item.references += 1;
    activeLeases += 1;
    item.lastUsed = ++clock;
    let released = false;
    const lease = {
      asset: item.asset,
      bitmap: item.bitmap,
      get blob() { return released ? null : item.blob; },
      get url() {
        if (released || !item.blob || !urlRef?.createObjectURL) return null;
        if (!item.objectUrl) item.objectUrl = urlRef.createObjectURL(item.blob);
        return item.objectUrl;
      },
      get width() { return item.bitmap?.width ?? 0; },
      get height() { return item.bitmap?.height ?? 0; },
      release() {
        if (released) return;
        released = true;
        activeLeases = Math.max(0, activeLeases - 1);
        item.references = Math.max(0, item.references - 1);
        item.lastUsed = ++clock;
        prune();
      }
    };
    return Object.freeze(lease);
  }

  function settleJob(job, error, decoded) {
    removeJob(job);
    if (job.cancelled || disposed) {
      decoded?.bitmap?.close?.();
      decoded = null;
      error = error || abortError();
    }
    if (!error && decoded) {
      const item = {
        key: job.key,
        asset: job.asset,
        purpose: job.purpose,
        bitmap: decoded.bitmap,
        blob: decoded.blob,
        decodedBytes: decoded.decodedBytes,
        references: 0,
        lastUsed: ++clock,
        objectUrl: null,
        released: false
      };
      cache.set(item.key, item);
      peakDecodedBytes = Math.max(peakDecodedBytes, decodedBytes());
      for (const consumer of [...job.consumers]) {
        if (!consumer.active) continue;
        consumer.active = false;
        consumer.signal?.removeEventListener?.('abort', consumer.onAbort);
        job.consumers.delete(consumer);
        try { consumer.resolve(makeLease(item)); } catch (leaseError) { consumer.reject(leaseError); }
      }
      prune();
    } else {
      for (const consumer of [...job.consumers]) {
        if (!consumer.active) continue;
        consumer.active = false;
        consumer.signal?.removeEventListener?.('abort', consumer.onAbort);
        job.consumers.delete(consumer);
        consumer.reject(error || new PreviewLoaderError('load-failed', `Could not load ${job.asset.id}.`));
      }
    }
  }

  function pump() {
    if (disposed) return;
    while (active < config.maxConcurrent && queue.length) {
      const job = queue.shift();
      if (!job || job.cancelled || !job.consumers.size) continue;
      active += 1;
      readAndDecode(job).then(
        decoded => {
          active = Math.max(0, active - 1);
          try { settleJob(job, null, decoded); } finally { pump(); }
        },
        error => {
          active = Math.max(0, active - 1);
          try { settleJob(job, error); } finally { pump(); }
        }
      );
    }
  }

  function attachConsumer(job, signal) {
    if (signal?.aborted) return Promise.reject(abortError());
    return new Promise((resolve, reject) => {
      const consumer = { active: true, signal, resolve, reject, onAbort: null };
      consumer.onAbort = () => cancelConsumer(job, consumer);
      job.consumers.add(consumer);
      signal?.addEventListener?.('abort', consumer.onAbort, { once: true });
      if (signal?.aborted) consumer.onAbort();
    });
  }

  function acquire(inputAsset, { signal, purpose } = {}) {
    let asset;
    let usePurpose;
    try {
      asset = canonicalAsset(inputAsset);
      usePurpose = requestedPurpose(asset, purpose);
    } catch (error) { return Promise.reject(error); }
    if (signal?.aborted) return Promise.reject(abortError());
    const key = cacheKey(asset, usePurpose);
    const cached = cache.get(key);
    if (cached) {
      try { return Promise.resolve(makeLease(cached)); } catch (error) { return Promise.reject(error); }
    }
    let job = inflight.get(key);
    if (!job) {
      job = { key, asset, purpose: usePurpose, controller: new AbortController(), consumers: new Set(), state: 'queued', cancelled: false };
      inflight.set(key, job);
      queue.push(job);
    }
    const consumerPromise = attachConsumer(job, signal);
    pump();
    return consumerPromise;
  }

  function getRegisteredAsset(reference) {
    if (!reference || typeof reference.id !== 'string') return null;
    return registered.get(tupleKey(reference)) ?? null;
  }

  function releaseAll() {
    if (disposed) return;
    disposed = true;
    for (const job of inflight.values()) {
      job.cancelled = true;
      job.controller.abort();
      for (const consumer of [...job.consumers]) {
        if (!consumer.active) continue;
        consumer.active = false;
        consumer.signal?.removeEventListener?.('abort', consumer.onAbort);
        consumer.reject(abortError());
      }
      job.consumers.clear();
    }
    inflight.clear();
    queue.length = 0;
    for (const item of [...cache.values()]) {
      activeLeases = Math.max(0, activeLeases - item.references);
      item.references = 0;
      item.released = true;
      dropEntry(item);
    }
    cache.clear();
  }

  function stats() {
    const idle = idleRows();
    const currentDecodedBytes = decodedBytes();
    const totalLeases = leaseCount();
    return Object.freeze({
      activeRequests: active,
      queuedRequests: queue.length,
      pendingRequests: queue.length + active,
      inFlightKeys: inflight.size,
      cacheEntries: cache.size,
      idleEntries: idle.length,
      activeLeases: Math.max(activeLeases, totalLeases),
      objectURLs: objectUrlCount(),
      bitmaps: bitmapCount(),
      decodedBytes: currentDecodedBytes,
      cachedDecodedBytes: currentDecodedBytes,
      idleDecodedBytes: idle.reduce((sum, item) => sum + item.decodedBytes, 0),
      pinnedBytes: pinnedBytes(),
      reservedBytes,
      peakDecodedBytes,
      maxConcurrent: config.maxConcurrent,
      maxDecodedBytes: config.maxDecodedBytes,
      maxIdleEntries: config.maxIdleEntries,
      registeredAssets: registered.size,
      disposed
    });
  }

  return Object.freeze({ acquire, registerAssets, getRegisteredAsset, releaseAll, dispose: releaseAll, stats });
}
