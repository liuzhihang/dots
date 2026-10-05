import {FAMILIES, SHAPES, MATERIALS, ACTIONS, ACCESSORIES, availableMaterials, createCharacter, validateConfig, applyPalette, inheritsReference, resolveCharacter} from './studio-model.js?v=81';

const clone = value => structuredClone(value);
export const RANDOM_SLOTS = ['type', 'look', 'accessories', 'action'];
export const SLOT_NAMES = {type:'类型', look:'质感', accessories:'组件', action:'动作'};
const looks = {dots:['sky','lime','butter','rose','lilac'],grok:['ivory','bean','lilac','sky'],'meta-muse':['ivory','lilac','rose','sky'],humans:['teal','butter','rose','lilac'],animals:['shiba','ivory','butter','rose']};
const kits = {
  dots:[{head:'headphones',face:'none',neck:'none'},{head:'none',face:'round',neck:'none'},{head:'none',face:'none',neck:'scarf'},{head:'none',face:'none',neck:'bow'}],
  grok:[{head:'none',face:'round',neck:'none'},{head:'none',face:'none',neck:'none'}],
  'meta-muse':[{head:'headphones',face:'none',neck:'scarf'},{head:'headphones',face:'none',neck:'none'},{head:'none',face:'round',neck:'scarf'}],
  humans:[{head:'headphones',face:'none',neck:'none'},{head:'none',face:'round',neck:'scarf'},{head:'beret',face:'none',neck:'none'},{head:'none',face:'none',neck:'bow'}],
  animals:[{head:'none',face:'none',neck:'scarf'},{head:'none',face:'none',neck:'collar'},{head:'none',face:'none',neck:'none'}]
};
const actions = {
  dots:['idle','listen','bounce','blink','sleep'],grok:['idle','thinking','processing','waiting','done','work'],
  'meta-muse':['idle','listen','bounce','blink','work','read'],humans:['idle','listen','bounce','blink','work','read','flowers','magic'],
  animals:['idle','work','read','flowers','sleep','bounce']
};
export function randomRecipe(input, seed, locks = {}) {
  let n = 2166136261;
  for (const ch of seed) n = Math.imul(n ^ ch.charCodeAt(0), 16777619);
  const random = () => { n ^= n << 13; n ^= n >>> 17; n ^= n << 5; return (n >>> 0) / 4294967296; };
  const pick = list => list[Math.floor(random() * list.length)];
  const effective = resolveCharacter(input).config;
  const keepType = locks.type || effective.reference.enabled;
  const compatibleFamilies = Object.keys(FAMILIES).filter(id => availableMaterials(createCharacter(id)).includes(effective.material));
  const preserveLegacyType = !keepType && locks.look && compatibleFamilies.length === 0 && input.catalogTier === 'legacy';
  const family = keepType || preserveLegacyType ? effective.family : pick(locks.look && compatibleFamilies.length ? compatibleFamilies : Object.keys(FAMILIES));
  let c = keepType || preserveLegacyType ? clone(input) : createCharacter(family);
  c.name = input.name; c.reference = clone(input.reference); c.notes = input.notes;
  for (const key of ['output','aspect','background','framing','camera','scale','motionSpeed']) c[key] = input[key];
  c.randomSeed = seed;
  if (!keepType && !preserveLegacyType) {c.headScale = 1; c.bodyWidth = 1; c.limbs = 'auto';}
  if (!locks.look) {
    const colored = applyPalette(c, pick(looks[family]));
    for (const key of Object.keys(c.colors)) if (!inheritsReference(input,'colors.'+key) && !(key==='eyes' && input.eyeColorManual)) c.colors[key] = colored.colors[key];
    c.palette = colored.palette;
    c.material = pick(availableMaterials(c));
  } else {
    c.colors = clone(input.colors); c.palette = input.palette;
    const allowed=availableMaterials(c);c.material=allowed.includes(input.material)?input.material:FAMILIES[family].material;
    if(effective.family===family){c.skinMaterial=input.skinMaterial;c.hairMaterial=input.hairMaterial;c.clothMaterial=input.clothMaterial;}
  }
  c.eyeColorManual = input.eyeColorManual;
  if (input.eyeColorManual) c.colors.eyes = input.colors.eyes;
  if (!locks.accessories) {
    const kit = pick(kits[family]);
    for (const slot of ['head','face','neck']) {
      const value = Object.hasOwn(ACCESSORIES[slot],kit[slot]) ? kit[slot] : 'none';
      if (!inheritsReference(input,'accessories.'+slot)) c.accessories[slot] = value;
    }
  } else c.accessories = clone(input.accessories);
  if (!locks.action) {
    // A locked accessory is never silently replaced by a temporary action prop.
    const candidates = actions[family];
    const compatible = candidates.filter(action => !locks.accessories || JSON.stringify(resolveCharacter({...c,action}).config.accessories)===JSON.stringify(effective.accessories));
    c.action = pick(compatible.length ? compatible : [input.action]);
    c.pose = c.action==='idle'?pick(['auto','sit','side','chin']):'auto'; c.motionStyle = pick(['dots','liquid','orbit']);
  } else {c.action=input.action;c.pose=input.pose;c.motionStyle=input.motionStyle;}
  if (!locks.accessories) {
    if(!inheritsReference(c,'accessories.prop'))c.accessories.prop = ACTIONS[c.action].prop;
    if(c.action === 'listen'&&!inheritsReference(c,'accessories.head'))c.accessories.head = 'headphones';
    if(ACTIONS[c.action].prop!=='none'&&c.accessories.head!=='none'&&!inheritsReference(c,'accessories.neck'))c.accessories.neck = 'none';
  }
  return validateConfig(c);
}

export function describeRecipe(config) {
  config=resolveCharacter(config).config;
  const accessories = Object.entries(config.accessories).filter(([,v])=>v!=='none').map(([slot,v])=>ACCESSORIES[slot][v]?.label).filter(Boolean);
  return {type:FAMILIES[config.family].short+' · '+SHAPES[config.shape].label,look:MATERIALS[config.material].label,accessories:accessories.slice(0,2).join(' + ')||'素颜小可爱',action:ACTIONS[config.action].label};
}

export class RecipeMachine {
  constructor(element,{getConfig,commit,assemble,notify}) {
    Object.assign(this,{element,getConfig,commit,assemble,notify}); this.locks={};this.timers=[];this.busy=false;
    element.addEventListener('click',event=>{
      const lock=event.target.closest('[data-lock]');
      if (lock && !this.busy) {this.locks[lock.dataset.lock]=!this.locks[lock.dataset.lock];this.render(getConfig());}
    });
  }
  render(config) {
    if(this.busy)return;
    const values=describeRecipe(config);
    for(const slot of RANDOM_SLOTS){
      const reel=this.element.querySelector('[data-reel="'+slot+'"]');if(!reel)continue;
      reel.querySelector('.reel-value').textContent=values[slot];
      reel.style.setProperty('--reel-color',config.colors.body);
      const lock=reel.querySelector('[data-lock]'),locked=!!this.locks[slot]||(slot==='type'&&config.reference.enabled);
      lock.setAttribute('aria-pressed',String(locked));lock.setAttribute('aria-label',(locked?'解锁':'锁定')+SLOT_NAMES[slot]);reel.classList.toggle('locked',locked);
      if(slot==='type'&&config.reference.enabled){lock.disabled=true;lock.title='参考图模式保留当前角色类型';}else lock.disabled=false;
    }
  }
  spin(seed='mix-'+Math.random().toString(36).slice(2,9)) {
    if(this.busy)return;
    const input=clone(this.getConfig()),next=randomRecipe(input,seed,this.locks),final=describeRecipe(next);
    this.busy=true;this.element.classList.add('spinning');
    this.element.querySelector('[data-command="random"]').disabled=true;
    const message=this.element.querySelector('[role="status"]');message.textContent='灵感转起来了…';
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const current=resolveCharacter(input).config,family=current.family;
    const accessoryLabels=(kits[family]||[]).map(kit=>['head','face','neck'].filter(slot=>kit[slot]!=='none').map(slot=>ACCESSORIES[slot][kit[slot]].label).join(' + ')||'素颜小可爱');
    const available={type:Object.values(FAMILIES).map(f=>f.short),look:availableMaterials(current).map(m=>MATERIALS[m].label),accessories:accessoryLabels,action:(actions[family]||[]).map(id=>ACTIONS[id].label)};
    RANDOM_SLOTS.forEach((slot,index)=>{
      const reel=this.element.querySelector('[data-reel="'+slot+'"]');if(!reel)return;
      if(this.locks[slot]||(slot==='type'&&input.reference.enabled))return;
      reel.classList.add('rolling');let frame=0;
      const interval=setInterval(()=>{reel.querySelector('.reel-value').textContent=available[slot][frame++%available[slot].length];},90);
      this.timers.push({interval});
      const timer=setTimeout(()=>{clearInterval(interval);reel.classList.remove('rolling');reel.classList.add('landed');reel.querySelector('.reel-value').textContent=final[slot];},reduce?0:430+index*230);
      this.timers.push({timer});
    });
    this.timers.push({timer:setTimeout(()=>{
      this.commit(next);this.assemble();message.textContent='正在把它们组装起来…';
      this.timers.push({timer:setTimeout(()=>{this.finish();message.textContent='新搭配就位。喜欢哪部分，就把它锁住。';this.notify('新搭配已完成，可撤销回上一款。');},reduce?0:950)});
    },reduce?0:1190)});
  }
  finish(){for(const {interval,timer} of this.timers){clearInterval(interval);clearTimeout(timer);}this.timers=[];this.busy=false;this.element.classList.remove('spinning');this.element.querySelector('[data-command="random"]').disabled=false;this.element.querySelectorAll('.rolling,.landed').forEach(el=>el.classList.remove('rolling','landed'));this.render(this.getConfig());}
  cancel(){if(!this.busy)return;this.finish();this.element.querySelector('[role="status"]').textContent='已停止随机，可以继续调整。';}
}
