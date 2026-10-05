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
  selectCompositionLayers,
  setCreationMode,
  setProjectCharacter
} from '../dist/studio-creation.js';
import {COMPOSITION_PACKS,CREATION_ARTWORKS} from '../dist/studio-creation-assets.js';
import {createPreset,setCharacterValue,buildPrompt,resolveCharacter} from '../dist/studio-model.js';
import {LayeredComposer} from '../dist/studio-composer.js';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
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
assert.equal((await import('../dist/studio-creation-assets.js?v=59')).getCreationArtwork('historical-human-reading-v2').status,'retired','legacy imports may still resolve the retired tombstone');
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
assert.equal((await import('../dist/studio-creation-assets.js?v=59')).getCreationArtwork('historical-grok-matte-work-v2').status,'retired','legacy Grok imports may resolve the tombstone');
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
  if(!COMPOSITION_PACKS.some(pack=>pack.family===family)){
    const noPack=setCreationMode(makeProject(baselineByFamily[family]),'composer');
    assert.equal(resolveCreation(noPack).availability,'missing',family+' cannot fall back to a live 3D capture');
    assert.match(buildCreationPrompt(noPack,'en'),/No composable layers are registered/);
  }
}

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
