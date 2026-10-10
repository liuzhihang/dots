import { ARTWORKS, validateArtwork } from './studio-artwork-catalog.js?v=98';
import { SERIES } from './studio-content.js?v=98';

const DIMENSION_LABELS = Object.freeze({
  style: '风格 / 角色', 'object-type': '对象类型', shape: '外形', 'facial-features': '五官特征',
  clothing: '衣物', 'head-accessory': '头部配饰', 'body-accessory': '身体配饰', accessory: '配饰',
  prop: '道具', action: '动作', expression: '表情', background: '背景类型', color: '配色',
  material: '材质', usage: '用途'
});
export const TAG_DIMENSIONS = DIMENSION_LABELS;

const ENGLISH_LABELS = Object.freeze({
  'style:dots': 'Dots', 'style:grok': 'Grok Bot', 'style:meta-muse': 'Meta Muse', 'style:humans': 'Original person', 'style:animals': 'Original animal',
  'object-type:orb-character': 'Orb character', 'object-type:hooded-mascot': 'Wrapped mascot', 'object-type:person': 'Person',
  'object-type:dog': 'Dog', 'object-type:soft-geometry': 'Soft geometric character', 'object-type:cat': 'Cat',
  'shape:sphere': 'Sphere', 'shape:hooded': 'Wrapped silhouette', 'shape:chibi-person': 'Chibi person', 'shape:shiba': 'Shiba Inu',
  'shape:cloud': 'Cloud shape', 'shape:rounded-square': 'Rounded square', 'shape:cat': 'Cat shape', 'shape:husky': 'Husky shape',
  'accessory:headphones': 'Headphones', 'accessory:none': 'No accessories', 'accessory:round-glasses': 'Round glasses', 'accessory:bucket-hat': 'Bucket hat',
  'prop:none': 'No props', 'prop:flowers': 'Daisy bouquet', 'prop:closed-book': 'Closed green book',
  'action:front-static': 'Front-facing still pose', 'action:standing': 'Standing pose', 'action:standing-hands-together': 'Standing with hands together',
  'action:sitting': 'Sitting pose', 'action:holding-flowers': 'Holding flowers', 'action:holding-book': 'Holding a book', 'action:waving': 'Greeting wave',
  'expression:neutral': 'Neutral expression', 'expression:smile': 'Smile', 'expression:gentle-smile': 'Gentle smile',
  'background:transparent': 'Transparent background',
  'color:blue': 'Blue', 'color:purple': 'Purple', 'color:cream': 'Cream', 'color:teal': 'Teal', 'color:orange': 'Warm orange',
  'color:pink': 'Rose pink', 'color:lilac': 'Light lilac', 'color:green': 'Green', 'color:sage': 'Pale sage',
  'color:yellow': 'Warm yellow', 'color:blond': 'Light blond', 'color:white': 'Cream white', 'color:gray': 'Gray and white',
  'material:short-plush': 'Short-pile plush', 'material:soft-matte': 'Soft matte surface', 'material:knit-fabric': 'Knit fabric',
  'material:short-fur': 'Short fur', 'material:soft-fabric': 'Soft fabric',
  'usage:transparent-character': 'Transparent character image',
  'facial-features:black-oval-eyes': 'Black oval eyes', 'facial-features:no-visible-mouth': 'No visible mouth',
  'facial-features:white-capsule-eyes': 'Paired white capsule eyes', 'facial-features:inset-peach-face': 'Inset warm-peach face',
  'facial-features:dark-round-eyes': 'Dark round eyes', 'facial-features:soft-smile': 'Soft smile',
  'facial-features:large-brown-eyes': 'Large brown eyes', 'facial-features:small-nose': 'Small nose', 'facial-features:gentle-smile': 'Gentle smile',
  'facial-features:brown-eyes': 'Brown eyes', 'facial-features:black-nose': 'Black nose', 'facial-features:cream-muzzle': 'Cream muzzle',
  'facial-features:blue-eyes': 'Blue eyes', 'facial-features:pink-nose': 'Pink nose', 'facial-features:feline-muzzle': 'Clear feline muzzle',
  'facial-features:whiskers': 'Whiskers', 'facial-features:dark-nose': 'Dark nose', 'facial-features:husky-mask': 'Gray-and-white face mask',
  'clothing:none': 'No separate clothing', 'clothing:teal-knit-top': 'Teal knit top', 'clothing:ivory-shorts': 'Ivory shorts',
  'clothing:light-sneakers': 'Light sneakers', 'clothing:yellow-hoodie': 'Warm-yellow hoodie', 'clothing:yellow-white-sneakers': 'Yellow-and-white sneakers',
  'clothing:light-blue-shirt': 'Light-blue shirt', 'clothing:ivory-knit-cardigan': 'Ivory knit cardigan',
  'clothing:light-blue-trousers': 'Light-blue trousers', 'clothing:ivory-sneakers': 'Ivory sneakers',
  'head-accessory:over-ear-headphones': 'Over-ear headphones', 'head-accessory:none': 'No head accessory',
  'head-accessory:round-glasses': 'Clear round glasses', 'head-accessory:yellow-bucket-hat': 'Yellow soft bucket hat',
  'body-accessory:none': 'No body accessory'
});

const ALIASES = Object.freeze({
  'style:dots': { en: ['Dots icon', 'orb'], 'zh-CN': ['圆点伙伴'] },
  'style:grok': { en: ['Grok'], 'zh-CN': ['Grok Bot'] },
  'style:meta-muse': { en: ['Muse'], 'zh-CN': ['缪斯'] },
  'object-type:person': { en: ['people', 'human'], 'zh-CN': ['人物'] },
  'object-type:dog': { en: ['dog'], 'zh-CN': ['犬', '狗'] },
  'object-type:cat': { en: ['cat'], 'zh-CN': ['猫'] },
  'shape:sphere': { en: ['orb'], 'zh-CN': ['圆球', '球形'] },
  'shape:shiba': { en: ['Shiba'], 'zh-CN': ['柴犬'] },
  'shape:chibi-person': { en: ['chibi'], 'zh-CN': ['Q版'] },
  'facial-features:black-oval-eyes': { en: ['oval eyes'], 'zh-CN': ['椭圆眼', '黑色眼睛'] },
  'facial-features:white-capsule-eyes': { en: ['capsule eyes'], 'zh-CN': ['胶囊眼', '成对胶囊眼'] },
  'facial-features:inset-peach-face': { en: ['inset face'], 'zh-CN': ['内嵌脸面', '暖桃色脸面'] },
  'facial-features:whiskers': { en: ['cat whiskers'], 'zh-CN': ['猫胡须', '胡须'] },
  'clothing:yellow-hoodie': { en: ['yellow clothes'], 'zh-CN': ['黄色连帽衫', '黄衣'] },
  'clothing:ivory-knit-cardigan': { en: ['knit cardigan'], 'zh-CN': ['针织开衫', '米白开衫'] },
  'head-accessory:over-ear-headphones': { en: ['headphones'], 'zh-CN': ['耳机'] },
  'head-accessory:round-glasses': { en: ['glasses'], 'zh-CN': ['圆框眼镜', '眼镜'] },
  'head-accessory:yellow-bucket-hat': { en: ['bucket hat'], 'zh-CN': ['渔夫帽', '黄色帽子'] },
  'body-accessory:none': { en: ['no body accessories'], 'zh-CN': ['无身体配饰'] },
  'accessory:headphones': { en: ['headphones'], 'zh-CN': ['耳机'] },
  'accessory:round-glasses': { en: ['round glasses'], 'zh-CN': ['眼镜'] },
  'accessory:bucket-hat': { en: ['bucket hat'], 'zh-CN': ['渔夫帽', '帽子'] },
  'prop:flowers': { en: ['flowers', 'daisies'], 'zh-CN': ['花束', '雏菊'] },
  'prop:closed-book': { en: ['book', 'green book'], 'zh-CN': ['书', '绿色书'] },
  'action:sitting': { en: ['sit'], 'zh-CN': ['坐'] },
  'action:waving': { en: ['wave'], 'zh-CN': ['挥手'] },
  'background:transparent': { en: ['transparent'], 'zh-CN': ['透明', '无背景'] }
});

const normalizeText = value => String(value ?? '').normalize('NFKC').toLocaleLowerCase().trim().replace(/\s+/g, ' ');
export const normalizeSearch = normalizeText;

function featureLabel(artwork, id) {
  const feature = Object.values(artwork.features || {}).find(item => item?.id === id || item?.ids?.includes(id));
  return feature?.labelsById?.[id] || (feature?.id === id ? feature.label : null) || id;
}

const publishedArtworks = ARTWORKS.filter(validateArtwork);
const knownIds = new Set(publishedArtworks.flatMap(artwork => artwork.featureIds || []));
export const TAGS = Object.freeze([...knownIds].map((id, order) => {
  const dimension = id.slice(0, id.indexOf(':'));
  const sample = publishedArtworks.find(artwork => artwork.featureIds?.includes(id));
  const aliases = ALIASES[id] || { en: [], 'zh-CN': [] };
  return Object.freeze({
    id,
    dimension,
    label: featureLabel(sample, id),
    labelByLanguage: Object.freeze({ en: ENGLISH_LABELS[id] || id, 'zh-CN': featureLabel(sample, id) }),
    aliases: Object.freeze([...aliases.en, ...aliases['zh-CN']]),
    aliasesByLanguage: Object.freeze({ en: Object.freeze([...aliases.en]), 'zh-CN': Object.freeze([...aliases['zh-CN']]) }),
    order,
    status: 'published',
    sourceScope: 'verified-visible-artwork-feature'
  });
}));

const tagById = new Map(TAGS.map(tag => [tag.id, tag]));
const seriesIds = new Set(SERIES.map(series => series.id));

/** Text terms are ANDed; one series is then combined with the text query. */
export function normalizeGalleryQuery(query = {}) {
  if (typeof query === 'string') query = { text: query };
  const validObject = Boolean(query && typeof query === 'object' && !Array.isArray(query));
  const rawSeriesId = validObject ? (query.seriesId ?? '') : undefined;
  const seriesId = typeof rawSeriesId === 'string' ? rawSeriesId.trim() : '';
  const valid = validObject && typeof (query.text ?? '') === 'string'
    && typeof rawSeriesId === 'string' && (seriesId === '' || seriesIds.has(seriesId));
  return Object.freeze({
    text: normalizeText(validObject ? query.text : ''),
    seriesId,
    valid
  });
}

function searchableText(artwork) {
  const tagText = (artwork.featureIds || []).flatMap(id => {
    const tag = tagById.get(id);
    return tag ? [tag.id, tag.label, ...Object.values(tag.labelByLanguage), ...tag.aliases] : [];
  });
  const aliases = Object.values(artwork.aliases || {}).flatMap(values => Array.isArray(values) ? values : []);
  const names = Object.values(artwork.titleByLanguage || {});
  const descriptions = Object.values(artwork.descriptionByLanguage || {});
  return normalizeText([
    artwork.id, artwork.title, artwork.description, artwork.styleIdentity,
    artwork.seriesId, ...names, ...descriptions, ...aliases, ...tagText
  ].join(' '));
}

export function queryArtworks(query = {}, catalog = ARTWORKS, validationContext = {}) {
  const normalized = normalizeGalleryQuery(query);
  if (!normalized.valid || !Array.isArray(catalog)) return [];
  const tokens = normalized.text.split(' ').filter(Boolean);
  return catalog.filter(artwork => {
    if (!validateArtwork(artwork, validationContext)) return false;
    if (normalized.seriesId && artwork.seriesId !== normalized.seriesId) return false;
    const haystack = searchableText(artwork);
    return tokens.every(token => haystack.includes(token));
  });
}
