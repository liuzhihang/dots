import {getAsset,SERIES} from './studio-artwork-catalog.js?v=110';
import {label,t} from './studio-i18n.js?v=110';
/** Data-only card shared by source Artworks, looks and public figures. */
export function createArtworkCard(artwork,{language='en',onOpen=()=>{},lookupAsset=getAsset,series=SERIES,context='card'}={}) {
  const asset=lookupAsset(artwork.assetRefs.poster);
  const item=document.createElement('article');item.className='artwork-card';
  const button=document.createElement('button');button.type='button';button.className='artwork-select';button.id=`${context}-${artwork.id}`;button.dataset.artworkId=artwork.id;button.dataset.version=artwork.version;const titleLabel=label(artwork,language);const seriesRecord=series.find(item=>item.id===artwork.seriesId)||(artwork.seriesLabelByLanguage?{labelByLanguage:artwork.seriesLabelByLanguage}:null);const categoryLabel=label(seriesRecord,language);button.setAttribute('aria-label',`${t(language,'view')}: ${titleLabel}${categoryLabel?` · ${categoryLabel}`:''}`);
  const media=document.createElement('span');media.className='artwork-media';const img=new Image();img.alt='';img.loading='lazy';img.decoding='async';
  if(asset){img.src=asset.path;img.width=asset.width;img.height=asset.height;const large=lookupAsset(artwork.assetRefs.poster512);if(large){img.srcset=`${asset.path} ${asset.width}w, ${large.path} ${large.width}w`;img.sizes='(max-width:600px) calc((100vw - 48px)/2), (max-width:850px) calc((100vw - 88px)/3), (max-width:1100px) calc((100vw - 146px)/4), (max-width:1400px) calc((100vw - 200px)/6), 193px';}}
  const error=document.createElement('span');error.className='card-image-error';error.hidden=Boolean(asset);error.textContent=t(language,'imageFailed');media.append(img,error);
  const caption=document.createElement('span');caption.className='artwork-caption';
  const name=document.createElement('span');name.className='artwork-name';name.textContent=titleLabel;
  const category=document.createElement('span');category.className='artwork-series';category.textContent=categoryLabel;
  caption.append(name);if(categoryLabel)caption.append(category);button.append(media,caption);button.onclick=()=>onOpen(artwork.id,artwork.version,button);item.append(button);
  const retry=document.createElement('button');retry.className='text-button card-retry';retry.textContent=t(language,'retry');retry.hidden=true;
  if(artwork.artworkId){button.dataset.lookId=artwork.id;button.dataset.sourceArtworkId=artwork.artworkId;}
  if(artwork.kind==='gallery-figure')button.dataset.figureId=artwork.id;
  img.onerror=()=>{img.hidden=true;error.hidden=false;retry.hidden=false;};img.onload=()=>{img.hidden=false;error.hidden=true;retry.hidden=true;};
  retry.onclick=()=>{if(!asset)return;img.hidden=false;img.src=asset.path;};item.append(retry);return item;
}
