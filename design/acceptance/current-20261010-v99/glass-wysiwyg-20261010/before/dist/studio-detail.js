import { copyText, copyAndOpen, CHATGPT_URL_FOR_MANUAL_OPEN } from './studio-actions.js?v=99';
import { ARTWORKS, canOpenArtwork, createSnapshot, getArtwork, getAsset, getVariants, isPreviewArtwork } from './studio-artwork-catalog.js?v=99';
import { TAGS, TAG_DIMENSIONS } from './studio-tags.js?v=99';
import { SERIES } from './studio-content.js?v=99';
import { buildArtworkEditPrompt, buildConfigurationPrompt, promptFor } from './studio-prompt.js?v=99';
import { downloadAsset } from './studio-asset-loader.js?v=99';
import { createPreviewLoader } from './studio-preview-loader.js?v=99';
import { getTemplateForArtwork } from './studio-edit-templates.js?v=99';
const DEFAULT_DETAIL_API = { ARTWORKS, TAGS, TAG_DIMENSIONS, SERIES, canOpenArtwork, createSnapshot, getArtwork, getAsset, getVariants, isPreviewArtwork, promptFor, downloadAsset };
const FEATURE_PRIORITY = Object.freeze({ style: 100, series: 96, accessory: 94, prop: 92, color: 90, material: 88, action: 86, shape: 75, expression: 72, 'object-type': 60, theme: 48, content: 44 });
const EXCLUDED_STATES = new Set(['none', 'not-applicable', 'notApplicable', 'unknown', 'unrecorded', 'not-recorded']);
const DIMENSION_LABELS = Object.freeze({
  en: { style: 'Identity', series: 'Series', accessory: 'Accessory', 'head-accessory': 'Head accessory', 'body-accessory': 'Body accessory', 'facial-features': 'Features', clothing: 'Clothing', prop: 'Object', color: 'Color', material: 'Material', action: 'Action', shape: 'Shape', expression: 'Expression', 'object-type': 'Character type', theme: 'Theme', content: 'Content' },
  'zh-CN': { style: '身份', series: '系列', accessory: '配饰', 'head-accessory': '头部配饰', 'body-accessory': '身体配饰', 'facial-features': '五官', clothing: '衣物', prop: '道具', color: '配色', material: '材质', action: '动作', shape: '外形', expression: '表情', 'object-type': '角色类型', theme: '主题', content: '内容' }
});

const text = value => String(value ?? '').trim();
const normalizeLanguage = value => value === 'en' ? 'en' : 'zh-CN';
const promptLanguage = value => value === 'en' ? 'en' : 'zh';
const node = (tag, className, content) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
};
const release = lease => { try { lease?.dispose?.(); } catch { /* Releasing a Blob URL must not break state recovery. */ } };
const versionOf = snapshot => text(snapshot?.artwork?.version || snapshot?.artwork?.revision || snapshot?.asset?.version || '');
const published = artwork => artwork && (artwork.publicationStatus === 'published' || artwork.status === 'published' || artwork.published === true);

function localized(record, field, language) {
  const map = record?.[`${field}ByLanguage`];
  const aliases = record?.labelByLanguage || record?.nameByLanguage;
  return text(map?.[language] || map?.[promptLanguage(language)] || aliases?.[language] || aliases?.[promptLanguage(language)] || record?.[field] || record?.label || record?.name);
}

function asArray(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === 'object') return Object.entries(value).map(([id, item]) => typeof item === 'string' ? { id, label: item } : { id, ...item });
  return [];
}

function tagFor(api, id) {
  const entries = asArray(api?.TAGS);
  return entries.find(item => item?.id === id || item?.key === id) || null;
}

function featureFacts(artwork, api, language) {
  const features = artwork?.features;
  const groups = Array.isArray(features) ? features : Object.entries(features || {}).map(([dimension, value]) => ({ dimension, ...value }));
  const ids = [...new Set([...(artwork?.featureIds || []), ...(artwork?.tagIds || [])])];
  const facts = [];
  for (const id of ids) {
    const group = groups.find(item => item?.id === id || item?.ids?.includes(id) || item?.labelsById?.[id]);
    const tag = tagFor(api, id);
    const state = group?.state || tag?.state || 'known';
    if (EXCLUDED_STATES.has(state)) continue;
    const dimension = text(tag?.dimension || group?.dimension || String(id).split(':', 1)[0]);
    if (['series', 'background', 'usage'].includes(dimension)) continue;
    const labelByLanguage = tag?.labelByLanguage || group?.labelsByLanguage?.[id] || group?.labelByLanguage;
    const label = text(labelByLanguage?.[language] || labelByLanguage?.[promptLanguage(language)] || group?.labelsById?.[id] || tag?.label || group?.label || tag?.name);
    if (!label) continue;
    facts.push({ id, dimension, label, state, order: facts.length });
  }
  const seen = new Set();
  const unique = facts.filter(item => {
    const key = `${item.dimension}\u0000${item.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const preferredIds = Array.isArray(artwork?.detailFactIds) ? artwork.detailFactIds : [];
  if (preferredIds.length) {
    const byId = new Map(unique.map(item => [item.id, item]));
    const preferred = preferredIds.map(id => byId.get(id)).filter(Boolean);
    const preferredSet = new Set(preferredIds);
    const remaining = unique.filter(item => !preferredSet.has(item.id));
    remaining.sort((a, b) => (FEATURE_PRIORITY[b.dimension] ?? 20) - (FEATURE_PRIORITY[a.dimension] ?? 20) || a.order - b.order);
    return [...preferred, ...remaining];
  }
  return unique.sort((a, b) => (FEATURE_PRIORITY[b.dimension] ?? 20) - (FEATURE_PRIORITY[a.dimension] ?? 20) || a.order - b.order);
}

/** Public helper used by page summaries; it returns only real, localized facts. */
export function detailSelectedTagsFor(artwork, limit = 4, api = DEFAULT_DETAIL_API, language = 'en') {
  const count = Math.max(0, Number.isFinite(Number(limit)) ? Math.floor(Number(limit)) : 4);
  return featureFacts(artwork, api, normalizeLanguage(language)).slice(0, count);
}

function promptText(value) {
  return text(typeof value === 'string' ? value : value?.text);
}

const COPY = {
 en:{original:'Original',draft:'Draft',view:'View',edit:'Edit',copy:'Copy Prompt',download:'Download original',chat:'Create in ChatGPT',prompt:'Original Prompt',details:'About this character',pending:'Preview · Pending art review',notEditable:'Local editing is not available for this artwork. You can describe other changes below.',editLoading:'Loading the editor…',editFailed:'The editor could not load. Try again.',retry:'Retry',previewLoading:'Loading a sharper preview…',previewFailed:'The sharper preview is unavailable. The cover remains visible.',remix:'ChatGPT remix',remixNote:'These requests are for ChatGPT. They do not change the preview or the original download.',direction:'Additional direction',directionHint:'Describe changes beyond the supported local options…',copyRemix:'Copy remix Prompt',chatRemix:'Open remix in ChatGPT',keep:'Keep',remove:'Remove',replace:'Replace',replacement:'Describe the replacement',copied:'Prompt copied.',copyFailed:'Copy failed. Select and copy the text below.',downloaded:'Original download started.',downloadFailed:'Original download failed. Please retry.',chatOpened:'ChatGPT opened. Check the Prompt and attach a reference yourself before sending.',chatBlocked:'ChatGPT could not open. Use the manual link below.',manual:'Open ChatGPT manually',select:'Select text',versions:'Existing versions',related:'Related characters',variantFailed:'This version could not load. The current version remains selected.',configCopy:'Copy current configuration Prompt',configNote:'Describes the last successful local preview. Extra ChatGPT requests are separate.',preview:'Artwork preview',unavailable:'This artwork version is unavailable.',shape:'Fixed template shape'},
 'zh-CN':{original:'原作',draft:'草稿',view:'查看',edit:'编辑',copy:'复制 Prompt',download:'下载原图',chat:'在 ChatGPT 中创作',prompt:'原始 Prompt',details:'关于这个角色',pending:'预览 · 待美术确认',notEditable:'此作品暂不支持本地编辑，可在下方描述其他二创要求。',editLoading:'正在加载编辑器…',editFailed:'编辑器加载失败，请重试。',retry:'重试',previewLoading:'正在加载更清晰的预览…',previewFailed:'高清预览暂不可用，仍显示封面。',remix:'ChatGPT 二创',remixNote:'以下要求用于 ChatGPT，不改变当前预览或原图下载。',direction:'其他创作要求',directionHint:'描述本地选项之外的修改…',copyRemix:'复制二创 Prompt',chatRemix:'在 ChatGPT 中使用二创要求',keep:'保留',remove:'移除',replace:'替换',replacement:'描述替换内容',copied:'Prompt 已复制。',copyFailed:'复制失败，请选择并复制下方全文。',downloaded:'已开始下载原图。',downloadFailed:'原图下载失败，请重试。',chatOpened:'已打开 ChatGPT，请检查 Prompt、按需自行附图并发送。',chatBlocked:'未能打开 ChatGPT，可使用下方手动链接。',manual:'手动打开 ChatGPT',select:'选择全文',versions:'已有版本',related:'相关角色',variantFailed:'此版本加载失败，仍保留当前版本。',configCopy:'复制当前配置 Prompt',configNote:'仅描述最近成功的本地预览，其他 ChatGPT 要求单独保留。',preview:'角色预览',unavailable:'此作品版本不可用。',shape:'模板形状固定'}
};

/** One CharacterStudio host. Mode changes never create a second controller or Artwork. */
export function createDetailController({api=DEFAULT_DETAIL_API,language='en',notify=()=>{},onVersion=()=>{},onModeChange=()=>{},onRelated=()=>{},requestExit=action=>action(),reviewHarness=false,loader=createPreviewLoader()}={}) {
 let locale=normalizeLanguage(language), active=null, session=0, mode='view', draft=null, draftModule=null, editor=null, template=null;
 let previewLease=null, previewAbort=null, editorRequest=0, variantRequest=0, langRequest=0, closed=true, originalPrompt='', external='', edits=new Map(), successful=null, editorReady=false;
 const lang=()=>COPY[locale];
 const root=node('article','character-studio artwork-detail');root.dataset.state='empty';root.setAttribute('aria-labelledby','artwork-detail-title');
 const mediaColumn=node('div','studio-media-column');
 const media=node('div','studio-preview');const image=node('img','artwork-detail__image');image.decoding='async';
 const draftHost=node('div','studio-draft-host');draftHost.hidden=true;
 const imageLabel=node('span','preview-label',lang().original);
 const imageStatus=node('p','preview-status');imageStatus.setAttribute('role','status');
 const retry=node('button','text-button preview-retry');retry.hidden=true;
 media.append(image,draftHost,imageLabel);mediaColumn.append(media,imageStatus,retry);
 const variants=node('nav','artwork-detail__versions');variants.hidden=true;mediaColumn.append(variants);
 const content=node('div','studio-content');
 const modeTabs=node('div','studio-mode-tabs');modeTabs.setAttribute('role','group');
 const viewButton=node('button','studio-mode');const editButton=node('button','studio-mode');viewButton.dataset.mode='view';editButton.dataset.mode='edit';modeTabs.append(viewButton,editButton);
 const identity=node('p','studio-series');const title=node('h3','artwork-detail__title');title.id='artwork-detail-title';
 const pending=node('p','pending-label');pending.hidden=true;
 const description=node('p','artwork-detail__description');const tags=node('ul','artwork-detail__tags');
 const viewContent=node('section','studio-view-content');const originalActions=node('div','studio-actions');
 const copyButton=node('button','button primary artwork-detail__copy-original');const downloadButton=node('button','button artwork-detail__download-original');const chatButton=node('button','button quiet artwork-detail__open-chatgpt-original');originalActions.append(copyButton,downloadButton,chatButton);
 const promptDetails=node('details','studio-prompt');const promptSummary=node('summary');const promptPreview=node('pre','artwork-detail__prompt-preview');promptDetails.append(promptSummary,promptPreview);
 viewContent.append(description,tags,originalActions,promptDetails);
 const editorContent=node('section','studio-editor-content');editorContent.hidden=true;
 const editorStatus=node('p','studio-editor-status');editorStatus.setAttribute('role','status');const editorRetry=node('button','button studio-editor-retry');editorRetry.hidden=true;const editorControls=node('div','studio-editor-controls');
 const configCopy=node('button','button studio-config-copy');configCopy.disabled=true;const configNote=node('p','helper');editorContent.append(editorStatus,editorRetry,editorControls,configCopy,configNote);
 const feedback=node('p','artwork-detail__feedback');feedback.setAttribute('role','status');
 const remix=node('details','studio-remix');const remixSummary=node('summary');const remixNote=node('p','helper');const factRows=node('div','remix-facts');
 const externalLabel=node('label','remix-direction');const externalLabelText=node('span');const externalInput=node('textarea','artwork-detail__additional-direction');externalInput.rows=3;externalInput.maxLength=2000;externalLabel.append(externalLabelText,externalInput);
 const remixError=node('p','remix-error');remixError.setAttribute('role','status');const remixActions=node('div','studio-actions');const remixCopy=node('button','button artwork-detail__copy-modified');const remixChat=node('button','button quiet');remixActions.append(remixCopy,remixChat);
 const remixPreview=node('pre','artwork-detail__modified-preview');remix.append(remixSummary,remixNote,factRows,externalLabel,remixError,remixActions,remixPreview);
 const related=node('details','studio-related');const relatedSummary=node('summary');const relatedItems=node('div','related-items');related.append(relatedSummary,relatedItems);
 const fallback=node('section','artwork-detail__copy-fallback');fallback.hidden=true;const fallbackArea=node('textarea','artwork-detail__fallback-text');fallbackArea.rows=5;fallbackArea.readOnly=true;const selectFallback=node('button','text-button');const manual=node('a','button quiet');manual.href=CHATGPT_URL_FOR_MANUAL_OPEN;manual.target='_blank';manual.rel='noopener noreferrer';fallback.append(fallbackArea,selectFallback,manual);
 content.append(modeTabs,identity,title,pending,viewContent,editorContent,feedback,remix,related,fallback);root.append(mediaColumn,content);
 const current=(token,record=active)=>!closed&&token===session&&record===active;
 const message=value=>{feedback.textContent=value;};
 const releasePreview=()=>{previewAbort?.abort();previewAbort=null;previewLease?.release();previewLease=null;};
 const refFor=(artwork,purpose='preview')=>api.getAsset(purpose==='poster'?artwork.assetRefs?.poster:(window.innerWidth<650?artwork.assetRefs?.detail512:artwork.assetRefs?.detail1024)||artwork.displayPreviews?.large);
 const snapshotFor=id=>api.createSnapshot(id,api.isPreviewArtwork?.(id)?{allowPreview:true}:undefined);
 function syncRemix(){
   const values=[...edits.values()].map(item=>({...item}));
   const changed=external.trim()||values.some(item=>item.action!=='keep');
   try{const value=buildArtworkEditPrompt({basePrompt:originalPrompt,edits:values,additionalDirection:external,language:locale});remixPreview.textContent=changed?value:'';remixCopy.disabled=remixChat.disabled=!changed;remixError.textContent='';}
   catch(error){remixError.textContent=error.message;remixCopy.disabled=remixChat.disabled=true;remixPreview.textContent='';}
   if(draft&&draftModule){draft=draftModule.markExternalIntent(draft,{direction:external,edits:values});editor?.setDraft(draft);}
 }
 function renderFacts(){
   tags.replaceChildren();factRows.replaceChildren();if(!active)return;
   const facts=detailSelectedTagsFor(active.artwork,4,api,locale);
   for(const fact of facts){tags.append(node('li','artwork-detail__tag',fact.label));const row=node('label','remix-fact');const label=node('span','',fact.label);const select=node('select');select.setAttribute('aria-label',`${fact.label}: ${lang().remix}`);
    for(const action of ['keep','remove','replace']){const option=node('option','',lang()[action]);option.value=action;select.append(option);}
    const input=node('input');input.maxLength=160;input.placeholder=lang().replacement;input.setAttribute('aria-label',`${lang().replace}: ${fact.label}`);
    const value=edits.get(fact.id)||{action:'keep',replacement:'',label:fact.label};value.label=fact.label;select.value=value.action;input.value=value.replacement;input.hidden=value.action!=='replace';
    select.onchange=()=>{const next={...value,...edits.get(fact.id),label:fact.label,action:select.value};if(next.action!=='replace')next.replacement='';edits.set(fact.id,next);input.hidden=next.action!=='replace';input.value=next.replacement;syncRemix();};
    input.oninput=()=>{edits.set(fact.id,{action:'replace',replacement:input.value,label:fact.label});syncRemix();};row.append(label,select,input);factRows.append(row);
   }
 }
 function localize(){
   const s=lang();viewButton.textContent=s.view;editButton.textContent=s.edit;copyButton.textContent=s.copy;downloadButton.textContent=s.download;chatButton.textContent=s.chat;promptSummary.textContent=s.prompt;pending.textContent=s.pending;retry.textContent=editorRetry.textContent=s.retry;
   remixSummary.textContent=s.remix;remixNote.textContent=s.remixNote;externalLabelText.textContent=s.direction;externalInput.placeholder=s.directionHint;remixCopy.textContent=s.copyRemix;remixChat.textContent=s.chatRemix;relatedSummary.textContent=s.related;manual.textContent=s.manual;selectFallback.textContent=s.select;fallbackArea.setAttribute('aria-label',s.copy);configCopy.textContent=s.configCopy;configNote.textContent=s.configNote;
   modeTabs.setAttribute('aria-label',locale==='en'?'Studio mode':'工作室模式');
   if(active){const art=active.artwork;title.textContent=localized(art,'title',locale);description.textContent=localized(art,'description',locale);identity.textContent=localized(api.SERIES.find(item=>item.id===art.seriesId),'label',locale);image.alt=`${title.textContent} — ${s.original}`;renderFacts();renderVariants();}
   editor?.setLanguage(locale);syncMode();
 }
 function syncMode(){
   root.dataset.mode=mode;viewButton.setAttribute('aria-pressed',String(mode==='view'));editButton.setAttribute('aria-pressed',String(mode==='edit'));viewContent.hidden=mode!=='view';editorContent.hidden=mode!=='edit';image.hidden=mode==='edit'&&editorReady;draftHost.hidden=mode!=='edit'||!editorReady;imageLabel.textContent=lang()[mode==='edit'?'draft':'original'];editButton.hidden=!template;modeTabs.hidden=!template;
 }
 async function loadPreview(){
   if(!active)return;const record=active,token=session;releasePreview();const controller=new AbortController();previewAbort=controller;const asset=refFor(record.artwork);if(!asset){imageStatus.textContent=lang().previewFailed;retry.hidden=false;return;}
   imageStatus.textContent=lang().previewLoading;retry.hidden=true;
   try{const lease=await loader.acquire(asset,{signal:controller.signal,purpose:'detailPreview'});if(!current(token,record)){lease.release();return;}previewLease=lease;image.src=lease.url;imageStatus.textContent='';root.dataset.preview='ready';root.dataset.state='ready';}
   catch(error){if(current(token,record)&&error.name!=='AbortError'){imageStatus.textContent=lang().previewFailed;retry.hidden=false;root.dataset.preview='error';}}
 }
 async function ensureEditor(){
   if(!active||!template||editor)return;const token=session,request=++editorRequest,record=active;editorStatus.textContent=lang().editLoading;editorRetry.hidden=true;
   try{
     const [module,drafts]=await Promise.all([import('./studio-editor.js?v=99'),import('./studio-draft.js?v=99')]);
     if(!current(token,record)||request!==editorRequest)return;draftModule=drafts;
     draft ||= drafts.createDraft({artwork:record.artwork,template,language:locale,sessionId:`studio-${token}`,reviewHarness});
     editor=module.createEditor({root:editorControls,artwork:record.artwork,template,draft,loader,language:locale,reviewHarness,
       onDraftChange:(value,meta)=>{if(!current(token,record))return;draft=value;configCopy.disabled=true;if(['reset','cancel'].includes(meta?.reason)){external='';edits=new Map();externalInput.value='';renderFacts();syncRemix();}},
       onStatus:status=>{if(!current(token,record))return;editorStatus.textContent='';if(status?.snapshot||status?.result)successful=status.snapshot||status.result;configCopy.disabled=!(status?.canExport??status?.ready??status?.status==='success');},
       onModeChange:value=>{if(current(token,record))setMode(value,{notify:true});}
     });
     if(editor.element&&!editorControls.contains(editor.element))editorControls.replaceChildren(editor.element);
     if(editor.previewElement)draftHost.replaceChildren(editor.previewElement);editorReady=true;editorStatus.textContent='';syncMode();
   }catch(error){if(current(token,record)&&request===editorRequest){editorStatus.textContent=lang().editFailed;editorRetry.hidden=false;root.dataset.editor='error';}}
 }
 async function setMode(next,{notify:report=false}={}){
   if(next==='edit'&&!template){mode='view';message(lang().notEditable);syncMode();if(report)onModeChange('view');return false;}
   mode=next==='edit'?'edit':'view';syncMode();if(report)onModeChange(mode);if(mode==='edit')await ensureEditor();return true;
 }
 async function updatePrompt(){const record=active,token=session,request=++langRequest;if(!record)return;try{const value=await api.promptFor(record.artwork,{language:locale,target:'image'});if(!current(token,record)||request!==langRequest)return;originalPrompt=promptText(value);promptPreview.textContent=originalPrompt;copyButton.disabled=chatButton.disabled=!originalPrompt;syncRemix();}catch(error){if(current(token,record)&&request===langRequest){message(error.message);copyButton.disabled=chatButton.disabled=true;}}}
 function renderVariants(){variants.replaceChildren();variants.hidden=true;if(!active)return;const art=active.artwork;const entries=(api.getVariants?.(art.id)||[]).filter(item=>item.id!==art.id&&item.variantGroupId===art.variantGroupId&&item.characterId===art.characterId);if(!entries.length)return;variants.hidden=false;variants.setAttribute('aria-label',lang().versions);for(const candidate of entries){const button=node('button','button',localized(candidate,'title',locale));button.onclick=()=>requestExit(()=>switchVariant(candidate.id));variants.append(button);}}
 function clearSession(){closed=true;++session;++editorRequest;++variantRequest;++langRequest;releasePreview();editor?.destroy();editor=null;draft=null;draftModule=null;successful=null;editorReady=false;editorControls.replaceChildren();draftHost.replaceChildren();active=null;template=null;}
 function commit(record,readyPrompt){active=record;closed=false;mode='view';external='';edits=new Map();originalPrompt='';externalInput.value='';fallback.hidden=true;feedback.textContent='';promptDetails.open=remix.open=related.open=false;relatedItems.replaceChildren();pending.hidden=!api.isPreviewArtwork?.(record.artwork);template=getTemplateForArtwork(record.artwork,{reviewHarness});root.dataset.artworkId=record.artwork.id;root.dataset.version=record.artwork.version;root.dataset.state='ready';root.dataset.preview='poster';
   const poster=refFor(record.artwork,'poster');if(poster){image.src=poster.path;image.width=poster.width;image.height=poster.height;}else image.removeAttribute('src');image.hidden=false;downloadButton.disabled=false;copyButton.disabled=chatButton.disabled=true;localize();if(readyPrompt!==undefined){originalPrompt=readyPrompt;promptPreview.textContent=readyPrompt;copyButton.disabled=chatButton.disabled=!readyPrompt;syncRemix();}else void updatePrompt();
 }
 function open({id,version,language:nextLanguage=locale,mode:nextMode='view'}={}){
   clearSession();locale=normalizeLanguage(nextLanguage);const record=snapshotFor(id);
   if(!record||record.artwork.version!==version||!api.canOpenArtwork(record.artwork,version)){root.dataset.state='unavailable';title.textContent=lang().unavailable;return {ok:false};}
   commit(record);void loadPreview();void setMode(nextMode);return {ok:true,artworkId:id,version};
 }
 async function switchVariant(id){if(!active)return {ok:false};const previous=active,token=session,request=++variantRequest;const candidate=(api.getVariants?.(previous.artwork.id)||[]).find(item=>item.id===id);if(!candidate||candidate.characterId!==previous.artwork.characterId||!candidate.variantGroupId||candidate.variantGroupId!==previous.artwork.variantGroupId)return {ok:false};let lease;try{const record=snapshotFor(id);if(!record)throw Error('Unavailable');const asset=refFor(record.artwork);if(!asset)throw Error('Preview missing');lease=await loader.acquire(asset,{purpose:'detailPreview'});let nextPrompt,selectedLocale;do{selectedLocale=locale;nextPrompt=promptText(await api.promptFor(record.artwork,{language:selectedLocale}));}while(selectedLocale!==locale&&current(token,previous));if(!current(token,previous)||request!==variantRequest){lease.release();return {ok:false,cancelled:true};}clearSession();commit(record,nextPrompt);previewLease=lease;image.src=lease.url;imageStatus.textContent='';root.dataset.preview='ready';onVersion(record.artwork);return {ok:true};}catch(error){lease?.release();if(current(token,previous)&&request===variantRequest)message(lang().variantFailed);return {ok:false};}}
 async function copy(value,openChat=false){const record=active,token=session;if(!record||!value)return;const result=openChat?await copyAndOpen(value,{isCurrent:()=>current(token,record)}):await copyText(value,{isCurrent:()=>current(token,record)});if(!current(token,record)||result.cancelled)return;
   const ok=openChat?result.copied:result.ok;if(!ok){fallbackArea.value=value;fallback.hidden=false;fallbackArea.focus();fallbackArea.select();}else fallback.hidden=true;
   if(openChat&&!result.opened){fallback.hidden=false;fallbackArea.value=value;manual.href=result.targetUrl||CHATGPT_URL_FOR_MANUAL_OPEN;}
   message(openChat?(result.opened?lang().chatOpened:lang().chatBlocked):(ok?lang().copied:lang().copyFailed));
 }
 copyButton.onclick=()=>copy(originalPrompt);chatButton.onclick=()=>copy(originalPrompt,true);
 downloadButton.onclick=async()=>{if(!active)return;const record=active,token=session;downloadButton.disabled=true;let result;try{result=await api.downloadAsset(record.asset);if(!result?.blob||result.asset?.sha256!==record.asset.sha256)throw Error('Downloaded asset mismatch');if(current(token,record))message(lang().downloaded);}catch(error){if(current(token,record))message(`${lang().downloadFailed} ${error.message}`);}finally{if(result)setTimeout(()=>result.dispose?.(),1500);if(current(token,record))downloadButton.disabled=false;}};
 viewButton.onclick=()=>setMode('view',{notify:true});editButton.onclick=()=>setMode('edit',{notify:true});retry.onclick=loadPreview;editorRetry.onclick=ensureEditor;
 externalInput.oninput=()=>{external=externalInput.value;syncRemix();};remixCopy.onclick=()=>copy(remixPreview.textContent);remixChat.onclick=()=>copy(remixPreview.textContent,true);selectFallback.onclick=()=>{fallbackArea.focus();fallbackArea.select();};
 configCopy.onclick=()=>{const snapshot=editor?.getSnapshot?.()||successful;if(!snapshot)return;try{copy(buildConfigurationPrompt({artwork:active.artwork,template,snapshot,language:locale}));}catch(error){message(error.message);}};
 related.ontoggle=()=>{if(!related.open||relatedItems.childElementCount||!active)return;for(const art of api.ARTWORKS.filter(item=>item.seriesId===active.artwork.seriesId&&item.id!==active.artwork.id).slice(0,3)){const button=node('button','related-character');const poster=refFor(art,'poster');if(poster){const img=new Image();img.src=poster.path;img.alt='';img.width=64;img.height=64;button.append(img);}button.append(node('span','',localized(art,'title',locale)));button.onclick=()=>requestExit(()=>onRelated(art));relatedItems.append(button);}};
 function hasDirty(){return Boolean(external.trim()||[...edits.values()].some(item=>item.action!=='keep')||(draft&&draftModule?.isDraftDirty(draft)));}
 localize();return {element:root,open,close:clearSession,setMode,switchVariant,setLanguage:async next=>{locale=normalizeLanguage(next);localize();await updatePrompt();},hasDirty,getState:()=>({artwork:active?.artwork,id:active?.artwork.id,version:active?.artwork.version,language:locale,originalPrompt,additionalDirection:external,edits:[...edits.values()],modifiedPrompt:remixPreview.textContent,previewOnly:Boolean(active&&api.isPreviewArtwork?.(active.artwork)),imageLoaded:root.dataset.preview==='ready',mode,draft,sessionId:session,templateId:template?.id,closed,loader:loader.stats?.()}),getSnapshot:()=>active,destroy:()=>{clearSession();loader.releaseAll();root.remove();}};
}
