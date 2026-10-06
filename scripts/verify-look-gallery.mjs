import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import {BUILT_IN_LOOKS, FAMILY_LOOK_IDS, getLookDefinition} from '../dist/studio-looks.js';
import {HERO_SCENES,FAMILY_SCENES} from '../dist/studio-scenes.js';
import {PRESETS} from '../dist/studio-catalog.js';
import {getBuiltInLooks, getCompositionPack, getCreationArtwork, getFamilyArtwork, BASELINE_POSE_VARIANTS} from '../dist/studio-creation-assets.js';
import {buildCreationPrompt, inspectCompositionPack, makeProject, resolveCreation} from '../dist/studio-creation.js';
import {availableHairs, availableShapes, buildPrompt, createLookCharacter, createPreset, setCharacterValue, validateConfig, FAMILIES} from '../dist/studio-model.js';
import {LOOK_TAGS,TAGS,queryLooks} from '../dist/studio-tags.js';
import {listTemplateAssetStates} from '../dist/studio-composition-catalog.js';
import {resolveTemplateComposition} from '../dist/studio-composition-resolver.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const families = ['dots', 'grok', 'meta-muse', 'humans', 'animals'];
const looks = getBuiltInLooks();
assert.equal(BASELINE_POSE_VARIANTS.length,5,'each family has one additional real baseline pose');
for(const pose of BASELINE_POSE_VARIANTS){
 assert.equal(pose.assetStatus,'available',`${pose.family} pose file has been inspected before release`);
 const png=await readFile(path.join(root,'dist',pose.assetPath));
 assert.equal(png.toString('hex',0,8),'89504e470d0a1a0a',`${pose.family} pose is a PNG`);
 assert.equal(png[25],6,`${pose.family} pose has an alpha channel`);
 assert.equal(createHash('sha256').update(png).digest('hex'),pose.sha256,`${pose.family} pose matches its registered source hash`);
 assert.equal(getCreationArtwork(pose.assetPath),null,'a pose path cannot masquerade as an individual gallery identity');
}
assert.equal(looks.length, 15, 'the current registered gallery inventory has 15 looks; this is not a future catalog limit');
assert.equal(new Set(looks.map(look => look.id)).size, looks.length, 'registered gallery identities have unique IDs');
const templateStates=listTemplateAssetStates();
const heroLookIds=HERO_SCENES.flatMap(scene=>scene.associatedLookIds);
for (const id of heroLookIds) assert(looks.some(look=>look.id===id),`${id} is an associated existing gallery identity`);
for (const scene of [...HERO_SCENES,...Object.values(FAMILY_SCENES)]) {
 assert.equal(getCreationArtwork(scene.id),null,`${scene.id} cannot become a downloadable individual avatar`);
 assert.equal(getCreationArtwork(scene.src),null,`${scene.src} cannot masquerade as a downloadable avatar`);
 assert.equal(scene.displayCount,scene.displayMembers.length,'display count describes this illustration only');
 for(const member of scene.displayMembers) {
  assert.equal(getLookDefinition(member),null,'display descriptions are never registered look IDs');
  assert.equal(getCreationArtwork(member),null,'display descriptions cannot become composition assets');
 }
 for(const id of scene.associatedLookIds) assert(getLookDefinition(id),'related identities must already exist');
 assert.equal(scene.status,'unreviewed','homepage illustration review state stays separate from its associated look identities');
 const png=await readFile(path.join(root,'dist',scene.src));
 assert.equal(png.toString('hex',0,8),'89504e470d0a1a0a',`${scene.id} is a PNG`);
 assert.equal(png[25],6,`${scene.id} has an alpha channel`);
}

for (const family of families) {
  const familyLooks = looks.filter(look => look.family === family);
  assert.equal(familyLooks.length, 3, `${family} exposes one baseline and two added looks`);
  assert.deepEqual(FAMILY_LOOK_IDS[family], familyLooks.map(look => look.id), `${family} home card shows its own three looks`);
  const scene=FAMILY_SCENES[family];
  assert(FAMILY_LOOK_IDS[family].includes(scene.startLookId),`${family} scene CTA explicitly resolves to a trusted own-family look`);
  assert(scene.associatedLookIds.every(id=>FAMILY_LOOK_IDS[family].includes(id)),`${family} scene associations stay within registered identities`);
  assert.equal(familyLooks.filter(look => look.kind === 'baseline-candidate').length, 1, `${family} currently has one base artwork identity`);
  assert.equal(getFamilyArtwork(family).id, familyLooks[0].id, `${family} defaults to its own baseline image`);

  for (const look of familyLooks) {
    const linkedTags=LOOK_TAGS[look.id]||[];
    assert(linkedTags.length>0,`${look.id} participates in the typed-tag content directory`);
    assert(linkedTags.every(id=>TAGS.some(tag=>tag.id===id)),`${look.id} only references registered tag IDs`);
    assert(queryLooks({tagsByDimension:{[TAGS.find(tag=>tag.id===linkedTags[0]).dimension]:[linkedTags[0]]}}).some(item=>item.artworkId===look.id),
      `${look.id} is discoverable through its registered typed tag`);
    const file = await readFile(path.join(root, 'dist', look.src));
    assert.equal(file.toString('hex', 0, 8), '89504e470d0a1a0a', `${look.id} is a PNG`);
    assert.equal(file.readUInt32BE(16), look.width, `${look.id} has registered pixel width`);
    assert.equal(file.readUInt32BE(20), look.height, `${look.id} has registered pixel height`);
    assert.equal(file[25], 6, `${look.id} retains an alpha channel`);

    const config = createLookCharacter(look.id);
    const pack = getCompositionPack(family, look.id);
    assert(pack, `${look.id} has an explicit local composition pack`);
    assert.equal(pack.artworkId || look.id, look.id, `${look.id} pack never resolves to another family image`);
    const approvedState=templateStates.find(item=>item.lookId===look.id&&item.approvalStatus==='approved');
    assert(approvedState,`${look.id} has an explicitly approved current template state in the resolver registry`);
    const resolvedTemplate=resolveTemplateComposition({character:config,artworkId:look.id,recipeId:approvedState.recipeId});
    assert.equal(resolvedTemplate.availability,'available',`${look.id}/${approvedState.recipeId} resolves through its trusted template state`);
    assert.equal(resolvedTemplate.composition.kind,'template');
    assert.equal(resolvedTemplate.composition.baseId,look.id);
    assert.equal(resolvedTemplate.approvalStatus,'approved',`${look.id} resolver output carries the effective approval state`);
    assert.deepEqual(resolvedTemplate.approval.assetRefs,resolvedTemplate.composition.assetRefs,`${look.id} approval binds the exact resolved asset refs`);
    assert.match(resolvedTemplate.composition.inputFingerprint,/^[a-f0-9]{16}$/);
    assert.match(resolvedTemplate.composition.resolvedFingerprint,/^[a-f0-9]{16}$/);
    assert(resolvedTemplate.renderPlan.layers.length>0,`${look.id} resolves to real local PNG layers`);
    assert.deepEqual(
      resolvedTemplate.renderPlan.layers.map(layer=>({id:layer.assetId,version:layer.assetVersion,sha256:layer.sha256})),
      resolvedTemplate.composition.assetRefs,
      `${look.id} trusted render-plan layers are exactly the approved composition refs`
    );
    for(const {asset} of resolvedTemplate.stageMetadata){
      assert.equal(typeof asset.id,'string');
      assert.equal(typeof asset.version,'string');
      assert.match(asset.sha256,/^[a-f0-9]{64}$/);
      const layerBytes=await readFile(path.join(root,'dist',asset.src.replace(/^\.\//,'')));
      assert.equal(layerBytes.toString('hex',0,8),'89504e470d0a1a0a',`${look.id}/${asset.id} is an actual PNG layer`);
      assert.equal(createHash('sha256').update(layerBytes).digest('hex'),asset.sha256,`${look.id}/${asset.id} bytes match the approved hash`);
      assert.equal(layerBytes.readUInt32BE(16),asset.width,`${look.id}/${asset.id} width matches its trusted metadata`);
      assert.equal(layerBytes.readUInt32BE(20),asset.height,`${look.id}/${asset.id} height matches its trusted metadata`);
    }
    const templateProject=makeProject(config, {mode:'composer', artworkId:look.id});
    assert.equal(templateProject.version,2,`${look.id} gallery-created projects use v2`);
    assert.equal(templateProject.character.version,10,`${look.id} gallery-created roles use v10`);
    assert.equal(resolveCreation(templateProject).availability, 'available', `${look.id} can render its registered template`);
    assert.deepEqual(availableShapes(config), [config.shape], `${look.id} trusts only its own silhouette`);
    if (config.family === 'humans') assert.deepEqual(availableHairs(config), [config.hair], `${look.id} trusts only its own registered hairstyle`);

    assert.throws(()=>setCharacterValue(config,'background','solid'), /背景|透明/, `${look.id} has no background editing capability`);
    const metadata={...config,background:'solid',colors:{...config.colors,background:'#FF00FF'}};
    assert.equal(inspectCompositionPack(pack,metadata).availability,'available',`${look.id} ignores inactive current-v2 background metadata`);
    const changedEyes = setCharacterValue(config, 'eyes', config.eyes === 'capsule' ? 'softOval' : 'capsule');
    assert.equal(inspectCompositionPack(pack, changedEyes).availability, 'unsupported', `${look.id} does not claim to render unregistered facial changes`);
    const changedHeadAccessory=setCharacterValue(config,'accessories.head',config.accessories.head==='headphones'?'bucket':'headphones');
    assert.equal(inspectCompositionPack(pack,changedHeadAccessory).availability,'unsupported',`${look.id} does not treat arbitrary accessories as freely composable PNG layers`);
    const reference = structuredClone(config);
    reference.reference.enabled = true;
    assert.equal(inspectCompositionPack(pack, reference).availability, 'unsupported', `${look.id} does not claim to apply a reference image`);
    assert.equal(inspectCompositionPack(pack, setCharacterValue(config, 'camera', 'side')).availability, 'unsupported', `${look.id} remains a fixed front view`);
    assert.equal(inspectCompositionPack(pack, setCharacterValue(config, 'output', 'storyboard')).availability, 'unsupported', `${look.id} does not claim to render a storyboard`);
    assert.equal(inspectCompositionPack(pack, setCharacterValue(config, 'output', 'pet')).availability, 'unsupported', `${look.id} does not claim to export a Pet asset`);

    const promptProject = makeProject(config, {mode:'composer', artworkId:look.id});
    const prompt=buildCreationPrompt(promptProject);
    assert.match(prompt,/登记完整 PNG 配方.*本地 2D 合成/s,`${look.id} prompt describes its real resolver-backed local 2D template output`);
    assert.match(prompt,/不是自动生成图片/,'template output is not represented as generated artwork');
    assert.match(prompt,/不支持自由旋转三维视角/,'template output does not claim arbitrary 3D rotation');
    assert.match(prompt,/只覆盖此登记模板状态/,'the prompt bounds the approval to this exact registered template state');
    assert.match(prompt,/PNG 字节级导出|PNG byte-level export/,'the prompt does not overstate byte-level export acceptance');
    if(approvedState.approvalStatus==='approved')
      assert.doesNotMatch(prompt,/尚待真实网页美术验收|仍待真实网页美术验收|pending real webpage art review/,
        `${look.id} prompt approval wording must follow the resolver's effective approved state`);
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
  assert.equal(startContext.state.background,'solid',`${look.id} retains inactive current-v2 metadata without background editing`);
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
startContext.project=makeProject(retiredGrok,{mode:'artwork',artworkId:'candidate-grok-20261005'});
assert.equal(startContext.makeNextLook('human-bun-yellow').name,getLookDefinition('human-bun-yellow').name,
  'a registered default name from another family is replaced by the selected look name');
const catalogGrok=createPreset('baseline-grok');
startContext.state=catalogGrok;
startContext.project=makeProject(catalogGrok,{mode:'artwork',artworkId:'candidate-grok-20261005'});
assert.equal(startContext.makeNextLook('human-bun-yellow').name,getLookDefinition('human-bun-yellow').name,
  'an old catalog default name is replaced by the selected look name');
const namedGrok={...retiredGrok,name:'小林的 Grok'};
startContext.state=namedGrok;
startContext.project=makeProject(namedGrok,{mode:'artwork',artworkId:'candidate-grok-20261005'});
assert.equal(startContext.makeNextLook('human-bun-yellow').name,'小林的 Grok','a real custom nickname survives changing families');
const namedGirl={...createLookCharacter('human-bun-yellow'),name:'周末搭档'};
startContext.state=namedGirl;
startContext.project=makeProject(namedGirl,{mode:'composer',artworkId:'human-bun-yellow'});
assert.equal(startContext.makeNextLook('human-bun-yellow').name,'周末搭档','reselecting the same look preserves its custom nickname');

assert.equal(getCreationArtwork('historical-human-reading-v2').status, 'retired');
assert.equal(getBuiltInLooks().some(look => look.id.startsWith('historical-')), false, 'historical or retired works never inflate gallery counts');
console.log('Fifteen per-family look templates, alpha PNG dimensions, real pack guards, source details and exact prompt signatures passed.');
