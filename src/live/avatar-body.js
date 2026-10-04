import * as THREE from 'three';

// Parametric, self-contained studio character. Geometry is shared within each
// avatar, so the owner may dispose the complete root without affecting another.
const TAU = Math.PI * 2, UP = new THREE.Vector3(0, 1, 0);
const ANIMALS = new Set(['shiba','cat','rabbit','fox','panda','bear','otter','capybara','axolotl','penguin','owl','hedgehog']);
const SHAPE_CACHE = new Map();
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const v3 = a => new THREE.Vector3(...a);
const tint = (hex, factor) => new THREE.Color(hex).multiplyScalar(factor);
const mix = (a, b, t) => new THREE.Color(a).lerp(new THREE.Color(b), t);
const rand = n => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

function mergeGeometries(parts) {
  const positions = [], normals = [], uvs = [], indices = [];
  for (const part of parts) {
    const g = part, offset=positions.length/3;
    positions.push(...g.attributes.position.array);
    normals.push(...g.attributes.normal.array);
    if (g.attributes.uv) uvs.push(...g.attributes.uv.array);
    if(g.index)for(const index of g.index.array)indices.push(index+offset);
    else for(let i=0;i<g.attributes.position.count;i++)indices.push(offset+i);
    part.dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  if (uvs.length === positions.length / 3 * 2) out.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  out.setIndex(indices);
  out.computeBoundingSphere();
  return out;
}

// A closed outline lofted into a substantial, softly inflated volume. It is
// continuous at the front and back poles, not a flat extrusion or a billboard.
function pillowGeometry(name, points, depth = .72, fullness = .78) {
  const key = name + ':' + depth + ':' + fullness;
  if (SHAPE_CACHE.has(key)) return SHAPE_CACHE.get(key).clone();
  let p = points.map(([x,y]) => new THREE.Vector3(x,y,0));
  const area = p.reduce((s,q,i) => s + q.x*p[(i+1)%p.length].y-p[(i+1)%p.length].x*q.y, 0);
  if (area < 0) p.reverse();
  const curve = new THREE.CatmullRomCurve3(p, true, 'catmullrom', .35);
  const around = 96, rings = 40, pos = [], uv = [], indices = [];
  for (let j=0; j<=rings; j++) {
    const t = j/rings*Math.PI, r = Math.pow(Math.sin(t), fullness);
    for (let i=0; i<=around; i++) {
      const q = curve.getPoint(i/around);
      pos.push(q.x*r, q.y*r, depth*Math.cos(t)); uv.push(i/around,j/rings);
      if (i<around && j<rings) {
        const a=j*(around+1)+i, b=a+around+1;
        indices.push(a,b,a+1,b,b+1,a+1);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
  g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2)); g.setIndex(indices); g.computeVertexNormals();
  const ns=g.attributes.normal;
  for(let j=0;j<=rings;j++) {
    const a=j*(around+1),b=a+around;
    if(j===0||j===rings) for(let i=a;i<=b;i++) ns.setXYZ(i,0,0,j===0?1:-1);
    else { const n=new THREE.Vector3().fromBufferAttribute(ns,a).add(new THREE.Vector3().fromBufferAttribute(ns,b)).normalize();ns.setXYZ(a,n.x,n.y,n.z);ns.setXYZ(b,n.x,n.y,n.z); }
  }
  g.computeBoundingBox(); g.computeBoundingSphere(); SHAPE_CACHE.set(key,g); return g.clone();
}

function outline(name) {
  const circle = (power=1,n=16) => Array.from({length:n},(_,i) => {
    const a=i/n*TAU, x=Math.cos(a), y=Math.sin(a);
    return [Math.sign(x)*Math.abs(x)**power,Math.sign(y)*Math.abs(y)**power];
  });
  const polygon = n => Array.from({length:n},(_,i)=>[Math.sin(i/n*TAU),Math.cos(i/n*TAU)]);
  const shapes = {
    dumpling:[[0,1.03],[-.55,.94],[-.96,.58],[-1.15,-.13],[-1.04,-.65],[-.60,-.94],[0,-.98],[.66,-.94],[1.09,-.60],[1.17,-.08],[.93,.63],[.51,.95]],
    bean:[[-.14,1],[-.74,.86],[-1,.26],[-.85,-.5],[-.29,-.99],[.51,-.94],[.98,-.45],[.77,.17],[.30,.39],[.28,.87]],
    cloud:[[-1,-.58],[-1.28,-.05],[-1.04,.45],[-.62,.43],[-.47,.85],[0,1],[.52,.70],[.57,.34],[.97,.42],[1.28,-.05],[1.02,-.65],[.43,-.83],[-.36,-.82]],
    drop:[[0,1.2],[-.26,.93],[-.55,.45],[-.94,-.08],[-1,-.59],[-.63,-.95],[0,-1],[.65,-.94],[1,-.55],[.92,-.08],[.50,.55],[.22,1.02]],
    arch:[[0,1],[-.65,.92],[-.96,.52],[-1,-.12],[-.99,-.71],[-.75,-.97],[-.36,-.94],[0,-.79],[.36,-.94],[.75,-.97],[.99,-.71],[1,-.12],[.96,.52],[.65,.92]],
    capsule:[[0,1.18],[-.57,.97],[-.75,.49],[-.75,-.50],[-.55,-1],[0,-1.18],[.56,-1],[.75,-.50],[.75,.49],[.57,.97]],
    pebble:[[0,1],[-.66,.87],[-1.11,.23],[-1,-.49],[-.37,-.91],[.45,-.95],[1.08,-.45],[1.03,.27],[.55,.84]],
    triangle:[[0,1.04],[-.32,.76],[-.97,-.43],[-1,-.78],[-.78,-.94],[.76,-.94],[1,-.79],[.97,-.43],[.32,.76]],
    heart:[[0,.52],[-.42,.94],[-.86,.87],[-1,.42],[-.75,-.12],[0,-1],[.75,-.12],[1,.42],[.86,.87],[.42,.94]],
    ghost:[[0,1],[-.62,.86],[-.96,.34],[-1,-.80],[-.77,-1],[-.47,-.81],[-.16,-1],[.17,-.81],[.48,-1],[.78,-.81],[1,-.92],[.98,.34],[.61,.86]],
    diamond:[[0,1.12],[-.28,.84],[-1,.11],[-.92,-.16],[0,-1.12],[.92,-.16],[1,.11],[.28,.84]],
    star:Array.from({length:10},(_,i)=>{const a=i/10*TAU,r=i%2?.56:1.13;return[Math.sin(a)*r,Math.cos(a)*r];}),
    hexagon:polygon(6), roundedcube:circle(.36), sphere:circle(), sprout:circle(), frog:circle(), twin:circle(),
  };
  return shapes[name] || shapes.dumpling;
}

function surfaceTexture(kind) {
  const n=128, bytes=new Uint8Array(n*n*4);
  for(let y=0;y<n;y++)for(let x=0;x<n;x++) {
    const noise=rand(x+y*n), knit=kind==='knit', woven=kind==='fabric';
    const weave=knit ? Math.sin(x*.72+Math.sin(y*.33)*1.8)*Math.cos(y*.33) : woven ? Math.sin(x*1.57)*Math.sin(y*1.57) : 0;
    const value=clamp(128+(noise-.5)*(knit?23:34)+weave*(knit?66:woven?37:0),0,255),i=(y*n+x)*4;
    bytes[i]=bytes[i+1]=bytes[i+2]=value; bytes[i+3]=255;
  }
  const t=new THREE.DataTexture(bytes,n,n,THREE.RGBAFormat);t.needsUpdate=true;
  t.wrapS=t.wrapT=THREE.RepeatWrapping;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;t.repeat.set(kind==='knit'?3:5,kind==='knit'?3:5);return t;
}

export function buildAvatarBody(input={}) {
  const c={shape:'dumpling',material:'plush',eyes:'softOval',expression:'calm',brows:'none',mouth:'none',eyeScale:1,eyeSpacing:1,headScale:1,bodyWidth:1,limbs:'auto',hair:'short-curly',...input};
  c.colors={body:'#299CF3',secondary:'#FFF0D5',eyes:'#172131',skin:'#EBC4A6',hair:'#523729',clothing:'#2C8D82',...input.colors};
  const root=new THREE.Group(),head=new THREE.Group(),torso=new THREE.Group(),face=new THREE.Group();
  root.name='avatar-body';head.name='head';torso.name='torso';face.name='face';root.add(torso,head);head.add(face);
  const surfaces=[],arms=[],legs=[],eyeGroups=[],localGeometry=new Map(),materialCache=new Map(),textureCache=new Map();
  const h=clamp(Number(c.headScale)||1,.65,1.5),w=clamp(Number(c.bodyWidth)||1,.65,1.5);
  let tail=null, faceTargets=[],faceLayout={eyeX:.30,eyeY:.15,mouthY:-.21,size:1},handPositions=[];
  const geometry=(key,fn)=>{if(!localGeometry.has(key))localGeometry.set(key,fn());return localGeometry.get(key);};
  const sphere=()=>geometry('sphere',()=>new THREE.SphereGeometry(1,40,28));
  function material(color,kind=c.material) {
    const hex=new THREE.Color(color).getHexString(),key=hex+':'+kind;
    if(materialCache.has(key))return materialCache.get(key);
    const roughness={rubber:.71,plush:.97,micro:.93,clay:.89,skin:.80,hair:.74,fiber:.90,knit:.99,fabric:.95,eye:.26,nose:.48};
    const m=new THREE.MeshStandardMaterial({color,roughness:roughness[kind]??.88,metalness:0});m.name=kind;
    if(!['eye','nose','hair'].includes(kind)) {
      if(!textureCache.has(kind))textureCache.set(kind,surfaceTexture(kind));
      m.bumpMap=textureCache.get(kind);m.bumpScale={rubber:.002,skin:.0017,micro:.004,plush:.0055,clay:.003,knit:.013,fabric:.005,fiber:.004}[kind]??.003;
    }
    materialCache.set(key,m);return m;
  }
  const bodyMat=material(c.colors.body),secondaryMat=material(c.colors.secondary),darkMat=material(tint(c.colors.body,.24));
  const eyeMat=material(c.colors.eyes,c.eyes==='capsule'?'rubber':'eye'),noseMat=material(tint(c.colors.eyes,.88),'nose');
  function add(parent,geo,mat,pos=[0,0,0],scale=[1,1,1],fur=false,name='') {
    const mesh=new THREE.Mesh(geo,mat);mesh.position.set(...pos);mesh.scale.set(...scale);mesh.castShadow=true;mesh.receiveShadow=true;mesh.name=name;parent.add(mesh);
    if(fur){mesh.userData.surfaceMaterial=mat.name;mesh.userData.furLength=mat.name==='micro'?.011:.024;surfaces.push(mesh);}return mesh;
  }
  const ell=(p,pos,size,mat=bodyMat,fur=true,name='')=>add(p,sphere(),mat,pos,size,fur,name);
  function tube(p,points,radius,mat,segments=24,closed=false,name='') {
    const path=new THREE.CatmullRomCurve3(points.map(v3),closed,'catmullrom',.35);
    return add(p,new THREE.TubeGeometry(path,segments,radius,7,closed),mat,[0,0,0],[1,1,1],false,name);
  }
  function pillow(p,name,points,depth,pos,size,mat=bodyMat,fur=true) {
    return add(p,geometry(name+':'+depth,()=>pillowGeometry(name,points,depth)),mat,pos,size,fur,name);
  }
  function arm(side,shoulder,length,radius,mat=bodyMat,handMat=mat,kind='paw') {
    const group=new THREE.Group();group.name=side<0?'arm-left':'arm-right';group.position.set(...shoulder);root.add(group);
    const hand=[side*.06,-length,.065];
    ell(group,[side*.035,-length*.43,.015],[radius,length*.64,radius*.93],mat,true,'upper-arm');
    ell(group,hand,[radius*1.05,radius*.82,radius*1.1],handMat,true,kind);
    if(kind==='hand')ell(group,[-side*radius*.79,-length+.025,.108],[radius*.35,radius*.49,radius*.39],handMat,false,'thumb');
    arms.push(group);handPositions.push(v3(hand).add(v3(shoulder)));return group;
  }
  function paw(side,x,y,z,size,mat=bodyMat) {
    const group=new THREE.Group();group.name=side<0?'leg-left':'leg-right';group.position.set(x,y,z);root.add(group);
    ell(group,[0,0,0],size,mat,true,'hind-paw');legs.push(group);return group;
  }
  function ear(side,kind,pos,size,mat=bodyMat,innerColor=null) {
    const g=new THREE.Group();g.position.set(...pos);g.rotation.z=-side*(kind==='long'?.07:.12);head.add(g);
    if(kind==='round'||kind==='long') {
      ell(g,[0,0,0],size,mat,true,'outer-ear');
      if(innerColor)ell(g,[0,0,size[2]*.75],[size[0]*.61,size[1]*.68,size[2]*.28],material(innerColor,'skin'),false,'inner-ear');
    } else {
      const points=[[0,1],[-.70,-.55],[-.52,-.90],[.55,-.85],[.72,-.51]];
      pillow(g,'tri-ear',points,.36,[0,0,0],size,mat,true);
      if(innerColor)pillow(g,'tri-ear-inner',points,.16,[0,-size[1]*.05,size[2]*.30],[size[0]*.56,size[1]*.64,size[2]*.37],material(innerColor,'skin'),false);
    }
    return g;
  }
  function makeTail(points,radius,mat=bodyMat) {
    tail=new THREE.Group();tail.name='tail';root.add(tail);const mesh=tube(tail,points,radius,mat,36);surfaces.push(mesh);mesh.userData.surfaceMaterial=mat.name;return tail;
  }
  function muzzle(pos,size,mat=secondaryMat) {
    const m=ell(head,pos,size,mat,true,'muzzle');faceTargets.push(m);return m;
  }

  if(c.shape==='human') buildHuman();
  else if(ANIMALS.has(c.shape)) buildAnimal(c.shape);
  else buildBlob(c.shape);
  if(c.shape==='human'||ANIMALS.has(c.shape))head.scale.setScalar(h);
  else head.scale.set(1,h,1);
  buildFace();
  root.updateMatrixWorld(true);
  const extent=new THREE.Box3().setFromObject(root),headExtent=new THREE.Box3().setFromObject(head);
  const world=a=>head.localToWorld(v3(a)).toArray();
  const anchors={headTop:[head.position.x,headExtent.max.y,head.position.z],face:world([0,faceLayout.eyeY,frontZ(0,faceLayout.eyeY)+.035]),neck:world([0,faceLayout.neckY??-.58,.05]),handL:handPositions[0]?.toArray()??[-.9,.65,.55],handR:handPositions[1]?.toArray()??[.9,.65,.55],shoulderL:arms[0]?.position.toArray()??[-1,.9,0],shoulderR:arms[1]?.position.toArray()??[1,.9,0]};
  const crownRay=new THREE.Raycaster(new THREE.Vector3(head.position.x,extent.max.y+2,head.position.z),new THREE.Vector3(0,-1,0));
  const crownHit=crownRay.intersectObject(head,true)[0];
  anchors.crown=crownHit?crownHit.point.toArray():anchors.headTop.slice();
  anchors.mouth=world([0,faceLayout.mouthY,frontZ(0,faceLayout.mouthY)+.042]);
  const neckRay=new THREE.Raycaster(new THREE.Vector3(0,anchors.neck[1],extent.max.z+2),new THREE.Vector3(0,0,-1));
  const neckHit=neckRay.intersectObject(root,true)[0];
  anchors.neckFront=neckHit?[0,anchors.neck[1],neckHit.point.z+.022]:world([0,faceLayout.neckY??-.58,frontZ(0,faceLayout.neckY??-.58)+.025]);
  root.userData.anatomy=c.shape==='human'?'human':ANIMALS.has(c.shape)?'animal':'blob';
  root.userData.material=c.material;root.userData.restHeadPosition=head.position.clone();
  return {root,head,torso,face,eyeGroups,arms,legs,tail,anchors,height:extent.max.y,width:extent.max.x-extent.min.x,surfaces};

  function buildBlob(shape) {
    const sizes={cloud:[1.0,.96,.79],capsule:[1.03,.91,.85],sphere:[1.04,1.04,.96],roundedcube:[1.05,1.02,1.03],triangle:[1.15,1.07,.98],star:[1.11,1.06,.96],heart:[1.16,1.04,1],sprout:[1.01,.95,1],frog:[1.08,.79,.96],twin:[.88,.98,.95]};
    const sz=sizes[shape]||[1.05,1.03,1];sz[0]*=w;
    const mesh=pillow(head,'blob-'+shape,outline(shape),.75,[0,0,0],sz,bodyMat,true);faceTargets=[mesh];
    mesh.geometry.computeBoundingBox();const bottom=mesh.geometry.boundingBox.min.y*sz[1];
    const feet=['feet','both'].includes(c.limbs);head.position.y=-bottom*h+(feet?.22:.035);
    faceLayout={eyeX:.30*w,eyeY:shape==='cloud'?.02:.13,mouthY:-.23,size:1,neckY:bottom*.47};
    const hands=['hands','both'].includes(c.limbs)||c.accessories?.prop&&c.accessories.prop!=='none'||['work','flowers','magic','camera','drink','read','wave'].includes(c.action);
    if(hands)for(const side of [-1,1])arm(side,[side*1.03*w,head.position.y-.10,.10],.40,.15,bodyMat,bodyMat,'mitten');
    if(feet)for(const side of [-1,1])paw(side,side*.46*w,.13,.12,[.21,.13,.28]);
    if(shape==='sprout') {
      tube(head,[[0,.88,0],[0,1.16,.015],[.03,1.26,0]],.026,material(tint(c.colors.body,.67)),16);
      for(const side of [-1,1]) {const leaf=ell(head,[side*.24,1.22,0],[.29,.12,.09],material(mix(c.colors.body,'#8CB966',.46)),true,'leaf');leaf.rotation.z=side*.35;}
    }
    if(shape==='frog') {
      for(const side of [-1,1])faceTargets.push(ell(head,[side*.43*w,.72,.03],[.265,.30,.29],bodyMat,true,'frog-eye-mound'));
      faceLayout={eyeX:.43*w,eyeY:.78,mouthY:.08,size:1.15,neckY:-.40};
    }
    if(shape==='twin')for(const side of [-1,1]) {
      const lobe=ell(head,[side*.16,1.075,-.045],[.225,.285,.22],bodyMat,true,'twin-top-lobe');lobe.rotation.z=-side*.30;
    }
  }

  function buildHuman() {
    const skinKind=c.skinMaterial==='fabric'?'fabric':c.skinMaterial==='matte'?'skin':['plush','micro'].includes(c.material)?'fabric':'skin';
    const skin=material(c.colors.skin,skinKind),cloth=material(c.colors.clothing,c.clothMaterial==='fabricCloth'?'fabric':'knit');
    const pants=material(tint(c.colors.clothing,.52),'fabric'),shoe=material('#EEE8DF','rubber');
    torso.position.set(0,.86,0);head.position.set(0,1.98,.015);
    ell(torso,[0,0,0],[.52*w,.66,.36],cloth,true,'sweater-body');
    ell(torso,[0,.51,0],[.21,.24,.21],skin,false,'neck');
    const faceShape=c.faceShape||'round',shape=faceShape==='soft-square'?'roundedcube':'sphere';
    const headSize=faceShape==='oval'?[.58,.72,.70]:faceShape==='soft-square'?[.59,.64,.70]:[.63,.67,.71];
    const skull=pillow(head,'human-'+faceShape,outline(shape),.75,[0,0,0],headSize,skin,skinKind==='fabric');faceTargets=[skull];
    for(const side of [-1,1]) {ear(side,'round',[side*.605,-.035,.02],[.105,.15,.093],skin,mix(c.colors.skin,'#B96762',.19));arm(side,[side*.47*w,1.29,.015],.65,.14,cloth,skin,'hand');paw(side,side*.215*w,.16,.07,[.195,.16,.27],shoe);ell(torso,[side*.22,-.44,0],[.19,.36,.205],pants,false,'trouser-leg');}
    const collarMat=material(tint(c.colors.clothing,.9),cloth.name),collar=new THREE.TorusGeometry(.211,.048,9,48);
    const collarMesh=add(torso,collar,collarMat,[0,.53,.005],[1,1,1]);collarMesh.rotation.x=Math.PI/2;
    const outfit=c.outfit||'sweater';
    if(outfit==='hoodie') {
      const hood=ell(torso,[0,.44,-.18],[.35,.31,.21],cloth,true,'hood');
      for(const side of [-1,1])tube(torso,[[side*.13,.49,.225],[side*.16,.23,.354],[side*.145,.05,.363]],.011,material('#DAD6CC','fabric'),14);
      tube(torso,[[-.27,-.18,.328],[0,-.25,.365],[.27,-.18,.328]],.012,collarMat,18);
    } else if(outfit==='cardigan'||outfit==='shirt') {
      tube(torso,[[0,.49,.21],[0,.16,.365],[0,-.43,.285]],.016,collarMat,20);
      for(let i=0;i<4;i++)ell(torso,[.03,.27-i*.18,.36-Math.abs(.10-i*.13)*.10],[.025,.025,.013],material('#D5C9B3','rubber'),false,'button');
      for(const side of [-1,1]){const lapel=ell(torso,[side*.15,.44,.25],[.095,.15,.036],collarMat,false,'collar');lapel.rotation.z=side*.55;}
    } else {
      for(const y of [-.43,-.47,-.51])tube(torso,[[-.34,y,.22],[0,y-.025,.301],[.34,y,.22]],.012,collarMat,24);
    }
    faceLayout={eyeX:.235,eyeY:.055,mouthY:-.245,size:.89,neckY:-.70};
    buildHair();
  }

  function buildHair() {
    const style=c.hair||'short-curly',fiber=c.hairMaterial==='fiber'||c.hairMaterial==='auto'&&['plush','micro'].includes(c.material);
    const mats=[material(tint(c.colors.hair,.78),fiber?'fiber':'hair'),material(c.colors.hair,fiber?'fiber':'hair'),material(mix(c.colors.hair,'#C9AB8D',.075),fiber?'fiber':'hair')];
    const capPos=[],capUv=[],capIdx=[],long=['bob','long','wavy','braids'].includes(style);
    const scalp=(theta,phi,offset=0)=>new THREE.Vector3(Math.sin(theta)*Math.sin(phi)*(.655+offset),Math.cos(theta)*(.71+offset)+.035,Math.sin(theta)*Math.cos(phi)*(.567+offset));
    const limit=phi=>1.15+(1-Math.cos(phi))*.52;
    const rows=22,cols=64;
    for(let j=0;j<=rows;j++)for(let i=0;i<=cols;i++) {
      const phi=i/cols*TAU,q=scalp(j/rows*limit(phi),phi);capPos.push(q.x,q.y,q.z);capUv.push(i/cols,j/rows);
      if(j<rows&&i<cols){const a=j*(cols+1)+i,b=a+cols+1;capIdx.push(a,b,a+1,a+1,b,b+1);}
    }
    const cap=new THREE.BufferGeometry();cap.setAttribute('position',new THREE.Float32BufferAttribute(capPos,3));cap.setAttribute('uv',new THREE.Float32BufferAttribute(capUv,2));cap.setIndex(capIdx);cap.computeVertexNormals();add(head,cap,mats[0],[0,0,0],[1,1,1],false,'hair-foundation');
    const batches=[[],[],[]],volumes=[[],[],[]];let serial=0;
    const strand=(points,r=.006,tone=null)=> {const path=new THREE.CatmullRomCurve3(points,false,'catmullrom',.4);batches[tone??serial++%3].push(new THREE.TubeGeometry(path,Math.max(10,points.length),r,4,false));};
    // A curl is an open, tapered sculpted lock. Its fine fibers follow that lock,
    // rather than drawing little closed rings directly on the scalp.
    if(style==='short-curly') {
      const makeLock=(center,normal,across,along,size,seed,fringe=false)=> {
        const points=[],radius=size*(.22+rand(seed+81)*.045),phase=rand(seed+23)*1.4-.7;
        const turn=rand(seed+12)>.5?1:-1,lift=size*(.27+rand(seed+33)*.13);
        for(let k=0;k<=16;k++) {
          const t=k/16,x=(t-.5)*size,y=turn*Math.sin(t*TAU*.86+phase)*size*.245;
          const z=.015+Math.sin(t*Math.PI)*lift;
          points.push(center.clone().addScaledVector(across,x).addScaledVector(along,y)
            .addScaledVector(normal,z).add(new THREE.Vector3(0,fringe?-t*t*.035:0,0)));
        }
        const path=new THREE.CatmullRomCurve3(points,false,'catmullrom',.38),segments=18;
        const geo=new THREE.TubeGeometry(path,segments,radius,8,false),positions=geo.attributes.position;
        const taper=t=>(.28+.75*Math.pow(Math.sin(Math.PI*t),.55))*(1-.35*t);
        for(let ring=0;ring<=segments;ring++) {
          const t=ring/segments,p=path.getPointAt(t),scale=taper(t);
          for(let j=0;j<=8;j++){const k=ring*9+j;positions.setXYZ(k,p.x+(positions.getX(k)-p.x)*scale,p.y+(positions.getY(k)-p.y)*scale,p.z+(positions.getZ(k)-p.z)*scale);}
        }
        geo.computeVertexNormals();volumes[seed%7===0?0:seed%3===0?2:1].push(geo);
        // A small solid body beneath the bend closes the root and gives each
        // cluster a generous silhouette without the hole of a torus.
        const lobe=new THREE.SphereGeometry(1,12,8),basis=new THREE.Matrix4().makeBasis(across,along,normal);
        lobe.scale(size*.44,size*.27,size*.255);lobe.applyMatrix4(basis);
        const root=center.clone().addScaledVector(normal,size*.04);
        lobe.translate(root.x,root.y,root.z);volumes[seed%4===0?0:1].push(lobe);
        for(let f=0;f<4;f++) {
          const fiberPoints=[],angle=(f-1.5)*.32+(rand(seed+f)*.12-.06);
          for(let k=0;k<=12;k++) {
            const t=.08+k/12*(.83+rand(seed+f+40)*.055),p=path.getPointAt(t),tangent=path.getTangentAt(t);
            const outward=normal.clone().addScaledVector(tangent,-normal.dot(tangent)).normalize();
            const sideways=new THREE.Vector3().crossVectors(tangent,outward).normalize(),r=radius*taper(t)+.0013;
            fiberPoints.push(p.addScaledVector(outward,Math.cos(angle)*r).addScaledVector(sideways,Math.sin(angle)*r));
          }
          strand(fiberPoints,.0017+rand(seed+f+17)*.0008,f===1?2:1);
        }
        if(seed%13===0) {
          const wisps=points.slice(7,15).map((p,k)=>p.clone().addScaledVector(normal,radius*.7+Math.sin(k/7*Math.PI)*.018));
          strand(wisps,.0016,1);
        }
      };
      for(let i=0;i<136;i++) {
        const phi=i*2.399963+(rand(i+5)-.5)*.16,theta=Math.acos(1-(i+.5)/136*1.59);
        if(theta>limit(phi)+.035)continue;
        const center=scalp(theta,phi,.014+rand(i+18)*.020);
        const normal=new THREE.Vector3(center.x/.655**2,(center.y-.035)/.71**2,center.z/.567**2).normalize();
        const tangent=new THREE.Vector3(Math.cos(phi),0,-Math.sin(phi)).normalize();
        const bitangent=new THREE.Vector3().crossVectors(normal,tangent).normalize(),twist=(rand(i+47)-.5)*2.5;
        const across=tangent.clone().multiplyScalar(Math.cos(twist)).addScaledVector(bitangent,Math.sin(twist)).normalize();
        const along=new THREE.Vector3().crossVectors(normal,across).normalize();
        makeLock(center,normal,across,along,.235+rand(i+26)*.10,i);
      }
      // Irregular overlapping forelocks soften the hairline and bring the
      // curls forward; the lowest tips stay above the eye and brow region.
      for(let i=0;i<7;i++) {
        const x=(i-3)*.126,y=.345+Math.abs(x)*.22+rand(i+201)*.035;
        const center=new THREE.Vector3(x,y,.505-Math.abs(x)*.19),normal=new THREE.Vector3(x*.7,.32,1).normalize();
        const across=new THREE.Vector3(.93,-.20+(i%3)*.15,-x*.4).normalize();
        const along=new THREE.Vector3().crossVectors(normal,across).normalize();
        makeLock(center,normal,across,along,.235+rand(i+222)*.04,160+i,true);
      }
    } else {
      for(let i=0;i<250;i++) {
        const phi=i*2.399963,begin=.08+rand(i)*1.03,end=Math.min(limit(phi),begin+.43+rand(i+9)*.55),points=[];
        for(let k=0;k<12;k++){const t=k/11,theta=THREE.MathUtils.lerp(begin,end,t),sweep=(1-t)*.20*(Math.cos(phi)+.4);points.push(scalp(theta,phi+sweep,.015+Math.sin(t*Math.PI)*.016));}
        strand(points,.0042+rand(i+17)*.0024);
      }
    }
    if(long) {
      const length=style==='bob'?.48:1.02;
      for(const side of [-1,1])ell(head,[side*.49,-.38-length*.22,-.105],[.20,length*.60,.28],mats[0],false,'hair-side-foundation');
      ell(head,[0,-.37-length*.27,-.37],[.48,length*.57,.16],mats[0],false,'hair-back-foundation');
      for(let i=0;i<170;i++) {
        const phi=.80+rand(i)*4.68,start=scalp(1.05+rand(i+5)*.58,phi,.027),points=[];
        for(let k=0;k<16;k++){const t=k/15,wave=style==='wavy'?Math.sin(t*TAU*1.7+i*.71)*.055:Math.sin(t*Math.PI)*.025;points.push(new THREE.Vector3(start.x*(1-t*.1)+Math.sin(phi)*wave,start.y-t*(length+.08),start.z-Math.sin(t*Math.PI)*.03+Math.cos(phi)*wave));}
        strand(points,.0045+rand(i+11)*.0022);
      }
    }
    if(style==='ponytail'||style==='bun') {
      const bun=style==='bun',center=new THREE.Vector3(bun?0:.19,bun?.61:.03,bun?-.30:-.62);
      if(bun)ell(head,center.toArray(),[.26,.25,.25],mats[0],false,'bun-foundation');
      else tube(head,[[0,.43,-.39],[.17,.28,-.66],[.21,-.16,-.72],[.41,-.66,-.52]],.13,mats[0],28);
      for(let i=0;i<85;i++) {
        const a=i/85*TAU,points=[];
        for(let k=0;k<18;k++){const t=k/17;if(bun){const b=t*TAU*1.08;points.push(center.clone().add(new THREE.Vector3(Math.cos(b)*Math.sin(a)*.27,Math.sin(b)*.25,Math.cos(b)*Math.cos(a)*.26)));}else points.push(new THREE.Vector3(.03+t*.35+Math.sin(a)*(.12*(1-t)+.025),.42-t*1.07,-.42-Math.sin(t*Math.PI)*.28+Math.cos(a)*(.12*(1-t)+.025)));}
        strand(points,.0065);
      }
    }
    if(style==='braids')for(const side of [-1,1]) {
      for(let i=0;i<27;i++){const points=[],phase=i/27*TAU;for(let k=0;k<32;k++){const t=k/31,a=t*TAU*3.8+phase;points.push(new THREE.Vector3(side*(.51+.04*Math.sin(t*Math.PI))+Math.cos(a)*.065,-.18-t*.93,.07+Math.sin(a)*.057));}strand(points,.0075);}
      ell(head,[side*.51,-1.10,.07],[.10,.045,.085],material(mix(c.colors.clothing,'#C8B390',.25),'fabric'),false,'braid-tie');
    }
    volumes.forEach((batch,i)=>{if(batch.length)add(head,mergeGeometries(batch),mats[i],[0,0,0],[1,1,1],false,'hair-curl-volume');});
    batches.forEach((batch,i)=>{if(batch.length)add(head,mergeGeometries(batch),mats[i],[0,0,0],[1,1,1],false,'hair-strands');});
  }

  function buildAnimal(species) {
    const defs={shiba:[.64,.56,.51,.55,.69,.49,1.62],cat:[.59,.53,.48,.48,.66,.48,1.61],rabbit:[.49,.48,.44,.48,.64,.45,1.48],fox:[.60,.49,.50,.49,.64,.49,1.61],panda:[.65,.57,.53,.62,.70,.50,1.61],bear:[.63,.57,.54,.60,.68,.52,1.60],otter:[.51,.46,.47,.43,.73,.45,1.58],capybara:[.61,.47,.59,.59,.65,.61,1.53],axolotl:[.72,.36,.47,.48,.58,.55,1.39],penguin:[.51,.49,.46,.59,.79,.46,1.61],owl:[.58,.51,.45,.60,.67,.44,1.53],hedgehog:[.48,.40,.49,.68,.60,.57,1.26]};
    const [hx,hy,hz,bx,by,bz,headY]=defs[species];
    const bodySquash={shiba:.78,cat:.78,rabbit:.74,fox:.80,panda:.84,bear:.84,otter:.95,capybara:.68,axolotl:.68,penguin:1,owl:.96,hedgehog:.72}[species];
    const lowered=(1-bodySquash)*1.20;
    torso.position.set(0,by*bodySquash+.12,-.11);head.position.set(0,headY-lowered,.12);
    const outer=species==='penguin'?darkMat:bodyMat;
    ell(torso,[0,0,0],[bx*w,by*bodySquash,bz],outer,true,'animal-torso');
    const skull=species==='capybara'?pillow(head,'capybara-skull',outline('roundedcube'),.75,[0,0,0],[hx,hy,hz/.75],bodyMat,true):ell(head,[0,0,0],[hx,hy,hz],outer,true,'animal-head');faceTargets=[skull];
    if(!['axolotl','capybara','hedgehog'].includes(species))ell(torso,[0,-.05,bz*.73],[bx*.69*w,by*.71*bodySquash,bz*.30],secondaryMat,true,'chest-marking');
    faceLayout={eyeX:hx*.46,eyeY:.07,mouthY:-hy*.48,size:.85,neckY:-hy*.85};
    const muzzleZ=hz*.78,pink=mix(c.colors.secondary,'#D98E95',.35);
    if(['shiba','cat','rabbit','panda','bear','otter','fox','hedgehog'].includes(species)) {
      const size=species==='fox'?[.19,.16,.30]:species==='hedgehog'?[.25,.18,.32]:species==='shiba'?[.235,.215,.24]:species==='bear'?[.25,.21,.20]:[.19,.145,.18];
      for(const side of [-1,1])muzzle([side*size[0]*.62,-hy*.33,muzzleZ],size);
      const nz=muzzleZ+size[2]*.89;ell(head,[0,-hy*.26,nz],[species==='rabbit'?.05:.083,.057,.054],species==='rabbit'?material(pink,'nose'):noseMat,false,'nose');
      if(species==='cat')for(const side of [-1,1])for(let i=0;i<3;i++)tube(head,[[side*.20,-.20+i*.025,muzzleZ+.14],[side*.42,-.21+i*.05,muzzleZ+.13],[side*.62,-.23+i*.083,muzzleZ+.02]],.0045,material(mix(c.colors.eyes,c.colors.secondary,.42),'rubber'),12);
    }
    if(['shiba','cat','fox'].includes(species))for(const side of [-1,1])ear(side,'triangle',[side*hx*.69,hy*.72,-.025],[species==='fox'?.30:.265,species==='fox'?.40:.33,.43],bodyMat,pink);
    else if(species==='rabbit')for(const side of [-1,1])ear(side,'long',[side*.25,.65,-.04],[.145,.55,.105],bodyMat,pink);
    else if(['panda','bear','otter','capybara'].includes(species))for(const side of [-1,1])ear(side,'round',[side*hx*.74,hy*.72,-.035],species==='otter'?[.105,.12,.09]:species==='capybara'?[.13,.135,.095]:[.205,.205,.13],species==='panda'?darkMat:bodyMat,pink);
    if(species==='panda')for(const side of [-1,1]) {const patch=ell(head,[side*.285,.07,hz*.86],[.16,.20,.06],darkMat,false,'eye-patch');patch.rotation.z=-side*.24;faceTargets.push(patch);}
    if(species==='capybara') {
      muzzle([0,-.16,.38],[.43,.28,.40],bodyMat);faceLayout={eyeX:.39,eyeY:.115,mouthY:-.33,size:.69,neckY:-.43};
      for(const side of [-1,1])ell(head,[side*.125,-.145,.768],[.038,.027,.013],noseMat,false,'nostril');
    }
    if(species==='axolotl') {
      const gillMat=material(mix(c.colors.body,'#DD7695',.58));
      for(const side of [-1,1])for(let i=0;i<3;i++) {
        const base=[side*.62,.18-i*.15,-.06],end=[side*(1.0+(i===1?.09:0)),.45-i*.35,-.08];tube(head,[base,[side*.85,(base[1]+end[1])*.5,.02],end],.041,gillMat,18);
        for(let j=0;j<4;j++){const t=.37+j*.17,x=THREE.MathUtils.lerp(base[0],end[0],t),y=THREE.MathUtils.lerp(base[1],end[1],t);for(const branch of [-1,1])tube(head,[[x,y,-.055],[x+side*.055,y+branch*.085,.01],[x+side*.06,y+branch*.105,-.018]],.018,gillMat,8);}
      }
      faceLayout={eyeX:.37,eyeY:.015,mouthY:-.15,size:.76,neckY:-.35};
    }
    const bird=['penguin','owl'].includes(species);
    for(const side of [-1,1]) {
      if(bird) {const wing=arm(side,[side*bx*.79*w,1.13,-.02],.59,.14,outer,outer,'wing-tip');wing.rotation.z=side*.23;handPositions[side<0?0:1]=v3([side*(bx*.79*w+.19),.56,.025]);}
      else arm(side,[side*bx*.62*w,Math.min(1.02,headY-lowered-.46),.22],species==='axolotl'?.49:.68,species==='rabbit'?.12:.145,species==='panda'?darkMat:bodyMat,species==='shiba'?secondaryMat:bodyMat);
      paw(side,side*bx*(bird?.69:.90)*w,.13,bird?.20:.01,[bird?.22:.25,.13,bird?.27:.32],bird?material('#D8A34D','rubber'):species==='panda'?darkMat:bodyMat);
      if(!bird)for(let i=0;i<2;i++)tube(legs[legs.length-1],[[-.075+i*.11,.013,.304],[-.075+i*.11,.059,.28]],.006,material(mix(c.colors.body,c.colors.eyes,.2)),6);
    }
    if(species==='shiba') {makeTail([[.36,.40,-.35],[.66,.46,-.42],[.81,.69,-.35],[.71,.88,-.25],[.49,.82,-.22],[.50,.66,-.19],[.65,.65,-.18]],.115);ell(tail,[.65,.65,-.18],[.125,.115,.12],secondaryMat,true,'tail-tip');}
    else if(species==='cat')makeTail([[.33,.42,-.4],[.76,.34,-.43],[1.04,.72,-.22],[1.12,1.24,-.15],[.98,1.50,-.13]],.098);
    else if(species==='fox') {makeTail([[.31,.46,-.39],[.67,.37,-.59],[1.02,.49,-.43],[1.13,.79,-.20]],.23);const tip=ell(tail,[1.14,.90,-.15],[.20,.32,.21],secondaryMat,true,'white-tail-tip');tip.rotation.z=-.36;}
    else if(species==='rabbit') {tail=new THREE.Group();root.add(tail);ell(tail,[.46,.41,-.41],[.24,.24,.23],secondaryMat,true,'cotton-tail');}
    else if(['otter','axolotl','hedgehog'].includes(species)) {makeTail([[.22,.39,-.39],[.54,.23,-.65],[.91,.19,-.62],[1.17,.25,-.39]],species==='axolotl'?.13:.14);if(species==='axolotl'){const fin=ell(tail,[.78,.31,-.60],[.41,.23,.055],material(mix(c.colors.body,c.colors.secondary,.28)),true,'tail-fin');fin.rotation.y=-.7;}}
    else {tail=new THREE.Group();root.add(tail);ell(tail,[.45,.40,-.43],[.135,.14,.13],outer,true,'short-tail');}
    if(bird) {
      if(species==='owl')for(const side of [-1,1]) {const disc=ell(head,[side*.235,.055,.38],[.255,.30,.11],secondaryMat,true,'facial-disc');faceTargets.push(disc);ear(side,'triangle',[side*.39,.43,-.055],[.20,.23,.29],bodyMat,null);}
      const beak=pillow(head,'bird-beak',[[0,.65],[-.75,.12],[-.41,-.49],[0,-.9],[.42,-.49],[.75,.12]],.80,[0,-.15,.49],[species==='penguin'?.155:.09,.115,.12],material('#D8A34D','rubber'),false);faceTargets.push(beak);
      faceLayout.mouthY=-.26;faceLayout.size=species==='owl'?1.05:.85;
    }
    if(species==='hedgehog') {
      const quills=[];for(let i=0;i<110;i++){const phi=i*2.399963,y=.15+rand(i)*.93,r=Math.sqrt(Math.max(0,1-y*y)),normal=new THREE.Vector3(Math.sin(phi)*r,y,Math.cos(phi)*r);if(normal.z>.32)continue;const center=new THREE.Vector3(normal.x*.69*w,normal.y*.61+.71,normal.z*.58-.13);const g=new THREE.ConeGeometry(.041,.22,6,1);g.translate(0,.075,0);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP,normal));g.translate(center.x,center.y,center.z);quills.push(g);}add(root,mergeGeometries(quills),material(tint(c.colors.body,.61),'clay'),[0,0,0],[1,1,1],false,'soft-quills');
    }
  }

  // Probe only facial geometry, in head-local coordinates. Eye and line positions
  // therefore follow every shape and proportion without assuming a flat face.
  function frontZ(x,y) {
    const ray=new THREE.Raycaster(new THREE.Vector3(x,y,4),new THREE.Vector3(0,0,-1));let z=-Infinity;
    for(const target of faceTargets){target.updateMatrix();const probe=new THREE.Mesh(target.geometry,target.material);probe.matrixWorld.copy(target.matrix);const hit=ray.intersectObject(probe,false);if(hit.length)z=Math.max(z,hit[0].point.z);}
    return Number.isFinite(z)?z:.40;
  }
  function faceLine(points,r,mat=eyeMat,name='face-line') {return tube(face,points.map(([x,y])=>[x,y,frontZ(x,y)+.022]),r,mat,24,false,name);}
  function buildFace() {
    const expression=c.expression,scale=clamp(Number(c.eyeScale)||1,.45,1.8)*faceLayout.size,spacing=clamp(Number(c.eyeSpacing)||1,.6,1.6),ex=faceLayout.eyeX*spacing;
    const dims={softOval:[.074,.115],capsule:[.070,.190],round:[.086,.086],sparkle:[.088,.119],oval:[.109,.130]};
    const [ew,eh]=dims[c.eyes]||dims.softOval,closed=expression==='closed';
    const squint={sleepy:.43,happy:.85,excited:1.13,surprised:1.26,sad:.87,focused:.79,confident:.79,shy:.76,angry:.68,proud:.74,worried:.94}[expression]??1;
    for(const side of [-1,1]) {
      const x=side*ex,y=faceLayout.eyeY+(['curious','skeptical'].includes(expression)&&side>0?.025:0),z=frontZ(x,y)+.021;
      const eyeClosed=closed||(expression==='wink'&&side>0)||expression==='delighted';
      const eyeHeight=squint*(expression==='skeptical'&&side<0?.52:1);
      const group=new THREE.Group();group.name=side<0?'eye-left':'eye-right';group.position.set(x,y,z);face.add(group);eyeGroups.push(group);group.userData.restScaleY=1;
      // Mild outward orientation follows the cheek, keeping the full eye visible.
      group.rotation.y=side*(c.shape==='human'?.065:.09);group.rotation.z=(['sad','shy','worried'].includes(expression)?side*.15:expression==='angry'?-side*.24:expression==='happy'?side*.06:expression==='focused'?-side*.09:expression==='proud'?side*.09:0);
      if(eyeClosed)tube(group,[[-ew*scale,0,0],[0,(expression==='delighted'?.043:-.021)*scale,.010],[ew*scale,0,0]],.013*scale,eyeMat,18,false,expression==='delighted'?'delighted-lid':'closed-lid');
      else {
        if(c.shape==='frog')ell(group,[0,0,-.045],[ew*scale*1.66,eh*scale*1.23,.055],material('#F8FFE8','rubber'),false,'frog-eye-white');
        if(c.eyes==='capsule')add(group,geometry('capsule-eye',()=>new THREE.CapsuleGeometry(1,2.8,6,20)),eyeMat,[0,0,0],[ew*scale,eh*scale*eyeHeight/2.4,.028],false,'eye');
        else ell(group,[0,0,0],[ew*scale,eh*scale*eyeHeight,.028],c.eyes==='oval'?material('#FFF8EC','eye'):eyeMat,false,'eye');
        if(c.eyes==='oval')ell(group,[(expression==='thinking'?.022:0),expression==='proud'?.021:.002,.027],[ew*.58*scale,eh*.70*scale*eyeHeight,.022],eyeMat,false,'pupil');
        if(['sparkle','softOval','oval'].includes(c.eyes)){const shine=ell(group,[-ew*.25*scale,eh*.37*scale*eyeHeight,.049],[.019*scale,.024*scale,.008],material('#FFFFFF','eye'),false,'catchlight');if(c.eyes==='softOval')shine.scale.multiplyScalar(.57);}
      }
      if(c.brows!=='none') {
        const browY=y+eh*scale*eyeHeight+.073,raised=(c.brows==='curious'||expression==='skeptical')&&side>0?.047:0,angle=expression==='angry'?-side*.048:expression==='worried'?side*.045:c.brows==='angled'?side*.045:c.brows==='straight'?0:c.brows==='curious'?side*.014:.006;
        faceLine([[x-.09*scale,browY+raised-angle],[x,browY+raised+(c.brows==='straight'?0:.025)],[x+.09*scale,browY+raised+angle]],.010*scale,material(c.shape==='human'?mix(c.colors.hair,c.colors.eyes,.24):mix(c.colors.eyes,c.colors.body,.10),'rubber'),'brow');
      }
    }
    const my=faceLayout.mouthY,mw=.103*faceLayout.size;
    if(c.mouth==='smile') {
      const down=['sad','worried','angry'].includes(expression),asymmetric=['skeptical','confident','proud'].includes(expression);
      const curve=Array.from({length:13},(_,i)=>{const t=i/12,x=(t*2-1)*mw,bend=(down?-.031:.039)*(2*t-1)**2;return[x,my+(down?.023:-.027)+bend+(asymmetric?t*.024:0)];});
      faceLine(curve,.010,eyeMat,down?'frown':'smile');
    }
    else if(c.mouth==='pout')faceLine([[-mw*.68,my-.014],[0,my+.020],[mw*.68,my-.014]],.013,eyeMat,'pout');
    else if(c.mouth==='tiny'||c.mouth==='laugh') {
      const laugh=c.mouth==='laugh';ell(face,[0,my,frontZ(0,my)+.019],[mw*(laugh?1.16:.42),mw*(laugh?.93:.51),.024],eyeMat,false,'mouth');
      if(laugh)ell(face,[0,my-.043,frontZ(0,my)+.041],[mw*.62,.032,.012],material('#D98C91','skin'),false,'tongue');
    }
    if(c.shape==='human')ell(face,[0,-.095,frontZ(0,-.095)+.016],[.055,.067,.055],material(mix(c.colors.skin,'#C29076',.12),'skin'),false,'nose');
    if(['shy','happy','excited'].includes(expression)||c.shape==='human')for(const side of [-1,1]) {
      const x=side*ex*1.32,y=faceLayout.eyeY-.17,m=material(mix(c.shape==='human'?c.colors.skin:c.colors.body,'#D98791',.25),'skin');
      ell(face,[x,y,frontZ(x,y)+.008],[.085*faceLayout.size,.033*faceLayout.size,.009],m,false,'cheek');
    }
  }
}
