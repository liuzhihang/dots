// Every entry is a Studio art direction, not an official downloadable avatar.
// Sources inform the visual vocabulary; the real-time meshes are original work.
const FAMILY_ALIASES={muse:'humans',pets:'animals'};
export const normalizeFamilyId=family=>FAMILY_ALIASES[family]||family;
const preset=(id,family,name,description,shape,color,extra={})=>{
 const isLegacy=extra.isLegacy??!id.startsWith('baseline-');
 return {id,family:normalizeFamilyId(family),name,description,shape,color,...extra,catalogTier:extra.catalogTier||(isLegacy?'legacy':'baseline'),isLegacy};
};
export const REFERENCE_INFO={date:'2026-10-04',basis:'用户提供的 App 设置截图',notice:'依据可见截图独立复刻；色值为视觉近似，不是官方素材、官方参数或官方背书。截图未展示完整眼镜、配饰与表情菜单。'};
export const PRESETS=[
 preset('app-blue','dots','蓝球耳机','圆球 · 小椭圆眼 · 黑色耳机','sphere','#3264FA',{provenance:'official-recreation',head:'headphones',eyeColor:'#222326',accessory:'#292A2D'}),
 preset('app-petal','dots','蓝瓣画家','六瓣团 · 小椭圆眼 · 贝雷帽','puff','#398FED',{provenance:'official-recreation',head:'beret',eyeColor:'#222326',accessory:'#252729'}),
 preset('app-triangle','dots','黄团绅士','软三角 · 闭眼 · 圆框与领结','triangle','#F4D13D',{provenance:'official-recreation',face:'round',neck:'bow',expression:'closed',eyeColor:'#242626',accessory:'#292A27'}),
 preset('app-heart','dots','莓紫爱心','爱心 · 圆形墨镜','heart','#D448DC',{provenance:'official-recreation',face:'roundSun',eyeColor:'#242429',accessory:'#26242A'}),
 preset('app-frog','dots','青柠蛙蛙','突起双眼 · 黑色领结','frog','#B9DF4A',{provenance:'official-recreation',neck:'bow',eyeColor:'#242922',accessory:'#272C24'}),
 preset('app-scallop','dots','橙橙花边','花边圆 · 圆点眼 · 单片镜','scallop','#EF703C',{provenance:'official-recreation',eyes:'glossy',face:'monocle',eyeColor:'#23272A',accessory:'#292A2B'}),
 preset('app-diamond','dots','黄菱小酷','软菱形 · 顶部圆球 · 墨镜','diamond','#E9DC54',{provenance:'official-recreation',head:'pom',headColor:'#E9DC54',face:'sunglasses',eyeColor:'#242627',accessory:'#252727'}),
 preset('app-pebble','dots','蓝石望望','鹅卵石 · 顶饰 · 圆框与侧望眼','pebble','#45A5E4',{provenance:'official-recreation',head:'tuft',headColor:'#45A5E4',face:'round',eyes:'side',eyeColor:'#252B2D',accessory:'#252B2D'}),
 preset('app-twin','dots','桃桃听歌','顶部双瓣 · 闭眼 · 黑色耳机','twin','#E9829B',{provenance:'official-recreation',head:'headphones',expression:'closed',eyeColor:'#29262A',accessory:'#292A2C'}),
 preset('dots-blue','dots','蓝色团子','圆润小球 · 贴合耳机','sphere','#386AFF',{head:'headphones',eyeColor:'#17191C',accessory:'#252525'}),
 preset('dots-cloud','dots','云朵画家','原创云团 · 贝雷帽','cloud','#3B9DF2',{head:'beret',source:'dots'}),
 preset('dots-triangle','dots','奶油小绅士','原创奶油配色 · 圆框','triangle','#F4CC57',{face:'round',source:'dots'}),
 preset('dots-frog','dots','青柠蛙蛙','原创青柠配色','frog','#A8D849',{source:'dots'}),
 preset('dots-heart','dots','莓莓爱心','原创粉紫 · 方形墨镜','heart','#D68AD7',{face:'sunglasses',source:'dots'}),
 preset('dots-twin','dots','桃桃听歌','原创桃粉 · 闭眼耳机','twin','#EF96C0',{head:'headphones',expression:'closed',source:'dots'}),
 preset('dots-bean','dots','开心豆','有一点歪歪的豆形','bean','#ABD5B5',{mouth:'smile'}),
 preset('dots-drop','dots','水滴晴晴','柔和小尖顶与饱满底部','drop','#87CBED'),
 preset('dots-pebble','dots','奶白鹅卵石','宽扁、安静的小石头','pebble','#EAE7DF'),
 preset('dots-orb','dots','葡萄圆圆','圆润体积与柔光眼','sphere','#B6A3E9',{eyes:'sparkle'}),
 preset('dots-star','dots','星星许愿','每个角都软乎乎','star','#F4D479',{head:'flower'}),
 preset('dots-sprout','dots','发芽团子','小芽和圆润豆身','sprout','#A9CD9C'),
 preset('grok-arch','grok','云白软拱','柔和拱面与胶囊眼','arch','#F0F0EC'),
 preset('grok-orb','grok','墨色小圆','沉静、圆润、极简','sphere','#353844',{eyeColor:'#FFF7E9'}),
 preset('grok-pebble','grok','鹅卵石','宽扁的低重心','pebble','#B7C0CD'),
 preset('grok-block','grok','黄油方块','保留软方体的棱面','roundedcube','#F0CF7B'),
 preset('grok-capsule','grok','薄荷胶囊','修长而圆润','capsule','#91CBBF'),
 preset('grok-triangle','grok','小三角','圆角、饱满的三角体','triangle','#C2ACE8'),
 preset('grok-hexagon','grok','六角朋友','软六边形与短胶囊眼','hexagon','#B4CBE3'),
 preset('grok-cloud','grok','棉花云','有节制的三瓣起伏','cloud','#EEE8E2'),
 preset('grok-drop','grok','冰蓝水滴','轻轻收尖的顶部','drop','#8DBDE7'),
 preset('grok-ghost','grok','小幽灵','柔软裙摆与完整体积','ghost','#E5DED5'),
 preset('grok-diamond','grok','软菱形','四角温柔向外伸展','diamond','#DAB2C1'),
 preset('grok-bean','grok','红豆朋友','自然弯曲的小豆子','bean','#B56762',{eyeColor:'#FFF7E9'}),
 preset('muse-mu','muse','小沐','短卷发 · 青绿针织','human','#2C8D82',{hair:'short-curly',skin:'#EBC4A6',hairColor:'#523729',outfit:'sweater'}),
 preset('muse-curly','muse','暖暖','细密卷发 · 织物小伙伴','human','#D79643',{hair:'short-curly',skin:'#996B4B',hairColor:'#252220',neck:'scarf',material:'plush'}),
 preset('muse-bob','muse','栗子','齐颈短发 · 奶油开衫','human','#DFC99F',{hair:'bob',skin:'#EBC2A6',hairColor:'#4C2F28',outfit:'cardigan',faceShape:'round',head:'flower'}),
 preset('muse-wavy','muse','露露','层次波浪 · 莓果毛衣','human','#C27497',{hair:'wavy',skin:'#D5A985',hairColor:'#704D38',faceShape:'oval'}),
 preset('muse-pony','muse','小悠','利落马尾 · 浅蓝衬衫','human','#89B4CF',{hair:'ponytail',skin:'#EAC0A3',hairColor:'#282529',outfit:'shirt',faceShape:'oval'}),
 preset('muse-short','muse','小森','自然短发 · 深绿卫衣','human','#597C64',{hair:'short',skin:'#C99977',hairColor:'#352820',outfit:'hoodie',faceShape:'soft-square'}),
 preset('muse-braids','muse','莉莉','双辫子 · 淡紫针织','human','#AEA0CD',{hair:'braids',skin:'#D8AE8A',hairColor:'#422A23',faceShape:'round'}),
 preset('muse-bun','muse','阿蓝','丸子头 · 蓝色开衫','human','#6393B9',{hair:'bun',skin:'#E6B798',hairColor:'#383337',outfit:'cardigan',face:'round'}),
 preset('muse-long','muse','夏夏','自然长发 · 杏色衬衫','human','#D8AA85',{hair:'long',skin:'#DABDA7',hairColor:'#41332C',outfit:'shirt',faceShape:'oval'}),
 preset('muse-silver','muse','知秋','银灰短发 · 围巾与眼镜','human','#747D91',{hair:'short',skin:'#D0A887',hairColor:'#BBBFC6',face:'round',neck:'scarf',faceShape:'soft-square'}),
 preset('muse-coil','muse','可可','蓬松卷发 · 暖黄卫衣','human','#D4B158',{hair:'short-curly',skin:'#84583E',hairColor:'#231D1B',outfit:'hoodie',faceShape:'round'}),
 preset('muse-rose','muse','小满','玫瑰短发 · 蓝白针织','human','#97B6C2',{hair:'bob',skin:'#E8C5AE',hairColor:'#A96F72',head:'beret'}),
 preset('pet-shiba','pets','柴犬团子','立耳 · 茶白脸颊 · 卷尾','shiba','#ECAE57',{secondary:'#FFF0D5'}),
 preset('pet-cat','pets','奶油猫','猫耳 · 短吻 · 长尾','cat','#D8B992',{secondary:'#F6E8D2'}),
 preset('pet-rabbit','pets','糯米兔','长耳 · 小圆尾','rabbit','#E8DED9',{secondary:'#F6E9ED'}),
 preset('pet-fox','pets','赤狐团团','尖耳 · 白胸 · 大尾巴','fox','#C98248',{secondary:'#F5E6D4'}),
 preset('pet-panda','pets','芝麻熊猫','黑眼圈 · 圆耳 · 短尾','panda','#ECE8DC',{secondary:'#3D3D43'}),
 preset('pet-bear','pets','可可小熊','圆耳 · 短吻 · 厚实小爪','bear','#A97D58',{secondary:'#DFBE94'}),
 preset('pet-otter','pets','水獭豆豆','浅色口鼻 · 小圆耳 · 长尾','otter','#9C7B60',{secondary:'#EAD9BA'}),
 preset('pet-capybara','pets','卡皮','钝圆吻部 · 小耳朵','capybara','#B19878',{secondary:'#D1BA9B'}),
 preset('pet-axolotl','pets','桃桃六角龙','外鳃 · 小爪 · 细长尾鳍','axolotl','#EABFCB',{secondary:'#D584A0',material:'rubber'}),
 preset('pet-penguin','pets','小企鹅','白肚皮 · 短喙 · 小翅膀','penguin','#455565',{secondary:'#F3F0E6'}),
 preset('pet-owl','pets','困困猫头鹰','面盘 · 短喙 · 羽翼','owl','#AFA089',{secondary:'#F1E6D0'}),
 preset('pet-hedgehog','pets','栗栗刺猬','小鼻子 · 层叠软刺','hedgehog','#8C715B',{secondary:'#DBBE98'}),
 preset('baseline-dots','dots','蓝色 Dots','蓝色圆润主体 · 细短绒 · 贴合黑色耳机','sphere','#3264FA',{provenance:'official-recreation',referenceDate:REFERENCE_INFO.date,eyes:'softOval',mouth:'none',material:'micro',accessory:'#292A2D',head:'headphones',action:'listen'}),
 preset('baseline-grok','grok','淡紫 Grok Bot','淡紫软拱 · 胶囊眼 · 透明圆框 · 工作电脑','arch','#DCCDF2',{provenance:'official-recreation',eyes:'capsule',mouth:'none',material:'rubber',secondary:'#F6F0FC',accessory:'#3C354A',face:'round',prop:'macbook',action:'work'}),
 preset('baseline-meta-muse','meta-muse','米白 Meta Muse','包覆式米白头罩 · 暖色内嵌脸面 · 耳机与围巾','meta-hood','#F3F0E8',{provenance:'official-recreation',eyes:'softOval',mouth:'smile',material:'micro',secondary:'#F8E9D8',accessory:'#6B6572',head:'headphones',neck:'scarf',action:'idle',skinMaterial:'auto',hairMaterial:'auto',clothMaterial:'fabricCloth'}),
 preset('baseline-humans','humans','栗色短发人物','原创人物 · 栗色自然短发 · 耳机与书本','human','#789A92',{provenance:'original',eyes:'sparkle',mouth:'smile',material:'micro',skin:'#D8A985',hairColor:'#56392E',hair:'short',faceShape:'oval',outfit:'sweater',brows:'soft',head:'headphones',prop:'book',action:'read',skinMaterial:'matte',hairMaterial:'layered',clothMaterial:'knit'}),
 preset('baseline-animals','animals','柴犬伙伴','原创柴犬 · 立耳与卷尾 · 蓝围巾 · 工作电脑','shiba','#D3934D',{provenance:'original',eyes:'sparkle',mouth:'smile',material:'micro',secondary:'#FFF0D5',accessory:'#4B78A5',neck:'scarf',prop:'macbook',action:'work'})
];
export const familyPresets=(family,{includeLegacy=false}={})=>PRESETS.filter(p=>p.family===normalizeFamilyId(family)&&(includeLegacy||!p.isLegacy));
export const allFamilyPresets=family=>familyPresets(family,{includeLegacy:true});
export const getPreset=id=>PRESETS.find(p=>p.id===id)||null;
export const STYLE_SOURCES=[
 {family:'dots',title:'ChatGPT Dots · 官方角色示例',url:'https://chatgpt.com/features/dots/',note:'公开介绍可辅助理解风格；本站的 9 个同款复刻以 2026-10-04 提供的 App 截图为依据，名称为本站描述性命名。'},
 {family:'grok',title:'xAI · Designing Grok Bot',url:'https://x.ai/news/designing-grok-bot',note:'简洁外形、富有表现力的眼睛与克制的变化。'},
 {family:'grok',title:'Bloub · 独立交互项目',url:'https://bloub.vercel.app',note:'8 种可切换几何外形、表情与配色参考；非 xAI 官方网站。'},
 {family:'humans',title:'Muse · How We Designed Muse',url:'https://introducing.muse.ai/',note:'个人化头像与身份；Veda 是文章作者自己的 Muse，不是统一默认形象。该来源解释旧 Muse 人物分支，不代表 Meta Muse 的包覆式造型。'},
 {family:'meta-muse',title:'Meta AI · Bringing Your Muse to Life',url:'https://research.meta.ai/blog/bringing-your-muse-to-life',note:'Meta Muse 包覆式身份参考；文章样例不等于 App 可选预设全集。'},
 {family:'animals',title:'ChatGPT · Pets',url:'https://learn.chatgpt.com/docs/pets',note:'内置和自定义宠物。本站动物均为原创扩展，不冒充官方内置库。'}
];
