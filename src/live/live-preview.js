import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {MeshSurfaceSampler} from 'three/addons/math/MeshSurfaceSampler.js';
import {buildAvatarBody} from './avatar-body.js';
import {decorateAvatar} from './avatar-props.js';
import {SoftwareRenderer} from './software-renderer.js';

const UP=new THREE.Vector3(0,1,0);
let graphicsMode=null;
const stillTime=c=>c?.action==='bounce'?.45:c?.action==='blink'?.17:c?.action==='listen'?.4:c?.action==='wave'?.35:0;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
function visualKey(config){const c={...config};for(const k of ['name','notes','reference','presetId','version','rendererVersion','palette','output','eyeColorManual'])delete c[k];return JSON.stringify(c);}
const seedRandom=seed=>{let n=2166136261;for(const ch of String(seed))n=Math.imul(n^ch.charCodeAt(0),16777619);return()=>{n^=n<<13;n^=n>>>17;n^=n<<5;return(n>>>0)/4294967296;};};
function disposeRoot(root){
 const geometries=new Set(),materials=new Set(),textures=new Set();
 root?.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])if(m){materials.add(m);for(const value of Object.values(m))if(value?.isTexture)textures.add(value);}});
 geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
}

// Individual tapered fibers are attached to the actual mesh surface. Sampling
// and colors are seeded so a slider change does not make the fur swim or flicker.
function addFur(avatar,c,quality=1){
 const surfaces=avatar.surfaces.filter(mesh=>{
  const kind=mesh.userData.surfaceMaterial||mesh.material.name||c.material;
  let visible=true;for(let parent=mesh;parent;parent=parent.parent)if(!parent.visible)visible=false;
  return ['plush','micro','fabric','knit'].includes(kind)&&visible;
 });
 let total=0;
 const areas=surfaces.map(mesh=>{mesh.geometry.computeBoundingBox();const s=mesh.geometry.boundingBox.getSize(new THREE.Vector3()).multiply(mesh.scale);const a=Math.max(.02,2*(s.x*s.y+s.x*s.z+s.y*s.z));total+=a;return a;});
 surfaces.forEach((mesh,i)=>{
  const kind=mesh.userData.surfaceMaterial||mesh.material.name||c.material;
  const textile=['knit','fabric'].includes(kind),micro=kind==='micro';
  const count=Math.max(120,Math.round((textile?13000:38000)*quality*areas[i]/total));
  const length=textile?.009:micro?.012:.027;
  const geometry=new THREE.CylinderGeometry(.0003,textile?.001:.00135,length,3,1);geometry.translate(0,length/2,0);
  const material=new THREE.MeshStandardMaterial({color:mesh.material.color,roughness:1,metalness:0,side:THREE.DoubleSide});
  const fur=new THREE.InstancedMesh(geometry,material,count);fur.name='surface-fibers';fur.castShadow=false;fur.receiveShadow=true;
  const random=seedRandom((c.randomSeed||'dot')+mesh.name+i),sampler=new MeshSurfaceSampler(mesh).setRandomGenerator(random).build();
  const p=new THREE.Vector3(),n=new THREE.Vector3(),o=new THREE.Object3D(),color=new THREE.Color();
  for(let j=0;j<count;j++){
   sampler.sample(p,n);o.position.copy(p);n.x+=(random()-.5)*.15;n.y-=.12;n.normalize();
   o.quaternion.setFromUnitVectors(UP,n);o.scale.set(1,.62+random()*.75,1);o.updateMatrix();fur.setMatrixAt(j,o.matrix);
   color.setRGB(1,1,1).multiplyScalar(.78+random()*.31);fur.setColorAt(j,color);
  }
  fur.instanceMatrix.needsUpdate=true;fur.instanceColor.needsUpdate=true;fur.frustumCulled=false;mesh.add(fur);
 });
}

function setPose(avatar,c){
 const human=c.shape==='human',animal=avatar.root.userData.anatomy==='animal';
 if(c.action==='sleep'){
  // Articulated rest: fold the arms and legs, then settle the whole pose onto
  // the ground. Head and torso retain their relationship and no prop is added.
  for(const [i,arm]of avatar.arms.entries()){arm.rotation.z=(i?1:-1)*.62;arm.rotation.x=-.62;}
  for(const [i,leg]of avatar.legs.entries()){leg.position.y+=.10;leg.position.z+=.10;leg.rotation.z=(i?1:-1)*.22;}
  if(human||animal){avatar.head.rotation.z=.14;avatar.head.rotation.x=.08;avatar.head.position.y-=human?.16:.28;avatar.torso.scale.y=animal?.92:1;avatar.root.rotation.z=human?-.78:-1.05;avatar.root.rotation.y=-.10;}
  else{avatar.root.scale.y=.85;avatar.root.scale.x=1.05;avatar.root.rotation.z=-.12;}
 }else if(c.pose==='sit'&&(human||animal)){
  avatar.torso.scale.y=.86;avatar.head.position.y-=.17;
  for(const arm of avatar.arms)arm.position.y-=.17;
  for(const leg of avatar.legs){leg.position.z+=.24;leg.scale.z=1.18;}
 }else if(c.pose==='sit'){
  avatar.root.scale.set(1.06,.87,1.03);
 }else if(c.pose==='chin'){
  avatar.head.rotation.z=.10;
 }
 if(['work','read'].includes(c.action)){avatar.head.rotation.x=.11;avatar.head.position.z+=.025;}
 if(c.action==='magic'){avatar.head.rotation.y=.16;avatar.head.rotation.x=-.035;}
 if(c.action==='camera')avatar.head.rotation.x=.035;
 avatar.root.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(avatar.root);
 avatar.root.position.y-=box.min.y;
 avatar.root.userData.restY=avatar.root.position.y;
 avatar.root.userData.restRotation=avatar.root.rotation.clone();
 avatar.root.userData.restScale=avatar.root.scale.clone();
}

class RenderWorld{
 constructor(canvas,{thumbnail=false}={}){
  this.thumbnail=thumbnail;
  const options={alpha:true,antialias:true,preserveDrawingBuffer:true,powerPreference:'low-power'};
  let context=null;if(graphicsMode!=='software'){try{context=canvas.getContext('webgl2',options);}catch{}}
  if(context){graphicsMode='webgl';this.renderer=new THREE.WebGLRenderer({canvas,context,...options});}
  else{graphicsMode='software';this.renderer=new SoftwareRenderer(canvas);}
  canvas.dataset.renderMode=graphicsMode;
  this.renderer.setPixelRatio(thumbnail?1:Math.min(window.devicePixelRatio||1,1.7));
  if(this.renderer.isSoftwareRenderer)this.renderer.previewLimit=thumbnail?240:640;
  this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.NeutralToneMapping;this.renderer.toneMappingExposure=1.18;
  this.renderer.shadowMap.enabled=!thumbnail;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  this.scene=new THREE.Scene();
  this.camera=new THREE.OrthographicCamera(-2,2,2,-2,.1,40);
  if(!this.renderer.isSoftwareRenderer){
   const pmrem=new THREE.PMREMGenerator(this.renderer),room=new RoomEnvironment();
   this.environment=pmrem.fromScene(room,.055);this.scene.environment=this.environment.texture;this.scene.environmentIntensity=.65;
   room.dispose();pmrem.dispose();
  }
  this.scene.add(new THREE.HemisphereLight('#ffffff','#b8c1d0',1.45));
  const key=new THREE.DirectionalLight('#fff8ee',2.5);key.position.set(-3.5,6,5);key.castShadow=!thumbnail;
  key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-4,right:4,top:5,bottom:-3,near:.1,far:20});key.shadow.bias=-.0003;key.shadow.normalBias=.018;key.shadow.radius=4;this.scene.add(key);
  const fill=new THREE.DirectionalLight('#dceaff',.6);fill.position.set(4,2,2);this.scene.add(fill);
  const rim=new THREE.DirectionalLight('#ffffff',1.1);rim.position.set(1,4,-3);this.scene.add(rim);
  this.floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({color:'#68718a',opacity:.16}));this.floor.rotation.x=-Math.PI/2;this.floor.position.y=-.016;this.floor.receiveShadow=true;this.scene.add(this.floor);
  // A very soft contact core remains stable under gentle idle motion.
  const size=128,data=new Uint8Array(size*size*4);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){const r=((x-size/2)/(size/2))**2+((y-size/2)/(size/2))**2;const i=(y*size+x)*4;data[i]=88;data[i+1]=103;data[i+2]=125;data[i+3]=Math.round(Math.exp(-r*5)*28);}
  const map=new THREE.DataTexture(data,size,size);map.needsUpdate=true;
  this.contact=new THREE.Mesh(new THREE.PlaneGeometry(3.3,2.2),new THREE.MeshBasicMaterial({map,transparent:true,depthWrite:false}));this.contact.rotation.x=-Math.PI/2;this.contact.position.y=.002;this.scene.add(this.contact);
  this.turn=new THREE.Group();this.scene.add(this.turn);this.frame={width:512,height:512};
 }
 update(c){
  if(this.avatar){this.turn.remove(this.avatar.root);disposeRoot(this.avatar.root);}
  this.config=structuredClone(c);this.avatar=buildAvatarBody(c);this.props=decorateAvatar(this.avatar,c);setPose(this.avatar,c);
  addFur(this.avatar,c,this.thumbnail?.23:1);this.turn.add(this.avatar.root);
  this.turn.rotation.y=c.camera==='side'?Math.PI*.43:c.camera==='threeQuarter'?.33:c.pose==='side'?.30:0;
  this.turn.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(this.turn);this.center=bounds.getCenter(new THREE.Vector3());this.bounds=bounds.getSize(new THREE.Vector3());
  this.floor.visible=this.contact.visible=c.background!=='transparent';
  this.scene.background=c.background==='solid'?new THREE.Color(c.colors.background):c.background==='studio'?new THREE.Color('#f8fafc'):null;
  this.fit(this.frame.width,this.frame.height);this.render(stillTime(c));
 }
 fit(width,height){
  if(!width||!height)return;this.frame={width,height};this.renderer.setSize(width,height,false);
  if(!this.avatar)return;
  const c=this.config,aspect=width/height;
  const fullHeight=Math.max(this.bounds.y*1.28,this.bounds.x*1.28/aspect)*(72/c.scale);
  let heightWorld=fullHeight,center=this.center.clone();
  if(c.framing!=='full'&&!['sleep'].includes(c.action)){
   const prop=c.accessories.prop!=='none';
   if(c.shape==='human'||this.avatar.root.userData.anatomy==='animal'){
    heightWorld=fullHeight*(prop?.90:c.framing==='portrait'?.53:.67);center.y+=this.bounds.y*(prop?.04:c.framing==='portrait'?.205:.16);
   }
  }
  this.camera.left=-heightWorld*aspect/2;this.camera.right=heightWorld*aspect/2;this.camera.top=heightWorld/2;this.camera.bottom=-heightWorld/2;
  this.camera.position.set(center.x,center.y+.12,8);this.camera.lookAt(center.x,center.y,0);this.camera.updateProjectionMatrix();
 }
 render(time=0){
  if(!this.avatar)return;const a=this.avatar,c=this.config,rest=a.root.userData;
  a.root.position.y=rest.restY;a.root.scale.copy(rest.restScale);a.root.rotation.copy(rest.restRotation);
  if(c.action==='bounce'){
   const v=Math.max(0,Math.sin(time*3.1));a.root.position.y+=v*.24;a.root.scale.y=rest.restScale.y*(1+v*.05);a.root.scale.x=rest.restScale.x*(1-v*.025);
  }else{
   const breath=Math.sin(time*(c.action==='sleep'?1.3:1.8));a.root.scale.y=rest.restScale.y*(1+breath*.008);
   if(c.action==='listen')a.root.rotation.z+=Math.sin(time*2)*.035;
   if(c.expression==='curious'||c.expression==='skeptical')a.root.rotation.z+=.055;
   if(c.expression==='shy')a.root.rotation.y+=.11;
  }
  const blinkCycle=time%(c.action==='blink'?2.3:5.5),blink=Math.abs(blinkCycle-.17)<.16?Math.max(.07,Math.abs(blinkCycle-.17)/.16):1;
  for(const eye of a.eyeGroups)eye.scale.y=(c.expression==='closed'||c.expression==='wink'||c.expression==='delighted'||c.action==='sleep')?1:blink;
  if(a.tail&&c.action!=='sleep')a.tail.rotation.y=Math.sin(time*2.5)*.035;
  this.props?.tick(time);this.renderer.render(this.scene,this.camera);
 }
 dispose(){if(this.avatar)disposeRoot(this.avatar.root);disposeRoot(this.floor);disposeRoot(this.contact);this.environment?.dispose();this.renderer.dispose();}
}

export class CharacterPreview{
 constructor(container,{onError=()=>{},onReady=()=>{}}={}){
  this.container=container;this.onError=onError;this.onReady=onReady;this.canvas=document.createElement('canvas');this.canvas.className='character-canvas';this.canvas.setAttribute('role','img');this.canvas.setAttribute('aria-label','当前配置的实时三维角色');container.append(this.canvas);
  this.world=new RenderWorld(this.canvas);this.start=performance.now();this.playing=!matchMedia('(prefers-reduced-motion: reduce)').matches;this.visible=true;this.lastFrame=0;this.revision=0;
  this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);
  this.intersection=new IntersectionObserver(([entry])=>{this.visible=entry.isIntersecting;});this.intersection.observe(container);
  this.contextLost=e=>{e.preventDefault();this.onError('实时预览暂时无法继续，请刷新页面恢复。你的配置仍然保留。');};this.canvas.addEventListener('webglcontextlost',this.contextLost);
  this.loop=now=>{this.raf=requestAnimationFrame(this.loop);if(!this.visible||document.hidden||!this.playing||this.capturing||this.world.renderer._busy||now-this.lastFrame<(this.world.renderer.isSoftwareRenderer?115:40))return;this.lastFrame=now;this.world.render((now-this.start)/1000);};this.raf=requestAnimationFrame(this.loop);
 }
 update(config){
  const key=visualKey(config);if(this.updateKey===key)return;this.updateKey=key;this.pending=config;if(this.updateFrame)return;
  this.updateFrame=requestAnimationFrame(()=>{this.updateFrame=0;try{this.world.update(this.pending);this.revision++;this.canvas.dataset.revision=String(this.revision);this.canvas.dataset.shape=this.pending.shape;this.canvas.dataset.material=this.pending.material;this.canvas.dataset.action=this.pending.action;this.resize();this.onReady();}catch(e){console.error('Character preview:',e);this.onError('这个角色暂时未能显示，请切换角色后重试。');}});
 }
 resize(){const c=this.pending||this.world.config;if(!c)return;const [aw,ah]=c.aspect.split(':').map(Number),rect=this.container.getBoundingClientRect(),ratio=aw/ah;let width=Math.max(1,rect.width),height=width/ratio;if(height>rect.height){height=rect.height;width=height*ratio;}this.canvas.style.width=width+'px';this.canvas.style.height=height+'px';this.world.fit(Math.round(width),Math.round(height));this.world.render(stillTime(this.world.config));}
 setPlaying(value){this.playing=value;if(!value&&this.world.config)this.world.render(stillTime(this.world.config));}
 capture(size=1400,config=this.pending||this.world.config){
  // An independent canvas renders the configuration at click time. Live edits,
  // resize events and switching views cannot alter a pending PNG export.
  const snapshot=structuredClone(config);
  const request=(this.captureQueue||Promise.resolve()).catch(()=>{}).then(async()=>{
   let world;this.capturing=true;
   try{
    if(!snapshot)throw Error('角色尚未准备好');
    const [aw,ah]=snapshot.aspect.split(':').map(Number),width=aw>=ah?size:Math.round(size*aw/ah),height=ah>=aw?size:Math.round(size*ah/aw);
    const canvas=document.createElement('canvas');world=new RenderWorld(canvas);
    world.renderer.highQuality=true;world.renderer.captureLimit=size;world.renderer.setPixelRatio(1);world.frame={width,height};world.update(snapshot);world.render(stillTime(snapshot));
    await world.renderer.flush?.();
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('PNG 导出失败');return blob;
   }finally{world?.dispose();this.capturing=false;}
  });
  this.captureQueue=request;return request;
 }
 dispose(){cancelAnimationFrame(this.raf);cancelAnimationFrame(this.updateFrame);this.resizeObserver.disconnect();this.intersection.disconnect();this.world.dispose();this.canvas.remove();}
}

// One shared thumbnail renderer, never one WebGL context per card.
let thumbs,thumbQueue=Promise.resolve();const thumbCache=new Map();
export function characterThumbnail(c,size=220){
 const config={...structuredClone(c),framing:'full',aspect:'1:1',scale:74,background:'transparent',camera:'front'},key=visualKey(config)+size;
 if(thumbCache.has(key))return Promise.resolve(thumbCache.get(key));
 const request=thumbQueue.then(async()=>{
  if(thumbCache.has(key))return thumbCache.get(key);
  if(!thumbs)thumbs=new RenderWorld(document.createElement('canvas'),{thumbnail:true});
  thumbs.frame={width:size,height:size};thumbs.update(config);thumbs.fit(size,size);thumbs.render(stillTime(config));await thumbs.renderer.flush?.();
  const blob=await new Promise(resolve=>thumbs.renderer.domElement.toBlob(resolve,'image/webp',.84));if(!blob)throw Error('缩略图未能生成');
  const url=URL.createObjectURL(blob);thumbCache.set(key,url);if(thumbCache.size>200){const oldest=thumbCache.keys().next().value;URL.revokeObjectURL(thumbCache.get(oldest));thumbCache.delete(oldest);}return url;
 });
 thumbQueue=request.catch(()=>{});return request;
}
