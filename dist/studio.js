import {makeProject,parseProject,exportProject,setProjectCharacter,setCreationMode,resolveCreation,buildCreationPrompt} from './studio-creation.js?v=62';
import {createHomePortal} from './studio-home.js?v=62';
import {createFullscreenRandomizer} from './studio-fullscreen-random.js?v=62';
import {CREATION_ARTWORKS,getFamilyArtwork,getCompositionPack,getCreationArtwork,getBuiltInLooks} from './studio-creation-assets.js?v=62';
import {LayeredComposer} from './studio-composer.js?v=62';
import {RecipeMachine} from './studio-random.js?v=62';
import {INSPIRATIONS,inspirationCharacter} from './studio-inspiration.js?v=62';
import {Shared2DPreview,schematicSupport} from './shared-2d.js?v=62';
import {getArtSample} from './studio-art.js?v=62';
import {BUILT_IN_LOOKS,getLookDefinition} from './studio-looks.js?v=62';
import {PRESETS,familyPresets,STYLE_SOURCES,REFERENCE_INFO} from './studio-catalog.js?v=62';
import {CharacterPreview,characterThumbnail} from './live-runtime.js?v=62';
import {pickerIllustration} from './studio-pickers.js?v=62';
import {VERSION,FAMILIES,MATERIALS,SHAPES,FAMILY_SHAPES,DOT_CORE_SHAPES,DOT_CORE_EYES,APP_PALETTES,PALETTES,EYES,EXPRESSIONS,BROWS,MOUTHS,ACCESSORIES,ACTIONS,AGENT_ACTIONS,MOTION_STYLES,COMPOSITION,PRESERVE,HAIRS,FACE_SHAPES,OUTFITS,createCharacter,createLookCharacter,createPreset,setCharacterValue,applyPalette,resolveCharacter,validateConfig,randomizeCharacter,exportConfiguration,inheritsReference,sourceLabel,deriveProvenance} from './studio-model.js?v=62';

const isSchematic=document.body.dataset.renderer==='schematic';
const $=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
// Lucide-compatible functional icons; character artwork is raster imagery.
const paths={
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 dice:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7.5 7.5h.01M16.5 7.5h.01M12 12h.01M7.5 16.5h.01M16.5 16.5h.01" stroke-width="3.3"/>',
 lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
 upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 8l5-5 5 5M12 3v12"/>',
 save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
 undo:'<path d="M3 7v6h6M3 13a8 8 0 1 1 2.6 5.9"/>',redo:'<path d="M21 7v6h-6M21 13a8 8 0 1 0-2.6 5.9"/>',reset:'<path d="M3 3v6h6M3 9a9 9 0 1 1-.1 6"/>',
 'image-plus':'<path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M16 3h6M19 0v6M3 16l5-5 5 5 3-3 5 5"/><circle cx="8.5" cy="7.5" r="1.5"/>',
 image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',x:'<path d="m18 6-12 12M6 6l12 12"/>',
 book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
 shuffle:'<path d="m18 14 4 4-4 4M18 2l4 4-4 4M2 18h2.5c6 0 8-12 14-12H22M2 6h2.5c2 0 3.8 1.5 5.5 4M14 14c1.5 2.5 3.1 4 5 4h3"/>',
 sparkles:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4M18 4h4"/>',
 maximize:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
 check:'<path d="m20 6-11 11-5-5"/>',eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
 smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
 glasses:'<circle cx="6" cy="14" r="4"/><circle cx="18" cy="14" r="4"/><path d="M10 14h4M2 14l2-7M22 14l-2-7"/>',
 hat:'<path d="m4 14 3-9 5 2 5-2 3 9M2 15c0 5 20 5 20 0 0-4-20-4-20 0Z"/>',
 neck:'<path d="M7 3h10v8H7zM9 11v10h5l-1-10M17 8l4 10-4 2-3-9"/>',
 wand:'<path d="m4 20 11-11M14 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM21 2v4M19 4h4M4 3v4M2 5h4"/>',
 camera:'<path d="M14 4h-4L8 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4Z"/><circle cx="12" cy="14" r="4"/>',
 cup:'<path d="M18 8h2a3 3 0 1 1 0 6h-2M3 8h15v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4ZM6 2v3M10 2v3M14 2v3"/>',
 jump:'<path d="M4 20h16M12 16V3M7 8l5-5 5 5"/>',hand:'<path d="M8 13V5a2 2 0 0 1 4 0v7M12 12V3a2 2 0 0 1 4 0v9M16 12V6a2 2 0 0 1 4 0v10a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-5-7a2 2 0 0 1 3-2l2 3Z"/>',
 external:'<path d="M15 3h6v6M10 14 21 3M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"/>'
};
const icon=n=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[n]||paths.sparkles}</svg>`;
function icons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon);});}
function art(family,material,action='idle',className='',label=''){
 const sample=getArtSample(family,material,action);
 const desc=esc(label||sample.name+' · 结构诊断缩略图');
 if(stageView!=='live'){const a=getFamilyArtwork(family);return a?`<span class="guide-character ${className}"><img src="${a.src}" alt="${esc(a.name)}"></span>`:`<span class="configuration-placeholder ${className}"><b>${esc(FAMILIES[family].short)}</b><small>形象待制作</small></span>`;}
 if(!sample.src)return `<span class="thumb-shell ${className}"><img data-thumb-preset="${sample.presetId}" alt="${desc}"></span>`;
 const pos=sample.layout==='single'?'center':(sample.index%3*50)+'% '+(Math.floor(sample.index/3)*100/3)+'%';
 const cls=sample.layout==='single'?'hero-image':'action-sample';
 return '<span class="art atelier-art '+cls+' '+className+'" role="img" aria-label="'+desc+'" data-art-src="'+sample.src+'" style="--art-size:'+sample.size+'%;background-image:url('+sample.src+');background-position:'+pos+'"></span>';
}

let sourceFilter='all',reduceMotion=false;
let state=createLookCharacter(getFamilyArtwork('dots').id),activeTab='appearance',activeAccessory='face',stageView=isSchematic?'live':'creation',promptLanguage='zh',toastTimer,modalType='',lastTrigger=null,referenceDraft=null,draftFamily='';
let project=makeProject(state,{mode:'composer'}),previewRevision=0,composer=null,compositionReady=false,compositionKey='',artworkStatus='';
const history=[],future=[],familyDrafts=new Map();let grouping='',previewFailure='',livePreview=null,playing=!matchMedia('(prefers-reduced-motion: reduce)').matches,thumbTimer,renderFrame;let recipeMachine=null,fullscreenRandomizer=null,homePortal=null;
const thumbNodes=new WeakMap();
let storageRecovery='';
for(const key of ['dot-studio-project-v1','dot-studio-v10','dot-studio-v9','dot-studio-v8','dot-studio-v7','dot-studio-v6']){
 try{const saved=sessionStorage.getItem(key);if(!saved)continue;project=parseProject(JSON.parse(saved));state=project.character;if(storageRecovery)storageRecovery='已恢复上一份可读取配置；未读取的原文件保留在本次会话备份中。';break;}
 catch{storageRecovery='保存的配置无法读取，已展示默认角色；原记录保留在本次会话备份中。';try{sessionStorage.setItem('dot-studio-recovery-'+key,sessionStorage.getItem(key));}catch{}}
}
const val=path=>path.split('.').reduce((o,k)=>o?.[k],resolveCharacter(state).config);
function remember(){try{sessionStorage.setItem('dot-studio-project-v1',exportProject(project));sessionStorage.setItem('dot-studio-v10',JSON.stringify(state));}catch{}familyDrafts.set(state.family,structuredClone(project));}
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3600);}
function commit(next,key='',paint=true,origin='edit'){
 if(origin!=='random')recipeMachine?.cancel();
 const clean=next?.format?parseProject(next):setProjectCharacter(project,next);
 if(JSON.stringify(clean)===JSON.stringify(project))return;
 if(!key||grouping!==key){history.push(structuredClone(project));if(history.length>60)history.shift();}
 future.length=0;grouping=key;project=clean;state=project.character;previewRevision++;remember();
 if(paint)render();else{cancelAnimationFrame(renderFrame);renderFrame=requestAnimationFrame(renderResult);}
}
function change(path,value,paint=true){recipeMachine?.cancel();commit(setCharacterValue(state,path,value),paint?'':path,paint);}
function switchFamily(id){if(!FAMILIES[id]||id===state.family)return;familyDrafts.set(state.family,structuredClone(project));const draft=familyDrafts.get(id),base=getFamilyArtwork(id);commit(draft?parseProject(draft):makeProject(base?createLookCharacter(base.id):createCharacter(id),{mode:project.creation.mode==='artwork'?'artwork':'composer',artworkId:base?.id??null}));}
function createWorkbenchLook(artworkId,previous=state){
 const previousLook=getLookDefinition(project.creation.artworkId),previousArtwork=getCreationArtwork(project.creation.artworkId);
 const previousDefaults=new Set([
  previousLook?.name,previousArtwork?.name,
  ...Object.values(FAMILIES).map(item=>item.template),
  ...PRESETS.map(item=>item.name),
  ...BUILT_IN_LOOKS.map(item=>item.name)
 ].filter(Boolean));
 const customName=previous.name&&!previousDefaults.has(previous.name)?previous.name:'';
 const next=createLookCharacter(artworkId);
 next.background=previous.background;next.colors.background=previous.colors.background;next.notes=previous.notes;
 next.reference=structuredClone(previous.reference);next.randomSeed=previous.randomSeed;
 if(customName)next.name=customName;
 return next;
}
function selectDotsRecipe(recipe){
 if(state.family!=='dots'||project.creation.mode!=='composer'||project.creation.artworkId!=='candidate-dots-20261005'||!['bare','headphones'].includes(recipe))return;
 let next=setCharacterValue(state,'accessories.head',recipe==='headphones'?'headphones':'none');
 next=setCharacterValue(next,'action',recipe==='headphones'?'listen':'idle');
 commit(next);
}
function startLook(artworkId){
 const artwork=getCreationArtwork(artworkId);if(!artwork||artwork.status==='retired'||!getBuiltInLooks().some(item=>item.id===artworkId))throw new Error('这张内置形象暂不可用');
 const next=createWorkbenchLook(artworkId,state);
 commit(makeProject(next,{mode:'composer',artworkId}));navigate({page:'workspace'});toast('已载入这张形象；可更换搭配、调整背景或继续写 Prompt。');
}
function startFromCurrentArtwork(){
 const current=resolveCreation(project),id=getBuiltInLooks(state.family).some(item=>item.id===current.artwork?.id)?current.artwork.id:getFamilyArtwork(state.family)?.id;
 if(!id)throw new Error('本组还没有可用的内置搭配');startLook(id);
}
function lookProject(artworkId){
 const artwork=getCreationArtwork(artworkId);if(!artwork||artwork.status==='retired'||!getBuiltInLooks().some(item=>item.id===artworkId))throw new Error('这张内置形象暂不可用');
 const config=setCharacterValue(createLookCharacter(artworkId),'background','transparent');
 return makeProject(config,{mode:'artwork',artworkId});
}
function viewLook(artworkId){
 const artwork=getCreationArtwork(artworkId);if(!artwork)throw new Error('这张内置形象不存在');
 const look=getLookDefinition(artwork.id),name=look?.name||artwork.name,description=look?.description||artwork.description;
 const source=look?.source==='official-recreation'?'依据品牌身份独立再现；不是官方文件。':'人物和动物为原创角色设计，不采用动漫截图像素。';
 showModal('look-detail',name,'内置形象 · 候选形象',`<div class="look-detail-view"><img src="${esc(artwork.src)}" alt="${esc(name)} 透明背景原图"><div><p>${esc(description)}</p><span>尚待真实网页美术验收。</span><details class="look-source-details"><summary>来源说明</summary><p>${source}本图由 ImageGen 生成；下载保留透明原图，工作台导出才合成所选背景。</p></details></div></div><div class="modal-actions"><a class="button outlined" href="${esc(artwork.src)}" download="${esc(artwork.id)}-original.png">${icon('download')} 下载透明原图</a><button class="button outlined" data-look-action="copy" data-look-id="${esc(artwork.id)}">${icon('copy')} 复制 Prompt</button><button class="button primary" data-look-action="start" data-look-id="${esc(artwork.id)}">用这个形象定制</button></div>`);
}
function renderWorkbenchControls(){
 const host=$('workbenchControls');if(!host)return;
 const available=getBuiltInLooks(state.family),active=project.creation.mode==='composer'?project.creation.artworkId:null;
 const templateCards=available.map(item=>{const name=getLookDefinition(item.id)?.name||item.name;return `<button class="look-template ${active===item.id?'selected':''}" data-look-template="${esc(item.id)}" aria-pressed="${active===item.id}" aria-label="选择形象：${esc(name)}"><span class="look-template-image"><img src="${item.src}" alt="" loading="lazy"></span><span class="look-template-name">${esc(name)}</span></button>`;}).join('');
 const resolved=resolveCharacter(state).config,dotsBase=state.family==='dots'&&project.creation.mode==='composer'&&project.creation.artworkId==='candidate-dots-20261005';
 const dotsRecipes=dotsBase?`<section class="background-control dot-recipe-control" aria-labelledby="dotsRecipeTitle"><div class="workbench-control-heading"><div><h2 id="dotsRecipeTitle">Dots 耳机</h2><p>选择对应完整图片；其余未登记外观继续写入 Prompt。</p></div></div><div class="chips"><button class="choice ${resolved.accessories.head==='headphones'&&['idle','listen'].includes(resolved.action)?'selected':''}" data-dot-recipe="headphones" aria-pressed="${resolved.accessories.head==='headphones'&&['idle','listen'].includes(resolved.action)}">戴耳机</button><button class="choice ${resolved.accessories.head==='none'&&resolved.action==='idle'?'selected':''}" data-dot-recipe="bare" aria-pressed="${resolved.accessories.head==='none'&&resolved.action==='idle'}">不戴耳机</button></div></section>`:'';
 const current=resolveCreation(project),oldState=project.creation.mode==='artwork'?`<div class="legacy-artwork-note"><span>正在查看旧项目中的固定形象：${esc(current.artwork?.name||'原图已撤下')}</span><button class="text-button" data-command="start-from-artwork">以此开始搭配</button></div>`:'';
 host.innerHTML=`${oldState}<section class="template-control" aria-labelledby="templateControlTitle"><div class="workbench-control-heading"><div><h2 id="templateControlTitle">选择搭配</h2><p>选好后，预览会立即切换到对应形象。</p></div><span>${available.length} 款</span></div><div class="look-template-grid">${templateCards||'<p class="section-helper">本组形象准备中。</p>'}</div></section>${dotsRecipes}<section class="background-control" aria-labelledby="backgroundControlTitle"><div class="workbench-control-heading"><div><h2 id="backgroundControlTitle">背景</h2><p>背景和透明度会实际更新图片。</p></div></div><div class="chips">${Object.entries(COMPOSITION.background).map(([id,item])=>`<button class="choice ${state.background===id?'selected':''}" data-path="background" data-value="${id}" aria-pressed="${state.background===id}">${esc(item.label)}</button>`).join('')}</div>${state.background==='solid'?`<label class="background-color-control"><span>自定义背景颜色</span><input type="color" data-setting="colors.background" value="${state.colors.background}" aria-label="自定义背景颜色"></label>`:''}</section><p class="look-control-note">更换搭配与背景会更新图片。五官、动作等高级设定用于 Prompt，在 ChatGPT 继续制作。</p>`;
}
function undo(redo=false){recipeMachine?.cancel();const from=redo?future:history,to=redo?history:future;if(!from.length)return;to.push(structuredClone(project));project=from.pop();state=project.character;previewRevision++;grouping='';remember();render();toast(redo?'已重做':'已撤销');}
function chips(path,entries,extra=''){if(path==='expression')return `<div class="expression-grid">${Object.entries(entries).map(([id,v])=>`<button class="choice expression-choice ${val(path)===id?'selected':''}" data-path="expression" data-value="${id}" aria-pressed="${val(path)===id}"><span class="emote-icon emote-${id}" aria-hidden="true"><i></i><i></i></span><span>${v.label}</span></button>`).join('')}</div>`;return `<div class="chips ${extra}">${Object.entries(entries).map(([k,v])=>`<button class="choice ${(!inheritsReference(state,path)&&val(path)===k)?'selected':''}" data-path="${path}" data-value="${k}" aria-pressed="${(!inheritsReference(state,path)&&val(path)===k)}">${esc(v.label||v)}</button>`).join('')}</div>`;}
function field(title,content,note='',id=''){return `<div class="field"${id?` id="${id}"`:''}><div class="field-title">${title}${note?`<small>${note}</small>`:''}</div>${content}</div>`;}
function select(path,label,entries){
 const inherit=inheritsReference(state,path);
 return '<label>'+label+'<select data-setting="'+path+'" aria-label="'+label+'">'+
  (inherit?'<option value="" selected disabled>沿用参考图</option>':'')+
  Object.entries(entries).map(([k,v])=>'<option value="'+k+'" '+(!inherit&&val(path)===k?'selected':'')+'>'+esc(v.label||v)+'</option>').join('')+'</select></label>';
}
function range(path,title,min,max,step=.05){return field(`<label for="range-${path}">${title}</label>`,`<div class="range-row"><input id="range-${path}" type="range" data-range="${path}" min="${min}" max="${max}" step="${step}" value="${val(path)}"><output id="out-${path}" for="range-${path}">${path==='scale'?val(path):Math.round(val(path)*100)}%</output></div>`);}
function colorControl(k,name){return `<label class="color-detail"><input type="color" data-setting="colors.${k}" value="${state.colors[k]}" aria-label="${name}"><span>${name}</span></label>`;}
function visualChoices(path,entries,extra=''){
 return `<div class="visual-picker ${extra}">${Object.entries(entries).map(([id,item])=>{
  const selected=!inheritsReference(state,path)&&val(path)===id,label=item.label||item;
  const preview=stageView==='creation'&&['shape','hair'].includes(path)&&state.catalogTier==='baseline'&&getFamilyArtwork(state.family)?`<img class="setting-character-image" src="${getFamilyArtwork(state.family).src}" alt="">`:stageView==='live'&&path==='hair'?`<span class="thumb-shell"><span class="thumb-loading">载入中</span><img data-thumb-hair="${id}" alt="${esc(label)}预览"></span>`:stageView==='live'&&path==='shape'&&(state.family==='animals'||state.catalogTier==='baseline')?`<span class="thumb-shell"><span class="thumb-loading">载入中</span><img data-thumb-shape="${id}" alt="${esc(label)}预览"></span>`:pickerIllustration(path,id,state.colors.body);
  return `<button class="visual-choice ${selected?'selected':''}" data-path="${path}" data-value="${id}" aria-pressed="${selected}" aria-label="${esc(label)}">${preview}<span>${esc(label)}</span></button>`;
 }).join('')}</div>`;
}
function shapeControls(){
 const baseline=state.catalogTier==='baseline';
 if(state.shape==='human')return field('发型',visualChoices('hair',baseline?{[state.hair]:HAIRS[state.hair]}:HAIRS))+field('脸型',chips('faceShape',baseline?{[state.faceShape]:FACE_SHAPES[state.faceShape]}:FACE_SHAPES));
 const available=baseline?[state.shape]:FAMILY_SHAPES[state.family].filter(k=>k!=='human'),core=baseline?available:state.family==='dots'?DOT_CORE_SHAPES:available,extra=available.filter(k=>!core.includes(k));
 return field(state.family==='animals'?'动物种类':'轮廓',visualChoices('shape',Object.fromEntries(core.map(k=>[k,SHAPES[k]]))))+(baseline?'<p class="section-helper">颜色、配饰和姿态等细节写入 Prompt。</p>':'')+(extra.length?`<details class="advanced shape-more" id="extra-shapes" ${extra.includes(state.shape)?'open':''}><summary>更多造型 · ${extra.length}</summary>${visualChoices('shape',Object.fromEntries(extra.map(k=>[k,SHAPES[k]])))}</details>`:'');
}
function renderFamilies(){
 const focusFamily=$('families').contains(document.activeElement)?document.activeElement.dataset.family:null;
 $('families').innerHTML=Object.entries(FAMILIES).map(([id,f])=>`<button class="family-tab ${state.family===id?'selected':''}" data-family="${id}" aria-pressed="${state.family===id}" aria-label="选择 ${f.short}">${document.body.classList.contains('studio-refresh')&&getFamilyArtwork(id)?`<img src="${getFamilyArtwork(id).src}" alt="">`:''}${f.short}</button>`).join('');
 if(focusFamily)$('families').querySelector(`[data-family="${focusFamily}"]`)?.focus({preventScroll:true});
}
function renderSettings(){
 const el=$('settings'),focused=el.contains(document.activeElement)&&document.activeElement.matches('button')?{...document.activeElement.dataset}:null,scroll=el.scrollTop,opened=[...el.querySelectorAll('details[open]')].map(x=>x.id);let out='<p class="creation-setting-note">'+(stageView==='live'?'结构诊断会跟随设定；当前模型未通过美术验收。':'以下内容用于完善 Prompt，不改变上方的内置搭配图片。')+'</p>';out+=state.reference.enabled?'<div class="rule-note reference-priority">'+icon('info')+'<span>保留项沿用参考图。手动改动会作为明确覆盖写入 Prompt。</span></div>':'';
 if(activeTab==='appearance'){
  out+=shapeControls();
  out+=field('材质',`<div class="material-options">${(state.catalogTier==='baseline'?[FAMILIES[state.family].material]:['plush','micro','rubber','clay']).map(m=>`<button class="material-option ${state.material===m?'selected':''}" data-path="material" data-value="${m}" aria-pressed="${state.material===m}" aria-label="${MATERIALS[m].label}"><span class="material-dot ${m}" aria-hidden="true"></span><b>${MATERIALS[m].label}</b></button>`).join('')}</div>`);
  if(state.family==='dots')out+=field('App 配色 · 截图近似',`<div class="palette-row app-palette">${APP_PALETTES.map(p=>`<button class="swatch ${state.colors.body.toLowerCase()===p.body.toLowerCase()?'selected':''}" style="--color:${p.body}" data-palette="${p.id}" aria-label="App 近似 ${p.name}" title="${p.name} ${p.body}" aria-pressed="${state.colors.body.toLowerCase()===p.body.toLowerCase()}"></button>`).join('')}</div><p class="section-helper">9 色按截图视觉近似，非官方色值。角色本体受材质与光照影响。</p>`);
  out+=field('本站配色 / 自定义',`<div class="palette-row">${PALETTES.filter(p=>!p.id.startsWith('app-')).filter(p=>!['shiba','teal'].includes(p.id)||state.family==='animals'&&p.id==='shiba'||state.family==='humans'&&p.id==='teal').map(p=>`<button class="swatch ${(!inheritsReference(state,'colors.body')&&state.colors.body.toLowerCase()===p.body.toLowerCase())?'selected':''}" style="--color:${p.body}" data-palette="${p.id}" aria-label="${p.name}" title="${p.name}" aria-pressed="${(!inheritsReference(state,'colors.body')&&state.colors.body.toLowerCase()===p.body.toLowerCase())}"></button>`).join('')}<input class="color-input" type="color" data-setting="colors.body" value="${state.colors.body}" aria-label="自定义主体颜色" title="自定义主体颜色"></div><div class="color-detail-row">${colorControl('secondary','辅助色')}${colorControl('eyes','眼睛')}${colorControl('accessory','配饰')}</div><p class="section-helper">${inheritsReference(state,'colors.body')?'当前配色沿用参考图；点击色板或色块可明确覆盖对应颜色。':'深色主体自动搭配浅眼睛，手动选过的眼色会保留。'}</p>`);
  out+=`<details class="advanced" id="shape-advanced"><summary>外观细调</summary>${field('<label for="character-name">角色名字</label>',`<input id="character-name" class="name-input" type="text" data-setting="name" value="${esc(state.name)}" maxlength="40">`)}${range('headScale',state.shape==='human'||state.family==='animals'?'头部比例':'轮廓高度',.85,1.12,.01)}${range('bodyWidth','主体宽度',.85,1.15,.01)}${state.shape==='human'?`<div class="input-pair">${select('outfit','服装',OUTFITS)}${select('skinMaterial','面部材质',{auto:'跟随整体',fabric:'细腻织物',matte:'柔和肤感'})}</div><div class="color-detail-row">${colorControl('skin','肤色')}${colorControl('hair','发色')}${colorControl('clothing','衣服')}</div><div class="input-pair" style="margin-top:14px">${select('hairMaterial','头发材质',{auto:'跟随整体',fiber:'卷曲纤维',layered:'分层发束'})}${select('clothMaterial','服装材质',{knit:'细致针织',fabricCloth:'柔软布料'})}</div>`:state.family==='animals'?'<p class="section-helper">动物保持对应物种的耳朵、口鼻、尾巴和肢体。企鹅与猫头鹰使用双翼。</p>':field('手脚',chips('limbs',{auto:'跟随动作',none:'无手脚',hands:'小圆手',feet:'短脚',both:'短手短脚'}))}<p class="section-helper">外形、比例和五官会写入 Prompt；作品能否变化取决于当前模式与素材支持。</p></details>`;
 }else if(activeTab==='face'){
  const eyeKeys=state.family==='dots'?DOT_CORE_EYES:state.family==='grok'?['capsule',...DOT_CORE_EYES,'oval']:Object.keys(EYES);
  out+=field('眼睛的样子',visualChoices('eyes',Object.fromEntries(eyeKeys.map(id=>[id,EYES[id]]))));
  out+=field('此刻的表情',chips('expression',EXPRESSIONS)+`<p class="section-helper">眼型、表情和动作会按下方设定写入 Prompt；支持的预览范围以画面提示为准。</p><label class="accent-toggle"><input type="checkbox" data-expression-accents ${state.expressionAccents?'checked':''}> 表情点缀（泪滴 / 汗滴）</label>`);
  out+=field('眉毛',chips('brows',BROWS));out+=field('嘴巴',chips('mouth',MOUTHS));
  out+=`<details class="advanced" id="face-advanced"><summary>五官细调</summary>${state.family==='dots'?field('其他眼型',visualChoices('eyes',{capsule:EYES.capsule,oval:EYES.oval})):''}${range('eyeScale','眼睛大小',.65,1.35)}${range('eyeSpacing','眼睛间距',.75,1.3)}<p class="section-helper">Dots / Grok Bot 默认克制五官。新增眉毛与嘴巴属于你的扩展设计。</p></details>`;
 }else if(activeTab==='accessories'){
  out+=`<div class="accessory-tabs" aria-label="配件类别">${Object.entries({face:'眼镜',head:'头饰',neck:'颈饰',prop:'道具'}).map(([key,label])=>`<button data-accessory-tab="${key}" class="${activeAccessory===key?'selected':''}" aria-pressed="${activeAccessory===key}">${label}</button>`).join('')}</div>`;
  out+=visualChoices('accessories.'+activeAccessory,ACCESSORIES[activeAccessory],'accessory-picker');
  out+=`<div class="accessory-color">${colorControl(activeAccessory==='head'?'headAccessory':'accessory',activeAccessory==='head'?'头饰颜色':'配件颜色')}</div>`;
  out+=`<div class="rule-note">${icon('info')}<span>道具与动作要求会写入 Prompt；实际贴合和遮挡需在组合素材中逐项实现。</span></div>`;
 }else if(activeTab==='motion'){
  out+=`<label class="accent-toggle"><input type="checkbox" data-reduce-motion ${reduceMotion||matchMedia('(prefers-reduced-motion: reduce)').matches?'checked':''} ${matchMedia('(prefers-reduced-motion: reduce)').matches?'disabled':''}> 减少动态（保留静态状态）</label>`;
  out+=field('Agent 状态',`<div class="agent-states">${['idle',...AGENT_ACTIONS].map(id=>`<button class="agent-state ${val('action')===id?'selected':''}" data-path="action" data-value="${id}" aria-pressed="${val('action')===id}"><span class="state-mark ${id}" aria-hidden="true"><i></i><i></i><i></i></span><span>${id==='idle'?'安静待机':ACTIONS[id].label}</span></button>`).join('')}</div>`);
  if(['thinking','processing'].includes(state.action))out+=field('状态的表现形式',`<div class="motion-style">${Object.entries(MOTION_STYLES).map(([id,m])=>`<button class="choice ${state.motionStyle===id?'selected':''}" data-path="motionStyle" data-value="${id}" aria-pressed="${state.motionStyle===id}">${m.label}</button>`).join('')}</div>`);
  out+=field('日常小动作',`<div class="motion-grid">${Object.entries(ACTIONS).filter(([id])=>!AGENT_ACTIONS.includes(id)).map(([id,a])=>`<button class="motion-choice ${val('action')===id?'selected':''}" data-path="action" data-value="${id}" aria-pressed="${val('action')===id}"><span class="thumb-shell"><span class="thumb-loading">载入中</span><img data-thumb-action="${id}" alt="${a.label}动作预览"></span><b>${a.label}</b></button>`).join('')}</div>`);
  out+=field('姿态',chips('pose',{auto:'跟随动作',sit:'坐姿',side:'侧身',chin:'托腮'}));
  out+=`<p class="section-helper">动作要求写入 Prompt；仅结构诊断演示现有动作，新组合需有对应资产。</p>`;
 }else{
  out+=field('怎么出镜',chips('framing',COMPOSITION.framing));
  out+=field('镜头角度',chips('camera',COMPOSITION.camera));
  out+=field('画幅',chips('aspect',{'1:1':'1:1','4:5':'4:5','16:9':'16:9'}));
  out+=range('scale','画面主体大小',55,85,1);
  out+=field('输出用途',chips('output',COMPOSITION.output));
  out+=`<details class="advanced" id="scene-advanced"><summary>姿态与补充要求</summary>${field('姿态',chips('pose',{auto:'跟随动作',sit:'坐姿',side:'侧身',chin:'托腮'}))}${field('<label for="extra-notes">补充要求</label>',`<textarea id="extra-notes" data-setting="notes" rows="3" maxlength="1600" placeholder="例如：整体留白多一些，花束小一点">${esc(state.notes)}</textarea>`)}${field('<label for="random-seed">随机种子</label>',`<div class="input-pair"><input id="random-seed" type="text" data-setting="randomSeed" value="${esc(state.randomSeed)}" maxlength="40"><button class="button outlined" data-command="seed-random">按种子搭配</button></div>`)}</details>`;
  out+=`<div class="rule-note">${icon('info')}<span>背景、镜头与画幅写入共享设定。${state.output==='pet'?'Pet 还需后续制作与校验动画。':'历史整图下载保持原文件；组合只开放素材支持的画面。'}</span></div>`;
 }
 if(state.reference.enabled)out+=`<div class="ref-indicator">参考图 Prompt 模式 · 图片在 ChatGPT 添加<br><button data-command="reference">调整保留要求</button></div>`;
 el.innerHTML=out;for(const id of opened){const d=$(id);if(d)d.open=true;}el.scrollTop=scroll;if(focused){const target=[...el.querySelectorAll('button')].find(b=>Object.keys(focused).every(k=>b.dataset[k]===focused[k]));target?.focus({preventScroll:true});}queueThumbnails(el);
}
function queueThumbnails(root=document){
 clearTimeout(thumbTimer);
 if(stageView!=='live'){for(const node of root.querySelectorAll('[data-thumb-preset],[data-thumb-action],[data-thumb-shape],[data-thumb-hair]')){node.hidden=true;const shell=node.closest('.thumb-shell');if(shell){shell.classList.add('configuration-thumb');const label=shell.querySelector('.thumb-loading');if(label)label.textContent='设定';}}return;}thumbTimer=setTimeout(()=>{
  const snapshot=structuredClone(state);
  for(const node of root.querySelectorAll('[data-thumb-preset],[data-thumb-action],[data-thumb-shape],[data-thumb-hair]')){
   if(!node.offsetParent)continue;
   const config=node.dataset.thumbPreset?createPreset(node.dataset.thumbPreset):node.dataset.thumbShape?setCharacterValue(snapshot,'shape',node.dataset.thumbShape):node.dataset.thumbHair?setCharacterValue(snapshot,'hair',node.dataset.thumbHair):setCharacterValue(snapshot,'action',node.dataset.thumbAction);
   const clean=resolveCharacter(config).config,key=JSON.stringify(clean);
   if(thumbNodes.get(node)===key)continue;thumbNodes.set(node,key);
   characterThumbnail(clean,200).then(url=>{if(node.isConnected&&thumbNodes.get(node)===key){node.src=url;node.classList.add('loaded');node.closest('.thumb-shell')?.classList.add('ready');}}).catch(()=>{node.classList.add('unavailable');node.closest('.thumb-shell')?.classList.add('failed');node.alt='';});
  }
 },180);
}
function previewError(message){previewFailure=message;if(stageView==='live')$('previewTruth').innerHTML=icon('info')+'<span>'+esc(message)+' 可返回作品预览继续编辑 Prompt。</span>';}
function emptyCreation(title,description){return `<div class="creation-empty"><span class="creation-empty-icon">${icon('image')}</span><b>${esc(title)}</b><p>${esc(description)}</p><button class="button outlined" data-command="prompt">查看创作 Prompt</button></div>`;}
function renderResult(){
 const r=resolveCharacter(state),c=r.config,f=FAMILIES[c.family],creation=resolveCreation(project),diagnostic=stageView==='live',candidate=creation.artwork?.kind==='baseline-candidate',retired=creation.artwork?.status==='retired';
 const lookDefinition=creation.mode==='composer'&&creation.artwork?getLookDefinition(creation.artwork.id):null;
 recipeMachine?.render(c);
 $('diagnosticToggle').dataset.view=diagnostic?'creation':'live';$('diagnosticToggle').textContent=diagnostic?'返回作品预览':'结构诊断';$('diagnosticToggle').setAttribute('aria-pressed',String(diagnostic));
 const cameraControls=document.querySelector('.stage-camera');if(cameraControls)cameraControls.hidden=!diagnostic;
 document.querySelectorAll('.stage-camera [data-value]').forEach(b=>{b.classList.toggle('selected',b.dataset.value===c.camera);b.setAttribute('aria-pressed',String(b.dataset.value===c.camera));});
 $('stageName').textContent=c.reference.enabled?'你的参考角色':(c.name||lookDefinition?.name||f.template);$('stageTag').textContent=creation.mode==='composer'&&creation.artwork?`${f.short} · ${candidate?'基准候选':'内置形象候选'}`:project.creation.mode==='artwork'?'旧项目固定形象 · 可转为搭配':`${f.short} / ${c.family==='humans'&&c.skinMaterial==='fabric'?'分层织物':MATERIALS[c.material].label}`;
 const stage=$('stageArt'),viewKey=diagnostic?'diagnostic':creation.mode==='artwork'?'artwork:'+String(creation.artwork?.id):'composer:'+String(creation.pack?.id);
 if(stage.dataset.view!==viewKey){
  livePreview?.dispose();livePreview=null;composer?.dispose();composer=null;compositionKey='';compositionReady=false;artworkStatus='';stage.dataset.view=viewKey;stage.innerHTML='';
  if(diagnostic){
   stage.innerHTML='<div class="live-stage" id="liveStage"></div>';
   try{previewFailure='';livePreview=new (isSchematic?Shared2DPreview:CharacterPreview)($('liveStage'),{onError:previewError,onReady:()=>{if(previewFailure){previewFailure='';renderResult();}}});livePreview.setReducedMotion?.(reduceMotion);livePreview.setPlaying(playing);}catch(e){console.error(e);previewError('浏览器无法启用结构诊断。');}
  }else if(creation.mode==='artwork'&&creation.artwork&&!retired){
   const artwork=creation.artwork;artworkStatus='loading';
   stage.innerHTML=`<div class="complete-artwork"><img id="artworkPreview" alt="${esc(artwork.name)}：固定展示图，编辑通过 Prompt 创建新形象"><span class="artwork-loading" role="status">作品载入中</span></div>`;
   const img=$('artworkPreview');
   img.onload=()=>{if(stage.dataset.view!==viewKey||$('artworkPreview')!==img)return;artworkStatus='ready';stage.querySelector('.artwork-loading')?.remove();renderResult();};
   img.onerror=()=>{if(stage.dataset.view!==viewKey||$('artworkPreview')!==img)return;artworkStatus='error';stage.innerHTML=emptyCreation('当前形象暂时无法载入','当前设定已保留，仍可复制 Prompt。')+'<button class="text-button retry-artwork" data-command="retry-preview">重新载入形象</button>';renderResult();};
   img.src=artwork.src;
  }
 }
 if(diagnostic){$('liveStage')?.classList.toggle('transparent-stage',c.background==='transparent');livePreview?.update(c);}
 else if(creation.mode==='artwork'&&retired)stage.innerHTML=emptyCreation(creation.reason,'项目设定已保留。可以使用 Prompt，或从角色库另选当前基准。');
 else if(creation.mode==='artwork'&&!creation.artwork)stage.innerHTML=emptyCreation('这一组的完整形象待制作','保留当前身份与设定，先用 Prompt 创作；不会借用其他分组的图片。');
 else if(creation.mode==='composer'){
  if(!creation.pack){
   composer?.dispose();composer=null;compositionReady=false;compositionKey='';stage.innerHTML=emptyCreation('这一组还没有完整形象','Prompt 与项目可以继续使用；等本组内置形象准备好后再预览。');
  }else{
   if(!composer){stage.innerHTML='<div class="composite-stage" id="compositeStage"></div>';composer=new LayeredComposer($('compositeStage'));}
   const key=JSON.stringify([creation.pack.id,c]);
   if(compositionKey!==key){
    compositionKey=key;compositionReady=false;const current=composer;
    $('compositeStage')?.querySelector('.composition-error')?.remove();
    current.update(creation.pack,c,{templatePreview:true}).then(success=>{if(success&&composer===current&&compositionKey===key){compositionReady=true;renderResult();}}).catch(e=>{if(composer===current&&compositionKey===key){compositionReady=false;$('compositeStage')?.insertAdjacentHTML('beforeend',`<div class="composition-error">${emptyCreation('形象无法载入',e.message||'设定已保留，可继续导出 Prompt。')}</div>`);renderResult();}});
   }
  }
 }
 const compositionFailed=composer?.canvas?.dataset.previewStatus==='failed';
 const ready=diagnostic?Boolean(livePreview)&&!previewFailure:creation.mode==='artwork'?artworkStatus==='ready':compositionReady&&creation.availability==='available';
 $('previewBadge').textContent=diagnostic?(isSchematic?'2D 结构诊断':'3D 结构诊断'):creation.mode==='artwork'?(retired?'历史形象已撤下':creation.artwork?(candidate?'基准候选 · 待确认':creation.artwork.kind==='look-template'?'内置搭配候选 · 待确认':'固定历史示例'):'整图待制作'):(ready?'搭配预览 · 待验收':compositionFailed?'形象载入失败':creation.availability==='available'?'形象载入中':'模板预览 · 不可导出');
 $('previewBadge').classList.toggle('live-badge',diagnostic);
 $('sampleCaption').textContent=diagnostic?'未通过美术验收 · '+SHAPES[c.shape].label+' · '+ACTIONS[c.action].label:creation.mode==='artwork'?(creation.artwork?.name||'旧项目固定形象'):(lookDefinition?'候选形象 · 待网页美术验收':'选择一组内置搭配');
 $('playPreview').hidden=!diagnostic||isSchematic;$('playPreview').textContent=playing?'暂停动作':'播放动作';$('playPreview').setAttribute('aria-pressed',String(playing));
 $('exportImage').disabled=!ready;$('exportImage').textContent=diagnostic?'导出诊断 PNG':creation.mode==='artwork'?'下载形象原图':'导出 PNG';
 $('expandPreview').disabled=!ready;$('expandPreview').setAttribute('aria-label',diagnostic?'放大结构诊断':'放大当前预览');
 const oldArtworkAction=project.creation.mode==='artwork'&&!retired?'<button class="text-button start-from-artwork" data-command="start-from-artwork">以此开始搭配</button>':'';
 $('previewTruth').innerHTML=icon('info')+`<div class="preview-truth-copy"><span>${diagnostic?'当前结构模型只供造型诊断，尚未通过美术验收。':creation.mode==='artwork'?(retired?'原图已撤下；旧项目配置仍保留。':creation.artwork?(candidate?'当前是基准候选。改用后可在工作台选搭配与背景；下载保持原图。':creation.artwork.kind==='look-template'?'当前是内置搭配候选。画面保持原图；可以用它开始搭配。':'当前是旧版固定示例；画面保持原图。'):'当前项目没有可展示的完整形象。'):(ready?'更换搭配与背景会更新图片。其他细节只写入 Prompt；该候选仍待真实网页美术验收。':creation.availability==='unsupported'?'当前仍展示所选模板与背景预览；高级设定未被渲染，因此关闭当前角色 PNG 导出。':`形象正在准备。 ${esc(creation.reason)}`)}${r.adjustments.length?' '+esc(r.adjustments.join('；'))+'。':''}</span>${oldArtworkAction}</div>`;
 $('presetName').textContent=c.name||lookDefinition?.name||f.template;$('presetCount').textContent=creation.mode==='composer'?(lookDefinition?'当前搭配':'选择一款内置搭配'):'旧项目中的固定形象';
 $('sourceBadge').textContent=!diagnostic&&creation.mode==='artwork'&&creation.artwork?(retired?'旧项目 · 原图已撤下':candidate?'新基准 · 待确认':creation.artwork.kind==='look-template'?'内置搭配 · 待确认':'旧版示例'):creation.mode==='composer'&&creation.artwork?'内置搭配 · 待确认':sourceLabel(state);$('sourceBadge').dataset.source=deriveProvenance(state).source;
 const accessories=Object.entries(c.accessories).filter(([slot,value])=>value!=='none'&&!inheritsReference(c,'accessories.'+slot)).map(([slot,value])=>ACCESSORIES[slot][value].label);
 const summaryTags=[inheritsReference(c,'shape')?'轮廓沿用参考图':SHAPES[c.shape].label,MATERIALS[c.material].label,inheritsReference(c,'eyes')?'眼型沿用参考图':EYES[c.eyes].label,EXPRESSIONS[c.expression].label,ACTIONS[c.action].label,...accessories];
 $('currentConfig').innerHTML='<span>当前设定</span>'+summaryTags.map((x,i)=>`<span class="config-chip">${i===0?`<i class="tiny-color" style="background:${c.colors.body}"></i>`:''}${esc(x)}</span>`).join('')+`<span class="config-chip">${c.aspect}</span>`;
 $('promptSummary').textContent=[f.name,...summaryTags,COMPOSITION.output[c.output].label].join(' · ');
 $('configCount').textContent='Prompt 已同步';$('undo').disabled=!history.length;$('redo').disabled=!future.length;
 if(previewFailure&&diagnostic)previewError(previewFailure);queueThumbnails();
 if(modalType==='prompt'&&$('modal').open)showPrompt();
}
function thumb(p){if(stageView==='creation'&&p.id.startsWith('baseline-')&&getFamilyArtwork(p.family))return `<img src="${getFamilyArtwork(p.family).src}" alt="${esc(p.name)}基准候选">`;return `<span class="thumb-shell"><span class="thumb-loading" aria-hidden="true">预览载入中</span><img data-thumb-preset="${p.id}" alt="${esc(p.name)}的结构诊断角色"></span>`;}
function showCatalog(){
 const all=PRESETS.filter(p=>p.family===state.family),list=all.filter(p=>sourceFilter==='legacy'?p.catalogTier==='legacy'||p.isLegacy:sourceFilter==='all'?p.catalogTier==='baseline'||p.id.startsWith('baseline-'):sourceFilter==='official'?p.id.startsWith('baseline-')&&['dots','grok','meta-muse'].includes(p.family):sourceFilter==='original'?p.id.startsWith('baseline-')&&['humans','animals'].includes(p.family):false);
 const own=sourceFilter==='mine';
 showModal('catalog','挑一个喜欢的'+(state.family==='animals'?'动物':state.family==='humans'?'人物':'小角色'),'CHARACTER LIBRARY · '+(sourceFilter==='legacy'?list.length:1),
 `<div class="source-filters" aria-label="角色来源">${[['all','本组基准'],['official','原版身份'],['original','新设计'],['legacy','旧版兼容'],['mine','当前项目']].map(([id,label])=>`<button data-source-filter="${id}" class="${sourceFilter===id?'selected':''}" aria-pressed="${sourceFilter===id}">${label}</button>`).join('')}</div>
 <p class="modal-intro">${own?'当前角色设定与创作模式可保存为项目 JSON，重新导入继续创作。':'每组先一只新基准。旧版兼容预设可恢复，保持旧身份；它们不计为重制成果。'}</p>
 ${own?`<div class="my-combination"><b>${esc(state.name)}</b><span class="source-badge">${sourceLabel(state)}</span><p>${SHAPES[state.shape].label} · ${MATERIALS[state.material].label} · ${EXPRESSIONS[state.expression].label}</p><button class="button primary" data-command="save-config">保存我的 JSON</button><button class="button outlined" data-command="close">继续编辑</button></div>`:
 `<div class="catalog-grid">${list.map(p=>`<button class="catalog-card ${state.presetId===p.id?'selected':''}" data-preset="${p.id}" aria-pressed="${state.presetId===p.id}">${thumb(p)}<b>${esc(p.name)}</b><small>${esc(p.description)}</small><span class="source-badge" data-source="${p.provenance||'original'}">${p.id.startsWith('baseline-')?(['dots','grok','meta-muse'].includes(p.family)?'原版身份 · 待确认':'新设计 · 待确认'):'旧版兼容'}</span></button>`).join('')}</div>${!list.length?'<p class="empty-catalog">这个筛选下没有角色。</p>':''}`}
 <p class="guide-footnote">${REFERENCE_INFO.date} · ${REFERENCE_INFO.notice} Pets 列表可能包含用户自定义形象，本站不把它们统一标记为官方角色。</p>`);
 queueThumbnails($('modalBody'));
}
function render(){renderFamilies();homePortal?.setCurrent(state.family);renderWorkbenchControls();renderSettings();renderResult();document.querySelectorAll('.stage-views [data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===stageView);b.setAttribute('aria-pressed',b.dataset.view===stageView);});}
function showModal(type,title,eyebrow,content){
 modalType=type;$('modal').dataset.type=type;if(!$('modal').open)lastTrigger=document.activeElement;
 $('modalTitle').textContent=title;$('modalEyebrow').textContent=eyebrow;$('modalBody').innerHTML=content;
 if(!$('modal').open)$('modal').showModal();$('modal').scrollTop=0;
}
function closeModal(){if(modalType==='reference')referenceDraft=null;$('modal').close();modalType='';if(lastTrigger?.isConnected)lastTrigger.focus();}
function showInspiration(){
 const cards=Object.entries(FAMILIES).map(([family,f])=>{
  const artwork=CREATION_ARTWORKS.find(a=>a.family===family),item=INSPIRATIONS.find(i=>i.family===family);
  return `<article class="inspiration-card"><span class="art-family">${esc(f.name)}</span><div class="inspiration-image">${artwork?`<img class="historical-inspiration" src="${artwork.src}" alt="${esc(artwork.name)}，固定展示的基准候选">`:`<span class="configuration-placeholder"><b>待制作</b><small>本组暂无完整图</small></span>`}</div><h3>${esc(artwork?.name||item.name)}</h3><p>${esc(artwork?.description||'保留独立的包覆式身份，不借用人物图片。精细完整图与组合资产待制作。')}</p><button class="button outlined" data-inspiration="${item.id}">选择这一组设定</button></article>`;
 }).join('');
 showModal('inspiration','五个家族，五种灵感','FIVE LITTLE CHARACTER FAMILIES',`<p class="modal-intro">从五组基准候选开始，把喜欢的颜色、配饰和想法写进 Prompt。展示图是创作起点，不会随设定即时变化；每组美术效果仍待确认。</p><div class="inspiration-grid">${cards}</div><p class="guide-footnote">历史素材来自原站，作者与生成来源未记录，不标作官方资产。人物和动物的新基准禁止使用动漫截图原像素或完整复刻。</p>`);
}
function showGuide(){
 const cards=Object.entries(FAMILIES).map(([id,f])=>'<article class="guide-card">'+art(id,f.material)+'<h3>'+f.name+'</h3><p>'+esc(f.about)+'</p><span class="sample-badge">基准候选 · 待确认</span></article>').join('');
 showModal('guide','五组角色，各有自己的样子','STYLE NOTES',
  '<p class="modal-intro">角色体系、材质、动作与配饰独立组合。五组各一只新基准，真实页面检查与用户逐组确认分别记录。旧预设保留兼容，不计为重制成果。</p><div class="guide-grid">'+cards+'</div>'+
  '<div class="style-sources"><h3>设计来源</h3><p>2026-10-04 App 设置截图 · 独立视觉复刻，非官方素材或官方色值。截图未展示完整的眼镜、配饰与表情列表。</p>'+STYLE_SOURCES.map(s=>'<a href="'+s.url+'" target="_blank" rel="noopener"><b>'+s.title+'</b><span>'+s.note+'</span>'+icon('external')+'</a>').join('')+'</div>'+
  '<p class="guide-footnote">毛绒顺着体积生长，非毛绒保留柔和光影。切换材质时，眼形、脸型、发型与角色比例保持一致。Pet 创作简报还需要后续制作与验证动画素材。</p>'+
  '<div class="modal-actions"><a class="button outlined" href="./editor.html">同配置 2D 结构图</a><a class="button outlined" href="./legacy-editor.html">旧版细调工具</a><button class="button primary" data-command="close">回到工作台</button></div>');
 queueThumbnails($('modalBody'));
}
function showPrompt(){
 const prompt=buildCreationPrompt(project,promptLanguage);
 showModal('prompt','把这个小角色带走','YOUR CHARACTER PROMPT',`<div class="prompt-toolbar"><div class="language-control" aria-label="Prompt 语言"><button class="${promptLanguage==='zh'?'selected':''}" data-language="zh" aria-pressed="${promptLanguage==='zh'}">中文</button><button class="${promptLanguage==='en'?'selected':''}" data-language="en" aria-pressed="${promptLanguage==='en'}">English</button></div><small>${prompt.length.toLocaleString()} 字符 · 随当前设定生成</small></div><pre id="fullPrompt" class="prompt-text" tabindex="0">${esc(prompt)}</pre><p class="guide-footnote">${state.reference.enabled?'生成前请另外附上参考图片；复制文本和 JSON 都不会携带图片。':'当前设定用于创建新形象。需要参照展示形象时，请自行另附原图；当前设定尚未生成新结果。'}</p><div class="modal-actions"><button class="button outlined" data-command="export-prompt">${icon('download')} 导出 TXT</button><button class="button outlined" data-command="copy-open">复制并打开 ChatGPT</button><button class="button primary" data-command="copy">${icon('copy')} 复制${promptLanguage==='en'?'英文':'中文'} Prompt</button></div>`);
}
function showActions(){showModal('actions','挑一个自然的小动作','EXPRESSION IN MOTION',`<p class="modal-intro">每个动作都使用你当前的角色。选中后在舞台播放，也可以暂停查看姿态。</p><div class="modal-action-grid">${Object.entries(ACTIONS).map(([id,a])=>`<button class="modal-action-card ${id===state.action?'selected':''}" data-modal-action="${id}" aria-pressed="${id===state.action}"><span class="thumb-shell"><span class="thumb-loading">载入中</span><img class="live-thumb" data-thumb-action="${id}" alt="${a.label}动作预览"></span><b>${a.label}</b><small>${a.short}</small></button>`).join('')}</div>`);queueThumbnails($('modalBody'));}
let liveExportBusy=false;
async function preparePreview(size){
 const revision=previewRevision,snapshot=structuredClone(project),creation=resolveCreation(snapshot),diagnostic=stageView==='live',view=stageView;
 let blob,name,description;
 if(diagnostic){
  const preview=livePreview;if(!preview||previewFailure)throw Error('结构诊断暂时不可导出。');
  blob=await preview.capture(size,creation.config);name=filename(creation.config.name)+'-diagnostic.png';description='结构诊断 PNG；当前模型未通过美术验收。';
 }else if(creation.mode==='artwork'){
  const artwork=creation.artwork;if(!artwork||artworkStatus!=='ready')throw Error('这一组没有可下载的完整图。');
  const response=await fetch(artwork.src);if(!response.ok)throw Error('示例原图下载失败，请重新载入。');blob=await response.blob();
  if(blob.type!=='image/png')throw Error('原图文件类型不正确，已停止下载。');
  name=artwork.id+'-original.png';description=artwork.description+' 下载保持原文件。';
 }else{
  const preview=composer;if(creation.availability!=='available'||!compositionReady||!preview)throw Error('没有可导出的组合结果；请先使用 Prompt。');
  blob=await preview.capture(size,{transparent:creation.config.background==='transparent'});name=filename(creation.config.name)+'-character.png';description='形象 PNG · 固定正面视角，尚待网页美术确认。';
 }
 if(revision!==previewRevision||view!==stageView)throw Error('设定或模式已改变，本次旧预览导出已取消。');
 return {blob,name,description,snapshot,diagnostic};
}
async function showExpanded(){
 if(liveExportBusy)return;liveExportBusy=true;
 try{const result=await preparePreview(1400),url=URL.createObjectURL(result.blob);showModal('expand',result.diagnostic?'结构诊断':result.snapshot.creation.mode==='artwork'?'固定展示形象':'当前形象预览','PREVIEW & EXPORT',`<div class="expanded-live transparent-stage"><img src="${url}" alt="${esc(result.description)}"></div><p class="expanded-note">${esc(result.description)}</p><div class="modal-actions"><a class="button outlined" href="${url}" download="${esc(result.name)}">${icon('download')} ${result.diagnostic?'导出诊断 PNG':result.snapshot.creation.mode==='artwork'?'下载形象原图':'导出 PNG'}</a><button class="button primary" data-command="prompt">查看当前设定 Prompt</button></div>`);$('modal').addEventListener('close',()=>URL.revokeObjectURL(url),{once:true});}catch(e){toast(e.message||'预览暂时无法导出。');}finally{liveExportBusy=false;}
}
async function downloadLive(){
 if(liveExportBusy)return;liveExportBusy=true;
 try{const result=await preparePreview(1600);download(result.blob,result.name);toast(result.diagnostic?'已导出结构诊断；不代表美术验收通过。':result.snapshot.creation.mode==='artwork'?'已下载展示原图；修改设定不会改变此图。':'已导出当前形象 PNG 候选；尚待美术确认。');}catch(e){toast(e.message||'预览暂时无法导出。');}finally{liveExportBusy=false;}
}
function referenceContents(){
 const options=Object.entries(FAMILIES).map(([id,f])=>'<option value="'+id+'" '+(draftFamily===id?'selected':'')+'>'+f.name+'</option>').join('');
 const preserve=Object.entries(PRESERVE).map(([id,[name]])=>'<label><input type="checkbox" data-preserve="'+id+'" '+(referenceDraft.preserve.includes(id)?'checked':'')+'>'+name+'</label>').join('');
 return '<div class="reference-layout"><section class="reference-steps" aria-label="参考图使用步骤">'+
  '<span class="privacy-badge">'+icon('image')+' 图片留到 ChatGPT 再添加</span><h3>带着照片，换一种样子。</h3>'+
  '<ol><li><b>在这里选风格</b><p>指定材质、动作和想保留的特征。</p></li><li><b>复制完整 Prompt</b><p>可以直接复制，也可以导出文字文件。</p></li><li><b>在 ChatGPT 附图</b><p>添加你的照片，粘贴 Prompt，再开始生成。</p></li></ol>'+
  '<p class="ref-note">本站不选择、读取或接收参考图片。打开 ChatGPT 只负责跳转，图片需要在那里添加。</p></section>'+
  '<div class="reference-form">'+field('<label for="reference-family">目标角色风格</label>','<select id="reference-family" class="select-full">'+options+'</select>')+
  field('想保留原图中的什么','<div class="check-grid">'+preserve+'</div>')+
  field('<label for="reference-notes">补充说明 <small>可选</small></label>','<textarea id="reference-notes" rows="4" maxlength="1200" placeholder="例如：保留短发和圆框眼镜，衣服换成浅蓝色。也可以留空，让 ChatGPT 看图识别。">'+esc(referenceDraft.notes)+'</textarea>')+
  '<div class="rule-note">'+icon('info')+'<span>勾选的特征以附图为准；之后在工作台的手动修改会明确写成覆盖要求。原图的背景和画风默认不沿用。</span></div></div></div>'+
  '<div class="modal-actions"><span class="helper">无需在本站上传图片，也无需先填写特征。</span>'+
  (state.reference.enabled?'<button class="button outlined" data-command="remove-reference">关闭参考图模式</button>':'')+
  '<button class="button primary" data-command="apply-reference">使用参考图 Prompt</button></div>';
}
function showReference(){
 referenceDraft=structuredClone(state.reference);draftFamily=state.family;
 showModal('reference','用你的参考图创作','REFERENCE PROMPT',referenceContents());
}
function applyReference(){
 const targetArtwork=getFamilyArtwork(draftFamily),next=draftFamily===state.family?structuredClone(state):targetArtwork?createLookCharacter(targetArtwork.id):createCharacter(draftFamily);
 next.notes=state.notes;next.output=state.output;
 next.reference={enabled:true,notes:referenceDraft.notes,preserve:[...referenceDraft.preserve],overrides:draftFamily===state.family?[...referenceDraft.overrides]:[]};
 commit(next);closeModal();toast('参考图 Prompt 已就绪。复制后，在 ChatGPT 添加图片。');
}
async function copyText(value){
 try{await navigator.clipboard.writeText(value);return true;}catch{
  const previous=document.activeElement,host=document.querySelector('dialog[open]')||document.body,t=document.createElement('textarea');
  t.value=value;t.style.cssText='position:fixed;top:0;left:-9999px';t.setAttribute('aria-label','待复制 Prompt');host.append(t);t.focus();t.select();
  let ok=false;try{ok=document.activeElement===t&&document.execCommand('copy');}catch{}t.remove();if(previous?.isConnected)previous.focus();return ok;
 }
}
async function copyAndOpen(){
 const snapshot=structuredClone(project),pending=copyText(buildCreationPrompt(snapshot,promptLanguage));
 const opened=window.open('https://chatgpt.com/','_blank');if(opened)opened.opener=null;
 const copied=await pending;
 if(!copied){showPrompt();toast('复制未成功，请在这里手动复制或导出 TXT。');return;}
 toast(opened?(snapshot.character.reference.enabled?'已复制。在 ChatGPT 添加参考图，再粘贴 Prompt。':'已复制。在 ChatGPT 粘贴 Prompt 即可。'):'已复制，请手动打开 ChatGPT 后粘贴。');
}
async function copyPrompt(){const snapshot=structuredClone(project),language=promptLanguage,success=await copyText(buildCreationPrompt(snapshot,language));if(success)toast(`已复制${language==='en'?'英文':'中文'} Prompt${snapshot.character.reference.enabled?'，记得另外附上参考图。':'。'}`);else{showPrompt();toast('无法访问剪贴板，请选中全文复制，或导出 TXT。');}}
function filename(name=state.name){return(name||'dot').replace(/[^\p{L}\p{N}_-]/gu,'-').slice(0,40)||'dot';}
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);}
function exportPrompt(){download(new Blob([buildCreationPrompt(project,promptLanguage)],{type:'text/plain;charset=utf-8'}),`${filename()}-prompt-${promptLanguage}.txt`);toast('完整 Prompt 已导出。');}
async function importConfig(file){if(!file)return;try{if(!/\.json$/i.test(file.name))throw new Error('这里只接受 JSON 配置；参考图片请在 ChatGPT 添加。');if(file.size>100000)throw new Error('配置文件不能超过 100 KB');const raw=JSON.parse(await file.text());if(!raw.format&&[1,2,3,4,5].includes(raw.version)){sessionStorage.setItem('dot-legacy-import',JSON.stringify(raw));window.location.assign('./legacy-editor.html');return;}const next=parseProject(raw);stageView='creation';commit(next);openWorkspace();render();toast(next.character.reference.enabled?'配置已载入，请在 ChatGPT 添加参考图片。':'配置已完整载入。');}catch(e){toast(e instanceof SyntaxError?'这不是有效的 JSON 配置文件。':e.message);}$('configFile').value='';}
function routePath(route){return route.page==='looks'?(route.family&&route.family!=='all'?`looks/${route.family}`:'looks'):route.page==='workspace'?'workspace':'home';}
function routeFromHash(){let decoded;try{decoded=decodeURIComponent(location.hash.replace(/^#\/?/, ''));}catch{return{page:'home'};}const parts=decoded.split('/').filter(Boolean);if(parts[0]==='workspace')return{page:'workspace'};if(parts[0]==='looks')return{page:'looks',family:FAMILIES[parts[1]]?parts[1]:'all'};return{page:'home'};}
function applyRoute(route,{focus=false}={}){
 if(!homePortal)return;
 recipeMachine?.cancel();
 if(route.page==='looks'){homePortal.showGallery(route.family||'all');}
 else if(route.page==='workspace'){stageView='creation';homePortal.setPageWorkspace();render();}
 else homePortal.showHome();
 document.querySelectorAll('[data-route]').forEach(button=>button.setAttribute('aria-current',String(button.dataset.route===route.page)));
 window.scrollTo({top:0,behavior:'instant'});
 if(focus){(route.page==='workspace'?'stageName':route.page==='looks'?'looksTitle':'homeTitle')&&$(route.page==='workspace'?'stageName':route.page==='looks'?'looksTitle':'homeTitle')?.focus({preventScroll:true});}
}
function navigate(route,{replace=false,focus=true}={}){
 const path=routePath(route),hash='#'+path;
 if(location.hash!==hash)window.history[replace?'replaceState':'pushState']({studioRoute:path},'',hash);
 applyRoute(route,{focus});
}
function openWorkspace(){if(!$('workspaceShell'))return;navigate({page:'workspace'});}
function openGallery(family='all',options={}){navigate({page:'looks',family},options);}
function goHome(){if(!homePortal)return;navigate({page:'home'});}
const commands={
 'prepare-composition':()=>startFromCurrentArtwork(),
 'open-workspace':()=>openWorkspace(),home:goHome,'clear-search':()=>homePortal?.clear(),'fullscreen-random':()=>fullscreenRandomizer?.open(),
 customize:()=>document.querySelector('.inspector').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}),
 guide:showGuide,inspiration:showInspiration,catalog:showCatalog,'download-live':downloadLive,'toggle-play':()=>{playing=!playing&&!reduceMotion&&!matchMedia('(prefers-reduced-motion: reduce)').matches;livePreview?.setPlaying(playing);$('playPreview').textContent=playing?'暂停动作':'播放动作';$('playPreview').setAttribute('aria-pressed',String(playing));},reference:()=>{openWorkspace();showReference();},prompt:showPrompt,'all-actions':showActions,expand:showExpanded,close:closeModal,copy:copyPrompt,'copy-open':copyAndOpen,'export-prompt':exportPrompt,'download-sample':downloadLive,'retry-preview':()=>{$('stageArt').dataset.view='';renderResult();},
 'save-config':()=>{download(new Blob([exportProject(project)],{type:'application/json'}),filename()+'-studio-project.json');toast('项目配置已保存，包含设定与创作模式，不包含图片。');},
 'save-character':()=>{download(new Blob([exportConfiguration(state)],{type:'application/json'}),filename()+'-dot.json');toast('已导出兼容 v10 角色配置，不含创作模式与图片。');},
 'import-config':()=>$('configFile').click(),
 'start-from-artwork':startFromCurrentArtwork,
 reset:()=>{const hasLook=project.creation.mode==='composer'&&getBuiltInLooks(state.family).some(a=>a.id===project.creation.artworkId),next=hasLook?createWorkbenchLook(project.creation.artworkId,state):state.presetId!=='custom'?createPreset(state.presetId):createCharacter(state.family);next.reference=structuredClone(state.reference);next.reference.overrides=[];next.notes=state.notes;if(!hasLook)next.output=state.output;commit(next);toast('已恢复当前形象的基础 Prompt 设定；图片保持所选模板。');},
 random:()=>{if(fullscreenRandomizer){recipeMachine?.cancel();fullscreenRandomizer.open();return;}if(recipeMachine)recipeMachine.spin();else commit(randomizeCharacter(state,'mix-'+Math.random().toString(36).slice(2,9)));},
 'seed-random':()=>{if(recipeMachine)recipeMachine.spin(state.randomSeed);else commit(randomizeCharacter(state,state.randomSeed));},
 'apply-reference':applyReference,
 'remove-reference':()=>{const next=structuredClone(state);next.reference=createCharacter().reference;commit(next);closeModal();toast('已关闭参考图模式。');}
};
document.addEventListener('click',async e=>{
 if(e.target.closest('.fullscreen-randomizer'))return;
 if(e.target.closest('[data-home-link]')){e.preventDefault();goHome();return;}
 const b=e.target.closest('button');if(!b||b.disabled)return;
 try{
  if(recipeMachine?.busy&&!b.dataset.lock&&b.dataset.command!=='random')recipeMachine.cancel();
  if(b.dataset.route){navigate({page:b.dataset.route==='looks'?'looks':b.dataset.route==='workspace'?'workspace':'home'});return;}
  if(b.dataset.dotRecipe){selectDotsRecipe(b.dataset.dotRecipe);return;}
 if(b.dataset.lookAction){if(b.dataset.lookAction==='copy'){const success=await copyText(buildCreationPrompt(lookProject(b.dataset.lookId),promptLanguage));if(success)toast('已复制这张形象的 Prompt。');else toast('剪贴板不可用，请重新打开这张形象后复制。');}else if(b.dataset.lookAction==='start'){closeModal();startLook(b.dataset.lookId);}return;}
  if(b.dataset.inspiration){commit(inspirationCharacter(b.dataset.inspiration,state));closeModal();livePreview?.assemble();return;}
  if(b.id==='undo'){undo();return;}if(b.id==='redo'){undo(true);return;}if(b.id==='closeModal'){closeModal();return;}
  if(b.dataset.command){document.querySelector('.project-menu')?.removeAttribute('open');commands[b.dataset.command]?.();return;}
  if(b.dataset.lookTemplate){startLook(b.dataset.lookTemplate);return;}
  if(b.dataset.accessoryTab){activeAccessory=b.dataset.accessoryTab;$('settings').scrollTop=0;renderSettings();return;}
  if(b.dataset.family){sourceFilter='all';switchFamily(b.dataset.family);return;}
  if(b.dataset.sourceFilter){sourceFilter=b.dataset.sourceFilter;showCatalog();return;}
  if(b.dataset.preset){const next=createPreset(b.dataset.preset,state);commit(b.dataset.preset.startsWith('baseline-')?makeProject(next,{mode:project.creation.mode,artworkId:getFamilyArtwork(next.family)?.id??null}):next);if($('modal').open)closeModal();return;}
  if(b.dataset.path){const p=b.dataset.path,v=b.dataset.value,oldAction=state.action;change(p,v);if(oldAction!==state.action&&p==='expression')toast('已回到待机，展示你选择的表情。');return;}
  if(b.dataset.palette){commit(applyPalette(state,b.dataset.palette));return;}
  if(b.dataset.view){stageView=b.dataset.view;previewRevision++;render();return;}
  if(b.dataset.tab){setTab(b.dataset.tab);return;}
  if(b.dataset.language){promptLanguage=b.dataset.language;showPrompt();return;}
  if(b.dataset.modalAction){change('action',b.dataset.modalAction);closeModal();return;}
 }catch(error){toast(error.message||'这项设置未能应用，请重试。');}
});
function setTab(id){activeTab=id;document.querySelectorAll('[data-tab]').forEach(b=>{const selected=b.dataset.tab===id;b.setAttribute('aria-selected',selected);b.tabIndex=selected?0:-1;});$('settings').setAttribute('aria-labelledby','tab-'+id);$('settings').scrollTop=0;renderSettings();}
document.querySelector('.setting-tabs').addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();const ids=['appearance','face','accessories','motion','scene'],i=ids.indexOf(activeTab),index=e.key==='Home'?0:e.key==='End'?ids.length-1:(i+(e.key==='ArrowRight'?1:ids.length-1))%ids.length;setTab(ids[index]);$('tab-'+ids[index]).focus();});
document.addEventListener('input',e=>{
 const el=e.target;if(el.dataset.range){const v=Number(el.value);change(el.dataset.range,v,false);$('out-'+el.dataset.range).textContent=(el.dataset.range==='scale'?v:Math.round(v*100))+'%';return;}
 if(el.dataset.setting&&['text','color','textarea'].includes(el.type)){change(el.dataset.setting,el.value,false);return;}
 if(el.id==='reference-notes'&&referenceDraft)referenceDraft.notes=el.value;
});
document.addEventListener('change',e=>{
 const el=e.target;if(el.id==='configFile'){importConfig(el.files?.[0]);return;}
 if(el.hasAttribute('data-reduce-motion')){reduceMotion=el.checked;if(reduceMotion)playing=false;livePreview?.setReducedMotion?.(reduceMotion);renderResult();return;}
 if(el.hasAttribute('data-expression-accents')){change('expressionAccents',el.checked);return;}
 if(el.dataset.setting&&el.tagName==='SELECT')change(el.dataset.setting,el.value);
 if(el.dataset.setting&&el.type==='color')renderSettings();
 if(el.id==='reference-family')draftFamily=el.value;
 if(el.dataset.preserve&&referenceDraft)referenceDraft.preserve=el.checked?[...new Set([...referenceDraft.preserve,el.dataset.preserve])]:referenceDraft.preserve.filter(k=>k!==el.dataset.preserve);
});
document.addEventListener('dragover',e=>{if(e.dataTransfer?.types.includes('Files'))e.preventDefault();});
document.addEventListener('drop',e=>{if(e.dataTransfer?.types.includes('Files')){e.preventDefault();toast('参考图片请在 ChatGPT 中添加。这里只导入 JSON 配置。');}});
document.addEventListener('focusout',()=>{grouping='';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&recipeMachine?.busy){recipeMachine.cancel();return;}if(!fullscreenRandomizer?.dialog?.open&&e.key.toLowerCase()==='r'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)&&!$('modal').open){e.preventDefault();commands.random();return;}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)){e.preventDefault();undo(e.shiftKey);}});
$('modal').addEventListener('cancel',e=>{e.preventDefault();closeModal();});
$('modal').addEventListener('click',e=>{if(e.target===$('modal')){const r=$('modal').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeModal();}});
window.addEventListener('pageshow',event=>{if(!event.persisted)return;try{const saved=sessionStorage.getItem('dot-studio-project-v1')||sessionStorage.getItem('dot-studio-v10');if(saved){const next=parseProject(JSON.parse(saved));if(JSON.stringify(next)!==JSON.stringify(project)){project=next;state=project.character;previewRevision++;history.length=0;future.length=0;grouping='';render();}}}catch{toast('保存的配置暂时无法读取，当前角色已保留。');}});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>{if(event.matches){playing=false;livePreview?.setPlaying(false);renderResult();}});
if($('recipeMachine'))recipeMachine=new RecipeMachine($('recipeMachine'),{getConfig:()=>state,commit:next=>{commit(next,'',true,'random');},assemble:()=>livePreview?.assemble(),notify:toast});
if($('homePortal')){homePortal=createHomePortal({openWorkspace,openGallery,onStartLook:startLook,onViewLook:viewLook,onCopyLook:async id=>{const ok=await copyText(buildCreationPrompt(lookProject(id),promptLanguage));toast(ok?'已复制这张形象的 Prompt。':'无法复制；请点开这张形象后重试。');},onDownloadLook:async id=>{try{const a=getCreationArtwork(id);if(!a)throw new Error('形象不存在');const r=await fetch(a.src);if(!r.ok)throw new Error('原图载入失败');const blob=await r.blob();if(blob.type!=='image/png')throw new Error('原图格式无效');download(blob,a.id+'-original.png');toast('已下载透明背景原图；工作台导出会按选定背景合成。');}catch(error){toast(error.message||'原图下载失败');}},onReference:()=>{openWorkspace();showReference();}});fullscreenRandomizer=createFullscreenRandomizer({getConfig:()=>state,getProject:()=>project,getReducedMotion:()=>reduceMotion,getArtwork:family=>{const a=getFamilyArtwork(family);return a?{src:a.src,alt:a.name,label:'基准候选 · 待网页验收'}:null;},commit:next=>{commit(next,'',true,'random');openWorkspace();return $('stageName');},notify:toast});}
window.addEventListener('popstate',()=>applyRoute(routeFromHash()));
icons();$('undo').innerHTML=icon('undo');$('redo').innerHTML=icon('redo');render();remember();applyRoute(routeFromHash(),{focus:false});if(storageRecovery)toast(storageRecovery);
const mc=document.modelContext;
if(mc?.registerTool){const controller=new AbortController();const definitions=[{name:'read_character_prompt',title:'读取角色提示词',description:'Read the shared character, creation mode, real asset availability and Chinese/English prompts. Does not call an image generation model.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:()=>({configuration:structuredClone(state),resolved:resolveCharacter(state),project:structuredClone(project),creation:resolveCreation(project),prompt:buildCreationPrompt(project),englishPrompt:buildCreationPrompt(project,'en')})},{name:'configure_character',title:'配置角色',description:'Replace the current Studio character with a validated v10 configuration. Does not generate images, upload references, copy data or create a Pet.',inputSchema:{type:'object',properties:{configuration:{type:'object'}},required:['configuration'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:input=>{const next=validateConfig(input.configuration);commit(next);return {configuration:structuredClone(state),resolved:resolveCharacter(state),project:structuredClone(project),prompt:buildCreationPrompt(project)};}}];for(const def of definitions){try{Promise.resolve(mc.registerTool(def,{signal:controller.signal})).catch(()=>{});}catch{}}window.addEventListener('pagehide',()=>controller.abort(),{once:true});}
