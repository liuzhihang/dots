import {getArtSample} from './studio-art.js';
import {PRESETS,familyPresets} from './studio-catalog.js';
export const VERSION = 8;
const option = (label,en,zh,english=zh) => ({label,en,zh,english});
export const FAMILIES = {
  dots: {name:'ChatGPT Dots',short:'Dots',subtitle:'明亮几何 · 轻盈可爱',template:'蓝色团子',color:'#386AFF',secondary:'#F5F8FF',shape:'sphere',eyes:'softOval',mouth:'none',material:'plush',framing:'full',anatomy:'blob',about:'鲜明的单色、饱满的几何轮廓、克制的五官。以 App 设置截图中的圆球、软三角、横胶囊等轮廓为参考，默认是戴着贴合耳机的蓝色圆团子。绒毛服从体积，眼睛与配饰自然贴合；叠团与云团保留为创作扩展。本站模型与比例为原创转译。',en:'A bright, minimal Dots-inspired geometric companion. A full rounded silhouette, restrained facial features, no default limbs, and a single clear primary color. The default is a blue orb with naturally fitted headphones. The original meshes and proportions interpret the supplied App references; they are not official assets or specifications.'},
  grok: {name:'Grok Bot',short:'Grok Bot',subtitle:'软几何 · 胶囊眼',template:'白色软拱',color:'#F4F4F2',secondary:'#F8F6F1',shape:'arch',eyes:'capsule',mouth:'none',material:'rubber',framing:'full',anatomy:'blob',about:'以软几何和眼神建立辨识度。胶囊眼保持简洁、等宽；造型变化有节制。本站以参考图里的白色软拱为起点，提供软方块和短绒等延伸。',en:'An original Grok Bot-inspired soft geometric character. A softly rounded block silhouette and two identical solid dark capsule eyes. Controlled variation, clear small-scale identity, no mechanical robot parts or brand logo.'},
  muse: {name:'Muse',short:'Muse',subtitle:'人物玩偶 · 分层织物',template:'针织小沐',color:'#2C8D82',secondary:'#EBC4A6',shape:'human',eyes:'sparkle',mouth:'smile',material:'rubber',framing:'bust',anatomy:'human',about:'本站的人物玩偶预设。脸、头发、衣服分别处理，保留脸型和发束层次。小沐是本站原创人物，不代表官方默认角色。',en:'An original Muse-inspired human doll portrait, with a distinct human face, layered short chestnut hair and a teal knitted sweater. Keep the face, hair and clothing as separate materials. Balanced head and upper-body proportions. Do not copy Veda or claim this is an official Muse avatar.'},
  pets: {name:'ChatGPT 宠物',short:'Pets',subtitle:'动物伙伴 · 自然姿态',template:'柴犬团子',color:'#ECAE57',secondary:'#FFF0D5',shape:'shiba',eyes:'sparkle',mouth:'smile',material:'plush',framing:'full',anatomy:'quadruped',about:'保留物种的耳朵、口鼻、尾巴和身体。柴犬使用茶白配色与卷尾，猫咪保留猫爪与尾巴；可爱来自紧凑的整体比例。角色图与可安装的 Pet 动画文件是不同输出。',en:'An original animal companion suitable as a starting point for a ChatGPT pet. Preserve species-specific ears, muzzle, paws, tail and color markings. Compact balanced proportions with a visible torso. This prompt does not create an installable or validated pet.'}
};
export const MATERIALS = {
  plush:option('细密短绒','Fine plush','细密、柔软、有轻微方向感的短绒，毛流顺着体积；面部毛发收短，眼睛与外轮廓清楚。不要噪点贴图、杂乱长毛或廉价毡毯感。','Fine dense short pile with a subtle natural fur direction following the volume. Shorter fibers around the face, readable eyes and clean edges. No noisy fur overlay, tangled long hair or coarse felt.'),
  rubber:option('哑光软胶','Matte rubber','柔软无缝的哑光软胶，宽缓柔和的高光与清晰体积；软胶部件表面不覆绒毛，不要镜面反射或油亮塑料感；人物发丝与衣物按分部件材质保留。','Seamless matte soft rubber, broad soft highlights and clearly rounded volume. No added fur on rubber regions, mirror reflections or oily plastic sheen. Preserve human hair and clothing according to the regional material directions.'),
  micro:option('柔软微绒','Micro velvet','极短、细腻的天鹅绒绒感，近看有纤维，缩小后轮廓仍干净；不要厚重长毛。','Extremely fine short velvet fibers, readable up close and clean at icon size. No thick or long fur.'),
  clay:option('柔和陶土','Soft clay','整洁的哑光陶土，极细颗粒和轻微手作痕迹，柔和体积光；不要裂纹、脏污、油亮釉面。','Clean matte clay with very fine grain and subtle handmade marks. Soft volumetric light; no cracks, dirt or glossy glaze.')
};
export const SHAPES = {
  dumpling:option('叠叠软团','Layered dumpling','低重心的一体化三层软团：底层宽而饱满，中层稍窄，顶层圆缓；横向层沟宽浅、曲面连续，不做独立圆球堆叠','A single low grounded three-tier dumpling: a wide full base, a slightly narrower middle and a softly domed top. Broad shallow horizontal seams and continuous curved surfaces, never a stack of disconnected spheres'),
  arch:option('软拱形','Soft arch','饱满软拱形，顶部弧面、底部微凹、边缘圆润，保留区别于正球和立方体的轮廓','A plump soft arch with a domed top, subtly concave base and rounded edges, distinct from a sphere or cube'),
  sphere:option('小圆球','Orb','饱满近球体，略微压低重心，保留圆润体积','A full near-spherical orb with a subtly grounded base and generous rounded volume'),
  pill:option('横胶囊','Horizontal pill','横向饱满的短胶囊，圆润两端、宽缓上下沿和柔软体积；不是竖向药丸或扁平圆角矩形','A plump short horizontal pill with rounded ends, gently flattened upper and lower edges and soft volume; neither a vertical capsule nor a flat rounded rectangle'),
  puff:option('六瓣团','Six-lobe puff','六个短圆瓣围绕饱满中心连成一体，浅凹口自然过渡；不拆成六个独立圆球','Six short rounded lobes joined around one full center with shallow flowing indentations; never six disconnected balls'),
  clover:option('四瓣团','Four-lobe clover','四个圆润短瓣组成紧凑四叶轮廓，中央饱满、连接宽厚；不增加叶脉或细长叶柄','Four short rounded lobes form a compact clover silhouette, with a full center and broad connections; no leaf veins or narrow stems'),
  scallop:option('花边圆','Scalloped orb','饱满圆形主体带一圈均匀、细小的圆润花边，边缘起伏浅而柔和；保留完整三维体积','A full round body edged by evenly spaced small soft scallops; shallow gentle undulations and a complete three-dimensional volume'),
  bean:option('软豆形','Bean','饱满豆形，一体化圆润轮廓','A full soft bean-shaped silhouette'),
  cloud:option('云团','Cloud','三个柔和起伏组成的完整云团','A single compact cloud with three gentle rounded lobes'),
  drop:option('小水滴','Droplet','圆润水滴，顶端柔和、没有尖角','A rounded droplet with a soft tip and no sharp corners'),
  roundedcube:option('软方块','Soft block','大圆角软方体，不能改成正圆球','A softly rounded cube with a distinct block silhouette, not a sphere'),
  capsule:option('小胶囊','Capsule','纵向饱满胶囊，顶部和底部圆润','A full vertical capsule with rounded top and bottom'),
  human:option('人物玩偶','Human doll','保留人物脸型、分层发束与适量上半身；不把整个人简化成大头球','A human doll with a distinct face, layered hair and enough upper body; never reduce the person to an oversized ball head'),
  shiba:option('柴犬','Shiba','三角立耳、茶色与奶油白脸颊胸腹、清楚卷尾；头身比例均衡','A Shiba with upright triangular ears, tan and cream cheeks and chest, a clear curled tail and balanced head-to-body proportions'),
  cat:option('小猫','Cat','圆角三角猫耳、短吻、自然猫爪和完整长尾','A cat with softly triangular ears, a short muzzle, natural paws and a full long tail'),
  rabbit:option('小兔','Rabbit','圆润长耳、短吻、紧凑躯干和小圆尾','A rabbit with softly rounded long ears, a short muzzle, compact torso and small round tail')
};
Object.assign(SHAPES,{
 pebble:option('鹅卵石','Pebble','宽扁、低重心的圆润鹅卵石，连续饱满体积','A wide low rounded pebble with continuous full volume'),
 triangle:option('软三角','Soft triangle','三个大圆角的饱满三角体，角部柔软，没有尖锐棱线','A plump triangular volume with three deeply rounded corners and no sharp edges'),
 hexagon:option('软六角','Soft hexagon','六边轮廓仍清晰、边角柔和的饱满六角体','A plump soft hexagon with six readable sides and rounded corners'),
 star:option('小星星','Soft star','五个短而圆润的角，中心饱满，整体柔软','Five short rounded star points and a full soft center'),
 heart:option('爱心','Heart','顶部双瓣与底部圆尖构成饱满爱心','A full heart with two top lobes and a softly tapered base'),
 sprout:option('小豆芽','Sprout','圆润豆形身体，头顶两片小嫩叶','A rounded bean body with two small tender leaves on top'),
 frog:option('蛙蛙','Frog','宽扁蛙脸，两只眼睛位于头顶突起上，主体使用所选配色，整体保持几何伙伴的简洁','A broad geometric frog face with two raised eye lobes at the top, using the selected body color and keeping the geometric companion simple'),
 twin:option('双瓣团','Twin lobe','饱满椭圆身体，顶部柔和双瓣小结','A full oval body with two gentle little lobes at the top'),
 ghost:option('小幽灵','Soft ghost','圆顶、柔软波浪底边的小幽灵体积，非平面剪影','A soft domed ghost volume with a gently scalloped base, not a flat silhouette'),
 diamond:option('软菱形','Soft diamond','四个圆润角组成饱满菱形，柔和曲面','A full diamond with four rounded corners and soft curved surfaces'),
 fox:option('小狐狸','Fox','三角耳、白色脸颊与胸部、大而蓬松的尖尾，保留狐狸吻部','A fox with triangular ears, pale cheeks and chest, a large bushy tapered tail and a clear fox muzzle'),
 panda:option('熊猫','Panda','黑色圆耳与眼斑、奶白身体、短尾与自然熊爪','A panda with dark round ears and eye patches, a cream body, short tail and natural bear paws'),
 bear:option('小熊','Bear','圆耳、短圆吻、紧凑厚实躯干与小尾巴','A bear with round ears, short rounded muzzle, compact sturdy torso and tiny tail'),
 otter:option('水獭','Otter','小圆耳、浅色口鼻与腹部、圆润长尾和自然小爪','An otter with small round ears, pale muzzle and belly, a rounded long tail and natural paws'),
 capybara:option('水豚','Capybara','宽钝吻部、小圆耳、厚实紧凑身体、极短尾','A capybara with a broad blunt muzzle, small rounded ears, a compact sturdy body and a tiny tail'),
 axolotl:option('六角龙','Axolotl','两侧三簇外鳃、低矮宽脸、小爪与细长尾鳍，软胶材质时保留两栖质感','An axolotl with three external gill branches per side, a low broad face, small feet and a tapered tail fin'),
 penguin:option('小企鹅','Penguin','深色背部、浅色肚皮、短喙、两只鳍状翼与两只短脚','A penguin with dark back, pale belly, short beak, two flipper wings and two short feet'),
 owl:option('猫头鹰','Owl','圆形面盘、短喙、层次柔软的羽翼与两只小爪','An owl with round facial discs, a short beak, softly layered wings and two small feet'),
 hedgehog:option('小刺猬','Hedgehog','小尖鼻、浅色脸腹、背部层叠的短软刺和四只小爪','A hedgehog with a small pointed nose, pale face and belly, layered short soft spines and four small paws')
});
export const ANIMALS=['shiba','cat','rabbit','fox','panda','bear','otter','capybara','axolotl','penguin','owl','hedgehog'];
// The first eleven choices follow the supplied App Shape panel; extensions follow.
export const DOT_CORE_SHAPES=['sphere','triangle','pill','frog','puff','heart','clover','sprout','scallop','pebble','diamond'];
export const FAMILY_SHAPES={dots:[...DOT_CORE_SHAPES,'dumpling','cloud','twin','bean','drop','star','roundedcube','capsule'],grok:['arch','sphere','pebble','roundedcube','capsule','triangle','hexagon','cloud','drop','ghost','diamond','bean','human'],muse:['human'],pets:ANIMALS};
export const HAIRS={'short-curly':'自然短卷发',short:'利落短发',bob:'齐颈短发',long:'自然长发',ponytail:'利落马尾',braids:'双辫子',bun:'丸子头',wavy:'层次波浪'};
export const FACE_SHAPES={round:'圆脸',oval:'柔和椭圆', 'soft-square':'圆角方脸'};
export const OUTFITS={sweater:'针织毛衣',hoodie:'柔软卫衣',cardigan:'小开衫',shirt:'简洁衬衫'};
export const PALETTES = [
 {id:'sky',name:'明亮蓝',body:'#386AFF',secondary:'#F5F8FF',eyes:'#17191C',accessory:'#252525'},
 {id:'lime',name:'青柠绿',body:'#AFD946',secondary:'#F4F6D7',eyes:'#26301B',accessory:'#5A603C'},
 {id:'butter',name:'奶油黄',body:'#F4CC57',secondary:'#FFF2D5',eyes:'#352C25',accessory:'#564B43'},
 {id:'rose',name:'莓果粉',body:'#E987B3',secondary:'#FCEBF2',eyes:'#412D3E',accessory:'#61405D'},
 {id:'lilac',name:'浅鸢紫',body:'#A793E6',secondary:'#F3EEFF',eyes:'#2E2942',accessory:'#494063'},
 {id:'ivory',name:'云朵白',body:'#F4F4F2',secondary:'#FFF9F0',eyes:'#25252B',accessory:'#6B6B79'},
 {id:'bean',name:'黑豆',body:'#353844',secondary:'#555967',eyes:'#FFF7E9',accessory:'#E6BF79'},
 {id:'shiba',name:'柴犬茶白',body:'#ECAE57',secondary:'#FFF0D5',eyes:'#2B2420',accessory:'#447A73'},
 {id:'teal',name:'针织青绿',body:'#2C8D82',secondary:'#EBC4A6',eyes:'#2B2420',accessory:'#D9B67D'}
];
export const EYES={
 lash:option('短睫眼','Short lashes','两只小巧竖椭圆眼，外眼角各有一笔短而柔和的睫毛；睫毛顺着面部，不做浓密长睫毛','Two small vertical oval eyes, each with one short soft lash at the outer corner, fitted to the face; no thick or long eyelashes'),
 softOval:option('小椭圆眼','Small oval eyes','两只小巧竖椭圆眼，间距稳定，保留极少量柔和反光；眼色按配色设定，不画夸张眼白或大虹膜','Two small vertical oval eyes with stable spacing and a very subtle soft reflection, using the specified eye color; no exaggerated whites or large irises'),
 star:option('星光眼','Star eyes','两只小巧短胶囊眼，各有一个小星形高光和一个细小光点；星光位于眼睛内部，不额外漂浮在脸旁','Two small short capsule eyes, each containing one tiny star-shaped catchlight and one small light dot; keep the highlights inside the eyes, without floating stars beside the face'),
 glossy:option('明亮圆眼','Glossy round eyes','两只稍大的圆润眼睛，各有一个柔和圆形主高光与极小的辅助反光；保持简洁眼形，不做写实大眼球','Two slightly larger rounded eyes, each with one soft round primary catchlight and a tiny secondary reflection; keep the eye design simple, never large realistic eyeballs'),
 round:option('圆点眼','Dot eyes','两只克制的小圆点眼，间距稳定','Two restrained small dot eyes with stable spacing'),
 sparkle:option('柔光椭圆眼','Soft oval eyes','两只小巧竖椭圆眼，各有一个克制的圆点高光；眼色按配色设定，不额外画大虹膜，跨材质保持同一眼形','Two small vertical oval eyes with one restrained round catchlight each, using the specified eye color; no large irises, preserve the same eye design across materials'),
 side:option('侧望眼','Side glance','两只小圆眼白与同向侧移的瞳孔，目光方向一致；有动作目标时看向该目标，不让两只眼睛各看一边','Two small round whites with pupils offset together in one direction; follow the action target when one is present, never look in different directions'),
 sleepy:option('半睁眼','Half-lidded eyes','两道柔和短上眼睑与半露的小瞳孔，表达放松的半睁眼形；眨眼、闭眼与动作视线服从当前表情和活动','Two soft short upper lids with small partly visible pupils, forming a relaxed half-lidded eye design; blinking, closure and gaze follow the current expression and activity'),
 capsule:option('胶囊眼','Capsule eyes','两只等宽、平行、实心竖胶囊眼，长宽比约 2.7:1；不加瞳孔、描边或高光','Two identical parallel solid vertical capsule eyes, about 2.7:1 height-to-width; no pupils, outline or highlights'),
 oval:option('椭圆眼','Oval eyes','两只小巧椭圆眼白，瞳孔使用设定眼色，不夸张放大','Two small oval whites with pupils in the selected eye color; do not oversize them')
};
export const DOT_CORE_EYES=['lash','softOval','star','sparkle','round','glossy','side','sleepy'];
export const EXPRESSIONS={calm:option('平静','Calm','放松、平静，目光稳定','Relaxed and calm with a steady gaze'),happy:option('开心','Happy','自然愉快，眼睛略弯；保持选择的嘴巴样式','Naturally cheerful with subtly curved eyes, respecting the selected mouth design'),curious:option('疑惑','Curious','轻微歪头，眼神好奇，不增加问号符号','A slight head tilt and curious gaze, without question-mark symbols'),sleepy:option('困倦','Sleepy','眼睛半闭，姿态放松','Half-closed sleepy eyes and a relaxed posture'),closed:option('闭眼','Eyes closed','双眼自然完全闭合','Both eyes fully and naturally closed'),focused:option('专注','Focused','双眼睁开，目光专注于动作目标','Eyes open, focused on the action target')};
Object.assign(EXPRESSIONS,{
 excited:option('兴奋','Excited','明亮、稍微睁大的双眼与轻快姿态','Bright slightly widened eyes and a lively posture'),
 surprised:option('惊讶','Surprised','双眼自然睁大，眉毛微抬，嘴巴按选择保留','Naturally widened eyes, slightly raised brows, preserve the chosen mouth'),
 shy:option('害羞','Shy','头部轻轻侧偏，柔和眼神，克制的害羞表情','A gently turned head, soft gaze and restrained shyness'),
 sad:option('难过','Sad','眼角轻垂，头部微低，安静的难过','Slightly lowered outer eye corners, a lowered head and quiet sadness'),
 angry:option('生气','Angry','双眼上缘轻斜，眉心微压，保持可爱而不凶狠','Gently slanted upper eyelids and lowered inner brows, cute rather than aggressive'),
 wink:option('眨一只眼','Wink','一只眼自然闭合，另一只眼睁开','One eye naturally closed, the other open'),
 delighted:option('笑弯眼','Delighted','双眼笑成小弧线，轻轻抬起脸颊','Both eyes curved into small joyful arcs with slightly raised cheeks'),
 skeptical:option('怀疑','Skeptical','一只眼稍眯，另一只眼正常，轻微歪头','One slightly narrowed eye, the other open, with a slight head tilt'),
 proud:option('小得意','Proud','眼睑轻收、下巴微抬，克制的得意神情','Gently narrowed lids and a slightly lifted chin, restrained pride'),
 worried:option('担心','Worried','内眼角略抬，眼神柔软，轻轻缩起身体','Slightly raised inner eye corners, soft eyes and a gently contracted posture')
});
export const BROWS={none:option('无眉毛','None','不添加眉毛','No eyebrows'),soft:option('柔和短眉','Soft brows','两道很短、轻柔的眉毛，不抢眼睛','Two short subtle eyebrows'),curious:option('轻挑单眉','Raised brow','一侧眉毛轻挑，保持克制','One subtly raised eyebrow')};
export const MOUTHS={none:option('无嘴巴','None','不添加嘴巴','No mouth'),smile:option('小微笑','Smile','一条克制的小微笑','A small restrained smile'),tiny:option('小圆嘴','Tiny O','小巧圆嘴，不添加牙齿','A tiny round mouth without teeth')};
Object.assign(BROWS,{straight:option('短平眉','Straight brows','两条轻柔短平眉','Two subtle short straight brows'),angled:option('微斜眉','Angled brows','轻轻倾斜的短眉，保持克制','Subtly angled short brows, restrained')});
Object.assign(MOUTHS,{pout:option('小嘟嘴','Pout','小巧柔和的微嘟嘴','A tiny gentle pout'),laugh:option('开口笑','Laugh','小幅度开心开口笑，不加夸张牙齿','A small joyful open-mouth smile, without exaggerated teeth')});
export const ACCESSORIES={
 head:{none:option('不戴帽','None','无头部配饰','No head accessory'),beret:option('贝雷帽','Beret','小巧贝雷帽，顺着头部曲面自然贴合','A small beret naturally fitted to the curved head'),beanie:option('针织帽','Beanie','轻柔针织帽，保留耳朵与额头空间','A soft knitted beanie leaving appropriate space for ears and forehead'),cap:option('棒球帽','Cap','小巧棒球帽，帽檐不遮双眼','A small baseball cap whose brim does not hide the eyes'),flower:option('小花','Flower','一朵小花别在头侧','One small flower tucked beside the head'),wizard:option('魔法帽','Wizard hat','小巧圆润魔法帽，不挤压主体比例','A compact softly shaped wizard hat without distorting proportions'),headphones:option('耳机','Headphones','简洁头戴耳机，耳罩贴合两侧，不穿过头部','Simple over-ear headphones fitted at the sides, never intersecting the head')},
 face:{none:option('不戴眼镜','None','无眼镜','No eyewear'),round:option('圆框眼镜','Round glasses','细圆框眼镜，镜片透明、双眼清楚，镜架不穿过脸','Thin round eyeglasses with clear lenses, readable eyes and frames not intersecting the face'),square:option('方框眼镜','Square glasses','细圆角方框眼镜，镜片透明','Thin rounded-square eyeglasses with clear lenses'),sunglasses:option('墨镜','Sunglasses','协调的小巧墨镜，自然遮挡双眼，不把眼睛重复画在镜片外','Proportional sunglasses naturally occluding the eyes; do not duplicate eyes outside the lenses')},
 neck:{none:option('不加颈饰','None','无颈部配饰','No neck accessory'),scarf:option('针织围巾','Scarf','简洁短针织围巾，不遮脸','A simple short knitted scarf that leaves the face visible'),bow:option('小领结','Bow tie','一枚小巧领结','One small bow tie'),collar:option('项圈','Collar','贴合的简洁项圈','A simple well-fitted collar')},
 prop:{none:option('不拿道具','None','无手持道具','No held prop'),macbook:option('MacBook','MacBook','比例协调的银色 MacBook，屏幕面向角色，电脑不超过画面下方约三分之一','A proportional silver MacBook facing the character, occupying at most roughly the lower third of the image'),flowers:option('一束花','Bouquet','小束鲜花，花头不挡脸，双手或前爪共同承托花茎','A small bouquet supported at the stems by both hands or front paws; blooms must not hide the face'),wand:option('星星法杖','Star wand','一根小巧星形法杖，手掌或爪掌与柄接触','One small star-tipped wand with the hand or paw contacting its handle'),tea:option('奶茶','Milk tea','小巧奶茶杯与吸管，握持自然，杯子不遮住主体','A small milk-tea cup and straw held naturally without hiding the character'),camera:option('相机','Camera','小巧相机，握持与取景方向一致，不遮全部面部','A compact camera naturally held with a coherent shooting direction, not covering the whole face'),book:option('书本','Book','一本小书，自然打开，双手或前爪承托','A small open book naturally supported by hands or front paws')}
};
Object.assign(ACCESSORIES.head,{
 bowler:option('圆顶礼帽','Bowler hat','小巧圆顶礼帽，短而圆润的帽檐沿头部自然落座，留出双眼与耳朵','A compact bowler hat with a short rounded brim seated naturally on the head, leaving eyes and ears clear'),
 topHat:option('高顶礼帽','Top hat','短而端正的高顶礼帽，圆柱帽冠与小帽檐比例协调，帽底贴合头顶','A modest top hat with a proportional cylindrical crown and small brim, its base fitted to the crown of the head'),
 pom:option('小毛球','Pom-pom','一颗小而圆的毛球轻贴头顶，有清楚连接与柔软短绒，不悬浮、不增加第二颗头','One small rounded pom-pom softly attached at the crown, with a clear connection and fine short pile; neither floating nor a second head'),
 crown:option('小王冠','Small crown','轻巧的小王冠自然贴合头顶，冠尖短而圆钝，比例克制、留出双眼与耳朵；不悬浮、不加尖锐长刺','A light small crown seated naturally on the head, with short softly rounded tips, restrained proportions and clear space for eyes and ears; no floating crown or long sharp spikes')
});
Object.assign(ACCESSORIES.face,{
 monocle:option('单片眼镜','Monocle','一枚小巧透明单片眼镜，贴合一侧眼睛，短链顺着脸侧下垂；另一只眼正常露出，不添加多余镜桥','One small clear monocle fitted over one eye, with a short chain following the side of the face; leave the other eye visible and add no extra bridge'),
 catEye:option('猫眼墨镜','Cat-eye sunglasses','两片外角轻扬的深色猫眼墨镜，小巧圆润、镜架贴合面部，自然遮挡双眼，不露出重复眼睛','Small softly rounded cat-eye sunglasses with subtly raised outer corners, fitted frames and dark lenses naturally occluding both eyes without duplicated eyes'),
 roundSun:option('圆形墨镜','Round sunglasses','小巧深色圆形墨镜，细镜桥与两侧镜腿自然贴合，镜片遮住双眼、不重复画眼睛','Small dark round sunglasses with a thin bridge and naturally fitted temples; lenses hide both eyes without duplicated eyes')
});
export const OPAQUE_EYEWEAR=['sunglasses','catEye','roundSun'];
export const obscuresEyes=value=>OPAQUE_EYEWEAR.includes(value);
export const ACTIONS={
 idle:{label:'发会儿呆',en:'At ease',short:'放松待机',prop:'none',expression:'calm',art:0,zh:'主体自然放松，重心稳定。默认无手脚的几何角色保持完整简洁轮廓。',english:'Relax naturally with a stable center of gravity. A geometric character without default limbs keeps its clean uninterrupted silhouette.'},
 work:{label:'专注工作',en:'Working',short:'目光看向屏幕',prop:'macbook',expression:'focused',art:1,zh:'依据所选镜头摆放角色，电脑相对角色自然偏转，屏幕面向角色，视线明确看向屏幕；两只手自然触及键盘。四足动物使用前爪接触键盘，后爪支撑，不能增加人手。电脑约占画面下方 25%–33%，不遮住脸或大部分主体。',english:'Position the character for the selected camera. Rotate the laptop naturally relative to the character with its screen facing them. The gaze clearly meets the screen. Both hands rest naturally on the keyboard. A quadruped uses front paws on the keyboard with hind paws supporting the body, never extra human hands. The laptop occupies about the lower 25–33%, leaving the face and most of the body visible.'},
 sleep:{label:'好好睡觉',en:'Sleeping',short:'闭眼 · 自然蜷缩',prop:'none',expression:'closed',art:2,zh:'双眼完全闭合，自然侧卧或蜷缩；动物按自身结构蜷卧，不直立睡觉。无睁眼、眨眼、挥手、工作或文字符号。',english:'Both eyes fully closed, naturally resting on the side or curled up. Animals curl according to their anatomy, not sleeping upright. No open eyes, blinking, waving, working or text symbols.'},
 listen:{label:'听首歌吧',en:'Listening',short:'耳机贴合头部',prop:'none',expression:'calm',art:3,zh:'佩戴贴合头部的耳机，轻轻侧头聆听；耳罩与头带结构自然，不穿模；不叠加帽子。',english:'Wear headphones fitted to the head and tilt gently while listening. Natural earcup and headband placement without intersections. Do not stack a hat on top.'},
 flowers:{label:'送你一束花',en:'Flowers',short:'双手承托花束',prop:'flowers',expression:'calm',art:4,zh:'双手共同自然承托小花束，花茎接触手掌，花束在胸前偏下，保留面部与轮廓。动物保持爪形，用两只前爪承托，不出现额外肢体。',english:'Support a small bouquet naturally with both hands; stems contact the palms, blooms stay low enough to reveal the face. Animals retain paws and use both front paws, with no extra limbs.'},
 magic:{label:'一点小魔法',en:'A little magic',short:'视线跟随杖端',prop:'wand',expression:'focused',art:5,zh:'一只手或前爪握住法杖，视线看向杖端；另一只手或爪自然放松。仅少量细小星光，不使用大面积霓虹光效。',english:'One hand or front paw holds the wand, gaze following its tip. The other hand or paw rests naturally. Only a few tiny sparkles; no large neon effects.'},
 camera:{label:'拍张照片',en:'Taking a photo',short:'自然握持与取景',prop:'camera',expression:'focused',art:0,zh:'身体、手部与相机朝向保持一致，目光看向取景处；手或爪自然接触机身，不悬浮，不把相机放大到遮住全部面部。',english:'Align body, hands and camera with the shooting direction, gaze toward the viewfinder. Hands or paws contact the camera naturally, without floating or hiding the entire face.'},
 drink:{label:'喝点奶茶',en:'Milk tea',short:'小杯 · 自然接触',prop:'tea',expression:'calm',art:0,zh:'杯子保持小巧，手或爪自然握持，吸管与角色位置协调；无嘴角色表现为抱杯休息，不为喝饮料强制增加嘴巴。',english:'Keep the cup small and naturally held by a hand or paw, with coherent straw placement. A mouthless character rests while holding the drink; do not add a mouth just to drink.'},
 read:{label:'安静读书',en:'Reading',short:'视线落在书页',prop:'book',expression:'focused',art:0,zh:'自然承托打开的小书，视线落在书页；不要让书遮住大部分主体。',english:'Naturally support a small open book, looking at its pages. The book does not hide most of the character.'},
 bounce:{label:'轻轻蹦跳',en:'Bouncing',short:'保持体积与身份',prop:'none',expression:'happy',art:0,zh:'角色轻盈向上弹起，落地自然；体积、眼距、配饰与角色身份保持稳定。无腿角色以整体弹性表达跳跃，不凭空长出腿。',english:'Bounce lightly upward and land naturally, preserving volume, eye spacing, accessories and identity. A legless character bounces through whole-body elasticity without growing legs.'},
 wave:{label:'挥手打招呼',en:'Waving',short:'一只手或前爪',prop:'none',expression:'calm',art:0,zh:'一只手或前爪抬起自然挥动，另一侧支撑或放松；只保留正确数量的手或爪。',english:'Raise one hand or front paw in a natural wave; the other supports or rests. Keep the correct number of hands or paws.'},
 blink:{label:'轻轻眨眼',en:'Blinking',short:'自然闭合再睁开',prop:'none',expression:'calm',art:0,zh:'从自然睁眼开始，双眼缓慢闭合再睁开；身体与五官位置保持稳定，不一直闭眼。',english:'Begin with open eyes, close both gently, then open them again. Keep the body and face stable; do not remain permanently closed-eyed.'}
};
export const COMPOSITION={framing:{full:option('完整角色','Full character','完整主体，耳朵、尾巴与配饰不裁切','Full character with ears, tail and accessories uncropped'),bust:option('头像与上半身','Head & shoulders','头像与适量上半身，手与道具需要时可进入画面','Head and shoulders with enough upper body; hands and props may enter where needed'),portrait:option('近景头像','Close portrait','近景头像；持物动作需略微放宽构图，确保手与道具关系可读','Close portrait; widen enough for a prop action to keep hand–prop contact legible')},camera:{front:option('正面','Front','正面视角，轻微自然透视；工作或阅读时镜头略微抬高，让手与道具的接触清楚可见','Front view with gentle natural perspective; slightly elevate the camera for working or reading to reveal natural hand–prop contact'),threeQuarter:option('轻侧身','Three-quarter','自然四分之三视角，双眼可读','A natural three-quarter view with readable eyes'),side:option('侧面','Side','明确的侧面视角，保持身份轮廓','A clear side view preserving the identity silhouette')},background:{studio:option('浅色棚拍','Light studio','安静的浅色棚拍背景，柔和接触阴影','Quiet light studio background with soft contact shadows'),solid:option('自定义纯色','Solid color','干净的纯色背景','A clean solid-color background'),transparent:option('透明背景','Transparent','真正透明的 alpha 背景，不画棋盘格、不画白底、不画地板','True transparent alpha background; no checkerboard, white backdrop or floor')},output:{image:option('角色图','Character image','输出一张高完成度角色图片','Produce one finished character image'),sticker:option('贴纸','Sticker','输出完整轮廓的单枚透明贴纸，保留安全边距','Produce one transparent sticker with a full silhouette and safe margins'),storyboard:option('动作分镜','Storyboard','输出动作的起始、过程、结束三个静态分镜，固定身份、机位、比例与配饰位置','Produce three static frames: start, action and end. Keep identity, camera, proportions and accessories consistent'),pet:option('Pet 创作简报','Pet brief','输出角色与动作制作说明，后续按 ChatGPT Pet 目标版本的当前规范制作并验证素材。本次输出不是已安装、可直接导入或已验证的宠物文件','Produce a character and animation production brief. Create and validate assets against the current requirements of the target ChatGPT Pet version later. This output is not an installed, importable or validated pet file')}};
export const PRESERVE={silhouette:['轮廓与物种','silhouette and species'],hair:['发型与发色','hairstyle and hair color'],face:['脸型与可见五官','face shape and visible features'],colors:['主体配色','primary color palette'],clothing:['服装特征','clothing details'],accessories:['已有配饰','existing accessories']};
export function createCharacter(family='dots'){
 const f=FAMILIES[family]||FAMILIES.dots,p=PALETTES.find(x=>x.body===f.color)||PALETTES[0];
 return {version:VERSION,rendererVersion:'live-1',presetId:familyPresets(family)[0]?.id||'custom',faceShape:'round',outfit:'sweater',family,name:f.template,shape:f.shape,material:f.material,fur:'short',palette:p.id,colors:{body:f.color,secondary:f.secondary,eyes:p.eyes,accessory:p.accessory,background:'#F3F6FA',skin:'#EBC4A6',hair:'#523729',clothing:'#2C8D82'},eyeColorManual:false,eyes:f.eyes,eyeScale:1,eyeSpacing:1,brows:family==='muse'?'soft':'none',mouth:f.mouth,expression:'calm',headScale:1,bodyWidth:1,hair:'short-curly',limbs:'auto',action:'idle',pose:'auto',accessories:{head:family==='dots'?'headphones':'none',face:'none',neck:'none',prop:'none'},framing:f.framing,camera:'front',background:'studio',aspect:'1:1',scale:72,output:'image',skinMaterial:'auto',hairMaterial:'auto',clothMaterial:'knit',reference:{enabled:false,notes:'',preserve:['hair','face','colors','clothing','accessories'],overrides:[]},notes:'',randomSeed:'dot-01'};
}
export function createPreset(id,previous=null){
 const p=PRESETS.find(x=>x.id===id);if(!p)throw new Error('角色预设不存在');
 const c=createCharacter(p.family);c.presetId=p.id;c.name=p.name;c.shape=p.shape;c.colors.body=p.color;c.colors.clothing=p.color;
 c.colors.secondary=p.secondary||c.colors.secondary;c.colors.eyes=p.eyeColor||eyeColorFor(p.color);
 c.colors.accessory=p.accessory||'#303846';c.eyeColorManual=false;
 for(const key of ['hair','faceShape','outfit','eyes','mouth','expression','material'])if(p[key])c[key]=p[key];
 if(p.skin)c.colors.skin=p.skin;if(p.hairColor)c.colors.hair=p.hairColor;
 for(const key of ['head','face','neck'])c.accessories[key]=p[key]||'none';
 if(previous){c.reference=structuredClone(previous.reference);c.reference.overrides=[];c.notes=previous.notes;c.output=previous.output;c.aspect=previous.aspect;}
 return c;
}
const copy=x=>structuredClone(x);
export const REFERENCE_DOMAINS = {
 shape:['silhouette'],headScale:['silhouette'],bodyWidth:['silhouette'],
 faceShape:['face'],outfit:['clothing'],hair:['hair'],'colors.hair':['hair','colors'],'colors.skin':['face','colors'],
 eyes:['face'],brows:['face'],mouth:['face'],eyeScale:['face'],eyeSpacing:['face'],'colors.eyes':['face','colors'],
 'colors.body':['colors'],'colors.secondary':['colors'],'colors.accessory':['colors'],
 'colors.clothing':['clothing','colors'],clothMaterial:['clothing'],
 'accessories.head':['accessories'],'accessories.face':['accessories'],'accessories.neck':['accessories']
};
export function inheritsReference(c,path){
 if(!c.reference.enabled || c.reference.overrides.includes(path))return false;
 if(path==='accessories.head'&&c.action==='listen')return false;

 return (REFERENCE_DOMAINS[path]||[]).some(k=>c.reference.preserve.includes(k));
}
function markOverride(c,path){
 if(c.reference.enabled&&REFERENCE_DOMAINS[path]&&!c.reference.overrides.includes(path))c.reference.overrides.push(path);
}

export function setCharacterValue(input,path,value){
 const allowed=new Set([...Object.entries(input).filter(([,v])=>v===null||typeof v!=='object').map(([k])=>k),...Object.keys(createCharacter().colors).map(k=>'colors.'+k),...Object.keys(ACCESSORIES).map(k=>'accessories.'+k)]);
 if(typeof path!=='string'||!allowed.has(path)||path.split('.').some(p=>['__proto__','constructor','prototype'].includes(p)))throw new Error('不支持的配置字段');
 let c=copy(input);const bits=path.split('.');let at=c;for(const p of bits.slice(0,-1))at=at[p];at[bits.at(-1)]=value;markOverride(c,path);
 if(path==='action'&&!ACTIONS[value])throw new Error('动作无效');
 if(path==='expression'&&['sleep','work','magic','camera','read','blink'].includes(c.action)&&ACTIONS[c.action].expression!==value)c.action='idle';
 if(path==='pose'&&value!=='auto')c.action='idle';
 if(path==='accessories.prop'){
  const match={macbook:'work',flowers:'flowers',wand:'magic',tea:'drink',camera:'camera',book:'read'};
  c.action=match[value]||'idle';
 }
 if(path==='accessories.head'&&value!=='headphones'&&c.action==='listen')c.action='idle';
 if(path==='accessories.face'&&obscuresEyes(value)&&c.action==='sleep')c.action='idle';
 if(path==='limbs'&&['none','feet'].includes(value)&&(ACTIONS[c.action].prop!=='none'||c.action==='wave'||c.pose==='chin')){c.action='idle';c.pose='auto';}
 if(path==='colors.eyes')c.eyeColorManual=true;
 if(path==='colors.body'){
  if(c.shape==='human'){c.colors.clothing=value;markOverride(c,'colors.clothing');}
  if(!c.eyeColorManual){c.colors.eyes=eyeColorFor(c.shape==='human'?c.colors.skin:value);markOverride(c,'colors.eyes');}
 }
 if(path==='colors.skin'&&c.shape==='human'&&!c.eyeColorManual){c.colors.eyes=eyeColorFor(value);markOverride(c,'colors.eyes');}
 if(path==='colors.clothing'&&c.shape==='human'){c.colors.body=value;markOverride(c,'colors.body');}
 if(path==='shape')c.limbs='auto';

 return validateConfig(c);
}
export function applyPalette(c,id){const p=PALETTES.find(x=>x.id===id);if(!p)return copy(c);const n=copy(c);n.palette=id;for(const k of ['body','secondary','accessory']){n.colors[k]=p[k];markOverride(n,'colors.'+k);}if(!n.eyeColorManual){n.colors.eyes=n.shape==='human'?eyeColorFor(n.colors.skin):p.eyes;markOverride(n,'colors.eyes');}if(n.shape==='human'){n.colors.clothing=p.body;markOverride(n,'colors.clothing');}return n;}
export function eyeColorFor(hex){const rgb=hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722<.14?'#FFF7E9':'#172131';}
export function resolveCharacter(input){
 const c=copy(input),adjustments=[];const act=ACTIONS[c.action];
 const animal=ANIMALS.includes(c.shape),human=c.shape==='human',bird=['penguin','owl'].includes(c.shape);
 if(['sleep','work','magic','camera','read','blink'].includes(c.action)&&c.expression!==act.expression){c.expression=act.expression;adjustments.push('表情已跟随当前动作');}
 if(act.prop!==c.accessories.prop){c.accessories.prop=act.prop;adjustments.push('道具已与动作匹配');}
 if(c.action==='listen'&&c.accessories.head!=='headphones'){c.accessories.head='headphones';adjustments.push('听歌时使用耳机；原来的头饰已保留');}
 if(c.action==='sleep'&&obscuresEyes(c.accessories.face)){c.accessories.face='none';adjustments.push('睡觉时暂时收起墨镜；原来的选择已保留');}
 if(c.action!=='idle'&&c.pose!=='auto'){c.pose='auto';adjustments.push('姿态已跟随当前动作');}
 if(c.output==='sticker'||c.output==='pet')c.background='transparent';
 const activeHands=!!(act.prop!=='none'||c.action==='wave'||c.pose==='chin');
 if(animal||human)c.limbs='auto';
 if(!animal&&!human&&activeHands&&!['auto','hands','both'].includes(c.limbs)){c.limbs=c.limbs==='feet'?'both':'hands';adjustments.push('该动作需要双手，已更新肢体配置');}
 const anatomy=animal?{plan:bird?'bird':'quadruped',hands:0,paws:bird?0:4,feet:bird?2:0,wings:bird?2:0}:human?{plan:'human',hands:2,paws:0,feet:2}:{plan:'blob',hands:activeHands||['hands','both'].includes(c.limbs)?2:0,paws:0,feet:['feet','both'].includes(c.limbs)?2:0};
 const sampleMaterial=['plush','micro'].includes(c.material)?'plush':'rubber';
 const artAction=Object.entries(ACTIONS).find(([,v])=>v.art===act.art)?.[0]||'idle';
 const sample={...getArtSample(c.family,sampleMaterial,artAction),shape:FAMILIES[c.family].shape};
 const changes=[];const base=createCharacter(c.family);
 if(c.shape!==base.shape)changes.push(SHAPES[c.shape].label);
 if(c.material!==sampleMaterial)changes.push(MATERIALS[c.material].label);
 if(['body','secondary','eyes','accessory'].some(k=>c.colors[k].toUpperCase()!==base.colors[k].toUpperCase())||c.background==='solid'&&c.colors.background!==base.colors.background)changes.push('自定义配色');
 if(c.eyes!==base.eyes||c.eyeScale!==1||c.eyeSpacing!==1||c.brows!==base.brows||c.mouth!==base.mouth||c.expression!==act.expression)changes.push('五官与表情');
 if(c.accessories.face!=='none'||c.accessories.neck!=='none'||c.accessories.head!==(c.action==='listen'?'headphones':base.accessories.head))changes.push('自选配饰');
 if(c.headScale!==1||c.bodyWidth!==1||c.limbs!=='auto')changes.push('外观比例');
 if(act.art===0&&c.action!=='idle')changes.push(act.label);
 if(c.camera!=='front'||c.framing!==base.framing||c.scale!==72||c.aspect!=='1:1'||c.background!=='studio')changes.push('构图与背景');
 if(c.reference.enabled)changes.push('参考图特征');
 if(c.pose!=='auto')changes.push('姿态');
 if(c.shape==='human'&&(c.faceShape!=='round'||c.outfit!=='sweater'||c.hair!=='short-curly'||c.skinMaterial!=='auto'||c.hairMaterial!=='auto'||c.clothMaterial!=='knit'||['skin','hair','clothing'].some(k=>c.colors[k]!==base.colors[k])))changes.push('人物与分部件材质');
 return {config:c,anatomy,sample,adjustments,preview:{mode:'realtime-3d',renderer:'live-1',referenceImageAvailable:false},pending:[...new Set(changes)]};
}
const getText=(o,l)=>l==='en'?o.english:o.zh;
export function buildPrompt(input,lang='zh'){
 const r=resolveCharacter(input),c=r.config,f=FAMILIES[c.family],a=ACTIONS[c.action],en=lang==='en';
 const say=(zh,english)=>en?english:zh;
 const inherited=path=>inheritsReference(c,path);
 const text=o=>getText(o,lang);
 const lines=[say('请按以下完整设定创作角色。','Create a character from the complete specification below.')];
 const add=(zh,enTitle,value)=>{if(value)lines.push((en?enTitle+': ':'【'+zh+'】')+value);};
 const familyRules={
  dots:say('Dots 灵感的几何伙伴：饱满、圆润而有辨识度的整体轮廓，克制的小眼睛和少量配饰。轮廓、配色与五官以下方设定为准；形状、眼睛与配饰保持相互独立。','A Dots-inspired geometric companion: a full, rounded and distinctive silhouette, restrained small eyes and a few accessories. Follow the silhouette, colors and features specified below. Keep silhouette, eye design and accessories independently configurable.'),
  grok:say('Grok Bot 灵感伙伴：软拱或圆角几何体与竖向胶囊眼建立辨识度；非机械机器人，无金属面板、天线或屏幕脸。按下文选择的轮廓与五官表达。','A Grok Bot-inspired companion: a soft arch or rounded geometric form, identified by simple vertical capsule eyes. No mechanical panels, antennae or screen face. Follow the selected silhouette and facial design below.'),
  muse:say('本站人物玩偶预设：脸、头发与衣服分部件处理，保留脸型、肩部和自然发丝层次。换材质时保留同一身份，头发不能变成粗绳条。','An original human doll preset: distinct face, hair and clothing regions, a readable face shape, shoulders and natural layered strands. Keep the same identity across materials; no thick rope-like hair.'),
  pets:say('本站动物伙伴预设：保留物种的耳朵、口鼻、自然爪形、躯干与尾巴，头身比例均衡，四足动物不长出人手。','An original animal companion: retain species-specific ears, muzzle, natural paws, torso and tail. Balanced head and body; a quadruped must not grow human hands.')
 };
 if(c.reference.enabled){
  add('参考图流程','REFERENCE WORKFLOW',say('请使用我在这次 ChatGPT 对话中附上的图片。若已经附图，直接读取；仅当没有附图时才先要求附图。网站没有读取或上传原图，不要声称已从网站获得图片。','Use the image I attach in this ChatGPT conversation. If it is already attached, inspect it directly. Ask for it only when no image is attached. The website has not read or uploaded the source image; do not claim to have obtained it from the website.'));
  add('保留要求','PRESERVE',c.reference.preserve.map(k=>PRESERVE[k][en?1:0]).join(en?', ':'、')||say('仅保留下方文字中明确指定的特征。','Preserve only features explicitly specified in the notes below.'));
  add('优先级','PRIORITY',say('保持合理结构、动作接触和目标风格；当前动作的临时配饰约束优先于保存的搭配。明确的手动覆盖与补充要求 > 勾选保留的参考图特征 > 未保留项的工作台配置。没有明确覆盖的保留项，以附图为准；不要用预设的发色、衣服或“无配饰”替换它们。原图的背景、写实程度与光照默认不沿用。','Keep coherent anatomy, action contact and the target style. Temporary action constraints take priority over saved accessory preferences. Explicit manual overrides and notes take priority over preserved reference features, which take priority over defaults for unpreserved fields. Use the attached image for preserved fields without an override; do not replace them with preset hair colors, clothing or no-accessory defaults. Do not inherit the original background, realism or lighting.'));
  if(c.reference.notes)add('参考补充说明','REFERENCE NOTES',c.reference.notes);
 }
 add('角色风格','CHARACTER STYLE',f.name+say('。 ','. ')+familyRules[c.family]+say(' 本站预设与比例为创作方案，不代表官方规范。',' The presets and proportions are original art directions, not official specifications.'));
 if(!c.reference.enabled)add('角色称呼','CHARACTER NAME',c.name);
 add('轮廓与比例','SILHOUETTE',inherited('shape')?
  say('从附图保留主要轮廓和物种特征，并转译为目标风格；不要因几何化而抹去耳朵、发型或物种辨识点。','Preserve the reference silhouette and species cues, translated into the target style; do not erase distinctive ears, hairstyle or species identity while simplifying.'):
  text(SHAPES[c.shape]));
 const proportions=[];
 if(!inherited('headScale')){const hasHead=c.shape==='human'||ANIMALS.includes(c.shape);proportions.push(say((hasHead?'头部相对均衡预设 ':'轮廓高度相对预设 ')+Math.round(c.headScale*100)+'%',(hasHead?'Head proportion ':'Silhouette height ')+Math.round(c.headScale*100)+'% of the balanced preset'));}
 if(!inherited('bodyWidth'))proportions.push(say('主体宽度相对预设 '+Math.round(c.bodyWidth*100)+'%','Body width '+Math.round(c.bodyWidth*100)+'% of the preset'));
 if(proportions.length)add('比例细节','PROPORTIONS',proportions.join(en?'; ':'；')+say('。这些是相对美术建议，不是像素尺寸；不要无限放大头部。','. These are relative art directions, not pixel measurements. Avoid an oversized head.'));
 if(inherited('shape')){
  add('身体结构','ANATOMY',say('以参考角色的物种决定身体结构，并适配当前动作。动物保留原有爪形，不增加人手；几何角色只在持物或挥手需要时添加一对短小手部。不要额外肢体。','Determine anatomy from the reference species and adapt it to the selected action. Animals retain paws, never extra human hands. A geometric character gains a pair of short hands only when needed to hold a prop or wave. No extra limbs.'));
 }else{
  const anatomy=r.anatomy;
  add('身体结构','ANATOMY',anatomy.plan==='quadruped'?
   say('四足动物结构：4 只动物爪、0 只人手。持物使用前爪，后爪负责支撑，不能增加额外手臂。未入镜的爪不必强行露出。','Quadruped anatomy: four animal paws, zero human hands. Front paws hold props, hind paws support the body; no extra arms. Paws outside the frame need not be forced into view.'):
   anatomy.plan==='bird'?
   say('鸟类结构：2 只翅膀与 2 只脚。使用翅尖与胸前自然承托道具，不能额外增加人手或四足动物前爪。','Bird anatomy: two wings and two feet. Support props naturally between wing tips and the chest, without adding human hands or quadruped forepaws.'):
   anatomy.plan==='human'?
   say('人物结构：一对自然手臂与双手，手指和道具接触合理。只展示构图所需的上半身或完整身体。','Human anatomy: one natural pair of arms and hands, with coherent fingers and prop contact. Show the upper body or full figure according to the framing.'):
   say('一体化几何角色：'+anatomy.hands+' 只短小手部、'+anatomy.feet+' 只短脚。侧面柔软起伏属于主体形状，不凭空增加其他肢体。','A single geometric body: '+anatomy.hands+' short hands and '+anatomy.feet+' short feet. Soft side lobes belong to the body silhouette; no additional limbs.'));
 }
 add('材质','MATERIAL',text(MATERIALS[c.material]));
 if(c.shape==='human'){
  const skin=c.skinMaterial==='auto'?(['plush','micro'].includes(c.material)?'fabric':'matte'):c.skinMaterial;
  const hair=c.hairMaterial==='auto'?(['plush','micro'].includes(c.material)?'fiber':'layered'):c.hairMaterial;
  const regions={
   fabric:say('细腻织物脸','fine woven fabric face'),matte:say('柔和哑光肤感','soft matte skin'),
   fiber:say('细小有层次的纤维发丝','fine, layered fiber hair'),layered:say('自然分层发束与细致发丝','natural layered locks and fine strands'),
   knit:say('细致针织服装','fine knitted clothing'),fabricCloth:say('柔软织物服装','soft woven clothing')
  };
  const parts=[regions[skin],regions[hair]];
  if(!inherited('clothMaterial'))parts.push(regions[c.clothMaterial]);
  add('分部件材质','REGIONAL MATERIALS',parts.join(en?'; ':'；')+say('。不要把所有部位涂成同一种塑料或裹上同一层毛。跨材质保持眼形、脸型、发际线与发束走向。','. Do not coat all regions in the same plastic or fur. Preserve eye shape, facial shape, hairline and hair direction across materials.'));
 }
 const features=[];
 if(c.shape==='human'){
  if(!inherited('faceShape'))add('脸型','FACE SHAPE',en?({round:'soft round face',oval:'soft oval face','soft-square':'rounded square face'}[c.faceShape]):FACE_SHAPES[c.faceShape]);
  if(!inherited('outfit'))add('服装轮廓','OUTFIT',en?({sweater:'a knitted sweater',hoodie:'a soft hoodie',cardigan:'a small open cardigan',shirt:'a simple collared shirt'}[c.outfit]):OUTFITS[c.outfit]);
 }
 if(!inherited('hair'))features.push(say('发型：','Hair: ')+({ 'short-curly':say('自然短卷发','natural short curls'),short:say('自然短发','natural short hair'),bob:say('齐颈短发','a chin-length bob'),long:say('自然长发','natural long hair'),ponytail:say('利落马尾','a neat ponytail'),braids:say('两条自然辫子','two natural braids'),bun:say('丸子头','a soft hair bun'),wavy:say('自然层次波浪','natural layered waves')}[c.hair]));
 if(c.shape==='human'||c.reference.enabled&&c.reference.preserve.includes('hair')){
  add('头发','HAIR',features.join(en?'; ':'；')||say('发型与发色以附图为准，保持自然发丝与层次。','Use the reference hairstyle and hair color, retaining natural strands and layers.'));
 }
 const paletteNames={body:['主体','body'],secondary:['辅助／口鼻','secondary / muzzle'],eyes:['眼睛','eyes'],accessory:['可着色配饰','tintable accessories'],skin:['肤色','skin'],hair:['发色','hair'],clothing:['服装','clothing']};
 const palette=[];
 for(const [key,labels]of Object.entries(paletteNames)){
  if(['skin','hair','clothing'].includes(key)&&c.shape!=='human')continue;
  if(!inherited('colors.'+key))palette.push(labels[en?1:0]+' '+c.colors[key]);
 }
 if(palette.length)add('配色','PALETTE',palette.join(en?'; ':'；')+say('。按角色结构分区，保持面部清楚。银色电脑与花朵保留自然对象本色。','. Apply color regions according to the anatomy and keep the face legible. Keep the laptop silver and flowers naturally colored.'));
 const face=[],opaqueGlasses=!inherited('accessories.face')&&obscuresEyes(c.accessories.face);
 if(opaqueGlasses)face.push(say('双眼由深色镜片自然遮挡，眼形与眼色保留在镜片后，不在镜片上或旁边重复画眼睛、瞳孔或睫毛','Dark lenses naturally occlude both eyes. Keep the selected eye design and color behind the lenses, without duplicated eyes, pupils or lashes on or beside them'));
 else if(c.expression==='closed')face.push(say('双眼完全闭合为自然眼线，无睁开的眼形、瞳孔或高光','Both eyes fully closed as natural eyelid curves, with no open eye shapes, pupils or catchlights'));
 else if(!inherited('eyes'))face.push(text(EYES[c.eyes]));
 else face.push(say('眼形从参考特征简化，适配目标风格，避免写实大眼球','Simplify the reference eye design for the target style; avoid large realistic eyeballs'));
 if(!inherited('brows'))face.push(text(BROWS[c.brows]));
 if(!inherited('mouth'))face.push(text(MOUTHS[c.mouth]));
 face.push(opaqueGlasses?say('表情意图为“'+EXPRESSIONS[c.expression].label+'”，眼部变化发生在镜片后，露出的眉毛、嘴巴与头部姿态自然配合','The expression is '+EXPRESSIONS[c.expression].en.toLowerCase()+'. Eye changes occur behind the lenses; visible brows, the selected mouth and head posture respond naturally'):text(EXPRESSIONS[c.expression]));
 if(!opaqueGlasses&&c.expression!=='closed')face.push(say('当前表情与动作决定眼睑开合和目光目标；闭合的眼睛不显示瞳孔、高光或星光，睁开的眼睛保留所选眼形','The expression and activity determine eyelid closure and gaze target. Closed eyes have no visible pupils, catchlights or stars; open eyes retain the selected design'));
 if(!opaqueGlasses&&!inherited('eyeScale'))face.push(say('眼睛相对大小 ','Relative eye size ')+Math.round(c.eyeScale*100)+'%');
 if(!opaqueGlasses&&!inherited('eyeSpacing'))face.push(say('相对眼距 ','Relative eye spacing ')+Math.round(c.eyeSpacing*100)+'%');
 add('五官与表情','FACE',face.join(en?'. ':'。'));
 const birdAction={
  work:['面向小型电脑，两只翼尖自然触及键盘，目光看向屏幕；两只脚支撑身体。电脑保持低位，露出脸与主体。','Face a small laptop, with both wing tips naturally contacting the keyboard and gaze directed at its screen. Two feet support the body. Keep the laptop low and the face visible.'],
  flowers:['两只翼尖与胸前共同托住小花束，花茎有实际接触；花朵不挡脸，两只脚自然支撑。','Support a small bouquet between both wing tips and the chest, with clear stem contact. Flowers leave the face visible; two feet support the body.'],
  magic:['一侧翼尖自然托持星形法杖，另一侧翅膀放松，目光看向杖端。只加少量星光。','One wing tip naturally supports the star wand while the other wing rests, with gaze following the wand tip. Add only a few tiny sparkles.'],
  camera:['双翼尖从两侧承托小相机，镜头与取景朝向一致，脸部保持可读，不增加人手。','Both wing tips support a small camera from the sides, with coherent lens and viewing direction and a readable face, without human hands.'],
  drink:['双翼尖自然承托小杯，吸管靠近喙部，杯子低于双眼，不挡住主体。','Both wing tips support a small cup naturally, with the straw near the beak and the cup below the eyes, leaving the body visible.'],
  read:['双翼尖承托打开的小书，目光落在书页；书本保持小巧且低于面部。','Both wing tips support a small open book, gaze resting on its pages; keep the book compact and below the face.'],
  wave:['抬起一侧翅膀自然挥动，另一侧翅膀放松，两只脚保持重心。','Raise and wave one wing naturally, leaving the other relaxed and both feet supporting the body.']
 };
 add('动作、视线与接触','ACTION AND CONTACT',r.anatomy.plan==='bird'&&birdAction[c.action]?birdAction[c.action][en?1:0]:en?a.english:a.zh);
 if(c.pose!=='auto')add('姿态','POSE',({sit:[ '自然坐姿，重心稳定','Naturally balanced seated pose'],side:['身体轻微侧转','Gently turned body'],chin:['一只手或前爪轻托脸颊','One hand or front paw gently supporting the cheek']}[c.pose]||[])[en?1:0]);
 const accessoryLines=[];
 const slotNames={head:['头部','head'],face:['眼镜','eyewear'],neck:['颈部','neck'],prop:['手持道具','held prop']};
 for(const [slot,value]of Object.entries(c.accessories)){
  if(inherited('accessories.'+slot)){
   if(slot==='face'&&c.action==='sleep')accessoryLines.push(say('如附图佩戴普通透明眼镜，保留并简化；如佩戴墨镜，本次睡眠动作暂时摘下以显示闭眼；原图没有眼镜则不添加','If the reference has ordinary clear glasses, preserve and simplify them. Temporarily remove sunglasses for this sleeping pose so closed eyes are visible. Add none if absent'));
   else accessoryLines.push(say(slotNames[slot][0]+'配饰按参考图保留并简化；没有则不添加','Preserve and simplify reference '+slotNames[slot][1]+' accessories; add none if absent'));
  }else if(slot==='prop'&&r.anatomy.plan==='bird'&&value!=='none')accessoryLines.push(say('道具：'+ACCESSORIES.prop[value].label+'，按上方鸟类动作以翼尖承托，不增加人手或前爪','Prop: '+ACCESSORIES.prop[value].en+', supported by wing tips according to the bird action above; no human hands or front paws'));
  else accessoryLines.push(text(ACCESSORIES[slot][value]));
 }
 accessoryLines.push(say('每类最多一件。若为普通眼镜，镜片透明；若为墨镜，镜片深色并自然遮住双眼，不重复画外露眼睛。道具必须与手、爪或翼尖自然接触，不能悬浮或穿模。','At most one item per slot. Ordinary glasses have clear lenses; sunglasses have dark lenses that naturally occlude the eyes, without duplicated visible eyes. Props must contact the appropriate hands, paws or wing tips naturally, without floating or intersections.'));
 add('配饰','ACCESSORIES',accessoryLines.join(en?'. ':'；'));
 if(c.reference.enabled&&c.reference.overrides.length){
  const overrideNames={shape:SHAPES[c.shape].label,hair:c.hair,faceShape:FACE_SHAPES[c.faceShape],outfit:OUTFITS[c.outfit],eyes:EYES[c.eyes].label,brows:BROWS[c.brows].label,mouth:MOUTHS[c.mouth].label,clothMaterial:c.clothMaterial};
  const details=c.reference.overrides.map(path=>{
   const value=path.split('.').reduce((o,k)=>o[k],input),effective=path.split('.').reduce((o,k)=>o[k],c);
   if(path.startsWith('accessories.'))return path+' = '+text(ACCESSORIES[path.split('.')[1]][value])+(value!==effective?say('（保存的选择；本次动作暂用：',' (saved preference; for this action use: ')+text(ACCESSORIES[path.split('.')[1]][effective])+(en?')':'）'):'');
   return path+' = '+(en?String(value):(overrideNames[path]||String(value)));
  });
  add('明确的手动覆盖','EXPLICIT MANUAL OVERRIDES',details.join('; ')+say('。这些是用户在参考模式中手动修改的项，仅覆盖对应特征。','. These fields were deliberately changed in reference mode; override only the corresponding reference features.'));
 }
 add('镜头与画面','COMPOSITION',[text(COMPOSITION.framing[c.framing]),text(COMPOSITION.camera[c.camera]),text(COMPOSITION.background[c.background])].join(en?'. ':'；')+
  say('。画幅 '+c.aspect+'，主体展示大小 '+c.scale+'%（72% 为均衡预设；更高值放大主体，减少留白）。为耳朵、帽子、手和道具留出完整安全边距。','. Aspect ratio '+c.aspect+', subject display size '+c.scale+'% (72% is the balanced preset; higher values enlarge the subject and reduce whitespace). Leave full safe margins for ears, hats, hands and props.')+
  (c.background==='solid'?say(' 背景色 ',' Background color ')+c.colors.background+'. ':' ')+
  say('柔和宽光源，明暗清楚，不用大面积霓虹。','Broad soft studio light, readable form, no large neon effects.'));
 add('输出','OUTPUT',text(COMPOSITION.output[c.output])+
  (c.output==='image'||c.output==='sticker'?say(' 单张图只表现一个最清楚的动作瞬间，不在画面里重复多个角色。',' For a single image, show one clear action moment rather than multiple copies of the character.'):''));
 if(c.notes)add('用户补充要求','ADDITIONAL USER DIRECTION',c.notes);
 add('质量约束','QUALITY',say('身份稳定、动作成立、手与道具接触自然。不要多余肢体、杂乱配件、文字、水印或界面元素。工作台的实时角色用于预览外形、颜色与动作关系，高清样张另作材质参考；最终图片请依据以上设定及本次对话的附图完成精致美术表现。','Keep identity stable, actions coherent and prop contact natural. No extra limbs, cluttered accessories, text, watermark or interface elements. The real-time Studio character previews shape, color and action relationships; separate art samples guide final material quality. Create the finished image from this specification and the references attached to this conversation.'));
 return lines.join('\n\n');
}
function object(x){return x&&typeof x==='object'&&!Array.isArray(x);}
function enumValue(x,allowed,name){if(typeof x!=='string'||!allowed.includes(x))throw new Error(name+' 选项无效');return x;}
function textValue(x,max,name){if(typeof x!=='string'||x.length>max)throw new Error(name+' 内容无效或过长');return x;}
function numValue(x,min,max,name){if(!Number.isFinite(x)||x<min||x>max)throw new Error(name+' 超出范围');return x;}
export function validateConfig(raw){
 if(!object(raw)||![6,7,VERSION].includes(raw.version))throw new Error('请导入 Dot Studio v8、v7 或 v6 配置；更早配置可在结构编辑器中打开');
 const oldVersion=raw.version;
 if(raw.version===6){raw=copy(raw);raw.version=VERSION;raw.reference={enabled:raw.reference?.enabled,notes:raw.reference?.notes,preserve:raw.reference?.preserve,overrides:[]};}
 const family=enumValue(raw.family,Object.keys(FAMILIES),'角色体系'),c=createCharacter(family);
 if(oldVersion<8)raw={...raw,presetId:'custom',faceShape:'round',outfit:'sweater'};
 c.presetId=enumValue(raw.presetId,['custom',...familyPresets(family).map(p=>p.id)],'预设');
 c.faceShape=enumValue(raw.faceShape,Object.keys(FACE_SHAPES),'脸型');c.outfit=enumValue(raw.outfit,Object.keys(OUTFITS),'服装');
 const enums={shape:FAMILY_SHAPES[family],material:Object.keys(MATERIALS),fur:['short'],palette:PALETTES.map(p=>p.id),eyes:Object.keys(EYES),brows:Object.keys(BROWS),mouth:Object.keys(MOUTHS),expression:Object.keys(EXPRESSIONS),hair:Object.keys(HAIRS),limbs:['auto','none','hands','feet','both'],action:Object.keys(ACTIONS),pose:['auto','sit','side','chin'],framing:Object.keys(COMPOSITION.framing),camera:Object.keys(COMPOSITION.camera),background:Object.keys(COMPOSITION.background),aspect:['1:1','4:5','16:9'],output:Object.keys(COMPOSITION.output),skinMaterial:['auto','fabric','matte'],hairMaterial:['auto','fiber','layered'],clothMaterial:['knit','fabricCloth']};
 for(const [k,v]of Object.entries(enums))c[k]=enumValue(raw[k],v,k);
 for(const [k,min,max]of [['eyeScale',.65,1.35],['eyeSpacing',.75,1.3],['headScale',.85,1.12],['bodyWidth',.85,1.15],['scale',55,85]])c[k]=numValue(raw[k],min,max,k);
 c.name=textValue(raw.name,40,'名称');c.notes=textValue(raw.notes,1600,'补充要求');c.randomSeed=textValue(raw.randomSeed,40,'随机种子');
 if(typeof raw.eyeColorManual!=='boolean')throw new Error('眼色设置无效');c.eyeColorManual=raw.eyeColorManual;
 if(!object(raw.colors))throw new Error('配色配置无效');for(const k of Object.keys(c.colors)){if(typeof raw.colors[k]!=='string'||!/^#[a-f\d]{6}$/i.test(raw.colors[k]))throw new Error(k+' 必须为六位 HEX 色值');c.colors[k]=raw.colors[k];}
 if(!object(raw.accessories))throw new Error('配饰配置无效');for(const [k,v]of Object.entries(ACCESSORIES))c.accessories[k]=enumValue(raw.accessories[k],Object.keys(v),'配饰');
 if(!object(raw.reference)||typeof raw.reference.enabled!=='boolean')throw new Error('参考图配置无效');const ref=raw.reference;
 if(!Array.isArray(ref.preserve)||ref.preserve.some(k=>typeof k!=='string'||!Object.hasOwn(PRESERVE,k))||ref.preserve.length>6)throw new Error('保留特征无效');
 if(!Array.isArray(ref.overrides)||ref.overrides.length>Object.keys(REFERENCE_DOMAINS).length||ref.overrides.some(x=>!Object.hasOwn(REFERENCE_DOMAINS,x)))throw new Error('参考覆盖字段无效');
 c.reference={enabled:ref.enabled,notes:textValue(ref.notes,1200,'参考说明'),preserve:[...new Set(ref.preserve)],overrides:[...new Set(ref.overrides)]};
 return c;
}
export function randomizeCharacter(input,seed){
 let n=2166136261;for(const k of seed)n=Math.imul(n^k.charCodeAt(0),16777619);
 const rand=()=>{n^=n<<13;n^=n>>>17;n^=n<<5;return(n>>>0)/4294967296;},pick=a=>a[Math.floor(rand()*a.length)];
 let c=copy(input);c.randomSeed=seed;
 const palette=pick(PALETTES);
 // Keep reference-inherited features and explicit eye colors intact when remixing.
 const paletteResult=applyPalette(c,palette.id);
 for(const path of ['colors.body','colors.secondary','colors.accessory','colors.eyes','colors.clothing']){
  if(inheritsReference(input,path))continue;
  const key=path.split('.')[1];
  if(c.colors[key]!==paletteResult.colors[key]){c.colors[key]=paletteResult.colors[key];markOverride(c,path);}
 }
 if(!inheritsReference(input,'colors.body'))c.palette=palette.id;
 c.material=pick(Object.keys(MATERIALS));
 if(!['human',...ANIMALS].includes(c.shape)&&!inheritsReference(c,'shape'))c=setCharacterValue(c,'shape',pick(FAMILY_SHAPES[c.family].filter(x=>x!=='human')));
 if(!inheritsReference(c,'eyes'))c=setCharacterValue(c,'eyes',pick(Object.keys(EYES)));
 if(!inheritsReference(c,'accessories.head'))c=setCharacterValue(c,'accessories.head',pick(['none','none',...Object.keys(ACCESSORIES.head)]));
 const action=pick(['idle','listen','flowers','work','sleep','magic']);
 if(!inheritsReference(c,'accessories.face')){
  const hasHead=action==='listen'||c.accessories.head!=='none';
  const glasses=c.accessories.neck!=='none'&&hasHead?['none']:Object.keys(ACCESSORIES.face).filter(x=>action!=='sleep'||!obscuresEyes(x));
  c=setCharacterValue(c,'accessories.face',pick(['none','none',...glasses]));
 }
 c=setCharacterValue(c,'action',action);
 return validateConfig(c);
}
export function exportConfiguration(input){return JSON.stringify(validateConfig(input),null,2);}
