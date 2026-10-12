import {
  assertValidTemplateOptions,
  getRequiredTemplateAssets,
  getCanonicalTemplateFields,
  getTemplateRecipe,
  resolveTemplateAsset,
  templateSchemaVersion,
  validateTemplateDefinition
} from './studio-edit-templates.js?v=102';
import { normalizeTemplatePlacement, templatePlacementMatrix } from './studio-preview-loader.js?v=102';

export const STUDIO_RENDERER_REVISION = 'studio-renderer-20261011-v100-declarative-recipes-1';
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
  return Object.keys(options || {}).sort().map(key => `${key}=${options[key]}`).join('&');
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
  if (templateSchemaVersion(template) === 2) {
    const ownerTemplateId = typeof record.owner === 'string' ? record.owner : record.owner?.templateId;
    const ownerArtworkId = record.owner?.artworkId ?? record.owner?.artworkBinding?.artworkId;
    const ownerArtworkVersion = record.owner?.artworkVersion ?? record.owner?.artworkBinding?.artworkVersion;
    if (ownerTemplateId !== template.id
      || ownerArtworkId !== template.artworkBinding.artworkId
      || ownerArtworkVersion !== template.artworkBinding.artworkVersion) {
      throw error('template-layer-owner-mismatch', `Template layer is not owned by the exact Artwork/Template binding: ${reference.id}`, { assetId: reference.id, templateId: template.id });
    }
  }
  if (templateSchemaVersion(template) !== 2
    && (record.width !== template.canvas.width || record.height !== template.canvas.height)) {
    throw error('template-layer-canvas-mismatch', `Template layer uses a different canvas: ${reference.id}`, { expected: [template.canvas.width, template.canvas.height], actual: [record.width, record.height] });
  }
  try { normalizeTemplatePlacement(record, [template.canvas.width, template.canvas.height], template.anchors || null); }
  catch (cause) {
    throw error('template-layer-placement-invalid', `Template layer placement is invalid: ${reference.id}`, { assetId: reference.id, cause });
  }
  return record;
}

function recipeFor(draft, template, assetRecords, layerOrder, recipeId = null, anchors = null) {
  const material = assetRecords.map(asset => {
    const placement = normalizeTemplatePlacement(asset, [template.canvas.width, template.canvas.height], anchors);
    const { pivot, scale, shear, rotationDegrees } = placement.transform;
    const semanticAnchor = recipeId ? `;anchor=${placement.anchor};source=${placement.sourceAnchor?.join(',') || '-'}` : '';
    return `${asset.id}@${asset.version}:${asset.sha256}:placement=${placement.offset.join(',')}${semanticAnchor};pivot=${pivot.join(',')};scale=${scale.join(',')};shear=${shear.join(',')};rotation=${rotationDegrees}`;
  }).join('|');
  return `${STUDIO_RENDERER_REVISION}|${template.id}@${template.version}|${draft.baseArtworkId}@${draft.baseArtworkVersion}|${stableOptions(draft.options)}|recipe=${recipeId || 'legacy'}|layer-order=${layerOrder.join('>')}|${material}`;
}

function drawLayer(context, lease, composite = 'source-over', expectedCanvas, anchors = null) {
  context.save();
  context.globalCompositeOperation = composite;
  context.globalAlpha = 1;
  const matrix = templatePlacementMatrix(lease.asset, expectedCanvas, anchors);
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

const v2AssetKey = reference => `${reference?.id || ''}\u0000${reference?.version || ''}\u0000${reference?.purpose || ''}`;

function selectedOption(template, field, optionId) {
  return template.options?.[field]?.find(option => option.id === optionId) || null;
}

function v2Semantics(template, options) {
  const semantics = {};
  for (const language of ['en', 'zh-CN']) {
    const localized = {
      identity: template.identitySemanticsByLanguage?.[language] || ''
    };
    for (const field of getCanonicalTemplateFields(template)) {
      localized[field] = selectedOption(template, field, options[field])?.semanticByLanguage?.[language] || '';
    }
    semantics[language] = localized;
  }
  return freeze(semantics);
}

function applyTemplateMask(surfaceContext, maskLease, anchors, expectedCanvas, operation) {
  surfaceContext.save();
  surfaceContext.globalCompositeOperation = operation;
  surfaceContext.globalAlpha = 1;
  const matrix = templatePlacementMatrix(maskLease.asset, expectedCanvas, anchors);
  surfaceContext.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
  surfaceContext.drawImage(maskLease.bitmap, 0, 0);
  surfaceContext.restore();
}

function tintMaskedLayer(surfaceContext, maskLease, color, anchors, expectedCanvas, canvasFactory) {
  const target = rgbToHsl(...hexRgb(color));
  const maskCanvas = createCanvas(expectedCanvas[0], expectedCanvas[1], canvasFactory);
  try {
    const maskContext = context2d(maskCanvas);
    const matrix = templatePlacementMatrix(maskLease.asset, expectedCanvas, anchors);
    maskContext.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
    maskContext.drawImage(maskLease.bitmap, 0, 0);
    const pixels = surfaceContext.getImageData(0, 0, expectedCanvas[0], expectedCanvas[1]);
    const maskPixels = maskContext.getImageData(0, 0, expectedCanvas[0], expectedCanvas[1]).data;
    const data = pixels.data;
    for (let index = 0; index < data.length; index += 4) {
      const maskAlpha = maskPixels[index + 3] / 255;
      if (data[index + 3] === 0 || maskAlpha === 0) continue;
      const source = [data[index], data[index + 1], data[index + 2]];
      const [, , lightness] = rgbToHsl(source[0] / 255, source[1] / 255, source[2] / 255);
      const [red, green, blue] = hslToRgb(target[0], target[1], lightness);
      data[index] = Math.round(source[0] + (red * 255 - source[0]) * maskAlpha);
      data[index + 1] = Math.round(source[1] + (green * 255 - source[1]) * maskAlpha);
      data[index + 2] = Math.round(source[2] + (blue * 255 - source[2]) * maskAlpha);
    }
    surfaceContext.putImageData(pixels, 0, 0);
  } finally {
    maskCanvas.width = 0;
    maskCanvas.height = 0;
  }
}

function v2LayerReferenceMetadata(layer, recordsByRef, template) {
  const refs = [layer.asset, layer.mask?.asset, layer.tint?.mask].filter(Boolean);
  const resolved = refs.map(reference => {
    const record = recordsByRef.get(v2AssetKey(reference));
    if (!record) return null;
    const placement = normalizeTemplatePlacement(record, [template.canvas.width, template.canvas.height], template.anchors || null);
    const declaration = placement.anchor === 'canvas' ? null : template.anchors?.[placement.anchor];
    return {
      id: record.id,
      version: record.version,
      purpose: record.purpose,
      sha256: record.sha256,
      placement,
      templateAnchorPoint: Array.isArray(declaration) ? declaration : declaration?.point || null
    };
  }).filter(Boolean);
  return freeze({ slot: layer.slot, assets: resolved });
}

async function renderV2Draft({ draft, template, loader, options, resolve, signal, canvasFactory, sessionId, width, height }) {
  const definition = validateTemplateDefinition(template);
  if (!definition.valid) {
    throw error('invalid-template-definition', `Template ${template.id} has an invalid v2 definition.`, { definitionErrors: definition.errors });
  }
  const recipe = getTemplateRecipe(template, options);
  if (!recipe) throw error('unregistered-recipe', 'No exact registered recipe matches the five selected options.');
  const references = getRequiredTemplateAssets(template, options, { includeAllOptionThumbnails: false });
  const resolvedRows = references.map(reference => resolve(reference));
  const recordsByRef = new Map(resolvedRows.map(record => [v2AssetKey(record), record]));
  const canvas = createCanvas(width, height, canvasFactory);
  const context = context2d(canvas);
  const layerOrder = recipe.layers.map(layer => layer.slot);
  const recipeKey = recipeFor({ ...draft, options }, template, resolvedRows, layerOrder, recipe.id, template.anchors || null);
  const resultBase = {
    schemaVersion: 2,
    sessionId,
    revision: draft.revision,
    recipeId: recipe.id,
    recipeKey,
    options: freeze({ ...options }),
    semantics: v2Semantics(template, options),
    layerRefs: freeze(recipe.layers.map(layer => v2LayerReferenceMetadata(layer, recordsByRef, template))),
    layerOrder: freeze([...layerOrder]),
    rendererRevision: STUDIO_RENDERER_REVISION,
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
    try { canvas.width = 0; canvas.height = 0; } catch { /* Detached canvases are best-effort. */ }
  };

  try {
    for (const layer of recipe.layers) {
      if (signal?.aborted) throw typeof DOMException === 'function' ? new DOMException('Render aborted.', 'AbortError') : Object.assign(new Error('Render aborted.'), { name: 'AbortError' });
      const record = recordsByRef.get(v2AssetKey(layer.asset)) || resolve(layer.asset);
      const layerLease = await loader.acquire(record, { signal, purpose: layer.asset.purpose });
      const layerSurface = createCanvas(width, height, canvasFactory);
      try {
        const layerContext = context2d(layerSurface);
        const layerMatrix = templatePlacementMatrix(layerLease.asset, [width, height], template.anchors || null);
        layerContext.setTransform(layerMatrix.a, layerMatrix.b, layerMatrix.c, layerMatrix.d, layerMatrix.e, layerMatrix.f);
        layerContext.drawImage(layerLease.bitmap, 0, 0);
        layerContext.setTransform(1, 0, 0, 1, 0, 0);

        if (layer.tint) {
          const colorOption = selectedOption(template, layer.tint.optionField, options[layer.tint.optionField]);
          const color = colorOption?.zoneColors?.[layer.tint.zone]
            || (layer.tint.zone === 'body' ? colorOption?.hex : null);
          if (!color) throw error('missing-color-zone', `Color selection has no ${layer.tint.zone} value.`, { field: layer.tint.optionField, zone: layer.tint.zone });
          const tintMaskRef = layer.tint.mask;
          const tintMaskRecord = recordsByRef.get(v2AssetKey(tintMaskRef)) || resolve(tintMaskRef);
          const tintMaskLease = await loader.acquire(tintMaskRecord, { signal, purpose: tintMaskRef.purpose });
          try {
            if (options.colors !== template.defaultOptions.colors) tintMaskedLayer(layerContext, tintMaskLease, color, template.anchors || null, [width, height], canvasFactory);
          } finally {
            tintMaskLease.release();
          }
        }
        if (layer.mask) {
          const maskReference = layer.mask.asset;
          const maskRecord = recordsByRef.get(v2AssetKey(maskReference)) || resolve(maskReference);
          const maskLease = await loader.acquire(maskRecord, { signal, purpose: maskReference.purpose });
          try { applyTemplateMask(layerContext, maskLease, template.anchors || null, [width, height], layer.mask.operation); }
          finally { maskLease.release(); }
        }
        context.save();
        context.globalCompositeOperation = layer.composite || 'source-over';
        context.drawImage(layerSurface, 0, 0);
        context.restore();
      } finally {
        layerLease.release();
        layerSurface.width = 0;
        layerSurface.height = 0;
      }
    }
    if (signal?.aborted) throw typeof DOMException === 'function' ? new DOMException('Render aborted.', 'AbortError') : Object.assign(new Error('Render aborted.'), { name: 'AbortError' });
    return Object.freeze({ ...resultBase, status: 'success', error: null, release });
  } catch (cause) {
    release();
    const wrapped = cause?.name === 'AbortError' ? cause : error(cause?.code || 'render-failed', cause?.message || 'Template render failed.', { cause });
    wrapped.sessionId = sessionId;
    wrapped.revision = draft.revision;
    wrapped.recipeKey = recipeKey;
    throw wrapped;
  }
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
  if (template.artworkBinding?.artworkId !== draft.baseArtworkId || template.artworkBinding?.artworkVersion !== draft.baseArtworkVersion) {
    throw error('artwork-binding-mismatch', 'Draft and renderer are not bound to the exact Artwork version.');
  }
  if (sessionId !== draft.sessionId) throw error('session-mismatch', 'Draft render request belongs to a different Studio session.');
  if (!loader || typeof loader.acquire !== 'function') throw error('loader-required', 'A trusted template asset loader is required.');
  const options = assertValidTemplateOptions(template, draft.options);
  const width = template.canvas?.width;
  const height = template.canvas?.height;
  if (!Number.isSafeInteger(width) || !Number.isSafeInteger(height) || width < 1 || height < 1) throw error('invalid-template-canvas', 'Template canvas dimensions are missing.');
  const resolveContext = { assetRegistry, resolveAsset, loader, template };
  const resolve = reference => resolveAssetRecord(reference, resolveContext);
  if (templateSchemaVersion(template) === 2) {
    return renderV2Draft({ draft, template, loader, options, resolve, signal, canvasFactory, sessionId, width, height });
  }
  const canvas = createCanvas(width, height, canvasFactory);
  const context = context2d(canvas);
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
    schemaVersion: 1,
    sessionId,
    revision: draft.revision,
    recipeKey,
    rendererRevision: STUDIO_RENDERER_REVISION,
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
    schemaVersion: successResult.schemaVersion || 1,
    sessionId: successResult.sessionId,
    revision: successResult.revision,
    recipeId: successResult.recipeId || null,
    recipeKey: successResult.recipeKey,
    options: { ...successResult.options },
    semantics: successResult.semantics || null,
    layerRefs: successResult.layerRefs || Object.freeze([]),
    layerOrder: successResult.layerOrder || Object.freeze([]),
    rendererRevision: successResult.rendererRevision || STUDIO_RENDERER_REVISION,
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
