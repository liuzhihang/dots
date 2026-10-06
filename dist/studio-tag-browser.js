import {TAG_DIMENSIONS,publishedTags,normalizeSearch,normalizeTagQuery,toggleTag,queryLabel} from './studio-tags.js?v=86';
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let sequence=0;
export function createTagBrowser(root,{getQuery,onChange}={}){
 const id=`more-tags-${++sequence}`,dialog=document.createElement('dialog');dialog.className='tag-dialog';dialog.id=id;
 dialog.innerHTML=`<div class="tag-dialog-head"><h2 id="${id}-title">更多标签</h2><button type="button" data-close-tags aria-label="关闭更多标签">×</button></div><label>搜索标签<input type="search" data-search-tags placeholder="名称或别名" maxlength="80"></label><div data-tag-options></div><p class="tag-semantics">同一维度选多个按“或”匹配，不同维度按“且”匹配。</p>`;
 dialog.setAttribute('aria-labelledby',`${id}-title`);document.body.append(dialog);
 const selected=id=>Object.values(normalizeTagQuery(getQuery()).tagsByDimension).flat().includes(id);
 const button=t=>`<button type="button" class="look-filter ${selected(t.id)?'selected':''}" data-tag="${esc(t.id)}" aria-pressed="${selected(t.id)}">${esc(t.label)}</button>`;
 function renderOptions(){const words=normalizeSearch(dialog.querySelector('input').value).split(' ').filter(Boolean),tags=publishedTags().filter(t=>words.every(w=>normalizeSearch(t.label+' '+t.aliases.join(' ')).includes(w)));dialog.querySelector('[data-tag-options]').innerHTML=Object.entries(TAG_DIMENSIONS).map(([dim,label])=>{const found=tags.filter(t=>t.dimension===dim);return found.length?`<fieldset><legend>${label}</legend><div class="tag-buttons">${found.map(button).join('')}</div></fieldset>`:'';}).join('')||'<p role="status">没有匹配标签。</p>';}
 function render(){
  const q=normalizeTagQuery(getQuery());root.innerHTML=`<div class="tag-buttons"><button type="button" class="look-filter ${!Object.keys(q.tagsByDimension).length?'selected':''}" data-clear-tags>全部内容</button>${publishedTags().slice(0,5).map(button).join('')}<button type="button" class="look-filter" data-more-tags aria-haspopup="dialog" aria-controls="${id}">更多标签</button></div><p class="tag-query" role="status">${esc(queryLabel(q))}<span>同维 OR · 跨维 AND</span></p>`;
  if(dialog.open)renderOptions();
 }
 root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-more-tags')){renderOptions();dialog.showModal();dialog.querySelector('input').focus();}else if(b.dataset.tag){onChange(toggleTag(getQuery(),b.dataset.tag));render();root.querySelector(`[data-tag="${b.dataset.tag}"]`)?.focus({preventScroll:true});}else if(b.hasAttribute('data-clear-tags')){const q=normalizeTagQuery(getQuery());q.tagsByDimension={};onChange(q);render();root.querySelector('[data-clear-tags]')?.focus({preventScroll:true});}});
 dialog.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-close-tags'))dialog.close();else if(b.dataset.tag){onChange(toggleTag(getQuery(),b.dataset.tag));render();dialog.querySelector(`[data-tag="${b.dataset.tag}"]`)?.focus({preventScroll:true});}});
 dialog.querySelector('input').addEventListener('input',renderOptions);
 dialog.addEventListener('close',()=>{root.querySelector('[data-more-tags]')?.focus({preventScroll:true});});
 render();return {render,dispose(){dialog.remove();root.innerHTML='';}};
}
