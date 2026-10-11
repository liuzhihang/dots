import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const original = path.join(root, 'openspec/changes/expand-character-gallery-and-adjustments');
const archived = path.join(root, 'openspec/changes/archive/2026-10-11-expand-character-gallery-and-adjustments');

// Approval packages retain their original paths and bytes. Resolve only this
// recorded directory move when a local verification or review reads evidence.
export function resolveProvenancePath(reference) {
  const absolute = path.resolve(root, reference);
  if (existsSync(absolute)) return absolute;
  if (absolute === original || absolute.startsWith(original + path.sep)) {
    return path.join(archived, path.relative(original, absolute));
  }
  return absolute;
}
