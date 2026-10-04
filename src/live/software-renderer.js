import {NeutralToneMapping} from 'three';
/* Canvas2D renderer for an existing Three.js scene. No WebGL context is used.
 * Geometry remains three dimensional: triangle depth and interpolated normals
 * are resolved in a worker, then the resulting pixels are painted on the canvas.
 */
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
const colorArray = (color,fallback=[1,1,1]) => color?.isColor ? [color.r,color.g,color.b] : fallback;
function multiply4(a,b) {
  const out=new Float32Array(16);
  for(let c=0;c<4;c++)for(let r=0;r<4;r++)out[c*4+r]=a[r]*b[c*4]+a[4+r]*b[c*4+1]+a[8+r]*b[c*4+2]+a[12+r]*b[c*4+3];
  return out;
}
function attributeArray(attribute,size) {
  if(!attribute)return null;
  if(!attribute.isInterleavedBufferAttribute&&attribute.itemSize===size&&!attribute.normalized)return new Float32Array(attribute.array);
  const out=new Float32Array(attribute.count*size),getters=['getX','getY','getZ','getW'];
  for(let i=0;i<attribute.count;i++)for(let j=0;j<size;j++)out[i*size+j]=attribute[getters[j]](i);
  return out;
}

// This function is intentionally self-contained: the same kernel runs inside a
// Blob worker, and can run on the main thread if a host disallows Blob workers.
function createRasterKernel() {
  const geometries=new Map(),textures=new Map(),transforms=new Map();
  let depth,rgba,objectIds,linear,width=0,height=0;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const normalize=(x,y,z)=>{const l=1/Math.max(1e-12,Math.hypot(x,y,z));return[x*l,y*l,z*l];};
  const srgb=new Uint8ClampedArray(4097),decode=new Float32Array(256);
  for(let i=0;i<srgb.length;i++){const x=i/4096;srgb[i]=Math.round((x<=.0031308?12.92*x:1.055*Math.pow(x,1/2.4)-.055)*255);}
  for(let i=0;i<256;i++){const x=i/255;decode[i]=x<=.04045?x/12.92:Math.pow((x+.055)/1.055,2.4);}
  const m4=(a,b)=>{const o=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++)o[c*4+r]=a[r]*b[c*4]+a[4+r]*b[c*4+1]+a[8+r]*b[c*4+2]+a[12+r]*b[c*4+3];return o;};
  function normalMatrix(m) {
    const a=m[0],b=m[4],c=m[8],d=m[1],e=m[5],f=m[9],g=m[2],h=m[6],i=m[10];
    const n=[e*i-f*h,f*g-d*i,d*h-e*g,c*h-b*i,a*i-c*g,b*g-a*h,b*f-c*e,c*d-a*f,a*e-b*d];
    const det=a*n[0]+b*n[1]+c*n[2],s=1/(Math.abs(det)<1e-12?1:det);return n.map(x=>x*s);
  }
  function putGeometry(g) {
    if(!g.normals) {
      const n=new Float32Array(g.positions.length),p=g.positions,idx=g.indices,count=idx?idx.length:p.length/3;
      for(let i=0;i<count;i+=3){const a=(idx?idx[i]:i)*3,b=(idx?idx[i+1]:i+1)*3,c=(idx?idx[i+2]:i+2)*3,ax=p[b]-p[a],ay=p[b+1]-p[a+1],az=p[b+2]-p[a+2],bx=p[c]-p[a],by=p[c+1]-p[a+1],bz=p[c+2]-p[a+2],nx=ay*bz-az*by,ny=az*bx-ax*bz,nz=ax*by-ay*bx;for(const j of [a,b,c]){n[j]+=nx;n[j+1]+=ny;n[j+2]+=nz;}}
      for(let i=0;i<n.length;i+=3){const s=1/Math.max(1e-10,Math.hypot(n[i],n[i+1],n[i+2]));n[i]*=s;n[i+1]*=s;n[i+2]*=s;}g.normals=n;
    }
    geometries.set(g.id,g);
  }
  function textureSample(t,u,v,out) {
    if(!t){out[0]=out[1]=out[2]=out[3]=1;return;}
    u=u*t.repeat[0]+t.offset[0];v=v*t.repeat[1]+t.offset[1];
    u=t.wrapS===1000?u-Math.floor(u):clamp(u,0,.999999);v=t.wrapT===1000?v-Math.floor(v):clamp(v,0,.999999);
    if(t.flipY)v=1-v;
    const x=clamp(Math.floor(u*t.width),0,t.width-1),y=clamp(Math.floor(v*t.height),0,t.height-1),at=(y*t.width+x)*t.channels,dat=t.data;
    const r=dat[at]||0,g=t.channels>1?dat[at+1]:r,b=t.channels>2?dat[at+2]:r;
    out[0]=t.srgb?decode[r]:r/255;out[1]=t.srgb?decode[g]:g/255;out[2]=t.srgb?decode[b]:b/255;out[3]=t.channels===4?dat[at+3]/255:1;
  }
  function draw(frame) {
    const start=performance.now();
    for(const g of frame.geometries||[])putGeometry(g);
    for(const t of frame.textures||[])textures.set(t.id,t);
    const keepGeometry=new Set(frame.geometryIds),keepTextures=new Set(frame.textureIds),keepObjects=new Set(frame.meshes.map(m=>m.id));
    for(const id of geometries.keys())if(!keepGeometry.has(id))geometries.delete(id);
    for(const id of textures.keys())if(!keepTextures.has(id))textures.delete(id);
    for(const id of transforms.keys())if(!keepObjects.has(id))transforms.delete(id);
    if(width!==frame.width||height!==frame.height){width=frame.width;height=frame.height;depth=new Float32Array(width*height);linear=new Float32Array(width*height*4);objectIds=new Int32Array(width*height);}
    rgba=new Uint8ClampedArray(width*height*4);depth.fill(Infinity);objectIds.fill(-1);
    const bg=frame.background||[0,0,0,0];
    for(let i=0;i<linear.length;i+=4){linear[i]=bg[0]*bg[3];linear[i+1]=bg[1]*bg[3];linear[i+2]=bg[2]*bg[3];linear[i+3]=bg[3];}
    const tone=new Float32Array(4097),exposure=frame.exposure||1;
    for(let i=0;i<tone.length;i++){const x=i/512*exposure;tone[i]=frame.toneMapping?clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0,1):clamp(x,0,1);}
    const lights=frame.lights||[],ambient=frame.ambient||[.18,.18,.18],sky=frame.sky||[.24,.24,.24],ground=frame.ground||[.13,.14,.16];
    const view=normalize(frame.cameraWorld[8],frame.cameraWorld[9],frame.cameraWorld[10]);
    for(const light of lights)light.half=normalize(light.direction[0]+view[0],light.direction[1]+view[1],light.direction[2]+view[2]);
    const opaque=[],transparent=[];let triangles=0,pixels=0;
    for(let mi=0;mi<frame.meshes.length;mi++) {
      const mesh=frame.meshes[mi],g=geometries.get(mesh.geometry);if(!g)continue;
      const mat=mesh.material,mvp=m4(frame.viewProjection,mesh.matrix),normal=normalMatrix(mesh.matrix),count=g.positions.length/3;
      let tr=transforms.get(mesh.id);if(!tr||tr.length!==count*9){tr=new Float32Array(count*9);transforms.set(mesh.id,tr);}
      const p=g.positions,n=g.normals,uv=g.uv;let avgZ=0;
      for(let i=0;i<count;i++) {
        const j=i*3,k=i*9,x=p[j],y=p[j+1],z=p[j+2],cw=mvp[3]*x+mvp[7]*y+mvp[11]*z+mvp[15],iw=cw>1e-6?1/cw:0;
        const nx=normal[0]*n[j]+normal[1]*n[j+1]+normal[2]*n[j+2],ny=normal[3]*n[j]+normal[4]*n[j+1]+normal[5]*n[j+2],nz=normal[6]*n[j]+normal[7]*n[j+1]+normal[8]*n[j+2],ns=iw/Math.max(1e-9,Math.hypot(nx,ny,nz));
        tr[k]=((mvp[0]*x+mvp[4]*y+mvp[8]*z+mvp[12])*iw*.5+.5)*width;
        tr[k+1]=(.5-(mvp[1]*x+mvp[5]*y+mvp[9]*z+mvp[13])*iw*.5)*height;
        tr[k+2]=(mvp[2]*x+mvp[6]*y+mvp[10]*z+mvp[14])*iw;tr[k+3]=iw;
        tr[k+4]=nx*ns;tr[k+5]=ny*ns;tr[k+6]=nz*ns;tr[k+7]=uv?uv[i*2]*iw:0;tr[k+8]=uv?uv[i*2+1]*iw:0;avgZ+=tr[k+2];
      }
      const item={mesh,g,tr,index:mi,z:avgZ/count};(mat.transparent||mat.opacity<.999?transparent:opaque).push(item);
    }
    opaque.sort((a,b)=>(a.mesh.order-b.mesh.order)||(a.z-b.z));transparent.sort((a,b)=>(a.mesh.order-b.mesh.order)||(b.z-a.z));
    const sample=new Float32Array(4),bumpSample=new Float32Array(4);
    function renderItem(item,isTransparent) {
      const {mesh,g,tr}=item,m=mesh.material,idx=g.indices,total=idx?idx.length:g.positions.length/3;
      const from=mesh.start||0,to=Math.min(total,Number.isFinite(mesh.count)?from+mesh.count:total),map=textures.get(m.map),bump=textures.get(m.bump);
      const rough=m.roughness,shine=m.unlit?0:(.045+(1-rough)*(1-rough)*.19),power=8+(1-rough)*(1-rough)*115;
      const base=m.color,emit=m.emissive||[0,0,0],bumpAmount=Math.min(.15,(m.bumpScale||0)*13);
      for(let ii=from;ii+2<to;ii+=3) {
        const ia=idx?idx[ii]:ii,ib=idx?idx[ii+1]:ii+1,ic=idx?idx[ii+2]:ii+2,a=ia*9,b=ib*9,c=ic*9;
        if(tr[a+3]===0||tr[b+3]===0||tr[c+3]===0)continue;
        const ax=tr[a],ay=tr[a+1],bx=tr[b],by=tr[b+1],cx=tr[c],cy=tr[c+1],az=tr[a+2],bz=tr[b+2],cz=tr[c+2];
        if(Math.min(az,bz,cz)>1||Math.max(az,bz,cz)<-1)continue;
        const area=(bx-ax)*(cy-ay)-(by-ay)*(cx-ax);if(Math.abs(area)<.016)continue;
        if((m.side===0&&area>0)||(m.side===1&&area<0))continue;
        const minX=Math.max(0,Math.floor(Math.min(ax,bx,cx))),maxX=Math.min(width-1,Math.ceil(Math.max(ax,bx,cx))),minY=Math.max(0,Math.floor(Math.min(ay,by,cy))),maxY=Math.min(height-1,Math.ceil(Math.max(ay,by,cy)));
        if(minX>maxX||minY>maxY)continue;
        triangles++;
        const inv=1/area,waX=(by-cy)*inv,waY=(cx-bx)*inv,wbX=(cy-ay)*inv,wbY=(ax-cx)*inv;
        const wa0=((bx-(minX+.5))*(cy-(minY+.5))-(by-(minY+.5))*(cx-(minX+.5)))*inv;
        const wb0=((cx-(minX+.5))*(ay-(minY+.5))-(cy-(minY+.5))*(ax-(minX+.5)))*inv;
        const normalSign=area>0?-1:1;
        for(let y=minY;y<=maxY;y++) {
          let wa=wa0+(y-minY)*waY,wb=wb0+(y-minY)*wbY,at=y*width+minX;
          for(let x=minX;x<=maxX;x++,at++,wa+=waX,wb+=wbX) {
            const wc=1-wa-wb;if(wa<-.000001||wb<-.000001||wc<-.000001)continue;
            const z=wa*az+wb*bz+wc*cz;if(z<-1||z>1||(m.depthTest&&z>=depth[at]-.0000002))continue;
            let alpha=m.opacity,r=base[0],gg=base[1],bb=base[2],u=0,v=0;
            if(map||bump){const denom=wa*tr[a+3]+wb*tr[b+3]+wc*tr[c+3];u=(wa*tr[a+7]+wb*tr[b+7]+wc*tr[c+7])/denom;v=(wa*tr[a+8]+wb*tr[b+8]+wc*tr[c+8])/denom;}
            if(map){textureSample(map,u,v,sample);r*=sample[0];gg*=sample[1];bb*=sample[2];alpha*=sample[3];}
            if(alpha<=Math.max(.002,m.alphaTest||0))continue;
            let nx=wa*tr[a+4]+wb*tr[b+4]+wc*tr[c+4],ny=wa*tr[a+5]+wb*tr[b+5]+wc*tr[c+5],nz=wa*tr[a+6]+wb*tr[b+6]+wc*tr[c+6];
            const ns=normalSign/Math.max(1e-9,Math.sqrt(nx*nx+ny*ny+nz*nz));nx*=ns;ny*=ns;nz*=ns;
            if(!m.unlit) {
              const hemi=ny*.5+.5;let lr=ambient[0]+ground[0]+(sky[0]-ground[0])*hemi,lg=ambient[1]+ground[1]+(sky[1]-ground[1])*hemi,lb=ambient[2]+ground[2]+(sky[2]-ground[2])*hemi,sr=0,sg=0,sb=0;
              for(const light of lights){const dir=light.direction,nd=Math.max(0,(nx*dir[0]+ny*dir[1]+nz*dir[2]+.08)/1.08)*light.intensity,half=light.half,sp=shine*Math.pow(Math.max(0,nx*half[0]+ny*half[1]+nz*half[2]),power)*light.intensity;lr+=light.color[0]*nd;lg+=light.color[1]*nd;lb+=light.color[2]*nd;sr+=light.color[0]*sp;sg+=light.color[1]*sp;sb+=light.color[2]*sp;}
              if(bump){textureSample(bump,u,v,bumpSample);const grain=1+(bumpSample[0]-.5)*bumpAmount;lr*=grain;lg*=grain;lb*=grain;}
              const metal=m.metalness||0;r=r*lr+sr*(1-metal+metal*r);gg=gg*lg+sg*(1-metal+metal*gg);bb=bb*lb+sb*(1-metal+metal*bb);
            }
            if(g.colors&&m.vertexColors){r*=wa*g.colors[ia*3]+wb*g.colors[ib*3]+wc*g.colors[ic*3];gg*=wa*g.colors[ia*3+1]+wb*g.colors[ib*3+1]+wc*g.colors[ic*3+1];bb*=wa*g.colors[ia*3+2]+wb*g.colors[ib*3+2]+wc*g.colors[ic*3+2];}
            r+=emit[0];gg+=emit[1];bb+=emit[2];
            if(m.toneMapped&&!m.unlit){if(frame.neutral){const peak=Math.max(r,gg,bb,.000001),ratio=tone[clamp(Math.round(peak*512),0,4096)]/peak;r*=ratio;gg*=ratio;bb*=ratio;}else{r=tone[clamp(Math.round(r*512),0,4096)];gg=tone[clamp(Math.round(gg*512),0,4096)];bb=tone[clamp(Math.round(bb*512),0,4096)];}}
            const out=at*4;
            if(alpha>=.999){linear[out]=r;linear[out+1]=gg;linear[out+2]=bb;linear[out+3]=1;}
            else {const remain=1-alpha;linear[out]=r*alpha+linear[out]*remain;linear[out+1]=gg*alpha+linear[out+1]*remain;linear[out+2]=bb*alpha+linear[out+2]*remain;linear[out+3]=alpha+linear[out+3]*remain;}
            if(!isTransparent&&m.depthWrite){depth[at]=z;objectIds[at]=item.index;}pixels++;
          }
        }
      }
    }
    for(const item of opaque)renderItem(item,false);
    // A small screen-space contact approximation reinforces overlapping volumes
    // (muzzle, sleeves, hat) without inventing a hard shadow on the transparent floor.
    if(frame.ambientOcclusion&&width>180) {
      const radius=Math.max(2,Math.round(width/140)),offsets=[[-radius,0],[radius,0],[0,-radius],[0,radius],[-radius*2,-radius],[radius*2,-radius]];
      for(let y=radius*2;y<height-radius*2;y++)for(let x=radius*2;x<width-radius*2;x++) {
        const at=y*width+x,z=depth[at];if(!Number.isFinite(z))continue;let occluded=0;
        for(const [dx,dy]of offsets){const j=at+dy*width+dx,delta=z-depth[j];if(objectIds[j]!==objectIds[at]&&delta>.0015&&delta<.035)occluded+=1-delta/.045;}
        if(occluded>0){const amount=1-occluded*.027,i=at*4;linear[i]*=amount;linear[i+1]*=amount;linear[i+2]*=amount;}
      }
    }
    // Sparse projected fibers preserve the pile at silhouettes. These are sampled
    // root-to-tip segments from the real InstancedMesh, never expanded cylinders.
    let fiberCount=0;
    for(const fiber of frame.fibers||[]) {
      const mv=m4(frame.viewProjection,fiber.matrix),s=fiber.segments,m=fiber.matrix,base=fiber.color;
      for(let i=0;i<s.length;i+=7) {
        const x=s[i],y=s[i+1],z=s[i+2],tx=s[i+3],ty=s[i+4],tz=s[i+5];
        const aw=mv[3]*x+mv[7]*y+mv[11]*z+mv[15],bw=mv[3]*tx+mv[7]*ty+mv[11]*tz+mv[15];if(aw<1e-6||bw<1e-6)continue;
        const ax=((mv[0]*x+mv[4]*y+mv[8]*z+mv[12])/aw*.5+.5)*width,ay=(.5-(mv[1]*x+mv[5]*y+mv[9]*z+mv[13])/aw*.5)*height,az=(mv[2]*x+mv[6]*y+mv[10]*z+mv[14])/aw-.00001;
        const bx=((mv[0]*tx+mv[4]*ty+mv[8]*tz+mv[12])/bw*.5+.5)*width,by=(.5-(mv[1]*tx+mv[5]*ty+mv[9]*tz+mv[13])/bw*.5)*height,bz=(mv[2]*tx+mv[6]*ty+mv[10]*tz+mv[14])/bw-.00001;
        if(Math.max(ax,bx)<0||Math.min(ax,bx)>=width||Math.max(ay,by)<0||Math.min(ay,by)>=height)continue;
        const dx=tx-x,dy=ty-y,dz=tz-z,n=normalize(m[0]*dx+m[4]*dy+m[8]*dz,m[1]*dx+m[5]*dy+m[9]*dz,m[2]*dx+m[6]*dy+m[10]*dz),hemi=n[1]*.5+.5;
        let lr=ambient[0]+ground[0]+(sky[0]-ground[0])*hemi,lg=ambient[1]+ground[1]+(sky[1]-ground[1])*hemi,lb=ambient[2]+ground[2]+(sky[2]-ground[2])*hemi;
        for(const light of lights){const d=light.direction,q=Math.max(0,(n[0]*d[0]+n[1]*d[1]+n[2]*d[2]+.12)/1.12)*light.intensity;lr+=light.color[0]*q;lg+=light.color[1]*q;lb+=light.color[2]*q;}
        const tint=s[i+6];let r=base[0]*lr*tint,g=base[1]*lg*tint,b=base[2]*lb*tint;if(frame.neutral){const peak=Math.max(r,g,b,.000001),ratio=tone[clamp(Math.round(peak*512),0,4096)]/peak;r*=ratio;g*=ratio;b*=ratio;}else{r=tone[clamp(Math.round(r*512),0,4096)];g=tone[clamp(Math.round(g*512),0,4096)];b=tone[clamp(Math.round(b*512),0,4096)];}
        const steps=Math.max(1,Math.ceil(Math.hypot(bx-ax,by-ay)*1.3)),opacity=fiber.opacity;fiberCount++;
        for(let j=0;j<=steps;j++) {
          const t=j/steps,px=ax+(bx-ax)*t,py=ay+(by-ay)*t,pz=az+(bz-az)*t,ix=Math.floor(px),iy=Math.floor(py),fx=px-ix,fy=py-iy;
          for(let yy=0;yy<2;yy++)for(let xx=0;xx<2;xx++) {
            const sx=ix+xx,sy=iy+yy;if(sx<0||sx>=width||sy<0||sy>=height)continue;const at=sy*width+sx;if(pz>depth[at]+.000025||pz<-1||pz>1)continue;
            const alpha=(xx?fx:1-fx)*(yy?fy:1-fy)*opacity*(1-t*.32),remain=1-alpha,o=at*4;
            linear[o]=r*alpha+linear[o]*remain;linear[o+1]=g*alpha+linear[o+1]*remain;linear[o+2]=b*alpha+linear[o+2]*remain;linear[o+3]=alpha+linear[o+3]*remain;
          }
        }
      }
    }
    for(const item of transparent)renderItem(item,true);
    for(let i=0;i<rgba.length;i+=4) {
      const alpha=clamp(linear[i+3],0,1),s=alpha>1e-5?1/alpha:0;
      rgba[i]=srgb[clamp(Math.round(linear[i]*s*4096),0,4096)];rgba[i+1]=srgb[clamp(Math.round(linear[i+1]*s*4096),0,4096)];rgba[i+2]=srgb[clamp(Math.round(linear[i+2]*s*4096),0,4096)];rgba[i+3]=Math.round(alpha*255);
    }
    return {id:frame.id,version:frame.version,width,height,pixels:rgba.buffer,stats:{ms:performance.now()-start,triangles,pixels,fibers:fiberCount,calls:opaque.length+transparent.length}};
  }
  return {draw};
}

export class SoftwareRenderer {
  constructor(canvas) {
    this.domElement=canvas;this.isSoftwareRenderer=true;this.type='SoftwareRenderer';this.shadowMap={enabled:false};this.outputColorSpace='srgb';this.toneMapping=4;this.toneMappingExposure=1;
    this.capabilities={isWebGL2:false,maxTextureSize:1024};this.info={render:{frame:0,calls:0,triangles:0},memory:{geometries:0,textures:0}};
    this._ctx=canvas.getContext('2d',{alpha:true});if(!this._ctx)throw new Error('Canvas2D is unavailable.');
    this._ratio=1;this._width=canvas.width||512;this._height=canvas.height||512;this._version=0;this._sequence=0;this._painted=0;this._busy=false;this._pending=null;this._waiters=[];this._knownGeometry=new Set();this._knownTextures=new Set();this._lastDispatch=-Infinity;this._adaptive=1;
    this.previewLimit=(globalThis.navigator?.hardwareConcurrency||8)<=4?384:512;this.captureLimit=1024;this.highQuality=false;this.frameInterval=110;this.ambientOcclusion=true;this.renderFibers=true;
    try {
      if(typeof Worker!=='function')throw new Error('Worker unavailable');
      const source=`const kernel=(${createRasterKernel.toString()})();self.onmessage=event=>{try{const result=kernel.draw(event.data);self.postMessage(result,[result.pixels]);}catch(error){self.postMessage({error:String(error?.stack||error)});}};`;
      this._workerUrl=URL.createObjectURL(new Blob([source],{type:'text/javascript'}));this._worker=new Worker(this._workerUrl);
      this._worker.onmessage=e=>e.data.error?this._recover(e.data.error):this._receive(e.data);this._worker.onerror=e=>{e.preventDefault?.();this._recover(e.message);};
    } catch {this._kernel=createRasterKernel();}
  }
  setPixelRatio(ratio=1){this._ratio=Math.max(.25,Number(ratio)||1);this.setSize(this._width,this._height,false);return this;}
  getPixelRatio(){return this._ratio;}
  get busy(){return this._busy||!!this._pending;}
  setSize(width,height,updateStyle=true) {
    this._width=Math.max(1,Math.round(width));this._height=Math.max(1,Math.round(height));
    const w=Math.max(1,Math.round(this._width*this._ratio)),h=Math.max(1,Math.round(this._height*this._ratio));
    if(this.domElement.width!==w||this.domElement.height!==h){this.domElement.width=w;this.domElement.height=h;this._version++;}
    if(updateStyle&&this.domElement.style){this.domElement.style.width=width+'px';this.domElement.style.height=height+'px';}return this;
  }
  getSize(target){return target?.set?target.set(this._width,this._height):{width:this._width,height:this._height};}
  getDrawingBufferSize(target){return target?.set?target.set(this.domElement.width,this.domElement.height):{width:this.domElement.width,height:this.domElement.height};}
  setClearColor(color,alpha=1){this._clear=colorArray(color,[0,0,0]).concat(alpha);return this;}
  setClearAlpha(alpha){this._clear=this._clear||[0,0,0,0];this._clear[3]=alpha;return this;}
  clear(){this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height);}
  render(scene,camera) {
    if(this._disposed)return;
    this._pending={scene,camera,id:++this._sequence};this._lastRequest=this._pending;this._schedule();
  }
  flush() {
    if(this._disposed)return Promise.reject(new Error('Renderer disposed.'));
    const target=this._sequence;if(this._painted>=target)return Promise.resolve();
    return new Promise((resolve,reject)=>{this._waiters.push({target,resolve,reject});this._schedule(true);});
  }
  _schedule(force=false) {
    if(this._disposed||this._busy||!this._pending)return;
    if(this._timer){clearTimeout(this._timer);this._timer=null;}
    const wait=force||this._waiters.length?0:this.frameInterval-(performance.now()-this._lastDispatch);
    if(wait>1){this._timer=setTimeout(()=>{this._timer=null;this._schedule();},wait);return;}
    const request=this._pending;this._pending=null;this._busy=true;this._lastDispatch=performance.now();
    try {
      const frame=this._collect(request);
      if(this._worker){const transfer=[];for(const g of frame.geometries)for(const key of ['positions','normals','indices','uv','colors'])if(g[key])transfer.push(g[key].buffer);for(const t of frame.textures)transfer.push(t.data.buffer);for(const f of frame.fibers)transfer.push(f.segments.buffer);this._worker.postMessage(frame,transfer);}
      else setTimeout(()=>{try{this._receive(this._kernel.draw(frame));}catch(error){this._busy=false;for(const w of this._waiters.splice(0))w.reject(error);}},0);
    } catch(error){this._busy=false;for(const w of this._waiters.splice(0))w.reject(error);console.error('SoftwareRenderer:',error);}
  }
  _collect({scene,camera,id}) {
    scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);
    const high=this.highQuality||Math.max(this._width,this._height)>=1000,limit=this.highQuality?1600:high?this.captureLimit:Math.round(this.previewLimit*this._adaptive),scale=Math.min(1,limit/Math.max(this.domElement.width,this.domElement.height));
    const frame={id,version:this._version,width:Math.max(1,Math.round(this.domElement.width*scale)),height:Math.max(1,Math.round(this.domElement.height*scale)),viewProjection:multiply4(camera.projectionMatrix.elements,camera.matrixWorldInverse.elements),cameraWorld:Array.from(camera.matrixWorld.elements),background:scene.background?.isColor?colorArray(scene.background).concat(1):this._clear||[0,0,0,0],toneMapping:this.toneMapping!==0,neutral:this.toneMapping===NeutralToneMapping,exposure:this.toneMappingExposure,ambientOcclusion:this.ambientOcclusion,geometries:[],textures:[],geometryIds:[],textureIds:[],meshes:[],fibers:[],lights:[],ambient:[.10,.10,.10],sky:[.08,.08,.08],ground:[.06,.065,.075]};
    const geometryIds=new Set(),textureIds=new Set();
    let totalFibers=0;scene.traverseVisible?.(o=>{if(o.isInstancedMesh&&o.name==='surface-fibers')totalFibers+=o.count;});
    const fiberStride=Math.max(1,Math.ceil(totalFibers/(high?11000:6000)));
    const textureData=texture=> {
      if(!texture)return null;const key=(texture.uuid||texture.id)+':'+(texture.version||0);if(textureIds.has(key))return key;
      let image=texture.image||texture.source?.data,data=image?.data,width=image?.width,height=image?.height;
      if(!data&&image?.getContext){try{const pixels=image.getContext('2d')?.getImageData(0,0,width,height);data=pixels?.data;}catch{}}
      if(!data||!width||!height)return null;textureIds.add(key);
      if(!this._knownTextures.has(key))frame.textures.push({id:key,width,height,data:new Uint8Array(data),channels:Math.round(data.length/(width*height)),repeat:[texture.repeat?.x??1,texture.repeat?.y??1],offset:[texture.offset?.x||0,texture.offset?.y||0],wrapS:texture.wrapS,wrapT:texture.wrapT,flipY:!!texture.flipY,srgb:texture.colorSpace==='srgb'});
      return key;
    };
    const addMesh=(object,matrix,suffix='')=> {
      const geo=object.geometry,pos=geo?.attributes?.position;if(!pos||object.isSkinnedMesh)return;
      const key=geo.uuid+':'+(pos.version||0)+':'+(geo.attributes.normal?.version||0);
      if(!geometryIds.has(key)){geometryIds.add(key);if(!this._knownGeometry.has(key))frame.geometries.push({id:key,positions:attributeArray(pos,3),normals:attributeArray(geo.attributes.normal,3),uv:attributeArray(geo.attributes.uv,2),colors:attributeArray(geo.attributes.color,3),indices:geo.index?new Uint32Array(geo.index.array):null});}
      const groups=Array.isArray(object.material)?geo.groups:[{start:geo.drawRange?.start||0,count:geo.drawRange?.count??Infinity,materialIndex:0}];
      for(let gi=0;gi<groups.length;gi++) {
        const group=groups[gi],m=Array.isArray(object.material)?object.material[group.materialIndex]:object.material;
        if(!m||m.visible===false||m.isShadowMaterial||(m.opacity??1)<.002)continue;
        frame.meshes.push({id:object.uuid+suffix+':'+gi,geometry:key,matrix:Array.from(matrix),start:group.start,count:group.count,order:object.renderOrder||0,material:{color:colorArray(m.color),emissive:colorArray(m.emissive,[0,0,0]).map(x=>x*(m.emissiveIntensity??1)),opacity:m.opacity??1,transparent:!!m.transparent,side:m.side??0,roughness:m.roughness??.75,metalness:m.metalness||0,depthTest:m.depthTest!==false,depthWrite:m.depthWrite!==false,alphaTest:m.alphaTest||0,unlit:!!m.isMeshBasicMaterial,toneMapped:m.toneMapped!==false,map:textureData(m.map),bump:textureData(m.bumpMap),bumpScale:m.bumpScale||0,vertexColors:!!m.vertexColors}});
      }
    };
    const walk=object=> {
      if(object.visible===false)return;
      if(object.isLight) {
        const col=colorArray(object.color),intensity=object.intensity??1;
        if(object.isHemisphereLight){const gc=colorArray(object.groundColor);for(let i=0;i<3;i++){frame.sky[i]+=col[i]*intensity*.22;frame.ground[i]+=gc[i]*intensity*.20;}}
        else if(object.isAmbientLight)for(let i=0;i<3;i++)frame.ambient[i]+=col[i]*intensity*.30;
        else if(object.isDirectionalLight||object.isPointLight||object.isSpotLight){object.target?.updateMatrixWorld(true);const p=object.matrixWorld.elements,t=object.target?.matrixWorld.elements,dx=p[12]-(t?.[12]||0),dy=p[13]-(t?.[13]||0),dz=p[14]-(t?.[14]||0),length=Math.hypot(dx,dy,dz)||1;frame.lights.push({direction:[dx/length,dy/length,dz/length],color:col,intensity:intensity/Math.PI});}
      }
      if(object.isMesh&&(!camera.layers||camera.layers.test(object.layers))) {
        if(object.isInstancedMesh) {
          if(object.name==='surface-fibers'&&this.renderFibers) {
            object.geometry.computeBoundingBox();const length=object.geometry.boundingBox.max.y,data=object.instanceMatrix.array,colors=object.instanceColor?.array,segments=new Float32Array(Math.ceil(object.count/fiberStride)*7);let at=0;
            for(let i=0;i<object.count;i+=fiberStride){const j=i*16;segments[at++]=data[j+12];segments[at++]=data[j+13];segments[at++]=data[j+14];segments[at++]=data[j+12]+data[j+4]*length;segments[at++]=data[j+13]+data[j+5]*length;segments[at++]=data[j+14]+data[j+6]*length;segments[at++]=colors?(colors[i*3]+colors[i*3+1]+colors[i*3+2])/3:1;}
            const kind=object.parent?.userData.surfaceMaterial||object.parent?.material?.name;frame.fibers.push({matrix:Array.from(object.matrixWorld.elements),segments,color:colorArray(object.material.color),opacity:['fabric','knit'].includes(kind)?.34:.56});
          } else if(object.name!=='surface-fibers'&&object.count<=256)for(let i=0;i<object.count;i++)addMesh(object,multiply4(object.matrixWorld.elements,object.instanceMatrix.array.subarray(i*16,i*16+16)),':'+i);
        } else if(!object.material?.isShadowMaterial)addMesh(object,object.matrixWorld.elements);
      }
      for(const child of object.children||[])walk(child);
    };
    walk(scene);if(!frame.lights.length)frame.lights.push({direction:[-.40,.71,.58],color:[1,.965,.91],intensity:.87});
    frame.lights=frame.lights.slice(0,4);frame.geometryIds=[...geometryIds];frame.textureIds=[...textureIds];this._knownGeometry=geometryIds;this._knownTextures=textureIds;this.info.memory={geometries:geometryIds.size,textures:textureIds.size};return frame;
  }
  _receive(result) {
    if(this._disposed)return;this._busy=false;
    if(result.version===this._version) {
      const image=new ImageData(new Uint8ClampedArray(result.pixels),result.width,result.height);
      if(result.width===this.domElement.width&&result.height===this.domElement.height)this._ctx.putImageData(image,0,0);
      else {
        if(!this._bufferCanvas)this._bufferCanvas=typeof OffscreenCanvas==='function'?new OffscreenCanvas(result.width,result.height):this.domElement.ownerDocument.createElement('canvas');
        const canvas=this._bufferCanvas;if(canvas.width!==result.width)canvas.width=result.width;if(canvas.height!==result.height)canvas.height=result.height;
        canvas.getContext('2d').putImageData(image,0,0);this._ctx.clearRect(0,0,this.domElement.width,this.domElement.height);this._ctx.imageSmoothingEnabled=true;this._ctx.imageSmoothingQuality='high';this._ctx.drawImage(canvas,0,0,this.domElement.width,this.domElement.height);
      }
      this._painted=Math.max(this._painted,result.id);this.info.render={...result.stats,frame:(this.info.render.frame||0)+1};
      if(this.domElement.dataset){this.domElement.dataset.renderedFrame=String(result.id);this.domElement.dataset.renderMs=result.stats.ms.toFixed(1);this.domElement.dataset.renderedWidth=String(result.width);this.domElement.dataset.renderedHeight=String(result.height);this.domElement.dataset.renderedFibers=String(result.stats.fibers||0);this.domElement.dataset.renderer='software';}
      if(Math.max(this._width,this._height)<1000){if(result.stats.ms>155)this._adaptive=Math.max(.62,this._adaptive*.88);else if(result.stats.ms<65)this._adaptive=Math.min(1,this._adaptive+.025);}
    }
    const remaining=[];for(const w of this._waiters)if(this._painted>=w.target)w.resolve();else remaining.push(w);this._waiters=remaining;this._schedule();
  }
  _recover(error) {
    if(this._disposed)return;this._worker?.terminate();this._worker=null;this._kernel=createRasterKernel();this._knownGeometry.clear();this._knownTextures.clear();this._busy=false;this._pending=this._pending||this._lastRequest;
    console.warn('SoftwareRenderer is using the local CPU fallback:',error);this._schedule(true);
  }
  dispose() {
    this._disposed=true;this._worker?.terminate();if(this._workerUrl)URL.revokeObjectURL(this._workerUrl);if(this._timer)clearTimeout(this._timer);this._pending=null;this._kernel=null;this._bufferCanvas=null;
    for(const w of this._waiters.splice(0))w.reject(new Error('Renderer disposed.'));this._knownGeometry.clear();this._knownTextures.clear();
  }
}
