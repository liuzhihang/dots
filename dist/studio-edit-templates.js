// Controlled editor profiles for the two exact orb artworks.  Layer references
// are resolved from a separately reviewed asset registry at runtime; this file
// deliberately contains no filesystem paths and cannot grant approval itself.
export const EDIT_TEMPLATE_REVISION = 'edit-templates-20261010-v99';

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

export const TEMPLATE_REGISTRY = freeze(definitions);

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

export function normalizeTemplateOptions(template, options = {}) {
  if (!template || !template.defaultOptions) throw new TypeError('A registered template is required.');
  return {
    color: options.color ?? template.defaultOptions.color,
    shape: 'orb',
    eyes: options.eyes ?? template.defaultOptions.eyes,
    glasses: options.glasses ?? template.defaultOptions.glasses,
    accessory: options.accessory ?? template.defaultOptions.accessory
  };
}

export function validateTemplateOptions(template, inputOptions = {}) {
  if (!template || !template.options) {
    return { valid: false, options: null, errors: [{ code: 'unknown-template', message: 'Unknown edit template.' }] };
  }
  const options = normalizeTemplateOptions(template, inputOptions);
  const errors = [];
  for (const field of ['color', 'eyes', 'glasses', 'accessory']) {
    const supported = template.options[field].some(option => option.id === options[field]);
    if (!supported) errors.push({ code: `unsupported-${field}`, field, value: options[field], message: `This template does not support ${field}=${options[field]}.` });
  }
  if (inputOptions.shape != null && inputOptions.shape !== 'orb') {
    errors.push({ code: 'unsupported-shape', field: 'shape', value: inputOptions.shape, message: 'Shape is fixed to the registered orb geometry.' });
  }
  if (!errors.length) {
    const conflict = (template.conflicts || []).find(rule => Object.entries(rule.when).every(([field, value]) => options[field] === value));
    if (conflict) errors.push({ code: conflict.code, message: conflict.messageByLanguage.en, messageByLanguage: conflict.messageByLanguage, conflict });
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

export function getRequiredTemplateAssets(template, inputOptions = {}) {
  const options = assertValidTemplateOptions(template, inputOptions);
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

export function enumerateValidConfigurations(template) {
  if (!template?.options) throw new TypeError('A registered template is required.');
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
