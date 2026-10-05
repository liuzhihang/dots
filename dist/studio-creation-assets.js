import {createCharacter,createLookCharacter} from './studio-model.js?v=62';
import {BUILT_IN_LOOKS,LOOK_PRESETS} from './studio-looks.js?v=62';

const historicalArtwork = (artwork) => Object.freeze({
  ...artwork,
  provenance: Object.freeze({ ...artwork.provenance })
});

export const CREATION_ARTWORKS = Object.freeze([
  ...[
    ['dots','dots-blue-plush-orb-headphones-candidate-v2.png','蓝色 Dots · 耳机基准候选','短绒蓝球、克制黑眼与贴合耳机；同一基准的裸形/耳机配方可在组合模式切换。'],
    ['grok','grok-bot-purple-orb-candidate-v2.png','紫色 Grok Bot · 基准候选','按新提供的 Grok 身份图修正为紫色圆形与同向斜白胶囊眼；哑光软胶裸形，眼镜电脑不是默认身份。'],
    ['meta-muse','meta-muse-cream-hooded-candidate-v1.png','奶油 Meta Muse · 基准候选','连续奶油头罩、暖色脸窗和短肢体；身份依据用户提供的 Meta Muse 参考。'],
    ['humans','humans-chestnut-chibi-teal-knit-candidate-v1.png','栗发青绿 · 人物基准候选','新设计的栗发人物与青绿织物服装；没有使用动漫截图像素或完整动漫角色复刻。'],
    ['animals','animals-original-shiba-candidate-v1.png','暖橙柴犬 · 动物基准候选','新设计的柴犬，保持物种耳、口鼻、四肢和卷尾；没有使用动漫截图像素。']
  ].map(([family,file,name,description])=>historicalArtwork({id:`candidate-${family}-20261005`,family,name,src:`./assets/characters/${file}`,width:family==='meta-muse'?1235:1254,height:family==='meta-muse'?1274:1254,kind:'baseline-candidate',status:'unreviewed',description,provenance:{origin:'imagegen-20261005',official:false,detail:'按已确认 R01 风格及用户身份图生成的独立基准候选；未通过用户真实网页美术验收。Dots/Grok/Meta 保留许可参考身份，人物/动物重新原创。'}})),
  ...LOOK_PRESETS.map(look=>historicalArtwork({id:look.artworkId,family:look.family,name:look.name,src:`./assets/looks/${look.artworkId}.png`,width:1254,height:1254,kind:'look-template',status:'unreviewed',description:look.description,provenance:{origin:'imagegen-20261005',official:false,detail:'内置完整搭配图候选；姿态和配饰为图中固定造型，尚待真实网页美术验收。'}})),
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

// Keep the withdrawn legacy ID importable without making its former image an
// active artwork or exposing a downloadable source URL.
export const RETIRED_ARTWORKS = Object.freeze([
  historicalArtwork({
    id: 'historical-human-reading-v2',
    family: 'humans',
    name: '卷发阅读人物（已撤下）',
    kind: 'retired-tombstone',
    status: 'retired',
    retirementReason: '这张历史人物形象已撤下',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '用户明确否决的历史人物形象；仅保留 ID 兼容记录，不再提供原图'
    },
    description: '该历史人物形象已撤下；项目角色配置和 artworkId 保留，不会替换为其他人物图片。'
  }),
  historicalArtwork({
    id: 'historical-grok-matte-work-v2',
    family: 'grok',
    name: '浅色眼镜工作角色（已撤下）',
    kind: 'retired-tombstone',
    status: 'retired',
    retirementReason: '这张历史 Grok 形象已撤下',
    provenance: {
      origin: 'imported-sites-v27',
      official: false,
      detail: '用户明确要求改正 Grok 身份；仅保留 ID 兼容记录，不再提供原图'
    },
    description: '该历史 Grok 形象已撤下；项目角色配置和 artworkId 保留，不会替换为新基准角色。'
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
  return CREATION_ARTWORKS.find((artwork) => artwork.id === id)
    ?? RETIRED_ARTWORKS.find((artwork) => artwork.id === id)
    ?? null;
}

export function getFamilyArtwork(family) {
  return CREATION_ARTWORKS.find((artwork) => artwork.family === family) ?? null;
}

export function getBuiltInLooks(family = null) {
  return BUILT_IN_LOOKS.filter(look => !family || look.family === family)
    .map(look => getCreationArtwork(look.artworkId)).filter(Boolean).map(artwork => structuredClone(artwork));
}

function fixedLookPack(artwork) {
  const config=createLookCharacter(artwork.id);
  return {
    id:`${artwork.id}-background-composition`,family:artwork.family,artworkId:artwork.id,
    kind:'fixed-image-2d',view:'front',status:'candidate',revision:1,
    provenance:{origin:artwork.provenance?.origin||'imagegen-20261005',detail:'单张完整 PNG 固定造型；仅背景颜色/透明度在网页中实际合成，其他设定只更新 Prompt。'},
    outputNotes:Object.freeze({
      zh:`【工作台输出说明】当前画面以“${artwork.name}”这张完整 PNG 为固定造型，只把所选背景合成到 PNG；人物/角色姿态和图中配饰已烘焙，五官、材质、颜色、动作、镜头等高级设定只写入 Prompt，不会改变本画面。本内置搭配仍待真实网页美术验收；这不是自动生成图片或任意 3D 模型。需要使用参考图时，请在 ChatGPT 另行附加。`,
      en:`[Studio output] The current preview uses the complete PNG “${artwork.name}” as a fixed look and composites only the selected background. Its pose and pictured accessories are baked into the image; advanced feature, material, color, action and camera settings update the prompt only and do not alter this preview. This built-in look is still pending real webpage art review. It is not generated artwork or a freely editable 3D model. Attach any reference image in ChatGPT when needed.`
    }),
    baseConfig:config,width:artwork.width,height:artwork.height,
    editablePaths:['background','colors.background'],
    layers:[{id:artwork.id,src:artwork.src,z:0}],variants:[]
  };
}

export function getCompositionPack(family, artworkId = null) {
  const artwork=artworkId?getCreationArtwork(artworkId):getFamilyArtwork(family);
  if(!artwork||artwork.family!==family||artwork.status==='retired')return null;
  if(artwork.id==='candidate-dots-20261005')return COMPOSITION_PACKS.find(pack=>pack.family==='dots')??null;
  return BUILT_IN_LOOKS.some(look=>look.artworkId===artwork.id)?fixedLookPack(artwork):null;
}
