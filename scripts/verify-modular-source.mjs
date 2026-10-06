import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {dirname, relative, resolve, sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {inflateSync} from 'node:zlib';
import {getTrustedModularCatalog} from '../dist/studio-composition-catalog.js?v=86';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = resolve(repositoryRoot, 'dist');
const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

function fail(message) {
  throw new Error(message);
}

function decodeRgbaPng(bytes, label) {
  if (bytes.length < 33 || !bytes.subarray(0, 8).equals(pngSignature)) fail(`${label} 不是有效 PNG`);

  let width = 0, height = 0, bitDepth = -1, colorType = -1, interlace = -1;
  const idat = [];
  let foundHeader = false, foundEnd = false;
  for (let offset = 8; offset + 12 <= bytes.length;) {
    const length = bytes.readUInt32BE(offset);
    const type = bytes.toString('ascii', offset + 4, offset + 8);
    const dataStart = offset + 8, dataEnd = dataStart + length, chunkEnd = dataEnd + 4;
    if (chunkEnd > bytes.length) fail(`${label} 的 ${type} 区块超出文件范围`);
    const data = bytes.subarray(dataStart, dataEnd);
    if (type === 'IHDR') {
      if (foundHeader || length !== 13) fail(`${label} 的 IHDR 无效或重复`);
      foundHeader = true;
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      if (data[10] !== 0 || data[11] !== 0) fail(`${label} 使用未登记的 PNG 压缩或滤镜方法`);
      interlace = data[12];
    } else if (type === 'IDAT') {
      if (!foundHeader) fail(`${label} 在 IHDR 之前出现图像数据`);
      idat.push(data);
    } else if (type === 'IEND') {
      if (length !== 0) fail(`${label} 的 IEND 无效`);
      foundEnd = true;
      break;
    }
    offset = chunkEnd;
  }

  if (!foundHeader || !foundEnd || !width || !height || !idat.length) fail(`${label} 缺少完整 PNG 结构`);
  if (bitDepth !== 8 || colorType !== 6 || interlace !== 0) {
    fail(`${label} 必须是 8 位、非隔行 RGBA PNG（实际 ${bitDepth} 位、color type ${colorType}、interlace ${interlace}）`);
  }

  const bytesPerPixel = 4, stride = width * bytesPerPixel;
  const expectedLength = height * (stride + 1);
  const decoded = inflateSync(Buffer.concat(idat));
  if (decoded.length !== expectedLength) fail(`${label} 解压尺寸不匹配`);

  const rgba = Buffer.alloc(stride * height);
  let inputOffset = 0;
  let previous = Buffer.alloc(stride);
  const paeth = (left, up, upperLeft) => {
    const estimate = left + up - upperLeft;
    const leftDistance = Math.abs(estimate - left);
    const upDistance = Math.abs(estimate - up);
    const upperLeftDistance = Math.abs(estimate - upperLeft);
    if (leftDistance <= upDistance && leftDistance <= upperLeftDistance) return left;
    if (upDistance <= upperLeftDistance) return up;
    return upperLeft;
  };

  for (let y = 0; y < height; y++) {
    const filter = decoded[inputOffset++];
    const row = Buffer.from(decoded.subarray(inputOffset, inputOffset + stride));
    inputOffset += stride;
    if (filter > 4) fail(`${label} 使用未知 PNG 行滤镜 ${filter}`);
    for (let index = 0; index < stride; index++) {
      const left = index >= bytesPerPixel ? row[index - bytesPerPixel] : 0;
      const up = previous[index];
      const upperLeft = index >= bytesPerPixel ? previous[index - bytesPerPixel] : 0;
      const predictor = filter === 0 ? 0
        : filter === 1 ? left
          : filter === 2 ? up
            : filter === 3 ? Math.floor((left + up) / 2)
              : paeth(left, up, upperLeft);
      row[index] = (row[index] + predictor) & 0xff;
    }
    row.copy(rgba, y * stride);
    previous = row;
  }

  return {width, height, rgba};
}

function measureAlphaEnvelope(image, rect, label) {
  if (!rect || !['x', 'y', 'width', 'height'].every(key => Number.isInteger(rect[key])) ||
      rect.x < 0 || rect.y < 0 || rect.width < 1 || rect.height < 1 ||
      rect.x + rect.width > image.width || rect.y + rect.height > image.height) {
    fail(`${label} sourceRect 不在真实 PNG 尺寸内`);
  }

  let minX = Infinity, minY = Infinity, maxX = -1, maxY = -1;
  const stride = image.width * 4;
  for (let y = rect.y; y < rect.y + rect.height; y++) {
    const rowOffset = y * stride;
    for (let x = rect.x; x < rect.x + rect.width; x++) {
      if (image.rgba[rowOffset + x * 4 + 3] === 0) continue;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
  if (maxX < minX || maxY < minY) fail(`${label} sourceRect 内没有 alpha 大于 0 的像素`);
  return {x: minX - rect.x, y: minY - rect.y, width: maxX - minX + 1, height: maxY - minY + 1};
}

function assertExactEnvelope(actual, declared, label) {
  assert.deepEqual(declared, actual, `${label} visibleRect 必须精确等于从真实 PNG 字节测得的 alpha 包络`);
}

function verifyRegisteredHeadphone(asset) {
  assert.equal(typeof asset.src, 'string');
  const sourcePath = resolve(distRoot, asset.src);
  const relativePath = relative(distRoot, sourcePath);
  if (!relativePath || relativePath === '..' || relativePath.startsWith(`..${sep}`)) fail(`${asset.id} 资源路径逃逸 dist/assets`);

  const bytes = readFileSync(sourcePath);
  const actualHash = createHash('sha256').update(bytes).digest('hex');
  assert.equal(actualHash, asset.sha256, `${asset.id} PNG 字节 SHA-256 与目录登记不一致`);
  const image = decodeRgbaPng(bytes, asset.id);
  assert.deepEqual({width: image.width, height: image.height}, {width: asset.width, height: asset.height}, `${asset.id} 实际 PNG 尺寸与目录登记不一致`);
  assert.deepEqual(asset.sourceParts?.asset, {
    id: asset.id, version: asset.version, sha256: asset.sha256, width: asset.width, height: asset.height
  }, `${asset.id} sourceParts.asset 必须绑定相同 ID、版本、hash 与尺寸`);
  assert(Array.isArray(asset.sourceParts?.parts) && asset.sourceParts.parts.length > 0, `${asset.id} 缺少 sourceParts`);

  for (const part of asset.sourceParts.parts) {
    const label = `${asset.id}/${part.id}`;
    const measured = measureAlphaEnvelope(image, part.sourceRect, label);
    assertExactEnvelope(measured, part.visibleRect, label);

    // Exercise the same strict comparator with an in-memory bad declaration;
    // this is never registered in the catalog or written to production files.
    const deliberatelyWrong = {...measured, x: measured.x + 1};
    assert.throws(() => assertExactEnvelope(measured, deliberatelyWrong, `${label} regression probe`), /必须精确等于/,
      `${label} 的检查器必须拒绝合法范围内但错误的包络`);

    console.log(`通过 ${label}: ${measured.width}×${measured.height} alpha 包络`);
  }
}

const catalog = getTrustedModularCatalog();
const registeredHeadphones = catalog.assets.filter(asset => asset.fitPolicy?.kind === 'headphone-arc-cups-v1');
assert(registeredHeadphones.length > 0, '目录中至少要有一个已登记耳机素材，避免空集误报通过');
for (const asset of registeredHeadphones) verifyRegisteredHeadphone(asset);
console.log(`模块 PNG 来源验证通过：${registeredHeadphones.length} 个耳机素材，逐部件核对真实 RGBA alpha 包络、字节 hash 和尺寸。`);
