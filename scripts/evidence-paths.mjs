import path from 'node:path';

/**
 * Resolve the single output directory used by a verifier run.
 * DOTS_EVIDENCE_DIR is intentionally treated as the complete directory path,
 * so chained checks can share one browser/download evidence package.
 */
export function resolveEvidenceDirectory(defaultDirectory = '.artifacts') {
  const configured = process.env.DOTS_EVIDENCE_DIR?.trim();
  return path.resolve(configured || defaultDirectory);
}
