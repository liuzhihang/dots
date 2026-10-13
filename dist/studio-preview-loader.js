import { ASSETS, PREVIEW_ASSETS } from './studio-artwork-catalog.js?v=111';
import { DELIVERY_ASSETS } from './studio-delivery-assets.js?v=111';

// A single bounded loader serves approved detail covers and explicitly pending
// View-only previews by default. Template layers are absent until Edit registers
// the reviewed sources.json asset rows. Originals are never loadable here.
export const PREVIEW_LOADER_REVISION = 'preview-loader-20261012-v101';
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
  ...(placement.sourceAnchor ? { sourceAnchor: Object.freeze([...placement.sourceAnchor]) } : {}),
  offset: Object.freeze([...placement.offset]),
  transform: Object.freeze({
    pivot: Object.freeze([...placement.transform.pivot]),
    scale: Object.freeze([...placement.transform.scale]),
    shear: Object.freeze([...placement.transform.shear]),
    rotationDegrees: placement.transform.rotationDegrees
  })
});

/** Validate and normalize the fixed, manifest-owned placement of one template PNG. */
export function normalizeTemplatePlacement(asset, expectedCanvas = asset?.placement?.canvas || [asset?.width, asset?.height], anchors = null) {
  const width = expectedCanvas?.[0], height = expectedCanvas?.[1];
  if (!Number.isSafeInteger(width) || width < 1 || !Number.isSafeInteger(height) || height < 1) {
    throw new PreviewLoaderError('template-placement-canvas-invalid', 'Template placement needs a positive canvas size.', { assetId: asset?.id || null });
  }
  const sourceWidth = asset?.width, sourceHeight = asset?.height;
  if (!Number.isSafeInteger(sourceWidth) || sourceWidth < 1 || !Number.isSafeInteger(sourceHeight) || sourceHeight < 1) {
    throw new PreviewLoaderError('template-placement-source-invalid', 'Template placement needs positive source bitmap dimensions.', { assetId: asset?.id || null });
  }
  const raw = asset?.placement;
  if (raw == null) {
    if (sourceWidth !== width || sourceHeight !== height) {
      throw new PreviewLoaderError('template-placement-invalid', 'A source bitmap with independent dimensions needs an explicit Template placement.', { assetId: asset?.id || null });
    }
    return freezePlacement({
      canvas: [width, height], anchor: 'canvas', offset: [0, 0],
      transform: { pivot: [0, 0], scale: [1, 1], shear: [0, 0], rotationDegrees: 0 }
    });
  }
  const fail = message => { throw new PreviewLoaderError('template-placement-invalid', message, { assetId: asset?.id || null }); };
  const allowedPlacementKeys = new Set(['canvas', 'anchor', 'sourceAnchor', 'offset', 'transform']);
  if (!raw || typeof raw !== 'object' || Array.isArray(raw) || Object.keys(raw).some(key => !allowedPlacementKeys.has(key))) {
    fail('Template placement contains unsupported fields.');
  }
  const canvas = raw.canvas;
  const offset = raw.offset;
  const semanticAnchor = typeof raw.anchor === 'string' && raw.anchor !== 'canvas';
  const sourceAnchor = raw.sourceAnchor;
  if (!Array.isArray(canvas) || canvas.length !== 2 || canvas[0] !== width || canvas[1] !== height
    || typeof raw.anchor !== 'string' || !/^[a-z][a-z0-9.-]*$/i.test(raw.anchor)
    || !Array.isArray(offset) || offset.length !== 2 || !offset.every(Number.isFinite)
    || Math.abs(offset[0]) > width || Math.abs(offset[1]) > height) {
    fail('Template placement must use a declared anchor and a bounded finite [dx,dy] offset.');
  }
  if (semanticAnchor) {
    if (!Array.isArray(sourceAnchor) || sourceAnchor.length !== 2 || !sourceAnchor.every(Number.isFinite)
      || sourceAnchor[0] < 0 || sourceAnchor[0] > sourceWidth || sourceAnchor[1] < 0 || sourceAnchor[1] > sourceHeight) {
      fail('A named Template anchor needs a sourceAnchor inside the resource bitmap.');
    }
    if (anchors) {
      const registered = Array.isArray(anchors[raw.anchor]) ? anchors[raw.anchor] : anchors[raw.anchor]?.point;
      if (!Array.isArray(registered) || registered.length !== 2 || !registered.every(Number.isFinite)
        || registered[0] < 0 || registered[0] > width || registered[1] < 0 || registered[1] > height) {
        fail(`Template anchor ${raw.anchor} is not registered at an in-canvas point.`);
      }
    }
  } else if (sourceAnchor != null) {
    fail('The canvas anchor cannot declare a sourceAnchor.');
  }
  const sourceTransform = raw.transform;
  let transform = { pivot: semanticAnchor ? [...sourceAnchor] : [0, 0], scale: [1, 1], shear: [0, 0], rotationDegrees: 0 };
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
      || pivot[0] < 0 || pivot[0] > sourceWidth || pivot[1] < 0 || pivot[1] > sourceHeight
      || !Array.isArray(scale) || scale.length !== 2 || !scale.every(Number.isFinite)
      || scale.some(value => value < 0.25 || value > 4)
      || !Array.isArray(shear) || shear.length !== 2 || !shear.every(Number.isFinite)
      || shear.some(value => value < -2 || value > 2)
      || !Number.isFinite(rotationDegrees) || rotationDegrees < -45 || rotationDegrees > 45) {
      fail('Template placement transform needs an in-canvas pivot, scale in [0.25,4], shear in [-2,2], and rotation in [-45,45] degrees.');
    }
    transform = { pivot: [...pivot], scale: [...scale], shear: [...shear], rotationDegrees };
    if (semanticAnchor && (pivot[0] !== sourceAnchor[0] || pivot[1] !== sourceAnchor[1])) {
      fail('Named-anchor layers must transform around their sourceAnchor.');
    }
  }
  return freezePlacement({ canvas: [width, height], anchor: raw.anchor, ...(semanticAnchor ? { sourceAnchor: [...sourceAnchor] } : {}), offset: [...offset], transform });
}

/** Return the shared Canvas 2D matrix for a manifest-owned template placement. */
export function templatePlacementMatrix(asset, expectedCanvas = asset?.placement?.canvas || [asset?.width, asset?.height], anchors = null) {
  const placement = normalizeTemplatePlacement(asset, expectedCanvas, anchors);
  const { pivot: [pivotX, pivotY], scale: [scaleX, scaleY], shear: [shearX, shearY], rotationDegrees } = placement.transform;
  const radians = rotationDegrees * Math.PI / 180;
  const cosine = Math.cos(radians);
  const sine = Math.sin(radians);
  const a = cosine * scaleX - sine * shearY;
  const b = sine * scaleX + cosine * shearY;
  const c = cosine * shearX - sine * scaleY;
  const d = sine * shearX + cosine * scaleY;
  const [offsetX, offsetY] = placement.offset;
  const targetAnchor = placement.anchor === 'canvas' ? [pivotX, pivotY]
    : Array.isArray(anchors?.[placement.anchor]) ? anchors[placement.anchor]
      : anchors?.[placement.anchor]?.point;
  if (!targetAnchor) throw new PreviewLoaderError('template-anchor-unregistered', `Template anchor ${placement.anchor} is not registered.`, { assetId: asset?.id || null });
  const sourceAnchor = placement.anchor === 'canvas' ? [pivotX, pivotY] : placement.sourceAnchor;
  const e = targetAnchor[0] + offsetX - a * sourceAnchor[0] - c * sourceAnchor[1];
  const f = targetAnchor[1] + offsetY - b * sourceAnchor[0] - d * sourceAnchor[1];
  return Object.freeze({ a, b, c, d, e, f, placement });
}

export function transformTemplatePoint(x, y, asset, expectedCanvas = asset?.placement?.canvas || [asset?.width, asset?.height], anchors = null) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) throw new TypeError('Template point must use finite coordinates.');
  const { a, b, c, d, e, f } = templatePlacementMatrix(asset, expectedCanvas, anchors);
  return [a * x + c * y + e, b * x + d * y + f];
}

const recordPurpose = asset => typeof asset?.purpose === 'string' ? asset.purpose : '';
const tupleKey = asset => [asset.id, asset.version, recordPurpose(asset), asset.sha256, asset.path].join('\u0000');
// Authorization remains keyed by the full canonical asset tuple and requested
// purpose. Once that validation succeeds, decoding may be shared by aliases
// that point at the same immutable physical bytes.
const resourceKey = asset => [normalizedPath(asset), asset.version, asset.sha256.toLowerCase(), asset.mime,
  asset.byteSize, `${asset.width}x${asset.height}`].join('\u0000');
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

function normalizedResourcePath(path) {
  return String(path || '').replace(/^dist\//, '').replace(/^\.\//, '');
}

const SHA256 = /^[a-f0-9]{64}$/i;
const DELIVERY_SOURCE_PREFIXES = ['assets/templates/', 'assets/previews/'];

function isDeliverySource(asset) {
  const path = normalizedPath(asset);
  return (assetKind(asset) === 'template' && path.startsWith('assets/templates/'))
    || (assetKind(asset) === 'display' && asset.resourceKind === 'display-preview' && path.startsWith('assets/previews/'));
}

function deliverySourceKey(source) {
  return [String(source.path), String(source.sha256).toLowerCase(), source.byteSize,
    source.width, source.height, source.mime].join('\u0000');
}

function assertDeliveryShape(row) {
  const source = row?.source;
  const sourcePath = normalizedResourcePath(source?.path);
  const outputPath = normalizedResourcePath(row?.path);
  const sourceIsSupported = DELIVERY_SOURCE_PREFIXES.some(prefix => sourcePath.startsWith(prefix));
  const safePath = path => Boolean(path) && !path.startsWith('/') && !path.includes('..') && !path.includes('\\') && !/[?#]/.test(path);
  if (!row || typeof row !== 'object' || !source || typeof source !== 'object'
    || !safePath(sourcePath) || !sourceIsSupported || source.mime !== 'image/png' || !SHA256.test(source.sha256 || '')
    || !Number.isSafeInteger(source.byteSize) || source.byteSize < 1
    || !Number.isSafeInteger(source.width) || source.width < 1
    || !Number.isSafeInteger(source.height) || source.height < 1
    || !safePath(outputPath) || !outputPath.startsWith('assets/delivery/')
    || !outputPath.endsWith(`/${String(source.sha256).toLowerCase()}.webp`)
    || row.version !== 'lossless-v1' || row.mime !== 'image/webp' || !SHA256.test(row.sha256 || '')
    || !Number.isSafeInteger(row.byteSize) || row.byteSize < 1
    || row.width !== source.width || row.height !== source.height
    || typeof row.alpha?.hasAlpha !== 'boolean' || typeof row.alpha?.hasTransparency !== 'boolean'
    || (row.alpha.hasTransparency && !row.alpha.hasAlpha)
    || typeof row.encoding?.lossless !== 'boolean' || row.encoding.lossless !== true
    || typeof row.encoding?.exact !== 'boolean' || row.encoding.exact !== true
    || !SHA256.test(row.pixelSha256 || '')) {
    throw new PreviewLoaderError('invalid-delivery-asset', 'Lossless delivery metadata is incomplete, unsafe, or inconsistent.');
  }
  return row;
}

function createDeliveryIndex(rows) {
  if (!Array.isArray(rows) && !(rows instanceof Map)) {
    throw new PreviewLoaderError('invalid-delivery-registry', 'Lossless delivery registry must be an array or Map.');
  }
  const index = new Map();
  for (const row of asAssetRows(rows).map(assertDeliveryShape)) {
    const key = deliverySourceKey(row.source);
    if (index.has(key)) throw new PreviewLoaderError('duplicate-delivery-asset', 'A registered PNG source has more than one delivery derivative.');
    index.set(key, row);
  }
  return index;
}

function fourCC(bytes, offset) {
  return String.fromCharCode(bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3]);
}

function inspectLosslessWebP(bytes, delivery, assetId) {
  const fail = (code, message) => { throw new PreviewLoaderError(code, message, { assetId, deliveryPath: delivery.path }); };
  if (!(bytes instanceof Uint8Array) || bytes.length < 25 || fourCC(bytes, 0) !== 'RIFF' || fourCC(bytes, 8) !== 'WEBP') {
    fail('webp-signature-invalid', `Lossless delivery for ${assetId} is not a RIFF WebP image.`);
  }
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (view.getUint32(4, true) !== bytes.length - 8) fail('webp-signature-invalid', `Lossless WebP container size changed for ${assetId}.`);
  let cursor = 12;
  let losslessHeader = null;
  let extendedAlpha = null;
  let extendedDimensions = null;
  while (cursor < bytes.length) {
    if (cursor + 8 > bytes.length) fail('webp-signature-invalid', `Lossless WebP chunk table is truncated for ${assetId}.`);
    const kind = fourCC(bytes, cursor);
    const length = view.getUint32(cursor + 4, true);
    const start = cursor + 8;
    const end = start + length;
    const paddedEnd = end + (length & 1);
    if (end > bytes.length || paddedEnd > bytes.length) fail('webp-signature-invalid', `Lossless WebP chunk is truncated for ${assetId}.`);
    if ((length & 1) && bytes[end] !== 0) fail('webp-signature-invalid', `Lossless WebP chunk padding is invalid for ${assetId}.`);
    if (kind === 'VP8 ' || kind === 'ALPH') fail('webp-lossless-required', `Delivery for ${assetId} contains a lossy image chunk.`);
    if (kind === 'ANIM' || kind === 'ANMF') fail('webp-still-image-required', `Delivery for ${assetId} must be a still image.`);
    if (kind === 'VP8X') {
      if (extendedAlpha !== null || length < 10) fail('webp-signature-invalid', `Lossless WebP extended header is invalid for ${assetId}.`);
      extendedAlpha = (bytes[start] & 0x10) !== 0;
      extendedDimensions = {
        width: 1 + bytes[start + 4] + (bytes[start + 5] << 8) + (bytes[start + 6] << 16),
        height: 1 + bytes[start + 7] + (bytes[start + 8] << 8) + (bytes[start + 9] << 16)
      };
    }
    if (kind === 'VP8L') {
      if (losslessHeader || length < 5 || bytes[start] !== 0x2f) fail('webp-signature-invalid', `Lossless WebP must contain one valid VP8L bitstream for ${assetId}.`);
      const bits = view.getUint32(start + 1, true);
      losslessHeader = {
        width: (bits & 0x3fff) + 1,
        height: ((bits >>> 14) & 0x3fff) + 1,
        // VP8L's alpha_is_used bit is only a hint in the WebP specification;
        // actual transparency is pinned by the generated metadata and hash.
        alphaHint: (bits & 0x10000000) !== 0,
        version: bits >>> 29
      };
    }
    cursor = paddedEnd;
  }
  if (!losslessHeader || losslessHeader.version !== 0) fail('webp-lossless-required', `Delivery for ${assetId} is not an exact VP8L lossless image.`);
  if (losslessHeader.width !== delivery.width || losslessHeader.height !== delivery.height) {
    fail('webp-header-dimensions-mismatch', `Lossless WebP header dimensions changed for ${assetId}.`);
  }
  if (extendedDimensions && (extendedDimensions.width !== delivery.width || extendedDimensions.height !== delivery.height)) {
    fail('webp-header-dimensions-mismatch', `Lossless WebP canvas dimensions changed for ${assetId}.`);
  }
  if (extendedAlpha !== null && extendedAlpha !== delivery.alpha.hasAlpha) {
    fail('webp-alpha-metadata-mismatch', `Lossless WebP alpha metadata changed for ${assetId}.`);
  }
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
    normalizeTemplatePlacement(asset);
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
  assetRegistry,
  deliveryRegistry,
  requireDeliveryCoverage = assetRegistry === undefined,
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
  const initialRegistry = assetRegistry === undefined ? catalogDisplayAssets() : assetRegistry;
  const usingDefaultDeliveryRegistry = deliveryRegistry === undefined;
  const deliveryDisabled = Array.isArray(deliveryRegistry) && deliveryRegistry.length === 0;
  const deliveryEnabled = !deliveryDisabled;
  const deliveryIndex = createDeliveryIndex(usingDefaultDeliveryRegistry ? DELIVERY_ASSETS : deliveryRegistry);
  const enforceDeliveryCoverage = requireDeliveryCoverage === true && deliveryEnabled;
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
    if (enforceDeliveryCoverage) {
      for (const row of accepted) {
        if (isDeliverySource(row) && !deliveryIndex.has(deliverySourceKey(row))) {
          throw new PreviewLoaderError('delivery-missing', `No lossless delivery derivative is registered for ${row.id}@${row.version}.`, { assetId: row.id, sourcePath: row.path });
        }
      }
    }
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

  registerAssets(initialRegistry);

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

  function assetUrl(asset, isDelivery = false) {
    const normalized = normalizedPath(asset);
    const kind = assetKind(asset);
    const allowed = isDelivery ? normalized.startsWith('assets/delivery/')
      : kind === 'template' ? normalized.startsWith('assets/templates/')
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
    const physical = job.resource;
    const delivery = job.delivery;
    const url = assetUrl(physical, Boolean(delivery));
    const response = await fetchImpl(url.href, { signal: job.controller.signal, cache: 'force-cache', credentials: 'same-origin' });
    if (!response?.ok) throw new PreviewLoaderError('http-error', `Preview request failed (${response?.status ?? 'no response'}).`, { status: response?.status ?? 0, assetId: asset.id });
    const mime = (response.headers?.get?.('content-type') || '').split(';', 1)[0].trim().toLowerCase();
    const normalizeGenericDeliveryMime = Boolean(delivery) && mime === 'application/octet-stream';
    if (mime !== physical.mime && !normalizeGenericDeliveryMime) throw new PreviewLoaderError('mime-mismatch', `Expected ${physical.mime} for ${asset.id}, received ${mime || 'unknown MIME'}.`, { assetId: asset.id });
    const responseBlob = await response.blob();
    if (responseBlob.size !== physical.byteSize) throw new PreviewLoaderError('byte-size-mismatch', `Preview byte size changed for ${asset.id}.`, { expected: physical.byteSize, actual: responseBlob.size, assetId: asset.id });
    if (delivery || verifyHash) {
      if (!globalThis.crypto?.subtle) throw new PreviewLoaderError('hash-unavailable', 'Web Crypto is required for requested preview hash verification.');
      const bytes = await responseBlob.arrayBuffer();
      const digest = await globalThis.crypto.subtle.digest('SHA-256', bytes);
      const hex = [...new Uint8Array(digest)].map(value => value.toString(16).padStart(2, '0')).join('');
      if (hex.toLowerCase() !== physical.sha256.toLowerCase()) throw new PreviewLoaderError('hash-mismatch', `Preview hash changed for ${asset.id}.`, { expected: physical.sha256, actual: hex, assetId: asset.id });
      if (delivery) inspectLosslessWebP(new Uint8Array(bytes), delivery, asset.id);
    }
    // Some static hosts serve valid WebP bytes with a generic MIME header. Only
    // an exact registered derivative reaches this branch, after byte/hash and
    // lossless-container verification; give decode and Blob URLs its pinned type.
    const blob = normalizeGenericDeliveryMime
      ? responseBlob.slice(0, responseBlob.size, physical.mime)
      : responseBlob;

    const expectedDecodedBytes = physical.width * physical.height * 4;
    if (!prune({ neededBytes: expectedDecodedBytes })) {
      throw new PreviewLoaderError('decoded-budget-exceeded', 'Current preview resources are pinned above the decoded-memory budget; release a lease before loading another resource.', { pinnedBytes: pinnedBytes(), expectedDecodedBytes, maxDecodedBytes: config.maxDecodedBytes });
    }
    reservedBytes += expectedDecodedBytes;
    let bitmap;
    try {
      bitmap = await createImageBitmapImpl(blob, { premultiplyAlpha: 'none' });
      if (job.cancelled || job.controller.signal.aborted) {
        bitmap?.close?.();
        throw abortError();
      }
      if (bitmap.width !== physical.width || bitmap.height !== physical.height) {
        bitmap.close?.();
        throw new PreviewLoaderError('dimension-mismatch', `Preview dimensions changed for ${asset.id}.`, { expected: [physical.width, physical.height], actual: [bitmap.width, bitmap.height], assetId: asset.id });
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

  function makeLease(item, asset) {
    if (disposed || item.released) throw new PreviewLoaderError('loader-disposed', 'Preview resource is no longer available.');
    item.references += 1;
    activeLeases += 1;
    item.lastUsed = ++clock;
    let released = false;
    const lease = {
      // A physical image can back multiple canonical Template resources (for
      // example a body and its silhouette mask). Preserve caller identity and
      // placement on each lease while sharing only Blob/bitmap ownership.
      asset,
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
        try { consumer.resolve(makeLease(item, consumer.asset)); } catch (leaseError) { consumer.reject(leaseError); }
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

  function attachConsumer(job, signal, asset) {
    if (signal?.aborted) return Promise.reject(abortError());
    return new Promise((resolve, reject) => {
      const consumer = { active: true, signal, asset, resolve, reject, onAbort: null };
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
    let delivery = null;
    if (deliveryEnabled && isDeliverySource(asset)) {
      delivery = deliveryIndex.get(deliverySourceKey(asset)) || null;
      if (!delivery) return Promise.reject(new PreviewLoaderError('delivery-missing', `No lossless delivery derivative is registered for ${asset.id}@${asset.version}.`, { assetId: asset.id, sourcePath: asset.path }));
    }
    const resource = delivery || asset;
    const key = resourceKey(resource);
    const cached = cache.get(key);
    if (cached) {
      try { return Promise.resolve(makeLease(cached, asset)); } catch (error) { return Promise.reject(error); }
    }
    let job = inflight.get(key);
    if (!job) {
      job = { key, asset, resource, delivery, purpose: usePurpose, controller: new AbortController(), consumers: new Set(), state: 'queued', cancelled: false };
      inflight.set(key, job);
      queue.push(job);
    }
    const consumerPromise = attachConsumer(job, signal, asset);
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
