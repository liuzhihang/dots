import {CharacterPreview} from '../live-runtime.js?v=81';
import {buildPrompt,resolveCharacter} from '../studio-model.js?v=81';
import {acceptanceCases} from './character-cases.js?v=81';
const $=id=>document.getElementById(id),params=new URLSearchParams(location.search);
const sourceSnapshot=await fetch('./character-source.json',{cache:'no-store'}).then(response=>{if(!response.ok)throw Error('尚未冻结源码版本');return response.json();});
if(sourceSnapshot.frozen!==true)document.querySelector('.notice').append(' 当前为未冻结的修复预览，仅逐项看图；完整矩阵记录暂不可运行。');
let cases=[],selected,records=[],running=false,cancelled=false,updating=false;
const preview=new CharacterPreview($('stage'),{onError:text=>{$('status').textContent=text;}});preview.setPlaying(false);
const frame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
const promptConfig=()=>({...selected.config,background:$('background').value});
function syncControls(){
 for(const control of ['family','section','case','seek','play','pause','export','background','reduce','time','copy'])$(control).disabled=running||updating;
 $('run').disabled=running||updating;$('stop').disabled=!running;$('save').disabled=running||!records.length;
}
function showReport(){
 $('report').textContent=JSON.stringify({sourceId:sourceSnapshot.sourceId,id:selected?.id,label:selected?.label,renderer:preview.canvas.dataset.renderMode,previewStatus:preview.canvas.dataset.previewStatus,paintedTime:preview.world.renderedTime,paintedAssembly:preview.world.renderedAssembly,revision:preview.canvas.dataset.renderedRevision,requestedConfig:promptConfig(),resolvedConfig:preview.world.config},null,2);
 $('prompt').value=buildPrompt(promptConfig(),'zh');
}
async function showCase(item){
 if(updating)throw Error('前一配置仍在载入');updating=true;syncControls();
 try{
  selected=item;$('case').value=item.id;$('time').value=String(item.time);
  const config={...item.resolved,background:$('background').value};preview.update(config);
  const started=performance.now();
  while(preview.updateFrame||preview.canvas.dataset.previewStatus!=='ready'){
   if(preview.canvas.dataset.previewStatus==='failed'||performance.now()-started>45000)throw Error('实际预览未完成');await frame();
  }
  await preview.seek(item.time,item.assembly);showReport();
  $('status').textContent=`${item.id} · ${item.label}\n实际渲染：${preview.canvas.dataset.renderMode} · painted t=${preview.world.renderedTime.toFixed(3)} · assembly=${preview.world.renderedAssembly}\n身份与美术：待检查 / 待用户确认`;
 }finally{updating=false;syncControls();}
}
function populate(){
 const url=new URL(location.href);url.searchParams.set('family',$('family').value);url.searchParams.set('section',$('section').value);history.replaceState(null,'',url);
 records=[];$('results').replaceChildren();$('progress').value=0;document.body.dataset.matrixCount='0';document.body.dataset.matrixStatus='empty';
 const all=acceptanceCases($('family').value),section=$('section').value;cases=section==='all'?all:all.filter(x=>x.section===section);
 $('case').replaceChildren(...cases.map(item=>{const o=document.createElement('option');o.value=item.id;o.textContent=item.label;return o;}));return showCase(cases[0]);
}
function captureRecord(item){
 if(preview.canvas.dataset.renderedRevision!==preview.canvas.dataset.revision||Math.abs(preview.world.renderedTime-item.time)>1e-6||Math.abs((preview.world.renderedAssembly??1)-item.assembly)>1e-6)throw Error('实际 painted 配置或时间与请求不同；此项不在有效矩阵内');
 const canvas=document.createElement('canvas');canvas.width=preview.canvas.width;canvas.height=preview.canvas.height;const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(preview.canvas,0,0);
 const pixels=ctx.getImageData(0,0,canvas.width,canvas.height).data;let count=0,minX=canvas.width,minY=canvas.height,maxX=-1,maxY=-1,border=0;
 for(let y=0;y<canvas.height;y++)for(let x=0;x<canvas.width;x++)if(pixels[(y*canvas.width+x)*4+3]>8){count++;minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);if(x===0||y===0||x===canvas.width-1||y===canvas.height-1)border++;}
 return {...item,actualConfig:structuredClone(preview.world.config),renderer:preview.canvas.dataset.renderMode,paintedTime:preview.world.renderedTime,paintedAssembly:preview.world.renderedAssembly,width:canvas.width,height:canvas.height,renderStats:{...preview.canvas.dataset},systemReducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches,appReducedMotion:$('reduce').checked,metrics:{visiblePixels:count,alphaCorners:[0,canvas.width-1,canvas.width*(canvas.height-1),canvas.width*canvas.height-1].map(i=>pixels[i*4+3]),bounds:count?[minX,minY,maxX,maxY]:null,borderPixels:border},image:canvas.toDataURL('image/png')};
}
function addCell(record){const cell=document.createElement('div');cell.className='cell';const img=new Image();img.className='checker';img.src=record.image;img.alt=record.label;const label=document.createElement('p');label.textContent=`${record.id} · ${record.label} · ${record.renderer} · painted ${record.paintedTime.toFixed(3)} · 边界 ${record.metrics.borderPixels}`;const b=document.createElement('button');b.textContent='查看此帧';b.onclick=()=>showCase(record).catch(fail);cell.append(img,label,b);$('results').append(cell);}
function fail(error){$('status').textContent=`检查中止：${error.message}`;console.error(error);}
function download(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),3000);}
async function run(){
 if(sourceSnapshot.frozen!==true||sourceSnapshot.format!=='dots-local-source-snapshot'||sourceSnapshot.version!==1||sourceSnapshot.userArtApproved!==false){$('status').textContent='源码未有效冻结。先逐项确认修复效果，再冻结稳定版本并录制完整矩阵。';return;}
 if($('reduce').checked||matchMedia('(prefers-reduced-motion: reduce)').matches){$('status').textContent='减少动态已开启。三时刻矩阵不会把静态替代帧当关键帧；可先逐项查看静态效果，关闭偏好后再录制动作矩阵。';return;}
 if(running||updating)return;running=true;cancelled=false;records=[];$('results').replaceChildren();$('progress').max=cases.length;syncControls();
 try{for(const [i,item]of cases.entries()){
  if(cancelled)break;await showCase(item);const record=captureRecord(item);records.push(record);addCell(record);$('progress').value=i+1;$('status').textContent=`已记录 ${i+1}/${cases.length} · ${item.label}\n自动采样不代表视觉通过。`;await frame();
 }}catch(error){fail(error);}finally{
  running=false;syncControls();
  document.body.dataset.matrixCount=String(records.length);document.body.dataset.matrixStatus=cancelled?'cancelled':records.length===cases.length?'recorded':'incomplete';
  $('status').textContent+=`\n记录完成：${records.length}/${cases.length}；页面检查与用户确认仍分别待记录。`;
 }
}
$('run').onclick=run;$('stop').onclick=()=>{cancelled=true;};
$('save').onclick=()=>download(new Blob([JSON.stringify({format:'dots-local-actual-frame-matrix',version:1,url:location.href,sourceSnapshot,createdAt:new Date().toISOString(),family:$('family').value,section:$('section').value,status:document.body.dataset.matrixStatus,userArtApproved:false,records})],{type:'application/json'}),`matrix-${$('family').value}-${preview.canvas.dataset.renderMode}-${$('section').value}.json`);
$('family').onchange=()=>populate().catch(fail);$('section').onchange=()=>populate().catch(fail);$('case').onchange=()=>showCase(cases.find(x=>x.id===$('case').value)).catch(fail);
$('seek').onclick=async()=>{try{await preview.seek(Number($('time').value),selected.assembly);showReport();$('status').textContent=`已暂停在真实 painted t=${preview.world.renderedTime.toFixed(3)}`;}catch(error){fail(error);}};
$('play').onclick=()=>{preview.setPlaying(true);$('status').textContent='正在播放当前配置；PNG 取点击时实际 painted 帧';};$('pause').onclick=async()=>{preview.setPlaying(false);await preview.world.renderer.flush?.();showReport();};
$('reduce').onchange=()=>{preview.setReducedMotion($('reduce').checked);showReport();};$('background').onchange=()=>showCase(selected).catch(fail);
$('export').onclick=async()=>{try{const config=structuredClone(preview.world.config),time=preview.world.renderedTime;const blob=await preview.capture(1600,config);download(blob,`${selected.id}-${config.background}-${preview.canvas.dataset.renderMode}-t${time.toFixed(3)}.png`);$('status').textContent=`实际 ${preview.canvas.dataset.renderMode} PNG 已生成并触发下载 · 点击时 painted t=${time.toFixed(3)} · ${blob.size} bytes；下载文件仍需回读核对`;}catch(error){fail(error);}};
$('copy').onclick=async()=>{try{await navigator.clipboard.writeText(buildPrompt(promptConfig(),'zh'));$('copy-status').textContent='已复制当前完整配置 Prompt；需回读剪贴板核对';}catch(error){$('copy-status').textContent='复制失败：'+error.message;}};
if(params.has('family'))$('family').value=params.get('family');
if(params.has('section'))$('section').value=params.get('section');
for(const id of ['webgl-link','cpu-link']){const url=new URL($(id).href);url.searchParams.set('family',$('family').value);$(id).href=url;}
await populate();
window.addEventListener('pagehide',()=>preview.dispose(),{once:true});
