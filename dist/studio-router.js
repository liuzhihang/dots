import { normalizeGalleryQuery } from './studio-tags.js?v=99';
export function parseRoute(hash='') {
  const raw = String(hash || '#/');
  if (!raw.startsWith('#/')) return {page:'notFound'};
  const [path, search=''] = raw.slice(1).split('?');
  const params = new URLSearchParams(search);
  if ([...params.keys()].some(key=>params.getAll(key).length>1)) return {page:'notFound'};
  if(path==='/') {
    if([...params.keys()].some(key=>!['q','series','sort'].includes(key))) return {page:'notFound'};
    return {page:'gallery',text:params.get('q')||'',seriesId:params.get('series')||'',sort:params.get('sort')||'curated'};
  }
  const match=path.match(/^\/artwork\/([^/]+)$/);
  if(match && [...params.keys()].every(key=>['v'].includes(key))) {
    let id;try{id=decodeURIComponent(match[1]);}catch{return {page:'notFound'};}
    const version=params.get('v');
    if(id && version)return {page:'artwork',id,version};
  }
  return {page:'notFound'};
}
export function galleryURL(query={}) {
  const text=typeof query.text==='string'?query.text.trim():'',series=typeof query.seriesId==='string'?query.seriesId:'',sort=query.sort||'curated';
  const params=new URLSearchParams();if(text)params.set('q',text);if(series)params.set('series',series);if(sort!=='curated')params.set('sort',sort);
  return `#/${params.size?'?'+params:''}`;
}
export function artworkURL(id,version) {
  const params=new URLSearchParams({v:version});
  return `#/artwork/${encodeURIComponent(id)}?${params}`;
}
export function isGalleryQueryValid(query){return normalizeGalleryQuery(query).valid;}
