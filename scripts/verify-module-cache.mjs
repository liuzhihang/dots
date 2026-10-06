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

const {
  createLookCharacter, buildPrompt, VERSION
} = await import(new URL(`studio-model.js?v=${revision}`, root));
const {
  makeProject, parseProject, exportProject, PROJECT_VERSION
} = await import(new URL(`studio-creation.js?v=${revision}`, root));
const {getFamilyArtwork, getCreationArtwork} = await import(new URL(`studio-creation-assets.js?v=${revision}`, root));
const {resolveProjectComposition, getResolvedTemplateCandidates} = await import(new URL(`studio-composition-resolver.js?v=${revision}`, root));
assert.equal(PROJECT_VERSION, 2, 'the supported project contract is v2');
assert.equal(VERSION, 10, 'the current role contract is v10');

const currentIds = new Set(['candidate-dots-20261005','candidate-grok-20261005','candidate-meta-muse-20261005','candidate-humans-20261005','candidate-animals-20261005']);
for (const family of ['dots', 'grok', 'meta-muse', 'humans', 'animals']) {
  const artwork = getFamilyArtwork(family);
  assert(artwork && currentIds.has(artwork.id), `${family} resolves to its explicitly registered current baseline`);
  await readFile(new URL(artwork.src, root));
  assert.equal(getCreationArtwork(artwork.id).id, artwork.id);
}
assert(getFamilyArtwork('meta-muse').src.includes('meta-muse-cream-hooded'), 'Meta Muse retains its own registered template image');

const character = createLookCharacter('candidate-grok-20261005');
assert.equal(character.shape, 'sphere');
assert.equal(character.colors.eyes, '#FFFFFF');
assert.equal(character.accessories.face, 'none');
assert.equal(character.accessories.prop, 'none');
assert(buildPrompt(character).includes('同向斜置'));
const project = makeProject(character, {mode:'composer',artworkId:'candidate-grok-20261005'});
assert.equal(project.format, 'dot-studio-project');
assert.equal(project.version, 2);
assert.equal(project.character.version, 10);
assert(project.creation.composition && ['template','modular'].includes(project.creation.composition.kind),
  'a resolvable registered template project records v2 composition references');
const exported = exportProject(project);
const roundTrip = parseProject(JSON.parse(exported));
assert.deepEqual(roundTrip, project, 'a v2 project round-trips with its resolved composition reference');
const resolved = resolveProjectComposition(roundTrip);
assert.equal(resolved.availability, 'available');
assert.equal(resolved.composition.kind, 'template');
assert.deepEqual(resolved.composition.assetRefs, project.creation.composition.assetRefs);

const candidates = getResolvedTemplateCandidates({query:{tagsByDimension:{style:['grok']}}});
assert.equal(candidates.availability, 'available');
assert(candidates.candidates.some(item=>item.project.creation.artworkId==='candidate-grok-20261005'),
  'typed style filtering reaches the shared resolver candidate pool');
for (const candidate of candidates.candidates) {
  assert(candidate.project.version===2&&candidate.project.character.version===10);
  assert(candidate.composition&&candidate.resolution.availability==='available');
}

assert.throws(() => parseProject(character), /包装 v2|项目包装/,
  'bare role JSON remains unsupported instead of restoring the old export mode');
assert.throws(() => parseProject({...project,version:1}), /版本不受支持/,
  'obsolete project versions are not migrated by the active importer');
assert.throws(() => parseProject({...project,untrusted:'extra'}), /不支持的字段/,
  'unknown top-level fields are rejected');
assert.throws(() => parseProject({...project,creation:{...project.creation,artworkId:'https://example.invalid/character.png'}}), /不存在|本地|分组/,
  'project data cannot inject a remote image URL');
const injectedLayer = structuredClone(project);
injectedLayer.creation.composition.layers = [{id:'remote',src:'https://example.invalid/asset.png',z:0}];
assert.throws(() => parseProject(injectedLayer), /composition|引用|解析/,
  'serialized project data cannot add arbitrary renderer layers or paths');
const changedRef = structuredClone(project);
changedRef.creation.composition.assetRefs[0].sha256 = '0'.repeat(64);
assert.throws(() => parseProject(changedRef), /不一致|失效|composition|配方/,
  'serialized asset references are recomputed from trusted catalog entries');

console.log(`Versioned module graph and v2/v10 project safety passed: ${seen.size} modules; resolver-backed candidates verified.`);
