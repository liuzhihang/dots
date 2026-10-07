import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {addFur} from './surface-fur.js';
import {buildAvatarBody} from './avatar-body.js';
import {decorateAvatar} from './avatar-props.js';
import {SoftwareRenderer} from './software-renderer.js';
import {createActivitySystem} from './activity-system.js';

const UP=new THREE.Vector3(0,1,0);
let graphicsMode=null;
const stillTime=c=>c?.action==='done'?.42:c?.action==='blocked'?.12:c?.action==='processing'?.25:c?.action==='thinking'?.28:c?.action==='bounce'?.45:c?.action==='blink'?.17:c?.action==='listen'?.4:c?.action==='wave'?.35:0;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
function visualKey(config){const c={...config};for(const k of ['name','notes','reference','palette','output','eyeColorManual','provenance'])delete c[k];return JSON.stringify(c);}
const seedRandom=seed=>{let n=2166136261;for(const ch of String(seed))n=Math.imul(n^ch.charCodeAt(0),16777619);return()=>{n^=n<<13;n^=n>>>17;n^=n<<5;return(n>>>0)/4294967296;};};
function disposeRoot(root){
 const geometries=new Set(),materials=new Set(),textures=new Set();
 root?.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])if(m){materials.add(m);for(const value of Object.values(m))if(value?.isTexture)textures.add(value);}});
 geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
}

// Individual tapered fibers are attached to the actual mesh surface. Sampling
// and colors are seeded so a slider change does not make the fur swim or flicker.

function setPose(avatar,c){
 const human=avatar.root.userData.anatomy==='human',animal=avatar.root.userData.anatomy==='animal';
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
 if(['work','read'].includes(c.action)){avatar.head.rotation.x=.15;avatar.head.position.z+=.025;if(c.action==='work')avatar.head.rotation.y=-.08;}
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
  let context=null;if(graphicsMode!=='software'&&new URLSearchParams(window.location.search).get('renderer')!=='software'){try{context=canvas.getContext('webgl2',options);}catch{}}
  if(context){graphicsMode='webgl';this.renderer=new THREE.WebGLRenderer({canvas,context,...options});}
  else{graphicsMode='software';this.renderer=new SoftwareRenderer(canvas);}
  canvas.dataset.renderMode=graphicsMode;
  this.renderer.onFramePainted=frame=>{this.renderedTime=frame.animationTime;this.renderedAssembly=frame.assembly;canvas.dataset.animationTime=Number(frame.animationTime).toFixed(3);};
  this.renderer.setPixelRatio(thumbnail?1:Math.min(window.devicePixelRatio||1,1.7));
  if(this.renderer.isSoftwareRenderer){this.renderer.previewLimit=thumbnail?240:800;this.renderer.minPreviewScale=thumbnail?.62:.86;}
  this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.NeutralToneMapping;this.renderer.toneMappingExposure=1.12;
  this.renderer.shadowMap.enabled=!thumbnail;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  this.scene=new THREE.Scene();
  this.camera=new THREE.OrthographicCamera(-2,2,2,-2,.1,40);
  if(!this.renderer.isSoftwareRenderer){
   const pmrem=new THREE.PMREMGenerator(this.renderer),room=new RoomEnvironment();
   this.environment=pmrem.fromScene(room,.035);this.scene.environment=this.environment.texture;this.scene.environmentIntensity=.42;
   room.dispose();pmrem.dispose();
  }
  this.scene.add(new THREE.HemisphereLight('#ffffff','#dce2ed',1.15));
  const key=new THREE.DirectionalLight('#fffdfb',2.3);key.position.set(-3.8,5.2,4.4);key.castShadow=!thumbnail;
  key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-4,right:4,top:5,bottom:-3,near:.1,far:20});key.shadow.bias=-.0003;key.shadow.normalBias=.010;key.shadow.radius=5;this.scene.add(key);
  const fill=new THREE.DirectionalLight('#eef3ff',.62);fill.position.set(4,2.8,2.4);this.scene.add(fill);
  const bounceLight=new THREE.DirectionalLight('#f4f7ff',.24);bounceLight.position.set(0,-2,4);this.scene.add(bounceLight);
  const rim=new THREE.DirectionalLight('#ffffff',.8);rim.position.set(2,4.2,-3.6);this.scene.add(rim);
  // Character surfaces receive light and cast onto one another; no ground projection layer.
  this.turn=new THREE.Group();this.scene.add(this.turn);this.frame={width:512,height:512};
 }
 update(c){
  this.activity?.dispose();this.activity=null;
  if(this.avatar){this.turn.remove(this.avatar.root);disposeRoot(this.avatar.root);}
  this.config=structuredClone(c);this.avatar=buildAvatarBody(c);this.props=decorateAvatar(this.avatar,c);setPose(this.avatar,c);
  addFur(this.avatar,c,this.thumbnail?.23:1);this.turn.add(this.avatar.root);
  this.activity=createActivitySystem(this.avatar,c);if(this.activity)this.turn.add(this.activity.group);
  this.assemblyParts=[this.avatar.torso,this.avatar.head,...this.avatar.legs,...this.avatar.arms,...this.props.parts].filter((x,i,a)=>x&&a.indexOf(x)===i).map((object,i)=>({object,position:object.position.clone(),scale:object.scale.clone(),delay:Math.min(.38,i*.048)}));
  this.turn.rotation.y=c.camera==='side'?Math.PI/2:c.camera==='threeQuarter'?Math.PI/4:c.pose==='side'?.30:0;
  this.turn.updateMatrixWorld(true);
  const bounds=new THREE.Box3().setFromObject(this.turn);this.center=bounds.getCenter(new THREE.Vector3());this.bounds=bounds.getSize(new THREE.Vector3());
  // Structure diagnostics share the transparent PNG contract; preview surfaces are UI only.
  this.scene.background=null;
  this.fit(this.frame.width,this.frame.height);this.render(stillTime(c));
 }
 fit(width,height){
  if(!width||!height)return;this.frame={width,height};this.renderer.setSize(width,height,false);
  if(!this.avatar)return;
  const c=this.config,aspect=width/height,bounds=new THREE.Box3();
  this.turn.scale.setScalar(1);this.turn.position.y=0;
  const rest=this.avatar.root.userData;this.avatar.root.position.y=rest.restY;this.avatar.root.scale.copy(rest.restScale);this.avatar.root.rotation.copy(rest.restRotation);
  for(const p of this.assemblyParts||[]){p.object.position.copy(p.position);p.object.scale.copy(p.scale);}
  this.turn.updateMatrixWorld(true);
  this.avatar.root.traverseVisible(object=>{
   if(!object.isMesh||object.isInstancedMesh)return;
   object.geometry.computeBoundingBox();bounds.union(object.geometry.boundingBox.clone().applyMatrix4(object.matrixWorld));
  });
  if(this.activity)bounds.union(this.activity.bounds.clone().applyMatrix4(this.turn.matrixWorld));
  if(bounds.isEmpty())return;
  const hasProp=!!this.props?.prop&&this.props.prop!=='none';
  if(c.framing!=='full'&&!hasProp&&c.action!=='sleep'&&!this.activity){
   const size=bounds.getSize(new THREE.Vector3());
   if(['human','animal'].includes(this.avatar.root.userData.anatomy))bounds.min.y=bounds.max.y-size.y*(c.framing==='portrait'?.55:.79);
  }
  const center=bounds.getCenter(new THREE.Vector3());
  const elevation=c.action==='work'?1.85:c.action==='read'?1.30:.52;
  this.camera.position.copy(center).add(new THREE.Vector3(0,elevation,8));this.camera.lookAt(center);this.camera.updateMatrixWorld(true);
  const projected=new THREE.Box3();
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])projected.expandByPoint(new THREE.Vector3(x,y,z).applyMatrix4(this.camera.matrixWorldInverse));
  const size=projected.getSize(new THREE.Vector3());
  const heightWorld=Math.max(size.y,size.x/aspect)*(this.activity?1.46:1.40)*(72/c.scale);
  const cx=(projected.min.x+projected.max.x)/2,cy=(projected.min.y+projected.max.y)/2;
  this.camera.left=cx-heightWorld*aspect/2;this.camera.right=cx+heightWorld*aspect/2;this.camera.top=cy+heightWorld/2;this.camera.bottom=cy-heightWorld/2;this.camera.updateProjectionMatrix();
 }
 render(time=0,assembly=1){
  if(this.reducedMotion||matchMedia('(prefers-reduced-motion: reduce)').matches)time=stillTime(this.config);
  this.lastTime=time;
  this.turn.scale.setScalar(1);this.turn.position.y=0;
  for(const part of this.assemblyParts||[]){part.object.position.copy(part.position);part.object.scale.copy(part.scale);}
  if(!this.avatar)return;const a=this.avatar,c=this.config,rest=a.root.userData;
  a.root.position.y=rest.restY;a.root.scale.copy(rest.restScale);a.root.rotation.copy(rest.restRotation);
  if(c.action==='bounce'){
   const v=Math.max(0,Math.sin(time*3.1));a.root.position.y+=v*.24;
  }else{
   const breath=Math.sin(time*(c.action==='sleep'?1.3:1.8));a.root.scale.y=rest.restScale.y*(1+breath*.008);
   if(c.action==='listen')a.root.rotation.z+=Math.sin(time*2)*.035;
   if(c.expression==='curious'||c.expression==='skeptical')a.root.rotation.z+=.055;
   if(c.expression==='shy')a.root.rotation.y+=.11;
   if(c.expression==='sleepy')a.root.rotation.z-=.04;
   if(c.expression==='expectant')a.root.rotation.x+=.045;
   if(c.expression==='panicked')a.root.rotation.x-=.08;
   if(c.expression==='laughing')a.root.rotation.x-=.06;
  }
  const blinkCycle=time%(c.action==='blink'?2.3:5.5),blink=Math.abs(blinkCycle-.17)<.16?Math.max(.07,Math.abs(blinkCycle-.17)/.16):1;
  for(const eye of a.eyeGroups)eye.scale.y=(c.expression==='closed'||c.expression==='wink'||['delighted','laughing'].includes(c.expression)||c.action==='sleep'||c.action==='work')?1:blink;
  if(a.tail&&c.action!=='sleep')a.tail.rotation.y=Math.sin(time*2.5)*.035;
  this.props?.tick(time);this.activity?.tick(time);
  if(assembly<1){
   // The character enters as one fitted assembly. Moving accessories and
   // hands independently tears headbands and breaks held-object contacts.
   const t=clamp(assembly,0,1),ease=1-Math.pow(1-t,3),overshoot=Math.sin(t*Math.PI)*.045;
   this.turn.scale.setScalar(Math.max(.001,ease+overshoot));this.turn.position.y=(1-ease)*.16;
  }
  this.renderer.render(this.scene,this.camera,{animationTime:time,assembly});
  if(!this.renderer.isSoftwareRenderer){this.renderedTime=time;this.renderedAssembly=assembly;}
 }
 dispose(){this.activity?.dispose();if(this.avatar)disposeRoot(this.avatar.root);this.environment?.dispose();this.scene.traverse(o=>{if(o.isLight)o.shadow?.dispose();});this.renderer.dispose();}
}

export class CharacterPreview{
 constructor(container,{onError=()=>{},onReady=()=>{}}={}){
  this.container=container;this.onError=onError;this.onReady=onReady;this.canvas=document.createElement('canvas');this.canvas.className='character-canvas';this.canvas.setAttribute('role','img');this.canvas.setAttribute('aria-label','当前配置的实时三维角色');container.append(this.canvas);
  this.motionPreference=matchMedia('(prefers-reduced-motion: reduce)');this.world=new RenderWorld(this.canvas);this.elapsed=0;this.lastTick=performance.now();this.assemblyStart=null;this.playing=!this.motionPreference.matches;this.visible=true;this.lastFrame=0;this.revision=0;
  if(this.world.renderer.isSoftwareRenderer)this.world.renderer.staticPreview=!this.playing;
  this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);
  this.intersection=new IntersectionObserver(([entry])=>{this.visible=entry.isIntersecting;});this.intersection.observe(container);
  this.contextLost=e=>{e.preventDefault();this.onError('实时预览暂时无法继续，请刷新页面恢复。你的配置仍然保留。');};this.canvas.addEventListener('webglcontextlost',this.contextLost);
  this.loop=now=>{
   if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);
   const dt=Math.min(.15,(now-this.lastTick)/1000);this.lastTick=now;
   if(!this.visible||document.hidden||this.capturing)return;
   if(this.playing&&!this.motionPreference.matches)this.elapsed+=dt;
   const assembling=this.assemblyStart!==null,assembly=assembling?clamp((now-this.assemblyStart)/920,0,1):1;
   if((!this.playing&&!assembling)||this.world.renderer._busy||now-this.lastFrame<(this.world.renderer.isSoftwareRenderer?95:25))return;
   this.lastFrame=now;this.world.render(this.elapsed,assembly);this.canvas.dataset.animationTime=Number(this.world.renderedTime??0).toFixed(3);
   if(assembly>=1&&assembling)this.assemblyStart=null;
  };this.raf=requestAnimationFrame(this.loop);
 }
 update(config){
  if(this.disposed)return;
  const key=visualKey(config);if(this.updateKey===key)return;this.updateKey=key;this.pending=structuredClone(config);this.revision++;if(this.updateFrame)return;
  this.updateFrame=requestAnimationFrame(async()=>{
   this.updateFrame=0;if(this.disposed)return;const revision=this.revision;this.canvas.dataset.previewStatus='loading';
   try{
    const changedAction=['action','family','shape','presetId'].some(key=>this.world.config?.[key]!==this.pending[key]);
    this.world.update(this.pending);if(changedAction)this.elapsed=stillTime(this.pending);
    this.canvas.dataset.revision=String(revision);
    for(const key of ['version','rendererVersion','family','shape','material','action','camera','framing','background','headScale','bodyWidth','motionStyle'])this.canvas.dataset[key]=String(this.pending[key]);
    for(const key of ['head','face','neck','prop'])this.canvas.dataset[key+'Accessory']=this.pending.accessories[key];
    this.resize();this.canvas.dataset.animationTime=Number(this.world.renderedTime??0).toFixed(3);
    if(this.wantsAssembly&&!this.world.reducedMotion&&!this.motionPreference.matches){this.wantsAssembly=false;this.assemblyStart=performance.now();}
    await this.world.renderer.flush?.();
    if(this.disposed||revision!==this.revision)return;
    this.canvas.dataset.renderedRevision=String(revision);this.canvas.dataset.previewStatus='ready';this.onReady();
   }catch(e){if(this.disposed||revision!==this.revision)return;this.canvas.dataset.previewStatus='failed';console.error('Character preview:',e);this.onError('这个角色暂时未能显示，请切换角色后重试。');}
  });
 }
 resize(){if(this.disposed)return;const c=this.pending||this.world.config;if(!c)return;const [aw,ah]=c.aspect.split(':').map(Number),rect=this.container.getBoundingClientRect(),ratio=aw/ah;let width=Math.max(1,rect.width),height=width/ratio;if(height>rect.height){height=rect.height;width=height*ratio;}this.canvas.style.width=width+'px';this.canvas.style.height=height+'px';this.world.fit(Math.round(width),Math.round(height));this.world.render(this.elapsed);}
 setPlaying(value){
  this.playing=value&&!this.motionPreference.matches&&!this.world.reducedMotion;this.lastTick=performance.now();
  if(this.world.renderer.isSoftwareRenderer){this.world.renderer.staticPreview=!this.playing;this.world.renderer.previewLimit=this.playing?800:960;}
  if(this.world.config){this.world.render(this.elapsed);this.canvas.dataset.animationTime=Number(this.world.renderedTime??0).toFixed(3);}
 }
 setReducedMotion(value){this.world.reducedMotion=!!value;if(value){this.elapsed=stillTime(this.world.config);this.setPlaying(false);}else if(this.world.config)this.resize();}
 // Explicit frame control for the local acceptance inspector. It uses the
 // same production scene and painted-frame contract as pause and capture.
 async seek(time,assembly=1){
  if(this.disposed)throw Error('预览已关闭');
  if(!Number.isFinite(time)||time<0||!Number.isFinite(assembly)||assembly<0||assembly>1)throw Error('帧位置无效');
  if(this.updateFrame||this.canvas.dataset.previewStatus!=='ready')throw Error('当前角色仍在载入');
  const revision=this.revision;this.setPlaying(false);this.assemblyStart=null;this.wantsAssembly=false;
  this.elapsed=time;this.world.render(time,assembly);await this.world.renderer.flush?.();
  if(this.disposed||revision!==this.revision)throw Error('预览已更新或关闭');
  this.canvas.dataset.animationTime=Number(this.world.renderedTime).toFixed(3);
  return {time:this.world.renderedTime,assembly:this.world.renderedAssembly??1};
 }
 assemble(){if(this.world.reducedMotion||matchMedia('(prefers-reduced-motion: reduce)').matches)return;this.wantsAssembly=true;if(!this.updateFrame){this.wantsAssembly=false;this.assemblyStart=performance.now();}}

 capture(size=1400,config=this.pending||this.world.config){
  const snapshot=structuredClone(config),revision=this.revision;
  const assertCurrent=()=>{if(this.disposed||revision!==this.revision)throw Error('预览已更新或关闭；已取消旧版本 PNG 导出');};
  if(this.disposed)return Promise.reject(Error('预览已关闭，无法导出 PNG'));
  if(!Number.isFinite(size)||size<1||size>8192)return Promise.reject(Error('PNG 导出尺寸无效'));
  if(!snapshot||this.canvas.dataset.previewStatus!=='ready'||this.updateFrame||visualKey(snapshot)!==visualKey(this.world.config)||!Number.isFinite(this.world.renderedTime))return Promise.reject(Error('角色预览尚未准备好，请等待当前帧完成'));
  // Capture the frame actually painted at click time, including assembly state.
  // CPU elapsed time may advance while an earlier frame is still in flight.
  const reducedMotion=this.world.reducedMotion||this.motionPreference.matches;
  const captureTime=this.world.renderedTime,captureAssembly=this.world.renderedAssembly??1;
  const request=(this.captureQueue||Promise.resolve()).catch(()=>{}).then(async()=>{
   let world;assertCurrent();this.capturing=true;
   try{
    const [aw,ah]=snapshot.aspect.split(':').map(Number),width=aw>=ah?size:Math.round(size*aw/ah),height=ah>=aw?size:Math.round(size*ah/aw);
    const canvas=document.createElement('canvas');world=new RenderWorld(canvas);world.reducedMotion=reducedMotion;
    world.renderer.highQuality=true;world.renderer.captureLimit=size;world.renderer.setPixelRatio(1);world.frame={width,height};world.update(snapshot);world.render(captureTime,captureAssembly);
    await world.renderer.flush?.();assertCurrent();
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));assertCurrent();
    if(!blob)throw Error('PNG 导出失败');return blob;
   }finally{world?.dispose();this.capturing=false;}
  });
  this.captureQueue=request;return request;
 }

 dispose(){if(this.disposed)return;this.disposed=true;this.revision++;cancelAnimationFrame(this.raf);cancelAnimationFrame(this.updateFrame);this.resizeObserver.disconnect();this.intersection.disconnect();this.world.dispose();this.canvas.remove();}
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
