import {SCENE_BACKGROUND,SCENE_UNITS} from './studio-scenes.js?v=96';
import {getArtwork} from './studio-artwork-catalog.js?v=96';
import {t,label} from './studio-i18n.js?v=96';
export function createHomeScene({container,onArtwork,language='en'}){
 let current=language;const failures=new Set();
 const scene=document.createElement('div');scene.className='terrace-stage';
 const background=new Image();background.className='terrace-background';background.dataset.src=SCENE_BACKGROUND.src;background.alt='';background.fetchPriority='high';
 const notice=document.createElement('div');notice.className='scene-error';notice.hidden=true;
 const errorText=document.createElement('span'), retry=document.createElement('button');retry.className='button glass';notice.append(errorText,retry);
 const updateNotice=()=>{notice.hidden=failures.size===0};background.onerror=()=>{failures.add('background');scene.classList.add('background-failed');updateNotice()};background.onload=()=>{failures.delete('background');scene.classList.remove('background-failed');updateNotice()};retry.onclick=()=>{for(const img of scene.querySelectorAll('img[data-src]'))if(!img.complete||!img.naturalWidth)img.src=img.dataset.src+'?retry='+Date.now()};scene.append(background,notice);
 const unitLayer=document.createElement('div');unitLayer.className='scene-unit-layer';scene.append(unitLayer);
 const buttons=[];
 for(const unit of SCENE_UNITS){const frame=document.createElement('div');frame.className=`scene-unit ${unit.id}`;frame.dataset.depth=unit.depth;
 for(const [key,value]of Object.entries(unit.desktop))frame.style.setProperty(`--${key}`,value);
 for(const [key,value]of Object.entries(unit.tablet||{}))frame.style.setProperty(`--tablet-${key}`,value);
 for(const [key,value]of Object.entries(unit.mobile))frame.style.setProperty(`--mobile-${key}`,value);
 const img=new Image();img.dataset.src=unit.src;img.alt='';img.className='unit-image';img.decoding='async';frame.append(img);
 for(const spot of unit.characters){const artwork=getArtwork(spot.artworkId);if(!artwork||artwork.version!==spot.artworkVersion)continue;const button=document.createElement('button');button.className='scene-character';button.id=`scene-${spot.artworkId}`;button.dataset.artworkId=artwork.id;button.dataset.version=artwork.version;button.style.cssText=`left:${spot.x}%;top:${spot.y}%;width:${spot.w}%;height:${spot.h}%;`;const hint=document.createElement('span');hint.className='scene-tooltip';button.append(hint);button.onclick=()=>onArtwork(artwork.id,artwork.version,button);buttons.push({button,hint,artwork});frame.append(button)}
 img.onerror=()=>{failures.add(unit.id);updateNotice();frame.classList.add('unit-failed');for(const button of frame.querySelectorAll('button'))button.classList.add('show-fallback')};img.onload=()=>{failures.delete(unit.id);updateNotice();frame.classList.remove('unit-failed');for(const button of frame.querySelectorAll('button'))button.classList.remove('show-fallback')};unitLayer.append(frame);
 }
 container.replaceChildren(scene);
 function setLanguage(next){current=next;errorText.textContent=t(current,'sceneFailed');retry.textContent=t(current,'retry');for(const {button,hint,artwork}of buttons){const name=label(artwork,current);button.setAttribute('aria-label',`${t(current,'view')}: ${name}`);hint.textContent=name}}
 function setActive(active){if(!active)return;for(const img of scene.querySelectorAll('img[data-src]')){if(!img.getAttribute('src'))img.src=img.dataset.src}}
 setLanguage(language);return{setLanguage,setActive};
}
