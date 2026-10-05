// Display-only relationship illustrations. These are never avatar IDs,
// composition layers, user-provided URLs, or downloadable individual looks.
const scene=(id,members,caption,greeting)=>Object.freeze({id,src:`assets/scenes/${id}-v1.png`,members:Object.freeze(members),caption,greeting,status:'unreviewed'});
export const HERO_SCENES=Object.freeze([
 scene('hero-left',['candidate-dots-20261005','dots-rose-glasses','dots-lilac-bucket','candidate-grok-20261005','grok-green-cloud','candidate-humans-20261005'],'一起，把小小灵感变大','嗨！一起想个新点子吧。'),
 scene('hero-right',['candidate-meta-muse-20261005','muse-rose-flowers','muse-sage-reading','human-bun-yellow','candidate-animals-20261005','animal-white-cat'],'靠近一点，快乐多一点','送你一朵花，也送你一点勇气。')
]);
export const FAMILY_SCENES=Object.freeze({
 dots:scene('family-dots',['candidate-dots-20261005','dots-rose-glasses','dots-lilac-bucket'],'挤在一起，听见好心情',''),
 grok:scene('family-grok',['candidate-grok-20261005','grok-green-cloud','grok-teal-square'],'不同形状，一起想象',''),
 'meta-muse':scene('family-meta-muse',['candidate-meta-muse-20261005','muse-rose-flowers','muse-sage-reading'],'一朵小花，一点温柔',''),
 humans:scene('family-humans',['candidate-humans-20261005','human-bun-yellow','human-blond-glasses'],'把灵感，放在彼此手心',''),
 animals:scene('family-animals',['candidate-animals-20261005','animal-white-cat','animal-gray-husky'],'蹭一蹭，就是好朋友','')
});
