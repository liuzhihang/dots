import fs from 'node:fs/promises';
import path from 'node:path';

function optionValue(args, name) {
  const inline = args.find(argument => argument.startsWith(`${name}=`));
  if (inline) return inline.slice(name.length + 1);
  const index = args.indexOf(name);
  if (index >= 0) {
    const value = args[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`${name} requires a directory path.`);
    return value;
  }
  return undefined;
}

/** Create a new candidate-only review output directory and refuse overwrites. */
export async function createReviewOutputDirectory({
  name,
  args = process.argv.slice(2),
  defaultRoot = '.artifacts/review-candidates',
  env = process.env,
  now = new Date()
}) {
  const requested = optionValue(args, '--output') || env.DOTS_EVIDENCE_DIR?.trim();
  const stamp = now.toISOString().replaceAll(':', '').replaceAll('-', '').replaceAll('.', '');
  const outputDirectory = path.resolve(requested || path.join(defaultRoot, `${name}-${stamp}`));
  try {
    await fs.lstat(outputDirectory);
    throw new Error(`Refusing to overwrite existing review output: ${outputDirectory}`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  await fs.mkdir(path.dirname(outputDirectory), {recursive: true});
  await fs.mkdir(outputDirectory);
  return outputDirectory;
}
