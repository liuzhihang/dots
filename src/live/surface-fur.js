import * as THREE from 'three';
import {MeshSurfaceSampler} from 'three/addons/math/MeshSurfaceSampler.js';

// One geometric pile model for WebGL and the CPU renderer. Each instance is a
// short bent strand; its centerline is also exposed for analytic CPU coverage.
const UP=new THREE.Vector3(0,1,0),DOWN=new THREE.Vector3(0,-1,0);
function seeded(seed){let n=2166136261;for(const c of String(seed))n=Math.imul(n^c.charCodeAt(0),16777619);return()=>{n^=n<<13;n^=n>>>17;n^=n<<5;return(n>>>0)/4294967296;};}
function pileGeometry(length,radius,radialSegments=3) {
  // A triangular cross section keeps short pile light enough for the live
  // renderer while giving each strand a readable silhouette at page scale.
  const g=new THREE.CylinderGeometry(radius*.10,radius,length,radialSegments,4,true);g.translate(0,length/2,0);
  const position=g.attributes.position;
  for(let i=0;i<position.count;i++){const t=Math.max(0,Math.min(1,position.getY(i)/length));position.setX(i,position.getX(i)+length*.24*Math.sin(Math.PI*.9*t));position.setZ(i,position.getZ(i)+length*.12*t*t);}
  g.computeVertexNormals();g.computeBoundingBox();
  g.userData.fiberProfile=Array.from({length:5},(_,i)=>{const t=i/4;return[length*.24*Math.sin(Math.PI*.9*t),length*t,length*.12*t*t];});
  g.userData.fiberRadius=radius;g.userData.radialSegments=radialSegments;return g;
}
export function addFur(avatar,c,quality=1) {
  // The Grok baseline candidate is matte rubber, not a fuzzy blob. Keep this
  // guard at the renderer boundary as well as in the body material contract.
  if(c.catalogTier==='baseline'&&c.family==='grok')return;
  avatar.root.updateMatrixWorld(true);
  const targets=avatar.surfaces.slice(),coat=targets.find(m=>m.material.bumpMap)?.material;
  // A dry clay finish keeps a fine, slightly larger grain and broad highlights;
  // it remains visibly different from the smooth soft-rubber finish.
  for(const mesh of targets) {
    const material=mesh.material,kind=mesh.userData.surfaceMaterial||material.name||c.material;
    if(kind==='clay'&&!material.userData.clayFinish) {
      material.roughness=.96;material.bumpScale=.0036;
      if(material.bumpMap){material.bumpMap=material.bumpMap.clone();material.bumpMap.repeat.set(2.8,2.8);}
      material.userData.clayFinish=true;
    }
  }
  // A cloth beret/beanie needs its own fine pile instead of a plastic highlight.
  for(const name of ['head-beret','head-beanie'])avatar.root.getObjectByName(name)?.traverse(mesh=>{
    if(!mesh.isMesh||targets.includes(mesh))return;mesh.material=mesh.material.clone();mesh.material.name='micro';mesh.material.roughness=1;
    if(coat?.bumpMap){mesh.material.bumpMap=coat.bumpMap;mesh.material.bumpScale=.0012;}mesh.userData.surfaceMaterial='micro';targets.push(mesh);
  });
  const surfaces=targets.filter(mesh=>{
    const kind=mesh.userData.surfaceMaterial||mesh.material.name||c.material;
    let visible=true;for(let p=mesh;p;p=p.parent)if(!p.visible)visible=false;
    return ['plush','micro','fabric','knit','fiber'].includes(kind)&&visible&&!mesh.userData.skipProceduralPile;
  });
  const areas=surfaces.map(mesh=>{mesh.geometry.computeBoundingBox();const s=mesh.geometry.boundingBox.getSize(new THREE.Vector3()).multiply(mesh.scale);return Math.max(.012,2*(s.x*s.y+s.x*s.z+s.y*s.z));});
  const total=areas.reduce((a,b)=>a+b,0)||1,eyes=avatar.eyeGroups.map(g=>g.getWorldPosition(new THREE.Vector3()));
  surfaces.forEach((mesh,i)=>{
    const kind=mesh.userData.surfaceMaterial||mesh.material.name||c.material,textile=kind==='knit'||kind==='fabric'||kind==='fiber',micro=kind==='micro';
    const baselineMicro=c.catalogTier==='baseline'&&micro;
    const baselineDots=c.catalogTier==='baseline'&&c.family==='dots';
    if(!textile&&mesh.material.bumpMap)mesh.material.bumpScale=Math.min(mesh.material.bumpScale,baselineDots?.00035:micro?.0013:.0015);
    const density=baselineDots?28000:textile?30000:micro?100000:190000;
    const count=Math.max(80,Math.round(density*quality*areas[i]/total));
    // Plush needs visible, combed pile above a fine undercoat. Tiny surface
    // noise alone reads as painted plastic at the actual workbench scale.
    // Keep a separate much shorter profile for velvet and woven cloth.
    let length=textile?(kind==='fiber'?.018:.0050):micro?.0100:.031;
    if(baselineMicro)length=c.family==='meta-muse'?.0065:baselineDots?.036:.0080;
    const radius=textile?.00048:micro?(baselineDots?.0016:.00062):.0011;
    const geometry=pileGeometry(length,radius,baselineDots?5:3),pileColor=mesh.material.color.clone();
    const material=new THREE.MeshStandardMaterial({color:pileColor,roughness:baselineDots?.96:1,metalness:0,side:THREE.DoubleSide});
    if(baselineDots){material.emissive.copy(pileColor);material.emissiveIntensity=.12;}
    material.name='fine-pile';const fur=new THREE.InstancedMesh(geometry,material,count);fur.name='surface-fibers';fur.castShadow=false;fur.receiveShadow=!baselineDots;
    fur.userData.surfaceMaterial=kind;fur.userData.fiberProfile=geometry.userData.fiberProfile;fur.userData.fiberRadius=radius;fur.userData.fiberTones=new Float32Array(count);
    const random=seeded((c.randomSeed||'dot')+mesh.name+i),sampler=new MeshSurfaceSampler(mesh).setRandomGenerator(random).build();
    const p=new THREE.Vector3(),n=new THREE.Vector3(),flow=new THREE.Vector3(),side=new THREE.Vector3(),axis=new THREE.Vector3(),worldPoint=new THREE.Vector3(),o=new THREE.Object3D(),color=new THREE.Color(),surfaceColor=new THREE.Color(),spin=new THREE.Quaternion();
    for(let j=0;j<count;j++) {
      sampler.sample(p,n,surfaceColor);n.normalize();
      // Combed fibers have a tangent component even on the frontal surface.
      flow.copy(DOWN).addScaledVector(n,-DOWN.dot(n));if(flow.lengthSq()<.005)flow.set(1,0,0).addScaledVector(n,-n.x);flow.normalize();side.crossVectors(n,flow).normalize();
      const comb=Math.sin(p.x*6.7+p.y*3.1)*.16+Math.cos(p.z*5.4-p.y*2.2)*.09;
      flow.multiplyScalar(.94).addScaledVector(side,comb+(random()-.5)*(baselineDots?.30:.48)).normalize();
      if(baselineDots)axis.copy(n).multiplyScalar(.50).addScaledVector(flow,.86).normalize();
      else axis.copy(n).multiplyScalar(.63).addScaledVector(flow,.77).normalize();
      o.position.copy(p).addScaledVector(n,-length*.055);o.quaternion.setFromUnitVectors(UP,axis);spin.setFromAxisAngle(UP,random()*Math.PI*2);o.quaternion.multiply(spin);
      let localLength=baselineDots?.78+random()*.50:.64+random()*.52;
      worldPoint.copy(p).applyMatrix4(mesh.matrixWorld);
      for(const eye of eyes){const d=worldPoint.distanceToSquared(eye);if(d<.035)localLength*=.36+.64*Math.min(1,d/.035);}
      const girth=baselineDots?.82+random()*.32:.76+random()*.35;o.scale.set(girth,localLength,girth);o.updateMatrix();fur.setMatrixAt(j,o.matrix);
      const tone=baselineDots?.96+random()*.07:textile?.91+random()*.13:micro?.91+random()*.15:.82+random()*.36;
      fur.userData.fiberTones[j]=tone;color.copy(surfaceColor).multiplyScalar(tone);fur.setColorAt(j,color);
    }
    fur.instanceMatrix.needsUpdate=true;fur.instanceColor.needsUpdate=true;fur.frustumCulled=false;mesh.add(fur);
  });
}
