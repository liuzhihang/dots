// Baseline cards use the real renderer. Historical generated PNGs remain references only.
export const ART_ACTIONS = ['idle','work','sleep','listen','flowers','magic'];
export const LEGACY_ART = {
 dots:{file:'dot-plush-headphones-v2.png',name:'蓝蓝听歌'},
 animals:{file:'pet-shiba-scarf-v2.png',name:'历史柴犬茶茶'}
};
const BASELINES={dots:['蓝色 Dots','micro','listen'],grok:['紫色 Grok Bot','rubber','idle'],'meta-muse':['米白 Meta Muse','micro','idle'],humans:['栗色短发人物','micro','read'],animals:['柴犬伙伴','micro','work']};
export function getArtSample(family){
 const id=family==='muse'?'humans':family==='pets'?'animals':family;
 const a=BASELINES[id];if(!a)throw Error('未知角色分组');
 return {family:id,name:a[0],material:a[1],action:a[2],presetId:'baseline-'+id,src:null,file:null,kind:'baseline-reference',layout:'single',size:80,width:200,height:200,columns:1,rows:1,index:0};
}

export function getLegacyArtSample(family){const a=LEGACY_ART[family];return a?{...a,family,src:'./assets/atelier/'+a.file,width:1254,height:1254,columns:1,rows:1,index:0,material:'historical',action:'reference'}:null;}
