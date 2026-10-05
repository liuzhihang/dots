// Whole display illustrations. Display members are descriptions, never look IDs
// or composition layers. Only the explicit registered startLookId is actionable.
const scene=(id,associatedLookIds,displayMembers,caption,greeting='',startLookId=null,revision=2)=>Object.freeze({
 id,src:`assets/scenes/${id}-v${revision}.png`,associatedLookIds:Object.freeze(associatedLookIds),
 displayMembers:Object.freeze(displayMembers),displayCount:displayMembers.length,
 caption,greeting,startLookId,status:'unreviewed'
});
export const HERO_SCENES=Object.freeze([
 scene('hero-left',['candidate-dots-20261005','grok-green-cloud','candidate-humans-20261005'],['栗发挥手男孩','紫色耳机 Dots','粉色三角 Grok','绿色云 Grok','蓝色水滴 Grok'],'一起，把小小灵感变大','嗨！一起想个新点子吧。',null,4),
 scene('hero-right',['candidate-meta-muse-20261005','human-bun-yellow','candidate-animals-20261005','grok-teal-square'],['丸子头女孩','奶油 Meta Muse','暖橙柴犬','橙色豆形 Grok','青绿圆角方 Grok'],'靠近一点，快乐多一点','送你一点温柔，也送你一点勇气。',null,4)
]);
export const FAMILY_SCENES=Object.freeze({
 dots:scene('family-dots',['candidate-dots-20261005','dots-rose-glasses'],['紫色耳机 Dots','小蓝 Dots','粉色眼镜 Dots','小黄 Dots'],'挤在一起，听见好心情','','candidate-dots-20261005',3),
 grok:scene('family-grok',['candidate-grok-20261005','grok-green-cloud','grok-teal-square'],['绿色云 Grok','橙色豆形 Grok','蓝色水滴 Grok','青绿圆角方 Grok','紫色圆角三角 Grok','莓红圆角六边形 Grok'],'不同形状，一起想象','','candidate-grok-20261005',3),
 'meta-muse':scene('family-meta-muse',['candidate-meta-muse-20261005'],['奶油 Meta Muse'],'抱住一颗星，分享一点温柔','','candidate-meta-muse-20261005',4),
 humans:scene('family-humans',['candidate-humans-20261005','human-bun-yellow','human-blond-glasses'],['黑发深色上衣男孩','丸子头黄衣女孩','金发眼镜灰外套男孩'],'把灵感，放在彼此手心','','candidate-humans-20261005',3),
 animals:scene('family-animals',['candidate-animals-20261005','animal-gray-husky'],['暖橙柴犬','灰色哈士奇','粉色小猪','棕色小猴','蓝羽白色小鸟'],'蹭一蹭，就是好朋友','','candidate-animals-20261005',3)
});
