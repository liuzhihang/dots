// Small schematic controls. The large stage always renders the actual configuration.
const path=d=>`<path d="${d}"/>`;
const ellipse=(x,y,rx,ry)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}"/>`;
const circle=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}"/>`;
const ink='#313642',base='#e9ecf1';
const flower=(x,y,r,n=6)=>Array.from({length:n},(_,i)=>{const a=i*2*Math.PI/n;return circle(x+Math.cos(a)*r*.62,y+Math.sin(a)*r*.62,r*.53);}).join('')+circle(x,y,r*.6);
const radial=(n,low,high,phase=-Math.PI/2)=>{let d='';for(let i=0;i<120;i++){const a=phase+i/120*Math.PI*2,r=low+(high-low)*(.5+.5*Math.cos(n*(a-phase)));d+=(i?'L':'M')+(40+Math.cos(a)*r).toFixed(2)+' '+(32+Math.sin(a)*r).toFixed(2);}return path(d+'Z');};
export const schematicShapes={
 sphere:circle(40,32,23),triangle:path('M33 12Q40 1 47 12L65 45Q71 57 57 57H23Q9 57 15 45Z'),
 pill:'<rect x="14" y="16" width="52" height="32" rx="16"/>',capsule:'<rect x="25" y="6" width="30" height="52" rx="15"/>',
 frog:path('M18 21Q12 6 24 7Q34 6 33 20H47Q46 6 57 7Q68 7 62 22Q71 33 64 47Q59 55 47 55H32Q20 55 16 45Q9 34 18 21Z'),
 puff:radial(6,20,25),scallop:radial(12,22,24),
 clover:path('M40 16C15-4 9 14 22 31C4 49 20 66 40 49C60 67 78 48 59 32C77 12 61-2 40 16Z'),
 heart:path('M40 56C33 53 9 33 15 17C21 1 36 8 40 16C46 5 63 3 67 19C71 33 46 53 40 56Z'),
 sprout:path('M32 16C28 5 32 0 40 7C47-1 61 7 51 19C65 23 70 40 57 52C46 63 26 59 20 47C13 34 20 21 32 16Z'),
 pebble:path('M21 13Q25 5 39 7L55 11Q67 16 66 31L60 48Q55 58 39 58L21 51Q12 47 13 34Z'),
 diamond:path('M34 9Q40 3 46 9L65 26Q72 32 65 39L47 56Q40 63 33 56L15 39Q8 32 15 26Z'),
 arch:path('M14 35Q12 7 40 7Q68 7 66 35V48Q66 58 56 56L44 51Q40 49 36 51L24 56Q14 58 14 48Z'),
 roundedcube:'<rect x="17" y="9" width="46" height="46" rx="12"/>',
 hexagon:path('M28 9Q40 3 51 10L66 24Q70 32 66 41L53 53Q41 61 27 53L14 41Q9 32 15 21Z'),
 cloud:path('M18 28C14 12 31 5 41 17C55 6 71 19 64 31C76 47 61 59 47 52C31 64 13 54 17 43C9 38 11 32 18 28Z'),
 drop:path('M44 5C47 21 66 25 64 40C62 56 49 62 34 57C13 54 12 32 24 22Z'),
 bean:path('M38 7C69 8 68 28 53 34C48 36 47 48 42 53C29 68 11 44 15 27C18 15 25 7 38 7Z'),
 dumpling:path('M24 20Q17 7 39 7Q60 7 55 20Q67 26 61 34Q74 50 61 55Q39 63 19 55Q5 48 18 34Q11 25 24 20Z'),
 twin:ellipse(40,35,21,23)+ellipse(36,11,5,8)+ellipse(44,11,5,8),
 star:path('M37 7Q40 1 43 7L49 22L64 23Q71 23 66 29L54 40L58 54Q60 62 53 58L40 49L27 58Q20 62 22 54L26 40L14 29Q9 23 16 23L31 22Z'),
 ghost:path('M17 34Q14 7 40 7Q66 7 63 34L66 52Q66 60 56 54L49 49L41 56L31 50L22 56Q12 60 14 51Z')
};
const eyes=(kind)=>{
 let out='';
 for(const x of [31,49]){
  if(kind==='round')out+=circle(x,32,2.8);
  else if(kind==='capsule')out+=`<rect x="${x-2.6}" y="25" width="5.2" height="14" rx="2.6"/>`;
  else if(kind==='sleepy')out+=path(`M${x-5} 30Q${x} 27 ${x+5} 30V33H${x+1}V36Q${x-2} 37 ${x-2} 33H${x-5}Z`);
  else if(kind==='side')out+=circle(x,32,5)+`<g fill="#fff">${circle(x-1.5,31,3)}</g>`+circle(x-3,31,2.2);
  else if(kind==='oval')out+=`<g fill="#fff" stroke="${ink}" stroke-width=".7">${ellipse(x,32,4.5,6)}</g>`+ellipse(x,32,2.5,4);
  else{out+=kind==='glossy'?circle(x,32,5.1):ellipse(x,32,kind==='star'?4:3,kind==='star'||kind==='sparkle'?6.5:4.6);
   if(kind==='lash')out+=path(x===31?'M29 28L22 31L29 33Z':'M51 28L58 31L51 33Z');
   if(kind==='star')out+=`<g fill="#fff">${path(`M${x} 27L${x+1.2} 30L${x+3.4} 31L${x+1.2} 32L${x} 35L${x-1.2} 32L${x-3.4} 31L${x-1.2} 30Z`)}</g>`;
   if(kind==='sparkle'||kind==='glossy')out+=`<g fill="#fff">${circle(x-.6,kind==='glossy'?29:30,kind==='glossy'?1.6:1.1)}</g>`;
  }
 }
 return `<g fill="${ink}">${out}</g>`;
};
const blankHead=`<g fill="${base}">${circle(40,35,21)}</g>`;
const plainEyes=`<g fill="${ink}">${ellipse(33,36,2,3)}${ellipse(47,36,2,3)}</g>`;
const glasses={
 none:'',round:'<ellipse cx="30" cy="34" rx="9" ry="11"/><ellipse cx="50" cy="34" rx="9" ry="11"/><path d="M39 33Q40 30 41 33M18 33H21M59 33H62"/>',
 monocle:'<ellipse cx="31" cy="33" rx="10" ry="11"/><path d="M39 41Q47 59 61 53"/>',
 square:'<rect x="17" y="25" width="21" height="17" rx="4"/><rect x="42" y="25" width="21" height="17" rx="4"/><path d="M38 30H42M14 27H17M63 27H66"/>',
 sunglasses:'<path d="M15 25H37L36 40Q28 45 19 40ZM43 25H65L61 40Q51 45 44 40ZM37 28H43" fill="'+ink+'"/>',
 catEye:'<path d="M13 25L37 29L35 41Q22 46 18 34ZM43 29L67 25L62 34Q58 46 45 41ZM37 30Q40 27 43 30" fill="'+ink+'"/>',
 roundSun:'<circle cx="28" cy="33" r="10" fill="'+ink+'"/><circle cx="52" cy="33" r="10" fill="'+ink+'"/><path d="M38 30Q40 26 42 30"/>'
};
const heads={
 none:'',headphones:'<path d="M17 35C14 2 66 2 63 35" fill="none" stroke-width="3"/><rect x="13" y="29" width="9" height="20" rx="4"/><rect x="58" y="29" width="9" height="20" rx="4"/>',
 beret:'<path d="M18 26C10 11 41 0 56 11Q66 18 57 20Q35 16 21 29Z"/><path d="M39 8Q38 3 41 3" fill="none" stroke-width="2.4"/>',
 beanie:'<path d="M19 24C17 1 63 1 61 24Z"/><rect x="17" y="20" width="46" height="8" rx="4"/>',
 cap:'<path d="M20 24C21 4 58 3 61 23Z"/><path d="M21 23Q51 20 69 28Q71 34 50 30L23 27Z"/>',
 bowler:'<path d="M25 24V18C25 0 55 0 55 18V24Z"/><ellipse cx="40" cy="24" rx="22" ry="5"/>',
 topHat:'<path d="M27 23L24 6Q40 2 56 6L53 23Z"/><ellipse cx="40" cy="24" rx="23" ry="5"/>',
 tuft:'<ellipse cx="32" cy="13" rx="5" ry="8" transform="rotate(-25 32 13)"/><ellipse cx="40" cy="9" rx="5" ry="10"/><ellipse cx="48" cy="13" rx="5" ry="8" transform="rotate(25 48 13)"/>',pom:circle(40,10,8),flower:`<g fill="#e9c75c">${flower(24,18,7)}</g><circle cx="24" cy="18" r="2.3" fill="#8c7249"/>`,
 wizard:'<path d="M40 2L57 26H22Z"/><ellipse cx="40" cy="26" rx="23" ry="4"/><path d="M40 13L42 16L45 17L42 18L41 21L40 18L37 17L39 16Z" fill="#ead69a" stroke="none"/>',
 crown:'<path d="M23 24L20 11L31 17L40 5L49 17L60 11L57 24Z" fill="#c7a85d"/><circle cx="20" cy="10" r="2.5" fill="#c7a85d"/><circle cx="40" cy="5" r="2.5" fill="#c7a85d"/><circle cx="60" cy="10" r="2.5" fill="#c7a85d"/>'
};
const necks={none:'',bow:'<path d="M39 48L25 42Q22 48 25 55L39 50ZM41 48L55 42Q58 49 55 55L41 50Z"/><circle cx="40" cy="49" r="3"/>',scarf:'<path d="M24 46Q40 51 57 45V53Q43 57 24 52Z"/><path d="M44 52V62L51 61L50 52Z"/>',collar:'<path d="M24 47Q40 54 56 47" fill="none" stroke-width="4"/><circle cx="40" cy="54" r="3" fill="#c2a259"/>'};
const props={none:'<path d="M28 43L52 20" stroke="#bec6d2" stroke-width="2"/>',macbook:'<rect x="21" y="17" width="38" height="26" rx="3" fill="#b8c1cd"/><path d="M16 44H64L60 49H20Z" fill="#8e9baa"/><circle cx="40" cy="30" r="3" fill="#e8edf4"/>',flowers:'<path d="M32 25L41 55L49 25" fill="none" stroke="#849c7a" stroke-width="3"/>'+`<g fill="#dca2b4">${flower(28,22,9)}${flower(51,22,8)}</g><g fill="#e5c57c">${flower(40,15,9)}</g>`,wand:'<path d="M25 54L49 26" stroke="#ab945e" stroke-width="4"/><path d="M51 9L55 20L66 20L57 27L60 38L50 31L40 38L43 27L35 20L47 20Z" fill="#d9bd6e"/>',tea:'<path d="M30 24H53L49 54H33Z" fill="#d8b296"/><path d="M43 11L42 32" stroke="#677b92" stroke-width="3"/><rect x="28" y="23" width="27" height="4" rx="2" fill="#8b6e61"/><g fill="#664c48"><circle cx="38" cy="48" r="2"/><circle cx="44" cy="49" r="2"/></g>',camera:'<rect x="19" y="23" width="42" height="28" rx="5" fill="#46566b"/><rect x="27" y="17" width="13" height="7" rx="2" fill="#46566b"/><circle cx="40" cy="36" r="9" fill="#b8c3d0"/><circle cx="40" cy="36" r="6" fill="#273344"/>',book:'<path d="M16 18Q30 15 40 24Q49 15 64 18V49Q50 47 40 55Q30 47 16 49Z" fill="#a4b1bf"/><path d="M40 25V54" stroke="#fff" stroke-width="2"/>'};
export function pickerIllustration(pathName,id,color='#6383ec'){
 let body;
 if(pathName==='shape'){
  const channels=(color.match(/[a-f\d]{2}/gi)||[]).map(c=>parseInt(c,16));
  const light=channels.length===3&&(channels[0]*.2126+channels[1]*.7152+channels[2]*.0722)>205;
  body=`<g fill="${color}"${light?' stroke="#aeb8c9" stroke-width=".9" stroke-linejoin="round"':''}>${schematicShapes[id]||schematicShapes.sphere}</g>`;
 }
 else if(pathName==='eyes')body=blankHead+eyes(id);
 else if(pathName==='accessories.face')body=blankHead+(['sunglasses','catEye','roundSun'].includes(id)?'':plainEyes)+`<g fill="none" stroke="${ink}" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">${glasses[id]||''}</g>`;
 else if(pathName==='accessories.head')body=blankHead+plainEyes+`<g fill="${ink}" stroke="${ink}" stroke-width=".5" stroke-linejoin="round">${heads[id]||''}</g>`;
 else if(pathName==='accessories.neck')body=blankHead+plainEyes+`<g fill="${ink}" stroke="${ink}" stroke-width=".5" stroke-linejoin="round">${necks[id]||''}</g>`;
 else body=`<g stroke-linecap="round" stroke-linejoin="round">${props[id]||props.none}</g>`;
 return `<svg viewBox="0 0 80 64" aria-hidden="true" focusable="false">${body}</svg>`;
}
