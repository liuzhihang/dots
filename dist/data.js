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
// Rendering, surface, silhouette and expression are independent dimensions.
DATA.style={flat:['经典 2D','◒','简洁平面矢量画法，清晰轮廓与克制色块，不使用三维透视或写实光照'],outline:['线稿插画','○','干净的等粗轮廓线插画，少量平涂色块，轮廓轻盈清晰'],smooth:['柔滑 3D','●','圆润的高品质 3D 画法，柔和棚拍光、克制高光与清晰轮廓'],pixel:['像素艺术','▦','统一像素网格、有限色板的像素艺术，用像素概括表面特征，不混入平滑矢量线'],watercolor:['水彩插画','◔','轻盈水彩插画，柔和透明色层和清晰主体轮廓，细节简洁']};
DATA.material={smooth:['哑光光滑','细腻光滑的哑光表面，无毛发或粗糙纹理'],plush:['柔软毛绒','柔软玩偶短绒与克制缝线，轮廓和眼睛清晰'],clay:['手工黏土','手工黏土表面，哑光、轻微压痕，不要脏污'],glass:['磨砂玻璃','半透明彩色磨砂玻璃，柔和折射与边缘高光'],rubber:['软胶','柔软硅胶玩具表面，柔和弹性与低光泽'],ceramic:['陶瓷','温润釉面陶瓷，克制釉光、完整无裂纹'],metal:['拉丝金属','细腻拉丝金属表面，克制反射与柔和高光'],paper:['纸艺','彩色纸艺表面，细微纸纤维与简洁折叠细节']};
DATA.eyes={capsule:['胶囊眼','两只简洁竖向胶囊眼'],dot:['圆点眼','两只小圆点眼，间距稳定'],oval:['椭圆瞳孔眼','两只象牙白椭圆眼白，内有小巧瞳孔'],sparkle:['高光眼','两只圆润眼睛与单个克制高光'],visor:['电子屏眼','两只简洁电子屏发光眼，不添加文字或数字'],natural:['自然简化眼','符合主体的自然简化双眼，避免写实细节']};
DATA.body.circle=['圆形','●','简洁正圆轮廓的角色身体'];
DATA.body.roundedsquare=['圆角方形','▢','大圆角正方形轮廓的角色身体'];
DATA.body.spirit[2]='原创饱满豆形小精灵，圆润豆形轮廓，不添加动物条纹';
DATA.body.shiba[2]='原创柴犬角色，三角立耳、对比色脸颊与胸腹、清晰卷尾';
DATA.body.tiger[2]='原创小老虎角色，圆耳朵、清晰深色条纹、对比色口鼻与完整条纹尾巴';
DATA.body.cat[2]='原创小猫角色，保留三角耳朵、短吻、小鼻子、可辨识毛色花纹与完整尾巴';
for(const type of ['skinMaterial','hairMaterial','clothMaterial'])DATA[type]={inherit:['沿用整体材质','沿用所选整体材质'],...DATA[type]};
const BASE_FORMS=['circle','sphere','ring','roundedsquare','roundedcube','cuboid','capsule','drop','cloud','star','mushroom'];
const GEOMETRY=['circle','roundedsquare','spirit','sphere','ring','roundedcube','cuboid','capsule','drop','cloud','mushroom','star','cloudspirit'];
const ZODIAC=['rat','ox','tiger','rabbit','dragon','snake','horse','goat','monkey','rooster','dog','pig'];
const PETS=['cat','shiba','tiger','dog','rabbit','bear','goat','lion','penguin'];
const isGeometry=s=>GEOMETRY.includes(s.body),isAnimal=s=>!isGeometry(s)&&!['human','robot'].includes(s.body);
const naturalPlan=body=>GEOMETRY.includes(body)?'blob':body==='human'?'chibi':['robot','penguin','monkey','rooster','dragon','monster'].includes(body)?'biped':'quad';
const hands=s=>isGeometry(s)?['arms','both'].includes(s.limbs):s.body==='human'||s.bodyplan==='biped'||s.body==='robot';
const hasFeet=s=>isGeometry(s)?['feet','both'].includes(s.limbs):s.body!=='snake';
const DEFAULT={version:3,material:'smooth',eyes:'capsule',category:'classic',design:'minimal',bodyplan:'blob',fur:'short',pose:'neutral',expression:'calm',effect:'none',pattern:'orange',skinMaterial:'inherit',hairMaterial:'inherit',clothMaterial:'inherit',hair:'short',hairColor:'#3A3438',skinColor:'#E7BFA6',clothing:'sweater',framing:'bust',proportion:'three',name:'Dot',body:'sphere',style:'smooth',color:'#3064ED',eyeColor:'#FFFFFF',limbs:'none',accessories:[],action:'breathe',sequence:[],scene:'transparent',output:'avatar',reference:false};
const preset=(name,category,values,art)=>{const s={...DEFAULT,name,category,...values};if(['plush','clay','glass'].includes(s.style)){s.material=s.style;s.style='smooth'}if(s.body==='spirit')s.eyes='oval';else if(s.body==='human'||!GEOMETRY.includes(s.body)&&s.body!=='robot')s.eyes='natural';return {name,category,state:s,art}};
const PRESETS=[
 preset('蓝色 Dot','classic',{name:'Dot'},'gallery-dot'),
 preset('黑豆精灵','classic',{body:'spirit',bodyplan:'blob',design:'toy',style:'plush',color:'#29262B',eyeColor:'#243247',limbs:'both'},'gallery-bean'),
 preset('柴犬团子','pets',{body:'shiba',bodyplan:'quad',design:'toy',style:'plush',color:'#DCA56D',eyeColor:'#243247',pose:'sit'},'gallery-shiba'),
 preset('条纹小虎','pets',{body:'tiger',bodyplan:'quad',design:'toy',style:'plush',color:'#F0AC61',eyeColor:'#243247',pose:'sit'},'gallery-tiger'),
 preset('针织小人','human',{body:'human',bodyplan:'chibi',design:'toy',skinMaterial:'smooth',hairMaterial:'layered',clothMaterial:'knit',style:'smooth',color:'#4167B5',eyeColor:'#243247',limbs:'both',pose:'neutral',framing:'full'},'gallery-human'),
 preset('机器人伙伴','robot',{body:'robot',bodyplan:'biped',design:'robot',color:'#E1E5EC',eyeColor:'#5698F5',limbs:'both',pose:'neutral'},'gallery-robot'),
 preset('粉色小兔','pets',{body:'rabbit',bodyplan:'quad',design:'toy',style:'plush',color:'#F19BC0',eyeColor:'#243247',pose:'sit'},5),
 preset('瞌睡小猫','pets',{body:'cat',bodyplan:'quad',design:'toy',style:'plush',color:'#F0B578',eyeColor:'#243247',pose:'sit',action:'sleep',expression:'sleepy'},4),
 preset('毛绒小龙','fantasy',{body:'dragon',bodyplan:'biped',design:'anime',style:'plush',color:'#90BD9C',eyeColor:'#243247',limbs:'both',pose:'sit'},3),
 preset('魔法方块','fantasy',{body:'roundedcube',bodyplan:'blob',design:'anime',style:'plush',color:'#9475E7',accessories:['magichat','wand'],action:'magic',pose:'magic',effect:'none'},2)
];
// Historical category keys remain valid for version-2 configuration imports.
const CATEGORIES={classic:['几何与精灵'],pets:['动物'],human:['人物'],robot:['机器人'],fantasy:['奇幻生物'],soft:['几何与精灵']};
const SUBJECT_GROUPS={几何与精灵:GEOMETRY,动物:Object.keys(DATA.body).filter(k=>!GEOMETRY.includes(k)&&!['human','robot','monster','dragon'].includes(k)),人物:['human'],机器人:['robot'],奇幻生物:['dragon','monster']};
