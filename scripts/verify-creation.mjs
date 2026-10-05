import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
  CREATION_MODES,
  PROJECT_FORMAT,
  PROJECT_VERSION,
  buildCreationPrompt,
  exportProject,
  inspectCompositionPack,
  isLocalCreationAsset,
  makeProject,
  parseProject,
  resolveCreation,
  getRegisteredArtworks,
  resolveCompositionConfig,
  selectCompositionLayers,
  setCreationMode,
  setProjectCharacter
} from '../dist/studio-creation.js';
import {BASELINE_POSE_VARIANTS,COMPOSITION_PACKS,CREATION_ARTWORKS,createBaselinePosePack,getBaselinePoseControls,getBaselinePoseValues,getCompositionPack} from '../dist/studio-creation-assets.js';
import {createPreset,createLookCharacter,setCharacterValue,buildPrompt,resolveCharacter} from '../dist/studio-model.js';
import {LayeredComposer} from '../dist/studio-composer.js';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
async function pngDimensions(assetPath){
 const data=await readFile(path.join(root,'dist',assetPath.slice(2)));
 assert.equal(data.subarray(0,8).toString('hex'),'89504e470d0a1a0a',`${assetPath} is a PNG`);
 return {width:data.readUInt32BE(16),height:data.readUInt32BE(20)};
}
const baselineDots=createPreset('baseline-dots');
const originalDots=structuredClone(baselineDots);
const project=makeProject(baselineDots,{artworkId:'historical-dots-plush-headphones-v2'});
assert.deepEqual(project,{format:PROJECT_FORMAT,version:PROJECT_VERSION,character:baselineDots,creation:{mode:'artwork',artworkId:'historical-dots-plush-headphones-v2'}});
assert.deepEqual(baselineDots,originalDots,'makeProject must not mutate its character input');
assert.deepEqual(parseProject(exportProject(project)),project,'project JSON must round-trip');
assert.equal(JSON.parse(exportProject(project)).character.version,10,'project wrapper must preserve character schema v10');
assert.deepEqual(CREATION_MODES,['artwork','composer']);

const artwork=resolveCreation(project);
assert.equal(artwork.availability,'available');
assert.equal(artwork.artwork.id,project.creation.artworkId);
assert.equal(artwork.artwork.kind,'historical-example');
assert.match(artwork.reason,/固定历史示例/);
assert.equal(artwork.artwork.src,'./assets/atelier/dot-plush-headphones-v2.png');

const changedCharacter=setCharacterValue(baselineDots,'colors.body','#9944CC');
const changedProject=setProjectCharacter(project,changedCharacter);
assert.equal(changedProject.creation.artworkId,project.creation.artworkId,'same-family edits keep the fixed artwork id');
assert.equal(resolveCreation(changedProject).artwork.src,artwork.artwork.src,'character edits never replace the fixed artwork file');
assert.notEqual(buildCreationPrompt(changedProject),buildCreationPrompt(project),'edits update the prompt');
assert(buildCreationPrompt(changedProject).includes('只更新本 Prompt'));
for(const lang of ['zh','en']){
  assert(buildCreationPrompt(project,lang).startsWith(buildPrompt(project.character,lang)),'creation prompt shares the character prompt verbatim');
}
const preResolve=JSON.stringify(changedProject);
resolveCreation(changedProject);buildCreationPrompt(changedProject);exportProject(changedProject);
assert.equal(JSON.stringify(changedProject),preResolve,'read and export helpers must not mutate a project');

assert.throws(()=>parseProject({...project,creation:{mode:'artwork',artworkId:'https://example.com/character.png'}}),/不存在|URL/);
assert.throws(()=>parseProject({...project,creation:{mode:'artwork',artworkId:'historical-human-reading-v2'}}),/不属于/);
assert.throws(()=>parseProject({...project,creation:{mode:'future',artworkId:null}}),/artwork 或 composer/);
assert.throws(()=>parseProject({...project,creation:{mode:'artwork',artworkId:null,src:'./assets/evil.png'}}),/不支持的字段/);
assert.throws(()=>parseProject({...project,version:2}),/版本/);
assert.equal(isLocalCreationAsset('./assets/atelier/example.png'),true);
assert.equal(isLocalCreationAsset('/assets/atelier/example.png'),true);
assert.equal(isLocalCreationAsset('https://example.com/asset.png'),false);
assert.equal(isLocalCreationAsset('./assets/../secret.png'),false);
assert.equal(isLocalCreationAsset('./assets/%2e%2e/secret.png'),false);

const baselineByFamily={
  dots:createPreset('baseline-dots'),grok:createPreset('baseline-grok'),
  'meta-muse':createPreset('baseline-meta-muse'),humans:createPreset('baseline-humans'),
  animals:createPreset('baseline-animals')
};
const withdrawnHuman={
  format:PROJECT_FORMAT,version:PROJECT_VERSION,
  character:baselineByFamily.humans,
  creation:{mode:'artwork',artworkId:'historical-human-reading-v2'}
};
const withdrawnRoundTrip=parseProject(exportProject(withdrawnHuman));
assert.deepEqual(withdrawnRoundTrip,withdrawnHuman,'legacy human settings and withdrawn artwork ID remain intact');
const withdrawn=resolveCreation(withdrawnRoundTrip);
assert.equal(withdrawn.availability,'missing');
assert.equal(withdrawn.reason,'这张历史人物形象已撤下');
assert.equal(withdrawn.artwork.status,'retired');
assert.equal(withdrawn.artwork.kind,'retired-tombstone');
assert.equal(Object.hasOwn(withdrawn.artwork,'src'),false,'the retired tombstone must not expose a downloadable source');
assert.equal(CREATION_ARTWORKS.some(item=>item.id==='historical-human-reading-v2'),false,'withdrawn art is excluded from the optional artwork catalog');
assert.equal(getRegisteredArtworks().some(item=>item.id==='historical-human-reading-v2'),false,'registered optional artworks contain active entries only');
assert.equal((await import('../dist/studio-creation-assets.js?v=62')).getCreationArtwork('historical-human-reading-v2').status,'retired','legacy imports may still resolve the retired tombstone');
assert(buildCreationPrompt(withdrawnRoundTrip).includes('这张历史人物形象已撤下'));
assert.match(buildCreationPrompt(withdrawnRoundTrip,'en'),/withdrawn/);
await assert.rejects(readFile(path.join(root,'dist/assets/atelier/muse-fabric-reading-v2.png')),/ENOENT/,'the rejected human PNG must not remain in the public dist directory');
await readFile(path.join(root,'openspec/changes/refresh-studio-visual-design/references/retired-assets/muse-fabric-reading-v2.png'));
const legacyGrokConfig=JSON.parse(await readFile(path.join(root,'openspec/changes/rebuild-character-system/baseline/schema-9-grok-arch.json'),'utf8'));
const withdrawnGrokSource={
  format:PROJECT_FORMAT,version:PROJECT_VERSION,
  character:legacyGrokConfig,
  creation:{mode:'artwork',artworkId:'historical-grok-matte-work-v2'}
};
const withdrawnGrok=parseProject(exportProject(withdrawnGrokSource));
assert.equal(withdrawnGrok.character.family,'grok');
assert.equal(withdrawnGrok.character.presetId,'grok-arch');
assert.equal(withdrawnGrok.character.shape,'arch','an imported Grok project retains its original silhouette');
assert.equal(withdrawnGrok.creation.artworkId,'historical-grok-matte-work-v2','the retired artwork ID remains intact');
assert.deepEqual(parseProject(exportProject(withdrawnGrok)),withdrawnGrok,'legacy Grok config and retired ID survive project JSON round-trip');
const editedLegacyGrok=setProjectCharacter(withdrawnGrok,{...withdrawnGrok.character,notes:'Keep my archived Grok setup'});
assert.equal(editedLegacyGrok.creation.artworkId,'historical-grok-matte-work-v2','same-family edits do not replace the retired artwork ID');
assert.equal(editedLegacyGrok.character.shape,'arch','same-family edits do not replace the legacy Grok shape');
const retiredGrok=resolveCreation(withdrawnGrok);
assert.equal(retiredGrok.availability,'missing');
assert.equal(retiredGrok.reason,'这张历史 Grok 形象已撤下');
assert.equal(retiredGrok.artwork.status,'retired');
assert.equal(retiredGrok.artwork.kind,'retired-tombstone');
assert.equal(Object.hasOwn(retiredGrok.artwork,'src'),false,'the retired Grok tombstone has no downloadable source');
assert.equal(CREATION_ARTWORKS.some(item=>item.id==='historical-grok-matte-work-v2'),false,'withdrawn Grok art is excluded from the optional catalog');
assert.equal(getRegisteredArtworks().some(item=>item.id==='historical-grok-matte-work-v2'),false,'registered optional artworks contain active entries only');
assert.equal((await import('../dist/studio-creation-assets.js?v=62')).getCreationArtwork('historical-grok-matte-work-v2').status,'retired','legacy Grok imports may resolve the tombstone');
assert(buildCreationPrompt(withdrawnGrok).includes('这张历史 Grok 形象已撤下'));
await assert.rejects(readFile(path.join(root,'dist/assets/atelier/grok-matte-work-v2.png')),/ENOENT/,'the rejected Grok PNG must not remain in the public dist directory');
await readFile(path.join(root,'openspec/changes/refresh-studio-visual-design/references/retired-assets/grok-matte-work-v2.png'));
for(const [family,character]of Object.entries(baselineByFamily)){
  const candidate=setProjectCharacter(project,character);
  const expected=family===project.character.family?project.creation.artworkId:CREATION_ARTWORKS.find(item=>item.family===family)?.id??null;
  assert.equal(candidate.creation.artworkId,expected,`family change must select the first registered ${family} artwork`);
  assert.equal(candidate.creation.mode,project.creation.mode,'family changes preserve the selected creation mode');
}
const modeProject=setCreationMode(project,'composer');
assert.equal(modeProject.creation.mode,'composer');
assert.equal(modeProject.creation.artworkId,project.creation.artworkId);
assert.equal(project.creation.mode,'artwork','mode changes must not mutate the source project');
assert.throws(()=>setCreationMode(project,'generated-image'),/artwork 或 composer/);
const metaProject=makeProject(baselineByFamily['meta-muse'],{artworkId:null});
assert.equal(metaProject.creation.artworkId,null,'an explicitly unselected artwork remains unselected');
assert.match(buildCreationPrompt(metaProject),/没有登记完整作品/);
assert.match(buildCreationPrompt(metaProject,'en'),/No complete artwork is registered/);

// The five new defaults are real fixed candidates; historical IDs remain importable.
for(const [family,character] of Object.entries(baselineByFamily)){
 const fresh=makeProject(character),entry=resolveCreation(fresh).artwork;
 assert.equal(entry.kind,'baseline-candidate');assert.equal(entry.family,family);assert.equal(entry.status,'unreviewed');
 assert.equal(CREATION_ARTWORKS.filter(a=>a.family===family&&a.kind==='baseline-candidate').length,1);
 const bytes=await readFile(path.join(root,'dist',entry.src));assert.equal(bytes.toString('hex',0,8),'89504e470d0a1a0a');
 assert.equal(bytes.readUInt32BE(16),entry.width);assert.equal(bytes.readUInt32BE(20),entry.height);assert.equal(bytes[25],6,'candidate asset retains alpha');
}
const dotsPack=COMPOSITION_PACKS.find(p=>p.family==='dots');
assert.equal(inspectCompositionPack(dotsPack,baselineDots).availability,'available');
const bareDots=setCharacterValue(baselineDots,'accessories.head','none');
assert.equal(getBaselinePoseControls('candidate-dots-20261005',bareDots).find(item=>item.id==='classic').selected,true,'the Dots bare-image recipe is also a classic state');
assert.deepEqual(getBaselinePoseValues('candidate-dots-20261005','classic',bareDots),{'accessories.head':'none',action:'idle',expression:'calm'},'Dots classic follows the current bare or headphone complete-image recipe');
assert.deepEqual(selectCompositionLayers(dotsPack,bareDots).map(l=>l.id),['bare']);
assert.deepEqual(selectCompositionLayers(dotsPack,baselineDots).map(l=>l.id),['headphones']);
const listeningDots=setCharacterValue(baselineDots,'action','listen');
assert.equal(inspectCompositionPack(dotsPack,listeningDots).availability,'available','the registered headphones listening state remains available');
assert.deepEqual(selectCompositionLayers(dotsPack,listeningDots).map(l=>l.id),['headphones'],'listen is a static headphones-wearing semantic using the complete headphones layer');
assert.deepEqual([...new Set(dotsPack.variants.map(variant=>variant.layerIds.join(',')))].sort(),['bare','headphones'],'the pack exposes only two mutually exclusive complete appearance recipes');
assert.equal(inspectCompositionPack(dotsPack,setCharacterValue(baselineDots,'background','transparent')).availability,'available');
assert.equal(inspectCompositionPack(dotsPack,changedCharacter).availability,'unsupported');
assert.equal(inspectCompositionPack(dotsPack,setCharacterValue(baselineDots,'action','wave')).availability,'unsupported');
const listenComposer=makeProject(listeningDots,{mode:'composer'});
const listenComposerPrompt=buildCreationPrompt(listenComposer);
assert.match(listenComposerPrompt,/正面静态佩戴贴合头部的耳机/);
assert.match(listenComposerPrompt,/保持正向且不倾斜/);
assert.doesNotMatch(listenComposerPrompt,/轻轻侧头聆听/,'the static composer overrides the generic animated listening direction');
assert.match(listenComposerPrompt,/基准候选，尚待真实网页美术验收/);
assert.match(buildCreationPrompt(listenComposer,'en'),/static front-facing pose/);
assert.doesNotMatch(buildCreationPrompt(listenComposer,'en'),/tilt gently while listening/);
assert.match(buildCreationPrompt(listenComposer,'en'),/baseline candidate pending real webpage art review/);
const unsupportedWave=setCharacterValue(baselineDots,'action','wave');
assert.equal(inspectCompositionPack(dotsPack,unsupportedWave).availability,'unsupported');
const unsupportedWavePrompt=buildCreationPrompt(makeProject(unsupportedWave,{mode:'composer'}));
assert.match(unsupportedWavePrompt,/一只手或前爪抬起自然挥动/,'unsupported composer states retain their generic prompt for ChatGPT');
assert.doesNotMatch(unsupportedWavePrompt,/正面静态佩戴/,'pack-specific action language applies only when the composition is available');

const expectedPoseStates=[
 {id:'wink',artworkId:'candidate-dots-20261005',family:'dots',assetPath:'./assets/poses/dots-wink-v1.png',values:{'accessories.head':'headphones',action:'listen',expression:'wink'}},
 {id:'wink',artworkId:'candidate-grok-20261005',family:'grok',assetPath:'./assets/poses/grok-wink-v1.png',values:{action:'idle',expression:'wink',pose:'auto'}},
 {id:'wave',artworkId:'candidate-meta-muse-20261005',family:'meta-muse',assetPath:'./assets/poses/muse-wave-v1.png',values:{action:'wave',expression:'happy',pose:'auto'}},
 {id:'wave',artworkId:'candidate-humans-20261005',family:'humans',assetPath:'./assets/poses/human-wave-v1.png',values:{action:'wave',expression:'happy',pose:'auto'}},
 {id:'wave',artworkId:'candidate-animals-20261005',family:'animals',assetPath:'./assets/poses/shiba-wave-v1.png',values:{action:'wave',expression:'happy',pose:'sit'}}
];
assert.equal(BASELINE_POSE_VARIANTS.length,5,'pose states add no gallery identities');
const applyPoseValues=(config,values)=>['pose','accessories.head','action','expression'].reduce((next,path)=>Object.hasOwn(values,path)?setCharacterValue(next,path,values[path]):next,config);
for(const expected of expectedPoseStates){
 const registered=BASELINE_POSE_VARIANTS.find(item=>item.artworkId===expected.artworkId);
 assert(registered,`${expected.family} registers its one approved state`);
 assert.deepEqual({id:registered.id,artworkId:registered.artworkId,family:registered.family,assetPath:registered.assetPath,values:{...registered.values}},expected,`${expected.family} keeps its exact trusted state tuple`);
 assert.deepEqual(Object.keys(registered.values).sort(),Object.keys(expected.values).sort(),`${expected.family} state has no unapproved fields`);
 const baseConfig=createLookCharacter(expected.artworkId);
 const artwork=CREATION_ARTWORKS.find(item=>item.id===expected.artworkId);
 const classicPack=getCompositionPack(expected.family,expected.artworkId,baseConfig);
 assert.equal(classicPack.kind,'layered-2d',`${expected.family} baseline uses an exclusive complete-frame pack`);
 assert.deepEqual({width:classicPack.width,height:classicPack.height},{width:artwork.width,height:artwork.height},`${expected.family} classic pack keeps the complete baseline PNG dimensions`);
 if(expected.family==='meta-muse')assert.deepEqual({width:classicPack.width,height:classicPack.height},{width:1235,height:1274},'Meta Muse classic remains its original non-square frame');
 const classicControl=getBaselinePoseControls(expected.artworkId,baseConfig).find(item=>item.id==='classic');
 assert.equal(classicControl.available,true,`${expected.family} classic remains available`);
 assert.equal(classicControl.selected,true,`${expected.family} opens in its registered classic state`);
 assert.deepEqual(getBaselinePoseValues(expected.artworkId,'classic',baseConfig),classicControl.values,`${expected.family} Classic restores its complete registered fields`);
 const intended=applyPoseValues(baseConfig,expected.values);
 const pack=getCompositionPack(expected.family,expected.artworkId,intended);
 assert.deepEqual({width:pack.width,height:pack.height},{width:registered.width,height:registered.height},`${expected.family} matched full state tuple selects its own exact frame dimensions`);
 assert.deepEqual(await pngDimensions(expected.assetPath),{width:registered.width,height:registered.height},`${expected.family} registered state dimensions match its actual PNG`);
 const stateProject=makeProject(intended,{mode:'composer',artworkId:expected.artworkId});
 const resolvedState=resolveCreation(stateProject);
 assert.deepEqual({width:resolvedState.pack.width,height:resolvedState.pack.height},{width:registered.width,height:registered.height},`${expected.family} resolveCreation passes the matched state's dimensions to the workbench`);
 assert.deepEqual(parseProject(exportProject(stateProject)),stateProject,`${expected.family} state round-trips in project v1 / character schema v10`);
 assert.equal(getBaselinePoseValues(expected.artworkId,expected.id,baseConfig)?.expression??null,registered.assetStatus==='available'?expected.values.expression:null,
   `${expected.family} only returns an alternate state after its trusted asset is registered available`);
 const assessment=inspectCompositionPack(pack,intended);
 if(expected.values.action==='wave'){
  const prompt=buildCreationPrompt(stateProject);
  assert.match(prompt,/静态姿态，不是连续挥动/,`${expected.family} wave prompt describes a single still frame`);
  assert.match(buildCreationPrompt(stateProject,'en'),/one still pose, not continuous waving/,`${expected.family} English wave prompt also describes a single frame`);
 }
 if(registered.assetStatus==='available'){
  assert.equal(assessment.availability,'available',`${expected.family} exact state has a corresponding complete PNG recipe`);
  const selected=selectCompositionLayers(pack,intended);
  assert.deepEqual(selected.map(layer=>layer.src),[expected.assetPath],`${expected.family} state replaces the classic frame with its complete PNG`);
  const variant=pack.variants.find(item=>item.id===expected.id);
  assert(variant,`${expected.family} pack includes its approved alternate`);
  assert.deepEqual(variant.values,expected.values,`${expected.family} render recipe binds its complete exact state tuple`);
 }else{
  assert.equal(registered.assetStatus,'pending',`${expected.family} missing image cannot be represented as accepted`);
  assert.equal(assessment.availability,'unsupported',`${expected.family} pending state cannot render or export`);
  assert.equal(getBaselinePoseValues(expected.artworkId,expected.id,baseConfig),null,`${expected.family} pending state cannot be selected`);
  assert.equal(pack.variants.some(item=>item.id===expected.id),false,`${expected.family} pending state is absent from render recipes`);
 }
 const extraEdit=setCharacterValue(intended,'colors.body','#AA55CC');
 assert.equal(inspectCompositionPack(pack,extraEdit).availability,'unsupported',`${expected.family} complete-frame match rejects extra unsupported edits`);
 const unmatchedConfig=setCharacterValue(intended,'expression','curious');
 const unmatchedPack=getCompositionPack(expected.family,expected.artworkId,unmatchedConfig);
 assert.deepEqual({width:unmatchedPack.width,height:unmatchedPack.height},{width:artwork.width,height:artwork.height},`${expected.family} unmatched full tuple falls back to classic dimensions`);
 assert.equal(inspectCompositionPack(unmatchedPack,unmatchedConfig).availability,'unsupported',`${expected.family} unmatched expression cannot claim the registered state image`);
 const tampered={...registered,assetStatus:'available',sha256:registered.sha256||'a'.repeat(64),values:{...registered.values,unregistered:'surprise'}};
 const safePack=createBaselinePosePack(expected.artworkId,[tampered]);
 assert.equal(safePack.variants.some(item=>item.id===expected.id),false,`${expected.family} refuses an asset registration with extra untrusted state values`);
 const tamperedDimensions=createBaselinePosePack(expected.artworkId,[{...registered,width:registered.width+1}]);
 assert.equal(tamperedDimensions.variants.some(item=>item.id===expected.id),false,`${expected.family} refuses a trusted hash paired with unregistered frame dimensions`);
}
const grokWinkPrompt=buildCreationPrompt(makeProject(
 applyPoseValues(baselineByFamily.grok,expectedPoseStates[1].values),
 {mode:'composer',artworkId:'candidate-grok-20261005'}
));
assert.match(grokWinkPrompt,/另一枚仍是原本同尺寸、同斜角的实心白色胶囊眼/,'Grok wink keeps one open capsule eye and closes the other');
assert.doesNotMatch(grokWinkPrompt,/两枚相互平行、同向斜置的实心胶囊眼/,'Grok wink Prompt does not simultaneously demand two open eyes');
const dotsWinkPrompt=buildCreationPrompt(makeProject(
 applyPoseValues(baselineByFamily.dots,expectedPoseStates[0].values),
 {mode:'composer',artworkId:'candidate-dots-20261005'}
));
assert.match(dotsWinkPrompt,/只闭合一只原有的小软椭圆眼/,'Dots wink preserves one open original oval eye');
assert.match(dotsWinkPrompt,/不添加嘴巴/,'Dots wink does not gain a mouth');
const shibaBase=baselineByFamily.animals;
const shibaWave=applyPoseValues(shibaBase,expectedPoseStates[4].values);
assert.equal(resolveCharacter(shibaWave).config.pose,'sit','the registered Shiba wave keeps its seated pose');
assert.match(buildPrompt(shibaWave),/静态姿态，不是连续挥动/,'the Shiba Prompt describes one still greeting pose');
assert.match(buildPrompt(shibaWave),/保持柴犬自然坐姿/,'the Shiba still-wave Prompt preserves its registered seated pose');
const otherAnimalWave=applyPoseValues(createPreset('pet-cat'),{action:'wave',expression:'happy',pose:'sit'});
assert.equal(resolveCharacter(otherAnimalWave).config.pose,'auto','the pose exception does not change other animal actions');
assert.doesNotMatch(buildPrompt(otherAnimalWave),/坐姿|坐下|seated pose|sitting/i,'a non-Shiba wave Prompt does not claim a seated pose after normalization to auto');
const humanWave=setCharacterValue(setCharacterValue(baselineByFamily.humans,'pose','sit'),'action','wave');
assert.equal(resolveCharacter(humanWave).config.pose,'auto','the pose exception does not change human wave normalization');
const artworkListen=makeProject(listeningDots,{mode:'artwork'});
assert.match(buildCreationPrompt(artworkListen),/轻轻侧头聆听/,'artwork mode keeps the existing generic action prompt');

// Every frozen schema 6–9 fixture remains importable through the project wrapper.
const legacyDir=path.join(root,'openspec/changes/rebuild-character-system/baseline');
const fixtureFiles=(await readdir(legacyDir)).filter(file=>/^schema-[6-9]-.*\.json$/.test(file)).sort();
assert.equal(fixtureFiles.length,24,'all four frozen legacy schema sets are present');
for(const file of fixtureFiles){
  const raw=JSON.parse(await readFile(path.join(legacyDir,file),'utf8'));
  const loaded=parseProject(raw);
  assert.equal(loaded.character.version,10,file+' migrates to character schema v10');
  assert.equal(loaded.character.catalogTier,'legacy',file+' stays on the legacy compatibility path');
  assert.equal(loaded.character.legacy.originalConfig.version,raw.version,file+' retains its original JSON snapshot');
  assert.deepEqual(parseProject(exportProject(loaded)),loaded,file+' survives project export and re-import');
}
const v10Baseline=parseProject(baselineByFamily.dots);
assert.equal(v10Baseline.character.catalogTier,'baseline','schema v10 baseline JSON remains baseline');
const v10Legacy=parseProject(createPreset('muse-mu'));
assert.equal(v10Legacy.character.family,'humans','schema v10 legacy Muse remains a human character');
assert.equal(v10Legacy.character.catalogTier,'legacy','schema v10 legacy Muse remains legacy');

// A local pack fixture exercises capability checks without creating art assets.
const localPack={
  id:'fixture-dots-front',family:'dots',kind:'layered-2d',view:'front',status:'candidate',
  revision:1,provenance:{origin:'qa-fixture',detail:'Synthetic test geometry only; not character artwork.'},baseConfig:baselineDots,editablePaths:['colors.body'],width:16,height:16,
  layers:[
    {id:'body',src:'./assets/fixture/body.png',z:0,tintPath:'colors.body'}
  ]
};
assert.equal(inspectCompositionPack(localPack,baselineDots).availability,'available');
assert.equal(inspectCompositionPack(localPack,changedCharacter).availability,'available','declared tint path accepts a body color edit');
const idleDots=setCharacterValue(baselineDots,'action','idle');
assert.equal(inspectCompositionPack(localPack,idleDots).availability,'unsupported','undeclared action changes cannot claim a rendered pose');
assert.throws(()=>resolveCompositionConfig(localPack,idleDots),/只会写入 Prompt|渲染配方/,'the default render-config API rejects unsupported settings');
const idleTemplatePreview=resolveCompositionConfig(localPack,idleDots,{templatePreview:true});
assert.equal(idleTemplatePreview.action,baselineDots.action,'explicit template preview sanitizes unsupported settings to the registered image signature');
const unsupportedShape=structuredClone(baselineDots);unsupportedShape.presetId='dots-blue';unsupportedShape.catalogTier='legacy';unsupportedShape.isLegacy=true;unsupportedShape.shape='heart';
assert.equal(inspectCompositionPack(localPack,unsupportedShape).availability,'unsupported','undeclared silhouette changes are rejected');
assert.equal(inspectCompositionPack(localPack,setCharacterValue(baselineDots,'camera','threeQuarter')).availability,'unsupported','front packs reject other camera views');
const referenceDots=structuredClone(baselineDots);referenceDots.reference.enabled=true;
assert.equal(inspectCompositionPack(localPack,referenceDots).availability,'unsupported','the pack never claims to transform a user reference image');
assert.equal(inspectCompositionPack({...localPack,layers:[{...localPack.layers[0],src:'https://example.com/body.png'}]},baselineDots).availability,'unsupported','remote layer URLs are rejected');
const noTintPack={...localPack,layers:localPack.layers.map(layer=>({...layer,tintPath:undefined}))};
assert.equal(inspectCompositionPack(noTintPack,changedCharacter).availability,'unsupported','declared color edit without a tint mask is rejected');
assert.equal(inspectCompositionPack({...localPack,layers:[{...localPack.layers[0],tintPath:'shape'}]},baselineDots).availability,'unsupported','tint paths must resolve to color values');

// Structural variants select an entire layer recipe, never additive overlays.
const legacyDots=createPreset('dots-blue');
const heartDots=setCharacterValue(legacyDots,'shape','heart');
const shapeLayers=[
  {id:'sphere-body',src:'./assets/fixture/sphere.png',z:0,tintPath:'colors.body'},
  {id:'heart-body',src:'./assets/fixture/heart.png',z:0,tintPath:'colors.body'},
  {id:'shared-face',src:'./assets/fixture/face.png',z:1}
];
const shapePack={...localPack,id:'fixture-shape-recipes',baseConfig:legacyDots,editablePaths:['colors.body','shape'],layers:shapeLayers,variants:[
  {id:'sphere',values:{shape:'sphere'},layerIds:['sphere-body','shared-face']},
  {id:'heart',values:{shape:'heart'},layerIds:['heart-body','shared-face']}
]};
assert.equal(inspectCompositionPack(shapePack,heartDots).availability,'available');
assert.deepEqual(selectCompositionLayers(shapePack,legacyDots).map(layer=>layer.id),['sphere-body','shared-face']);
assert.deepEqual(selectCompositionLayers(shapePack,heartDots).map(layer=>layer.id),['heart-body','shared-face'],'alternate shape excludes the entire old body');
const unsafeOverlay={...shapePack,variants:undefined,layers:[shapeLayers[0],{...shapeLayers[1],when:{path:'shape',value:'heart'}}]};
assert.equal(inspectCompositionPack(unsafeOverlay,heartDots).availability,'unsupported','an unconditional sphere plus conditional heart must never claim shape replacement');
assert.equal(inspectCompositionPack({...shapePack,variants:undefined},heartDots).availability,'unsupported','structural edits require a complete recipe');
assert.equal(inspectCompositionPack({...shapePack,variants:shapePack.variants.slice(1)},heartDots).availability,'unsupported','the default recipe is mandatory');
assert.equal(inspectCompositionPack({...shapePack,variants:[...shapePack.variants,{...shapePack.variants[1],id:'duplicate-binding'}]},heartDots).availability,'unsupported','ambiguous recipes are rejected');
assert.equal(inspectCompositionPack(shapePack,setCharacterValue(legacyDots,'shape','pill')).availability,'unsupported','a supported path with an unregistered value is rejected');
const incompleteTint={...shapePack,layers:shapeLayers.map(layer=>layer.id==='heart-body'?{...layer,tintPath:undefined}:layer)};
assert.equal(inspectCompositionPack(incompleteTint,setCharacterValue(heartDots,'colors.body','#9944CC')).availability,'unsupported','an inactive tint layer cannot support an active recipe color edit');
for(const path of ['camera','aspect','output','motionStyle','motionSpeed']) assert.equal(inspectCompositionPack({...localPack,editablePaths:[...localPack.editablePaths,path]},baselineDots).availability,'unsupported',path+' cannot be declared editable by this fixed-frame PNG engine');
for(const family of ['dots','grok','meta-muse','humans','animals']){
  const id=CREATION_ARTWORKS.find(item=>item.family===family&&item.kind==='baseline-candidate').id;
  const pack=COMPOSITION_PACKS.find(item=>item.family===family)|| (await import('../dist/studio-creation-assets.js?v=62')).getCompositionPack(family,id);
  assert(pack,`${family} baseline has an explicitly registered local render pack`);
  assert.equal(pack.artworkId||id,id,`${family} pack is bound to its own selected artwork`);
  const candidate=makeProject(createLookCharacter(id),{mode:'composer',artworkId:id});
  assert.equal(resolveCreation(candidate).availability,'available',`${family} uses its registered template without a 3D fallback`);
}
assert.equal((await import('../dist/studio-creation-assets.js?v=62')).getCompositionPack('humans','historical-human-reading-v2'),null,'withdrawn human IDs never regain a render pack');

// Minimal browser surface mocks validate capture readiness, tint alpha path,
// same-size layers, stale async updates and failure invalidation.
const savedGlobals={document:globalThis.document,Image:globalThis.Image};
const operations=[];
class FakeCanvas{
  constructor(){this.width=300;this.height=150;this.dataset={};this.style={};this.attributes={};this.removed=false;this.context={canvas:this,globalCompositeOperation:'source-over',fillStyle:'',clearRect:(...args)=>operations.push(['clearRect',...args]),fillRect:(...args)=>operations.push(['fillRect',...args]),drawImage:(...args)=>operations.push(['drawImage',...args]),save(){},restore(){}};}
  getContext(){return this.context;}
  setAttribute(key,value){this.attributes[key]=value;}
  remove(){this.removed=true;this.parentNode?.removeChild(this);}
  toBlob(callback,type){setTimeout(()=>callback(new Blob(['image'],{type})),12);}
}
const pendingImages=[];
class FakeImage{
  constructor(){this.naturalWidth=0;this.naturalHeight=0;this.decoding='';this.onload=null;this.onerror=null;this.src='';}
  set src(value){this._src=value;const delay=value.includes('slow')?25:1;const promise=new Promise(resolve=>setTimeout(()=>{this.naturalWidth=value.includes('wrong-size')?32:16;this.naturalHeight=16;this.onload?.();resolve();},delay));this._decode=promise;pendingImages.push(value);}
  get src(){return this._src;}
  decode(){return this._decode;}
}
globalThis.document={createElement(tag){assert.equal(tag,'canvas');return new FakeCanvas();}};
globalThis.Image=FakeImage;
try{
  const host={children:[],append(child){this.children.push(child);child.parentNode=this;},removeChild(child){this.children=this.children.filter(item=>item!==child);child.parentNode=null;}};
  const composer=new LayeredComposer(host);
  await assert.rejects(composer.capture(16),/没有通过加载/);
  assert.equal(await composer.update(localPack,baselineDots),true);
  assert.equal(composer.canvas.dataset.previewStatus,'ready');
  const png=await composer.capture(32,{transparent:true});
  assert.equal(png.type,'image/png');
  assert(operations.some(operation=>operation[0]==='drawImage'),'composition draws decoded image layers');
  assert(operations.some(operation=>operation[0]==='fillRect'),'declared tint uses the source alpha mask path');
  assert.equal(composer.frame.context.fillStyle,'','the stored layer frame must not bake in a background; transparent export may override a solid preview');

  assert.equal(await composer.update(localPack,idleDots,{templatePreview:true}),true);
  assert.equal(composer.canvas.dataset.renderingMode,'selected-template-preview');
  assert.equal(composer.canvas.attributes['aria-label'],'所选模板与背景参考预览；高级 Prompt 设定未渲染');
  await assert.rejects(composer.capture(32),/只是已选模板/,'the renderer itself blocks export of an unsupported template-only preview');
  assert.equal(await composer.update(localPack,baselineDots),true,'a supported full signature restores current-configuration rendering');
  assert.equal(composer.canvas.attributes['aria-label'],'当前模板与背景合成预览');

  const beforeShapeRender=pendingImages.length;
  assert.equal(await composer.update(shapePack,heartDots),true);
  const shapeSources=pendingImages.slice(beforeShapeRender).filter(src=>src.startsWith('./assets/'));
  assert.deepEqual(shapeSources,['./assets/fixture/heart.png','./assets/fixture/face.png'],'the renderer must decode only the selected full recipe, excluding the previous body');

  const pendingCapture=composer.capture(32,{transparent:true});
  assert.equal(await composer.update(localPack,baselineDots),true);
  await assert.rejects(pendingCapture,/已更新/,'an update during PNG encoding cancels capture of the stale revision');

  const slowPack={...localPack,layers:[{...localPack.layers[0],src:'./assets/fixture/slow.png'}]};
  const stale=composer.update(slowPack,baselineDots);
  const fresh=composer.update(localPack,baselineDots);
  assert.equal(await fresh,true);
  assert.equal(await stale,false,'a stale async render cannot replace the newest frame');
  const badPack={...localPack,layers:[{...localPack.layers[0],src:'https://example.com/body.png'}]};
  await assert.rejects(composer.update(badPack,baselineDots),/本地图片|不属于|本地/);
  assert.equal(composer.canvas.dataset.previewStatus,'failed');
  await assert.rejects(composer.capture(16),/没有通过加载/,'a failed update invalidates an earlier frame for capture');
  assert.equal(await composer.update(localPack,baselineDots),true);
  const captureOnDispose=composer.capture(32,{transparent:true});
  composer.dispose();
  await assert.rejects(captureOnDispose,/已更新/,'dispose during PNG encoding cancels its stale output');
  assert.equal(host.children.length,0);
}finally{
  if(savedGlobals.document===undefined)delete globalThis.document;else globalThis.document=savedGlobals.document;
  if(savedGlobals.Image===undefined)delete globalThis.Image;else globalThis.Image=savedGlobals.Image;
}

console.log('Creation project, immutable artwork, prompt, v6-v10 migration, pack capability and layered-capture readiness checks passed.');
