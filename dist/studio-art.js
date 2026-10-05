// Independent full-image originals. The UI and downloads share this registry.
export const ART_ACTIONS = ['idle','work','sleep','listen','flowers','magic'];
const ART = {
 dots:{file:'dot-plush-headphones-v2.png',material:'plush',action:'listen',name:'蓝蓝听歌',size:83},
 grok:{file:'grok-matte-work-v2.png',material:'rubber',action:'work',name:'专注小白',size:80},
 muse:{file:'muse-fabric-reading-v2.png',material:'micro',action:'read',name:'织物小沐',size:73},
 pets:{file:'pet-shiba-scarf-v2.png',material:'plush',action:'idle',name:'柴犬茶茶',size:76}
};
export function getArtSample(family){
 const a=ART[family]||ART.dots;
 return {...a,family,src:'./assets/atelier/'+a.file,kind:'curated-sample',layout:'single',width:1254,height:1254,columns:1,rows:1,index:0};
}
