import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import {BUILT_IN_LOOKS, FAMILY_LOOK_IDS, HOME_HERO_LOOK_IDS, getLookDefinition} from '../dist/studio-looks.js';
import {PRESETS} from '../dist/studio-catalog.js';
import {getBuiltInLooks, getCompositionPack, getCreationArtwork, getFamilyArtwork} from '../dist/studio-creation-assets.js';
import {buildCreationPrompt, inspectCompositionPack, makeProject, resolveCreation} from '../dist/studio-creation.js';
import {availableHairs, availableShapes, buildPrompt, createLookCharacter, createPreset, setCharacterValue, validateConfig, FAMILIES} from '../dist/studio-model.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const families = ['dots', 'grok', 'meta-muse', 'humans', 'animals'];
const looks = getBuiltInLooks();
assert.equal(looks.length, 15, 'the built-in gallery contains five baselines and ten additional candidates');
assert.equal(new Set(looks.map(look => look.id)).size, 15, 'gallery candidates have unique IDs');
assert.equal(HOME_HERO_LOOK_IDS.length, 12, 'the hero presents twelve registered character images');
assert.equal(new Set(HOME_HERO_LOOK_IDS).size, 12, 'hero images are distinct');
for (const id of HOME_HERO_LOOK_IDS) assert(looks.some(look => look.id === id), `${id} is registered for the hero`);

for (const family of families) {
  const familyLooks = looks.filter(look => look.family === family);
  assert.equal(familyLooks.length, 3, `${family} exposes one baseline and two added looks`);
  assert.deepEqual(FAMILY_LOOK_IDS[family], familyLooks.map(look => look.id), `${family} home card shows its own three looks`);
  assert.equal(familyLooks.filter(look => look.kind === 'baseline-candidate').length, 1, `${family} keeps exactly one baseline candidate`);
  assert(familyLooks.every(look => look.status === 'unreviewed'), `${family} looks remain unreviewed until real-page art acceptance`);
  assert.equal(getFamilyArtwork(family).id, familyLooks[0].id, `${family} defaults to its own baseline image`);

  for (const look of familyLooks) {
    const file = await readFile(path.join(root, 'dist', look.src));
    assert.equal(file.toString('hex', 0, 8), '89504e470d0a1a0a', `${look.id} is a PNG`);
    assert.equal(file.readUInt32BE(16), look.width, `${look.id} has registered pixel width`);
    assert.equal(file.readUInt32BE(20), look.height, `${look.id} has registered pixel height`);
    assert.equal(file[25], 6, `${look.id} retains an alpha channel`);

    const config = createLookCharacter(look.id);
    const pack = getCompositionPack(family, look.id);
    assert(pack, `${look.id} has an explicit local composition pack`);
    assert.equal(pack.artworkId || look.id, look.id, `${look.id} pack never resolves to another family image`);
    assert.equal(resolveCreation(makeProject(config, {mode:'composer', artworkId:look.id})).availability, 'available', `${look.id} can render its registered template`);
    assert.deepEqual(availableShapes(config), [config.shape], `${look.id} trusts only its own silhouette`);
    if (config.family === 'humans') assert.deepEqual(availableHairs(config), [config.hair], `${look.id} trusts only its own registered hairstyle`);

    const background = setCharacterValue(config, 'background', 'solid');
    assert.equal(inspectCompositionPack(pack, background).availability, 'available', `${look.id} can composite a real solid background`);
    const changedEyes = setCharacterValue(config, 'eyes', config.eyes === 'capsule' ? 'softOval' : 'capsule');
    assert.equal(inspectCompositionPack(pack, changedEyes).availability, 'unsupported', `${look.id} does not claim to render unregistered facial changes`);
    const reference = structuredClone(config);
    reference.reference.enabled = true;
    assert.equal(inspectCompositionPack(pack, reference).availability, 'unsupported', `${look.id} does not claim to apply a reference image`);
    assert.equal(inspectCompositionPack(pack, setCharacterValue(config, 'camera', 'side')).availability, 'unsupported', `${look.id} remains a fixed front view`);
    assert.equal(inspectCompositionPack(pack, setCharacterValue(config, 'output', 'storyboard')).availability, 'unsupported', `${look.id} does not claim to render a storyboard`);
    assert.equal(inspectCompositionPack(pack, setCharacterValue(config, 'output', 'pet')).availability, 'unsupported', `${look.id} does not claim to export a Pet asset`);

    const promptProject = makeProject(config, {mode:'composer', artworkId:look.id});
    assert.match(buildCreationPrompt(promptProject), /待真实网页美术验收/, `${look.id} prompt must not imply art acceptance`);
  }
}

for (const id of ['grok-green-cloud', 'grok-teal-square']) {
  const config = createLookCharacter(id);
  assert.equal(config.family, 'grok');
  assert.equal(config.mouth, 'none', `${id} keeps the brand look mouthless`);
  assert.equal(config.eyes, 'capsule', `${id} uses solid parallel capsule eyes`);
  assert.equal(config.material, 'rubber', `${id} uses the registered soft-rubber material`);
  assert(config.colors.body === '#35C981' || config.colors.body === '#39BFB4');
}
assert.throws(() => validateConfig({...createLookCharacter('grok-green-cloud'), presetId:'grok-green-cloud-spoof'}), /无效|选项/,
  'an unregistered preset ID cannot grant Grok shape permissions');
assert.throws(() => validateConfig({...createLookCharacter('grok-green-cloud'), family:'dots'}), /无效|选项|不属于|不匹配/,
  'a trusted Grok preset cannot be moved into a different family');

const frozenDetails = [
  ['muse-rose-flowers', '白色小雏菊', '花茎保持绿色'],
  ['human-bun-yellow', '米白短裤', '黄白鞋'],
  ['human-blond-glasses', '浅蓝内衫', '浅蓝长裤'],
  ['animal-white-cat', '灰色三角猫耳', '淡粉色'],
  ['animal-gray-husky', '灰白脸部面罩', '蓬松卷尾']
];
for (const [id, ...details] of frozenDetails) {
  const config = createLookCharacter(id);
  const prompt = buildPrompt(config);
  for (const detail of details) assert(prompt.includes(detail), `${id} prompt includes its observed visual detail: ${detail}`);
  const look = getLookDefinition(id);
  assert.equal(look?.presetId, config.presetId, `${id} prompt details bind to a trusted template`);
  const altered = structuredClone(config);
  altered.colors.body = '#112233';
  assert.doesNotMatch(buildPrompt(altered), new RegExp(details.map(value=>value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')),
    `${id} details do not override a user-modified visual signature`);
}
const sagePrompt = buildPrompt(createLookCharacter('muse-sage-reading'));
assert.doesNotMatch(sagePrompt, /双手承托打开的小书|自然打开的小书|打开书页阅读/, 'the Sage Muse never requests an open-book or reading pose');
assert.equal(createLookCharacter('muse-sage-reading').accessories.prop, 'closedBook');
assert.match(sagePrompt, /书页始终合上/);
for (const id of ['candidate-meta-muse-20261005', 'candidate-humans-20261005']) {
  assert.doesNotMatch(buildPrompt(createLookCharacter(id)), /默认无手脚的几何角色|geometric character without default limbs/,
    `${id} idle Prompt preserves its actual body and limb anatomy`);
}
assert.equal(createLookCharacter('animal-white-cat').shape, 'cat');
assert.equal(createLookCharacter('animal-gray-husky').shape, 'husky');
const shibaBaseline=createLookCharacter('candidate-animals-20261005');
assert.equal(shibaBaseline.pose,'sit','the Shiba baseline configuration matches its visible seated PNG');
assert.match(buildPrompt(shibaBaseline),/坐姿|坐下/,'the Shiba baseline Prompt describes the seated pose');
assert.equal(createLookCharacter('human-bun-yellow').hair, 'bun');
assert.equal(createLookCharacter('human-blond-glasses').colors.hair, '#D3A742');

const production = await readFile(path.join(root, 'dist/studio.js'), 'utf8');
function productionFunction(start, end) {
  const from = production.indexOf(start), to = production.indexOf(end, from);
  assert(from >= 0 && to > from, `could not locate ${start}`);
  return production.slice(from, to);
}
const copyProjectSource = productionFunction('function lookProject(artworkId){', '\nfunction viewLook(');
const copyContext = vm.createContext({getCreationArtwork, getBuiltInLooks, createLookCharacter, setCharacterValue, makeProject});
vm.runInContext(copyProjectSource + '\nglobalThis.copyProject=lookProject;', copyContext);
for (const look of looks) {
  const frozen = copyContext.copyProject(look.id);
  assert.equal(frozen.creation.mode, 'artwork', `${look.id} gallery copy describes the fixed original image`);
  assert.equal(frozen.creation.artworkId, look.id);
  assert.equal(frozen.character.background, 'transparent', `${look.id} gallery copy keeps the original transparent background`);
  assert.match(buildCreationPrompt(frozen), /固定原图|fixed original image/);
}

const helperSource = productionFunction('function createWorkbenchLook(', '\nfunction startLook(');
const startSource = productionFunction('function startLook(artworkId){', '\nfunction startFromCurrentArtwork(');
const startContext = vm.createContext({
  state:null,project:null,lastRoute:null,lastToast:'',getCreationArtwork,getBuiltInLooks,getLookDefinition,
  createLookCharacter,makeProject,FAMILIES,BUILT_IN_LOOKS,PRESETS,structuredClone,
  commit:null,navigate:null,toast:null
});
startContext.commit=next=>{startContext.project=next;startContext.state=next.character;};
startContext.navigate=route=>{startContext.lastRoute=route;};
startContext.toast=message=>{startContext.lastToast=message;};
vm.runInContext(helperSource + startSource + '\nglobalThis.start=startLook;globalThis.makeNextLook=createWorkbenchLook;', startContext);
for (const look of looks) {
  const base = createLookCharacter('candidate-dots-20261005');
  startContext.state = {...base,name:'我的自定义名字',background:'solid',aspect:'16:9',output:'storyboard',colors:{...base.colors,background:'#EAD7FF'},notes:'保留这条说明',reference:{...base.reference,enabled:true,notes:'由用户控制是否附加图片'}};
  startContext.project = makeProject(startContext.state,{mode:'composer',artworkId:'candidate-dots-20261005'});
  startContext.start(look.id);
  assert.equal(startContext.project.creation.mode,'composer',`${look.id} starts the editable workbench`);
  assert.equal(startContext.project.creation.artworkId,look.id);
  assert.equal(startContext.state.family,look.family);
  assert.equal(startContext.state.background,'solid',`${look.id} keeps the chosen workbench background`);
  assert.equal(startContext.state.colors.background,'#EAD7FF');
  assert.equal(startContext.state.name,'我的自定义名字',`${look.id} preserves a custom project name`);
  assert.equal(startContext.state.output,'image',`${look.id} restores a renderable standard output when the user explicitly selects a look`);
  assert.equal(startContext.state.aspect,'1:1',`${look.id} restores the registered fixed-frame aspect ratio`);
  assert.equal(startContext.state.notes,'保留这条说明');
  assert.equal(startContext.state.reference.enabled,true,`${look.id} preserves the user-controlled reference setting`);
  assert.equal(startContext.lastRoute.page,'workspace');
}

const retiredGrok=createLookCharacter('candidate-grok-20261005');
startContext.state=retiredGrok;
startContext.project=makeProject(retiredGrok,{mode:'artwork',artworkId:'historical-grok-matte-work-v2'});
assert.equal(startContext.makeNextLook('human-bun-yellow').name,getLookDefinition('human-bun-yellow').name,
  'a registered default name from another family is replaced by the selected look name');
const catalogGrok=createPreset('baseline-grok');
startContext.state=catalogGrok;
startContext.project=makeProject(catalogGrok,{mode:'artwork',artworkId:'historical-grok-matte-work-v2'});
assert.equal(startContext.makeNextLook('human-bun-yellow').name,getLookDefinition('human-bun-yellow').name,
  'an old catalog default name is replaced by the selected look name');
const namedGrok={...retiredGrok,name:'小林的 Grok'};
startContext.state=namedGrok;
startContext.project=makeProject(namedGrok,{mode:'artwork',artworkId:'historical-grok-matte-work-v2'});
assert.equal(startContext.makeNextLook('human-bun-yellow').name,'小林的 Grok','a real custom nickname survives changing families');
const namedGirl={...createLookCharacter('human-bun-yellow'),name:'周末搭档'};
startContext.state=namedGirl;
startContext.project=makeProject(namedGirl,{mode:'composer',artworkId:'human-bun-yellow'});
assert.equal(startContext.makeNextLook('human-bun-yellow').name,'周末搭档','reselecting the same look preserves its custom nickname');

assert.equal(getCreationArtwork('historical-human-reading-v2').status, 'retired');
assert.equal(getBuiltInLooks().some(look => look.id.startsWith('historical-')), false, 'historical or retired works never inflate gallery counts');
console.log('Fifteen per-family look templates, alpha PNG dimensions, real pack guards, source details and exact prompt signatures passed.');
