import { resolveCharacter } from './studio-model.js?v=86';
import { inspectCompositionPack, isLocalCreationAsset, resolveCompositionConfig, selectCompositionLayers } from './studio-creation.js?v=86';
import { getTrustedAsset,getTrustedAssetBySrc } from './studio-composition-catalog.js?v=86';

const clone = value => structuredClone(value);
const object = value => value && typeof value === 'object' && !Array.isArray(value);
function canonical(value){
  if(Array.isArray(value))return `[${value.map(canonical).join(',')}]`;
  if(object(value))return `{${Object.keys(value).sort().map(key=>`${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
}
const same=(left,right)=>canonical(left)===canonical(right);

function referencedAssets(resolution,{catalog=null}={}) {
  if (!resolution || resolution.availability!=='available' || !resolution.composition || !resolution.renderPlan) throw new Error('当前组合没有可验证的真实渲染结果');
  const byId=new Map();
  for (const stage of resolution.stageMetadata||[]) {
    const asset=stage?.asset;
    if (!asset || typeof asset.id!=='string' || typeof asset.sha256!=='string' || typeof asset.src!=='string' || !isLocalCreationAsset(asset.src)) throw new Error('composition 资源缺少可信本地预载引用');
    if (byId.has(asset.id)) continue;
    byId.set(asset.id,asset);
  }
  const expected=resolution.composition.assetRefs;
  if (!Array.isArray(expected) || expected.some(ref=>{
    const asset=byId.get(ref.id),trusted=catalog?.assets?.find(item=>item.id===ref.id)??getTrustedAsset(ref.id);
    return !asset || !trusted || asset.version!==ref.version || asset.sha256!==ref.sha256 || trusted.version!==ref.version || trusted.sha256!==ref.sha256 || trusted.src!==asset.src;
  })) throw new Error('composition 引用与可信资源目录不一致');
  if (expected.length!==byId.size) throw new Error('composition 预载资源清单与实际引用数量不一致');
  return [...byId.values()];
}

const verifiedAssetCache = new Map();
async function verifyAssetBytes(asset,{signal}={}) {
  const cacheKey=`${asset.id}@${asset.version}:${asset.sha256}`;
  if (verifiedAssetCache.has(cacheKey)) return verifiedAssetCache.get(cacheKey);
  if (signal?.aborted) throw new Error('素材预载已取消');
  if (typeof fetch!=='function' || !globalThis.crypto?.subtle) throw new Error('浏览器无法核验 PNG SHA-256');
  const promise=(async()=>{
    const response=await fetch(asset.src,{signal,cache:'force-cache'});
    if (!response.ok) throw new Error(`资源载入失败：${asset.id}`);
    const bytes=await response.arrayBuffer();
    const digest=await crypto.subtle.digest('SHA-256',bytes);
    const actual=[...new Uint8Array(digest)].map(value=>value.toString(16).padStart(2,'0')).join('');
    if (actual!==asset.sha256) throw new Error(`素材 ${asset.id} 的 SHA-256 与可信目录不符`);
    return true;
  })();
  verifiedAssetCache.set(cacheKey,promise);
  try { return await promise; }
  catch(error) { verifiedAssetCache.delete(cacheKey); throw error; }
}

export async function preloadCompositionAssets(resolution,{signal,catalog=null}={}) {
  const assets=referencedAssets(resolution,{catalog});
  await Promise.all(assets.map(asset=>verifyAssetBytes(asset,{signal})));
  const images=await Promise.all(assets.map(async asset=>({id:asset.id,asset,image:await loadImage(asset.src)})));
  for (const entry of images) {
    if (entry.image.naturalWidth!==entry.asset.width || entry.image.naturalHeight!==entry.asset.height) throw new Error(`素材 ${entry.id} 的像素尺寸与可信目录不符`);
  }
  return images;
}

function readPath(config, path) {
  if (typeof path !== 'string' || path.split('.').some(part => !part || ['__proto__', 'prototype', 'constructor'].includes(part))) {
    throw new Error('组合素材引用了无效配置字段');
  }
  return path.split('.').reduce((value, key) => value?.[key], config);
}

function parseColor(value) {
  if (typeof value !== 'string' || !/^#[0-9a-f]{6}$/i.test(value)) throw new Error('组合图层染色值无效');
  return value;
}

function safeLayer(layer, width, height) {
  if (!layer || typeof layer.id !== 'string' || !isLocalCreationAsset(layer.src) || !Number.isFinite(layer.z)) {
    throw new Error('组合图层编号、顺序或本地图片路径无效');
  }
  if (layer.src.startsWith('//') || layer.src.includes('\\')) throw new Error('组合图层不能读取外部图片');
  return { ...layer, width, height };
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    const loaded = new Promise((done, fail) => {
      image.onload = () => done(image);
      image.onerror = () => fail(new Error(`组合图层载入失败：${src}`));
    });
    image.src = src;
    const decoded = typeof image.decode === 'function' ? image.decode() : loaded;
    Promise.resolve(decoded).then(() => {
      if (!image.naturalWidth || !image.naturalHeight) throw new Error(`组合图层为空：${src}`);
      resolve(image);
    }).catch(async error => {
      try {
        const fallback = await loaded;
        if (!fallback.naturalWidth || !fallback.naturalHeight) throw error;
        resolve(fallback);
      } catch {
        reject(error instanceof Error ? error : new Error(`组合图层载入失败：${src}`));
      }
    });
  });
}

function makeCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function paintBackground(context) {
  // The character canvas is always transparent; UI surface colors live outside it.
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function renderTintedLayer(image, color, width, height) {
  const canvas = makeCanvas(width, height);
  const context = canvas.getContext('2d', { alpha: true });
  if (!context) throw new Error('浏览器无法创建组合图层');
  context.clearRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);
  context.globalCompositeOperation = 'multiply';
  context.fillStyle = parseColor(color);
  context.fillRect(0, 0, width, height);
  context.globalCompositeOperation = 'destination-in';
  context.drawImage(image, 0, 0, width, height);
  context.globalCompositeOperation = 'source-over';
  return canvas;
}

const pointCross = (a,b,c)=>(b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);
const pointOnSegment = (a,b,p,epsilon=1e-10)=>Math.abs(pointCross(a,b,p))<=epsilon
  &&p.x>=Math.min(a.x,b.x)-epsilon&&p.x<=Math.max(a.x,b.x)+epsilon
  &&p.y>=Math.min(a.y,b.y)-epsilon&&p.y<=Math.max(a.y,b.y)+epsilon;
function segmentsIntersect(a,b,c,d,epsilon=1e-10) {
  const abC=pointCross(a,b,c),abD=pointCross(a,b,d),cdA=pointCross(c,d,a),cdB=pointCross(c,d,b);
  if(((abC>epsilon&&abD< -epsilon)||(abC< -epsilon&&abD>epsilon))
    &&((cdA>epsilon&&cdB< -epsilon)||(cdA< -epsilon&&cdB>epsilon)))return true;
  return (Math.abs(abC)<=epsilon&&pointOnSegment(a,b,c,epsilon))
    ||(Math.abs(abD)<=epsilon&&pointOnSegment(a,b,d,epsilon))
    ||(Math.abs(cdA)<=epsilon&&pointOnSegment(c,d,a,epsilon))
    ||(Math.abs(cdB)<=epsilon&&pointOnSegment(c,d,b,epsilon));
}

function validateOcclusionCutouts(cutouts) {
  if(cutouts===undefined)return [];
  if(!Array.isArray(cutouts))throw new Error('动态部件遮挡裁切必须是可信多边形列表');
  return cutouts.map((polygon,polygonIndex)=>{
    if(!Array.isArray(polygon)||polygon.length<3)throw new Error(`遮挡裁切多边形 ${polygonIndex+1} 至少需要三个点`);
    const points=polygon.map((point,pointIndex)=>{
      if(!object(point)||Object.keys(point).length!==2||!Object.hasOwn(point,'x')||!Object.hasOwn(point,'y')
        ||!Number.isFinite(point.x)||!Number.isFinite(point.y)||point.x<0||point.x>1||point.y<0||point.y>1){
        throw new Error(`遮挡裁切多边形 ${polygonIndex+1} 的第 ${pointIndex+1} 个点无效或超出归一化画布`);
      }
      return {x:point.x,y:point.y};
    });
    const count=points.length,epsilon=1e-10;
    for(let index=0;index<count;index++){
      const previous=points[(index+count-1)%count],current=points[index],next=points[(index+1)%count];
      if((previous.x===current.x&&previous.y===current.y)||(current.x===next.x&&current.y===next.y))throw new Error(`遮挡裁切多边形 ${polygonIndex+1} 含重复相邻点`);
      if(Math.abs(pointCross(previous,current,next))<=epsilon){
        const backtrack=(previous.x-current.x)*(next.x-current.x)+(previous.y-current.y)*(next.y-current.y);
        if(backtrack>epsilon)throw new Error(`遮挡裁切多边形 ${polygonIndex+1} 的相邻边重叠`);
      }
    }
    let twiceArea=0;
    for(let index=0;index<count;index++){
      const current=points[index],next=points[(index+1)%count];
      twiceArea+=current.x*next.y-next.x*current.y;
    }
    if(!Number.isFinite(twiceArea)||Math.abs(twiceArea)<=epsilon)throw new Error(`遮挡裁切多边形 ${polygonIndex+1} 面积为零`);
    for(let first=0;first<count;first++){
      const firstNext=(first+1)%count;
      for(let second=first+1;second<count;second++){
        const secondNext=(second+1)%count;
        if(first===second||firstNext===second||secondNext===first)continue;
        if(segmentsIntersect(points[first],points[firstNext],points[second],points[secondNext],epsilon))throw new Error(`遮挡裁切多边形 ${polygonIndex+1} 自相交`);
      }
    }
    return points;
  });
}

/** Draw a resolver-issued dynamic part; updateResolved re-resolves the plan before calling this. */
export function drawResolvedDynamicPart(context,{image,part,width,height}) {
  const rect=part?.sourceRect,transform=part?.transform;
  if(!context||!image||!Number.isInteger(width)||width<1||!Number.isInteger(height)||height<1
    ||!rect||![rect.x,rect.y,rect.width,rect.height].every(Number.isInteger)||rect.width<1||rect.height<1
    ||!transform||!['a','b','c','d','e','f'].every(key=>Number.isFinite(transform[key])))throw new Error('动态部件缺少有效画布、源区域或仿射变换');
  const cutouts=validateOcclusionCutouts(part.occlusion?.cutouts);
  context.save();
  try{
    if(cutouts.length){
      for(const polygon of cutouts){
        // Intersect one evenodd hole at a time. Separate clip regions remove
        // the union of overlapping masks instead of XOR-ing their overlap.
        context.setTransform(1,0,0,1,0,0);
        context.beginPath();
        context.rect(0,0,width,height);
        context.moveTo(polygon[0].x*width,polygon[0].y*height);
        for(let index=1;index<polygon.length;index++)context.lineTo(polygon[index].x*width,polygon[index].y*height);
        context.closePath();
        context.clip('evenodd');
      }
    }
    context.setTransform(transform.a*width,transform.b*height,transform.c*width,transform.d*height,transform.e*width,transform.f*height);
    context.drawImage(image,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
  }finally{
    context.restore();
  }
}

/**
 * Renders only a registered, fixed-front layered 2D pack. It intentionally
 * exposes no URL or file input, so project JSON cannot inject image paths.
 */
export class LayeredComposer {
  constructor(container, { onError = () => {} } = {}) {
    if (!container || typeof container.append !== 'function' || typeof document === 'undefined') {
      throw new Error('组合预览需要一个真实页面容器');
    }
    this.container = container;
    this.onError = onError;
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'character-composer-canvas';
    this.canvas.setAttribute('role', 'img');
    this.canvas.setAttribute('aria-label', '当前设置的正面分层角色合成');
    this.canvas.dataset.previewStatus = 'empty';
    this.canvas.style.display = 'block';
    this.canvas.style.width = '100%';
    this.canvas.style.height = 'auto';
    container.append(this.canvas);
    this.context = this.canvas.getContext('2d', { alpha: true });
    if (!this.context) {
      this.canvas.remove();
      throw new Error('浏览器无法创建 2D 组合画布');
    }
    this.revision = 0;
    this.resolutionRevision = 0;
    this.ready = false;
    this.frame = null;
    this.disposed = false;
  }

  async update(pack, config, { templatePreview = false } = {}) {
    if (this.disposed) throw new Error('组合预览已关闭');
    const revision = ++this.revision;
    this.ready = false;
    this.frame = null;
    this.pack = null;
    this.config = null;
    this.canvas.dataset.previewStatus = 'loading';
    this.canvas.dataset.revision = String(revision);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    try {
      const assessment = inspectCompositionPack(pack, config);
      if (assessment.availability !== 'available' && !templatePreview) throw new Error(assessment.reason);
      const current = resolveCompositionConfig(pack, config, {templatePreview});
      const width = pack.width, height = pack.height;
      const layers = selectCompositionLayers(pack, current).map(layer => safeLayer(layer, width, height)).sort((a, b) => a.z - b.z);
      const images = await Promise.all(layers.map(async layer => ({ layer, image: await loadImage(layer.src) })));
      if (revision !== this.revision || this.disposed) return false;

      for (const { layer, image } of images) {
        if (image.naturalWidth !== width || image.naturalHeight !== height) {
          throw new Error(`图层“${layer.id}”尺寸必须与素材包 ${width}×${height} 完全一致`);
        }
      }
      const frame = makeCanvas(width, height);
      const context = frame.getContext('2d', { alpha: true });
      if (!context) throw new Error('浏览器无法创建组合结果');
      for (const { layer, image } of images) {
        const drawable = layer.tintPath
          ? renderTintedLayer(image, readPath(current, layer.tintPath), width, height)
          : image;
        context.drawImage(drawable, 0, 0, width, height);
      }
      if (revision !== this.revision || this.disposed) return false;

      this.canvas.width = width;
      this.canvas.height = height;
      this.canvas.style.aspectRatio = `${width} / ${height}`;
      this.context = this.canvas.getContext('2d', { alpha: true });
      this.context.clearRect(0, 0, width, height);
      paintBackground(this.context);
      this.context.drawImage(frame, 0, 0);
      this.frame = frame;
      this.pack = pack;
      this.config = clone(current);
      this.ready = true;
      this.canvas.dataset.family = current.family;
      this.canvas.dataset.view = 'front';
      this.canvas.dataset.renderingMode = assessment.availability === 'available' ? 'current-configuration' : 'selected-template-preview';
      this.canvas.setAttribute('aria-label', assessment.availability === 'available'
        ? '当前模板透明画布合成预览'
        : '所选模板参考预览；高级 Prompt 设定未渲染');
      this.canvas.dataset.previewStatus = 'ready';
      this.canvas.dataset.renderedRevision = String(revision);
      return true;
    } catch (error) {
      if (revision !== this.revision || this.disposed) return false;
      if (revision === this.revision && !this.disposed) {
        this.ready = false;
        this.frame = null;
        this.pack = null;
        this.config = null;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.dataset.previewStatus = 'failed';
        this.canvas.dataset.renderedRevision = '';
        try { this.onError(error?.message || '角色组合失败'); } catch {}
      }
      throw error;
    }
  }

  async updateResolved(resolution,{signal,catalog=null}={}) {
    if (this.disposed) throw new Error('组合预览已关闭');
    const requestedRevision=++this.resolutionRevision;
    const renderRevision=++this.revision;
    this.ready=false;this.frame=null;this.pack=null;this.config=null;
    this.canvas.dataset.previewStatus='loading';this.canvas.dataset.revision=String(renderRevision);
    this.canvas.dataset.renderedRevision='';this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    try{
      if(!['modular','template'].includes(resolution?.composition?.kind))throw new Error('组合缺少来自可信 resolver 的模板或模块引用');
      let trustedResolution=resolution;
      if(resolution?.composition?.kind==='modular'||resolution?.composition?.kind==='template'){
        const {resolveProjectComposition}=await import('./studio-composition-resolver.js?v=86');
        const config=resolution.renderPlan?.config;
        const artworkId=resolution.composition.kind==='template'
          ? resolution.composition.baseId??resolution.artwork?.id
          : resolution.artwork?.id;
        if(!config||typeof artworkId!=='string')throw new Error('组合渲染缺少可信角色配置或基底身份');
        const checked=resolveProjectComposition({format:'dot-studio-project',version:2,character:clone(config),creation:{mode:'composer',artworkId,composition:clone(resolution.composition)}},{catalog});
        if(checked.availability!=='available'||!same(checked.composition,resolution.composition))throw new Error('composition 无法按可信目录重新解算');
        // Resolve again for trust, but never silently replace altered render inputs.
        if(!same(checked.renderPlan,resolution.renderPlan)||!same(checked.stageMetadata,resolution.stageMetadata))throw new Error('composition render plan 或预载清单与可信目录解算结果不一致');
        trustedResolution=checked;
      }
      const preloaded=await preloadCompositionAssets(trustedResolution,{signal,catalog});
      if(this.disposed||requestedRevision!==this.resolutionRevision||renderRevision!==this.revision)return false;
      if(trustedResolution.renderPlan.kind==='template')return this.update(trustedResolution.renderPlan.pack,trustedResolution.renderPlan.config);
      if(trustedResolution.renderPlan.kind!=='modular')throw new Error('composition 缺少受支持的 Canvas render plan');
      resolution=trustedResolution;
      const plan=resolution.renderPlan,base=plan.base;
      if(!base||base.kind!=='template'||!base.pack||!base.config||!Array.isArray(plan.modules))throw new Error('模块组合缺少可信完整 PNG 基底或组件图层');
      const baseAssessment=inspectCompositionPack(base.pack,base.config);
      if(baseAssessment.availability!=='available')throw new Error(baseAssessment.reason);
      const current=resolveCompositionConfig(base.pack,base.config);
      const baseLayers=selectCompositionLayers(base.pack,current).map(layer=>safeLayer(layer,plan.width,plan.height)).sort((a,b)=>a.z-b.z);
      const imageById=new Map(preloaded.map(({id,image})=>[id,image]));
      const frame=makeCanvas(plan.width,plan.height),context=frame.getContext('2d',{alpha:true});
      if(!context)throw new Error('浏览器无法创建模块组合结果');
      for(const layer of baseLayers){
        const trusted=getTrustedAssetBySrc(layer.src),image=trusted&&imageById.get(trusted.id);
        const ref=trusted&&resolution.composition.assetRefs.find(item=>item.id===trusted.id&&item.version===trusted.version&&item.sha256===trusted.sha256);
        if(!trusted||!ref||!image)throw new Error(`模板基底图层 ${layer.id} 缺少可信预载图像`);
        const drawable=layer.tintPath?renderTintedLayer(image,readPath(current,layer.tintPath),plan.width,plan.height):image;
        context.drawImage(drawable,0,0,plan.width,plan.height);
      }
      const modules=[...plan.modules].sort((a,b)=>a.z-b.z);
      for(const module of modules){
        const trusted=catalog?.assets?.find(item=>item.id===module.id)??getTrustedAsset(module.id),image=imageById.get(module.id),placement=module.placement;
        if(!trusted||!image||trusted.version!==module.version||trusted.sha256!==module.sha256)throw new Error(`模块图层 ${module.id} 与可信资源目录不一致`);
        if(module.occlusion?.mode!=='above-base'||!module.occlusion.covers?.includes('base'))throw new Error(`模块图层 ${module.id} 没有安全的基底遮挡规则`);
        if(Array.isArray(module.parts)){
          const inputFit=resolution.composition.inputs.fitRefs?.find(ref=>ref.assetId===module.id);
          if(!module.parts.length||!inputFit||module.fitVersion!==inputFit.fitVersion||module.fitFingerprint!==inputFit.fitFingerprint||module.fitProfileRef?.fingerprint!==inputFit.fitProfileRef?.fingerprint||module.fitProfileRef?.fingerprint!==resolution.composition.inputs.fitProfileRef?.fingerprint)throw new Error(`动态模块 ${module.id} 的 fit 输入指纹与项目引用不一致`);
          for(const part of [...module.parts].sort((left,right)=>left.z-right.z)){
            const rect=part.sourceRect,transform=part.transform;
            if(part.assetId!==module.id||!rect||![rect.x,rect.y,rect.width,rect.height].every(Number.isInteger)||rect.x<0||rect.y<0||rect.width<1||rect.height<1||rect.x+rect.width>trusted.width||rect.y+rect.height>trusted.height||!Number.isInteger(part.z)||!transform||!['a','b','c','d','e','f'].every(key=>Number.isFinite(transform[key]))||part.occlusion?.mode!=='above-base'||!part.occlusion.covers?.some(id=>id==='base'||id===resolution.composition.inputs.baseId))throw new Error(`动态模块部件 ${part.id??''} 缺少可信源区域、仿射变换或遮挡规则`);
            let drawable=image;
            if(module.tintPaths?.length){
              if(module.tintPaths.length!==1)throw new Error(`模块图层 ${module.id} 的多个染色区域尚无独立遮罩资源`);
              drawable=renderTintedLayer(image,parseColor(readPath(current,module.tintPaths[0])),image.naturalWidth,image.naturalHeight);
            }
            drawResolvedDynamicPart(context,{image:drawable,part,width:plan.width,height:plan.height});
          }
          continue;
        }
        if(!placement||!module.anchors?.[placement.sourceAnchor])throw new Error(`模块图层 ${module.id} 缺少登记绘制锚点`);
        const dw=placement.width*plan.width,dh=placement.height*plan.height;
        const sourceAnchor=module.anchors[placement.sourceAnchor];
        const dx=placement.targetAnchor.x*plan.width-sourceAnchor.x*dw;
        const dy=placement.targetAnchor.y*plan.height-sourceAnchor.y*dh;
        let drawable=image;
        if(module.tintPaths?.length){
          if(module.tintPaths.length!==1)throw new Error(`模块图层 ${module.id} 的多个染色区域尚无独立遮罩资源`);
          const path=module.tintPaths[0],color=parseColor(readPath(current,path));
          drawable=renderTintedLayer(image,color,image.naturalWidth,image.naturalHeight);
        }
        context.drawImage(drawable,dx,dy,dw,dh);
      }
      if(this.disposed||requestedRevision!==this.resolutionRevision||renderRevision!==this.revision)return false;
      this.canvas.width=plan.width;this.canvas.height=plan.height;this.canvas.style.aspectRatio=`${plan.width} / ${plan.height}`;
      this.context=this.canvas.getContext('2d',{alpha:true});
      if(!this.context)throw new Error('浏览器无法创建模块预览画布');
      this.context.clearRect(0,0,plan.width,plan.height);paintBackground(this.context);this.context.drawImage(frame,0,0);
      this.frame=frame;this.pack=base.pack;this.config=clone(current);this.ready=true;
      this.canvas.dataset.family=current.family;this.canvas.dataset.view='front';this.canvas.dataset.renderingMode='current-configuration';
      this.canvas.dataset.previewStatus='ready';this.canvas.dataset.renderedRevision=String(renderRevision);
      this.canvas.setAttribute('aria-label','登记完整 PNG 基底与独立模块素材的正面组合');
      return true;
    }catch(error){
      if(this.disposed||requestedRevision!==this.resolutionRevision||renderRevision!==this.revision)return false;
      this.ready=false;this.frame=null;this.pack=null;this.config=null;this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
      this.canvas.dataset.previewStatus='failed';this.canvas.dataset.renderedRevision='';
      try{this.onError(error?.message||'角色组合失败')}catch{}
      throw error;
    }
  }

  async capture(size, _options = {}) {
    if (this.disposed || !this.ready || !this.frame || !this.pack || !this.config) {
      throw new Error('当前组合没有通过加载；请等待最新预览成功后再导出');
    }
    if (this.canvas.dataset.renderingMode !== 'current-configuration') {
      throw new Error('当前画面只是已选模板的预览；高级设定没有被渲染，不能导出为已应用这些设定的 PNG。');
    }
    if (!Number.isFinite(size) || size < 1 || size > 8192) throw new Error('PNG 导出尺寸无效');
    const revision = this.revision, frame = this.frame, pack = this.pack;
    const scale = size / Math.max(pack.width, pack.height);
    const width = Math.max(1, Math.round(pack.width * scale));
    const height = Math.max(1, Math.round(pack.height * scale));
    const canvas = makeCanvas(width, height);
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) throw new Error('浏览器无法创建 PNG 导出画布');
    paintBackground(context);
    context.drawImage(frame, 0, 0, width, height);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if (this.disposed || revision !== this.revision || !this.ready || this.frame !== frame) {
      throw new Error('组合预览已更新；已取消旧版本 PNG 导出');
    }
    if (!blob) throw new Error('组合 PNG 导出失败');
    return blob;
  }

  async captureBlob(size) {
    return this.capture(size);
  }

  async renderResolvedCompositionToBlob(resolution,size,{signal,catalog=null}={}) {
    const ready=await this.updateResolved(resolution,{signal,catalog});
    if (!ready) throw new Error('composition 预载已过期或被新任务取消');
    return this.captureBlob(size);
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.resolutionRevision++;
    this.revision++;
    this.ready = false;
    this.frame = null;
    this.pack = null;
    this.config = null;
    this.canvas.dataset.previewStatus = 'disposed';
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.remove();
  }
}
