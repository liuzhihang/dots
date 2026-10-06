import assert from 'node:assert/strict';
import {BUILT_IN_LOOKS} from '../dist/studio-looks.js';
import {LOOK_TAGS,TAGS,TAG_DIMENSIONS,normalizeSearch,normalizeTagQuery,publishedTags,queryLooks,toggleTag} from '../dist/studio-tags.js';

assert.deepEqual(Object.keys(TAG_DIMENSIONS),['style','object-type','series','content','theme','material']);
assert(BUILT_IN_LOOKS.length>0);
for(const look of BUILT_IN_LOOKS){
  const ids=LOOK_TAGS[look.artworkId];
  assert(ids?.length>1,`${look.artworkId} can belong to multiple typed tags`);
  for(const id of ids)assert(TAGS.some(tag=>tag.id===id&&tag.status==='published'),`${look.artworkId} references a published registered tag ${id}`);
}

assert.equal(normalizeSearch('ＤＯＴＳ　 Bot'),'dots bot','search normalizes width and whitespace');
assert(queryLooks({text:'ＭＥＴＡ　ＭＵＳＥ'}).some(look=>look.family==='meta-muse'), 'normalized text and aliases remain searchable');
const normalized=normalizeTagQuery({tagsByDimension:{style:['grok','dots','grok'],'not-a-dimension':['ignored']},text:'  ＧＲＯＫ　Bot  '});
assert.deepEqual(normalized,{tagsByDimension:{style:['dots','grok']},text:'grok bot'},'typed query IDs are deduplicated and normalized');
assert.deepEqual(queryLooks({tagsByDimension:{style:['unknown-tag']}}),[], 'unknown tag IDs fail closed instead of widening to all content');
assert.deepEqual(queryLooks({text:'no-such-series'}),[], 'empty text results remain empty');
const expanded=toggleTag({tagsByDimension:{style:['dots']}},'grok');
assert.deepEqual(expanded.tagsByDimension.style,['dots','grok'],'multiple selections in one dimension remain a single OR group');

const tag=(id,dimension,{status='published',aliases=[]}={})=>({id,dimension,label:`标签 ${id}`,aliases,status,order:0});
const styleIds=Array.from({length:8},(_,index)=>`style-${index+1}`);
const tags=[
  ...styleIds.map((id,index)=>tag(id,'style',{aliases:index===0?['Ａｌｐｈａ Alias']:[]})),
  tag('human','object-type'),tag('animal','object-type'),tag('series-one','series'),
  tag('series-empty','series'),tag('original','content'),tag('work','theme'),tag('fabric','material'),
  tag('series-hidden','series',{status:'unpublished'}),tag('material-retired','material',{status:'retired'})
];
const looks=[
  {artworkId:'alpha',name:'Alpha',description:'原创角色',family:'test'},
  {artworkId:'beta',name:'Beta',description:'旅行伙伴',family:'test'},
  {artworkId:'gamma',name:'Gamma',description:'几何角色',family:'test'},
  {artworkId:'retired-look',name:'Retired',family:'test',status:'retired'},
  {artworkId:'unpublished-look',name:'Hidden',family:'test',published:false},
  {artworkId:'draft-look',name:'Draft',family:'test',status:'draft'}
];
const relations={
  alpha:[...styleIds,'human','series-one','original','work','fabric','material-retired','series-hidden'],
  beta:['style-2','animal','series-one','original','work','fabric'],
  gamma:['style-3','animal','series-one','original','work','fabric'],
  'retired-look':['style-1','human'],
  'unpublished-look':['style-1','human'],
  'draft-look':['style-1','human']
};
const fixture={looks,tags,relations};
const ids=items=>items.map(item=>item.artworkId);

assert.deepEqual(ids(queryLooks({tagsByDimension:{style:['style-1','style-2']}},fixture)),['alpha','beta'],
  'same-dimension values use OR and exclude retired, unpublished and draft looks');
assert.deepEqual(ids(queryLooks({tagsByDimension:{style:['style-2'], 'object-type':['animal']}},fixture)),['beta'],
  'different dimensions use AND');
assert.deepEqual(ids(queryLooks({tagsByDimension:{style:['style-1'], 'object-type':['animal']}},fixture)),[],
  'an empty cross-dimension intersection stays empty');
assert.deepEqual(ids(queryLooks({tagsByDimension:{style:styleIds}},fixture)),['alpha','beta','gamma'],
  'eight selected style tags are accepted; the taxonomy has no five-tag ceiling');
assert.deepEqual(ids(queryLooks({tagsByDimension:{style:['style-1'],'object-type':['human'],series:['series-one'],content:['original'],theme:['work'],material:['fabric']}},fixture)),['alpha'],
  'one look can satisfy and retain references across multiple typed dimensions');
assert.deepEqual(ids(queryLooks({text:'alpha alias'},fixture)),['alpha'],
  'normalized aliases participate in text search');
assert.deepEqual(ids(queryLooks({text:'Ａｌｐｈａ　Alias'},fixture)),['alpha'],
  'full-width search aliases normalize to the same result');
assert.deepEqual(ids(queryLooks({},fixture)),['alpha','beta','gamma'],
  'an empty query returns only published, non-retired looks');
assert.deepEqual(ids(queryLooks({tagsByDimension:{style:['missing-series']}},fixture)),[],
  'unknown IDs do not silently remove a query restriction');

const visible=publishedTags(fixture).map(item=>item.id);
assert(!visible.includes('series-empty'),'published but unused series do not appear as empty placeholder collections');
assert(!visible.includes('series-hidden'),'unpublished tags remain absent from discovery');
assert(!visible.includes('material-retired'),'retired tags remain absent from discovery');
assert.deepEqual(queryLooks({tagsByDimension:{material:['material-retired']}},fixture),[],
  'retired linked tags cannot expose their related looks through filtering');
assert.deepEqual(queryLooks({tagsByDimension:{series:['series-hidden']}},fixture),[],
  'unpublished series cannot expose their related looks through filtering');

console.log('Typed tag catalogue passed: OR/AND semantics, aliases, empty/hidden results, multi-tag relations and unbounded tag counts.');
