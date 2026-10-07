const deepFreeze = value => {
  if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
  for (const child of Object.values(value)) deepFreeze(child);
  return Object.freeze(value);
};

export const CATALOG_REVISION = 'artwork-catalog-20261007-v90';

const SOURCE_SNAPSHOT = 'openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/source-snapshot.json';
const ART_APPROVAL_RECORD = 'openspec/changes/archive/2026-10-06-rebuild-character-system/acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json';
const V83_SOURCE_ID = '30c3dfa7bb709a2eda4dd4ebfdf4df0390a4e5f5291998defcb178cc7cc9d451';

const assetRows = [
  ['asset:candidate-dots-20261005:original', 'v2', './assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png', 1720054, '2f680b276f76c2a1c6faeb7d496f16a41327f1186bca27d0acf5197997309455', 1254, 1254, [742591, 478, 829447], 'candidate-dots-20261005', 'artwork'],
  ['asset:candidate-grok-20261005:original', 'v2', './assets/characters/grok-bot-purple-orb-candidate-v2.png', 971168, 'e4730f2957d64b8b2b7eb49c09a21f7a9c1ea352870bd2bf4c0649c7eeec0874', 1254, 1254, [780111, 1168, 791237], 'candidate-grok-20261005', 'artwork'],
  ['asset:candidate-meta-muse-20261005:original', 'v1', './assets/characters/meta-muse-cream-hooded-candidate-v1.png', 1003955, '12ec7cee17f4948d5dd4258b3ad0fe5b44a38e9506b13f5ff39aa3856b3b3ea6', 1235, 1274, [985428, 21, 587941], 'candidate-meta-muse-20261005', 'artwork'],
  ['asset:candidate-humans-20261005:original', 'v1', './assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png', 1151483, '56423f860f47bbad212875aeecdda40e6c86382b6d15a61b5c1a2ffd723fc521', 1254, 1254, [1069183, 514, 502819], 'candidate-humans-20261005', 'artwork'],
  ['asset:candidate-animals-20261005:original', 'v1', './assets/characters/animals-original-shiba-candidate-v1.png', 1413426, 'f6e731ad99f85a20681588e14e2f93279707897da7ff50769f6f29bb62893c62', 1254, 1254, [832059, 48, 740409], 'candidate-animals-20261005', 'artwork'],
  ['asset:dots-rose-glasses:original', 'v1', './assets/looks/dots-rose-glasses.png', 1860436, 'a95261160aa0a6223bab0a3b38d080a4fa5b1b6315593bb6631d820732578d75', 1254, 1254, [731940, 26, 840550], 'dots-rose-glasses', 'artwork'],
  ['asset:dots-lilac-bucket:original', 'v1', './assets/looks/dots-lilac-bucket.png', 1605008, '50ddea9f24e82c02b14cc5374d4b3ae08b00954aa4bcdcbb6aa24dc2a8b3d615', 1254, 1254, [808076, 66, 764374], 'dots-lilac-bucket', 'artwork'],
  ['asset:grok-green-cloud:original', 'v1', './assets/looks/grok-green-cloud.png', 790009, 'd186c5b0837b15c6177b476729b463a7542fdc559d606c6d5818bbad274bad96', 1254, 1254, [949952, 956, 621608], 'grok-green-cloud', 'artwork'],
  ['asset:grok-teal-square:original', 'v1', './assets/looks/grok-teal-square.png', 828844, '81b63d5a809c381f7617261ee4c186031acdc984bac7844d4820c732d44b5f6d', 1254, 1254, [816693, 264, 755559], 'grok-teal-square', 'artwork'],
  ['asset:muse-rose-flowers:original', 'v1', './assets/looks/muse-rose-flowers.png', 1185166, 'd0865bc0a0df4e0e9451c702dac8db0a4bf7e6aa0820657edffa239d24b367be', 1254, 1254, [966879, 193, 605444], 'muse-rose-flowers', 'artwork'],
  ['asset:muse-sage-reading:original', 'v1', './assets/looks/muse-sage-reading.png', 1142481, '82f85f8abce3d425381c54c3d54b116a4e9ab6af2f782792377bbd6ed79f0f3a', 1254, 1254, [1009482, 32, 563002], 'muse-sage-reading', 'artwork'],
  ['asset:human-bun-yellow:original', 'v1', './assets/looks/human-bun-yellow.png', 1086214, 'f7a5f87daa25e1171f8c42db6ed8b668b695bf6f40cbed0aa31d5f8ca7052ccc', 1254, 1254, [1087604, 328, 484584], 'human-bun-yellow', 'artwork'],
  ['asset:human-blond-glasses:original', 'v1', './assets/looks/human-blond-glasses.png', 1058375, '84d20915564eac63f5e33834e221bd73ef7530c8ea331c730503e9de0dafc0f6', 1254, 1254, [1099076, 410, 473030], 'human-blond-glasses', 'artwork'],
  ['asset:animal-white-cat:original', 'v1', './assets/looks/animal-white-cat.png', 1382027, '6b6e0cc65b7edef88b0b19a948444a261a4050ccdcba942fd5941bc2aa2f499a', 1254, 1254, [790208, 16, 782292], 'animal-white-cat', 'artwork'],
  ['asset:animal-gray-husky:original', 'v1', './assets/looks/animal-gray-husky.png', 1623665, '21fa19552ec9c93282985aecf80a1c89d38d15064cf27c3a8bafc8cacdb315ca', 1254, 1254, [790161, 24, 782331], 'animal-gray-husky', 'artwork'],
  ['asset:pose-dots-wink:v1', 'v1', null, 1136161, '4fbeb4da84da597e7bcc9533012ca7659e1a12a6e20bd479f098e4da7c805ac1', 1254, 1254, [987842, 240, 584434], 'candidate-dots-20261005', 'pose-candidate', 'historical-runtime/retired-assets/dist/assets/poses/dots-wink-v1.png'],
  ['asset:pose-grok-wink:v1', 'v1', null, 732939, '0e1543e89fe3e7d21ee6830e7a9435ad1d8cfca59ab1a16fec686c4a48211e86', 1254, 1254, [929630, 993, 641893], 'candidate-grok-20261005', 'pose-candidate', 'historical-runtime/retired-assets/dist/assets/poses/grok-wink-v1.png'],
  ['asset:pose-human-wave:v1', 'v1', null, 786370, 'a3dde33c5ab00f21a735dcb0373e584e954c615d1108332ba40d1924b8e8b308', 1254, 1254, [1230684, 475, 341357], 'candidate-humans-20261005', 'pose-candidate', 'historical-runtime/retired-assets/dist/assets/poses/human-wave-v1.png'],
  ['asset:pose-muse-wave:v1', 'v1', null, 1073265, 'bd4a5fb9c81fabcb751c6943dbeea52515c92a4f6b2f80335582e485487cb6e1', 1254, 1254, [933354, 136, 639026], 'candidate-meta-muse-20261005', 'pose-candidate', 'historical-runtime/retired-assets/dist/assets/poses/muse-wave-v1.png'],
  ['asset:pose-shiba-wave:v1', 'v1', null, 697164, '8b3d1417cf4af554b6cbe8f3a0589dd24d0f07db98832b704c5b9a965548651c', 1254, 1254, [1219688, 37, 352791], 'candidate-animals-20261005', 'pose-candidate', 'historical-runtime/retired-assets/dist/assets/poses/shiba-wave-v1.png']
];

// Cache 90 alpha scan, threshold >= 1. These are source-image pixel bounds;
// the original PNGs remain byte-identical and this metadata never crops exports.
const visibleBoundsByAsset = {
  'asset:candidate-dots-20261005:original': { x: 35, y: 21, width: 1187, height: 1169, alphaThreshold: 1 },
  'asset:candidate-grok-20261005:original': { x: 0, y: 81, width: 1192, height: 1173, alphaThreshold: 1 },
  'asset:candidate-meta-muse-20261005:original': { x: 33, y: 20, width: 1188, height: 1182, alphaThreshold: 1 },
  'asset:candidate-humans-20261005:original': { x: 33, y: 21, width: 1193, height: 1217, alphaThreshold: 1 },
  'asset:candidate-animals-20261005:original': { x: 0, y: 19, width: 1242, height: 1235, alphaThreshold: 1 },
  'asset:dots-rose-glasses:original': { x: 0, y: 57, width: 1214, height: 1197, alphaThreshold: 1 },
  'asset:dots-lilac-bucket:original': { x: 79, y: 17, width: 1095, height: 1163, alphaThreshold: 1 },
  'asset:grok-green-cloud:original': { x: 49, y: 0, width: 1129, height: 1254, alphaThreshold: 1 },
  'asset:grok-teal-square:original': { x: 0, y: 9, width: 1214, height: 1245, alphaThreshold: 1 },
  'asset:muse-rose-flowers:original': { x: 0, y: 20, width: 1216, height: 1164, alphaThreshold: 1 },
  'asset:muse-sage-reading:original': { x: 33, y: 20, width: 1193, height: 1210, alphaThreshold: 1 },
  'asset:human-bun-yellow:original': { x: 0, y: 1, width: 1228, height: 1253, alphaThreshold: 1 },
  'asset:human-blond-glasses:original': { x: 19, y: 21, width: 1195, height: 1233, alphaThreshold: 1 },
  'asset:animal-white-cat:original': { x: 0, y: 23, width: 1238, height: 1231, alphaThreshold: 1 },
  'asset:animal-gray-husky:original': { x: 0, y: 23, width: 1230, height: 1231, alphaThreshold: 1 }
};

const makeApproval = (artworkId, asset) => asset.resourceKind === 'transparent-character-still'
  ? {
      status: 'approved',
      record: ART_APPROVAL_RECORD,
      sourceSnapshot: SOURCE_SNAPSHOT,
      sourceId: V83_SOURCE_ID,
      siteVersion: 35,
      cacheRevision: '83',
      scope: 'scope.registeredLooks',
      artworkId,
      assetSha256: asset.sha256,
      note: '该Artwork ID列于v83 registeredLooks；当前资源hash与source-snapshot.json精确匹配。'
    }
  : {
      status: 'pending',
      record: ART_APPROVAL_RECORD,
      sourceSnapshot: SOURCE_SNAPSHOT,
      sourceId: V83_SOURCE_ID,
      siteVersion: 35,
      cacheRevision: '83',
      scope: 'pose asset not individually listed in scope.registeredLooks',
      artworkId,
      assetSha256: asset.sha256,
      note: '姿态资源已存在且source hash匹配，但v83逐项批准名单未列该pose asset ID；保留待核，不自动批准或否决。'
    };

export const ASSETS = deepFreeze(assetRows.map(([id, version, path, byteSize, sha256, width, height, alphaPixels, artworkId, kind, archivedSourcePath]) => {
  const resourceKind = kind === 'artwork' ? 'transparent-character-still' : 'still-variant-candidate';
  const [transparentPixels, opaquePixels, partialAlphaPixels] = alphaPixels;
  const sourcePath = archivedSourcePath || `dist/${path.slice(2)}`;
  const snapshotPath = archivedSourcePath ? archivedSourcePath.replace('historical-runtime/retired-assets/', '') : `dist/${path.slice(2)}`;
  const asset = {
    id,
    version,
    path: kind === 'artwork' ? path : null,
    sourcePath,
    publicationStatus: kind === 'artwork' ? 'published' : 'pending-individual-approval',
    sha256,
    mime: 'image/png',
    byteSize,
    width,
    height,
    alpha: {
      hasAlpha: true, hasTransparency: true, min: 0, max: 255, transparentPixels, opaquePixels, partialAlphaPixels,
      ...(visibleBoundsByAsset[id] ? { visibleBounds: visibleBoundsByAsset[id] } : {})
    },
    resourceKind,
    resourceStatus: 'verified-source',
    runtimeVerification: 'not-browser-checked',
    sourceRef: kind === 'artwork' ? 'historical-runtime/dist/studio-creation-assets.js:16-17' : 'historical-runtime/dist/studio-creation-assets.js:117-121',
    sourceSnapshotRef: `${SOURCE_SNAPSHOT}#${snapshotPath}`,
    sourceSnapshotMatch: true,
    artApproval: makeApproval(artworkId, { resourceKind, sha256 }),
    targetValidation: { status: 'not-target-tested', targetProfileIds: [] },
    ownerArtworkId: artworkId,
    candidateOnly: kind !== 'artwork'
  };
  return asset;
}));

const assetById = new Map(ASSETS.map(asset => [asset.id, asset]));
const assetByPath = new Map(ASSETS.filter(asset => asset.path).map(asset => [asset.path, asset]));

const promptRows = [
  ['candidate-dots-20261005', '蓝色短绒圆球形 Dots，正面有一对黑色椭圆眼睛，佩戴黑色头带和紫色耳罩的包耳式耳机；不加嘴、手脚或其它配饰。保持单体居中、透明背景。', 'A blue short-pile plush orb-shaped Dots character, front-facing with two black oval eyes and over-ear headphones with a black headband and violet ear cups. Add no mouth, limbs, or other accessories. Keep the single character centered on a transparent background.'],
  ['candidate-grok-20261005', '紫色柔和圆球形 Grok Bot，右上区域有两枚成对、平行倾斜的白色胶囊眼；无嘴、无肢体、无配饰。保持圆润软几何外形和透明背景。', 'A purple soft geometric orb-shaped Grok Bot with a pair of parallel, slanted white capsule eyes toward the upper-right area. No mouth, limbs, or accessories. Preserve the rounded soft geometry on a transparent background.'],
  ['candidate-meta-muse-20261005', '奶油色包覆式 Meta Muse，暖桃色内嵌脸面，深色圆眼和轻柔微笑，短圆手臂与双脚自然下垂。保持完整包覆轮廓、正面静态站姿和透明背景。', 'A cream hooded Meta Muse with a warm peach inset face, dark round eyes, a gentle smile, short rounded arms, and small feet. Preserve the continuous wrapped silhouette in a front-facing still standing pose on a transparent background.'],
  ['candidate-humans-20261005', '原创栗发 Q 版人物，细致分层的栗色头发、青绿色针织上衣、米白短裤和浅色运动鞋；双手在身前自然交握，表情温和。保持完整人物、正面站姿和透明背景。', 'An original chibi person with layered chestnut hair, a teal knit sweater, ivory shorts, and light sneakers. Rest both hands together naturally in front with a gentle expression. Show the complete person in a front-facing standing pose on a transparent background.'],
  ['candidate-animals-20261005', '原创暖橙柴犬，立起的三角耳、清楚的茶白口鼻与胸腹色块、四爪坐姿和卷起的尾巴；表情温和。保持物种结构和透明背景。', 'An original warm-orange Shiba Inu with upright triangular ears, a distinct cream muzzle and chest, a seated four-paw pose, and a curled tail. Keep a gentle expression and clear canine features on a transparent background.'],
  ['dots-rose-glasses', '莓粉色短绒圆球形 Dots，佩戴透明粉色圆框眼镜，眼镜后的黑色椭圆眼清晰可见；无嘴、无肢体和其它配饰。保持正面单体与透明背景。', 'A berry-pink short-pile plush orb-shaped Dots wearing clear rose-pink round glasses, with black oval eyes visible behind the lenses. No mouth, limbs, or other accessories. Keep the front-facing single character on a transparent background.'],
  ['dots-lilac-bucket', '浅薰衣草紫短绒圆球形 Dots，戴一顶黄色软布渔夫帽，黑色椭圆眼睛外露；无嘴、无肢体和其它配饰。保持正面单体与透明背景。', 'A light-lilac short-pile plush orb-shaped Dots wearing a yellow soft-fabric bucket hat, with black oval eyes visible below the brim. No mouth, limbs, or other accessories. Keep the front-facing single character on a transparent background.'],
  ['grok-green-cloud', '青绿色软云形 Grok Bot，表面平滑柔和，带一对平行倾斜的白色胶囊眼；无嘴、无肢体、无配饰。保持软几何轮廓与透明背景。', 'A vivid green soft-cloud Grok Bot with a smooth, gentle surface and a pair of parallel slanted white capsule eyes. No mouth, limbs, or accessories. Preserve the soft geometric cloud outline on a transparent background.'],
  ['grok-teal-square', '蓝绿色圆角方形 Grok Bot，带一对平行倾斜的白色胶囊眼；无嘴、无肢体、无配饰。保持柔和几何外形和透明背景。', 'A teal rounded-square Grok Bot with a pair of parallel slanted white capsule eyes. No mouth, limbs, or accessories. Preserve the soft geometric silhouette on a transparent background.'],
  ['muse-rose-flowers', '玫粉色绒面包覆式 Meta Muse，暖桃色内嵌脸面、深色圆眼和微笑；短圆手臂在胸前抱着一束白色雏菊和绿色花茎。不要把静态持花姿势描述为动画，背景透明。', 'A rose-pink plush hooded Meta Muse with a warm peach inset face, dark round eyes, and a smile. Its short rounded arms hold white daisies with green stems at the chest. Treat this as a still pose, not animation, on a transparent background.'],
  ['muse-sage-reading', '浅鼠尾草绿绒面包覆式 Meta Muse，暖桃色内嵌脸面、深色圆眼和微笑；双臂抱着一本竖直的合拢绿色书。书本是闭合的，不描述为正在阅读；背景透明。', 'A pale-sage plush hooded Meta Muse with a warm peach inset face, dark round eyes, and a smile. Both arms hold a closed green book upright. Keep the book closed and do not describe the character as reading; use a transparent background.'],
  ['human-bun-yellow', '原创 Q 版人物，栗色高丸子头和自然垂落的发丝，穿暖黄色连帽衫、米白短裤与黄白运动鞋；微笑并抬起一只手挥手问好。保持完整人物和透明背景。', 'An original chibi person with a high chestnut bun and loose face-framing strands, wearing a warm-yellow hoodie, ivory shorts, and yellow-and-white sneakers. Smile and raise one hand in a greeting wave. Show the complete person on a transparent background.'],
  ['human-blond-glasses', '原创 Q 版金发人物，短而蓬松的浅金发，佩戴透明圆框眼镜；穿浅蓝衬衣、米白针织开衫和浅蓝长裤，双手在身前自然交握并微笑。保持正面完整人物和透明背景。', 'An original chibi person with short fluffy blond hair and clear round glasses, wearing a light-blue shirt, an ivory knit cardigan, and light-blue trousers. Rest both hands together naturally in front and smile. Show the complete person on a transparent background.'],
  ['animal-white-cat', '原创奶油白猫，灰色三角耳与灰色蓬松尾巴，保留蓝色眼睛、粉色鼻头、清楚口鼻和细胡须；以四爪自然坐姿呈现，不佩戴饰物。背景透明。', 'An original cream-white cat with gray triangular ears and a fluffy gray tail. Keep blue eyes, a pink nose, a clear feline muzzle, and fine whiskers. Sit naturally on four paws with no accessories, on a transparent background.'],
  ['animal-gray-husky', '原创灰白哈士奇，三角立耳、灰白脸部面罩、深色鼻头和蓬松卷尾清楚可辨；以四爪自然坐姿呈现，不佩戴饰物。背景透明。', 'An original gray-and-white Husky with triangular upright ears, a distinct gray-and-white facial mask, a dark nose, and a fluffy curled tail. Sit naturally on four paws with no accessories, on a transparent background.']
];

export const PROMPTS = deepFreeze(promptRows.flatMap(([artworkId, zh, en]) => [
  { id: `prompt:${artworkId}:zh-image`, artworkId, language: 'zh', target: 'image', text: zh, source: 'maintainer-authored-from-verified-artwork-facts', revision: '1' },
  { id: `prompt:${artworkId}:en-image`, artworkId, language: 'en', target: 'image', text: en, source: 'maintainer-authored-from-verified-artwork-facts', revision: '1' }
]));

const promptById = new Map(PROMPTS.map(prompt => [prompt.id, prompt]));

const fact = (id, label, state = 'known') => ({ id, label, value: label, state });
const visualFacts = {
  'candidate-dots-20261005': [fact('style:dots', 'Dots'), fact('object-type:orb-character', '圆球角色'), fact('shape:sphere', '圆球形'), fact('accessory:headphones', '包耳式耳机'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:blue', '蓝色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'candidate-grok-20261005': [fact('style:grok', 'Grok Bot'), fact('object-type:orb-character', '圆球角色'), fact('shape:sphere', '圆球形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:purple', '紫色'), fact('material:soft-matte', '柔和哑光质感'), fact('usage:transparent-character', '透明角色图')],
  'candidate-meta-muse-20261005': [fact('style:meta-muse', 'Meta Muse'), fact('object-type:hooded-mascot', '包覆式角色'), fact('shape:hooded', '包覆式轮廓'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:standing', '正面站姿'), fact('expression:smile', '轻柔微笑'), fact('background:transparent', '透明背景'), fact('color:cream', '奶油色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'candidate-humans-20261005': [fact('style:humans', '原创人物'), fact('object-type:person', '人物'), fact('shape:chibi-person', '精致 Q 版人物'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:standing-hands-together', '站立、双手交握'), fact('expression:gentle-smile', '温和微笑'), fact('background:transparent', '透明背景'), fact('color:teal', '青绿色'), fact('material:knit-fabric', '针织衣料'), fact('usage:transparent-character', '透明角色图')],
  'candidate-animals-20261005': [fact('style:animals', '原创动物'), fact('object-type:dog', '犬类'), fact('shape:shiba', '柴犬外形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:sitting', '坐姿'), fact('expression:gentle-smile', '温和微笑'), fact('background:transparent', '透明背景'), fact('color:orange', '暖橙色'), fact('material:short-fur', '短绒毛质感'), fact('usage:transparent-character', '透明角色图')],
  'dots-rose-glasses': [fact('style:dots', 'Dots'), fact('object-type:orb-character', '圆球角色'), fact('shape:sphere', '圆球形'), fact('accessory:round-glasses', '透明圆框眼镜'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:pink', '莓粉色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'dots-lilac-bucket': [fact('style:dots', 'Dots'), fact('object-type:orb-character', '圆球角色'), fact('shape:sphere', '圆球形'), fact('accessory:bucket-hat', '黄色渔夫帽'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:lilac', '浅紫色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'grok-green-cloud': [fact('style:grok', 'Grok Bot'), fact('object-type:soft-geometry', '柔和几何角色'), fact('shape:cloud', '云形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:green', '青绿色'), fact('material:soft-matte', '柔和哑光质感'), fact('usage:transparent-character', '透明角色图')],
  'grok-teal-square': [fact('style:grok', 'Grok Bot'), fact('object-type:soft-geometry', '柔和几何角色'), fact('shape:rounded-square', '圆角方形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:front-static', '正面静态造型'), fact('expression:neutral', '平静'), fact('background:transparent', '透明背景'), fact('color:teal', '蓝绿色'), fact('material:soft-matte', '柔和哑光质感'), fact('usage:transparent-character', '透明角色图')],
  'muse-rose-flowers': [fact('style:meta-muse', 'Meta Muse'), fact('object-type:hooded-mascot', '包覆式角色'), fact('shape:hooded', '包覆式轮廓'), fact('accessory:none', '无配饰', 'none'), fact('prop:flowers', '白色雏菊花束'), fact('action:holding-flowers', '双手抱花'), fact('expression:smile', '微笑'), fact('background:transparent', '透明背景'), fact('color:pink', '玫粉色'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'muse-sage-reading': [fact('style:meta-muse', 'Meta Muse'), fact('object-type:hooded-mascot', '包覆式角色'), fact('shape:hooded', '包覆式轮廓'), fact('accessory:none', '无配饰', 'none'), fact('prop:closed-book', '合拢的绿色书'), fact('action:holding-book', '双手抱书'), fact('expression:smile', '微笑'), fact('background:transparent', '透明背景'), fact('color:sage', '浅鼠尾草绿'), fact('material:short-plush', '短绒质感'), fact('usage:transparent-character', '透明角色图')],
  'human-bun-yellow': [fact('style:humans', '原创人物'), fact('object-type:person', '人物'), fact('shape:chibi-person', '精致 Q 版人物'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:waving', '挥手问好'), fact('expression:gentle-smile', '温和微笑'), fact('background:transparent', '透明背景'), fact('color:yellow', '暖黄色'), fact('material:soft-fabric', '柔软衣料'), fact('usage:transparent-character', '透明角色图')],
  'human-blond-glasses': [fact('style:humans', '原创人物'), fact('object-type:person', '人物'), fact('shape:chibi-person', '精致 Q 版人物'), fact('accessory:round-glasses', '透明圆框眼镜'), fact('prop:none', '无道具', 'none'), fact('action:standing-hands-together', '站立、双手交握'), fact('expression:gentle-smile', '温和微笑'), fact('background:transparent', '透明背景'), fact('color:blond', '浅金色'), fact('material:knit-fabric', '针织衣料'), fact('usage:transparent-character', '透明角色图')],
  'animal-white-cat': [fact('style:animals', '原创动物'), fact('object-type:cat', '猫'), fact('shape:cat', '猫形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:sitting', '坐姿'), fact('expression:gentle-smile', '温和表情'), fact('background:transparent', '透明背景'), fact('color:white', '奶油白'), fact('material:short-fur', '短绒毛质感'), fact('usage:transparent-character', '透明角色图')],
  'animal-gray-husky': [fact('style:animals', '原创动物'), fact('object-type:dog', '犬类'), fact('shape:husky', '哈士奇外形'), fact('accessory:none', '无配饰', 'none'), fact('prop:none', '无道具', 'none'), fact('action:sitting', '坐姿'), fact('expression:gentle-smile', '温和表情'), fact('background:transparent', '透明背景'), fact('color:gray', '灰白色'), fact('material:short-fur', '短绒毛质感'), fact('usage:transparent-character', '透明角色图')]
};

// These are visible facts in the registered PNGs, grouped into the eight
// feature categories used by the six reveal cards. Existing search dimensions
// (color/material/action/expression/background/etc.) remain available.
const categoryFacts = {
  'candidate-dots-20261005': [
    fact('facial-features:black-oval-eyes', '一对黑色椭圆眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:over-ear-headphones', '包耳式耳机'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'candidate-grok-20261005': [
    fact('facial-features:white-capsule-eyes', '一对倾斜白色胶囊眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'candidate-meta-muse-20261005': [
    fact('facial-features:inset-peach-face', '内嵌暖桃色脸面'), fact('facial-features:dark-round-eyes', '深色圆眼'), fact('facial-features:soft-smile', '轻柔微笑'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'candidate-humans-20261005': [
    fact('facial-features:large-brown-eyes', '大而清晰的棕色眼睛'), fact('facial-features:small-nose', '小巧鼻子'), fact('facial-features:gentle-smile', '温和微笑'),
    fact('clothing:teal-knit-top', '青绿色针织上衣'), fact('clothing:ivory-shorts', '米白短裤'), fact('clothing:light-sneakers', '浅色运动鞋'),
    fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'candidate-animals-20261005': [
    fact('facial-features:brown-eyes', '棕色眼睛'), fact('facial-features:black-nose', '黑色鼻头'), fact('facial-features:cream-muzzle', '茶白口鼻'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'dots-rose-glasses': [
    fact('facial-features:black-oval-eyes', '一对黑色椭圆眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:round-glasses', '透明圆框眼镜'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'dots-lilac-bucket': [
    fact('facial-features:black-oval-eyes', '一对黑色椭圆眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:yellow-bucket-hat', '黄色软布渔夫帽'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'grok-green-cloud': [
    fact('facial-features:white-capsule-eyes', '一对倾斜白色胶囊眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'grok-teal-square': [
    fact('facial-features:white-capsule-eyes', '一对倾斜白色胶囊眼'), fact('facial-features:no-visible-mouth', '没有可见嘴部'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'muse-rose-flowers': [
    fact('facial-features:inset-peach-face', '内嵌暖桃色脸面'), fact('facial-features:dark-round-eyes', '深色圆眼'), fact('facial-features:soft-smile', '轻柔微笑'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'muse-sage-reading': [
    fact('facial-features:inset-peach-face', '内嵌暖桃色脸面'), fact('facial-features:dark-round-eyes', '深色圆眼'), fact('facial-features:soft-smile', '轻柔微笑'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'human-bun-yellow': [
    fact('facial-features:large-brown-eyes', '大而清晰的棕色眼睛'), fact('facial-features:small-nose', '小巧鼻子'), fact('facial-features:gentle-smile', '温和微笑'),
    fact('clothing:yellow-hoodie', '暖黄色连帽衫'), fact('clothing:ivory-shorts', '米白短裤'), fact('clothing:yellow-white-sneakers', '黄白运动鞋'),
    fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'human-blond-glasses': [
    fact('facial-features:large-brown-eyes', '大而清晰的棕色眼睛'), fact('facial-features:small-nose', '小巧鼻子'), fact('facial-features:gentle-smile', '温和微笑'),
    fact('clothing:light-blue-shirt', '浅蓝衬衣'), fact('clothing:ivory-knit-cardigan', '米白针织开衫'), fact('clothing:light-blue-trousers', '浅蓝长裤'), fact('clothing:ivory-sneakers', '米白运动鞋'),
    fact('head-accessory:round-glasses', '透明圆框眼镜'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'animal-white-cat': [
    fact('facial-features:blue-eyes', '蓝色眼睛'), fact('facial-features:pink-nose', '粉色鼻头'), fact('facial-features:feline-muzzle', '清楚的猫科口鼻'), fact('facial-features:whiskers', '细胡须'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ],
  'animal-gray-husky': [
    fact('facial-features:brown-eyes', '棕色眼睛'), fact('facial-features:dark-nose', '深色鼻头'), fact('facial-features:husky-mask', '灰白面部面罩'),
    fact('clothing:none', '无独立衣物', 'none'), fact('head-accessory:none', '无头部配饰', 'none'), fact('body-accessory:none', '无身体配饰', 'none')
  ]
};
for (const [artworkId, facts] of Object.entries(categoryFacts)) visualFacts[artworkId].push(...facts);

const approvalIds = new Set([
  'candidate-dots-20261005', 'candidate-grok-20261005', 'candidate-meta-muse-20261005', 'candidate-humans-20261005', 'candidate-animals-20261005',
  'dots-rose-glasses', 'dots-lilac-bucket', 'grok-green-cloud', 'grok-teal-square', 'muse-rose-flowers', 'muse-sage-reading',
  'human-bun-yellow', 'human-blond-glasses', 'animal-white-cat', 'animal-gray-husky'
]);

const titles = {
  'candidate-dots-20261005': ['蓝色耳机 Dots', '蓝色短绒圆球角色，佩戴包耳式耳机，黑色椭圆眼睛，无嘴与肢体。', 'dots'],
  'candidate-grok-20261005': ['紫色 Grok Bot', '紫色软几何圆球，配对的斜置白色胶囊眼；不带屏幕脸、嘴或肢体。', 'grok'],
  'candidate-meta-muse-20261005': ['奶油 Meta Muse', '奶油包覆式轮廓、内嵌暖桃色脸面、短圆肢体与柔和微笑。', 'meta-muse'],
  'candidate-humans-20261005': ['栗发青绿人物', '原创栗发 Q 版人物，青绿色针织上衣与米白短裤，双手在身前自然交握。', 'humans'],
  'candidate-animals-20261005': ['暖橙柴犬', '原创暖橙柴犬，茶白口鼻与胸腹，四爪坐姿和卷尾。', 'animals'],
  'dots-rose-glasses': ['莓粉圆框 Dots', '莓粉短绒圆球 Dots，佩戴透明粉色圆框眼镜，无嘴与肢体。', 'dots'],
  'dots-lilac-bucket': ['浅紫渔夫帽 Dots', '浅紫短绒圆球 Dots，戴黄色软布渔夫帽，无嘴与肢体。', 'dots'],
  'grok-green-cloud': ['青绿云朵 Grok', '青绿色软云形 Grok Bot，配对斜置白色胶囊眼，无嘴与肢体。', 'grok'],
  'grok-teal-square': ['蓝绿方形 Grok', '蓝绿色圆角方形 Grok Bot，配对斜置白色胶囊眼，无嘴与肢体。', 'grok'],
  'muse-rose-flowers': ['玫粉花束 Meta Muse', '玫粉包覆式 Meta Muse 双手抱着白色雏菊花束；这是静态完整作品。', 'meta-muse'],
  'muse-sage-reading': ['鼠尾草捧书 Meta Muse', '浅鼠尾草绿包覆式 Meta Muse 双手抱着一本竖直合拢的绿色书，不表示正在阅读。', 'meta-muse'],
  'human-bun-yellow': ['黄衣丸子头女孩', '原创丸子头 Q 版人物，穿暖黄连帽衫并抬手挥别。', 'humans'],
  'human-blond-glasses': ['金发圆框伙伴', '原创短金发 Q 版人物，戴透明圆框眼镜，穿米白针织开衫与浅蓝衣裤。', 'humans'],
  'animal-white-cat': ['奶油白猫伙伴', '原创奶油白猫，灰耳灰尾、蓝眼、粉鼻、清晰口鼻与胡须，四爪坐姿。', 'animals'],
  'animal-gray-husky': ['灰白哈士奇伙伴', '原创灰白哈士奇，三角立耳与清楚面罩色块，四爪坐姿和蓬松卷尾。', 'animals']
};

const artworkAsset = new Map(ASSETS.filter(asset => asset.resourceKind === 'transparent-character-still').map(asset => [asset.ownerArtworkId, asset]));
export const ARTWORKS = deepFreeze([...approvalIds].map(id => {
  const [title, description, styleIdentity] = titles[id];
  const asset = artworkAsset.get(id);
  const facts = visualFacts[id];
  const groupedFacts = new Map();
  for (const item of facts) {
    const dimension = item.id.split(':', 1)[0];
    const group = groupedFacts.get(dimension) || { dimension, facts: [] };
    group.facts.push(item);
    groupedFacts.set(dimension, group);
  }
  const features = Object.fromEntries([...groupedFacts].map(([dimension, group]) => {
    const ids = group.facts.map(item => item.id);
    const states = new Set(group.facts.map(item => item.state));
    const state = states.has('unknown') ? 'unknown'
      : states.has('known') ? 'known'
        : states.has('none') ? 'none' : 'not-applicable';
    const labelsById = Object.fromEntries(group.facts.map(item => [item.id, item.label]));
    const label = group.facts.map(item => item.label).join(' · ');
    return [dimension, { id: ids[0], ids, labelsById, label, value: label, state }];
  }));
  return {
    id,
    title,
    description,
    source: {
      id: 'imagegen-20261005',
      kind: 'generated-original-artwork',
      registrationRef: 'historical-runtime/dist/studio-creation-assets.js:16-17',
      sourceSnapshot: SOURCE_SNAPSHOT,
      sourceId: V83_SOURCE_ID
    },
    status: 'published',
    publicationStatus: 'published',
    styleIdentity,
    tagIds: facts.map(item => item.id),
    featureIds: facts.map(item => item.id),
    features,
    featureReview: { status: 'verified-visible-facts', method: 'current PNG visually inspected against registered source/hash' },
    assetRefs: { original: asset.id },
    promptRefs: {
      zhImage: `prompt:${id}:zh-image`,
      enImage: `prompt:${id}:en-image`
    },
    variantGroupId: null,
    resourceKind: 'transparent-character-still',
    exportFormats: ['image/png'],
    artApproval: asset.artApproval,
    targetValidation: { status: 'not-target-tested', profileIds: ['static-character-download'] },
    sourceSnapshotMatch: asset.sourceSnapshotMatch
  };
}));

const artworkById = new Map(ARTWORKS.map(artwork => [artwork.id, artwork]));

export const STYLE_IDENTITIES = deepFreeze([
  { id: 'dots', label: 'Dots', labelEn: 'Dots', description: '按已批准的简洁成对眼与圆润主体展示；不自动增加肢体、嘴或屏幕脸。', descriptionEn: 'Preserve the approved rounded body and paired simple eyes. Do not add limbs, a mouth, or a screen face unless the reference visibly includes them.' },
  { id: 'grok', label: 'Grok Bot', labelEn: 'Grok Bot', description: '保留柔和几何、成对胶囊眼与克制表现，点列/液滴方向按实际作品登记。', descriptionEn: 'Keep the soft geometric form, paired capsule eyes, and restrained expression. Follow the specific reference for dot or droplet orientation.' },
  { id: 'meta-muse', label: 'Meta Muse', labelEn: 'Meta Muse', description: '保留包覆式轮廓和内嵌脸面，不替换为普通人物或熊玩偶。', descriptionEn: 'Keep the wrapped silhouette and inset face. Do not turn it into a human character or a generic bear plush.' },
  { id: 'humans', label: '原创人物', labelEn: 'original chibi people', description: '原创精致 Q 版人物，头发、皮肤、衣物与实际姿态逐件描述。', descriptionEn: 'Create original, polished chibi people with carefully rendered hair, skin, clothing, and the requested pose.' },
  { id: 'animals', label: '原创动物', labelEn: 'original animals', description: '原创物种形象，耳、口鼻、毛色、爪和尾部按作品实际画面描述。', descriptionEn: 'Create original species-specific characters with clear ears, muzzles, coat colors, paws, and tails.' }
]);

export const TARGET_PROFILES = deepFreeze([
  {
    id: 'static-character-download', platform: 'Dot Icon Studio', client: 'web browser download', version: 'catalog-v1',
    format: 'PNG original bytes', dimensions: 'per asset manifest', alpha: 'registered PNG alpha channel with transparent pixels',
    frameLayout: 'single still image', states: ['static artwork'], productionMethod: 'directly download registered source image',
    sourceUrl: null, queriedAt: '2026-10-07T02:05:02+08:00', sourceType: 'local asset inventory', verificationStatus: 'source-verified; original bytes validated before each download',
    note: '普通静态图下载能力，不表示可安装 Dot 或 Pet。'
  },
  {
    id: 'chatgpt-work-web-custom-pet', platform: 'ChatGPT Work', client: 'supported web chats', version: 'current official docs checked 2026-10-07',
    format: 'transparent PNG or WebP', dimensions: '1536 × 1872 px; maximum 20 MiB', alpha: 'transparent required',
    frameLayout: null, states: null, productionMethod: 'upload a custom sprite sheet through Work settings',
    sourceUrl: 'https://learn.chatgpt.com/docs/pets', queriedAt: '2026-10-07T02:14:26+08:00', sourceType: 'official documentation', verificationStatus: 'documented-only; no Pet package or target upload in this change',
    note: 'Official Web page does not specify a frame grid/layout. Its dimensions must not be combined with local plugin frame contracts.'
  },
  {
    id: 'chatgpt-dot-desktop', platform: 'ChatGPT Dot', client: 'ChatGPT desktop app and desktop web', version: 'current official docs checked 2026-10-07',
    format: null, dimensions: null, alpha: null, frameLayout: null, states: null,
    productionMethod: 'choose an available character or Pet; arbitrary PNG import format is not specified',
    sourceUrl: 'https://help.openai.com/en/articles/20001530-getting-started-with-your-dot', queriedAt: '2026-10-07T02:14:26+08:00', sourceType: 'official documentation', verificationStatus: 'documented selection flow; custom static PNG import not verified',
    note: 'Do not label a normal transparent character PNG as a directly installable Dot.'
  },
  {
    id: 'chatgpt-dot-mobile', platform: 'ChatGPT Dot', client: 'ChatGPT mobile app / mobile web', version: 'current official docs checked 2026-10-07',
    format: null, dimensions: null, alpha: null, frameLayout: null, states: null,
    productionMethod: 'official help says mobile app can chat with a Dot when mobile access is available; Dot creation is not currently available on mobile and mobile web does not support Dot',
    sourceUrl: 'https://help.openai.com/en/articles/20001530-getting-started-with-your-dot', queriedAt: '2026-10-07T02:14:26+08:00', sourceType: 'official documentation', verificationStatus: 'documented limitation; no target asset format specified',
    note: 'Desktop file assumptions do not transfer to mobile.'
  },
  {
    id: 'codex-local-pet-v1-contract', platform: 'Local work-pets tooling', client: 'local creation/install workflow', version: 'plugin 0.1.6 contract v1',
    format: 'transparent PNG or WebP', dimensions: '1536 × 1872 px; maximum 20 MiB', alpha: 'transparent required',
    frameLayout: '8 × 9 cells; 192 × 208 px per cell; 57 required frames and 15 empty cells',
    states: ['idle', 'running-right', 'running-left', 'waving', 'jumping', 'failed', 'waiting', 'running', 'review'],
    productionMethod: 'local plugin contract; full sprite resource and target install validation required',
    sourceUrl: '/Users/liuzhihang/.codex/plugins/cache/openai-curated-remote/work-pets/0.1.6/references/sprite-sheet-contract.md', queriedAt: '2026-10-07T02:05:02+08:00', sourceType: 'local plugin contract, not official web layout', verificationStatus: 'contract-only; package not made or installed'
  },
  {
    id: 'codex-local-pet-v2-contract', platform: 'Local work-pets tooling', client: 'local creation/install workflow', version: 'plugin 0.1.6 contract v2',
    format: 'transparent PNG or WebP', dimensions: '1536 × 2288 px; maximum 20 MiB', alpha: 'transparent required',
    frameLayout: '8 × 11 cells; 192 × 208 px per cell; 73 required frames and 15 empty cells',
    states: ['idle', 'running-right', 'running-left', 'waving', 'jumping', 'failed', 'waiting', 'running', 'review', '16 look directions'],
    productionMethod: 'local plugin contract; full sprite resource and target install validation required',
    sourceUrl: '/Users/liuzhihang/.codex/plugins/cache/openai-curated-remote/work-pets/0.1.6/references/sprite-sheet-contract.md', queriedAt: '2026-10-07T02:05:02+08:00', sourceType: 'local plugin contract, not official web layout', verificationStatus: 'contract-only; package not made or installed'
  }
]);

const profileById = new Map(TARGET_PROFILES.map(profile => [profile.id, profile]));

export function getArtwork(id) {
  return typeof id === 'string' ? artworkById.get(id) ?? null : null;
}

function assetIdFromRef(value) {
  if (typeof value === 'string') return value.startsWith('asset:') ? value : `asset:${value}`;
  if (value && typeof value === 'object' && typeof value.id === 'string') return value.id.startsWith('asset:') ? value.id : `asset:${value.id}`;
  return null;
}

export function getAsset(idOrRef) {
  if (typeof idOrRef === 'string') return assetById.get(assetIdFromRef(idOrRef)) ?? null;
  if (!idOrRef || typeof idOrRef !== 'object') return null;
  const registered = assetById.get(assetIdFromRef(idOrRef));
  if (!registered) return null;
  const bindingFields = ['version', 'path', 'sha256', 'mime', 'byteSize', 'width', 'height'];
  if (bindingFields.some(field => idOrRef[field] !== registered[field])) return null;
  return registered;
}

function promptForArtwork(artwork, language = 'zh', target = 'image') {
  if (!artwork || target !== 'image') return null;
  const requested = language === 'en' ? 'enImage' : 'zhImage';
  const alternate = requested === 'enImage' ? 'zhImage' : 'enImage';
  const ids = artwork.promptRefs || {};
  const prompt = promptById.get(ids[requested]) ?? promptById.get(ids[alternate]) ?? null;
  return prompt && prompt.artworkId === artwork.id && prompt.target === target ? prompt : null;
}

export function isEligible(artwork) {
  if (!artwork || typeof artwork !== 'object') return false;
  if ((artwork.publicationStatus ?? artwork.status) !== 'published') return false;
  if (artwork.featureReview?.status !== 'verified-visible-facts') return false;
  if (artwork.sourceSnapshotMatch !== true || !artwork.source?.id || !artwork.source?.kind || !artwork.source?.sourceSnapshot) return false;
  const asset = getAsset(artwork.assetRefs?.original);
  if (!asset || asset.candidateOnly) return false;
  if (!['verified-source', 'verified-in-browser'].includes(asset.resourceStatus) || asset.resourceVerified === false || artwork.resourceVerified === false) return false;
  if (!asset.sourceSnapshotMatch) return false;
  if (artwork.artApproval?.status !== 'approved' || asset.artApproval?.status !== 'approved') return false;
  if (artwork.artApproval.assetSha256 !== asset.sha256 || asset.artApproval.assetSha256 !== asset.sha256) return false;
  if (!artwork.promptRefs?.zhImage || !promptForArtwork(artwork, 'zh', 'image')) return false;
  if (!Array.isArray(artwork.featureIds) || !artwork.featureIds.length) return false;
  if (!Array.isArray(artwork.tagIds) || artwork.featureIds.some(id => !artwork.tagIds.includes(id))) return false;
  if (!artwork.features || typeof artwork.features !== 'object' || Array.isArray(artwork.features)) return false;
  for (const [dimension, feature] of Object.entries(artwork.features)) {
    if (!feature || !['known', 'none', 'not-applicable'].includes(feature.state)) return false;
    if (feature.state === 'not-applicable') continue;
    if (typeof feature.id !== 'string' || !feature.id.startsWith(`${dimension}:`)) return false;
    const ids = Array.isArray(feature.ids) ? feature.ids : [feature.id];
    if (!ids.length || ids.some(id => typeof id !== 'string' || !id.startsWith(`${dimension}:`) || !artwork.featureIds.includes(id) || !artwork.tagIds.includes(id))) return false;
  }
  if (!Object.keys(artwork.features).length) return false;
  if (!artwork.artApproval.record || !artwork.artApproval.sourceSnapshot || !artwork.artApproval.sourceId) return false;
  if (artwork.artApproval.assetSha256 !== asset.sha256 || asset.artApproval?.assetSha256 !== asset.sha256) return false;
  return true;
}

export function isTransparentCharacter(artwork) {
  const asset = getAsset(artwork?.assetRefs?.original);
  return isEligible(artwork) && artwork.resourceKind === 'transparent-character-still'
    && asset?.resourceKind === 'transparent-character-still' && asset.alpha?.hasAlpha === true && asset.alpha?.hasTransparency === true;
}

export function getVariants(id) {
  const artwork = getArtwork(id);
  if (!artwork?.variantGroupId) return [];
  return ARTWORKS.filter(candidate => candidate.id !== artwork.id && candidate.variantGroupId === artwork.variantGroupId && isEligible(candidate));
}

export function createSnapshot(id) {
  const artwork = getArtwork(id);
  if (!isEligible(artwork)) return null;
  const asset = getAsset(artwork.assetRefs.original);
  const prompt = promptForArtwork(artwork, 'zh', 'image');
  return deepFreeze({ artworkId: artwork.id, artwork, asset, prompt, catalogRevision: CATALOG_REVISION });
}

export function getTargetProfile(id) {
  return profileById.get(id) ?? null;
}

export const CATALOG_INVENTORY = deepFreeze({
  approvedArtworkCount: ARTWORKS.length,
  candidatePoseAssetCount: ASSETS.filter(asset => asset.candidateOnly).length,
  approvalRecord: ART_APPROVAL_RECORD,
  sourceSnapshot: SOURCE_SNAPSHOT,
  sourceId: V83_SOURCE_ID,
  queriedAt: '2026-10-07T02:05:02+08:00'
});
