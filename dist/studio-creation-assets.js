import {createCharacter} from './studio-model.js';

const historicalArtwork = (artwork) => Object.freeze({
  ...artwork,
  provenance: Object.freeze({ ...artwork.provenance })
});

export const CREATION_ARTWORKS = Object.freeze([
  ...[
    ['dots','dots-blue-plush-orb-headphones-candidate-v2.png','蓝色 Dots · 耳机基准候选','短绒蓝球、克制黑眼与贴合耳机；同一基准的裸形/耳机配方可在组合模式切换。'],
    ['grok','grok-bot-lilac-arch-candidate-v1.png','淡紫 Grok Bot · 基准候选','独立软几何拱形、哑光软胶与白色胶囊眼；不是机械机器人。'],
    ['meta-muse','meta-muse-cream-hooded-candidate-v1.png','奶油 Meta Muse · 基准候选','连续奶油头罩、暖色脸窗和短肢体；身份依据用户提供的 Meta Muse 参考。'],
    ['humans','humans-chestnut-chibi-teal-knit-candidate-v1.png','栗发青绿 · 人物基准候选','新设计的栗发人物与青绿织物服装；没有使用动漫截图像素或完整动漫角色复刻。'],
    ['animals','animals-original-shiba-candidate-v1.png','暖橙柴犬 · 动物基准候选','新设计的柴犬，保持物种耳、口鼻、四肢和卷尾；没有使用动漫截图像素。']
  ].map(([family,file,name,description])=>historicalArtwork({id:`candidate-${family}-20261005`,family,name,src:`./assets/characters/${file}`,width:family==='grok'?1325:family==='meta-muse'?1235:1254,height:family==='grok'?1187:family==='meta-muse'?1274:1254,kind:'baseline-candidate',status:'unreviewed',description,provenance:{origin:'imagegen-20261005',official:false,detail:'按已确认 R01 风格生成的独立基准候选；未通过用户真实网页美术验收。Dots/Grok/Meta 保留许可参考身份，人物/动物重新原创。'}})),
  historicalArtwork({
    id: 'historical-dots-plush-headphones-v2',
    family: 'dots',
    name: '蓝色绒面耳机角色（历史作品）',
    src: './assets/atelier/dot-plush-headphones-v2.png',
    width: 1254,
    height: 1254,
    kind: 'historical-example',
    status: 'unreviewed',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '原站历史作品；作者与生成来源未记录'
    },
    description: '旧版蓝色绒面圆角色与耳机的固定整图示例；不代表官方 Dots 身份，不是当前基准，也不是可编辑组合结果。'
  }),
  historicalArtwork({
    id: 'historical-grok-matte-work-v2',
    family: 'grok',
    name: '浅色眼镜工作角色（历史作品）',
    src: './assets/atelier/grok-matte-work-v2.png',
    width: 1254,
    height: 1254,
    kind: 'historical-example',
    status: 'unreviewed',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '原站历史作品；作者与生成来源未记录'
    },
    description: '旧版浅色软形角色、眼镜与电脑的固定整图示例；不代表官方 Grok Bot 身份，不是当前基准，也不是可编辑组合结果。'
  }),
  historicalArtwork({
    id: 'historical-human-reading-v2',
    family: 'humans',
    name: '卷发阅读人物（历史作品）',
    src: './assets/atelier/muse-fabric-reading-v2.png',
    width: 1254,
    height: 1254,
    kind: 'historical-example',
    status: 'unreviewed',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '原站历史作品；作者与生成来源未记录'
    },
    description: '旧版卷发针织人物与阅读造型的固定整图示例；归入人物历史作品，不是 Meta Muse，不是当前人物基准，也不是可编辑组合结果。'
  }),
  historicalArtwork({
    id: 'historical-animal-shiba-scarf-v2',
    family: 'animals',
    name: '围巾柴犬（历史作品）',
    src: './assets/atelier/pet-shiba-scarf-v2.png',
    width: 1254,
    height: 1254,
    kind: 'historical-example',
    status: 'unreviewed',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '原站历史作品；作者与生成来源未记录'
    },
    description: '旧版戴蓝色围巾的柴犬固定整图示例；不是当前动物基准，也不是可编辑组合结果。'
  })
]);

export const COMPOSITION_PACKS = Object.freeze([
  Object.freeze({
    id:'dots-front-headphones-candidate-20261005',family:'dots',kind:'layered-2d',view:'front',status:'candidate',revision:1,
    provenance:{origin:'imagegen-20261005',detail:'同一 Dots 正面基准的裸形/贴合耳机完整造型层互斥替换，背景实际合成；不支持任意外观或动作生成。'},
    outputNotes:Object.freeze({
      zh:'【工作台输出说明】当前设置可由已支持的正面分层素材合成为 PNG。这是本地 2D 静态合成，不是自动生成图片，也不支持自由旋转三维视角。此组合属于基准候选，尚待真实网页美术验收；本说明不表示验收通过。需要参考自己的图片时，请在 ChatGPT 另行附加。',
      en:'[Studio output] The supported front-view layers can be composited into a PNG from the current settings. This is a static local 2D composition, not a generated image or a freely rotatable 3D model. This composition is a baseline candidate pending real webpage art review; this note does not indicate acceptance. Attach your own reference image in ChatGPT when needed.'
    }),
    actionPromptOverrides:Object.freeze({
      listen:Object.freeze({
        zh:'正面静态佩戴贴合头部的耳机，头部保持正向且不倾斜；以安静聆听的表情表达状态。不添加播放动画、音符、声波或悬浮符号；耳罩与头带贴合自然、不穿模，不叠加帽子。',
        en:'Wear headphones fitted naturally to the head in a static front-facing pose. Keep the head facing forward without tilting; convey listening with a calm expression. Add no playback animation, music notes, sound waves or floating symbols. Avoid intersecting earcups or headbands and do not add a hat.'
      })
    }),
    baseConfig:createCharacter('dots'),width:1254,height:1254,
    editablePaths:['accessories.head','action','background','colors.background'],
    layers:[
      {id:'bare',src:'./assets/characters/dots-blue-plush-orb-front-candidate-v2.png',z:0},
      {id:'headphones',src:'./assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png',z:0}
    ],
    variants:[
      {id:'bare-idle',values:{'accessories.head':'none',action:'idle'},layerIds:['bare']},
      {id:'headphones-idle',values:{'accessories.head':'headphones',action:'idle'},layerIds:['headphones']},
      {id:'headphones-listen',values:{'accessories.head':'headphones',action:'listen'},layerIds:['headphones']}
    ]
  })
]);

export function getCreationArtwork(id) {
  return CREATION_ARTWORKS.find((artwork) => artwork.id === id) ?? null;
}

export function getFamilyArtwork(family) {
  return CREATION_ARTWORKS.find((artwork) => artwork.family === family) ?? null;
}

export function getCompositionPack(family) {
  return COMPOSITION_PACKS.find((pack) => pack.family === family) ?? null;
}
