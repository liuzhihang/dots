import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createHomePortal, matchingFamilies} from '../dist/studio-home.js';
import {createCharacter, createLookCharacter, FAMILIES} from '../dist/studio-model.js';
import {BUILT_IN_LOOKS, getLookDefinition} from '../dist/studio-looks.js';
import {PRESETS} from '../dist/studio-catalog.js';
import {exportProject, makeProject, parseProject, setProjectCharacter} from '../dist/studio-creation.js';
import {getBuiltInLooks, getCreationArtwork, getFamilyArtwork} from '../dist/studio-creation-assets.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const familyIds = ['dots', 'grok', 'meta-muse', 'humans', 'animals'];
const entries = [
  ['Dots', '团子', '耳机', 'dots'],
  ['Grok Bot', '几何', '磨砂', 'grok'],
  ['Meta Muse', '奶油', '毛绒', 'meta-muse'],
  ['Humans', '人物', '栗发', 'humans'],
  ['Animals', '动物', '柴犬', 'animals']
];

assert.deepEqual(matchingFamilies('').map(item => item.id), familyIds, 'the home index contains exactly five independent families');
for (const [english, chinese, keyword, id] of entries) {
  assert.deepEqual(matchingFamilies(english).map(item => item.id), [id], `${english} is searchable by its English name`);
  assert.deepEqual(matchingFamilies(chinese).map(item => item.id), [id], `${english} is searchable by its Chinese name`);
  assert.deepEqual(matchingFamilies(keyword).map(item => item.id), [id], `${english} is searchable by a family keyword`);
  assert.deepEqual(matchingFamilies('', id).map(item => item.id), [id], `${english} can be filtered as its own family`);
}
assert.deepEqual(matchingFamilies('gRoK bOt').map(item => item.id), ['grok'], 'matching is case-insensitive across multiple words');
assert.deepEqual(matchingFamilies('Ｄｏｔｓ').map(item => item.id), ['dots'], 'full-width search text is normalized');
assert.deepEqual(matchingFamilies('圆球').map(item => item.id), ['dots', 'grok'], 'shared spherical geometry is searchable in both families');
assert.deepEqual(matchingFamilies('圆球 耳机').map(item => item.id), ['dots'], 'all search terms must match the same family');
assert.deepEqual(matchingFamilies('耳机', 'grok'), [], 'search and family filter intersect');
assert.deepEqual(matchingFamilies('unregistered-material'), [], 'unknown search terms produce no results');
for (const historic of ['baseline-dots', 'grok-arch', 'muse-mu', 'pet-shiba', 'pet-owl', 'app-blue', 'historical-human-reading-v2']) {
  assert.deepEqual(matchingFamilies(historic), [], `${historic} is not a home family-search result`);
}

const source = await readFile(path.join(root, 'dist/studio.js'), 'utf8');
const homeSource = await readFile(path.join(root, 'dist/studio-home.js'), 'utf8');
const productionRemember = source.match(/function remember\(\)\{[^]*?\}\n(?=function toast\()/)?.[0]?.trim();
const productionSwitchFamily = source.match(/function switchFamily\(id\)\{[^]*?\}\n(?=function undo\()/)?.[0]?.trim();
const productionRouteFromHash = source.match(/function routeFromHash\(\)\{[^]*?\}\n(?=function applyRoute\()/)?.[0]?.trim();
const productionOpenGallery = source.match(/function openGallery\(family='all',options=\{\}\)\{[^]*?\}\n(?=function goHome\()/)?.[0]?.trim();
assert(productionRemember, 'could not locate the production remember() function');
assert(productionSwitchFamily, 'could not locate the production switchFamily() function');
assert(productionRouteFromHash, 'could not locate the production routeFromHash() function');
assert(productionOpenGallery, 'could not locate the production openGallery() function');
assert.match(homeSource, /filters\.addEventListener\('click',[^]*?openGallery\(activeFamily,\{replace:true,focus:false\}\)/,
  'changing a family filter replaces the current gallery URL with its selected family');

function character(family, {name, notes, output, referenceEnabled, referenceNotes}) {
  const value = createCharacter(family);
  value.name = name;
  value.notes = notes;
  value.output = output;
  value.reference = {
    ...value.reference,
    enabled: referenceEnabled,
    notes: referenceNotes
  };
  return value;
}

const initialProject = makeProject(character('dots', {
  name: 'Dots 私人草稿',
  notes: 'dots project notes',
  output: 'sticker',
  referenceEnabled: true,
  referenceNotes: '保留 Dots 参考图的短发与脸型'
}), {mode: 'composer', artworkId: null});
const storage = new Map();
const context = vm.createContext({
  state: initialProject.character,
  project: initialProject,
  familyDrafts: new Map(),
  FAMILIES,
  structuredClone,
  makeProject,
  parseProject,
  setProjectCharacter,
  exportProject,
  createCharacter,
  createLookCharacter,
  getFamilyArtwork,
  sessionStorage: {setItem: (key, value) => storage.set(key, value)}
});
vm.runInContext(`
let commitCount = 0;
function commit(next) {
  commitCount++;
  const clean = next?.format ? parseProject(next) : setProjectCharacter(project, next);
  if (JSON.stringify(clean) === JSON.stringify(project)) return;
  project = clean;
  state = project.character;
  remember();
}
${productionRemember}
${productionSwitchFamily}
globalThis.review = {
  switchFamily,
  remember,
  replaceProject(next) { project = parseProject(next); state = project.character; },
  get commitCount() { return commitCount; },
  get project() { return project; },
  get state() { return state; },
  getDraft(id) { return familyDrafts.get(id); },
  get draftCount() { return familyDrafts.size; }
};`, context);

const review = context.review;
review.remember();
review.switchFamily('grok');
assert.equal(review.state.family, 'grok', 'switchFamily selects a new valid family');
assert.equal(review.project.creation.mode, 'composer', 'an unseen family starts in the workbench');
assert.equal(review.project.creation.artworkId, getFamilyArtwork('grok').id, 'an unseen family selects its own real baseline look');
assert.deepEqual(review.state, createLookCharacter(getFamilyArtwork('grok').id), 'an unseen family uses the actual baseline image configuration instead of legacy trial settings');
assert.equal(review.state.reference.enabled, false, 'an unseen family starts without the previous family reference flag');
assert.equal(review.state.notes, '', 'an unseen family starts without the previous family notes');

review.replaceProject(makeProject(character('grok', {
  name: 'Grok 私人草稿',
  notes: 'grok project notes',
  output: 'pet',
  referenceEnabled: false,
  referenceNotes: 'Grok 的独立参考说明'
}), {mode: 'composer', artworkId: null}));
review.remember();

review.switchFamily('dots');
assert.equal(review.project.creation.mode, 'composer', 'returning to Dots restores its creation mode');
assert.equal(review.project.creation.artworkId, null, 'returning to Dots restores an explicitly empty artwork selection');
assert.equal(review.state.name, 'Dots 私人草稿');
assert.equal(review.state.notes, 'dots project notes');
assert.equal(review.state.output, 'sticker');
assert.equal(review.state.reference.enabled, true);
assert.equal(review.state.reference.notes, '保留 Dots 参考图的短发与脸型');

review.switchFamily('grok');
assert.equal(review.project.creation.mode, 'composer', 'Grok restores its own creation mode independently');
assert.equal(review.state.name, 'Grok 私人草稿');
assert.equal(review.state.notes, 'grok project notes');
assert.equal(review.state.output, 'pet');
assert.equal(review.state.reference.enabled, false);
assert.equal(review.state.reference.notes, 'Grok 的独立参考说明');

const cachedGrok = review.getDraft('grok');
const cachedSnapshot = JSON.stringify(cachedGrok);
review.project.creation.mode = 'artwork';
review.project.character.reference.notes = 'mutated active project only';
assert.equal(JSON.stringify(review.getDraft('grok')), cachedSnapshot, 'remember() and switchFamily() keep independent deep-cloned drafts');
assert(storage.has('dot-studio-project-v1'), 'the active wrapper is persisted through the existing session storage key');
assert.equal(JSON.parse(storage.get('dot-studio-project-v1')).format, 'dot-studio-project');
assert(review.draftCount >= 2, 'both family wrappers stay cached independently in the current page');

const beforeInvalid = JSON.stringify(review.project);
const commitsBeforeInvalid = review.commitCount;
review.switchFamily('not-a-family');
assert.equal(JSON.stringify(review.project), beforeInvalid, 'an invalid family id leaves the project unchanged');
assert.equal(review.commitCount, commitsBeforeInvalid, 'an invalid family id does not call commit');
assert.equal(FAMILIES[review.state.family] !== undefined, true, 'the active family remains valid after invalid input');

const routeContext = vm.createContext({location:{hash:'#looks/meta-muse'},FAMILIES,navigated:null});
vm.runInContext(`${productionRouteFromHash}\n${productionOpenGallery}\nglobalThis.routeFromHash=routeFromHash;globalThis.openGallery=openGallery;`,routeContext);
assert.deepEqual(JSON.parse(JSON.stringify(routeContext.routeFromHash())),{page:'looks',family:'meta-muse'},'a valid family gallery hash restores its filter');
routeContext.location.hash='#looks/%E0%A4%A';
assert.deepEqual(JSON.parse(JSON.stringify(routeContext.routeFromHash())),{page:'home'},'a malformed percent escape safely falls back to the home page');
routeContext.navigate=(route,options)=>{routeContext.navigated={route,options};};
routeContext.openGallery('animals',{replace:true,focus:false});
assert.deepEqual(JSON.parse(JSON.stringify(routeContext.navigated)),{route:{page:'looks',family:'animals'},options:{replace:true,focus:false}},'openGallery forwards replacement options to preserve filter URLs without extra history entries');
// Exercise actual home/gallery event listeners, then the production explicit
// customization helper. Browsing is not a selection or a project commit.
class PortalNode {
 constructor(id=''){this.id=id;this.dataset={};this.attributes={};this.listeners={};this.hidden=false;this.value='';this.textContent='';this.nodes=[];this.scrollLeft=0;}
 set innerHTML(value){this.html=value;this.nodes=[...value.matchAll(/<(button|article)\b([^>]*)>/g)].map(match=>{const node=new PortalNode();node.tag=match[1];for(const attr of match[2].matchAll(/([\w-]+)="([^"]*)"/g)){node.attributes[attr[1]]=attr[2];if(attr[1].startsWith('data-'))node.dataset[attr[1].slice(5).replace(/-([a-z])/g,(_,v)=>v.toUpperCase())]=attr[2];}return node;});}
 get innerHTML(){return this.html;}
 matches(selector){if(selector==='button')return this.tag==='button';const a=selector.match(/^\[([\w-]+)(?:="([^"]*)")?\]$/);return a&&Object.hasOwn(this.attributes,a[1])&&(a[2]===undefined||this.attributes[a[1]]===a[2]);}
 closest(selector){return this.matches(selector)?this:null;}
 querySelectorAll(selector){return this.nodes.filter(node=>node.matches(selector));}
 querySelector(selector){if(selector==='img')return {complete:true,naturalWidth:16,addEventListener(){}};return this.querySelectorAll(selector)[0]||null;}
 addEventListener(type,fn){this.listeners[type]=fn;}
 emit(type,target=this){this.listeners[type]?.({target});}
 setAttribute(key,value){this.attributes[key]=String(value);}
 getAttribute(key){return this.attributes[key]??null;}
 getBoundingClientRect(){return {left:0,right:100};}
 scrollTo({left}){this.scrollLeft=left;}
 focus(){portalDocument.activeElement=this;}
}
const portalNodes=new Map(),portalDocument={body:{dataset:{}},getElementById(id){if(!portalNodes.has(id))portalNodes.set(id,new PortalNode(id));return portalNodes.get(id);},querySelectorAll(selector){return [...portalNodes.values()].flatMap(node=>node.querySelectorAll(selector));}};
const savedPortalGlobals={document:globalThis.document,window:globalThis.window};globalThis.document=portalDocument;globalThis.window={addEventListener(){}};
try{
 const selected=structuredClone(initialProject);selected.character.background='solid';selected.character.colors.background='#242036';
 const navState={project:selected,state:selected.character,history:[],drafts:new Map([['dots',structuredClone(selected)]]),route:{page:'home'},commits:0};
 let portal;
 const navigate=(route)=>{navState.route=route;if(route.page==='looks')portal.showGallery(route.family);else if(route.page==='workspace')portal.setPageWorkspace();else portal.showHome();};
 const selectContext=vm.createContext({state:navState.state,project:navState.project,getCreationArtwork,getBuiltInLooks,getLookDefinition,BUILT_IN_LOOKS,PRESETS,FAMILIES,createLookCharacter,makeProject,structuredClone,navigate,toast(){},commit(next){navState.history.push(structuredClone(navState.project));navState.project=parseProject(next);navState.state=navState.project.character;selectContext.project=navState.project;selectContext.state=navState.state;navState.drafts.set(navState.state.family,structuredClone(navState.project));navState.commits++;}});
 const workbenchSource=source.slice(source.indexOf('function createWorkbenchLook('),source.indexOf('function selectDotsRecipe('));
 const startSource=source.slice(source.indexOf('function startLook('),source.indexOf('function startFromCurrentArtwork('));
 vm.runInContext(workbenchSource+startSource+'\nglobalThis.startLook=startLook;',selectContext);
 portal=createHomePortal({openWorkspace:()=>navigate({page:'workspace'}),openGallery:(family)=>navigate({page:'looks',family}),onStartLook:selectContext.startLook,onViewLook(){},onCopyLook(){},onDownloadLook(){},onReference(){}});
 const original=JSON.stringify(navState.project),originalDraft=JSON.stringify(navState.drafts.get('dots'));
 const assertBrowse=()=>{assert.equal(navState.commits,0);assert.equal(navState.history.length,0);assert.equal(JSON.stringify(navState.project),original);assert.equal(JSON.stringify(navState.drafts.get('dots')),originalDraft);};
 const familyCards=portalDocument.getElementById('familyCards'),search=portalDocument.getElementById('familySearch'),cards=portalDocument.getElementById('lookCards'),filters=portalDocument.getElementById('lookFilters');
 for(const family of familyIds){
  portal.showHome();familyCards.emit('click',familyCards.querySelector(`[data-family-gallery="${family}"]`));
  assert.deepEqual(navState.route,{page:'looks',family});assert.equal(cards.querySelectorAll('[data-look-card]').length,3);assertBrowse();
 }
 portal.showGallery('meta-muse');
 const museCandidate=getBuiltInLooks('meta-muse').find(item=>item.kind!=='baseline-candidate');assert(museCandidate);
 search.value=museCandidate.id;search.emit('input');assert.equal(cards.querySelectorAll('[data-look-card]').length,1,'gallery-only candidates are searchable');assertBrowse();
 search.value='unregistered-material';search.emit('input');assert.equal(portalDocument.getElementById('lookEmpty').hidden,false);assertBrowse();
 portalDocument.getElementById('clearSearch').emit('click');assert.equal(cards.querySelectorAll('[data-look-card]').length,3,'clearing retains the active Muse family');assert.equal(filters.querySelector('[aria-pressed="true"]').dataset.lookFilter,'meta-muse');assertBrowse();
 filters.emit('click',filters.querySelector('[data-look-filter="grok"]'));assert.equal(cards.querySelectorAll('[data-look-card]').length,3);assert.equal(navState.route.family,'grok');assert.equal(portalDocument.activeElement.dataset.lookFilter,'grok','filter rerender retains keyboard focus');assertBrowse();
 portal.showGallery('all');assert.equal(cards.querySelectorAll('[data-look-card]').length,15,'only the bounded 15 registered looks are browsable');
 search.value='historical-human-reading-v2';search.emit('input');assert.equal(cards.querySelectorAll('[data-look-card]').length,0);assertBrowse();
 portalDocument.getElementById('clearSearch').emit('click');portal.showGallery('meta-muse');
 cards.emit('click',cards.querySelector(`[data-start-look="${museCandidate.id}"]`));
 assert.equal(navState.commits,1,'only explicit customization creates a project commit');assert.equal(navState.route.page,'workspace');assert.equal(navState.state.family,'meta-muse');assert.equal(navState.project.creation.artworkId,museCandidate.id);assert.equal(navState.project.creation.mode,'composer');
 assert.equal(navState.state.name,selected.character.name);assert.equal(navState.state.notes,selected.character.notes);assert.deepEqual(navState.state.reference,selected.character.reference);assert.equal(navState.state.background,'solid');assert.equal(navState.state.colors.background,'#242036');assert.equal(navState.state.version,10);assert.equal(navState.project.version,1);assert.equal(JSON.stringify(navState.drafts.get('dots')),originalDraft);
 assert.equal(JSON.stringify(navState.history[0]),original,'explicit selection is undoable to the full original project');
}finally{for(const [key,value]of Object.entries(savedPortalGlobals))if(value===undefined)delete globalThis[key];else globalThis[key]=value;}
console.log('Family search, family-draft navigation, safe hashes and gallery URL replacement checks passed.');
