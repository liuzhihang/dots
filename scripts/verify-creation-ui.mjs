import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {makeProject,resolveCreation,setCreationMode,setProjectCharacter} from '../dist/studio-creation.js';
import {getBuiltInLooks,getCompositionPack} from '../dist/studio-creation-assets.js';
import {COMPOSITION,createLookCharacter,createPreset,resolveCharacter,setCharacterValue} from '../dist/studio-model.js';
import {getLookDefinition} from '../dist/studio-looks.js';

// Exercise the production event helpers with delayed I/O and modal focus semantics.
// No artwork acceptance is inferred from these isolated lifecycle checks.
const source=await readFile(new URL('../dist/studio.js',import.meta.url),'utf8');
const section=(start,end)=>{const a=source.indexOf(start),b=source.indexOf(end,a);assert(a>=0&&b>a);return source.slice(a,b);};
const prepareSource=section('async function preparePreview(', 'async function showExpanded(');
const copySource=section('async function copyText(', 'async function copyAndOpen(');
const recipeSource=section('function selectDotsRecipe(', '\nfunction startLook(');
const controlsSource=section('function renderWorkbenchControls(){', '\nfunction undo(');
const original=new Blob(['immutable original PNG bytes'],{type:'image/png'});
const baseline=makeProject(createPreset('baseline-dots'),{artworkId:'historical-dots-plush-headphones-v2'});
const deferred=()=>{let resolve;const promise=new Promise(r=>{resolve=r;});return {promise,resolve};};
function outputContext(extra={}){
 const context=vm.createContext({project:baseline,previewRevision:1,stageView:'creation',resolveCreation,structuredClone,artworkStatus:'ready',livePreview:null,composer:null,compositionReady:false,filename:()=> 'selected-character',fetch:async()=>({ok:true,blob:async()=>original}),...extra});
 vm.runInContext(prepareSource+'\nglobalThis.prepare=preparePreview;',context);return context;
}
let context=outputContext();
let result=await context.prepare(1600);
assert.equal(result.blob,original,'artwork output must be the original fetched file');
assert.equal(result.name,'historical-dots-plush-headphones-v2-original.png');
const response=deferred();context=outputContext({fetch:()=>response.promise});
let pending=context.prepare(1600);context.previewRevision++;
response.resolve({ok:true,blob:async()=>original});
await assert.rejects(pending,/旧预览导出已取消/,'mode/config changes must reject the old artwork download');
context=outputContext({fetch:async()=>({ok:false})});
await assert.rejects(context.prepare(1600),/下载失败/,'missing artwork cannot fall back to a diagnostic capture');
context=outputContext({project:setCreationMode({...baseline,character:{...baseline.character,colors:{...baseline.character.colors,body:'#9944CC'}}},'composer'),composer:{capture:()=>{throw Error('must not run');}},compositionReady:true});
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
const recipeContext=vm.createContext({state:dotsState,project:dotsProject,setCharacterValue,commit(next){dotsProject=setProjectCharacter(dotsProject,next);dotsState=dotsProject.character;recipeContext.state=dotsState;recipeContext.project=dotsProject;dotsCommits++;}});
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
  getBuiltInLooks,getLookDefinition,resolveCharacter,resolveCreation,COMPOSITION,esc:value=>String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;'),
  $:id=>id==='workbenchControls'?controlHost:null});
vm.runInContext(controlsSource+'\nglobalThis.renderWorkbenchControls=renderWorkbenchControls;',controlContext);
controlContext.renderWorkbenchControls();
assert.match(controlHost.innerHTML,/莓粉圆框 Dots/,'workbench template cards show their short registered look names');
assert.doesNotMatch(controlHost.innerHTML,/蓝色 Dots · 耳机基准候选/,'template cards avoid internal asset names that repeat the role title');
assert.match(controlHost.innerHTML,/data-dot-recipe="headphones"[\s\S]*戴耳机[\s\S]*data-dot-recipe="bare"[\s\S]*不戴耳机/,'the baseline Dots workbench exposes both registered accessory recipes');
console.log('Production preview exports reject stale/missing outputs; modal clipboard fallback preserves exact text and rejects failed focus.');
