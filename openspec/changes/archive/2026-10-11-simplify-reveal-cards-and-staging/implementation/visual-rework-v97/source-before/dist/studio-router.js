export function parseRoute(hash){
 const raw=(hash||'#/home').replace(/^#/,'');const [path,query='']=raw.split('?');const params=new URLSearchParams(query);
 if(path==='/home')return{page:'home'};
 if(path==='/gallery')return{page:'gallery',text:params.get('q')||'',seriesId:params.get('series')||''};
 if(path==='/guide')return{page:'guide'};
 const match=path.match(/^\/artwork\/([a-z0-9][a-z0-9-]*)$/);
 if(match&&params.get('v'))return{page:'artwork',id:match[1],version:params.get('v')};
 return{page:'notFound'};
}
export function galleryURL({text='',seriesId=''}={}){const q=new URLSearchParams();if(text.trim())q.set('q',text.trim());if(seriesId)q.set('series',seriesId);return`#/gallery${q.size?'?'+q:''}`}
export const artworkURL=(id,version)=>`#/artwork/${encodeURIComponent(id)}?v=${encodeURIComponent(version)}`;
