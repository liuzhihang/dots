// Explicit raster sample registry. The UI and download use the same crop metadata.
export const ART_ACTIONS = ['idle','work','sleep','listen','flowers','magic'];
const SINGLE = {
 'dots:plush:idle':'dots-plush-hero',
 'dots:rubber:idle':'dots-matte-hero',
 'dots:plush:work':'dots-plush-work',
 'grok:rubber:idle':'grok-matte-hero',
 'grok:plush:idle':'grok-plush-hero',
 'grok:rubber:work':'grok-matte-work',
 'muse:rubber:idle':'muse-matte-hero',
 'muse:rubber:work':'muse-matte-work'
};
export function getArtSample(family,material,action='idle'){
 const sampleMaterial=['plush','micro'].includes(material)?'plush':'rubber';
 const sampleAction=ART_ACTIONS.includes(action)?action:'idle';
 const single=SINGLE[family+':'+sampleMaterial+':'+sampleAction];
 const common={family,material:sampleMaterial,action:sampleAction,kind:'curated-sample'};
 if(single)return {...common,src:'./assets/'+single+'.webp',layout:'single',width:1254,height:1254,columns:1,rows:1,index:0};
 const index=ART_ACTIONS.indexOf(sampleAction)+(sampleMaterial==='rubber'?6:0);
 return {...common,src:'./assets/'+family+'-actions.webp',layout:'atlas',width:362,height:362,columns:3,rows:4,index};
}
