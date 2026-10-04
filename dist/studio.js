import {getArtSample} from './studio-art.js';
import {VERSION,FAMILIES,MATERIALS,SHAPES,FAMILY_SHAPES,PALETTES,EYES,EXPRESSIONS,BROWS,MOUTHS,ACCESSORIES,ACTIONS,COMPOSITION,PRESERVE,createCharacter,setCharacterValue,applyPalette,resolveCharacter,buildPrompt,validateConfig,randomizeCharacter,exportConfiguration,inheritsReference} from './studio-model.js';

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
const ART_KEYS=['idle','work','sleep','listen','flowers','magic'];
function art(family,material,action='idle',className='',label=''){
 const sample=getArtSample(family,material,action);
 const desc=esc(label||FAMILIES[family].name+' · '+MATERIALS[sample.material].label+' · '+ACTIONS[sample.action].label+'样张');
 const pos=sample.layout==='single'?'center':(sample.index%3*50)+'% '+(Math.floor(sample.index/3)*100/3)+'%';
 const cls=sample.layout==='single'?'hero-image':'action-sample';
 return '<span class="art '+cls+' '+className+'" role="img" aria-label="'+desc+'" data-art-src="'+sample.src+'" style="background-image:url('+sample.src+');background-position:'+pos+'"></span>';
}

let state=createCharacter(),activeTab='appearance',stageView='single',promptLanguage='zh',toastTimer,modalType='',lastTrigger=null,referenceDraft=null,draftFamily='';
const history=[],future=[],familyDrafts=new Map();let grouping='';
try{const saved=(sessionStorage.getItem('dot-studio-v7')||sessionStorage.getItem('dot-studio-v6'));if(saved)state=validateConfig(JSON.parse(saved));}catch{}
const val=path=>path.split('.').reduce((o,k)=>o?.[k],state);
function remember(){try{sessionStorage.setItem('dot-studio-v7',JSON.stringify(state));}catch{}familyDrafts.set(state.family,structuredClone(state));}
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3600);}
function commit(next,key='',paint=true){const clean=validateConfig(next);if(JSON.stringify(clean)===JSON.stringify(state))return;if(!key||grouping!==key){history.push(structuredClone(state));if(history.length>60)history.shift();}future.length=0;grouping=key;state=clean;remember();if(paint)render();else renderResult();}
function change(path,value,paint=true){const next=setCharacterValue(state,path,value);commit(next,paint?'':path,paint);}
function switchFamily(id){if(id===state.family)return;familyDrafts.set(state.family,structuredClone(state));const next=structuredClone(familyDrafts.get(id)||createCharacter(id));const overrides=[...next.reference.overrides];next.reference={...structuredClone(state.reference),overrides};next.notes=state.notes;next.output=state.output;commit(next);}
function undo(redo=false){const from=redo?future:history,to=redo?history:future;if(!from.length)return;to.push(structuredClone(state));state=from.pop();grouping='';remember();render();toast(redo?'已重做':'已撤销');}
function chips(path,entries,extra=''){return `<div class="chips ${extra}">${Object.entries(entries).map(([k,v])=>`<button class="choice ${(!inheritsReference(state,path)&&val(path)===k)?'selected':''}" data-path="${path}" data-value="${k}" aria-pressed="${(!inheritsReference(state,path)&&val(path)===k)}">${esc(v.label||v)}</button>`).join('')}</div>`;}
function field(title,content,note='',id=''){return `<div class="field"${id?` id="${id}"`:''}><div class="field-title">${title}${note?`<small>${note}</small>`:''}</div>${content}</div>`;}
function select(path,label,entries){
 const inherit=inheritsReference(state,path);
 return '<label>'+label+'<select data-setting="'+path+'" aria-label="'+label+'">'+
  (inherit?'<option value="" selected disabled>沿用参考图</option>':'')+
  Object.entries(entries).map(([k,v])=>'<option value="'+k+'" '+(!inherit&&val(path)===k?'selected':'')+'>'+esc(v.label||v)+'</option>').join('')+'</select></label>';
}
function range(path,title,min,max,step=.05){return field(`<label for="range-${path}">${title}</label>`,`<div class="range-row"><input id="range-${path}" type="range" data-range="${path}" min="${min}" max="${max}" step="${step}" value="${val(path)}"><output id="out-${path}" for="range-${path}">${path==='scale'?val(path):Math.round(val(path)*100)}%</output></div>`);}
function colorControl(k,name){return `<label class="color-detail"><input type="color" data-setting="colors.${k}" value="${state.colors[k]}" aria-label="${name}"><span>${name}</span></label>`;}
function renderFamilies(){
 $('families').innerHTML=Object.entries(FAMILIES).map(([id,f])=>`<button class="family-card ${state.family===id?'selected':''}" data-family="${id}" aria-pressed="${state.family===id}" aria-label="选择 ${f.name}">${art(id,f.material,'idle','mini-art')}<span class="card-copy"><b><span class="family-long-name">${f.name}</span><span class="family-short-name">${f.short}</span></b><small>${f.subtitle}</small></span></button>`).join('');
}
function renderSettings(){
 const el=$('settings'),scroll=el.scrollTop,opened=[...el.querySelectorAll('details[open]')].map(x=>x.id);let out=state.reference.enabled?'<div class="rule-note reference-priority">'+icon('info')+'<span>保留项沿用参考图。手动改动会作为明确覆盖写入 Prompt。</span></div>':'';
 if(activeTab==='appearance'){
  out+=field('想要什么触感？',`<div class="material-grid">${['plush','rubber'].map(m=>`<button class="material-card ${state.material===m?'selected':''}" data-path="material" data-value="${m}" aria-pressed="${state.material===m}" aria-label="${MATERIALS[m].label}">${art(state.family,m)}<b>${MATERIALS[m].label}</b><small>${m==='plush'?'软乎乎，有纤维':'圆润，低光泽'}</small></button>`).join('')}</div><div class="secondary-materials">${['micro','clay'].map(m=>`<button class="choice ${state.material===m?'selected':''}" data-path="material" data-value="${m}" aria-pressed="${state.material===m}">${MATERIALS[m].label}<small>Prompt 转译</small></button>`).join('')}</div>`);
  out+=field('一组喜欢的颜色',`<div class="palette-row">${PALETTES.filter(p=>!['shiba','teal'].includes(p.id)||state.family==='pets'&&p.id==='shiba'||state.family==='muse'&&p.id==='teal').map(p=>`<button class="swatch ${(!inheritsReference(state,'colors.body')&&state.colors.body.toLowerCase()===p.body.toLowerCase())?'selected':''}" style="--color:${p.body}" data-palette="${p.id}" aria-label="${p.name}" title="${p.name}" aria-pressed="${(!inheritsReference(state,'colors.body')&&state.colors.body.toLowerCase()===p.body.toLowerCase())}"></button>`).join('')}<input class="color-input" type="color" data-setting="colors.body" value="${state.colors.body}" aria-label="自定义主体颜色" title="自定义主体颜色"></div><div class="color-detail-row">${colorControl('secondary','辅助色')}${colorControl('eyes','眼睛')}${colorControl('accessory','配饰')}</div><p class="section-helper">${inheritsReference(state,'colors.body')?'当前配色沿用参考图；点击色板或色块可明确覆盖对应颜色。':'深色主体自动搭配浅眼睛，手动选过的眼色会保留。'}</p>`);
  out+=field('轮廓',chips('shape',Object.fromEntries(FAMILY_SHAPES[state.family].map(k=>[k,SHAPES[k]]))),state.family==='muse'?'保留人物比例':'写入 Prompt');
  out+=`<details class="advanced" id="shape-advanced"><summary>外观细调</summary>${field('<label for="character-name">角色名字</label>',`<input id="character-name" class="name-input" type="text" data-setting="name" value="${esc(state.name)}" maxlength="40">`)}${range('headScale','头部比例',.85,1.12,.01)}${range('bodyWidth','主体宽度',.85,1.15,.01)}${state.shape==='human'?`<div class="input-pair">${select('hair','发型',{'short-curly':'短卷发',short:'自然短发',bob:'齐颈短发',long:'自然长发'})}${select('skinMaterial','面部材质',{auto:'跟随整体',fabric:'细腻织物',matte:'柔和肤感'})}</div><div class="color-detail-row">${colorControl('skin','肤色')}${colorControl('hair','发色')}${colorControl('clothing','衣服')}</div><div class="input-pair" style="margin-top:14px">${select('hairMaterial','头发材质',{auto:'跟随整体',fiber:'卷曲纤维',layered:'分层发束'})}${select('clothMaterial','服装材质',{knit:'细致针织',fabricCloth:'柔软布料'})}</div>`:state.family==='pets'?'<p class="section-helper">四足角色保持 4 只爪、0 只人手。动作只改变爪的姿态。</p>':field('手脚',chips('limbs',{auto:'跟随动作',none:'无手脚',hands:'小圆手',feet:'短脚',both:'短手短脚'}))}<p class="section-helper">精调只改变创作设定，样张不会实时重绘。</p></details>`;
 }else if(activeTab==='face'){
  out+=field('眼睛的样子',`<div class="face-choices">${Object.entries(EYES).map(([id,e])=>`<button class="choice ${(!inheritsReference(state,'eyes')&&state.eyes===id)?'selected':''}" data-path="eyes" data-value="${id}" aria-pressed="${(!inheritsReference(state,'eyes')&&state.eyes===id)}">${icon('eye')}<span>${e.label}</span></button>`).join('')}</div>`);
  out+=field('此刻的表情',chips('expression',EXPRESSIONS)+(['sleep','work','magic','camera','read','blink'].includes(state.action)?`<p class="face-lock">${icon('info')} ${ACTIONS[state.action].label}使用${EXPRESSIONS[ACTIONS[state.action].expression].label}表情；换到“发会儿呆”后可自由选择。</p>`:''));
  out+=field('眉毛',chips('brows',BROWS));out+=field('嘴巴',chips('mouth',MOUTHS));
  out+=`<details class="advanced" id="face-advanced"><summary>五官比例</summary>${range('eyeScale','眼睛大小',.65,1.35)}${range('eyeSpacing','眼睛间距',.75,1.3)}<p class="section-helper">Dots / Grok Bot 默认克制五官。新增眉毛与嘴巴属于你的扩展设计。</p></details>`;
 }else if(activeTab==='accessories'){
  for(const [slot,title,ic]of [['head','头顶的小心思','hat'],['face','眼镜','glasses'],['neck','颈部配饰','neck'],['prop','拿在手里的','wand']])out+=field(`<span class="slot-title">${icon(ic)}${title}</span>`,`<div class="slot-grid">${Object.entries(ACCESSORIES[slot]).map(([id,v])=>`<button class="choice ${(!inheritsReference(state,'accessories.'+slot)&&state.accessories[slot]===id)?'selected':''}" data-path="accessories.${slot}" data-value="${id}" aria-pressed="${(!inheritsReference(state,'accessories.'+slot)&&state.accessories[slot]===id)}">${v.label}</button>`).join('')}</div>`,'每类一件');
  out+=`<div class="rule-note">${icon('info')}<span>道具会匹配对应动作。耳机与帽子共用头部位置；墨镜会自然遮挡眼睛。</span></div>`;
 }else{
  out+=field('怎么出镜',chips('framing',COMPOSITION.framing));
  out+=field('镜头角度',chips('camera',COMPOSITION.camera));
  out+=field('背景',chips('background',COMPOSITION.background)+(state.background==='solid'?`<div class="color-detail-row">${colorControl('background','背景色')}<small>${state.colors.background}</small></div>`:''));
  out+=field('画幅',chips('aspect',{'1:1':'1:1','4:5':'4:5','16:9':'16:9'}));
  out+=range('scale','主体占画面宽度',55,85,1);
  out+=field('输出用途',chips('output',COMPOSITION.output));
  out+=`<details class="advanced" id="scene-advanced"><summary>姿态与补充要求</summary>${field('姿态',chips('pose',{auto:'跟随动作',sit:'坐姿',side:'侧身',chin:'托腮'}))}${field('<label for="extra-notes">补充要求</label>',`<textarea id="extra-notes" data-setting="notes" rows="3" maxlength="1600" placeholder="例如：整体留白多一些，花束小一点">${esc(state.notes)}</textarea>`)}${field('<label for="random-seed">随机种子</label>',`<div class="input-pair"><input id="random-seed" type="text" data-setting="randomSeed" value="${esc(state.randomSeed)}" maxlength="40"><button class="button outlined" data-command="seed-random">按种子搭配</button></div>`)}</details>`;
  out+=`<div class="rule-note">${icon('info')}<span>背景、镜头和画幅用于最终生成。${state.output==='pet'?'Pet 还需按目标版本制作与校验动画，本页导出的是创作简报。':'预览样张保持原始构图与白底。'}</span></div>`;
 }
 if(state.reference.enabled)out+=`<div class="ref-indicator">参考图 Prompt 模式 · 图片在 ChatGPT 添加<br><button data-command="reference">调整保留要求</button></div>`;
 out+=`<details class="advanced" id="legacy-access"><summary>需要更细的结构控制？</summary><p class="section-helper">结构草图编辑器保留五官位置、几何造型、角色设定、动作序列与 SVG / PNG 导出。它使用独立的结构草图配置。</p><a class="text-button" href="./editor.html">打开结构草图编辑器 ${icon('external')}</a></details>`;
 el.innerHTML=out;for(const id of opened){const d=$(id);if(d)d.open=true;}el.scrollTop=scroll;
}
function renderResult(){
 const r=resolveCharacter(state),c=r.config,f=FAMILIES[c.family];
 $('stageName').textContent=c.reference.enabled?'你的参考角色':(c.name||f.template);$('stageTag').textContent=`${f.short} / ${MATERIALS[c.material].label}`;
 const stageKey=[c.family,c.material,c.action,stageView].join(':');
 if($('stageArt').dataset.key!==stageKey){
  $('stageArt').innerHTML=stageView==='compare'?`<div class="comparison">${['plush','rubber'].map(m=>`<div class="compare-half">${art(c.family,m,c.action)}<b>${MATERIALS[m].label}</b><small>${m==='plush'?'细密纤维 · 轻柔边缘':'柔和体积 · 克制高光'}</small><br><button class="use-material" data-path="material" data-value="${m}">${c.material===m?'已选中':'选择此材质'}</button></div>`).join('')}</div>`:art(c.family,r.sample.material,c.action,'hero-art');
  $('stageArt').dataset.key=stageKey;
 }
 $('sampleCaption').textContent=`${FAMILIES[c.family].template} · ${MATERIALS[r.sample.material].label} · ${ACTIONS[r.sample.action].label}`;
 $('previewTruth').classList.toggle('has-changes',r.pending.length>0);
 $('previewTruth').innerHTML=icon('info')+`<span>${r.pending.length?`已写入 Prompt：<b>${esc(r.pending.join('、'))}</b>。上方仍为风格／动作样张。`:'展示风格与动作参考，非当前配置的实时生图。'}</span>`;
 $('actionStrip').innerHTML=ART_KEYS.map(a=>`<button class="action-card ${c.action===a?'selected':''}" data-path="action" data-value="${a}" aria-pressed="${c.action===a}" aria-label="动作：${ACTIONS[a].label}">${art(c.family,r.sample.material,a)}<span>${ACTIONS[a].label}</span></button>`).join('');
 const accessories=Object.entries(c.accessories).filter(([slot,value])=>value!=='none'&&!inheritsReference(c,'accessories.'+slot)).map(([slot,value])=>ACCESSORIES[slot][value].label);
 const shapeLabel=inheritsReference(c,'shape')?'轮廓沿用参考图':SHAPES[c.shape].label;
 const inheritedColors=inheritsReference(c,'colors.body');
 const inheritedAccessories=['head','face','neck'].some(slot=>inheritsReference(c,'accessories.'+slot));
 const summaryTags=[shapeLabel,MATERIALS[c.material].label,ACTIONS[c.action].label,...(inheritedColors?['配色沿用参考图']:[]),...(inheritedAccessories?['配饰沿用参考图']:[]),...accessories];
 $('currentConfig').innerHTML=`<span>当前设定</span>${summaryTags.map((x,i)=>`<span class="config-chip">${i===0&&!inheritedColors?`<i class="tiny-color" style="background:${c.colors.body}"></i>`:''}${esc(x)}</span>`).join('')}<span class="config-chip">${c.aspect}</span>`;
 $('promptSummary').textContent=[f.name,...summaryTags,COMPOSITION.output[c.output].label].join(' · ');
 $('configCount').textContent=r.pending.length?`${r.pending.length} 项自定义`:'按你的喜好来';
 $('undo').disabled=!history.length;$('redo').disabled=!future.length;
}
function render(){renderFamilies();renderSettings();renderResult();document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===stageView);b.setAttribute('aria-pressed',b.dataset.view===stageView);});}
function showModal(type,title,eyebrow,content){
 modalType=type;if(!$('modal').open)lastTrigger=document.activeElement;
 $('modalTitle').textContent=title;$('modalEyebrow').textContent=eyebrow;$('modalBody').innerHTML=content;
 if(!$('modal').open)$('modal').showModal();$('modal').scrollTop=0;
}
function closeModal(){if(modalType==='reference')referenceDraft=null;$('modal').close();modalType='';if(lastTrigger?.isConnected)lastTrigger.focus();}
function showGuide(){
 const cards=Object.entries(FAMILIES).map(([id,f])=>'<article class="guide-card">'+art(id,f.material)+'<h3>'+f.name+'</h3><p>'+esc(f.about)+'</p><span class="sample-badge">本站风格预设</span></article>').join('');
 showModal('guide','四种角色，各有自己的样子','STYLE NOTES',
  '<p class="modal-intro">角色体系、材质、动作与配饰独立组合。Dots 与 Grok Bot 的造型取自提供的参考方向；Muse 人物和动物伙伴是本站创作预设。</p><div class="guide-grid">'+cards+'</div>'+
  '<p class="guide-footnote">毛绒顺着体积生长，非毛绒保留柔和光影。切换材质时，眼形、脸型、发型与角色比例保持一致。Pet 创作简报还需要后续制作与验证动画素材。</p>'+
  '<div class="modal-actions"><a class="button outlined" href="./editor.html">结构草图工具</a><button class="button primary" data-command="close">回到工作台</button></div>');
}
function showPrompt(){
 const prompt=buildPrompt(state,promptLanguage);
 showModal('prompt','把这个小角色带走','YOUR CHARACTER PROMPT',`<div class="prompt-toolbar"><div class="language-control" aria-label="Prompt 语言"><button class="${promptLanguage==='zh'?'selected':''}" data-language="zh" aria-pressed="${promptLanguage==='zh'}">中文</button><button class="${promptLanguage==='en'?'selected':''}" data-language="en" aria-pressed="${promptLanguage==='en'}">English</button></div><small>${prompt.length.toLocaleString()} 字符 · 随当前设定生成</small></div><pre id="fullPrompt" class="prompt-text" tabindex="0">${esc(prompt)}</pre><p class="guide-footnote">${state.reference.enabled?'生成前请另外附上参考图片；复制文本和 JSON 都不会携带图片。':'你也可以附上下载的样张作为风格参考，最终按此处的设定生成。'}</p><div class="modal-actions"><button class="button outlined" data-command="export-prompt">${icon('download')} 导出 TXT</button><button class="button outlined" data-command="copy-open">复制并打开 ChatGPT</button><button class="button primary" data-command="copy">${icon('copy')} 复制${promptLanguage==='en'?'英文':'中文'} Prompt</button></div>`);
}
function showActions(){const r=resolveCharacter(state);showModal('actions','挑一个自然的小动作','EXPRESSION IN MOTION',`<p class="modal-intro">先选姿态，再把视线、手部和道具一起处理。前六种提供双材质样张，其余动作生成完整制作指令。</p><div class="modal-action-grid">${Object.entries(ACTIONS).map(([id,a])=>`<button class="modal-action-card ${id===state.action?'selected':''}" data-modal-action="${id}" aria-pressed="${id===state.action}">${ART_KEYS.includes(id)?art(state.family,r.sample.material,id):`<span class="prompt-only">${icon(({camera:'camera',drink:'cup',read:'book',bounce:'jump',wave:'hand',blink:'eye'})[id])}</span>`}<b>${a.label}</b><small>${a.short}${ART_KEYS.includes(id)?'':' · Prompt 指令'}</small></button>`).join('')}</div>`);}
function showExpanded(){const r=resolveCharacter(state);showModal('expand',`${FAMILIES[state.family].template} · ${ACTIONS[r.sample.action].label}`,'CURATED CHARACTER SAMPLE',`<div class="expanded-art">${art(state.family,r.sample.material,state.action)}</div><p class="expanded-note">${MATERIALS[r.sample.material].label}风格样张 · 白底 · ${r.sample.width} × ${r.sample.height}<br>下载的是此样张，不包含你的自定义改动。</p><div class="modal-actions"><button class="button outlined" data-command="download-sample">${icon('download')} 下载样张 PNG</button><button class="button primary" data-command="prompt">查看我的 Prompt</button></div>`);}
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
 guide:showGuide,reference:showReference,prompt:showPrompt,'all-actions':showActions,expand:showExpanded,close:closeModal,copy:copyPrompt,'copy-open':copyAndOpen,'export-prompt':exportPrompt,'download-sample':downloadSample,
 'save-config':()=>{download(new Blob([exportConfiguration(state)],{type:'application/json'}),filename()+'-dot.json');toast('配置已保存，可随时重新导入；配置仅包含设定与文字，不包含图片。');},
 'import-config':()=>$('configFile').click(),
 reset:()=>{const next=createCharacter(state.family);next.reference=structuredClone(state.reference);next.reference.overrides=[];next.notes=state.notes;next.output=state.output;commit(next);toast('已恢复当前角色的视觉预设，可撤销。');},
 random:()=>{const seed='dot-'+Math.floor(Math.random()*100000);commit(randomizeCharacter(state,seed));toast('换了一套搭配；名称、参考特征与补充要求已保留。');},
 'seed-random':()=>{commit(randomizeCharacter(state,state.randomSeed));toast('已按种子 '+state.randomSeed+' 搭配。');},
 'apply-reference':applyReference,
 'remove-reference':()=>{const next=structuredClone(state);next.reference=createCharacter().reference;commit(next);closeModal();toast('已关闭参考图模式。');}
};
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 try{
  if(b.id==='undo'){undo();return;}if(b.id==='redo'){undo(true);return;}if(b.id==='closeModal'){closeModal();return;}
  if(b.dataset.command){commands[b.dataset.command]?.();return;}
  if(b.dataset.family){switchFamily(b.dataset.family);return;}
  if(b.dataset.path){const p=b.dataset.path,v=b.dataset.value;const locked=p==='expression'&&['sleep','work','magic','camera','read','blink'].includes(state.action);change(p,v);if(locked&&state.expression!==v)toast('这个动作需要'+EXPRESSIONS[state.expression].label+'表情；切换到发会儿呆后可自由修改。');return;}
  if(b.dataset.palette){commit(applyPalette(state,b.dataset.palette));return;}
  if(b.dataset.view){stageView=b.dataset.view;render();return;}
  if(b.dataset.tab){setTab(b.dataset.tab);return;}
  if(b.dataset.language){promptLanguage=b.dataset.language;showPrompt();return;}
  if(b.dataset.modalAction){change('action',b.dataset.modalAction);closeModal();return;}
 }catch(error){toast(error.message||'这项设置未能应用，请重试。');}
});
function setTab(id){activeTab=id;document.querySelectorAll('[data-tab]').forEach(b=>{const selected=b.dataset.tab===id;b.setAttribute('aria-selected',selected);b.tabIndex=selected?0:-1;});$('settings').setAttribute('aria-labelledby','tab-'+id);$('settings').scrollTop=0;renderSettings();}
document.querySelector('.setting-tabs').addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();const ids=['appearance','face','accessories','scene'],i=ids.indexOf(activeTab),index=e.key==='Home'?0:e.key==='End'?3:(i+(e.key==='ArrowRight'?1:3))%4;setTab(ids[index]);$('tab-'+ids[index]).focus();});
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
if(mc?.registerTool){const controller=new AbortController();const definitions=[{name:'read_character_prompt',title:'读取角色提示词',description:'Read the selected character, resolved anatomy, curated sample metadata, pending visual differences and Chinese/English prompts. No image generation.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:()=>({configuration:structuredClone(state),resolved:resolveCharacter(state),prompt:buildPrompt(state),englishPrompt:buildPrompt(state,'en')})},{name:'configure_character',title:'配置角色',description:'Replace the current Studio character with a validated v7 configuration. Does not generate images, upload references, copy data or create a Pet.',inputSchema:{type:'object',properties:{configuration:{type:'object'}},required:['configuration'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:input=>{const next=validateConfig(input.configuration);commit(next);return {configuration:structuredClone(state),resolved:resolveCharacter(state),prompt:buildPrompt(state)};}}];for(const def of definitions){try{Promise.resolve(mc.registerTool(def,{signal:controller.signal})).catch(()=>{});}catch{}}window.addEventListener('pagehide',()=>controller.abort(),{once:true});}
