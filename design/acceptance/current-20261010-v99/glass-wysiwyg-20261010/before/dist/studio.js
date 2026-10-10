import {CATALOG_REVISION,getArtwork,canOpenArtwork} from './studio-artwork-catalog.js?v=99';
import {DOTS_PROMPT} from './studio-content.js?v=99';
import {normalizeGalleryQuery,queryArtworks} from './studio-tags.js?v=99';
import {createGalleryFilters} from './studio-tag-browser.js?v=99';
import {createArtworkCard} from './studio-card.js?v=99';
import {createMotionController} from './studio-motion.js?v=99';
import {createDetailController} from './studio-detail.js?v=99';
import {createOverlay} from './studio-overlay.js?v=99';
import {copyText} from './studio-actions.js?v=99';
import {parseRoute,galleryURL,artworkURL} from './studio-router.js?v=99';
import {t,escapeHTML,storedPreference,savePreference} from './studio-i18n.js?v=99';

export function bootStudio({detailOptions={}}={}) {
 const $=selector=>document.querySelector(selector);const historyURL=hash=>`${location.pathname}${location.search}${hash}`;history.scrollRestoration='manual';
 let language=storedPreference('language','en');if(!['en','zh-CN'].includes(language))language='en';
 let route=parseRoute(location.hash),baseRoute=route.page==='artwork'?{page:'gallery',text:'',seriesId:'',sort:'curated'}:route;
 let activeDetailKey=null,toastTimer,restoreTarget=null,restoreScheduled=false,currentHash=location.hash||'#/',currentState={...history.state,dotsIndex:Number(history.state?.dotsIndex)||0};
 history.replaceState(currentState,'',historyURL(currentHash));
 const notify=message=>{clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,4500);};
 const motion=createMotionController();
 let exitAuthorized=false;
 const approveExit=()=>exitAuthorized||!detail.hasDirty()||window.confirm(t(language,'discard'));
 const requestExit=action=>{if(!approveExit())return false;restoreTarget=null;exitAuthorized=true;try{action();return true;}finally{exitAuthorized=false;}};
 const detail=createDetailController({...detailOptions,language,notify,requestExit,onModeChange:mode=>{
   const state=detail.getState();if(!state.artwork)return;currentHash=artworkURL(state.artwork.id,state.artwork.version,mode);history.replaceState(currentState,'',historyURL(currentHash));route=parseRoute(currentHash);
 },onVersion:artwork=>{activeDetailKey=`${artwork.id}@${artwork.version}`;currentHash=artworkURL(artwork.id,artwork.version);history.replaceState(currentState,'',historyURL(currentHash));route=parseRoute(currentHash);},onRelated:artwork=>openArtwork(artwork.id,artwork.version)});
 $('#overlayBody').replaceChildren(detail.element);
 const overlay=createOverlay({onClose:()=>requestExit(closeDetail)});
 const filters=createGalleryFilters($('#gallerySeries'),{getQuery:()=>baseRoute,onChange:updateQuery,getLocale:()=>language});
 let gallerySignature='';
 function renderGallery(force=false){
   const signature=JSON.stringify([baseRoute.text,baseRoute.seriesId,baseRoute.sort,language]);if(signature===gallerySignature&&!force)return;gallerySignature=signature;
   const query=normalizeGalleryQuery({...baseRoute,language}),works=queryArtworks(query);if(document.activeElement!==$('#gallerySearch'))$('#gallerySearch').value=baseRoute.text||'';
   $('#gallerySort').value=baseRoute.sort||'curated';$('#clearSearch').hidden=!baseRoute.text;$('#clearFilters').hidden=!(baseRoute.text||baseRoute.seriesId||(baseRoute.sort&&baseRoute.sort!=='curated'));filters.render();
   $('#artworkGrid').replaceChildren(...works.map(artwork=>createArtworkCard(artwork,{language,onOpen:openArtwork})));
   $('#galleryCount').textContent=query.valid?t(language,'count',works.length):t(language,'invalidQuery');$('#galleryEmpty').hidden=works.length!==0;
 }
 function renderGuide(){const steps=t(language,'steps');$('#guidePortal').innerHTML=`<header class="page-heading"><p class="eyebrow">${escapeHTML(t(language,'guide'))}</p><h1 id="guideTitle" tabindex="-1">${escapeHTML(t(language,'guideTitle'))}</h1><p>${escapeHTML(t(language,'guideDescription'))}</p></header><ol class="guide-steps">${steps.map(([title,body],index)=>`<li><span class="step-number">0${index+1}</span><h2>${escapeHTML(title)}</h2><p>${escapeHTML(body)}</p></li>`).join('')}</ol><aside class="guide-note"><p>${escapeHTML(t(language,'guideNote'))}</p><a class="button primary" href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">${escapeHTML(t(language,'openChatGPT'))}</a></aside><p class="guide-end">${escapeHTML(t(language,'guideFooter'))}</p>`;}
 function localize(){document.documentElement.lang=language;document.title=language==='en'?'Dots · Make It Your Dot.':'Dots · 创作属于你的 Dots';for(const element of document.querySelectorAll('[data-i18n]'))element.textContent=t(language,element.dataset.i18n);$('.studio-nav').setAttribute('aria-label',language==='en'?'Main navigation':'主导航');$('#gallerySearch').placeholder=t(language,'searchPlaceholder');$('#overlayClose').setAttribute('aria-label',t(language,'close'));
   for(const button of [$('#languagePreference'),$('#detailLanguage')]){button.textContent=language==='en'?'中文':'EN';button.setAttribute('aria-label',language==='en'?'切换到简体中文':'Switch to English');}
   overlay.setTitle(language==='en'?'Character Studio':'角色工作室');void detail.setLanguage(language);renderGallery(true);renderGuide();
 }
 function updateQuery(next){baseRoute={page:'gallery',text:next.text??baseRoute.text??'',seriesId:next.seriesId??baseRoute.seriesId??'',sort:next.sort??baseRoute.sort??'curated'};currentHash=galleryURL(baseRoute);currentState={...currentState,route:baseRoute};history.replaceState(currentState,'',historyURL(currentHash));route=baseRoute;renderGallery();}
 function showBase(next){baseRoute=next;const screen=['gallery','guide'].includes(next.page)?next.page:'notFound';document.body.dataset.screen=screen;for(const name of ['gallery','guide','notFound'])$(`#${name}Portal`).hidden=name!==screen;for(const link of document.querySelectorAll('.studio-nav a')){if(link.dataset.page===screen)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');}if(screen==='gallery')renderGallery();}
 function renderRoute(){route=parseRoute(location.hash);motion.setPauseReason('detailOpen',route.page==='artwork');
   if(route.page==='artwork'){
     const artwork=getArtwork(route.id);if(!artwork||!canOpenArtwork(artwork,route.version)){detail.close();overlay.close({restoreFocus:false});activeDetailKey=null;showBase({page:'notFound'});return;}
     const origin=currentState.origin;showBase(origin?.route??{page:'gallery',text:'',seriesId:'',sort:'curated'});
     const key=`${route.id}@${route.version}`;overlay.open({title:language==='en'?'Character Studio':'角色工作室',trigger:origin?.triggerId?document.getElementById(origin.triggerId):document.activeElement,scrollY:origin?.scrollY??window.scrollY});
     if(key!==activeDetailKey){activeDetailKey=key;detail.open({id:route.id,version:route.version,mode:route.mode,language});}else void detail.setMode(route.mode);
     return;
   }
   const wasDetail=activeDetailKey!==null;detail.close();overlay.close({restoreFocus:false});activeDetailKey=null;showBase(route);
   const restore=currentState.restore;if(wasDetail&&restore){requestAnimationFrame(()=>{scrollTo(0,restore.scrollY);(document.getElementById(restore.triggerId)||document.querySelector('#galleryTitle'))?.focus({preventScroll:true});});}else{scrollTo(0,0);if(wasDetail)requestAnimationFrame(()=>document.querySelector(`#${baseRoute.page}Portal h1`)?.focus({preventScroll:true}));}
 }
 function navigate(hash,{replace=false,state={}}={}){if(hash===currentHash)return;if(activeDetailKey&&!approveExit())return;restoreTarget=null;const idx=currentState.dotsIndex+(replace?0:1);currentState={...state,dotsIndex:idx};currentHash=hash;history[replace?'replaceState':'pushState'](currentState,'',historyURL(hash));renderRoute();}
 function openArtwork(id,version,trigger){
   if(activeDetailKey){navigate(artworkURL(id,version),{replace:true,state:currentState});return;}
   const origin={hash:currentHash,route:baseRoute,scrollY:window.scrollY,triggerId:trigger?.id||null};currentState={...currentState,route:baseRoute,restore:origin};history.replaceState(currentState,'',historyURL(currentHash));navigate(artworkURL(id,version),{state:{dotsDetail:true,origin}});
 }
 function closeDetail(){restoreTarget=null;if(currentState.dotsDetail&&currentState.origin){allowOneHistory=true;history.back();}else navigate('#/',{replace:true});}
 let allowOneHistory=false;
 function scheduleHistoryRestore(){
   if(!restoreTarget||restoreScheduled)return;restoreScheduled=true;
   requestAnimationFrame(()=>{
     restoreScheduled=false;const target=restoreTarget;if(!target)return;
     const actualIndex=history.state?.dotsIndex;
     if(location.hash===target.hash&&actualIndex===target.index){restoreTarget=null;return;}
     if(Number.isInteger(actualIndex)&&actualIndex!==target.index)history.go(target.index-actualIndex);
   });
 }
 function historyChanged(){
   if(restoreTarget){scheduleHistoryRestore();return;}
   if(location.hash===currentHash)return;
   const targetHash=location.hash,targetState=history.state,targetRoute=parseRoute(targetHash),sameArtwork=route.page==='artwork'&&targetRoute.page==='artwork'&&route.id===targetRoute.id&&route.version===targetRoute.version;
   if(activeDetailKey&&!sameArtwork&&!allowOneHistory&&!approveExit()){
     restoreTarget={hash:currentHash,index:currentState.dotsIndex};scheduleHistoryRestore();return;
   }
   restoreTarget=null;allowOneHistory=false;currentHash=targetHash;currentState=targetState&&Number.isInteger(targetState.dotsIndex)?targetState:{dotsIndex:currentState.dotsIndex+1};if(!targetState)history.replaceState(currentState,'',historyURL(currentHash));renderRoute();
 }
 let scheduled=false;const schedule=()=>{if(!scheduled){scheduled=true;queueMicrotask(()=>{scheduled=false;historyChanged();});}};
 addEventListener('hashchange',schedule);addEventListener('popstate',schedule);
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#/"]');if(!link||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();navigate(link.getAttribute('href'));});
 addEventListener('beforeunload',event=>{if(detail.hasDirty()){event.preventDefault();event.returnValue='';}});
 $('#gallerySearch').oninput=()=>updateQuery({text:$('#gallerySearch').value});$('#gallerySort').onchange=()=>updateQuery({sort:$('#gallerySort').value});$('#clearSearch').onclick=()=>{updateQuery({text:''});$('#gallerySearch').focus();};$('#clearFilters').onclick=$('[data-command="clear-filters"]').onclick=()=>updateQuery({text:'',seriesId:'',sort:'curated'});
 const toggleLanguage=()=>{language=language==='en'?'zh-CN':'en';savePreference('language',language);localize();};$('#languagePreference').onclick=$('#detailLanguage').onclick=toggleLanguage;
 $('#heroCopy').onclick=async()=>{const value=DOTS_PROMPT[language];const outcome=await copyText(value);if(outcome.ok){$('#heroCopyFallback').replaceChildren();notify(t(language,'copied'));}else{const field=document.createElement('textarea');field.value=value;field.readOnly=true;field.setAttribute('aria-label',t(language,'copyDotsPrompt'));$('#heroCopyFallback').replaceChildren(field);field.focus();field.select();notify(t(language,'copyFailed'));}};
 $('#browseCharacters').onclick=()=>{$('#characters').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});$('#gallerySearch').focus({preventScroll:true});};
 $('.skip-link').onclick=event=>{event.preventDefault();$('#mainContent').focus();};
 localize();renderRoute();document.documentElement.dataset.catalogRevision=CATALOG_REVISION;
 return {detail,overlay,getState:()=>({route,baseRoute,language,currentHash,currentState}),openArtwork,navigate};
}
if(document.documentElement.dataset.studioBoot!=='manual')bootStudio();
