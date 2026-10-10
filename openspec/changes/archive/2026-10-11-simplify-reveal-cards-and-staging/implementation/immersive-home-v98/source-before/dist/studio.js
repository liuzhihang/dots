import {CATALOG_REVISION,ARTWORKS,SERIES,getArtwork,getAsset,isEligible} from './studio-artwork-catalog.js?v=97';
import {normalizeGalleryQuery,queryArtworks} from './studio-tags.js?v=97';
import {createGalleryFilters} from './studio-tag-browser.js?v=97';
import {createMotionController} from './studio-motion.js?v=97';
import {createHomeScene} from './studio-home.js?v=97';
import {HERO_ARTWORK} from './studio-scenes.js?v=97';
import {createDetailController} from './studio-detail.js?v=97';
import {createOverlay} from './studio-overlay.js?v=97';
import {promptFor} from './studio-prompt.js?v=97';
import {copyText} from './studio-actions.js?v=97';
import {parseRoute,galleryURL,artworkURL} from './studio-router.js?v=97';
import {t,label,escapeHTML,storedPreference,savePreference} from './studio-i18n.js?v=97';
const $=selector=>document.querySelector(selector);
history.scrollRestoration='manual';
let language=storedPreference('language','en');if(!['en','zh-CN'].includes(language))language='en';
const systemMotion=matchMedia('(prefers-reduced-motion: reduce)');let reduced=storedPreference('reduced-motion',String(systemMotion.matches))==='true';
let route=parseRoute(location.hash), baseRoute=route.page==='artwork'?{page:'gallery',text:'',seriesId:''}:route;
let activeDetailKey=null, toastTimer,lastRenderedHash=null;
function notify(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,4000)}
const motion=createMotionController({matchMedia:()=>null});
const detail=createDetailController({language,notify,onClose:closeDetail,onVersion:artwork=>{const current=artwork.artwork??artwork;history.replaceState(history.state,'',artworkURL(current.id,current.version));activeDetailKey=`${current.id}@${current.version}`}});
$('#overlayBody').replaceChildren(detail.element);
const overlay=createOverlay({dialog:$('#studioOverlay'),title:$('#overlayTitle'),body:$('#overlayBody'),closeButton:$('#overlayClose'),background:$('#pageShell'),onClose:closeDetail});
const scene=createHomeScene({container:$('#heroScene'),onArtwork:openArtwork,language});
const filters=createGalleryFilters($('#gallerySeries'),{getQuery:()=>baseRoute,onChange:query=>updateQuery(query),getLocale:()=>language});
function card(artwork,context='card'){
 const asset=getAsset(artwork.assetRefs.poster), item=document.createElement('article');item.className='artwork-card';
 const button=document.createElement('button');button.className='artwork-select';button.id=`${context}-${artwork.id}`;button.dataset.artworkId=artwork.id;button.dataset.version=artwork.version;button.setAttribute('aria-label',`${t(language,'view')}: ${label(artwork,language)}`);
 const media=document.createElement('span');media.className='artwork-media';const img=new Image();img.src=asset.path;img.alt='';img.width=asset.width;img.height=asset.height;img.loading='lazy';img.decoding='async';img.style.setProperty('--optical-scale',artwork.opticalScale??1);media.append(img);
 const error=document.createElement('span');error.className='card-image-error';error.hidden=true;error.textContent=t(language,'imageFailed');media.append(error);img.onerror=()=>{img.hidden=true;error.hidden=false};
 const name=document.createElement('span');name.className='artwork-name';name.textContent=label(artwork,language);const series=document.createElement('span');series.className='artwork-series';series.textContent=label(SERIES.find(s=>s.id===(artwork.seriesId??artwork.seriesIds?.[0]))??{},language);button.append(media,name,series);button.onclick=()=>openArtwork(artwork.id,artwork.version,button);item.append(button);
 const retry=document.createElement('button');retry.className='text-button card-retry';retry.textContent=t(language,'retry');retry.hidden=true;img.addEventListener('error',()=>retry.hidden=false);retry.onclick=()=>{img.hidden=false;img.src=asset.path+'?retry='+Date.now()};img.onload=()=>{img.hidden=false;error.hidden=true;retry.hidden=true};item.append(retry);return item;
}
function renderFeatured(){
 $('#featuredCards').replaceChildren(...ARTWORKS.filter(isEligible).slice(0,6).map(artwork=>card(artwork,'featured')));
 $('#homeSeries').replaceChildren(...SERIES.map(series=>{const artwork=ARTWORKS.find(a=>isEligible(a)&&a.seriesId===series.id);const link=document.createElement('a');link.href=galleryURL({text:'',seriesId:series.id});link.className='home-series-link';const avatar=new Image();avatar.src=getAsset(artwork.assetRefs.poster).path;avatar.alt='';avatar.width=32;avatar.height=32;const name=document.createElement('span');name.textContent=label(series,language);link.append(avatar,name);return link}));
}

function renderGallery(){
 const query=normalizeGalleryQuery(baseRoute);const works=queryArtworks(query);$('#gallerySearch').value=baseRoute.text||'';if(document.activeElement!==$('#navSearch'))$('#navSearch').value=baseRoute.text||'';$('#clearSearch').hidden=!baseRoute.text;$('#clearFilters').hidden=!(baseRoute.text||baseRoute.seriesId);filters.render?.();filters.update?.();$('#artworkGrid').replaceChildren(...works.map(artwork=>card(artwork)));$('#galleryCount').textContent=query.valid?t(language,'count',works.length):(language==='en'?'This series is not available. Clear the filters to explore.':'此系列暂未提供，请清空筛选继续浏览。');$('#galleryEmpty').hidden=works.length!==0;
}
function renderGuide(){const steps=t(language,'steps');$('#guidePortal').innerHTML=`<header class="page-heading"><p class="eyebrow">FROM A LITTLE SPARK</p><h1 id="guideTitle" tabindex="-1">${t(language,'guideTitle')}</h1><p>${t(language,'guideDescription')}</p></header><ol class="guide-steps">${steps.map(([title,body],i)=>`<li><span class="step-number">0${i+1}</span><h2>${title}</h2><p>${body}</p></li>`).join('')}</ol><aside class="guide-note"><p>${t(language,'guideNote')}</p><a class="button primary" href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">${t(language,'openChatGPT')} ↗</a></aside><p class="guide-end">${t(language,'guideFooter')}</p>`}
function localize(){document.documentElement.lang=language;for(const node of document.querySelectorAll('[data-i18n]'))node.textContent=t(language,node.dataset.i18n);$('.studio-nav').setAttribute('aria-label',language==='en'?'Main navigation':'主导航');$('.brand').setAttribute('aria-label',language==='en'?'Dot Icon Studio home':'Dot Icon Studio 首页');$('#gallerySearch').placeholder=t(language,'searchPlaceholder');$('#navSearch').placeholder=t(language,'searchPlaceholder');$('#menuToggle').setAttribute('aria-label',t(language,$('#mobileMenu').hidden?'menu':'closeMenu'));$('#gallerySeries').setAttribute('aria-label',t(language,'series'));$('#overlayClose').setAttribute('aria-label',t(language,'close'));$('#languagePreference').textContent=language==='en'?'中文':'EN';$('#languagePreference').setAttribute('aria-label',language==='en'?'切换到简体中文':'Switch to English');$('#detailLanguage').textContent=language==='en'?'中文':'EN';$('#detailLanguage').setAttribute('aria-label',language==='en'?'切换到简体中文':'Switch to English');$('#motionPreference').textContent=t(language,'motion');$('#motionPreference').title=t(language,reduced?'motionOff':'reduce');$('#motionPreference').setAttribute('aria-label',t(language,reduced?'motionOff':'reduce'));scene.setLanguage(language);detail.setLanguage(language);renderFeatured();renderGallery();renderGuide();}
function updateQuery(next){baseRoute={page:'gallery',text:next.text??baseRoute.text??'',seriesId:next.seriesId??baseRoute.seriesId??''};history.replaceState({...history.state,route:baseRoute},'',galleryURL(baseRoute));route=baseRoute;renderGallery()}
function setMenu(open){$('#mobileMenu').hidden=!open;$('#menuToggle').setAttribute('aria-expanded',String(open));$('#menuToggle').setAttribute('aria-label',t(language,open?'closeMenu':'menu'));}
$('#menuToggle').onclick=()=>setMenu($('#mobileMenu').hidden);
$('#mobileMenu').addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#mobileMenu').hidden){setMenu(false);$('#menuToggle').focus()}});
$('#globalSearch').addEventListener('submit',event=>{event.preventDefault();const text=$('#navSearch').value;if(baseRoute.page==='gallery')updateQuery({text});else location.hash=galleryURL({text,seriesId:''})});
$('#navSearch').addEventListener('input',()=>{if(baseRoute.page==='gallery')updateQuery({text:$('#navSearch').value})});
const mobileViewport=matchMedia('(max-width:600px)');const preferenceHost=$('.preferences');function movePreferences(){const host=mobileViewport.matches?$('#mobilePreferences'):preferenceHost;host.append($('#motionPreference'),$('#languagePreference'));if(!mobileViewport.matches)setMenu(false)}mobileViewport.addEventListener('change',movePreferences);movePreferences();
$('#gallerySearch').addEventListener('input',()=>{const field=$('#gallerySearch');updateQuery({text:field.value});field.focus()});
$('#clearSearch').onclick=()=>{updateQuery({text:''});$('#gallerySearch').focus()};$('#clearFilters').onclick=()=>updateQuery({text:'',seriesId:''});$('[data-command="clear-filters"]').onclick=()=>updateQuery({text:'',seriesId:''});
function toggleLanguage(){language=language==='en'?'zh-CN':'en';savePreference('language',language);localize();overlay.setTitle(language==='en'?'Character details':'角色详情')}
$('#languagePreference').onclick=toggleLanguage;$('#detailLanguage').onclick=toggleLanguage;
function applyMotion(){motion.setPauseReason('reducedMotion',reduced);document.documentElement.dataset.reducedMotion=String(reduced);$('#motionPreference').setAttribute('aria-pressed',String(reduced));window.dispatchEvent(new CustomEvent('dots:motion-preference',{detail:{reduced}}));}
$('#motionPreference').onclick=()=>{reduced=!reduced;savePreference('reduced-motion',String(reduced));applyMotion();localize()};
systemMotion.addEventListener('change',event=>{if(storedPreference('reduced-motion',null)===null){reduced=event.matches;applyMotion()}});
$('#heroCopy').onclick=async()=>{const artwork=getArtwork(HERO_ARTWORK.id);const text=promptFor(artwork,{language:language==='en'?'en':'zh'});const outcome=await copyText(text);if(outcome.ok){$('#heroCopyFallback').replaceChildren();notify(t(language,'copied'))}else{const area=document.createElement('textarea');area.readOnly=true;area.value=text;area.setAttribute('aria-label',t(language,'copyPrompt'));$('#heroCopyFallback').replaceChildren(area);area.focus();area.select();notify(t(language,'copyFailed'))}};
function openArtwork(id,version,trigger){
 const origin={hash:location.hash||'#/home',route:baseRoute,scrollY:window.scrollY,triggerId:trigger?.id||null};
 history.replaceState({...history.state,route:baseRoute,restore:origin},'',origin.hash);
 history.pushState({dotsDetail:true,origin},'',artworkURL(id,version));renderRoute();
}
function closeDetail(){if(history.state?.dotsDetail&&history.state.origin){history.back()}else{history.replaceState({route:{page:'gallery',text:'',seriesId:''}},'','#/gallery');renderRoute()}}
function showBase(next){baseRoute=next;const screen=['home','gallery','guide'].includes(next.page)?next.page:'notFound';document.body.dataset.screen=screen;for(const name of ['home','gallery','guide','notFound'])$(`#${name}Portal`).hidden=name!==screen;scene.setActive(screen==='home');for(const link of document.querySelectorAll('.studio-nav a')){if(link.dataset.page===screen)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current')};if(screen==='gallery')renderGallery()}
function renderRoute(){if(lastRenderedHash===location.hash)return;setMenu(false);lastRenderedHash=location.hash;route=parseRoute(location.hash);motion.setPauseReason('detailOpen',route.page==='artwork');if(route.page==='artwork'){
 const artwork=getArtwork(route.id);if(!artwork||!isEligible(artwork)||artwork.version!==route.version){detail.close();overlay.close({restoreFocus:false});activeDetailKey=null;showBase({page:'notFound'});return}
 const origin=history.state?.origin;showBase(origin?.route??{page:'gallery',text:'',seriesId:''});const key=`${route.id}@${route.version}`;
 overlay.open({title:language==='en'?'Character details':'角色详情'});if(key!==activeDetailKey){activeDetailKey=key;detail.open({id:route.id,version:route.version,language})}return;
 }
 const wasDetail=activeDetailKey!==null;detail.close();overlay.close({restoreFocus:false});activeDetailKey=null;showBase(route);
 const restore=history.state?.restore;if(wasDetail&&restore){requestAnimationFrame(()=>{scrollTo(0,restore.scrollY);const target=document.getElementById(restore.triggerId)||document.querySelector(`#${baseRoute.page}Portal h1, #homeTitle`);target?.focus({preventScroll:true})})}else{scrollTo(0,0);if(wasDetail)requestAnimationFrame(()=>document.querySelector(`#${baseRoute.page}Portal h1`)?.focus({preventScroll:true}))}
}
let scheduled=false;const scheduleRoute=()=>{if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;renderRoute()})};window.addEventListener('hashchange',scheduleRoute);window.addEventListener('popstate',scheduleRoute);
$('.skip-link').onclick=event=>{event.preventDefault();$('#mainContent').focus()};
applyMotion();localize();renderRoute();
document.documentElement.dataset.catalogRevision=CATALOG_REVISION;
