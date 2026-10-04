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
 ears:{auto:['随主体','使用主体原生耳朵'],none:['无耳朵','不添加耳朵'],round:['圆耳','一对圆耳朵'],pointed:['尖耳','一对圆角尖耳'],long:['长耳','一对柔软长耳'],floppy:['垂耳','一对柔软垂耳']},
 tail:{auto:['随主体','使用主体原生尾巴'],none:['无尾巴','不添加尾巴'],curl:['卷尾','一条卷曲尾巴'],long:['长尾','一条细长弯尾'],puff:['绒球尾','一枚圆润绒球尾']},
 horns:{auto:['随主体','使用主体原生角'],none:['无角','不添加角'],short:['双短角','一对短小圆角'],unicorn:['独角','单枚圆润独角']},wings:{none:['无翅膀','不添加翅膀'],feather:['羽翼','一对短圆羽翼'],bat:['小龙翼','一对圆角膜翼']},
 marking:{auto:['随主体','使用主体原生花纹'],none:['素色','不添加额外斑点或条纹'],freckles:['雀斑','左右脸颊各三点雀斑'],spots:['色斑','少量固定位置的色斑'],stripes:['条纹','额头与两侧的简洁条纹']},
 brows:{none:['无眉毛','不添加眉毛'],soft:['柔和眉','柔和弧形眉毛'],straight:['平眉','简洁水平眉毛'],angled:['挑眉','微微向内倾斜的眉毛']},highlights:{none:['无高光','不添加眼睛高光'],single:['单点','每眼单点高光'],double:['双点','每眼两点高光']},
 previewFinish:{soft:['柔和','柔和渐变'],flat:['平涂','平涂色块'],outline:['描边','清晰轮廓线']}
});
Object.assign(DATA.accessories,{console:['游戏机','无标志的掌上游戏机'],sign:['文字牌','可选文字小牌']});
DATA.proportion={balanced:['协调比例','协调均衡的 Q 版比例，不强制固定头身比'],two:['2 头身','2 头身比例'],three:['3 头身','3 头身比例']};
DATA.bodyplan.biped[1]='双足拟人轮廓；手脚的有无和数量遵从独立肢体设置';DATA.bodyplan.quad[1]='横向四足动物躯干；手脚的有无遵从独立肢体设置，选择短脚时使用四足';
DATA.action.idle=['静静待着','•','身体和眼睛保持静止，不自动眨眼'];
const canShapeFace=s=>['sphere','circle','spirit','human'].includes(s.body)||isAnimal(s)&&!['horse','penguin','snake'].includes(s.body);
const LIVE_ACTIONS=['idle','breathe','blink','look','happy','bounce','listen','work','sleep','puzzled','skate','magic'];
const PERSONAS={gentle:{expression:'calm',pose:'neutral',action:'breathe',tempo:.8,motionIntensity:.7},lively:{expression:'happy',pose:'wave',action:'bounce',tempo:1.2,motionIntensity:1.2},curious:{expression:'curious',pose:'chin',action:'puzzled',tempo:1,motionIntensity:.9},focused:{expression:'focused',pose:'neutral',action:'work',tempo:.8,motionIntensity:.35},sleepy:{expression:'sleepy',pose:'sit',action:'sleep',tempo:.65,motionIntensity:.4},cool:{expression:'calm',pose:'fold',action:'look',tempo:.75,motionIntensity:.5}};
const NEW_DEFAULT={version:5,ears:'auto',earSize:1,tail:'auto',tailSize:1,horns:'auto',wings:'none',marking:'auto',markingColor:'#B88D73',faceY:0,eyeY:0,eyeTilt:0,pupilSize:1,highlights:'single',heterochromia:false,eyeColorRight:'#87B5A4',brows:'none',blush:0,noseSize:1,noseY:0,mouthSize:1,mouthY:0,motionIntensity:.7,interaction:'off',signText:'Hello',randomSeed:'dot-01',roleEnabled:false,roleBrief:'',roleJob:'',roleWorkflow:'',roleStarters:'',proportion:'balanced',faceShape:'round',bodyWidth:1,bodyHeight:1,headSize:1,eyeSpacing:48,eyeSize:1,nose:'none',mouth:'none',hair:'none',glasses:'none',hat:'none',clothing:'none',limbLength:1,personality:'gentle',tempo:.8,previewFinish:'soft',manualOverrides:[]};
const BASE={...structuredClone(DEFAULT),...NEW_DEFAULT};
const RANGES={bodyWidth:[.8,1.2],bodyHeight:[.8,1.2],headSize:[.85,1.2],eyeSpacing:[24,68],eyeSize:[.65,1.35],limbLength:[.7,1.4],tempo:[.65,1.6],earSize:[.7,1.3],tailSize:[.7,1.3],faceY:[-16,16],eyeY:[-12,12],eyeTilt:[-18,18],pupilSize:[.5,1.3],blush:[0,1],noseSize:[.6,1.4],noseY:[-10,10],mouthSize:[.6,1.4],mouthY:[-10,10],motionIntensity:[.2,1.4]};
const PLAIN_ENUMS={framing:['head','bust','full'],proportion:['balanced','two','three'],interaction:['off','gaze','touch']};
const LIVE_ACCESSORIES=Object.keys(DATA.accessories).filter(k=>!['magichat','mushroomhat','glasses','sunglasses'].includes(k));
let openedDetails=new Set(),history=[],future=[],historyKey='',focusedPart='',interactionTimer,pressStart=0;
let state=structuredClone(BASE),tab='body',playing=true,toastTimer,copyTimer,sequenceTimer,sequenceStep=-1;
const $=id=>document.getElementById(id);
const html=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const label=(type,key)=>DATA[type]?.[key]?.[0]||key;
const desc=(type,key)=>{const v=DATA[type]?.[key];return v?.[v.length-1]||key};
const draw=(s,opts={})=>window.DotRenderer.render(s,{animated:false,playing:true,...opts});
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3800)}
function normalize(s){
 s.version=5;s.manualOverrides=[...new Set(s.manualOverrides||[])].filter(k=>['expression','pose','action','tempo','motionIntensity'].includes(k));
 if(s.body==='snake'){s.limbs='none';s.bodyplan='blob';s.tail='auto';s.tailSize=1}
 if(isGeometry(s)&&s.bodyplan==='quad')s.bodyplan='blob';
 if(s.body==='human'&&!['chibi','biped'].includes(s.bodyplan))s.bodyplan='chibi';
 if(!['both','arms'].includes(s.limbs)&&['wave','fold','chin'].includes(s.pose))s.pose='neutral';
 if(!['feet','both'].includes(s.limbs)&&s.pose==='crossleg')s.pose='neutral';
 s.accessories=[...new Set(s.accessories)].filter(k=>LIVE_ACCESSORIES.includes(k)&&(k!=='skates'||['feet','both'].includes(s.limbs)));
 const props=['phone','macbook','tea','book','wand','console','sign'];let count=0;s.accessories=s.accessories.filter(k=>!props.includes(k)||count++<2);
 return s;
}
function upgrade(s){
 const r={...structuredClone(BASE),...structuredClone(s),version:5};
 if(!s.version||s.version<4){r.hair=s.body==='human'?(s.hair||'short'):'none';r.clothing=s.body==='human'?(s.clothing||'sweater'):'none';r.nose=s.body==='human'?'button':isAnimal(r)?'triangle':'none';r.mouth=s.body==='human'?'smile':'none';r.hat=s.accessories?.find(x=>['magichat','mushroomhat'].includes(x))||'none';r.glasses=s.accessories?.includes('sunglasses')?'sunglasses':s.accessories?.includes('glasses')?'round':'none';r.manualOverrides=[];if(!isGeometry(r)&&r.body!=='snake')r.limbs='both'}
 if(['plush','clay','glass'].includes(r.style)){r.material=r.style;r.style='smooth'}
 if(r.action==='rotate')r.action='look';
 r.sequence=(r.sequence||[]).map(a=>a==='rotate'?'look':a);
 if(!s.version||s.version<5){r.proportion=s.body==='human'?(s.proportion||'balanced'):'balanced';r.motionIntensity=PERSONAS[r.personality]?.motionIntensity||.7;}
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
function rangeText(key,value){return ['eyeSpacing','faceY','eyeY','noseY','mouthY'].includes(key)?value+' u':key==='eyeTilt'?value+'°':Math.round(value*100)+'%'}
function range(key,title,step=.05){return `<div class="field"><label class="field-title" for="range-${key}">${title}</label><div class="range-row"><input id="range-${key}" type="range" min="${RANGES[key][0]}" max="${RANGES[key][1]}" step="${step}" value="${state[key]}" data-range="${key}"><output for="range-${key}" id="value-${key}">${rangeText(key,state[key])}</output></div></div>`}
function colors(key,title,list){return field(title,`<div class="swatches">${list.map(([name,c])=>`<button class="swatch ${state[key].toUpperCase()===c.toUpperCase()?'selected':''}" style="background:${c}" data-color-key="${key}" data-color="${c}" aria-label="${name}" title="${name}" aria-pressed="${state[key].toUpperCase()===c.toUpperCase()}"></button>`).join('')}<input class="color-picker" type="color" data-setting="${key}" value="${state[key]}" aria-label="自定义${title}" title="自定义${title}"></div>`)}
const COLOR_SWATCHES=[['蓝色','#3064ED'],['浅紫','#A293E8'],['粉色','#E8A1BE'],['奶橙','#EAB385'],['薄荷','#93BCAD'],['奶油','#EEE4C9'],['黑豆','#343642']];
function heading(title,note='选择即刻变化'){return `<div class="panel-heading"><h2>${title}</h2><span>${note}</span></div>`}
const SLOTS={neck:['scarf','bow','collar'],back:['cloak'],head:['headphones'],held:['phone','macbook','tea','book','wand','console','sign'],feet:['skates'],body:['pajamas']};
function slot(key,title){const choices=SLOTS[key],selected=state.accessories.find(v=>choices.includes(v))||'none';return `<div class="field"><label class="field-title" for="slot-${key}">${title}</label><select id="slot-${key}" data-setting="slot-${key}"><option value="none">无</option>${choices.map(v=>`<option value="${v}" ${selected===v?'selected':''}>${label('accessories',v)}</option>`).join('')}</select></div>`}
function controls(){
 for(const d of $('controls').querySelectorAll('details')){const key=d.querySelector('summary')?.textContent;if(key){if(d.open)openedDetails.add(key);else openedDetails.delete(key)}}
 $('sectionTabs').innerHTML=[['body','造型'],['face','五官'],['hair','头发'],['outfit','穿搭'],['personality','性格'],['action','动作'],['ai','AI 成图']].map(([key,title])=>`<button data-tab="${key}" class="${tab===key?'active':''}" aria-pressed="${tab===key}">${title}</button>`).join('');
 let v='';
 if(tab==='body'){
 v=heading('先挑一个轮廓')+`<div class="shape-grid">${BASE_FORMS.map(k=>`<button class="shape-option ${state.body===k?'selected':''}" data-type="body" data-value="${k}" aria-label="造型：${label('body',k)}" aria-pressed="${state.body===k}">${draw({...BASE,body:k,color:state.color},{id:'shape-'+k})}${label('body',k)}</button>`).join('')}</div>`;
 v+=colors('color',state.body==='human'?'服装主色':'身体颜色',COLOR_SWATCHES);
 v+=`<div class="pair">${range('bodyWidth','身体宽度')}${range('bodyHeight','身体高度')}</div>`;
 v+=field('手脚',chips('limbs'),state.body==='snake'?'蛇保持无肢体':'随轮廓一起变化');
 v+=range('limbLength','手脚长度');
 if(!isGeometry(state))v+=field('身体结构',chips('bodyplan',state.body==='human'?['chibi','biped']:state.body==='snake'?['blob']:['blob','chibi','biped','quad']));
 v+=`<div class="pair">${range('headSize',isGeometry(state)?'五官比例':'头部比例')}${canShapeFace(state)?selectField('faceShape','脸型'):''}</div>`;
 v+=`<label class="field-title" for="nameInput">角色名字</label><input id="nameInput" class="text-input" maxlength="24" value="${html(state.name)}" placeholder="给它起个名字">`;
 if(state.body==='cat'&&state.marking==='auto')v+=field('原生毛色',chips('pattern'));
 v+=`<details class="control-details"><summary>耳朵、尾巴、翅膀与花纹</summary><div class="pair">${selectField('ears','耳朵')}${state.body==='snake'?'<p class="helper">蛇保留连续盘曲身体，不叠加独立尾巴。</p>':selectField('tail','尾巴')}</div><div class="pair">${range('earSize','自选耳朵大小')}${state.body==='snake'?'':range('tailSize','尾巴大小')}</div><div class="pair">${selectField('horns','角')}${selectField('wings','翅膀')}</div>${selectField('marking','花纹')}${colors('markingColor','花纹颜色',COLOR_SWATCHES)}<p class="helper">“随主体”保留原生结构。也可以自由换成其他部件；耳朵大小用于自选耳形。</p></details>`;
 }
 if(tab==='face'){
 v=heading('让它有自己的表情')+field('眼睛',chips('eyes'))+`<div class="pair">${range('eyeSpacing','眼距',1)}${range('eyeSize','眼睛大小')}</div>`+colors('eyeColor','眼睛颜色',[['白色','#FFFFFF'],['深色','#263044'],['蓝色','#6096E8'],['紫色','#8B73CD']])+field('表情',chips('expression'));
 v+=`<details class="control-details" ${focusedPart==='eyes'||focusedPart==='brows'?'open':''}><summary>精调眼睛与眉毛</summary><div class="pair">${range('faceY','整体五官上下',1)}${range('eyeY','眼睛上下',1)}</div><div class="pair">${range('eyeTilt','眼睛倾斜',1)}${state.eyes==='oval'?range('pupilSize','瞳孔大小'):''}</div>${field('高光',chips('highlights'))}<label class="reference-label"><input type="checkbox" data-bool="heterochromia" ${state.heterochromia?'checked':''}>异色双眼</label>${state.heterochromia?colors('eyeColorRight','右侧眼睛颜色',COLOR_SWATCHES):''}${field('眉毛',chips('brows'))}${range('blush','腮红浓度')}<p class="helper">瞳孔大小用于椭圆瞳孔眼；圆点眼与胶囊眼保持简洁，不叠加高光。</p></details>`;
 v+=field('鼻子',chips('nose'))+field('嘴巴',chips('mouth'))+`<details class="control-details" ${['nose','mouth'].includes(focusedPart)?'open':''}><summary>精调鼻子与嘴巴</summary><div class="pair">${range('noseSize','鼻子大小')}${range('noseY','鼻子上下',1)}</div><div class="pair">${range('mouthSize','嘴巴大小')}${range('mouthY','嘴巴上下',1)}</div></details>`+field('眼镜',chips('glasses'))+`<p class="helper">可点画布中的眼睛、鼻子或嘴巴定位到对应控制。睡觉、开心与工作动作临时优先使用对应眼神，结束后恢复基础表情。</p>`;
 }
 if(tab==='hair'){
 v=heading('换个发型')+field('发型',chips('hair'))+colors('hairColor','头发颜色',[['深棕','#3A3438'],['栗色','#78513E'],['奶棕','#B98D63'],['浅金','#DCCC9F'],['银灰','#BBC1CB'],['淡紫','#A293D6'],['粉发','#D89EB9']])+field('帽子',chips('hat'));
 if(state.body==='human')v+=colors('skinColor','肤色',[['浅肤','#F1D5BD'],['暖肤','#E7BFA6'],['小麦','#C68F6B'],['深肤','#845941']]);
 v+=`<div class="notice">帽子会戴在头发外层，保留两侧发型；发色、眼镜和五官互不覆盖。</div>`;
 }
 if(tab==='outfit'){
 v=heading('一层一层，搭出个性')+`<div class="slot-label">头部与脸部</div><div class="pair">${selectField('hat','帽子')}${selectField('glasses','眼镜')}</div>${slot('head','耳机')}<div class="slot-label">身体与背部</div><div class="pair">${selectField('clothing','服装')}${slot('back','背部披风')}</div><div class="pair">${slot('neck','颈部配饰')}${slot('body','睡衣外层')}</div><div class="slot-label">小物与脚部</div><div class="pair">${slot('held','手持 / 身旁物件')}${slot('feet','鞋子')}</div>${state.accessories.includes('sign')?`<label class="field-title" for="signText">小牌文字</label><input class="text-input" id="signText" data-text="signText" maxlength="16" value="${html(state.signText)}">`:''}`+field('轻量特效',chips('effect'))+`<p class="helper">翅膀与披风位于身体后方，服装在身体上，眼镜在五官外层。每个槽位保留一种；无手时小物放在身旁。旧配置中的两件小物仍会保留，重选此槽后合为一件。</p><button class="quiet" id="clearAccessories">清空配饰</button>`;
 }
 if(tab==='personality'){
 v=heading('给它一点性格')+`<div class="personality-grid">${Object.entries(PERSONAS).map(([key,p])=>`<button class="personality-card ${state.personality===key?'selected':''}" data-persona="${key}" aria-pressed="${state.personality===key}">${draw({...state,...p,accessories:[],hat:'none',hair:'none',glasses:'none'},{id:'persona-'+key})}<span><strong>${label('personality',key)}</strong><small>${desc('personality',key)}</small></span></button>`).join('')}</div><p class="helper">性格设定表情、姿态、动作、节奏与幅度；耳朵和尾巴也会随动作轻摆。你手动改过的项目会保留，其他项目随性格变化。</p>`;
 v+=state.manualOverrides.length?`<div class="notice">保留你的手动设置：${state.manualOverrides.map(k=>({expression:'表情',pose:'姿态',action:'动作',tempo:'节奏',motionIntensity:'幅度'}[k])).join('、')}<br><button id="applyPersona" class="mini-action">重新应用当前性格</button></div>`:'';
 v+=field('表情',chips('expression'))+field('姿态',chips('pose',['neutral','sit','wave','fold','chin','crossleg','magic']))+range('tempo','动作节奏')+range('motionIntensity','动作幅度')+`<p class="helper">没有手时，挥手、抱臂与托腮会改为自然姿态；不会偷偷增加手脚。</p>`;
 }
 if(tab==='action'){
 v=heading('让小伙伴动起来',playing?'正在播放':'已暂停')+field('主要动作',chips('action',LIVE_ACTIONS))+`<div class="pair">${range('tempo','动作节奏')}${range('motionIntensity','动作幅度')}</div>`+field('姿态',chips('pose',['neutral','sit','wave','fold','chin','crossleg','magic']))+field('动作顺序',`<div class="sequence-row"><select id="nextAction" aria-label="下一步动作">${LIVE_ACTIONS.map(k=>`<option value="${k}">${label('action',k)}</option>`).join('')}</select><button id="addSequence" class="outline" ${state.sequence.length>=4?'disabled':''}>添加</button></div><div class="sequence-list"><span>1 ${label('action',state.action)}</span>${state.sequence.map((k,i)=>`<span>${i+2} ${label('action',k)}<button data-remove-step="${i}" aria-label="移除第 ${i+2} 步">×</button></span>`).join('')}</div><button id="playSequence" class="mini-action sequence-play">${sequenceStep>=0?'停止顺序播放':'播放整段动作'}</button>`,`最多 5 步`)+field('背景',chips('scene',['transparent','solid','gradient','desk','bedroom','forest','rink','space']))+`<p class="helper">每步播放 4 秒。弹跳只平移、不拉伸身体；专注工作不自动眨眼。动态 SVG 导出当前主要动作，整段顺序会写入创作说明。</p>`;
 }
 if(tab==='ai'){
 v=heading('在 ChatGPT 中精细成图','这些设置用于最终生成')+`<p class="helper" style="margin:0 0 15px">主画布始终是实时 2D 造型预览。这里选择最终图片的画法与材质，复制说明后在 ChatGPT 中生成。</p><div class="pair">${selectField('style','最终画法')}${selectField('material','整体材质')}</div>`+field('造型语言',chips('design'))+selectField('scene','最终背景 / 场景')+selectField('output','输出用途');
 if(isAnimal(state))v+=selectField('fur','毛发细节');
 if(state.body==='human')v+=`<div class="pair">${selectField('framing','成图构图',{head:'头像特写',bust:'半身人物',full:'全身人物'})}${selectField('proportion','成图头身比',{balanced:'协调比例',two:'2 头身',three:'3 头身'})}</div>`+selectField('skinMaterial','皮肤材质')+selectField('hairMaterial','头发材质')+selectField('clothMaterial','服装材质');
 v+=`<label class="reference-label"><input type="checkbox" id="referenceMode" ${state.reference?'checked':''}>沿用我的参考图</label><p class="helper">这里不上传图片。打开 ChatGPT 后先附上参考图，再粘贴创作说明。</p><div class="notice">Pet 需要先确认完整角色，再制作 9 种动画与 16 个注视方向，并通过技术与视觉校验。本页导出的 SVG / PNG 不能直接作为已验证 Pet 使用。</div>`;
 }
 $('controls').innerHTML=v;for(const d of $('controls').querySelectorAll('details'))if(openedDetails.has(d.querySelector('summary')?.textContent))d.open=true;
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
 $('copyPrompt').textContent=pet?'复制 Pet 创作说明':'复制创作说明';$('previewCopy').textContent=pet?'复制 Pet 创作说明':'复制创作说明';
 $('promptPreview').textContent=buildPrompt(state);
}
function checkpoint(key=''){if(key&&historyKey===key)return;history.push(structuredClone(state));if(history.length>60)history.shift();future=[];historyKey=key;updateHistory()}
function updateHistory(){if($('undoConfig')){$('undoConfig').disabled=!history.length;$('redoConfig').disabled=!future.length}}
function undo(redo=false){const from=redo?future:history,to=redo?history:future;if(!from.length)return;to.push(structuredClone(state));state=from.pop();historyKey='';stopSequence();render();toast(redo?'已重做':'已撤销')}
function randomize(){checkpoint();const seed=state.randomSeed||'dot-01';let n=2166136261;for(const c of seed)n=Math.imul(n^c.charCodeAt(0),16777619);const rnd=()=>{n^=n<<13;n^=n>>>17;n^=n<<5;return (n>>>0)/4294967296},pick=a=>a[Math.floor(rnd()*a.length)];const output=state.output,reference=state.reference;
 state=structuredClone(pick(QUICK_PRESETS).state);state.output=output;state.reference=reference;state.randomSeed=seed;state.color=pick(COLOR_SWATCHES)[1];state.hat=pick(['none','none','beret','beanie','crown']);state.glasses=pick(['none','none','round']);state.mouth=pick(['none','smile','tiny']);state.ears=isGeometry(state)?pick(['auto','round','pointed']):'auto';state.accessories=pick([[],['scarf'],['book'],['console']]);const persona=pick(Object.keys(PERSONAS));state.personality=persona;Object.assign(state,PERSONAS[persona]);state.manualOverrides=[];stopSequence();render();toast('已按种子 '+seed+' 生成搭配；相同种子可复现')}
function render(){normalize(state);controls();gallery();result();roleControls();updateHistory();if($('interactionMode'))$('interactionMode').value=state.interaction;if($('seedInput'))$('seedInput').value=state.randomSeed}

function stopSequence(){clearInterval(sequenceTimer);sequenceTimer=null;sequenceStep=-1}
function change(key,value){
 stopSequence();let message='';checkpoint();
 if(key.startsWith('slot-')){const slotKey=key.slice(5),choices=SLOTS[slotKey];if(value==='skates'&&!['feet','both'].includes(state.limbs)){toast('先选择短脚，再穿溜冰鞋');return}state.accessories=state.accessories.filter(v=>!choices.includes(v));if(value!=='none')state.accessories.push(value);render();return}
 if(key==='accessories'){
 if(value==='skates'&&!['feet','both'].includes(state.limbs)){toast('先选择短脚，再穿上溜冰鞋');return}
 const props=['phone','macbook','tea','book','wand','console','sign'];
 if(state.accessories.includes(value))state.accessories=state.accessories.filter(k=>k!==value);
 else{if(props.includes(value)&&state.accessories.filter(k=>props.includes(k)).length>=2){toast('最多同时放两件道具，先移除一件再试试');return}state.accessories.push(value)}
 }else{
 const old=structuredClone(state);state[key]=value;
 if(['expression','pose','action','tempo','motionIntensity'].includes(key))state.manualOverrides=[...new Set([...state.manualOverrides,key])];
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
function applyPersona(key,reset=false){checkpoint();stopSequence();state.personality=key;if(reset)state.manualOverrides=[];for(const [k,v]of Object.entries(PERSONAS[key]))if(!state.manualOverrides.includes(k))state[k]=v;normalize(state);render();if(state.manualOverrides.length)toast('已应用性格，保留手动调整的项目')}
function buildPrompt(input){
 const s=normalize(structuredClone(input)),pet=s.output==='pet',multi=['storyboard','keyframes','pet'].includes(s.output),chain=multi?[s.action,...s.sequence]:[s.action];
 const ref=s.reference?'请先等待我附上参考图，以图中角色为身份基准；当前尚未附图，不要声称已读取。以下选择作为改造方向；若会改变其核心身份，请先确认。\n':'';
 const limbs=s.body==='snake'?'天然无肢体盘曲蛇身':desc('limbs',s.limbs);
 const clothes=desc('clothing',s.clothing);
 const hair=desc('hair',s.hair);
 const bodyplan=desc('bodyplan',s.bodyplan);
 let identity=`${ref}创作名为「${s.name.trim()||'Dot'}」的单个原创角色。主体：${desc('body',s.body)}。身体结构：${bodyplan}。主体主色 ${s.color}，${s.body==='human'?'肤色 '+s.skinColor+'，':''}保留主体应有的辨识特征。\n脸型：${canShapeFace(s)?desc('faceShape',s.faceShape):'沿用'+label('body',s.body)+'的特定轮廓'}。宽度 ${Math.round(s.bodyWidth*100)}%，高度 ${Math.round(s.bodyHeight*100)}%，${isGeometry(s)?'五官比例':'头部比例'} ${Math.round(s.headSize*100)}%，相对于该主体的标准轮廓。${limbs}；手脚长度 ${Math.round(s.limbLength*100)}%。`;
 identity+=`\n部件按以下选择优先，不擅自补回物种默认部件：${desc('ears',s.ears)}（自选耳形 ${Math.round(s.earSize*100)}%），${desc('tail',s.tail)}（${Math.round(s.tailSize*100)}%），${desc('horns',s.horns)}，${desc('wings',s.wings)}。花纹：${desc('marking',s.marking)}，自选花纹颜色 ${s.markingColor}。四足躯干的短脚为四足，其余短脚为双足，手脚数量不额外增加。`;
 if(s.body==='cat'&&s.marking==='auto')identity+=desc('pattern',s.pattern)+'。';
 const face=`以下位置偏移以主体局部坐标计，正值向下：五官整体上下 ${s.faceY}，眼睛上下 ${s.eyeY}，双眼向内倾斜 ${s.eyeTilt} 度。${s.eyes==='oval'?'瞳孔比例 '+Math.round(s.pupilSize*100)+'%。':''}${!['dot','capsule'].includes(s.eyes)?desc('highlights',s.highlights)+'。':''}${s.heterochromia?'画面右侧眼睛颜色 '+s.eyeColorRight+'；另一眼使用主眼色。':''}${desc('brows',s.brows)}，眉色 ${s.hairColor}，腮红浓度 ${Math.round(s.blush*100)}%。\n鼻子比例 ${Math.round(s.noseSize*100)}%，上下偏移 ${s.noseY}；嘴巴比例 ${Math.round(s.mouthSize*100)}%，上下偏移 ${s.mouthY}。\n眼睛：${desc('eyes',s.eyes)}，眼睛/瞳孔颜色 ${s.eyeColor}，相对大小 ${Math.round(s.eyeSize*100)}%，以 440 单位设计画布计双眼中心距 ${s.eyeSpacing} 单位。\n鼻子：${desc('nose',s.nose)}。嘴巴：${desc('mouth',s.mouth)}。基础表情：${desc('expression',s.expression)}。\n${hair}，发色 ${s.hairColor}。${desc('glasses',s.glasses)}；${desc('hat',s.hat)}。帽子覆盖头发顶层但保留侧发，眼镜位于眼睛外层，不遮挡鼻子。所有五官随脸型与头部比例对齐；环形角色的五官位于上方实体区域，保留中央孔洞。`;
 let style=`画法：${desc('style',s.style)}。整体材质：${desc('material',s.material)}。造型语言：${desc('design',s.design)}。\n${s.style!=='smooth'?'用所选画法转译材质纹理，不混入照片式三维光照。':''}实时 2D 预览只确认结构与搭配；最终按以上画法和材质精细生成。`;
 if(isAnimal(s)&&s.material==='plush')style+='毛发：'+desc('fur',s.fur)+'。';
 if(s.body==='human')for(const [part,key]of [['皮肤','skinMaterial'],['头发','hairMaterial'],['服装','clothMaterial']])if(s[key]!=='inherit')style+=`${part}局部覆盖：${desc(key,s[key])}。`;
 const outfit=`服装：${clothes}。配饰与道具：${s.accessories.length?s.accessories.map(k=>desc('accessories',k)).join('、'):'无额外配饰'}。每手最多拿一件道具，没有手时道具放在身旁，不增加肢体。穿戴物适配主体体型，不遮住五官。\n特效：${desc('effect',s.effect)}。不添加未选物品。${s.accessories.includes('sign')?'文字牌内容仅为「'+s.signText+'」。':''}`;
 const motion=`性格：${desc('personality',s.personality)}。以下手动/最终配置优先于性格概括：表情 ${label('expression',s.expression)}，姿态 ${desc('pose',s.pose)}，动作节奏为标准的 ${Math.round(s.tempo*100)}%，幅度 ${Math.round(s.motionIntensity*100)}%，耳朵尾巴轻摆遵从此幅度。网页互动设置为 ${s.interaction==='off'?'关闭':s.interaction==='gaze'?'鼠标注视':'点击 / 轻抚反馈'}，仅供网站预览，导出素材不带互动逻辑。\n${multi?'按顺序独立呈现各动作，每步约 4 秒：':'本次静态成图取主要动作的代表瞬间：'}\n${chain.map((a,i)=>`${i+1}. ${label('action',a)}：${(a==='skate'&&!['feet','both'].includes(s.limbs)?'无脚角色贴近地面平滑悬浮滑行，不增加脚或鞋':desc('action',a)).replace(/不添加眉毛、嘴巴或问号文字/g,'保留选定五官，不新增文字').replace(/不添加嘴巴/g,'保留选定嘴巴')}`).join('\n')}\n睡觉使用闭眼，专注工作双眼睁开且稳定；眨眼仅在明确选择眨眼动作时发生。动作结束后恢复基础表情。弹跳保持体积、宽高与所有身体比例，不挤压、不拉伸、不融化；动作不新增手脚。`;
 const scene=pet||s.output==='sticker'?desc('scene','transparent'):s.output==='sheet'?'干净浅色背景':desc('scene',s.scene);
 const composition=s.body==='human'?`${desc('proportion',s.proportion)}；${pet?'完整全身':({head:'头像特写到肩部',bust:'半身自然裁切',full:'完整全身'}[s.framing])}。`:'';
 const petBrief=pet?'【ChatGPT Pet 创作流程】\n先创作单个完整全身、透明背景的角色图，预留安全边距，确认后再制作动画。v2 图集为 1536×2288，8 列×11 行，每格 192×208。前 9 行依次为 idle、running-right、running-left、waving、jumping、failed、waiting、running、review；后两行为从正上方开始、顺时针排列的 16 个注视方向。所有素材必须保持角色、比例、锚点、花纹与配饰一致，展示动画预览并通过技术和视觉校验后才可创建或启用。SVG、PNG、GIF 或参考图本身不是已验证 Pet；若当前对话没有制作工具，提供角色图和制作说明，不要声称已经创建或安装。\n\n':'';
 return petBrief+`【角色与结构】\n${identity}\n\n【五官与头部】\n${face}\n\n【画法与材质】\n${style}\n\n【穿搭与配饰】\n${outfit}\n\n【性格、姿态与动作】\n${motion}\n\n【场景与输出】\n${scene}。${desc('output',s.output)}。${composition}\n\n【一致性】\n每幅或每格仅有同一个原创角色，居中并保留足够边距。不要裁切全身构图中的帽子、头发、耳朵、尾巴和手脚。保持脸型、五官间距、颜色、花纹和配饰稳定。透明背景保留 alpha，不画入棋盘格。${s.accessories.includes('sign')?'除所选文字牌外，不添加其他文字、':''+'不添加文字、'}水印或品牌标志，不复制官方角色资产。${s.roleEnabled?'\n\n'+buildRole(s):''}`;
}
function validateConfig(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))throw Error('配置必须是 JSON 对象');
 if(![1,2,3,4,5].includes(raw.version))throw Error('暂不支持这个配置版本');
 if(typeof raw.name!=='string'||raw.name.length>24)throw Error('角色名称需在 24 字以内');
 if(typeof raw.reference!=='boolean')throw Error('参考图设置无效');
 for(const k of ['body','style','limbs','action','scene','output'])if(typeof raw[k]!=='string'||!Object.hasOwn(DATA[k],raw[k])&&!(k==='style'&&['plush','clay','glass'].includes(raw[k])))throw Error('配置中的 '+k+' 无效');
 for(const k of ['material','eyes','design','bodyplan','fur','pose','expression','effect','pattern','skinMaterial','hairMaterial','clothMaterial','faceShape','nose','mouth','hair','glasses','hat','clothing','personality','previewFinish','ears','tail','horns','wings','marking','brows','highlights'])if(raw[k]!==undefined&&!Object.hasOwn(DATA[k],raw[k]))throw Error('配置中的 '+k+' 无效');
 for(const k of ['color','eyeColor','skinColor','hairColor','eyeColorRight','markingColor'])if(raw[k]!==undefined&&(typeof raw[k]!=='string'||!/^#[0-9a-f]{6}$/i.test(raw[k])))throw Error('颜色必须为有效的六位 HEX 值');
 for(const [k,[min,max]]of Object.entries(RANGES))if(raw[k]!==undefined&&(!Number.isFinite(raw[k])||raw[k]<min||raw[k]>max))throw Error(k+' 超出可调范围');
 for(const [k,vals]of Object.entries(PLAIN_ENUMS))if(raw[k]!==undefined&&!vals.includes(raw[k]))throw Error('人物配置无效');
 if(!Array.isArray(raw.accessories)||raw.accessories.length>Object.keys(DATA.accessories).length||raw.accessories.some(x=>!Object.hasOwn(DATA.accessories,x)))throw Error('配饰配置无效');
 if(!Array.isArray(raw.sequence)||raw.sequence.length>4||raw.sequence.some(x=>!Object.hasOwn(DATA.action,x)))throw Error('动作顺序无效');
 if(raw.manualOverrides!==undefined&&(!Array.isArray(raw.manualOverrides)||raw.manualOverrides.some(k=>!['expression','pose','action','tempo','motionIntensity'].includes(k))))throw Error('手动设置配置无效');
 for(const k of ['heterochromia','roleEnabled'])if(raw[k]!==undefined&&typeof raw[k]!=='boolean')throw Error(k+' 应为开关值');
 for(const [k,max]of Object.entries({signText:16,randomSeed:40,roleBrief:400,roleJob:600,roleWorkflow:1200,roleStarters:600}))if(raw[k]!==undefined&&(typeof raw[k]!=='string'||raw[k].length>max))throw Error(k+' 内容过长或无效');
 const clean={};for(const k of Object.keys(BASE))if(raw[k]!==undefined)clean[k]=raw[k];
 return upgrade(clean);
}
function filename(){return (state.name||'dot').replace(/[^\p{L}\p{N}_-]/gu,'-').slice(0,40)||'dot'}
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000)}
async function copy(){const text=buildPrompt(state);try{await navigator.clipboard.writeText(text);return true}catch(e){const el=document.createElement('textarea');el.value=text;el.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(el);el.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}el.remove();return ok}}
function wire(){
 document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.tab){focusedPart='';tab=b.dataset.tab;controls();return}
 if(b.dataset.type){change(b.dataset.type,b.dataset.value);return}
 if(b.dataset.color){change(b.dataset.colorKey,b.dataset.color);return}
 if(b.dataset.persona){applyPersona(b.dataset.persona);return}
 if(b.dataset.preset!==undefined||b.dataset.gallery!==undefined){checkpoint();stopSequence();const p=b.dataset.preset!==undefined?QUICK_PRESETS[Number(b.dataset.preset)]:galleryPresets[Number(b.dataset.gallery)];const output=state.output,reference=state.reference;state=structuredClone(p.state);state.output=output;state.reference=reference;render();toast('已载入 '+p.name);return}
 if(b.dataset.purpose){checkpoint();state.output=b.dataset.purpose;render();return}
 if(b.hasAttribute('data-remove-step')){checkpoint();stopSequence();state.sequence.splice(Number(b.dataset.removeStep),1);render();return}
 if(b.id==='clearAccessories'){checkpoint();state.hat='none';state.glasses='none';state.accessories=[];render();return}
 if(b.id==='applyPersona'){applyPersona(state.personality,true);return}
 if(b.id==='addSequence'){if(state.sequence.length<4){checkpoint();stopSequence();state.sequence.push($('nextAction').value);render()}return}
 if(b.id==='playSequence'){
 if(sequenceStep>=0){stopSequence();result();controls();return}
 playing=true;sequenceStep=0;result();controls();sequenceTimer=setInterval(()=>{sequenceStep++;if(sequenceStep>state.sequence.length){stopSequence();result();controls();return}result()},4000);return;
 }
 });
 $('controls').addEventListener('input',e=>{
 const el=e.target;if(el.id==='nameInput'){checkpoint('name');state.name=el.value;result();return}
 if(el.dataset.text){checkpoint(el.dataset.text);state[el.dataset.text]=el.value;result();return}
 if(el.dataset.range){const key=el.dataset.range;checkpoint(key);state[key]=Number(el.value);if(['tempo','motionIntensity'].includes(key))state.manualOverrides=[...new Set([...state.manualOverrides,key])];$('value-'+key).textContent=rangeText(key,Number(el.value));result();return}
 if(el.type==='color'){checkpoint(el.dataset.setting);state[el.dataset.setting]=el.value.toUpperCase();result();return}
 });
 $('controls').addEventListener('change',e=>{const el=e.target;if(el.dataset.setting&&el.type!=='color')change(el.dataset.setting,el.value);if(el.type==='color')controls();if(el.dataset.bool){checkpoint();state[el.dataset.bool]=el.checked;controls();result()}if(el.id==='referenceMode'){checkpoint();state.reference=el.checked;result()}});
 $('playPause').onclick=()=>{playing=!playing;if(sequenceStep>=0){stopSequence();result()}else{window.DotRenderer.pause($('showcase').querySelector('svg'),!playing);$('playPause').textContent=playing?'Ⅱ 暂停':'▷ 播放';$('playPause').setAttribute('aria-label',playing?'暂停动作':'播放动作');$('actionBadge').textContent=label('action',state.action)+(playing?'':' · 已暂停')}if(tab==='action')controls()};
 $('copyPrompt').onclick=async()=>{const ok=await copy();toast(ok?'创作说明已复制，去 ChatGPT 粘贴即可':'复制未成功，请展开创作说明手动复制');if(ok){$('copyPrompt').textContent='已复制';clearTimeout(copyTimer);copyTimer=setTimeout(()=>{$('copyPrompt').textContent=state.output==='pet'?'复制 Pet 创作说明':'复制创作说明'},1800)}};
 $('copyOpen').onclick=async()=>{const promise=copy(),opened=window.open('https://chatgpt.com/','_blank');if(opened)opened.opener=null;const ok=await promise;toast(ok?(opened?'已复制，在 ChatGPT 粘贴即可':'已复制，请手动打开 chatgpt.com'):'复制未成功，请展开创作说明手动复制')};
 $('saveConfig').onclick=()=>{download(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),filename()+'-config.json');toast('配置已导出，可随时重新导入')};
 $('loadConfig').onclick=()=>$('configFile').click();
 $('configFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>50000)throw Error('配置文件过大');const next=validateConfig(JSON.parse(await f.text()));checkpoint();state=next;stopSequence();render();toast('已还原 '+(state.name||'未命名角色'))}catch(err){toast(err instanceof SyntaxError?'无法读取 JSON，请检查文件格式':err.message)}e.target.value=''};
 $('resetConfig').onclick=()=>{checkpoint();stopSequence();state=structuredClone(BASE);playing=true;render();toast('已重置为蓝色 Dot')};
 $('previewCopy').onclick=()=>$('copyPrompt').onclick();$('previewOpen').onclick=()=>$('copyOpen').onclick();
 $('exportSVG').onclick=()=>{download(new Blob([draw(state,{id:'dot-export',animated:false})],{type:'image/svg+xml'}),filename()+'.svg');toast('已导出当前实时造型 SVG')};
 $('exportAnimated').onclick=()=>{download(new Blob([draw(state,{id:'dot-animated',animated:true,playing:true})],{type:'image/svg+xml'}),filename()+'-'+state.action+'.svg');toast('已导出主要动作 SVG；不是 Pet 图集')};
 $('exportPNG').onclick=()=>{const source=draw(state,{id:'dot-png',animated:false}),im=new Image(),url=URL.createObjectURL(new Blob([source],{type:'image/svg+xml'}));im.onload=()=>{const c=document.createElement('canvas');c.width=1320;c.height=1260;const ctx=c.getContext('2d');ctx.drawImage(im,0,0,1320,1260);c.toBlob(b=>{if(b){download(b,filename()+'.png');toast('已导出当前静态造型 PNG')}else toast('PNG 导出失败，请先导出 SVG')},'image/png');URL.revokeObjectURL(url)};im.onerror=()=>{URL.revokeObjectURL(url);toast('PNG 导出失败，请先导出 SVG')};im.src=url};
}
const ROLE_PRESETS={
 helper:{brief:'温和、直接的日常助手',job:'帮助整理问题、比较方案，并准备清晰的下一步',workflow:'先确认目标与约束；查阅可用输入；提供可执行结果；标明待确认信息',starters:'帮我理清这件事的下一步\n比较这几个方案'},
 maker:{brief:'耐心、注重细节的创作伙伴',job:'围绕用户给定的主题与受众，协助打磨原创内容',workflow:'确认用途与受众；给出草稿；根据反馈改进；交付前检查事实与格式',starters:'把这个想法整理成创作简报\n帮我改进这段内容'},
 checker:{brief:'冷静、严谨的检查伙伴',job:'核对给定材料，找出矛盾、遗漏和需要进一步验证的地方',workflow:'明确检查范围；逐项比对；区分已核实与不确定内容；汇总问题与改进建议',starters:'检查这份材料有没有遗漏\n哪些结论还需要验证'}
};
function buildRole(s){return `【可复制的角色设定】\n名称：${s.name||'Dot'}\n简介：${s.roleBrief||'由用户补充'}\n性格语气：${desc('personality',s.personality)}，以用户当次要求优先。\n目标与职责：${s.roleJob||'围绕用户给定的任务提供帮助，不擅自扩大范围'}\n工作流程：${s.roleWorkflow||'理解目标 → 检查输入 → 完成任务 → 核对结果'}\n输入：用户提供的任务、背景、约束与当前可用资料；必要信息缺失时先问最关键的问题。\n输出：先给结论或可用成果，再列必要依据、风险与下一步；尊重用户要求的格式。\n验证：区分事实、推测与未知；按任务风险核验关键结论，不编造来源、工具结果或已完成的操作。\n权限：只使用当前实际可用且已获授权的工具；对发送、分享、购买、删除、账户或权限变更遵循平台规则，并在需要时请求确认。\n升级处理：权限不足、冲突或高风险决策交给用户；说明具体阻碍与可选路径。\n停止条件：任务完成、用户要求停止、关键输入缺失或授权不足时停止相应操作；不虚报完成。\n开场提示：\n${s.roleStarters||'你想先完成哪件事？'}\n此文本仅是可编辑指令，不会创建运行中的代理、定时任务、团队、语音或原生 Pet 事件。`;}
function roleControls(){
 if(!$('roleFields'))return;
 $('roleFields').innerHTML=`<p class="helper">可选的原创角色设定，只导出文字。不会创建代理或自动任务。</p><label class="reference-label"><input type="checkbox" id="roleEnabled" ${state.roleEnabled?'checked':''}>附在创作说明末尾</label><label class="field-title" for="rolePreset">从一个职责开始</label><select id="rolePreset"><option value="">选择本站原创模板</option><option value="helper">日常助手</option><option value="maker">创作伙伴</option><option value="checker">检查伙伴</option></select>${[['roleBrief','简介',400],['roleJob','职责与目标',600],['roleWorkflow','工作流程',1200],['roleStarters','开场提示，每行一条',600]].map(([k,t,max])=>`<label class="field-title" for="${k}">${t}</label><textarea id="${k}" data-role="${k}" maxlength="${max}" rows="${k==='roleWorkflow'?4:2}" placeholder="可留空，使用通用说明">${html(state[k])}</textarea>`).join('')}<p class="helper">沿用角色名字与所选性格。导出包含输入、输出、验证、权限、升级处理与停止条件，可继续按用途修改。</p><div class="export-row"><button id="copyRole" class="outline">复制角色设定</button><button id="exportRole" class="outline">导出 TXT</button></div>`;
}
async function copyText(text){try{await navigator.clipboard.writeText(text);return true}catch(e){const el=document.createElement('textarea');el.value=text;document.body.appendChild(el);el.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}el.remove();return ok}}
function interactionStatus(text){$('interactionStatus').textContent=text}
function resetGaze(){for(const el of $('showcase').querySelectorAll('[data-gaze="face"]'))el.removeAttribute('transform')}
function reactToTouch(pet=false){
 if(state.interaction!=='touch')return;
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 interactionStatus(pet?'收到轻抚 ♡':'收到你的招呼 ♡');
 if(playing&&!reduced){$('showcase').innerHTML=draw({...state,action:'happy',expression:'happy'},{id:'live',animated:true,playing:true});clearTimeout(interactionTimer);interactionTimer=setTimeout(()=>{result();interactionStatus('点击打招呼 · 鼠标按住轻移可轻抚')},1000)}
}
function wireExtras(){
 $('undoConfig').onclick=()=>undo();$('redoConfig').onclick=()=>undo(true);$('randomConfig').onclick=randomize;
 $('seedInput').oninput=e=>{checkpoint('seed');state.randomSeed=e.target.value};
 $('nextSeed').onclick=()=>{checkpoint();state.randomSeed='dot-'+Math.floor(Math.random()*1e7).toString(36);randomize()};
 $('interactionMode').onchange=e=>{checkpoint();state.interaction=e.target.value;resetGaze();result();interactionStatus(state.interaction==='off'?'互动已关闭':state.interaction==='gaze'?'移动鼠标，目光轻轻跟随':'点击打招呼 · 鼠标按住轻移可轻抚')};
 $('roleFields').addEventListener('input',e=>{const el=e.target;if(el.dataset.role){checkpoint(el.dataset.role);state[el.dataset.role]=el.value;result()}});
 $('roleFields').addEventListener('change',e=>{if(e.target.id==='roleEnabled'){checkpoint();state.roleEnabled=e.target.checked;result()}if(e.target.id==='rolePreset'&&ROLE_PRESETS[e.target.value]){checkpoint();const p=ROLE_PRESETS[e.target.value];state.roleBrief=p.brief;state.roleJob=p.job;state.roleWorkflow=p.workflow;state.roleStarters=p.starters;roleControls();result()}});
 $('roleFields').addEventListener('click',async e=>{const b=e.target.closest('button');if(!b)return;if(b.id==='copyRole')toast(await copyText(buildRole(state))?'角色设定已复制':'复制失败，可导出 TXT');if(b.id==='exportRole')download(new Blob([buildRole(state)],{type:'text/plain;charset=utf-8'}),filename()+'-role.txt')});
 $('showcase').addEventListener('pointerdown',e=>{pressStart=Date.now();if(e.pointerType==='mouse')reactToTouch(false)});
 $('showcase').addEventListener('pointermove',e=>{
 if(!playing||window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
 if(state.interaction==='touch'&&e.pointerType==='mouse'&&e.buttons===1&&Date.now()-pressStart>250){reactToTouch(true);pressStart=Date.now();return}
 if(state.interaction!=='gaze'||e.pointerType!=='mouse'||['work','sleep'].includes(state.action))return;
 const box=$('showcase').getBoundingClientRect(),x=Math.max(-5,Math.min(5,(e.clientX-box.left-box.width/2)/box.width*14)),y=Math.max(-3,Math.min(3,(e.clientY-box.top-box.height/2)/box.height*9));
 for(const el of $('showcase').querySelectorAll('[data-gaze="face"]'))el.setAttribute('transform',`translate(${x.toFixed(2)} ${y.toFixed(2)})`);
 });
 $('showcase').addEventListener('pointerleave',resetGaze);
 $('showcase').addEventListener('pointerup',e=>{if(e.pointerType!=='mouse'&&Date.now()-pressStart<400)reactToTouch(false)});
 $('showcase').addEventListener('click',e=>{if(state.interaction==='touch')return;const part=e.target.closest('[data-part="eyes"],[data-part="nose"],[data-part="mouth"],[data-part="brows"],[data-part="glasses"]')?.dataset.part;if(['eyes','nose','mouth','brows','glasses'].includes(part)){focusedPart=part;tab='face';controls();interactionStatus('已选中'+({eyes:'眼睛',nose:'鼻子',mouth:'嘴巴',brows:'眉毛',glasses:'眼镜'}[part])+'，在五官面板调整')}});
 document.addEventListener('focusout',()=>{historyKey=''});
 document.addEventListener('keydown',e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();undo(e.shiftKey)}});
}

wire();wireExtras();render();
const mc=document.modelContext;
if(mc?.registerTool){const ac=new AbortController();const defs=[{name:'read_character_prompt',title:'读取角色提示词',description:'Read current live character configuration and prompt.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:()=>({configuration:structuredClone(state),prompt:buildPrompt(state)})},{name:'configure_character',title:'配置角色',description:'Replace current live character from version 1-5 configuration. Does not generate AI images, copy data, or create a Pet.',inputSchema:{type:'object',properties:{configuration:{type:'object'}},required:['configuration'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:input=>{checkpoint();state=validateConfig(input.configuration);stopSequence();render();return{configuration:structuredClone(state),prompt:buildPrompt(state)}}}];for(const def of defs)try{Promise.resolve(mc.registerTool(def,{signal:ac.signal})).catch(()=>{})}catch(e){}window.addEventListener('pagehide',()=>ac.abort(),{once:true})}
