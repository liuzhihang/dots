import {schematicShapes} from './studio-pickers.js?v=63';
import {SHAPES,EXPRESSIONS,ACCESSORIES} from './studio-model.js?v=63';
const safe=s=>String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
export function schematicSupport(c){const unavailable=!schematicShapes[c.shape];return {unavailable,notes:[unavailable?'此人物 / 动物结构尚无对应 2D 示意；原角色完整保留，请返回 3D 查看。':'2D 结构示意使用同一份配置；材质、光照与景深请在 3D 查看。',...((c.action!=='idle'||c.accessories.prop!=='none'||c.limbs!=='none'&&c.limbs!=='auto')?['动作、道具与肢体接触仅在 3D 演示，设定已保留。']:[]),...(!['none','headphones','beret','pom','tuft'].includes(c.accessories.head)?['所选头饰仅在3D完整展示。']:[]),...(!['none','bow'].includes(c.accessories.neck)?['颈饰以简线示意，完整造型请在3D查看。']:[]),...(c.camera!=='front'?['2D 仅展示正面；保存的镜头未改变。']:[])]};}
export function schematicSVG(c){
 const support=schematicSupport(c);if(support.unavailable)return null;
 const fill=c.colors.body,ink=c.colors.eyes,acc=c.colors.accessory,head=c.colors.headAccessory,closed=['closed','delighted','laughing'].includes(c.expression),smile=['delighted','laughing'].includes(c.expression);
 const cx=40,cy=c.shape==='frog'?18:30,space=(c.shape==='triangle'?8:c.shape==='heart'?8:c.shape==='pebble'?8:c.shape==='scallop'?7.5:c.shape==='twin'?7:6)*c.eyeSpacing;
 let face='';const iris=c.eyes,ex=c.expression,scale=c.eyeScale;
 for(const side of [-1,1]){
  const x=cx+side*space,y=cy+(ex==='skeptical'&&side>0?-1:0),shut=closed||ex==='wink'&&side>0;
  const squint=({sleepy:.45,happy:.85,focused:.78,angry:.68,surprised:1.25,deadpan:.35,expectant:1.16,panicked:1.43,tearful:1.08}[ex]||1)*(ex==='skeptical'&&side<0?.5:1);
  let e='';const rx=({round:1.9,glossy:2.8,star:2.5,side:3,oval:3}[iris]||2)*scale,ry=({round:1.9,glossy:2.8,capsule:5,star:3.8}[iris]||3.2)*scale*squint;
  if(shut)e=`<path d="M${-rx*1.3} 0 Q0 ${smile?-3:2} ${rx*1.3} 0" fill="none" stroke="${ink}" stroke-width="1.1" stroke-linecap="round"/>`;
  else{
   if(c.shape==='frog')e+=`<ellipse rx="${rx*1.8}" ry="${ry*1.35}" fill="#F9FFE9"/>`;
   e+=`<ellipse rx="${rx}" ry="${ry}" fill="${['side','oval'].includes(iris)?'#fff':ink}"/>`;
   if(['side','oval'].includes(iris))e+=`<ellipse cx="${iris==='side'?-1:0}" rx="${rx*.62}" ry="${ry*.7}" fill="${ink}"/>`;
   if(iris==='lash')e+=`<path d="M${side*rx*.6} -1L${side*rx*1.9} -.5L${side*rx*.6} 1" fill="${ink}"/>`;
   if(iris==='sleepy'||ex==='deadpan')e+=`<path d="M${-rx*1.4} -1H${rx*1.4}" stroke="${ink}" stroke-width="1.7" stroke-linecap="round"/>`;
   if(iris==='star')e+='<path d="M-.4-2.8L.3-1.2L1.8-.6L.3 0L-.4 1.6L-1.1 0L-2.5-.6L-1.1-1.2Z" fill="white"/>';
   if(['sparkle','glossy'].includes(iris))e+=`<circle cx="-.7" cy="${-ry*.35}" r="${iris==='glossy'?.85:.65}" fill="white"/>`;
  }
  if(c.brows!=='none')e+=`<path d="M-3 ${-ry-3} Q0 ${-ry-4} 3 ${-ry-3}" stroke="${ink}" fill="none" stroke-width=".7"/>`;
  face+=`<g transform="translate(${x} ${y}) rotate(${['sad','worried','tearful'].includes(ex)?-side*10:ex==='angry'?side*16:0})">${e}</g>`;
 }
 if(c.mouth!=='none')face+=c.mouth==='tiny'||c.mouth==='laugh'||ex==='laughing'?`<ellipse cx="40" cy="40" rx="${c.mouth==='tiny'?1.4:3}" ry="${c.mouth==='tiny'?1.8:2.7}" fill="${ink}"/>`:`<path d="M37 40Q40 ${['sad','worried','angry'].includes(ex)?37:43} 43 40" stroke="${ink}" stroke-width=".8" fill="none" stroke-linecap="round"/>`;
 if(c.expressionAccents&&['tearful','panicked'].includes(ex))face+=`<ellipse cx="${40+space+3}" cy="${ex==='tearful'?cy+5:cy-4}" rx=".8" ry="1.8" fill="#8bd6f4"/>`;
 let glasses='';const f=c.accessories.face;
 if(f!=='none'){
  for(const side of [-1,1]){if(f==='monocle'&&side<0)continue;const x=40+side*space,r=space*.84;
   glasses+=['square','sunglasses','catEye'].includes(f)?`<rect x="${x-r}" y="${cy-r*.77}" width="${r*2}" height="${r*1.54}" rx="2" fill="${f==='square'?'none':acc}" stroke="${acc}" stroke-width=".9"/>`:`<ellipse cx="${x}" cy="${cy}" rx="${r}" ry="${r*1.04}" fill="${f==='roundSun'?acc:'none'}" stroke="${acc}" stroke-width=".9"/>`;
  }
  glasses+=f==='monocle'?`<path d="M${40+space*1.6} ${cy+space*.6}Q${40+space*2} ${cy+12} ${40+space*2.6} ${cy+10}" fill="none" stroke="${acc}" stroke-width=".8"/>`:`<path d="M${40-space*.17} ${cy}Q40 ${cy-2} ${40+space*.17} ${cy}" fill="none" stroke="${acc}" stroke-width="1"/>`;
 }
 let hat='';const h=c.accessories.head;
 if(h==='headphones')hat=`<path d="M16 34C12 0 68 0 64 34" fill="none" stroke="${head}" stroke-width="2.2"/><rect x="12" y="29" width="8" height="16" rx="3.8" fill="${head}"/><rect x="60" y="29" width="8" height="16" rx="3.8" fill="${head}"/>`;
 else if(h==='beret')hat=`<ellipse cx="37" cy="12" rx="16" ry="6.5" transform="rotate(-14 37 12)" fill="${head}"/><path d="M37 6L36 3" stroke="${head}" stroke-width="2" stroke-linecap="round"/>`;
 else if(h==='pom')hat=`<circle cx="40" cy="2" r="5" fill="${head}"/>`;
 else if(h==='tuft')hat=`<g fill="${head}"><ellipse cx="35" cy="8" rx="3" ry="5" transform="rotate(-30 35 8)"/><ellipse cx="41" cy="5" rx="3" ry="6"/><ellipse cx="46" cy="8" rx="3" ry="5" transform="rotate(30 46 8)"/></g>`;
 else if(h==='none'){}else hat=`<text x="40" y="0" text-anchor="middle" font-size="3.6" fill="#65758b">${safe(ACCESSORIES.head[h].label)}：3D 查看</text>`;
 let neck='';if(c.accessories.neck==='bow')neck=`<path d="M39 51L29 47Q27 51 29 55L39 53ZM41 51L51 47Q53 51 51 55L41 53Z" fill="${acc}"/><circle cx="40" cy="52" r="1.8" fill="${acc}"/>`;
 else if(c.accessories.neck!=='none')neck=`<path d="M25 49Q40 54 55 49" fill="none" stroke="${acc}" stroke-width="3"/>`;
 const [aw,ah]=c.aspect.split(':').map(Number),w=400,hg=400*ah/aw,bg=c.background==='transparent'?'':`<rect width="${w}" height="${hg}" fill="${c.background==='solid'?c.colors.background:'#f4f6fa'}"/>`,size=Math.min(w,hg)*.012*(c.scale/72);
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${hg}" role="img" aria-label="${safe(c.name)}的2D结构示意"><title>${safe(c.name)} · ${safe(SHAPES[c.shape].label)} · ${safe(EXPRESSIONS[c.expression].label)}</title>${bg}<g transform="translate(${w/2} ${hg/2}) scale(${size*c.bodyWidth} ${size*c.headScale}) translate(-40 -32)"><g fill="${fill}">${schematicShapes[c.shape]}</g><g>${face}${glasses}${hat}${neck}</g></g></svg>`;
}
export class Shared2DPreview{
 constructor(container,{onReady=()=>{}}={}){this.container=container;this.onReady=onReady;this.playing=false;}
 update(config){this.config=structuredClone(config);const support=schematicSupport(config),svg=schematicSVG(config);this.container.innerHTML=svg?`<div class="shared-schematic" data-shape="${config.shape}" data-expression="${config.expression}">${svg}</div><p class="schematic-notice">${support.notes.map(safe).join('<br>')}</p>`:`<div class="schematic-unavailable"><b>${safe(config.name)}</b><p>${support.notes.map(safe).join('<br>')}</p><a class="button primary" href="./">返回同一角色的 3D 预览</a></div>`;this.onReady();}
 setPlaying(){}
 async capture(size=1600,config=this.config){const svg=schematicSVG(config);if(!svg)throw Error('此结构暂不支持 2D 导出，请返回 3D 导出同一角色。');const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));try{const image=new Image();image.src=url;await image.decode();const [aw,ah]=config.aspect.split(':').map(Number),canvas=document.createElement('canvas');canvas.width=aw>=ah?size:Math.round(size*aw/ah);canvas.height=ah>=aw?size:Math.round(size*ah/aw);canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);return await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));}finally{URL.revokeObjectURL(url);}}
 dispose(){this.container.replaceChildren();}
}
