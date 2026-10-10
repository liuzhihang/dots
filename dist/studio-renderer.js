import { assertValidTemplateOptions, getRequiredTemplateAssets, resolveTemplateAsset } from './studio-edit-templates.js?v=99';
import { normalizeTemplatePlacement, templatePlacementMatrix } from './studio-preview-loader.js?v=99';

export const STUDIO_RENDERER_REVISION = 'studio-renderer-20261010-v99-placement-transform-1';
const exportPixels = new WeakMap();

const freeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) freeze(child);
  return Object.freeze(value);
};

const error = (code, message, details = {}) => Object.assign(new Error(message), { name: 'StudioRenderError', code, ...details });

function createCanvas(width, height, canvasFactory) {
  let canvas;
  if (canvasFactory) canvas = canvasFactory(width, height);
  else if (globalThis.document?.createElement) canvas = document.createElement('canvas');
  else if (typeof OffscreenCanvas === 'function') canvas = new OffscreenCanvas(width, height);
  if (!canvas) throw error('canvas-unavailable', 'This browser cannot create a 2D canvas for the local template editor.');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function context2d(canvas) {
  const context = canvas.getContext('2d', { alpha: true, willReadFrequently: true });
  if (!context) throw error('canvas-context-unavailable', 'Could not create the transparent 2D template renderer.');
  context.clearRect(0, 0, canvas.width, canvas.height);
  return context;
}

function stableOptions(options) {
  return ['color', 'shape', 'eyes', 'glasses', 'accessory'].map(key => `${key}=${options[key]}`).join('&');
}

function resolveAssetRecord(reference, { assetRegistry, resolveAsset, loader, template }) {
  let record = null;
  if (typeof resolveAsset === 'function') record = resolveAsset(reference);
  if (!record) record = resolveTemplateAsset(reference, assetRegistry);
  if (!record && typeof loader?.getRegisteredAsset === 'function') record = loader.getRegisteredAsset(reference);
  if (!record && template.assetObjects && typeof template.assetObjects === 'object') {
    const candidate = template.assetObjects[reference.id];
    if (candidate?.version === reference.version && candidate?.purpose === reference.purpose) record = candidate;
  }
  if (!record) throw error('missing-template-layer', `Required template layer is not registered: ${reference.id}`, { assetId: reference.id, purpose: reference.purpose });
  if (record.id !== reference.id || record.version !== reference.version || record.purpose !== reference.purpose) {
    throw error('template-layer-binding-mismatch', `Template layer binding does not match its registered source: ${reference.id}`, { expected: reference, actual: { id: record.id, version: record.version, purpose: record.purpose } });
  }
  if (record.width !== template.canvas.width || record.height !== template.canvas.height) {
    throw error('template-layer-canvas-mismatch', `Template layer uses a different canvas: ${reference.id}`, { expected: [template.canvas.width, template.canvas.height], actual: [record.width, record.height] });
  }
  try { normalizeTemplatePlacement(record, [template.canvas.width, template.canvas.height]); }
  catch (cause) {
    throw error('template-layer-placement-invalid', `Template layer placement is invalid: ${reference.id}`, { assetId: reference.id, cause });
  }
  return record;
}

function recipeFor(draft, template, assetRecords, layerOrder) {
  const material = assetRecords.map(asset => {
    const placement = normalizeTemplatePlacement(asset, [template.canvas.width, template.canvas.height]);
    const { pivot, scale, shear, rotationDegrees } = placement.transform;
    return `${asset.id}@${asset.version}:${asset.sha256}:placement=${placement.offset.join(',')};pivot=${pivot.join(',')};scale=${scale.join(',')};shear=${shear.join(',')};rotation=${rotationDegrees}`;
  }).join('|');
  return `${STUDIO_RENDERER_REVISION}|${template.id}@${template.version}|${draft.baseArtworkId}@${draft.baseArtworkVersion}|${stableOptions(draft.options)}|layer-order=${layerOrder.join('>')}|${material}`;
}

function drawLayer(context, lease, composite = 'source-over', expectedCanvas) {
  context.save();
  context.globalCompositeOperation = composite;
  context.globalAlpha = 1;
  const matrix = templatePlacementMatrix(lease.asset, expectedCanvas);
  context.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
  context.drawImage(lease.bitmap, 0, 0);
  context.restore();
}

function hexRgb(value) {
  const match = /^#([a-f\d]{6})$/i.exec(value || '');
  if (!match) throw error('invalid-template-color', `Invalid registered template color: ${value}`);
  const hex = match[1];
  return [0, 2, 4].map(offset => Number.parseInt(hex.slice(offset, offset + 2), 16) / 255);
}

function rgbToHsl(r, g, b) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  let hue = 0, saturation = 0;
  if (max !== min) {
    const delta = max - min;
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    if (max === r) hue = (g - b) / delta + (g < b ? 6 : 0);
    else if (max === g) hue = (b - r) / delta + 2;
    else hue = (r - g) / delta + 4;
    hue /= 6;
  }
  return [hue, saturation, lightness];
}

function hslToRgb(h, s, l) {
  if (!s) return [l, l, l];
  const hueToRgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [hueToRgb(p, q, h + 1 / 3), hueToRgb(p, q, h), hueToRgb(p, q, h - 1 / 3)];
}

/**
 * Build the body in isolation so rear planes cannot contaminate the recolor.
 * The original default keeps every source RGBA byte. A supported alternate
 * hue uses source lightness for the material/shading and the registered body
 * alpha as the exact mask; alpha is never synthesized or changed.
 */
function makeBodySurface(bodyBitmap, bodyAsset, colorId, colorHex, template, canvasFactory) {
  const surface = createCanvas(template.canvas.width, template.canvas.height, canvasFactory);
  const context = context2d(surface);
  const matrix = templatePlacementMatrix(bodyAsset, [template.canvas.width, template.canvas.height]);
  context.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
  context.drawImage(bodyBitmap, 0, 0);
  context.setTransform(1, 0, 0, 1, 0, 0);
  if (colorId === template.defaultOptions.color) return surface;
  const colorMask = template.rules?.colorMask;
  const material = template.rules?.material;
  if (colorMask?.channel !== 'A' || colorMask?.source !== 'bodyNeutral'
    || material?.source !== 'bodyNeutral' || material?.preserveSourceRgba !== true) {
    surface.width = 0;
    surface.height = 0;
    throw error('unsupported-color-mask', 'This template does not define a real body alpha mask and source material layer.');
  }
  const target = rgbToHsl(...hexRgb(colorHex));
  const pixels = context.getImageData(0, 0, surface.width, surface.height);
  const data = pixels.data;
  for (let index = 0; index < data.length; index += 4) {
    if (data[index + 3] === 0) continue;
    const [, , lightness] = rgbToHsl(data[index] / 255, data[index + 1] / 255, data[index + 2] / 255);
    const [r, g, b] = hslToRgb(target[0], target[1], lightness);
    data[index] = Math.round(r * 255);
    data[index + 1] = Math.round(g * 255);
    data[index + 2] = Math.round(b * 255);
  }
  context.putImageData(pixels, 0, 0);
  return surface;
}

export function isRenderResultCurrent(result, draft, template) {
  if (!result || result.status !== 'success' || !draft || !template) return false;
  return result.sessionId === draft.sessionId
    && result.revision === draft.revision
    && result.artworkId === draft.baseArtworkId
    && result.artworkVersion === draft.baseArtworkVersion
    && result.templateId === template.id
    && result.templateVersion === template.version
    && result.options && stableOptions(result.options) === stableOptions(draft.options);
}

/** Render one immutable Draft revision to the exact canvas later exposed as preview. */
export async function renderDraft({
  draft,
  template,
  loader,
  assetRegistry,
  resolveAsset,
  sessionId = draft?.sessionId,
  signal,
  canvasFactory
} = {}) {
  if (!draft || draft.kind !== 'character-studio-draft') throw error('invalid-draft', 'A valid in-memory CharacterStudio Draft is required.');
  if (!template || template.id !== draft.templateId || template.version !== draft.templateVersion) throw error('template-binding-mismatch', 'Draft and renderer Template versions do not match.');
  if (sessionId !== draft.sessionId) throw error('session-mismatch', 'Draft render request belongs to a different Studio session.');
  if (!loader || typeof loader.acquire !== 'function') throw error('loader-required', 'A trusted template asset loader is required.');
  const options = assertValidTemplateOptions(template, draft.options);
  const width = template.canvas?.width;
  const height = template.canvas?.height;
  if (!Number.isSafeInteger(width) || !Number.isSafeInteger(height) || width < 1 || height < 1) throw error('invalid-template-canvas', 'Template canvas dimensions are missing.');
  const canvas = createCanvas(width, height, canvasFactory);
  const context = context2d(canvas);
  const resolveContext = { assetRegistry, resolveAsset, loader, template };
  const resolve = reference => resolveAssetRecord(reference, resolveContext);
  const required = getRequiredTemplateAssets(template, options);
  const resolvedRows = required.map(reference => resolve(reference));
  const recordsById = new Map(resolvedRows.map(record => [record.id, record]));
  const accessory = options.accessory === 'none' ? null : template.layers.accessories[options.accessory];
  const glasses = options.glasses === 'none' ? null : template.layers.glasses[options.glasses];
  const accessoryRearPlacement = accessory?.rearPlacement || 'under-body';
  if (accessory && !['under-body', 'over-body'].includes(accessoryRearPlacement)) {
    throw error('unsupported-accessory-rear-placement', `Unsupported accessory rear-plane placement: ${accessoryRearPlacement}`);
  }
  const layerOrder = [
    ...(glasses ? ['glasses-rear'] : []),
    ...(accessory && accessoryRearPlacement === 'under-body' ? ['accessory-rear'] : []),
    'body',
    ...(accessory && accessoryRearPlacement === 'over-body' ? ['accessory-rear'] : []),
    'eyes',
    ...(glasses ? ['glasses-front'] : []),
    ...(accessory ? ['accessory-front'] : [])
  ];
  const recipeKey = recipeFor({ ...draft, options }, template, resolvedRows, layerOrder);
  const resultBase = {
    sessionId,
    revision: draft.revision,
    recipeKey,
    options: freeze({ ...options }),
    artworkId: draft.baseArtworkId,
    artworkVersion: draft.baseArtworkVersion,
    templateId: template.id,
    templateVersion: template.version,
    width,
    height,
    canvas
  };
  let released = false;
  const release = () => {
    if (released) return;
    released = true;
    try { canvas.width = 0; canvas.height = 0; } catch { /* Release a detached canvas best-effort. */ }
  };

  try {
    const bodyReference = template.layers.bodyNeutral;
    const bodyAsset = resolve(bodyReference);
    const drawReference = async (reference, composite = 'source-over') => {
      if (!reference) return;
      const assetRecord = recordsById.get(reference.id) || resolve(reference);
      const lease = await loader.acquire(assetRecord, { signal, purpose: reference.purpose });
      try {
        if (signal?.aborted) throw typeof DOMException === 'function' ? new DOMException('Render aborted.', 'AbortError') : Object.assign(new Error('Render aborted.'), { name: 'AbortError' });
        drawLayer(context, lease, composite, [width, height]);
      } finally {
        lease.release();
      }
    };

    // Template metadata decides whether an accessory's rear plane sits behind
    // or in front of the body. This supports a cap crown that belongs over the
    // orb while keeping headphones naturally hidden by the body silhouette.
    if (glasses) await drawReference(glasses.rear);
    if (accessory && accessoryRearPlacement === 'under-body') await drawReference(accessory.rear);
    const bodyLayerForTint = await loader.acquire(bodyAsset, { signal, purpose: bodyReference.purpose });
    try {
      if (signal?.aborted) throw typeof DOMException === 'function' ? new DOMException('Render aborted.', 'AbortError') : Object.assign(new Error('Render aborted.'), { name: 'AbortError' });
      const colorDefinition = template.options.color.find(option => option.id === options.color);
      if (!colorDefinition?.hex) throw error('missing-color-value', `Template color ${options.color} has no approved render value.`);
      const bodySurface = makeBodySurface(bodyLayerForTint.bitmap, bodyAsset, options.color, colorDefinition.hex, template, canvasFactory);
      context.drawImage(bodySurface, 0, 0);
      bodySurface.width = 0;
      bodySurface.height = 0;
    } finally {
      bodyLayerForTint.release();
    }
    if (accessory && accessoryRearPlacement === 'over-body') await drawReference(accessory.rear);
    await drawReference(template.layers.eyes[options.eyes]);
    if (glasses) await drawReference(glasses.front);
    if (accessory) await drawReference(accessory.front);

    if (signal?.aborted) throw typeof DOMException === 'function' ? new DOMException('Render aborted.', 'AbortError') : Object.assign(new Error('Render aborted.'), { name: 'AbortError' });
    const rendered = { ...resultBase, status: 'success', error: null, release };
    return Object.freeze(rendered);
  } catch (cause) {
    release();
    const wrapped = cause?.name === 'AbortError' ? cause : error(cause?.code || 'render-failed', cause?.message || 'Template render failed.', { cause });
    wrapped.sessionId = sessionId;
    wrapped.revision = draft.revision;
    wrapped.recipeKey = recipeKey;
    throw wrapped;
  }
}

/** Capture private immutable pixels so later Draft changes cannot alter an export. */
export function createExportSnapshot(successResult) {
  if (!successResult || successResult.status !== 'success' || !successResult.canvas) throw error('render-not-successful', 'Only a successful current render can be exported.');
  const context = successResult.canvas.getContext('2d', { alpha: true, willReadFrequently: true });
  if (!context) throw error('canvas-context-unavailable', 'Cannot snapshot the current transparent render.');
  const pixels = context.getImageData(0, 0, successResult.width, successResult.height);
  const copy = new Uint8ClampedArray(pixels.data);
  const snapshot = freeze({
    kind: 'local-draft-export',
    sessionId: successResult.sessionId,
    revision: successResult.revision,
    recipeKey: successResult.recipeKey,
    options: { ...successResult.options },
    artworkId: successResult.artworkId,
    artworkVersion: successResult.artworkVersion,
    templateId: successResult.templateId,
    templateVersion: successResult.templateVersion,
    width: successResult.width,
    height: successResult.height,
    mime: 'image/png',
    exportStatus: 'local-draft'
  });
  exportPixels.set(snapshot, copy);
  return snapshot;
}

export async function exportSnapshot(snapshot, { canvasFactory } = {}) {
  const pixels = exportPixels.get(snapshot);
  if (!pixels || snapshot?.kind !== 'local-draft-export') throw error('invalid-export-snapshot', 'Export requires a frozen successful Draft snapshot.');
  const canvas = createCanvas(snapshot.width, snapshot.height, canvasFactory);
  const context = context2d(canvas);
  const imageData = context.createImageData(snapshot.width, snapshot.height);
  imageData.data.set(pixels);
  context.putImageData(imageData, 0, 0);
  try {
    let blob;
    if (typeof canvas.convertToBlob === 'function') blob = await canvas.convertToBlob({ type: 'image/png' });
    else blob = await new Promise((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(error('png-encode-failed', 'The browser could not encode the frozen Draft as PNG.')), 'image/png'));
    if (!blob || blob.type !== 'image/png') throw error('png-encode-failed', 'The browser did not return a PNG for this Draft.');
    return blob;
  } finally {
    canvas.width = 0;
    canvas.height = 0;
  }
}
