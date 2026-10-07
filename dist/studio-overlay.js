// One native dialog. History contains opaque frame IDs, never user asset paths.
export function createOverlay({dialog,title,body,backButton,closeButton,background,onFinalClose}){
 let frames=[],view=null,rootTrigger=null,rootScroll=0,oldOverflow='',oldPadding='',serial=0,pendingClose=false,queuedAction=null;
 const registry=new Map();
 const focusableSelector='button,a[href],input,select,textarea,summary,[tabindex="0"]';
 const pageState=()=>({studio:92,page:document.body.dataset.screen,overlayTrail:frames.map(f=>f.id)});
 function rememberCurrent(){
  const frame=frames.at(-1);if(!frame||!view)return;
  frame.resumeState=view.getResumeState?.();
  frame.presentation={scrollTop:body.scrollTop,dialogScrollTop:dialog.scrollTop,
   focusIndex:[...body.querySelectorAll(focusableSelector)].indexOf(document.activeElement),
   disclosures:[...body.querySelectorAll('details')].map(el=>el.open)};
 }
 function focusView(frame,currentView){
  requestAnimationFrame(()=>Promise.resolve(currentView.ready).then(()=>requestAnimationFrame(()=>{
   if(!dialog.open||frames.at(-1)!==frame||view!==currentView)return;
   const saved=frame.presentation;
   if(saved){
    [...body.querySelectorAll('details')].forEach((el,i)=>{if(i<saved.disclosures.length)el.open=saved.disclosures[i];});
    const trigger=[...body.querySelectorAll(focusableSelector)][saved.focusIndex];
    if(trigger&&!trigger.disabled&&trigger.getClientRects().length)trigger.focus({preventScroll:true});else title.focus({preventScroll:true});
    body.scrollTop=saved.scrollTop;dialog.scrollTop=saved.dialogScrollTop;
   }else{body.scrollTop=0;dialog.scrollTop=0;title.focus({preventScroll:true});}
  })));
 }
 function render(){
  view?.dispose?.();view=null;
  if(!frames.length){
   if(dialog.open)dialog.close();background.inert=false;document.body.style.overflow=oldOverflow;document.body.style.paddingRight=oldPadding;
   const trigger=rootTrigger;rootTrigger=null;window.scrollTo({top:rootScroll,behavior:'instant'});onFinalClose?.();
   if(trigger?.isConnected)trigger.focus({preventScroll:true});else document.getElementById(document.body.dataset.screen+'Title')?.focus({preventScroll:true});
   return;
  }
  const frame=frames.at(-1);view=frame.factory(frame.resumeState);title.textContent=view.title||frame.title;body.replaceChildren(view.element);dialog.dataset.overlay=frame.kind;
  backButton.hidden=frames.length<2;
  backButton.textContent=frames.length>1?`← 返回${frames.at(-2).kind==='random'?'随机结果':frames.at(-2).kind==='detail'?'作品详情':'上一页'}`:'返回';
  if(!dialog.open)dialog.showModal();focusView(frame,view);
 }
 function show({kind,title:label,factory}, {replace=false}={}){
  if(pendingClose){queuedAction=()=>show({kind,title:label,factory},{replace});return null;}
  rememberCurrent();
  if(!frames.length){rootTrigger=document.activeElement;rootScroll=window.scrollY;oldOverflow=document.body.style.overflow;oldPadding=document.body.style.paddingRight;document.body.style.paddingRight=`${Math.max(0,window.innerWidth-document.documentElement.clientWidth)}px`;document.body.style.overflow='hidden';background.inert=true;}
  const frame={id:`overlay-${++serial}`,kind,title:label,factory};registry.set(frame.id,frame);
  if(replace&&frames.length)frames[frames.length-1]=frame;else frames.push(frame);
  history[replace?'replaceState':'pushState'](pageState(),'',location.href);render();return frame.id;
 }
 function restoreTrail(state){
  if(pendingClose){pendingClose=false;const action=queuedAction;queuedAction=null;if(action)queueMicrotask(action);}
  const ids=state?.studio===92&&Array.isArray(state.overlayTrail)?state.overlayTrail:[];
  const next=ids.map(id=>registry.get(id)).filter(Boolean);
  if(next.length!==ids.length){if(frames.length){frames=[];render();}return false;}
  const changed=next.map(f=>f.id).join('|')!==frames.map(f=>f.id).join('|');
  if(changed){
   rememberCurrent();
   if(!frames.length&&next.length){rootTrigger=document.activeElement;rootScroll=window.scrollY;oldOverflow=document.body.style.overflow;oldPadding=document.body.style.paddingRight;document.body.style.overflow='hidden';background.inert=true;}
   frames=next;render();
  }
  return frames.length>0;
 }
 function closeCurrent(){if(!frames.length||pendingClose)return;rememberCurrent();pendingClose=true;queuedAction=null;frames.pop();render();history.back();}
 function back(){closeCurrent();}
 function reset(){if(frames.length){frames=[];render();}}
 function exitToPage(action){
  if(pendingClose){queuedAction=()=>exitToPage(action);return;}
  const count=frames.length;if(!count){action();return;}
  rememberCurrent();pendingClose=true;queuedAction=action;frames=[];render();history.go(-count);
 }
 dialog.addEventListener('cancel',e=>{e.preventDefault();closeCurrent();});
 closeButton.addEventListener('click',closeCurrent);backButton.addEventListener('click',back);
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeCurrent();}});
 dialog.addEventListener('keydown',e=>{
  if(e.key!=='Tab')return;
  const nodes=[...dialog.querySelectorAll(focusableSelector)].filter(el=>!el.disabled&&el.getClientRects().length);
  if(!nodes.length){e.preventDefault();title.focus();return;}
  if(e.shiftKey&&(document.activeElement===nodes[0]||document.activeElement===title)){e.preventDefault();nodes.at(-1).focus();}
  else if(!e.shiftKey&&document.activeElement===nodes.at(-1)){e.preventDefault();nodes[0].focus();}
 });
 return {show,back,reset,exitToPage,restoreTrail,isClosing:()=>pendingClose,afterClose(action){if(pendingClose)queuedAction=action;else action();},isOpen:()=>frames.length>0,kind:()=>frames.at(-1)?.kind,getView:()=>view};
}
