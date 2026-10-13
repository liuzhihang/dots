import {CATALOG_REVISION,getArtwork,canOpenArtwork} from './studio-artwork-catalog.js?v=110';
import {normalizeGalleryQuery} from './studio-tags.js?v=110';
import {getGalleryLook,getLookAsset} from './studio-gallery-looks.js?v=110';
import {getGalleryFigure,queryGalleryFigures} from './studio-gallery-figures.js?v=110';
import {createGalleryFilters} from './studio-tag-browser.js?v=110';
import {createArtworkCard} from './studio-card.js?v=110';
import {createMotionController} from './studio-motion.js?v=110';
import {createDetailController} from './studio-detail.js?v=110';
import {createOverlay} from './studio-overlay.js?v=110';
import {parseRoute,galleryURL,artworkURL,lookURL,figureURL} from './studio-router.js?v=110';
import {t,storedPreference,savePreference} from './studio-i18n.js?v=110';

const HOME_COPY={
 en:{titleFirst:'Make It',titleSecond:'Your Dot.',description:'Pick a character. Make it yours in ChatGPT.'},
 'zh-CN':{titleFirst:'创造',titleSecond:'你的Dot.',description:'挑选角色，在 ChatGPT 中创作。'}
};
const isDetailRoute=route=>['artwork','look','figure'].includes(route.page);
const detailKey=route=>`${route.page}:${route.id}@${route.version}`;

export function bootStudio({detailOptions={}}={}) {
 const $=selector=>document.querySelector(selector);const historyURL=hash=>`${location.pathname}${location.search}${hash}`;history.scrollRestoration='manual';
 const searchField=$('.search-field'),searchBreakpoint=matchMedia('(max-width:600px)');
 const placeSearchField=()=>{const mount=$(searchBreakpoint.matches?'#gallerySearchMount':'#topbarSearchMount');if(mount&&searchField.parentElement!==mount)mount.append(searchField);};
 placeSearchField();if(searchBreakpoint.addEventListener)searchBreakpoint.addEventListener('change',placeSearchField);else searchBreakpoint.addListener(placeSearchField);
 const heroImage=$('.gallery-intro-art img');if(heroImage){const revealHeroImage=()=>heroImage.closest('.gallery-intro-art')?.classList.add('is-loaded');heroImage.addEventListener('load',revealHeroImage,{once:true});if(heroImage.complete&&heroImage.naturalWidth>0)revealHeroImage();}
 let language=storedPreference('language','en');if(!['en','zh-CN'].includes(language))language='en';
 let route=parseRoute(location.hash),baseRoute=isDetailRoute(route)?{page:'gallery',text:'',seriesId:'',sort:'curated'}:route;
 let activeDetailKey=null,toastTimer,currentHash=location.hash||'#/',currentState={...history.state,dotsIndex:Number(history.state?.dotsIndex)||0};
 history.replaceState(currentState,'',historyURL(currentHash));
 const notify=message=>{clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,4500);};
 const motion=createMotionController();
 const requestExit=action=>{action();return true;};
 const detail=createDetailController({...detailOptions,language,notify,requestExit,onVersion:item=>{$('#overlayBody').scrollTop=0;currentHash=item.kind==='gallery-figure'?figureURL(item.id,item.version):item.artworkId?lookURL(item.id,item.version):artworkURL(item.id,item.version);history.replaceState(currentState,'',historyURL(currentHash));route=parseRoute(currentHash);activeDetailKey=detailKey(route);},onRelated:item=>item.kind==='gallery-figure'?openFigure(item.id,item.version):item.artworkId?openLook(item.id,item.version):openArtwork(item.id,item.version)});
 $('#overlayBody').replaceChildren(detail.element);
 const overlay=createOverlay({onClose:()=>{closeDetail();return true;}});
 const filters=createGalleryFilters($('#gallerySeries'),{getQuery:()=>baseRoute,onChange:updateQuery,getLocale:()=>language});
 let gallerySignature='';
 function renderGallery(force=false){
   const signature=JSON.stringify([baseRoute.text,baseRoute.seriesId,baseRoute.sort,language]);if(signature===gallerySignature&&!force)return;gallerySignature=signature;
   const query=normalizeGalleryQuery({...baseRoute,language}),works=queryGalleryFigures(query);if(document.activeElement!==$('#gallerySearch'))$('#gallerySearch').value=baseRoute.text||'';
   $('#gallerySort').value=baseRoute.sort||'curated';$('#clearSearch').hidden=!baseRoute.text;$('#clearFilters').hidden=!(baseRoute.text||baseRoute.seriesId||(baseRoute.sort&&baseRoute.sort!=='curated'));filters.render();
   $('#artworkGrid').replaceChildren(...works.map(figure=>createArtworkCard(figure,{language,onOpen:openFigure,lookupAsset:getLookAsset})));
   $('#galleryCount').textContent=query.valid?t(language,'count',works.length):t(language,'invalidQuery');$('#galleryEmpty').hidden=works.length!==0;
 }
 function localize(){document.documentElement.lang=language;document.title=language==='en'?'Dots · Make It Your Dot.':'创造你的Dot.';for(const element of document.querySelectorAll('[data-i18n]'))element.textContent=t(language,element.dataset.i18n);for(const element of document.querySelectorAll('[data-home-copy]'))element.textContent=HOME_COPY[language][element.dataset.homeCopy];$('.studio-nav').setAttribute('aria-label',language==='en'?'Main navigation':'主导航');$('#gallerySearch').placeholder=t(language,'searchPlaceholder');$('#overlayClose').setAttribute('aria-label',t(language,'close'));
   const languagePreference=$('#languagePreference');languagePreference.value=language;languagePreference.setAttribute('aria-label',language==='en'?'Language':'语言');
   overlay.setTitle(language==='en'?'Character Studio':'角色工作室');void detail.setLanguage(language);renderGallery(true);
 }
 function updateQuery(next){baseRoute={page:'gallery',text:next.text??baseRoute.text??'',seriesId:next.seriesId??baseRoute.seriesId??'',sort:next.sort??baseRoute.sort??'curated'};currentHash=galleryURL(baseRoute);currentState={...currentState,route:baseRoute};history.replaceState(currentState,'',historyURL(currentHash));route=baseRoute;renderGallery();}
 function showBase(next){baseRoute=next;const screen=next.page==='gallery'?'gallery':'notFound';document.body.dataset.screen=screen;for(const name of ['gallery','notFound'])$(`#${name}Portal`).hidden=name!==screen;for(const link of document.querySelectorAll('.studio-nav a')){if(link.dataset.page===screen)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');}if(screen==='gallery')renderGallery();}
 function renderRoute(){route=parseRoute(location.hash);motion.setPauseReason('detailOpen',isDetailRoute(route));
   if(isDetailRoute(route)){
     const valid=route.page==='figure'?Boolean(getGalleryFigure(route.id,route.version)):route.page==='look'?Boolean(getGalleryLook(route.id,route.version)):canOpenArtwork(getArtwork(route.id),route.version);if(!valid){detail.close();overlay.close({restoreFocus:false});activeDetailKey=null;showBase({page:'notFound'});return;}
     const origin=currentState.origin;showBase(origin?.route??{page:'gallery',text:'',seriesId:'',sort:'curated'});
     const key=detailKey(route);overlay.open({title:language==='en'?'Character Studio':'角色工作室',trigger:origin?.triggerId?document.getElementById(origin.triggerId):document.activeElement,scrollY:origin?.scrollY??window.scrollY});
     if(key!==activeDetailKey){$('#overlayBody').scrollTop=0;activeDetailKey=key;detail.open({...(route.page==='figure'?{figureId:route.id}:route.page==='look'?{lookId:route.id}:{id:route.id}),version:route.version,language});}
     return;
   }
   const wasDetail=activeDetailKey!==null;detail.close();overlay.close({restoreFocus:false});activeDetailKey=null;showBase(route);
   const restore=currentState.restore;if(wasDetail&&restore){requestAnimationFrame(()=>{scrollTo(0,restore.scrollY);(document.getElementById(restore.triggerId)||document.querySelector('#galleryTitle'))?.focus({preventScroll:true});});}else{scrollTo(0,0);if(wasDetail)requestAnimationFrame(()=>document.querySelector(`#${baseRoute.page}Portal h1`)?.focus({preventScroll:true}));}
 }
 function navigate(hash,{replace=false,state={}}={}){if(hash===currentHash)return;const idx=currentState.dotsIndex+(replace?0:1);currentState={...state,dotsIndex:idx};currentHash=hash;history[replace?'replaceState':'pushState'](currentState,'',historyURL(hash));renderRoute();}
 function openArtwork(id,version,trigger){
   openDetail(artworkURL(id,version),trigger);
 }
 function openLook(id,version,trigger){openDetail(lookURL(id,version),trigger);}
 function openFigure(id,version,trigger){openDetail(figureURL(id,version),trigger);}
 function openDetail(hash,trigger){
   if(activeDetailKey){navigate(hash,{replace:true,state:currentState});return;}
   const origin={hash:currentHash,route:baseRoute,scrollY:window.scrollY,triggerId:trigger?.id||null};currentState={...currentState,route:baseRoute,restore:origin};history.replaceState(currentState,'',historyURL(currentHash));navigate(hash,{state:{dotsDetail:true,origin}});
 }
 function closeDetail(){if(currentState.dotsDetail&&currentState.origin){history.back();}else navigate('#/',{replace:true});}
 function historyChanged(){
   if(location.hash===currentHash)return;
   const targetHash=location.hash,targetState=history.state;
   currentHash=targetHash;
   const hasTargetIndex=Number.isInteger(targetState?.dotsIndex),sameEntryIndex=hasTargetIndex&&targetState.dotsIndex===currentState.dotsIndex;
   currentState=hasTargetIndex&&!sameEntryIndex?targetState:{...(targetState??{}),dotsIndex:currentState.dotsIndex+1};
   if(!hasTargetIndex||sameEntryIndex)history.replaceState(currentState,'',historyURL(currentHash));
   renderRoute();
 }
 let scheduled=false;const schedule=()=>{if(!scheduled){scheduled=true;queueMicrotask(()=>{scheduled=false;historyChanged();});}};
 addEventListener('hashchange',schedule);addEventListener('popstate',schedule);
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#/"]');if(!link||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();navigate(link.getAttribute('href'));});
 $('#gallerySearch').oninput=()=>updateQuery({text:$('#gallerySearch').value});$('#gallerySort').onchange=()=>updateQuery({sort:$('#gallerySort').value});$('#clearSearch').onclick=()=>{updateQuery({text:''});$('#gallerySearch').focus();};$('#clearFilters').onclick=$('[data-command="clear-filters"]').onclick=()=>updateQuery({text:'',seriesId:'',sort:'curated'});
 $('#languagePreference').onchange=event=>{const selected=event.currentTarget.value;if(!['en','zh-CN'].includes(selected)||selected===language)return;language=selected;savePreference('language',language);localize();};
 $('#browseCharacters').onclick=()=>{$('#characters').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});if(searchBreakpoint.matches)$('#gallerySearch').focus({preventScroll:true});else($('#gallerySeries .gallery-series-filter__button')||$('#artworkGrid .artwork-select'))?.focus({preventScroll:true});};
 $('.skip-link').onclick=event=>{event.preventDefault();$('#mainContent').focus();};
 localize();renderRoute();document.documentElement.dataset.catalogRevision=CATALOG_REVISION;
 return {detail,overlay,getState:()=>({route,baseRoute,language,currentHash,currentState}),openArtwork,openLook,openFigure,navigate};
}
if(document.documentElement.dataset.studioBoot!=='manual')bootStudio();
