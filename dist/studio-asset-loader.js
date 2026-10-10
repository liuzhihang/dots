import { getAsset } from './studio-artwork-catalog.js?v=99';

const PNG_SIGNATURE = [137, 80, 78, 71, 13, 10, 26, 10];
const abortError = () => new DOMException('资源校验已取消。', 'AbortError');
const throwIfAborted = signal => { if (signal?.aborted) throw signal.reason || abortError(); };
const hex = bytes => [...bytes].map(byte => byte.toString(16).padStart(2, '0')).join('');

function assetUrl(asset) {
  const path = asset?.path;
  if (typeof path !== 'string' || !path.startsWith('./assets/') || /[?#\\]/.test(path)) {
    throw new Error('资源路径必须来自登记的本地 assets 目录。');
  }
  const segments = path.slice(2).split('/');
  if (segments.some(segment => !segment || segment === '.' || segment === '..')) throw new Error('资源路径包含非法目录段。');
  const base = typeof document !== 'undefined' ? document.baseURI : import.meta.url;
  const resolved = new URL(path, base);
  if (typeof location !== 'undefined' && resolved.origin !== location.origin) throw new Error('拒绝加载跨站资源。');
  return resolved.href;
}

function inspectBytes(bytes, asset) {
  const isPng = bytes.length >= 33 && PNG_SIGNATURE.every((value, index) => bytes[index] === value)
    && String.fromCharCode(...bytes.subarray(12, 16)) === 'IHDR';
  if (isPng) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const width = view.getUint32(16);
    const height = view.getUint32(20);
    const colorType = bytes[25];
    let animated = false;
    for (let offset = 8; offset + 12 <= bytes.length;) {
      const size = view.getUint32(offset);
      const kind = String.fromCharCode(...bytes.subarray(offset + 4, offset + 8));
      if (kind === 'acTL') animated = true;
      if (kind === 'IEND') break;
      const next = offset + size + 12;
      if (!Number.isSafeInteger(next) || next <= offset || next > bytes.length) break;
      offset = next;
    }
    if (animated) throw new Error('此静态作品资源不应包含 APNG 动画帧。');
    if (!width || !height || width !== asset.width || height !== asset.height) throw new Error('PNG 实际尺寸与目录登记不一致。');
    if (asset.alpha?.hasAlpha && colorType !== 4 && colorType !== 6) throw new Error('PNG 实际颜色类型没有目录要求的 Alpha 通道。');
    return { mime: 'image/png', width, height };
  }
  if (bytes.length >= 12 && String.fromCharCode(...bytes.subarray(0, 4)) === 'RIFF' && String.fromCharCode(...bytes.subarray(8, 12)) === 'WEBP') {
    throw new Error('目录当前只登记 PNG 成品；WebP 目标资源须单独建立资源合同。');
  }
  throw new Error('资源字节不是有效的已登记 PNG。');
}

async function digestSha256(blob) {
  if (!globalThis.crypto?.subtle) throw new Error('当前浏览器无法计算 SHA-256，资源未通过校验。');
  return hex(new Uint8Array(await globalThis.crypto.subtle.digest('SHA-256', await blob.arrayBuffer())));
}

async function decodeBlob(blob, signal) {
  throwIfAborted(signal);
  if (typeof globalThis.createImageBitmap === 'function') {
    let bitmap;
    try {
      bitmap = await globalThis.createImageBitmap(blob);
      return { width: bitmap.width, height: bitmap.height };
    } catch {
      throw new Error('图片解码失败或文件已损坏。');
    } finally {
      bitmap?.close?.();
    }
  }
  if (typeof globalThis.Image !== 'function' || !globalThis.URL?.createObjectURL) throw new Error('当前浏览器没有可用的图片解码器。');
  const probeUrl = URL.createObjectURL(blob);
  try {
    const image = new Image();
    image.decoding = 'async';
    image.src = probeUrl;
    if (typeof image.decode === 'function') await image.decode();
    else await new Promise((resolve, reject) => { image.onload = resolve; image.onerror = reject; });
    throwIfAborted(signal);
    return { width: image.naturalWidth, height: image.naturalHeight };
  } catch {
    throw new Error('图片解码失败或文件已损坏。');
  } finally {
    URL.revokeObjectURL(probeUrl);
  }
}

function registeredAsset(assetOrRef, resolveAsset = getAsset) {
  const asset = resolveAsset(assetOrRef);
  if (!asset) throw new Error('资源记录与 Artwork 目录中的 ID、版本、路径或 SHA-256 不匹配。');
  assetUrl(asset);
  const png = asset.mime === 'image/png' && asset.path.toLowerCase().endsWith('.png');
  if (!png) throw new Error('只接受登记的 PNG 资源。');
  return asset;
}

/** Fetch and verify registered source bytes, MIME, dimensions, SHA-256 and browser decode. */
export async function loadAsset(assetOrRef, { signal, resolveAsset = getAsset } = {}) {
  throwIfAborted(signal);
  const asset = registeredAsset(assetOrRef, resolveAsset);
  const response = await fetch(assetUrl(asset), { signal, credentials: 'same-origin', cache: 'no-cache' });
  throwIfAborted(signal);
  if (!response.ok) throw new Error(`原图读取失败（HTTP ${response.status}）。`);
  const responseMime = (response.headers.get('content-type') || '').split(';', 1)[0].trim().toLowerCase();
  if (responseMime !== asset.mime) throw new Error(`资源 MIME 与登记不一致（实际 ${responseMime || '缺失'}）。`);
  const blob = await response.blob();
  throwIfAborted(signal);
  if (blob.size !== asset.byteSize) throw new Error('资源字节数与目录登记不一致。');
  const detected = inspectBytes(new Uint8Array(await blob.arrayBuffer()), asset);
  if (detected.mime !== asset.mime) throw new Error('图片内容与登记的 MIME 不一致。');
  const sha256 = await digestSha256(blob);
  throwIfAborted(signal);
  if (sha256 !== asset.sha256) throw new Error('资源 SHA-256 与批准目录记录不一致。');
  const decoded = await decodeBlob(blob, signal);
  throwIfAborted(signal);
  if (decoded.width !== asset.width || decoded.height !== asset.height) throw new Error('图片解码尺寸与目录登记不一致。');
  const url = URL.createObjectURL(blob);
  const verifiedAsset = Object.freeze({ ...asset, resourceStatus: 'verified-in-browser', runtimeVerification: 'verified-in-browser' });
  let disposed = false;
  return {
    blob,
    url,
    asset: verifiedAsset,
    dispose() {
      if (disposed) return;
      disposed = true;
      URL.revokeObjectURL(url);
    }
  };
}

/** Download the verified original Blob without re-encoding or flattening alpha. */
export async function downloadAsset(assetOrRef, { signal, resolveAsset = getAsset } = {}) {
  if (typeof document === 'undefined' || !document.body) throw new Error('当前环境无法启动浏览器原图下载。');
  const original = registeredAsset(assetOrRef, resolveAsset);
  if (original.mime !== 'image/png' || original.displayOnly === true) throw new Error('特征示意仅供展示；下载必须使用作品 PNG 原图。');
  const loaded = await loadAsset(original, { signal, resolveAsset });
  try {
    throwIfAborted(signal);
    const anchor = document.createElement('a');
    const stem = (loaded.asset.ownerArtworkId || loaded.asset.id).normalize('NFKC').replace(/[^\p{L}\p{N}._-]+/gu, '-').replace(/^-|-$/g, '').slice(0, 80);
    anchor.href = loaded.url;
    anchor.download = `${stem || 'dot-artwork'}.png`;
    anchor.rel = 'noopener';
    anchor.hidden = true;
    document.body.append(anchor);
    try { anchor.click(); } finally { anchor.remove(); }
    return { asset: loaded.asset, blob: loaded.blob, filename: anchor.download, dispose: loaded.dispose };
  } catch (error) {
    loaded.dispose();
    throw error;
  }
}
