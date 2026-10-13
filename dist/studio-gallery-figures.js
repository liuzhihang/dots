import {ARTWORKS, getArtwork} from './studio-artwork-catalog.js?v=111';
import {
  TEMPLATE_REGISTRY,
  getTemplateForArtwork,
  getTemplateOptionFields
} from './studio-edit-templates.js?v=111';
import {
  GALLERY_LOOKS,
  getGalleryLook,
  queryGalleryLooks
} from './studio-gallery-looks.js?v=111';
import {normalizeGalleryQuery, normalizeSearch} from './studio-tags.js?v=111';

const deepFreeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
};

const MERGED_FIGURES = deepFreeze([
  {
    id: 'dots-orb',
    version: 'v1',
    memberLookIds: ['candidate-dots-20261005', 'dots-rose-glasses', 'dots-lilac-bucket'],
    defaultLookId: 'candidate-dots-20261005',
    titleByLanguage: {en: 'Orb', 'zh-CN': '圆球'},
    descriptionByLanguage: {
      en: 'A round, short-plush Dots shape. Choose its color, face and accessories.',
      'zh-CN': '圆形短绒 Dots 外观，可调整颜色、五官和配饰。'
    }
  },
  {
    id: 'dots-cloud',
    version: 'v1',
    memberLookIds: [
      'candidate-dots-20261005--cloud',
      'dots-rose-glasses--cloud',
      'dots-lilac-bucket--cloud',
      'dots-butter-beret--cloud',
      'dots-blue-beret-cloud'
    ],
    defaultLookId: 'candidate-dots-20261005--cloud',
    titleByLanguage: {en: 'Cloud', 'zh-CN': '云朵'},
    descriptionByLanguage: {
      en: 'A low, three-lobed, short-plush Dots cloud. Choose its color, face and accessories.',
      'zh-CN': '低矮三瓣短绒 Dots 云朵，可调整颜色、五官和配饰。'
    }
  },
  {
    id: 'dots-rounded-triangle',
    version: 'v1',
    memberLookIds: ['dots-butter-beret', 'dots-yellow-glasses-triangle'],
    defaultLookId: 'dots-butter-beret',
    titleByLanguage: {en: 'Rounded Triangle', 'zh-CN': '圆角三角'},
    descriptionByLanguage: {
      en: 'A rounded triangular Dots shape. Choose its color, face and accessories.',
      'zh-CN': '圆角三角 Dots 外观，可调整颜色、五官和配饰。'
    }
  }
]);

const FIELD_LABELS = deepFreeze({
  colors: {en: 'Color', 'zh-CN': '颜色'},
  face: {en: 'Face', 'zh-CN': '五官'},
  accessories: {en: 'Accessories', 'zh-CN': '配饰'},
  clothing: {en: 'Clothing', 'zh-CN': '衣着'},
  eyes: {en: 'Eyes', 'zh-CN': '眼睛'},
  glasses: {en: 'Glasses', 'zh-CN': '眼镜'},
  accessory: {en: 'Accessory', 'zh-CN': '配饰'},
  expression: {en: 'Expression', 'zh-CN': '表情'}
});

const OPTION_ID_ALIASES = deepFreeze({
  'dots-orb': {
    accessories: {'rose-round-glasses': 'round-glasses'}
  },
  'dots-cloud': {
    accessories: {'rose-round-glasses': 'round-glasses'}
  },
  'dots-rounded-triangle': {
    colors: {original: 'warm-yellow', 'butter-yellow': 'warm-yellow'}
  }
});

// Geometric Figure titles describe the registered silhouette, not the default
// color or accessory of the legacy source Artwork. Person and animal Figures
// retain their source identity titles below.
const GEOMETRIC_SINGLETON_TITLES = deepFreeze({
  'dots-lime-frog-bow': {en: 'Dots Frog Shape', 'zh-CN': 'Dots 蛙形'},
  'dots-lime-frog-bow--soft': {en: 'Dots Wide Frog Shape', 'zh-CN': 'Dots 宽蛙形'},
  'dots-pink-heart-shades': {en: 'Dots Heart', 'zh-CN': 'Dots 爱心'},
  'dots-pink-heart-shades--plump': {en: 'Dots Broad Heart', 'zh-CN': 'Dots 宽瓣爱心'},
  'dots-blue-beret-cloud--broad-lobes': {en: 'Dots Broad-Lobed Cloud', 'zh-CN': 'Dots 宽圆云团'},
  'dots-yellow-glasses-triangle--soft': {en: 'Dots Tall Narrow Triangle', 'zh-CN': 'Dots 高窄三角'},
  'dots-leaf-pear': {en: 'Dots Sprout Pear', 'zh-CN': 'Dots 芽叶梨团'},
  'dots-leaf-pear--soft': {en: 'Dots Broad Pear', 'zh-CN': 'Dots 宽梨团'},
  'dots-violet-star': {en: 'Dots Star', 'zh-CN': 'Dots 星团'},
  'dots-violet-star--soft': {en: 'Dots Rounded Star', 'zh-CN': 'Dots 圆钝星团'},
  'dots-flower-cloud': {en: 'Dots Flower Cloud', 'zh-CN': 'Dots 花云'},
  'dots-flower-cloud--soft': {en: 'Dots Broad-Petal Flower Cloud', 'zh-CN': 'Dots 宽瓣花云'},
  'dots-lime-rounded-square': {en: 'Dots Plush Square', 'zh-CN': 'Dots 绒面方块'},
  'dots-lime-rounded-square--soft': {en: 'Dots Wide Plush Rectangle', 'zh-CN': 'Dots 宽绒面方块'},
  'candidate-grok-20261005': {en: 'Grok Soft Orb', 'zh-CN': 'Grok 柔圆团'},
  'candidate-grok-20261005--soft': {en: 'Grok Wide Soft Oval', 'zh-CN': 'Grok 横宽椭圆'},
  'grok-green-cloud': {en: 'Grok Smooth Cloud', 'zh-CN': 'Grok 光滑云朵'},
  'grok-green-cloud--soft': {en: 'Grok Extended Cloud', 'zh-CN': 'Grok 舒展云朵'},
  'grok-teal-square': {en: 'Grok Rounded Square', 'zh-CN': 'Grok 柔圆方块'},
  'grok-teal-square--soft': {en: 'Grok Tall Narrow Rounded Rectangle', 'zh-CN': 'Grok 高窄圆角方块'},
  'grok-coral-drop': {en: 'Grok Teardrop', 'zh-CN': 'Grok 水滴'},
  'grok-coral-drop--soft': {en: 'Grok Wide Tilted Teardrop', 'zh-CN': 'Grok 宽斜水滴'},
  'grok-white-arch': {en: 'Grok Low Rounded Arch', 'zh-CN': 'Grok 低圆拱'},
  'grok-white-arch--soft': {en: 'Grok Tall Narrow Arch', 'zh-CN': 'Grok 高窄拱团'},
  'grok-horizontal-capsule': {en: 'Grok Horizontal Capsule', 'zh-CN': 'Grok 横向胶囊'},
  'grok-horizontal-capsule--soft': {en: 'Grok Rounded Capsule', 'zh-CN': 'Grok 柔圆胶囊'},
  'grok-soft-triangle': {en: 'Grok Soft Triangle', 'zh-CN': 'Grok 软三角'},
  'grok-soft-triangle--soft': {en: 'Grok Broad Rounded Triangle', 'zh-CN': 'Grok 宽圆三角'},
  'grok-soft-diamond': {en: 'Grok Rounded Diamond', 'zh-CN': 'Grok 圆钝菱形'},
  'grok-soft-diamond--soft': {en: 'Grok Soft Rounded Diamond', 'zh-CN': 'Grok 柔圆菱形'},
  'grok-half-dome': {en: 'Grok Half Dome', 'zh-CN': 'Grok 半圆穹顶'},
  'grok-half-dome--soft': {en: 'Grok Soft Dome', 'zh-CN': 'Grok 柔圆穹顶'},
  'grok-cylinder': {en: 'Grok Elliptical-Top Cylinder', 'zh-CN': 'Grok 椭圆顶圆柱'},
  'grok-cylinder--soft': {en: 'Grok Short Wide Cylinder', 'zh-CN': 'Grok 矮宽圆柱'},
  'grok-egg': {en: 'Grok Rounded Egg', 'zh-CN': 'Grok 圆卵'},
  'grok-egg--soft': {en: 'Grok Fuller Egg', 'zh-CN': 'Grok 饱满卵形'},
  'grok-rounded-cube': {en: 'Grok Rounded Cube', 'zh-CN': 'Grok 圆角立方'},
  'grok-rounded-cube--soft': {en: 'Grok Soft-Edged Cube', 'zh-CN': 'Grok 柔角立方'}
});

const lookById = new Map(GALLERY_LOOKS.map(look => [look.id, look]));
const artworkOrder = new Map(ARTWORKS.map((artwork, index) => [artwork.id, index]));

function sourceBindingFor(look) {
  const artwork = getArtwork(look.artworkId, ARTWORKS);
  const template = artwork ? getTemplateForArtwork(artwork) : null;
  if (!artwork || artwork.version !== look.artworkVersion || !template
    || template.id !== look.templateId || template.version !== look.templateVersion
    || template.artworkBinding?.artworkId !== artwork.id
    || template.artworkBinding?.artworkVersion !== artwork.version) return null;
  return {lookId: look.id, lookVersion: look.version, artworkId: artwork.id,
    artworkVersion: artwork.version, templateId: template.id, templateVersion: template.version};
}

function signatureFor(memberLookIds) {
  return memberLookIds.map(id => {
    const look = lookById.get(id);
    const binding = look && sourceBindingFor(look);
    return binding ? [binding.lookId, binding.lookVersion, binding.artworkId,
      binding.artworkVersion, binding.templateId, binding.templateVersion].join('@') : `invalid:${id}`;
  }).join('|');
}

function createFigure(spec, memberLooks) {
  const canonicalLook = lookById.get(spec.defaultLookId);
  if (!canonicalLook || !memberLooks.includes(canonicalLook)) {
    throw new Error(`GalleryFigure ${spec.id} has no registered canonical GalleryLook.`);
  }
  const sourceBindings = memberLooks.map(sourceBindingFor);
  if (sourceBindings.some(binding => !binding)) throw new Error(`GalleryFigure ${spec.id} has a stale source binding.`);
  const template = getTemplateForArtwork(getArtwork(canonicalLook.artworkId, ARTWORKS));
  if (!template || !TEMPLATE_REGISTRY.includes(template)) throw new Error(`GalleryFigure ${spec.id} source Template is not registered.`);
  const isMerged = spec.version === 'v1';
  return deepFreeze({
    kind: 'gallery-figure',
    id: spec.id,
    version: spec.version,
    memberLookIds: [...spec.memberLookIds],
    defaultLookId: spec.defaultLookId,
    titleByLanguage: {...(spec.titleByLanguage || canonicalLook.titleByLanguage)},
    descriptionByLanguage: {...(spec.descriptionByLanguage || canonicalLook.descriptionByLanguage)},
    seriesId: canonicalLook.seriesId,
    assetRefs: canonicalLook.assetRefs,
    sourceVersionsSignature: signatureFor(spec.memberLookIds),
    ...(isMerged ? {} : {sourceArtworkId: canonicalLook.artworkId})
  });
}

function buildFigures() {
  const claimedLookIds = new Set();
  const figures = [];
  for (const spec of MERGED_FIGURES) {
    const memberLooks = spec.memberLookIds.map(id => lookById.get(id));
    if (memberLooks.some(look => !look)) throw new Error(`GalleryFigure ${spec.id} names an unknown GalleryLook.`);
    if (new Set(spec.memberLookIds).size !== spec.memberLookIds.length) throw new Error(`GalleryFigure ${spec.id} repeats a member.`);
    for (const look of memberLooks) {
      if (claimedLookIds.has(look.id)) throw new Error(`GalleryLook ${look.id} belongs to more than one Figure.`);
      claimedLookIds.add(look.id);
    }
    figures.push(createFigure(spec, memberLooks));
  }
  for (const look of GALLERY_LOOKS) {
    if (claimedLookIds.has(look.id)) continue;
    const artwork = getArtwork(look.artworkId, ARTWORKS);
    const template = artwork && getTemplateForArtwork(artwork);
    if (!artwork || !template || !TEMPLATE_REGISTRY.includes(template)) continue;
    const singletonSpec = {
      id: look.id,
      version: look.version,
      memberLookIds: [look.id],
      defaultLookId: look.id,
      titleByLanguage: GEOMETRIC_SINGLETON_TITLES[look.id] || look.titleByLanguage,
      descriptionByLanguage: look.descriptionByLanguage
    };
    figures.push(createFigure(singletonSpec, [look]));
    claimedLookIds.add(look.id);
  }
  if (claimedLookIds.size !== GALLERY_LOOKS.length) throw new Error('Every GalleryLook must belong to one GalleryFigure.');
  return figures;
}

export const GALLERY_FIGURES = deepFreeze(buildFigures());

const figureById = new Map(GALLERY_FIGURES.map(figure => [figure.id, figure]));
const figureByLookId = new Map(GALLERY_FIGURES.flatMap(figure => figure.memberLookIds.map(id => [id, figure])));
const figureOrder = new Map(GALLERY_FIGURES.map((figure, index) => [figure, index]));
const searchTextByFigure = new Map(GALLERY_FIGURES.map(figure => [figure, normalizeSearch([
  figure.id,
  ...Object.values(figure.titleByLanguage || {}),
  ...Object.values(figure.descriptionByLanguage || {})
].filter(Boolean).join(' '))]));
const stateById = new Map();
const stateByFigure = new Map();
const fieldsByFigure = new Map();

function canonicalFigure(figure) {
  if (!figure || typeof figure !== 'object' || figure.kind !== 'gallery-figure') return null;
  const canonical = figureById.get(figure.id);
  if (!canonical || canonical !== figure || canonical.version !== figure.version
    || canonical.sourceVersionsSignature !== signatureFor(canonical.memberLookIds)) return null;
  return canonical;
}

function semanticOptionId(figureId, lookId, fieldKey, sourceOptionId) {
  const alias = OPTION_ID_ALIASES[figureId]?.[fieldKey]?.[sourceOptionId];
  return `${fieldKey}:${alias || sourceOptionId}`;
}

function statesForFigure(figure) {
  const canonical = canonicalFigure(figure);
  if (!canonical) return Object.freeze([]);
  if (stateByFigure.has(canonical)) return stateByFigure.get(canonical);
  const states = [];
  for (const lookId of canonical.memberLookIds) {
    const look = lookById.get(lookId);
    const artwork = look && getArtwork(look.artworkId, ARTWORKS);
    const template = artwork && getTemplateForArtwork(artwork);
    if (!look || !artwork || !template || !TEMPLATE_REGISTRY.includes(template)) continue;
    for (const recipe of template.recipes.filter(row => row.selections?.appearance === look.appearance)) {
      const values = Object.fromEntries(Object.entries(recipe.selections)
        .filter(([key]) => key !== 'appearance')
        .map(([key, value]) => [key, semanticOptionId(canonical.id, look.id, key, value)]));
      const state = deepFreeze({
        id: `${canonical.id}::${look.id}::${recipe.id}`,
        figureId: canonical.id,
        look,
        artwork,
        template,
        recipe,
        selections: recipe.selections,
        values
      });
      states.push(state);
      stateById.set(state.id, state);
    }
  }
  const result = Object.freeze(states);
  stateByFigure.set(canonical, result);
  return result;
}

function resolveStateForLook(canonical, lookId) {
  const look = lookById.get(lookId);
  if (!look || !canonical.memberLookIds.includes(look.id)) return null;
  return statesForFigure(canonical).find(state => state.look === look && state.recipe.id === look.defaultRecipeId) || null;
}

/** Resolve a Figure by its exact registered id and, when supplied, version. */
export function getGalleryFigure(id, version) {
  if (typeof id !== 'string' || (version !== undefined && typeof version !== 'string')) return null;
  const figure = figureById.get(id) || null;
  return figure && (version === undefined || figure.version === version)
    && canonicalFigure(figure) ? figure : null;
}

/** Resolve the Figure containing an exact registered GalleryLook. */
export function getFigureForLook(lookOrId) {
  let look;
  if (typeof lookOrId === 'string') look = getGalleryLook(lookOrId);
  else if (lookOrId && typeof lookOrId === 'object' && lookById.get(lookOrId.id) === lookOrId) look = lookOrId;
  else return null;
  return look ? figureByLookId.get(look.id) || null : null;
}

/** Search every member source while returning each Figure once. */
export function queryGalleryFigures(query = {}) {
  const normalized = normalizeGalleryQuery(query);
  if (!normalized.valid) return [];
  const tokens = normalized.text.split(' ').filter(Boolean);
  const sourceMatches = new Set(queryGalleryLooks(query).map(look => figureByLookId.get(look.id)).filter(Boolean));
  const rows = GALLERY_FIGURES.filter(figure => (!normalized.seriesId || figure.seriesId === normalized.seriesId)
    && (sourceMatches.has(figure) || tokens.every(token => searchTextByFigure.get(figure)?.includes(token))));
  if (normalized.sort === 'name') {
    rows.sort((a, b) => (a.titleByLanguage[normalized.language] || a.id)
      .localeCompare(b.titleByLanguage[normalized.language] || b.id, normalized.language) || a.id.localeCompare(b.id));
  } else {
    rows.sort((a, b) => {
      const aOrder = Math.min(...a.memberLookIds.map(id => artworkOrder.get(lookById.get(id)?.artworkId) ?? Number.MAX_SAFE_INTEGER));
      const bOrder = Math.min(...b.memberLookIds.map(id => artworkOrder.get(lookById.get(id)?.artworkId) ?? Number.MAX_SAFE_INTEGER));
      return aOrder - bOrder || (figureOrder.get(a) ?? Number.MAX_SAFE_INTEGER) - (figureOrder.get(b) ?? Number.MAX_SAFE_INTEGER);
    });
  }
  return rows;
}

/** Return every exact registered source recipe state represented by this Figure. */
export function getFigureStates(figure) {
  return statesForFigure(figure);
}

/** Resolve the source default for the Figure, or for a particular legacy GalleryLook route. */
export function getFigureInitialState(figure, optionalLookId) {
  const canonical = canonicalFigure(figure);
  if (!canonical || (optionalLookId !== undefined && typeof optionalLookId !== 'string')) return null;
  return resolveStateForLook(canonical, optionalLookId === undefined ? canonical.defaultLookId : optionalLookId);
}

/** Return deduplicated semantic fields backed only by options used in registered recipes. */
export function getFigureFields(figure) {
  const canonical = canonicalFigure(figure);
  if (!canonical) return Object.freeze([]);
  if (fieldsByFigure.has(canonical)) return fieldsByFigure.get(canonical);
  const states = statesForFigure(canonical);
  const fieldKeys = [];
  const sourceFields = new Map();
  for (const lookId of canonical.memberLookIds) {
    const look = lookById.get(lookId);
    const artwork = look && getArtwork(look.artworkId, ARTWORKS);
    const template = artwork && getTemplateForArtwork(artwork);
    if (!template) continue;
    for (const field of getTemplateOptionFields(template)) {
      if (field.key === 'appearance') continue;
      if (!sourceFields.has(field.key)) sourceFields.set(field.key, []);
      sourceFields.get(field.key).push({look, field, states: states.filter(state => state.look === look)});
      if (!fieldKeys.includes(field.key)) fieldKeys.push(field.key);
    }
  }
  const result = fieldKeys.flatMap(key => {
    const options = [];
    const optionIds = new Set();
    for (const source of sourceFields.get(key) || []) {
      const used = new Set(source.states.map(state => state.selections[key]).filter(value => value !== undefined));
      for (const sourceOption of source.field.options) {
        if (!used.has(sourceOption.id)) continue;
        const id = semanticOptionId(canonical.id, source.look.id, key, sourceOption.id);
        if (optionIds.has(id)) continue;
        optionIds.add(id);
        options.push(deepFreeze({
          ...sourceOption,
          id,
          originalOptionId: sourceOption.id,
          sourceLookId: source.look.id,
          sourceOptionId: sourceOption.id,
          sourceOption
        }));
      }
    }
    if (optionIds.size < 2) return [];
    return [deepFreeze({
      key,
      labelByLanguage: FIELD_LABELS[key] || {en: key, 'zh-CN': key},
      options: Object.freeze(options)
    })];
  });
  const frozen = Object.freeze(result);
  fieldsByFigure.set(canonical, frozen);
  return frozen;
}

function sameValues(left, right) {
  const leftKeys = Object.keys(left).sort();
  const rightKeys = Object.keys(right).sort();
  return leftKeys.length === rightKeys.length
    && leftKeys.every((key, index) => key === rightKeys[index] && left[key] === right[key]);
}

/** Apply semantic field ids while resolving only to a real registered source recipe. */
export function resolveFigureSelection(figure, currentStateId, patch) {
  const canonical = canonicalFigure(figure);
  if (!canonical || typeof currentStateId !== 'string' || !patch || typeof patch !== 'object' || Array.isArray(patch)) return null;
  const states = statesForFigure(canonical);
  const current = stateById.get(currentStateId);
  if (!current || current.figureId !== canonical.id || !states.includes(current)) return null;
  const fields = new Map(getFigureFields(canonical).map(field => [field.key, new Set(field.options.map(option => option.id))]));
  const target = {...current.values};
  for (const [key, value] of Object.entries(patch)) {
    if (key === 'appearance' || !fields.get(key)?.has(value)) return null;
    target[key] = value;
  }
  const matching = states.filter(state => sameValues(state.values, target));
  if (!matching.length) return null;
  matching.sort((a, b) => Number(b.look.id === current.look.id) - Number(a.look.id === current.look.id)
    || canonical.memberLookIds.indexOf(a.look.id) - canonical.memberLookIds.indexOf(b.look.id)
    || a.id.localeCompare(b.id, 'en'));
  return matching[0];
}
