'use strict';
const DATA={
 body:{human:['Q版人物','♙','保留人物辨识度的 Q 版人物'],ring:['圆环','◉','圆润的环形身体，完整保留中央孔洞'],sphere:['圆球','●','饱满的圆球形身体'],roundedcube:['圆角方块','▣','大圆角的正方体身体'],cuboid:['圆角长方体','▰','横向圆角长方体身体'],capsule:['胶囊','▮','竖直胶囊形身体'],drop:['水滴','♦','圆润的水滴形身体'],cloud:['云朵','☁','三个柔和起伏的云朵轮廓'],mushroom:['蘑菇','♧','宽蘑菇伞盖与短圆柱菌柄'],star:['星星','★','圆润五角星身体'],rat:['鼠','🐭','圆耳朵的迷你鼠角色'],ox:['牛','🐮','短圆角牛角与宽圆脸的牛角色'],tiger:['虎','🐯','圆耳朵与少量简洁条纹的老虎角色'],rabbit:['兔','🐰','长圆耳朵的兔子角色'],dragon:['龙','🐲','圆角小角、短吻与圆润轮廓的原创小龙'],snake:['蛇','🐍','无肢体、盘曲的圆润小蛇角色'],horse:['马','🐴','短鬃毛、圆润长脸的马角色'],goat:['羊','🐑','卷曲小角与圆润轮廓的羊角色'],monkey:['猴','🐵','圆耳朵与浅色面部区域的猴子角色'],rooster:['鸡','🐤','小鸡冠与圆润身形的鸡角色'],dog:['狗','🐶','柔软垂耳与圆脸的狗狗角色'],pig:['猪','🐷','小圆鼻与圆耳朵的猪角色'],cat:['猫','🐱','三角圆角耳朵的猫咪角色'],penguin:['企鹅','🐧','深色外轮廓与浅色腹部的企鹅角色'],robot:['小机器人','▦','原创圆角方形小机器人，不使用已有 IP 或标志'],monster:['小怪兽','✦','原创圆润小怪兽，两个短软角，不使用已有 IP']},
 style:{flat:['平面插画','◒','简洁平面矢量插画，清晰轮廓和少量色块，无立体材质'],pixel:['像素','▦','干净的像素艺术，统一像素网格与有限色板，不混入平滑矢量线'],smooth:['柔滑 3D','●','柔滑、无接缝的高品质 3D 质感，柔和棚拍光与细腻高光，无毛发'],clay:['黏土','◕','圆润的手工黏土质感，细微压痕，哑光柔光，不要脏污'],plush:['毛绒','✿','柔软短绒玩偶质感，细密绒毛与克制缝线，轮廓清晰，不遮挡眼睛'],glass:['玻璃','◇','半透明彩色磨砂玻璃质感，柔和折射与边缘高光，眼睛清晰可辨']},
 accessories:{magichat:['魔法帽','尖顶魔法帽'],mushroomhat:['蘑菇帽','圆润蘑菇帽'],glasses:['眼镜','细框眼镜'],sunglasses:['墨镜','小巧墨镜'],headphones:['耳机','简洁头戴式耳机'],pajamas:['睡衣','宽松睡衣'],cloak:['魔法披风','短魔法披风'],skates:['溜冰鞋','小溜冰鞋'],phone:['手机','手机'],macbook:['MacBook','无标志的 MacBook 风格笔记本电脑'],tea:['茶杯','小茶杯'],book:['书本','小书本'],wand:['魔杖','星星魔杖']},
 action:{breathe:['呼吸','◌','仅做幅度很小的身体呼吸起伏，眼睛稳定睁开，不眨眼'],blink:['眨眼','⊶','保持身体稳定，仅自然地缓慢眨眼一次'],look:['看一看','◔','眼睛轻轻从左看向右，身体稳定，不额外眨眼'],puzzled:['困惑','?','眼睛形成轻微疑惑感，身体小幅倾斜，不添加眉毛、嘴巴或问号文字'],happy:['开心','⌣','眼睛弯成开心的弧线，轻微左右摇摆，不添加嘴巴'],bounce:['弹跳','↟','整个角色轻盈上下弹跳，保持体积与比例，不依赖腿部动作'],rotate:['转一圈','⟳','整体绕竖直轴缓慢旋转一圈，体积与五官位置保持一致'],sleep:['睡觉','☾','眼睛完全闭合，身体只做极轻微呼吸起伏，不睁眼或眨眼'],listen:['听音乐','♫','专注聆听，随节拍小幅摆动，目光放松，不额外眨眼'],work:['专注工作','▤','目光专注、睁开并保持稳定，不眨眼、不转眼，不添加与工作无关的表情变化'],skate:['滑冰','♧','整体沿冰面平滑滑行，姿态与体积稳定'],magic:['施魔法','✧','注视少量细小光点，用漂浮光点表达施法，避免过多光效']},
 scene:{transparent:['透明背景','无背景，透明 alpha 通道，不把棋盘格画进图像'],solid:['纯色','干净的浅色纯色背景'],gradient:['渐变','克制的浅蓝到浅紫柔和渐变背景'],desk:['书桌','简洁书桌，少量文具，背景虚化'],cafe:['咖啡馆','安静明亮的咖啡馆，简洁桌面，背景虚化'],bedroom:['卧室','柔和夜灯照明的舒适卧室'],library:['图书馆','安静图书馆，简洁书架与柔和光线'],forest:['魔法森林','梦幻魔法森林，少量发光植物，主体清晰'],mushroomhouse:['蘑菇小屋','温暖的蘑菇小屋，少量童话细节'],rink:['溜冰场','干净的溜冰场，柔和冷色光线'],underwater:['海底','清澈海底，少量气泡与柔和水下光线'],space:['太空舱','简洁太空舱，圆窗外有稀疏星星'],festive:['节日','简洁节日氛围，少量彩纸与暖光，不添加文字']},
 output:{avatar:['头像','◎','单个角色头像，1:1 构图，角色居中，留足边距，清晰适合小尺寸显示'],sticker:['贴纸','◇','单枚角色贴纸，完整轮廓，均匀白色外描边，透明背景，1:1 构图'],sheet:['角色设定图','▤','一张角色设定图，前视、侧视、后视与眼睛表情分区排布；各视角身份、比例、配色、配饰严格一致，干净浅色背景'],storyboard:['动作分镜','▥','动作分镜排版，依动作顺序每步一格；若只有一个动作，分为起始、过程、结束三格。所有格子保持相同机位、比例、身份和配色，不附无关动作'],keyframes:['动画关键帧','▦','静态动画关键帧方案，按动作阶段拆分起始、过渡、结束帧，逐帧描述；保持相同画布、锚点、机位、体积、五官间距与配饰位置，方便后续制作循环动画'],pet:['Pet 创作简报','✦','用于 Codex / ChatGPT Pet 的角色与动作创作简报，包含角色特征、待机与所选动作的视觉描述。当前只是创意简报，不是可直接导入的宠物文件；后续需按目标版本规范制作素材、导出并通过技术校验']},
 limbs:{none:['无手无脚','没有手、脚、手臂或腿'],feet:['短脚','仅两只短脚，没有手或手臂'],arms:['短手','仅两只短手，没有脚或腿'],both:['短手短脚','两只短手和两只短脚，比例克制'],hover:['悬浮底座','无手无脚，用独立悬浮底座移动']}
};
Object.assign(DATA.body,{spirit:['黑豆精灵','●','原创豆形小精灵，饱满柔软的豆形身体，小巧象牙白椭圆眼睛配黑色瞳孔、短小圆手，不添加动物条纹或夸张大头'],shiba:['柴犬','🐕','茶色与奶油白相间的原创柴犬玩偶，竖起的三角耳朵、白色脸颊与胸腹、清晰卷尾'],bear:['小熊','🐻','圆耳朵、短吻与厚实圆润四肢的小熊'],lion:['小狮子','🦁','圆耳朵、蓬松圆形鬃毛、尾端毛球的小狮子'],cloudspirit:['云朵精灵','☁','原创云朵精灵，圆润云团身体、柔和起伏轮廓与清晰双眼']});
DATA.body.cat=['小猫','🐱','原创小猫玩偶，保留三角耳朵、短吻、小鼻子、可辨识毛色花纹与完整尾巴'];DATA.body.tiger=['小老虎','🐯','原创小老虎玩偶，橙色底色与清晰深色条纹、圆耳朵、奶油色口鼻与完整条纹尾巴'];
DATA.body.goat=['小羊','🐑','小羊，保留小耳朵、圆润短吻、清晰羊蹄与卷曲羊毛，角可短小圆润'];
DATA.style.smooth[2]='柔滑哑光的高品质 3D 表面，柔和棚拍光与克制高光';
Object.assign(DATA.accessories,{collar:['项圈','小巧项圈'],scarf:['围巾','短围巾'],bow:['蝴蝶结','小巧蝴蝶结']});
DATA.design={minimal:['经典 Dot','◉','简洁几何角色语言，清晰单一轮廓和克制细节'],robot:['机器人','▦','原创友好的迷你机器人设计，圆角机身与简洁面罩，不使用品牌标志或官方资产'],toy:['玩偶','✿','圆润可爱的原创收藏玩偶设计，柔和轮廓、小巧清晰的五官与克制细节；可爱不依赖超大头，保留饱满身体；明确的设计玩偶语言，不做照片式真实动物'],anime:['动漫奇幻','✧','原创 Q 版动漫奇幻设计，清晰轮廓、精致分层，适合头像的小尺寸阅读']};
DATA.bodyplan={quad:['四足动物','保留可辨识的四足动物躯干、四肢与尾巴，前爪不变成人手'],biped:['双足拟人','双足直立或坐姿，两只手臂与两条腿，不额外保留另一组前爪'],blob:['圆团角色','圆团化比例，保留主体辨识特征；几何角色的肢体以单独设置为准'],chibi:['短身玩偶','均衡紧凑的玩偶比例，身体清晰可见，头部不过度放大，手脚短小但数量与物种一致']};
DATA.fur={short:['短绒','细密短绒，毛流柔和、轮廓清晰，眼睛与花纹不被遮挡'],long:['长毛','柔软蓬松长毛，脸周适当收短，保留耳朵和尾巴轮廓'],curly:['卷毛','细密卷曲羊毛，卷度均匀，面部五官清晰']};
DATA.pose={neutral:['自然站立','放松自然的站立或悬浮姿态'],sit:['坐下','自然坐姿，重心稳定，保持物种结构'],crossleg:['盘腿坐','双腿自然盘坐，两手放松'],fold:['抱臂','两臂自然交叠在胸前，不遮挡脸'],chin:['托腮','一只手轻托脸颊，另一只手自然放松'],wave:['挥手','一只手自然举起挥动，不增加手臂'],magic:['施法姿态','以自然的施法姿态表现专注，手或前爪动作符合身体结构；不自动添加道具或光效']};
DATA.expression={calm:['平静','平静放松的表情'],happy:['开心','自然开心的表情，保留角色原有五官风格'],curious:['好奇','略带好奇，眼神清晰专注'],sleepy:['困倦','轻微困倦但仍可辨识的眼神'],focused:['专注','双眼睁开、目光稳定专注']};
DATA.effect={none:['无特效','不添加光环、星点、雾气或能量特效'],halo:['柔和光环','一圈克制的柔和光环'],stars:['细小星点','少量细小星点'],mist:['淡淡雾气','少量低浓度柔和雾气'],energy:['微光能量','一处低强度微光能量']};
DATA.pattern={orange:['橘猫','橘色毛发，保留柔和虎斑纹与奶油色口鼻'],tabby:['虎斑','棕灰色虎斑毛发，保留额头 M 形与身体条纹'],calico:['三花','白底，橘色与深色块状毛色，花色位置始终一致'],tuxedo:['黑白','黑色与白色相间，白口鼻、胸腹与爪尖，色块位置始终一致']};
DATA.skinMaterial={smooth:['柔滑肤感','皮肤使用细腻柔滑哑光材质'],plush:['短绒肤感','皮肤使用细密短绒，五官精细刺绣，保留脸型']};
DATA.hairMaterial={layered:['分层发丝','头发使用清晰分层的简化发丝与发束'],plush:['毛绒头发','头发使用细密毛绒，保持发型轮廓']};
DATA.clothMaterial={knit:['针织','衣服使用可读的细致针织纹理'],fabric:['布料','衣服使用柔软平整的布料质感'],plush:['毛绒','衣服使用柔软短绒材质']};
DATA.action.magic[2]='保持专注，以很小的身体或手势变化表达施法；只有选择特效时才显示相应效果';
const GEOMETRY=['spirit','sphere','ring','roundedcube','cuboid','capsule','drop','cloud','mushroom','star','cloudspirit'];
const ZODIAC=['rat','ox','tiger','rabbit','dragon','snake','horse','goat','monkey','rooster','dog','pig'];
const PETS=['cat','shiba','tiger','dog','rabbit','bear','goat','lion','penguin'];
const isGeometry=s=>GEOMETRY.includes(s.body),isAnimal=s=>!isGeometry(s)&&!['human','robot'].includes(s.body);
const naturalPlan=body=>GEOMETRY.includes(body)?'blob':body==='human'?'chibi':['robot','penguin','monkey','rooster','dragon','monster'].includes(body)?'biped':'quad';
const hands=s=>s.body==='human'||['biped'].includes(s.bodyplan)||s.bodyplan==='chibi'&&!isAnimal(s)||isGeometry(s)&&['arms','both'].includes(s.limbs);
const DEFAULT={version:2,category:'classic',design:'minimal',bodyplan:'blob',fur:'short',pose:'neutral',expression:'calm',effect:'none',pattern:'orange',skinMaterial:'smooth',hairMaterial:'layered',clothMaterial:'knit',hair:'short',hairColor:'#3A3438',skinColor:'#E7BFA6',clothing:'sweater',framing:'bust',proportion:'three',name:'Dot',body:'sphere',style:'smooth',color:'#3064ED',eyeColor:'#FFFFFF',limbs:'none',accessories:[],action:'breathe',sequence:[],scene:'transparent',output:'avatar',reference:false};
const preset=(name,category,values,art)=>({name,category,state:{...DEFAULT,name,category,...values},art});
const PRESETS=[
 preset('蓝色 Dot','classic',{name:'Dot'},'gallery-dot'),
 preset('黑豆精灵','classic',{body:'spirit',bodyplan:'blob',design:'toy',style:'plush',color:'#29262B',eyeColor:'#FFFFFF',limbs:'both'},'gallery-bean'),
 preset('柴犬团子','pets',{body:'shiba',bodyplan:'quad',design:'toy',style:'plush',color:'#DCA56D',eyeColor:'#243247',pose:'sit'},'gallery-shiba'),
 preset('条纹小虎','pets',{body:'tiger',bodyplan:'quad',design:'toy',style:'plush',color:'#F0AC61',eyeColor:'#243247',pose:'sit'},'gallery-tiger'),
 preset('针织小人','human',{body:'human',bodyplan:'chibi',design:'toy',style:'smooth',color:'#4167B5',eyeColor:'#243247',limbs:'both',pose:'neutral',framing:'full'},'gallery-human'),
 preset('机器人伙伴','robot',{body:'robot',bodyplan:'biped',design:'robot',color:'#E1E5EC',eyeColor:'#5698F5',limbs:'both',pose:'neutral'},'gallery-robot'),
 preset('粉色小兔','pets',{body:'rabbit',bodyplan:'quad',design:'toy',style:'plush',color:'#F19BC0',eyeColor:'#243247',pose:'sit'},5),
 preset('瞌睡小猫','pets',{body:'cat',bodyplan:'quad',design:'toy',style:'plush',color:'#F0B578',eyeColor:'#243247',pose:'sit',action:'sleep',expression:'sleepy'},4),
 preset('毛绒小龙','fantasy',{body:'dragon',bodyplan:'biped',design:'anime',style:'plush',color:'#90BD9C',eyeColor:'#243247',limbs:'both',pose:'sit'},3),
 preset('魔法方块','fantasy',{body:'roundedcube',bodyplan:'blob',design:'anime',style:'plush',color:'#9475E7',accessories:['magichat','wand'],action:'magic',pose:'magic',effect:'none'},2)
];
// Historical category keys remain valid for version-2 configuration imports.
const CATEGORIES={classic:['几何与精灵'],pets:['动物'],human:['人物'],robot:['机器人'],fantasy:['奇幻生物'],soft:['几何与精灵']};
const SUBJECT_GROUPS={几何与精灵:GEOMETRY,动物:Object.keys(DATA.body).filter(k=>!GEOMETRY.includes(k)&&!['human','robot','monster','dragon'].includes(k)),人物:['human'],机器人:['robot'],奇幻生物:['dragon','monster']};
let state=structuredClone(PRESETS[0].state),tab='body',promptMode='full',playing=true,toastTimer,copyTimer,exampleIndex=0,showExample=true;
const $=id=>document.getElementById(id);
const html=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const label=(type,key)=>DATA[type]?.[key]?.[0]||key;
const option=(type,key)=>`<button class="choice ${state[type]===key?'selected':''}" data-type="${type}" data-value="${key}" aria-pressed="${state[type]===key}"><span class="glyph" aria-hidden="true">${DATA[type][key][1]}</span>${DATA[type][key][0]}</button>`;
const chip=(type,key,selected=state[type]===key)=>`<button class="chip ${selected?'selected':''}" data-type="${type}" data-value="${key}" aria-pressed="${!!selected}">${label(type,key)}</button>`;
const chips=(type,keys=Object.keys(DATA[type]))=>`<div class="chips">${keys.map(k=>chip(type,k)).join('')}</div>`;
const pick=(key,title,choices)=>`<label class="field-title" for="${key}">${title}</label><select id="${key}" data-setting="${key}">${Object.entries(choices).map(([k,v])=>`<option value="${k}" ${state[key]===k?'selected':''}>${Array.isArray(v)?v[0]:v}</option>`).join('')}</select>`;
function notify(s){$('toast').textContent=s;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3500)}
function availableAccessories(s){return Object.keys(DATA.accessories).filter(k=>hands(s)||['magichat','mushroomhat','glasses','sunglasses','collar','scarf','bow'].includes(k)||isGeometry(s)&&!['collar'].includes(k));}
function availablePoses(s){return Object.keys(DATA.pose).filter(k=>!['crossleg','fold','chin','wave'].includes(k)||hands(s));}
function normalize(s){
 if(isGeometry(s)&&s.bodyplan==='quad')s.bodyplan='blob';
 if(isGeometry(s)&&s.bodyplan==='biped')s.limbs='both';
 if(s.body==='human'){s.limbs='both';if(!['chibi','biped'].includes(s.bodyplan))s.bodyplan='chibi'}
 if(s.body==='snake'){s.limbs='none';s.bodyplan='blob'}
 if(!isGeometry(s)&&s.body!=='snake')s.limbs='both';
 s.accessories=s.accessories.filter(k=>availableAccessories(s).includes(k));
 let prop=false;s.accessories=s.accessories.filter(k=>{if(!['phone','macbook','tea','book','wand'].includes(k))return true;if(prop)return false;prop=true;return true});
 if(!availablePoses(s).includes(s.pose))s.pose='sit';
 return s;
}
function controls(){
 quickControls();
 $('sectionTabs').innerHTML=[['body','身体与造型'],['style','局部材质'],['accessories','配饰'],['action','动作'],['scene','场景'],['output','输出']].map(([k,v])=>`<button data-tab="${k}" class="${tab===k?'active':''}" aria-pressed="${tab===k}">${v}</button>`).join('');
 let v='';
 if(tab==='body'){
 v=`<label class="field-title" for="subjectSelect">主体形象</label><select id="subjectSelect">${Object.entries(SUBJECT_GROUPS).map(([group,keys])=>`<optgroup label="${group}">${keys.map(k=>`<option value="${k}" ${state.body===k?'selected':''}>${label('body',k)}</option>`).join('')}</optgroup>`).join('')}</select><div class="field-title">身体结构 <small>与材质分别选择</small></div>${chips('bodyplan',state.body==='human'?['chibi','biped']:state.body==='snake'?['blob']:isGeometry(state)?['blob','chibi','biped']:Object.keys(DATA.bodyplan))}`;
 if(isGeometry(state))v+=`<div class="field-title">手脚设置 <small>仅几何角色适用</small></div>${chips('limbs')}`;
 if(state.body==='cat')v+=`<div class="field-title">猫咪毛色</div>${chips('pattern')}`;
 if(state.body==='human')v+=pick('framing','人物构图',{head:'头像特写',bust:'半身人物',full:'全身人物'})+pick('proportion','Q 版比例',{two:'2 头身 · 玩偶感',three:'3 头身 · 小人物'})+pick('hair','发型',{short:'短发',long:'长发',curly:'卷发',bald:'光头 / 极短发'})+pick('clothing','服装',{sweater:'针织上衣',suit:'西装',hoodie:'连帽衫',dress:'连衣裙'})+`<div class="field-title">肤色与发色</div><div class="color-custom"><input type="color" data-setting="skinColor" value="${state.skinColor}" aria-label="人物肤色"><span class="color-description">肤色</span><input type="color" data-setting="hairColor" value="${state.hairColor}" aria-label="人物发色"><span class="color-description">发色</span></div>`;
 v+=`<div class="field-title">造型语言</div>${chips('design')}<p class="helper">风格名称仅作方向参考。所有样例为原创，不是官方角色或官方素材。</p>`;
 }
 if(tab==='style'){
 v='<p class="helper">整体材质和主色在上方调整；这里设置局部细节。</p>';
 if(isAnimal(state))v+=`<div class="field-title">毛发细节 <small>毛绒材质时生效</small></div>${chips('fur')}`;
 if(state.body==='human')v+=`<div class="field-title">人物分区材质</div>${pick('skinMaterial','脸与皮肤',DATA.skinMaterial)}${pick('hairMaterial','头发',DATA.hairMaterial)}${pick('clothMaterial','衣服',DATA.clothMaterial)}<p class="helper">分区材质优先于整体材质；平面和像素模式只保留纹理提示。</p>`;
 if(isGeometry(state)||state.body==='robot')v+=`<div class="field-title">眼睛颜色</div><div class="chips">${['#FFFFFF','#243247','#5698F5'].map(c=>`<button class="chip ${state.eyeColor===c?'selected':''}" data-eye="${c}" aria-pressed="${state.eyeColor===c}">${c==='#FFFFFF'?'白色':c==='#243247'?'深色':'蓝色'}</button>`).join('')}</div>`;
 }
 if(tab==='accessories')v=`<div class="field-title">配饰 <small>${state.accessories.length} / 3 件</small></div><div class="chips">${availableAccessories(state).map(k=>chip('accessories',k,state.accessories.includes(k))).join('')}</div><p class="helper">${state.bodyplan==='quad'?'四足动物优先项圈、围巾和帽子；切换为双足拟人后可搭配服装与手持物。':'最多搭配 3 件；同类帽子和眼镜会自动替换。手持物最多一件。'}</p><button class="outline" data-clear-accessories>清空配饰</button><div class="field-title">轻量特效 <small>最多一种 · 默认关闭</small></div>${chips('effect')}<p class="helper">特效不遮挡五官，也不扩大到角色主体之外。</p>`;
 if(tab==='action')v=`<div class="field-title">姿态</div>${chips('pose',availablePoses(state))}<div class="field-title">主要动作</div><div class="option-grid">${Object.keys(DATA.action).filter(k=>!['happy','puzzled'].includes(k)).map(k=>option('action',k)).join('')}</div><div class="field-title">动作顺序 <small>可再添加 4 步</small></div><div class="sequence-add"><select id="nextAction" aria-label="选择下一步动作">${Object.keys(DATA.action).map(k=>`<option value="${k}">${label('action',k)}</option>`).join('')}</select><button class="outline" id="addSequence" ${state.sequence.length>=4?'disabled':''}>添加</button></div><div class="sequence-list">1. ${label('action',state.action)}${state.sequence.map((k,i)=>`<div>${i+2}. ${label('action',k)} <button class="quiet tiny" data-remove-step="${i}" aria-label="移除第 ${i+2} 步">×</button></div>`).join('')}</div><p class="helper">姿态决定身体结构，表情控制脸部；睡觉、眨眼、工作等明确动作优先。工作时不自动眨眼。静态图只取主动作的一瞬间。</p>`;
 if(tab==='scene')v=`<div class="field-title">角色在哪里</div>${chips('scene')}<div class="note-card">${state.output==='pet'?'ChatGPT Pet 固定透明背景；场景选择会保留供其他用途使用。':state.output==='sticker'?'贴纸固定透明背景。':state.output==='sheet'?'设定图使用干净浅色背景。':'场景为可选项，会写入提示词；样例画面不会实时变更场景。'}</div>`;
 if(tab==='output')v=`<div class="field-title">准备创作什么</div><div class="option-grid two format-options">${Object.keys(DATA.output).map(k=>option('output',k)).join('')}</div><div class="note-card">${DATA.output[state.output][2]}</div><div class="field-title">怎样使用</div><p class="helper">1. 搭配角色、材质和动作<br>2. 复制提示词并打开 ChatGPT<br>3. 在 ChatGPT 粘贴后开始创作<br>4. 沿用参考角色时，先在 ChatGPT 附图</p><p class="helper">这里只组合提示词，不上传参考图，也不实时生成图片。</p>`;
 $('controls').innerHTML=v;
 $('controls').querySelectorAll('[data-setting]').forEach(el=>el.addEventListener('change',e=>{state[e.target.dataset.setting]=e.target.value;showExample=false;renderResult()}));
 $('subjectSelect')?.addEventListener('change',e=>select('body',e.target.value));
 $('bodyColor')?.addEventListener('input',e=>{state.color=e.target.value.toUpperCase();showExample=false;$('colorHex').value=state.color;renderResult()});
 $('colorHex')?.addEventListener('change',e=>{if(/^#[0-9a-f]{6}$/i.test(e.target.value)){state.color=e.target.value.toUpperCase();showExample=false;render()}else{e.target.value=state.color;notify('请输入 # 开头的 6 位颜色值')}});
 $('addSequence')?.addEventListener('click',()=>{if(state.sequence.length<4){state.sequence.push($('nextAction').value);render()}});
}

function quickControls(){
 const pet=state.output==='pet';
 $('purposeControls').innerHTML=`<div class="purpose-options"><button data-purpose="avatar" class="${!pet?'selected':''}" aria-pressed="${!pet}">角色图</button><button data-purpose="pet" class="${pet?'selected':''}" aria-pressed="${pet}">ChatGPT Pet</button></div>`;
 $('quickControls').innerHTML=`<div class="panel-heading"><h2>调整你的版本</h2><span>写入创作说明</span></div><div class="quick-pair"><div><label class="field-title" for="quickName">角色名字</label><input id="quickName" class="text-input" maxlength="24" value="${html(state.name)}"></div><div><label class="field-title" for="quickMaterial">材质与画法</label><select id="quickMaterial">${Object.entries(DATA.style).map(([k,v])=>`<option value="${k}" ${state.style===k?'selected':''}>${v[0]}</option>`).join('')}</select></div></div><div class="quick-pair"><div><label class="field-title" for="quickColor">${state.body==='human'?'服装主色':'主色'}</label><div class="color-well"><input type="color" id="quickColor" value="${state.color}"><input id="colorHex" class="text-input" maxlength="7" value="${state.color}" aria-label="主色十六进制"></div></div><div>${pick('quickMood','表情',DATA.expression)}</div></div>`;
 $('quickMood').value=state.expression;
 $('quickName').oninput=e=>{state.name=e.target.value;showExample=false;renderResult()};
 $('quickMaterial').onchange=e=>select('style',e.target.value);
 $('quickMood').onchange=e=>select('expression',e.target.value);
 $('quickColor').oninput=e=>{state.color=e.target.value.toUpperCase();showExample=false;$('colorHex').value=state.color;renderResult()};
 $('colorHex').onchange=e=>{if(/^#[0-9a-f]{6}$/i.test(e.target.value)){state.color=e.target.value.toUpperCase();showExample=false;render()}else{e.target.value=state.color;notify('请输入 # 开头的 6 位颜色值')}};
}
$('purposeControls').addEventListener('click',e=>{const b=e.target.closest('[data-purpose]');if(b){state.output=b.dataset.purpose;render()}});
$('quickControls').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.purpose){state.output=b.dataset.purpose;render()}else if(b.dataset.type)select(b.dataset.type,b.dataset.value)});

function compatible(s){const notes=[];if(isAnimal(s))notes.push('保留耳朵、花纹与尾巴');if(s.body==='human')notes.push('人物分区材质与自然五官');if([s.action,...s.sequence].includes('work'))notes.push('工作时不自动眨眼');if(s.output==='sticker')notes.push('贴纸使用透明背景');if(s.output==='sheet')notes.push('设定图使用浅色背景');if(isGeometry(s)&&s.limbs==='none')notes.push('仅几何角色无手无脚');if(!notes.length)notes.push('身份、比例与配色保持一致');return notes}
function buildPrompt(input,short=false){
 const s=structuredClone(input);
 const pet=s.output==='pet';
 if(pet){s.scene='transparent';s.framing='full';}

 const multi=['storyboard','keyframes','pet'].includes(s.output),chain=multi?[s.action,...s.sequence]:[s.action];
 const identity=s.reference?'请先等待我在本对话上传参考图，再以图中的角色为身份基准。保留其可辨识的脸型、主体轮廓、配色、发型或耳朵、花纹、尾巴和五官间距；当前尚未上传参考图，不要声称已经读取。以下参数用于改变材质、姿态与配饰，如与参考图身份冲突，优先保留身份。':`创作名为「${s.name.trim()||'小伙伴'}」的单个原创角色：${DATA.body[s.body][2]}。主色 ${s.color}，标志性色块不被主色覆盖。`;
 let body=`${DATA.bodyplan[s.bodyplan][1]}。`;
 if(isGeometry(s))body+=`${DATA.limbs[s.limbs][1]}。${s.body==='spirit'?'两只象牙白椭圆眼睛配黑色瞳孔':`两只${s.eyeColor}胶囊眼`}，无嘴巴，眼睛位置和间距稳定。`;
 else if(s.body==='human')body+=`${s.proportion==='two'?'2':'3'} 头身，${{head:'头像特写，裁切到肩部',bust:'半身人物，自然裁切',full:'完整全身人物，手脚完整可见'}[s.framing]}。自然简化的人物五官，正常手脚数量。${{short:'短发',long:'长发',curly:'卷发',bald:'光头或极短发'}[s.hair]}，发色 ${s.hairColor}，肤色 ${s.skinColor}，身穿${{sweater:'针织上衣',suit:'西装',hoodie:'连帽衫',dress:'连衣裙'}[s.clothing]}。`;
 else if(s.body==='robot')body+='保留原创机器人面罩与两只清晰胶囊眼，面罩内不添加人物五官。';
 else body+=`保留物种的耳朵、口鼻、鼻子、爪子、标志性花纹与完整尾巴，不套用几何 Dot 的无嘴巴或无手无脚设定。${s.body==='cat'?DATA.pattern[s.pattern][1]+'。':''}${s.body==='snake'?'蛇保留天然无肢体的盘曲结构，不添加四肢。':''}`;
 let material=`${DATA.design[s.design][2]}。${DATA.style[s.style][2]}。`;
 if(isAnimal(s)&&s.style==='plush')material+=DATA.fur[s.fur][1]+'。';
 if(s.body==='human')material+=`分区材质优先于整体材质：${DATA.skinMaterial[s.skinMaterial][1]}；${DATA.hairMaterial[s.hairMaterial][1]}；${DATA.clothMaterial[s.clothMaterial][1]}。平面或像素画法用相应色块纹理概括，不能混入写实表面。`;
 const accessories=s.accessories.length?s.accessories.map(a=>DATA.accessories[a][1]).join('、'):'无额外配饰';
 const bodyProps=hands(s)?'手持道具最多一件，其余放在身旁或支撑面上。':isGeometry(s)?'没有手时，道具独立悬浮或放在身旁，不凭空添加肢体。':'四足动物不把前爪画成人手，不使用人类服装或手持道具。';
 const scene=pet?DATA.scene.transparent[1]:s.output==='sticker'?DATA.scene.transparent[1]:s.output==='sheet'?'干净浅色背景':DATA.scene[s.scene][1];
 const action=(multi?'各动作按顺序独立呈现，不同时发生：\n':'静态图仅表现主动作的代表瞬间：\n')+chain.map((a,i)=>`${i+1}. ${label('action',a)}：${DATA.action[a][2].replace('不添加眉毛、嘴巴或问号文字',isGeometry(s)?'不添加眉毛、嘴巴或问号文字':'用原有自然五官表达，不添加问号文字').replace('不添加嘴巴',isGeometry(s)?'不添加嘴巴':'保留原有自然五官')}`).join('\n');
 const focus=chain.includes('work')?'工作阶段双眼保持睁开、稳定专注，不自动眨眼或转眼；显式眨眼只在单独选择的眨眼阶段发生。':'除明确选择眨眼外，不自动添加频繁眨眼。';
 const pose=`姿态：${DATA.pose[s.pose][1]}。表情：${DATA.expression[s.expression][1]}。表情不改变身体姿态；睡觉、眨眼、工作等明确动作优先于基础表情。`;
 const petBrief=pet?'【ChatGPT Pet 创作流程】\n请先创作单个完整全身、透明背景的角色定稿，轮廓清楚，四肢和尾巴不裁切，保持稳定比例。先让我确认形象，再按当前 ChatGPT Pets 创作工具的规范制作动画；如果当前对话没有宠物制作工具，请先提供角色图和制作说明，不要声称已经创建或安装宠物。后续 v2 图集为 1536×2288，8 列×11 行，每格 192×208；前九行分别为 idle、running-right、running-left、waving、jumping、failed、waiting、running、review，后两行为按顺时针排列的十六个注视方向（从向上开始）。动作素材须来自同一角色，统一比例、锚点和花纹，展示动态预览并通过技术与视觉校验后才可创建。参考图、单张图片、GIF 或 SVG 示意都不等于可直接导入的已验证 Pet。\n\n':'';
 return petBrief+`【角色身份】\n${identity}\n${body}\n\n【风格与材质】\n${material}\n\n【配饰与特效】\n${accessories}。${bodyProps}配饰比例克制，不遮挡眼睛、耳朵或关键花纹；不添加未选物品。\n${DATA.effect[s.effect][1]}。特效最多一种、低强度、不遮挡主体。\n\n【姿态、表情与动作】\n${pose}\n${action}\n${focus}\n\n【场景与输出】\n${scene}。${DATA.output[s.output][2]}。\n\n【一致性与安全构图】\n每幅或每格只有同一个角色。主体居中，预留安全边距，不裁切耳朵、头顶、尾巴或所选全身构图中的手脚；${pet?'Pet 始终完整全身，不允许半身或头像裁切。':'头像特写与半身可按所选构图自然裁切。'}保持同一脸型、身体比例、五官间距、耳朵形状、花纹位置、尾巴、配色和配饰。运动不改变身份、不新增肢体，不拉伸或融化。避免多角色、杂乱道具、文字、水印和品牌标志；风格名称仅作方向参考，不复制官方角色资产。`;
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
function sampleStyle(art){
 const gallery={'gallery-dot':['300% 200%','0% 0%'],'gallery-bean':['320% 213.333%','50% 0%'],'gallery-shiba':['300% 200%','100% 0%'],'gallery-tiger':['300% 200%','0% 100%'],'gallery-human':['279.273% 186.182%','50% 100%'],'gallery-robot':['300% 200%','100% 100%']};
 if(gallery[art])return `background-image:url('./assets/collection.webp');background-size:${gallery[art][0]};background-position:${gallery[art][1]}`;
 return typeof art==='number'?`background-image:url('./assets/avatar-atlas.webp');background-size:300% 200%;background-position:${(art%3)*50}% ${Math.floor(art/3)*100}%`:`background-image:url('./assets/${art}.webp');background-size:contain;background-position:center`;
}
function renderGallery(){
 const card=(p,i)=>`<button class="preset ${exampleIndex===i?'active':''}" data-preset="${i}" aria-label="使用${p.name}预设" aria-pressed="${exampleIndex===i}"><span class="preset-art" style="${sampleStyle(p.art)}"></span><span>${p.name}</span></button>`;
 $('presetGrid').innerHTML=PRESETS.slice(0,6).map(card).join('');
 $('morePresets').innerHTML=PRESETS.slice(6).map((p,i)=>card(p,i+6)).join('');
}
function copyLabel(){return state.output==='pet'?'复制 Pet 创作说明':'复制创作说明'}
function renderResult(){
 const pet=state.output==='pet',p=PRESETS[exampleIndex];
 $('purposeHelp').textContent=pet?'先确认完整角色，再继续制作动画。':'复制说明，在 ChatGPT 生成你的专属角色。';
 $('petStages').hidden=!pet;
 $('showcase').style.cssText=sampleStyle(p.art);
 $('showcase').setAttribute('aria-label',p.name+'，'+label('style',p.state.style)+'原创静态样例');
 $('characterTitle').textContent=p.name;
 $('canvasLabel').textContent='原创样例';$('sampleNumber').textContent='DOT COLLECTION / '+String(exampleIndex+1).padStart(2,'0');
 $('styleBadge').textContent=label('style',p.state.style);
 $('motionBadge').textContent=p.state.body==='human'?'3 头身 · 全身':label('body',p.state.body);
 $('previewNote').textContent=state.body!==p.state.body?'样例供外观参考；当前主体为'+label('body',state.body):'样例固定展示，调整会写入创作说明';
 $('outputBadge').textContent='静态样例';
 $('configSummary').innerHTML=`<div class="summary-label">${showExample?'当前设定':'已调整的设定'}</div><div class="summary-values">${[label('body',state.body),label('bodyplan',state.bodyplan),label('style',state.style),label('expression',state.expression)].map(x=>`<span>${html(x)}</span>`).join('')}</div>`;
 $('compatibility').textContent=compatible(state).slice(0,2).join(' · ');
 $('referenceMode').checked=state.reference;$('referenceHelp').hidden=!state.reference;
 $('copyPrompt').textContent=copyLabel();
 $('promptPreview').textContent=buildPrompt(state,false);
}
function render(){normalize(state);renderGallery();controls();renderResult()}
function select(type,value){
 if(!DATA[type]||!DATA[type][value])return;showExample=false;
 if(type==='accessories'){
 if(!availableAccessories(state).includes(value))return;
 if(state.accessories.includes(value))state.accessories=state.accessories.filter(k=>k!==value);
 else{let items=[...state.accessories];for(const group of [['magichat','mushroomhat'],['glasses','sunglasses']])if(group.includes(value))items=items.filter(k=>!group.includes(k));if(['phone','macbook','tea','book','wand'].includes(value))items=items.filter(k=>!['phone','macbook','tea','book','wand'].includes(k));if(items.length>=3){notify('最多搭配 3 件，请先取消一件');return}state.accessories=[...items,value]}
 }else{state[type]=value;if(type==='body'){state.name=label('body',value);state.bodyplan=naturalPlan(value);state.limbs=isGeometry(state)||value==='snake'?'none':'both';state.pose=isGeometry(state)?'neutral':'sit';if(value==='human'){state.pose='neutral';state.design='toy'}if(value==='goat')state.fur='curly';const i=PRESETS.findIndex(p=>p.state.body===value);if(i>=0)exampleIndex=i;}}
 normalize(state);render();
}
function loadPreset(i){const output=state.output,reference=state.reference;exampleIndex=i;state=structuredClone(PRESETS[i].state);state.output=output;state.reference=reference;showExample=true;render()}
$('sectionTabs').addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(b){tab=b.dataset.tab;controls()}});
$('controls').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.type)select(b.dataset.type,b.dataset.value);if(b.dataset.color){showExample=false;state.color=b.dataset.color;render()}if(b.dataset.eye){showExample=false;state.eyeColor=b.dataset.eye;render()}if(b.hasAttribute('data-clear-accessories')){state.accessories=[];render()}if(b.hasAttribute('data-remove-step')){state.sequence.splice(Number(b.dataset.removeStep),1);render()}});
for(const id of ['presetGrid','morePresets'])$(id).addEventListener('click',e=>{const b=e.target.closest('[data-preset]');if(b){loadPreset(Number(b.dataset.preset));notify('已载入 '+state.name)}});

$('referenceMode').addEventListener('change',e=>{state.reference=e.target.checked;showExample=false;renderResult()});
async function copy(){const text=buildPrompt(state,false);try{await navigator.clipboard.writeText(text);return true}catch(e){const el=document.createElement('textarea');el.value=text;el.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(el);el.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}el.remove();return ok}}
$('copyPrompt').onclick=async()=>{const ok=await copy();notify(ok?'创作说明已复制，去 ChatGPT 粘贴即可':'复制未成功，可以展开下方创作说明手动复制');if(ok){$('copyPrompt').textContent='已复制';clearTimeout(copyTimer);copyTimer=setTimeout(()=>$('copyPrompt').textContent=copyLabel(),1800)}};
$('copyOpen').onclick=async()=>{const copyPromise=copy();const opened=window.open('https://chatgpt.com/','_blank');if(opened)opened.opener=null;const ok=await copyPromise;notify(ok?(opened?'已复制，在 ChatGPT 粘贴即可':'已复制，请手动打开 chatgpt.com'):'复制未成功，请检查剪贴板权限')};
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
const filename=()=>((state.name||'dot').replace(/[^\p{L}\p{N}_-]/gu,'-').slice(0,40)||'dot');
$('saveConfig').onclick=()=>{download(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),filename()+'-config.json');notify('已请求下载 JSON 配置，请查看下载列表')};
$('loadConfig').onclick=()=>$('configFile').click();
function validateConfig(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))throw Error('配置必须是 JSON 对象');
 if(![1,2].includes(raw.version))throw Error('暂不支持这个配置版本');
 const r=structuredClone(DEFAULT);
 for(const k of ['body','style','limbs','action','scene','output']){if(typeof raw[k]!=='string'||!Object.hasOwn(DATA[k],raw[k]))throw Error('配置中的 '+k+' 无效');r[k]=raw[k]}
 for(const k of ['design','bodyplan','fur','pose','expression','effect','pattern','skinMaterial','hairMaterial','clothMaterial'])if(raw[k]!==undefined){if(!Object.hasOwn(DATA[k],raw[k]))throw Error('配置中的 '+k+' 无效');r[k]=raw[k]}
 for(const k of ['color','eyeColor','skinColor','hairColor'])if(raw[k]!==undefined){if(typeof raw[k]!=='string'||!/^#[0-9a-f]{6}$/i.test(raw[k]))throw Error('配置颜色无效');r[k]=raw[k].toUpperCase()}
 if(typeof raw.name!=='string'||raw.name.length>24)throw Error('角色名称需在 24 字以内');r.name=raw.name;
 if(typeof raw.reference!=='boolean')throw Error('参考图设置无效');r.reference=raw.reference;
 if(!Array.isArray(raw.accessories)||raw.accessories.length>3||new Set(raw.accessories).size!==raw.accessories.length||raw.accessories.some(x=>typeof x!=='string'||!Object.hasOwn(DATA.accessories,x)))throw Error('配饰配置无效，最多 3 件');
 for(const group of [['magichat','mushroomhat'],['glasses','sunglasses']])if(group.every(x=>raw.accessories.includes(x)))throw Error('配置包含冲突配饰');r.accessories=[...raw.accessories];
 if(!Array.isArray(raw.sequence)||raw.sequence.length>4||raw.sequence.some(x=>typeof x!=='string'||!Object.hasOwn(DATA.action,x)))throw Error('动作顺序无效');r.sequence=[...raw.sequence];
 for(const [k,valid] of Object.entries({hair:['short','long','curly','bald'],clothing:['sweater','suit','hoodie','dress'],framing:['head','bust','full'],proportion:['two','three']}))if(raw[k]!==undefined){if(!valid.includes(raw[k]))throw Error('人物配置无效');r[k]=raw[k]}
 if(raw.category!==undefined){if(!Object.hasOwn(CATEGORIES,raw.category))throw Error('分类无效');r.category=raw.category}else r.category=r.body==='human'?'human':r.body==='robot'?'robot':isAnimal(r)?'pets':'classic';
 if(raw.version===1){r.bodyplan=naturalPlan(r.body);r.pose='neutral';r.design=r.body==='human'||isAnimal(r)?'toy':'minimal'}
 return normalize(r);
}
$('configFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>50000)throw Error('配置文件过大');state=validateConfig(JSON.parse(await f.text()));exampleIndex=Math.max(0,PRESETS.findIndex(p=>p.state.body===state.body));showExample=false;render();notify('配置已载入：'+(state.name||'未命名角色'))}catch(err){notify(err instanceof SyntaxError?'无法读取 JSON，请检查格式':err.message)}e.target.value=''};
$('resetConfig').onclick=()=>{state.output='avatar';state.reference=false;loadPreset(0);notify('已重置为蓝色 Dot')};
const schematic=()=>{const s=structuredClone(state);if(['spirit','shiba','bear','lion','cloudspirit'].includes(s.body)){notify('这个角色暂不提供 SVG 示意，请复制提示词创作');return null}return s};
$('exportSVG').onclick=()=>{const s=schematic();if(s)download(new Blob([svg(s,false)],{type:'image/svg+xml'}),filename()+'-schematic.svg')};
$('exportAnimated').onclick=()=>{const s=schematic();if(s)download(new Blob([svg(s,true)],{type:'image/svg+xml'}),filename()+'-animated-schematic.svg')};
$('exportPNG').onclick=()=>{const s=schematic();if(!s)return;const im=new Image(),url=URL.createObjectURL(new Blob([svg(s,false)],{type:'image/svg+xml'}));im.onload=()=>{const c=document.createElement('canvas');c.width=1200;c.height=1170;const ctx=c.getContext('2d');ctx.drawImage(im,0,0,1200,1170);c.toBlob(b=>{if(b)download(b,filename()+'-schematic.png');else notify('PNG 导出失败')},'image/png');URL.revokeObjectURL(url)};im.onerror=()=>{URL.revokeObjectURL(url);notify('PNG 导出失败')};im.src=url};
render();
const mc=document.modelContext;
if(mc?.registerTool){const ac=new AbortController();const definitions=[{name:'read_character_prompt',title:'读取角色提示词',description:'Read the current character configuration and generated prompt without changing it.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:true},execute:input=>{if(input&&Object.keys(input).length)throw Error('No parameters accepted');return{configuration:structuredClone(state),prompt:buildPrompt(state)}}},{name:'configure_character',title:'配置角色',description:'Replace the character with a valid version-1 or version-2 configuration. Does not generate images, upload or copy data.',inputSchema:{type:'object',properties:{configuration:{type:'object'}},required:['configuration'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:true},execute:input=>{if(!input||Object.keys(input).some(k=>k!=='configuration'))throw Error('Expected configuration');state=validateConfig(input.configuration);showExample=false;render();return{configuration:structuredClone(state),prompt:buildPrompt(state)}}}];for(const def of definitions)try{Promise.resolve(mc.registerTool(def,{signal:ac.signal})).catch(()=>{})}catch(e){}window.addEventListener('pagehide',()=>ac.abort(),{once:true})}
