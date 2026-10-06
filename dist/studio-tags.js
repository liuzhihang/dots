import {BUILT_IN_LOOKS} from './studio-looks.js?v=86';

// Content discovery is independent of character defaults and renderer capabilities.
export const TAG_DIMENSIONS=Object.freeze({style:'视觉风格', 'object-type':'对象类型', series:'作品系列', content:'内容分类', theme:'场景主题', material:'材质'});
const tag=(id,dimension,label,aliases=[],order=0)=>Object.freeze({id,dimension,label,aliases:Object.freeze(aliases),order,status:'published',sourceScope:'maintainer-built-in'});
export const TAGS=Object.freeze([
 tag('dots','style','Dots',['openai','圆点伙伴'],0),tag('grok','style','Grok Bot',['grok bot'],1),tag('meta-muse','style','Meta Muse',['muse','缪斯'],2),
 tag('humans','object-type','人物',['human','people'],3),tag('animals','object-type','动物',['animal','pet'],4),
 tag('chibi','style','精致 Q 版',['q版','chibi'],5),tag('geometry','object-type','几何角色',['几何','geometry'],6),
 tag('fantasy','object-type','幻想生物',['幻想','fantasy'],7),tag('original','content','原创',['original'],8),
 tag('short-fur','material','细密短绒',['毛绒','plush'],9),tag('fabric','material','织物',['布面','knit'],10),tag('matte-rubber','material','哑光软胶',['rubber','软胶'],11)
]);
export const LOOK_TAGS=Object.freeze(Object.fromEntries(BUILT_IN_LOOKS.map(look=>[look.artworkId,Object.freeze([
 ...(look.family==='dots'?['dots','geometry','short-fur']:look.family==='grok'?['grok','geometry','matte-rubber']:look.family==='meta-muse'?['meta-muse','fantasy','fabric']:look.family==='humans'?['humans','chibi','fabric']:['animals','chibi','short-fur']),
 ...(look.source==='original'?['original']:[])
])])));
export const normalizeSearch=value=>String(value??'').normalize('NFKC').toLocaleLowerCase().trim().replace(/\s+/g,' ');
export function normalizeTagQuery(query={}){
 if(typeof query==='string')query={text:query};
 const groups={};
 for(const [dimension,ids] of Object.entries(query.tagsByDimension||{})){
  if(!Object.hasOwn(TAG_DIMENSIONS,dimension)||!Array.isArray(ids))continue;
  // Unknown ids remain a no-match condition, rather than silently expanding scope.
  const values=[...new Set(ids.filter(id=>typeof id==='string'))].sort();if(values.length)groups[dimension]=values;
 }
 return {tagsByDimension:groups,text:normalizeSearch(query.text)};
}
export function queryForFamily(family='all'){
 const t=TAGS.find(t=>t.id===family);return normalizeTagQuery(t?{tagsByDimension:{[t.dimension]:[t.id]}}:{});
}
export function queryLooks(query={},catalog={looks:BUILT_IN_LOOKS,tags:TAGS,relations:LOOK_TAGS}){
 const q=normalizeTagQuery(query),words=q.text.split(' ').filter(Boolean);
 const activeTags=new Map(catalog.tags.filter(t=>t.status==='published').map(t=>[t.id,t]));
 return catalog.looks.filter(look=>{
  if(look.status==='retired'||look.status==='unpublished'||look.status==='draft'||look.published===false)return false;
  const ids=catalog.relations[look.artworkId]||[];
  if(!Object.entries(q.tagsByDimension).every(([dim,selected])=>selected.some(id=>ids.includes(id)&&activeTags.get(id)?.dimension===dim)))return false;
  const meta=ids.map(id=>activeTags.get(id)).filter(Boolean).flatMap(t=>[t.label,...t.aliases]).join(' ');
  const haystack=normalizeSearch([look.name,look.description,look.artworkId,look.presetId,look.family,meta].join(' '));
  return words.every(word=>haystack.includes(word));
 });
}
export function publishedTags(catalog={looks:BUILT_IN_LOOKS,tags:TAGS,relations:LOOK_TAGS}){
 const looks=queryLooks({},catalog);
 return catalog.tags.filter(t=>t.status==='published'&&looks.some(look=>(catalog.relations[look.artworkId]||[]).includes(t.id))).sort((a,b)=>a.order-b.order);
}
export function toggleTag(query,id){
 const q=normalizeTagQuery(query),t=TAGS.find(t=>t.id===id);if(!t)return q;
 const selected=new Set(q.tagsByDimension[t.dimension]||[]);selected.has(id)?selected.delete(id):selected.add(id);
 q.tagsByDimension[t.dimension]=[...selected];return normalizeTagQuery(q);
}
export function queryLabel(query){
 const q=normalizeTagQuery(query),labels=Object.values(q.tagsByDimension).flat().map(id=>TAGS.find(t=>t.id===id)?.label||id);
 return [...labels,...(q.text?[`“${q.text}”`]:[])].join(' · ')||'全部内置形象';
}
