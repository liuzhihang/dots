import {createCharacter,validateConfig} from './studio-model.js';
export const INSPIRATIONS = [
 {id:'blue-listen',family:'dots',name:'蓝色 Dots',tag:'DOTS / 原版身份',description:'蓝色圆润主体、细短绒、简洁双眼与黑色连续耳机。身份依据 Dots 原版；网页成品待逐组确认。'},
 {id:'white-work',family:'grok',name:'淡紫 Grok Bot',tag:'GROK BOT / 原版身份',description:'哑光软拱、胶囊眼，透明镜与工作电脑。身份依据 Grok Bot 原版；网页成品待逐组确认。'},
 {id:'hood-muse',family:'meta-muse',name:'米白 Meta Muse',tag:'META MUSE / A02 身份',description:'米白头罩、暖色内嵌脸面、短臂双脚。按 A02 保留包覆式身份，不使用旧人物 Muse。'},
 {id:'woven-muse',family:'humans',name:'栗色短发人物',tag:'人物 / 新设计',description:'提炼 R01 的比例、发束与表情语言，重新设计脸型、发型和服装；未使用动漫原图或贴图。'},
 {id:'shiba-tea',family:'animals',name:'柴犬伙伴',tag:'动物 / 新设计',description:'独立柴犬设计：耳口爪卷尾、短绒色区、蓝围巾与电脑。参考仅提炼材质与动物比例。'}
];
export function inspirationCharacter(id,previous){
 const item=INSPIRATIONS.find(x=>x.id===id);if(!item)throw Error('这套角色不存在');
 const c=createCharacter(item.family);
 if(previous){c.reference=structuredClone(previous.reference);c.reference.overrides=[];c.notes=previous.notes;c.output=previous.output;c.aspect=previous.aspect;}
 return validateConfig(c);
}
