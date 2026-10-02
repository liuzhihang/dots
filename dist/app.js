'use strict';
const $=id=>document.getElementById(id);
const DATA={
 body:{human:['Q版人物','♙','保留人物辨识度的 Q 版人物'],ring:['圆环','◉','圆润的环形身体，完整保留中央孔洞'],sphere:['圆球','●','饱满的圆球形身体'],roundedcube:['圆角方块','▣','大圆角的正方体身体'],cuboid:['圆角长方体','▰','横向圆角长方体身体'],capsule:['胶囊','▮','竖直胶囊形身体'],drop:['水滴','♦','圆润的水滴形身体'],cloud:['云朵','☁','三个柔和起伏的云朵轮廓'],mushroom:['蘑菇','♧','宽蘑菇伞盖与短圆柱菌柄'],star:['星星','★','圆润五角星身体'],rat:['鼠','🐭','圆耳朵的迷你鼠角色'],ox:['牛','🐮','短圆角牛角与宽圆脸的牛角色'],tiger:['虎','🐯','圆耳朵与少量简洁条纹的老虎角色'],rabbit:['兔','🐰','长圆耳朵的兔子角色'],dragon:['龙','🐲','圆角小角、短吻与圆润轮廓的原创小龙'],snake:['蛇','🐍','无肢体、盘曲的圆润小蛇角色'],horse:['马','🐴','短鬃毛、圆润长脸的马角色'],goat:['羊','🐑','卷曲小角与圆润轮廓的羊角色'],monkey:['猴','🐵','圆耳朵与浅色面部区域的猴子角色'],rooster:['鸡','🐤','小鸡冠与圆润身形的鸡角色'],dog:['狗','🐶','柔软垂耳与圆脸的狗狗角色'],pig:['猪','🐷','小圆鼻与圆耳朵的猪角色'],cat:['猫','🐱','三角圆角耳朵的猫咪角色'],penguin:['企鹅','🐧','深色外轮廓与浅色腹部的企鹅角色'],robot:['小机器人','▦','原创圆角方形小机器人，不使用已有 IP 或标志'],monster:['小怪兽','✦','原创圆润小怪兽，两个短软角，不使用已有 IP']},
 style:{flat:['平面插画','◒','简洁平面矢量插画，清晰轮廓和少量色块，无立体材质'],pixel:['像素','▦','干净的像素艺术，统一像素网格与有限色板，不混入平滑矢量线'],smooth:['柔滑 3D','●','柔滑、无接缝的高品质 3D 质感，柔和棚拍光与细腻高光，无毛发'],clay:['黏土','◕','圆润的手工黏土质感，细微压痕，哑光柔光，不要脏污'],plush:['毛绒','✿','柔软短绒玩偶质感，细密绒毛与克制缝线，轮廓清晰，不遮挡眼睛'],glass:['玻璃','◇','半透明彩色磨砂玻璃质感，柔和折射与边缘高光，眼睛清晰可辨']},
 accessories:{magichat:['魔法帽','尖顶魔法帽'],mushroomhat:['蘑菇帽','圆润蘑菇帽'],glasses:['眼镜','细框眼镜'],sunglasses:['墨镜','小巧墨镜'],headphones:['耳机','简洁头戴式耳机'],pajamas:['睡衣','宽松睡衣'],cloak:['魔法披风','短魔法披风'],skates:['溜冰鞋','小溜冰鞋'],phone:['手机','手机'],macbook:['MacBook','无标志的 MacBook 风格笔记本电脑'],tea:['茶杯','小茶杯'],book:['书本','小书本'],wand:['魔杖','星星魔杖']},
 action:{breathe:['呼吸','◌','仅做幅度很小的身体呼吸起伏，眼睛稳定睁开，不眨眼'],blink:['眨眼','⊶','保持身体稳定，仅自然地缓慢眨眼一次'],look:['看一看','◔','眼睛轻轻从左看向右，身体稳定，不额外眨眼'],puzzled:['困惑','?','眼睛形成轻微疑惑感，身体小幅倾斜，不添加眉毛、嘴巴或问号文字'],happy:['开心','⌣','眼睛弯成开心的弧线，轻微左右摇摆，不添加嘴巴'],bounce:['弹跳','↟','整个角色轻盈上下弹跳，保持体积与比例，不依赖腿部动作'],rotate:['转一圈','⟳','整体绕竖直轴缓慢旋转一圈，体积与五官位置保持一致'],sleep:['睡觉','☾','眼睛完全闭合，身体只做极轻微呼吸起伏，不睁眼或眨眼'],listen:['听音乐','♫','专注聆听，随节拍小幅摆动，目光放松，不额外眨眼'],work:['专注工作','▤','目光专注、睁开并保持稳定，不眨眼、不转眼，不添加与工作无关的表情变化'],skate:['滑冰','♧','整体沿冰面平滑滑行，姿态与体积稳定'],magic:['施魔法','✧','注视少量细小光点，用漂浮光点表达施法，避免过多光效']},
 scene:{transparent:['透明背景','无背景，透明 alpha 通道，不把棋盘格画进图像'],solid:['纯色','干净的浅色纯色背景'],gradient:['渐变','克制的浅蓝到浅紫柔和渐变背景'],desk:['书桌','简洁书桌，少量文具，背景虚化'],cafe:['咖啡馆','安静明亮的咖啡馆，简洁桌面，背景虚化'],bedroom:['卧室','柔和夜灯照明的舒适卧室'],library:['图书馆','安静图书馆，简洁书架与柔和光线'],forest:['魔法森林','梦幻魔法森林，少量发光植物，主体清晰'],mushroomhouse:['蘑菇小屋','温暖的蘑菇小屋，少量童话细节'],rink:['溜冰场','干净的溜冰场，柔和冷色光线'],underwater:['海底','清澈海底，少量气泡与柔和水下光线'],space:['太空舱','简洁太空舱，圆窗外有稀疏星星'],festive:['节日','简洁节日氛围，少量彩纸与暖光，不添加文字']},
 output:{avatar:['头像','◎','单个角色头像，1:1 构图，角色居中，留足边距，清晰适合小尺寸显示'],sticker:['贴纸','◇','单枚角色贴纸，完整轮廓，均匀白色外描边，透明背景，1:1 构图'],sheet:['角色设定图','▤','一张角色设定图，前视、侧视、后视与眼睛表情分区排布；各视角身份、比例、配色、配饰严格一致，干净浅色背景'],storyboard:['动作分镜','▥','动作分镜排版，依动作顺序每步一格；若只有一个动作，分为起始、过程、结束三格。所有格子保持相同机位、比例、身份和配色，不附无关动作'],keyframes:['动画关键帧','▦','静态动画关键帧方案，按动作阶段拆分起始、过渡、结束帧，逐帧描述；保持相同画布、锚点、机位、体积、五官间距与配饰位置，方便后续制作循环动画'],pet:['Pet 创作简报','✦','用于 Codex / ChatGPT Pet 的角色与动作创作简报，包含角色特征、待机与所选动作的视觉描述。当前只是创意简报，不是可直接导入的宠物文件；后续需按目标版本规范制作素材、导出并通过技术校验']},
 limbs:{none:['无手无脚','没有手、脚、手臂或腿'],feet:['短脚','仅两只短脚，没有手或手臂'],arms:['短手','仅两只短手，没有脚或腿'],both:['短手短脚','两只短手和两只短脚，比例克制'],hover:['悬浮底座','无手无脚，用独立悬浮底座移动']}
};
const DEFAULT={version:1,hair:'short',hairColor:'#3A3438',skinColor:'#E7BFA6',clothing:'sweater',framing:'bust',proportion:'three',name:'Mira',body:'sphere',style:'smooth',color:'#5698F5',eyeColor:'#FFFFFF',limbs:'none',accessories:[],action:'breathe',sequence:[],scene:'transparent',output:'avatar',reference:false};
const PRESETS=[['毛绒人物',{...DEFAULT,name:'毛绒人物',body:'human',style:'plush',limbs:'both',color:'#94A8CD',action:'breathe'}],['Mira',{...DEFAULT}],['魔法方块',{...DEFAULT,name:'魔法方块',body:'roundedcube',color:'#9475E7',accessories:['magichat','wand'],action:'magic',scene:'gradient'}],['毛绒小龙',{...DEFAULT,name:'毛绒小龙',body:'dragon',style:'plush',color:'#90BD9C',action:'happy'}],['音乐 Mira',{...DEFAULT,name:'音乐 Mira',accessories:['headphones'],action:'listen',scene:'gradient'}],['瞌睡小猫',{...DEFAULT,name:'瞌睡小猫',body:'cat',color:'#F0B578',style:'clay',action:'sleep',scene:'bedroom'}]];
let state=structuredClone(DEFAULT),tab='body',promptMode='full',playing=true,toastTimer;
const html=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const label=(type,key)=>DATA[type][key]?.[0]||key;
const option=(type,key)=>`<button class="choice ${state[type]===key?'selected':''}" data-type="${type}" data-value="${key}" aria-pressed="${state[type]===key}"><span class="glyph" aria-hidden="true">${DATA[type][key][1]}</span>${DATA[type][key][0]}</button>`;
const chip=(type,key,selected)=>`<button class="chip ${selected?'selected':''}" data-type="${type}" data-value="${key}" aria-pressed="${!!selected}">${label(type,key)}</button>`;
function notify(s){$('toast').textContent=s;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3500)}
function controls(){
 $('sectionTabs').innerHTML=[['body','形体'],['style','材质'],['accessories','配饰'],['action','动作'],['scene','场景'],['output','输出']].map(([k,v])=>`<button data-tab="${k}" class="${tab===k?'active':''}" aria-pressed="${tab===k}">${v}</button>`).join('');
 let v='';
 if(tab==='body')v=`<label class="field-title" for="nameInput">角色名字 <small>最多 24 字</small></label><input class="text-input" id="nameInput" maxlength="24" value="${html(state.name)}" autocomplete="off"><div class="field-title">人物与几何角色</div><div class="option-grid two">${option('body','human')}</div><div class="field-title">基础形状</div><div class="option-grid">${Object.keys(DATA.body).slice(1,10).map(k=>option('body',k)).join('')}</div><div class="field-title">动物伙伴 <small>十二生肖 + 猫 / 企鹅</small></div><div class="chips">${Object.keys(DATA.body).slice(10,24).map(k=>chip('body',k,state.body===k)).join('')}</div><div class="field-title">原创小角色</div><div class="option-grid two">${['robot','monster'].map(k=>option('body',k)).join('')}</div><div class="field-title">手脚 <small>默认关闭</small></div><div class="chips">${Object.keys(DATA.limbs).map(k=>chip('limbs',k,state.limbs===k)).join('')}</div>`;
 if(tab==='body'&&state.body==='human'){
  v=v.slice(0,v.indexOf('<div class="field-title">手脚'));
  const pick=(id,title,choices)=>`<label class="field-title" for="${id}">${title}</label><select id="${id}" data-human="${id}">${Object.entries(choices).map(([k,n])=>`<option value="${k}" ${state[id]===k?'selected':''}>${n}</option>`).join('')}</select>`;
  v+=pick('framing','人物构图',{head:'头像特写',bust:'半身人物',full:'全身人物'})+pick('proportion','Q 版比例',{two:'2 头身 · 玩偶感',three:'3 头身 · 小人物'})+pick('hair','发型轮廓',{short:'短发',long:'长发',curly:'卷发',bald:'光头 / 极短发'})+pick('clothing','基础服装',{sweater:'针织上衣',suit:'西装',hoodie:'连帽衫',dress:'连衣裙'});
  v+=`<div class="field-title">肤色与发色</div><div class="color-custom"><input type="color" id="skinColor" data-human="skinColor" value="${state.skinColor}" aria-label="人物肤色"><span class="color-description">肤色</span><input type="color" id="hairColor" data-human="hairColor" value="${state.hairColor}" aria-label="人物发色"><span class="color-description">发色</span></div><div class="note-card">人物保留正常手脚，由构图自然裁切。参考图模式优先保留发型、肤色、眼镜和衣服特征；Mira 的无手无脚设定不会套用到人物</div>`;
 }
 if(tab==='style')v=`<div class="field-title">表面与质感</div><div class="option-grid two">${Object.keys(DATA.style).map(k=>option('style',k)).join('')}</div><p class="helper">示意图近似呈现配色和轮廓；真实质感以 ChatGPT 生成结果为准</p><div class="field-title">角色主色</div><div class="palette">${['#5698F5','#9475E7','#F19BC0','#F0B578','#EBD570','#90BD9C','#71BFC7','#E1E5EC','#465369'].map(c=>`<button class="swatch ${state.color===c?'selected':''}" data-color="${c}" style="background:${c}" aria-label="主色 ${c}" aria-pressed="${state.color===c}"></button>`).join('')}</div><div class="color-custom"><input type="color" id="bodyColor" value="${state.color}" aria-label="自定义角色颜色"><input class="text-input" id="colorHex" maxlength="7" value="${state.color}" aria-label="角色颜色十六进制"></div><div class="field-title">眼睛颜色</div><div class="chips">${['#FFFFFF','#243247'].map(c=>`<button class="chip ${state.eyeColor===c?'selected':''}" data-eye="${c}" aria-pressed="${state.eyeColor===c}">${c==='#FFFFFF'?'白色胶囊眼':'深色胶囊眼'}</button>`).join('')}</div><div class="note-card">${state.body==='human'?'人物保留简化的自然五官与身份特征。':'始终保留简洁双眼，不添加嘴巴。'}表情随当前动作变化，工作时保持专注，不额外眨眼</div>`;
 if(tab==='accessories')v=`<div class="field-title">一点小个性 <small>${state.accessories.length} / 3 件</small></div><div class="chips">${Object.keys(DATA.accessories).map(k=>chip('accessories',k,state.accessories.includes(k))).join('')}</div><p class="helper">最多搭配 3 件。同类帽子、眼镜会自动替换，保持角色清爽</p><div class="divider"></div><div class="field-title">当前搭配</div><p class="helper">${state.accessories.length?state.accessories.map(k=>label('accessories',k)).join(' · '):'暂时没有配饰，简单也很好'}</p><button class="outline" data-clear-accessories>清空配饰</button><div class="note-card">没有手时，手机、电脑、茶杯、书和魔杖会在身旁或漂浮呈现；不会自动加上手脚。无脚滑冰使用独立悬浮滑冰底座</div>`;
 if(tab==='action')v=`<div class="field-title">主要动作</div><div class="option-grid">${Object.keys(DATA.action).map(k=>option('action',k)).join('')}</div><div class="field-title">接着做什么 <small>可添加 4 步，允许重复</small></div><div style="display:flex;gap:7px"><select id="nextAction" aria-label="选择下一步动作">${Object.keys(DATA.action).map(k=>`<option value="${k}">${label('action',k)}</option>`).join('')}</select><button class="outline" id="addSequence" ${state.sequence.length>=4?'disabled':''}>添加</button></div><div class="sequence-list">1. ${label('action',state.action)}${state.sequence.map((k,i)=>`<div>${i+2}. ${label('action',k)} <button class="quiet tiny" data-remove-step="${i}" aria-label="移除第 ${i+2} 步">×</button></div>`).join('')}</div><p class="helper">顺序用于分镜、关键帧和简报。画布只示意主要动作；静态头像、贴纸选取其代表瞬间</p>`;
 if(tab==='scene')v=`<div class="field-title">角色在哪里</div><div class="chips">${Object.keys(DATA.scene).map(k=>chip('scene',k,state.scene===k)).join('')}</div><div class="note-card">${state.output==='sticker'?'贴纸输出会固定为透明背景。':state.output==='sheet'?'角色设定图会使用干净浅色背景。':'场景会写入提示词。画布只显示氛围配色，不是场景成图。'}</div>`;
 if(tab==='output')v=`<div class="field-title">准备创作什么</div><div class="option-grid two format-options">${Object.keys(DATA.output).map(k=>option('output',k)).join('')}</div><div class="note-card">${DATA.output[state.output][2]}</div><div class="field-title">怎样使用</div><p class="helper">1. 完成角色与动作搭配<br>2. 复制右侧提示词<br>3. 打开 ChatGPT，在新对话中粘贴<br>4. 参考图模式下，先附上你的图片</p><p class="helper">本工作台只生成提示词，不调用图像生成接口</p>`;
 $('controls').innerHTML=v;
 document.querySelectorAll('[data-human]').forEach(el=>el.addEventListener('change',e=>{state[e.target.dataset.human]=e.target.value;renderResult()}));
 $('nameInput')?.addEventListener('input',e=>{state.name=e.target.value;renderResult()});
 $('bodyColor')?.addEventListener('input',e=>{state.color=e.target.value.toUpperCase();$('colorHex').value=state.color;renderResult()});
 $('bodyColor')?.addEventListener('change',controls);
 $('colorHex')?.addEventListener('change',e=>{if(/^#[0-9a-f]{6}$/i.test(e.target.value)){state.color=e.target.value.toUpperCase();render()}else{e.target.value=state.color;notify('请输入 # 开头的 6 位颜色值')}});
 $('addSequence')?.addEventListener('click',()=>{if(state.sequence.length<4){state.sequence.push($('nextAction').value);render()}});
}
function compatible(s){
 const notes=[];const noHands=['none','feet','hover'].includes(s.limbs);const noFeet=['none','arms','hover'].includes(s.limbs);
 if(noHands&&s.accessories.some(a=>['phone','macbook','tea','book','wand'].includes(a)))notes.push('无手道具已安排在身旁或漂浮');
 if(noFeet&&(s.action==='skate'||s.sequence.includes('skate')||s.accessories.includes('skates')))notes.push('无脚滑冰采用独立悬浮底座');
 if([s.action,...s.sequence].includes('work'))notes.push('工作阶段保持目光稳定，不眨眼');
 if(s.output==='sticker'&&s.scene!=='transparent')notes.push('贴纸优先使用透明背景');
 if(s.output==='sheet'&&!['solid','transparent'].includes(s.scene))notes.push('设定图优先使用干净浅色背景');
 if(s.output==='avatar'&&s.sequence.length)notes.push('头像只呈现主动作的代表瞬间');
 if(s.output==='sticker'&&s.sequence.length)notes.push('单枚贴纸只呈现主动作的代表瞬间');
 if(s.body==='human')notes.push('人物身份与自然五官保留');
 if(s.limbs==='none')notes.push('保留无手无脚设定');
 return notes;
}
function buildPrompt(s,short=false){
 if(s.body==='human')return humanPrompt(s,short);
 const chain=[s.action,...s.sequence],multi=['storyboard','keyframes','pet'].includes(s.output),noHands=['none','feet','hover'].includes(s.limbs),noFeet=['none','arms','hover'].includes(s.limbs);
 const name=s.name.trim()||'这个角色';
 const identity=s.reference?`请先等待我在本对话上传参考图，再以图中的角色为身份基准，保留它的主体轮廓、配色、五官间距和可辨识特征；不要声称已经读取参考图。下方参数用于明确材质、动作与配饰变化，如与参考图身份冲突，优先保留参考图身份。`:`创作一个名为「${name}」的原创角色：${DATA.body[s.body][2]}，主色 ${s.color}。`;
 const face=`两只${s.eyeColor==='#FFFFFF'?'白色':'深色'}竖向胶囊眼，无嘴巴；眼睛的间距、尺寸与所在位置保持一致。${DATA.limbs[s.limbs][1]}。`;
 let held=0;
 const accessories=s.accessories.length?s.accessories.map(a=>{
  const n=DATA.accessories[a][1];
  if(['phone','tea','book','wand'].includes(a))return noHands?`${n}独立悬浮在角色身旁，不用手持`:held++===0?`短手轻托${n}`:`${n}放在身旁，不同时手持多件道具`;
  if(a==='macbook')return noHands?`${n}放在角色面前的独立支撑面上，不出现手`:`${n}放在面前的支撑面上，不要求与手持道具同时操作`;
  if(a==='skates'&&noFeet)return'独立悬浮滑冰底座，冰刀固定在底座下方，不连接到身体，不添加脚';
  if(a==='pajamas'&&noHands&&noFeet)return'贴合主体轮廓的睡衣外套，无袖管或裤腿，不暗示隐藏手脚';
  return n;
 }).join('；'):'不添加任何配饰';
 const skate=noFeet&&chain.includes('skate')?'滑冰阶段使用独立悬浮滑冰底座，不凭空长出手脚。':'';
 const focus=chain.includes('work')?'工作阶段双眼始终睁开且稳定，禁止自动眨眼；若动作顺序另有眨眼，只在明确的眨眼阶段发生。':'';
 const scene=s.output==='sticker'?DATA.scene.transparent[1]:s.output==='sheet'?'干净的浅色背景，不添加场景物件':DATA.scene[s.scene][1];
 const action=multi?`动作顺序（各阶段分开，不同时发生）：\n${chain.map((a,i)=>`${i+1}. ${label('action',a)}：${DATA.action[a][2]}。`).join('\n')}`:`主要动作：${label('action',s.action)}，${DATA.action[s.action][2]}。${['avatar','sticker','sheet'].includes(s.output)?'本次为静态图，表现这个动作的一个清晰代表瞬间，不输出多个重影。':''}`;
 if(short)return `${identity}\n${face}风格：${DATA.style[s.style][2]}。配饰：${accessories}。\n${action}\n${skate}${focus}\n背景：${scene}。输出：${DATA.output[s.output][2]}。\n保持同一角色的比例与五官一致，不添加未选择的道具、文字、水印或品牌标志。`;
 return `【角色身份】\n${identity}\n${face}\n\n【材质与配饰】\n${DATA.style[s.style][2]}。\n${accessories}。配饰不遮挡眼睛、不过度堆叠；除所选配饰外不添加其他物品。\n\n【状态与动作】\n${action}\n${skate}${focus}\n\n【场景与输出】\n背景：${scene}。\n${DATA.output[s.output][2]}。\n\n【一致性约束】\n保持同一角色的体积、主体比例、五官间距、颜色和配饰位置；动作通过整体位移、轻微旋转或对应眼睛状态表达，不产生形体融化、额外肢体、额外眼睛或变脸。不添加嘴巴、文字、水印、品牌标志或多余道具。${s.reference?'参考图需由我另行上传；当前工作台预览仅为参数示意。':''}`;
}
function humanPrompt(s,short){
 const framing={head:'人物头像特写，自然裁切到肩部',bust:'半身人物构图，自然裁切',full:'完整全身构图，手脚完整可见'}[s.framing];
 const hair={short:'简洁短发',long:'长发轮廓',curly:'卷发轮廓',bald:'光头或极短发'}[s.hair];
 const clothes={sweater:'针织上衣',suit:'西装',hoodie:'连帽衫',dress:'连衣裙'}[s.clothing];
 const ref=s.reference?'请先等待我上传参考图，然后将图中人物转为立体 Q 版角色。保留其年龄感、脸型、发型轮廓与发色、肤色、眼镜及衣服等身份线索；不要把参考人物换成任意默认人物。若以下基础参数与参考图冲突，优先沿用参考图身份特征。':'创作名为「'+(s.name||'毛绒人物')+'」的原创 Q 版人物，'+hair+'，发色 '+s.hairColor+'，肤色 '+s.skinColor+'，身穿'+clothes+'，服装主色 '+s.color+'。';
 const sequence=[s.action,...s.sequence],multi=['storyboard','keyframes','pet'].includes(s.output);
 const acts=(multi?sequence:[s.action]).map((a,i)=>`${i+1}. ${label('action',a)}：${DATA.action[a][2].replace('不添加眉毛、嘴巴或问号文字','以自然人物五官表达，不添加文字').replace('不添加嘴巴','保留自然、克制的微笑')}`).join('；');
 const scene=s.output==='sticker'?DATA.scene.transparent[1]:s.output==='sheet'?'干净浅色背景':DATA.scene[s.scene][1];
 const outputDesc=s.output==='avatar'?'单个人物形象，1:1 构图，主体居中，清晰适合头像使用；以所选人物构图为准':DATA.output[s.output][2];
 const extra=s.accessories.length?s.accessories.map(a=>DATA.accessories[a][1]).join('、'):'无额外配饰；参考人物原有眼镜与服装细节不算额外配饰，应保留';
 if(short)return `${ref}\n${framing}，${s.proportion==='two'?'2':'3'} 头身，正常人物五官与手脚。${DATA.style[s.style][2]}。${s.style==='plush'?'头发、服装与皮肤均为精细短绒，五官以刺绣表达。':''}配饰：${extra}。\n${acts}。背景：${scene}。${outputDesc}。保持身份与比例一致，工作时不自动眨眼，无额外肢体或水印。`;
 return `【人物与身份】\n${ref}\n${framing}，${s.proportion==='two'?'2':'3'} 头身 Q 版比例，简化但自然的人物五官，不使用 Mira 的无嘴巴或无手无脚设定；手脚保持正常解剖数量，由构图自然裁切。\n\n【风格与搭配】\n${DATA.style[s.style][2]}。${s.style==='plush'?'人物皮肤、头发和服装都转为可辨识的短绒玩偶材质，五官用精细刺绣表达；不要变成真实人像，也不要丢失身份特征。':''}配饰：${extra}。手持道具最多一件，其余自然放在身旁或桌面，避免遮挡脸。\n\n【动作与输出】\n${multi?'按顺序分别呈现，不能同时发生：':'静态图表现主动作的代表瞬间：'}${acts}。${sequence.includes('work')?'工作阶段保持目光稳定、双眼睁开，不自动眨眼；眨眼只在单独指定的眨眼阶段发生。':''}\n背景：${scene}。${outputDesc}。\n\n保持人物脸型、发型、服装、比例和色彩一致，无额外肢体，无文字、水印或标志。${s.reference?'当前 SVG 只是通用人物示意，并未读取参考图；需在 ChatGPT 中附上参考图。':''}`;
}
function shade(hex,amount){return '#'+[1,3,5].map(i=>Math.max(0,Math.min(255,parseInt(hex.slice(i,i+2),16)+amount)).toString(16).padStart(2,'0')).join('')}
let svgSerial=0;
function svg(s,animated=false,small=false){
 const id='s'+svgSerial++,fill=s.style==='flat'||s.style==='pixel'?s.color:`url(#${id}body)`,stroke=s.style==='glass'?'#ffffffaa':'none';
 let shape='',features='',extra='',before='';
 const attrs=`fill="${fill}" stroke="${stroke}" stroke-width="3"`;
 const circ='<circle cx="200" cy="207" r="83" '+attrs+'/>';
 if(['sphere','rat','ox','tiger','rabbit','dragon','goat','monkey','rooster','dog','pig','cat','penguin','monster','horse'].includes(s.body))shape=circ;
 if(s.body==='ring')shape=`<path d="M200 120a86 86 0 1 0 0 172a86 86 0 1 0 0-172ZM200 170a36 36 0 1 1 0 72a36 36 0 1 1 0-72Z" fill-rule="evenodd" ${attrs}/>`;
 if(['roundedcube','robot'].includes(s.body))shape=`<rect x="119" y="126" width="162" height="162" rx="42" ${attrs}/>`;
 if(s.body==='cuboid')shape=`<rect x="95" y="145" width="210" height="132" rx="37" ${attrs}/>`;
 if(s.body==='capsule')shape=`<rect x="137" y="101" width="126" height="205" rx="63" ${attrs}/>`;
 if(s.body==='drop')shape=`<path d="M198 102C183 144 112 167 119 226C128 324 281 321 282 225C282 170 226 141 207 106Q202 99 198 102" ${attrs}/>`;
 if(s.body==='cloud')shape=`<path d="M115 262C58 253 83 178 126 178C120 102 223 91 241 160C305 140 331 224 286 254Q280 269 250 269H136Q120 269 115 262" ${attrs}/>`;
 if(s.body==='mushroom')shape=`<rect x="156" y="190" width="88" height="112" rx="30" fill="${shade(s.color,32)}"/><path d="M99 196C110 72 292 78 302 196Q305 220 278 220H122Q97 220 99 196" ${attrs}/><circle cx="150" cy="169" r="13" fill="#ffffff88"/><circle cx="221" cy="134" r="17" fill="#ffffff88"/><circle cx="261" cy="182" r="11" fill="#ffffff88"/>`;
 if(s.body==='star')shape=`<path d="M188 110Q200 87 212 110L235 153L283 161Q310 165 291 187L256 224L262 274Q264 302 240 289L200 266L154 291Q134 301 138 275L146 225L108 190Q88 172 114 164L163 155Z" ${attrs}/>`;
 if(s.body==='snake')shape=`<path d="M239 166C310 208 287 287 205 285C97 281 116 208 173 207" fill="none" stroke="${s.color}" stroke-width="45" stroke-linecap="round"/><ellipse cx="193" cy="178" rx="64" ry="63" ${attrs}/>`;
 const ears={cat:`<path d="M133 170L133 103Q152 98 175 139M225 139Q251 101 268 103L267 173" ${attrs}/><path d="M143 138L145 120L162 140M238 141L256 121L257 143" fill="${shade(s.color,35)}"/>`,rabbit:`<ellipse cx="162" cy="115" rx="21" ry="61" transform="rotate(-12 162 115)" ${attrs}/><ellipse cx="237" cy="113" rx="21" ry="59" transform="rotate(12 237 113)" ${attrs}/>`,dog:`<ellipse cx="124" cy="173" rx="25" ry="56" transform="rotate(13 124 173)" fill="${shade(s.color,-25)}"/><ellipse cx="276" cy="174" rx="25" ry="56" transform="rotate(-13 276 174)" fill="${shade(s.color,-25)}"/>`,rat:`<circle cx="137" cy="132" r="33" ${attrs}/><circle cx="262" cy="132" r="33" ${attrs}/>`,monkey:`<circle cx="123" cy="200" r="28" ${attrs}/><circle cx="277" cy="200" r="28" ${attrs}/>`,tiger:`<circle cx="142" cy="138" r="25" ${attrs}/><circle cx="258" cy="138" r="25" ${attrs}/>`,pig:`<path d="M128 167L122 119Q149 118 170 139M230 139Q254 116 278 118L270 166" ${attrs}/>`};
 before+=ears[s.body]||'';
 if(['ox','goat','dragon','monster'].includes(s.body))before+=`<path d="M145 158Q105 140 130 105Q130 133 167 140M237 140Q267 130 271 105Q296 144 254 158" fill="${shade(s.color,37)}"/>`;
 if(s.body==='horse')before+=`<path d="M143 151L142 105L171 136M225 137L254 103L257 158M171 140Q185 93 226 115L214 151" fill="${shade(s.color,-24)}"/>`;
 if(s.body==='rooster')before+=`<path d="M166 140Q158 94 181 110Q188 74 205 110Q232 91 230 143" fill="#ed8e9d"/>`;
 if(s.body==='tiger')features+=`<path d="M185 134L191 156M208 132L207 154M266 194L250 199M135 194L151 200" fill="none" stroke="${shade(s.color,-55)}" stroke-width="8" stroke-linecap="round"/>`;
 if(s.body==='penguin')features+=`<ellipse cx="200" cy="227" rx="56" ry="57" fill="#ffffff48"/>`;
 if(s.body==='robot')before+=`<path d="M200 128V101" stroke="${s.color}" stroke-width="8"/><circle cx="200" cy="96" r="10" fill="${shade(s.color,25)}"/><rect x="108" y="180" width="17" height="44" rx="8" fill="${shade(s.color,-20)}"/><rect x="277" y="180" width="17" height="44" rx="8" fill="${shade(s.color,-20)}"/>`;
 const feet=['feet','both'].includes(s.limbs)&&s.body!=='human',hands=['arms','both'].includes(s.limbs)&&s.body!=='human',skate=s.accessories.includes('skates')||s.action==='skate';
 if(feet)before+=`<ellipse cx="165" cy="287" rx="20" ry="15" fill="${shade(s.color,-12)}"/><ellipse cx="235" cy="287" rx="20" ry="15" fill="${shade(s.color,-12)}"/>`;
 if(hands)before+=`<ellipse cx="113" cy="229" rx="16" ry="25" transform="rotate(23 113 229)" fill="${s.color}"/><ellipse cx="287" cy="229" rx="16" ry="25" transform="rotate(-23 287 229)" fill="${s.color}"/>`;
 if(skate&&!feet||s.limbs==='hover')before+=`<ellipse cx="200" cy="315" rx="84" ry="12" fill="#cad4ed"/><path d="M146 326H251" stroke="#8b9bc0" stroke-width="6" stroke-linecap="round"/>`;
 if(skate&&feet)extra+=`<path d="M143 302H185M215 302H257" stroke="#8b9bc0" stroke-width="5" stroke-linecap="round"/>`;
 if(s.body==='human'){
 const skin=s.skinColor||'#E7BFA6',hair=s.hairColor||'#3A3438',bodyY=s.framing==='head'?298:253;
 shape=`<path d="M135 ${bodyY}Q200 ${bodyY-30} 265 ${bodyY}L278 329H122Z" ${attrs}/><rect x="181" y="220" width="38" height="42" rx="16" fill="${skin}"/><ellipse cx="126" cy="191" rx="13" ry="18" fill="${skin}"/><ellipse cx="274" cy="191" rx="13" ry="18" fill="${skin}"/><ellipse cx="200" cy="177" rx="76" ry="79" fill="${skin}"/>`;
 if(s.hair==='long')before+=`<path d="M119 170Q109 83 198 83Q293 83 282 269L244 289H150L119 265Z" fill="${hair}"/>`;
 if(s.hair!=='bald')features+=`<path d="M124 179Q98 76 203 79Q296 77 277 180L258 151Q232 154 223 123Q177 165 134 146Z" fill="${hair}"/>`;
 if(s.hair==='curly')features+=`<g fill="${hair}"><circle cx="135" cy="125" r="25"/><circle cx="165" cy="99" r="24"/><circle cx="203" cy="91" r="25"/><circle cx="240" cy="104" r="24"/><circle cx="267" cy="128" r="23"/></g>`;
 if(s.clothing==='suit')features+=`<path d="M165 255L200 293L237 255L230 329H170Z" fill="#f4f6fa"/><path d="M193 274H207L213 313L200 324L187 313Z" fill="#65718c"/>`;
 if(s.clothing==='hoodie')features+=`<path d="M171 252Q148 266 167 285M229 252Q251 266 234 285" stroke="${shade(s.color,35)}" stroke-width="12" fill="none"/><path d="M179 275V300M220 275V300" stroke="#ffffffaa" stroke-width="3"/>`;
 if(s.style==='plush')features+=`<path d="M149 195L153 198M246 212L250 208M184 235L188 238" stroke="#fff8" stroke-width="2"/>`;
 features+=`<path d="M191 228Q201 233 211 228" fill="none" stroke="#b68275" stroke-width="3" stroke-linecap="round"/>`;
 if(s.framing==='full'){shape+=`<rect x="153" y="313" width="30" height="48" rx="12" fill="#62708f"/><rect x="217" y="313" width="30" height="48" rx="12" fill="#62708f"/>`;}
 }
 const eyeY=s.body==='mushroom'?244:s.body==='ring'?147:203,eyeX=s.body==='ring'?181:178,eyeGap=s.body==='ring'?38:44,eyeH=s.body==='ring'?14:29,eyeW=s.body==='ring'?10:15;
 let eyes=['sleep','happy'].includes(s.action)?`<path d="M${eyeX-6} ${eyeY}q7 ${s.action==='happy'?-9:5} 14 0M${eyeX+eyeGap-6} ${eyeY}q7 ${s.action==='happy'?-9:5} 14 0" fill="none" stroke="${s.body==='human'?'#443B3D':s.eyeColor}" stroke-width="6" stroke-linecap="round"/>`:`<rect x="${eyeX-eyeW/2}" y="${eyeY-eyeH/2}" width="${eyeW}" height="${s.action==='puzzled'?eyeH*.75:eyeH}" rx="${eyeW/2}" fill="${s.body==='human'?'#443B3D':s.eyeColor}"/><rect x="${eyeX+eyeGap-eyeW/2}" y="${eyeY-eyeH/2}" width="${eyeW}" height="${eyeH}" rx="${eyeW/2}" fill="${s.body==='human'?'#443B3D':s.eyeColor}"/>`;
 if(s.style==='plush')features+=`<path d="M137 225L143 229M246 250L252 253M178 264L184 263M254 166L258 172M150 167L155 162M226 137L231 142" stroke="#ffffff58" stroke-width="2" stroke-linecap="round"/>`;
 if(s.accessories.includes('cloak'))before=`<path d="M135 166L91 298Q200 322 310 297L265 164" fill="#7155ae"/>`+before;
 if(s.accessories.includes('pajamas'))features+=`<path d="M122 231Q200 248 278 231L266 266Q201 302 135 264Z" fill="#bccdf2" opacity=".83"/><circle cx="199" cy="259" r="3" fill="white"/><circle cx="199" cy="272" r="3" fill="white"/>`;
 if(s.accessories.includes('magichat'))extra+=`<path d="M133 130L185 28Q198 18 214 42L260 130Z" fill="#655397"/><ellipse cx="197" cy="133" rx="86" ry="17" fill="#7863b3"/><path d="M169 111H239" stroke="#e4c880" stroke-width="13"/><path d="M193 57l4 7 8 1-6 5 1 8-7-4-7 4 2-8-6-5 8-1Z" fill="#f2df9a"/>`;
 if(s.accessories.includes('mushroomhat'))extra+=`<path d="M101 138C111 28 291 28 302 138Q200 161 101 138" fill="#db817d"/><ellipse cx="201" cy="140" rx="101" ry="17" fill="#ecd5c1"/><circle cx="157" cy="101" r="16" fill="#ffe9db"/><circle cx="215" cy="72" r="17" fill="#ffe9db"/><circle cx="258" cy="119" r="12" fill="#ffe9db"/>`;
 if(s.accessories.some(a=>['glasses','sunglasses'].includes(a)))extra+=`<rect x="151" y="${eyeY-20}" width="45" height="39" rx="14" fill="${s.accessories.includes('sunglasses')?'#27354bec':'none'}" stroke="#344769" stroke-width="5"/><rect x="204" y="${eyeY-20}" width="45" height="39" rx="14" fill="${s.accessories.includes('sunglasses')?'#27354bec':'none'}" stroke="#344769" stroke-width="5"/><path d="M196 ${eyeY-4}H204" stroke="#344769" stroke-width="5"/>`;
 if(s.accessories.includes('headphones'))extra+=`<path d="M117 215V179C117 90 284 90 284 179V215" fill="none" stroke="#4b5571" stroke-width="12"/><rect x="104" y="179" width="25" height="57" rx="12" fill="#657597"/><rect x="271" y="179" width="25" height="57" rx="12" fill="#657597"/>`;
 const props=s.accessories.filter(a=>['phone','macbook','tea','book','wand'].includes(a));
 props.forEach((a,i)=>{const x=hands?277:292,y=210+i*39;
 if(a==='phone')extra+=`<g transform="translate(${x} ${y}) rotate(10)"><rect width="26" height="43" rx="6" fill="#596782"/><rect x="4" y="5" width="18" height="29" rx="2" fill="#bfd7f7"/><circle cx="13" cy="38" r="2" fill="#fff"/></g>`;
 if(a==='macbook')extra+=`<g transform="translate(112 ${s.body==='capsule'?280:258})"><path d="M4 0H161L151 65H14Z" fill="#bbc5d6"/><path d="M0 64H166L177 70Q180 77 168 77H0Q-9 74 0 64" fill="#d4dce8"/></g>`;
 if(a==='tea')extra+=`<g transform="translate(${x} ${y})"><path d="M28 8C49 5 50 30 28 30" fill="none" stroke="#e5cbb1" stroke-width="6"/><path d="M0 0H31V29Q15 45 0 29Z" fill="#efdecc"/><ellipse cx="15" cy="2" rx="15" ry="4" fill="#b79a74"/><path d="M8-10Q1-19 10-25M22-9Q16-17 25-25" fill="none" stroke="#bac7de" stroke-width="3" stroke-linecap="round"/></g>`;
 if(a==='book')extra+=`<g transform="translate(${x} ${y}) rotate(12)"><rect width="33" height="44" rx="4" fill="#cf978b"/><path d="M7 3V41" stroke="#efc0ad" stroke-width="3"/><path d="M13 12H26M13 19H26" stroke="#fff1d9" stroke-width="2"/></g>`;
 if(a==='wand')extra+=`<g transform="translate(${x} ${y-12}) rotate(20)"><path d="M7 20V69" stroke="#8f76bf" stroke-width="7" stroke-linecap="round"/><path d="M7-3L13 10L27 12L16 22L18 36L7 29L-7 36L-5 22L-15 12L0 10Z" fill="#eed18c"/></g>`;
 });
 if(s.action==='magic')extra+=`<g fill="#d8b976"><path d="M88 152l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z"/><path d="M300 132l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z"/></g>`;
 const motion=animated?`<style>@keyframes ${id}float{0%,100%{transform:translateY(0)}50%{transform:translateY(-${s.action==='bounce'?22:4}px)}}@keyframes ${id}sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}@keyframes ${id}blink{0%,40%,48%,100%{transform:scaleY(1)}44%{transform:scaleY(.07)}}@keyframes ${id}look{0%,100%{transform:translateX(-6px)}50%{transform:translateX(6px)}}@keyframes ${id}rotate{0%,100%{transform:scaleX(1)}50%{transform:scaleX(-1)}}@keyframes ${id}skate{0%,100%{transform:translateX(-30px) rotate(-5deg)}50%{transform:translateX(30px) rotate(5deg)}}.${id}character{transform-origin:200px 245px;animation:${id}${s.action==='rotate'?'rotate':s.action==='skate'?'skate':['puzzled','happy','listen'].includes(s.action)?'sway':'float'} ${s.action==='bounce'?'1.5':'4'}s ease-in-out infinite;${['work','blink','look'].includes(s.action)?'animation:none;':''}}.${id}eyes{transform-origin:200px ${eyeY}px;${s.action==='blink'?`animation:${id}blink 4s infinite;`:s.action==='look'?`animation:${id}look 4s ease-in-out infinite;`:''}}@media(prefers-reduced-motion:reduce){.${id}character,.${id}eyes{animation:none!important}}</style>`:'';
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 390" role="img" aria-label="${html(s.name||'角色')} SVG 造型示意"><title>${html(s.name||'角色')} · 参数化 SVG 示意</title><defs><radialGradient id="${id}body" cx="32%" cy="24%" r="79%"><stop offset="0" stop-color="${shade(s.color,s.style==='glass'?65:33)}" stop-opacity="${s.style==='glass'?'.68':'1'}"/><stop offset=".65" stop-color="${s.color}" stop-opacity="${s.style==='glass'?'.72':'1'}"/><stop offset="1" stop-color="${shade(s.color,-35)}" stop-opacity="${s.style==='glass'?'.9':'1'}"/></radialGradient><radialGradient id="${id}shadow"><stop stop-color="#8799c4" stop-opacity=".22"/><stop offset="1" stop-color="#8799c4" stop-opacity="0"/></radialGradient></defs>${motion}<ellipse cx="200" cy="321" rx="111" ry="19" fill="url(#${id}shadow)"/><g class="${id}character" ${s.style==='pixel'?'shape-rendering="crispEdges"':''}>${before}${shape}${features}<g class="${id}eyes">${eyes}</g>${extra}</g></svg>`;
}
function renderResult(){
 $('characterTitle').textContent=state.name.trim()||'未命名角色';$('art').innerHTML=svg(state,playing);$('art').setAttribute('aria-label',`${state.name||'角色'}，${label('body',state.body)}，${label('style',state.style)}，${label('action',state.action)}，SVG 示意图`);
 $('styleBadge').textContent=label('style',state.style);$('motionBadge').textContent=label('action',state.action);
 const bg={transparent:'#f0f4ff',solid:'#f0f2f7',gradient:'#eeeefe',desk:'#edf1f8',cafe:'#f4efe9',bedroom:'#e7e9f6',library:'#edf0e9',forest:'#e2ede9',mushroomhouse:'#f0eae1',rink:'#e3f1fa',underwater:'#e0f1f3',space:'#e2e6f4',festive:'#faeeec'};
 $('canvas').style.backgroundColor=bg[state.scene];$('promptText').value=buildPrompt(state,promptMode==='short');$('charCount').textContent=$('promptText').value.length+' 字';$('outputBadge').textContent=label('output',state.output);$('compatibility').innerHTML='<strong>✓ 已检查搭配</strong><br>'+html(compatible(state).slice(0,3).join(' · ')||'保持角色身份、配色与比例一致');$('referenceMode').checked=state.reference;$('referenceHelp').hidden=!state.reference;
}
function render(){controls();renderResult()}
function select(type,value){
 if(!DATA[type]||!DATA[type][value])return;
 if(type==='accessories'){
  if(state.accessories.includes(value))state.accessories=state.accessories.filter(k=>k!==value);
  else{let items=[...state.accessories];for(const group of [['magichat','mushroomhat'],['glasses','sunglasses']])if(group.includes(value))items=items.filter(k=>!group.includes(k));if(items.length>=3){notify('最多搭配 3 件，请先取消一件');return}state.accessories=[...items,value]}
 }else{const wasHuman=state.body==='human';state[type]=value;if(type==='body'&&value==='human'){state.name='毛绒人物';state.style='plush';state.limbs='both';}else if(type==='body'&&wasHuman){state.limbs='none';state.name=label('body',value);}if(type==='body'&&!['sphere'].includes(value)&&state.name==='Mira')state.name=label('body',value);if(type==='body'&&value==='snake'&&state.limbs!=='none'){state.limbs='none';notify('小蛇已保留无手无脚设定')}}
 if(type==='limbs'&&state.body==='snake'&&value!=='none'){state.limbs='none';notify('小蛇保持无手无脚，滑冰可用独立悬浮底座')}
 render();
}
$('sectionTabs').addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(b){tab=b.dataset.tab;controls()}});
$('controls').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.type)select(b.dataset.type,b.dataset.value);if(b.dataset.color){state.color=b.dataset.color;render()}if(b.dataset.eye){state.eyeColor=b.dataset.eye;render()}if(b.hasAttribute('data-clear-accessories')){state.accessories=[];render()}if(b.hasAttribute('data-remove-step')){state.sequence.splice(Number(b.dataset.removeStep),1);render()}});
$('presetGrid').innerHTML=PRESETS.map(([name,s],i)=>`<button class="preset" data-preset="${i}" aria-label="使用${name}预设">${svg(s,false,true)}${name}</button>`).join('');
$('presetGrid').addEventListener('click',e=>{const b=e.target.closest('[data-preset]');if(!b)return;state=structuredClone(PRESETS[Number(b.dataset.preset)][1]);render();notify('已载入 '+state.name+' 预设')});
$('playToggle').addEventListener('click',()=>{playing=!playing;$('playToggle').textContent=playing?'Ⅱ 暂停':'▷ 播放';$('playToggle').setAttribute('aria-pressed',String(playing));renderResult()});
$('referenceMode').addEventListener('change',e=>{state.reference=e.target.checked;renderResult()});
function setMode(mode){promptMode=mode;$('fullPrompt').classList.toggle('active',mode==='full');$('shortPrompt').classList.toggle('active',mode==='short');$('fullPrompt').setAttribute('aria-pressed',mode==='full');$('shortPrompt').setAttribute('aria-pressed',mode==='short');renderResult()}
$('fullPrompt').onclick=()=>setMode('full');$('shortPrompt').onclick=()=>setMode('short');
async function copy(){try{await navigator.clipboard.writeText($('promptText').value);return true}catch(e){$('promptText').focus();$('promptText').select();try{return document.execCommand('copy')}catch(e){return false}}}
$('copyPrompt').onclick=async()=>{notify(await copy()?'提示词已复制，可以去 ChatGPT 粘贴了':'暂时无法自动复制，提示词已选中，请手动复制')};
$('copyOpen').onclick=async()=>{const copyPromise=copy();const opened=window.open('https://chatgpt.com/','_blank');if(opened)opened.opener=null;const ok=await copyPromise;notify(ok?(opened?'已复制，在 ChatGPT 新对话中粘贴即可':'已复制，浏览器拦截了新窗口，请打开 chatgpt.com'):'提示词已选中，请手动复制后粘贴到 ChatGPT')};
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
const filename=()=>((state.name||'dot').replace(/[^\p{L}\p{N}_-]/gu,'-').slice(0,40)||'dot');
$('saveConfig').onclick=()=>{download(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),filename()+'-config.json');notify('已请求下载 JSON 配置，请查看浏览器下载列表')};
$('loadConfig').onclick=()=>$('configFile').click();
function validateConfig(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))throw Error('配置必须是 JSON 对象');
 if(raw.version!==1)throw Error('暂不支持这个配置版本，请使用本工作台导出的文件');
 const r=structuredClone(DEFAULT);
 for(const k of ['body','style','limbs','action','scene','output']){if(typeof raw[k]!=='string'||!Object.hasOwn(DATA[k],raw[k]))throw Error('配置中的 '+k+' 无效');r[k]=raw[k]}
 for(const k of ['color','eyeColor']){if(typeof raw[k]!=='string'||!/^#[0-9a-f]{6}$/i.test(raw[k]))throw Error('配置颜色无效');r[k]=raw[k].toUpperCase()}
 if(!['#FFFFFF','#243247'].includes(r.eyeColor))throw Error('眼睛颜色不在支持的范围内');
 if(typeof raw.name!=='string'||raw.name.length>24)throw Error('角色名称需在 24 字以内');r.name=raw.name;
 if(typeof raw.reference!=='boolean')throw Error('参考图设置无效');r.reference=raw.reference;
 if(!Array.isArray(raw.accessories)||raw.accessories.length>3||new Set(raw.accessories).size!==raw.accessories.length||raw.accessories.some(x=>typeof x!=='string'||!Object.hasOwn(DATA.accessories,x)))throw Error('配饰配置无效，最多 3 件');
 for(const group of [['magichat','mushroomhat'],['glasses','sunglasses']])if(group.every(x=>raw.accessories.includes(x)))throw Error('配置包含互相冲突的配饰');r.accessories=[...raw.accessories];
 if(!Array.isArray(raw.sequence)||raw.sequence.length>4||raw.sequence.some(x=>typeof x!=='string'||!Object.hasOwn(DATA.action,x)))throw Error('动作顺序无效');r.sequence=[...raw.sequence];
 for(const [k,valid] of Object.entries({hair:['short','long','curly','bald'],clothing:['sweater','suit','hoodie','dress'],framing:['head','bust','full'],proportion:['two','three']})){if(raw[k]!==undefined){if(!valid.includes(raw[k]))throw Error('人物配置无效');r[k]=raw[k]}} for(const k of ['skinColor','hairColor'])if(raw[k]!==undefined){if(typeof raw[k]!=='string'||!/^#[0-9a-f]{6}$/i.test(raw[k]))throw Error('人物颜色无效');r[k]=raw[k]}
 if(r.body==='human')r.limbs='both';
 if(r.body==='snake'&&r.limbs!=='none')throw Error('小蛇配置不能添加手脚');return r;
}
$('configFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>50000)throw Error('配置文件过大，请选择本工作台导出的 JSON');const loaded=validateConfig(JSON.parse(await f.text()));state=loaded;render();notify('配置已载入：'+(state.name||'未命名角色'))}catch(err){notify(err instanceof SyntaxError?'无法读取 JSON，请检查配置文件格式':err.message)}e.target.value=''};
$('resetConfig').onclick=()=>{state=structuredClone(DEFAULT);render();notify('已重置为 Mira')};
$('exportSVG').onclick=()=>{download(new Blob([svg(state,false)],{type:'image/svg+xml'}),filename()+'-schematic.svg');notify('已请求下载静态 SVG 示意图')};
$('exportAnimated').onclick=()=>{download(new Blob([svg(state,true)],{type:'image/svg+xml'}),filename()+'-animated-schematic.svg');notify('已请求下载动态 SVG，请用浏览器查看；不是宠物导入文件')};
$('exportPNG').onclick=()=>{const im=new Image(),url=URL.createObjectURL(new Blob([svg(state,false)],{type:'image/svg+xml'}));im.onload=()=>{const c=document.createElement('canvas');c.width=1200;c.height=1170;const ctx=c.getContext('2d');ctx.drawImage(im,0,0,1200,1170);c.toBlob(b=>{if(b){download(b,filename()+'-schematic.png');notify('已请求下载透明底 PNG 示意图')}else notify('PNG 导出失败，请尝试 SVG')},'image/png');URL.revokeObjectURL(url)};im.onerror=()=>{URL.revokeObjectURL(url);notify('PNG 导出失败，请尝试 SVG')};im.src=url};
document.querySelector('.mobile-tabs').onclick=e=>{const b=e.target.closest('[data-view]');if(!b)return;document.querySelector('.workspace').dataset.view=b.dataset.view;document.querySelectorAll('.mobile-tabs button').forEach(t=>t.setAttribute('aria-pressed',t===b));window.scrollTo({top:0,behavior:'smooth'})};
render();
// WebMCP uses the same configuration validation and render path as visible controls.
const mc=document.modelContext;
if(mc?.registerTool){const ac=new AbortController();const definitions=[{name:'read_character_prompt',title:'读取角色提示词',description:'Read the current character configuration and generated prompt without changing it.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:input=>{if(input&&Object.keys(input).length)throw Error('No parameters accepted');return{configuration:structuredClone(state),prompt:buildPrompt(state,promptMode==='short')}}},{name:'configure_character',title:'配置角色',description:'Replace the character configuration with a valid version-1 configuration, update the visible preview and prompt. Does not generate images, upload data or copy text.',inputSchema:{type:'object',properties:{configuration:{type:'object'}},required:['configuration'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:input=>{if(!input||Object.keys(input).some(k=>k!=='configuration'))throw Error('Expected configuration');const next=validateConfig(input.configuration);state=next;render();return{configuration:structuredClone(state),prompt:buildPrompt(state,promptMode==='short')}}}];for(const def of definitions)try{Promise.resolve(mc.registerTool(def,{signal:ac.signal})).catch(()=>{})}catch(e){}window.addEventListener('pagehide',()=>ac.abort(),{once:true})}
