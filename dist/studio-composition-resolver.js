import {queryLooks} from './studio-tags.js?v=86';
import {createLookCharacter,resolveCharacter,validateConfig} from './studio-model.js?v=86';
import {getCompositionPack,getCreationArtwork} from './studio-creation-assets.js?v=86';
import {
  COMPOSITION_CATALOG_VERSION,
  createModularCatalog,
  getTemplateApproval,
  getTrustedAsset,
  getTrustedAssetBySrc,
  getTrustedModularCatalog,
  getModularRecipeApproval,
  listTemplateAssetStates,
  validateModularAssetRecord
} from './studio-composition-catalog.js?v=86';
import {inspectCompositionPack,isLocalCreationAsset,resolveCompositionConfig,selectCompositionLayers} from './studio-creation.js?v=86';
import {COMPOSITION_FIT_VERSION,resolveAnchorPairFit,resolveHeadphoneFit} from './studio-composition-fit.js?v=86';

const clone = value => structuredClone(value);
const object = value => value && typeof value === 'object' && !Array.isArray(value);
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (object(value)) return `{${Object.keys(value).sort().map(key=>`${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
}
const same = (a,b) => canonical(a) === canonical(b);
const TEMPLATE_STATES = listTemplateAssetStates();
const byLookAndRecipe = new Map(TEMPLATE_STATES.map(state=>[`${state.artworkId}::${state.recipeId}`,state]));

// Fingerprints are stable change detectors, not signatures or authorization.
function fingerprint(value) {
  const source = canonical(value);
  let a = 0x811c9dc5, b = 0x9e3779b9;
  for (let index=0; index<source.length; index++) {
    const code=source.charCodeAt(index);
    a=Math.imul(a^code,0x01000193)>>>0;
    b=Math.imul(b^(code+index),0x85ebca6b)>>>0;
  }
  return `${a.toString(16).padStart(8,'0')}${b.toString(16).padStart(8,'0')}`;
}

function recipeFor(pack, config) {
  if (!pack.variants?.length) return 'fixed';
  const variant=pack.variants.find(item=>Object.entries(item.values).every(([path,value])=>Object.is(path.split('.').reduce((node,key)=>node?.[key],config),value)));
  return variant?.id ?? null;
}

function trustedLayers(pack, config) {
  const layers=selectCompositionLayers(pack,config).map(layer=>{
    if (!isLocalCreationAsset(layer.src)) throw new Error('组合图层不是登记的本地资源');
    const asset=getTrustedAssetBySrc(layer.src);
    if (!asset) throw new Error(`完整 PNG 未登记到可信目录：${layer.src}`);
    if (asset.width!==pack.width || asset.height!==pack.height) throw new Error(`完整 PNG “${asset.id}”尺寸与配方不一致`);
    return {...layer,assetId:asset.id,assetVersion:asset.version,sha256:asset.sha256};
  }).sort((a,b)=>a.z-b.z);
  if (!layers.length) throw new Error('完整 PNG 配方没有可绘制图层');
  return layers;
}

function compositionInput(pack, config, recipeId) {
  const paths=pack.variants?.find(item=>item.id===recipeId)?.values ?? {};
  return {
    stateId: recipeId,
    values: clone(paths),
    background: config.background,
    backgroundColor: config.colors.background
  };
}

function makeResolvedTemplate({character,artworkId,recipeId:requestedRecipeId=null}={}) {
  let config, artwork, pack;
  try {
    config=validateConfig(character);
    artwork=getCreationArtwork(artworkId);
    if (!artwork || artwork.status==='retired' || artwork.family!==config.family) throw new Error('模板 ID 不存在、已撤下或与当前角色分组不匹配');
    pack=getCompositionPack(config.family,artworkId,config);
    const assessment=inspectCompositionPack(pack,config);
    if (assessment.availability!=='available') return {
      availability:assessment.availability,reason:assessment.reason,composition:null,
      renderPlan:null,stageMetadata:[],artwork:clone(artwork)
    };
    const resolvedConfig=resolveCompositionConfig(pack,config);
    const recipeId=recipeFor(pack,resolvedConfig);
    if (!recipeId || (requestedRecipeId && requestedRecipeId!==recipeId)) throw new Error('角色参数与登记的完整 PNG 配方不匹配');
    const layers=trustedLayers(pack,resolvedConfig);
    const assetRefs=layers.map(layer=>({id:layer.assetId,version:layer.assetVersion,sha256:layer.sha256}));
    const inputs=compositionInput(pack,resolvedConfig,recipeId);
    const refCore={kind:'template',catalogVersion:COMPOSITION_CATALOG_VERSION,baseId:artworkId,recipeId,assetRefs,inputs};
    const composition={...refCore,inputFingerprint:fingerprint({characterFamily:config.family,recipeId,values:inputs.values,background:inputs.background,backgroundColor:inputs.backgroundColor}),resolvedFingerprint:fingerprint({refCore,layers:layers.map(layer=>({id:layer.id,assetId:layer.assetId,z:layer.z})),width:pack.width,height:pack.height})};
    const primaryAsset=layers[0];
    const defaultState=byLookAndRecipe.get(`${artworkId}::${recipeId}`);
    const approval=getTemplateApproval(artworkId,{recipeId,sha256:assetRefs.length===1?assetRefs[0].sha256:null});
    const approvedStatus=approval.status ?? defaultState?.approvalStatus ?? 'pendingScopeMapping';
    const stageMetadata=layers.map(layer=>({
      stage:layer.id==='headphones'?'配饰':'角色',
      asset:{id:layer.assetId,version:layer.assetVersion,sha256:layer.sha256,src:layer.src,previewSrc:layer.src,width:pack.width,height:pack.height}
    }));
    return {
      availability:'available',reason:assessment.reason,composition,
      renderPlan:{kind:'template',pack:clone(pack),config:clone(resolvedConfig),layers:clone(layers),width:pack.width,height:pack.height,background:{mode:'transparent'}},
      stageMetadata,artwork:clone(artwork),approvalStatus:approvedStatus,approval
    };
  } catch (error) {
    return {availability:'unsupported',reason:error?.message||'完整 PNG 配方无法解析',composition:null,renderPlan:null,stageMetadata:[],artwork:artwork?clone(artwork):null};
  }
}

export function resolveTemplateComposition({character,artworkId,recipeId=null}={}) {
  return makeResolvedTemplate({character,artworkId,recipeId});
}

const TEMPLATE_COMPOSITION_KEYS=['kind','catalogVersion','baseId','recipeId','assetRefs','inputs','inputFingerprint','resolvedFingerprint'];
function assertCompositionShape(raw) {
  if (!object(raw) || Object.keys(raw).some(key=>!TEMPLATE_COMPOSITION_KEYS.includes(key))) throw new Error('composition 引用字段不受支持');
  if (raw.kind!=='template' && raw.kind!=='modular') throw new Error('composition 类型不受支持');
  if (raw.kind==='template' && (raw.catalogVersion!==COMPOSITION_CATALOG_VERSION || typeof raw.baseId!=='string' || typeof raw.recipeId!=='string' || !Array.isArray(raw.assetRefs) || !object(raw.inputs) || typeof raw.inputFingerprint!=='string' || typeof raw.resolvedFingerprint!=='string')) throw new Error('template composition 引用结构无效');
}

export function resolveProjectComposition(project, {catalog=null}={}) {
  if (!object(project) || project.format!=='dot-studio-project' || project.version!==2 || !object(project.character) || !object(project.creation)) throw new Error('仅支持包装 v2 的 Dot Studio 项目');
  const character=validateConfig(project.character), input=project.creation.composition;
  if (input===null) return {availability:'prompt-only',reason:'当前角色设置尚无与登记完整 PNG 配方一致的实际渲染结果。',composition:null,renderPlan:null,stageMetadata:[]};
  assertCompositionShape(input);
  if (input.kind==='modular') {
    if (!object(input.inputs)) throw new Error('模块 composition 缺少规范化输入');
    const result=resolveModularComposition({character,composition:{
      baseId:input.inputs.baseId,
      recipeId:input.recipeId,
      assetIds:input.inputs.assetIds,
      poseId:input.inputs.poseId
    }},{catalog:catalog||getTrustedModularCatalog()});
    if(result.artwork?.id!==project.creation.artworkId)throw new Error('模块项目 artworkId 与可信基底不匹配');
    if(result.availability!=='available')throw new Error(result.reason||'模块 composition 无法解算');
    if(!same(result.composition,input))throw new Error('模块 composition 与可信目录解算结果不一致');
    return result;
  }
  const result=makeResolvedTemplate({character,artworkId:input.baseId,recipeId:input.recipeId});
  if(result.availability!=='available')throw new Error(result.reason||'模板 composition 无法解算');
  if(!same(result.composition,input))throw new Error('composition 引用与可信本地模板解析结果不一致');
  return result;
}

const LOCK_KEYS=new Set(['artworkId','recipeId','assetIds']);
const approvedDefaultRecipe = state => state.lookId==='candidate-dots-20261005'
  ? state.recipeId==='headphones-classic'
  : state.recipeId==='classic' || state.recipeId==='fixed';
function lockMatches(candidate,locks) {
  if (Object.keys(locks).some(key=>!LOCK_KEYS.has(key))) return {matches:false,reason:'随机锁定字段不受支持'};
  if (locks.artworkId && candidate.project.creation.artworkId!==locks.artworkId) return {matches:false,reason:`锁定模板 ${locks.artworkId} 与筛选范围冲突`};
  if (locks.recipeId && candidate.composition.recipeId!==locks.recipeId) return {matches:false,reason:`锁定配方 ${locks.recipeId} 与可用模板状态冲突`};
  if (locks.assetIds && (!Array.isArray(locks.assetIds)||locks.assetIds.some(id=>!candidate.composition.assetRefs.some(ref=>ref.id===id)))) return {matches:false,reason:'锁定素材与当前组合资产不匹配'};
  return {matches:true,reason:''};
}

function candidateQueryParts(query) {
  if(!object(query))return {typedQuery:query,lookIds:null};
  const {lookIds,...typedQuery}=query;
  if(lookIds===undefined||lookIds===null)return {typedQuery,lookIds:null};
  if(!Array.isArray(lookIds)&&!(lookIds instanceof Set))throw new Error('首页随机范围必须是形象 ID 列表');
  return {typedQuery,lookIds:new Set([...lookIds].filter(id=>typeof id==='string'))};
}

function validateCandidateLocks(locks) {
  if(!object(locks)||Object.keys(locks).some(key=>!LOCK_KEYS.has(key)))return '随机锁定配置无效';
  if(locks.artworkId!==undefined&&locks.artworkId!==null&&(typeof locks.artworkId!=='string'||!locks.artworkId.trim()))return '锁定模板 ID 无效';
  if(locks.recipeId!==undefined&&locks.recipeId!==null&&(typeof locks.recipeId!=='string'||!locks.recipeId.trim()))return '锁定配方 ID 无效';
  if(locks.assetIds!==undefined&&locks.assetIds!==null&&(!Array.isArray(locks.assetIds)||locks.assetIds.some(id=>typeof id!=='string'||!id.trim())||new Set(locks.assetIds).size!==locks.assetIds.length))return '锁定素材 ID 列表无效';
  return '';
}

/** Exact frozen-hash approval gate shared by template candidate selection and its diagnostics. */
export function assessTemplateCandidateApproval(state,composition,locks={}){
  const refs=Array.isArray(composition?.assetRefs)?composition.assetRefs:[];
  const approval=getTemplateApproval(state?.artworkId,{recipeId:state?.recipeId,sha256:refs.length===1?refs[0].sha256:null});
  if(approval.status==='approved')return {eligible:true,approval,reason:''};
  let lockPrefix='';
  if(locks.artworkId&&locks.artworkId===state?.artworkId)lockPrefix='锁定模板对应的模板候选不可用：';
  else if(locks.recipeId&&locks.recipeId===state?.recipeId)lockPrefix='锁定配方对应的模板候选不可用：';
  else if(Array.isArray(locks.assetIds)&&locks.assetIds.some(id=>refs.some(ref=>ref.id===id)))lockPrefix='锁定素材对应的模板候选不可用：';
  return {eligible:false,approval,reason:`${lockPrefix}模板适配未通过冻结批准校验（${approval.status}）。`};
}

/**
 * Resolve template and approved modular candidates through the same trusted
 * resolver. `catalog` is reserved for code-owned verification fixtures; the
 * application must never pass catalog data from a project or other user JSON.
 */
export function getResolvedTemplateCandidates({query={},project=null,locks={},seed=null,signal=null,catalog=null}={}) {
  if (signal?.aborted) return {candidates:[],availability:'empty',reason:'随机任务已取消',rejected:[]};
  const lockError=validateCandidateLocks(locks);
  if (lockError) return {candidates:[],availability:'empty',reason:lockError,rejected:[]};
  let sourceProject=null;
  try {
    if (project!==null) {
      if (!object(project)||project.format!=='dot-studio-project'||project.version!==2||!object(project.character)||!object(project.creation)) throw new Error('随机器只接受当前包装 v2 项目');
      sourceProject={character:validateConfig(project.character)};
    }
  } catch(error) { return {candidates:[],availability:'empty',reason:error.message,rejected:[]}; }
  let queryParts;
  let looks;
  try { queryParts=candidateQueryParts(query);looks=queryLooks(queryParts.typedQuery); } catch(error) { return {candidates:[],availability:'empty',reason:error?.message||'标签查询无效',rejected:[]}; }
  const allowedIds=new Set(looks.map(look=>look.artworkId).filter(id=>!queryParts.lookIds||queryParts.lookIds.has(id)));
  const candidates=[],rejected=[];
  for (const state of TEMPLATE_STATES) {
    if (!allowedIds.has(state.lookId) || !approvedDefaultRecipe(state)) continue;
    const character=clone(state.config);
    if (sourceProject) {
      try {
        character.background=sourceProject.character.background;
        character.colors.background=sourceProject.character.colors.background;
      } catch {}
    }
    const resolved=makeResolvedTemplate({character,artworkId:state.artworkId,recipeId:state.recipeId});
    if (resolved.availability!=='available'||!resolved.composition) { rejected.push({id:state.id,reason:resolved.reason}); continue; }
    const approval=assessTemplateCandidateApproval(state,resolved.composition,locks);
    if(!approval.eligible){rejected.push({id:state.id,reason:approval.reason});continue;}
    const match=lockMatches({project:{creation:{artworkId:state.artworkId}},composition:resolved.composition},locks);
    if (!match.matches) { rejected.push({id:state.id,reason:match.reason}); continue; }
    const nextProject={
      format:'dot-studio-project',version:2,
      character:clone(character),
      creation:{mode:'composer',artworkId:state.artworkId,composition:clone(resolved.composition)}
    };
    const resolution=resolveProjectComposition(nextProject);
    candidates.push({
      id:`template:${state.id}`,project:nextProject,composition:clone(resolved.composition),resolution,
      renderPlan:clone(resolved.renderPlan),stageMetadata:clone(resolved.stageMetadata),seed
    });
  }
  let modularCatalog=null;
  try {
    const source=catalog??getTrustedModularCatalog();
    if(!object(source)||!Array.isArray(source.assets)||!Array.isArray(source.recipes)||!Array.isArray(source.grips)||!Array.isArray(source.baseStates)||!Array.isArray(source.baseGeometryProfiles))throw new Error('模块目录必须是 code-owned 的完整素材、配方、基底与 geometry profile 清单');
    const rebuilt=createModularCatalog({assets:source.assets,recipes:source.recipes,grips:source.grips,baseGeometryProfiles:source.baseGeometryProfiles});
    if(!same(source.baseStates,rebuilt.baseStates)||!same(source.baseGeometryProfiles,rebuilt.baseGeometryProfiles))throw new Error('模块目录基底状态或 geometry profile 与当前已登记模板资产不一致');
    modularCatalog=rebuilt;
  } catch(error) {
    rejected.push({id:'modular-catalog',reason:`模块目录不可用：${error?.message||'目录结构无效'}`});
  }
  if(modularCatalog){
    for(const recipe of modularCatalog.recipes){
      const baseState=modularCatalog.baseStates.find(state=>state.id===recipe.baseId);
      if(!baseState||!allowedIds.has(baseState.artworkId))continue;
      const lockedRecipe=locks.recipeId===recipe.id;
      const lockedArtwork=Boolean(locks.artworkId&&locks.artworkId===baseState.artworkId);
      const lockedAsset=Boolean(locks.assetIds?.some(id=>recipe.assetIds.includes(id)||baseState.assetRefs.some(ref=>ref.id===id)));
      const block=reason=>rejected.push({id:`modular:${recipe.id}`,reason:(lockedRecipe?'锁定配方对应的模块候选不可用：':lockedArtwork?'锁定模板对应的模块候选不可用：':lockedAsset?'锁定素材对应的模块候选不可用：':'')+reason});
      const character=clone(baseState.config);
      if(sourceProject){
        character.background=sourceProject.character.background;
        character.colors.background=sourceProject.character.colors.background;
      }
      const resolved=resolveModularComposition({character,baseId:recipe.baseId,recipeId:recipe.id,assetIds:recipe.assetIds,poseId:recipe.poseId},{catalog:modularCatalog});
      if(resolved.availability!=='available'||!resolved.composition){block(resolved.reason||'模块配方无法解算');continue;}
      if(resolved.approvalStatus!=='approved'){
        const pending=resolved.approval?.pendingAssetIds?.join(', ')||recipe.assetIds.join(', ');
        block(`模块适配尚无当前版本的逐项美术批准：${pending}`);continue;
      }
      if(resolved.releaseStatus!=='approved'||!recipe.assetIds.every(id=>modularCatalog.assets.find(asset=>asset.id===id)?.releaseStatus==='approved')){
        block('模块素材尚未取得可参与默认随机的发布资格');continue;
      }
      if(recipe.defaultEligible!==true){block('模块配方未登记为默认成品随机候选');continue;}
      const nextProject={
        format:'dot-studio-project',version:2,
        character:clone(character),
        creation:{mode:'composer',artworkId:baseState.artworkId,composition:clone(resolved.composition)}
      };
      let recomputed;
      try { recomputed=resolveProjectComposition(nextProject,{catalog:modularCatalog}); }
      catch(error){block(`模块项目引用无法由可信目录重算：${error?.message||'解算失败'}`);continue;}
      if(recomputed.availability!=='available'||!recomputed.composition||!same(recomputed.composition,resolved.composition)){
        block('模块项目 composition 与可信目录重算结果不一致');continue;
      }
      const candidate={
        id:`modular:${recipe.id}`,project:nextProject,composition:clone(recomputed.composition),resolution:recomputed,
        renderPlan:clone(recomputed.renderPlan),stageMetadata:clone(recomputed.stageMetadata),seed
      };
      const match=lockMatches(candidate,locks);
      if(!match.matches){rejected.push({id:candidate.id,reason:match.reason});continue;}
      candidates.push(candidate);
    }
  }
  const lockedModularRejection=modularCatalog&&rejected.find(item=>{
    const recipe=modularCatalog.recipes.find(value=>item.id===`modular:${value.id}`);
    if(!recipe)return false;
    const baseState=modularCatalog.baseStates.find(state=>state.id===recipe.baseId);
    return Boolean((locks.recipeId&&locks.recipeId===recipe.id)||(locks.artworkId&&locks.artworkId===baseState?.artworkId)||(locks.assetIds&&locks.assetIds.some(id=>recipe.assetIds.includes(id)||baseState?.assetRefs.some(ref=>ref.id===id))));
  });
  const lockedTemplateRejection=rejected.find(item=>item.reason?.startsWith('锁定模板对应')||item.reason?.startsWith('锁定配方对应')||item.reason?.startsWith('锁定素材对应'));
  const reason=candidates.length?'':lockedModularRejection?.reason||lockedTemplateRejection?.reason|| (rejected.length?rejected.map(item=>item.reason).filter(Boolean).slice(0,3).join('；'):(allowedIds.size===0?'当前入口没有可用的形象范围。':'当前标签范围没有已登记且具备确认资格的真实模板配方。'));
  return {candidates,availability:candidates.length?'available':'empty',reason,rejected};
}

export function resolveModularComposition({character,baseId,recipeId=null,assetIds=null,poseId=null,composition=null}={}, {catalog=null}={}) {
  const trustedCatalog=catalog||getTrustedModularCatalog();
  const empty={availability:'unsupported',reason:'当前没有登记可用模块配方。',composition:null,renderPlan:null,stageMetadata:[]};
  try {
    const config=validateConfig(character);
    const input=composition||{baseId,recipeId,assetIds,poseId};
    const keys=['baseId','recipeId','assetIds','poseId'];
    if (!object(input)||Object.keys(input).some(key=>!keys.includes(key))||typeof input.baseId!=='string'||typeof input.recipeId!=='string'||!Array.isArray(input.assetIds)||typeof input.poseId!=='string') throw new Error('模块配方输入结构无效');
    const recipe=trustedCatalog.recipes.find(item=>item.id===input.recipeId&&item.baseId===input.baseId&&item.poseId===input.poseId&&same(item.assetIds,input.assetIds));
    if (!recipe) throw new Error('模块素材、基底或姿态没有登记为完整配方');
    if(recipe.gripId!==null)throw new Error('当前模块目录尚无已渲染的抓握/接触配方，模块配方必须声明 gripId: null');
    const baseState=trustedCatalog.baseStates.find(item=>item.id===input.baseId);
    if (!baseState) throw new Error('模块基底不在可信完整 PNG 目录中');
    const modules=input.assetIds.map(id=>trustedCatalog.assets.find(item=>item.id===id));
    if (modules.some(asset=>!asset)) throw new Error('模块配方引用了未登记素材');
    const catalogById=new Map(trustedCatalog.assets.map(asset=>[asset.id,asset]));
    const occupiedSlots=new Set();
    for (const asset of modules) {
      const validated=validateModularAssetRecord(asset);
      if(!same(validated,asset))throw new Error(`模块素材 ${asset.id} 未能通过严格登记合同校验`);
      if (asset.engineeringStatus!=='available') throw new Error(`模块素材 ${asset.id} 当前不可用`);
      if(baseState.family!==config.family)throw new Error('当前角色体系与模块配方登记基底不匹配');
      if (!asset.baseIds.includes(baseState.id)||!asset.layoutIds.includes(baseState.layoutId)||!asset.styles.includes(baseState.styleId)) throw new Error(`模块素材 ${asset.id} 不支持该完整 PNG 基底、结构布局或风格`);
      if (!asset.poses.includes(input.poseId)||input.poseId!==baseState.poseId) throw new Error(`模块素材 ${asset.id} 不支持该登记姿态`);
      if (asset.view!=='front') throw new Error(`模块素材 ${asset.id} 不支持正面视角`);
      for(const slot of asset.slots){if(occupiedSlots.has(slot))throw new Error(`模块配方存在槽位冲突：${slot}`);occupiedSlots.add(slot);}
      if (asset.dependencies.some(id=>!input.assetIds.includes(id))) throw new Error(`模块素材 ${asset.id} 缺少依赖素材`);
      if (asset.excludes.some(id=>input.assetIds.includes(id))) throw new Error(`模块素材 ${asset.id} 与已选素材互斥`);
      if (asset.dependencies.some(id=>!catalogById.has(id))||asset.excludes.some(id=>!catalogById.has(id))) throw new Error(`模块素材 ${asset.id} 引用了目录中不存在的依赖或互斥项`);
      if (asset.grip.required && (!recipe.gripId||recipe.gripId!==asset.grip.gripId||!trustedCatalog.grips.some(grip=>grip.id===recipe.gripId))) throw new Error(`模块素材 ${asset.id} 需要已登记抓握配方`);
      if (!asset.grip.required && recipe.gripId && !trustedCatalog.grips.some(grip=>grip.id===recipe.gripId)) throw new Error('模块配方引用未登记抓握');
      if(asset.occlusion.mode!=='above-base'||!asset.occlusion.covers.includes('base'))throw new Error(`模块素材 ${asset.id} 没有适用于当前Canvas的明确遮挡规则`);
    }
    const slotOwners=new Map();
    for(const asset of modules)for(const slot of asset.slots){const owner=slotOwners.get(slot);if(owner)throw new Error(`模块素材槽位冲突：${slot}`);slotOwners.set(slot,asset.id);}
    const dynamicAssets=modules.filter(asset=>asset.fitPolicy||asset.sourceParts);
    if(modules.some(asset=>Boolean(asset.fitPolicy)!==Boolean(asset.sourceParts)))throw new Error('动态素材必须同时登记 fitPolicy 与 sourceParts');
    const staticModules=modules.filter(asset=>!dynamicAssets.includes(asset));
    const dynamic=dynamicAssets.length>0;
    if(!Array.isArray(recipe.placements)||!Array.isArray(recipe.layerOrder)||recipe.layerOrder.length!==modules.length)throw new Error('模块配方缺少完整图层与锚点规则');
    let placements=[],fitProfile=null;
    const fitResults=new Map(),fitRefs=[];
    if(dynamic){
      if(recipe.placements.length!==staticModules.length||!recipe.fitProfileRef)throw new Error('动态配方必须为每个刚性组件登记 placements，并引用一个 geometry profile');
      fitProfile=trustedCatalog.baseGeometryProfiles?.find(item=>item.id===recipe.fitProfileRef.id);
      if(!fitProfile||fitProfile.baseId!==baseState.id||fitProfile.version!==recipe.fitProfileRef.version)throw new Error('动态配方 geometry profile 未绑定当前精确基底');
      if(recipe.fitProfileRef.fingerprint!==fingerprint(fitProfile))throw new Error('动态配方 geometry profile 指纹已过期');
      for(const asset of dynamicAssets){
        const policy=asset.fitPolicy;
        if(!policy.supports.bodyIds.includes(fitProfile.bodyId)||policy.supports.view!==fitProfile.view||!policy.supports.poseIds.includes(fitProfile.poseId)||!policy.supports.layoutIds.includes(fitProfile.layoutId)||!policy.supports.styleIds.includes(fitProfile.styleId))throw new Error(`动态素材 ${asset.id} 未声明支持当前基底的身体结构、姿态、布局、风格或视角`);
        const solver=policy.kind==='headphone-arc-cups-v1'?resolveHeadphoneFit:policy.kind==='anchor-pair-rigid-v1'?resolveAnchorPairFit:null;
        if(!solver)throw new Error(`模块 ${asset.id} 引用了未登记的动态适配解算器`);
        const fit=solver({baseGeometryProfile:fitProfile,fitPolicy:policy,sourceParts:asset.sourceParts});
        if(fit.availability!=='available'||!fit.layers?.length||!fit.fitFingerprint)throw new Error(`模块 ${asset.id}：${fit.reason||'geometry fit 无法解算'}`);
        if(fit.layers.some(layer=>layer.assetId!==asset.id||!object(layer.transform)||!object(layer.sourceRect)))throw new Error(`动态模块 ${asset.id} 的解算图层缺少可信素材引用、源矩形或仿射变换`);
        fitResults.set(asset.id,fit);
        fitRefs.push({assetId:asset.id,fitVersion:fit.fitVersion,fitFingerprint:fit.fitFingerprint,fitProfileRef:clone(recipe.fitProfileRef)});
      }
      fitRefs.sort((left,right)=>left.assetId.localeCompare(right.assetId));
      placements=staticModules.map(asset=>{
        const placement=recipe.placements.find(item=>item.assetId===asset.id);
        if(!placement||!asset.anchors[placement.sourceAnchor]||!object(placement.targetAnchor))throw new Error(`模块素材 ${asset.id} 的锚点规则无效`);
        if(!Number.isFinite(placement.targetAnchor.x)||!Number.isFinite(placement.targetAnchor.y)||![placement.width,placement.height].every(value=>Number.isFinite(value)&&value>0))throw new Error(`模块素材 ${asset.id} 的绘制区域无效`);
        const expectedAspect=asset.width/asset.height,drawAspect=(placement.width*baseState.width)/(placement.height*baseState.height);
        if(Math.abs(expectedAspect-drawAspect)/expectedAspect>.015)throw new Error(`模块素材 ${asset.id} 的绘制区域拉伸了组件比例`);
        return clone(placement);
      });
    }else{
      if(recipe.placements.length!==modules.length||recipe.fitProfileRef!==undefined)throw new Error('刚性模块配方必须为每个组件声明锚点，且不能带动态 geometry profile');
      placements=recipe.assetIds.map(id=>{
        const placement=recipe.placements.find(item=>item.assetId===id),asset=catalogById.get(id);
        if(!placement||!asset.anchors[placement.sourceAnchor]||!object(placement.targetAnchor))throw new Error(`模块素材 ${id} 的锚点规则无效`);
        if(!Number.isFinite(placement.targetAnchor.x)||!Number.isFinite(placement.targetAnchor.y)||![placement.width,placement.height].every(value=>Number.isFinite(value)&&value>0))throw new Error(`模块素材 ${id} 的绘制区域无效`);
        const expectedAspect=asset.width/asset.height,drawAspect=(placement.width*baseState.width)/(placement.height*baseState.height);
        if(Math.abs(expectedAspect-drawAspect)/expectedAspect>.015)throw new Error(`模块素材 ${id} 的绘制区域拉伸了组件比例`);
        return clone(placement);
      });
    }
    const byZ=[...modules].sort((a,b)=>a.z-b.z).map(asset=>asset.id);
    if(!same(byZ,recipe.layerOrder)||new Set(modules.map(asset=>asset.z)).size!==modules.length)throw new Error('模块配方层序与素材 z 顺序不一致');
    const approval=getModularRecipeApproval(recipe,trustedCatalog);
    const releaseStatus=modules.every(asset=>asset.releaseStatus==='approved')?'approved':'internal';
    // A module may only decorate the exact registered complete-PNG pose. Prompt-only
    // visual edits stay saveable on the project but make the modular composition null.
    const baseArtwork=getCreationArtwork(baseState.artworkId);
    if(!baseArtwork||baseArtwork.family!==config.family)throw new Error('模块角色与基底作品体系不匹配');
    const baseResolution=makeResolvedTemplate({character:config,artworkId:baseState.artworkId,recipeId:baseState.recipeId});
    if(baseResolution.availability!=='available'||!baseResolution.composition||baseResolution.composition.baseId!==baseState.artworkId||baseResolution.composition.recipeId!==baseState.recipeId||!same(baseResolution.composition.assetRefs,baseState.assetRefs))throw new Error('当前角色外观设置不对应模块配方要求的完整 PNG 基底状态');
    const basePack=getCompositionPack(baseArtwork.family,baseArtwork.id,baseResolution.renderPlan.config);
    if(!basePack)throw new Error('模块基底缺少可信完整 PNG render adapter');
    if(!recipe.defaultEligible&&recipe.defaultEligible!==false)throw new Error('模块配方默认随机资格必须显式声明');
    const allAssetRefs=[...baseState.assetRefs,...modules.map(asset=>({id:asset.id,version:asset.version,sha256:asset.sha256}))];
    const fitVersion=dynamic?COMPOSITION_FIT_VERSION:null;
    const fitFingerprint=dynamic?fingerprint(fitRefs):null;
    const inputs={baseId:baseState.id,assetIds:[...input.assetIds],poseId:input.poseId,view:'front',recipeId:recipe.id,background:config.background,backgroundColor:config.colors.background,...(dynamic?{fitProfileRef:clone(recipe.fitProfileRef),fitVersion,fitFingerprint,fitRefs:clone(fitRefs)}:{})};
    const core={kind:'modular',catalogVersion:COMPOSITION_CATALOG_VERSION,baseId:baseState.id,recipeId:recipe.id,assetRefs:allAssetRefs,inputs};
    const renderModules=modules.map(asset=>{
      const placement=placements.find(item=>item.assetId===asset.id);
      const fit=fitResults.get(asset.id);
      return {id:asset.id,version:asset.version,sha256:asset.sha256,src:asset.src,width:asset.width,height:asset.height,z:asset.z,anchors:clone(asset.anchors),placement,parts:fit?clone(fit.layers):null,fitFingerprint:fit?.fitFingerprint??null,fitProfileRef:fit?clone(recipe.fitProfileRef):null,fitVersion:fit?.fitVersion??null,occlusion:clone(asset.occlusion),tintPaths:[...asset.tintPaths],category:asset.category};
    });
    const resolvedComposition={...core,inputFingerprint:fingerprint({inputs,characterFamily:config.family}),resolvedFingerprint:fingerprint({core,fitVersion,fitFingerprint,geometryProfile:dynamic?fitProfile:null,fitResults:fitRefs.map(ref=>({assetId:ref.assetId,fitVersion:ref.fitVersion,fitFingerprint:ref.fitFingerprint,fitProfileRef:ref.fitProfileRef,policy:modules.find(asset=>asset.id===ref.assetId)?.fitPolicy,sourceParts:modules.find(asset=>asset.id===ref.assetId)?.sourceParts,parts:fitResults.get(ref.assetId)?.layers})),recipe:{id:recipe.id,version:recipe.version,layoutId:recipe.layoutId,styleId:recipe.styleId,poseId:recipe.poseId,view:recipe.view,placements,layerOrder:recipe.layerOrder,highRiskGroups:recipe.highRiskGroups,fitProfileRef:recipe.fitProfileRef??null},modules:modules.map(asset=>({id:asset.id,version:asset.version,sha256:asset.sha256,width:asset.width,height:asset.height,z:asset.z,anchors:asset.anchors,occlusion:asset.occlusion,tintPaths:asset.tintPaths,fitPolicy:asset.fitPolicy??null,sourceParts:asset.sourceParts??null,parts:fitResults.get(asset.id)?.layers??null}))})};
    const renderPlan={kind:'modular',base:baseResolution.renderPlan,modules:renderModules,recipe:clone(recipe),config:clone(baseResolution.renderPlan.config),width:baseState.width,height:baseState.height,background:{mode:'transparent'},artwork:clone(baseArtwork)};
    const stageMetadata=[...clone(baseResolution.stageMetadata),...modules.map(asset=>({stage:asset.category,asset:{id:asset.id,version:asset.version,sha256:asset.sha256,src:asset.src,previewSrc:asset.src,width:asset.width,height:asset.height}}))];
    if(stageMetadata.length!==allAssetRefs.length||allAssetRefs.some(ref=>!stageMetadata.some(stage=>stage.asset.id===ref.id&&stage.asset.version===ref.version&&stage.asset.sha256===ref.sha256)))throw new Error('模块 composition 引用未完整绑定到可信预载资源');
    return {availability:'available',reason:approval.status==='approved'?'模块配方通过硬约束且当前适配版本已有对应美术批准记录。':approval.status==='rejected'?'当前适配已被拒绝，不进入默认随机池。':'模块配方通过工程硬约束；当前适配版本尚无对应美术批准，不进入默认随机池。',composition:resolvedComposition,renderPlan,stageMetadata,approvalStatus:approval.status,releaseStatus,approval,artwork:clone(baseArtwork),recommendation:recipe.defaultEligible};
  } catch(error) { return {...empty,reason:error?.message||empty.reason}; }
}

export function getTemplateAssetStates() {
  return TEMPLATE_STATES.map(state=>clone(state));
}

export {fingerprint as compositionFingerprint};
