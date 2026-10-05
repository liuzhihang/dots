import {getBuiltInLooks,getFamilyArtwork,getCreationArtwork} from './studio-creation-assets.js?v=62';
import {FAMILY_LOOK_IDS,HOME_HERO_LOOK_IDS,getLookDefinition} from './studio-looks.js?v=62';

export const FAMILY_PRESENTATION=Object.freeze([
 {id:'dots',name:'Dots',description:'简洁、灵动、百变的\n圆点伙伴',foot:'Simple · But Special',terms:'chatgpt openai 圆球 团子 蓝色 绒毛 短绒 耳机'},
 {id:'grok',name:'Grok Bot',description:'多种形态的创意伙伴\n一起迎接新想法',foot:'Different Shapes · Same Friends',terms:'grok bot 几何 圆球 胶囊 软拱 磨砂 紫色 云 方块'},
 {id:'meta-muse',name:'Meta Muse',description:'温柔治愈的陪伴\n给你一点小小力量',foot:'A Softer · Brighter You',terms:'meta muse 缪斯 奶油 毛绒 玩偶 白色 连帽 花束 书'},
 {id:'humans',name:'人物',description:'鲜活的个性小角色\n记录真实的每一种情绪',foot:'Real People · More Stories',terms:'humans human people 人物 人类 男孩 女孩 栗发 金发'},
 {id:'animals',name:'动物',description:'可爱的动物伙伴\n永远在你身边',foot:'More Friends · A Kinder World',terms:'animals animal pet 动物 宠物 狗 柴犬 猫 哈士奇'}
]);

export function matchingFamilies(query='',filter='all'){
 const words=String(query).trim().normalize('NFKC').toLocaleLowerCase().split(/\s+/).filter(Boolean);
 return FAMILY_PRESENTATION.filter(f=>(filter==='all'||f.id===filter)&&words.every(w=>(f.name+' '+f.id+' '+f.description+' '+f.terms).toLocaleLowerCase().includes(w)));
}
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lines=value=>esc(value).replaceAll('\n','<br>');
const byId=id=>getCreationArtwork(id);
const familyLooks=id=>(FAMILY_LOOK_IDS[id]||[]).map(byId).filter(Boolean);
const uniqueLooks=ids=>ids.map(byId).filter(Boolean);

export function createHomePortal({openWorkspace,openGallery,onStartLook,onViewLook,onCopyLook,onDownloadLook,onReference}){
 const nav=document.getElementById('homeFamilies'),gallery=document.getElementById('familyCards'),looks=document.getElementById('looksPortal');
 if(!nav||!gallery||!looks)return null;
 const search=document.getElementById('familySearch'),clear=document.getElementById('clearSearch'),filters=document.getElementById('lookFilters'),cards=document.getElementById('lookCards');
 let filter='all',current='dots',activeFamily='all',page='home';
 function renderFamilyNav(){
  nav.innerHTML=[{id:'all',name:'全部家族'},...FAMILY_PRESENTATION].map(f=>`<button class="family-filter ${filter===f.id?'selected':''}" data-home-filter="${f.id}" aria-pressed="${filter===f.id}">${f.id==='all'?'<span aria-hidden="true">⌂</span>':`<span class="family-filter-mark ${f.id}" aria-hidden="true"></span>`}${f.name}</button>`).join('');
 }
 function renderFamilies(){
  renderFamilyNav();
  const found=matchingFamilies(search.value,filter);
  gallery.innerHTML=found.map(f=>{
   const group=familyLooks(f.id);
   const sprites=group.map((art,index)=>`<img class="family-sprite look-${esc(art.id)}" src="${art.src}" data-look-id="${esc(art.id)}" alt="" decoding="async" style="--sprite-index:${index}" loading="lazy">`).join('');
   return `<button class="family-entry ${f.id}" data-family-gallery="${f.id}" aria-current="${current===f.id?'true':'false'}" aria-label="浏览 ${f.name} 内置形象"><b>${f.name}</b><span class="family-arrow" aria-hidden="true">›</span><span class="family-desc">${lines(f.description)}</span><span class="family-stack" aria-hidden="true">${sprites}</span><span class="family-foot">${esc(f.foot)}</span><span class="family-count">${group.length} 款候选</span></button>`;
  }).join('');
  document.getElementById('familyEmpty').hidden=found.length!==0;
  document.getElementById('familyResults').textContent=`找到 ${found.length} 个角色家族`;
  clear.hidden=!search.value;
 }
 function renderLookFilters(){
  filters.innerHTML=[{id:'all',name:'全部家族'},...FAMILY_PRESENTATION].map(f=>`<button class="look-filter ${activeFamily===f.id?'selected':''}" data-look-filter="${f.id}" aria-pressed="${activeFamily===f.id}">${f.name}</button>`).join('');
 }
 function renderLooks(){
  renderLookFilters();
  const words=String(search.value).trim().normalize('NFKC').toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const all=activeFamily==='all'?getBuiltInLooks():getBuiltInLooks(activeFamily);
  const found=all.filter(a=>words.every(word=>(a.name+' '+a.description+' '+a.family+' '+a.id).toLocaleLowerCase().includes(word)));
  cards.innerHTML=found.map(a=>{const look=getLookDefinition(a.id),name=look?.name||a.name,description=look?.description||a.description,source=look?.source==='official-recreation'?'品牌形象再创作 · 非官方':'原创角色';return `<article class="look-card" data-asset-state="loading" data-look-card="${esc(a.id)}">
   <button class="look-art-button" data-view-look="${esc(a.id)}" aria-label="放大查看${esc(name)}"><img src="${a.src}" alt="${esc(name)}" decoding="async" loading="lazy"><span>放大查看</span></button>
   <div class="look-card-copy"><span class="look-family-label">${FAMILY_PRESENTATION.find(f=>f.id===a.family)?.name||a.family}</span><h2>${esc(name)}</h2><p>${esc(description)}</p><small>${source}<br>候选形象</small></div>
   <div class="look-card-actions"><button data-copy-look="${esc(a.id)}">复制 Prompt</button><button data-download-look="${esc(a.id)}">下载原图</button><button class="look-start" data-start-look="${esc(a.id)}">用这个形象定制 <span aria-hidden="true">→</span></button></div>
  </article>`;}).join('');
  cards.querySelectorAll('[data-look-card]').forEach(card=>{
   const img=card.querySelector('img');
   const ready=()=>{card.dataset.assetState='ready';};
   const missing=()=>{card.remove();document.getElementById('lookResults').textContent=`找到 ${cards.querySelectorAll('[data-look-card]').length} 款可用内置形象`;};
   img.addEventListener('load',ready,{once:true});img.addEventListener('error',missing,{once:true});
   if(img.complete&&img.naturalWidth)ready();
  });
  document.getElementById('lookEmpty').hidden=found.length!==0;
  document.getElementById('lookResults').textContent=`找到 ${found.length} 款内置搭配`;
  clear.hidden=!search.value;
 }
 function renderHero(){
  const ids=HOME_HERO_LOOK_IDS.filter(id=>byId(id));
  const split=Math.ceil(ids.length/2),left=ids.slice(0,split),right=ids.slice(split);
  const makeGroup=(items,side)=>`<div class="hero-cluster ${side}" aria-hidden="true">${items.map((id,index)=>{const a=byId(id);return `<img class="hero-character ${side}-item item-${index+1} look-${esc(id)}" src="${a.src}" alt="" decoding="async">`;}).join('')}</div>`;
  document.getElementById('heroScene').innerHTML=makeGroup(left,'hero-left')+makeGroup(right,'hero-right');
  const showcase=uniqueLooks(['candidate-dots-20261005','dots-rose-glasses','dots-lilac-bucket']);
  document.getElementById('introPreview').innerHTML=`<div class="intro-look-strip" aria-hidden="true">${showcase.map(a=>`<img src="${a.src}" alt="" loading="lazy">`).join('')}</div><div class="intro-preview-copy"><b>先选一个喜欢的形象</b><span>再换背景并加入你的创作想法</span></div>`;
 }
 function showHome(){page='home';document.body.dataset.screen='home';document.getElementById('homePortal').hidden=false;looks.hidden=true;document.getElementById('workspaceShell').hidden=true;renderFamilies();}
 function showGallery(family='all'){page='looks';activeFamily=family||'all';document.body.dataset.screen='looks';document.getElementById('homePortal').hidden=true;looks.hidden=false;document.getElementById('workspaceShell').hidden=true;renderLooks();document.getElementById('looksTitle')?.focus({preventScroll:true});}
 nav.addEventListener('click',e=>{const b=e.target.closest('[data-home-filter]');if(!b)return;filter=b.dataset.homeFilter;renderFamilies();nav.querySelector(`[data-home-filter="${filter}"]`)?.focus({preventScroll:true});});
 gallery.addEventListener('click',e=>{const b=e.target.closest('[data-family-gallery]');if(b)openGallery(b.dataset.familyGallery);});
  filters.addEventListener('click',e=>{const b=e.target.closest('[data-look-filter]');if(!b)return;activeFamily=b.dataset.lookFilter;openGallery(activeFamily,{replace:true,focus:false});filters.querySelector(`[data-look-filter="${activeFamily}"]`)?.focus({preventScroll:true});});
 cards.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.viewLook)onViewLook(b.dataset.viewLook);
  else if(b.dataset.copyLook)onCopyLook(b.dataset.copyLook);
  else if(b.dataset.downloadLook)onDownloadLook(b.dataset.downloadLook);
  else if(b.dataset.startLook)onStartLook(b.dataset.startLook);
 });
 document.getElementById('introPreview').addEventListener('click',()=>{});
 search.addEventListener('input',()=>{if(page==='looks')renderLooks();else{filter='all';renderFamilies();}});
 clear.addEventListener('click',()=>{search.value='';filter='all';renderFamilies();if(page==='looks')renderLooks();search.focus();});
 renderHero();renderFamilies();
 return {
  showHome,showGallery,setPageWorkspace(){page='workspace';document.body.dataset.screen='workspace';document.getElementById('homePortal').hidden=true;looks.hidden=true;document.getElementById('workspaceShell').hidden=false;},
  setCurrent(id){current=id;for(const card of gallery.querySelectorAll('[data-family-gallery]'))card.setAttribute('aria-current',String(card.dataset.familyGallery===id));},
  clear(){search.value='';filter='all';activeFamily='all';renderFamilies();renderLooks();showHome();}
 };
}
