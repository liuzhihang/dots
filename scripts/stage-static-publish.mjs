import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {build, listTree, checkInventory} from './build-studio.mjs';
import {getPublishFiles} from './lossless-delivery.mjs';

const root = path.resolve(import.meta.dirname, '..');
const digest = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

/** Stage only the checked delivery closure; never remove or rewrite source PNGs. */
export async function stageStaticPublish(destination, {report} = {}) {
  const target = path.resolve(destination);
  assert(target.startsWith(path.join(root, '.artifacts') + path.sep), 'Publish stage must be an isolated .artifacts directory');
  await fs.mkdir(path.dirname(target), {recursive: true});
  await fs.mkdir(target); // A reused or unrelated directory is not silently cleared.
  const verified = report || await build();
  assert(verified.deploymentReady, 'Source content is not ready for publication');
  const manifest = JSON.parse(await fs.readFile(path.join(root, 'design/static-publish-manifest.json'), 'utf8'));
  const expected = getPublishFiles(manifest.files, manifest.sourceOnlyFiles);
  checkInventory(verified.publishFiles.map(row => row.path), expected);
  for (const row of verified.publishFiles) {
    const bytes = await fs.readFile(path.join(root, row.path));
    assert.equal(bytes.length, row.bytes, `Changed bytes after build: ${row.path}`);
    assert.equal(digest(bytes), row.sha256, `Changed hash after build: ${row.path}`);
    const output = path.join(target, row.path);
    await fs.mkdir(path.dirname(output), {recursive: true});
    await fs.writeFile(output, bytes, {flag: 'wx'});
  }
  const staged = (await listTree(path.join(target, 'dist'))).map(file => path.relative(target, file));
  checkInventory(staged, expected);
  await fs.mkdir(path.join(target, '.openai'));
  await fs.copyFile(path.join(root, '.openai/hosting.json'), path.join(target, '.openai/hosting.json'));
  const result = {revision: verified.revision, destination: target, fileCount: expected.length,
    totalBytes: verified.publishFiles.reduce((sum, row) => sum + row.bytes, 0), files: verified.publishFiles,
    excludedSourcePngCount: manifest.sourceOnlyFiles.length, sourcePngsPreserved: true};
  await fs.writeFile(path.join(target, 'stage-verification.json'), JSON.stringify(result, null, 2) + '\n');
  return result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assert.equal(process.argv.length, 3, 'Usage: node scripts/stage-static-publish.mjs <new .artifacts stage directory>');
  const result = await stageStaticPublish(process.argv[2]);
  console.log(JSON.stringify({revision: result.revision, destination: result.destination,
    fileCount: result.fileCount, totalBytes: result.totalBytes, excludedSourcePngCount: result.excludedSourcePngCount}));
}
