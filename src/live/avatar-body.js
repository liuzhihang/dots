import * as THREE from 'three';
import {MarchingCubes} from 'three/addons/objects/MarchingCubes.js';

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

// Smooth unions keep the shoulders of a cloud and the frog's eye mounds part
// of one continuous skin. An outline-only loft creates radial creases there.
function sculptedGeometry(name,lobes,blend=.19,options={}) {
  const n=options.resolution??72,opening=options.ellipticalOpening;
  const key=`sculpted:${name}:${n}:${opening?JSON.stringify(opening):'closed'}`;
  if(SHAPE_CACHE.has(key))return SHAPE_CACHE.get(key).clone();
  const extent=1.54,field=new MarchingCubes(n,undefined,false,false,50000);field.isolation=0;
  const ellipsoid=(x,y,z,[cx,cy,cz,rx,ry,rz])=>{
    x-=cx;y-=cy;z-=cz;const k0=Math.hypot(x/rx,y/ry,z/rz),k1=Math.hypot(x/(rx*rx),y/(ry*ry),z/(rz*rz));
    return k1>1e-9?k0*(k0-1)/k1:-Math.min(rx,ry,rz);
  };
  const smoothMin=(a,b)=>{const h=Math.max(blend-Math.abs(a-b),0)/blend;return Math.min(a,b)-h*h*blend*.25;};
  const smoothMax=(a,b,k)=>{const h=Math.max(k-Math.abs(a-b),0)/k;return Math.max(a,b)+h*h*k*.25;};
  for(let z=0;z<n;z++)for(let y=0;y<n;y++)for(let x=0;x<n;x++) {
    const px=(x/n*2-1)*extent,py=(y/n*2-1)*extent,pz=(z/n*2-1)*extent;
    let d=ellipsoid(px,py,pz,lobes[0]);for(let i=1;i<lobes.length;i++)d=smoothMin(d,ellipsoid(px,py,pz,lobes[i]));
    if(opening) {
      // Subtract an extruded ellipse from the implicit hood surface. This
      // retains a continuous, curved aperture instead of dropping whole
      // marching-cubes triangles whose centroids happen to fall inside it.
      const radius=Math.hypot((px-opening.cx)/opening.rx,(py-opening.cy)/opening.ry),radial=(radius-1)*Math.min(opening.rx,opening.ry);
      const cap=Math.abs(pz-opening.cz)-opening.halfDepth,cutter=Math.max(radial,cap);
      d=smoothMax(d,-cutter,opening.edge??.022);
    }
    field.field[x+y*n+z*n*n]=-d;
  }
  field.update();const count=field.count,g=new THREE.BufferGeometry(),positions=field.positionArray.slice(0,count*3),normals=field.normalArray.slice(0,count*3),uv=[];
  for(let i=0;i<count;i++){positions[i*3]*=extent;positions[i*3+1]*=extent;positions[i*3+2]*=extent;uv.push(Math.atan2(positions[i*3],positions[i*3+2])/TAU+.5,(positions[i*3+1]+1.2)/2.4);}
  g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.normalizeNormals();g.computeBoundingBox();g.computeBoundingSphere();field.geometry.dispose();field.material?.dispose();SHAPE_CACHE.set(key,g);return g.clone();
}

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
function pillowGeometry(name, points, depth = .82, fullness = .98) {
  const key = name + ':' + depth + ':' + fullness;
  if (SHAPE_CACHE.has(key)) return SHAPE_CACHE.get(key).clone();
  let p = points.map(([x,y]) => new THREE.Vector3(x,y,0));
  const area = p.reduce((s,q,i) => s + q.x*p[(i+1)%p.length].y-p[(i+1)%p.length].x*q.y, 0);
  if (area < 0) p.reverse();
  const curve = new THREE.CatmullRomCurve3(p, true, 'catmullrom', .35);
  const around = 112, rings = 48, pos = [], uv = [], indices = [];
  const centerRadius=p.reduce((sum,q)=>sum+Math.hypot(q.x,q.y),0)/p.length;
  for (let j=0; j<=rings; j++) {
    const t = j/rings*Math.PI, r = Math.pow(Math.sin(t), fullness);
    for (let i=0; i<=around; i++) {
      const q = curve.getPoint(i/around);
      // Only the outer shoulder inherits the detailed silhouette. The broad
      // front transitions to a quiet rounded dome, so a heart or star does not
      // develop radial troughs running through its face.
      const radius=Math.hypot(q.x,q.y),shoulder=r**2.65;
      const roundRadius=centerRadius+(radius-centerRadius)*shoulder;
      const k=radius>1e-6?r*roundRadius/radius:0;
      pos.push(q.x*k, q.y*k, depth*Math.cos(t)); uv.push(i/around,j/rings);
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

// A rounded tapered limb, closed at both ends. The tip is part of the same
// surface as the forearm rather than a detached ball at the end of a cylinder.
function softLimbGeometry(points,radius,endScale=1) {
  const path=new THREE.CatmullRomCurve3(points.map(v3),false,'centripetal');
  const rows=30,cols=14,frames=path.computeFrenetFrames(rows,false),pos=[],uv=[],indices=[];
  for(let j=0;j<=rows;j++) {
    const t=j/rows,p=path.getPointAt(t),cap=Math.min(1,Math.sin(Math.min(1,t/.13)*Math.PI/2),Math.sin(Math.min(1,(1-t)/.19)*Math.PI/2));
    const r=radius*(1+(endScale-1)*t)*cap;
    for(let i=0;i<=cols;i++) {
      const a=i/cols*TAU,n=frames.normals[j],b=frames.binormals[j];
      pos.push(p.x+(n.x*Math.cos(a)+b.x*Math.sin(a))*r,p.y+(n.y*Math.cos(a)+b.y*Math.sin(a))*r,p.z+(n.z*Math.cos(a)+b.z*Math.sin(a))*r);
      uv.push(i/cols,t);
      if(j<rows&&i<cols){const q=j*(cols+1)+i,k=q+cols+1;indices.push(q,q+1,k,q+1,k+1,k);}
    }
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();g.computeBoundingSphere();return g;
}

function outline(name) {
  const circle = (power=1,n=16) => Array.from({length:n},(_,i) => {
    const a=i/n*TAU, x=Math.cos(a), y=Math.sin(a);
    return [Math.sign(x)*Math.abs(x)**power,Math.sign(y)*Math.abs(y)**power];
  });
  const polygon = n => Array.from({length:n},(_,i)=>[Math.sin(i/n*TAU),Math.cos(i/n*TAU)]);
  const lobed=(n,amplitude,phase=0,xScale=1,yScale=1)=>Array.from({length:72},(_,i)=>{
    const a=i/72*TAU,r=1+amplitude*Math.cos(a*n+phase);
    return [Math.sin(a)*r*xScale,Math.cos(a)*r*yScale];
  });
  const shapes = {
    dumpling:[[0,1.03],[-.55,.94],[-.96,.58],[-1.15,-.13],[-1.04,-.65],[-.60,-.94],[0,-.98],[.66,-.94],[1.09,-.60],[1.17,-.08],[.93,.63],[.51,.95]],
    bean:[[-.14,1],[-.74,.86],[-1,.26],[-.85,-.5],[-.29,-.99],[.51,-.94],[.98,-.45],[.77,.17],[.30,.39],[.28,.87]],
    cloud:[[-1.04,-.56],[-1.20,-.21],[-1.14,.15],[-.91,.37],[-.62,.39],[-.47,.74],[-.18,.94],[.16,.95],[.45,.74],[.57,.43],[.90,.36],[1.15,.12],[1.21,-.21],[1.03,-.56],[.57,-.76],[0,-.80],[-.57,-.76]],
    drop:[[0,1.2],[-.26,.93],[-.55,.45],[-.94,-.08],[-1,-.59],[-.63,-.95],[0,-1],[.65,-.94],[1,-.55],[.92,-.08],[.50,.55],[.22,1.02]],
    arch:[[0,1.04],[-.46,.98],[-.81,.72],[-.97,.31],[-.985,-.23],[-.96,-.72],[-.82,-.92],[-.56,-.97],[-.28,-.94],[0,-.865],[.28,-.94],[.56,-.97],[.82,-.92],[.96,-.72],[.985,-.23],[.97,.31],[.81,.72],[.46,.98]],
    capsule:[[0,1.18],[-.57,.97],[-.75,.49],[-.75,-.50],[-.55,-1],[0,-1.18],[.56,-1],[.75,-.50],[.75,.49],[.57,.97]],
    pill:[[0,.72],[-.46,.72],[-.83,.59],[-1.025,.29],[-1.065,0],[-1.025,-.29],[-.83,-.59],[-.46,-.72],[.46,-.72],[.83,-.59],[1.025,-.29],[1.065,0],[1.025,.29],[.83,.59],[.46,.72]],
    pebble:[[0,.96],[-.47,.86],[-.81,.65],[-.99,.14],[-.97,-.26],[-.68,-.76],[-.25,-.98],[.19,-.91],[.73,-.75],[.96,-.20],[1.0,.23],[.69,.65],[.34,.97]],
    triangle:[[0,1.025],[-.17,.98],[-.305,.805],[-.58,.345],[-.925,-.27],[-1.005,-.545],[-.968,-.735],[-.815,-.875],[-.55,-.925],[0,-.93],[.55,-.925],[.815,-.875],[.968,-.735],[1.005,-.545],[.925,-.27],[.58,.345],[.305,.805],[.17,.98]],
    heart:[[0,.56],[-.24,.78],[-.54,.90],[-.80,.81],[-.955,.58],[-.975,.30],[-.835,-.035],[-.59,-.45],[-.26,-.89],[0,-1.04],[.26,-.89],[.59,-.45],[.835,-.035],[.975,.30],[.955,.58],[.80,.81],[.54,.90],[.24,.78]],
    ghost:[[0,1],[-.62,.86],[-.96,.34],[-1,-.80],[-.77,-1],[-.47,-.81],[-.16,-1],[.17,-.81],[.48,-1],[.78,-.81],[1,-.92],[.98,.34],[.61,.86]],
    diamond:[[0,1.045],[-.175,.985],[-.865,.31],[-1.03,.10],[-1.03,-.10],[-.865,-.31],[-.175,-.985],[0,-1.045],[.175,-.985],[.865,-.31],[1.03,-.10],[1.03,.10],[.865,.31],[.175,.985]],
    star:Array.from({length:40},(_,i)=>{const a=i/40*TAU,r=.88+.18*Math.cos(a*5);return[Math.sin(a)*r,Math.cos(a)*r];}),
    puff:lobed(6,.15,.38),clover:lobed(4,.25,Math.PI,1.035,.88),scallop:lobed(10,.058),
    hexagon:polygon(6), roundedcube:circle(.50), sphere:circle(), sprout:circle(),
    frog:[[0,.57],[-.22,.62],[-.29,.86],[-.46,1.02],[-.65,.97],[-.77,.74],[-.79,.50],[-1.03,.26],[-1.12,-.14],[-.98,-.51],[-.57,-.76],[0,-.83],[.57,-.76],[.98,-.51],[1.12,-.14],[1.03,.26],[.79,.50],[.77,.74],[.65,.97],[.46,1.02],[.29,.86],[.22,.62]],twin:circle(),
  };
  return shapes[name] || shapes.dumpling;
}

function surfaceTexture(kind) {
  const n=128, bytes=new Uint8Array(n*n*4);
  const pile=['plush','micro'].includes(kind);let pileHeight=null,pileMean=0,pileScale=1;
  if(pile) {
    // Seeded, irregular short brush marks are actual micro-height. Their
    // random phases avoid the repeated corduroy stripes of a sine weave.
    pileHeight=new Float32Array(n*n);
    for(let k=0;k<2500;k++) {
      const cx=rand(k*7+191)*n,cy=rand(k*7+193)*n,length=2+rand(k*7+197)*3;
      const angle=(rand(k*7+199)-.5)*.88,s=Math.sin(angle),c=Math.cos(angle),width=.39+rand(k*7+211)*.30,amp=.55+rand(k*7+223)*.75;
      const reach=Math.ceil(length+1);
      for(let dy=-reach;dy<=reach;dy++)for(let dx=-reach;dx<=reach;dx++) {
        const px=Math.floor(cx)+dx,py=Math.floor(cy)+dy,x=px-cx,y=py-cy,u=x*s+y*c,v=x*c-y*s;
        const value=Math.exp(-.5*(u/(length*.46))**2-.5*(v/width)**2)*amp;
        pileHeight[((py%n+n)%n)*n+(px%n+n)%n]+=value;
      }
    }
    for(const value of pileHeight)pileMean+=value;pileMean/=pileHeight.length;
    let variance=0;for(const value of pileHeight)variance+=(value-pileMean)**2;
    pileScale=(kind==='micro'?45:54)/Math.max(.01,Math.sqrt(variance/pileHeight.length));
  }
  for(let y=0;y<n;y++)for(let x=0;x<n;x++) {
    const noise=rand(x+y*n), knit=kind==='knit', woven=kind==='fabric';
    const weave=knit ? Math.sin(x*.72+Math.sin(y*.33)*1.8)*Math.cos(y*.33) : woven ? Math.sin(x*1.57)*Math.sin(y*1.57) : 0;
    const value=pile?clamp(128+(pileHeight[x+y*n]-pileMean)*pileScale,32,224):clamp(128+(noise-.5)*(knit?16:24)+weave*(knit?35:woven?32:0),0,255),i=(y*n+x)*4;
    bytes[i]=bytes[i+1]=bytes[i+2]=value; bytes[i+3]=255;
  }
  const t=new THREE.DataTexture(bytes,n,n,THREE.RGBAFormat);t.needsUpdate=true;
  t.wrapS=t.wrapT=THREE.RepeatWrapping;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;const repeat=kind==='fabric'?1.7:kind==='knit'?2.2:5;t.repeat.set(repeat,repeat);return t;
}

export function buildAvatarBody(input={}) {
  const c={shape:'dumpling',material:'plush',eyes:'softOval',expression:'calm',brows:'none',mouth:'none',eyeScale:1,eyeSpacing:1,headScale:1,bodyWidth:1,limbs:'auto',hair:'short-curly',...input};
  c.colors={body:'#299CF3',secondary:'#FFF0D5',eyes:'#172131',skin:'#EBC4A6',hair:'#523729',clothing:'#2C8D82',...input.colors};
  const baseline=c.catalogTier==='baseline';
  const metaMuse=c.family==='meta-muse'||c.shape==='meta-hood';
  const baselineDots=baseline&&c.family==='dots';
  const baselineGrok=baseline&&c.family==='grok';
  const baselineHuman=baseline&&c.family==='humans';
  const baselineAnimal=baseline&&c.family==='animals';
  // Keep the new visual contracts scoped to the new baselines. Migrated
  // presets retain their existing material and geometry behavior.
  const baseSurfaceKind=metaMuse?'micro'
    :baseline&&['dots','animals'].includes(c.family)?'micro'
    :baseline&&c.family==='grok'?'rubber'
    :c.material;
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
    const roughness={rubber:.64,plush:.98,micro:.94,clay:.92,skin:.77,hair:.67,fiber:.93,knit:.99,fabric:.95,eye:.35,matteEye:.60,nose:.52};
    const m=new THREE.MeshStandardMaterial({color,roughness:roughness[kind]??.88,metalness:0});m.name=kind;
    if(!['eye','matteEye','nose','hair'].includes(kind)) {
      if(!textureCache.has(kind))textureCache.set(kind,surfaceTexture(kind));
      m.bumpMap=textureCache.get(kind);m.bumpScale={rubber:.00045,skin:.0006,micro:.0010,plush:.0014,clay:.0018,knit:.0036,fabric:.0030,fiber:.0012}[kind]??.002;
    }
    materialCache.set(key,m);return m;
  }
  const bodyMat=material(c.colors.body,baseSurfaceKind),secondaryMat=material(c.colors.secondary,baseSurfaceKind),darkMat=material(tint(c.colors.body,.24),baseSurfaceKind);
  const eyeMat=material(c.colors.eyes,['sparkle','glossy','star','oval','side'].includes(c.eyes)?'eye':'matteEye'),noseMat=material(tint(c.colors.eyes,.88),'nose');
  function add(parent,geo,mat,pos=[0,0,0],scale=[1,1,1],fur=false,name='') {
    const mesh=new THREE.Mesh(geo,mat);mesh.position.set(...pos);mesh.scale.set(...scale);mesh.castShadow=true;mesh.receiveShadow=true;mesh.name=name;parent.add(mesh);
    if(fur){mesh.userData.surfaceMaterial=mat.name;mesh.userData.furLength=mat.name==='micro'?.011:.024;surfaces.push(mesh);}return mesh;
  }
  const ell=(p,pos,size,mat=bodyMat,fur=true,name='')=>add(p,sphere(),mat,pos,size,fur,name);
  function paintSurface(mesh,colorAt) {
    // Regional markings belong to the skin itself. Coincident cream ellipsoids
    // create an unintended hard rim and triangular intersections at the chest.
    mesh.geometry=mesh.geometry.clone();mesh.material=mesh.material.clone();
    mesh.material.vertexColors=true;mesh.material.color.set('#FFFFFF');
    const p=mesh.geometry.attributes.position,colors=new Float32Array(p.count*3),color=new THREE.Color();
    for(let i=0;i<p.count;i++) {
      colorAt(new THREE.Vector3(p.getX(i)*mesh.scale.x,p.getY(i)*mesh.scale.y,p.getZ(i)*mesh.scale.z),color);
      colors[i*3]=color.r;colors[i*3+1]=color.g;colors[i*3+2]=color.b;
    }
    mesh.geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));return mesh;
  }
  function tube(p,points,radius,mat,segments=24,closed=false,name='') {
    const path=new THREE.CatmullRomCurve3(points.map(v3),closed,'catmullrom',.35);
    return add(p,new THREE.TubeGeometry(path,segments,radius,7,closed),mat,[0,0,0],[1,1,1],false,name);
  }
  function pillow(p,name,points,depth,pos,size,mat=bodyMat,fur=true) {
    return add(p,geometry(name+':'+depth,()=>pillowGeometry(name,points,depth)),mat,pos,size,fur,name);
  }
  function arm(side,shoulder,length,radius,mat=bodyMat,handMat=mat,kind='paw') {
    const group=new THREE.Group();group.name=side<0?'arm-left':'arm-right';group.position.set(...shoulder);root.add(group);
    const animal=ANIMALS.has(c.shape),human=kind==='hand';
    const hand=[side*(animal?-.035:human?-.20:.06),-length,animal?.195:human?.37:.065];
    const points=human?[[0,.045,-.050],[side*.068,-length*.35,.15],[-side*.060,-length*.69,.32],[hand[0],-length+.045,hand[2]]]:animal?[[0,.075,-.07],[side*.020,-length*.28,.02],[-side*.02,-length*.68,.135],[hand[0],-length+.025,hand[2]],[hand[0],-length-radius*.85,hand[2]+.035]]:[[0,.055,-.012],[side*.065,-length*.32,.015],[side*.080,-length*.69,.11],[hand[0],-length+.025,hand[2]]];
    const sleeve=add(group,softLimbGeometry(points,radius,human?.87:animal?1.055:1.03),mat,[0,0,0],[1,1,1],true,'upper-arm');
    if(animal&&mat!==handMat)paintSurface(sleeve,(p,color)=>color.copy(mat.color).lerp(handMat.color,THREE.MathUtils.smoothstep(-p.y,length*.66,length*.84)));
    if(!animal)ell(group,hand,[radius*(human?1.03:1.05),radius*(human?.82:.88),radius*1.04],handMat,true,kind);
    if(kind==='hand')ell(group,[hand[0]-side*radius*.65,hand[1]+.025,hand[2]+.04],[radius*.35,radius*.49,radius*.39],handMat,false,'thumb');
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
      const points=[[0,.88],[-.16,.81],[-.49,.19],[-.70,-.48],[-.51,-.84],[.51,-.84],[.70,-.48],[.49,.19],[.16,.81]];
      pillow(g,'tri-ear',points,.36,[0,0,0],size,mat,true);
      if(innerColor)pillow(g,'tri-ear-inner',points,.16,[0,-size[1]*.05,size[2]*.30],[size[0]*.56,size[1]*.64,size[2]*.37],material(innerColor,'skin'),false);
    }
    return g;
  }
  function makeTail(points,radius,mat=bodyMat) {
    tail=new THREE.Group();tail.name='tail';root.add(tail);
    const mesh=add(tail,softLimbGeometry(points,radius,.52),mat,[0,0,0],[1,1,1],true,'rounded-tail');
    mesh.userData.surfaceMaterial=mat.name;return tail;
  }
  function muzzle(pos,size,mat=secondaryMat) {
    const m=ell(head,pos,size,mat,true,'muzzle');faceTargets.push(m);return m;
  }

  if(metaMuse) buildMetaMuse();
  else if(c.shape==='human') buildHuman();
  else if(ANIMALS.has(c.shape)) buildAnimal(c.shape);
  else buildBlob(c.shape);
  if(metaMuse||c.shape==='human'||ANIMALS.has(c.shape))head.scale.setScalar(h*(baselineHuman?1.12:1));
  else head.scale.set(1,h,1);
  buildFace();
  // Prop contact anchors below are sampled only after the baseline proportions
  // have been applied to the actual head, torso, and shoulder groups.
  root.updateMatrixWorld(true);
  const extent=new THREE.Box3().setFromObject(root),headExtent=new THREE.Box3().setFromObject(head);
  const world=a=>head.localToWorld(v3(a)).toArray();
  const anchors={headTop:[head.position.x,headExtent.max.y,head.position.z],face:world([0,faceLayout.eyeY,frontZ(0,faceLayout.eyeY)+.035]),neck:baselineHuman?torso.localToWorld(v3([0,.51,.05])).toArray():world([0,faceLayout.neckY??-.58,.05]),handL:handPositions[0]?.toArray()??[-.9,.65,.55],handR:handPositions[1]?.toArray()??[.9,.65,.55],shoulderL:arms[0]?.position.toArray()??[-1,.9,0],shoulderR:arms[1]?.position.toArray()??[1,.9,0]};
  const crownRay=new THREE.Raycaster(new THREE.Vector3(head.position.x,extent.max.y+2,head.position.z),new THREE.Vector3(0,-1,0));
  const crownHit=crownRay.intersectObject(head,true)[0];
  anchors.crown=crownHit?crownHit.point.toArray():anchors.headTop.slice();
  anchors.mouth=world([0,faceLayout.mouthY,frontZ(0,faceLayout.mouthY)+.042]);
  const neckRay=new THREE.Raycaster(new THREE.Vector3(0,anchors.neck[1],extent.max.z+2),new THREE.Vector3(0,0,-1));
  const neckHit=neckRay.intersectObject(root,true)[0];
  anchors.neckFront=neckHit?[0,anchors.neck[1],neckHit.point.z+.022]:world([0,faceLayout.neckY??-.58,frontZ(0,faceLayout.neckY??-.58)+.025]);
  root.userData.anatomy=metaMuse||c.shape==='human'?'human':ANIMALS.has(c.shape)?'animal':'blob';
  root.userData.material=c.material;root.userData.restHeadPosition=head.position.clone();
  return {root,head,torso,face,eyeGroups,arms,legs,tail,anchors,height:extent.max.y,width:extent.max.x-extent.min.x,surfaces};

  function buildBlob(shape) {
    const sizes={dumpling:[1.0,.94,1],cloud:[1.0,.97,1.07],capsule:[1.0,.91,1.05],pill:[1.04,1.01,1.11],sphere:[1.00,1.00,.96],roundedcube:[1.03,1.00,1.13],triangle:[1.08,1.08,1.22],star:[1.07,1.07,1.08],heart:[1.10,1.08,1.17],sprout:[.95,.95,1],frog:[1.04,.97,1.10],twin:[.96,.98,1.01],puff:[1.03,1.03,1.14],clover:[1.10,1.12,1.16],scallop:[1.04,1.04,1.12],pebble:[1.02,1.02,1.15],diamond:[1.04,1.04,1.20]};
    const sz=sizes[shape]||[1.05,1.03,1];sz[0]*=w;
    let mesh;
    if(shape==='dumpling') {
      mesh=add(head,geometry('blob-dumpling-layered',()=>sculptedGeometry('dumpling-v5',[[0,-.49,0,1.09,.57,.79],[0,.045,.005,.98,.505,.755],[-.025,.535,-.015,.79,.485,.64]],.30)),bodyMat,[0,0,0],sz,true,'blob-dumpling');
    } else if(shape==='sphere') {
      mesh=ell(head,[0,0,0],sz,bodyMat,true,'blob-sphere');
    } else if(shape==='frog') {
      mesh=add(head,geometry('blob-frog-sculpted',()=>sculptedGeometry('frog-v4',[[0,-.15,0,1.075,.785,.77],[-.43,.62,.02,.295,.345,.40],[.43,.62,.02,.295,.345,.40]],.255)),bodyMat,[0,0,0],sz,true,'blob-frog');
    } else if(shape==='puff') {
      const lobes=[[0,0,0,.78,.79,.77],...Array.from({length:6},(_,i)=>{const a=i/6*TAU+.20;return[Math.sin(a)*.68,Math.cos(a)*.68,0,.40,.40,.60];})];
      mesh=add(head,geometry('blob-puff-sculpted',()=>sculptedGeometry('puff-v5',lobes,.19)),bodyMat,[0,0,0],sz,true,'blob-puff');
    } else if(shape==='cloud') {
      mesh=add(head,geometry('blob-cloud-sculpted',()=>sculptedGeometry('cloud-v3',[[0,.26,0,.72,.66,.68],[-.62,-.18,0,.64,.57,.63],[.64,-.18,-.015,.66,.565,.64],[0,-.35,.015,.81,.43,.63]],.24)),bodyMat,[0,0,0],sz,true,'blob-cloud');
    } else if(shape==='sprout') {
      mesh=add(head,geometry('blob-sprout',()=>sculptedGeometry('sprout-v4',[[0,-.13,0,.94,.94,.86],[-.085,.90,-.055,.20,.38,.235],[.22,.95,-.05,.235,.32,.22]],.22)),bodyMat,[0,0,0],sz,true,'blob-sprout');
    } else if(shape==='ghost') {
      mesh=add(head,geometry('blob-ghost-sculpted',()=>sculptedGeometry('ghost-v4',[[0,.10,0,.955,.955,.77],[-.59,-.745,.01,.365,.36,.62],[0,-.76,.015,.37,.36,.635],[.59,-.745,.01,.365,.36,.62]],.205)),bodyMat,[0,0,0],sz,true,'blob-ghost');
    } else {
      const flatGrokArch=baselineGrok&&shape==='arch';
      const arch=flatGrokArch?[[0,1.04],[-.46,.98],[-.81,.72],[-.97,.31],[-.985,-.23],[-.96,-.68],[-.82,-.88],[-.60,-.925],[-.30,-.935],[0,-.935],[.30,-.935],[.60,-.925],[.82,-.88],[.96,-.68],[.985,-.23],[.97,.31],[.81,.72],[.46,.98]]:outline(shape);
      const key=flatGrokArch?'grok-baseline-arch-flat':'blob-r4-'+shape;
      mesh=add(head,geometry('blob-'+(flatGrokArch?'grok-baseline-arch-flat':shape),()=>pillowGeometry(key,arch,shape==='arch'?.87:.84,.99)),bodyMat,[0,0,0],sz,true,'blob-'+shape);
    }
    faceTargets=[mesh];
    mesh.geometry.computeBoundingBox();const bottom=mesh.geometry.boundingBox.min.y*sz[1];
    const feet=['feet','both'].includes(c.limbs);head.position.y=-bottom*h+(feet?.22:.035);
    faceLayout={eyeX:(shape==='triangle'?.265:shape==='diamond'?.33:shape==='heart'?.29:shape==='pebble'?.27:shape==='scallop'?.25:shape==='twin'?.25:shape==='pill'?.26:c.family==='dots'?.20:.275)*w,eyeY:shape==='dumpling'?.015:shape==='cloud'?.10:shape==='triangle'?.18:shape==='sprout'?.13:.23,mouthY:shape==='dumpling'?-.22:-.23,size:shape==='triangle'?.91:shape==='dumpling'?.95:1,neckY:bottom*.72};
    const hands=['hands','both'].includes(c.limbs)||c.accessories?.prop&&c.accessories.prop!=='none'||['work','flowers','magic','camera','drink','read','wave'].includes(c.action);
    if(hands)for(const side of [-1,1])arm(side,[side*1.03*w,head.position.y-.10,.10],.40,.15,bodyMat,bodyMat,'mitten');
    if(feet)for(const side of [-1,1])paw(side,side*.46*w,.13,.12,[.21,.13,.28]);
    if(shape==='frog') {
      faceLayout={eyeX:.43*w,eyeY:.66,mouthY:-.12,size:1.30,neckY:bottom*.74};
    }
    if(shape==='twin')for(const side of [-1,1]) {
      const lobe=ell(head,[side*.16,1.075,-.045],[.225,.285,.22],bodyMat,true,'twin-top-lobe');lobe.rotation.z=-side*.30;
    }
  }

  function buildMetaMuse() {
    // A02's hood is a continuous soft shell around a separate, inset face.
    // The torso and hood overlap in the same matte fabric so there is no neck
    // gap, while the hood stays in the head group for real prop contact tests.
    const bodyGeometry=geometry('meta-hood-body-v1',()=>sculptedGeometry('meta-hood-body-v1',[
      [0,.70,0,.49,.59,.39],
      [0,.32,0,.37,.31,.34],
    ],.18));
    add(torso,bodyGeometry,bodyMat,[0,0,0],[w,1,1],true,'meta-hood-body');

    head.position.set(0,1.42,.015);
    const hoodLobes=[
      [0,.03,0,.55,.70,.46],
      [0,-.37,0,.43,.51,.42],
    ];
    const hoodGeometry=geometry('meta-hood-shell-v4-recessed-port',()=>sculptedGeometry('meta-hood-shell-v4-recessed-port',hoodLobes,.20,{
      resolution:96,ellipticalOpening:{cx:0,cy:.005,cz:.8,rx:.34,ry:.42,halfDepth:.58,edge:.022},
    }));
    add(head,hoodGeometry,bodyMat,[0,0,0],[1,1,1],true,'meta-hood-shell');

    // Trace the carved aperture's shell, but keep its XY path analytically
    // elliptical. MarchingCubes quantizes ray-hit Z to its voxel grid, so a
    // low-pass Fourier fit removes the resulting depth steps without changing
    // the opening outline or filling the recessed face with a solid ellipse.
    const hoodProbe=new THREE.Mesh(hoodGeometry,new THREE.MeshBasicMaterial({side:THREE.DoubleSide}));
    const rimSampleCount=112,rimRx=.34*1.035,rimRy=.42*1.035,rimCy=.005,rimSamples=Array(rimSampleCount).fill(NaN),rimRay=new THREE.Raycaster();
    for(let i=0;i<rimSampleCount;i++) {
      const angle=i/rimSampleCount*TAU,x=Math.cos(angle)*rimRx,y=rimCy+Math.sin(angle)*rimRy;
      rimRay.set(new THREE.Vector3(x,y,2),new THREE.Vector3(0,0,-1));
      const hit=rimRay.intersectObject(hoodProbe,false)[0];
      if(hit)rimSamples[i]=hit.point.z;
    }
    hoodProbe.material.dispose();
    // Preserve continuity if a future aperture sample happens to miss the
    // shell by borrowing the nearest valid depth around the closed contour.
    for(let i=0;i<rimSampleCount;i++)if(!Number.isFinite(rimSamples[i])) {
      let nearest=-1;
      for(let step=1;step<rimSampleCount;step++) {
        const candidate=(i+step)%rimSampleCount;
        if(Number.isFinite(rimSamples[candidate])){nearest=candidate;break;}
      }
      rimSamples[i]=nearest<0?.35:rimSamples[nearest];
    }
    const rimHarmonics=12,rimCoefficients=[];
    for(let k=0;k<=rimHarmonics;k++) {
      let cosine=0,sine=0;
      for(let i=0;i<rimSampleCount;i++) {
        const angle=i/rimSampleCount*TAU;
        cosine+=rimSamples[i]*Math.cos(k*angle);sine+=rimSamples[i]*Math.sin(k*angle);
      }
      rimCoefficients.push({cosine:(k===0?1:2)*cosine/rimSampleCount,sine:k===0?0:2*sine/rimSampleCount});
    }
    const rimPath=new class extends THREE.Curve {
      getPoint(t,target=new THREE.Vector3()) {
        const angle=((t%1)+1)%1*TAU;
        let z=0;
        for(let k=0;k<=rimHarmonics;k++)z+=rimCoefficients[k].cosine*Math.cos(k*angle)+rimCoefficients[k].sine*Math.sin(k*angle);
        // Keep the seam's visible half above the voxel surface while its
        // inner half still overlaps the shell instead of flickering in it.
        return target.set(Math.cos(angle)*rimRx,rimCy+Math.sin(angle)*rimRy,z+.008);
      }
    }();
    add(head,new THREE.TubeGeometry(rimPath,144,.014,8,true),material('#D8C0A9','fabric'),[0,0,0],[1,1,1],false,'meta-face-inner-rim');
    // A front-only pocket keeps the hood closed behind the face. The warm
    // panel stays entirely inside its oval opening; the pocket floor closes
    // oblique sightlines without exposing a broad panel through the shell.
    const panel=ell(head,[0,.008,.305],[.31,.39,.027],material(c.colors.skin,'skin'),false,'meta-face-panel');
    faceTargets=[panel];
    faceLayout={eyeX:.104,eyeY:.045,mouthY:-.112,size:.66,neckY:-.43};

    for(const side of [-1,1]) {
      const a=arm(side,[side*.405,.96,.045],.31,.108,bodyMat,bodyMat,'mitten');
      a.rotation.z=side*.075;

      const leg=new THREE.Group();leg.name=side<0?'leg-left':'leg-right';
      leg.position.set(side*.165,.09,.015);root.add(leg);
      add(leg,softLimbGeometry([[0,.155,-.025],[0,.09,.008],[0,.018,.045]],.075,.90),bodyMat,[0,0,0],[1,1,1],true,'meta-short-leg');
      ell(leg,[0,-.012,.092],[.142,.106,.185],bodyMat,true,'meta-foot');legs.push(leg);
    }
  }

  function buildHuman() {
    const skinKind=c.skinMaterial==='fabric'?'fabric':c.skinMaterial==='matte'?'skin':baselineHuman?'skin':['plush','micro'].includes(c.material)?'fabric':'skin';
    const skin=material(c.colors.skin,skinKind),cloth=material(c.colors.clothing,c.clothMaterial==='fabricCloth'?'fabric':'knit');
    const pants=material(tint(c.colors.clothing,.52),'fabric'),shoe=material('#EEE8DF','rubber');
    torso.position.set(0,baselineHuman ? .82 : .86,0);head.position.set(0,baselineHuman ? 2.02 : 1.96,.015);
    if(baselineHuman)torso.scale.set(.86,.82,.92);
    ell(torso,[0,0,0],[.56*w,.66,.36],cloth,true,'sweater-body');
    ell(torso,[0,.51,0],[.21,.24,.21],skin,false,'neck');
    const faceShape=c.faceShape||'round';
    const skullGeometry=geometry('human-face-'+faceShape,()=>{
      const g=new THREE.SphereGeometry(1,64,44),p=g.attributes.position;
      const rx=faceShape==='oval'?.530:faceShape==='soft-square'?.565:.558,ry=faceShape==='oval'?.665:.626;
      for(let i=0;i<p.count;i++) {
        const x=p.getX(i),y=p.getY(i),z=p.getZ(i),jaw=THREE.MathUtils.smoothstep(y,-.88,.01);
        const cheek=1+.022*Math.exp(-(((y+.13)/.29)**2));
        const width=(faceShape==='soft-square'?.91+.09*jaw:.865+.135*jaw)*cheek;
        const sx=faceShape==='soft-square'?Math.sign(x)*Math.abs(x)**.93:x;
        p.setXYZ(i,sx*rx*width,y*ry,z*.555+(z>0?.012*Math.exp(-(((y+.18)/.30)**2)):0));
      }
      g.computeVertexNormals();g.computeBoundingBox();g.computeBoundingSphere();return g;
    });
    const skull=add(head,skullGeometry,skin,[0,0,0],[1,1,1],skinKind==='fabric','human-face');
    paintSurface(skull,(p,color)=>{
      const cheeks=Math.exp(-(((Math.abs(p.x)-.325)/.077)**2)-((p.y+.126)/.053)**2)*THREE.MathUtils.smoothstep(p.z,.30,.42)*.095;
      color.copy(skin.color).lerp(new THREE.Color('#D8797F'),cheeks);
    });faceTargets=[skull];
    for(const side of [-1,1]) {
      ear(side,'round',[side*.552,-.045,.025],[.10,.14,.09],skin,mix(c.colors.skin,'#B96762',.15));
      const shoulderX=baselineHuman ? .31 : .42,shoulderY=baselineHuman ? 1.20 : 1.285;
      arm(side,[side*shoulderX*w,shoulderY,-.012],baselineHuman ? .68 : .755,baselineHuman ? .14 : .153,cloth,skin,'hand');
      paw(side,side*.235*w,.16,.065,[.19,.16,.25],shoe);
      ell(torso,[side*.24,-.44,0],[.19,.36,.205],pants,false,'trouser-leg');
    }
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
    faceLayout=baselineHuman
      ? {eyeX:.222,eyeY:.035,mouthY:-.245,size:.92,neckY:-.67}
      : {eyeX:.198,eyeY:.018,mouthY:-.242,size:.72,neckY:-.67};
    buildHair();
  }

  function buildHair() {
    const style=c.hair||'short-curly',curly=style==='short-curly',layeredShort=baselineHuman&&style==='short',fiber=!layeredShort&&(c.hairMaterial==='fiber'||c.hairMaterial==='auto'&&['plush','micro'].includes(c.material));
    const kind=fiber?'fiber':'hair';
    const mats=layeredShort
      ? [material(mix(c.colors.hair,'#34251F',.10),kind),material(c.colors.hair,kind),material(mix(c.colors.hair,'#C39879',.14),kind)]
      : [material(tint(c.colors.hair,.915),kind),material(c.colors.hair,kind),material(mix(c.colors.hair,'#C4A188',.045),kind)];
    const oval=c.faceShape==='oval',rx=oval?.559:.588,ry=oval?.710:.675,rz=.574;
    const normalAt=p=>new THREE.Vector3(p.x/(rx*rx),(p.y-.018)/(ry*ry),p.z/(rz*rz)).normalize();
    const scalp=(theta,phi,offset=0)=> {
      const q=new THREE.Vector3(Math.sin(theta)*Math.sin(phi)*rx,Math.cos(theta)*ry+.018,Math.sin(theta)*Math.cos(phi)*rz);
      return q.addScaledVector(normalAt(q),offset);
    };
    const limit=phi=>{
      if(!layeredShort)return 1.12+(1-Math.cos(phi))*.56+(curly?.032*Math.sin(phi*7+.6):.01*Math.sin(phi*2));
      const azimuth=Math.atan2(Math.sin(phi),Math.cos(phi)),templeBreak=Math.exp(-(((Math.abs(azimuth)-.82)/.20)**2));
      return 1.12+(1-Math.cos(phi))*.56+.018*Math.sin(azimuth*2.4+.5)-.085*templeBreak;
    };
    const capPos=[],capUv=[],capIdx=[],rows=36,cols=96;
    // The foundation is one uninterrupted scalp surface. Its lower rim turns
    // into the skull, eliminating open dark holes between individual locks.
    for(let j=0;j<=rows+1;j++)for(let i=0;i<=cols;i++) {
      const phi=i/cols*TAU,theta=Math.min(1,j/rows)*limit(phi);
      const offset=j>rows?-.055:curly?.018+.004*Math.sin(theta*8+Math.sin(phi*3))**2:layeredShort?.010:.016;
      const q=scalp(theta,phi,offset);capPos.push(q.x,q.y,q.z);capUv.push(i/cols,j/rows);
      if(j<=rows&&i<cols){const a=j*(cols+1)+i,b=a+cols+1;capIdx.push(a,b,a+1,a+1,b,b+1);}
    }
    const cap=new THREE.BufferGeometry();cap.setAttribute('position',new THREE.Float32BufferAttribute(capPos,3));cap.setAttribute('uv',new THREE.Float32BufferAttribute(capUv,2));cap.setIndex(capIdx);cap.computeVertexNormals();
    const foundation=add(head,cap,mats[0],[0,0,0],[1,1,1],fiber,'hair-foundation');
    if(layeredShort)foundation.userData.skipProceduralPile=true;
    const strands=[[],[],[]],volumes=[[],[],[]];let serial=0;
    const strand=(points,r=.002,tone=null)=>{
      const path=new THREE.CatmullRomCurve3(points,false,'centripetal');
      const geometry=new THREE.TubeGeometry(path,Math.max(12,points.length),r,3,false);
      if(curly){const p=geometry.attributes.position,n=geometry.attributes.normal;for(let i=0;i<p.count;i++){const normal=normalAt(new THREE.Vector3(p.getX(i),p.getY(i),p.getZ(i)));n.setXYZ(i,normal.x,normal.y,normal.z);}}
      strands[tone??serial++%3].push(geometry);
    };
    if(curly && fiber) {
      // Looped yarn has its own silhouette and rounded cross section. A small
      // number of open ringlets reads as wool even at workbench scale.
      const makeCurl=(theta,phi,seed,fringe=false)=>{
        const center=scalp(theta,phi,.035),normal=normalAt(center);
        const tangent=new THREE.Vector3().crossVectors(UP,normal).normalize();
        if(tangent.lengthSq()<.01)tangent.set(1,0,0);
        const vertical=new THREE.Vector3().crossVectors(normal,tangent).normalize();
        const radius=(fringe?.051:.062)+rand(seed+7)*.016,points=[];
        for(let i=0;i<=36;i++){
          const t=i/36,a=t*TAU*(1.20+rand(seed+9)*.22)+seed*.7,r=radius*(1-.38*t);
          points.push(center.clone().addScaledVector(tangent,Math.cos(a)*r).addScaledVector(vertical,Math.sin(a)*r).addScaledVector(normal,.012+.028*Math.sin(t*Math.PI)));
        }
        const curl=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),42,.013+rand(seed+3)*.004,6,false);
        volumes[seed%7===0?2:seed%5===0?0:1].push(curl);
      };
      let seed=1;
      for(const [theta,count,shift]of [[.13,3,0],[.38,9,.20],[.65,13,0],[.91,17,.13],[1.17,20,0],[1.47,19,.12],[1.77,16,0],[2.02,13,.12]]){
        for(let i=0;i<count;i++){const phi=i/count*TAU+shift;if(theta>limit(phi)+.01)continue;makeCurl(theta+(rand(seed+20)-.5)*.07,phi,seed++);}
      }
      for(let i=0;i<10;i++)makeCurl(1.09+(rand(i+82)-.5)*.12,(i-4.5)*.19,120+i,true);
    } else if(curly||layeredShort) {
      // Broad, shallow swept locks form a readable short hairstyle. Each lock
      // grows out of the closed scalp, overlaps its neighbour, and tapers back
      // into the hair mass. Fine strands follow its entire curved surface.
      const makeLock=(theta,phi,seed,fringe=false)=>{
        const width=layeredShort
          ? (fringe?.036:.038)+rand(seed+44)*.018
          : (fringe?.051:.053)+rand(seed+44)*.011;
        const sectionDepth=layeredShort ? .023+rand(seed+51)*.010 : .020+rand(seed+51)*.006;
        const centerLift=layeredShort ? .024+rand(seed+64)*.017 : .023+rand(seed+64)*.012;
        const start=fringe?(layeredShort?.31+rand(seed+12)*.09:.35):Math.max(.055,theta-.30);
        const end=fringe
          ? (layeredShort?1.08+rand(seed+8)*.20:1.115+rand(seed+8)*.14)
          : Math.min(limit(phi)+.035,theta+(layeredShort?.29+rand(seed+8)*.21:.39));
        const sweepStart=layeredShort?-.24+rand(seed+29)*.14:0;
        const sweepLength=layeredShort?.31+rand(seed+30)*.13:0;
        const sweepWave=layeredShort?.035+rand(seed+31)*.035:.033;
        const sweepPhase=rand(seed+32)*TAU;
        const angleWave=layeredShort?.014+rand(seed+33)*.012:.010;
        const points=[],count=24;
        for(let j=0;j<=count;j++) {
          const t=j/count,angle=THREE.MathUtils.lerp(start,end,t)-Math.max(0,t-.82)**2*.55+Math.sin(t*Math.PI*2.25+sweepPhase)*angleWave;
          const sweep=layeredShort?sweepStart+t*sweepLength+Math.sin(t*Math.PI*2+sweepPhase)*sweepWave:(1-t)*-.30+Math.sin(t*Math.PI*2.75+rand(seed+9)*.35)*.095+Math.max(0,t-.67)**2*.70;
          const ridge=.006+Math.sin(t*Math.PI)*centerLift+(layeredShort?Math.sin(t*Math.PI*2+sweepPhase)*.004*Math.sin(t*Math.PI):0);
          points.push(scalp(angle,phi+sweep,ridge));
        }
        const path=new THREE.CatmullRomCurve3(points,false,'centripetal');
        const at=(t,u,extra=0)=>{
          const p=path.getPoint(t),normal=normalAt(p),tangent=path.getTangent(t).normalize();
          const lateral=new THREE.Vector3().crossVectors(normal,tangent).normalize();
          const taper=Math.min(1,Math.sqrt(Math.max(0,t/.11)),Math.sqrt(Math.max(0,(1-t)/.14)))*(.97-.15*t);
          const side=width*taper*u,depth=sectionDepth*taper*Math.sqrt(Math.max(0,1-u*u));
          return p.addScaledVector(lateral,side).addScaledVector(normal,depth+extra);
        };
        const pos=[],uv=[],idx=[],around=12;
        for(let j=0;j<=count;j++)for(let i=0;i<=around;i++) {
          const t=j/count,a=i/around*TAU,p=path.getPoint(t),normal=normalAt(p),tangent=path.getTangent(t).normalize();
          const lateral=new THREE.Vector3().crossVectors(normal,tangent).normalize(),taper=Math.min(1,Math.sqrt(Math.max(0,t/.11)),Math.sqrt(Math.max(0,(1-t)/.14)))*(.97-.15*t);
          p.addScaledVector(lateral,Math.cos(a)*width*taper).addScaledVector(normal,Math.sin(a)*sectionDepth*taper);
          pos.push(p.x,p.y,p.z);uv.push(i/around,t);
          if(j<count&&i<around){const a=j*(around+1)+i,b=a+around+1;idx.push(a,a+1,b,a+1,b+1,b);}
        }
        const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();
        volumes[seed%9===0?0:1].push(g);
          for(let f=0;f<(layeredShort?5:9);f++) {
          const u=(f/(layeredShort?4:8)*2-1)*.94,pts=[];
          for(let j=0;j<=14;j++) {
            const t=.032+j/14*.938,drift=Math.sin(t*Math.PI*1.1+seed)*.035;
            pts.push(at(t,clamp(u+drift,-.97,.97),.0011));
          }
          strand(pts,layeredShort ? .0019+rand(seed*17+f)*.00055 : .0011+rand(seed*17+f)*.0005,f%6===0?2:f%5===0?0:1);
        }
        if(seed%5===0) {
          const pts=[];for(let j=0;j<=12;j++){const t=.17+j/12*.68;pts.push(at(t,.78,.004+Math.sin(j/12*Math.PI)*.009));}
          strand(pts,layeredShort ? .0022 : .0011,2);
        }
      };
      let seed=1;
      const lockRows=layeredShort
        ? [[.27,5,.10],[.61,8,.18],[.96,12,.02],[1.32,13,.15],[1.67,11,.04]]
        : [[.29,5,.1],[.65,8,.19],[1.03,11,.0],[1.43,10,.21],[1.81,9,.05]];
      for(const [theta,count,shift] of lockRows) {
        for(let i=0;i<count;i++) {
          const phi=i/count*TAU+shift+(layeredShort?(rand(seed+34)-.5)*.08:0);
          if(theta>limit(phi)-.07)continue;
          makeLock(theta+(rand(seed+18)-.5)*.05,phi,seed++);
        }
      }
      const fringeCount=layeredShort?7:9,middle=(fringeCount-1)/2;
      for(let i=0;i<fringeCount;i++) {
        const phi=layeredShort?(i-middle)*.255+(rand(i+54)-.5)*.09:(i-4)*.21+(rand(i+54)-.5)*.065,theta=1.015+(rand(i+88)-.5)*.09;
        makeLock(theta,phi,70+i,true);
      }
      // A few quiet grain lines cover the visible roots. Their small radius and
      // low contrast keep the coherent hair mass readable at thumbnail size.
      for(let i=0;i<72;i++) {
        const phi=i*2.399963,begin=.10+rand(i+8)*1.6,end=Math.min(limit(phi)-.015,begin+.25+rand(i+16)*.2);
        if(end<=begin)continue;
        const pts=[];for(let j=0;j<=12;j++){const t=j/12;pts.push(scalp(THREE.MathUtils.lerp(begin,end,t),phi+Math.sin(t*Math.PI)*.11,.025));}
        strand(pts,.0013,i%3);
      }
    } else {
      for(let i=0;i<220;i++) {
        const phi=i*2.399963,begin=.06+rand(i)*1.0,end=Math.min(limit(phi),begin+.44+rand(i+9)*.50),points=[];
        for(let k=0;k<13;k++){const t=k/12,theta=THREE.MathUtils.lerp(begin,end,t),sweep=(1-t)*.21*(Math.cos(phi)+.4);points.push(scalp(theta,phi+sweep,.015+Math.sin(t*Math.PI)*.014));}
        strand(points,.0027+rand(i+17)*.0015);
      }
    }
    const long=['bob','long','wavy'].includes(style);
    if(long) {
      const length=style==='bob'?.40:.90;
      const masses=[];
      for(const side of [-1,1])masses.push({center:[side*.46,-.31-length*.22,-.09],size:[.17,length*.60,.24],name:'hair-side-foundation'});
      masses.push({center:[0,-.31-length*.27,-.33],size:[.45,length*.57,.15],name:'hair-back-foundation'});
      for(const [mi,mass]of masses.entries()) {
        ell(head,mass.center,mass.size,mats[0],false,mass.name);
        // Every fine line follows the same closed ellipsoid as its undercoat;
        // none may hang beyond the hair volume like an unsupported wire fence.
        for(let i=0;i<44;i++) {
          const phi=i/44*TAU,pts=[];
          for(let j=0;j<=20;j++) {
            const t=j/20,theta=.12+t*2.82,a=phi+(style==='wavy'?Math.sin(t*TAU*1.1)*.20:Math.sin(t*Math.PI)*.045);
            const n=new THREE.Vector3(Math.sin(theta)*Math.sin(a)/mass.size[0],Math.cos(theta)/mass.size[1],Math.sin(theta)*Math.cos(a)/mass.size[2]).normalize();
            pts.push(new THREE.Vector3(mass.center[0]+Math.sin(theta)*Math.sin(a)*mass.size[0],mass.center[1]+Math.cos(theta)*mass.size[1],mass.center[2]+Math.sin(theta)*Math.cos(a)*mass.size[2]).addScaledVector(n,.0013));
          }
          strand(pts,.00135,(i+mi)%3);
        }
      }
    }
    if(style==='ponytail'||style==='bun') {
      const bun=style==='bun',center=new THREE.Vector3(bun?0:.17,bun?.56:.04,bun?-.28:-.57);
      if(bun)ell(head,center.toArray(),[.235,.23,.23],mats[0],false,'bun-foundation');
      else tube(head,[[0,.40,-.37],[.15,.25,-.61],[.19,-.15,-.66],[.36,-.59,-.49]],.11,mats[0],28);
      for(let i=0;i<88;i++) {
        const a=i/88*TAU,points=[];
        for(let k=0;k<18;k++){const t=k/17;if(bun){const b=t*TAU*1.08;points.push(center.clone().add(new THREE.Vector3(Math.cos(b)*Math.sin(a)*.242,Math.sin(b)*.233,Math.cos(b)*Math.cos(a)*.238)));}else points.push(new THREE.Vector3(.025+t*.32+Math.sin(a)*(.10*(1-t)+.025),.39-t*.99,-.40-Math.sin(t*Math.PI)*.25+Math.cos(a)*(.10*(1-t)+.025)));}
        strand(points,.0040);
      }
    }
    if(style==='braids')for(const side of [-1,1]) {
      add(head,softLimbGeometry([[side*.56,.015,-.045],[side*.535,-.09,-.005],[side*.49,-.21,.055]],.090,.90),mats[0],[0,0,0],[1,1,1],false,'braid-root');
      for(let plait=0;plait<3;plait++) {
        const points=[];
        for(let k=0;k<40;k++){const t=k/39,a=t*TAU*3.1+plait/3*TAU;points.push([side*(.49+.015*Math.sin(t*Math.PI))+Math.cos(a)*.035,-.14-t*.81,.055+Math.sin(a)*.035]);}
        add(head,softLimbGeometry(points,.038,.86),mats[plait],[0,0,0],[1,1,1],false,'braid-plait');
      }
      ell(head,[side*.49,-.902,.055],[.071,.027,.062],material(mix(c.colors.clothing,'#C8B390',.25),'fabric'),false,'braid-tie');
    }
    volumes.forEach((batch,i)=>{if(batch.length){const mass=add(head,mergeGeometries(batch),mats[i],[0,0,0],[1,1,1],fiber,'hair-curl-volume');if(layeredShort)mass.userData.skipProceduralPile=true;}});
    strands.forEach((batch,i)=>{if(batch.length){
      // Sub-pixel strands describe the grain; the underlying lock carries the
      // light and shadow. Lighting every three-sided filament independently
      // turns a fine hairstyle into dark stippling in software previews.
      const detailColor=layeredShort?mix(mats[i].color,['#473026','#79533D','#CEA585'][i],.23):mix(mats[i].color,c.colors.hair,.70);
      const detailMat=new THREE.MeshStandardMaterial({color:detailColor,roughness:fiber?.96:.76});detailMat.name=fiber?'fiber-detail':'hair-detail';
      const strandMesh=add(head,mergeGeometries(batch),detailMat,[0,0,0],[1,1,1],false,'hair-strands');strandMesh.castShadow=false;strandMesh.receiveShadow=false;
    }});
  }

  function buildAnimal(species) {
    const defs={shiba:[.64,.56,.51,.55,.69,.49,1.62],cat:[.59,.53,.48,.48,.66,.48,1.61],rabbit:[.49,.48,.44,.48,.64,.45,1.48],fox:[.60,.49,.50,.49,.64,.49,1.61],panda:[.65,.57,.53,.62,.70,.50,1.61],bear:[.63,.57,.54,.60,.68,.52,1.60],otter:[.51,.46,.47,.43,.73,.45,1.58],capybara:[.61,.47,.59,.59,.65,.61,1.53],axolotl:[.72,.36,.47,.48,.58,.55,1.39],penguin:[.51,.49,.46,.59,.79,.46,1.61],owl:[.58,.51,.45,.60,.67,.44,1.53],hedgehog:[.48,.40,.49,.68,.60,.57,1.26]};
    const baselineShiba=baselineAnimal&&species==='shiba';
    const [hx,hy,hz,bx,by,bz,headY]=baselineShiba?[.67,.58,.53,.57,.67,.50,1.59]:defs[species];
    const bodySquash={shiba:.78,cat:.78,rabbit:.74,fox:.80,panda:.84,bear:.84,otter:.95,capybara:.68,axolotl:.68,penguin:1,owl:.96,hedgehog:.72}[species];
    const lowered=(1-bodySquash)*1.30+.065;
    torso.position.set(0,by*bodySquash+.12,-.11);head.position.set(0,headY-lowered,.12);
    const outer=species==='penguin'?darkMat:bodyMat;
    const bird=['penguin','owl'].includes(species);
    const bodyShapeKey=baselineShiba?'animal-seated-shiba-baseline-v1':'animal-seated-'+species;
    const bodyShapeName=baselineShiba?'shiba-body-baseline-v1':'animal-seated-r4-'+species;
    const animalBody=bird?ell(torso,[0,0,0],[bx*w,by*bodySquash,bz],outer,true,'animal-torso'):add(torso,geometry(bodyShapeKey,()=>sculptedGeometry(bodyShapeName,[[0,0,0,bx,by*bodySquash,bz],[-bx*.60,-by*bodySquash*.40,.025,bx*.49,by*bodySquash*.59,bz*.71],[bx*.60,-by*bodySquash*.40,.025,bx*.49,by*bodySquash*.59,bz*.71]],baselineShiba?.17:.13)),outer,[0,0,0],[w,1,1],true,'animal-torso');
    let skull;
    if(species==='shiba')skull=add(head,geometry(baselineShiba?'shiba-baseline-soft-face':'shiba-soft-face',()=>sculptedGeometry(baselineShiba?'shiba-face-baseline-v1':'shiba-face-r4',[[0,0,0,hx,hy,hz],[0,-.20,.365,baselineShiba?.425:.435,baselineShiba?.245:.257,baselineShiba?.26:.265]],.20)),bodyMat,[0,0,0],[1,1,1],true,'animal-head');
    else if(species==='capybara')skull=pillow(head,'capybara-skull',outline('roundedcube'),.85,[0,0,0],[hx,hy,hz/.85],bodyMat,true);
    else skull=ell(head,[0,0,0],[hx,hy,hz],outer,true,'animal-head');
    faceTargets=[skull];
    if(!['axolotl','capybara','hedgehog','panda'].includes(species))paintSurface(animalBody,(p,color)=>{
      const d=(p.x/(bx*.68*w))**2+((p.y+.06)/(by*bodySquash*.86))**2;
      const mask=(1-THREE.MathUtils.smoothstep(d,.90,1.035))*THREE.MathUtils.smoothstep(p.z,bz*.26,bz*.67);
      color.copy(outer.color).lerp(secondaryMat.color,mask);
    });
    faceLayout={eyeX:hx*.44,eyeY:.07,mouthY:-hy*.43,size:.72,neckY:-hy*.85};
    const muzzleZ=hz*.78,pink=mix(c.colors.secondary,'#D98E95',.35);
    if(['shiba','cat','rabbit','panda','bear','otter','fox','hedgehog'].includes(species)) {
      const size=species==='fox'?[.19,.155,.26]:species==='hedgehog'?[.215,.16,.29]:species==='shiba'?[.22,.18,.19]:species==='bear'?[.21,.18,.19]:[.16,.13,.155];
      if(species==='shiba') {
        paintSurface(skull,(p,color)=>{
          const cheek=(p.x/.565)**2+((p.y+.225)/.358)**2;
          let mask=(1-THREE.MathUtils.smoothstep(cheek,.94,1.055))*THREE.MathUtils.smoothstep(p.z,.08,.30);
          for(const side of [-1,1]) {
            const brow=((p.x-side*.265)/.061)**2+((p.y-.238)/.045)**2;
            mask=Math.max(mask,(1-THREE.MathUtils.smoothstep(brow,.68,1.04))*THREE.MathUtils.smoothstep(p.z,.25,.37));
          }
          color.copy(bodyMat.color).lerp(secondaryMat.color,mask);
        });
      } else {
        for(const side of [-1,1])muzzle([side*size[0]*.54,-hy*.31,muzzleZ],size,species==='panda'?bodyMat:secondaryMat);
      }
      const nz=species==='shiba'?.635:muzzleZ+size[2]*.89;ell(head,[0,-hy*.27,nz],[species==='rabbit'?.043:species==='shiba'?.065:.070,.042,.035],species==='rabbit'?material(pink,'nose'):noseMat,false,'nose');
      if(species==='cat')for(const side of [-1,1])for(let i=0;i<3;i++)tube(head,[[side*.20,-.20+i*.025,muzzleZ+.14],[side*.42,-.21+i*.05,muzzleZ+.13],[side*.62,-.23+i*.083,muzzleZ+.02]],.0045,material(mix(c.colors.eyes,c.colors.secondary,.42),'rubber'),12);
    }
    if(['shiba','cat','fox'].includes(species))for(const side of [-1,1])ear(side,'triangle',[side*hx*.69,hy*.75,-.035],[species==='fox'?.30:species==='shiba'?.30:.25,species==='fox'?.39:species==='shiba'?.30:.28,.43],bodyMat,pink);
    else if(species==='rabbit')for(const side of [-1,1])ear(side,'long',[side*.235,.61,-.055],[.14,.51,.11],bodyMat,pink);
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
    for(const side of [-1,1]) {
      if(bird) {
        const shoulderY=species==='penguin'?1.07:.99,wing=arm(side,[side*bx*.82*w,shoulderY,-.04],.46,.135,outer,outer,'wing-tip');
        wing.rotation.z=side*.13;wing.scale.z=.64;
        handPositions[side<0?0:1]=v3([side*(bx*.82*w+.025),shoulderY-.445,.055]);
      } else {
        const shoulderY=Math.min(.80,headY-lowered-.54),small=['rabbit','axolotl','hedgehog'].includes(species),r=small?.122:species==='bear'||species==='panda'?.164:.149;
        arm(side,[side*bx*.57*w,shoulderY,.155],Math.max(.23,shoulderY-(small?.23:.245)),r,species==='panda'?darkMat:bodyMat,species==='shiba'?secondaryMat:bodyMat);
      }
      const rear=paw(side,side*bx*(bird?.60:.80)*w,bird?.10:.112,bird?.20:.015,[bird?.18:.165,bird?.10:.112,bird?.225:.20],bird?material('#D8A34D','rubber'):species==='panda'?darkMat:bodyMat);
      if(!bird)for(let i=0;i<2;i++)tube(rear,[[-.050+i*.095,.026,.165],[-.050+i*.095,.067,.146]],.0035,material(mix(c.colors.body,c.colors.eyes,.10)),6);
    }
    if(species==='shiba') {makeTail([[.36,.40,-.35],[.66,.46,-.42],[.81,.69,-.35],[.71,.88,-.25],[.49,.82,-.22],[.50,.66,-.19],[.65,.65,-.18]],.115);ell(tail,[.65,.65,-.18],[.125,.115,.12],secondaryMat,true,'tail-tip');}
    else if(species==='cat')makeTail([[.33,.42,-.4],[.76,.34,-.43],[1.04,.72,-.22],[1.12,1.24,-.15],[.98,1.50,-.13]],.098);
    else if(species==='fox') {makeTail([[.31,.46,-.39],[.67,.37,-.59],[1.02,.49,-.43],[1.13,.79,-.20]],.23);const tip=ell(tail,[1.14,.90,-.15],[.20,.32,.21],secondaryMat,true,'white-tail-tip');tip.rotation.z=-.36;}
    else if(species==='rabbit') {tail=new THREE.Group();root.add(tail);ell(tail,[.46,.41,-.41],[.24,.24,.23],secondaryMat,true,'cotton-tail');}
    else if(species==='hedgehog')makeTail([[.25,.24,-.35],[.52,.18,-.38],[.70,.17,-.28]],.080);
    else if(['otter','axolotl'].includes(species)) {makeTail([[.22,.39,-.39],[.54,.23,-.65],[.91,.19,-.62],[1.17,.25,-.39]],species==='axolotl'?.13:.14);if(species==='axolotl'){const fin=ell(tail,[.78,.31,-.60],[.41,.23,.055],material(mix(c.colors.body,c.colors.secondary,.28)),true,'tail-fin');fin.rotation.y=-.7;}}
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
    const dims={softOval:[.064,.102],capsule:[.067,.179],round:[.063,.063],sparkle:[.079,.109],oval:[.098,.118],lash:[.064,.105],star:[.084,.128],glossy:[.086,.086],side:[.093,.093],sleepy:[.079,.091]};
    const [ew,eh]=dims[c.eyes]||dims.softOval,closed=expression==='closed';
    const squint={deadpan:.35,tearful:1.08,expectant:1.16,panicked:1.43,sleepy:.43,happy:.85,excited:1.13,surprised:1.26,sad:.87,focused:.79,confident:.79,shy:.76,angry:.68,proud:.74,worried:.94}[expression]??1;
    for(const side of [-1,1]) {
      const x=side*ex,y=faceLayout.eyeY+(['curious','skeptical'].includes(expression)&&side>0?.025:0),surfaceZ=frontZ(x,y);
      const eyeClosed=closed||(expression==='wink'&&side>0)||['delighted','laughing'].includes(expression);
      const eyeHeight=squint*(expression==='skeptical'&&side<0?.52:expression==='panicked'&&side>0?.84:1);
      const delta=.012,gx=(frontZ(x+delta,y)-frontZ(x-delta,y))/(delta*2),gy=(frontZ(x,y+delta)-frontZ(x,y-delta))/(delta*2);
      const normal=new THREE.Vector3(-gx,-gy,1).normalize();let clearance=.009;
      for(const sx of [-1,0,1])for(const sy of [-1,0,1]) {
        const px=sx*ew*scale,py=sy*eh*scale*eyeHeight;
        clearance=Math.max(clearance,frontZ(x+px,y+py)-surfaceZ-gx*px-gy*py+.006);
      }
      const group=new THREE.Group();group.name=side<0?'eye-left':'eye-right';group.position.set(x,y,surfaceZ+clearance);face.add(group);eyeGroups.push(group);group.userData.restScaleY=1;
      group.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),normal);
      group.rotateZ(['sad','shy','worried','tearful'].includes(expression)?side*.15:expression==='angry'?-side*.24:expression==='happy'?side*.06:expression==='focused'?-side*.09:expression==='proud'?side*.09:c.eyes==='softOval'&&c.family==='dots'?.13:0);
      if(eyeClosed)tube(group,[[-ew*scale,0,0],[0,(expression==='laughing'?.070:expression==='delighted'?.043:-.021)*scale,.010],[ew*scale,0,0]],.013*scale,eyeMat,18,false,['delighted','laughing'].includes(expression)?'delighted-lid':'closed-lid');
      else {
        const smallWhite=material('#FCFCF5','eye'),reflection=material('#FFFFFF','eye');
        if(c.shape==='human'&&['sparkle','glossy'].includes(c.eyes))ell(group,[0,0,-.008],[ew*scale*1.15,eh*scale*eyeHeight*1.09,.013],material('#E8D9BE','rubber'),false,'doll-eye-rim');
        if(c.shape==='frog'&&!['oval','side'].includes(c.eyes))ell(group,[0,0,-.073],[ew*scale*2.35,eh*scale*1.47,.098],material('#F8FFE8','rubber'),false,'frog-eye-white');
        if((c.eyes==='sleepy'||expression==='deadpan')&&!['focused','surprised','excited'].includes(expression)&&!['work','read','camera'].includes(c.action)) {
          ell(group,[0,-eh*.29*scale,.003],[ew*.44*scale,eh*.57*scale,.023],eyeMat,false,'eye');
          tube(group,[[-ew*scale,eh*.12*scale,.006],[0,eh*.16*scale,.011],[ew*scale,eh*.12*scale,.006]],.023*scale,eyeMat,16,false,'sleepy-upper-lid');
        } else if(c.eyes==='capsule')add(group,geometry('capsule-eye',()=>new THREE.CapsuleGeometry(1,2.8,6,20)),eyeMat,[0,0,0],[ew*scale,eh*scale*eyeHeight/2.4,.021],false,'eye');
        else ell(group,[0,0,0],[ew*scale,eh*scale*eyeHeight,.022],['oval','side'].includes(c.eyes)?smallWhite:eyeMat,false,'eye');
        if(['oval','side'].includes(c.eyes)) {
          const lookDown=['work','read','camera'].includes(c.action),lookX=c.eyes==='side'&&!lookDown?-.030*scale:expression==='thinking'?.019*scale:0;
          ell(group,[lookX,lookDown?-.020*scale:['proud','expectant'].includes(expression)?.025*scale:0,.021],[ew*(c.eyes==='side'?.74:.58)*scale,eh*(c.eyes==='side'?.74:.70)*scale*eyeHeight,.017],eyeMat,false,'pupil');
        }
        if(c.eyes==='lash') {
          tube(group,[[side*ew*.50*scale,eh*.17*scale,.009],[side*ew*1.12*scale,eh*.10*scale,.004],[side*ew*1.72*scale,eh*.31*scale,-.005]],.012*scale,eyeMat,14,false,'outer-lash');
        }
        if(c.eyes==='star') {
          // Four rounded rays remain a reflection inside the black oval, never
          // an outline replacing its silhouette or a detached sparkle badge.
          const glintGeometry=geometry('star-reflection',()=>{
            const rays=[[0,.051],[-.011,.013],[-.036,0],[-.011,-.013],[0,-.051],[.011,-.013],[.036,0],[.011,.013]];
            return new THREE.ShapeGeometry(new THREE.Shape(rays.map(([x,y])=>new THREE.Vector2(x,y))));
          });
          // A reflection needs only a few face triangles. A 10k-triangle
          // miniature pillow is smaller than one pixel per triangle and can
          // disappear completely in a correctly budgeted software preview.
          const glint=add(group,glintGeometry,reflection,[-ew*.11*scale,eh*.29*scale*eyeHeight,.027],[scale,scale,scale],false,'star-catchlight');
          glint.castShadow=false;glint.receiveShadow=false;
          const dot=add(group,geometry('star-reflection-dot',()=>new THREE.CircleGeometry(1,12)),reflection,[ew*.36*scale,-eh*.37*scale*eyeHeight,.026],[.010*scale,.010*scale,1],false,'catchlight-dot');dot.castShadow=false;dot.receiveShadow=false;
        } else if(['sparkle','glossy','oval'].includes(c.eyes)) {
          const shine=ell(group,[-ew*.29*scale,eh*.35*scale*eyeHeight,.027],[.018*scale,.020*scale,.006],reflection,false,'catchlight');
          shine.castShadow=false;shine.receiveShadow=false;
          if(c.eyes==='sparkle')shine.scale.multiplyScalar(.76);
          if(c.eyes==='glossy')ell(group,[ew*.35*scale,-eh*.34*scale*eyeHeight,.025],[.008*scale,.008*scale,.004],reflection,false,'catchlight-small');
        }
        if(c.shape==='frog'&&group.children.some(child=>child.name==='frog-eye-white')) {
          // The frog's raised white is a real convex surface. Keep the black
          // iris and its reflection in front of that surface, not inside it.
          for(const child of group.children)if(child.name!=='frog-eye-white')child.position.z+=.020;
        }
      }
      if(c.brows!=='none') {
        const browY=y+eh*scale*eyeHeight+.073,raised=(c.brows==='curious'||expression==='skeptical')&&side>0?.047:0,angle=expression==='angry'?-side*.048:expression==='worried'?side*.045:c.brows==='angled'?side*.045:c.brows==='straight'?0:c.brows==='curious'?side*.014:.006;
        faceLine([[x-.09*scale,browY+raised-angle],[x,browY+raised+(c.brows==='straight'?0:c.shape==='human'?.012:.025)],[x+.09*scale,browY+raised+angle]],.010*scale,material(c.shape==='human'?mix(c.colors.hair,c.colors.eyes,.24):mix(c.colors.eyes,c.colors.body,.10),'rubber'),'brow');
      }
    }
    const my=faceLayout.mouthY,mw=.103*faceLayout.size;
    if(c.mouth==='smile'&&expression!=='laughing') {
      const down=['sad','worried','angry'].includes(expression),asymmetric=['skeptical','confident','proud'].includes(expression);
      const curve=Array.from({length:13},(_,i)=>{const t=i/12,x=(t*2-1)*mw,bend=(down?-.031:.039)*(2*t-1)**2;return[x,my+(down?.023:-.027)+bend+(asymmetric?t*.024:0)];});
      faceLine(curve,c.shape==='human'?.0085:.010,c.shape==='human'?material(mix(c.colors.skin,'#684538',.70),'matteEye'):eyeMat,down?'frown':'smile');
    }
    else if(c.mouth==='pout')faceLine([[-mw*.68,my-.014],[0,my+.020],[mw*.68,my-.014]],.013,eyeMat,'pout');
    else if(c.mouth==='tiny'||c.mouth==='laugh'||c.mouth!=='none'&&expression==='laughing') {
      const laugh=c.mouth==='laugh'||expression==='laughing';ell(face,[0,my,frontZ(0,my)+.019],[mw*(laugh?1.16:.42),mw*(laugh?.93:.51),.024],eyeMat,false,'mouth');
      if(laugh)ell(face,[0,my-.043,frontZ(0,my)+.041],[mw*.62,.032,.012],material('#D98C91','skin'),false,'tongue');
    }
    if(c.expressionAccents&&['tearful','panicked'].includes(expression)){
      const dropMat=material('#8BD6F4','eye'),sides=expression==='tearful'?[-1,1]:[1];
      for(const side of sides){const x=side*(ex+.085),y=faceLayout.eyeY-(expression==='tearful'?.19:-.14);const drop=ell(face,[x,y,frontZ(x,y)+.025],[.025,.056,.018],dropMat,false,'expression-drop');drop.rotation.z=-side*.15;}
    }
    if(c.shape==='human')ell(face,[0,-.095,frontZ(0,-.095)+.006],[.033,.044,.025],material(mix(c.colors.skin,'#C29076',.05),'skin'),false,'nose');
    if(c.shape!=='human'&&['shy','happy','excited','laughing'].includes(expression))for(const side of [-1,1]) {
      const x=side*ex*1.32,y=faceLayout.eyeY-.17,m=material(mix(c.shape==='human'?c.colors.skin:c.colors.body,'#D98791',.25),'skin');
      ell(face,[x,y,frontZ(x,y)+.008],[.085*faceLayout.size,.033*faceLayout.size,.009],m,false,'cheek');
    }
  }
}
