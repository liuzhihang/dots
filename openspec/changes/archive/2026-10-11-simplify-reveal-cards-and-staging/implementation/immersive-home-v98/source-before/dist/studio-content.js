const deepFreeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
};

export const SERIES = deepFreeze([
  { id: 'dots', labelByLanguage: { en: 'Dots', 'zh-CN': 'Dots' } },
  { id: 'grok', labelByLanguage: { en: 'Grok Bot', 'zh-CN': 'Grok Bot' } },
  { id: 'meta-muse', labelByLanguage: { en: 'Meta Muse', 'zh-CN': 'Meta Muse' } },
  { id: 'humans', labelByLanguage: { en: 'People', 'zh-CN': '人物' } },
  { id: 'animals', labelByLanguage: { en: 'Animals', 'zh-CN': '动物' } }
]);

export const ARTWORK_CONTENT = deepFreeze({
  'candidate-dots-20261005': {
    titleByLanguage: { en: 'Headphone Dots', 'zh-CN': '耳机 Dots' },
    descriptionByLanguage: { en: 'A blue short-pile plush orb with black oval eyes and over-ear headphones. It has no visible mouth or limbs.', 'zh-CN': '蓝色短绒圆球角色，佩戴包耳式耳机，黑色椭圆眼睛，无嘴与肢体。' },
    aliases: { en: ['Blue Headphone Dots', 'blue Dots', 'headphones', 'orb'], 'zh-CN': ['蓝色耳机 Dots', '蓝色 Dots', '圆球'] },
    seriesId: 'dots',
    detailFactIds: ['color:blue', 'material:short-plush', 'head-accessory:over-ear-headphones', 'facial-features:black-oval-eyes']
  },
  'candidate-grok-20261005': {
    titleByLanguage: { en: 'Purple Grok', 'zh-CN': '紫色 Grok' },
    descriptionByLanguage: { en: 'A purple soft-geometric orb with paired slanted white capsule eyes, without a screen face, mouth, or limbs.', 'zh-CN': '紫色软几何圆球，配对的斜置白色胶囊眼；不带屏幕脸、嘴或肢体。' },
    aliases: { en: ['Purple Grok Bot', 'purple Grok Bot', 'soft geometry', 'capsule eyes'], 'zh-CN': ['紫色 Grok Bot', '软几何', '胶囊眼'] },
    seriesId: 'grok',
    detailFactIds: ['color:purple', 'material:soft-matte', 'shape:sphere', 'facial-features:white-capsule-eyes']
  },
  'candidate-meta-muse-20261005': {
    titleByLanguage: { en: 'Cream Muse', 'zh-CN': '奶油 Muse' },
    descriptionByLanguage: { en: 'A cream wrapped mascot with an inset warm-peach face, short rounded limbs, and a gentle smile.', 'zh-CN': '奶油包覆式轮廓、内嵌暖桃色脸面、短圆肢体与柔和微笑。' },
    aliases: { en: ['Cream Meta Muse', 'cream Muse', 'wrapped mascot', 'inset face'], 'zh-CN': ['奶油 Meta Muse', '包覆式角色', '内嵌脸面'] },
    seriesId: 'meta-muse',
    detailFactIds: ['color:cream', 'shape:hooded', 'facial-features:inset-peach-face', 'facial-features:soft-smile']
  },
  'candidate-humans-20261005': {
    titleByLanguage: { en: 'Chestnut Person', 'zh-CN': '栗发人物' },
    descriptionByLanguage: { en: 'An original chibi person with layered chestnut hair, a teal knit top, ivory shorts, and hands resting together.', 'zh-CN': '原创栗发 Q 版人物，青绿色针织上衣与米白短裤，双手在身前自然交握。' },
    aliases: { en: ['Chestnut-Haired Person', 'chibi person', 'chestnut hair', 'teal sweater'], 'zh-CN': ['栗发青绿人物', 'Q 版人物', '青绿针织'] },
    seriesId: 'humans',
    detailFactIds: ['object-type:person', 'clothing:teal-knit-top', 'clothing:ivory-shorts', 'action:standing-hands-together']
  },
  'candidate-animals-20261005': {
    titleByLanguage: { en: 'Shiba Inu', 'zh-CN': '柴犬' },
    descriptionByLanguage: { en: 'An original warm-orange Shiba Inu with upright ears, a cream muzzle and chest, four paws, and a curled tail.', 'zh-CN': '原创暖橙柴犬，茶白口鼻与胸腹，四爪坐姿和卷尾。' },
    aliases: { en: ['Warm Orange Shiba Inu', 'Shiba', 'orange dog', 'curled tail'], 'zh-CN': ['暖橙柴犬', '橙色狗狗', '卷尾'] },
    seriesId: 'animals',
    detailFactIds: ['shape:shiba', 'color:orange', 'facial-features:cream-muzzle', 'action:sitting']
  },
  'dots-rose-glasses': {
    titleByLanguage: { en: 'Rose Glasses Dots', 'zh-CN': '莓粉眼镜 Dots' },
    descriptionByLanguage: { en: 'A berry-pink short-pile Dots orb wearing clear rose-pink round glasses, with no visible mouth or limbs.', 'zh-CN': '莓粉短绒圆球 Dots，佩戴透明粉色圆框眼镜，无嘴与肢体。' },
    aliases: { en: ['Rose-Glasses Dots', 'pink Dots', 'round glasses'], 'zh-CN': ['莓粉圆框 Dots', '粉色 Dots', '圆框眼镜', '眼镜'] },
    seriesId: 'dots',
    detailFactIds: ['color:pink', 'material:short-plush', 'head-accessory:round-glasses', 'facial-features:black-oval-eyes']
  },
  'dots-lilac-bucket': {
    titleByLanguage: { en: 'Bucket Hat Dots', 'zh-CN': '渔夫帽 Dots' },
    descriptionByLanguage: { en: 'A light-lilac short-pile Dots orb wearing a soft yellow bucket hat, with no visible mouth or limbs.', 'zh-CN': '浅紫短绒圆球 Dots，戴黄色软布渔夫帽，无嘴与肢体。' },
    aliases: { en: ['Lilac Dots with a Yellow Bucket Hat', 'lilac Dots', 'yellow bucket hat', 'yellow hat'], 'zh-CN': ['浅紫渔夫帽 Dots', '浅紫 Dots', '黄色帽子'] },
    seriesId: 'dots',
    detailFactIds: ['color:lilac', 'material:short-plush', 'head-accessory:yellow-bucket-hat', 'facial-features:black-oval-eyes']
  },
  'grok-green-cloud': {
    titleByLanguage: { en: 'Green Cloud Grok', 'zh-CN': '青绿云 Grok' },
    descriptionByLanguage: { en: 'A smooth green soft-cloud Grok Bot with a pair of slanted white capsule eyes and no mouth or limbs.', 'zh-CN': '青绿色软云形 Grok Bot，配对斜置白色胶囊眼，无嘴与肢体。' },
    aliases: { en: ['Green Cloud Grok Bot', 'green Grok', 'cloud shape', 'soft cloud'], 'zh-CN': ['青绿云朵 Grok', '绿色 Grok', '云形', '软云'] },
    seriesId: 'grok',
    detailFactIds: ['color:green', 'shape:cloud', 'material:soft-matte', 'facial-features:white-capsule-eyes']
  },
  'grok-teal-square': {
    titleByLanguage: { en: 'Teal Square Grok', 'zh-CN': '蓝绿方 Grok' },
    descriptionByLanguage: { en: 'A teal rounded-square Grok Bot with paired slanted white capsule eyes and no mouth or limbs.', 'zh-CN': '蓝绿色圆角方形 Grok Bot，配对斜置白色胶囊眼，无嘴与肢体。' },
    aliases: { en: ['Teal Square Grok Bot', 'teal Grok', 'rounded square', 'capsule eyes'], 'zh-CN': ['蓝绿方形 Grok', '蓝绿色 Grok', '圆角方形', '胶囊眼'] },
    seriesId: 'grok',
    detailFactIds: ['color:teal', 'shape:rounded-square', 'material:soft-matte', 'facial-features:white-capsule-eyes']
  },
  'muse-rose-flowers': {
    titleByLanguage: { en: 'Daisy Muse', 'zh-CN': '花束 Muse' },
    descriptionByLanguage: { en: 'A rose-pink wrapped Meta Muse with an inset peach face, holding a bouquet of white daisies in a still pose.', 'zh-CN': '玫粉包覆式 Meta Muse 双手抱着白色雏菊花束；这是静态完整作品。' },
    aliases: { en: ['Rose Meta Muse with Daisies', 'rose Muse', 'daisy bouquet', 'flowers'], 'zh-CN': ['玫粉花束 Meta Muse', '玫粉 Muse', '雏菊花束', '抱花'] },
    seriesId: 'meta-muse',
    detailFactIds: ['color:pink', 'facial-features:inset-peach-face', 'prop:flowers', 'action:holding-flowers']
  },
  'muse-sage-reading': {
    titleByLanguage: { en: 'Sage Muse', 'zh-CN': '鼠尾草 Muse' },
    descriptionByLanguage: { en: 'A pale-sage wrapped Meta Muse holding a closed green book upright; the book is not shown open or being read.', 'zh-CN': '浅鼠尾草绿包覆式 Meta Muse 双手抱着一本竖直合拢的绿色书，不表示正在阅读。' },
    aliases: { en: ['Sage Meta Muse with a Closed Book', 'sage Muse', 'closed book', 'green book'], 'zh-CN': ['鼠尾草捧书 Meta Muse', '鼠尾草绿 Muse', '合拢的书', '绿色书'] },
    seriesId: 'meta-muse',
    detailFactIds: ['color:sage', 'facial-features:inset-peach-face', 'prop:closed-book', 'action:holding-book']
  },
  'human-bun-yellow': {
    titleByLanguage: { en: 'Yellow Hoodie', 'zh-CN': '黄衣丸子头' },
    descriptionByLanguage: { en: 'An original chibi person with a high chestnut bun, a warm-yellow hoodie, ivory shorts, and one raised hand in a greeting wave.', 'zh-CN': '原创丸子头 Q 版人物，穿暖黄连帽衫并抬手挥别。' },
    aliases: { en: ['Chibi Person in a Yellow Hoodie', 'yellow hoodie person', 'chestnut bun', 'waving person'], 'zh-CN': ['黄衣丸子头女孩', '黄色连帽衫', '栗色丸子头', '挥手人物'] },
    seriesId: 'humans',
    detailFactIds: ['object-type:person', 'clothing:yellow-hoodie', 'action:waving', 'expression:gentle-smile']
  },
  'human-blond-glasses': {
    titleByLanguage: { en: 'Blond Glasses', 'zh-CN': '金发眼镜' },
    descriptionByLanguage: { en: 'An original chibi person with short blond hair and clear round glasses, wearing an ivory knit cardigan and light-blue clothes.', 'zh-CN': '原创短金发 Q 版人物，戴透明圆框眼镜，穿米白针织开衫与浅蓝衣裤。' },
    aliases: { en: ['Blond Person with Round Glasses', 'blond chibi', 'clear glasses', 'knit cardigan'], 'zh-CN': ['金发圆框伙伴', '金发人物', '透明眼镜', '针织开衫'] },
    seriesId: 'humans',
    detailFactIds: ['object-type:person', 'head-accessory:round-glasses', 'clothing:ivory-knit-cardigan', 'clothing:light-blue-trousers']
  },
  'animal-white-cat': {
    titleByLanguage: { en: 'White Cat', 'zh-CN': '奶油白猫' },
    descriptionByLanguage: { en: 'An original cream-white cat with gray ears and tail, blue eyes, a pink nose, clear whiskers, and a four-paw sitting pose.', 'zh-CN': '原创奶油白猫，灰耳灰尾、蓝眼、粉鼻、清晰口鼻与胡须，四爪坐姿。' },
    aliases: { en: ['Cream-White Cat', 'white cat', 'gray tail', 'blue eyes'], 'zh-CN': ['奶油白猫伙伴', '灰色尾巴', '蓝眼睛'] },
    seriesId: 'animals',
    detailFactIds: ['object-type:cat', 'color:white', 'facial-features:blue-eyes', 'facial-features:whiskers']
  },
  'animal-gray-husky': {
    titleByLanguage: { en: 'Husky', 'zh-CN': '灰白哈士奇' },
    descriptionByLanguage: { en: 'An original gray-and-white Husky with upright ears, a distinct face mask, a dark nose, and a fluffy curled tail.', 'zh-CN': '原创灰白哈士奇，三角立耳与清楚面罩色块，四爪坐姿和蓬松卷尾。' },
    aliases: { en: ['Gray-and-White Husky', 'Husky dog', 'gray mask', 'curled tail'], 'zh-CN': ['灰白哈士奇伙伴', '灰白面罩', '卷尾'] },
    seriesId: 'animals',
    detailFactIds: ['shape:husky', 'color:gray', 'facial-features:husky-mask', 'action:sitting']
  }
});

export const LEGACY_ARTWORK_TEXT = deepFreeze({
  'candidate-dots-20261005': { title: '蓝色耳机 Dots', description: '蓝色短绒圆球角色，佩戴包耳式耳机，黑色椭圆眼睛，无嘴与肢体。' },
  'candidate-grok-20261005': { title: '紫色 Grok Bot', description: '紫色软几何圆球，配对的斜置白色胶囊眼；不带屏幕脸、嘴或肢体。' },
  'candidate-meta-muse-20261005': { title: '奶油 Meta Muse', description: '奶油包覆式轮廓、内嵌暖桃色脸面、短圆肢体与柔和微笑。' },
  'candidate-humans-20261005': { title: '栗发青绿人物', description: '原创栗发 Q 版人物，青绿色针织上衣与米白短裤，双手在身前自然交握。' },
  'candidate-animals-20261005': { title: '暖橙柴犬', description: '原创暖橙柴犬，茶白口鼻与胸腹，四爪坐姿和卷尾。' },
  'dots-rose-glasses': { title: '莓粉圆框 Dots', description: '莓粉短绒圆球 Dots，佩戴透明粉色圆框眼镜，无嘴与肢体。' },
  'dots-lilac-bucket': { title: '浅紫渔夫帽 Dots', description: '浅紫短绒圆球 Dots，戴黄色软布渔夫帽，无嘴与肢体。' },
  'grok-green-cloud': { title: '青绿云朵 Grok', description: '青绿色软云形 Grok Bot，配对斜置白色胶囊眼，无嘴与肢体。' },
  'grok-teal-square': { title: '蓝绿方形 Grok', description: '蓝绿色圆角方形 Grok Bot，配对斜置白色胶囊眼，无嘴与肢体。' },
  'muse-rose-flowers': { title: '玫粉花束 Meta Muse', description: '玫粉包覆式 Meta Muse 双手抱着白色雏菊花束；这是静态完整作品。' },
  'muse-sage-reading': { title: '鼠尾草捧书 Meta Muse', description: '浅鼠尾草绿包覆式 Meta Muse 双手抱着一本竖直合拢的绿色书，不表示正在阅读。' },
  'human-bun-yellow': { title: '黄衣丸子头女孩', description: '原创丸子头 Q 版人物，穿暖黄连帽衫并抬手挥别。' },
  'human-blond-glasses': { title: '金发圆框伙伴', description: '原创短金发 Q 版人物，戴透明圆框眼镜，穿米白针织开衫与浅蓝衣裤。' },
  'animal-white-cat': { title: '奶油白猫伙伴', description: '原创奶油白猫，灰耳灰尾、蓝眼、粉鼻、清晰口鼻与胡须，四爪坐姿。' },
  'animal-gray-husky': { title: '灰白哈士奇伙伴', description: '原创灰白哈士奇，三角立耳与清楚面罩色块，四爪坐姿和蓬松卷尾。' }
});

// These are deterministic gallery derivatives of the approved PNG originals.
// The source artwork stays unchanged; poster metadata does not grant separate art approval.
const posterRows = [
  ['candidate-dots-20261005', 'candidate-dots-20261005-v1.webp', 53964, '25a144017c3b85a6a0be743bcc2e01e4f8c600b3f506fc545ff6a1a915cc161f', [143466, 530, 118148]],
  ['candidate-grok-20261005', 'candidate-grok-20261005-v1.webp', 19620, 'e1b40e2eb20e762b66e00be1dafc26a710a0b43cb849c07550ee1ecab20c73bc', [149355, 810, 111979]],
  ['candidate-meta-muse-20261005', 'candidate-meta-muse-20261005-v1.webp', 26872, 'e052eb98d4d0ed787445d0b3d66e70f614a5c568c5f65d98c7a9599349a3d751', [178344, 582, 83218]],
  ['candidate-humans-20261005', 'candidate-humans-20261005-v1.webp', 35746, 'da95dedff71445bba0a102a3ee3dac862de1b7c21486d14beb4c92daadf6d8ad', [193473, 733, 67938]],
  ['candidate-animals-20261005', 'candidate-animals-20261005-v1.webp', 44244, 'eda605d6ea5d63da7bf2edda3b98379c624aa1bd710950e866f2ab1fc50ba952', [165857, 211, 96076]],
  ['dots-rose-glasses', 'dots-rose-glasses-v1.webp', 63930, '743dfb9fe97fae19629e0e4c70cd850f841c748537f182c86ea8d5718a573823', [147546, 26, 114572]],
  ['dots-lilac-bucket', 'dots-lilac-bucket-v1.webp', 58256, '139613ea4e94998961ae68f2d5e73f96d5c500055e6f132b699844e349017062', [148652, 397, 113095]],
  ['grok-green-cloud', 'grok-green-cloud-v1.webp', 19066, '80a735fa20f8363959ce58545ef5470ef155606cd84ef71e377ac2075bd33fc3', [182304, 743, 79097]],
  ['grok-teal-square', 'grok-teal-square-v1.webp', 16022, '2f76e1a8a2f515e6222e1c9d230ed841139c3fa7dbde6cc03b03446097286aa7', [163609, 857, 97678]],
  ['muse-rose-flowers', 'muse-rose-flowers-v1.webp', 34690, 'd1ef7e56c616c900c795b58fed4d3cf0106ccf3715b646cea663cdf1157034e6', [179869, 428, 81847]],
  ['muse-sage-reading', 'muse-sage-reading-v1.webp', 27236, '7e4715e708d8bf86bfbcdd58038bdf704a351e2ae298e369f3e52f5a69ffaf62', [184975, 476, 76693]],
  ['human-bun-yellow', 'human-bun-yellow-v1.webp', 37648, '99a25a4f4c0a21dd34731acadbfcb553bbd0565d8adabbebd1fb231307ab8e94', [199957, 821, 61366]],
  ['human-blond-glasses', 'human-blond-glasses-v1.webp', 34014, 'd3ec6a31b89233d86bbfa9774f7477c3e3d7613f3b90ce270e4c1ff931295958', [199655, 734, 61755]],
  ['animal-white-cat', 'animal-white-cat-v1.webp', 42036, '3c73bdc9938c10d0f4f9acf2c17b3b2642afec5bd6f502ae456ad285c13fba36', [159968, 182, 101994]],
  ['animal-gray-husky', 'animal-gray-husky-v1.webp', 43698, '434a3d32da36754c3fa8853832caffffba3f61835712ab70adedd68108f0c012', [158395, 242, 103507]]
];

export const POSTER_ASSETS = deepFreeze(posterRows.map(([artworkId, filename, byteSize, sha256, alphaCounts]) => ({
  id: `asset:${artworkId}:poster:v1`,
  artworkId,
  version: 'v1',
  path: `./assets/posters/${filename}`,
  sourcePath: `dist/assets/posters/${filename}`,
  mime: 'image/webp',
  byteSize,
  sha256,
  width: 512,
  height: 512,
  alpha: { hasAlpha: true, hasTransparency: true, transparentPixels: alphaCounts[0], opaquePixels: alphaCounts[1], partialAlphaPixels: alphaCounts[2] },
  resourceKind: 'gallery-poster',
  purpose: 'gallery-cover-only',
  downloadable: false,
  derivedFrom: `asset:${artworkId}:original`,
  transformation: 'crop fully transparent border at alpha >= 1; scale proportionally to fit 448x448; center on transparent 512x512 canvas; lossy VP8 WebP with alpha',
  approvalRelation: 'mechanical derivative of the registered approved PNG; no independent Artwork approval'
})));

export const BRAND_ASSETS = Object.freeze([
  {
    "id": "preserved-brand-source",
    "path": "./assets/characters/brand-mark.png",
    "sha256": "a2b10ed8d7a605c5bbc0b640293ab36df70d3d6911c7c4684186b899f357aefa",
    "byteSize": 574528,
    "purpose": "preserved-brand-source",
    "derivedFrom": null
  },
  {
    "id": "ui-brand-display",
    "path": "./assets/posters/brand-mark-display-v1.png",
    "sha256": "a55c3a996d47f3992995068942556385feddea419b87790283af0633c6a48d64",
    "byteSize": 6053,
    "purpose": "ui-brand-display",
    "derivedFrom": "./assets/characters/brand-mark.png"
  }
]);
