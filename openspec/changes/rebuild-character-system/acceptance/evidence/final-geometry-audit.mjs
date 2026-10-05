import * as THREE from '/Users/liuzhihang/workspace/dots/node_modules/three/build/three.module.js';
import {ACTIONS, FAMILIES, createCharacter, resolveCharacter, setCharacterValue} from '/Users/liuzhihang/workspace/dots/dist/studio-model.js';
import {buildAvatarBody} from '/Users/liuzhihang/workspace/dots/src/live/avatar-body.js';
import {decorateAvatar} from '/Users/liuzhihang/workspace/dots/src/live/avatar-props.js';
import {addFur} from '/Users/liuzhihang/workspace/dots/src/live/surface-fur.js';
import {createActivitySystem} from '/Users/liuzhihang/workspace/dots/src/live/activity-system.js';
import {writeFile, mkdir, readFile, stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {dirname} from 'node:path';

const OUT='/tmp/dot-character-rebuild-qa/final-geometry-audit.json';
const SCRIPT='/tmp/dot-character-rebuild-qa/final-geometry-audit.mjs';
const COMPLETE_COMMAND='cd /Users/liuzhihang/workspace/dots && node --expose-gc /tmp/dot-character-rebuild-qa/final-geometry-audit.mjs';
const AUDIT_STARTED_AT=new Date().toISOString();
const AUDIT_START=performance.now();
const TAU=Math.PI*2;
const ACTION_TIMES={
  idle:[0,.55,1.10], work:[0,Math.PI/4.2,TAU/4.2], sleep:[0,Math.PI/(2*1.3),TAU/1.3],
  listen:[0,Math.PI/4,Math.PI], flowers:[0,.5,1], magic:[0,Math.PI/1.4,TAU/1.4],
  camera:[0,.5,1], drink:[0,.5,1], read:[0,.5,1], bounce:[0,Math.PI/(2*3.1),TAU/3.1],
  wave:[0,Math.PI/3.2,TAU/3.2], blink:[0,.17,.34],
  thinking:[0,Math.PI/(2*3.4),TAU/3.4], processing:[0,Math.PI/(2*1.85),TAU/1.85],
  waiting:[0,Math.PI/(2*.9),TAU/.9], blocked:[0,Math.PI/50,.48], done:[0,.4,3.8]
};
const families=Object.keys(FAMILIES), actions=Object.keys(ACTIONS);
const identityPatterns=[/^(meta-hood|meta-face)/,/^hair-/,/^animal-head$/,/^muzzle$/,/^nose$/,/^outer-ear$/,/^inner-ear$/,/^blob-/,/^rounded-tail$/,/^tail-fin$/];
const finite3=a=>Array.isArray(a)&&a.length===3&&a.every(Number.isFinite);
const visibleChain=o=>{for(let p=o;p;p=p.parent)if(!p.visible)return false;return true;};
const vector=(v)=>v?.toArray?.().map(n=>Number(n.toFixed(6)))||null;

function geometryAudit(root) {
  const out={meshCount:0,indexedMeshCount:0,nonIndexedMeshCount:0,positionVertexCount:0,indexCount:0,
    missingPosition:[],missingNormal:[],invalidIndices:[],nonFinitePositions:[],nonFiniteNormals:[],nonFiniteInstanceMatrices:[],nonFiniteInstanceColors:[]};
  root.traverse(o=>{
    if(!o.isMesh||!o.geometry)return;
    out.meshCount++;
    const g=o.geometry,p=g.attributes.position,n=g.attributes.normal,idx=g.index;
    if(!p){out.missingPosition.push(o.name||o.type);return;}
    out.positionVertexCount+=p.count;
    if(!n)out.missingNormal.push(o.name||o.type);
    else for(let i=0;i<n.count;i++)if(!Number.isFinite(n.getX(i))||!Number.isFinite(n.getY(i))||!Number.isFinite(n.getZ(i))){out.nonFiniteNormals.push(`${o.name||o.type}@${i}`);break;}
    for(let i=0;i<p.count;i++)if(!Number.isFinite(p.getX(i))||!Number.isFinite(p.getY(i))||!Number.isFinite(p.getZ(i))){out.nonFinitePositions.push(`${o.name||o.type}@${i}`);break;}
    if(idx){out.indexedMeshCount++;out.indexCount+=idx.count;for(let i=0;i<idx.count;i++){const v=idx.getX(i);if(!Number.isInteger(v)||v<0||v>=p.count){out.invalidIndices.push(`${o.name||o.type}@${i}=${v}`);break;}}}
    else out.nonIndexedMeshCount++;
    if(o.isInstancedMesh){const a=o.instanceMatrix?.array||[];for(let i=0;i<a.length;i++)if(!Number.isFinite(a[i])){out.nonFiniteInstanceMatrices.push(`${o.name||o.type}@${i}`);break;}
      const c=o.instanceColor?.array;if(c)for(let i=0;i<c.length;i++)if(!Number.isFinite(c[i])){out.nonFiniteInstanceColors.push(`${o.name||o.type}@${i}`);break;}}
  });
  out.valid=out.meshCount>0&&!out.missingPosition.length&&!out.missingNormal.length&&!out.invalidIndices.length&&!out.nonFinitePositions.length&&!out.nonFiniteNormals.length&&!out.nonFiniteInstanceMatrices.length&&!out.nonFiniteInstanceColors.length;
  return out;
}
function setPoseLikePreview(avatar,c){
  const human=avatar.root.userData.anatomy==='human',animal=avatar.root.userData.anatomy==='animal';
  if(c.action==='sleep'){
    for(const [i,arm] of avatar.arms.entries()){arm.rotation.z=(i?1:-1)*.62;arm.rotation.x=-.62;}
    for(const [i,leg] of avatar.legs.entries()){leg.position.y+=.10;leg.position.z+=.10;leg.rotation.z=(i?1:-1)*.22;}
    if(human||animal){avatar.head.rotation.z=.14;avatar.head.rotation.x=.08;avatar.head.position.y-=human?.16:.28;avatar.torso.scale.y=animal?.92:1;avatar.root.rotation.z=human?-.78:-1.05;avatar.root.rotation.y=-.10;}
    else{avatar.root.scale.y=.85;avatar.root.scale.x=1.05;avatar.root.rotation.z=-.12;}
  }else if(c.pose==='sit'&&(human||animal)){
    avatar.torso.scale.y=.86;avatar.head.position.y-=.17;for(const arm of avatar.arms)arm.position.y-=.17;for(const leg of avatar.legs){leg.position.z+=.24;leg.scale.z=1.18;}
  }else if(c.pose==='sit')avatar.root.scale.set(1.06,.87,1.03);
  else if(c.pose==='chin')avatar.head.rotation.z=.10;
  if(['work','read'].includes(c.action)){avatar.head.rotation.x=.15;avatar.head.position.z+=.025;if(c.action==='work')avatar.head.rotation.y=-.08;}
  if(c.action==='magic'){avatar.head.rotation.y=.16;avatar.head.rotation.x=-.035;}
  if(c.action==='camera')avatar.head.rotation.x=.035;
  avatar.root.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(avatar.root);
  avatar.root.position.y-=bounds.min.y;const data=avatar.root.userData;
  data.restY=avatar.root.position.y;data.restRotation=avatar.root.rotation.clone();data.restScale=avatar.root.scale.clone();
}
function liveSample(avatar,c,props,activity,turn,assembly,t){
  for(const p of assembly){p.object.position.copy(p.position);p.object.scale.copy(p.scale);}
  const root=avatar.root,rest=root.userData;root.position.y=rest.restY;root.scale.copy(rest.restScale);root.rotation.copy(rest.restRotation);
  if(c.action==='bounce')root.position.y+=Math.max(0,Math.sin(t*3.1))*.24;
  else {
    const breath=Math.sin(t*(c.action==='sleep'?1.3:1.8));root.scale.y=rest.restScale.y*(1+breath*.008);
    if(c.action==='listen')root.rotation.z+=Math.sin(t*2)*.035;
    if(c.expression==='curious'||c.expression==='skeptical')root.rotation.z+=.055;
    if(c.expression==='shy')root.rotation.y+=.11;
    if(c.expression==='sleepy')root.rotation.z-=.04;
    if(c.expression==='expectant')root.rotation.x+=.045;
    if(c.expression==='panicked')root.rotation.x-=.08;
    if(c.expression==='laughing')root.rotation.x-=.06;
  }
  const cycle=t%(c.action==='blink'?2.3:5.5),blink=Math.abs(cycle-.17)<.16?Math.max(.07,Math.abs(cycle-.17)/.16):1;
  for(const eye of avatar.eyeGroups)eye.scale.y=(c.expression==='closed'||c.expression==='wink'||['delighted','laughing'].includes(c.expression)||c.action==='sleep'||c.action==='work')?1:blink;
  if(avatar.tail&&c.action!=='sleep')avatar.tail.rotation.y=Math.sin(t*2.5)*.035;
  props?.tick(t);activity?.tick(t);turn.updateMatrixWorld(true);root.updateMatrixWorld(true);
  let badWorldMatrices=0,visibleMeshes=0;
  turn.traverse(o=>{if(!o.matrixWorld.elements.every(Number.isFinite))badWorldMatrices++;if(o.isMesh&&visibleChain(o))visibleMeshes++;});
  return {t,visibleMeshes,badWorldMatrices,worldFinite:badWorldMatrices===0};
}
function limbSummary(avatar){
  const arms=(avatar.arms||[]).filter(visibleChain).map(o=>o.name);
  const legs=(avatar.legs||[]).filter(visibleChain).map(o=>o.name);
  let handGroups=0,wingTipGroups=0;
  avatar.root.traverse(o=>{if(!o.isGroup||!visibleChain(o))return;if(/^hand-\d+$/.test(o.name))handGroups++;if(/^wing-tip-\d+$/.test(o.name))wingTipGroups++;});
  return {visibleArmGroups:arms,visibleArmCount:arms.length,visibleLegGroups:legs,visibleLegCount:legs.length,visibleHandGroups:handGroups,visibleWingTipGroups:wingTipGroups};
}
function fitSummary(avatar,propGroup){
  const fits=propGroup?.userData?.handContactFits;
  if(!Array.isArray(fits))return {present:false,validCount:0,fits:[]};
  const rows=fits.map((fit,i)=>{
    if(!fit)return {index:i,valid:false};
    const pad=new THREE.Vector3(...fit.target).distanceTo(new THREE.Vector3(...fit.surface));
    const arm=avatar.arms[i],palm=arm?.getObjectByName(`hand-${i}`)||arm?.getObjectByName(`wing-tip-${i}`);
    const targetWorld=avatar.root.localToWorld(new THREE.Vector3(...fit.target));
    const palmWorld=palm?.getWorldPosition(new THREE.Vector3());
    const centerError=palmWorld?targetWorld.distanceTo(palmWorld):null;
    return {index:i,valid:finite3(fit.target)&&finite3(fit.surface)&&finite3(fit.normal),surfaceObject:fit.object||'(unnamed mesh)',
      surfaceOffset:+pad.toFixed(6),targetPalmCenterError:centerError===null?null:+centerError.toFixed(6),
      target:fit.target.map(n=>+n.toFixed(5)),surface:fit.surface.map(n=>+n.toFixed(5)),normal:fit.normal.map(n=>+n.toFixed(5))};
  });
  return {present:true,validCount:rows.filter(x=>x.valid).length,fitSlots:rows.length,fits:rows};
}
function meshNames(root){const names=[];root.traverse(o=>{if(o.isMesh&&identityPatterns.some(r=>r.test(o.name)))names.push(o.name);});return [...new Set(names)].sort();}
function keyFeatureSummary(avatar,props,c){
  const root=avatar.root,head=props.parts.find(o=>o.name.startsWith('head-'))||null;
  let earcups=[];head?.traverse(o=>{if(o.name.startsWith('earcup-'))earcups.push({name:o.name,contactKind:o.userData.contactFit?.kind||null,point:o.userData.contactFit?.point||null,normal:o.userData.contactFit?.normal||null});});
  const neck=props.parts.find(o=>o.name.startsWith('neck-'))||null;
  const neckFit=neck?.userData.contactFit||null;
  const drapes=[];neck?.traverse(o=>{if(o.isMesh&&o.name==='scarf-drape')drapes.push({vertices:o.geometry.attributes.position?.count||0,indexCount:o.geometry.index?.count||0});});
  const face=props.parts.find(o=>o.name.startsWith('face-'))||null;
  let lens=[],faceTubeGeometries=[];face?.traverse(o=>{if(!o.isMesh)return;if(o.name==='eyewear-lens'){const mat=Array.isArray(o.material)?o.material[0]:o.material;lens.push({vertexCount:o.geometry.attributes.position?.count||0,transparent:!!mat?.transparent,opacity:mat?.opacity??null,depthWrite:mat?.depthWrite??null,side:mat?.side??null});}if(o.geometry?.type==='TubeGeometry')faceTubeGeometries.push({name:o.name||'(unnamed)',tubularSegments:o.geometry.parameters?.tubularSegments??null});});
  const bandGeometries=[];head?.traverse(o=>{if(o.isMesh&&o.geometry?.type==='TubeGeometry')bandGeometries.push({type:o.geometry.type,radialSegments:o.geometry.parameters?.radialSegments??null,tubularSegments:o.geometry.parameters?.tubularSegments??null});});
  return {
    headAccessory:c.accessories.head,headGroup:head?.name||null,headContactKind:head?.userData.contactFit?.kind||null,
    headphones:{earcupCount:earcups.length,earcups,bandGeometryCount:bandGeometries.length,bandGeometries},
    hatContact:head?.userData.contactFit?.kind==='crown'?{sampleCount:head.userData.contactFit.samples||0,min:head.userData.contactFit.min,max:head.userData.contactFit.max}:null,
    faceAccessory:c.accessories.face,faceGroup:face?.name||null,eyeGroupCount:avatar.eyeGroups.length,lenses:lens,
    bridgePointCount:face?.userData.bridgeFit?.length||0,templeCount:face?.userData.temples?.length||0,faceTubeGeometries,
    neckAccessory:c.accessories.neck,neckGroup:neck?.name||null,neckContactKind:neckFit?.kind||null,
    neckContactSamples:neckFit?.points?.length||0,neckContactHits:neckFit?.points?.filter(Boolean).length||0,
    scarfDrapes:drapes,identityPartNames:meshNames(root)
  };
}
function contactGapAtSnapshots(avatar,propGroup,poses){
  if(!propGroup?.userData?.handContactFits)return poses.map(()=>null);
  return poses.map(()=>fitSummary(avatar,propGroup));
}
function caseRun(family,action,raw,includeFur=true){
  const sourceProp=raw.accessories.prop;
  const resolved=resolveCharacter(raw),c=resolved.config;
  const avatar=buildAvatarBody(c),props=decorateAvatar(avatar,c);setPoseLikePreview(avatar,c);
  const turn=new THREE.Group();turn.rotation.y=c.camera==='side'?Math.PI*.43:c.camera==='threeQuarter'?.33:c.pose==='side'?.30:0;turn.add(avatar.root);
  if(includeFur)addFur(avatar,c,1);
  const activity=createActivitySystem(avatar,c);if(activity)turn.add(activity.group);
  const assembly=[avatar.torso,avatar.head,...avatar.legs,...avatar.arms,...props.parts].filter((x,i,a)=>x&&a.indexOf(x)===i).map(object=>({object,position:object.position.clone(),scale:object.scale.clone()}));
  turn.updateMatrixWorld(true);
  const prop=props.parts.find(o=>o.name.startsWith('prop-'))||null;
  const geom=geometryAudit(turn),limbs=limbSummary(avatar),features=keyFeatureSummary(avatar,props,c),times=ACTION_TIMES[action]||[0,.5,1];
  const poseResults=times.map(t=>{
    const pose=liveSample(avatar,c,props,activity,turn,assembly,t);
    pose.handContact=fitSummary(avatar,prop);return pose;
  });
  const worldContacts=poseResults.map(p=>({t:p.t,...p.handContact}));
  return {family,presetId:raw.presetId,action,poseTimesSeconds:times,sourcePropBeforeResolve:sourceProp,
    savedIntentPreserved:raw.accessories.prop===sourceProp,effectivePropAfterResolve:c.accessories.prop,resolveAdjustments:resolved.adjustments,
    propGroup:prop?.name||null,handContact:fitSummary(avatar,prop),limbs,features,geometry:geom,poses:poseResults,
    handContactAcrossPoses:worldContacts,valid:geom.valid&&poseResults.every(p=>p.worldFinite)};
}
function componentProbes(){
  const specs=[
    {id:'humans-beret',family:'humans',action:'idle',head:'beret',face:'none',neck:'none'},
    {id:'grok-listen-headphones-and-clear-glasses',family:'grok',action:'listen',head:'none',face:'round',neck:'none'},
    {id:'dots-monocle',family:'dots',action:'idle',head:'headphones',face:'monocle',neck:'none'},
    {id:'dots-dark-sunglasses',family:'dots',action:'idle',head:'headphones',face:'sunglasses',neck:'none'},
    {id:'meta-muse-headphones-and-scarf',family:'meta-muse',action:'idle',head:'headphones',face:'none',neck:'scarf'},
    {id:'animals-scarf',family:'animals',action:'idle',head:'none',face:'none',neck:'scarf'}
  ];
  return specs.map(spec=>{
    const base=createCharacter(spec.family);let raw=setCharacterValue(base,'accessories.head',spec.head);
    raw=setCharacterValue(raw,'accessories.face',spec.face);raw=setCharacterValue(raw,'accessories.neck',spec.neck);
    raw=setCharacterValue(raw,'action',spec.action);
    const run=caseRun(spec.family,spec.action,raw,false);return {id:spec.id,...run};
  });
}
function readAngleCases(){
  const views=[['front',0],['threeQuarter',.33],['side',Math.PI*.43]];
  return families.flatMap(family=>views.map(([camera,yaw])=>{
    const raw=setCharacterValue(createCharacter(family),'action','read');raw.camera=camera;
    const row=caseRun(family,'read',raw,true);
    return {family,camera,yaw:+yaw.toFixed(6),poseTimesSeconds:row.poseTimesSeconds,
      geometryValid:row.geometry.valid,fitSlots:row.handContact.fitSlots,validFits:row.handContact.validCount,
      maxPalmCenterError:Math.max(0,...row.handContactAcrossPoses.flatMap(sample=>sample.fits.filter(f=>f.valid).map(f=>f.targetPalmCenterError||0))),
      surfaceOffsets:row.handContact.fits.filter(f=>f.valid).map(f=>f.surfaceOffset),visibleArms:row.limbs.visibleArmCount,
      visibleLegs:row.limbs.visibleLegCount,poses:row.poses.map(p=>({t:p.t,worldFinite:p.worldFinite,visibleMeshes:p.visibleMeshes}))};
  }));
}

const actionCases=[];const familySummary=[];
for(const family of families){
  const baseline=createCharacter(family),before=baseline.accessories.prop,groupRows=[];
  for(const action of actions){const raw=setCharacterValue(baseline,'action',action);const row=caseRun(family,action,raw,true);actionCases.push(row);groupRows.push(row);}
  familySummary.push({family,presetId:baseline.presetId,shape:baseline.shape,material:baseline.material,
    sourceProp:before,cases:groupRows.length,failedCases:groupRows.filter(x=>!x.valid).map(x=>x.action),
    missingContactCases:groupRows.filter(x=>x.propGroup&&x.handContact.validCount===0).map(x=>x.action),
    actionInventory:groupRows.map(x=>({action:x.action,sourceProp:x.sourcePropBeforeResolve,effectiveProp:x.effectivePropAfterResolve,
      targetFits:x.handContact.validCount,fitSlots:x.handContact.fitSlots,visibleArms:x.limbs.visibleArmCount,visibleLegs:x.limbs.visibleLegCount}))});
  global.gc?.();
}
const probes=componentProbes();
const readAngles=readAngleCases();
const invalid=actionCases.filter(x=>!x.valid),issues=[];
for(const row of actionCases){
  if(!row.geometry.valid)issues.push({family:row.family,action:row.action,kind:'geometry',details:{invalidIndices:row.geometry.invalidIndices.slice(0,6),nonFiniteNormals:row.geometry.nonFiniteNormals.slice(0,6),nonFinitePositions:row.geometry.nonFinitePositions.slice(0,6),missingNormals:row.geometry.missingNormal.slice(0,6)}});
  const expectedFitCount=row.effectivePropAfterResolve==='wand'?1:2;
  if(row.propGroup&&row.handContact.validCount<expectedFitCount)issues.push({family:row.family,action:row.action,kind:'hand-contact-incomplete',validFits:row.handContact.validCount,expectedFits:expectedFitCount,slots:row.handContact.fitSlots});
  for(const p of row.poses)if(!p.worldFinite)issues.push({family:row.family,action:row.action,kind:'non-finite-world-matrix',time:p.t});
}
const sourceFiles=['src/live/avatar-body.js','src/live/avatar-props.js','src/live/surface-fur.js','src/live/activity-system.js','src/live/live-preview.js','dist/studio-model.js'];
const sourceFingerprints={};
for(const relativePath of sourceFiles){const bytes=await readFile(`/Users/liuzhihang/workspace/dots/${relativePath}`),info=await stat(`/Users/liuzhihang/workspace/dots/${relativePath}`);sourceFingerprints[relativePath]={sha256:createHash('sha256').update(bytes).digest('hex'),mtime:new Date(info.mtimeMs).toISOString(),bytes:info.size};}
const artifact={
  generatedAt:new Date().toISOString(),execution:{scriptPath:SCRIPT,completeCommand:COMPLETE_COMMAND,workingDirectory:process.cwd(),nodeVersion:process.version,startedAt:AUDIT_STARTED_AT,durationMs:Math.round(performance.now()-AUDIT_START),sourceFingerprints},scope:{mode:'read-only Node geometry/runtime-transform diagnostic; no browser render or visual acceptance',sourceFiles,families,actions,caseCount:actionCases.length,poseSampleCount:actionCases.reduce((n,x)=>n+x.poses.length,0),furAddedToEveryActionCase:true,
    poseSampling:{description:'Copied current LivePreview.setPose/render transform order; reset assembly part positions/scales for every sample; activity and prop tick run at each time; static actions use 0/.5/1s, animated actions use their code-derived phase landmarks.',timesByAction:ACTION_TIMES},
    humanBoundary:'Geometry/raycast metadata cannot establish that accessories look natural in the rendered page. Root separately owns WebGL/browser visual acceptance.'},
  summary:{actionCount:actions.length,familyCount:families.length,caseCount:actionCases.length,poseSampleCount:actionCases.reduce((n,x)=>n+x.poses.length,0),readAngleCaseCount:readAngles.length,invalidGeometryCaseCount:invalid.length,issueCount:issues.length,allGeometryFiniteAndInRange:invalid.length===0,readAngleContactsComplete:readAngles.every(x=>x.validFits===2&&x.geometryValid&&x.maxPalmCenterError<.00001)},
  families:familySummary,actionCases,readAngleCases:readAngles,componentProbes:probes,issues,
  pageEvidence:{rootProvidedWebGLScreenshot:'/tmp/dot-character-rebuild-qa/screens/meta-muse-scarf-fixed-front.jpg',usedForGeometryAudit:false,visualAcceptance:'not claimed by this artifact'}
};
await mkdir(dirname(OUT),{recursive:true});await writeFile(OUT,JSON.stringify(artifact,null,2)+'\n');
console.log(JSON.stringify({out:OUT,summary:artifact.summary,families:familySummary.map(x=>({family:x.family,failedCases:x.failedCases,missingContactCases:x.missingContactCases})),componentProbes:probes.map(x=>({id:x.id,head:x.features.headGroup,hat:x.features.hatContact,face:x.features.faceAccessory,lenses:x.features.lenses.length,neck:x.features.neckContactKind,drapes:x.features.scarfDrapes.length,handFits:x.handContact.validCount,valid:x.valid})),issuePreview:issues.slice(0,20)},null,2));
