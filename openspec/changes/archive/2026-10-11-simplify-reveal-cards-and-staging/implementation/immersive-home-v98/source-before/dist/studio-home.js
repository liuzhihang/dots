import {SCENE_ART,SCENE_CHARACTERS} from './studio-scenes.js?v=97';
import {getArtwork} from './studio-artwork-catalog.js?v=97';
import {t,label} from './studio-i18n.js?v=97';

// One integrated painting per responsive composition; only hit targets overlay it.
// The image and targets share one coordinate plane, so resizing never separates them.
export function createHomeScene({container,onArtwork,language='en'}){
 let current=language,active=false,mode='',failed=false,planeWidth=0,planeHeight=0;
 const scene=document.createElement('div');scene.className='terrace-stage';
 const plane=document.createElement('div');plane.className='scene-canvas';
 const picture=new Image();picture.className='terrace-art';picture.alt='';picture.fetchPriority='high';picture.decoding='async';plane.append(picture);
 const notice=document.createElement('div');notice.className='scene-error';notice.hidden=true;
 const errorText=document.createElement('span'),retry=document.createElement('button');retry.className='button glass';notice.append(errorText,retry);
 scene.append(plane,notice);container.replaceChildren(scene);
 const entries=SCENE_CHARACTERS.map(spot=>{
  const artwork=getArtwork(spot.artworkId);if(!artwork||artwork.version!==spot.artworkVersion)return null;
  const button=document.createElement('button');button.className='scene-character';button.id=`scene-${artwork.id}`;button.dataset.artworkId=artwork.id;button.dataset.version=artwork.version;
  const hint=document.createElement('span');hint.className='scene-tooltip';button.append(hint);button.onclick=()=>onArtwork(artwork.id,artwork.version,button);
  return{spot,artwork,button,hint};
 }).filter(Boolean);
 const percent=value=>Number.parseFloat(value);
 function layout(){
  if(!active)return;
  const width=container.clientWidth,height=container.clientHeight;if(!width||!height)return;
  const nextMode=width<=600?'mobile':'desktop';
  if(nextMode!==mode){mode=nextMode;scene.dataset.composition=mode;failed=false;scene.classList.remove('scene-failed');notice.hidden=true;picture.dataset.src=SCENE_ART[mode].src;picture.src=picture.dataset.src;}
  const art=SCENE_ART[mode],ratio=art.width/art.height;
  planeWidth=Math.max(width,height*ratio);planeHeight=planeWidth/ratio;
  plane.style.width=planeWidth+'px';plane.style.height=planeHeight+'px';
  const offsetX=mode==='mobile'&&width<=350?width-planeWidth:(width-planeWidth)/2,offsetY=(height-planeHeight)/2;
  plane.style.left=(offsetX+planeWidth/2)+'px';
  for(const entry of entries){const {spot,button}=entry,position=spot[mode];
   if(!position){button.remove();continue;}
   const x=percent(position.x)*planeWidth/100,y=percent(position.y)*planeHeight/100;
   const visibleX=x+offsetX,visibleY=y+offsetY;
   // Do not expose clipped/off-screen characters as invisible keyboard targets.
   const visible=failed||(visibleX>=22&&visibleX<=width-22&&visibleY>=70&&visibleY<=height-(mode==='desktop'?70:22));
   if(!visible){button.remove();continue;}
   const w=Math.min(Math.max(44,percent(position.w)*planeWidth/100),2*Math.min(visibleX,width-visibleX));
   const h=Math.min(Math.max(44,percent(position.h)*planeHeight/100),2*Math.min(visibleY,height-visibleY));
   button.style.cssText=`left:${percent(position.x)}%;top:${percent(position.y)}%;width:${w}px;height:${h}px;`;
   if(button.parentNode!==plane)plane.append(button);
  }
 }
 picture.onerror=()=>{failed=true;scene.classList.add('scene-failed');notice.hidden=false;layout()};
 picture.onload=()=>{failed=false;scene.classList.remove('scene-failed');notice.hidden=true;layout()};
 retry.onclick=()=>{picture.src=picture.dataset.src+'?retry='+Date.now()};
 function setLanguage(next){current=next;errorText.textContent=t(current,'sceneFailed');retry.textContent=t(current,'retry');for(const{button,hint,artwork}of entries){const name=label(artwork,current);button.setAttribute('aria-label',`${t(current,'view')}: ${name}`);hint.textContent=name}}
 function setActive(next){active=next;if(active)layout()}
 const observer=new ResizeObserver(layout);observer.observe(container);
 setLanguage(language);return{setLanguage,setActive,destroy(){observer.disconnect();scene.remove()}};
}
