import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const root = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const entry = html.match(/src="([^\"]*studio\.js\?v=(\d+))"/);
assert(entry, 'the HTML entry must have a release version');
const revision = entry[2];
const seen = new Set();
const queue = [new URL(entry[1], root)];
while (queue.length) {
  const url = queue.shift();
  if (seen.has(url.href)) continue;
  seen.add(url.href);
  assert.equal(url.searchParams.get('v'), revision, `stale module URL: ${url.href}`);
  const source = await readFile(url, 'utf8');
  for (const match of source.matchAll(/(?:from\s+|import\s*\()(['"])(\.\.?\/[^'"]+\.js(?:\?[^'"]+)?)\1/g)) {
    const dependency = new URL(match[2], url);
    assert.equal(dependency.searchParams.get('v'), revision, `${url.pathname} can reuse an old cached dependency`);
    queue.push(dependency);
  }
}
assert(seen.size >= 10, 'the real editor dependency graph must be traversed');
const {getFamilyArtwork} = await import(new URL(`studio-creation-assets.js?v=${revision}`, root));
for (const family of ['dots', 'grok', 'meta-muse', 'humans', 'animals']) {
  const artwork = getFamilyArtwork(family);
  assert(artwork?.kind === 'baseline-candidate', `${family} must resolve to its new candidate, not the historical registry`);
  await readFile(new URL(artwork.src, root));
}
const muse = getFamilyArtwork('meta-muse');
assert(muse.src.includes('meta-muse-cream-hooded'), 'Meta Muse must have its own character image');
const {createCharacter, validateConfig, exportConfiguration, buildPrompt} = await import(new URL(`studio-model.js?v=${revision}`, root));
const grok = createCharacter('grok');
assert.equal(grok.shape, 'sphere');
assert.equal(grok.colors.eyes, '#FFFFFF');
assert.equal(grok.accessories.face, 'none');
assert.equal(grok.accessories.prop, 'none');
assert(buildPrompt(grok).includes('同向斜置'));
const previousGrok = {...grok, shape:'arch', name:'淡紫 Grok Bot', colors:{...grok.colors,body:'#DCCDF2'}, action:'work', accessories:{...grok.accessories,face:'round',prop:'macbook'}};
const restoredGrok = validateConfig(JSON.parse(exportConfiguration(previousGrok)));
assert.deepEqual(restoredGrok, {...previousGrok,provenance:{...previousGrok.provenance,modified:true}}, 'previous Grok baselines retain every saved field; provenance correctly reports a difference from the corrected default');
assert.deepEqual(validateConfig(restoredGrok), restoredGrok, 'the compatible old baseline must stay stable on repeated imports');
console.log(`Module cache graph passed: ${seen.size} versioned modules and five own-family candidates.`);
