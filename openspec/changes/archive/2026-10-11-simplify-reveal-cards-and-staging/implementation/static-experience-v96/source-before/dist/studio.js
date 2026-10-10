import {REVEAL_RESOURCE_POLICY} from './studio-runtime-config.js?v=95';
import {ARTWORKS,getArtwork,getAsset,isEligible,createSnapshot,CATALOG_REVISION} from './studio-artwork-catalog.js?v=95';
import {normalizeTagQuery,queryArtworks,queryForTopic} from './studio-tags.js?v=95';
import {loadAsset} from './studio-asset-loader.js?v=95';
import {createDrawEngine} from './studio-draw.js?v=95';
import {createRevealView} from './studio-fullscreen-random.js?v=95';
import {createDetailView,detailSelectedTagsFor} from './studio-detail.js?v=95';
import {createReferenceView} from './studio-reference.js?v=95';
import {createOverlay} from './studio-overlay.js?v=95';
import {createTagBrowser} from './studio-tag-browser.js?v=95';
import {createHomePortal,TOPICS,escapeHTML as esc} from './studio-home.js?v=95';

const byId=id=>document.getElementById(id),engine=createDrawEngine({resourcePolicy:REVEAL_RESOURCE_POLICY});
const galleryState={query:normalizeTagQuery(),scroll:0};
const pageScroll={home:0,gallery:0,game:0},unavailable=new Map(),verified=new Set(),assetChecks=new Map();
let page='home',galleryTags,gameView,activeReveal=null,referenceSession=null,toastTimer,handledRouteUrl='';
function notify(message){const el=byId('toast');el.textContent=message;el.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.hidden=true,4500);}
const overlay=createOverlay({dialog:byId('studioOverlay'),title:byId('overlayTitle'),body:byId('overlayBody'),backButton:byId('overlayBack'),closeButton:byId('overlayClose'),background:byId('pageShell'),onFinalClose(){referenceSession=null;}});
function activate(view){if(activeReveal&&activeReveal!==view)activeReveal.cancel();activeReveal=view;}
function serializeQuery(query){const params=new URLSearchParams();if(query.text)params.set('q',query.text);for(const [dim,ids] of Object.entries(query.tagsByDimension))params.set(dim,ids.join(','));return params.toString();}
function routeHref(next,q=galleryState.query){const params=next==='gallery'?serializeQuery(q):'';return `#${next}${params?'?'+params:''}`;}
function readRoute(){
 const raw=location.hash.slice(1)||'home',parts=raw.split('?');let next=parts[0];if(!['home','gallery','game'].includes(next))next='home';
 let query=null;if(next==='gallery'){
  const params=new URLSearchParams(parts.slice(1).join('?')),groups={};for(const [key,value] of params){if(key!=='q')groups[key]=value.split(',');}
  query=normalizeTagQuery({text:params.get('q')||'',tagsByDimension:groups});
 }return {page:next,query};
}
function writeState({push=false}={}){history[push?'pushState':'replaceState']({studio:93,page,overlayTrail:[]},'',routeHref(page));handledRouteUrl=location.href;}
function showPage(next,{query,restore=false}={}){
 const changed=page!==next;pageScroll[page]=window.scrollY;page=next;
 if(query)galleryState.query=normalizeTagQuery(query);
 document.body.dataset.screen=page;
 for(const name of ['home','gallery','game'])byId(name+'Portal').hidden=name!==page;
 document.querySelectorAll('[data-page]').forEach(a=>{if(a.dataset.page===page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(page==='gallery'){byId('gallerySearch').value=galleryState.query.text;galleryTags?.render();renderGallery();}
 if(changed){activeReveal?.cancel();activeReveal=null;window.scrollTo({top:restore?pageScroll[page]||0:0,behavior:'instant'});byId(page+'Title')?.focus({preventScroll:true});}
}
function navigate(next,{query}={}){if(overlay.isClosing()){overlay.afterClose(()=>navigate(next,{query}));return;}if(!['home','gallery','game'].includes(next))next='home';overlay.reset();showPage(next,{query,restore:false});writeState({push:true});}
function checkAsset(artwork){
 const asset=getAsset(artwork.assetRefs.original),key=asset.id+'@'+asset.version;
 if(!assetChecks.has(key))assetChecks.set(key,loadAsset(asset).then(loaded=>{verified.add(artwork.id);engine.clearUnavailable(artwork.id);loaded.dispose();return true;}).catch(error=>{unavailable.set(artwork.id,error.message);engine.markUnavailable(artwork.id,error.message);return false;}));
 return assetChecks.get(key);
}
function renderGallery(){
 const q=galleryState.query,found=queryArtworks(q).filter(a=>!unavailable.has(a.id));
 const errors=q.errors||[];byId('queryError').hidden=q.valid!==false;byId('queryError').textContent=q.valid===false?'筛选条件无效，请清空或调整条件。'+errors.map(e=>e.value||e.kind).join('、'):'';
 byId('galleryCount').textContent=`${found.length} 款符合条件的作品`;
 byId('galleryEmpty').hidden=found.length>0;
 byId('artworkGrid').innerHTML=found.map(a=>{
  const asset=getAsset(a.assetRefs.original),topic=TOPICS.find(t=>t.id===a.styleIdentity),tags=detailSelectedTagsFor(a,3);
  const bounds=asset.alpha?.visibleBounds;
  const extent=bounds?Math.max(bounds.width,bounds.height):Math.max(asset.width,asset.height);
  const imageStyle=bounds?`width:${asset.width/extent*88}%;height:auto;max-width:none;max-height:none;position:absolute;left:50%;top:50%;transform:translate(${-100*(bounds.x+bounds.width/2)/asset.width}%,${-100*(bounds.y+bounds.height/2)/asset.height}%);`:'';
  return `<article class="artwork-card" data-artwork-card="${esc(a.id)}" data-resource-state="${verified.has(a.id)?'ready':'checking'}"><button class="artwork-open" data-artwork="${esc(a.id)}" aria-label="查看${esc(a.title)}"><span class="artwork-image" style="--art-surface:${topic?.surface||'#f2f3fa'}"><img src="${esc(asset.path)}" alt="${esc(a.title)}" width="${asset.width}" height="${asset.height}" style="${esc(imageStyle)}" loading="lazy" decoding="async"></span><span class="artwork-caption"><b>${esc(a.title)}</b></span></button><div class="artwork-card-tags">${tags.map(tag=>`<button type="button" class="gallery-feature-tag" data-gallery-feature="${esc(tag.id)}" data-dimension="${esc(tag.dimension)}">${esc(tag.label)}</button>`).join('')}</div><small class="asset-status">${verified.has(a.id)?'透明 PNG · 查看 Prompt':'图片载入中…'}</small></article>`;
 }).join('');
 byId('resourceNotice').hidden=!unavailable.size;byId('resourceNotice').replaceChildren();
 if(unavailable.size){byId('resourceNotice').append(document.createTextNode(`${unavailable.size} 张图片暂时无法显示。`));const retry=document.createElement('button');retry.className='button quiet';retry.textContent='再试一次';retry.addEventListener('click',()=>{unavailable.clear();engine.clearUnavailable();assetChecks.clear();renderGallery();});byId('resourceNotice').append(retry);}
 for(const a of found){checkAsset(a).then(ok=>{
  const card=[...byId('artworkGrid').querySelectorAll('[data-artwork-card]')].find(el=>el.dataset.artworkCard===a.id);if(!card)return;
  if(ok){card.dataset.resourceState='ready';card.querySelector('.asset-status').textContent='透明 PNG · 查看 Prompt';}
  else{renderGallery();}
 });}
}
function setGalleryQuery(query){galleryState.query=normalizeTagQuery(query);renderGallery();writeState();}
function openDetail(id,snapshot){
 let selected=id;activeReveal?.cancel();
 if(!overlay.isOpen()&&page==='gallery')history.replaceState({...history.state,galleryScroll:window.scrollY,galleryFocusArtwork:document.activeElement?.dataset?.artwork},'',location.href);
 overlay.show({kind:'detail',title:'作品详情',factory(resumeState){return createDetailView({artworkId:selected,snapshot:selected===id?snapshot:undefined,resumeState,onTag:(tagId,dimension)=>overlay.exitToPage(()=>{navigate('gallery',{query:{tagsByDimension:{[dimension]:[tagId]}}});window.scrollTo({top:0,behavior:'instant'});byId('galleryTitle').focus({preventScroll:true});}),onReference:artwork=>openReference(typeof artwork==='string'?artwork:getArtwork(selected)?.styleIdentity),onArtworkChange:artwork=>{selected=typeof artwork==='string'?artwork:artwork.id;},notify});}});
}
function openReference(styleId){
 activeReveal?.cancel();
 overlay.show({kind:'reference',title:'参考图创作',factory(){return createReferenceView({styleId:styleId||'dots',session:referenceSession||{},onSessionChange:session=>{referenceSession=session;},notify});}});
}
function openRandom(){
 const scope={query:normalizeTagQuery(page==='gallery'?galleryState.query:{}),requiredFeatures:[]};
 let savedResult=null,savedLocks=[];
 activeReveal?.cancel();
 overlay.show({kind:'random',title:'随机发现一位伙伴',factory(){
  const container=document.createElement('section');container.className='random-container';
  let view;view=createRevealView({engine,resourcePolicy:REVEAL_RESOURCE_POLICY,autoStart:!savedResult,initialRequiredFeatures:savedLocks,onLocksChange:ids=>savedLocks=[...ids],getConditions(){activate(view);return scope;},onDetail:result=>openDetail(result.artworkId,result),onResult:result=>savedResult=result,notify});
  container.append(view.element);
  let ready;if(savedResult)ready=view.restore(savedResult);
  return {element:container,title:'随机发现一位伙伴',ready,dispose(){savedLocks=[...view.getState().requiredFeatures];view.dispose();},getResult:view.getResult,getState:view.getState};
 }});
}

createHomePortal({onTopic:id=>navigate('gallery',{query:queryForTopic(id)}),onArtwork:openDetail});
galleryTags=createTagBrowser(byId('galleryTags'),{getQuery:()=>galleryState.query,onChange:setGalleryQuery});
gameView=createRevealView({engine,resourcePolicy:REVEAL_RESOURCE_POLICY,getConditions(){activate(gameView);return {query:normalizeTagQuery(),requiredFeatures:[]};},onDetail:r=>openDetail(r.artworkId,r),notify});byId('gameReveal').append(gameView.element);
byId('gallerySearch').addEventListener('input',e=>setGalleryQuery({...galleryState.query,text:e.target.value}));
function clearGallery(){byId('gallerySearch').value='';setGalleryQuery({});galleryTags.render();}
byId('clearFilters').addEventListener('click',clearGallery);
document.addEventListener('click',e=>{
 if(e.target.closest('.skip-link')){e.preventDefault();byId('mainContent').focus();return;}
 const button=e.target.closest('[data-command]');if(button){if(button.dataset.command==='random')openRandom();if(button.dataset.command==='reference')openReference();if(button.dataset.command==='clear-filters')clearGallery();return;}
 const feature=e.target.closest('[data-gallery-feature]');if(feature){const dimension=feature.dataset.dimension;setGalleryQuery({...galleryState.query,tagsByDimension:{...galleryState.query.tagsByDimension,[dimension]:[feature.dataset.galleryFeature]}});galleryTags.render();byId('galleryTitle').focus({preventScroll:true});return;}
 const artwork=e.target.closest('[data-artwork]');if(artwork&&artwork.closest('#artworkGrid')){openDetail(artwork.dataset.artwork);return;}
 const link=e.target.closest('a[href^="#"]');if(link&&/^#(home|gallery|game)(\?|$)/.test(link.getAttribute('href'))){e.preventDefault();const next=link.getAttribute('href').slice(1).split('?')[0];navigate(next);}
});
window.addEventListener('popstate',e=>{handledRouteUrl=location.href;const route=readRoute();const active=overlay.restoreTrail(e.state);if(active)return;if(page===route.page&&route.page==='gallery'){if(JSON.stringify(galleryState.query)!==JSON.stringify(route.query)){galleryState.query=route.query;byId('gallerySearch').value=route.query.text;galleryTags.render();renderGallery();}}else showPage(route.page,{query:route.query,restore:true});if(route.page==='gallery'&&Number.isFinite(e.state?.galleryScroll)){const visitedUrl=location.href;requestAnimationFrame(()=>{if(overlay.isOpen()||page!=='gallery'||location.href!==visitedUrl)return;window.scrollTo({top:e.state.galleryScroll,behavior:'instant'});const trigger=[...byId('artworkGrid').querySelectorAll('[data-artwork]')].find(el=>el.dataset.artwork===e.state.galleryFocusArtwork);trigger?.focus({preventScroll:true});});}});
// History traversal also emits hashchange. Do not replace a grid whose focus was
// just restored by popstate, or handle an event for a URL already left behind.
window.addEventListener('hashchange',e=>{if(e.newURL!==location.href||handledRouteUrl===location.href)return;if(overlay.isOpen())overlay.reset();const route=readRoute();showPage(route.page,{query:route.query});writeState();});
const initial=readRoute();showPage(initial.page,{query:initial.query});writeState();
document.documentElement.dataset.cache='93';document.documentElement.dataset.catalogRevision=CATALOG_REVISION;
