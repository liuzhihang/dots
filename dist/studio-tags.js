import { ARTWORKS, isEligible, isTransparentCharacter } from './studio-artwork-catalog.js?v=90';

const DIMENSION_LABELS = Object.freeze({
  style: '风格 / 角色',
  'object-type': '对象类型',
  shape: '外形',
  'facial-features': '五官特征',
  clothing: '衣物',
  'head-accessory': '头部配饰',
  'body-accessory': '身体配饰',
  accessory: '配饰',
  prop: '道具',
  action: '动作',
  expression: '表情',
  background: '背景类型',
  color: '配色',
  material: '材质',
  usage: '用途',
  series: '作品系列',
  content: '内容分类',
  theme: '主题'
});

const ALIASES = Object.freeze({
  'style:dots': ['dots icon', '圆点伙伴'],
  'style:grok': ['grok bot'],
  'style:meta-muse': ['muse', '缪斯'],
  'object-type:person': ['人物', 'human', 'people'],
  'object-type:dog': ['犬', '狗', 'dog'],
  'object-type:cat': ['cat'],
  'shape:sphere': ['圆球', '球形'],
  'shape:shiba': ['柴犬'],
  'shape:chibi-person': ['q版', 'chibi'],
  'facial-features:black-oval-eyes': ['椭圆眼', '黑色眼睛'],
  'facial-features:white-capsule-eyes': ['胶囊眼', '成对胶囊眼'],
  'facial-features:inset-peach-face': ['内嵌脸面', '暖桃色脸面'],
  'facial-features:whiskers': ['猫胡须', '胡须'],
  'clothing:yellow-hoodie': ['黄色连帽衫', '黄衣'],
  'clothing:ivory-knit-cardigan': ['针织开衫', '米白开衫'],
  'head-accessory:over-ear-headphones': ['耳机', '包耳式耳机'],
  'head-accessory:round-glasses': ['圆框眼镜', '眼镜'],
  'head-accessory:yellow-bucket-hat': ['渔夫帽', '黄色帽子'],
  'body-accessory:none': ['无身体配饰'],
  'accessory:headphones': ['耳机'],
  'accessory:round-glasses': ['圆框眼镜', '眼镜'],
  'accessory:bucket-hat': ['渔夫帽', '帽子'],
  'prop:flowers': ['花束', '雏菊'],
  'prop:closed-book': ['书', '绿色书'],
  'action:sitting': ['坐'],
  'action:waving': ['挥手'],
  'background:transparent': ['透明', '无背景']
});

export const TAG_DIMENSIONS = DIMENSION_LABELS;

function featureLabel(artwork, id) {
  if (!artwork.featureIds?.includes(id)) return id;
  const feature = Object.values(artwork.features || {}).find(item => item?.id === id || item?.ids?.includes(id));
  return feature?.labelsById?.[id] || (feature?.id === id ? feature.label : null) || id;
}

const eligibleArtworks = ARTWORKS.filter(isEligible);
const knownIds = new Set(eligibleArtworks.flatMap(artwork => artwork.featureIds || []));

export const TAGS = Object.freeze([...knownIds].map((id, order) => {
  const dimension = id.slice(0, id.indexOf(':'));
  const sample = eligibleArtworks.find(artwork => artwork.featureIds?.includes(id));
  return Object.freeze({
    id,
    dimension,
    label: featureLabel(sample, id),
    aliases: Object.freeze([...(ALIASES[id] || [])]),
    order,
    status: 'published',
    sourceScope: 'verified-visible-artwork-feature'
  });
}));

const tagById = new Map(TAGS.map(tag => [tag.id, tag]));
const textNorm = value => String(value ?? '').normalize('NFKC').toLocaleLowerCase().trim().replace(/\s+/g, ' ');
export const normalizeSearch = textNorm;

function error(kind, dimension, value) {
  return Object.freeze({ kind, dimension, value });
}

/**
 * Normalize a soft search query. Invalid dimensions and unknown tag IDs are
 * retained as errors so callers can report them; consumers fail closed.
 */
export function normalizeTagQuery(query = {}) {
  if (typeof query === 'string') query = { text: query };
  if (!query || typeof query !== 'object' || Array.isArray(query)) query = {};
  const groups = Object.create(null);
  const errors = [];
  const source = query.tagsByDimension;
  if (source !== undefined && (!source || typeof source !== 'object' || Array.isArray(source))) {
    errors.push(error('invalid-dimensions', '', source));
    groups.__invalid_dimension_list__ = [source];
  } else {
    for (const [dimension, rawValues] of Object.entries(source || {})) {
      const dimensionKnown = Object.hasOwn(DIMENSION_LABELS, dimension);
      const values = typeof rawValues === 'string' ? [rawValues] : rawValues;
      if (!Array.isArray(values)) {
        errors.push(error('invalid-tag-list', dimension, rawValues));
        groups[dimension] = [rawValues];
        continue;
      }
      const ids = [...new Set(values)];
      if (!dimensionKnown) errors.push(error('unknown-dimension', dimension, dimension));
      for (const id of ids) {
        if (!dimensionKnown || typeof id !== 'string' || !tagById.has(id) || tagById.get(id).dimension !== dimension) {
          errors.push(error('unknown-tag', dimension, id));
        }
      }
      const normalizedIds = ids.every(id => typeof id === 'string') ? ids.sort() : ids;
      if (normalizedIds.length || !dimensionKnown) groups[dimension] = normalizedIds;
    }
  }
  for (const [dimension, ids] of Object.entries(groups)) groups[dimension] = Object.freeze([...ids]);
  return Object.freeze({
    text: textNorm(query.text),
    tagsByDimension: Object.freeze(Object.fromEntries(Object.entries(groups))),
    valid: errors.length === 0,
    errors: Object.freeze(errors)
  });
}

function artworkMatchesText(artwork, words) {
  if (!words.length) return true;
  const matchingTags = (artwork.featureIds || []).map(id => tagById.get(id)).filter(Boolean)
    .flatMap(tag => [tag.label, ...tag.aliases]);
  const featureLabels = Object.values(artwork.features || {}).map(feature => feature?.label || '');
  const haystack = textNorm([artwork.id, artwork.title, artwork.description, artwork.styleIdentity, ...matchingTags, ...featureLabels].join(' '));
  return words.every(word => haystack.includes(word));
}

export function queryArtworks(query = {}, catalog = ARTWORKS, { resourceKind = 'transparent-character-still' } = {}) {
  const normalized = normalizeTagQuery(query);
  if (!normalized.valid || !Array.isArray(catalog)) return [];
  const groups = Object.entries(normalized.tagsByDimension);
  const words = normalized.text.split(' ').filter(Boolean);
  return catalog.filter(artwork => {
    if (!isEligible(artwork) || (resourceKind !== 'all' && artwork.resourceKind !== resourceKind)) return false;
    if (resourceKind === 'transparent-character-still' && !isTransparentCharacter(artwork)) return false;
    const featureIds = new Set(artwork.featureIds || []);
    // Tags within one dimension are alternatives; distinct dimensions combine.
    if (!groups.every(([, ids]) => ids.some(id => featureIds.has(id)))) return false;
    return artworkMatchesText(artwork, words);
  });
}

export function publishedTags(catalog = ARTWORKS, { resourceKind = 'transparent-character-still' } = {}) {
  if (!Array.isArray(catalog)) return [];
  const used = new Set(catalog.filter(artwork => isEligible(artwork) && (resourceKind === 'all' || artwork.resourceKind === resourceKind)
    && (resourceKind !== 'transparent-character-still' || isTransparentCharacter(artwork))).flatMap(artwork => artwork.featureIds || []));
  return TAGS.filter(tag => used.has(tag.id));
}

export function toggleTag(query, id) {
  const normalized = normalizeTagQuery(query);
  const tag = tagById.get(id);
  if (!tag) return normalizeTagQuery({ ...normalized, tagsByDimension: { ...normalized.tagsByDimension, unknown: [id] } });
  const groups = Object.fromEntries(Object.entries(normalized.tagsByDimension).map(([key, ids]) => [key, [...ids]]));
  const selected = new Set(groups[tag.dimension] || []);
  selected.has(id) ? selected.delete(id) : selected.add(id);
  if (selected.size) groups[tag.dimension] = [...selected];
  else delete groups[tag.dimension];
  return normalizeTagQuery({ text: normalized.text, tagsByDimension: groups });
}

export function queryForTopic(topicId) {
  const tagId = tagById.has(topicId) ? topicId : `style:${topicId}`;
  const tag = tagById.get(tagId);
  return tag ? normalizeTagQuery({ tagsByDimension: { [tag.dimension]: [tag.id] } })
    : normalizeTagQuery({ tagsByDimension: { style: [tagId] } });
}

export function queryLabel(query) {
  const normalized = normalizeTagQuery(query);
  const labels = Object.values(normalized.tagsByDimension).flat().map(id => tagById.get(id)?.label || id);
  if (normalized.text) labels.push(`“${normalized.text}”`);
  if (normalized.errors.length) labels.push('筛选条件无效');
  return labels.join(' · ') || '全部已发布作品';
}
