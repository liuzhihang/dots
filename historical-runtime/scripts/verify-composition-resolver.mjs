import assert from 'node:assert/strict';
import {webcrypto} from 'node:crypto';
import {
  createModularCatalog,
  getBaseGeometryProfileFingerprint,
  getModularRecipeFingerprint,
  getModularRecipeApproval,
  getTemplateApproval,
  getTrustedModularCatalog,
  setTrustedModularCatalog,
  listTemplateAssetStates
} from '../dist/studio-composition-catalog.js';
import {
  exportProject,
  makeProject,
  parseProject,
  resolveCreation,
  setModularProject,
  setProjectCharacter
} from '../dist/studio-creation.js';
import {createLookCharacter,setCharacterValue} from '../dist/studio-model.js';
import {assessTemplateCandidateApproval,compositionFingerprint,getResolvedTemplateCandidates,resolveModularComposition,resolveProjectComposition,resolveTemplateComposition} from '../dist/studio-composition-resolver.js';
import {preloadCompositionAssets} from '../dist/studio-composer.js';
import {queryForFamily} from '../dist/studio-tags.js';
import {COMPOSITION_FIT_VERSION} from '../dist/studio-composition-fit.js';

const catalog=getTrustedModularCatalog();
assert.equal(catalog.recipes.length,8,'the trusted catalog exposes seven single-component adaptations and one explicit multi-component recipe');
assert.equal(catalog.recipes.filter(recipe=>recipe.assetIds.length===1).length,7,'the production inventory has seven component-to-base adaptations');
assert.equal(catalog.recipes.filter(recipe=>recipe.assetIds.length>1).length,1,'the Human headset-and-glasses composition is an explicit recipe, not an inferred cross-product');
const headphoneAsset=catalog.assets.find(asset=>asset.id==='pilot-headphones-v1');
assert(headphoneAsset,'the common dynamic headset kit is registered once in the trusted catalog');
const humanHeadphoneBaseIds=[
  'candidate-humans-20261005::classic',
  'candidate-humans-20261005::wave',
  'human-bun-yellow::fixed',
  'human-blond-glasses::fixed'
];
const humanHeadphoneRecipes=catalog.recipes.filter(recipe=>recipe.assetIds.length===1&&recipe.assetIds[0]===headphoneAsset.id&&humanHeadphoneBaseIds.includes(recipe.baseId));
assert.equal(humanHeadphoneRecipes.length,4,'the same headset kit has an explicit adaptation for each of the three Human looks and the chestnut wave state');
assert.deepEqual(new Set(humanHeadphoneRecipes.map(recipe=>recipe.baseId)),new Set(humanHeadphoneBaseIds),'the four Human recipes cover exactly classic, chestnut wave, bun, and blond-glasses base states');
assert.equal(new Set(humanHeadphoneRecipes.map(recipe=>recipe.assetIds[0])).size,1,'all Human states reuse one registered headset asset ID');
assert.equal(headphoneAsset.src,'./assets/modular/20261006-pilot/pilot-headphones-kit-v4.png','the four Human adaptations use the same source PNG');
assert.equal(headphoneAsset.sha256,'752814b890c50f04d2e2884f5d4c976969bde1667bff18a1e2b6feced4ca7b02','the four Human adaptations use the exact registered source hash');
const templateStates=listTemplateAssetStates();
assert.equal(templateStates.length,22,'the trusted directory describes all 22 registered template states');
assert.equal(templateStates.filter(state=>state.approvalStatus==='approved').length,15,'only the 15 exact frozen default states are marked approved');
assert.equal(templateStates.filter(state=>state.approvalStatus==='pendingScopeMapping').length,7,'the seven additional states remain pending scope mapping');
for(const state of templateStates){
  const resolved=resolveTemplateComposition({character:state.config,artworkId:state.artworkId,recipeId:state.recipeId});
  assert.equal(resolved.availability,'available',`${state.id} resolves through the real template adapter`);
  assert.equal(resolved.renderPlan.width,state.width,`${state.id} catalog width matches its resolved render plan`);
  assert.equal(resolved.renderPlan.height,state.height,`${state.id} catalog height matches its resolved render plan`);
  assert.deepEqual(resolved.renderPlan.layers.map(layer=>layer.id),state.layerIds,`${state.id} catalog layers match the resolved recipe`);
  assert.deepEqual(resolved.composition.assetRefs,state.assetRefs,`${state.id} catalog refs match the resolved trusted assets`);
}
const museWaveState=templateStates.find(state=>state.artworkId==='candidate-meta-muse-20261005'&&state.recipeId==='wave');
assert.deepEqual([museWaveState.width,museWaveState.height],[1254,1254],'Meta Muse wave uses its registered state dimensions rather than the classic frame dimensions');
const approvedDotsState=templateStates.find(state=>state.artworkId==='candidate-dots-20261005'&&state.recipeId==='headphones-classic');
assert.equal(approvedDotsState.approvalStatus,'approved');
assert.equal(getTemplateApproval('candidate-dots-20261005',{recipeId:'headphones-classic',sha256:'0'.repeat(64)}).status,'hashMismatch','a changed source hash loses the exact template approval');
assert.equal(getTemplateApproval('qa-unknown-look').status,'notApproved','unknown templates have no inherited approval');
const approvedDotsRender=resolveTemplateComposition({character:approvedDotsState.config,artworkId:approvedDotsState.artworkId,recipeId:approvedDotsState.recipeId});
assert.equal(approvedDotsRender.availability,'available','a drawable template remains available for manual use independently of its random approval gate');
assert.equal(assessTemplateCandidateApproval(approvedDotsState,approvedDotsRender.composition).eligible,true,'the current exact frozen hash remains eligible for default candidates');
const updatedDotsComposition=structuredClone(approvedDotsRender.composition);
updatedDotsComposition.assetRefs[0].sha256='0'.repeat(64);
const updatedDotsApproval=assessTemplateCandidateApproval(approvedDotsState,updatedDotsComposition);
assert.equal(updatedDotsApproval.eligible,false,'a changed trusted template hash cannot inherit the frozen default-candidate approval');
assert.equal(updatedDotsApproval.approval.status,'hashMismatch');
const lockedUpdatedDotsApproval=assessTemplateCandidateApproval(approvedDotsState,updatedDotsComposition,{artworkId:approvedDotsState.artworkId,recipeId:approvedDotsState.recipeId,assetIds:[updatedDotsComposition.assetRefs[0].id]});
assert.match(lockedUpdatedDotsApproval.reason,/锁定.*批准校验.*hashMismatch/,'a locked stale template reports the approval mismatch instead of silently switching');
for(const recipe of catalog.recipes){
  const base=catalog.baseStates.find(item=>item.id===recipe.baseId);
  const resolution=resolveModularComposition({character:base.config,baseId:recipe.baseId,recipeId:recipe.id,assetIds:recipe.assetIds,poseId:recipe.poseId});
  assert.equal(resolution.availability,'available',`${recipe.id} passes engineering constraints`);
  assert.equal(resolution.composition.kind,'modular');
  assert.equal(resolution.approvalStatus,'pending','a generated adaptation without an exact art record remains pending');
  assert.equal(resolution.releaseStatus,'internal');
  assert.equal(resolution.recommendation,false,'pending pilots are excluded from default random');
  assert.equal(resolution.stageMetadata.length,resolution.composition.assetRefs.length,'every base and component ref has a trusted preload entry');
  assert.equal(resolution.renderPlan.kind,'modular');
  const fitRefs=resolution.composition.inputs.fitRefs;
  assert.equal(fitRefs.length,recipe.assetIds.length,'each dynamic module contributes one fit reference');
  assert.deepEqual(fitRefs.map(ref=>ref.assetId),[...recipe.assetIds].sort(),'project fit references are stable and sorted by asset ID');
  for(const module of resolution.renderPlan.modules){
    const ref=fitRefs.find(item=>item.assetId===module.id);
    assert(ref,'each dynamic render module has a project fit reference');
    assert.equal(module.fitFingerprint,ref.fitFingerprint,'render modules retain their own fit fingerprint');
    assert.equal(module.fitProfileRef.fingerprint,ref.fitProfileRef.fingerprint,'each module remains bound to the exact shared geometry profile');
    assert(module.parts.every(part=>part.transform&&part.sourceRect),'dynamic fit output carries authoritative transforms and local source rectangles');
  }
  assert.equal(resolution.composition.inputs.fitVersion,COMPOSITION_FIT_VERSION,'the aggregate project records the shared fit solver version');
  assert.match(resolution.composition.inputs.fitFingerprint,/^[a-f0-9]{16}$/,'the project includes an aggregate fingerprint for the complete fit set');

  const project=setModularProject(makeProject(createLookCharacter(base.artworkId),{mode:'composer',artworkId:base.artworkId}),recipe.id);
  assert.equal(project.format,'dot-studio-project');assert.equal(project.version,2);assert.equal(project.character.version,10);
  assert.equal(project.creation.composition.kind,'modular');
  assert.deepEqual(parseProject(exportProject(project)),project,'modular project IDs and fingerprints round-trip through v2');
  assert.equal(resolveProjectComposition(project).availability,'available');
  assert.equal(resolveCreation(project).compositionResolution.approvalStatus,'pending');

  assert.throws(()=>setCharacterValue(project.character,'colors.background','#E4E8F1'),/背景|透明/,'background metadata has no setter');
  assert.deepEqual(resolveProjectComposition(project).renderPlan.background,{mode:'transparent'},'modular output ignores inactive background metadata');
  const unsupported=setProjectCharacter(project,setCharacterValue(project.character,'colors.body','#9944CC'));
  assert.equal(unsupported.creation.composition,null,'an unsupported visual edit saves as Prompt-only without fabricated refs');
  assert.equal(resolveProjectComposition(unsupported).availability,'prompt-only');

  const forged=structuredClone(project);
  forged.creation.composition.assetRefs[0].sha256='0'.repeat(64);
  assert.throws(()=>parseProject(forged),/可信|不一致|哈希/,'an imported project cannot replace trusted asset hashes');
}
const roundTransform=value=>Number(value.toFixed(6));
const transformPoint=(matrix,point)=>({x:matrix.a*point.x+matrix.c*point.y+matrix.e,y:matrix.b*point.x+matrix.d*point.y+matrix.f});
const humanHeadphoneMetrics=[];
for(const recipe of humanHeadphoneRecipes){
  const base=catalog.baseStates.find(item=>item.id===recipe.baseId);
  const profile=catalog.baseGeometryProfiles.find(item=>item.id===recipe.fitProfileRef?.id);
  assert(base&&profile,`${recipe.id} must resolve its explicit Human base and geometry profile`);
  assert.equal(profile.baseId,recipe.baseId,`${recipe.id} profile remains bound to its exact Human state`);
  assert.equal(recipe.fitProfileRef.version,profile.version,`${recipe.id} records its geometry profile version`);
  assert.equal(recipe.fitProfileRef.fingerprint,getBaseGeometryProfileFingerprint(profile),`${recipe.id} records its geometry profile fingerprint`);
  const resolution=resolveModularComposition({character:base.config,baseId:recipe.baseId,recipeId:recipe.id,assetIds:recipe.assetIds,poseId:recipe.poseId});
  assert.equal(resolution.availability,'available',`${recipe.id} uses the common headset kit through a resolved fit`);
  const module=resolution.renderPlan.modules.find(item=>item.id===headphoneAsset.id);
  assert(module,`${recipe.id} keeps the common headset in its resolved render plan`);
  assert.equal(module.fitProfileRef.id,profile.id,`${recipe.id} render module uses the exact per-state profile`);
  assert.equal(module.fitProfileRef.version,profile.version,`${recipe.id} render module retains the profile version`);
  assert.equal(module.fitProfileRef.fingerprint,recipe.fitProfileRef.fingerprint,`${recipe.id} render module retains the profile fingerprint`);
  assert.deepEqual(module.parts.map(part=>part.id),['band','leftCup','rightCup'],`${recipe.id} resolves all three headset parts independently`);

  const resolvedParts=new Map(module.parts.map(part=>[part.id,part]));
  const sourceParts=new Map(headphoneAsset.sourceParts.parts.map(part=>[part.id,part]));
  const sideMetrics={};
  for(const side of ['left','right']){
    const id=side==='left'?'leftCup':'rightCup';
    const part=resolvedParts.get(id),source=sourceParts.get(id),mount=profile.landmarks.earMounts[side];
    const transform=part.transform;
    const scale=Math.hypot(transform.a*profile.canvas.width,transform.b*profile.canvas.height);
    const visibleWidthRatio=source.visibleRect.width*scale/(profile.landmarks.headBounds.width*profile.canvas.width);
    const visibleHeight=source.visibleRect.height*scale;
    const expectedScale=mount.cupSeat.height*profile.canvas.height/source.visibleRect.height;
    const contact=transformPoint(transform,{x:source.anchors.contactAnchor.x*source.sourceRect.width,y:source.anchors.contactAnchor.y*source.sourceRect.height});
    assert(Math.abs(scale-expectedScale)<1e-7,`${recipe.id} ${side} cup scale must derive from its own alpha height and seat`);
    assert(visibleWidthRatio>=mount.cupSeat.minHeadWidthRatio&&visibleWidthRatio<=mount.cupSeat.maxHeadWidthRatio,`${recipe.id} ${side} visible cup/head ratio stays in its declared range`);
    assert(Math.abs(visibleHeight-mount.cupSeat.height*profile.canvas.height)<1e-6,`${recipe.id} ${side} visible cup height matches its own profile seat`);
    assert(Math.hypot(contact.x*profile.canvas.width-mount.x*profile.canvas.width,contact.y*profile.canvas.height-mount.y*profile.canvas.height)<1e-5,`${recipe.id} ${side} contact transform lands on this state's ear mount`);
    sideMetrics[side]={visibleWidthRatio:roundTransform(visibleWidthRatio),scale:roundTransform(scale),transform:Object.fromEntries(['a','b','c','d','e','f'].map(key=>[key,roundTransform(transform[key])]))};
  }

  const project=setModularProject(makeProject(base.config,{mode:'composer',artworkId:base.artworkId}),recipe.id);
  const roundTripped=parseProject(exportProject(project));
  assert.deepEqual(roundTripped,project,`${recipe.id} exact base and fit references round-trip through v2 JSON`);
  assert.equal(roundTripped.creation.artworkId,base.artworkId,`${recipe.id} keeps its own look identity after v2 restoration`);
  assert.equal(roundTripped.creation.composition.inputs.baseId,recipe.baseId,`${recipe.id} does not restore onto another Human state`);
  assert.equal(roundTripped.creation.composition.inputs.fitRefs[0].fitProfileRef.id,profile.id,`${recipe.id} restores the matching state-specific geometry profile`);
  assert.equal(resolveProjectComposition(roundTripped).composition.resolvedFingerprint,project.creation.composition.resolvedFingerprint,`${recipe.id} re-resolves to the same state-specific composition`);

  humanHeadphoneMetrics.push({baseId:recipe.baseId,poseId:recipe.poseId,profileId:profile.id,left:sideMetrics.left,right:sideMetrics.right});
}
assert.equal(new Set(humanHeadphoneMetrics.map(item=>JSON.stringify([item.left,item.right]))).size,4,'each of the four Human base/pose states gets distinct left/right ratios and transforms from geometry rather than one fixed headset placement');

for(const healthyRecipe of humanHeadphoneRecipes){
  const expectedProfileRef=healthyRecipe.fitProfileRef;
  const resolveAgainst=badCatalog=>{
    const base=badCatalog.baseStates.find(item=>item.id===healthyRecipe.baseId);
    return resolveModularComposition({character:base.config,baseId:healthyRecipe.baseId,recipeId:healthyRecipe.id,assetIds:healthyRecipe.assetIds,poseId:healthyRecipe.poseId},{catalog:badCatalog});
  };
  const missingProfile=structuredClone(catalog);
  missingProfile.baseGeometryProfiles=missingProfile.baseGeometryProfiles.filter(profile=>profile.id!==expectedProfileRef.id);
  const missingResolution=resolveAgainst(missingProfile);
  assert.equal(missingResolution.availability,'unsupported',`${healthyRecipe.id} fails closed when its exact profile is absent`);
  assert.match(missingResolution.reason,/profile|几何/i,`${healthyRecipe.id} reports a geometry-profile conflict when its profile is absent`);

  const expiredProfile=structuredClone(catalog);
  const expired=expiredProfile.baseGeometryProfiles.find(profile=>profile.id===expectedProfileRef.id);
  expired.version='99.0.0';
  const expiredResolution=resolveAgainst(expiredProfile);
  assert.equal(expiredResolution.availability,'unsupported',`${healthyRecipe.id} fails closed when its profile version changes`);
  assert.match(expiredResolution.reason,/profile|几何/i,`${healthyRecipe.id} explains an expired geometry-profile reference`);

  const staleFingerprintProfile=structuredClone(catalog);
  const stale=staleFingerprintProfile.baseGeometryProfiles.find(profile=>profile.id===expectedProfileRef.id);
  stale.landmarks.earMounts.left.x+=.0001;
  const staleFingerprintResolution=resolveAgainst(staleFingerprintProfile);
  assert.equal(staleFingerprintResolution.availability,'unsupported',`${healthyRecipe.id} fails closed when geometry changes without refreshing its fingerprint`);
  assert.match(staleFingerprintResolution.reason,/指纹|profile|几何/i,`${healthyRecipe.id} explains a stale geometry fingerprint`);
}
const combinedRecipe=catalog.recipes.find(item=>item.assetIds.length===2);
assert(combinedRecipe,'the human headset-and-glasses combination is a specifically registered recipe');
const combinedBase=catalog.baseStates.find(item=>item.id===combinedRecipe.baseId);
const combinedResolution=resolveModularComposition({character:combinedBase.config,baseId:combinedRecipe.baseId,recipeId:combinedRecipe.id,assetIds:combinedRecipe.assetIds,poseId:combinedRecipe.poseId});
assert.equal(combinedResolution.availability,'available','all dynamic components resolve together against the shared Human profile');
assert.deepEqual(combinedResolution.renderPlan.modules.map(item=>item.id),['pilot-headphones-v1','pilot-round-glasses-v1'],'the explicit recipe retains both selected modules');
assert.deepEqual(combinedResolution.composition.inputs.fitRefs.map(item=>item.assetId),['pilot-headphones-v1','pilot-round-glasses-v1'],'combined project references keep one exact fit per dynamic asset in stable ID order');
assert.equal(combinedResolution.composition.inputs.fitFingerprint,compositionFingerprint(combinedResolution.composition.inputs.fitRefs),'aggregate fit fingerprint covers the complete sorted fit set');
assert.notEqual(combinedResolution.renderPlan.modules[0].fitFingerprint,combinedResolution.renderPlan.modules[1].fitFingerprint,'each component has its own fit fingerprint');
assert.deepEqual(combinedResolution.renderPlan.modules.map(item=>item.z),[19,20],'explicit module order is preserved independently from inner part order');
const conflictedDefinition=structuredClone(catalog);
conflictedDefinition.assets=conflictedDefinition.assets.map(item=>item.id==='pilot-headphones-v1'?{...item,fitPolicy:{...item.fitPolicy,faceClearancePx:24}}:item);
const conflictedCatalog=createModularCatalog(conflictedDefinition);
const conflictedCombination=resolveModularComposition({character:combinedBase.config,baseId:combinedRecipe.baseId,recipeId:combinedRecipe.id,assetIds:combinedRecipe.assetIds,poseId:combinedRecipe.poseId},{catalog:conflictedCatalog});
assert.equal(conflictedCombination.availability,'unsupported','a hard geometry conflict rejects the whole multi-component recipe');
assert.equal(conflictedCombination.composition,null,'a failed fit never returns a partial composition');
assert.match(conflictedCombination.reason,/模块 pilot-headphones-v1：.*侵入五官保护区/,'the rejection names the component and failed geometric constraint');
const lockedConflict=getResolvedTemplateCandidates({catalog:conflictedCatalog,locks:{recipeId:combinedRecipe.id,assetIds:[...combinedRecipe.assetIds]}});
assert.equal(lockedConflict.candidates.length,0,'a locked conflict never substitutes another template or drops one selected component');
assert.match(lockedConflict.reason,/锁定.*模块候选不可用/);

const base=catalog.baseStates.find(item=>item.id==='candidate-dots-20261005::bare-classic');
const asset={...structuredClone(catalog.assets.find(item=>item.id==='pilot-headphones-v1')),id:'qa-static-module',version:'1.0.0',src:'./assets/modular/qa/fixture.png',sha256:'a'.repeat(64),width:1254,height:1254,category:'qa-fixture',slots:['qa-headwear'],baseIds:[base.id],layoutIds:[base.layoutId],styles:[base.styleId],poses:[base.poseId],anchors:{center:{x:.5,y:.5}},z:40,occlusion:{mode:'above-base',covers:['base']},artApproval:{status:'pending',record:null,adaptations:[]}};
delete asset.fitPolicy;delete asset.sourceParts;
const recipe={id:'qa-static-module-on-dots-bare',version:'1.0.0',baseId:base.id,assetIds:[asset.id],poseId:base.poseId,view:'front',layoutId:base.layoutId,styleId:base.styleId,placements:[{assetId:asset.id,sourceAnchor:'center',targetAnchor:{x:.5,y:.5},width:.2,height:.2}],layerOrder:[asset.id],highRiskGroups:[],gripId:null,defaultEligible:false};
function catalogFixture({assetPatch={},recipePatch={},extraAssets=[],grips=[]}={}){
  const nextAsset={...structuredClone(asset),...assetPatch};
  const nextRecipe={...structuredClone(recipe),...recipePatch};
  return createModularCatalog({assets:[nextAsset,...structuredClone(extraAssets)],recipes:[nextRecipe],grips});
}
function assertCatalogRejects(options,pattern,message){
  assert.throws(()=>catalogFixture(options),pattern,message);
}

// Hard compatibility is enforced when the trusted catalog is built, even when
// the caller marks a recipe as recommended for the default pool.
const missingField={...structuredClone(asset)};delete missingField.anchors;
assert.throws(()=>createModularCatalog({assets:[missingField],recipes:[recipe],grips:[]}),/缺少必需字段/,'a record missing its anchor contract is not registrable');
for(const [field,value,label] of [
  ['baseIds',['qa-unsupported-base'],'base'],
  ['layoutIds',['qa-unsupported-layout'],'layout'],
  ['styles',['qa-unsupported-style'],'style'],
  ['poses',['qa-unsupported-pose'],'pose']
]) assertCatalogRejects({assetPatch:{[field]:value},recipePatch:{defaultEligible:true}},/未声明支持|兼容|匹配/,`${label} incompatibility remains hard even when a recipe is recommended`);
assertCatalogRejects({recipePatch:{baseId:'qa-unsupported-base'}},/可信完整 PNG 基底/,'recipes cannot invent a base ID');
assertCatalogRejects({recipePatch:{poseId:'qa-unsupported-pose'}},/姿态不匹配/,'recipes cannot invent a pose');
assertCatalogRejects({recipePatch:{layoutId:'qa-unsupported-layout'}},/布局|不匹配/,'recipes cannot override the registered layout');
assertCatalogRejects({recipePatch:{styleId:'qa-unsupported-style'}},/风格|不匹配/,'recipes cannot override the registered style');
assertCatalogRejects({assetPatch:{dependencies:['qa-required-module']}},/缺少依赖/,'undeclared dependency modules are rejected');
assertCatalogRejects({assetPatch:{excludes:[asset.id]}},/互斥/,'an exclusion cannot be selected with its module');
assertCatalogRejects({assetPatch:{occlusion:{mode:'below-base',covers:['base']}}},/图层|基底上方/,'unsafe occlusion ordering is rejected');
assertCatalogRejects({recipePatch:{placements:[{...recipe.placements[0],sourceAnchor:'missing-anchor'}]}},/锚点/,'unregistered source anchors are rejected');
assertCatalogRejects({recipePatch:{placements:[{...recipe.placements[0],targetAnchor:{x:1.2,y:.5}}]}},/锚点/,'out-of-range target anchors are rejected');
assertCatalogRejects({assetPatch:{grip:{required:true,gripId:'qa-grip'}}},/抓握|接触/,'required grip is blocked until a rendered contact recipe exists');
assert.throws(()=>catalogFixture({grips:[{id:'qa-grip'}]}),/已渲染|抓握 ID/,'an ID-only grip record cannot claim a rendered hand/prop contact');
const forgedGripCatalog=structuredClone(catalogFixture());
forgedGripCatalog.assets=forgedGripCatalog.assets.map(item=>item.id===asset.id?{...item,grip:{required:true,gripId:'qa-grip'}}:item);
forgedGripCatalog.recipes=forgedGripCatalog.recipes.map(item=>item.id===recipe.id?{...item,gripId:'qa-grip'}:item);
forgedGripCatalog.grips=[{id:'qa-grip'}];
const forgedGripResolution=resolveModularComposition({character:base.config,baseId:recipe.baseId,recipeId:recipe.id,assetIds:recipe.assetIds,poseId:recipe.poseId},{catalog:forgedGripCatalog});
assert.equal(forgedGripResolution.availability,'unsupported','resolver rejects an injected ID-only grip catalog without drawable contact assets');
assertCatalogRejects({recipePatch:{defaultEligible:true}},/精确适配美术批准记录/,'pending art and release states cannot be promoted by a recommendation flag');
const duplicateSlot={...structuredClone(asset),id:'qa-second-headphone',z:asset.z+1};
const duplicateSlotRecipe={...structuredClone(recipe),assetIds:[asset.id,duplicateSlot.id],placements:[...structuredClone(recipe.placements),{...structuredClone(recipe.placements[0]),assetId:duplicateSlot.id}],layerOrder:[asset.id,duplicateSlot.id]};
assert.throws(()=>createModularCatalog({assets:[asset,duplicateSlot],recipes:[duplicateSlotRecipe],grips:[]}),/槽位冲突/,'two modules cannot occupy the same hard slot');
const incompatible=resolveModularComposition({character:base.config,baseId:recipe.baseId,recipeId:recipe.id,assetIds:['qa-unregistered-asset'],poseId:recipe.poseId});
assert.equal(incompatible.availability,'unsupported','unregistered module IDs never produce a renderable result');

// Default random candidates must remain complete and respect exact locks; an
// unavailable locked item empties the pool instead of being silently replaced.
const candidates=getResolvedTemplateCandidates({seed:'resolver-lock-smoke'});
assert.equal(candidates.candidates.length,15,'the pending pilot adaptations do not expand the production default pool');
assert(candidates.candidates.every(item=>item.composition&&item.resolution.availability==='available'));
assert(candidates.rejected.filter(item=>item.id.startsWith('modular:')).length===8,'each pending single or multi-component pilot recipe is excluded with an explicit reason');
const repeatedCandidates=getResolvedTemplateCandidates({seed:'resolver-lock-smoke'});
assert.deepEqual(repeatedCandidates.candidates.map(item=>[item.id,item.composition.resolvedFingerprint]),candidates.candidates.map(item=>[item.id,item.composition.resolvedFingerprint]),'the same resolver input produces a stable non-null candidate set');
const exactLock=getResolvedTemplateCandidates({locks:{assetIds:['artwork/candidate-dots-20261005/headphones']}});
assert(exactLock.candidates.length>0);assert(exactLock.candidates.every(item=>item.composition.assetRefs.some(ref=>ref.id==='artwork/candidate-dots-20261005/headphones')),'the candidate interface returns only results matching a locked asset');
const impossibleLock=getResolvedTemplateCandidates({locks:{assetIds:[catalog.assets[0].id]}});
assert.equal(impossibleLock.candidates.length,0,'an unavailable modular asset lock cannot be replaced by a different template');
assert.match(impossibleLock.reason,/锁定素材/);

const record={
  approvalId:'qa-exact-adaptation-approval',baseId:recipe.baseId,poseId:recipe.poseId,view:recipe.view,
  baseAssetRefs:structuredClone(base.assetRefs),
  assetId:asset.id,assetVersion:asset.version,assetSha256:asset.sha256,recipeId:recipe.id,recipeVersion:recipe.version,
  recipeFingerprint:getModularRecipeFingerprint(recipe),
  coordinationChecklist:{proportion:'pass',contact:'pass',occlusion:'pass',materialLighting:'pass',palette:'pass'},
  evidence:{sourceManifest:'design/acceptance/qa-modular-approval/source-manifest.json',sourceId:`sha256:${'1'.repeat(64)}`,pages:[{path:'design/acceptance/qa-modular-approval/pages/fit.png',sha256:'2'.repeat(64),viewport:{width:1440,height:900}}]}
};
const approvedAsset={...asset,releaseStatus:'approved',artApproval:{status:'approved',record:'design/acceptance/manual-module-art-approval.json',adaptations:[record]}};
const approvedCatalog=createModularCatalog({assets:[approvedAsset],recipes:[{...recipe,defaultEligible:true}],grips:[]});
const exactApproval=getModularRecipeApproval(approvedCatalog.recipes[0],approvedCatalog);
assert.equal(exactApproval.status,'approved');assert.deepEqual(exactApproval.pendingAssetIds,[]);assert.deepEqual(exactApproval.approvalIds,[{assetId:asset.id,approvalId:record.approvalId}]);
const previousTrustedCatalog=getTrustedModularCatalog();
try{
  setTrustedModularCatalog({assets:[approvedAsset],recipes:[{...recipe,defaultEligible:true}],grips:[]});
  assert.equal(getModularRecipeApproval(getTrustedModularCatalog().recipes[0]).status,'approved','the default approval helper resolves both trusted assets and base states from the active code-owned catalog');
}finally{setTrustedModularCatalog(previousTrustedCatalog);}
const evidenceMissingAsset={...approvedAsset,artApproval:{...approvedAsset.artApproval,adaptations:[{...record,evidence:{...record.evidence,pages:[]}}]}};
assert.throws(()=>createModularCatalog({assets:[evidenceMissingAsset],recipes:[{...recipe,defaultEligible:false}],grips:[]}),/冻结证据/,'an approval without a source manifest and concrete page evidence is invalid');
const checklistMissingAsset={...approvedAsset,artApproval:{...approvedAsset.artApproval,adaptations:[Object.fromEntries(Object.entries(record).filter(([key])=>key!=='coordinationChecklist'))]}};
assert.throws(()=>createModularCatalog({assets:[checklistMissingAsset],recipes:[{...recipe,defaultEligible:false}],grips:[]}),/批准记录字段无效/,'an adaptation without an explicit five-item coordination checklist is not registrable as approved');
for(const [check,status] of [['proportion','issue'],['contact','unreviewed'],['occlusion','issue'],['materialLighting','unreviewed'],['palette','issue']]){
  const checklist={...record.coordinationChecklist,[check]:status};
  const assetWithOpenCheck={...approvedAsset,artApproval:{...approvedAsset.artApproval,adaptations:[{...record,coordinationChecklist:checklist}]}};
  const catalogWithOpenCheck=createModularCatalog({assets:[assetWithOpenCheck],recipes:[{...recipe,defaultEligible:false}],grips:[]});
  const approval=getModularRecipeApproval(catalogWithOpenCheck.recipes[0],catalogWithOpenCheck);
  assert.equal(approval.status,'pending',`${check}:${status} remains pending despite asset-level approval`);
  const resolution=resolveModularComposition({character:base.config,baseId:recipe.baseId,recipeId:recipe.id,assetIds:recipe.assetIds,poseId:recipe.poseId},{catalog:catalogWithOpenCheck});
  assert.equal(resolution.availability,'available',`${check}:${status} does not falsify engineering renderability`);
  assert.equal(resolution.approvalStatus,'pending',`${check}:${status} remains separate from engineering availability`);
  const blocked=getResolvedTemplateCandidates({catalog:catalogWithOpenCheck,locks:{recipeId:recipe.id}});
  assert.equal(blocked.candidates.length,0,`${check}:${status} cannot enter default candidates`);
  assert.match(blocked.reason,/锁定配方.*美术批准/);
}
const approvedResolution=resolveModularComposition({character:base.config,baseId:recipe.baseId,recipeId:recipe.id,assetIds:recipe.assetIds,poseId:recipe.poseId},{catalog:approvedCatalog});
assert.equal(approvedResolution.availability,'available');assert.equal(approvedResolution.approvalStatus,'approved');

// The shared candidate API adds an approved, released modular recipe beside
// the existing 15 templates, while keeping tags, home allowlists, locks and
// project restoration bound to the same trusted resolver.
const sourceProject=setProjectCharacter(makeProject(base.config,{mode:'composer',artworkId:base.artworkId}),{...base.config,colors:{...base.config.colors,background:'#AABBCC'}});
const approvedCandidates=getResolvedTemplateCandidates({catalog:approvedCatalog,project:sourceProject,seed:'approved-module-seed'});
assert.equal(approvedCandidates.candidates.length,16,'one exact approved fixture adds exactly one modular candidate to the 15 templates');
const modularCandidate=approvedCandidates.candidates.find(item=>item.composition.kind==='modular');
assert(modularCandidate,'approved modular recipe enters the shared default candidate set');
assert.equal(modularCandidate.project.version,2);assert.equal(modularCandidate.project.character.version,10);
assert.equal(modularCandidate.project.creation.composition.kind,'modular');
assert.equal(modularCandidate.project.character.colors.background,'#AABBCC','random candidates preserve the current project background');
assert.equal(modularCandidate.composition.inputs.backgroundColor,'#AABBCC');
assert.equal(modularCandidate.resolution.availability,'available');assert.equal(modularCandidate.resolution.approvalStatus,'approved');
assert.equal(modularCandidate.resolution.releaseStatus,'approved');
assert.equal(modularCandidate.stageMetadata.length,modularCandidate.composition.assetRefs.length);
assert.equal(resolveProjectComposition(modularCandidate.project,{catalog:approvedCatalog}).composition.resolvedFingerprint,modularCandidate.composition.resolvedFingerprint,'candidate restoration recomputes its composition from the code-owned catalog');
assert.deepEqual(modularCandidate.composition.assetRefs.find(ref=>ref.id===asset.id),{id:asset.id,version:asset.version,sha256:asset.sha256},'the resulting project carries the real approved component ID/version/hash');
const scopedModular=getResolvedTemplateCandidates({
  catalog:approvedCatalog,project:sourceProject,seed:'scoped-module-seed',
  query:{...queryForFamily('dots'),lookIds:[base.artworkId]},
  locks:{artworkId:base.artworkId,recipeId:recipe.id,assetIds:[asset.id]}
});
assert.equal(scopedModular.candidates.length,1,'typed tag query plus the home allowlist and all three lock kinds select the exact module');
assert.equal(scopedModular.candidates[0].id,modularCandidate.id);
const outsideHome=getResolvedTemplateCandidates({catalog:approvedCatalog,query:{...queryForFamily('dots'),lookIds:['candidate-grok-20261005']}});
assert.equal(outsideHome.candidates.length,0,'typed tags and the explicit home allowlist are intersected');
assert.match(outsideHome.reason,/没有可用的形象范围/);
const typedGrokOnly=getResolvedTemplateCandidates({catalog:approvedCatalog,query:queryForFamily('grok')});
assert(typedGrokOnly.candidates.length>0);assert(typedGrokOnly.candidates.every(item=>item.project.character.family==='grok'),'typed family filters keep out unrelated approved modular recipes');
const pendingCatalog=getTrustedModularCatalog();
const pendingLocked=getResolvedTemplateCandidates({catalog:pendingCatalog,locks:{assetIds:[pendingCatalog.assets[0].id]}});
assert.equal(pendingLocked.candidates.length,0,'pending modular assets never get replaced by an unlocked template');
assert.match(pendingLocked.reason,/锁定素材.*美术批准/,'an unavailable locked adaptation explains its approval block');
const noResources={...approvedCatalog,assets:approvedCatalog.assets.map(item=>({...item,engineeringStatus:'missing'}))};
const noResourceCandidates=getResolvedTemplateCandidates({catalog:noResources,locks:{assetIds:[asset.id]}});
assert.equal(noResourceCandidates.candidates.length,0,'modules whose trusted catalog marks resources unavailable cannot enter the default pool');
assert.match(noResourceCandidates.rejected.find(item=>item.id==='modular-catalog').reason,/工程资源不可用/,'resource failures remain visible in rejection reasons');
const approvedButNotDefault=createModularCatalog({assets:[approvedAsset],recipes:[{...recipe,defaultEligible:false}],grips:[]});
const notDefaultCandidates=getResolvedTemplateCandidates({catalog:approvedButNotDefault,locks:{recipeId:recipe.id}});
assert.equal(notDefaultCandidates.candidates.length,0,'art approval alone does not make a recipe default-random eligible');
assert.match(notDefaultCandidates.reason,/锁定配方.*默认成品随机/);
const globallyApprovedAsset={...approvedAsset,artApproval:{status:'approved',record:'design/acceptance/manual-module-art-approval.json',adaptations:[]}};
const noAdaptationCatalog=createModularCatalog({assets:[globallyApprovedAsset],recipes:[{...recipe,defaultEligible:false}],grips:[]});
assert.equal(getModularRecipeApproval(noAdaptationCatalog.recipes[0],noAdaptationCatalog).status,'pending','asset-level approval without an exact adaptation record is insufficient');

const versionChanged=createModularCatalog({
  assets:[{...approvedAsset,version:asset.version==='9.9.9'?'9.9.8':'9.9.9'}],
  recipes:[{...recipe,defaultEligible:false}],grips:[]
});
assert.equal(getModularRecipeApproval(versionChanged.recipes[0],versionChanged).status,'pending','asset version updates do not inherit a prior approval');

const newRecipeVersion=createModularCatalog({
  assets:[approvedAsset],
  recipes:[{...recipe,version:'1.0.1',defaultEligible:false}],grips:[]
});
assert.equal(getModularRecipeApproval(newRecipeVersion.recipes[0],newRecipeVersion).status,'pending','recipe version updates require a new exact approval');

const hashChanged=createModularCatalog({
  assets:[{...approvedAsset,sha256:'0'.repeat(64)}],
  recipes:[{...recipe,defaultEligible:false}],grips:[]
});
assert.equal(getModularRecipeApproval(hashChanged.recipes[0],hashChanged).status,'pending','asset hash updates require a new exact approval');
const hashMismatchCandidates=getResolvedTemplateCandidates({catalog:hashChanged,locks:{assetIds:[asset.id]}});
assert.equal(hashMismatchCandidates.candidates.length,0,'component hash changes that invalidate approval cannot enter the candidate pool');
assert.match(hashMismatchCandidates.reason,/锁定素材.*美术批准/);

const changedBaseHashCatalog=structuredClone(approvedCatalog);
changedBaseHashCatalog.baseStates.find(item=>item.id===recipe.baseId).assetRefs[0].sha256='0'.repeat(64);
assert.equal(getModularRecipeApproval(changedBaseHashCatalog.recipes[0],changedBaseHashCatalog).status,'pending','a changed base PNG hash invalidates an adaptation approval');
const changedBaseHashCandidates=getResolvedTemplateCandidates({catalog:changedBaseHashCatalog,locks:{assetIds:[asset.id]}});
assert.equal(changedBaseHashCandidates.candidates.length,0,'a catalog fixture with stale base refs cannot emit a modular candidate');
assert.match(changedBaseHashCandidates.rejected.find(item=>item.id==='modular-catalog').reason,/基底状态或 geometry profile 与当前已登记模板资产不一致/);
const changedPlacementCatalog=structuredClone(approvedCatalog);
changedPlacementCatalog.recipes[0].placements[0].targetAnchor.x+=.01;
assert.equal(getModularRecipeApproval(changedPlacementCatalog.recipes[0],changedPlacementCatalog).status,'pending','a placement edit invalidates an adaptation approval even if recipe version was not bumped');
const changedPlacementCandidates=getResolvedTemplateCandidates({catalog:changedPlacementCatalog,locks:{recipeId:recipe.id}});
assert.equal(changedPlacementCandidates.candidates.length,0,'a changed placement cannot retain default-random eligibility through a stale approval');
assert.match(changedPlacementCandidates.rejected.find(item=>item.id==='modular-catalog').reason,/精确适配美术批准记录/);

const alternateBase=catalog.baseStates.find(item=>item.id!==recipe.baseId&&item.family===base.family&&item.layoutId===base.layoutId&&item.styleId===base.styleId&&item.poseId===base.poseId);
assert(alternateBase,'the pilot has another registered compatible template state for base-scope testing');
const expandedAsset={...approvedAsset,baseIds:[...approvedAsset.baseIds,alternateBase.id]};
const expandedRecipe={...recipe,id:'qa-alternate-base-recipe',baseId:alternateBase.id,defaultEligible:false};
const expandedBaseCatalog=createModularCatalog({assets:[expandedAsset],recipes:[expandedRecipe],grips:[]});
assert.equal(getModularRecipeApproval(expandedBaseCatalog.recipes[0],expandedBaseCatalog).status,'pending','adding a compatible base does not inherit approval for the original base');

const alternatePose=catalog.baseStates.find(item=>item.id!==recipe.baseId&&item.family===base.family&&item.layoutId===base.layoutId&&item.styleId===base.styleId&&item.poseId!==recipe.poseId);
assert(alternatePose,'the pilot family has another registered pose state for approval-scope testing');
const expandedPoseAsset={...approvedAsset,baseIds:[...approvedAsset.baseIds,alternatePose.id],poses:[...approvedAsset.poses,alternatePose.poseId]};
const expandedPoseRecipe={...recipe,id:'qa-alternate-pose-recipe',baseId:alternatePose.id,poseId:alternatePose.poseId,defaultEligible:false};
const expandedPoseCatalog=createModularCatalog({assets:[expandedPoseAsset],recipes:[expandedPoseRecipe],grips:[]});
assert.equal(getModularRecipeApproval(expandedPoseCatalog.recipes[0],expandedPoseCatalog).status,'pending','adding a compatible pose does not inherit approval for the original pose');

// A catalog ID/hash record is not enough to claim a successful byte preload.
// The shared compositor rejects missing files, mismatched file bytes and
// caller-provided resource paths/hashes before Canvas rendering can begin.
const pilotRecipe=catalog.recipes[0],pilotBase=catalog.baseStates.find(item=>item.id===pilotRecipe.baseId);
const pilotResolution=resolveModularComposition({character:pilotBase.config,baseId:pilotRecipe.baseId,recipeId:pilotRecipe.id,assetIds:pilotRecipe.assetIds,poseId:pilotRecipe.poseId});
const previousFetch=globalThis.fetch,previousCrypto=globalThis.crypto;
try{
  if(!globalThis.crypto?.subtle)Object.defineProperty(globalThis,'crypto',{configurable:true,writable:true,value:webcrypto});
  globalThis.fetch=async()=>({ok:false});
  await assert.rejects(preloadCompositionAssets(pilotResolution),/资源载入失败/,'a missing local file cannot be preloaded for rendering');
  globalThis.fetch=async()=>({ok:true,arrayBuffer:async()=>Uint8Array.from([0,1,2,3]).buffer});
  await assert.rejects(preloadCompositionAssets(pilotResolution),/SHA-256/,'byte-level hash mismatches block rendering');
  const tampered=structuredClone(pilotResolution);tampered.stageMetadata[0].asset.src='./assets/modular/forged.png';
  await assert.rejects(preloadCompositionAssets(tampered),/可信资源目录/,'untrusted resource paths cannot enter the render plan');
}finally{
  globalThis.fetch=previousFetch;
  if(previousCrypto)Object.defineProperty(globalThis,'crypto',{configurable:true,writable:true,value:previousCrypto});
  else delete globalThis.crypto;
}

console.log('Trusted modular resolution, v2 round-trip/null behavior, exact adaptation approvals and approval invalidation passed.');
