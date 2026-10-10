import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

// This is a repository-history check, separate from the static application
// build. It reads the selected Git index, including an isolated release index.
const root = path.resolve(import.meta.dirname, '..');
const git = args => execFileSync('git', args, {cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024});
const manifest = JSON.parse(await fs.readFile(path.join(root, 'design/repository-history.json'), 'utf8'));
assert.equal(manifest.schemaVersion, 1);
assert.match(manifest.sourceCommit, /^[a-f0-9]{40}$/);
git(['merge-base', '--is-ancestor', manifest.sourceCommit, 'HEAD']);

const source = new Map(git(['ls-tree', '-rlz', manifest.sourceCommit]).split('\0').filter(Boolean).map(row => {
  const [metadata, file] = row.split('\t');
  const [mode, type, blob, size] = metadata.trim().split(/\s+/);
  return [file, {mode, type, blob, byteSize: Number(size)}];
}));
const tracked = new Set(git(['ls-files', '-z']).split('\0').filter(Boolean));
const seen = new Set();
let bytes = 0;
let localFilesVerified = 0;
for (const entry of manifest.files) {
  assert(typeof entry.path === 'string' && !path.posix.isAbsolute(entry.path));
  assert(!entry.path.split('/').some(part => part === '..' || part === '.' || part === ''));
  assert(!entry.path.includes('\\') && !entry.path.includes('\0'));
  assert(!seen.has(entry.path), `Duplicate retired path: ${entry.path}`);
  seen.add(entry.path);
  const original = source.get(entry.path);
  assert(original?.type === 'blob', `Missing source blob: ${entry.path}`);
  assert.equal(entry.blob, original.blob, `Recovery blob mismatch: ${entry.path}`);
  assert.equal(entry.byteSize, original.byteSize, `Recovery size mismatch: ${entry.path}`);
  assert.match(entry.sha256, /^[a-f0-9]{64}$/);
  assert(!tracked.has(entry.path), `Retired file is still tracked: ${entry.path}`);
  bytes += entry.byteSize;
  if (process.argv.includes('--verify-local')) {
    const filename = path.join(root, entry.path);
    const stats = await fs.lstat(filename);
    assert(stats.isFile() && !stats.isSymbolicLink(), `Unexpected local file type: ${entry.path}`);
    const contents = await fs.readFile(filename);
    assert.equal(contents.length, entry.byteSize, `Local size changed: ${entry.path}`);
    assert.equal(createHash('sha256').update(contents).digest('hex'), entry.sha256, `Local bytes changed: ${entry.path}`);
    localFilesVerified++;
  }
}
assert.equal(manifest.summary.retiredFiles, seen.size);
assert.equal(manifest.summary.retiredBytes, bytes);
if (process.argv.includes('--verify-local')) assert.equal(localFilesVerified, seen.size, 'All local archive files must be retained');
const ignored = new Set(execFileSync('git', ['check-ignore', '--no-index', '--stdin', '-z'], {
  cwd: root, encoding: 'utf8', input: [...seen].join('\0') + '\0', maxBuffer: 8 * 1024 * 1024,
}).split('\0').filter(Boolean));
assert.deepEqual(ignored, seen, 'Every retired path must stay ignored to avoid accidental recommits');

// Confirm all historical blobs exist, not merely their entries in the tree.
const blobs = [...new Set(manifest.files.map(entry => entry.blob))];
const objects = execFileSync('git', ['cat-file', '--batch-check=%(objectname) %(objecttype) %(objectsize)'], {
  cwd: root, encoding: 'utf8', input: blobs.join('\n') + '\n', maxBuffer: 8 * 1024 * 1024,
}).trim().split('\n');
assert.equal(objects.length, blobs.length);
objects.forEach((row, index) => {
  const [blob, type, size] = row.split(' ');
  assert.equal(blob, blobs[index]);
  assert.equal(type, 'blob', `Unavailable history object: ${blob}`);
  assert(Number.isInteger(Number(size)) && Number(size) >= 0);
});
console.log(JSON.stringify({retiredFiles: seen.size, retiredBytes: bytes, recoverableBlobs: blobs.length, sourceCommit: manifest.sourceCommit, localFilesVerified}));
