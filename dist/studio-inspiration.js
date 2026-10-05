import {createCharacter, validateConfig} from './studio-model.js';

export const INSPIRATIONS = [
 {id:'blue-listen',family:'dots',name:'蓝蓝听歌',tag:'DOTS / FINE PLUSH',file:'dot-plush-headphones-v2.png',size:83,description:'顺着体积生长的短绒，贴合的皮革耳罩。'},
 {id:'white-work',family:'grok',name:'专注小白',tag:'GROK / SOFT RUBBER',file:'grok-matte-work-v2.png',size:80,description:'克制的胶囊眼与软胶体积，电脑安放在低位。'},
 {id:'woven-muse',family:'muse',name:'织物小沐',tag:'MUSE / WOVEN DOLL',file:'muse-fabric-reading-v2.png',size:73,description:'布面、卷曲纤维、玻璃眼与针织围巾，各有触感。'},
 {id:'shiba-tea',family:'pets',name:'柴犬茶茶',tag:'PETS / ANIMAL COMPANION',file:'pet-shiba-scarf-v2.png',size:76,description:'自然坐姿、完整卷尾，蓝围巾轻轻压住短绒。'}
];
export function inspirationCharacter(id, previous) {
 const item=INSPIRATIONS.find(item=>item.id===id);if(!item)throw Error('这套角色不存在');
 const c=createCharacter(item.family);c.name=item.name;c.presetId='custom';c.framing='full';c.aspect='1:1';c.scale=72;
 c.accessories={head:'none',face:'none',neck:'none',prop:'none'};c.material=item.family==='grok'?'rubber':item.family==='muse'?'micro':'plush';
 if(item.family==='dots'){c.shape='sphere';c.colors.body='#3264FA';c.colors.headAccessory='#292B31';c.accessories.head='headphones';c.action='listen';}
 if(item.family==='grok'){c.shape='arch';c.colors.body='#E5EAE5';c.colors.accessory='#5A6268';c.accessories.face='round';c.accessories.prop='macbook';c.action='work';c.camera='threeQuarter';}
 if(item.family==='muse'){c.colors.skin='#B47D52';c.colors.hair='#38271F';c.colors.body=c.colors.clothing='#D4A247';c.colors.accessory='#638298';c.accessories.neck='scarf';c.accessories.prop='book';c.action='read';c.skinMaterial='fabric';c.hairMaterial='fiber';c.clothMaterial='fabricCloth';}
 if(item.family==='pets'){c.shape='shiba';c.colors.body='#DFA45F';c.colors.secondary='#F9EDD8';c.colors.accessory='#5C7FA4';c.accessories.neck='scarf';c.action='idle';}
 if(previous){c.reference=structuredClone(previous.reference);c.reference.overrides=[];c.notes=previous.notes;c.output=previous.output;}
 return validateConfig(c);
}
