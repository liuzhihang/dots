import {getFamilyArtwork} from './studio-creation-assets.js?v=59';

export const FAMILY_PRESENTATION=Object.freeze([
 {id:'dots',name:'Dots',description:'简洁、灵动、百变的\n圆点伙伴',foot:'Simple\nBut Special',terms:'chatgpt openai 圆球 团子 蓝色 绒毛 短绒 耳机'},
 {id:'grok',name:'Grok Bot',description:'有点几何，有点好奇\n一起迎接新想法',foot:'Different Shapes\nSame Friends',terms:'grok bot 几何 圆球 胶囊 软拱 磨砂 紫色'},
 {id:'meta-muse',name:'Meta Muse',description:'温柔治愈的小伙伴\n给你一点小小力量',foot:'A Softer\nBrighter You',terms:'meta muse 缪斯 奶油 毛绒 玩偶 白色 连帽'},
 {id:'humans',name:'人物',description:'把个性装进小角色\n记录真实的每一种情绪',foot:'Real People\nMore Stories',terms:'humans human people 人物 人类 男孩 女孩 栗发 针织 原创'},
 {id:'animals',name:'动物',description:'可爱的小小动物\n永远在你身边',foot:'More Friends\nA Kinder World',terms:'animals animal pet 动物 宠物 狗 柴犬 暖橙 原创'}
]);

export function matchingFamilies(query='',filter='all'){
 const words=String(query).trim().normalize('NFKC').toLocaleLowerCase().split(/\s+/).filter(Boolean);
 return FAMILY_PRESENTATION.filter(f=>(filter==='all'||f.id===filter)&&words.every(w=>(f.name+' '+f.id+' '+f.description+' '+f.terms).toLocaleLowerCase().includes(w)));
}
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lines=value=>esc(value).replaceAll('\n','<br>');
const imageFor=id=>getFamilyArtwork(id);

export function createHomePortal({openWorkspace,onPalette}){
 const nav=document.getElementById('homeFamilies'),gallery=document.getElementById('familyCards');
 if(!nav||!gallery)return null;
 const search=document.getElementById('familySearch'),clear=document.getElementById('clearSearch');
 let filter='all',current='dots';
 function render(){
  nav.innerHTML=[{id:'all',name:'全部家族'},...FAMILY_PRESENTATION].map(f=>`<button class="family-filter ${filter===f.id?'selected':''}" data-home-filter="${f.id}" aria-pressed="${filter===f.id}">${f.id==='all'?'<span aria-hidden="true">⌂</span>':`<img src="${imageFor(f.id)?.src||''}" alt="">`}${f.name}</button>`).join('');
  const found=matchingFamilies(search.value,filter);
  gallery.innerHTML=found.map(f=>{const art=imageFor(f.id);return `<button class="family-entry ${f.id}" data-start-family="${f.id}" aria-current="${current===f.id?'true':'false'}" aria-label="开始创作 ${f.name}"><b>${f.name}</b><span class="family-arrow" aria-hidden="true">›</span><span class="family-desc">${lines(f.description)}</span>${art?`<img src="${art.src}" alt="${esc(f.name)} 基准候选" decoding="async">`:''}<span class="family-foot">${lines(f.foot)}</span><span class="family-candidate">基准候选</span></button>`;}).join('');
  document.getElementById('familyEmpty').hidden=found.length!==0;
  document.getElementById('familyResults').textContent=`找到 ${found.length} 个角色家族`;
  clear.hidden=!search.value;
 }
 document.getElementById('heroScene').innerHTML=FAMILY_PRESENTATION.map(f=>{const a=imageFor(f.id);return a?`<img class="hero-character ${f.id}" src="${a.src}" alt="" decoding="async">`:'';}).join('');
 const dot=imageFor('dots');document.getElementById('introPreview').innerHTML=`${dot?`<img src="${dot.src}" alt="Dots 基准候选" decoding="async">`:''}<div class="mini-controls"><span>一点颜色，很多可能</span><div>${[{id:'sky',color:'#547fff',name:'明亮蓝'},{id:'rose',color:'#f3a5cf',name:'莓果粉'},{id:'lilac',color:'#b993ef',name:'浅鸢紫'}].map(p=>`<button data-intro-palette="${p.id}" style="--color:${p.color}" aria-label="用${p.name}开始创作"></button>`).join('')}</div><small>形象 · 配饰 · 表情 · 画面<br>把想法写进你的 Prompt</small><br><button class="mini-start" data-command="open-workspace">进入创作区 ↗</button></div>`;
 nav.addEventListener('click',e=>{const b=e.target.closest('[data-home-filter]');if(!b)return;filter=b.dataset.homeFilter;render();nav.querySelector(`[data-home-filter="${filter}"]`)?.focus({preventScroll:true});});
 gallery.addEventListener('click',e=>{const b=e.target.closest('[data-start-family]');if(b)openWorkspace(b.dataset.startFamily);});
 document.getElementById('introPreview').addEventListener('click',e=>{const b=e.target.closest('[data-intro-palette]');if(b){openWorkspace('dots');onPalette(b.dataset.introPalette);}});
 search.addEventListener('input',()=>{filter='all';showHome();render();});
 clear.addEventListener('click',()=>{search.value='';filter='all';render();search.focus();});
 function showHome(){document.body.dataset.screen='home';document.getElementById('homePortal').hidden=false;document.getElementById('workspaceShell').hidden=true;}
 render();
 return {render,showHome,setCurrent(id){current=id;for(const card of gallery.querySelectorAll('[data-start-family]'))card.setAttribute('aria-current',String(card.dataset.startFamily===id));},clear(){search.value='';filter='all';render();showHome();}};
}
