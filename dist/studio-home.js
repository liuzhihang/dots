import {SCENE_ART,SCENE_CHARACTERS} from './studio-scenes.js?v=98';
import {getArtwork} from './studio-artwork-catalog.js?v=98';
import {t,label} from './studio-i18n.js?v=98';

const svgNS='http://www.w3.org/2000/svg';
function contourPath(points){
 const p=points.map(([x,y])=>[x*10,y*10]),n=p.length;
 let d=`M${p[0].join(' ')}`;
 for(let i=0;i<n;i++){
  const before=p[(i+n-1)%n],start=p[i],end=p[(i+1)%n],after=p[(i+2)%n];
  const a=start.map((v,j)=>v+(end[j]-before[j])*.12),b=end.map((v,j)=>v-(after[j]-start[j])*.12);
  d+=` C${a.join(' ')} ${b.join(' ')} ${end.join(' ')}`;
 }
 return d+' Z';
}
// The art, fixed hit targets and traced interaction outlines share one coordinate plane.
// Outlines are UI feedback; the integrated painting remains a single static image.
export function createHomeScene({container,onArtwork,language='en'}){
 let current=language,active=false,suspended=false,mode='',failed=false;
 const scene=document.createElement('div');scene.className='terrace-stage';
 const plane=document.createElement('div');plane.className='scene-canvas';
 const picture=new Image();picture.className='terrace-art';picture.alt='';picture.fetchPriority='high';picture.decoding='async';
 const outlines=document.createElementNS(svgNS,'svg');outlines.classList.add('scene-outlines');outlines.setAttribute('viewBox','0 0 1000 1000');outlines.setAttribute('preserveAspectRatio','none');outlines.setAttribute('aria-hidden','true');plane.append(picture,outlines);
 const notice=document.createElement('div');notice.className='scene-error';notice.hidden=true;
 const errorText=document.createElement('span'),retry=document.createElement('button');retry.className='button glass';notice.append(errorText,retry);
 scene.append(plane,notice);container.replaceChildren(scene);
 const entries=SCENE_CHARACTERS.map(spot=>{
  const artwork=getArtwork(spot.artworkId);if(!artwork||artwork.version!==spot.artworkVersion)return null;
  const button=document.createElement('button');button.className='scene-character';button.id=`scene-${artwork.id}`;button.dataset.artworkId=artwork.id;button.dataset.version=artwork.version;
  const hint=document.createElement('span');hint.className='scene-tooltip';button.append(hint);button.onclick=event=>{if(event.detail===0)onArtwork(artwork.id,artwork.version,button)};
  const outline=document.createElementNS(svgNS,'g');outline.classList.add('scene-outline');outline.dataset.artworkId=artwork.id;
  const base=document.createElementNS(svgNS,'path'),light=document.createElementNS(svgNS,'path');light.classList.add('outline-light');light.setAttribute('pathLength','100');outline.append(base,light);outlines.append(outline);
  const entry={spot,artwork,button,hint,outline,base,light};
  button.addEventListener('focus',()=>highlight(entry));button.addEventListener('blur',()=>highlight(null));
  return entry;
 }).filter(Boolean);
 function atPointer(event){
  const rect=plane.getBoundingClientRect(),x=(event.clientX-rect.left)/rect.width*100,y=(event.clientY-rect.top)/rect.height*100;
  return entries.find(({spot,button})=>{
   if(!button.isConnected)return false;
   const contour=spot[mode]?.contour;if(!contour?.length)return false;
   let inside=false;for(let i=0,j=contour.length-1;i<contour.length;j=i++){
    const [xi,yi]=contour[i],[xj,yj]=contour[j];if((yi>y)!==(yj>y)&&x<(xj-xi)*(y-yi)/(yj-yi)+xi)inside=!inside;
   }
   return inside;
  });
 }
 // Pointer feedback follows the painted silhouette, including parts beyond the 44px keyboard target.
 plane.addEventListener('pointermove',event=>{if(event.pointerType==='touch'||failed)return;const entry=atPointer(event);plane.style.cursor=entry?'pointer':'';highlight(entry||entries.find(item=>item.button.matches(':focus-visible')))});
 plane.addEventListener('pointerleave',()=>{plane.style.cursor='';highlight(entries.find(item=>item.button.matches(':focus-visible')))});
 plane.addEventListener('click',event=>{
  if(event.detail===0)return;
  const entry=atPointer(event)||entries.find(item=>item.button===event.target.closest('.scene-character'));
  if(entry)onArtwork(entry.artwork.id,entry.artwork.version,entry.button);
 });
 function highlight(entry){
  for(const item of entries){const show=item===entry&&active&&!suspended&&!document.hidden&&!failed;item.outline.toggleAttribute('data-active',show);item.button.toggleAttribute('data-highlighted',show)}
 }
 function layout(){
  if(!active)return;
  const width=container.clientWidth,height=container.clientHeight;if(!width||!height)return;
  const nextMode=width<=600?'mobile':(SCENE_ART.tablet&&width/height<1.1?'tablet':'desktop');
  if(nextMode!==mode){mode=nextMode;scene.dataset.composition=mode;failed=false;scene.classList.remove('scene-failed');scene.classList.add('scene-loading');notice.hidden=true;picture.dataset.src=SCENE_ART[mode].src;picture.src=picture.dataset.src;highlight(null)}
  const art=SCENE_ART[mode],ratio=art.width/art.height;
  const planeWidth=Math.max(width,height*ratio),planeHeight=planeWidth/ratio;
  const offsetX=(width-planeWidth)*(art.positionX??.5),offsetY=(height-planeHeight)*(art.positionY??.5);
  plane.style.width=planeWidth+'px';plane.style.height=planeHeight+'px';plane.style.left=(offsetX+planeWidth/2)+'px';plane.style.top=(offsetY+planeHeight/2)+'px';if(failed){plane.style.left='';plane.style.top='';}
  for(const entry of entries){const {spot,button,outline,base,light}=entry,position=spot[mode];
   if(!position){button.remove();outline.style.display='none';outline.removeAttribute('data-active');button.removeAttribute('data-highlighted');continue;}
   const x=position.x*planeWidth/100,y=position.y*planeHeight/100;
   const visibleX=x+offsetX,visibleY=y+offsetY;
   // Cropped characters never become invisible keyboard targets; hit targets do not animate.
   const visible=failed||(visibleX>=22&&visibleX<=width-22&&visibleY>=70&&visibleY<=height-88);
   if(!visible){button.remove();outline.style.display='none';outline.removeAttribute('data-active');button.removeAttribute('data-highlighted');continue;}
   const w=Math.min(Math.max(44,position.w*planeWidth/100),2*Math.min(visibleX,width-visibleX));
   const h=Math.min(Math.max(44,position.h*planeHeight/100),2*Math.min(visibleY,height-visibleY));
   button.style.cssText=`left:${position.x}%;top:${position.y}%;width:${w}px;height:${h}px;`;
   const contour=position.contour;
   if(contour?.length>=6){const d=contourPath(contour);base.setAttribute('d',d);light.setAttribute('d',d);outline.style.display='';}else outline.style.display='none';
   if(button.parentNode!==plane)plane.append(button);
  }
 }
 picture.onerror=()=>{failed=true;scene.classList.remove('scene-loading');scene.classList.add('scene-failed');notice.hidden=false;highlight(null);layout()};
 picture.onload=()=>{failed=false;scene.classList.remove('scene-failed','scene-loading');notice.hidden=true;layout()};
 retry.onclick=()=>{picture.src=picture.dataset.src+'?retry='+Date.now()};
 function setLanguage(next){current=next;errorText.textContent=t(current,'sceneFailed');retry.textContent=t(current,'retry');for(const{button,hint,artwork}of entries){const name=label(artwork,current);button.setAttribute('aria-label',`${t(current,'view')}: ${name}`);hint.textContent=name}}
 function setActive(next){active=next;if(active)layout();else highlight(null)}
 function setSuspended(next){suspended=next;scene.classList.toggle('scene-suspended',next);if(next)highlight(null)}
 const visibility=()=>highlight(document.hidden?null:entries.find(item=>item.button.isConnected&&item.button.matches(':focus-visible')));document.addEventListener('visibilitychange',visibility);
 const observer=new ResizeObserver(layout);observer.observe(container);
 setLanguage(language);return{setLanguage,setActive,setSuspended,destroy(){observer.disconnect();document.removeEventListener('visibilitychange',visibility);scene.remove()}};
}
