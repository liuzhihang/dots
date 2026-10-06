import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createHomePortal, matchingFamilies} from '../dist/studio-home.js';
import {VERSION, createCharacter, createLookCharacter, FAMILIES} from '../dist/studio-model.js';
import {BUILT_IN_LOOKS, getLookDefinition} from '../dist/studio-looks.js';
import {PRESETS} from '../dist/studio-catalog.js';
import {exportProject, makeProject, parseProject, setProjectCharacter} from '../dist/studio-creation.js';
import {getBuiltInLooks, getCreationArtwork, getFamilyArtwork} from '../dist/studio-creation-assets.js';
import {LOOK_TAGS, normalizeTagQuery, queryLooks} from '../dist/studio-tags.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const homeScenes = ['dots', 'grok', 'meta-muse', 'humans', 'animals'];
const entries = [
  ['Dots', '团子', '耳机', 'dots'],
  ['Grok Bot', '几何', '磨砂', 'grok'],
  ['Meta Muse', '奶油', '毛绒', 'meta-muse'],
  ['Humans', '人物', '栗发', 'humans'],
  ['Animals', '动物', '柴犬', 'animals']
];

assert.deepEqual(matchingFamilies('').map(item => item.id), homeScenes,
  'the frozen homepage still presents its five current scene cards; this is not the content taxonomy');
for (const [english, chinese, keyword, id] of entries) {
  assert.deepEqual(matchingFamilies(english).map(item => item.id), [id], `${english} is searchable by its English name`);
  assert.deepEqual(matchingFamilies(chinese).map(item => item.id), [id], `${english} is searchable by its Chinese name`);
  assert.deepEqual(matchingFamilies(keyword).map(item => item.id), [id], `${english} is searchable by a scene keyword`);
  assert.deepEqual(matchingFamilies('', id).map(item => item.id), [id], `${english} can be filtered as its own homepage scene`);
}
assert.deepEqual(matchingFamilies('gRoK bOt').map(item => item.id), ['grok'], 'homepage matching is case-insensitive');
assert.deepEqual(matchingFamilies('Ｄｏｔｓ').map(item => item.id), ['dots'], 'homepage search normalizes full-width text');
assert.deepEqual(matchingFamilies('圆球').map(item => item.id), ['dots', 'grok'], 'shared scene keywords can match multiple cards');
assert.deepEqual(matchingFamilies('圆球 耳机').map(item => item.id), ['dots'], 'all home search terms must match one card');
assert.deepEqual(matchingFamilies('耳机', 'grok'), [], 'home search and its scene filter intersect');
assert.deepEqual(matchingFamilies('unregistered-material'), [], 'unknown home search terms produce no results');

const source = await readFile(path.join(root, 'dist/studio.js'), 'utf8');
const homeSource = await readFile(path.join(root, 'dist/studio-home.js'), 'utf8');
const productionRemember = source.match(/function remember\(\)\{[^]*?\}\n(?=function toast\()/)?.[0]?.trim();
const productionSwitchFamily = source.match(/function switchFamily\(id\)\{[^]*?\}\n(?=function undo\()/)?.[0]?.trim();
const productionRouteFromHash = source.match(/function routeFromHash\(\)\{[^]*?\}\n(?=function applyRoute\()/)?.[0]?.trim();
const productionOpenGallery = source.match(/function openGallery\(family='all',options=\{\}\)\{[^]*?\}\n(?=function goHome\()/)?.[0]?.trim();
assert(productionRemember, 'could not locate production remember()');
assert(productionSwitchFamily, 'could not locate production switchFamily()');
assert(productionRouteFromHash, 'could not locate production routeFromHash()');
assert(productionOpenGallery, 'could not locate production openGallery()');
assert.match(source, /dot-studio-project-v2/, 'the active session uses the v2 project contract');
assert.match(homeSource, /if\(b\)openGallery\(b\.dataset\.familyGallery\)/,
  'homepage scene cards retain their existing route entry point');
assert.match(source, /function openGallery\(family='all',options=\{\}\)/,
  'the route helper remains a thin navigation adapter; typed tag filters stay in gallery state');

for (const look of BUILT_IN_LOOKS) {
  const linkedTags = LOOK_TAGS[look.artworkId];
  assert(linkedTags?.length >= 2, `${look.artworkId} can be found through multiple typed tags`);
  assert(queryLooks({tagsByDimension:{style:['dots','grok']}}).some(item => item.artworkId === look.artworkId)
    || queryLooks({tagsByDimension:{'object-type':['humans','animals','geometry','fantasy']}}).some(item => item.artworkId === look.artworkId),
  `${look.artworkId} remains discoverable through its registered dimensions`);
}

function character(family, {name, notes, output, referenceEnabled, referenceNotes}) {
  const value = createCharacter(family);
  value.name = name;
  value.notes = notes;
  value.output = output;
  value.reference = {...value.reference, enabled:referenceEnabled, notes:referenceNotes};
  return value;
}

const initialProject = makeProject(character('dots', {
  name:'Dots 私人草稿', notes:'dots project notes', output:'sticker',
  referenceEnabled:true, referenceNotes:'保留 Dots 参考图的短发与脸型'
}), {mode:'composer', artworkId:null});
assert.equal(initialProject.format, 'dot-studio-project');
assert.equal(initialProject.version, 2);
assert.equal(initialProject.character.version, VERSION);
const storage = new Map();
const context = vm.createContext({
  state:initialProject.character, project:initialProject, familyDrafts:new Map(), FAMILIES, structuredClone,
  makeProject, parseProject, setProjectCharacter, exportProject, createCharacter, createLookCharacter,
  getFamilyArtwork, sessionStorage:{setItem:(key,value)=>storage.set(key,value)}
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
  switchFamily, remember,
  replaceProject(next) { project = parseProject(next); state = project.character; },
  get commitCount() { return commitCount; }, get project() { return project; }, get state() { return state; },
  getDraft(id) { return familyDrafts.get(id); }, get draftCount() { return familyDrafts.size; }
};`, context);

const review = context.review;
review.remember();
review.switchFamily('grok');
assert.equal(review.state.family, 'grok', 'the workbench can switch its active character template');
assert.equal(review.project.version, 2);
assert.equal(review.state.version, VERSION);
assert.equal(review.project.creation.mode, 'composer');
assert.equal(review.project.creation.artworkId, getFamilyArtwork('grok').id);
assert.deepEqual(review.state, createLookCharacter(getFamilyArtwork('grok').id), 'a new character template uses its own registered artwork');
assert.equal(review.state.reference.enabled, false);
assert.equal(review.state.notes, '');

review.replaceProject(makeProject(character('grok', {
  name:'Grok 私人草稿', notes:'grok project notes', output:'pet',
  referenceEnabled:false, referenceNotes:'Grok 的独立参考说明'
}), {mode:'composer', artworkId:null}));
review.remember();
review.switchFamily('dots');
assert.equal(review.project.creation.mode, 'composer');
assert.equal(review.project.creation.artworkId, null, 'returning to Dots restores its explicitly empty artwork selection');
assert.equal(review.state.name, 'Dots 私人草稿');
assert.equal(review.state.notes, 'dots project notes');
assert.equal(review.state.output, 'sticker');
assert.equal(review.state.reference.enabled, true);
assert.equal(review.state.reference.notes, '保留 Dots 参考图的短发与脸型');
review.switchFamily('grok');
assert.equal(review.state.name, 'Grok 私人草稿');
assert.equal(review.state.notes, 'grok project notes');
assert.equal(review.state.output, 'pet');
assert.equal(review.state.reference.enabled, false);
assert.equal(review.state.reference.notes, 'Grok 的独立参考说明');

const cachedGrok = review.getDraft('grok');
const cachedSnapshot = JSON.stringify(cachedGrok);
review.project.creation.mode = 'artwork';
review.project.character.reference.notes = 'mutated active project only';
assert.equal(JSON.stringify(review.getDraft('grok')), cachedSnapshot, 'cached drafts are deep clones, isolated from the active project');
assert(storage.has('dot-studio-project-v2'), 'the active v2 wrapper is persisted in the current session key');
assert.equal(JSON.parse(storage.get('dot-studio-project-v2')).version, 2);
assert(review.draftCount >= 2, 'the in-page per-character draft cache remains independent');
assert.throws(() => parseProject(initialProject.character), /包装 v2|Dot Studio 项目包装/,
  'unwrapped role JSON is rejected rather than silently upgraded');
assert.throws(() => parseProject({...initialProject, version:1}), /版本不受支持/,
  'obsolete project versions are rejected rather than auto-converted');

const beforeInvalid = JSON.stringify(review.project), commitsBeforeInvalid = review.commitCount;
review.switchFamily('not-a-family');
assert.equal(JSON.stringify(review.project), beforeInvalid, 'invalid character-template IDs leave the project unchanged');
assert.equal(review.commitCount, commitsBeforeInvalid, 'invalid character-template IDs do not call commit');
assert.equal(FAMILIES[review.state.family] !== undefined, true);

const routeContext = vm.createContext({location:{hash:'#looks/meta-muse'}, FAMILIES, navigated:null});
vm.runInContext(`${productionRouteFromHash}\n${productionOpenGallery}\nglobalThis.routeFromHash=routeFromHash;globalThis.openGallery=openGallery;`, routeContext);
assert.deepEqual(JSON.parse(JSON.stringify(routeContext.routeFromHash())), {page:'looks',family:'meta-muse'});
routeContext.location.hash = '#looks/%E0%A4%A';
assert.deepEqual(JSON.parse(JSON.stringify(routeContext.routeFromHash())), {page:'home'}, 'malformed route encoding safely falls back home');
routeContext.navigate = (route,options) => { routeContext.navigated = {route,options}; };
routeContext.openGallery('animals',{replace:true,focus:false});
assert.deepEqual(JSON.parse(JSON.stringify(routeContext.navigated)), {route:{page:'looks',family:'animals'},options:{replace:true,focus:false}});

class PortalNode {
  constructor(tag='div',id='') { this.tag=tag; this.tagName=tag.toUpperCase(); this.id=id; this.dataset={}; this.attributes={}; this.listeners={}; this.hidden=false; this.value=''; this.textContent=''; this.nodes=[]; this.scrollLeft=0; this.open=false; }
  set innerHTML(value) {
    this.html=value;
    this.nodes=[...value.matchAll(/<([a-z][\w-]*)\b([^>]*)>/gi)].map(match=>{
      const node=new PortalNode(match[1]);
      for(const attr of match[2].matchAll(/(?:^|\s)([\w:-]+)(?:="([^"]*)")?/g)){
        node.attributes[attr[1]]=attr[2]??'';
        if(attr[1].startsWith('data-'))node.dataset[attr[1].slice(5).replace(/-([a-z])/g,(_,v)=>v.toUpperCase())]=attr[2]??'';
      }
      return node;
    });
  }
  get innerHTML() { return this.html; }
  matches(selector) {
    if(selector==='button')return this.tag==='button';
    if(selector==='input')return this.tag==='input';
    const m=selector.match(/^\[([\w:-]+)(?:="([^"]*)")?\]$/);
    return !!m&&Object.hasOwn(this.attributes,m[1])&&(m[2]===undefined||this.attributes[m[1]]===m[2]);
  }
  closest(selector) { return this.matches(selector)?this:null; }
  querySelectorAll(selector) { return this.nodes.flatMap(node=>[...(node.matches(selector)?[node]:[]),...node.querySelectorAll(selector)]); }
  querySelector(selector) { if(selector==='img')return {complete:true,naturalWidth:16,addEventListener(){}}; return this.querySelectorAll(selector)[0]||null; }
  addEventListener(type,fn) { this.listeners[type]=fn; }
  emit(type,target=this) { this.listeners[type]?.({target,preventDefault(){}}); }
  hasAttribute(key) { return Object.hasOwn(this.attributes,key); }
  setAttribute(key,value) { this.attributes[key]=String(value); }
  getAttribute(key) { return this.attributes[key]??null; }
  getBoundingClientRect() { return {left:0,right:100}; }
  scrollTo({left}) { this.scrollLeft=left; }
  focus() { portalDocument.activeElement=this; }
  showModal() { this.open=true; }
  close() { this.open=false; this.emit('close'); }
  remove() { this.removed=true; }
}

const portalNodes=new Map(), portalDocument={
  body:{dataset:{},append(node){portalDocument.dialogs.push(node);}}, dialogs:[], activeElement:null,
  getElementById(id){if(!portalNodes.has(id))portalNodes.set(id,new PortalNode('div',id));return portalNodes.get(id);},
  createElement(tag){return new PortalNode(tag);},
  querySelectorAll(selector){return [...portalNodes.values()].flatMap(node=>node.querySelectorAll(selector));},
  querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
};
const savedGlobals={document:globalThis.document,window:globalThis.window};
globalThis.document=portalDocument; globalThis.window={addEventListener(){}};
try {
  const selected=structuredClone(initialProject); selected.character.background='solid'; selected.character.colors.background='#242036';
  const navState={project:selected,state:selected.character,history:[],drafts:new Map([['dots',structuredClone(selected)]]),route:{page:'home'},commits:0};
  let portal;
  const navigate=route=>{navState.route=route;if(route.page==='looks')portal.showGallery(route.family);else if(route.page==='workspace')portal.setPageWorkspace();else portal.showHome();};
  const selectContext=vm.createContext({state:navState.state,project:navState.project,getCreationArtwork,getBuiltInLooks,getLookDefinition,BUILT_IN_LOOKS,PRESETS,FAMILIES,createLookCharacter,makeProject,structuredClone,navigate,toast(){},commit(next){navState.history.push(structuredClone(navState.project));navState.project=parseProject(next);navState.state=navState.project.character;selectContext.project=navState.project;selectContext.state=navState.state;navState.drafts.set(navState.state.family,structuredClone(navState.project));navState.commits++;}});
  const workbenchSource=source.slice(source.indexOf('function createWorkbenchLook('),source.indexOf('function selectDotsRecipe('));
  const startSource=source.slice(source.indexOf('function startLook('),source.indexOf('function startFromCurrentArtwork('));
  vm.runInContext(workbenchSource+startSource+'\nglobalThis.startLook=startLook;',selectContext);
  const queryChanges=[];
  portal=createHomePortal({
    openWorkspace:()=>navigate({page:'workspace'}), openGallery:family=>navigate({page:'looks',family}),
    onStartLook:selectContext.startLook, onViewLook(){}, onCopyLook(){}, onDownloadLook(){}, onReference(){},
    onQueryChange:q=>queryChanges.push(structuredClone(q))
  });
  const original=JSON.stringify(navState.project), originalDraft=JSON.stringify(navState.drafts.get('dots'));
  const assertBrowse=()=>{assert.equal(navState.commits,0);assert.equal(navState.history.length,0);assert.equal(JSON.stringify(navState.project),original);assert.equal(JSON.stringify(navState.drafts.get('dots')),originalDraft);};
  const familyCards=portalDocument.getElementById('familyCards'), search=portalDocument.getElementById('familySearch'), cards=portalDocument.getElementById('lookCards'), filters=portalDocument.getElementById('lookFilters');
  for(const family of homeScenes){
    portal.showHome(); familyCards.emit('click',familyCards.querySelector(`[data-family-gallery="${family}"]`));
    assert.deepEqual(navState.route,{page:'looks',family}); assertBrowse();
  }
  portal.showGallery('meta-muse');
  const museTagQuery=portal.getQuery();
  assert.deepEqual(museTagQuery.tagsByDimension.style,['meta-muse'], 'family navigation resolves to a typed style tag');
  assert.equal(cards.querySelectorAll('[data-look-card]').length,3);
  assert.deepEqual(portal.getRandomQuery().tagsByDimension,museTagQuery.tagsByDimension);
  assertBrowse();

  filters.emit('click',filters.querySelector('[data-tag="grok"]'));
  assert.deepEqual(portal.getQuery().tagsByDimension.style,['grok','meta-muse'], 'same-dimension tag selection uses OR');
  assert.equal(cards.querySelectorAll('[data-look-card]').length,6);
  assertBrowse();
  filters.emit('click',filters.querySelector('[data-tag="humans"]'));
  assert.deepEqual(portal.getQuery().tagsByDimension['object-type'],['humans']);
  assert.equal(cards.querySelectorAll('[data-look-card]').length,0, 'cross-dimension query uses AND');
  assertBrowse();

  const more=filters.querySelector('[data-more-tags]'); assert(more,'the gallery offers an expandable tag directory');
  filters.emit('click',more);
  const tagDialog=portalDocument.dialogs.at(-1); assert.equal(tagDialog.open,true);
  const tagSearch=tagDialog.querySelector('[data-search-tags]'); tagSearch.value='fantasy'; tagSearch.emit('input');
  assert(tagDialog.querySelector('[data-tag="fantasy"]'),'the expandable directory searches published tags');
  tagDialog.emit('click',tagDialog.querySelector('[data-tag="fantasy"]'));
  assert.deepEqual(portal.getQuery().tagsByDimension['object-type'],['fantasy','humans']);
  assert.equal(cards.querySelectorAll('[data-look-card]').length,3, 'different values in one dimension widen the OR group while style tags remain intersected');
  assert(queryChanges.length>0,'typed filter changes are propagated to the workbench/random query owner');
  assertBrowse();
  tagDialog.close();

  portal.showGallery('all');
  assert.equal(cards.querySelectorAll('[data-look-card]').length,15,'the current registered inventory is visible without a tag filter');
  const galleryRandomQuery=portal.getRandomQuery();
  assert(!Object.hasOwn(galleryRandomQuery,'lookIds'),'gallery random scope carries typed query data, not home-only scene IDs');
  search.value='historical-human-reading-v2'; search.emit('input');
  assert.equal(cards.querySelectorAll('[data-look-card]').length,0); assertBrowse();
  search.value=''; search.emit('input');
  filters.emit('click',filters.querySelector('[data-clear-tags]'));
  assert.deepEqual(portal.getQuery().tagsByDimension,{},'clearing filters removes tag scope');
  assert.equal(cards.querySelectorAll('[data-look-card]').length,15); assertBrowse();

  portal.showHome(); search.value='Grok Bot'; search.emit('input');
  const homeRandomQuery=portal.getRandomQuery();
  assert.deepEqual(homeRandomQuery.tagsByDimension,{},'home visual search remains a frozen scene filter, not a tag-browser UI');
  assert(homeRandomQuery.lookIds.length>0&&homeRandomQuery.lookIds.every(id=>getLookDefinition(id)),'home random scope is a registered look ID allowlist');
  assertBrowse();

  search.value=''; search.emit('input');
  portal.showGallery('meta-muse');
  const museCandidate=getBuiltInLooks('meta-muse').find(item=>item.id!=='candidate-meta-muse-20261005'); assert(museCandidate);
  cards.emit('click',cards.querySelector(`[data-start-look="${museCandidate.id}"]`));
  assert.equal(navState.commits,1,'only explicit “use this look” commits a project');
  assert.equal(navState.route.page,'workspace'); assert.equal(navState.state.family,'meta-muse');
  assert.equal(navState.project.creation.artworkId,museCandidate.id); assert.equal(navState.project.creation.mode,'composer');
  assert.equal(navState.project.version,2); assert.equal(navState.state.version,VERSION);
  assert.equal(navState.state.name,selected.character.name); assert.equal(navState.state.notes,selected.character.notes);
  assert.deepEqual(navState.state.reference,selected.character.reference); assert.equal(navState.state.background,'solid');
  assert.equal(navState.state.colors.background,'#242036'); assert.equal(JSON.stringify(navState.drafts.get('dots')),originalDraft);
  assert.equal(JSON.stringify(navState.history[0]),original,'explicit customization is undoable to the complete prior v2 project');
} finally {
  for(const [key,value] of Object.entries(savedGlobals)) if(value===undefined)delete globalThis[key]; else globalThis[key]=value;
}

console.log('Frozen homepage navigation, typed-tag scope, isolated v2 drafts, safe routes and explicit-only project commits passed.');
