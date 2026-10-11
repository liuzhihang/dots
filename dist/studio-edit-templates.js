// Controlled editor profiles for the two exact orb artworks.  Layer references
// are resolved from a separately reviewed asset registry at runtime; this file
// deliberately contains no filesystem paths and cannot grant approval itself.
import { normalizeTemplatePlacement } from './studio-preview-loader.js?v=100';
import { CHARACTER_ADJUSTMENT_TEMPLATES } from './studio-edit-template-data.js?v=100';

export const EDIT_TEMPLATE_REVISION = 'edit-templates-20261011-v100';

const freeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) freeze(child);
  return Object.freeze(value);
};

const asset = (id, purpose, version = 'v1') => Object.freeze({ id, version, purpose });
const dotsId = (plane, purpose = plane) => asset(`template:dots-orb-v1:${plane}`, purpose);
const dotsOptionId = (group, option, purpose) => asset(`template:dots-orb-v1:${group}:${option}`, purpose);
const grokId = (plane, purpose = plane) => asset(`template:grok-orb-v1:${plane}`, purpose);
const grokOptionId = (group, option, purpose, version = 'v1') => asset(`template:grok-orb-v1:${group}:${option}`, purpose, version);
const ART_APPROVAL_RECORD = 'design/acceptance/current-20261010-v99/release-20261011/approval.json';

const commonRules = {
  geometry: 'orb',
  shape: { fixed: true, id: 'orb' },
  colorMask: { source: 'bodyNeutral', channel: 'A', blend: 'source-hsl-lightness-replacement' },
  material: { source: 'bodyNeutral', preserveSourceRgba: true },
  occlusion: {
    status: 'notApplicable',
    mode: 'notApplicable',
    reason: 'Fixed transparent-canvas layer order provides rear/body/front occlusion; add a real mask if visual review finds a pixel-level intersection.',
    appliesTo: 'declared rear/front accessory pair'
  }
};

const definitions = [
  {
    id: 'dots-orb-v1',
    version: 'v1',
    family: 'dots',
    status: 'approved',
    engineeringStatus: 'passed',
    artApproval: { status: 'approved', record: ART_APPROVAL_RECORD, approvalId: 'dots-current-v99-artwork-ui-template-approval-20261011', scope: 'dots-orb-v1@v1 + candidate-dots-20261005@v2; 12 registered configurations' },
    artworkBinding: { artworkId: 'candidate-dots-20261005', artworkVersion: 'v2' },
    canvas: { width: 1254, height: 1254 },
    geometry: 'orb',
    defaultOptions: { color: 'blue', shape: 'orb', eyes: 'original', glasses: 'none', accessory: 'headphones' },
    options: {
      color: [
        { id: 'blue', hex: '#3989e5', labelByLanguage: { en: 'Blue', 'zh-CN': '蓝色' } },
        { id: 'warm-yellow', hex: '#f1c84b', labelByLanguage: { en: 'Warm yellow', 'zh-CN': '暖黄色' } }
      ],
      eyes: [
        { id: 'original', labelByLanguage: { en: 'Original oval eyes', 'zh-CN': '原椭圆眼' } },
        { id: 'closed', labelByLanguage: { en: 'Closed eyes (static)', 'zh-CN': '闭眼（静态）' } }
      ],
      glasses: [
        { id: 'none', labelByLanguage: { en: 'None', 'zh-CN': '无' } },
        { id: 'round', labelByLanguage: { en: 'Round glasses', 'zh-CN': '圆框眼镜' } }
      ],
      accessory: [
        { id: 'none', labelByLanguage: { en: 'None', 'zh-CN': '无' } },
        { id: 'headphones', labelByLanguage: { en: 'Original headphones', 'zh-CN': '原耳机' } }
      ]
    },
    conflicts: [
      {
        when: { glasses: 'round', accessory: 'headphones' },
        code: 'dots-glasses-headphones-conflict',
        messageByLanguage: {
          en: 'Round glasses and the over-ear headphones do not fit this Dots template together. Keep the current choice and change the other option explicitly.',
          'zh-CN': '圆框眼镜与包耳式耳机在这套 Dots 模板中不兼容。当前选择会保留，请明确更改另一项。'
        }
      }
    ],
    layers: {
      bodyNeutral: dotsId('body-neutral', 'body-neutral'),
      eyes: {
        original: dotsOptionId('eyes', 'original', 'eyes'),
        closed: dotsOptionId('eyes', 'closed', 'eyes')
      },
      glasses: {
        round: {
          rear: dotsOptionId('glasses:round', 'rear', 'accessory-rear'),
          front: dotsOptionId('glasses:round', 'front', 'accessory-front'),
          occlusion: commonRules.occlusion
        }
      },
      accessories: {
        headphones: {
          rear: dotsOptionId('headphones:default', 'rear', 'accessory-rear'),
          front: dotsOptionId('headphones:default', 'front', 'accessory-front'),
          rearPlacement: 'under-body',
          occlusion: commonRules.occlusion
        }
      }
    },
    rules: commonRules
  },
  {
    id: 'grok-orb-v1',
    version: 'v1',
    family: 'grok',
    status: 'approved',
    engineeringStatus: 'passed',
    artApproval: { status: 'approved', record: ART_APPROVAL_RECORD, approvalId: 'dots-current-v99-artwork-ui-template-approval-20261011', scope: 'grok-orb-v1@v1 + candidate-grok-20261005@v2; 16 registered configurations' },
    artworkBinding: { artworkId: 'candidate-grok-20261005', artworkVersion: 'v2' },
    canvas: { width: 1254, height: 1254 },
    geometry: 'orb',
    defaultOptions: { color: 'purple', shape: 'orb', eyes: 'angled-capsules', glasses: 'none', accessory: 'none' },
    options: {
      color: [
        { id: 'purple', hex: '#8269d8', labelByLanguage: { en: 'Purple', 'zh-CN': '紫色' } },
        { id: 'mint', hex: '#7ad4bf', labelByLanguage: { en: 'Mint', 'zh-CN': '薄荷绿' } }
      ],
      eyes: [
        { id: 'angled-capsules', labelByLanguage: { en: 'Angled capsules', 'zh-CN': '倾斜胶囊眼' } },
        { id: 'upright-capsules', labelByLanguage: { en: 'Upright capsules', 'zh-CN': '较直胶囊眼' } }
      ],
      glasses: [
        { id: 'none', labelByLanguage: { en: 'None', 'zh-CN': '无' } },
        { id: 'round', labelByLanguage: { en: 'Round glasses', 'zh-CN': '圆框眼镜' } }
      ],
      accessory: [
        { id: 'none', labelByLanguage: { en: 'None', 'zh-CN': '无' } },
        { id: 'soft-cap', labelByLanguage: { en: 'Soft cap', 'zh-CN': '软帽' } }
      ]
    },
    conflicts: [],
    layers: {
      bodyNeutral: grokId('body-neutral', 'body-neutral'),
      eyes: {
        'angled-capsules': grokOptionId('eyes', 'angled-capsules', 'eyes', 'v2'),
        'upright-capsules': grokOptionId('eyes', 'upright-capsules', 'eyes', 'v2')
      },
      glasses: {
        round: {
          rear: grokOptionId('glasses:round', 'rear', 'accessory-rear', 'v2'),
          front: grokOptionId('glasses:round', 'front', 'accessory-front'),
          occlusion: commonRules.occlusion
        }
      },
      accessories: {
        'soft-cap': {
          rear: grokOptionId('cap:soft', 'rear', 'accessory-rear', 'v2'),
          front: grokOptionId('cap:soft', 'front', 'accessory-front', 'v2'),
          rearPlacement: 'over-body',
          occlusion: commonRules.occlusion
        }
      }
    },
    rules: commonRules
  }
];

// Keep the two v1 profiles available to isolated regression tests, but do not
// offer them for production binding. The approved v2 package is the complete
// 44-Template public registry for the corresponding 44 Artwork versions.
export const LEGACY_TEMPLATE_REGISTRY = freeze(definitions);
export const TEMPLATE_REGISTRY = freeze(CHARACTER_ADJUSTMENT_TEMPLATES);

export class TemplateOptionError extends Error {
  constructor(code, message, messageByLanguage = null) {
    super(message);
    this.name = 'TemplateOptionError';
    this.code = code;
    this.messageByLanguage = messageByLanguage;
  }
}

export function templateForArtworkBinding(artwork, registry = TEMPLATE_REGISTRY) {
  if (!artwork || typeof artwork !== 'object' || !Array.isArray(registry)) return null;
  const artworkId = artwork.id ?? artwork.artworkId;
  const artworkVersion = artwork.version ?? artwork.artworkVersion;
  return registry.find(template => template?.artworkBinding?.artworkId === artworkId
    && template.artworkBinding.artworkVersion === artworkVersion) ?? null;
}

function productionReady(template, artwork) {
  return template.status === 'approved'
    && template.engineeringStatus === 'passed'
    && template.artApproval?.status === 'approved'
    && artwork?.artApproval?.status === 'approved'
    && (artwork.publicationStatus ?? artwork.status) === 'published';
}

/** Pending templates are available only to an explicitly injected review harness. */
export function getTemplateForArtwork(artwork, { reviewHarness = false, registry = TEMPLATE_REGISTRY } = {}) {
  const template = templateForArtworkBinding(artwork, registry);
  if (!template) return null;
  if (productionReady(template, artwork)) return template;
  if (reviewHarness === true && template.status === 'pending') {
    return freeze({ ...template, accessMode: 'review-only', reviewOnly: true });
  }
  return null;
}

export const CANONICAL_TEMPLATE_FIELDS = Object.freeze(['appearance', 'colors', 'face', 'clothing', 'accessories']);
export const DOTS_GROK_TEMPLATE_FIELDS = Object.freeze(['appearance', 'colors', 'face', 'accessories']);
const LEGACY_TEMPLATE_FIELDS = Object.freeze(['color', 'eyes', 'glasses', 'accessory']);
const LOCALES = Object.freeze(['en', 'zh-CN']);

export function templateSchemaVersion(template) {
  return template?.schemaVersion === 2 ? 2 : 1;
}

/** Dots and Grok Bot keep clothing fixed to none; other v2 families expose it. */
export function getCanonicalTemplateFields(template) {
  if (templateSchemaVersion(template) !== 2) return Object.freeze(LEGACY_TEMPLATE_FIELDS.filter(key => Array.isArray(template?.options?.[key]) && template.options[key].length > 0));
  return ['dots', 'grok'].includes(template.family) ? DOTS_GROK_TEMPLATE_FIELDS : CANONICAL_TEMPLATE_FIELDS;
}

/** Return only real option groups declared by this exact template. */
export function getTemplateOptionFields(template) {
  if (!template || !template.options || typeof template.options !== 'object') return Object.freeze([]);
  const v2 = templateSchemaVersion(template) === 2;
  const keys = getCanonicalTemplateFields(template);
  return Object.freeze(keys.flatMap(key => {
    if (!v2 && !Array.isArray(template.options[key])) return [];
    return [Object.freeze({ key, options: Array.isArray(template.options[key]) ? template.options[key] : Object.freeze([]) })];
  }));
}

function optionFieldKeys(template) {
  return getTemplateOptionFields(template).map(field => field.key);
}

function assetRefKey(reference) {
  return `${reference?.id || ''}\u0000${reference?.version || ''}\u0000${reference?.purpose || ''}`;
}

function collectRefs(values) {
  const unique = new Map();
  for (const reference of values) {
    if (reference && typeof reference.id === 'string' && typeof reference.version === 'string' && typeof reference.purpose === 'string') {
      unique.set(assetRefKey(reference), reference);
    }
  }
  return [...unique.values()];
}

function recipeLayerRefs(recipe) {
  const layerAssets = [];
  const maskAssets = [];
  for (const layer of recipe?.layers || []) {
    if (layer?.asset) layerAssets.push(layer.asset);
    if (layer?.mask?.asset) maskAssets.push(layer.mask.asset);
    if (layer?.tint?.mask) maskAssets.push(layer.tint.mask);
  }
  return { layerAssets: collectRefs(layerAssets), maskAssets: collectRefs(maskAssets) };
}

function findOption(template, field, optionId) {
  return getTemplateOptionFields(template).find(row => row.key === field)?.options.find(option => option.id === optionId) || null;
}

/**
 * Give the UI references for an option's real thumbnail and the assets that
 * participate in legal recipes containing it. No reference grants capability.
 */
export function getTemplateOptionAssetRefs(template, field, optionId) {
  const option = findOption(template, field, optionId);
  if (!option) return Object.freeze({ thumbnailAssets: Object.freeze([]), layerAssets: Object.freeze([]), maskAssets: Object.freeze([]) });
  const thumbnailAssets = collectRefs(option.thumbnailAssets || []);
  const layerAssets = [];
  const maskAssets = [];
  if (templateSchemaVersion(template) === 2) {
    for (const recipe of template.recipes || []) {
      if (recipe.selections?.[field] !== optionId) continue;
      const refs = recipeLayerRefs(recipe);
      layerAssets.push(...refs.layerAssets);
      maskAssets.push(...refs.maskAssets);
    }
  } else {
    const layer = field === 'eyes' ? template.layers?.eyes?.[optionId]
      : field === 'glasses' ? template.layers?.glasses?.[optionId]
        : field === 'accessory' ? template.layers?.accessories?.[optionId]
          : null;
    if (layer?.id && layer.version && layer.purpose) layerAssets.push(layer);
    else if (layer && typeof layer === 'object') {
      if (layer.rear) layerAssets.push(layer.rear);
      if (layer.front) layerAssets.push(layer.front);
    } else if (layer) layerAssets.push(layer);
    if (field === 'color' && template.layers?.bodyNeutral) layerAssets.push(template.layers.bodyNeutral);
  }
  return freeze({
    thumbnailAssets: collectRefs(thumbnailAssets),
    layerAssets: collectRefs(layerAssets),
    maskAssets: collectRefs(maskAssets)
  });
}

export function normalizeTemplateOptions(template, options = {}) {
  if (!template || !template.defaultOptions) throw new TypeError('A registered template is required.');
  if (templateSchemaVersion(template) === 2) {
    const normalized = Object.fromEntries(getCanonicalTemplateFields(template).map(field => [field, options[field] ?? template.defaultOptions[field]]));
    if (['dots', 'grok'].includes(template.family)) normalized.clothing = 'none';
    return normalized;
  }
  return {
    color: options.color ?? template.defaultOptions.color,
    shape: 'orb',
    eyes: options.eyes ?? template.defaultOptions.eyes,
    glasses: options.glasses ?? template.defaultOptions.glasses,
    accessory: options.accessory ?? template.defaultOptions.accessory
  };
}

function selectionsMatch(a, b, fields = CANONICAL_TEMPLATE_FIELDS) {
  return fields.every(field => a?.[field] === b?.[field]);
}

function firstConflict(template, options) {
  return (template.conflicts || []).find(rule => Object.entries(rule.when || {}).every(([field, value]) => options[field] === value)) || null;
}

export function validateTemplateOptions(template, inputOptions = {}) {
  if (!template || !template.options) {
    return { valid: false, options: null, errors: [{ code: 'unknown-template', message: 'Unknown edit template.' }] };
  }
  const options = normalizeTemplateOptions(template, inputOptions);
  const errors = [];
  const fields = optionFieldKeys(template);
  const v2 = templateSchemaVersion(template) === 2;
  for (const field of fields) {
    const supported = template.options[field].some(option => option.id === options[field]);
    if (!supported) errors.push({ code: `unsupported-${field}`, field, value: options[field], message: `This template does not support ${field}=${options[field]}.` });
  }
  const fixedClothing = v2 && ['dots', 'grok'].includes(template.family);
  const allowedInputFields = new Set([...fields, ...(v2 ? (fixedClothing ? ['clothing'] : []) : ['shape'])]);
  for (const field of Object.keys(inputOptions || {})) {
    if (!allowedInputFields.has(field)) errors.push({ code: `unsupported-${field}`, field, value: inputOptions[field], message: `This template does not support ${field}.` });
  }
  if (fixedClothing && inputOptions?.clothing != null && inputOptions.clothing !== 'none') {
    errors.push({ code: 'clothing-disabled-for-family', field: 'clothing', value: inputOptions.clothing, message: 'Clothing is fixed to none for Dots and Grok Bot templates.' });
  }
  if (!v2 && inputOptions.shape != null && inputOptions.shape !== 'orb') {
    errors.push({ code: 'unsupported-shape', field: 'shape', value: inputOptions.shape, message: 'Shape is fixed to the registered orb geometry.' });
  }
  if (!errors.length) {
    const conflict = firstConflict(template, options);
    if (conflict) errors.push({ code: conflict.code || 'incompatible-options', message: conflict.messageByLanguage?.en || 'This option combination is not compatible.', messageByLanguage: conflict.messageByLanguage || null, conflict });
  }
  if (!errors.length && v2) {
    const recipe = (template.recipes || []).find(row => selectionsMatch(row.selections, options, getCanonicalTemplateFields(template)));
    if (!recipe) errors.push({ code: 'unregistered-recipe', message: 'This exact option combination has no registered legal recipe.' });
  }
  return { valid: errors.length === 0, options: Object.freeze(options), errors };
}

export function assertValidTemplateOptions(template, options) {
  const result = validateTemplateOptions(template, options);
  if (!result.valid) {
    const error = result.errors[0];
    throw new TemplateOptionError(error.code, error.message, error.messageByLanguage || null);
  }
  return result.options;
}

export function getTemplateRecipe(template, inputOptions = {}) {
  if (templateSchemaVersion(template) !== 2) return null;
  const options = assertValidTemplateOptions(template, inputOptions);
  return (template.recipes || []).find(row => selectionsMatch(row.selections, options, getCanonicalTemplateFields(template))) || null;
}

export function getRequiredTemplateAssets(template, inputOptions = {}, { includeAllOptionThumbnails = true } = {}) {
  const options = assertValidTemplateOptions(template, inputOptions);
  if (templateSchemaVersion(template) === 2) {
    const recipe = getTemplateRecipe(template, options);
    const refs = recipeLayerRefs(recipe);
    const thumbnailRefs = includeAllOptionThumbnails
      ? getTemplateOptionFields(template).flatMap(field => field.options.flatMap(option => option.thumbnailAssets || []))
      : [];
    return collectRefs([...refs.layerAssets, ...refs.maskAssets, ...thumbnailRefs]);
  }
  const refs = [template.layers.bodyNeutral, template.layers.eyes?.[options.eyes]];
  if (!refs[0]) throw new TemplateOptionError('missing-body-layer', 'This Template has no registered neutral body layer.');
  if (!refs[1]) throw new TemplateOptionError('missing-eye-layer', `This Template has no registered ${options.eyes} eye layer.`);
  if (options.glasses !== 'none') {
    const pair = template.layers.glasses?.[options.glasses];
    if (!pair?.rear || !pair?.front) throw new TemplateOptionError('missing-glasses-layer', `This Template has no complete ${options.glasses} glasses layers.`);
    refs.push(pair.rear, pair.front);
  }
  if (options.accessory !== 'none') {
    const pair = template.layers.accessories?.[options.accessory];
    if (!pair?.rear || !pair?.front) throw new TemplateOptionError('missing-accessory-layer', `This Template has no complete ${options.accessory} accessory layers.`);
    refs.push(pair.rear, pair.front);
  }
  return refs.filter(Boolean);
}

/** Validate a v2 declaration independently from publication or art approval. */
export function validateTemplateDefinition(template, { assetRegistry } = {}) {
  const errors = [];
  const add = (code, message, details = {}) => errors.push({ code, message, ...details });
  if (templateSchemaVersion(template) !== 2) return { valid: false, errors: [{ code: 'unsupported-template-schema', message: 'Definition validation requires Template schemaVersion 2.' }] };
  const fields = getCanonicalTemplateFields(template);
  const fixedClothing = ['dots', 'grok'].includes(template.family);
  if (fixedClothing && (template.options?.clothing !== undefined
    || Object.hasOwn(template.defaultOptions || {}, 'clothing')
    || (template.recipes || []).some(recipe => Object.hasOwn(recipe?.selections || {}, 'clothing')))) {
    add('disabled-family-field', 'Dots and Grok Bot v2 Templates must omit clothing options, defaults, and recipe selections; Draft compatibility fixes clothing to none internally.');
  }
  if (fixedClothing && (template.conflicts || []).some(rule => Object.hasOwn(rule?.when || {}, 'clothing'))) {
    add('disabled-family-conflict', 'Dots and Grok Bot v2 Templates cannot use a hidden clothing field in compatibility rules.');
  }
  if (!template.id || !template.version || !template.artworkBinding?.artworkId || !template.artworkBinding?.artworkVersion) {
    add('incomplete-template-binding', 'A v2 Template needs an exact Artwork id/version binding.');
  }
  for (const locale of LOCALES) {
    if (typeof template.identitySemanticsByLanguage?.[locale] !== 'string' || !template.identitySemanticsByLanguage[locale].trim()) {
      add('missing-identity-semantics', `Template identity semantics are missing for ${locale}.`, { locale });
    }
  }
  const optionIds = {};
  for (const field of fields) {
    const rows = template.options?.[field];
    if (!Array.isArray(rows) || rows.length < 2) {
      add('insufficient-options', `The ${field} field needs at least two real options.`, { field });
      optionIds[field] = new Set();
      continue;
    }
    optionIds[field] = new Set();
    for (const option of rows) {
      if (!option || typeof option.id !== 'string' || !option.id || optionIds[field].has(option.id)) {
        add('invalid-option-id', `The ${field} field contains a missing or duplicate option id.`, { field, optionId: option?.id || null });
        continue;
      }
      optionIds[field].add(option.id);
      for (const locale of LOCALES) {
        if (typeof option.labelByLanguage?.[locale] !== 'string' || !option.labelByLanguage[locale].trim()) {
          add('missing-option-label', `Option ${field}=${option.id} needs a ${locale} label.`, { field, optionId: option.id, locale });
        }
        if (typeof option.semanticByLanguage?.[locale] !== 'string' || !option.semanticByLanguage[locale].trim()) {
          add('missing-option-semantics', `Option ${field}=${option.id} needs ${locale} prompt semantics.`, { field, optionId: option.id, locale });
        }
      }
      for (const reference of option.thumbnailAssets || []) {
        if (!reference?.id || !reference.version || !reference.purpose) add('invalid-thumbnail-reference', `Option ${field}=${option.id} has an incomplete thumbnail reference.`, { field, optionId: option.id });
      }
      if (field === 'colors') {
        const zones = option.zoneColors && typeof option.zoneColors === 'object' ? Object.values(option.zoneColors) : (option.hex ? [option.hex] : []);
        if (!zones.length || zones.some(hex => !/^#[\da-f]{6}$/i.test(hex))) {
          add('invalid-color-zones', `Color option ${option.id} needs at least one valid zone color.`, { field, optionId: option.id });
        }
      }
    }
  }
  const defaultOptions = template.defaultOptions;
  if (!defaultOptions || Object.keys(defaultOptions).length !== fields.length
    || fields.some(field => !optionIds[field]?.has(defaultOptions[field]))) {
    add('invalid-default-options', `The v2 default must select exactly one supported value in all ${fields.length} family fields.`);
  }
  if (!Array.isArray(template.recipes) || !template.recipes.length) add('missing-recipes', 'A v2 Template needs at least one explicitly registered legal recipe.');
  const recipeIds = new Set();
  const selectionKeys = new Set();
  const reachable = Object.fromEntries(fields.map(field => [field, new Set()]));
  const assetRows = assetRegistry instanceof Map ? [...assetRegistry.values()] : Array.isArray(assetRegistry) ? assetRegistry : null;
  for (const recipe of template.recipes || []) {
    if (typeof recipe?.id !== 'string' || !recipe.id || recipeIds.has(recipe.id)) add('duplicate-recipe-id', 'Recipe ids must be present and unique.', { recipeId: recipe?.id || null });
    else recipeIds.add(recipe.id);
    const selections = recipe?.selections;
    if (!selections || Object.keys(selections).length !== fields.length
      || fields.some(field => !optionIds[field]?.has(selections[field]))) {
      add('invalid-recipe-selections', `Recipe ${recipe?.id || '(missing id)'} must select one supported value in all ${fields.length} family fields.`, { recipeId: recipe?.id || null });
      continue;
    }
    const selectionKey = fields.map(field => selections[field]).join('\u0000');
    if (selectionKeys.has(selectionKey)) add('duplicate-recipe-selection', 'The same option values cannot be registered by multiple recipes.', { recipeId: recipe.id });
    selectionKeys.add(selectionKey);
    for (const field of fields) reachable[field].add(selections[field]);
    const conflict = firstConflict(template, selections);
    if (conflict) add('recipe-conflicts-with-template', `Recipe ${recipe.id} violates ${conflict.code || 'a declared conflict'}.`, { recipeId: recipe.id, conflictCode: conflict.code || null });
    if (!Array.isArray(recipe.layers) || !recipe.layers.length) {
      add('missing-recipe-layers', `Recipe ${recipe.id} needs an ordered real layer list.`, { recipeId: recipe.id });
      continue;
    }
    const slots = new Set();
    for (const layer of recipe.layers) {
      if (!layer || typeof layer.slot !== 'string' || !layer.slot || slots.has(layer.slot)) add('invalid-layer-slot', `Recipe ${recipe.id} has a missing or duplicate layer slot.`, { recipeId: recipe.id, slot: layer?.slot || null });
      else slots.add(layer.slot);
      if (fixedClothing && (layer?.field === 'clothing' || layer?.category === 'clothing'
        || /clothing|apparel|garment/i.test(`${layer?.slot || ''} ${layer?.asset?.purpose || ''}`))) {
        add('disabled-family-layer', `Dots and Grok Bot recipes cannot include clothing layers.`, { recipeId: recipe.id, slot: layer?.slot || null });
      }
      if (!layer?.asset?.id || !layer.asset.version || !layer.asset.purpose) add('invalid-layer-reference', `Recipe ${recipe.id} has an incomplete layer reference.`, { recipeId: recipe.id, slot: layer?.slot || null });
      if (layer?.composite != null && layer.composite !== 'source-over') add('unsupported-layer-composite', `Recipe ${recipe.id} uses an unsupported composite operation.`, { recipeId: recipe.id, slot: layer.slot });
      const maskEntries = [];
      if (layer?.mask) {
        if (!layer.mask.asset?.id || !layer.mask.asset.version || !layer.mask.asset.purpose || !['destination-in', 'destination-out'].includes(layer.mask.operation)) {
          add('invalid-layer-mask', `Recipe ${recipe.id} has an incomplete or unsupported mask declaration.`, { recipeId: recipe.id, slot: layer.slot });
        } else maskEntries.push(layer.mask.asset);
      }
      if (layer?.tint) {
        if (layer.tint.optionField !== 'colors' || typeof layer.tint.zone !== 'string' || !layer.tint.zone
          || !layer.tint.mask?.id || !layer.tint.mask.version || !layer.tint.mask.purpose || layer.tint.mode !== 'preserve-lightness') {
          add('invalid-layer-tint', `Recipe ${recipe.id} needs a real color-zone mask and preserve-lightness material rule.`, { recipeId: recipe.id, slot: layer.slot });
        } else maskEntries.push(layer.tint.mask);
        const colorOption = template.options?.colors?.find(option => option.id === selections.colors);
        if (layer.tint.zone && !(colorOption?.zoneColors?.[layer.tint.zone] || (layer.tint.zone === 'body' && colorOption?.hex))) {
          add('missing-recipe-color-zone', `Recipe ${recipe.id} has no selected color for zone ${layer.tint.zone}.`, { recipeId: recipe.id, slot: layer.slot, zone: layer.tint.zone });
        }
      }
      if (!assetRows) continue;
      for (const reference of [layer?.asset, layer?.mask?.asset, layer?.tint?.mask].filter(Boolean)) {
        const record = resolveTemplateAsset(reference, assetRows);
        if (!record) {
          add('missing-template-asset', `Recipe ${recipe.id} references an asset that is not in the exact manifest.`, { recipeId: recipe.id, assetId: reference.id });
          continue;
        }
        const ownerTemplateId = typeof record.owner === 'string' ? record.owner : record.owner?.templateId;
        const ownerArtworkId = record.owner?.artworkId ?? record.owner?.artworkBinding?.artworkId;
        const ownerArtworkVersion = record.owner?.artworkVersion ?? record.owner?.artworkBinding?.artworkVersion;
        if (ownerTemplateId !== template.id || ownerArtworkId !== template.artworkBinding.artworkId
          || ownerArtworkVersion !== template.artworkBinding.artworkVersion) {
          add('template-asset-owner-mismatch', `Asset ${reference.id} is not owned by this exact Template/Artwork binding.`, { recipeId: recipe.id, assetId: reference.id });
        }
        if (templateSchemaVersion(template) !== 2
          && (record.width !== template.canvas?.width || record.height !== template.canvas?.height)) {
          add('template-asset-canvas-mismatch', `Asset ${reference.id} does not match the Template canvas.`, { recipeId: recipe.id, assetId: reference.id });
        }
        if (record.alpha?.hasTransparency === false || record.alpha?.hasAlpha === false) {
          add('opaque-template-asset', `Asset ${reference.id} does not preserve alpha.`, { recipeId: recipe.id, assetId: reference.id });
        }
        try {
          normalizeTemplatePlacement(record, [template.canvas.width, template.canvas.height], template.anchors || null);
        } catch (cause) {
          add('invalid-template-anchor', cause.message, { recipeId: recipe.id, assetId: reference.id });
        }
      }
    }
  }
  // A recipe must be reachable in the editor by changing one field at a time
  // from the declared default. Do not rely on callers to jump between states
  // that the UI cannot reach through ordinary single-option interactions.
  const recipeBySelection = new Map();
  for (const recipe of template.recipes || []) {
    const selections = recipe?.selections;
    if (!selections || Object.keys(selections).length !== fields.length
      || fields.some(field => !optionIds[field]?.has(selections[field]))
      || firstConflict(template, selections)) continue;
    const key = fields.map(field => selections[field]).join('\u0000');
    if (!recipeBySelection.has(key)) recipeBySelection.set(key, recipe);
  }
  const validDefault = defaultOptions && fields.every(field => optionIds[field]?.has(defaultOptions[field]));
  if (validDefault) {
    const defaultKey = fields.map(field => defaultOptions[field]).join('\u0000');
    const reached = new Set();
    const queue = recipeBySelection.has(defaultKey) ? [defaultKey] : [];
    while (queue.length) {
      const key = queue.shift();
      if (reached.has(key)) continue;
      reached.add(key);
      const current = recipeBySelection.get(key)?.selections;
      if (!current) continue;
      for (const candidateKey of recipeBySelection.keys()) {
        if (reached.has(candidateKey)) continue;
        const candidate = recipeBySelection.get(candidateKey)?.selections;
        const changedFields = fields.reduce((count, field) => count + (current[field] === candidate?.[field] ? 0 : 1), 0);
        if (changedFields === 1) queue.push(candidateKey);
      }
    }
    for (const [key, recipe] of recipeBySelection) {
      if (!reached.has(key)) add('unreachable-recipe', `Recipe ${recipe.id} cannot be reached from the default by changing one option field at a time.`, { recipeId: recipe.id });
    }
  }
  for (const field of fields) {
    for (const option of optionIds[field] || []) {
      if (!reachable[field]?.has(option)) add('unreachable-option', `Option ${field}=${option} is not used by any legal recipe.`, { field, optionId: option });
    }
  }
  if (assetRows) {
    const thumbnailRefs = getTemplateOptionFields(template).flatMap(field => field.options.flatMap(option => option.thumbnailAssets || []));
    for (const reference of collectRefs(thumbnailRefs)) {
      const record = resolveTemplateAsset(reference, assetRows);
      if (!record) {
        add('missing-template-thumbnail', `Option thumbnail ${reference.id} is not in the exact Template manifest.`, { assetId: reference.id });
        continue;
      }
      const ownerTemplateId = typeof record.owner === 'string' ? record.owner : record.owner?.templateId;
      const ownerArtworkId = record.owner?.artworkId ?? record.owner?.artworkBinding?.artworkId;
      const ownerArtworkVersion = record.owner?.artworkVersion ?? record.owner?.artworkBinding?.artworkVersion;
      if (ownerTemplateId !== template.id
        || ownerArtworkId !== template.artworkBinding.artworkId
        || ownerArtworkVersion !== template.artworkBinding.artworkVersion) {
        add('template-thumbnail-owner-mismatch', `Thumbnail ${reference.id} is not owned by this exact Template/Artwork binding.`, { assetId: reference.id });
      }
      if (templateSchemaVersion(template) !== 2
        && (record.width !== template.canvas?.width || record.height !== template.canvas?.height)) {
        add('template-thumbnail-canvas-mismatch', `Thumbnail ${reference.id} does not match its Template canvas.`, { assetId: reference.id });
      }
      if (record.alpha?.hasTransparency === false || record.alpha?.hasAlpha === false) {
        add('opaque-template-thumbnail', `Thumbnail ${reference.id} does not preserve alpha.`, { assetId: reference.id });
      }
      try {
        normalizeTemplatePlacement(record, [template.canvas.width, template.canvas.height], template.anchors || null);
      } catch (cause) {
        add('invalid-template-thumbnail-placement', cause.message, { assetId: reference.id });
      }
    }
  }
  const defaultRecipe = selectionKeys.has(fields.map(field => defaultOptions?.[field]).join('\u0000'));
  if (!defaultRecipe) add('default-recipe-missing', 'The family default selection has no exact registered legal recipe.');
  return { valid: errors.length === 0, errors, reachable: Object.fromEntries(fields.map(field => [field, [...(reachable[field] || [])]])) };
}

export function assertValidTemplateDefinition(template, options) {
  const result = validateTemplateDefinition(template, options);
  if (!result.valid) throw new TemplateOptionError(result.errors[0].code, result.errors[0].message);
  return template;
}

export function enumerateValidConfigurations(template) {
  if (!template?.options) throw new TypeError('A registered template is required.');
  if (templateSchemaVersion(template) === 2) {
    return (template.recipes || []).map(recipe => Object.freeze({ ...recipe.selections }));
  }
  const result = [];
  for (const color of template.options.color) {
    for (const eyes of template.options.eyes) {
      for (const glasses of template.options.glasses) {
        for (const accessory of template.options.accessory) {
          const checked = validateTemplateOptions(template, { color: color.id, eyes: eyes.id, glasses: glasses.id, accessory: accessory.id });
          if (checked.valid) result.push(checked.options);
        }
      }
    }
  }
  return result;
}

export function resolveTemplateAsset(reference, assetRegistry) {
  if (!reference || typeof reference.id !== 'string' || !reference.version || !reference.purpose) return null;
  const rows = assetRegistry instanceof Map ? [...assetRegistry.values()] : Array.isArray(assetRegistry) ? assetRegistry : [];
  return rows.find(assetRecord => assetRecord?.id === reference.id
    && assetRecord.version === reference.version
    && assetRecord.purpose === reference.purpose) ?? null;
}
