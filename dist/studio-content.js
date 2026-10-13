export { DISPLAY_ASSETS, APPROVED_DISPLAY_ASSETS, PREVIEW_DISPLAY_ASSETS, THUMBNAIL_ASSETS, DETAIL_PREVIEW_ASSETS } from './studio-display-assets.js?v=110';

const deepFreeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
};

export const SERIES = deepFreeze([
  { id: 'dots', labelByLanguage: { en: 'Dots', 'zh-CN': 'Dots' } },
  { id: 'grok', labelByLanguage: { en: 'Grok Bot', 'zh-CN': 'Grok Bot' } },
  { id: 'meta-muse', labelByLanguage: { en: 'Muse', 'zh-CN': 'Muse' } },
  { id: 'animals', labelByLanguage: { en: 'Animals', 'zh-CN': '动物' } },
  { id: 'humans', labelByLanguage: { en: 'People', 'zh-CN': '人物' } }
]);

export const DOTS_PROMPT = deepFreeze({
  en: 'Create one complete Dots character: a small, softly rounded, short-pile plush form with two simple black eyes. Preserve the simple Dots identity and use the user-provided description for any specific appearance. Keep the character limbless: no arms, hands, legs, or feet. Do not add a mouth, clothing, accessories, a prop, or a background unless explicitly requested and supported by the selected reference. Show one front-facing still character, centered, with a transparent background.',
  'zh-CN': '创作一个完整的 Dots 角色：小巧、圆润、短密绒质感的主体，带一对简洁黑色眼睛。保持简洁的 Dots 身份，具体外观以用户提供的描述为准。角色必须保持无肢体：没有手臂、手、腿或脚。除非明确提出且所选参考确实支持，否则不要添加嘴、衣物、配饰、道具或背景。正面居中展示一个静态角色，背景透明。'
});

// Character identity is independent of a series and can be shared by multiple
// complete Artwork variations. New identities are data entries, not UI cases.
export const CHARACTER_IDENTITIES = deepFreeze([
  { id: 'dots-core', seriesId: 'dots', labelByLanguage: { en: 'Dots', 'zh-CN': 'Dots' } },
  { id: 'grok-core', seriesId: 'grok', labelByLanguage: { en: 'Grok Bot', 'zh-CN': 'Grok Bot' } },
  { id: 'meta-muse-core', seriesId: 'meta-muse', labelByLanguage: { en: 'Muse', 'zh-CN': 'Muse' } },
  { id: 'human-chestnut-knit', seriesId: 'humans', labelByLanguage: { en: 'Chestnut Person', 'zh-CN': '栗发人物' } },
  { id: 'human-bun-yellow', seriesId: 'humans', labelByLanguage: { en: 'Yellow Hoodie Person', 'zh-CN': '黄衣丸子头人物' } },
  { id: 'human-blond-glasses', seriesId: 'humans', labelByLanguage: { en: 'Blond Glasses Person', 'zh-CN': '金发眼镜人物' } },
  { id: 'animal-shiba', seriesId: 'animals', labelByLanguage: { en: 'Shiba Inu', 'zh-CN': '柴犬' } },
  { id: 'animal-white-cat', seriesId: 'animals', labelByLanguage: { en: 'White Cat', 'zh-CN': '奶油白猫' } },
  { id: 'animal-gray-husky', seriesId: 'animals', labelByLanguage: { en: 'Gray Husky', 'zh-CN': '灰白哈士奇' } },
  { id: 'original-robot-v98-candidate', seriesId: 'independent-original', labelByLanguage: { en: 'Ivory Bot', 'zh-CN': '奶白机器人' } },
  { id: 'original-rabbit-v98-candidate', seriesId: 'animals', labelByLanguage: { en: 'White Rabbit', 'zh-CN': '白兔' } },
  { id: 'dots-butter-beret', seriesId: 'dots', labelByLanguage: { en: 'Butter Beret Dots', 'zh-CN': '奶油黄贝雷帽 Dots' } },
  { id: 'grok-coral-drop', seriesId: 'grok', labelByLanguage: { en: 'Coral Drop Grok', 'zh-CN': '珊瑚水滴 Grok' } },
  { id: 'muse-lavender-lantern', seriesId: 'meta-muse', labelByLanguage: { en: 'Lantern Muse', 'zh-CN': '灯笼 Muse' } },
  { id: 'human-rust-jacket', seriesId: 'humans', labelByLanguage: { en: 'Rust Jacket Person', 'zh-CN': '铁锈夹克人物' } },
  { id: 'animal-cocoa-bear', seriesId: 'animals', labelByLanguage: { en: 'Cocoa Bear', 'zh-CN': '可可熊' } },
  { id: 'dots-lime-frog-bow', seriesId: 'dots', labelByLanguage: { en: 'Lime Frog Dots', 'zh-CN': '青柠蛙形 Dots' } },
  { id: 'dots-pink-heart-shades', seriesId: 'dots', labelByLanguage: { en: 'Pink Heart Dots', 'zh-CN': '粉色爱心 Dots' } }
]);

export const ARTWORK_CONTENT = deepFreeze({
  'candidate-dots-20261005': {
    titleByLanguage: { en: 'Headphones', 'zh-CN': '耳机' },
    descriptionByLanguage: { en: 'A blue short-pile plush orb with black oval eyes and over-ear headphones. It has no visible mouth or limbs.', 'zh-CN': '蓝色短绒圆球角色，佩戴包耳式耳机，黑色椭圆眼睛，无嘴与肢体。' },
    aliases: { en: ['Blue Headphone Dots', 'blue Dots', 'headphones', 'orb'], 'zh-CN': ['蓝色耳机 Dots', '蓝色 Dots', '圆球'] },
    characterId: 'dots-core',
    seriesId: 'dots',
    detailFactIds: ['color:blue', 'material:short-plush', 'head-accessory:over-ear-headphones', 'facial-features:black-oval-eyes']
  },
  'candidate-grok-20261005': {
    titleByLanguage: { en: 'Purple', 'zh-CN': '紫色' },
    descriptionByLanguage: { en: 'A purple soft-geometric orb with paired slanted white capsule eyes, without a screen face, mouth, or limbs.', 'zh-CN': '紫色软几何圆球，配对的斜置白色胶囊眼；不带屏幕脸、嘴或肢体。' },
    aliases: { en: ['Purple Grok Bot', 'purple Grok Bot', 'soft geometry', 'capsule eyes'], 'zh-CN': ['紫色 Grok Bot', '软几何', '胶囊眼'] },
    characterId: 'grok-core',
    seriesId: 'grok',
    detailFactIds: ['color:purple', 'material:soft-matte', 'shape:sphere', 'facial-features:white-capsule-eyes']
  },
  'candidate-meta-muse-20261005': {
    titleByLanguage: { en: 'Cream', 'zh-CN': '奶油' },
    descriptionByLanguage: { en: 'A cream wrapped mascot with an inset warm-peach face, short rounded limbs, and a gentle smile.', 'zh-CN': '奶油包覆式轮廓、内嵌暖桃色脸面、短圆肢体与柔和微笑。' },
    aliases: { en: ['Cream Meta Muse', 'cream Muse', 'wrapped mascot', 'inset face'], 'zh-CN': ['奶油 Meta Muse', '包覆式角色', '内嵌脸面'] },
    characterId: 'meta-muse-core',
    seriesId: 'meta-muse',
    detailFactIds: ['color:cream', 'shape:hooded', 'facial-features:inset-peach-face', 'facial-features:soft-smile']
  },
  'candidate-humans-20261005': {
    titleByLanguage: { en: 'Chestnut', 'zh-CN': '栗发' },
    descriptionByLanguage: { en: 'An original chibi person with layered chestnut hair, a teal knit top, ivory shorts, and hands resting together.', 'zh-CN': '原创栗发 Q 版人物，青绿色针织上衣与米白短裤，双手在身前自然交握。' },
    aliases: { en: ['Chestnut-Haired Person', 'chibi person', 'chestnut hair', 'teal sweater'], 'zh-CN': ['栗发青绿人物', 'Q 版人物', '青绿针织'] },
    characterId: 'human-chestnut-knit',
    seriesId: 'humans',
    detailFactIds: ['object-type:person', 'clothing:teal-knit-top', 'clothing:ivory-shorts', 'action:standing-hands-together']
  },
  'candidate-animals-20261005': {
    titleByLanguage: { en: 'Shiba Inu', 'zh-CN': '柴犬' },
    descriptionByLanguage: { en: 'An original warm-orange Shiba Inu with upright ears, a cream muzzle and chest, four paws, and a curled tail.', 'zh-CN': '原创暖橙柴犬，茶白口鼻与胸腹，四爪坐姿和卷尾。' },
    aliases: { en: ['Warm Orange Shiba Inu', 'Shiba', 'orange dog', 'curled tail'], 'zh-CN': ['暖橙柴犬', '橙色狗狗', '卷尾'] },
    characterId: 'animal-shiba',
    seriesId: 'animals',
    detailFactIds: ['shape:shiba', 'color:orange', 'facial-features:cream-muzzle', 'action:sitting']
  },
  'dots-rose-glasses': {
    titleByLanguage: { en: 'Rose Glasses', 'zh-CN': '莓粉眼镜' },
    descriptionByLanguage: { en: 'A berry-pink short-pile Dots orb wearing clear rose-pink round glasses, with no visible mouth or limbs.', 'zh-CN': '莓粉短绒圆球 Dots，佩戴透明粉色圆框眼镜，无嘴与肢体。' },
    aliases: { en: ['Rose-Glasses Dots', 'pink Dots', 'round glasses'], 'zh-CN': ['莓粉圆框 Dots', '粉色 Dots', '圆框眼镜', '眼镜'] },
    characterId: 'dots-core',
    seriesId: 'dots',
    detailFactIds: ['color:pink', 'material:short-plush', 'head-accessory:round-glasses', 'facial-features:black-oval-eyes']
  },
  'dots-lilac-bucket': {
    titleByLanguage: { en: 'Bucket Hat', 'zh-CN': '渔夫帽' },
    descriptionByLanguage: { en: 'A light-lilac short-pile Dots orb wearing a soft yellow bucket hat, with no visible mouth or limbs.', 'zh-CN': '浅紫短绒圆球 Dots，戴黄色软布渔夫帽，无嘴与肢体。' },
    aliases: { en: ['Lilac Dots with a Yellow Bucket Hat', 'lilac Dots', 'yellow bucket hat', 'yellow hat'], 'zh-CN': ['浅紫渔夫帽 Dots', '浅紫 Dots', '黄色帽子'] },
    characterId: 'dots-core',
    seriesId: 'dots',
    detailFactIds: ['color:lilac', 'material:short-plush', 'head-accessory:yellow-bucket-hat', 'facial-features:black-oval-eyes']
  },
  'grok-green-cloud': {
    titleByLanguage: { en: 'Green Cloud', 'zh-CN': '青绿云' },
    descriptionByLanguage: { en: 'A smooth green soft-cloud Grok Bot with a pair of slanted white capsule eyes and no mouth or limbs.', 'zh-CN': '青绿色软云形 Grok Bot，配对斜置白色胶囊眼，无嘴与肢体。' },
    aliases: { en: ['Green Cloud Grok Bot', 'green Grok', 'cloud shape', 'soft cloud'], 'zh-CN': ['青绿云朵 Grok', '绿色 Grok', '云形', '软云'] },
    characterId: 'grok-core',
    seriesId: 'grok',
    detailFactIds: ['color:green', 'shape:cloud', 'material:soft-matte', 'facial-features:white-capsule-eyes']
  },
  'grok-teal-square': {
    titleByLanguage: { en: 'Teal Square', 'zh-CN': '蓝绿方' },
    descriptionByLanguage: { en: 'A teal rounded-square Grok Bot with paired slanted white capsule eyes and no mouth or limbs.', 'zh-CN': '蓝绿色圆角方形 Grok Bot，配对斜置白色胶囊眼，无嘴与肢体。' },
    aliases: { en: ['Teal Square Grok Bot', 'teal Grok', 'rounded square', 'capsule eyes'], 'zh-CN': ['蓝绿方形 Grok', '蓝绿色 Grok', '圆角方形', '胶囊眼'] },
    characterId: 'grok-core',
    seriesId: 'grok',
    detailFactIds: ['color:teal', 'shape:rounded-square', 'material:soft-matte', 'facial-features:white-capsule-eyes']
  },
  'muse-rose-flowers': {
    titleByLanguage: { en: 'Daisy', 'zh-CN': '花束' },
    descriptionByLanguage: { en: 'A rose-pink wrapped Meta Muse with an inset peach face, holding a bouquet of white daisies in a still pose.', 'zh-CN': '玫粉包覆式 Meta Muse 双手抱着白色雏菊花束；这是静态完整作品。' },
    aliases: { en: ['Rose Meta Muse with Daisies', 'rose Muse', 'daisy bouquet', 'flowers'], 'zh-CN': ['玫粉花束 Meta Muse', '玫粉 Muse', '雏菊花束', '抱花'] },
    characterId: 'meta-muse-core',
    seriesId: 'meta-muse',
    detailFactIds: ['color:pink', 'facial-features:inset-peach-face', 'prop:flowers', 'action:holding-flowers']
  },
  'muse-sage-reading': {
    titleByLanguage: { en: 'Sage', 'zh-CN': '鼠尾草' },
    descriptionByLanguage: { en: 'A pale-sage wrapped Meta Muse holding a closed green book upright; the book is not shown open or being read.', 'zh-CN': '浅鼠尾草绿包覆式 Meta Muse 双手抱着一本竖直合拢的绿色书，不表示正在阅读。' },
    aliases: { en: ['Sage Meta Muse with a Closed Book', 'sage Muse', 'closed book', 'green book'], 'zh-CN': ['鼠尾草捧书 Meta Muse', '鼠尾草绿 Muse', '合拢的书', '绿色书'] },
    characterId: 'meta-muse-core',
    seriesId: 'meta-muse',
    detailFactIds: ['color:sage', 'facial-features:inset-peach-face', 'prop:closed-book', 'action:holding-book']
  },
  'human-bun-yellow': {
    titleByLanguage: { en: 'Yellow Hoodie', 'zh-CN': '黄衣丸子头' },
    descriptionByLanguage: { en: 'An original chibi person with a high chestnut bun, a warm-yellow hoodie, ivory shorts, and one raised hand in a greeting wave.', 'zh-CN': '原创丸子头 Q 版人物，穿暖黄连帽衫并抬手挥别。' },
    aliases: { en: ['Chibi Person in a Yellow Hoodie', 'yellow hoodie person', 'chestnut bun', 'waving person'], 'zh-CN': ['黄衣丸子头女孩', '黄色连帽衫', '栗色丸子头', '挥手人物'] },
    characterId: 'human-bun-yellow',
    seriesId: 'humans',
    detailFactIds: ['object-type:person', 'clothing:yellow-hoodie', 'action:waving', 'expression:gentle-smile']
  },
  'human-blond-glasses': {
    titleByLanguage: { en: 'Blond Glasses', 'zh-CN': '金发眼镜' },
    descriptionByLanguage: { en: 'An original chibi person with short blond hair and clear round glasses, wearing an ivory knit cardigan and light-blue clothes.', 'zh-CN': '原创短金发 Q 版人物，戴透明圆框眼镜，穿米白针织开衫与浅蓝衣裤。' },
    aliases: { en: ['Blond Person with Round Glasses', 'blond chibi', 'clear glasses', 'knit cardigan'], 'zh-CN': ['金发圆框伙伴', '金发人物', '透明眼镜', '针织开衫'] },
    characterId: 'human-blond-glasses',
    seriesId: 'humans',
    detailFactIds: ['object-type:person', 'head-accessory:round-glasses', 'clothing:ivory-knit-cardigan', 'clothing:light-blue-trousers']
  },
  'animal-white-cat': {
    titleByLanguage: { en: 'White Cat', 'zh-CN': '奶油白猫' },
    descriptionByLanguage: { en: 'An original cream-white cat with gray ears and tail, blue eyes, a pink nose, clear whiskers, and a four-paw sitting pose.', 'zh-CN': '原创奶油白猫，灰耳灰尾、蓝眼、粉鼻、清晰口鼻与胡须，四爪坐姿。' },
    aliases: { en: ['Cream-White Cat', 'white cat', 'gray tail', 'blue eyes'], 'zh-CN': ['奶油白猫伙伴', '灰色尾巴', '蓝眼睛'] },
    characterId: 'animal-white-cat',
    seriesId: 'animals',
    detailFactIds: ['object-type:cat', 'color:white', 'facial-features:blue-eyes', 'facial-features:whiskers']
  },
  'animal-gray-husky': {
    titleByLanguage: { en: 'Husky', 'zh-CN': '灰白哈士奇' },
    descriptionByLanguage: { en: 'An original gray-and-white Husky with upright ears, a distinct face mask, a dark nose, and a fluffy curled tail.', 'zh-CN': '原创灰白哈士奇，三角立耳与清楚面罩色块，四爪坐姿和蓬松卷尾。' },
    aliases: { en: ['Gray-and-White Husky', 'Husky dog', 'gray mask', 'curled tail'], 'zh-CN': ['灰白哈士奇伙伴', '灰白面罩', '卷尾'] },
    characterId: 'animal-gray-husky',
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

// Original registration content is retained here; the catalog promotes only the exact IDs, versions, and hashes listed in the v99 approval record.
export const PREVIEW_ARTWORK_CONTENT = deepFreeze({
  'robot-ivory-capsule-face-v98-candidate': {
    titleByLanguage: { en: 'Ivory Bot', 'zh-CN': '奶白机器人' },
    descriptionByLanguage: {
      en: 'A curious little robot with an ivory shell and a warm amber glow.',
      'zh-CN': '奶白外壳、温暖的琥珀胸灯，一位充满好奇心的小伙伴。'
    },
    aliases: { en: ['Ivory Capsule Robot', 'Ivory Robot', 'white capsule robot'], 'zh-CN': ['象牙白胶囊脸机器人', '象牙白机器人', '白色胶囊机器人'] },
    seriesId: 'independent-original',
    seriesLabelByLanguage: { en: 'Original robot', 'zh-CN': '原创机器人' },
    characterId: 'original-robot-v98-candidate',
    facts: [
      { id: 'style:independent-original', labelByLanguage: { en: 'Independent original robot', 'zh-CN': '独立原创机器人' } },
      { id: 'object-type:robot', labelByLanguage: { en: 'Robot', 'zh-CN': '机器人' } },
      { id: 'shape:rounded-shell', labelByLanguage: { en: 'Rounded shell', 'zh-CN': '圆润外壳' } },
      { id: 'facial-features:white-capsule-eyes', labelByLanguage: { en: 'Paired white capsule eyes', 'zh-CN': '成对白色胶囊眼' } },
      { id: 'color:ivory', labelByLanguage: { en: 'Ivory white', 'zh-CN': '象牙白' } },
      { id: 'material:smooth-shell', labelByLanguage: { en: 'Smooth shell', 'zh-CN': '光滑外壳' } },
      { id: 'body-accessory:amber-chest-light', labelByLanguage: { en: 'Amber chest light', 'zh-CN': '琥珀色胸灯' } },
      { id: 'action:standing-one-arm-raised', labelByLanguage: { en: 'Standing with one arm raised', 'zh-CN': '站立并抬起一只手臂' } }
    ],
    detailFactIds: ['object-type:robot', 'facial-features:white-capsule-eyes', 'body-accessory:amber-chest-light', 'material:smooth-shell'],
    originalAssetId: 'asset:robot-ivory-capsule-face-v98-candidate:original',
    sourcePath: 'design/acceptance/current-20261009-v98/asset-sources/robot-ivory-capsule-face-v98-studio-candidate.png',
    sourceId: 'generated-image-v98-robot-candidate'
  },
  'animal-white-rabbit-v98-candidate': {
    titleByLanguage: { en: 'White Rabbit', 'zh-CN': '白兔' },
    descriptionByLanguage: {
      en: 'A little white rabbit with upright pink-lined ears and a round tail.',
      'zh-CN': '一只小白兔，长耳内侧透着粉色，身后有一团圆尾巴。'
    },
    aliases: { en: ['White Bunny', 'seated white rabbit'], 'zh-CN': ['白兔伙伴', '坐姿白兔'] },
    seriesId: 'animals',
    characterId: 'original-rabbit-v98-candidate',
    facts: [
      { id: 'style:animals', labelByLanguage: { en: 'Original animal', 'zh-CN': '原创动物' } },
      { id: 'object-type:rabbit', labelByLanguage: { en: 'Rabbit', 'zh-CN': '兔子' } },
      { id: 'shape:upright-long-ears', labelByLanguage: { en: 'Long upright ears', 'zh-CN': '长立耳' } },
      { id: 'facial-features:brown-eyes', labelByLanguage: { en: 'Brown eyes', 'zh-CN': '棕色眼睛' } },
      { id: 'facial-features:pink-nose', labelByLanguage: { en: 'Pink nose', 'zh-CN': '粉色鼻头' } },
      { id: 'color:white', labelByLanguage: { en: 'White', 'zh-CN': '白色' } },
      { id: 'material:short-white-fur', labelByLanguage: { en: 'Short white fur', 'zh-CN': '短白毛' } },
      { id: 'action:sitting', labelByLanguage: { en: 'Seated pose', 'zh-CN': '坐姿' } }
    ],
    detailFactIds: ['object-type:rabbit', 'shape:upright-long-ears', 'facial-features:brown-eyes', 'color:white'],
    originalAssetId: 'asset:animal-white-rabbit-v98-candidate:original',
    sourcePath: 'design/acceptance/current-20261009-v98/asset-sources/animal-white-rabbit-v98-studio-candidate.png',
    sourceId: 'generated-image-v98-rabbit-candidate'
  },
  'dots-butter-beret': {
    titleByLanguage: { en: 'Butter Beret', 'zh-CN': '奶油黄贝雷帽' },
    descriptionByLanguage: {
      en: 'A butter-yellow rounded-triangle Dots in short micro-plush, with two black oval eyes and a navy felt beret; no mouth or limbs.',
      'zh-CN': '奶油黄色短密绒圆角三角 Dots，双黑色椭圆眼，戴海军蓝毛毡贝雷帽；无嘴与肢体。'
    },
    aliases: { en: ['yellow Dots', 'beret Dots', 'butter yellow'], 'zh-CN': ['黄色 Dots', '贝雷帽', '奶油黄'] },
    seriesId: 'dots',
    characterId: 'dots-butter-beret',
    facts: [
      { id: 'style:dots', labelByLanguage: { en: 'Dots', 'zh-CN': 'Dots' } },
      { id: 'object-type:orb-character', labelByLanguage: { en: 'Plush character', 'zh-CN': '绒面角色' } },
      { id: 'shape:rounded-triangle', labelByLanguage: { en: 'Rounded triangle', 'zh-CN': '圆角三角' } },
      { id: 'facial-features:black-oval-eyes', labelByLanguage: { en: 'Two black oval eyes', 'zh-CN': '一对黑色椭圆眼' } },
      { id: 'facial-features:no-visible-mouth', labelByLanguage: { en: 'No visible mouth', 'zh-CN': '无可见嘴部' } },
      { id: 'color:butter-yellow', labelByLanguage: { en: 'Butter yellow', 'zh-CN': '奶油黄色' } },
      { id: 'material:short-plush', labelByLanguage: { en: 'Short micro-plush', 'zh-CN': '短密绒' } },
      { id: 'head-accessory:navy-beret', labelByLanguage: { en: 'Navy felt beret', 'zh-CN': '海军蓝毛毡贝雷帽' } },
      { id: 'clothing:none', labelByLanguage: { en: 'No separate clothing', 'zh-CN': '无独立衣物' } },
      { id: 'body-accessory:none', labelByLanguage: { en: 'No body accessory', 'zh-CN': '无身体配饰' } },
      { id: 'prop:none', labelByLanguage: { en: 'No prop', 'zh-CN': '无道具' } }
    ],
    detailFactIds: ['shape:rounded-triangle', 'head-accessory:navy-beret', 'color:butter-yellow', 'material:short-plush'],
    originalAssetId: 'asset:dots-butter-beret:original',
    sourcePath: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/dots-butter-beret-candidate-v2.png',
    sourceId: 'generated-image-20261010-dots-butter-beret-candidate-v2',
    sourcePromptRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/prompts/dots-butter-beret-prompts.md'
  },
  'grok-coral-drop': {
    titleByLanguage: { en: 'Coral Drop', 'zh-CN': '珊瑚水滴' },
    descriptionByLanguage: {
      en: 'A coral soft-matte Grok Bot with a rounded teardrop silhouette and paired white capsule eyes; no mouth or limbs.',
      'zh-CN': '珊瑚橙红色柔和哑光 Grok Bot，圆润水滴轮廓与成对白色胶囊眼；无嘴与肢体。'
    },
    aliases: { en: ['coral Grok', 'teardrop Grok', 'coral drop'], 'zh-CN': ['珊瑚 Grok', '水滴 Grok', '珊瑚水滴'] },
    seriesId: 'grok',
    characterId: 'grok-coral-drop',
    facts: [
      { id: 'style:grok', labelByLanguage: { en: 'Grok Bot', 'zh-CN': 'Grok Bot' } },
      { id: 'object-type:soft-geometry', labelByLanguage: { en: 'Soft geometric character', 'zh-CN': '软几何角色' } },
      { id: 'shape:teardrop', labelByLanguage: { en: 'Rounded teardrop', 'zh-CN': '圆润水滴形' } },
      { id: 'facial-features:white-capsule-eyes', labelByLanguage: { en: 'Paired white capsule eyes', 'zh-CN': '成对白色胶囊眼' } },
      { id: 'facial-features:no-visible-mouth', labelByLanguage: { en: 'No visible mouth', 'zh-CN': '无可见嘴部' } },
      { id: 'color:coral', labelByLanguage: { en: 'Coral', 'zh-CN': '珊瑚橙红' } },
      { id: 'material:soft-matte', labelByLanguage: { en: 'Soft matte surface', 'zh-CN': '柔和哑光表面' } },
      { id: 'clothing:none', labelByLanguage: { en: 'No clothing', 'zh-CN': '无衣物' } },
      { id: 'head-accessory:none', labelByLanguage: { en: 'No head accessory', 'zh-CN': '无头部配饰' } },
      { id: 'body-accessory:none', labelByLanguage: { en: 'No body accessory', 'zh-CN': '无身体配饰' } },
      { id: 'prop:none', labelByLanguage: { en: 'No prop', 'zh-CN': '无道具' } }
    ],
    detailFactIds: ['shape:teardrop', 'facial-features:white-capsule-eyes', 'color:coral', 'material:soft-matte'],
    originalAssetId: 'asset:grok-coral-drop:original',
    sourcePath: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/grok-coral-drop-candidate-v1.png',
    sourceId: 'generated-image-20261010-grok-coral-drop-candidate-v1',
    sourcePromptRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/prompts/grok-coral-drop-prompts.md'
  },
  'muse-lavender-lantern': {
    titleByLanguage: { en: 'Lantern', 'zh-CN': '灯笼' },
    descriptionByLanguage: {
      en: 'A pale-lavender short-plush Meta Muse with a continuous wrapped body, inset peach face, short rounded limbs, and an amber lantern held at the chest.',
      'zh-CN': '淡薰衣草色短绒 Meta Muse，连续包覆身体、桃色内嵌脸面与短圆肢体，胸前持琥珀色灯笼。'
    },
    aliases: { en: ['lavender Muse', 'lantern character', 'amber lantern'], 'zh-CN': ['薰衣草 Muse', '持灯笼', '琥珀灯笼'] },
    seriesId: 'meta-muse',
    characterId: 'muse-lavender-lantern',
    facts: [
      { id: 'style:meta-muse', labelByLanguage: { en: 'Meta Muse', 'zh-CN': 'Meta Muse' } },
      { id: 'object-type:hooded-mascot', labelByLanguage: { en: 'Wrapped mascot', 'zh-CN': '包覆式角色' } },
      { id: 'shape:hooded', labelByLanguage: { en: 'Continuous wrapped silhouette', 'zh-CN': '连续包覆轮廓' } },
      { id: 'facial-features:inset-peach-face', labelByLanguage: { en: 'Inset peach face', 'zh-CN': '桃色内嵌脸面' } },
      { id: 'facial-features:dark-round-eyes', labelByLanguage: { en: 'Dark round eyes', 'zh-CN': '深色圆眼' } },
      { id: 'facial-features:soft-smile', labelByLanguage: { en: 'Soft smile', 'zh-CN': '轻柔微笑' } },
      { id: 'color:lavender', labelByLanguage: { en: 'Pale lavender', 'zh-CN': '淡薰衣草色' } },
      { id: 'material:short-plush', labelByLanguage: { en: 'Short plush', 'zh-CN': '短绒' } },
      { id: 'clothing:none', labelByLanguage: { en: 'No separate clothing', 'zh-CN': '无独立衣物' } },
      { id: 'head-accessory:none', labelByLanguage: { en: 'No head accessory', 'zh-CN': '无头部配饰' } },
      { id: 'body-accessory:none', labelByLanguage: { en: 'No body accessory', 'zh-CN': '无身体配饰' } },
      { id: 'prop:amber-lantern', labelByLanguage: { en: 'Amber lantern', 'zh-CN': '琥珀色灯笼' } }
    ],
    detailFactIds: ['shape:hooded', 'facial-features:inset-peach-face', 'color:lavender', 'prop:amber-lantern'],
    originalAssetId: 'asset:muse-lavender-lantern:original',
    sourcePath: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/muse-lavender-lantern-candidate-v1.png',
    sourceId: 'generated-image-20261010-muse-lavender-lantern-candidate-v1',
    sourcePromptRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/prompts/muse-lavender-lantern-prompts.md'
  },
  'human-rust-jacket': {
    titleByLanguage: { en: 'Rust Jacket', 'zh-CN': '铁锈夹克' },
    descriptionByLanguage: {
      en: 'A complete chibi person with warm-brown skin, a dark wavy bob, a rust jacket, an ivory top, cream trousers, and brown shoes.',
      'zh-CN': '完整 Q 版人物，暖棕肤色、深棕微卷短发，穿铁锈色夹克、米白上衣和奶油色长裤，配棕色鞋。'
    },
    aliases: { en: ['rust jacket', 'brown-skinned chibi', 'wavy bob person'], 'zh-CN': ['铁锈色外套', '棕肤 Q 版人物', '微卷短发'] },
    seriesId: 'humans',
    characterId: 'human-rust-jacket',
    facts: [
      { id: 'style:humans', labelByLanguage: { en: 'Original person', 'zh-CN': '原创人物' } },
      { id: 'object-type:person', labelByLanguage: { en: 'Person', 'zh-CN': '人物' } },
      { id: 'shape:chibi-person', labelByLanguage: { en: 'Chibi person', 'zh-CN': 'Q 版人物' } },
      { id: 'facial-features:brown-eyes', labelByLanguage: { en: 'Brown eyes', 'zh-CN': '棕色眼睛' } },
      { id: 'facial-features:gentle-smile', labelByLanguage: { en: 'Gentle smile', 'zh-CN': '温和微笑' } },
      { id: 'color:skin-hair-rust', labelByLanguage: { en: 'Warm-brown skin, dark-brown hair and rust fabric', 'zh-CN': '暖棕肤色、深棕头发与铁锈色衣料' } },
      { id: 'material:soft-fabric', labelByLanguage: { en: 'Soft fabric clothing', 'zh-CN': '柔软布料衣物' } },
      { id: 'clothing:rust-jacket-ivory-top-cream-trousers', labelByLanguage: { en: 'Rust jacket, ivory top and cream trousers', 'zh-CN': '铁锈色夹克、米白上衣与奶油色长裤' } },
      { id: 'head-accessory:none', labelByLanguage: { en: 'No head accessory', 'zh-CN': '无头部配饰' } },
      { id: 'body-accessory:none', labelByLanguage: { en: 'No body accessory', 'zh-CN': '无身体配饰' } },
      { id: 'prop:none', labelByLanguage: { en: 'No prop', 'zh-CN': '无道具' } }
    ],
    detailFactIds: ['clothing:rust-jacket-ivory-top-cream-trousers', 'color:skin-hair-rust', 'facial-features:gentle-smile'],
    originalAssetId: 'asset:human-rust-jacket:original',
    sourcePath: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/human-rust-jacket-candidate-v1.png',
    sourceId: 'generated-image-20261010-human-rust-jacket-candidate-v1',
    sourcePromptRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/prompts/human-rust-jacket-candidate-v1-prompts.md'
  },
  'animal-cocoa-bear': {
    titleByLanguage: { en: 'Cocoa Bear', 'zh-CN': '可可熊' },
    descriptionByLanguage: {
      en: 'A seated cocoa-brown short-fur bear with rounded ears, a cream muzzle, and four visible paws; no clothing or accessories.',
      'zh-CN': '坐姿可可棕短毛熊，圆耳、奶油色口鼻与四只可见爪子；无衣物和配饰。'
    },
    aliases: { en: ['cocoa bear', 'brown bear', 'seated bear'], 'zh-CN': ['可可棕熊', '棕熊', '坐姿熊'] },
    seriesId: 'animals',
    characterId: 'animal-cocoa-bear',
    facts: [
      { id: 'style:animals', labelByLanguage: { en: 'Original animal', 'zh-CN': '原创动物' } },
      { id: 'object-type:bear', labelByLanguage: { en: 'Bear', 'zh-CN': '熊' } },
      { id: 'shape:rounded-ears-four-paws', labelByLanguage: { en: 'Rounded ears and four paws', 'zh-CN': '圆耳与四只爪子' } },
      { id: 'facial-features:brown-eyes-cream-muzzle', labelByLanguage: { en: 'Brown eyes and cream muzzle', 'zh-CN': '棕色眼睛与奶油色口鼻' } },
      { id: 'color:cocoa-brown', labelByLanguage: { en: 'Cocoa brown', 'zh-CN': '可可棕' } },
      { id: 'material:short-fur', labelByLanguage: { en: 'Short fur', 'zh-CN': '短毛' } },
      { id: 'clothing:none', labelByLanguage: { en: 'No clothing', 'zh-CN': '无衣物' } },
      { id: 'head-accessory:none', labelByLanguage: { en: 'No head accessory', 'zh-CN': '无头部配饰' } },
      { id: 'body-accessory:none', labelByLanguage: { en: 'No body accessory', 'zh-CN': '无身体配饰' } },
      { id: 'action:sitting', labelByLanguage: { en: 'Seated still pose', 'zh-CN': '静态坐姿' } },
      { id: 'prop:none', labelByLanguage: { en: 'No prop', 'zh-CN': '无道具' } }
    ],
    detailFactIds: ['object-type:bear', 'facial-features:brown-eyes-cream-muzzle', 'color:cocoa-brown', 'action:sitting'],
    originalAssetId: 'asset:animal-cocoa-bear:original',
    sourcePath: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/animal-cocoa-bear-candidate-v1.png',
    sourceId: 'generated-image-20261010-animal-cocoa-bear-candidate-v1',
    sourcePromptRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/prompts/animal-cocoa-bear-candidate-v1-prompts.md'
  },
  'dots-lime-frog-bow': {
    titleByLanguage: { en: 'Lime Frog', 'zh-CN': '青柠蛙形' },
    descriptionByLanguage: {
      en: 'A lime-green short-plush Dots with a rounded frog-like silhouette, two raised eyes with dark pupils and pale rims, and a black bow tie; no mouth, nose, or limbs.',
      'zh-CN': '青柠绿色短密绒 Dots，圆润蛙形轮廓、顶部两只凸眼带黑色瞳孔与浅色眼缘，并系黑色领结；无口鼻与肢体。'
    },
    aliases: { en: ['lime frog Dots', 'frog-shaped Dots', 'bow-tie Dots'], 'zh-CN': ['青柠蛙形', '青蛙 Dots', '黑领结 Dots'] },
    seriesId: 'dots',
    characterId: 'dots-lime-frog-bow',
    facts: [
      { id: 'style:dots', labelByLanguage: { en: 'Dots', 'zh-CN': 'Dots' } },
      { id: 'object-type:orb-character', labelByLanguage: { en: 'Soft plush character', 'zh-CN': '柔软绒面角色' } },
      { id: 'shape:frog-like-rounded-silhouette', labelByLanguage: { en: 'Rounded frog-like silhouette', 'zh-CN': '圆润蛙形轮廓' } },
      { id: 'facial-features:raised-eyes-dark-pupils-pale-rims', labelByLanguage: { en: 'Two raised eyes with dark pupils and pale rims', 'zh-CN': '顶部两只凸眼，黑色瞳孔与浅色眼缘' } },
      { id: 'facial-features:no-visible-mouth', labelByLanguage: { en: 'No visible mouth', 'zh-CN': '无可见嘴部' } },
      { id: 'facial-features:no-visible-nose', labelByLanguage: { en: 'No visible nose', 'zh-CN': '无可见鼻部' } },
      { id: 'color:lime-green', labelByLanguage: { en: 'Lime green', 'zh-CN': '青柠绿' } },
      { id: 'material:short-plush', labelByLanguage: { en: 'Short dense plush', 'zh-CN': '短密绒' } },
      { id: 'clothing:none', labelByLanguage: { en: 'No clothing', 'zh-CN': '无衣物' } },
      { id: 'head-accessory:none', labelByLanguage: { en: 'No head accessory', 'zh-CN': '无头部配饰' } },
      { id: 'body-accessory:black-bow-tie', labelByLanguage: { en: 'Black bow tie', 'zh-CN': '黑色领结' } },
      { id: 'prop:none', labelByLanguage: { en: 'No prop', 'zh-CN': '无道具' } }
    ],
    detailFactIds: ['shape:frog-like-rounded-silhouette', 'facial-features:raised-eyes-dark-pupils-pale-rims', 'body-accessory:black-bow-tie', 'color:lime-green', 'material:short-plush'],
    originalAssetId: 'asset:dots-lime-frog-bow:original',
    sourcePath: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/generated/dots-lime-frog-bow-candidate-v1.png',
    sourceId: 'generated-image-20261010-dots-lime-frog-bow-candidate-v1',
    sourcePromptRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/prompts/dots-lime-frog-bow-prompts.md'
  },
  'dots-pink-heart-shades': {
    titleByLanguage: { en: 'Pink Heart', 'zh-CN': '粉色爱心' },
    descriptionByLanguage: {
      en: 'A pink short-plush Dots with a clear heart silhouette and round opaque black sunglasses; no mouth, nose, limbs, clothing, or other accessories.',
      'zh-CN': '粉色短密绒 Dots，清晰爱心轮廓，佩戴圆形不透光黑色墨镜；无口鼻、肢体、衣物或其他配饰。'
    },
    aliases: { en: ['pink heart Dots', 'heart-shaped Dots', 'sunglasses Dots'], 'zh-CN': ['粉色爱心 Dots', '爱心 Dots', '墨镜 Dots'] },
    seriesId: 'dots',
    characterId: 'dots-pink-heart-shades',
    facts: [
      { id: 'style:dots', labelByLanguage: { en: 'Dots', 'zh-CN': 'Dots' } },
      { id: 'object-type:orb-character', labelByLanguage: { en: 'Soft plush character', 'zh-CN': '柔软绒面角色' } },
      { id: 'shape:heart', labelByLanguage: { en: 'Heart silhouette', 'zh-CN': '爱心轮廓' } },
      { id: 'facial-features:no-visible-mouth', labelByLanguage: { en: 'No visible mouth', 'zh-CN': '无可见嘴部' } },
      { id: 'facial-features:no-visible-nose', labelByLanguage: { en: 'No visible nose', 'zh-CN': '无可见鼻部' } },
      { id: 'color:pink', labelByLanguage: { en: 'Pink', 'zh-CN': '粉色' } },
      { id: 'material:short-plush', labelByLanguage: { en: 'Short dense plush', 'zh-CN': '短密绒' } },
      { id: 'clothing:none', labelByLanguage: { en: 'No clothing', 'zh-CN': '无衣物' } },
      { id: 'head-accessory:round-black-sunglasses', labelByLanguage: { en: 'Round opaque black sunglasses', 'zh-CN': '圆形不透光黑色墨镜' } },
      { id: 'body-accessory:none', labelByLanguage: { en: 'No body accessory', 'zh-CN': '无身体配饰' } },
      { id: 'prop:none', labelByLanguage: { en: 'No prop', 'zh-CN': '无道具' } }
    ],
    detailFactIds: ['shape:heart', 'head-accessory:round-black-sunglasses', 'color:pink', 'material:short-plush'],
    originalAssetId: 'asset:dots-pink-heart-shades:original',
    sourcePath: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/generated/dots-pink-heart-shades-candidate-v1.png',
    sourceId: 'generated-image-20261010-dots-pink-heart-shades-candidate-v1',
    sourcePromptRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/prompts/dots-pink-heart-shades-prompts.md'
  }
});

export const PREVIEW_ORIGINAL_ASSETS = deepFreeze([
  {
    id: 'asset:robot-ivory-capsule-face-v98-candidate:original',
    artworkId: 'robot-ivory-capsule-face-v98-candidate',
    version: 'v1',
    path: './assets/companions/v98/robot-ivory-capsule-face-v98-studio-candidate.png',
    sourcePath: 'dist/assets/companions/v98/robot-ivory-capsule-face-v98-studio-candidate.png',
    sha256: '9f4eb820cd9cb1d24deb64097279ff29693bc7c683fb3f775292983f7b1bc6c0',
    mime: 'image/png', byteSize: 1292849, width: 1215, height: 1295,
    alpha: { hasAlpha: false, hasTransparency: false },
    resourceKind: 'opaque-character-still',
    sourceRef: 'design/acceptance/current-20261009-v98/asset-sources/robot-ivory-capsule-face-v98-studio-candidate.png'
  },
  {
    id: 'asset:animal-white-rabbit-v98-candidate:original',
    artworkId: 'animal-white-rabbit-v98-candidate',
    version: 'v1',
    path: './assets/companions/v98/animal-white-rabbit-v98-studio-candidate.png',
    sourcePath: 'dist/assets/companions/v98/animal-white-rabbit-v98-studio-candidate.png',
    sha256: '571920fb262079b49097b9f7f468264b65eacfc6dc6ffc0bfaffd451cc7c9963',
    mime: 'image/png', byteSize: 1443408, width: 1133, height: 1388,
    alpha: { hasAlpha: false, hasTransparency: false },
    resourceKind: 'opaque-character-still',
    sourceRef: 'design/acceptance/current-20261009-v98/asset-sources/animal-white-rabbit-v98-studio-candidate.png'
  },
  {
    id: 'asset:dots-butter-beret:original', artworkId: 'dots-butter-beret', version: 'v2',
    path: './assets/companions/v99/dots-butter-beret-candidate-v2.png', sourcePath: 'dist/assets/companions/v99/dots-butter-beret-candidate-v2.png',
    sha256: '284093696b5e244a8ebd6f5ef433c50059b81bdaf7709ba1d60bd68321ccae00', mime: 'image/png', byteSize: 1541746, width: 1254, height: 1254,
    alpha: { hasAlpha: true, hasTransparency: true, min: 0, max: 255, transparentPixels: 816738, opaquePixels: 438, partialAlphaPixels: 755340 },
    resourceKind: 'transparent-character-still', sourceRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/dots-butter-beret-candidate-v2.png'
  },
  {
    id: 'asset:grok-coral-drop:original', artworkId: 'grok-coral-drop', version: 'v1',
    path: './assets/companions/v99/grok-coral-drop-candidate-v1.png', sourcePath: 'dist/assets/companions/v99/grok-coral-drop-candidate-v1.png',
    sha256: '443d0143546c74822387f898471030621c011d2b549bf48ee60857dd1e3d1af8', mime: 'image/png', byteSize: 871631, width: 1254, height: 1254,
    alpha: { hasAlpha: true, hasTransparency: true, min: 0, max: 255, transparentPixels: 904562, opaquePixels: 976, partialAlphaPixels: 666978 },
    resourceKind: 'transparent-character-still', sourceRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/grok-coral-drop-candidate-v1.png'
  },
  {
    id: 'asset:muse-lavender-lantern:original', artworkId: 'muse-lavender-lantern', version: 'v1',
    path: './assets/companions/v99/muse-lavender-lantern-candidate-v1.png', sourcePath: 'dist/assets/companions/v99/muse-lavender-lantern-candidate-v1.png',
    sha256: 'ecf97bcb22678cd4461da27c0ec2a7a4721137081c1b42e25cef115666137574', mime: 'image/png', byteSize: 1014161, width: 1254, height: 1254,
    alpha: { hasAlpha: true, hasTransparency: true, min: 0, max: 255, transparentPixels: 1033310, opaquePixels: 101, partialAlphaPixels: 539105 },
    resourceKind: 'transparent-character-still', sourceRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/muse-lavender-lantern-candidate-v1.png'
  },
  {
    id: 'asset:human-rust-jacket:original', artworkId: 'human-rust-jacket', version: 'v1',
    path: './assets/companions/v99/human-rust-jacket-candidate-v1.png', sourcePath: 'dist/assets/companions/v99/human-rust-jacket-candidate-v1.png',
    sha256: 'f53049ad40e0781453ba90c8bcc88b6b30c460fd2b27c9302463df4076208cf4', mime: 'image/png', byteSize: 944230, width: 1254, height: 1254,
    alpha: { hasAlpha: true, hasTransparency: true, min: 0, max: 255, transparentPixels: 1133821, opaquePixels: 1423, partialAlphaPixels: 437272 },
    resourceKind: 'transparent-character-still', sourceRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/human-rust-jacket-candidate-v1.png'
  },
  {
    id: 'asset:animal-cocoa-bear:original', artworkId: 'animal-cocoa-bear', version: 'v1',
    path: './assets/companions/v99/animal-cocoa-bear-candidate-v1.png', sourcePath: 'dist/assets/companions/v99/animal-cocoa-bear-candidate-v1.png',
    sha256: '3eb35d93bccd37542bbbca3aa0216b5102bf25183168aeca9392b959061d5f57', mime: 'image/png', byteSize: 956169, width: 1254, height: 1254,
    alpha: { hasAlpha: true, hasTransparency: true, min: 0, max: 255, transparentPixels: 1136537, opaquePixels: 5, partialAlphaPixels: 435974 },
    resourceKind: 'transparent-character-still', sourceRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/gallery-expansion-20261010/generated/animal-cocoa-bear-candidate-v1.png'
  },
  {
    id: 'asset:dots-lime-frog-bow:original', artworkId: 'dots-lime-frog-bow', version: 'v1',
    path: './assets/companions/v99/dots-lime-frog-bow-candidate-v1.png', sourcePath: 'dist/assets/companions/v99/dots-lime-frog-bow-candidate-v1.png',
    sha256: 'bc8aa7fa0fe4ea5e4ba2bf36f74703ed33d80036fdfd1cb7027571ed365c2d0f', mime: 'image/png', byteSize: 1087340, width: 1254, height: 1254,
    alpha: { hasAlpha: true, hasTransparency: true, min: 0, max: 255, transparentPixels: 1061852, opaquePixels: 164, partialAlphaPixels: 510500 },
    resourceKind: 'transparent-character-still', sourceRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/generated/dots-lime-frog-bow-candidate-v1.png'
  },
  {
    id: 'asset:dots-pink-heart-shades:original', artworkId: 'dots-pink-heart-shades', version: 'v1',
    path: './assets/companions/v99/dots-pink-heart-shades-candidate-v1.png', sourcePath: 'dist/assets/companions/v99/dots-pink-heart-shades-candidate-v1.png',
    sha256: 'df3dcfc4468f6fe24f202395dd98957c4d439adb8c80b1357f4a91f9b07a1384', mime: 'image/png', byteSize: 905104, width: 1254, height: 1254,
    alpha: { hasAlpha: true, hasTransparency: true, min: 0, max: 255, transparentPixels: 1136516, opaquePixels: 7, partialAlphaPixels: 435993 },
    resourceKind: 'transparent-character-still', sourceRef: 'openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/generated/dots-pink-heart-shades-candidate-v1.png'
  }
]);

export const PREVIEW_PROMPT_ROWS = deepFreeze([
  [
    'robot-ivory-capsule-face-v98-candidate',
    '原创象牙白胶囊机器人，外壳圆润光滑，深色内嵌脸面中有一对白色胶囊眼，配短圆手足与一盏琥珀色胸灯。保持独立原创机器人身份，不要画成 Grok Bot。单体完整居中，置于浅冷灰色摄影棚背景。',
    'An original ivory-white capsule robot with a smooth rounded shell, a dark inset face with paired white capsule eyes, short rounded limbs, and one amber chest light. Keep it an independent original character, not Grok Bot. Show the complete single character centered on a pale cool-gray studio background.'
  ],
  [
    'animal-white-rabbit-v98-candidate',
    '原创坐姿白兔，双长立耳内侧为粉色，棕色眼睛、粉色鼻头、短白毛与圆尾清楚可见。展示完整兔子，置于浅冷灰色摄影棚背景。',
    'An original seated white rabbit with two long upright ears with pink inner ears, brown eyes, a pink nose, short white fur, and a rounded tail. Show the complete rabbit on a pale cool-gray studio background.'
  ],
  [
    'dots-butter-beret',
    '创作一个奶油黄色短密绒 Dots，圆角三角轮廓，正面一对黑色椭圆眼，头顶戴海军蓝毛毡贝雷帽。保持无嘴、无肢体，不增加其它配饰；完整单体居中，背景透明。',
    'Create one butter-yellow short micro-plush Dots with a rounded-triangle silhouette, two black oval eyes facing forward, and a navy felt beret. Keep it mouthless and limbless, add no other accessories, and show the complete single character centered on a transparent background.'
  ],
  [
    'grok-coral-drop',
    '创作一个珊瑚橙红色柔和哑光 Grok Bot，完整圆润水滴轮廓，配成对白色胶囊眼。不要添加嘴、肢体、屏幕脸或配饰；单体完整居中，背景透明。',
    'Create one coral soft-matte Grok Bot with a complete rounded teardrop silhouette and paired white capsule eyes. Add no mouth, limbs, screen face, or accessories. Center the complete single character on a transparent background.'
  ],
  [
    'muse-lavender-lantern',
    '创作一个淡薰衣草色短绒 Meta Muse，保留连续包覆身体与桃色内嵌脸面，带短圆肢体；双手在胸前持一盏琥珀色灯笼。呈现完整静态单体，不表现为动画，背景透明。',
    'Create one pale-lavender short-plush Meta Muse with a continuous wrapped body, an inset peach face, and short rounded limbs. Its hands hold an amber lantern at the chest. Show one complete still character, not an animation, on a transparent background.'
  ],
  [
    'human-rust-jacket',
    '创作一个完整原创 Q 版人物，暖棕肤色、深棕微卷短发，穿铁锈色夹克、米白上衣、奶油色长裤和棕色鞋。保持完整人物、自然静态站姿和透明背景。',
    'Create one complete original chibi person with warm-brown skin and a dark-brown wavy bob, wearing a rust jacket, ivory top, cream trousers, and brown shoes. Show the full person in a natural still standing pose on a transparent background.'
  ],
  [
    'animal-cocoa-bear',
    '创作一只可可棕短毛熊，圆耳、棕色眼睛、奶油色口鼻清楚可见，以四只爪子自然坐姿呈现。不要添加衣物、配饰或道具；展示完整单体，背景透明。',
    'Create one cocoa-brown short-fur bear with rounded ears, brown eyes, and a clear cream muzzle, seated naturally with all four paws visible. Add no clothing, accessories, or props. Show the complete single animal on a transparent background.'
  ],
  [
    'dots-lime-frog-bow',
    '创作一个青柠绿色短密绒 Dots，圆润的蛙形轮廓，身体顶部有两只凸起的眼睛，黑色瞳孔带浅色眼缘，胸前系黑色领结。保持无口、无鼻、无手臂、手、腿或脚，也不增加衣物和道具。呈现完整静态单体，背景透明。',
    'Create one lime-green short-plush Dots with a rounded frog-like silhouette and two raised eyes on top, each with a dark pupil and pale rim. Add a black bow tie at the front. Keep it without a mouth, nose, arms, hands, legs, or feet, and add no clothing or props. Show the complete still character on a transparent background.'
  ],
  [
    'dots-pink-heart-shades',
    '创作一个粉色短密绒 Dots，完整清晰的爱心轮廓，佩戴圆形不透光黑色墨镜。保持无口、无鼻、无手臂、手、腿或脚，不增加衣物、其他配饰或道具。呈现完整静态单体，背景透明。',
    'Create one pink short-plush Dots with a complete, clear heart silhouette, wearing round opaque black sunglasses. Keep it without a mouth, nose, arms, hands, legs, or feet, and add no clothing, other accessories, or props. Show the complete still character on a transparent background.'
  ]
]);

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
  Object.freeze({"id":"dots-gallery-hero","version":"v99-ensemble-2","purpose":"ui-hero-illustration","path":"./assets/banners/dots-gallery-hero-ensemble-v99.webp","mime":"image/webp","width":1536,"height":1024,"byteSize":126138,"sha256":"aaa7c0fe9e83e579fa0647f6994d58d84ca80831cb5b5c63cdc48a5537818091","publicationStatus":"published","artApproval":{"status":"approved","record":"design/acceptance/current-20261010-v99/release-20261011/approval.json","approvalId":"dots-current-v99-artwork-ui-template-approval-20261011","assetSha256":"aaa7c0fe9e83e579fa0647f6994d58d84ca80831cb5b5c63cdc48a5537818091"},"role":"Decorative hero ensemble only; not a downloadable Artwork or Template."}),
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
