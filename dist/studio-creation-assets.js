import {createLookCharacter,resolveCharacter} from './studio-model.js?v=83';
import {BASELINE_LOOKS,BUILT_IN_LOOKS,LOOK_PRESETS} from './studio-looks.js?v=83';

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
      zh:'【工作台输出说明】当前设置可由已支持的正面完整静态 PNG 配方合成为 PNG；眨眼是单帧表情，不是连续动画。这是本地 2D 静态合成，不是自动生成图片，也不支持自由旋转三维视角。此组合属于基准候选，尚待真实网页美术验收；本说明不表示验收通过。需要参考自己的图片时，请在 ChatGPT 另行附加。',
      en:'[Studio output] The supported front-view complete still PNG recipes can be composited into a PNG; a wink is one still expression, not continuous animation. This is a static local 2D composition, not a generated image or a freely rotatable 3D model. This composition is a baseline candidate pending real webpage art review; this note does not indicate acceptance. Attach your own reference image in ChatGPT when needed.'
    }),
    actionPromptOverrides:Object.freeze({
      listen:Object.freeze({
        zh:'正面静态佩戴贴合头部的耳机，头部保持正向且不倾斜；以安静聆听的表情表达状态。不添加播放动画、音符、声波或悬浮符号；耳罩与头带贴合自然、不穿模，不叠加帽子。',
        en:'Wear headphones fitted naturally to the head in a static front-facing pose. Keep the head facing forward without tilting; convey listening with a calm expression. Add no playback animation, music notes, sound waves or floating symbols. Avoid intersecting earcups or headbands and do not add a hat.'
      })
    }),
    baseConfig:createLookCharacter('candidate-dots-20261005'),width:1254,height:1254,
    editablePaths:['accessories.head','action','expression','background','colors.background'],
    layers:[
      {id:'bare',src:'./assets/characters/dots-blue-plush-orb-front-candidate-v2.png',z:0},
      {id:'headphones',src:'./assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png',z:0}
    ],
    variants:[
      {id:'bare-classic',values:{'accessories.head':'none',action:'idle',expression:'calm'},layerIds:['bare']},
      {id:'headphones-idle',values:{'accessories.head':'headphones',action:'idle',expression:'calm'},layerIds:['headphones']},
      {id:'headphones-classic',values:{'accessories.head':'headphones',action:'listen',expression:'calm'},layerIds:['headphones']}
    ]
  })
]);

// These are registered workbench state slots, not additional gallery looks.
// Available PNGs have been inspected and their source hashes recorded;
// pending states stay visible but cannot render.
export const BASELINE_POSE_VARIANTS = Object.freeze([
  Object.freeze({id:'wink',artworkId:'candidate-dots-20261005',family:'dots',label:'眨眼',assetPath:'./assets/poses/dots-wink-v1.png',assetStatus:'available',sha256:'4fbeb4da84da597e7bcc9533012ca7659e1a12a6e20bd479f098e4da7c805ac1',width:1254,height:1254,values:Object.freeze({'accessories.head':'headphones',action:'listen',expression:'wink'}),identityRules:Object.freeze(['保留软椭圆眼设计；只闭合一只眼','保持无嘴、无手脚的圆球身份','保留贴合耳机；不添加新配饰'])}),
  Object.freeze({id:'wink',artworkId:'candidate-grok-20261005',family:'grok',label:'眨眼',assetPath:'./assets/poses/grok-wink-v1.png',assetStatus:'available',sha256:'0e1543e89fe3e7d21ee6830e7a9435ad1d8cfca59ab1a16fec686c4a48211e86',width:1254,height:1254,values:Object.freeze({action:'idle',expression:'wink',pose:'auto'}),identityRules:Object.freeze(['保留两枚平行同向斜置的白色胶囊眼；只闭合一只眼','保持无嘴、无手脚的紫色圆形软胶身份','不添加眼镜、机械部件或其他配饰'])}),
  Object.freeze({id:'wave',artworkId:'candidate-meta-muse-20261005',family:'meta-muse',label:'挥手问好',assetPath:'./assets/poses/muse-wave-v1.png',assetStatus:'available',sha256:'bd4a5fb9c81fabcb751c6943dbeea52515c92a4f6b2f80335582e485487cb6e1',width:1254,height:1254,values:Object.freeze({action:'wave',expression:'happy',pose:'auto'}),identityRules:Object.freeze(['保留包覆式头罩、暖色内嵌脸面与短臂双脚','只抬起一侧短臂问好；另一侧自然放松','不增加人物发型或长肢体'])}),
  Object.freeze({id:'wave',artworkId:'candidate-humans-20261005',family:'humans',label:'挥手问好',assetPath:'./assets/poses/human-wave-v1.png',assetStatus:'available',sha256:'a3dde33c5ab00f21a735dcb0373e584e954c615d1108332ba40d1924b8e8b308',width:1254,height:1254,values:Object.freeze({action:'wave',expression:'happy',pose:'auto'}),identityRules:Object.freeze(['保留栗发、脸型、肤色与青绿服装身份','只抬起一只手作自然问候，另一只手与双脚保持合理支撑','不复刻动漫截图人物'])}),
  Object.freeze({id:'wave',artworkId:'candidate-animals-20261005',family:'animals',label:'挥手问好',assetPath:'./assets/poses/shiba-wave-v1.png',assetStatus:'available',sha256:'8b3d1417cf4af554b6cbe8f3a0589dd24d0f07db98832b704c5b9a965548651c',width:1254,height:1254,values:Object.freeze({action:'wave',expression:'happy',pose:'sit'}),identityRules:Object.freeze(['保留柴犬立耳、茶白色块、口鼻、卷尾与坐姿','仅抬起一只前爪问候；其余三爪自然支撑','不增加人手或额外肢体'])})
]);

const BASELINE_IDS = new Set(BASELINE_LOOKS.map(look=>look.artworkId));
export function getBaselinePoseVariants(artworkId) {
  return BASELINE_POSE_VARIANTS.filter(variant=>variant.artworkId===artworkId).map(variant=>structuredClone(variant));
}

export function getBaselinePoseControls(artworkId, config) {
  if(!BASELINE_IDS.has(artworkId)||!config)return [];
  const artwork=getCreationArtwork(artworkId),base=createLookCharacter(artworkId);
  const classic=artwork.family==='dots'
    ? {'accessories.head':config.accessories?.head==='none'?'none':'headphones',action:config.accessories?.head==='none'?'idle':'listen',expression:'calm'}
    : {action:base.action,expression:base.expression,pose:base.pose};
  const matches=(values)=>Object.entries(values).every(([path,value])=>Object.is(path.split('.').reduce((node,key)=>node?.[key],config),value));
  return [
    {id:'classic',label:'经典',available:true,selected:matches(classic),assetStatus:'available',values:classic},
    ...getBaselinePoseVariants(artworkId).map(variant=>({
      ...variant,
      available:trustedPoseAsset(variant),
      selected:matches(variant.values)
    }))
  ];
}

export function getBaselinePoseValues(artworkId, stateId, config) {
  const state=getBaselinePoseControls(artworkId,config).find(item=>item.id===stateId);
  if(!state||!state.available)return null;
  return structuredClone(state.values);
}

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

const nestedValue=(config,path)=>path.split('.').reduce((node,key)=>node?.[key],config);
const posePaths=family=>family==='dots'?['accessories.head','action','expression']:['action','expression','pose'];
const usablePoseAsset=state=>state?.assetStatus==='available'&&typeof state.sha256==='string'&&/^[a-f0-9]{64}$/i.test(state.sha256)&&Number.isInteger(state.width)&&state.width>0&&Number.isInteger(state.height)&&state.height>0;
const trustedPoseAsset=state=>{
  const registered=BASELINE_POSE_VARIANTS.find(item=>item.id===state?.id&&item.artworkId===state?.artworkId&&item.family===state?.family&&item.assetPath===state?.assetPath);
  if(!registered||registered.assetStatus!=='available'||!usablePoseAsset(registered)||!usablePoseAsset(state)||state.sha256!==registered.sha256)return false;
  if(state.width!==registered.width||state.height!==registered.height)return false;
  const expected=registered.values,actual=state.values;
  if(!actual||Object.keys(actual).length!==Object.keys(expected).length)return false;
  return Object.entries(expected).every(([path,value])=>Object.hasOwn(actual,path)&&Object.is(actual[path],value));
};

/**
 * Build a baseline-only state pack. Pose images are complete transparent frames,
 * not facial overlays; each frame is selected as one exclusive PNG layer.
 * `available` is only set after the file and its hash have been inspected.
 */
export function createBaselinePosePack(artworkId, poseAssets=BASELINE_POSE_VARIANTS.filter(usablePoseAsset), activeConfig=null) {
  if(!BASELINE_IDS.has(artworkId))return null;
  const artwork=getCreationArtwork(artworkId);
  if(!artwork||artwork.kind!=='baseline-candidate'||artwork.status==='retired')return null;
  const baseConfig=createLookCharacter(artworkId),paths=posePaths(artwork.family);
  let base;
  if(artwork.family==='dots'){
    base=COMPOSITION_PACKS.find(pack=>pack.family==='dots');
  }else{
    const layerId='classic';
    base={
      id:`${artwork.id}-pose-state-candidate`,family:artwork.family,artworkId:artwork.id,
      kind:'layered-2d',view:'front',status:'candidate',revision:1,
      provenance:{origin:artwork.provenance?.origin||'imagegen-20261005',detail:'基准与每个已登记状态都是完整透明 PNG；只提供精确注册的静态状态配方。'},
      outputNotes:Object.freeze({
        zh:'【工作台输出说明】经典、表情或姿态切换会选用各自完整 PNG 并合成背景。每个状态是单张静态图，不是连续动画；未登记的编辑只写入 Prompt。此候选仍待真实网页美术验收。',
        en:'[Studio output] Classic, expression or pose changes select a complete registered PNG and composite its background. Each state is a single still image, not continuous animation; unregistered edits update the Prompt only. This candidate remains pending real webpage art review.'
      }),
      actionPromptOverrides:{
        wave:Object.freeze({
          zh:artwork.family==='animals'?'保持柴犬自然坐姿，只抬起一只前爪作友好问候，其他三爪稳定支撑；这是单张静态挥手姿态，不代表连续挥动。':artwork.family==='meta-muse'?'保持 Meta Muse 厚边头罩与内嵌脸面，只抬起一侧短臂问好，另一侧自然放松；这是单张静态姿态，不代表连续挥动。':'保留当前原创人物身份与服装，只抬起一只手作自然问候，另一只手和双脚稳定自然；这是单张静态挥手姿态，不代表连续挥动。',
          en:artwork.family==='animals'?'Keep the Shiba naturally seated and raise only one front paw in a friendly greeting; the other three paws support the body. This is one still waving pose, not continuous motion.':artwork.family==='meta-muse'?'Keep the Meta Muse hood rim and inset face intact; raise only one short arm in greeting and let the other rest. This is one still pose, not continuous motion.':'Preserve the current original human and outfit; raise one hand in a friendly greeting while the other hand and both feet remain naturally supported. This is one still waving pose, not continuous motion.'
        })
      },
      baseConfig,width:artwork.width,height:artwork.height,
      editablePaths:[...paths,'background','colors.background'],
      layers:[{id:layerId,src:artwork.src,z:0}],
      variants:[{id:'classic',values:Object.fromEntries(paths.map(path=>[path,nestedValue(baseConfig,path)])),layerIds:[layerId]}]
    };
  }
  if(!base)return null;

  const layers=base.layers.map(layer=>({...layer}));
  const poseDimensionsByLayer=new Map();
  const variants=base.variants.map(variant=>({
    ...variant,
    values:{...variant.values,expression:variant.values.expression??baseConfig.expression}
  }));
  const editPaths=base.editablePaths.includes('expression')?base.editablePaths:[...base.editablePaths,'expression'];
  for(const state of poseAssets.filter(item=>item.artworkId===artworkId&&item.family===artwork.family&&trustedPoseAsset(item))){
    const requiredPaths=posePaths(artwork.family);
    if(requiredPaths.length!==Object.keys(state.values).length||requiredPaths.some(path=>!Object.hasOwn(state.values,path)))continue;
    const layerId=`pose-${state.id}`;
    if(layers.some(layer=>layer.id===layerId)||variants.some(variant=>variant.id===state.id))continue;
    layers.push({id:layerId,src:state.assetPath,z:0});
    variants.push({id:state.id,values:Object.fromEntries(requiredPaths.map(path=>[path,state.values[path]])),layerIds:[layerId]});
    poseDimensionsByLayer.set(layerId,{width:state.width,height:state.height});
  }
  const active=resolveCharacter(activeConfig||baseConfig).config;
  const activeVariant=active.family===artwork.family
    ?variants.find(variant=>paths.every(path=>Object.is(variant.values[path],nestedValue(active,path))) )
    :null;
  const activeDimensions=activeVariant?.layerIds.map(layerId=>poseDimensionsByLayer.get(layerId)).find(Boolean);
  const outputNotes=base.outputNotes||Object.freeze({
    zh:'【工作台输出说明】当前为基准候选素材的静态 2D PNG 配方。每个已登记表情或姿态状态会替换为完整静态图片，不是连续动画。候选仍待真实网页美术验收。需要参考自己的图片时，请在 ChatGPT 另行附加。',
    en:'[Studio output] This is a static 2D PNG recipe from baseline candidate art. Each registered expression or pose selects a complete still image, not continuous animation. The candidate remains pending real webpage art review. Attach any reference image in ChatGPT when needed.'
  });
  return Object.freeze({
    ...base,
    width:activeDimensions?.width??base.width,
    height:activeDimensions?.height??base.height,
    id:`${artwork.id}-pose-state-candidate`,
    baseConfig,
    provenance:Object.freeze({origin:artwork.provenance?.origin||'imagegen-20261005',detail:'完整基准与状态 PNG 按可信状态配方互斥替换；每个动作状态是静态单帧，背景为独立实际合成。'}),
    outputNotes,
    actionPromptOverrides:base.actionPromptOverrides||Object.freeze({}),
    editablePaths:Object.freeze(editPaths),
    layers:Object.freeze(layers.map(layer=>Object.freeze(layer))),
    variants:Object.freeze(variants.map(variant=>Object.freeze({...variant,values:Object.freeze(variant.values),layerIds:Object.freeze(variant.layerIds)})))
  });
}

export function getCompositionPack(family, artworkId = null, activeConfig = null) {
  const artwork=artworkId?getCreationArtwork(artworkId):getFamilyArtwork(family);
  if(!artwork||artwork.family!==family||artwork.status==='retired')return null;
  if(BASELINE_IDS.has(artwork.id))return createBaselinePosePack(artwork.id,undefined,activeConfig);
  return BUILT_IN_LOOKS.some(look=>look.artworkId===artwork.id)?fixedLookPack(artwork):null;
}
