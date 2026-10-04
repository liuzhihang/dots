'use strict';
Object.assign(DATA,{
 faceShape:{round:['圆润','圆润脸型'],oval:['椭圆','纵向椭圆脸型'],square:['方圆','大圆角方脸'],pear:['梨形','上窄下宽的梨形脸']},
 nose:{none:['无鼻子','不添加鼻子'],dot:['小圆点','小巧圆点鼻'],button:['纽扣鼻','立体感圆润纽扣鼻'],triangle:['三角鼻','圆角三角形鼻子'],long:['小长鼻','克制的小长鼻']},
 mouth:{none:['无嘴巴','不添加嘴巴'],smile:['微笑','简单微笑弧线'],tiny:['小嘴','短小嘴巴'],open:['惊讶嘴','小圆形张嘴']},
 hair:{none:['无头发','不添加头发'],short:['短发','蓬松短发'],bob:['波波头','齐耳波波头'],long:['长发','柔和长发'],curly:['卷发','圆润卷发'],quiff:['小翘发','一束向上翘起的短发'],bald:['极短发','光头或极短发']},
 glasses:{none:['无眼镜','不戴眼镜'],round:['圆框','细圆框眼镜'],square:['方框','圆角方框眼镜'],sunglasses:['墨镜','圆润小巧墨镜'],heart:['爱心框','爱心形眼镜']},
 hat:{none:['无帽子','不戴帽子'],beanie:['毛线帽','圆润针织毛线帽'],cap:['棒球帽','简洁棒球帽'],beret:['贝雷帽','柔软贝雷帽'],magichat:['魔法帽','圆润尖顶魔法帽'],mushroomhat:['蘑菇帽','红色圆润蘑菇帽'],crown:['小皇冠','小巧三尖皇冠']},
 clothing:{none:['无服装','不穿额外服装'],sweater:['针织上衣','简单针织上衣'],hoodie:['连帽衫','圆润连帽衫'],suit:['小西装','小巧西装'],dress:['连衣裙','简洁连衣裙']},
 personality:{gentle:['温柔','平静、温柔、舒缓'],lively:['活泼','开心、轻快、有活力'],curious:['好奇','略带疑惑，喜欢观察'],focused:['专注','安静、认真、稳定'],sleepy:['慵懒','放松、困倦、慢节奏'],cool:['酷酷','克制、冷静、沉稳']},
 previewFinish:{soft:['柔和','柔和渐变'],flat:['平涂','平涂色块'],outline:['描边','清晰轮廓线']}
});
DATA.action.idle=['静静待着','•','身体和眼睛保持静止，不自动眨眼'];
const LIVE_ACTIONS=['idle','breathe','blink','look','happy','bounce','listen','work','sleep','puzzled','skate','magic'];
const PERSONAS={gentle:{expression:'calm',pose:'neutral',action:'breathe',tempo:.8},lively:{expression:'happy',pose:'wave',action:'bounce',tempo:1.2},curious:{expression:'curious',pose:'chin',action:'puzzled',tempo:1},focused:{expression:'focused',pose:'neutral',action:'work',tempo:.8},sleepy:{expression:'sleepy',pose:'sit',action:'sleep',tempo:.65},cool:{expression:'calm',pose:'fold',action:'look',tempo:.75}};
const NEW_DEFAULT={version:4,faceShape:'round',bodyWidth:1,bodyHeight:1,headSize:1,eyeSpacing:48,eyeSize:1,nose:'none',mouth:'none',hair:'none',glasses:'none',hat:'none',clothing:'none',limbLength:1,personality:'gentle',tempo:.8,previewFinish:'soft',manualOverrides:[]};
const BASE={...structuredClone(DEFAULT),...NEW_DEFAULT};
const RANGES={bodyWidth:[.8,1.2],bodyHeight:[.8,1.2],headSize:[.85,1.2],eyeSpacing:[24,68],eyeSize:[.65,1.35],limbLength:[.7,1.4],tempo:[.65,1.6]};
const PLAIN_ENUMS={framing:['head','bust','full'],proportion:['two','three']};
const LIVE_ACCESSORIES=Object.keys(DATA.accessories).filter(k=>!['magichat','mushroomhat','glasses','sunglasses'].includes(k));
let state=structuredClone(BASE),tab='body',playing=true,toastTimer,copyTimer,sequenceTimer,sequenceStep=-1;
const $=id=>document.getElementById(id);
const html=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const label=(type,key)=>DATA[type]?.[key]?.[0]||key;
const desc=(type,key)=>{const v=DATA[type]?.[key];return v?.[v.length-1]||key};
const draw=(s,opts={})=>window.DotRenderer.render(s,{animated:false,playing:true,...opts});
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3800)}
function normalize(s){
 s.version=4;s.manualOverrides=[...new Set(s.manualOverrides||[])].filter(k=>['expression','pose','action','tempo'].includes(k));
 if(s.body==='snake'){s.limbs='none';s.bodyplan='blob'}
 if(isGeometry(s)&&s.bodyplan==='quad')s.bodyplan='blob';
 if(s.body==='human'&&!['chibi','biped'].includes(s.bodyplan))s.bodyplan='chibi';
 if(!['both','arms'].includes(s.limbs)&&['wave','fold','chin'].includes(s.pose))s.pose='neutral';
 if(!['feet','both'].includes(s.limbs)&&s.pose==='crossleg')s.pose='neutral';
 s.accessories=[...new Set(s.accessories)].filter(k=>LIVE_ACCESSORIES.includes(k)&&(k!=='skates'||['feet','both'].includes(s.limbs)));
 return s;
}
function upgrade(s){
 const r={...structuredClone(BASE),...structuredClone(s),version:4};
 if(!s.version||s.version<4){r.hair=s.body==='human'?(s.hair||'short'):'none';r.clothing=s.body==='human'?(s.clothing||'sweater'):'none';r.nose=s.body==='human'?'button':isAnimal(r)?'triangle':'none';r.mouth=s.body==='human'?'smile':'none';r.hat=s.accessories?.find(x=>['magichat','mushroomhat'].includes(x))||'none';r.glasses=s.accessories?.includes('sunglasses')?'sunglasses':s.accessories?.includes('glasses')?'round':'none';r.manualOverrides=[];if(!isGeometry(r)&&r.body!=='snake')r.limbs='both'}
 if(['plush','clay','glass'].includes(r.style)){r.material=r.style;r.style='smooth'}
 if(r.action==='rotate')r.action='look';
 r.sequence=(r.sequence||[]).map(a=>a==='rotate'?'look':a);
 return normalize(r);
}
const galleryPresets=PRESETS.map(p=>({...p,state:upgrade(p.state)}));
const QUICK_PRESETS=[
 {name:'蓝色 Dot',state:structuredClone(BASE)},
 {name:'读书小豆',state:{...BASE,name:'读书小豆',body:'spirit',color:'#343642',eyes:'oval',eyeColor:'#263044',limbs:'both',nose:'button',glasses:'round',accessories:['book'],hat:'beret'}},
 {name:'粉色团子',state:{...BASE,name:'粉色团子',color:'#E8A1BE',nose:'dot',mouth:'smile',hair:'quiff',hairColor:'#C9719A',limbs:'feet',expression:'happy',action:'happy',personality:'lively',tempo:1.2}},
 {name:'魔法方块',state:{...BASE,name:'魔法方块',body:'roundedcube',color:'#A293E8',hat:'magichat',accessories:['wand'],nose:'triangle',limbs:'both',action:'magic',effect:'stars'}},
 {name:'小猫伙伴',state:{...galleryPresets.find(p=>p.state.body==='cat').state,action:'breathe',expression:'calm',hat:'none',glasses:'none'}},
 {name:'针织小人',state:galleryPresets.find(p=>p.state.body==='human').state}
].map(p=>({...p,state:normalize(structuredClone(p.state))}));
function chip(type,key,selected=state[type]===key){return `<button class="chip ${selected?'selected':''}" data-type="${type}" data-value="${key}" aria-pressed="${!!selected}">${html(label(type,key))}</button>`}
function chips(type,keys=Object.keys(DATA[type])){return `<div class="chips">${keys.map(k=>chip(type,k,type==='accessories'?state.accessories.includes(k):state[type]===k)).join('')}</div>`}
function field(title,content,note=''){return `<div class="field"><div class="field-title">${title}${note?`<small>${note}</small>`:''}</div>${content}</div>`}
function selectField(key,title,choices=DATA[key]){return `<div class="field"><label class="field-title" for="field-${key}">${title}</label><select id="field-${key}" data-setting="${key}">${Object.entries(choices).map(([k,v])=>`<option value="${k}" ${state[key]===k?'selected':''}>${html(Array.isArray(v)?v[0]:v)}</option>`).join('')}</select></div>`}
function range(key,title,step=.05){return `<div class="field"><label class="field-title" for="range-${key}">${title}</label><div class="range-row"><input id="range-${key}" type="range" min="${RANGES[key][0]}" max="${RANGES[key][1]}" step="${step}" value="${state[key]}" data-range="${key}"><output for="range-${key}" id="value-${key}">${key==='eyeSpacing'?state[key]:Math.round(state[key]*100)+'%'}</output></div></div>`}
function colors(key,title,list){return field(title,`<div class="swatches">${list.map(([name,c])=>`<button class="swatch ${state[key].toUpperCase()===c.toUpperCase()?'selected':''}" style="background:${c}" data-color-key="${key}" data-color="${c}" aria-label="${name}" title="${name}" aria-pressed="${state[key].toUpperCase()===c.toUpperCase()}"></button>`).join('')}<input class="color-picker" type="color" data-setting="${key}" value="${state[key]}" aria-label="自定义${title}" title="自定义${title}"></div>`)}
const COLOR_SWATCHES=[['蓝色','#3064ED'],['浅紫','#A293E8'],['粉色','#E8A1BE'],['奶橙','#EAB385'],['薄荷','#93BCAD'],['奶油','#EEE4C9'],['黑豆','#343642']];
function heading(title,note='选择即刻变化'){return `<div class="panel-heading"><h2>${title}</h2><span>${note}</span></div>`}
function controls(){
 $('sectionTabs').innerHTML=[['body','造型'],['face','五官'],['hair','头发'],['outfit','穿搭'],['personality','性格'],['action','动作'],['ai','AI 成图']].map(([key,title])=>`<button data-tab="${key}" class="${tab===key?'active':''}" aria-pressed="${tab===key}">${title}</button>`).join('');
 let v='';
 if(tab==='body'){
 v=heading('先挑一个轮廓')+`<div class="shape-grid">${BASE_FORMS.map(k=>`<button class="shape-option ${state.body===k?'selected':''}" data-type="body" data-value="${k}" aria-label="造型：${label('body',k)}" aria-pressed="${state.body===k}">${draw({...BASE,body:k,color:state.color},{id:'shape-'+k})}${label('body',k)}</button>`).join('')}</div>`;
 v+=colors('color',state.body==='human'?'服装主色':'身体颜色',COLOR_SWATCHES);
 v+=`<div class="pair">${range('bodyWidth','身体宽度')}${range('bodyHeight','身体高度')}</div>`;
 v+=field('手脚',chips('limbs'),state.body==='snake'?'蛇保持无肢体':'随轮廓一起变化');
 v+=range('limbLength','手脚长度');
 if(!isGeometry(state))v+=field('身体结构',chips('bodyplan',state.body==='human'?['chibi','biped']:state.body==='snake'?['blob']:['blob','chibi','biped','quad']));
 v+=`<div class="pair">${range('headSize',isGeometry(state)?'五官比例':'头部比例')}${selectField('faceShape','脸型')}</div>`;
 v+=`<label class="field-title" for="nameInput">角色名字</label><input id="nameInput" class="text-input" maxlength="24" value="${html(state.name)}" placeholder="给它起个名字">`;
 if(state.body==='cat')v+=field('毛色花纹',chips('pattern'));
 }
 if(tab==='face'){
 v=heading('让它有自己的表情')+field('脸型',chips('faceShape'))+field('眼睛',chips('eyes'))+`<div class="pair">${range('eyeSpacing','眼距',1)}${range('eyeSize','眼睛大小')}</div>`+colors('eyeColor','眼睛颜色',[['白色眼睛','#FFFFFF'],['深色眼睛','#263044'],['蓝色眼睛','#6096E8'],['紫色眼睛','#8B73CD']])+field('鼻子',chips('nose'))+field('嘴巴',chips('mouth'))+field('表情',chips('expression'))+field('眼镜',chips('glasses'))+`<p class="helper">睡觉、眨眼和专注工作会临时优先使用对应眼神；切换动作后恢复所选表情。</p>`;
 }
 if(tab==='hair'){
 v=heading('换个发型')+field('发型',chips('hair'))+colors('hairColor','头发颜色',[['深棕','#3A3438'],['栗色','#78513E'],['奶棕','#B98D63'],['浅金','#DCCC9F'],['银灰','#BBC1CB'],['淡紫','#A293D6'],['粉发','#D89EB9']])+field('帽子',chips('hat'));
 if(state.body==='human')v+=colors('skinColor','肤色',[['浅肤','#F1D5BD'],['暖肤','#E7BFA6'],['小麦','#C68F6B'],['深肤','#845941']]);
 v+=`<div class="notice">帽子会戴在头发外层，保留两侧发型；发色、眼镜和五官互不覆盖。</div>`;
 }
 if(tab==='outfit'){
 v=heading('穿戴与小物件')+field('服装',chips('clothing'))+field('眼镜',chips('glasses'))+field('帽子',chips('hat'))+field('配饰与道具',chips('accessories',LIVE_ACCESSORIES),`已选 ${state.accessories.length} 件`)+field('轻量特效',chips('effect'))+`<p class="helper">同类帽子、眼镜各保留一种；道具最多两件，没有手时放在身旁。无脚角色不穿溜冰鞋。</p><button class="quiet" id="clearAccessories">清空配饰</button>`;
 }
 if(tab==='personality'){
 v=heading('给它一点性格')+`<div class="personality-grid">${Object.entries(PERSONAS).map(([key,p])=>`<button class="personality-card ${state.personality===key?'selected':''}" data-persona="${key}" aria-pressed="${state.personality===key}">${draw({...state,...p,accessories:[],hat:'none',hair:'none',glasses:'none'},{id:'persona-'+key})}<span><strong>${label('personality',key)}</strong><small>${desc('personality',key)}</small></span></button>`).join('')}</div><p class="helper">性格设定表情、姿态、动作与节奏。你手动改过的项目会保留，其他项目随性格变化。</p>`;
 v+=state.manualOverrides.length?`<div class="notice">保留你的手动设置：${state.manualOverrides.map(k=>({expression:'表情',pose:'姿态',action:'动作',tempo:'节奏'}[k])).join('、')}<br><button id="applyPersona" class="mini-action">重新应用当前性格</button></div>`:'';
 v+=field('表情',chips('expression'))+field('姿态',chips('pose',['neutral','sit','wave','fold','chin','crossleg','magic']))+range('tempo','动作节奏')+`<p class="helper">没有手时，挥手、抱臂与托腮会改为自然姿态；不会偷偷增加手脚。</p>`;
 }
 if(tab==='action'){
 v=heading('让小伙伴动起来',playing?'正在播放':'已暂停')+field('主要动作',chips('action',LIVE_ACTIONS))+range('tempo','动作节奏')+field('姿态',chips('pose',['neutral','sit','wave','fold','chin','crossleg','magic']))+field('动作顺序',`<div class="sequence-row"><select id="nextAction" aria-label="下一步动作">${LIVE_ACTIONS.map(k=>`<option value="${k}">${label('action',k)}</option>`).join('')}</select><button id="addSequence" class="outline" ${state.sequence.length>=4?'disabled':''}>添加</button></div><div class="sequence-list"><span>1 ${label('action',state.action)}</span>${state.sequence.map((k,i)=>`<span>${i+2} ${label('action',k)}<button data-remove-step="${i}" aria-label="移除第 ${i+2} 步">×</button></span>`).join('')}</div><button id="playSequence" class="mini-action sequence-play">${sequenceStep>=0?'停止顺序播放':'播放整段动作'}</button>`,`最多 5 步`)+field('背景',chips('scene',['transparent','solid','gradient','desk','bedroom','forest','rink','space']))+`<p class="helper">每步播放 4 秒。弹跳只平移、不拉伸身体；专注工作不自动眨眼。动态 SVG 导出当前主要动作，整段顺序会写入创作说明。</p>`;
 }
 if(tab==='ai'){
 v=heading('在 ChatGPT 中精细成图','这些设置用于最终生成')+`<p class="helper" style="margin:0 0 15px">主画布始终是实时 2D 造型预览。这里选择最终图片的画法与材质，复制说明后在 ChatGPT 中生成。</p><div class="pair">${selectField('style','最终画法')}${selectField('material','整体材质')}</div>`+field('造型语言',chips('design'))+selectField('scene','最终背景 / 场景')+selectField('output','输出用途');
 if(isAnimal(state))v+=selectField('fur','毛发细节');
 if(state.body==='human')v+=`<div class="pair">${selectField('framing','成图构图',{head:'头像特写',bust:'半身人物',full:'全身人物'})}${selectField('proportion','成图头身比',{two:'2 头身',three:'3 头身'})}</div>`+selectField('skinMaterial','皮肤材质')+selectField('hairMaterial','头发材质')+selectField('clothMaterial','服装材质');
 v+=`<label class="reference-label"><input type="checkbox" id="referenceMode" ${state.reference?'checked':''}>沿用我的参考图</label><p class="helper">这里不上传图片。打开 ChatGPT 后先附上参考图，再粘贴创作说明。</p><div class="notice">Pet 需要先确认完整角色，再制作 9 种动画与 16 个注视方向，并通过技术与视觉校验。本页导出的 SVG / PNG 不能直接作为已验证 Pet 使用。</div>`;
 }
 $('controls').innerHTML=v;
}
function sampleStyle(art){const g={'gallery-dot':['300% 200%','0% 0%'],'gallery-bean':['320% 213.333%','50% 0%'],'gallery-shiba':['300% 200%','100% 0%'],'gallery-tiger':['300% 200%','0% 100%'],'gallery-human':['279.273% 186.182%','50% 100%'],'gallery-robot':['300% 200%','100% 100%']};if(g[art])return `background-image:url('./assets/collection.webp');background-size:${g[art][0]};background-position:${g[art][1]}`;return typeof art==='number'?`background-image:url('./assets/avatar-atlas.webp');background-size:300% 200%;background-position:${art%3*50}% ${Math.floor(art/3)*100}%`:`background-image:url('./assets/${art}.webp');background-size:contain;background-position:center`}
function gallery(){
 $('presetGrid').innerHTML=QUICK_PRESETS.map((p,i)=>`<button class="preset ${state.name===p.state.name?'active':''}" data-preset="${i}" aria-label="使用${p.name}预设"><span class="preset-preview">${draw(p.state,{id:'preset-'+i})}</span>${p.name}</button>`).join('');
 $('allSubjects').innerHTML=Object.entries(SUBJECT_GROUPS).map(([g,keys])=>`<div class="collection-group"><strong>${g}</strong><div class="chips">${keys.map(k=>chip('body',k)).join('')}</div></div>`).join('');
 $('referenceGallery').innerHTML=galleryPresets.map((p,i)=>`<button class="reference-thumb" data-gallery="${i}" aria-label="载入${p.name}材质参考"><span style="${sampleStyle(p.art)}"></span>${p.name}</button>`).join('');
}
function result(){
 const displayed=sequenceStep>=0?{...state,action:[state.action,...state.sequence][sequenceStep]}:state;
 $('showcase').innerHTML=draw(displayed,{animated:true,playing,id:'live'});
 $('characterTitle').textContent=state.name||'我的 Dot';$('bodyLabel').textContent=label('body',state.body);
 $('actionBadge').textContent=(sequenceStep>=0?`${sequenceStep+1}/${state.sequence.length+1} · `:'')+label('action',displayed.action)+(playing?'':' · 已暂停');
 $('playPause').textContent=playing?'Ⅱ 暂停':'▷ 播放';$('playPause').setAttribute('aria-label',playing?'暂停动作':'播放动作');
 $('canvas').classList.toggle('checker',state.scene==='transparent'||['sticker','pet'].includes(state.output));
 $('finishControls').innerHTML=Object.keys(DATA.previewFinish).map(k=>`<button data-type="previewFinish" data-value="${k}" class="${state.previewFinish===k?'selected':''}" aria-pressed="${state.previewFinish===k}" aria-label="预览画法：${label('previewFinish',k)}">${label('previewFinish',k)}</button>`).join('');
 $('previewNote').textContent=isGeometry(state)?'实时 2D 造型预览 · 毛绒、3D 与写实材质在 ChatGPT 中生成':'实时 2D 简化角色 · 人物、动物结构与精细材质以 ChatGPT 成图为准';
 const pet=state.output==='pet';
 $('purposeControls').innerHTML=`<button data-purpose="avatar" class="${!pet?'selected':''}" aria-pressed="${!pet}">角色图</button><button data-purpose="pet" class="${pet?'selected':''}" aria-pressed="${pet}">ChatGPT Pet</button>`;
 $('purposeHelp').textContent=pet?'先确认全身角色，再制作动画、注视方向并校验。':`${label('style',state.style)} · ${label('material',state.material)} · ${label('output',state.output)}，按当前五官、穿搭和动作生成。`;
 $('copyPrompt').textContent=pet?'复制 Pet 创作说明':'复制创作说明';
 $('promptPreview').textContent=buildPrompt(state);
}
function render(){normalize(state);controls();gallery();result()}
function stopSequence(){clearInterval(sequenceTimer);sequenceTimer=null;sequenceStep=-1}
function change(key,value){
 stopSequence();let message='';
 if(key==='accessories'){
 if(value==='skates'&&!['feet','both'].includes(state.limbs)){toast('先选择短脚，再穿上溜冰鞋');return}
 const props=['phone','macbook','tea','book','wand'];
 if(state.accessories.includes(value))state.accessories=state.accessories.filter(k=>k!==value);
 else{if(props.includes(value)&&state.accessories.filter(k=>props.includes(k)).length>=2){toast('最多同时放两件道具，先移除一件再试试');return}state.accessories.push(value)}
 }else{
 const old=structuredClone(state);state[key]=value;
 if(['expression','pose','action','tempo'].includes(key))state.manualOverrides=[...new Set([...state.manualOverrides,key])];
 if(key==='body'&&old.body!==value){if(value==='human'){state.bodyplan='chibi';state.limbs='both';state.nose='button';state.mouth='smile';state.eyes='natural';state.eyeColor='#263044';if(state.hair==='none')state.hair='short';if(state.clothing==='none')state.clothing='sweater'}else if(!GEOMETRY.includes(value)){state.bodyplan=naturalPlan(value);state.limbs=value==='snake'?'none':'both';state.eyes='natural';state.eyeColor='#263044';state.nose='triangle'}else{state.bodyplan='blob'}}
 if(key==='limbs'&&value!=='both'&&state.bodyplan==='biped'&&isGeometry(state))state.bodyplan='blob';
 normalize(state);
 if(old.pose!==state.pose&&key!=='pose')message='手脚变化后，姿态已调整为自然姿态';
 if(key==='pose'&&state.pose!==value)message='这个姿态需要相应手脚，已保持自然姿态';
 if(key==='limbs'&&state.body==='snake'&&value!=='none')message='蛇保持天然无肢体结构';
 const removed=old.accessories.filter(k=>!state.accessories.includes(k));if(removed.length)message='已移除不适用的'+removed.map(k=>label('accessories',k)).join('、');
 }
 render();if(message)toast(message);
}
function applyPersona(key,reset=false){stopSequence();state.personality=key;if(reset)state.manualOverrides=[];for(const [k,v]of Object.entries(PERSONAS[key]))if(!state.manualOverrides.includes(k))state[k]=v;normalize(state);render();if(state.manualOverrides.length)toast('已应用性格，保留手动调整的项目')}
function buildPrompt(input){
 const s=normalize(structuredClone(input)),pet=s.output==='pet',multi=['storyboard','keyframes','pet'].includes(s.output),chain=multi?[s.action,...s.sequence]:[s.action];
 const ref=s.reference?'请先等待我附上参考图，以图中角色为身份基准；当前尚未附图，不要声称已读取。以下选择作为改造方向；若会改变其核心身份，请先确认。\n':'';
 const limbs=s.body==='snake'?'天然无肢体盘曲蛇身':desc('limbs',s.limbs);
 const clothes=desc('clothing',s.clothing);
 const hair=desc('hair',s.hair);
 const bodyplan=desc('bodyplan',s.bodyplan);
 let identity=`${ref}创作名为「${s.name.trim()||'Dot'}」的单个原创角色。主体：${desc('body',s.body)}。身体结构：${bodyplan}。主体主色 ${s.color}，${s.body==='human'?'肤色 '+s.skinColor+'，':''}保留主体应有的辨识特征。\n脸型：${desc('faceShape',s.faceShape)}。宽度 ${Math.round(s.bodyWidth*100)}%，高度 ${Math.round(s.bodyHeight*100)}%，头部比例 ${Math.round(s.headSize*100)}%，相对于该主体的标准轮廓。${limbs}；手脚长度 ${Math.round(s.limbLength*100)}%。`;
 if(isAnimal(s))identity+='保留物种应有的耳朵、尾巴和花纹，手脚数量严格按所选身体结构；不额外添加肢体。';
 if(s.body==='cat')identity+=desc('pattern',s.pattern)+'。';
 const face=`眼睛：${desc('eyes',s.eyes)}，眼睛/瞳孔颜色 ${s.eyeColor}，相对大小 ${Math.round(s.eyeSize*100)}%，以 440 单位设计画布计双眼中心距 ${s.eyeSpacing} 单位。\n鼻子：${desc('nose',s.nose)}。嘴巴：${desc('mouth',s.mouth)}。基础表情：${desc('expression',s.expression)}。\n${hair}，发色 ${s.hairColor}。${desc('glasses',s.glasses)}；${desc('hat',s.hat)}。帽子覆盖头发顶层但保留侧发，眼镜位于眼睛外层，不遮挡鼻子。所有五官随脸型与头部比例对齐；环形角色的五官位于上方实体区域，保留中央孔洞。`;
 let style=`画法：${desc('style',s.style)}。整体材质：${desc('material',s.material)}。造型语言：${desc('design',s.design)}。\n${s.style!=='smooth'?'用所选画法转译材质纹理，不混入照片式三维光照。':''}实时 2D 预览只确认结构与搭配；最终按以上画法和材质精细生成。`;
 if(isAnimal(s)&&s.material==='plush')style+='毛发：'+desc('fur',s.fur)+'。';
 if(s.body==='human')for(const [part,key]of [['皮肤','skinMaterial'],['头发','hairMaterial'],['服装','clothMaterial']])if(s[key]!=='inherit')style+=`${part}局部覆盖：${desc(key,s[key])}。`;
 const outfit=`服装：${clothes}。配饰与道具：${s.accessories.length?s.accessories.map(k=>desc('accessories',k)).join('、'):'无额外配饰'}。每手最多拿一件道具，没有手时道具放在身旁，不增加肢体。穿戴物适配主体体型，不遮住五官。\n特效：${desc('effect',s.effect)}。不添加未选物品。`;
 const motion=`性格：${desc('personality',s.personality)}。以下手动/最终配置优先于性格概括：表情 ${label('expression',s.expression)}，姿态 ${desc('pose',s.pose)}，动作节奏为标准的 ${Math.round(s.tempo*100)}%。\n${multi?'按顺序独立呈现各动作，每步约 4 秒：':'本次静态成图取主要动作的代表瞬间：'}\n${chain.map((a,i)=>`${i+1}. ${label('action',a)}：${desc('action',a).replace(/不添加眉毛、嘴巴或问号文字/g,'保留选定五官，不新增文字').replace(/不添加嘴巴/g,'保留选定嘴巴')}`).join('\n')}\n睡觉使用闭眼，专注工作双眼睁开且稳定；眨眼仅在明确选择眨眼动作时发生。动作结束后恢复基础表情。弹跳保持体积、宽高与所有身体比例，不挤压、不拉伸、不融化；动作不新增手脚。`;
 const scene=pet||s.output==='sticker'?desc('scene','transparent'):s.output==='sheet'?'干净浅色背景':desc('scene',s.scene);
 const composition=s.body==='human'?`${s.proportion==='two'?'2':'3'} 头身成图；${pet?'完整全身':({head:'头像特写到肩部',bust:'半身自然裁切',full:'完整全身'}[s.framing])}。`:'';
 const petBrief=pet?'【ChatGPT Pet 创作流程】\n先创作单个完整全身、透明背景的角色图，预留安全边距，确认后再制作动画。v2 图集为 1536×2288，8 列×11 行，每格 192×208。前 9 行依次为 idle、running-right、running-left、waving、jumping、failed、waiting、running、review；后两行为从正上方开始、顺时针排列的 16 个注视方向。所有素材必须保持角色、比例、锚点、花纹与配饰一致，展示动画预览并通过技术和视觉校验后才可创建或启用。SVG、PNG、GIF 或参考图本身不是已验证 Pet；若当前对话没有制作工具，提供角色图和制作说明，不要声称已经创建或安装。\n\n':'';
 return petBrief+`【角色与结构】\n${identity}\n\n【五官与头部】\n${face}\n\n【画法与材质】\n${style}\n\n【穿搭与配饰】\n${outfit}\n\n【性格、姿态与动作】\n${motion}\n\n【场景与输出】\n${scene}。${desc('output',s.output)}。${composition}\n\n【一致性】\n每幅或每格仅有同一个原创角色，居中并保留足够边距。不要裁切全身构图中的帽子、头发、耳朵、尾巴和手脚。保持脸型、五官间距、颜色、花纹和配饰稳定。透明背景保留 alpha，不画入棋盘格。不添加文字、水印或品牌标志，不复制官方角色资产。`;
}
function validateConfig(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))throw Error('配置必须是 JSON 对象');
 if(![1,2,3,4].includes(raw.version))throw Error('暂不支持这个配置版本');
 if(typeof raw.name!=='string'||raw.name.length>24)throw Error('角色名称需在 24 字以内');
 if(typeof raw.reference!=='boolean')throw Error('参考图设置无效');
 for(const k of ['body','style','limbs','action','scene','output'])if(typeof raw[k]!=='string'||!Object.hasOwn(DATA[k],raw[k])&&!(k==='style'&&['plush','clay','glass'].includes(raw[k])))throw Error('配置中的 '+k+' 无效');
 for(const k of ['material','eyes','design','bodyplan','fur','pose','expression','effect','pattern','skinMaterial','hairMaterial','clothMaterial','faceShape','nose','mouth','hair','glasses','hat','clothing','personality','previewFinish'])if(raw[k]!==undefined&&!Object.hasOwn(DATA[k],raw[k]))throw Error('配置中的 '+k+' 无效');
 for(const k of ['color','eyeColor','skinColor','hairColor'])if(raw[k]!==undefined&&(typeof raw[k]!=='string'||!/^#[0-9a-f]{6}$/i.test(raw[k])))throw Error('颜色必须为有效的六位 HEX 值');
 for(const [k,[min,max]]of Object.entries(RANGES))if(raw[k]!==undefined&&(!Number.isFinite(raw[k])||raw[k]<min||raw[k]>max))throw Error(k+' 超出可调范围');
 for(const [k,vals]of Object.entries(PLAIN_ENUMS))if(raw[k]!==undefined&&!vals.includes(raw[k]))throw Error('人物配置无效');
 if(!Array.isArray(raw.accessories)||raw.accessories.length>Object.keys(DATA.accessories).length||raw.accessories.some(x=>!Object.hasOwn(DATA.accessories,x)))throw Error('配饰配置无效');
 if(!Array.isArray(raw.sequence)||raw.sequence.length>4||raw.sequence.some(x=>!Object.hasOwn(DATA.action,x)))throw Error('动作顺序无效');
 if(raw.manualOverrides!==undefined&&(!Array.isArray(raw.manualOverrides)||raw.manualOverrides.some(k=>!['expression','pose','action','tempo'].includes(k))))throw Error('手动设置配置无效');
 const clean={};for(const k of Object.keys(BASE))if(raw[k]!==undefined)clean[k]=raw[k];
 return upgrade(clean);
}
function filename(){return (state.name||'dot').replace(/[^\p{L}\p{N}_-]/gu,'-').slice(0,40)||'dot'}
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000)}
async function copy(){const text=buildPrompt(state);try{await navigator.clipboard.writeText(text);return true}catch(e){const el=document.createElement('textarea');el.value=text;el.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(el);el.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}el.remove();return ok}}
function wire(){
 document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.tab){tab=b.dataset.tab;controls();return}
 if(b.dataset.type){change(b.dataset.type,b.dataset.value);return}
 if(b.dataset.color){change(b.dataset.colorKey,b.dataset.color);return}
 if(b.dataset.persona){applyPersona(b.dataset.persona);return}
 if(b.dataset.preset!==undefined||b.dataset.gallery!==undefined){stopSequence();const p=b.dataset.preset!==undefined?QUICK_PRESETS[Number(b.dataset.preset)]:galleryPresets[Number(b.dataset.gallery)];const output=state.output,reference=state.reference;state=structuredClone(p.state);state.output=output;state.reference=reference;render();toast('已载入 '+p.name);return}
 if(b.dataset.purpose){state.output=b.dataset.purpose;render();return}
 if(b.hasAttribute('data-remove-step')){stopSequence();state.sequence.splice(Number(b.dataset.removeStep),1);render();return}
 if(b.id==='clearAccessories'){state.accessories=[];render();return}
 if(b.id==='applyPersona'){applyPersona(state.personality,true);return}
 if(b.id==='addSequence'){if(state.sequence.length<4){stopSequence();state.sequence.push($('nextAction').value);render()}return}
 if(b.id==='playSequence'){
 if(sequenceStep>=0){stopSequence();result();controls();return}
 playing=true;sequenceStep=0;result();controls();sequenceTimer=setInterval(()=>{sequenceStep++;if(sequenceStep>state.sequence.length){stopSequence();result();controls();return}result()},4000);return;
 }
 });
 $('controls').addEventListener('input',e=>{
 const el=e.target;if(el.id==='nameInput'){state.name=el.value;result();return}
 if(el.dataset.range){const key=el.dataset.range;state[key]=Number(el.value);if(key==='tempo')state.manualOverrides=[...new Set([...state.manualOverrides,key])];$('value-'+key).textContent=key==='eyeSpacing'?el.value:Math.round(Number(el.value)*100)+'%';result();return}
 if(el.type==='color'){state[el.dataset.setting]=el.value.toUpperCase();result();return}
 });
 $('controls').addEventListener('change',e=>{const el=e.target;if(el.dataset.setting&&el.type!=='color')change(el.dataset.setting,el.value);if(el.type==='color')controls();if(el.id==='referenceMode'){state.reference=el.checked;result()}});
 $('playPause').onclick=()=>{playing=!playing;if(sequenceStep>=0){stopSequence();result()}else{window.DotRenderer.pause($('showcase').querySelector('svg'),!playing);$('playPause').textContent=playing?'Ⅱ 暂停':'▷ 播放';$('playPause').setAttribute('aria-label',playing?'暂停动作':'播放动作');$('actionBadge').textContent=label('action',state.action)+(playing?'':' · 已暂停')}if(tab==='action')controls()};
 $('copyPrompt').onclick=async()=>{const ok=await copy();toast(ok?'创作说明已复制，去 ChatGPT 粘贴即可':'复制未成功，请展开创作说明手动复制');if(ok){$('copyPrompt').textContent='已复制';clearTimeout(copyTimer);copyTimer=setTimeout(()=>{$('copyPrompt').textContent=state.output==='pet'?'复制 Pet 创作说明':'复制创作说明'},1800)}};
 $('copyOpen').onclick=async()=>{const promise=copy(),opened=window.open('https://chatgpt.com/','_blank');if(opened)opened.opener=null;const ok=await promise;toast(ok?(opened?'已复制，在 ChatGPT 粘贴即可':'已复制，请手动打开 chatgpt.com'):'复制未成功，请展开创作说明手动复制')};
 $('saveConfig').onclick=()=>{download(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),filename()+'-config.json');toast('配置已导出，可随时重新导入')};
 $('loadConfig').onclick=()=>$('configFile').click();
 $('configFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>50000)throw Error('配置文件过大');state=validateConfig(JSON.parse(await f.text()));stopSequence();render();toast('已还原 '+(state.name||'未命名角色'))}catch(err){toast(err instanceof SyntaxError?'无法读取 JSON，请检查文件格式':err.message)}e.target.value=''};
 $('resetConfig').onclick=()=>{stopSequence();state=structuredClone(BASE);playing=true;render();toast('已重置为蓝色 Dot')};
 $('exportSVG').onclick=()=>{download(new Blob([draw(state,{id:'dot-export',animated:false})],{type:'image/svg+xml'}),filename()+'.svg');toast('已导出当前实时造型 SVG')};
 $('exportAnimated').onclick=()=>{download(new Blob([draw(state,{id:'dot-animated',animated:true,playing:true})],{type:'image/svg+xml'}),filename()+'-'+state.action+'.svg');toast('已导出主要动作 SVG；不是 Pet 图集')};
 $('exportPNG').onclick=()=>{const source=draw(state,{id:'dot-png',animated:false}),im=new Image(),url=URL.createObjectURL(new Blob([source],{type:'image/svg+xml'}));im.onload=()=>{const c=document.createElement('canvas');c.width=1320;c.height=1260;const ctx=c.getContext('2d');ctx.drawImage(im,0,0,1320,1260);c.toBlob(b=>{if(b){download(b,filename()+'.png');toast('已导出当前静态造型 PNG')}else toast('PNG 导出失败，请先导出 SVG')},'image/png');URL.revokeObjectURL(url)};im.onerror=()=>{URL.revokeObjectURL(url);toast('PNG 导出失败，请先导出 SVG')};im.src=url};
}
wire();render();
const mc=document.modelContext;
if(mc?.registerTool){const ac=new AbortController();const defs=[{name:'read_character_prompt',title:'读取角色提示词',description:'Read current live character configuration and prompt.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:()=>({configuration:structuredClone(state),prompt:buildPrompt(state)})},{name:'configure_character',title:'配置角色',description:'Replace current live character from version 1-4 configuration. Does not generate AI images, copy data, or create a Pet.',inputSchema:{type:'object',properties:{configuration:{type:'object'}},required:['configuration'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:input=>{state=validateConfig(input.configuration);stopSequence();render();return{configuration:structuredClone(state),prompt:buildPrompt(state)}}}];for(const def of defs)try{Promise.resolve(mc.registerTool(def,{signal:ac.signal})).catch(()=>{})}catch(e){}window.addEventListener('pagehide',()=>ac.abort(),{once:true})}
