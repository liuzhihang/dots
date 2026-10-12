import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const sourcePattern = /^dist\/assets\/(templates|previews)\/(?!.*(?:\.\.|\\)).+\.png$/;
const toRepoPath = value => {
  assert.equal(typeof value, 'string', 'Delivery asset path must be a string');
  assert(value.startsWith('./assets/') && !/[?#\\]/.test(value) && !value.includes('..'), `Unsafe delivery path: ${value}`);
  return `dist/${value.slice(2)}`;
};

export function getPublishFiles(files, sourceOnlyFiles) {
  assert(Array.isArray(sourceOnlyFiles), 'sourceOnlyFiles must be explicit');
  assert.equal(new Set(sourceOnlyFiles).size, sourceOnlyFiles.length, 'Duplicate source-only file');
  for (const file of sourceOnlyFiles) {
    assert(sourcePattern.test(file), `Only template/detail PNG sources may be excluded: ${file}`);
    assert(files.includes(file), `Source-only file missing from repository inventory: ${file}`);
  }
  const excluded = new Set(sourceOnlyFiles);
  return files.filter(file => !excluded.has(file)).sort();
}

export function inspectLosslessWebp(bytes) {
  assert(bytes.length >= 26 && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP', 'Invalid WebP signature');
  assert.equal(bytes.readUInt32LE(4) + 8, bytes.length, 'WebP RIFF size mismatch');
  let dimensions;
  for (let offset = 12; offset + 8 <= bytes.length;) {
    const kind = bytes.toString('ascii', offset, offset + 4);
    const size = bytes.readUInt32LE(offset + 4);
    assert(offset + 8 + size <= bytes.length, 'Truncated WebP chunk');
    assert(kind !== 'VP8 ' && kind !== 'ANIM' && kind !== 'ANMF', 'Delivery must be a still lossless WebP');
    if (kind === 'VP8L') {
      assert(!dimensions && size >= 5 && bytes[offset + 8] === 0x2f, 'Invalid lossless WebP header');
      const bits = bytes.readUInt32LE(offset + 9);
      assert.equal(bits >>> 29, 0, 'Unsupported lossless WebP version');
      // VP8L alpha_is_used is only a hint; decoded RGBA verifies transparency.
      dimensions = {width: 1 + (bits & 0x3fff), height: 1 + ((bits >>> 14) & 0x3fff)};
    }
    offset += 8 + size + (size % 2);
  }
  assert(dimensions, 'Missing VP8L lossless payload');
  return dimensions;
}

export async function verifyDeliveryAssets({root, rows, actual, sourceOnlyFiles, expectedAssets}) {
  assert(Array.isArray(rows) && rows.length > 0, 'Lossless delivery registry must not be empty');
  const sources = new Set();
  const deliveries = new Map();
  for (const row of rows) {
    const sourcePath = toRepoPath(row.source?.path);
    const deliveryPath = toRepoPath(row.path);
    assert(sourcePattern.test(sourcePath) && actual.includes(sourcePath), `Unregistered delivery source: ${sourcePath}`);
    assert(expectedAssets.has(sourcePath), `Delivery source is not a registered or retained PNG: ${sourcePath}`);
    assert(!sources.has(sourcePath), `Duplicate delivery source mapping: ${sourcePath}`);
    sources.add(sourcePath);
    assert.match(deliveryPath, /^dist\/assets\/delivery\/[a-f0-9]{64}\.webp$/);
    assert.equal(deliveryPath, `dist/assets/delivery/${row.source.sha256}.webp`);
    assert.equal(row.source.mime, 'image/png');
    assert.equal(row.mime, 'image/webp');
    assert.equal(row.version, 'lossless-v1');
    assert.equal(row.encoding?.lossless, true);
    assert.equal(row.encoding?.exact, true);
    assert.equal(typeof row.alpha?.hasAlpha, 'boolean');
    assert.equal(typeof row.alpha?.hasTransparency, 'boolean');
    assert.match(row.pixelSha256 ?? '', /^[a-f0-9]{64}$/);
    for (const resource of [row.source, row]) {
      assert.match(resource.sha256 ?? '', /^[a-f0-9]{64}$/);
      assert(Number.isSafeInteger(resource.byteSize) && resource.byteSize > 0);
      assert(Number.isSafeInteger(resource.width) && resource.width > 0);
      assert(Number.isSafeInteger(resource.height) && resource.height > 0);
      const file = toRepoPath(resource.path);
      assert(actual.includes(file), `Missing lossless delivery file: ${file}`);
      const bytes = await fs.readFile(path.join(root, file));
      assert.equal(bytes.length, resource.byteSize, `Delivery bytes mismatch: ${file}`);
      assert.equal(hash(bytes), resource.sha256, `Delivery hash mismatch: ${file}`);
      if (resource === row.source) {
        assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
        assert.equal(bytes.readUInt32BE(16), resource.width);
        assert.equal(bytes.readUInt32BE(20), resource.height);
      } else {
        assert.deepEqual(inspectLosslessWebp(bytes), {width: row.width, height: row.height});
      }
    }
    assert.equal(row.width, row.source.width);
    assert.equal(row.height, row.source.height);
    const physical = [row.sha256, row.byteSize, row.width, row.height, row.pixelSha256].join(':');
    assert(!deliveries.has(deliveryPath) || deliveries.get(deliveryPath) === physical, `Conflicting physical delivery: ${deliveryPath}`);
    deliveries.set(deliveryPath, physical);
    expectedAssets.add(deliveryPath);
  }
  assert.deepEqual([...sources].sort(), sourceOnlyFiles.slice().sort(), 'Source-only exclusions must exactly match lossless delivery mappings');
  return {sourceCount: sources.size, physicalFileCount: deliveries.size};
}
