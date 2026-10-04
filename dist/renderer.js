/* Dot Icon Studio — compositional, parameter-driven SVG artwork. No external assets. */
(function (global) {
  'use strict';
  const BODIES = ['sphere','circle','ring','roundedsquare','roundedcube','cuboid','capsule','drop','cloud','star','mushroom','spirit','shiba','bear','lion','cloudspirit','rat','ox','tiger','rabbit','dragon','snake','horse','goat','monkey','rooster','dog','pig','cat','penguin','human','robot','monster'];
  const GEOMETRY = new Set(['sphere','circle','ring','roundedsquare','roundedcube','cuboid','capsule','drop','cloud','star','mushroom','spirit','cloudspirit']);
  const ENUMS = {
    ears:['auto','none','round','pointed','long','floppy'],tail:['auto','none','curl','long','puff'],horns:['auto','none','short','unicorn'],wings:['none','feather','bat'],marking:['auto','none','freckles','spots','stripes'],brows:['none','soft','straight','angled'],highlights:['none','single','double'],
    eyes:['capsule','dot','oval','sparkle','visor','natural'],expression:['calm','happy','curious','sleepy','focused'],faceShape:['round','oval','square','pear'],nose:['none','dot','button','triangle','long'],mouth:['none','smile','tiny','open'],hair:['none','short','bob','long','curly','quiff','bald'],limbs:['none','feet','arms','both','hover'],hat:['none','beanie','cap','beret','magichat','mushroomhat','crown'],glasses:['none','round','square','sunglasses','heart'],clothing:['none','sweater','suit','hoodie','dress'],pose:['neutral','sit','wave','fold','chin','magic','crossleg'],action:['idle','breathe','blink','look','puzzled','happy','bounce','sleep','listen','work','skate','magic','rotate'],effect:['none','halo','stars','mist','energy'],scene:['transparent','solid','gradient','desk','cafe','bedroom','library','forest','mushroomhouse','rink','underwater','space','festive'],previewFinish:['soft','flat','outline'],bodyplan:['blob','chibi','biped','quad']
  };
  const DEFAULTS={ears:'auto',earSize:1,tail:'auto',tailSize:1,horns:'auto',wings:'none',marking:'auto',markingColor:'#B88D73',faceY:0,eyeY:0,eyeTilt:0,pupilSize:1,highlights:'single',heterochromia:false,eyeColorRight:'#87B5A4',brows:'none',blush:0,noseSize:1,noseY:0,mouthSize:1,mouthY:0,motionIntensity:.7,signText:'Hello',
    body:'sphere',color:'#3064ED',eyeColor:'#FFFFFF',skinColor:'#E7BFA6',hairColor:'#453B4A',eyes:'capsule',expression:'calm',faceShape:'round',bodyWidth:1,bodyHeight:1,headSize:1,eyeSpacing:42,eyeSize:1,nose:'none',mouth:'none',hair:'none',limbs:'none',limbLength:1,hat:'none',glasses:'none',clothing:'none',pose:'neutral',action:'idle',tempo:1,effect:'none',scene:'transparent',previewFinish:'soft',bodyplan:'blob',accessories:[]};
  let serial=0;
  const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
  const num=(v,d,lo,hi)=>Number.isFinite(+v)?Math.min(hi,Math.max(lo,+v)):d;
  const hex=(v,d)=>/^#[0-9a-f]{6}$/i.test(String(v))?v:d;
  const shade=(c,n)=>'#'+[1,3,5].map(i=>Math.max(0,Math.min(255,parseInt(c.slice(i,i+2),16)+n)).toString(16).padStart(2,'0')).join('');
  function normalize(input){
    const x=input||{},s={...DEFAULTS,...x};
    s.body=BODIES.includes(s.body)?s.body:'sphere';
    if(['pet','sticker'].includes(s.output))s.scene='transparent';
    for(const [key,values] of Object.entries(ENUMS))s[key]=values.includes(s[key])?s[key]:DEFAULTS[key];
    for(const k of ['color','eyeColor','skinColor','hairColor','eyeColorRight','markingColor'])s[k]=hex(s[k],DEFAULTS[k]);
    for(const [k,lo,hi] of [['bodyWidth',.8,1.2],['bodyHeight',.8,1.2],['headSize',.85,1.2],['eyeSpacing',24,68],['eyeSize',.65,1.35],['limbLength',.7,1.4],['tempo',.65,1.6],['earSize',.7,1.3],['tailSize',.7,1.3],['faceY',-16,16],['eyeY',-12,12],['eyeTilt',-18,18],['pupilSize',.5,1.3],['blush',0,1],['noseSize',.6,1.4],['noseY',-10,10],['mouthSize',.6,1.4],['mouthY',-10,10],['motionIntensity',.2,1.4]])s[k]=num(s[k],DEFAULTS[k],lo,hi);
    s.accessories=Array.isArray(x.accessories)?[...new Set(x.accessories)].filter(v=>['console','sign','scarf','bow','collar','headphones','cloak','phone','macbook','tea','book','wand','pajamas','skates','magichat','mushroomhat','glasses','sunglasses'].includes(v)):[];
    if(s.hat==='none')s.hat=s.accessories.includes('magichat')?'magichat':s.accessories.includes('mushroomhat')?'mushroomhat':'none';
    if(s.glasses==='none')s.glasses=s.accessories.includes('sunglasses')?'sunglasses':s.accessories.includes('glasses')?'round':'none';
    s.heterochromia=!!s.heterochromia;s.signText=String(s.signText||'').slice(0,16);
    return s;
  }
  const group=(part,content,attrs='')=>`<g data-part="${part}" ${attrs}>${content}</g>`;
  const path=(d,fill,attrs='')=>`<path d="${d}" fill="${fill}" ${attrs}/>`;
  const ellipse=(cx,cy,rx,ry,fill,attrs='')=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" ${attrs}/>`;
  const circle=(cx,cy,r,fill,attrs='')=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${attrs}/>`;
  const rect=(x,y,w,h,r,fill,attrs='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${attrs}/>`;
  const line=(d,color,width,attrs='')=>path(d,'none',`stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${attrs}`);
  const star=(x,y,r,fill,attrs='')=>path(`M${x} ${y-r}Q${x+r*.2} ${y-r*.16} ${x+r} ${y}Q${x+r*.2} ${y+r*.16} ${x} ${y+r}Q${x-r*.2} ${y+r*.16} ${x-r} ${y}Q${x-r*.2} ${y-r*.16} ${x} ${y-r}Z`,fill,attrs);

  function render(input,options={}){
    const s=normalize(input),id='dot_'+String(options.id||++serial).replace(/[^a-zA-Z0-9_-]/g,'_')+'_',outline=s.previewFinish==='outline',soft=s.previewFinish==='soft';
    const ink=shade(s.color,-92),light=shade(s.color,45),dark=shade(s.color,-30),cream='#FFF1D9',pink='#F3B5BE';
    const bodyFill=soft?`url(#${id}body)`:s.color,skinFill=soft?`url(#${id}skin)`:s.skinColor;
    const edge=outline?`stroke="${ink}" stroke-width="3" stroke-linejoin="round"`:'';
    const fillAttrs=outline?edge:'';
    const f=(d,c=bodyFill,a='')=>path(d,c,`${fillAttrs} ${a}`),e=(x,y,rx,ry,c=bodyFill,a='')=>ellipse(x,y,rx,ry,c,`${fillAttrs} ${a}`),r=(x,y,w,h,rx,c=bodyFill,a='')=>rect(x,y,w,h,rx,c,`${fillAttrs} ${a}`);
    const isHuman=s.body==='human',isRobot=s.body==='robot',isAnimal=!GEOMETRY.has(s.body)&&!isHuman&&!isRobot;
    const plan=isHuman?'biped':isAnimal?(s.bodyplan==='quad'?'quad':['biped','chibi'].includes(s.bodyplan)?'biped':'blob'):s.bodyplan;
    const tall=isHuman||(isAnimal&&plan==='biped')||isRobot&&plan==='biped';
    const quad=isAnimal&&plan==='quad'&&s.body!=='snake';
    const ring=s.body==='ring',mush=s.body==='mushroom';
    const headX=quad?-19:0,headY=tall?-58:quad?-38:0,headScale=tall?((s.bodyplan==='biped'?.69:.79)*s.headSize):quad?(.83*s.headSize):1;
    let top=-91,bottom=92,half=91,faceY=-6,faceScale=1;
    if(s.body==='capsule'){top=-114;bottom=111;half=67;faceY=-15;}
    if(s.body==='cuboid'){top=-68;bottom=78;half=111;faceY=0;}
    if(s.body==='drop'){top=-117;bottom=92;faceY=17;}
    if(s.body==='cloud'||s.body==='cloudspirit'){top=-88;bottom=65;half=114;faceY=2;}
    if(s.body==='star'){top=-109;bottom=104;half=108;faceY=1;}
    if(mush){top=-110;bottom=109;half=106;faceY=64;faceScale=.85;}
    if(ring){top=-98;bottom=98;half=98;faceY=-62;faceScale=.76;}
    if(s.body==='snake'){top=-88;bottom=108;half=102;faceY=-15;}
    if(isAnimal||isHuman){top=-85;bottom=86;half=82;faceY=-1;}
    if(isRobot){top=-84;bottom=88;half=82;faceY=-7;}
    const garmentY=tall?25:quad?25:bottom*.40,baseY=tall?103:quad?94:bottom-6;
    const headTop=headY+top*headScale,headHalf=half*headScale;
    const anim=options.animated!==false,playing=options.playing!==false,action=s.action;
    const duration=n=>(n/s.tempo).toFixed(3)+'s',amp=s.motionIntensity;
    const earMotion=`class="${id}ears" data-motion="ears"`,tailMotion=`class="${id}tail" data-motion="tail"`;
    const defs=`<defs><radialGradient id="${id}body" cx="29%" cy="18%" r="90%"><stop offset="0" stop-color="${shade(s.color,43)}"/><stop offset=".45" stop-color="${shade(s.color,13)}"/><stop offset=".8" stop-color="${s.color}"/><stop offset="1" stop-color="${dark}"/></radialGradient><radialGradient id="${id}skin" cx="32%" cy="20%" r="85%"><stop stop-color="${shade(s.skinColor,24)}"/><stop offset="1" stop-color="${s.skinColor}"/></radialGradient><linearGradient id="${id}scene" x2="1" y2="1"><stop stop-color="#EEF4FF"/><stop offset="1" stop-color="#F1EAFE"/></linearGradient><linearGradient id="${id}night" x2="0" y2="1"><stop stop-color="#273458"/><stop offset="1" stop-color="#52668D"/></linearGradient><linearGradient id="${id}water" x2="0" y2="1"><stop stop-color="#CDF5F4"/><stop offset="1" stop-color="#69B6CD"/></linearGradient><linearGradient id="${id}glass" x2="0" y2="1"><stop stop-color="#FFFFFF" stop-opacity=".4"/><stop offset="1" stop-color="#FFFFFF" stop-opacity=".06"/></linearGradient><radialGradient id="${id}glow"><stop stop-color="#D6C8FF" stop-opacity=".45"/><stop offset="1" stop-color="#D6C8FF" stop-opacity="0"/></radialGradient></defs>`;
    const motion=anim?`<style>
      #${id}stage [data-motion]{animation-play-state:${playing?'running':'paused'};transform-box:view-box;transform-origin:0px 45px}
      @keyframes ${id}breathe{0%,100%{transform:translateY(0)}50%{transform:translateY(${-4*amp}px)}}
      @keyframes ${id}bounce{0%,100%{transform:translateY(0)}45%,55%{transform:translateY(${-25*amp}px)}}
      @keyframes ${id}sway{0%,100%{transform:rotate(${-3*amp}deg)}50%{transform:rotate(${3*amp}deg)}}
      @keyframes ${id}puzzle{0%,15%,100%{transform:rotate(0deg)}38%,70%{transform:rotate(${-8*amp}deg)}}
      @keyframes ${id}listen{0%,50%,100%{transform:rotate(${-3*amp}deg) translateY(0)}25%,75%{transform:rotate(${3*amp}deg) translateY(3px)}}
      @keyframes ${id}skate{0%,100%{transform:translateX(-27px) rotate(${-3*amp}deg)}50%{transform:translateX(27px) rotate(${3*amp}deg)}}
      @keyframes ${id}turn{0%,100%{transform:rotate(-7deg) translateX(-5px)}50%{transform:rotate(7deg) translateX(5px)}}
      @keyframes ${id}ear{0%,100%{transform:rotate(0deg)}50%{transform:rotate(${3*amp}deg)}}
      @keyframes ${id}tailwag{0%,100%{transform:rotate(${-3*amp}deg)}50%{transform:rotate(${5*amp}deg)}}
      #${id}stage .${id}ears{${action!=='idle'?`animation:${id}ear ${duration(4)} ease-in-out infinite;`:''}transform-origin:0px -50px}
      #${id}stage .${id}tail{${action!=='idle'?`animation:${id}tailwag ${duration(3)} ease-in-out infinite;`:''}transform-origin:65px 64px}
      @keyframes ${id}blink{0%,39%,47%,100%{transform:scaleY(1)}43%{transform:scaleY(.06)}}
      @keyframes ${id}look{0%,15%,100%{transform:translateX(-5px)}45%,65%{transform:translateX(5px)}}
      @keyframes ${id}type{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
      @keyframes ${id}wave{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(9deg)}}
      @keyframes ${id}twinkle{0%,100%{opacity:.4;transform:translateY(0)}50%{opacity:1;transform:translateY(-5px)}}
      @keyframes ${id}mist{0%,100%{transform:translateX(-5px);opacity:.35}50%{transform:translateX(5px);opacity:.6}}
      #${id}stage .${id}avatar{${['breathe','bounce','puzzled','happy','sleep','listen','skate','magic','rotate'].includes(action)?`animation:${id}${({breathe:'breathe',bounce:'bounce',puzzled:'puzzle',happy:'sway',sleep:'breathe',listen:'listen',skate:'skate',magic:'breathe',rotate:'turn'})[action]} ${duration(({bounce:1.6,listen:1.8,sleep:5,magic:3,skate:3.4})[action]||3.6)} ease-in-out infinite;`:''}}
      #${id}stage .${id}eyes{${action==='blink'?`animation:${id}blink ${duration(3.8)} ease-in-out infinite;`:action==='look'?`animation:${id}look ${duration(3.7)} ease-in-out infinite;`:''}transform-origin:0px 0px}
      #${id}stage .${id}workhand{${action==='work'?`animation:${id}type ${duration(.8)} ease-in-out infinite;`:''}}
      #${id}stage .${id}wave{${s.pose==='wave'?`animation:${id}wave ${duration(1.4)} ease-in-out infinite;`:''}transform-origin:0px 0px}
      #${id}stage .${id}spark{animation:${id}twinkle ${duration(2.4)} ease-in-out infinite}
      #${id}stage .${id}mist{animation:${id}mist ${duration(5)} ease-in-out infinite}
      #${id}stage [data-motion]{animation-play-state:${playing?'running':'paused'}}
      @media(prefers-reduced-motion:reduce){#${id}stage [data-motion]{animation:none!important}}
    </style>`:'';

    function scene(){
      if(s.scene==='transparent')return '';
      let bg=rect(0,0,440,420,0,s.scene==='solid'?'#F0F3FA':`url(#${id}scene)`),objects='';
      if(['desk','cafe','library','bedroom'].includes(s.scene)){
        bg=rect(0,0,440,420,0,s.scene==='bedroom'?'#EEE7F3':'#F6F0E8');
        if(s.scene==='desk'||s.scene==='cafe')objects+=rect(28,34,139,171,12,'#DEEBED')+rect(38,44,119,150,8,'#F3FAFC')+line('M98 45V193M38 117H157','#D7E4E7',7)+path('M48 157Q77 119 105 152Q134 119 153 148V191H48Z','#D5E6E0');
        if(s.scene==='cafe')objects+=line('M313 0V52','#9F968D',3)+path('M280 91Q279 50 312 50Q346 50 344 91Z','#CBAE86')+ellipse(312,91,32,6,'#E7D9B8')+rect(348,226,37,66,4,'#D9D0BA')+path('M366 230Q328 202 343 190Q368 196 366 230M367 223Q391 195 397 208Q392 224 367 230','#92AAA1');
        if(s.scene==='desk')objects+=rect(333,238,29,51,5,'#D1B6A4')+line('M341 248L335 213M352 248L358 214','#9AAACA',5)+rect(31,277,53,11,3,'#BDCADA')+rect(36,264,47,12,3,'#D6BAAE');
        if(s.scene==='library'){
          objects+=rect(21,31,398,216,12,'#E6D9C6');
          for(let row=0;row<2;row++){objects+=rect(30,124+row*107,380,7,2,'#BAA58E');for(let i=0;i<11;i++)objects+=rect(39+i*32,53+row*105+(i%3)*8,20,71-(i%3)*8,3,['#A6BEB6','#C6A5A4','#B2BED3','#D5BE90'][i%4]);}
        }
        if(s.scene==='bedroom')objects+=rect(26,176,126,105,18,'#DACEE6')+rect(31,186,119,43,15,'#F9F3F6')+rect(309,213,88,78,9,'#DDCEBC')+path('M331 213L344 158H363L378 213Z','#EACBA4')+line('M353 214V240','#BCAE9C',5)+circle(75,67,21,'#FAF4D5');
        objects+=rect(0,296,440,124,0,s.scene==='bedroom'?'#DCCDDC':'#E5D5C1')+line('M0 296H440','#D5C5AF',3);
      }
      if(s.scene==='forest'||s.scene==='mushroomhouse'){
        bg=rect(0,0,440,420,0,'#E4EFEA');
        objects+=path('M0 314Q100 268 221 303Q338 263 440 307V420H0Z','#BFD7CB');
        for(const [x,y,k]of [[30,72,1],[392,48,1.2],[79,52,.6]])objects+=`<g transform="translate(${x} ${y}) scale(${k})">`+line('M0 43V240','#B6C9BB',16)+ellipse(0,29,45,92,'#C8DDD2')+line('M0 110L-24 88M0 152L22 126','#B6C9BB',6)+'</g>';
        if(s.scene==='mushroomhouse')objects+=rect(303,241,89,91,20,'#F4E5CA')+path('M286 247Q345 133 410 247Q346 270 286 247','#D7938C')+circle(329,220,10,'#FAE1CE')+circle(368,212,8,'#FAE1CE')+rect(336,278,26,54,13,'#B9A994');
        for(const [x,y]of [[54,317],[364,348],[83,358]])objects+=line(`M${x} ${y}v-15`,'#ABC1AC',4)+ellipse(x,y-20,13,7,'#EEE7BE')+circle(x+8,y-30,2,'#FFFBCE');
      }
      if(s.scene==='rink')objects+=path('M0 217Q220 171 440 217V420H0Z','#DAEDF4')+path('M0 221Q220 174 440 221V251Q220 207 0 251Z','#FBFEFF')+line('M0 225Q220 182 440 225','#C4D6DE',5)+ellipse(220,345,178,40,'none','stroke="#B6D3DF" stroke-width="2"')+line('M60 348L143 317M313 366L362 345','#F4FCFF',4);
      if(s.scene==='underwater'){
        bg=rect(0,0,440,420,0,`url(#${id}water)`);objects+=path('M34 0L125 0L222 420H137Z','#FFFFFF','opacity=".12"')+path('M286 0H321L294 420H241Z','#FFFFFF','opacity=".1"')+path('M0 366Q122 334 233 367Q329 344 440 360V420H0Z','#B2D6CA');
        for(const [x,y,rr]of [[61,101,10],[367,66,15],[391,171,7],[55,267,7]])objects+=circle(x,y,rr,'none','stroke="#E8FEFF" stroke-width="2" opacity=".6"');
        objects+=line('M36 377Q16 334 40 311M51 381Q73 344 61 322M397 382Q369 349 391 328','#80B7A8',9);
      }
      if(s.scene==='space'){
        bg=rect(0,0,440,420,0,`url(#${id}night)`);objects+=circle(220,169,148,'#1F2A48','stroke="#8D9CB4" stroke-width="14"')+circle(334,113,28,'#E2CEAF')+ellipse(334,113,45,8,'none','stroke="#C3B1A2" stroke-width="4" transform="rotate(-20 334 113)"');
        for(const [x,y]of [[104,116],[157,58],[294,50],[344,231],[117,239],[237,104]])objects+=star(x,y,3,'#E0E9FC');
        objects+=path('M0 344Q220 326 440 344V420H0Z','#8794AC')+line('M0 372H440','#667893',2);
      }
      if(s.scene==='festive'){
        objects+=line('M0 32Q220 117 440 32','#BFB5AE',2);
        for(let i=0;i<9;i++){let x=15+i*52,y=42+34*Math.sin(i/8*Math.PI);objects+=circle(x,y,7,['#F2C788','#E3AEBD','#AFCBC3'][i%3]);}
        for(const [x,y,a]of [[41,148,-15],[365,160,25],[65,248,40],[386,274,-30],[291,42,10]])objects+=rect(x,y,6,13,2,['#E8BF9C','#BBA9DC','#AAC8C0'][Math.abs(a)%3],`transform="rotate(${a} ${x} ${y})"`);
      }
      return group('scene',bg+objects+ellipse(220,355,100,13,'#344B6E','opacity=".08"'));
    }

    function characterShape(){
      let back='',shape='',detail='';
      function faceForm(rx,ry){
        if(s.faceShape==='oval')return e(0,0,rx*.89,ry*1.07);
        if(s.faceShape==='square')return r(-rx,-ry,rx*2,ry*2,rx*.44);
        if(s.faceShape==='pear')return f(`M0 ${-ry}C${-rx*.87} ${-ry} ${-rx*.82} ${-ry*.38} ${-rx} ${ry*.1}C${-rx*1.16} ${ry*1.18} ${rx*1.16} ${ry*1.18} ${rx} ${ry*.1}C${rx*.82} ${-ry*.38} ${rx*.87} ${-ry} 0 ${-ry}Z`);
        return e(0,0,rx,ry);
      }
      if(['sphere','circle'].includes(s.body))shape=faceForm(92,92);
      if(s.body==='ring')shape=f('M0-98A98 98 0 1 0 0 98A98 98 0 1 0 0-98ZM0-20A44 44 0 1 1 0 68A44 44 0 1 1 0-20Z',bodyFill,'fill-rule="evenodd"');
      if(s.body==='roundedsquare')shape=r(-89,-89,178,178,43);
      if(s.body==='roundedcube'){back=f('M-52-88H63Q97-88 97-53V55Q97 89 63 89H-49Z',dark);shape=r(-94,-93,175,175,39);detail=line('M-58-75H39Q60-75 65-60',light,3,'opacity=".5"');}
      if(s.body==='cuboid')shape=r(-112,-70,224,148,39);
      if(s.body==='capsule')shape=r(-68,-115,136,227,67);
      if(s.body==='drop')shape=f('M-7-115C-18-80-91-38-92 17C-95 121 88 126 92 23C94-29 39-73 9-113Q1-126-7-115Z');
      if(s.body==='cloud'||s.body==='cloudspirit')shape=f('M-80 65C-139 60-144-20-91-32C-99-95-20-121 16-74C56-115 112-63 99-25C151-5 127 68 78 67Z');
      if(s.body==='spirit')shape=s.faceShape==='round'?f('M-76 58C-115 14-84-91-14-94C67-119 103-34 86 30C72 104-33 109-76 58Z'):faceForm(88,94);
      if(s.body==='star')shape=f('M-13-96Q0-120 13-96L38-48L91-40Q118-36 98-15L59 24L68 78Q72 110 46 96L0 71L-47 97Q-74 111-68 80L-59 25L-99-14Q-119-36-91-40L-39-47Z');
      if(mush){shape=r(-48,-6,96,117,35,shade(s.color,67))+f('M-106-18C-97-145 96-145 106-18Q106 3 78 4H-78Q-106 3-106-18Z');detail=ellipse(0,-2,97,11,shade(s.color,-16))+circle(-58,-47,17,cream,'opacity=".85"')+circle(17,-76,20,cream,'opacity=".85"')+circle(69,-37,12,cream,'opacity=".85"');}
      if(s.body==='snake'){back=line('M52 9C124 42 114 94 40 99C-40 106-97 76-67 38C-50 17-24 37-34 59',dark,39)+line('M48 8C114 40 105 85 37 91C-33 98-83 76-62 44',s.color,31);shape=e(-8,-22,71,66);detail=line('M53 60L61 68M74 52L81 58',light,4);}
      if(isAnimal&&s.body!=='snake'){
        if(s.body==='horse')shape=e(0,3,70,87);else if(s.body==='penguin')shape=e(0,5,78,91);else shape=faceForm(83,84);
        const ear=(x,y,rx,ry,angle=0)=>e(x,y,rx,ry,bodyFill,angle?`transform="rotate(${angle} ${x} ${y})"`:'')+ellipse(x,y+1,rx*.55,ry*.55,shade(s.color,38));
        if(s.ears==='auto'&&(['cat','shiba','pig'].includes(s.body))){back+=f('M-78-36L-80-101Q-77-113-62-101L-28-72Z')+f('M28-72L62-101Q79-114 80-101L78-35Z');back+=path('M-66-75L-67-91L-46-76Z',s.body==='pig'?pink:shade(s.color,48))+path('M46-76L67-91L66-75Z',s.body==='pig'?pink:shade(s.color,48));}
        if(s.ears==='auto'&&(['bear','tiger','rat','lion'].includes(s.body))){const rr=s.body==='rat'?32:24;back+=ear(-58,-70,rr,rr)+ear(58,-70,rr,rr);}
        if(s.body==='monkey'){if(s.ears==='auto')back+=ear(-81,-7,27,29)+ear(81,-7,27,29);detail+=path('M0-44C-50-82-82-27-58 27C-38 69 40 69 60 24C83-30 48-82 0-44Z',cream);}
        if(s.ears==='auto'&&(s.body==='rabbit')){back+=ear(-38,-117,20,58,-9)+ear(38,-117,20,58,9);}
        if(s.ears==='auto'&&(s.body==='dog'))back+=e(-78,-23,26,60,dark,'transform="rotate(15 -78 -23)"')+e(78,-23,26,60,dark,'transform="rotate(-15 78 -23)"');
        if(s.body==='ox'||s.body==='goat'){if(s.horns==='auto')back+=f('M-42-69Q-100-73-79-118Q-79-89-46-99Z',cream)+f('M42-69Q100-73 79-118Q79-89 46-99Z',cream);if(s.ears==='auto')back+=ear(-77,-39,26,15,-15)+ear(77,-39,26,15,15);}
        if(s.body==='goat'){for(let i=0;i<7;i++)back+=e(-66+i*22,-65-13*Math.sin(i/6*Math.PI),23,23);detail+=line('M-39-69q11-15 21-1M-8-79q12-10 22 1M21-68q9-12 20-2',light,4);}
        if(s.body==='horse'){if(s.ears==='auto')back+=f('M-54-50L-55-119Q-37-116-27-67Z')+f('M25-64Q36-114 55-120L55-46Z');detail+=f('M-28-74Q-25-118 6-111Q42-106 30-75L8-49L3-79L-17-57Z',dark)+ellipse(0,37,52,35,shade(s.color,42));}
        if(s.body==='rooster'){back+=f('M-31-69Q-45-114-18-109Q-10-146 8-112Q38-127 37-83L29-67Z','#E59DA7');detail+=path('M-16 23Q0 6 16 23L0 39Z','#F4C86A');}
        if(s.body==='dragon'||s.body==='monster'){if(s.horns==='auto')back+=f('M-48-69Q-75-91-51-125Q-43-100-27-81Z',shade(s.color,52))+f('M28-81Q46-102 50-125Q76-94 47-68Z',shade(s.color,52));detail+=circle(-55,12,8,light,'opacity=".6"')+circle(55,12,8,light,'opacity=".6"');if(s.body==='dragon')detail+=ellipse(0,33,41,28,shade(s.color,40))+circle(-16,26,3,dark)+circle(16,26,3,dark);}
        if(s.body==='lion'){back=path('M0-107Q20-116 35-96Q60-103 72-78Q98-71 95-48Q116-29 101-7Q112 21 92 35Q88 62 66 62Q48 86 27 78Q0 97-20 81Q-44 91-62 69Q-91 68-93 42Q-116 23-104 0Q-116-27-98-45Q-102-73-76-81Q-67-109-41-100Q-20-120 0-107Z',dark,fillAttrs)+back;detail+=ellipse(0,29,43,31,cream);}
        if(['shiba','cat','dog','bear','tiger','pig','ox'].includes(s.body)){
          if(s.body==='shiba')detail+=path('M-76 2Q-40 3-21 30Q0 46 21 30Q42 3 76 2C70 62 35 82 0 81C-36 82-71 59-76 2Z',cream);
          else if(s.body==='pig')detail+=ellipse(0,29,32,23,shade(s.color,35))+circle(-11,29,4,dark)+circle(11,29,4,dark);
          else if(s.body==='ox')detail+=ellipse(0,31,48,31,shade(s.color,40))+circle(-18,31,4,dark)+circle(18,31,4,dark);
          else detail+=ellipse(0,31,s.body==='bear'?34:43,s.body==='bear'?25:27,cream);
        }
        if(s.body==='penguin')detail+=path('M0-51C-23-89-66-54-63-1C-76 91 74 97 64 1C67-56 21-88 0-51Z',cream)+path('M-13 19L13 19L0 31Z','#EDB75E');
        if(s.marking==='auto'&&s.body==='tiger')detail+=path('M-21-79L-12-53L-5-81M5-82L13-52L22-79M-79-27L-54-17L-78-7M79-27L54-17L78-7M-76 26L-57 31L-67 40M76 26L57 31L67 40Z',ink,'opacity=".7"');
        if(s.marking==='auto'&&s.body==='cat')detail+=path('M-18-81L-12-57L-5-82M7-82L14-59L23-79Z',dark)+line('M-51 26L-66 20M-50 35L-66 35M51 26L66 20M50 35L66 35',dark,2.5);
      }
      if(isHuman){
        back=s.ears==='auto'?e(-70,4,13,20,skinFill)+e(70,4,13,20,skinFill):'';
        const faces={round:()=>e(0,0,72,77,skinFill),oval:()=>e(0,0,66,84,skinFill),square:()=>r(-70,-76,140,148,35,skinFill),pear:()=>f('M0-80C-73-80-70-27-75 14C-80 90 81 94 75 14C70-27 73-80 0-80Z',skinFill)};
        shape=faces[s.faceShape]();
        detail='';
      }
      if(isRobot){back=r(-96,-26,20,52,9,dark)+r(76,-26,20,52,9,dark)+line('M0-84V-110',dark,7)+circle(0,-116,10,shade(s.color,45));shape=r(-81,-85,162,173,37);detail=r(-66,-42,132,79,25,'#273B57')+line('M-34 66H-10',dark,5)+circle(33,63,4,'#9AD1BF')+circle(46,63,4,'#EFC181');}
      return group('head-back',back,(isAnimal&&s.body!=='snake'||isHuman)?earMotion:'')+group('body-silhouette',shape)+group('species-markings',detail)+markings();
    }

    function tail(){
      if(s.tail==='none'||s.body==='snake')return '';
      if(s.tail!=='auto'){let t=s.tail==='puff'?circle(102,61,24,light):s.tail==='curl'?line('M65 61C142 81 154-18 110-9C81-3 96 32 117 19',dark,17):line('M65 61Q139 102 139-17',dark,16);return group('tail',group('tail-shape',t,`transform="translate(65 61) scale(${s.tailSize}) translate(-65 -61)"`),tailMotion)}
      if(!isAnimal)return '';
      let x=quad?76:65,y=quad?62:64,t='';
      if(['shiba','pig'].includes(s.body))t=line(`M${x} ${y}C${x+64} ${y+6} ${x+64} ${y-62} ${x+35} ${y-58}C${x+11} ${y-54} ${x+17} ${y-20} ${x+37} ${y-30}`,dark,s.body==='shiba'?23:9);
      if(['cat','tiger','lion','monkey','rat','dragon','dog','horse','ox'].includes(s.body)){
        t=line(`M${x} ${y}Q${x+60} ${y+13} ${x+52} ${y-56}`,dark,s.body==='rat'?7:s.body==='dragon'?25:13);
        if(s.body==='lion'||s.body==='horse'||s.body==='ox')t+=ellipse(x+52,y-59,12,18,dark);
        if(s.body==='tiger')t+=line(`M${x+45} ${y+1}l4-10M${x+54} ${y-21}h-12M${x+54} ${y-44}h-11`,ink,5);
        if(s.body==='dragon')t+=path(`M${x+45} ${y-20}l-13-12 14-5M${x+47} ${y-41}l-10-10 13-4`,light);
      }
      if(s.body==='rabbit'||s.body==='bear')t=circle(x+16,y+3,s.body==='rabbit'?18:12,light);
      if(s.body==='rooster')t=path(`M${x} ${y}Q${x+76} ${y-58} ${x+55} ${y-74}Q${x+26} ${y-80} ${x+20} ${y-25}Q${x+19} ${y-71} ${x-3} ${y-66}Q${x-16} ${y-48} ${x} ${y}Z`,dark);
      return group('tail',group('tail-shape',t,`transform="translate(65 61) scale(${s.tailSize}) translate(-65 -61)"`),tailMotion);
    }

    function anatomy(){
      let ears='',horns='';const y=top+20,x=Math.min(half*.65,64),c=isHuman?s.skinColor:bodyFill;
      for(const sign of [-1,1]){
        let a='';if(s.ears==='round')a=e(sign*x,y,25,28,c)+ellipse(sign*x,y,13,17,pink);
        if(s.ears==='pointed')a=f(`M${sign*(x-23)} ${y+10}L${sign*x} ${y-63}Q${sign*(x+9)} ${y-72} ${sign*(x+28)} ${y+24}Z`,c);
        if(s.ears==='long')a=e(sign*x,y-31,17,58,c,`transform="rotate(${sign*12} ${sign*x} ${y})"`)+ellipse(sign*x,y-34,8,37,pink);
        if(s.ears==='floppy')a=e(sign*(half-2),y+52,23,58,dark,`transform="rotate(${-sign*13} ${sign*(half-2)} ${y+52})"`);
        ears+=group('ear-'+(sign<0?'left':'right'),a,`transform="translate(${sign*x} ${y}) scale(${s.earSize}) translate(${-sign*x} ${-y})"`);
        if(s.horns==='short')horns+=f(`M${sign*25} ${top+16}Q${sign*47} ${top-60} ${sign*51} ${top-49}L${sign*66} ${top+28}Z`,cream);
      }
      if(s.horns==='unicorn')horns=f(`M-18 ${top+15}L0 ${top-66}L18 ${top+15}Z`,cream)+line(`M-8 ${top-19}L8 ${top-12}M-12 ${top-1}L13 ${top+6}`,'#D9B5CB',3);
      return group('ears',ears,earMotion)+group('horns',horns);
    }
    function markings(){
      const c=s.markingColor;let a='';
      if(s.marking==='freckles')for(const sign of [-1,1])for(const [x,y]of [[36,17],[48,24],[31,29]])a+=circle(sign*x,y,2.8,c);
      if(s.marking==='spots')for(const [x,y,rx,ry]of [[-55,-48,15,11],[39,-58,13,9],[63,14,10,16],[-39,55,16,9]])a+=ellipse(x,y,rx,ry,c,'opacity=".65"');
      if(s.marking==='stripes')a=path('M-22-78L-12-47L-4-81M7-82L16-48L25-78M-78-24L-52-15L-77-5M78-24L52-15L77-5Z',c);
      return group('custom-markings',a);
    }
    function wings(){
      let w='';for(const sign of [-1,1]){const a=s.wings==='feather'?path('M53 25Q112-83 158-78Q152-33 123-7Q154-25 160-6Q139 44 75 72Z',shade(s.color,54),fillAttrs)+line('M77 45Q120-10 141-55',light,3):s.wings==='bat'?path('M50 31Q99-49 159-61L145 12Q115-7 112 42Q84 20 70 75Z',shade(s.color,-12),fillAttrs)+line('M59 33L145-43M59 33L112 42',light,3):'';w+=group('wing-'+sign,a,`transform="scale(${sign} 1)"`)}return group('wings',w);
    }

    function torso(){
      if(!tall&&!quad)return '';
      const tc=isHuman&&s.clothing==='none'?skinFill:bodyFill;
      if(quad)return group('torso',e(25,50,78,58)+ellipse(10,77,45,24,cream,'opacity=".75"'));
      return group('torso',r(-18,-8,36,44,13,isHuman?skinFill:bodyFill)+f('M-36 24Q0 10 36 24Q57 40 52 92Q0 120-52 92Q-57 41-36 24Z',tc)+(!isHuman?ellipse(0,69,30,35,cream,'opacity=".75"'):''));
    }

    function feet(){
      if(s.body==='snake'||s.limbs==='none'||s.limbs==='arms')return '';
      if(s.limbs==='hover')return group('hover-base',ellipse(0,baseY+30,76,12,'#CEDAF1')+ellipse(0,baseY+25,76,12,'#ECF2FD')+line('M-30 '+(baseY+26)+'H30','#AEBEDE',3));
      const skates=s.accessories.includes('skates'),L=20*s.limbLength,F=isHuman?(s.clothing==='none'?skinFill:'#59637B'):dark;
      let shapes='';
      if(s.pose==='crossleg'&&!quad){shapes=e(-23,baseY+12,38,16,F,'transform="rotate(-12 -23 '+(baseY+12)+')"')+e(24,baseY+12,38,16,F,'transform="rotate(12 24 '+(baseY+12)+')"');}
      else if(s.pose==='sit')shapes=e(-43,baseY+5,26,18,F)+e(43,baseY+5,26,18,F);
      else{
        const points=quad?[-56,-20,36,68]:[-34,34];
        for(const x of points)shapes+=r(x-13,baseY-10,26,L+13,12,F)+e(x+2,baseY+L,18,10,isHuman?'#ECEDF4':F);
      }
      if(skates)for(const x of quad?[-53,-20,37,68]:[-34,34])shapes+=line(`M${x-18} ${baseY+L+14}H${x+22}q8 0 10-6`,'#849DBB',3)+line(`M${x-9} ${baseY+L+6}v7M${x+10} ${baseY+L+6}v7`,'#849DBB',2);
      return group('feet',shapes);
    }

    function arms(){
      if(s.body==='snake'||quad||!['arms','both'].includes(s.limbs))return '';
      const x=tall?49:half-2,yy=tall?42:Math.min(27,bottom*.4),L=31*s.limbLength,ac=isHuman?skinFill:bodyFill;
      let left='',right='';
      if(s.pose==='fold')return group('arms',line(`M${-x} ${yy}Q-44 ${yy+32} 25 ${yy+30}`,isHuman?s.color:dark,20)+line(`M${x} ${yy}Q43 ${yy+40}-27 ${yy+23}`,isHuman?s.color:bodyFill,20)+e(-27,yy+23,12,10,ac)+e(25,yy+30,12,10,ac));
      left=e(-x-5,yy+L*.45,13,L*.7,ac,'transform="rotate(-15 '+(-x-5)+' '+(yy+L*.45)+')"');
      if(s.pose==='chin')right=line(`M${x} ${yy+18}Q${x+16} ${yy} ${headX+headHalf*.57} ${headY+18}`,isHuman?s.color:s.color,19)+e(headX+headHalf*.57,headY+17,13,12,ac);
      else if(s.pose==='wave'||s.pose==='magic')right=group('raised-arm',group('wave-hand',line(`M0 0Q${L*.45} -5 ${L*.3} ${-L}`,s.color,22)+e(L*.3,-L,14,16,ac),`class="${id}wave" data-motion="hand"`),`transform="translate(${x} ${yy})"`);
      else right=e(x+5,yy+L*.45,13,L*.7,ac,'transform="rotate(15 '+(x+5)+' '+(yy+L*.45)+')"');
      return group('arms',group('left-hand',left,`class="${id}workhand" data-motion="hand"`)+group('right-hand',right,`class="${id}workhand" data-motion="hand" style="animation-delay:-.3s"`));
    }

    function clothing(){
      if(s.clothing==='none'&&!s.accessories.includes('pajamas'))return '';
      const y=garmentY,w=tall?52:quad?71:Math.min(half*.79,85),base=tall?102:quad?93:bottom-3;
      const c=s.accessories.includes('pajamas')?'#C1CDEC':shade(s.color,-30);
      let result=f(`M${-w} ${y}Q0 ${y+15} ${w} ${y}L${w-3} ${base-7}Q0 ${base+15} ${-w+3} ${base-7}Z`,c);
      if(s.clothing==='dress')result=f(`M${-w*.58} ${y}Q0 ${y+8} ${w*.58} ${y}L${w+10} ${base+16}Q0 ${base+32} ${-w-10} ${base+16}Z`,shade(s.color,-22))+line(`M${-w*.65} ${y+28}Q0 ${y+37} ${w*.65} ${y+28}`,light,5);
      if(s.clothing==='sweater')result+=line(`M${-w+4} ${base-5}Q0 ${base+12} ${w-4} ${base-5}`,light,5,'opacity=".4"')+line(`M-17 ${y+5}Q0 ${y+23} 17 ${y+5}`,light,5);
      if(s.clothing==='suit')result+=path(`M-27 ${y+5}L0 ${base-14}L27 ${y+5}L17 ${base+1}H-17Z`,'#EDF0F4')+path(`M-5 ${y+28}H5L9 ${base-8}L0 ${base}L-9 ${base-8}Z`,'#7E8CAA')+path(`M-27 ${y+4}L-12 ${y+30}L-23 ${y+38}L-6 ${base}M27 ${y+4}L12 ${y+30}L23 ${y+38}L6 ${base}`,'none',`stroke="${light}" stroke-width="2"`);
      if(s.clothing==='hoodie')result+=line(`M-25 ${y+4}Q-33 ${y+24}-17 ${y+32}M25 ${y+4}Q33 ${y+24} 17 ${y+32}`,light,9)+line(`M-15 ${y+29}V${y+48}M15 ${y+29}V${y+48}`,'#F2F3F8',2.5)+path(`M-24 ${base-23}Q0 ${base-32} 24 ${base-23}L20 ${base-7}H-20Z`,dark);
      if(s.accessories.includes('pajamas'))result+=circle(0,y+28,2.7,'#FFFFFF')+circle(0,y+43,2.7,'#FFFFFF')+star(w*.55,y+30,6,'#F8F0CE');
      return group('clothing',result);
    }

    function hair(){
      if(s.hair==='none'||s.hair==='bald')return {back:'',front:''};
      const h=s.hairColor,t=top,w=Math.min(half,89),y=t+14;
      let back='',front='';
      if(s.hair==='long')back=f(`M${-w-4} ${y+55}Q${-w-12} ${t-15} 0 ${t-15}Q${w+13} ${t-15} ${w+4} ${y+55}L${w+12} ${bottom+4}Q0 ${bottom+25} ${-w-12} ${bottom+4}Z`,h);
      if(s.hair==='bob')back=f(`M${-w-3} ${y+46}Q${-w-10} ${t-16} 0 ${t-16}Q${w+10} ${t-16} ${w+3} ${y+46}L${w+5} 44Q${w-12} 57 ${w-28} 38L${-w+28} 38Q${-w+12} 57 ${-w-5} 44Z`,h);
      if(s.hair==='short'||s.hair==='long'||s.hair==='bob')front=f(`M${-w+1} ${y+42}Q${-w-14} ${t-12} 0 ${t-13}Q${w+11} ${t-13} ${w} ${y+43}L${w-17} ${y+25}L${w-27} ${y+44}Q17 ${y+30} 13 ${y+8}Q-12 ${y+38} ${-w+13} ${y+26}Z`,h);
      if(s.hair==='curly'){for(let i=0;i<7;i++)front+=e(-w+13+i*(w*2-26)/6,t+17-19*Math.sin(i/6*Math.PI),22,23,h);front+=e(-w+5,y+33,14,23,h)+e(w-5,y+33,14,23,h);}
      if(s.hair==='quiff')front=f(`M${-w} ${y+35}Q${-w-4} ${t+4}-22 ${t-2}Q-46 ${t-37}-6 ${t-36}Q18 ${t-40} 44 ${t-63}Q64 ${t-20} 36 ${t-7}Q${w+9} ${t+2} ${w-3} ${y+40}L${w-20} ${y+21}Q18 ${y+32} 9 ${y+4}Q-14 ${y+30} ${-w} ${y+35}Z`,h);
      return {back:group('hair-back',back),front:group('hair',front)};
    }

    function hat(){
      const y=top+7,w=Math.min(half,86),hat=s.hat;
      let result='';
      if(hat==='beanie')result=f(`M${-w} ${y}Q${-w+1} ${y-72} 0 ${y-72}Q${w-1} ${y-72} ${w} ${y}Z`,'#A6B8D6')+r(-w-3,y-14,w*2+6,28,11,'#BBC9E2')+circle(0,y-75,14,'#D2DEF0')+line(`M-50 ${y-39}v13M-25 ${y-49}v22M0 ${y-51}v24M25 ${y-49}v22M50 ${y-39}v13`,'#CFD9E9',2);
      if(hat==='cap')result=f(`M${-w} ${y}Q${-w+1} ${y-64} 0 ${y-64}Q${w-1} ${y-64} ${w} ${y}Z`,'#EAC9A1')+f(`M-19 ${y-1}Q34 ${y-10} ${w+23} ${y+7}Q${w+36} ${y+22} ${w+8} ${y+22}Q29 ${y+25}-19 ${y+8}Z`,'#D8B68C')+line(`M0 ${y-59}Q19 ${y-31} 16 ${y-5}`,'#D8B68C',2);
      if(hat==='beret')result=f(`M${-w} ${y-1}Q${-w-34} ${y-42}-23 ${y-59}Q${w+29} ${y-80} ${w+8} ${y-18}Q${w-14} ${y+13} ${-w} ${y-1}Z`,'#A695C6')+r(-w+6,y-7,w*2-12,17,7,'#8E7DB0')+line(`M9 ${y-60}L15 ${y-72}`,'#8E7DB0',6);
      if(hat==='magichat')result=f(`M${-w+9} ${y}L-24 ${y-115}Q-17 ${y-136} 3 ${y-125}L${w-6} ${y}Z`,'#7465AA')+path(`M-44 ${y-31}Q0 ${y-22} 52 ${y-33}L64 ${y-11}H-53Z`,'#D5BC83')+e(0,y+5,w+20,15,'#8B7CBD')+star(-15,y-82,10,'#F2DFA3');
      if(hat==='mushroomhat')result=f(`M${-w-14} ${y-2}Q${-w-14} ${y-85} 0 ${y-85}Q${w+14} ${y-85} ${w+14} ${y-2}Z`,'#DB9599')+e(0,y,w+15,14,'#F0DCC4')+circle(-42,y-37,14,'#FAE9D7')+circle(17,y-61,17,'#FAE9D7')+circle(64,y-20,10,'#FAE9D7');
      if(hat==='crown')result=f(`M-60 ${y+3}L-70 ${y-50}L-30 ${y-28}L0 ${y-68}L30 ${y-28}L70 ${y-50}L60 ${y+3}Z`,'#EFC86D')+r(-61,y-5,122,18,7,'#DDB558')+circle(0,y-14,7,'#C28EAA')+circle(-70,y-53,6,'#F6DA91')+circle(0,y-69,6,'#F6DA91')+circle(70,y-53,6,'#F6DA91');
      return group('hat',result);
    }

    function face(){
      const sf=(ring?.86:1)*faceScale*(tall||quad?1:s.headSize),gap=s.eyeSpacing/2,eye=s.eyeColor,es=s.eyeSize;
      const closed=action==='sleep'||action==='happy'||s.expression==='happy'&&action!=='work',happy=action==='happy'||s.expression==='happy';
      let eyes='';
      const sleepy=(s.expression==='sleepy'&&action!=='work')||action==='sleep';
      const focus=action==='work'||s.expression==='focused';
      for(const sign of [-1,1]){
        const eye=s.heterochromia&&sign===1?s.eyeColorRight:s.eyeColor;
        const x=sign*gap,y=action==='puzzled'&&sign===1?-4:s.expression==='curious'&&sign===1?-3:0;
        let item='';
        if(closed)item=line(`M-8 1Q0 ${happy?-10:7} 8 1`,eye,4.5);
        else if(s.eyes==='dot')item=circle(0,0,6.5,eye);
        else if(s.eyes==='capsule')item=rect(-6.5,-13,13,sleepy?17:focus?23:26,6.5,eye);
        else if(s.eyes==='sparkle')item=ellipse(0,0,10.5,sleepy?10:14,eye);
        else if(s.eyes==='visor')item=rect(-9,-8,18,16,5,eye);
        else if(s.eyes==='oval')item=ellipse(0,0,11.5,16,'#FFF7E5')+group('pupil',ellipse(focus?0:1,1,5.5*s.pupilSize,8*s.pupilSize,eye.toUpperCase()==='#FFFFFF'?'#344059':eye),'data-gaze="pupil"');
        else item=ellipse(0,0,7.5,sleepy?7:11,eye);
        if(!closed&&s.highlights!=='none'&&!['capsule','dot'].includes(s.eyes))item+=circle(-2,-4,2.3,'#FFFFFF','opacity=".94"')+(s.highlights==='double'?circle(3,3,1.4,'#FFFFFF','opacity=".7"'):'');
        eyes+=`<g transform="translate(${x} ${y+s.eyeY}) rotate(${sign*s.eyeTilt}) scale(${es})">${item}</g>`;
      }
      if(s.eyes==='visor'&&!isRobot)eyes=rect(-gap-16,-20,gap*2+32,40,17,shade(s.color,-70),'opacity=".75"')+eyes;
      let nose='',mouth='',glasses='';
      const noseY=ring?25:mush?25:23,mouthY=ring?38:mush?42:43;
      if(s.nose==='dot')nose=circle(0,noseY,3.4,ink);
      if(s.nose==='button')nose=ellipse(0,noseY,7,5.5,isHuman?shade(s.skinColor,-20):ink)+ellipse(-1,noseY-2,2,1,light,'opacity=".5"');
      if(s.nose==='triangle')nose=path(`M-7 ${noseY-3}Q0 ${noseY-7} 7 ${noseY-3}L0 ${noseY+5}Z`,ink);
      if(s.nose==='long')nose=path(`M-2 ${noseY-8}Q-8 ${noseY+6} 0 ${noseY+7}L7 ${noseY+5}`,'none',`stroke="${isHuman?shade(s.skinColor,-35):ink}" stroke-width="3" stroke-linecap="round"`);
      if(s.mouth==='smile')mouth=line(`M-10 ${mouthY}Q0 ${mouthY+9} 10 ${mouthY}`,ink,2.8);
      if(s.mouth==='tiny')mouth=line(`M-4 ${mouthY}H4`,ink,2.8);
      if(s.mouth==='open')mouth=ellipse(0,mouthY,6,8,ink)+ellipse(0,mouthY+4,3.5,2,pink);
      const gr=16,gy=-1,gc='#48536F';
      if(s.glasses!=='none'){
        const gw=Math.max(28,Math.min(35,gap*1.7)),gh=s.glasses==='heart'?29:31;
        for(const sign of [-1,1]){
          const x=sign*gap,lens=s.glasses==='sunglasses'?'#303D59':`url(#${id}glass)`;
          if(s.glasses==='round')glasses+=circle(x,gy,gr,lens,`stroke="${gc}" stroke-width="3"`);
          else if(s.glasses==='heart')glasses+=path(`M${x} 16C${x-31}-5 ${x-12}-26 ${x}-11C${x+12}-26 ${x+31}-5 ${x} 16Z`,'#EFBDC8',`fill-opacity=".35" stroke="#B97792" stroke-width="3"`);
          else glasses+=rect(x-gw/2,gy-gh/2,gw,gh,s.glasses==='sunglasses'?7:5,lens,`stroke="${gc}" stroke-width="3"`);
        }
        glasses+=line(`M${-gap+gr} -3Q0-10 ${gap-gr}-3`,gc,3)+line(`M${-gap-gr} -7l-9-3M${gap+gr}-7l9-3`,gc,3);
      }
      let brows='',blush='';for(const sign of [-1,1]){const x=sign*gap,y=s.eyeY-25;if(s.brows!=='none')brows+=line(`M${x-9} ${y+(s.brows==='angled'?sign*4:0)}Q${x} ${y-(s.brows==='soft'?7:0)} ${x+9} ${y-(s.brows==='angled'?sign*4:0)}`,s.hairColor,3);if(s.blush>0)blush+=ellipse(sign*(gap+11),25,11,6,pink,`opacity="${s.blush}"`)}
      return group('face',`<g transform="translate(0 ${faceY+s.faceY}) scale(${sf})">`+group('blush',blush)+group('brows',brows)+group('gaze',group('eyes',eyes,`class="${id}eyes" data-motion="eyes"`),'data-gaze="face"')+group('nose',nose,`transform="translate(0 ${noseY+s.noseY}) scale(${s.noseSize}) translate(0 ${-noseY})"`)+group('mouth',mouth,`transform="translate(0 ${mouthY+s.mouthY}) scale(${s.mouthSize}) translate(0 ${-mouthY})"`)+group('glasses',glasses,`transform="translate(0 ${s.eyeY})"`)+'</g>');
    }

    function accessories(){
      let front='',back='';
      const y=tall?20:Math.max(faceY+50,bottom*.58),w=tall?39:half*.7;
      if(s.accessories.includes('cloak'))back=f(`M${-w} ${y-16}L${-w-34} ${baseY+17}Q0 ${baseY+35} ${w+34} ${baseY+17}L${w} ${y-16}Z`,'#9381BA');
      if(s.accessories.includes('scarf'))front+=f(`M${-w} ${y-7}Q0 ${y+6} ${w} ${y-7}L${w} ${y+11}Q0 ${y+27} ${-w} ${y+11}Z`,'#E5B59C')+r(15,y+13,20,43,6,'#D79F86')+line(`M19 ${y+47}H30`,'#F3D4C1',3);
      if(s.accessories.includes('collar'))front+=line(`M${-w} ${y+3}Q0 ${y+18} ${w} ${y+3}`,'#BCA8CF',10)+circle(0,y+16,9,'#E5CB88')+circle(0,y+16,3,'#F5E5B5');
      if(s.accessories.includes('bow'))front+=path(`M0 ${y+9}Q-39 ${y-13}-35 ${y+7}Q-39 ${y+31} 0 ${y+14}Q39 ${y+31} 35 ${y+7}Q39 ${y-13} 0 ${y+9}Z`,'#D9A5BA')+circle(0,y+12,8,'#C88AA7');
      if(s.accessories.includes('headphones')){
        const yy=headY,hh=Math.min(headHalf,92);
        front+=line(`M${headX-hh-5} ${yy+8}V${yy-22}C${headX-hh-5} ${headTop-27} ${headX+hh+5} ${headTop-27} ${headX+hh+5} ${yy-22}V${yy+8}`,'#465371',9)+rect(headX-hh-15,yy-19,23,47,10,'#8191B4')+rect(headX+hh-8,yy-19,23,47,10,'#8191B4')+line(`M${headX+hh+8} ${yy+24}Q${headX+hh+6} ${yy+42} ${headX+hh-9} ${yy+42}`,'#465371',3);
      }
      const props=s.accessories.filter(a=>['phone','tea','book','wand','console','sign'].includes(a));
      props.forEach((a,i)=>{
        const x=i%2===0?102:-125,y0=18+Math.floor(i/2)*63;
        let item='';
        if(a==='phone')item=r(0,0,28,48,7,'#4C5973')+rect(4,5,20,33,3,'#B3D9E9')+rect(9,3,10,3,1.5,'#4C5973')+line('M11 43H17','#A3AFC5',2);
        if(a==='tea')item=line('M29 11C48 6 48 35 29 33','#CFB49D',6)+path('M0 4H30V31Q15 46 0 31Z','#F5E4CF')+ellipse(15,5,15,4,'#D1B593')+ellipse(15,4,11,2,'#A5AD82')+line('M8-8Q2-16 9-22M22-8Q16-16 23-22','#D0DBE8',2.5);
        if(a==='book')item=r(-3,-2,36,49,5,'#A5B6A7')+rect(2,0,27,44,2,'#EFE9DB')+rect(-4,-3,33,45,4,'#A5B6A7')+line('M3 1V38','#D5DDD0',3)+star(16,15,6,'#EDF0D6');
        if(a==='wand')item=line('M9 13V64','#9B85B5',6)+path('M9-17L16-5L30-3L20 7L22 21L9 15L-4 21L-2 7L-12-3L2-5Z','#E9CC83');
        if(a==='console')item=rect(-12,0,62,34,11,'#667795')+rect(1,5,28,23,3,'#C2E5E3')+line('M-6 14H-1M-3.5 11V17','#E0E7F2',2)+circle(37,11,2.5,'#F1CED3')+circle(41,20,2.5,'#F1DDA8');
        if(a==='sign')item=line('M14 32V75','#AD957D',5)+rect(-29,-5,86,43,8,'#F8E9CE',`stroke="#CFB68E" stroke-width="2"`)+`<text x="14" y="20" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${s.signText.length>8?7:10}" fill="#675646">${esc(s.signText)}</text>`;
        front+=group('prop-'+a,item,`transform="translate(${x} ${y0}) rotate(${i%2===0?8:-9})"`);
      });
      if(s.accessories.includes('macbook'))front+=group('prop-macbook',path('M-76 63H76L67 120H-67Z','#B6C5D8',fillAttrs)+path('M-79 119H79L87 127Q88 134 76 134H-76Q-88 134-87 127Z','#D7E0EB')+rect(-66,71,132,2,1,'#DCE6F0')+circle(0,93,7,'#D9E3EF','opacity=".8"'));
      return {front:group('accessories',front),back:group('cloak',back)};
    }

    function effects(front){
      if(s.effect==='none')return '';
      if(s.effect==='halo'&&!front)return group('effect-halo',ellipse(0,-116,75,15,'none','stroke="#DAC991" stroke-width="6" opacity=".8"'));
      if(s.effect==='stars'&&front)return group('effect-stars',star(-126,-54,9,'#DFC591')+star(119,-99,11,'#B8ABD6')+star(132,75,7,'#D8BE89')+circle(-114,47,3,'#D2BF8D'),`class="${id}spark" data-motion="effect"`);
      if(s.effect==='mist'&&front)return group('effect-mist',ellipse(0,baseY+9,107,15,'#D6E0F0')+ellipse(-40,baseY,70,16,'#ECF2F9'),`class="${id}mist" data-motion="effect" opacity=".45"`);
      if(s.effect==='energy'&&!front)return group('effect-energy',circle(0,4,150,`url(#${id}glow)`)+path('M-116 20Q-139-80-52-114M114-20Q141 80 52 114','none','stroke="#C2B8E4" stroke-width="3" stroke-linecap="round" opacity=".55"'),`class="${id}spark" data-motion="effect"`);
      return '';
    }

    const hairParts=hair(),acc=accessories();
    // All silhouette attachments share a common rig and the same body transform.
    // Human / animal heads get their own nested head-size transform, including hats,
    // ears, hair, glasses and all facial parts; body proportions never detach them.
    let head=hairParts.back+anatomy()+characterShape()+face()+hairParts.front+hat();
    if(isHuman&&s.hair==='bald')head+=group('scalp-detail',line('M-9-72q9-3 18 0',shade(s.skinColor,-16),2));
    if((isHuman||isAnimal||isRobot)&&!GEOMETRY.has(s.body))head=group('head-rig',head,`transform="translate(${headX} ${headY}) scale(${headScale})"`);
    else head=group('head-rig',head);
    // Clothing on compact geometries is a bottom-panel overlay, so a ring's hole
    // remains genuinely open. Clip to the original silhouette for ring apparel.
    let apparel=clothing();
    if(ring&&apparel){apparel=`<defs><clipPath id="${id}ringclip"><path d="M0-98A98 98 0 1 0 0 98A98 98 0 1 0 0-98ZM0-20A44 44 0 1 1 0 68A44 44 0 1 1 0-20Z" fill-rule="evenodd" clip-rule="evenodd"/></clipPath></defs><g clip-path="url(#${id}ringclip)">${apparel}</g>`;}
    const lowArms=arms();
    const composition=effects(false)+wings()+acc.back+tail()+feet()+torso()+(tall||quad?apparel:'')+head+(!tall&&!quad?apparel:'')+lowArms+acc.front+effects(true);
    // Extra-tall headwear needs a little more framing room without deforming the rig.
    const speciesTop=s.body==='rabbit'?-175:['dragon','monster','ox','goat'].includes(s.body)?-127:s.body==='rooster'?-130:['cat','shiba','pig','horse'].includes(s.body)?-120:top;
    const hatTop=top+(s.hat==='magichat'?-134:s.hat==='mushroomhat'?-85:['beanie','cap','beret','crown'].includes(s.hat)?-83:0);
    const hairTop=top+(s.hair==='quiff'?-64:s.hair==='curly'?-24:0);
    const topExtent=(headY+Math.min(s.ears==='auto'?speciesTop:top,hatTop,hairTop,s.ears==='long'?top-90*s.earSize:s.ears==='pointed'?top-63*s.earSize:top,s.horns==='unicorn'?top-66:top)*headScale)*s.bodyHeight;
    const feetBottom=['feet','both'].includes(s.limbs)?baseY+20*s.limbLength+24:s.limbs==='hover'?baseY+43:bottom;
    const bottomExtent=Math.max(tall||quad?116:bottom,feetBottom,s.accessories.includes('macbook')?136:0)*s.bodyHeight;
    const frameScale=Math.min(1.14,192/Math.max(1,-topExtent),187/Math.max(1,bottomExtent),204/(Math.max(half+20,s.wings!=='none'?165:0,s.tail!=='none'?(65+90*s.tailSize):0,s.accessories.includes('sign')?178:150)*s.bodyWidth));
    const label=esc(input&&input.name||'Dot');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 420" width="440" height="420" role="img" aria-label="${label}" data-renderer="dot-live-v2" data-body="${s.body}" data-action="${action}"><title>${label}</title>${defs}${motion}${scene()}<g id="${id}stage" transform="translate(220 217) scale(${frameScale})"><g class="${id}avatar" data-part="avatar" data-motion="body"><g data-part="proportions" transform="scale(${s.bodyWidth} ${s.bodyHeight})"><g data-part="pose-rig" transform="${s.pose==='sit'?'translate(0 7)':s.pose==='magic'?'rotate(-3 0 45)':'translate(0 0)'}">${composition}</g></g></g></g></svg>`;
  }
  function pause(svg,paused=true){
    if(!svg)return;
    for(const el of svg.querySelectorAll('[data-motion]'))el.style.animationPlayState=paused?'paused':'running';
    if(typeof svg.getAnimations==='function')for(const a of svg.getAnimations({subtree:true}))paused?a.pause():a.play();
    if(typeof svg.pauseAnimations==='function'&&paused)svg.pauseAnimations();
    if(typeof svg.unpauseAnimations==='function'&&!paused)svg.unpauseAnimations();
  }
  global.DotRenderer=Object.freeze({render,normalize,pause,bodies:Object.freeze(BODIES.slice()),defaults:Object.freeze({...DEFAULTS})});
})(typeof window!=='undefined'?window:globalThis);
