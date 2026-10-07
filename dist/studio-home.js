import {HERO_SCENES,FAMILY_SCENES} from './studio-scenes.js?v=90';
import {ARTWORKS,getAsset,isEligible} from './studio-artwork-catalog.js?v=90';

export const TOPICS=Object.freeze([
 {id:'dots',name:'Dots',description:'简洁、灵动的\n圆点伙伴',foot:'Simple\nBut Special',surface:'#f0ecfc'},
 {id:'grok',name:'Grok Bot',description:'不同形状，\n一起想象',foot:'Different Shapes\nSame Friends',surface:'#eaf7ed'},
 {id:'meta-muse',name:'Meta Muse',description:'温柔的包覆轮廓，\n小小的陪伴',foot:'A Softer\nBrighter You',surface:'#faf5e9'},
 {id:'humans',name:'Humans',description:'原创个性角色，\n每一种表情都有故事',foot:'Real People\nMore Stories',surface:'#eef3fe'},
 {id:'animals',name:'Animals',description:'物种各有模样，\n都是可爱的伙伴',foot:'More Friends\nA Kinder World',surface:'#fff0e7'}
]);
export const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function createHomePortal({onTopic,onArtwork}){
 document.getElementById('heroScene').innerHTML=HERO_SCENES.map((s,i)=>`<img class="hero-group ${i?'hero-right':'hero-left'}" src="${escapeHTML(s.src)}" alt="${escapeHTML(s.displayMembers.join('、'))}" decoding="sync" fetchpriority="high">`).join('');
 const topicCards=document.getElementById('topicCards');
 topicCards.innerHTML=TOPICS.map(t=>`<button class="topic-card ${t.id}" data-topic="${t.id}" style="--topic-surface:${t.surface}" aria-label="浏览 ${t.name} 作品"><span class="topic-copy"><b>${t.name}</b><span class="topic-description">${escapeHTML(t.description)}</span></span><span class="topic-arrow" aria-hidden="true">→</span><img src="${escapeHTML(FAMILY_SCENES[t.id].src)}" alt="" decoding="async"></button>`).join('');
 topicCards.addEventListener('click',e=>{const b=e.target.closest('[data-topic]');if(b)onTopic(b.dataset.topic);});
 const featured=document.getElementById('featuredCards');
 const featuredHeader=document.querySelector('.featured-section .section-heading');
 if(featuredHeader){
  const heading=featuredHeader.querySelector('h2');if(heading)heading.textContent='精选作品';
  featuredHeader.querySelector('.eyebrow')?.remove();
  featuredHeader.querySelector('p')?.remove();
  const referenceAction=featuredHeader.querySelector('[data-command="reference"]');
  if(referenceAction){const link=document.createElement('a');link.className='text-link';link.href='#gallery';link.textContent='查看全部作品 →';referenceAction.replaceWith(link);}
 }
 const ids=['dots-rose-glasses','candidate-meta-muse-20261005','human-bun-yellow','animal-white-cat'];
 featured.innerHTML=ids.map(id=>ARTWORKS.find(a=>a.id===id)).filter(a=>a&&isEligible(a)).map(a=>`<button class="featured-card" data-artwork="${escapeHTML(a.id)}" aria-label="查看${escapeHTML(a.title)}"><img src="${escapeHTML(getAsset(a.assetRefs.original).path)}" alt="" decoding="async" loading="lazy"><span><b>${escapeHTML(a.title)}</b><small>查看图片与 Prompt →</small></span></button>`).join('');
 featured.addEventListener('click',e=>{const b=e.target.closest('[data-artwork]');if(b)onArtwork(b.dataset.artwork);});
}
