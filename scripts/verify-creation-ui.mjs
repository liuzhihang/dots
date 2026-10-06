import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {makeProject,resolveCreation,setCreationMode,setProjectCharacter} from '../dist/studio-creation.js';
import {CREATION_ARTWORKS,getBaselinePoseControls,getBaselinePoseValues,getBuiltInLooks,getCompositionPack} from '../dist/studio-creation-assets.js';
import {COMPOSITION,createLookCharacter,resolveCharacter,setCharacterValue} from '../dist/studio-model.js';
import {getLookDefinition} from '../dist/studio-looks.js';
import {getModularRecipeApproval,getTrustedModularCatalog} from '../dist/studio-composition-catalog.js';
import {resolveModularComposition} from '../dist/studio-composition-resolver.js';

// Exercise the production event helpers with delayed I/O and modal focus semantics.
// No artwork acceptance is inferred from these isolated lifecycle checks.
const source=await readFile(new URL('../dist/studio.js',import.meta.url),'utf8');
const section=(start,end)=>{const a=source.indexOf(start),b=source.indexOf(end,a);assert(a>=0&&b>a);return source.slice(a,b);};
const prepareSource=section('async function preparePreview(', 'async function showExpanded(');
const copySource=section('async function copyText(', 'async function copyAndOpen(');
const recipeSource=section('function selectDotsRecipe(', '\nfunction startLook(');
const controlsSource=section('function renderModularControls(artworkId){', '\nfunction undo(');
const original=new Blob(['immutable original PNG bytes'],{type:'image/png'});
const baseline=makeProject(createLookCharacter('dots-rose-glasses'),{artworkId:'dots-rose-glasses'});
const deferred=()=>{let resolve;const promise=new Promise(r=>{resolve=r;});return {promise,resolve};};
function outputContext(extra={}){
 const context=vm.createContext({project:baseline,previewRevision:1,stageView:'creation',resolveCreation,structuredClone,artworkStatus:'ready',livePreview:null,composer:null,compositionReady:false,filename:()=> 'selected-character',fetch:async()=>({ok:true,blob:async()=>original}),...extra});
 vm.runInContext(prepareSource+'\nglobalThis.prepare=preparePreview;',context);return context;
}
let context=outputContext();
let result=await context.prepare(1600);
assert.equal(result.blob,original,'artwork output must be the original fetched file');
assert.equal(result.name,'dots-rose-glasses-original.png');
const response=deferred();context=outputContext({fetch:()=>response.promise});
let pending=context.prepare(1600);context.previewRevision++;
response.resolve({ok:true,blob:async()=>original});
await assert.rejects(pending,/旧预览导出已取消/,'mode/config changes must reject the old artwork download');
context=outputContext({fetch:async()=>({ok:false})});
await assert.rejects(context.prepare(1600),/下载失败/,'missing artwork cannot fall back to a diagnostic capture');
const promptOnlyBaseline=setProjectCharacter(baseline,{...baseline.character,colors:{...baseline.character.colors,body:'#9944CC'}});
context=outputContext({project:setCreationMode(promptOnlyBaseline,'composer'),composer:{capture:()=>{throw Error('must not run');}},compositionReady:true});
await assert.rejects(context.prepare(1600),/没有可导出的组合结果/,'unsupported composition must never capture diagnostic or stale canvas as a composition');
const frame=deferred();context=outputContext({stageView:'live',livePreview:{capture:()=>frame.promise},previewFailure:''});
pending=context.prepare(1400);context.stageView='creation';frame.resolve(original);
await assert.rejects(pending,/旧预览导出已取消/,'leaving diagnostics while capturing must cancel its result');
context=outputContext({stageView:'live',livePreview:{capture:async()=>original},previewFailure:''});
result=await context.prepare(1400);assert.match(result.name,/-diagnostic\.png$/);assert.match(result.description,/未通过美术验收/);

function clipboardContext({allowFocus=true,open=true}={}){
 const previous={isConnected:true,focus(){document.activeElement=this;}};
 let selected='',copied='',attached='';
 const modal={append(t){attached='modal';t.host='modal';}};
 const body={append(t){attached='body';t.host='body';}};
 const document={activeElement:previous,body,querySelector:()=>open?modal:null,createElement:()=>({style:{},setAttribute(){},focus(){if(allowFocus&&(!open||this.host==='modal'))document.activeElement=this;},select(){if(document.activeElement===this)selected=this.value;},remove(){}}),execCommand(command){assert.equal(command,'copy');copied=selected;return Boolean(copied);}};
 const context=vm.createContext({navigator:{clipboard:{writeText:async()=>{throw Error('permission denied');}}},document});
 vm.runInContext(copySource+'\nglobalThis.copy=copyText;',context);
 return {context,read:()=>({copied,attached,restored:document.activeElement===previous})};
}
let clipboard=clipboardContext();assert.equal(await clipboard.context.copy('exact prompt\nwith line breaks'),true);
assert.deepEqual(clipboard.read(),{copied:'exact prompt\nwith line breaks',attached:'modal',restored:true});
clipboard=clipboardContext({allowFocus:false});assert.equal(await clipboard.context.copy('must not report success'),false);
clipboard=clipboardContext({open:false});assert.equal(await clipboard.context.copy('main page prompt'),true);assert.equal(clipboard.read().attached,'body');

let dotsProject=makeProject(createLookCharacter('candidate-dots-20261005'),{mode:'composer',artworkId:'candidate-dots-20261005'});
let dotsState=dotsProject.character,dotsCommits=0;
let lastRecipeToast='';
const recipeContext=vm.createContext({state:dotsState,project:dotsProject,setCharacterValue,getBaselinePoseValues,toast(message){lastRecipeToast=message;},commit(next){dotsProject=setProjectCharacter(dotsProject,next);dotsState=dotsProject.character;recipeContext.state=dotsState;recipeContext.project=dotsProject;dotsCommits++;}});
vm.runInContext(recipeSource+'\nglobalThis.selectDotsRecipe=selectDotsRecipe;',recipeContext);
const originalNotes='keep notes',originalBackground=dotsState.background,originalEyeColor=dotsState.colors.eyes;
dotsState.notes=originalNotes;recipeContext.state=dotsState;recipeContext.project=dotsProject;
recipeContext.selectDotsRecipe('bare');
assert.equal(dotsState.accessories.head,'none','the bare recipe removes the registered headphone layer');
assert.equal(dotsState.action,'idle','the bare recipe selects its registered idle action');
assert.equal(resolveCreation(dotsProject).availability,'available','selecting the bare recipe enables its real Canvas pack');
assert.equal(dotsState.notes,originalNotes,'recipe changes preserve workbench notes');
assert.equal(dotsState.background,originalBackground,'recipe changes preserve the selected background');
assert.equal(dotsState.colors.eyes,originalEyeColor,'recipe changes preserve other visual intent');
recipeContext.selectDotsRecipe('headphones');
assert.equal(dotsState.accessories.head,'headphones','the headphone recipe selects the matching registered head accessory');
assert.equal(dotsState.action,'listen','the headphone recipe selects the matching registered action');
assert.equal(resolveCreation(dotsProject).availability,'available','selecting the headphone recipe enables its real Canvas pack');
const beforeWink=dotsCommits;
recipeContext.selectBaselinePose('wink');
assert.equal(dotsCommits,beforeWink+1,'a verified full-frame expression commits a new workbench state');
assert.equal(dotsState.expression,'wink','the registered Dots wink selects its exact expression value');
assert.equal(dotsState.accessories.head,'headphones','the Dots wink keeps its required headphone image recipe');
assert.equal(dotsState.action,'listen','the Dots wink retains its headphone listening recipe');
recipeContext.selectDotsRecipe('headphones');
assert.equal(dotsState.expression,'wink','reselecting an already active headphone recipe preserves the supported wink state');
const changedEyes=setCharacterValue(dotsState,'eyes',dotsState.eyes==='capsule'?'softOval':'capsule');
dotsProject=setProjectCharacter(dotsProject,changedEyes);dotsState=dotsProject.character;recipeContext.state=dotsState;recipeContext.project=dotsProject;
recipeContext.selectDotsRecipe('bare');
assert.equal(dotsState.eyes,changedEyes.eyes,'the recipe selection keeps unsupported advanced visual intent');
assert.equal(resolveCreation(dotsProject).availability,'unsupported','unsupported advanced changes continue to block PNG export after recipe selection');
const beforeInvalid=dotsCommits;
recipeContext.project=makeProject(createLookCharacter('candidate-grok-20261005'),{mode:'composer',artworkId:'candidate-grok-20261005'});recipeContext.state=recipeContext.project.character;
recipeContext.selectDotsRecipe('bare');recipeContext.selectDotsRecipe('forged');
assert.equal(dotsCommits,beforeInvalid,'other families and unregistered recipe IDs cannot change the character');

const controlHost={innerHTML:''};
const controlConfig=createLookCharacter('candidate-dots-20261005');
const controlContext=vm.createContext({state:controlConfig,project:makeProject(controlConfig,{mode:'composer',artworkId:'candidate-dots-20261005'}),
  CREATION_ARTWORKS,getBaselinePoseControls,getBuiltInLooks,getLookDefinition,getTrustedModularCatalog,getModularRecipeApproval,resolveModularComposition,resolveCharacter,resolveCreation,COMPOSITION,esc:value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;'),
  $:id=>id==='workbenchControls'?controlHost:null});
vm.runInContext(controlsSource+'\nglobalThis.renderWorkbenchControls=renderWorkbenchControls;',controlContext);
controlContext.renderWorkbenchControls();
assert.match(controlHost.innerHTML,/莓粉圆框 Dots/,'workbench template cards show their short registered look names');
assert.doesNotMatch(controlHost.innerHTML,/蓝色 Dots · 耳机基准候选/,'template cards avoid internal asset names that repeat the role title');
assert.match(controlHost.innerHTML,/data-dot-recipe="headphones"[\s\S]*戴耳机[\s\S]*data-dot-recipe="bare"[\s\S]*不戴耳机/,'the baseline Dots workbench exposes both registered accessory recipes');
assert.match(controlHost.innerHTML,/表情与姿态[\s\S]*data-baseline-pose="classic"[\s\S]*经典[\s\S]*data-baseline-pose="wink"[^>]*aria-pressed="false"[^>]*>眨眼/,'the Dots workbench exposes its verified wink state beside Classic');
assert.doesNotMatch(controlHost.innerHTML,/data-baseline-pose="wink"[^>]*disabled/,'the Dots state control enables the registered PNG only after it is verified');
assert.match(controlHost.innerHTML,/切换表情或问好姿态。当前为静态形象。/,'pose helper explains the static character state in plain language');
assert.match(controlHost.innerHTML,/其他动作和表情可写进 Prompt，在 ChatGPT 继续创作。/,'secondary helper explains how unsupported actions continue in ChatGPT');
assert.match(controlHost.innerHTML,/data-modular-recipe="pilot-headphones-v1-on-candidate-dots-20261005-bare-classic"[\s\S]*耳机 · 经典[\s\S]*待美术确认/,'the modular adapter names the Dots headphone card by its registered pose and keeps its pending approval label');
assert.doesNotMatch(controlHost.innerHTML,/耳机 · 静态适配/,'modular cards distinguish their registered poses instead of repeating a generic label');
assert.doesNotMatch(controlHost.innerHTML,/开放状态|单帧|不会假装/,'workbench helpers avoid technical or adversarial wording');
assert.match(controlHost.innerHTML,/按当前形象(?:及|与)姿态动态贴合，(?:固定视角静态输出|输出固定视角的静态图片)/,'the modular helper describes the geometry-driven fixed-view result accurately');
const humanStateIds=['candidate-humans-20261005::classic','candidate-humans-20261005::wave','human-bun-yellow::fixed','human-blond-glasses::fixed'];
const humanCatalog=getTrustedModularCatalog();
const humanHeadphoneRecipes=humanCatalog.recipes.filter(recipe=>humanStateIds.includes(recipe.baseId)&&recipe.assetIds.includes('pilot-headphones-v1')&&recipe.assetIds.length===1);
assert.deepEqual(humanHeadphoneRecipes.map(recipe=>recipe.baseId).sort(),[...humanStateIds].sort(),'the same headphone kit has one explicit single-component recipe per registered human state');
assert.equal(new Set(humanHeadphoneRecipes.map(recipe=>recipe.fitProfileRef?.id)).size,4,'each human state uses its own registered geometry profile');
const humanClassicRecipe=humanHeadphoneRecipes.find(recipe=>recipe.baseId==='candidate-humans-20261005::classic');
const humanWaveRecipe=humanHeadphoneRecipes.find(recipe=>recipe.baseId==='candidate-humans-20261005::wave');
const humanPairRecipe=humanCatalog.recipes.find(recipe=>recipe.baseId==='candidate-humans-20261005::classic'&&recipe.assetIds.includes('pilot-headphones-v1')&&recipe.assetIds.includes('pilot-round-glasses-v1'));
const modularCard=(markup,recipeId)=>{
 const card=markup.match(new RegExp(`<button[^>]*data-modular-recipe="${recipeId}"[\\s\\S]*?<\\/button>`));
 assert(card,`rendered modular card for ${recipeId}`);return card[0];
};
const unsupportedCatalog=getTrustedModularCatalog();
const dotsHeadphoneRecipe=unsupportedCatalog.recipes.find(recipe=>unsupportedCatalog.baseStates.find(base=>base.id===recipe.baseId)?.artworkId==='candidate-dots-20261005'&&recipe.assetIds.includes('pilot-headphones-v1'));
assert(dotsHeadphoneRecipe,'a registered Dots headphone recipe is available for the rejected-recipe UI fixture');
const unsupportedRecipe=structuredClone(dotsHeadphoneRecipe);
unsupportedRecipe.id+='-unsupported-pose-fixture';unsupportedRecipe.poseId='unregistered-pose-fixture';unsupportedCatalog.recipes.push(unsupportedRecipe);
const unsupportedBase=unsupportedCatalog.baseStates.find(base=>base.id===unsupportedRecipe.baseId);
const unsupportedResolution=resolveModularComposition({character:unsupportedBase.config,baseId:unsupportedRecipe.baseId,recipeId:unsupportedRecipe.id,assetIds:unsupportedRecipe.assetIds,poseId:unsupportedRecipe.poseId},{catalog:unsupportedCatalog});
assert.equal(unsupportedResolution.availability,'unsupported','the UI fixture is rejected by the production resolver before any card is rendered');
const unsupportedHost={innerHTML:''},unsupportedContext=vm.createContext({state:controlConfig,project:makeProject(controlConfig,{mode:'composer',artworkId:'candidate-dots-20261005'}),
 CREATION_ARTWORKS,getBaselinePoseControls,getBuiltInLooks,getLookDefinition,getTrustedModularCatalog:()=>unsupportedCatalog,getModularRecipeApproval,resolveModularComposition,resolveCharacter,resolveCreation,COMPOSITION,esc:value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;'),$:id=>id==='workbenchControls'?unsupportedHost:null});
vm.runInContext(controlsSource+'\nglobalThis.renderWorkbenchControls=renderWorkbenchControls;',unsupportedContext);unsupportedContext.renderWorkbenchControls();
const unsupportedCard=modularCard(unsupportedHost.innerHTML,unsupportedRecipe.id);
assert.match(unsupportedCard,/\sdisabled(?:\s|>)/,'an unrenderable registered candidate is visibly disabled');
assert.match(unsupportedCard,/不可组合：/,'the disabled card explains why the candidate cannot be composed');
const disabledTitle=unsupportedCard.match(/\btitle="([^"]+)"/);
assert(disabledTitle&&disabledTitle[1],'the disabled card exposes its resolver reason as the accessible title');
assert.equal(disabledTitle[1],unsupportedResolution.reason.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;'),'the card reason comes from the production resolver');
assert(unsupportedCard.includes(unsupportedResolution.reason),'the visible card message includes the exact unsupported reason');
const humanMarkupByArtwork=new Map();
for(const artworkId of ['candidate-humans-20261005','human-bun-yellow','human-blond-glasses']){
 const config=createLookCharacter(artworkId);controlContext.state=config;controlContext.project=makeProject(config,{mode:'composer',artworkId});
 controlContext.renderWorkbenchControls();humanMarkupByArtwork.set(artworkId,controlHost.innerHTML);
}
const humanMarkup=humanMarkupByArtwork.get('candidate-humans-20261005');
assert.match(modularCard(humanMarkup,humanClassicRecipe.id),/耳机 · 经典[\s\S]*待美术确认/,'the chestnut human headphone card is identified as Classic');
assert.match(modularCard(humanMarkup,humanWaveRecipe.id),/耳机 · 挥手[\s\S]*待美术确认/,'the chestnut human headphone card is identified as Wave');
assert.match(modularCard(humanMarkup,humanPairRecipe.id),/耳机 \+ 眼镜 · 经典[\s\S]*待美术确认/,'the multi-component card names both components and its Classic state');
for(const baseId of ['human-bun-yellow::fixed','human-blond-glasses::fixed']){
 const recipe=humanHeadphoneRecipes.find(item=>item.baseId===baseId),artworkId=humanCatalog.baseStates.find(item=>item.id===baseId).artworkId;
 const poseLabel=recipe.poseId.includes('wave')?'挥手':'经典';
 assert.match(modularCard(humanMarkupByArtwork.get(artworkId),recipe.id),new RegExp(`耳机 · ${poseLabel}[\\s\\S]*待美术确认`),`${baseId} exposes its own exact human-state headphone card`);
}
assert.match(humanMarkup,/按当前形象(?:及|与)姿态动态贴合，(?:固定视角静态输出|输出固定视角的静态图片)/,'the human cards retain the dynamic-fit explanation');
const grokControlConfig=createLookCharacter('candidate-grok-20261005');
controlContext.state=grokControlConfig;controlContext.project=makeProject(grokControlConfig,{mode:'composer',artworkId:'candidate-grok-20261005'});
controlContext.renderWorkbenchControls();
assert.match(controlHost.innerHTML,/data-baseline-pose="wink"[^>]*aria-pressed="false"[^>]*>眨眼/,'the corrected Grok wink becomes selectable beside Classic');
assert.doesNotMatch(controlHost.innerHTML,/data-baseline-pose="wink"[^>]*disabled/,'the corrected Grok frame is enabled after its hash-checked registration');
const grokRecipeProject=makeProject(grokControlConfig,{mode:'composer',artworkId:'candidate-grok-20261005'});
let grokCommits=0,grokToast='';
const grokRecipeContext=vm.createContext({state:grokRecipeProject.character,project:grokRecipeProject,setCharacterValue,getBaselinePoseValues,toast(message){grokToast=message;},commit(next){grokRecipeContext.state=next;grokCommits++;}});
vm.runInContext(recipeSource+'\nglobalThis.selectBaselinePose=selectBaselinePose;',grokRecipeContext);
grokRecipeContext.selectBaselinePose('wink');
assert.equal(grokCommits,1,'the corrected Grok asset commits its real frame');
assert.equal(grokRecipeContext.state.expression,'wink','the Grok wink applies its registered expression');
assert.equal(grokRecipeContext.state.pose,'auto','the Grok wink preserves its registered default pose');
console.log('Production preview exports reject stale/missing outputs; modal clipboard fallback preserves exact text and rejects failed focus.');
