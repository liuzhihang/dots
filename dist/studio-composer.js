import { resolveCharacter } from './studio-model.js?v=63';
import { inspectCompositionPack, isLocalCreationAsset, resolveCompositionConfig, selectCompositionLayers } from './studio-creation.js?v=63';

const clone = value => structuredClone(value);

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

function paintBackground(context, config, transparentOverride) {
  const transparent = typeof transparentOverride === 'boolean'
    ? transparentOverride
    : config.background === 'transparent';
  if (transparent) return;
  context.save();
  context.globalCompositeOperation = 'source-over';
  context.fillStyle = config.background === 'solid' ? config.colors.background : '#F8F9FC';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  context.restore();
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
      paintBackground(this.context, current);
      this.context.drawImage(frame, 0, 0);
      this.frame = frame;
      this.pack = pack;
      this.config = clone(current);
      this.ready = true;
      this.canvas.dataset.family = current.family;
      this.canvas.dataset.view = 'front';
      this.canvas.dataset.renderingMode = assessment.availability === 'available' ? 'current-configuration' : 'selected-template-preview';
      this.canvas.setAttribute('aria-label', assessment.availability === 'available'
        ? '当前模板与背景合成预览'
        : '所选模板与背景参考预览；高级 Prompt 设定未渲染');
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

  async capture(size, { transparent } = {}) {
    if (this.disposed || !this.ready || !this.frame || !this.pack || !this.config) {
      throw new Error('当前组合没有通过加载；请等待最新预览成功后再导出');
    }
    if (this.canvas.dataset.renderingMode !== 'current-configuration') {
      throw new Error('当前画面只是已选模板的预览；高级设定没有被渲染，不能导出为已应用这些设定的 PNG。');
    }
    if (!Number.isFinite(size) || size < 1 || size > 8192) throw new Error('PNG 导出尺寸无效');
    const revision = this.revision, frame = this.frame, pack = this.pack, config = clone(this.config);
    const scale = size / Math.max(pack.width, pack.height);
    const width = Math.max(1, Math.round(pack.width * scale));
    const height = Math.max(1, Math.round(pack.height * scale));
    const canvas = makeCanvas(width, height);
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) throw new Error('浏览器无法创建 PNG 导出画布');
    paintBackground(context, config, transparent);
    context.drawImage(frame, 0, 0, width, height);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if (this.disposed || revision !== this.revision || !this.ready || this.frame !== frame) {
      throw new Error('组合预览已更新；已取消旧版本 PNG 导出');
    }
    if (!blob) throw new Error('组合 PNG 导出失败');
    return blob;
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
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
