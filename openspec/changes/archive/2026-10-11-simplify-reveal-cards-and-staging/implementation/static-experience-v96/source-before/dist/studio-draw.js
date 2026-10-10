import { ARTWORKS, CATALOG_REVISION, STYLE_IDENTITIES, getAsset, isEligible, isTransparentCharacter } from './studio-artwork-catalog.js?v=95';
import { normalizeTagQuery, queryArtworks, TAGS } from './studio-tags.js?v=95';
import { promptFor, promptRecordFor } from './studio-prompt.js?v=95';
import { featureVisualFor } from './studio-feature-visuals.js?v=95';

const deepFreeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
};

/** The eight independently searchable visual-fact categories. */
export const FEATURE_CATEGORIES = deepFreeze([
  { key: 'style', label: '风格 / 角色', labelEn: 'Style / character', dimensions: ['style'] },
  { key: 'shape', label: '外形', labelEn: 'Shape', dimensions: ['shape'] },
  { key: 'facialFeatures', label: '五官特征', labelEn: 'Facial features', dimensions: ['facial-features'] },
  { key: 'paletteMaterial', label: '配色与材质', labelEn: 'Palette and material', dimensions: ['color', 'material'] },
  { key: 'clothing', label: '衣物', labelEn: 'Clothing', dimensions: ['clothing'] },
  { key: 'headAccessory', label: '头部配饰', labelEn: 'Head accessories', dimensions: ['head-accessory'] },
  { key: 'bodyAccessory', label: '身体配饰', labelEn: 'Body accessories', dimensions: ['body-accessory'] },
  { key: 'prop', label: '道具', labelEn: 'Props', dimensions: ['prop'] }
]);

/** Six display slots; each slot is one frozen, Artwork-derived fact group. */
export const REVEAL_SLOTS = deepFreeze([
  { key: 'style', label: '角色风格', labelZh: '角色风格', labelEn: 'Style', shortLabel: '角色风格', kinds: ['style'], categories: ['style'] },
  { key: 'appearance', label: '外形五官', labelZh: '外形五官', labelEn: 'Shape and facial features', shortLabel: '外形五官', kinds: ['appearance'], categories: ['shape', 'facialFeatures'] },
  { key: 'palette-material', label: '配色材质', labelZh: '配色材质', labelEn: 'Palette and material', shortLabel: '配色材质', kinds: ['palette-material'], categories: ['paletteMaterial'] },
  { key: 'clothing', label: '衣物', labelZh: '衣物', labelEn: 'Clothing', shortLabel: '衣物', kinds: ['clothing'], categories: ['clothing'] },
  { key: 'accessory', label: '配饰', labelZh: '配饰', labelEn: 'Accessories', shortLabel: '配饰', kinds: ['accessory'], categories: ['headAccessory', 'bodyAccessory'] },
  { key: 'prop', label: '道具', labelZh: '道具', labelEn: 'Prop', shortLabel: '道具', kinds: ['prop'], categories: ['prop'] }
]);

const slotByKey = new Map(REVEAL_SLOTS.map(slot => [slot.key, slot]));
const tagById = new Map(TAGS.map(tag => [tag.id, tag]));
const identityLabel = identityId => STYLE_IDENTITIES.find(identity => identity.id === identityId)?.label;
// Style remains a required, searchable Artwork fact and lock dimension, but the
// identity is shown as a label outside the clue-card reel.
const REQUIRED_COMPLETE_FACT_KEYS = deepFreeze(['style']);
export const REQUIRED_DISPLAY_SLOT_KEYS = deepFreeze(['appearance', 'palette-material']);

function dimensionFact(artwork, dimension) {
  const feature = artwork?.features?.[dimension];
  if (!feature || !['known', 'none', 'not-applicable', 'unknown'].includes(feature.state)) return null;
  const ids = Array.isArray(feature.ids) ? feature.ids.filter(id => typeof id === 'string')
    : typeof feature.id === 'string' ? [feature.id] : [];
  return { state: feature.state, ids, label: String(feature.label || '') };
}

function groupedValue(artwork, dimensions, { emptyIds = [], emptyLabel = '' } = {}) {
  const facts = dimensions.map(dimension => dimensionFact(artwork, dimension));
  if (facts.some(fact => !fact || fact.state === 'unknown')) return { state: 'unknown', value: [], label: '待核实' };
  const hasKnown = facts.some(fact => fact.state === 'known');
  if (!hasKnown) {
    const noneFacts = facts.filter(fact => fact.state === 'none');
    const ids = [...new Set(noneFacts.flatMap(fact => fact.ids))];
    const value = ids.length ? ids : noneFacts.length ? emptyIds.filter(id => artwork.featureIds?.includes(id)) : [];
    const state = noneFacts.length ? 'none' : 'not-applicable';
    const detail = facts.map(fact => fact.label).filter(Boolean).join(' · ');
    const label = state === 'none' && noneFacts.length === facts.length
      ? (emptyLabel || detail || '无')
      : detail || (state === 'none' ? emptyLabel || '无' : '不适用');
    return { state, value, label };
  }
  const value = [...new Set(facts.filter(fact => fact.state === 'known').flatMap(fact => fact.ids))];
  const label = facts.filter(fact => fact.state === 'known').map(fact => fact.label).filter(Boolean).join(' · ')
    || value.map(id => tagById.get(id)?.label || id).join(' · ');
  return { state: value.length ? 'known' : 'unknown', value, label: value.length ? label : '待核实' };
}

function toRevealFeature(kind, grouped, artwork) {
  const slot = slotByKey.get(kind);
  const label = kind === 'style'
    ? (identityLabel(artwork.styleIdentity) || grouped.label)
    : grouped.label;
  const value = Object.freeze([...grouped.value]);
  const state = grouped.state;
  const visualKey = kind === 'palette-material' ? 'paletteMaterial' : kind;
  const emptyName = state === 'not-applicable' ? '不适用'
    : ({ clothing: '无衣物', accessory: '无配饰', prop: '无道具' }[kind] || '无');
  const shortName = state === 'known' ? artwork.revealVisuals?.[visualKey]?.shortName || label : emptyName;
  return deepFreeze({
    id: `reveal:${kind}:${value.join('+') || state}`,
    kind,
    label: label || '待核实',
    shortName,
    labelZh: label || '待核实',
    labelEn: slot?.labelEn || kind,
    value,
    state,
    status: state === 'known' ? 'present' : state === 'none' ? 'none' : state === 'not-applicable' ? 'notApplicable' : 'unknown',
    visualId: artwork.revealVisuals?.[visualKey]?.assetRef || `missing:${artwork.id}:${kind}`
  });
}

/** Build the six complete reveal facts from Artwork's verified visual-feature ledger. */
export function revealFeaturesFor(artwork) {
  if (!artwork || typeof artwork !== 'object') return [];
  const groups = {
    style: groupedValue(artwork, ['style']),
    appearance: groupedValue(artwork, ['shape', 'facial-features']),
    'palette-material': groupedValue(artwork, ['color', 'material']),
    clothing: groupedValue(artwork, ['clothing'], { emptyIds: ['clothing:none'], emptyLabel: '无独立衣物' }),
    accessory: groupedValue(artwork, ['head-accessory', 'body-accessory'], { emptyIds: ['accessory:none'], emptyLabel: '无配饰' }),
    prop: groupedValue(artwork, ['prop'], { emptyIds: ['prop:none'], emptyLabel: '无道具' })
  };
  return REVEAL_SLOTS.map(slot => toRevealFeature(slot.key, groups[slot.key], artwork));
}

/** Resolve this Artwork's stable, ordered 2–5 visible cards from its six facts. */
export function displaySlotsFor(revealFeatures) {
  if (!Array.isArray(revealFeatures) || revealFeatures.length !== REVEAL_SLOTS.length) return deepFreeze([]);
  const byKind = new Map(revealFeatures.map(feature => [feature?.kind, feature]));
  for (const slot of REVEAL_SLOTS) {
    const feature = byKind.get(slot.key);
    if (!feature || !['known', 'none', 'not-applicable', 'unknown'].includes(feature.state)
      || !Array.isArray(feature.value) || feature.state === 'unknown') return deepFreeze([]);
    if (feature.state === 'known' && feature.value.length === 0) return deepFreeze([]);
  }
  for (const key of [...REQUIRED_COMPLETE_FACT_KEYS, ...REQUIRED_DISPLAY_SLOT_KEYS]) {
    const feature = byKind.get(key);
    if (feature.state !== 'known' || !feature.value.length) return deepFreeze([]);
  }
  return deepFreeze(REVEAL_SLOTS.filter(slot => {
    const feature = byKind.get(slot.key);
    return slot.key !== 'style' && feature.state === 'known' && feature.value.length > 0;
  }));
}

export function hasCompleteRevealFacts(artwork, resourcePolicy = 'published') {
  const features = revealFeaturesFor(artwork);
  const displaySlots = displaySlotsFor(features);
  return displaySlots.length >= REQUIRED_DISPLAY_SLOT_KEYS.length
    && displaySlots.every(slot => featureVisualFor(features, slot.key, artwork, { resourcePolicy }).kind === 'dedicated-asset');
}

function fingerprint(pool) {
  const input = pool.map(artwork => {
    const asset = getAsset(artwork.assetRefs?.original);
    return `${artwork.id}@${asset?.version || ''}:${asset?.sha256 || ''}`;
  }).sort().join('|');
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `fnv1a-${(hash >>> 0).toString(16).padStart(8, '0')}-${pool.length}`;
}

function queryKey(query, requiredFeatures) {
  return JSON.stringify({
    revision: CATALOG_REVISION,
    text: query.text,
    tagsByDimension: Object.fromEntries(Object.entries(query.tagsByDimension).sort(([a], [b]) => a.localeCompare(b))),
    requiredFeatures: [...requiredFeatures].sort()
  });
}

function snapshotFor(artwork) {
  const asset = getAsset(artwork.assetRefs?.original);
  const prompt = promptRecordFor(artwork, { language: 'zh', target: 'image' });
  if (!asset || !prompt) return null;
  return deepFreeze({ artworkId: artwork.id, artwork, asset, prompt, catalogRevision: CATALOG_REVISION });
}

export function createDrawEngine({ catalog = ARTWORKS, rng = Math.random, resourcePolicy = 'published' } = {}) {
  if (!Array.isArray(catalog)) throw new TypeError('DrawEngine catalog 必须是 Artwork 数组。');
  if (typeof rng !== 'function') throw new TypeError('DrawEngine rng 必须是函数。');
  if (!['published', 'candidate-preview'].includes(resourcePolicy)) throw new TypeError('DrawEngine resourcePolicy 必须是 published 或 candidate-preview。');
  const bags = new Map();
  const unavailable = new Map();
  let drawSequence = 0;

  function select({ query = {}, requiredFeatures = [] } = {}) {
    const normalized = normalizeTagQuery(query);
    if (!normalized.valid) return { status: 'error', message: '当前筛选无效，请调整条件后再试。' };
    if (!Array.isArray(requiredFeatures) || requiredFeatures.some(id => typeof id !== 'string')) {
      return { status: 'error', message: '无法应用当前筛选，请重新选择条件。' };
    }
    const locks = [...new Set(requiredFeatures)].sort();
    const knownFeatures = new Set(catalog.flatMap(artwork => artwork.featureIds || []));
    const unknown = locks.filter(id => !knownFeatures.has(id));
    if (unknown.length) return { status: 'error', message: '部分筛选条件已不可用，请重新选择。' };

    const pool = queryArtworks(normalized, catalog)
      .filter(artwork => isEligible(artwork) && isTransparentCharacter(artwork) && hasCompleteRevealFacts(artwork, resourcePolicy))
      .filter(artwork => !unavailable.has(artwork.id))
      .filter(artwork => locks.every(id => artwork.featureIds?.includes(id)));
    if (!pool.length) {
      const unavailableNote = unavailable.size ? ' 部分图片暂时无法显示，请稍后再试。' : '';
      return { status: 'empty', message: `没有找到符合当前条件的伙伴。调整筛选后再试。${unavailableNote}` };
    }

    const poolFingerprint = fingerprint(pool);
    const scope = queryKey(normalized, locks);
    let bag = bags.get(scope);
    let notice = '';
    if (!bag || bag.fingerprint !== poolFingerprint) {
      bag = { fingerprint: poolFingerprint, remaining: pool.map(artwork => artwork.id), cycle: 0, lastId: null };
      bags.set(scope, bag);
    } else if (!bag.remaining.length) {
      bag.remaining = pool.map(artwork => artwork.id);
      bag.cycle += 1;
      notice = '这组作品都已抽过一遍，重新开始随机。';
    }
    let randomValue;
    try { randomValue = Number(rng()); } catch { return { status: 'error', message: '暂时无法找到伙伴，请再试一次。' }; }
    if (!Number.isFinite(randomValue)) return { status: 'error', message: '暂时无法找到伙伴，请再试一次。' };
    const avoidId = bag.remaining.length === pool.length && pool.length > 1 ? bag.lastId : null;
    const choices = avoidId ? bag.remaining.filter(id => id !== avoidId) : bag.remaining;
    const index = Math.min(choices.length - 1, Math.max(0, Math.floor(Math.max(0, Math.min(0.999999999999, randomValue)) * choices.length)));
    const artworkId = choices[index];
    bag.remaining.splice(bag.remaining.indexOf(artworkId), 1);
    bag.lastId = artworkId;
    const artwork = pool.find(candidate => candidate.id === artworkId);
    const snapshot = snapshotFor(artwork);
    if (!snapshot) return { status: 'error', message: '这位伙伴暂时无法打开，请再试一次。' };
    const revealFeatures = deepFreeze(revealFeaturesFor(artwork));
    const displaySlotKeys = deepFreeze(displaySlotsFor(revealFeatures).map(slot => slot.key));
    drawSequence += 1;
    const result = deepFreeze({
      ...snapshot,
      promptText: promptFor(artwork, { language: 'zh', target: 'image' }),
      drawId: `draw-${Date.now()}-${drawSequence}`,
      querySnapshot: deepFreeze({ text: normalized.text, tagsByDimension: Object.fromEntries(Object.entries(normalized.tagsByDimension).map(([key, ids]) => [key, [...ids]])) }),
      requiredFeatures: Object.freeze([...locks]),
      revealFeatures,
      displaySlotKeys,
      visualResourcePolicy: resourcePolicy,
      poolFingerprint
    });
    if (pool.length === 1) notice = [notice, '只有 1 款作品符合全部条件。'].filter(Boolean).join(' ');
    return { status: 'selected', result, pool: Object.freeze([...pool]), notice };
  }

  return Object.freeze({
    resourcePolicy,
    select,
    markUnavailable(artworkId, reason = '图片资源暂不可用') { if (typeof artworkId === 'string') unavailable.set(artworkId, String(reason)); },
    clearUnavailable(artworkId) { artworkId ? unavailable.delete(artworkId) : unavailable.clear(); },
    unavailableArtworkIds() { return Object.freeze([...unavailable.keys()]); }
  });
}
