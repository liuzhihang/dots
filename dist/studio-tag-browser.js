import {TAGS,TAG_DIMENSIONS,publishedTags,normalizeTagQuery,toggleTag} from './studio-tags.js?v=90';
import {escapeHTML as esc} from './studio-home.js?v=90';

export function createTagBrowser(container,{getQuery,onChange}){
 const detailsState={open:false};
 function render(focusId){
  const query=normalizeTagQuery(getQuery()),tags=publishedTags();
  const group=dimension=>{const list=tags.filter(t=>t.dimension===dimension);if(!list.length)return '';return `<div class="tag-group" data-dimension="${esc(dimension)}"><span class="tag-group-label">${esc(TAG_DIMENSIONS[dimension]||dimension)}</span>${list.map(t=>`<button class="tag-chip" data-tag-id="${esc(t.id)}" aria-pressed="${(query.tagsByDimension[dimension]||[]).includes(t.id)}">${esc(t.label)}</button>`).join('')}</div>`;};
  const main=['style','object-type'];const rest=[...new Set(tags.map(t=>t.dimension))].filter(d=>!main.includes(d));
  container.innerHTML=main.map(group).join('')+(rest.length?`<details class="tag-more" ${detailsState.open?'open':''}><summary>更多筛选 · 配饰、道具、形状与动作</summary>${rest.map(group).join('')}</details>`:'');
  container.querySelector('details')?.addEventListener('toggle',e=>{detailsState.open=e.target.open;});
  if(focusId){const button=[...container.querySelectorAll('[data-tag-id]')].find(b=>b.dataset.tagId===focusId);button?.focus({preventScroll:true});}
 }
 const click=e=>{const b=e.target.closest('[data-tag-id]');if(!b)return;const id=b.dataset.tagId;onChange(toggleTag(getQuery(),id));render(id);};
 container.addEventListener('click',click);render();
 return {render,dispose(){container.removeEventListener('click',click);}};
}
