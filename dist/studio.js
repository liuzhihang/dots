import {getArtSample} from './studio-art.js';
import {PRESETS,familyPresets,STYLE_SOURCES} from './studio-catalog.js';
import {CharacterPreview,characterThumbnail} from './live-runtime.js';
import {pickerIllustration} from './studio-pickers.js';
import {VERSION,FAMILIES,MATERIALS,SHAPES,FAMILY_SHAPES,DOT_CORE_SHAPES,DOT_CORE_EYES,PALETTES,EYES,EXPRESSIONS,BROWS,MOUTHS,ACCESSORIES,ACTIONS,COMPOSITION,PRESERVE,HAIRS,FACE_SHAPES,OUTFITS,createCharacter,createPreset,setCharacterValue,applyPalette,resolveCharacter,buildPrompt,validateConfig,randomizeCharacter,exportConfiguration,inheritsReference} from './studio-model.js';

const $=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
// Lucide-compatible functional icons; character artwork is raster imagery.
const paths={
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
 const desc=esc(label||FAMILIES[family].name+' · '+MATERIALS[sample.material].label+' · '+ACTIONS[sample.action].label+'样张');
 const pos=sample.layout==='single'?'center':(sample.index%3*50)+'% '+(Math.floor(sample.index/3)*100/3)+'%';
 const cls=sample.layout==='single'?'hero-image':'action-sample';
 return '<span class="art '+cls+' '+className+'" role="img" aria-label="'+desc+'" data-art-src="'+sample.src+'" style="background-image:url('+sample.src+');background-position:'+pos+'"></span>';
}

let state=createCharacter(),activeTab='appearance',activeAccessory='face',stageView='live',promptLanguage='zh',toastTimer,modalType='',lastTrigger=null,referenceDraft=null,draftFamily='';
const history=[],future=[],familyDrafts=new Map();let grouping='',previewFailure='',livePreview=null,playing=!matchMedia('(prefers-reduced-motion: reduce)').matches,thumbTimer,renderFrame;
const thumbNodes=new WeakMap();
try{const saved=(sessionStorage.getItem('dot-studio-v8')||sessionStorage.getItem('dot-studio-v7')||sessionStorage.getItem('dot-studio-v6'));if(saved)state=validateConfig(JSON.parse(saved));}catch{}
const val=path=>path.split('.').reduce((o,k)=>o?.[k],resolveCharacter(state).config);
function remember(){try{sessionStorage.setItem('dot-studio-v8',JSON.stringify(state));}catch{}familyDrafts.set(state.family,structuredClone(state));}
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3600);}
function commit(next,key='',paint=true){const clean=validateConfig(next);if(JSON.stringify(clean)===JSON.stringify(state))return;if(!key||grouping!==key){history.push(structuredClone(state));if(history.length>60)history.shift();}future.length=0;grouping=key;state=clean;remember();if(paint)render();else{cancelAnimationFrame(renderFrame);renderFrame=requestAnimationFrame(renderResult);}}
function change(path,value,paint=true){const wasReference=stageView!=='live';if(!['name','notes','randomSeed'].includes(path))stageView='live';const next=setCharacterValue(state,path,value);commit(next,paint?'':path,paint);if(wasReference&&stageView==='live')render();}
function switchFamily(id){if(id===state.family)return;familyDrafts.set(state.family,structuredClone(state));const next=structuredClone(familyDrafts.get(id)||createCharacter(id));const overrides=[...next.reference.overrides];next.reference={...structuredClone(state.reference),overrides};next.notes=state.notes;next.output=state.output;commit(next);}
function undo(redo=false){const from=redo?future:history,to=redo?history:future;if(!from.length)return;to.push(structuredClone(state));state=from.pop();grouping='';remember();render();toast(redo?'已重做':'已撤销');}
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
  const preview=path==='hair'?`<img data-thumb-hair="${id}" alt="${esc(label)}预览">`:path==='shape'&&state.family==='pets'?`<img data-thumb-shape="${id}" alt="${esc(label)}预览">`:pickerIllustration(path,id,state.colors.body);
  return `<button class="visual-choice ${selected?'selected':''}" data-path="${path}" data-value="${id}" aria-pressed="${selected}" aria-label="${esc(label)}">${preview}<span>${esc(label)}</span></button>`;
 }).join('')}</div>`;
}
function shapeControls(){
 if(state.shape==='human')return field('发型',visualChoices('hair',HAIRS))+field('脸型',chips('faceShape',FACE_SHAPES));
 const available=FAMILY_SHAPES[state.family].filter(k=>k!=='human'),core=state.family==='dots'?DOT_CORE_SHAPES:available,extra=available.filter(k=>!core.includes(k));
 return field(state.family==='pets'?'动物种类':'轮廓',visualChoices('shape',Object.fromEntries(core.map(k=>[k,SHAPES[k]]))))+(extra.length?`<details class="advanced shape-more" id="extra-shapes" ${extra.includes(state.shape)?'open':''}><summary>更多造型 · ${extra.length}</summary>${visualChoices('shape',Object.fromEntries(extra.map(k=>[k,SHAPES[k]])))}</details>`:'');
}
function renderFamilies(){
 $('families').innerHTML=Object.entries(FAMILIES).map(([id,f])=>`<button class="family-tab ${state.family===id?'selected':''}" data-family="${id}" aria-pressed="${state.family===id}" aria-label="选择 ${f.name}">${f.short}</button>`).join('');
}
function renderSettings(){
 const el=$('settings'),scroll=el.scrollTop,opened=[...el.querySelectorAll('details[open]')].map(x=>x.id);let out=state.reference.enabled?'<div class="rule-note reference-priority">'+icon('info')+'<span>保留项沿用参考图。手动改动会作为明确覆盖写入 Prompt。</span></div>':'';
 if(activeTab==='appearance'){
  out+=shapeControls();
  out+=field('材质',`<div class="material-options">${['plush','micro','rubber','clay'].map(m=>`<button class="material-option ${state.material===m?'selected':''}" data-path="material" data-value="${m}" aria-pressed="${state.material===m}" aria-label="${MATERIALS[m].label}"><span class="material-dot ${m}" aria-hidden="true"></span><b>${MATERIALS[m].label}</b></button>`).join('')}</div>`);
  out+=field('配色',`<div class="palette-row">${PALETTES.filter(p=>!['shiba','teal'].includes(p.id)||state.family==='pets'&&p.id==='shiba'||state.family==='muse'&&p.id==='teal').map(p=>`<button class="swatch ${(!inheritsReference(state,'colors.body')&&state.colors.body.toLowerCase()===p.body.toLowerCase())?'selected':''}" style="--color:${p.body}" data-palette="${p.id}" aria-label="${p.name}" title="${p.name}" aria-pressed="${(!inheritsReference(state,'colors.body')&&state.colors.body.toLowerCase()===p.body.toLowerCase())}"></button>`).join('')}<input class="color-input" type="color" data-setting="colors.body" value="${state.colors.body}" aria-label="自定义主体颜色" title="自定义主体颜色"></div><div class="color-detail-row">${colorControl('secondary','辅助色')}${colorControl('eyes','眼睛')}${colorControl('accessory','配饰')}</div><p class="section-helper">${inheritsReference(state,'colors.body')?'当前配色沿用参考图；点击色板或色块可明确覆盖对应颜色。':'深色主体自动搭配浅眼睛，手动选过的眼色会保留。'}</p>`);
  out+=`<details class="advanced" id="shape-advanced"><summary>外观细调</summary>${field('<label for="character-name">角色名字</label>',`<input id="character-name" class="name-input" type="text" data-setting="name" value="${esc(state.name)}" maxlength="40">`)}${range('headScale',state.shape==='human'||state.family==='pets'?'头部比例':'轮廓高度',.85,1.12,.01)}${range('bodyWidth','主体宽度',.85,1.15,.01)}${state.shape==='human'?`<div class="input-pair">${select('outfit','服装',OUTFITS)}${select('skinMaterial','面部材质',{auto:'跟随整体',fabric:'细腻织物',matte:'柔和肤感'})}</div><div class="color-detail-row">${colorControl('skin','肤色')}${colorControl('hair','发色')}${colorControl('clothing','衣服')}</div><div class="input-pair" style="margin-top:14px">${select('hairMaterial','头发材质',{auto:'跟随整体',fiber:'卷曲纤维',layered:'分层发束'})}${select('clothMaterial','服装材质',{knit:'细致针织',fabricCloth:'柔软布料'})}</div>`:state.family==='pets'?'<p class="section-helper">动物保持对应物种的耳朵、口鼻、尾巴和肢体。企鹅与猫头鹰使用双翼。</p>':field('手脚',chips('limbs',{auto:'跟随动作',none:'无手脚',hands:'小圆手',feet:'短脚',both:'短手短脚'}))}<p class="section-helper">外形、比例和五官会同步到实时角色与 Prompt。</p></details>`;
 }else if(activeTab==='face'){
  const eyeKeys=state.family==='dots'?DOT_CORE_EYES:state.family==='grok'?['capsule',...DOT_CORE_EYES,'oval']:Object.keys(EYES);
  out+=field('眼睛的样子',visualChoices('eyes',Object.fromEntries(eyeKeys.map(id=>[id,EYES[id]]))));
  out+=field('此刻的表情',chips('expression',EXPRESSIONS)+(['sleep','work','magic','camera','read','blink'].includes(state.action)?`<p class="face-lock">${icon('info')} ${ACTIONS[state.action].label}正在使用${EXPRESSIONS[ACTIONS[state.action].expression].label}表情；选择其他表情会回到待机展示。</p>`:''));
  out+=field('眉毛',chips('brows',BROWS));out+=field('嘴巴',chips('mouth',MOUTHS));
  out+=`<details class="advanced" id="face-advanced"><summary>五官细调</summary>${state.family==='dots'?field('其他眼型',visualChoices('eyes',{capsule:EYES.capsule,oval:EYES.oval})):''}${range('eyeScale','眼睛大小',.65,1.35)}${range('eyeSpacing','眼睛间距',.75,1.3)}<p class="section-helper">Dots / Grok Bot 默认克制五官。新增眉毛与嘴巴属于你的扩展设计。</p></details>`;
 }else if(activeTab==='accessories'){
  out+=`<div class="accessory-tabs" aria-label="配件类别">${Object.entries({face:'眼镜',head:'头饰',neck:'颈饰',prop:'道具'}).map(([key,label])=>`<button data-accessory-tab="${key}" class="${activeAccessory===key?'selected':''}" aria-pressed="${activeAccessory===key}">${label}</button>`).join('')}</div>`;
  out+=visualChoices('accessories.'+activeAccessory,ACCESSORIES[activeAccessory],'accessory-picker');
  out+=`<div class="accessory-color">${colorControl('accessory','配件颜色')}</div>`;
  out+=`<div class="rule-note">${icon('info')}<span>道具会匹配对应动作。耳机与帽子共用头部位置；墨镜会自然遮挡眼睛。</span></div>`;
 }else if(activeTab==='motion'){
  out+=field('挑一个小动作',`<div class="motion-grid">${Object.entries(ACTIONS).map(([id,a])=>`<button class="motion-choice ${val('action')===id?'selected':''}" data-path="action" data-value="${id}" aria-pressed="${val('action')===id}"><img data-thumb-action="${id}" alt="${a.label}动作预览"><b>${a.label}</b></button>`).join('')}</div>`);
  out+=field('姿态',chips('pose',{auto:'跟随动作',sit:'坐姿',side:'侧身',chin:'托腮'}));
  out+=`<p class="section-helper">动作会同步视线、手部和道具。选择表情时可回到待机，查看五官的变化。</p>`;
 }else{
  out+=`<div class="view-options"><span>展示方式</span><div class="stage-views" aria-label="角色显示方式"><button data-view="live" class="${stageView==='live'?'active':''}" aria-pressed="${stageView==='live'}">实时角色</button><button data-view="reference" class="${stageView==='reference'?'active':''}" aria-pressed="${stageView==='reference'}">美术参考</button></div></div>`;
  out+=field('怎么出镜',chips('framing',COMPOSITION.framing));
  out+=field('镜头角度',chips('camera',COMPOSITION.camera));
  out+=field('背景',chips('background',COMPOSITION.background)+(state.background==='solid'?`<div class="color-detail-row">${colorControl('background','背景色')}<small>${state.colors.background}</small></div>`:''));
  out+=field('画幅',chips('aspect',{'1:1':'1:1','4:5':'4:5','16:9':'16:9'}));
  out+=range('scale','画面主体大小',55,85,1);
  out+=field('输出用途',chips('output',COMPOSITION.output));
  out+=`<details class="advanced" id="scene-advanced"><summary>姿态与补充要求</summary>${field('姿态',chips('pose',{auto:'跟随动作',sit:'坐姿',side:'侧身',chin:'托腮'}))}${field('<label for="extra-notes">补充要求</label>',`<textarea id="extra-notes" data-setting="notes" rows="3" maxlength="1600" placeholder="例如：整体留白多一些，花束小一点">${esc(state.notes)}</textarea>`)}${field('<label for="random-seed">随机种子</label>',`<div class="input-pair"><input id="random-seed" type="text" data-setting="randomSeed" value="${esc(state.randomSeed)}" maxlength="40"><button class="button outlined" data-command="seed-random">按种子搭配</button></div>`)}</details>`;
  out+=`<div class="rule-note">${icon('info')}<span>背景、镜头与画幅即时预览。${state.output==='pet'?'Pet 还需按目标版本制作与校验动画，本页导出的是创作简报。':'透明背景导出的 PNG 含真实透明通道。'}</span></div>`;
 }
 if(state.reference.enabled)out+=`<div class="ref-indicator">参考图 Prompt 模式 · 图片在 ChatGPT 添加<br><button data-command="reference">调整保留要求</button></div>`;
 el.innerHTML=out;for(const id of opened){const d=$(id);if(d)d.open=true;}el.scrollTop=scroll;queueThumbnails(el);
}
function queueThumbnails(root=document){
 clearTimeout(thumbTimer);thumbTimer=setTimeout(()=>{
  const snapshot=structuredClone(state);
  for(const node of root.querySelectorAll('[data-thumb-preset],[data-thumb-action],[data-thumb-shape],[data-thumb-hair]')){
   if(!node.offsetParent)continue;
   const config=node.dataset.thumbPreset?createPreset(node.dataset.thumbPreset):node.dataset.thumbShape?setCharacterValue(snapshot,'shape',node.dataset.thumbShape):node.dataset.thumbHair?setCharacterValue(snapshot,'hair',node.dataset.thumbHair):setCharacterValue(snapshot,'action',node.dataset.thumbAction);
   const clean=resolveCharacter(config).config,key=JSON.stringify(clean);
   if(thumbNodes.get(node)===key)continue;thumbNodes.set(node,key);
   characterThumbnail(clean,200).then(url=>{if(node.isConnected&&thumbNodes.get(node)===key){node.src=url;node.classList.add('loaded');}}).catch(()=>{node.classList.add('unavailable');node.alt='预览未能加载，点击查看角色';});
  }
 },180);
}
function previewError(message){previewFailure=message;$('previewTruth').innerHTML=icon('info')+'<span>'+esc(message)+' 可切换到美术参考继续查看。</span>';}
function renderResult(){
 const r=resolveCharacter(state),c=r.config,f=FAMILIES[c.family];
 $('stageName').textContent=c.reference.enabled?'你的参考角色':(c.name||f.template);$('stageTag').textContent=`${f.short} / ${MATERIALS[c.material].label}`;
 const stage=$('stageArt');
 if(stage.dataset.view!==stageView){
  livePreview?.dispose();livePreview=null;stage.dataset.view=stageView;
  if(stageView==='live'){
   stage.innerHTML='<div class="live-stage" id="liveStage"></div>';
   try{previewFailure='';livePreview=new CharacterPreview($('liveStage'),{onError:previewError,onReady:()=>{if(previewFailure){previewFailure='';renderResult();}}});livePreview.setPlaying(playing);}catch(e){console.error(e);previewError('浏览器无法启用实时三维预览。');}
  }else stage.innerHTML='';
 }
 if(stageView==='live'){
  $('liveStage')?.classList.toggle('transparent-stage',c.background==='transparent');
  livePreview?.update(c);
 }else{
  const artKey=[c.family,c.action].join(':');if(stage.dataset.artKey!==artKey||!stage.firstChild){
   stage.innerHTML=`<div class="comparison">${['plush','rubber'].map(m=>`<div class="compare-half">${art(c.family,m,c.action)}<b>${MATERIALS[m].label}</b><small>${m==='plush'?'细密纤维 · 轻柔边缘':'柔和体积 · 克制高光'}</small><br><button class="use-material" data-path="material" data-value="${m}">在实时角色使用</button></div>`).join('')}</div>`;stage.dataset.artKey=artKey;
  }
 }
 $('previewBadge').textContent=stageView==='live'?'实时 3D':'美术参考';
 $('previewBadge').classList.toggle('live-badge',stageView==='live');
 $('sampleCaption').textContent=stageView==='live'?SHAPES[c.shape].label+' · '+ACTIONS[c.action].label:'精选样张 · 用于材质与最终生图参考';
 $('playPreview').hidden=stageView!=='live';$('playPreview').textContent=playing?'暂停动作':'播放动作';$('playPreview').setAttribute('aria-pressed',String(playing));
 $('previewTruth').classList.remove('has-changes');
 $('previewTruth').innerHTML=icon('info')+`<span>${stageView==='live'?(c.reference.enabled?'当前参数实时预览；参考图的特征在 ChatGPT 附图后处理。':'外形与动作实时预览 · 用 Prompt 在 ChatGPT 创作最终图片。'):'高清样张保持既有美术质量，不随自定义设置变化。'}${r.adjustments.length?' '+esc(r.adjustments.join('；'))+'。':''}</span>`;
 $('presetName').textContent=c.name||f.template;
 $('presetCount').textContent=familyPresets(c.family).length;
 const accessories=Object.entries(c.accessories).filter(([slot,value])=>value!=='none'&&!inheritsReference(c,'accessories.'+slot)).map(([slot,value])=>ACCESSORIES[slot][value].label);
 const summaryTags=[inheritsReference(c,'shape')?'轮廓沿用参考图':SHAPES[c.shape].label,MATERIALS[c.material].label,inheritsReference(c,'eyes')?'眼型沿用参考图':EYES[c.eyes].label,EXPRESSIONS[c.expression].label,ACTIONS[c.action].label,...accessories];
 $('currentConfig').innerHTML='<span>当前设定</span>'+summaryTags.map((x,i)=>`<span class="config-chip">${i===0?`<i class="tiny-color" style="background:${c.colors.body}"></i>`:''}${esc(x)}</span>`).join('')+`<span class="config-chip">${c.aspect}</span>`;
 $('promptSummary').textContent=[f.name,...summaryTags,COMPOSITION.output[c.output].label].join(' · ');
 $('configCount').textContent='实时联动';$('undo').disabled=!history.length;$('redo').disabled=!future.length;
 if(previewFailure&&stageView==='live')previewError(previewFailure);
 queueThumbnails();
}
function showCatalog(){
 const list=familyPresets(state.family);
 showModal('catalog','挑一个喜欢的'+(state.family==='pets'?'动物':state.family==='muse'?'人物':'小角色'),'CHARACTER LIBRARY · '+list.length,
 `<p class="modal-intro">${FAMILIES[state.family].name} 的 ${list.length} 个起点。选中后继续调整轮廓、配色、材质与表情。</p><div class="catalog-grid">${list.map(p=>`<button class="catalog-card ${state.presetId===p.id?'selected':''}" data-preset="${p.id}" aria-pressed="${state.presetId===p.id}"><img data-thumb-preset="${p.id}" alt="${p.name}的实时角色"><b>${esc(p.name)}</b><small>${esc(p.description)}</small></button>`).join('')}</div><p class="guide-footnote">Dot Studio 原创与灵感预设。公开来源见风格指南。</p>`);
 queueThumbnails($('modalBody'));
}
function render(){renderFamilies();renderSettings();renderResult();document.querySelectorAll('.stage-views [data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===stageView);b.setAttribute('aria-pressed',b.dataset.view===stageView);});}
function showModal(type,title,eyebrow,content){
 modalType=type;if(!$('modal').open)lastTrigger=document.activeElement;
 $('modalTitle').textContent=title;$('modalEyebrow').textContent=eyebrow;$('modalBody').innerHTML=content;
 if(!$('modal').open)$('modal').showModal();$('modal').scrollTop=0;
}
function closeModal(){if(modalType==='reference')referenceDraft=null;$('modal').close();modalType='';if(lastTrigger?.isConnected)lastTrigger.focus();}
function showGuide(){
 const cards=Object.entries(FAMILIES).map(([id,f])=>'<article class="guide-card">'+art(id,f.material)+'<h3>'+f.name+'</h3><p>'+esc(f.about)+'</p><span class="sample-badge">本站风格预设</span></article>').join('');
 showModal('guide','四种角色，各有自己的样子','STYLE NOTES',
  '<p class="modal-intro">角色体系、材质、动作与配饰独立组合。共 48 个可定制起点。参考官方公开示例与独立项目，并加入本站原创扩展。每个预设都可以在实时舞台继续调整。</p><div class="guide-grid">'+cards+'</div>'+
  '<div class="style-sources"><h3>设计来源</h3>'+STYLE_SOURCES.map(s=>'<a href="'+s.url+'" target="_blank" rel="noopener"><b>'+s.title+'</b><span>'+s.note+'</span>'+icon('external')+'</a>').join('')+'</div>'+
  '<p class="guide-footnote">毛绒顺着体积生长，非毛绒保留柔和光影。切换材质时，眼形、脸型、发型与角色比例保持一致。Pet 创作简报还需要后续制作与验证动画素材。</p>'+
  '<div class="modal-actions"><a class="button outlined" href="./editor.html">结构草图工具</a><button class="button primary" data-command="close">回到工作台</button></div>');
}
function showPrompt(){
 const prompt=buildPrompt(state,promptLanguage);
 showModal('prompt','把这个小角色带走','YOUR CHARACTER PROMPT',`<div class="prompt-toolbar"><div class="language-control" aria-label="Prompt 语言"><button class="${promptLanguage==='zh'?'selected':''}" data-language="zh" aria-pressed="${promptLanguage==='zh'}">中文</button><button class="${promptLanguage==='en'?'selected':''}" data-language="en" aria-pressed="${promptLanguage==='en'}">English</button></div><small>${prompt.length.toLocaleString()} 字符 · 随当前设定生成</small></div><pre id="fullPrompt" class="prompt-text" tabindex="0">${esc(prompt)}</pre><p class="guide-footnote">${state.reference.enabled?'生成前请另外附上参考图片；复制文本和 JSON 都不会携带图片。':'可附上导出的实时角色 PNG 作为造型参考，再按这里的完整设定生成精致角色图。'}</p><div class="modal-actions"><button class="button outlined" data-command="export-prompt">${icon('download')} 导出 TXT</button><button class="button outlined" data-command="copy-open">复制并打开 ChatGPT</button><button class="button primary" data-command="copy">${icon('copy')} 复制${promptLanguage==='en'?'英文':'中文'} Prompt</button></div>`);
}
function showActions(){showModal('actions','挑一个自然的小动作','EXPRESSION IN MOTION',`<p class="modal-intro">每个动作都使用你当前的角色。选中后在舞台播放，也可以暂停查看姿态。</p><div class="modal-action-grid">${Object.entries(ACTIONS).map(([id,a])=>`<button class="modal-action-card ${id===state.action?'selected':''}" data-modal-action="${id}" aria-pressed="${id===state.action}"><img class="live-thumb" data-thumb-action="${id}" alt="${a.label}动作预览"><b>${a.label}</b><small>${a.short}</small></button>`).join('')}</div>`);queueThumbnails($('modalBody'));}
async function showExpanded(){
 if(stageView==='live'&&livePreview){
  try{const snapshot=resolveCharacter(state).config,blob=await livePreview.capture(1400,snapshot),url=URL.createObjectURL(blob);showModal('expand',snapshot.name||'我的角色','CURRENT CHARACTER PREVIEW',`<div class="expanded-live ${snapshot.background==='transparent'?'transparent-stage':''}"><img src="${url}" alt="当前角色配置的实时渲染"></div><p class="expanded-note">当前实时角色的 PNG 预览 · 包含你的外形、配色、表情与配饰</p><div class="modal-actions"><button class="button outlined" data-command="download-live">${icon('download')} 导出当前 PNG</button><button class="button primary" data-command="prompt">查看我的 Prompt</button></div>`);$('modal').addEventListener('close',()=>URL.revokeObjectURL(url),{once:true});}catch(e){toast('角色预览导出失败，请稍后重试。');}
 }else{const r=resolveCharacter(state);showModal('expand','高清美术参考','CURATED ART REFERENCE',`<div class="expanded-art">${art(state.family,r.sample.material,state.action)}</div><p class="expanded-note">精选样张 · 不含自定义改动</p><div class="modal-actions"><button class="button outlined" data-command="download-sample">${icon('download')} 下载样张 PNG</button></div>`);}
}
async function downloadLive(){try{if(!livePreview)throw Error();const snapshot=resolveCharacter(state).config,name=filename()+'-preview.png';download(await livePreview.capture(1600,snapshot),name);toast('当前角色 PNG 已导出，包含所有可见定制。');}catch{toast('请切换到实时角色后再导出 PNG。');}}
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
 const next=draftFamily===state.family?structuredClone(state):createCharacter(draftFamily);
 next.notes=state.notes;next.output=state.output;
 next.reference={enabled:true,notes:referenceDraft.notes,preserve:[...referenceDraft.preserve],overrides:draftFamily===state.family?[...referenceDraft.overrides]:[]};
 commit(next);closeModal();toast('参考图 Prompt 已就绪。复制后，在 ChatGPT 添加图片。');
}
async function copyText(value){try{await navigator.clipboard.writeText(value);return true;}catch{const t=document.createElement('textarea');t.value=value;t.style.cssText='position:fixed;top:0;left:-9999px';document.body.append(t);t.focus();t.select();let ok=false;try{ok=document.execCommand('copy')}catch{}t.remove();return ok;}}
async function copyAndOpen(){
 const pending=copyText(buildPrompt(state,promptLanguage));
 const opened=window.open('https://chatgpt.com/','_blank');if(opened)opened.opener=null;
 const copied=await pending;
 if(!copied){showPrompt();toast('复制未成功，请在这里手动复制或导出 TXT。');return;}
 toast(opened?(state.reference.enabled?'已复制。在 ChatGPT 添加参考图，再粘贴 Prompt。':'已复制。在 ChatGPT 粘贴 Prompt 即可。'):'已复制，请手动打开 ChatGPT 后粘贴。');
}
async function copyPrompt(){const success=await copyText(buildPrompt(state,promptLanguage));if(success)toast(`已复制${promptLanguage==='en'?'英文':'中文'} Prompt${state.reference.enabled?'，记得另外附上参考图。':'。'}`);else{showPrompt();toast('无法访问剪贴板，请选中全文复制，或导出 TXT。');}}
function filename(){return(state.name||'dot').replace(/[^\p{L}\p{N}_-]/gu,'-').slice(0,40)||'dot';}
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);}
function exportPrompt(){download(new Blob([buildPrompt(state,promptLanguage)],{type:'text/plain;charset=utf-8'}),`${filename()}-prompt-${promptLanguage}.txt`);toast('完整 Prompt 已导出。');}
async function downloadSample(){
 const sample=resolveCharacter(state).sample,img=new Image();img.src=sample.src;
 try{
  await img.decode();
  const canvas=document.createElement('canvas');canvas.width=sample.width;canvas.height=sample.height;
  const x=(sample.index%sample.columns)*sample.width,y=Math.floor(sample.index/sample.columns)*sample.height;
  canvas.getContext('2d').drawImage(img,x,y,sample.width,sample.height,0,0,sample.width,sample.height);
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw new Error();
  download(blob,sample.family+'-'+sample.material+'-'+sample.action+'-sample.png');
  toast('已下载样张 PNG，不含自定义改动。');
 }catch{toast('样张下载失败，请刷新后重试。');}
}

async function importConfig(file){if(!file)return;try{if(!/\.json$/i.test(file.name))throw new Error('这里只接受 JSON 配置；参考图片请在 ChatGPT 添加。');if(file.size>100000)throw new Error('配置文件不能超过 100 KB');const raw=JSON.parse(await file.text());if([1,2,3,4,5].includes(raw.version)){sessionStorage.setItem('dot-legacy-import',JSON.stringify(raw));window.location.assign('./editor.html');return;}const next=validateConfig(raw);commit(next);toast(next.reference.enabled?'配置已载入，请在 ChatGPT 添加参考图片。':'配置已完整载入。');}catch(e){toast(e instanceof SyntaxError?'这不是有效的 JSON 配置文件。':e.message);}$('configFile').value='';}
const commands={
 customize:()=>document.querySelector('.inspector').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}),
 guide:showGuide,catalog:showCatalog,'download-live':downloadLive,'toggle-play':()=>{playing=!playing;livePreview?.setPlaying(playing);$('playPreview').textContent=playing?'暂停动作':'播放动作';$('playPreview').setAttribute('aria-pressed',String(playing));},reference:showReference,prompt:showPrompt,'all-actions':showActions,expand:showExpanded,close:closeModal,copy:copyPrompt,'copy-open':copyAndOpen,'export-prompt':exportPrompt,'download-sample':downloadSample,
 'save-config':()=>{download(new Blob([exportConfiguration(state)],{type:'application/json'}),filename()+'-dot.json');toast('配置已保存，可随时重新导入；配置仅包含设定与文字，不包含图片。');},
 'import-config':()=>$('configFile').click(),
 reset:()=>{const next=state.presetId!=='custom'?createPreset(state.presetId):createCharacter(state.family);next.reference=structuredClone(state.reference);next.reference.overrides=[];next.notes=state.notes;next.output=state.output;commit(next);toast('已恢复当前角色的视觉预设，可撤销。');},
 random:()=>{const seed='dot-'+Math.floor(Math.random()*100000);commit(randomizeCharacter(state,seed));toast('换了一套搭配；名称、参考特征与补充要求已保留。');},
 'seed-random':()=>{commit(randomizeCharacter(state,state.randomSeed));toast('已按种子 '+state.randomSeed+' 搭配。');},
 'apply-reference':applyReference,
 'remove-reference':()=>{const next=structuredClone(state);next.reference=createCharacter().reference;commit(next);closeModal();toast('已关闭参考图模式。');}
};
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 try{
  if(b.id==='undo'){undo();return;}if(b.id==='redo'){undo(true);return;}if(b.id==='closeModal'){closeModal();return;}
  if(b.dataset.command){document.querySelector('.project-menu')?.removeAttribute('open');commands[b.dataset.command]?.();return;}
  if(b.dataset.accessoryTab){activeAccessory=b.dataset.accessoryTab;$('settings').scrollTop=0;renderSettings();return;}
  if(b.dataset.family){switchFamily(b.dataset.family);return;}
  if(b.dataset.preset){const changedView=stageView!=='live';stageView='live';commit(createPreset(b.dataset.preset,state));if(changedView)render();if($('modal').open)closeModal();return;}
  if(b.dataset.path){const p=b.dataset.path,v=b.dataset.value,oldAction=state.action;change(p,v);if(oldAction!==state.action&&p==='expression')toast('已回到待机，展示你选择的表情。');return;}
  if(b.dataset.palette){const changedView=stageView!=='live';stageView='live';commit(applyPalette(state,b.dataset.palette));if(changedView)render();return;}
  if(b.dataset.view){stageView=b.dataset.view;render();return;}
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
 if(el.dataset.setting&&el.tagName==='SELECT')change(el.dataset.setting,el.value);
 if(el.dataset.setting&&el.type==='color')renderSettings();
 if(el.id==='reference-family')draftFamily=el.value;
 if(el.dataset.preserve&&referenceDraft)referenceDraft.preserve=el.checked?[...new Set([...referenceDraft.preserve,el.dataset.preserve])]:referenceDraft.preserve.filter(k=>k!==el.dataset.preserve);
});
document.addEventListener('dragover',e=>{if(e.dataTransfer?.types.includes('Files'))e.preventDefault();});
document.addEventListener('drop',e=>{if(e.dataTransfer?.types.includes('Files')){e.preventDefault();toast('参考图片请在 ChatGPT 中添加。这里只导入 JSON 配置。');}});
document.addEventListener('focusout',()=>{grouping='';});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)){e.preventDefault();undo(e.shiftKey);}});
$('modal').addEventListener('cancel',e=>{e.preventDefault();closeModal();});
$('modal').addEventListener('click',e=>{if(e.target===$('modal')){const r=$('modal').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeModal();}});
icons();$('undo').innerHTML=icon('undo');$('redo').innerHTML=icon('redo');render();remember();
const mc=document.modelContext;
if(mc?.registerTool){const controller=new AbortController();const definitions=[{name:'read_character_prompt',title:'读取角色提示词',description:'Read the selected character, resolved anatomy, real-time preview metadata and Chinese/English prompts. Does not call an image generation model.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:()=>({configuration:structuredClone(state),resolved:resolveCharacter(state),prompt:buildPrompt(state),englishPrompt:buildPrompt(state,'en')})},{name:'configure_character',title:'配置角色',description:'Replace the current Studio character with a validated v8 configuration. Does not generate images, upload references, copy data or create a Pet.',inputSchema:{type:'object',properties:{configuration:{type:'object'}},required:['configuration'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:input=>{const next=validateConfig(input.configuration);commit(next);return {configuration:structuredClone(state),resolved:resolveCharacter(state),prompt:buildPrompt(state)};}}];for(const def of definitions){try{Promise.resolve(mc.registerTool(def,{signal:controller.signal})).catch(()=>{});}catch{}}window.addEventListener('pagehide',()=>controller.abort(),{once:true});}
