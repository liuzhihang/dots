import {createCharacter,validateConfig,resolveCharacter,ACCESSORIES,ACTIONS,EXPRESSIONS} from '../studio-model.js?v=81';

export const FAMILIES=['dots','grok','meta-muse','humans','animals'];
export const VIEWS=['front','threeQuarter','side'];
// Start, characteristic peak and return/settled state of the principal
// production motion. Continuous actions have a sampled cycle, not an ending.
export const ACTION_SAMPLE_TIMES={
 idle:[0,Math.PI/(2*1.8),2*Math.PI/1.8],work:[0,Math.PI/(2*4.2),2*Math.PI/4.2],
 sleep:[0,Math.PI/(2*1.3),2*Math.PI/1.3],listen:[0,Math.PI/4,Math.PI],
 magic:[0,Math.PI/(2*1.4),2*Math.PI/1.4],bounce:[0,Math.PI/(2*3.1),Math.PI/3.1],
 wave:[0,(Math.PI/2-.6)/3.2,(2*Math.PI-.6)/3.2],blink:[0,.17,.34],
 thinking:[0,Math.PI/(2*3.4),2*Math.PI/3.4],processing:[0,Math.PI/1.85,2*Math.PI/1.85],
 waiting:[0,Math.PI/(2*.9),2*Math.PI/.9],blocked:[0,.06,.31,.48],done:[0,.4,1.0]
};
export function acceptanceCases(family){
 const base=createCharacter(family),bare=structuredClone(base),cases=[];
 bare.action='idle';bare.accessories={head:'none',face:'none',neck:'none',prop:'none'};
 const add=(section,label,raw,time=0,assembly=1)=>{
  const config=validateConfig({...raw,background:'transparent'}),resolved=resolveCharacter(config);
  cases.push({id:`${family}-${String(cases.length+1).padStart(3,'0')}`,section,label,time,assembly,config,resolved:resolved.config,adjustments:resolved.adjustments});
 };
 const views=(section,label,raw,times=[0])=>{for(const camera of VIEWS)for(const time of times)add(section,`${label} · ${camera} · t=${time}`,{...raw,camera},time);};
 views('identity','裸形',bare);views('identity','基准组合',base);
 for(const headScale of [.85,1.12])for(const bodyWidth of [.85,1.15])views('proportions',`比例 ${headScale}/${bodyWidth}`,{...base,headScale,bodyWidth});
 for(const head of Object.keys(ACCESSORIES.head).filter(x=>x!=='none'))views('contacts',`头饰 ${head}`,{...bare,accessories:{...bare.accessories,head}});
 for(const face of Object.keys(ACCESSORIES.face).filter(x=>x!=='none'))views('contacts',`眼镜 ${face}`,{...bare,accessories:{...bare.accessories,face}});
 for(const neck of Object.keys(ACCESSORIES.neck).filter(x=>x!=='none'))views('contacts',`颈饰 ${neck}`,{...bare,accessories:{...bare.accessories,neck}});
 // Extreme eye proportions are checked with a clear frame, opaque frame and
 // monocle; the separate full accessory pass covers every registered style.
 for(const [eyeScale,eyeSpacing] of [[.65,.75],[.65,1.3],[1.35,.75],[1.35,1.3]])for(const face of ['round','sunglasses','monocle'])views('proportions',`眼部 ${eyeScale}/${eyeSpacing}/${face}`,{...bare,eyeScale,eyeSpacing,accessories:{...bare.accessories,face}});
 for(const action of Object.keys(ACTIONS))views('actions',`动作 ${action}`,{...base,action},ACTION_SAMPLE_TIMES[action]||ACTION_SAMPLE_TIMES.idle);
 if(family==='animals')views('actions','坐姿挥爪',{...base,pose:'sit',action:'wave'},ACTION_SAMPLE_TIMES.wave);
 for(const expression of Object.keys(EXPRESSIONS))add('expressions',`表情 ${expression}`,{...bare,expression});
 for(const aspect of ['1:1','4:5','16:9'])for(const framing of ['full','bust','portrait'])for(const scale of [55,85])add('framing',`构图 ${aspect}/${framing}/${scale}`,{...base,aspect,framing,scale},.45);
 for(const action of ['thinking','processing'])for(const motionStyle of ['dots','liquid','orbit'])views('effects',`状态 ${action}/${motionStyle}`,{...bare,action,motionStyle},motionStyle==='dots'?ACTION_SAMPLE_TIMES.thinking:motionStyle==='orbit'?[0,Math.PI/1.3,2*Math.PI/1.3]:ACTION_SAMPLE_TIMES.processing);
 for(const assembly of [0,.5,1])add('assembly',`组装 ${assembly}`,base,.45,assembly);
 return cases;
}
