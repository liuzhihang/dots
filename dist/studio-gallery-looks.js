import {
  ARTWORKS,
  getAsset,
  getArtwork,
  validateArtwork
} from './studio-artwork-catalog.js?v=111';
import {
  TEMPLATE_REGISTRY,
  getTemplateForArtwork,
  getTemplateOptionFields,
  getTemplateRecipe,
  validateTemplateDefinition,
  validateTemplateOptions
} from './studio-edit-templates.js?v=111';
import {normalizeGalleryQuery, normalizeSearch} from './studio-tags.js?v=111';
import {GALLERY_LOOK_ASSETS} from './studio-gallery-look-data.js?v=111';

const deepFreeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
};

const LOOK_FIELDS = Object.freeze([
  'id', 'version', 'artworkId', 'artworkVersion', 'templateId', 'templateVersion',
  'appearance', 'isDefault', 'titleByLanguage', 'descriptionByLanguage',
  'seriesId', 'characterId', 'assetRefs', 'defaultOptions', 'defaultRecipeId'
]);

function sameValue(a, b) {
  if (a === b) return true;
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;
  if (Array.isArray(a) || Array.isArray(b)) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((value, index) => sameValue(value, b[index]));
  }
  const aKeys = Object.keys(a).sort();
  const bKeys = Object.keys(b).sort();
  return aKeys.length === bKeys.length && aKeys.every((key, index) => key === bKeys[index] && sameValue(a[key], b[key]));
}

function recipeForAppearance(template, appearance, sourceDefaults) {
  const rows = template.recipes.filter(recipe => recipe.selections.appearance === appearance);
  if (!rows.length) return null;
  if (appearance === template.defaultOptions.appearance) {
    return rows.find(recipe => sameValue(recipe.selections, template.defaultOptions)) || null;
  }
  const fields = getTemplateOptionFields(template).map(field => field.key).filter(field => field !== 'appearance');
  return rows.slice().sort((a, b) => {
    const score = recipe => fields.reduce((count, field) => count + (recipe.selections[field] === sourceDefaults[field] ? 1 : 0), 0);
    return score(b) - score(a) || a.id.localeCompare(b.id, 'en');
  })[0];
}

function textFor(templateOption, locale) {
  return templateOption?.labelByLanguage?.[locale] || templateOption?.semanticByLanguage?.[locale] || '';
}

function semanticDescription(template, appearanceOption, options, locale) {
  const appearance = appearanceOption.semanticByLanguage?.[locale] || textFor(appearanceOption, locale);
  const details = getTemplateOptionFields(template)
    .filter(field => field.key !== 'appearance')
    .map(field => field.options.find(option => option.id === options[field.key]))
    .filter(Boolean)
    .map(option => option.semanticByLanguage?.[locale] || textFor(option, locale))
    .filter(Boolean);
  if (locale === 'zh-CN') {
    return `已登记外观：${appearance}；默认配置：${details.join('；')}。`;
  }
  return `A look using the registered appearance “${appearance}” with this legal default configuration: ${details.join('; ')}.`;
}

function titleFor(artwork, template, appearanceOption, options, locale, isDefault) {
  if (isDefault) return artwork.titleByLanguage[locale];
  const appearanceLabel = textFor(appearanceOption, locale);
  if (['dots', 'grok'].includes(template.family)) {
    const color = template.options.colors?.find(option => option.id === options.colors);
    const colorLabel = textFor(color, locale);
    return colorLabel ? `${appearanceLabel} · ${colorLabel}` : appearanceLabel;
  }
  return `${artwork.titleByLanguage[locale]} · ${appearanceLabel}`;
}

function lookAssetRef(lookId, lookVersion, size) {
  return `look:${lookId}@${lookVersion}:${size}`;
}

function buildLookRows() {
  const rows = [];
  for (const artwork of ARTWORKS) {
    if (!validateArtwork(artwork)) continue;
    const template = getTemplateForArtwork(artwork);
    if (!template || templateSchema(template) !== 2 || !validateTemplateDefinition(template).valid) continue;
    const appearanceOptions = template.options?.appearance;
    if (!Array.isArray(appearanceOptions)) continue;
    const orderedAppearances = appearanceOptions.slice().sort((a, b) => {
      const aDefault = a.id === template.defaultOptions.appearance;
      const bDefault = b.id === template.defaultOptions.appearance;
      return Number(bDefault) - Number(aDefault) || appearanceOptions.indexOf(a) - appearanceOptions.indexOf(b);
    });
    for (const appearanceOption of orderedAppearances) {
      const recipe = recipeForAppearance(template, appearanceOption.id, template.defaultOptions);
      if (!recipe) continue;
      const isDefault = appearanceOption.id === template.defaultOptions.appearance;
      const id = isDefault ? artwork.id : `${artwork.id}--${appearanceOption.id}`;
      const version = `${artwork.version}-${template.version}`;
      const assetRefs = isDefault
        ? {poster: artwork.assetRefs.poster, ...(artwork.assetRefs.poster512 ? {poster512: artwork.assetRefs.poster512} : {})}
        : {
            poster: lookAssetRef(id, version, 'poster256'),
            poster512: lookAssetRef(id, version, 'poster512')
          };
      rows.push({
        id,
        version,
        artworkId: artwork.id,
        artworkVersion: artwork.version,
        templateId: template.id,
        templateVersion: template.version,
        appearance: appearanceOption.id,
        isDefault,
        titleByLanguage: Object.fromEntries(['en', 'zh-CN'].map(locale => [
          locale,
          titleFor(artwork, template, appearanceOption, recipe.selections, locale, isDefault)
        ])),
        descriptionByLanguage: isDefault
          ? {...artwork.descriptionByLanguage}
          : Object.fromEntries(['en', 'zh-CN'].map(locale => [
              locale,
              semanticDescription(template, appearanceOption, recipe.selections, locale)
            ])),
        seriesId: artwork.seriesId,
        characterId: artwork.characterId,
        assetRefs,
        defaultOptions: {...recipe.selections},
        defaultRecipeId: recipe.id
      });
    }
  }
  return deepFreeze(rows);
}

function templateSchema(template) {
  return template?.schemaVersion === 2 ? 2 : 1;
}

export const GALLERY_LOOKS = buildLookRows();

const lookById = new Map(GALLERY_LOOKS.map(look => [look.id, look]));
const defaultLookByArtwork = new Map(GALLERY_LOOKS.filter(look => look.isDefault)
  .map(look => [`${look.artworkId}\u0000${look.artworkVersion}`, look]));
const lookAssetsByRef = new Map(GALLERY_LOOK_ASSETS.map(asset => [asset.ref, deepFreeze(asset)]));
const artworkOrder = new Map(ARTWORKS.map((artwork, index) => [artwork.id, index]));

function sourceAndTemplate(look) {
  const artwork = getArtwork(look.artworkId, ARTWORKS);
  if (!artwork || artwork.version !== look.artworkVersion || !validateArtwork(artwork)) return null;
  const template = getTemplateForArtwork(artwork);
  if (!template || template.id !== look.templateId || template.version !== look.templateVersion
    || template.artworkBinding?.artworkId !== artwork.id
    || template.artworkBinding?.artworkVersion !== artwork.version
    || !validateTemplateDefinition(template).valid) return null;
  return {artwork, template};
}

function matchCanonicalLook(candidate, canonical) {
  if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) return false;
  const keys = Object.keys(candidate).sort();
  const canonicalKeys = LOOK_FIELDS.slice().sort();
  if (keys.length !== canonicalKeys.length || keys.some((key, index) => key !== canonicalKeys[index])) return false;
  return LOOK_FIELDS.every(field => sameValue(candidate[field], canonical[field]));
}

function assetMatchesLook(asset, look, key) {
  if (!asset) return false;
  const expectedPurpose = key === 'poster' ? 'poster256' : 'poster512';
  if (look.isDefault) {
    const source = getArtwork(look.artworkId, ARTWORKS);
    const canonicalRef = source?.assetRefs?.[key];
    const canonicalAsset = canonicalRef ? getAsset(canonicalRef) : null;
    return asset === canonicalAsset && asset.ownerArtworkId === look.artworkId
      && asset.publicationStatus === 'published-derivative';
  }
  return asset.ref === look.assetRefs[key]
    && asset.lookId === look.id
    && asset.lookVersion === look.version
    && asset.artworkId === look.artworkId
    && asset.artworkVersion === look.artworkVersion
    && asset.templateId === look.templateId
    && asset.templateVersion === look.templateVersion
    && asset.appearance === look.appearance
    && asset.recipeId === look.defaultRecipeId
    && asset.purpose === expectedPurpose
    && asset.publicationStatus === 'published-derivative'
    && asset.resourceKind === 'gallery-look-poster'
    && asset.mime === 'image/webp'
    && asset.alpha?.hasAlpha === true
    && asset.alpha?.hasTransparency === true;
}

/** Resolve a registered GalleryLook; a supplied version must match exactly. */
export function getGalleryLook(id, version) {
  if (typeof id !== 'string' || (version !== undefined && typeof version !== 'string')) return null;
  const look = lookById.get(id) || null;
  return look && (version === undefined || look.version === version) ? look : null;
}

/** Resolve the registered default appearance for a current approved Artwork. */
export function getDefaultLook(artworkOrId) {
  let artwork;
  if (typeof artworkOrId === 'string') {
    artwork = getArtwork(artworkOrId, ARTWORKS);
  } else if (artworkOrId && typeof artworkOrId === 'object') {
    artwork = getArtwork(artworkOrId.id, ARTWORKS);
    if (!artwork || artwork.version !== artworkOrId.version) return null;
  } else {
    return null;
  }
  if (!artwork || !validateArtwork(artwork)) return null;
  return defaultLookByArtwork.get(`${artwork.id}\u0000${artwork.version}`) || null;
}

/** Resolve a look-owned display derivative, or delegate source Artwork refs to the frozen catalog. */
export function getLookAsset(ref) {
  const id = typeof ref === 'string' ? ref : ref && typeof ref === 'object' ? ref.id : null;
  if (typeof id !== 'string') return null;
  const lookAsset = lookAssetsByRef.get(id);
  if (lookAsset) {
    if (ref && typeof ref === 'object'
      && ['version', 'path', 'sha256', 'mime', 'byteSize', 'width', 'height'].some(field => ref[field] !== undefined && ref[field] !== lookAsset[field])) return null;
    return lookAsset;
  }
  return getAsset(ref);
}

/** Return only option fields and values that vary among this appearance's legal recipes. */
export function getLookOptionFields(template, look) {
  const canonical = look && typeof look.id === 'string' ? lookById.get(look.id) : null;
  if (!canonical || !matchCanonicalLook(look, canonical)) return Object.freeze([]);
  const bindings = sourceAndTemplate(canonical);
  if (!bindings || template !== bindings.template) return Object.freeze([]);
  const {template: registered} = bindings;
  const defaultRecipe = getTemplateRecipe(registered, canonical.defaultOptions);
  if (!defaultRecipe || defaultRecipe.id !== canonical.defaultRecipeId) return Object.freeze([]);
  const recipes = registered.recipes.filter(recipe => recipe.selections.appearance === look.appearance);
  if (!recipes.length) return Object.freeze([]);
  return Object.freeze(getTemplateOptionFields(registered)
    .filter(field => field.key !== 'appearance')
    .flatMap(field => {
      const reachable = new Set(recipes.map(recipe => recipe.selections[field.key]).filter(value => value !== undefined));
      if (reachable.size < 2) return [];
      const options = Object.freeze(field.options.filter(option => reachable.has(option.id)));
      return options.length >= 2 ? [Object.freeze({...field, options})] : [];
    }));
}

/** Verify an exact canonical entry, its source approvals, default recipe, and registered cover assets. */
export function validateGalleryLook(look) {
  if (!look || typeof look !== 'object' || typeof look.id !== 'string' || typeof look.version !== 'string') return false;
  const canonical = lookById.get(look.id);
  if (!canonical || !matchCanonicalLook(look, canonical)) return false;
  const bindings = sourceAndTemplate(canonical);
  if (!bindings) return false;
  const {artwork, template} = bindings;
  const isDefault = canonical.appearance === template.defaultOptions.appearance;
  if (canonical.isDefault !== isDefault || canonical.seriesId !== artwork.seriesId || canonical.characterId !== artwork.characterId) return false;
  const optionResult = validateTemplateOptions(template, canonical.defaultOptions);
  if (!optionResult.valid || optionResult.options.appearance !== canonical.appearance) return false;
  const recipe = getTemplateRecipe(template, canonical.defaultOptions);
  if (!recipe || recipe.id !== canonical.defaultRecipeId || recipe.selections.appearance !== canonical.appearance) return false;
  const expectedVersion = `${artwork.version}-${template.version}`;
  if (canonical.version !== expectedVersion || canonical.artworkVersion !== artwork.version || canonical.templateVersion !== template.version) return false;
  for (const key of ['poster', ...(canonical.assetRefs?.poster512 ? ['poster512'] : [])]) {
    const asset = getLookAsset(canonical.assetRefs?.[key]);
    if (!assetMatchesLook(asset, canonical, key)) return false;
  }
  return true;
}

function searchableLookText(look) {
  const source = getArtwork(look.artworkId, ARTWORKS);
  const template = TEMPLATE_REGISTRY.find(row => row.id === look.templateId && row.version === look.templateVersion);
  const appearance = template?.options?.appearance?.find(option => option.id === look.appearance);
  const recipeValues = template ? getTemplateOptionFields(template)
    .flatMap(field => field.options.filter(option => option.id === look.defaultOptions[field.key])
      .flatMap(option => [option.id, ...Object.values(option.labelByLanguage || {}), ...Object.values(option.semanticByLanguage || {})])) : [];
  const sourceAliases = Object.values(source?.aliases || {}).flatMap(values => Array.isArray(values) ? values : []);
  const appearanceAliases = look.appearance === 'cloud' ? ['云朵'] : [];
  return normalizeSearch([
    look.id, look.titleByLanguage?.en, look.titleByLanguage?.['zh-CN'],
    look.descriptionByLanguage?.en, look.descriptionByLanguage?.['zh-CN'],
    source?.id, source?.title, source?.description,
    ...Object.values(source?.titleByLanguage || {}), ...Object.values(source?.descriptionByLanguage || {}),
    ...sourceAliases,
    ...appearanceAliases,
    look.appearance, appearance?.id,
    ...Object.values(appearance?.labelByLanguage || {}),
    ...Object.values(appearance?.semanticByLanguage || {}),
    ...recipeValues
  ].filter(Boolean).join(' '));
}

const searchTextByLook = new Map(GALLERY_LOOKS.map(look => [look, searchableLookText(look)]));

/** Search bilingual look/source/appearance text with the existing gallery query contract. */
export function queryGalleryLooks(query = {}) {
  const normalized = normalizeGalleryQuery(query);
  if (!normalized.valid) return [];
  const tokens = normalized.text.split(' ').filter(Boolean);
  const rows = GALLERY_LOOKS.filter(look => (!normalized.seriesId || look.seriesId === normalized.seriesId)
    && tokens.every(token => searchTextByLook.get(look)?.includes(token)));
  if (normalized.sort === 'name') {
    rows.sort((a, b) => a.titleByLanguage[normalized.language].localeCompare(b.titleByLanguage[normalized.language], normalized.language)
      || a.id.localeCompare(b.id));
  } else {
    rows.sort((a, b) => (artworkOrder.get(a.artworkId) ?? Number.MAX_SAFE_INTEGER) - (artworkOrder.get(b.artworkId) ?? Number.MAX_SAFE_INTEGER)
      || Number(b.isDefault) - Number(a.isDefault)
      || a.id.localeCompare(b.id));
  }
  return rows;
}
