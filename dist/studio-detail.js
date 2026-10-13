import { copyText, copyAndOpen, CHATGPT_URL_FOR_MANUAL_OPEN } from './studio-actions.js?v=110';
import { ARTWORKS, canOpenArtwork, createSnapshot, getArtwork, getAsset, getVariants, isPreviewArtwork } from './studio-artwork-catalog.js?v=110';
import { TAGS, TAG_DIMENSIONS } from './studio-tags.js?v=110';
import { SERIES } from './studio-content.js?v=110';
import { buildArtworkEditPrompt, buildConfigurationPrompt, promptFor } from './studio-prompt.js?v=110';
import { downloadAsset } from './studio-asset-loader.js?v=110';
import { createPreviewLoader } from './studio-preview-loader.js?v=110';
import { getTemplateForArtwork } from './studio-edit-templates.js?v=110';
import { getDefaultLook, getGalleryLook, getLookAsset, queryGalleryLooks, validateGalleryLook } from './studio-gallery-looks.js?v=110';
import { GALLERY_FIGURES, getFigureForLook, getFigureInitialState, getFigureStates, getGalleryFigure, queryGalleryFigures } from './studio-gallery-figures.js?v=110';
const DEFAULT_DETAIL_API = { ARTWORKS, TAGS, TAG_DIMENSIONS, SERIES, canOpenArtwork, createSnapshot, getArtwork, getAsset, getVariants, isPreviewArtwork, promptFor, downloadAsset, getDefaultLook, getGalleryLook, getLookAsset, queryGalleryLooks, validateGalleryLook, GALLERY_FIGURES, getFigureForLook, getFigureInitialState, getFigureStates, getGalleryFigure, queryGalleryFigures };
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
 en:{original:'Original',look:'Registered look',current:'Current preview',originalAsset:'Original artwork & Prompt',copy:'Copy Prompt',export:'Export PNG',historicalExport:'Export historical original',chat:'Use in ChatGPT',prompt:'Original Prompt',pending:'Preview · Pending art review',editLoading:'Loading the editor…',editFailed:'The editor could not load. Try again.',retry:'Retry',previewLoading:'Loading a sharper preview…',previewFailed:'The sharper preview is unavailable. The cover remains visible.',direction:'Additional instructions (optional)',directionHint:'Describe what you would like to create…',directionNote:'Added to the Prompt. This does not change the preview or exported image.',chatHint:'In ChatGPT, attach your image if needed, review the Prompt, and send.',copied:'Prompt copied.',copyFailed:'Copy failed. Select and copy the text below.',downloaded:'PNG download started.',downloadFailed:'Download failed. Please retry.',chatOpened:'ChatGPT opened. Review the Prompt, attach your image if needed, and send.',chatBlocked:'ChatGPT could not open. Use the manual link below.',manual:'Open ChatGPT manually',select:'Select text',versions:'Existing versions',related:'Related characters',variantFailed:'This version could not load. The current version remains selected.',unavailable:'This artwork version is unavailable.'},
 'zh-CN':{original:'原作',look:'登记外观',current:'当前预览',originalAsset:'原始作品与 Prompt',copy:'复制 Prompt',export:'导出 PNG',historicalExport:'导出历史原图',chat:'在 ChatGPT 中使用',prompt:'原始 Prompt',pending:'预览 · 待美术确认',editLoading:'正在加载编辑器…',editFailed:'编辑器加载失败，请重试。',retry:'重试',previewLoading:'正在加载更清晰的预览…',previewFailed:'高清预览暂不可用，仍显示封面。',direction:'补充要求（选填）',directionHint:'描述你想创作的内容…',directionNote:'补充到 Prompt 中，不改变当前预览或导出图片。',chatHint:'在 ChatGPT 中按需附图，检查 Prompt 后自行发送。',copied:'Prompt 已复制。',copyFailed:'复制失败，请选择并复制下方全文。',downloaded:'已开始下载 PNG。',downloadFailed:'下载失败，请重试。',chatOpened:'已打开 ChatGPT，请检查 Prompt、按需附图并发送。',chatBlocked:'未能打开 ChatGPT，可使用下方手动链接。',manual:'手动打开 ChatGPT',select:'选择全文',versions:'已有版本',related:'相关角色',variantFailed:'此版本加载失败，仍保留当前版本。',unavailable:'此作品版本不可用。'}
};

/** One CharacterStudio: one preview, one optional direction, and three take-away actions. */
export function createDetailController({api=DEFAULT_DETAIL_API,language='en',notify=()=>{},onVersion=()=>{},onFigureStateChange=()=>{},onRelated=()=>{},requestExit=action=>action(),reviewHarness=false,loader=createPreviewLoader()}={}) {
 let locale=normalizeLanguage(language), active=null, activeLook=null, session=0, draft=null, draftModule=null, editor=null, template=null;
 let activeFigure=null, activeFigureState=null, figureBaselineStateId=null, figureEditorController=null;
 let previewLease=null, previewAbort=null, editorRequest=0, variantRequest=0, langRequest=0, closed=true, originalPrompt='', external='', composedPrompt='', successful=null, editorReady=false, currentReady=false, exporting=false;
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
 const related=node('section','studio-related');const relatedTitle=node('h4');const relatedItems=node('div','related-items');related.append(relatedTitle,relatedItems);mediaColumn.append(related);
 const content=node('div','studio-content');
 const identity=node('p','studio-series');const title=node('h3','artwork-detail__title');title.id='artwork-detail-title';
 const pending=node('p','pending-label');pending.hidden=true;
 const description=node('p','artwork-detail__description');const tags=node('ul','artwork-detail__tags');
 const artworkInfo=node('section','studio-artwork-info');artworkInfo.append(description,tags);
 const promptDetails=node('details','studio-prompt');const promptSummary=node('summary');const promptPreview=node('pre','artwork-detail__prompt-preview');promptDetails.append(promptSummary,promptPreview);
 const originalDetails=node('details','studio-original');const originalSummary=node('summary');originalDetails.append(originalSummary,artworkInfo,promptDetails);
 const editorContent=node('section','studio-editor-content');editorContent.hidden=true;
 const editorStatus=node('p','studio-editor-status');editorStatus.setAttribute('role','status');const editorRetry=node('button','button studio-editor-retry');editorRetry.hidden=true;const editorControls=node('div','studio-editor-host');editorContent.append(editorStatus,editorRetry,editorControls);
 const promptActions=node('section','studio-prompt-actions');
 const externalLabel=node('label','prompt-direction');const externalLabelText=node('span');const externalInput=node('textarea','artwork-detail__additional-direction');externalInput.rows=3;externalInput.maxLength=2000;externalLabel.append(externalLabelText,externalInput);
 const directionNote=node('p','helper prompt-direction-note');const chatHint=node('p','helper chatgpt-hint');
 const actions=node('div','studio-actions');
 const copyButton=node('button','button primary artwork-detail__copy');copyButton.dataset.action='copy-prompt';
 const chatButton=node('button','button artwork-detail__open-chatgpt');chatButton.dataset.action='open-chatgpt';
 const exportButton=node('button','button quiet artwork-detail__export');exportButton.dataset.action='export';
 for(const button of [copyButton,chatButton,exportButton])button.type='button';
 actions.append(copyButton,chatButton,exportButton);promptActions.append(externalLabel,directionNote,actions,chatHint);
 const feedback=node('p','artwork-detail__feedback');feedback.setAttribute('role','status');
 const fallback=node('section','artwork-detail__copy-fallback');fallback.hidden=true;const fallbackArea=node('textarea','artwork-detail__fallback-text');fallbackArea.rows=5;fallbackArea.readOnly=true;const selectFallback=node('button','text-button');const manual=node('a','button quiet');manual.href=CHATGPT_URL_FOR_MANUAL_OPEN;manual.target='_blank';manual.rel='noopener noreferrer';fallback.append(fallbackArea,selectFallback,manual);
 content.append(identity,title,pending,editorContent,promptActions,feedback,originalDetails,fallback);root.append(mediaColumn,content);
 const current=(token,record=active)=>!closed&&token===session&&record===active;
 const message=value=>{feedback.textContent=value;};
 const releasePreview=()=>{previewAbort?.abort();previewAbort=null;previewLease?.release();previewLease=null;};
 const refFor=(artwork,purpose='preview')=>api.getAsset(purpose==='poster'?artwork.assetRefs?.poster:(window.innerWidth<650?artwork.assetRefs?.detail512:artwork.assetRefs?.detail1024)||artwork.displayPreviews?.large);
 const lookPosterFor=look=>{
   const refs=look?.assetRefs||{};const selected=window.innerWidth<650?(refs.poster||refs.poster512):(refs.poster512||refs.poster);
   return selected&&api.getLookAsset?.(selected)||null;
 };
 const isDerivedLook=look=>Boolean(look&&!look.isDefault);
 const defaultLookFor=artwork=>{
   const look=api.getDefaultLook?.(artwork);
   return look?.isDefault===true&&look.artworkId===artwork?.id&&look.artworkVersion===artwork?.version&&(!api.validateGalleryLook||api.validateGalleryLook(look))?look:null;
 };
 const validLook=look=>Boolean(look&&(!api.validateGalleryLook||api.validateGalleryLook(look)));
 const templateFor=(artwork,look)=>{
   const selected=getTemplateForArtwork(artwork,{reviewHarness});
   if(look&&(!selected||selected.id!==look.templateId||selected.version!==look.templateVersion))return null;
   return selected;
 };
 const detailPosterFor=(artwork,look)=>lookPosterFor(look)||refFor(artwork,'poster');
 const snapshotFor=id=>api.createSnapshot(id,api.isPreviewArtwork?.(id)?{allowPreview:true}:undefined);
 function recordForFigureState(state,figure=activeFigure){
   if(!figure||state?.figureId!==figure.id||!state?.look||!state?.artwork||!state?.template||!state?.recipe)return null;
   const artworkId=state.artwork.id,artworkVersion=state.artwork.version;
   if(!artworkId||!artworkVersion||state.look.artworkId!==artworkId||state.look.artworkVersion!==artworkVersion
     ||state.look.templateId!==state.template.id||state.look.templateVersion!==state.template.version
     ||!validLook(state.look))return null;
   const recipe=state.template.recipes?.find(row=>row.id===state.recipe.id);
   const selections=state.recipe.selections||state.selections;
   if(!recipe||!selections||Object.keys(recipe.selections||{}).length!==Object.keys(selections||{}).length
     ||Object.keys(recipe.selections||{}).some(key=>recipe.selections[key]!==selections[key]))return null;
   const record=snapshotFor(artworkId);
   if(!record||record.artwork.version!==artworkVersion||!api.canOpenArtwork(record.artwork,record.artwork.version))return null;
   const registeredTemplate=templateFor(record.artwork,state.look);
   if(!registeredTemplate||registeredTemplate.id!==state.template.id||registeredTemplate.version!==state.template.version)return null;
   return record;
 }
 function syncActions(){
   composedPrompt='';
   const snapshot=template&&currentReady?editor?.getSnapshot():null;
   try{
     const base=template?(snapshot?buildConfigurationPrompt({artwork:active.artwork,template,snapshot,look:activeLook,language:locale}):''):originalPrompt;
     if(base)composedPrompt=buildArtworkEditPrompt({basePrompt:base,artwork:active.artwork,additionalDirection:external,language:locale});
   }catch(error){message(error.message);}
   copyButton.disabled=chatButton.disabled=!active||!composedPrompt;
   exportButton.disabled=!active||exporting||Boolean(template&&(!currentReady||!snapshot))||Boolean(isDerivedLook(activeLook)&&(!template||!currentReady||!snapshot));
   const historical = active?.asset?.alpha?.hasTransparency !== true;
   exportButton.textContent = historical && !template ? lang().historicalExport : lang().export;
 }
 function syncExternalIntent(){
   if(activeFigure)figureEditorController?.setExternalIntent(external);
   else if(draft&&draftModule){draft=draftModule.markExternalIntent(draft,{direction:external,edits:[]});editor?.setDraft(draft);}
   syncActions();
 }
 function renderFacts(){tags.replaceChildren();if(active)for(const fact of detailSelectedTagsFor(active.artwork,4,api,locale))tags.append(node('li','artwork-detail__tag',fact.label));}
 function renderRelated(){
   relatedItems.replaceChildren();
   const entries=activeFigure&&api.queryGalleryFigures
     ?api.queryGalleryFigures({text:'',sort:'curated',language:locale}).filter(item=>item.seriesId===activeFigure.seriesId&&item.id!==activeFigure.id).slice(0,3)
     :activeLook&&api.queryGalleryLooks
     ?api.queryGalleryLooks({text:'',sort:'curated',language:locale}).filter(item=>item.seriesId===activeLook.seriesId&&item.id!==activeLook.id&&(!api.validateGalleryLook||api.validateGalleryLook(item))).slice(0,3)
     :active?api.ARTWORKS.filter(item=>item.seriesId===active.artwork.seriesId&&item.id!==active.artwork.id).slice(0,3):[];
   related.hidden=!entries.length;
   for(const item of entries){const figure=Boolean(api.getFigureStates?.(item)?.length),look=Boolean(item?.artworkId),button=node('button','related-character');button.type='button';const poster=figure?lookPosterFor(api.getFigureInitialState?.(item)?.look):look?lookPosterFor(item):refFor(item,'poster');if(poster){const img=new Image();img.src=poster.path;img.alt='';img.width=poster.width;img.height=poster.height;img.loading='lazy';img.decoding='async';button.append(img);}button.append(node('span','',localized(item,'title',locale)));button.onclick=()=>requestExit(()=>onRelated(item));relatedItems.append(button);}
 }
 function localize(){
   const s=lang();copyButton.textContent=s.copy;chatButton.textContent=s.chat;exportButton.textContent=s.export;originalSummary.textContent=s.originalAsset;promptSummary.textContent=s.prompt;pending.textContent=s.pending;retry.textContent=editorRetry.textContent=s.retry;
   externalLabelText.textContent=s.direction;externalInput.placeholder=s.directionHint;directionNote.textContent=s.directionNote;chatHint.textContent=s.chatHint;relatedTitle.textContent=s.related;manual.textContent=s.manual;selectFallback.textContent=s.select;fallbackArea.setAttribute('aria-label',s.copy);
   if(active){const art=active.artwork,identitySeries=activeFigure?.seriesId||activeLook?.seriesId||art.seriesId;title.textContent=localized(activeFigure||activeLook||art,'title',locale);description.textContent=localized(activeFigure||art,'description',locale);identity.textContent=localized(api.SERIES.find(item=>item.id===identitySeries),'label',locale);image.alt=`${title.textContent} — ${s[activeFigure||isDerivedLook(activeLook)?'look':'original']}`;renderFacts();renderVariants();renderRelated();}
   editor?.setLanguage(locale);syncPresentation();syncActions();
 }
 function syncPresentation(){
   const hasPreview=Boolean(template&&editorReady&&successful);
   root.dataset.editable=String(Boolean(template));editorContent.hidden=!template;
   image.hidden=hasPreview;draftHost.hidden=!hasPreview;imageLabel.textContent=lang()[hasPreview?'current':activeFigure||isDerivedLook(activeLook)?'look':'original'];
   imageStatus.hidden=hasPreview;retry.hidden=hasPreview||root.dataset.preview!=='error';originalSummary.hidden=!template;
   if(!template)originalDetails.open=true;
 }
 async function loadPreview(){
   if(!active)return;const record=active,token=session;releasePreview();
   if(activeFigure){imageStatus.textContent='';root.dataset.preview=lookPosterFor(activeLook)?'ready':'error';if(root.dataset.preview==='error')imageStatus.textContent=lang().previewFailed;root.dataset.state='ready';syncPresentation();return;}
   if(isDerivedLook(activeLook)){imageStatus.textContent='';root.dataset.preview=lookPosterFor(activeLook)?'ready':'error';if(root.dataset.preview==='error')imageStatus.textContent=lang().previewFailed;root.dataset.state='ready';syncPresentation();return;}
   const controller=new AbortController();previewAbort=controller;const asset=refFor(record.artwork);if(!asset){imageStatus.textContent=lang().previewFailed;root.dataset.preview='error';syncPresentation();return;}
   imageStatus.textContent=lang().previewLoading;retry.hidden=true;
   try{const lease=await loader.acquire(asset,{signal:controller.signal,purpose:'detailPreview'});if(!current(token,record)){lease.release();return;}previewLease=lease;image.src=lease.url;imageStatus.textContent='';root.dataset.preview='ready';root.dataset.state='ready';syncPresentation();}
   catch(error){if(current(token,record)&&error.name!=='AbortError'){imageStatus.textContent=lang().previewFailed;retry.hidden=false;root.dataset.preview='error';syncPresentation();}}
 }
 async function ensureEditor(){
   if(!active||!template||editor)return;const token=session,request=++editorRequest,record=active;editorStatus.textContent=lang().editLoading;editorRetry.hidden=true;root.dataset.editor='loading';currentReady=false;syncActions();
   try{
     if(activeFigure){
       const figure=activeFigure,initialState=activeFigureState;
       const module=await import('./studio-figure-editor.js?v=110');
       if(!current(token)||request!==editorRequest)return;
       figureEditorController=module.createFigureEditor({
         root:editorControls,previewRoot:draftHost,figure,initialState,sessionId:`studio-${token}`,loader,language:locale,
         resolveState:state=>recordForFigureState(state,figure),
         onStateChange:(state,nextRecord,meta)=>{
           if(!current(token))return;
           active=nextRecord;activeLook=state.look;template=state.template;activeFigureState=state;
           draft=figureEditorController?.getDraft()||null;successful=meta?.snapshot||null;currentReady=Boolean(successful);
           root.dataset.artworkId=nextRecord.artwork.id;root.dataset.version=nextRecord.artwork.version;root.dataset.lookId=state.look.id;root.dataset.appearance=state.look.appearance;root.dataset.figureStateId=state.id;
           originalPrompt='';promptPreview.textContent='';localize();syncPresentation();syncActions();
           onFigureStateChange(state,{figure,record:nextRecord,sessionId:`studio-${token}`});
           void updatePrompt();
         },
         onStatus:status=>{
           if(!current(token))return;
           editorStatus.textContent=status?.error?status.message||lang().editFailed:'';
           if(status?.snapshot)successful=status.snapshot;
           draft=figureEditorController?.getDraft()||draft;
           currentReady=Boolean(status?.canExport&&status?.snapshot);syncPresentation();syncActions();
         }
       });
       editor=figureEditorController;draft=figureEditorController.getDraft();editorReady=true;editorStatus.textContent='';root.dataset.editor='ready';
       syncExternalIntent();syncPresentation();syncActions();return;
     }
     const [module,drafts]=await Promise.all([import('./studio-editor.js?v=110'),import('./studio-draft.js?v=110')]);
     if(!current(token,record)||request!==editorRequest)return;draftModule=drafts;
     draft ||= drafts.createDraft({artwork:record.artwork,template,look:activeLook,language:locale,sessionId:`studio-${token}`,reviewHarness});
     editor=module.createEditor({root:editorControls,artwork:record.artwork,template,look:activeLook,draft,loader,language:locale,reviewHarness,
       onDraftChange:value=>{if(!current(token,record))return;draft=value;currentReady=false;syncActions();},
       onStatus:status=>{if(!current(token,record))return;editorStatus.textContent='';if(status?.snapshot)successful=status.snapshot;currentReady=Boolean(status?.canExport&&status?.snapshot);syncPresentation();syncActions();}
     });
     if(editor.element&&!editorControls.contains(editor.element))editorControls.replaceChildren(editor.element);
     if(editor.previewElement)draftHost.replaceChildren(editor.previewElement);editorReady=true;editorStatus.textContent='';root.dataset.editor='ready';syncExternalIntent();syncPresentation();
   }catch(error){if(current(token,record)&&request===editorRequest){editorStatus.textContent=lang().editFailed;editorRetry.hidden=false;root.dataset.editor='error';currentReady=false;syncActions();}}
 }
 async function updatePrompt(){const record=active,token=session,request=++langRequest;if(!record)return;try{const value=await api.promptFor(record.artwork,{language:locale,target:'image'});if(!current(token,record)||request!==langRequest)return;originalPrompt=promptText(value);promptPreview.textContent=originalPrompt;syncActions();}catch(error){if(current(token,record)&&request===langRequest){message(error.message);originalPrompt='';syncActions();}}}
 function renderVariants(){variants.replaceChildren();variants.hidden=true;if(!active||activeFigure)return;const art=active.artwork;const entries=(api.getVariants?.(art.id)||[]).filter(item=>item.id!==art.id&&item.variantGroupId===art.variantGroupId&&item.characterId===art.characterId);if(!entries.length)return;variants.hidden=false;variants.setAttribute('aria-label',lang().versions);for(const candidate of entries){const button=node('button','button',localized(candidate,'title',locale));button.onclick=()=>requestExit(()=>switchVariant(candidate.id));variants.append(button);}}
 function clearSession(){closed=true;++session;++editorRequest;++variantRequest;++langRequest;releasePreview();editor?.destroy();editor=null;figureEditorController=null;draft=null;draftModule=null;successful=null;editorReady=false;currentReady=false;exporting=false;originalPrompt='';external='';composedPrompt='';activeFigure=null;activeFigureState=null;figureBaselineStateId=null;editorControls.replaceChildren();draftHost.replaceChildren();active=null;activeLook=null;template=null;delete root.dataset.lookId;delete root.dataset.appearance;delete root.dataset.figureId;delete root.dataset.figureVersion;delete root.dataset.figureStateId;syncActions();}
 function commit(record,readyPrompt,look=null,figure=null,state=null){active=record;activeLook=look;activeFigure=figure;activeFigureState=state;figureBaselineStateId=state?.id||null;closed=false;external='';originalPrompt='';externalInput.value='';fallback.hidden=true;feedback.textContent='';originalDetails.open=promptDetails.open=false;pending.hidden=!api.isPreviewArtwork?.(record.artwork);template=state?.template||templateFor(record.artwork,look);root.dataset.artworkId=record.artwork.id;root.dataset.version=record.artwork.version;if(look){root.dataset.lookId=look.id;root.dataset.appearance=look.appearance;}else{delete root.dataset.lookId;delete root.dataset.appearance;}if(figure){root.dataset.figureId=figure.id;root.dataset.figureVersion=figure.version;root.dataset.figureStateId=state?.id||'';}else{delete root.dataset.figureId;delete root.dataset.figureVersion;delete root.dataset.figureStateId;}root.dataset.state='ready';root.dataset.preview='poster';root.dataset.editor=template?'loading':'unavailable';editorStatus.textContent='';
   const poster=detailPosterFor(record.artwork,look);if(poster){image.src=poster.path;image.width=poster.width;image.height=poster.height;}else image.removeAttribute('src');image.hidden=false;localize();if(readyPrompt!==undefined){originalPrompt=readyPrompt;promptPreview.textContent=readyPrompt;syncActions();}else void updatePrompt();
 }
 function open({id,figureId,lookId,version,language:nextLanguage=locale}={}){
   clearSession();locale=normalizeLanguage(nextLanguage);
   if(figureId){
     const figure=api.getGalleryFigure?.(figureId,version),state=figure&&api.getFigureInitialState?.(figure,lookId);
     const record=state&&recordForFigureState(state,figure);
     if(!figure||!state||!record){root.dataset.state='unavailable';title.textContent=lang().unavailable;return {ok:false};}
     commit(record,undefined,state.look,figure,state);void loadPreview();void ensureEditor();
     return {ok:true,figureId:figure.id,figureVersion:figure.version,figureStateId:state.id,artworkId:record.artwork.id,lookId:state.look.id};
   }
   const exactLook=lookId?api.getGalleryLook?.(lookId,version):null;if(lookId&&!validLook(exactLook)){root.dataset.state='unavailable';title.textContent=lang().unavailable;return {ok:false};}const sourceId=exactLook?.artworkId||id;const record=snapshotFor(sourceId);
   if(!record||record.artwork.version!==(exactLook?.artworkVersion||version)||!api.canOpenArtwork(record.artwork,record.artwork.version)){root.dataset.state='unavailable';title.textContent=lang().unavailable;return {ok:false};}
   const look=exactLook||defaultLookFor(record.artwork);
   if(look&&(!look.id||look.artworkId!==record.artwork.id||look.artworkVersion!==record.artwork.version||!templateFor(record.artwork,look))){root.dataset.state='unavailable';title.textContent=lang().unavailable;return {ok:false};}
   if(exactLook&&exactLook.version!==version){root.dataset.state='unavailable';title.textContent=lang().unavailable;return {ok:false};}
   if(!exactLook&&record.artwork.version!==version){root.dataset.state='unavailable';title.textContent=lang().unavailable;return {ok:false};}
   commit(record,undefined,look);void loadPreview();void ensureEditor();return {ok:true,artworkId:sourceId,lookId:look?.id,version};
 }
 async function switchVariant(id){if(!active)return {ok:false};const previous=active,token=session,request=++variantRequest;const candidate=(api.getVariants?.(previous.artwork.id)||[]).find(item=>item.id===id);if(!candidate||candidate.characterId!==previous.artwork.characterId||!candidate.variantGroupId||candidate.variantGroupId!==previous.artwork.variantGroupId)return {ok:false};let lease;try{const record=snapshotFor(id);if(!record)throw Error('Unavailable');const look=defaultLookFor(record.artwork);if(look&&!templateFor(record.artwork,look))throw Error('Template binding mismatch');const asset=refFor(record.artwork);if(!asset)throw Error('Preview missing');lease=await loader.acquire(asset,{purpose:'detailPreview'});let nextPrompt,selectedLocale;do{selectedLocale=locale;nextPrompt=promptText(await api.promptFor(record.artwork,{language:selectedLocale}));}while(selectedLocale!==locale&&current(token,previous));if(!current(token,previous)||request!==variantRequest){lease.release();return {ok:false,cancelled:true};}clearSession();commit(record,nextPrompt,look);previewLease=lease;image.src=lease.url;imageStatus.textContent='';root.dataset.preview='ready';syncPresentation();void ensureEditor();onVersion(look||record.artwork);return {ok:true};}catch(error){lease?.release();if(current(token,previous)&&request===variantRequest)message(lang().variantFailed);return {ok:false};}}
 async function copy(value,openChat=false){const record=active,token=session;if(!record||!value)return;const result=openChat?await copyAndOpen(value,{isCurrent:()=>current(token,record)}):await copyText(value,{isCurrent:()=>current(token,record)});if(!current(token,record)||result.cancelled)return;
   const ok=openChat?result.copied:result.ok;if(!ok){fallbackArea.value=value;fallback.hidden=false;fallbackArea.focus();fallbackArea.select();}else fallback.hidden=true;
   if(openChat&&!result.opened){fallback.hidden=false;fallbackArea.value=value;manual.href=result.targetUrl||CHATGPT_URL_FOR_MANUAL_OPEN;}
   message(openChat?(result.opened?lang().chatOpened:lang().chatBlocked):(ok?lang().copied:lang().copyFailed));
 }
 copyButton.onclick=()=>{if(!copyButton.disabled)void copy(composedPrompt);};chatButton.onclick=()=>{if(!chatButton.disabled)void copy(composedPrompt,true);};
 exportButton.onclick=async()=>{
   if(!active||exportButton.disabled)return;const record=active,token=session;exporting=true;syncActions();let result;
   try{const defaults=template&&draft&&Object.keys(draft.defaultOptions).every(key=>draft.options[key]===draft.defaultOptions[key]);
     if(template&&(activeFigure||isDerivedLook(activeLook)||!defaults)){const exported=await editor.exportPNG();if(exported&&current(token,record))message(lang().downloaded);}
     else{result=await api.downloadAsset(record.asset);if(!result?.blob||result.asset?.sha256!==record.asset.sha256)throw Error('Downloaded asset mismatch');if(current(token,record))message(lang().downloaded);}}
   catch(error){if(current(token,record))message(`${lang().downloadFailed} ${error.message}`);}
   finally{if(result)setTimeout(()=>result.dispose?.(),1500);if(current(token,record)){exporting=false;syncActions();}}
 };
 retry.onclick=loadPreview;editorRetry.onclick=()=>activeFigure&&figureEditorController?figureEditorController.retry():ensureEditor();
 externalInput.oninput=()=>{external=externalInput.value;syncExternalIntent();};selectFallback.onclick=()=>{fallbackArea.focus();fallbackArea.select();};
 function hasDirty(){return activeFigure?Boolean(activeFigureState?.id!==figureBaselineStateId||figureEditorController?.hasDirty()):Boolean(external.trim()||(draft&&draftModule?.isDraftDirty(draft)));}
 localize();return {element:root,open,close:clearSession,switchVariant,setLanguage:async next=>{locale=normalizeLanguage(next);originalPrompt='';localize();await updatePrompt();},hasDirty,getState:()=>({artwork:active?.artwork,id:active?.artwork.id,version:active?.artwork.version,lookId:activeLook?.id,lookVersion:activeLook?.version,appearance:activeLook?.appearance,figureId:activeFigure?.id,figureVersion:activeFigure?.version,figureStateId:activeFigureState?.id,figureValues:activeFigureState?.values||null,figureDirty:activeFigure?hasDirty():false,language:locale,originalPrompt,additionalDirection:external,modifiedPrompt:composedPrompt,promptReady:!copyButton.disabled,exportReady:!exportButton.disabled,previewOnly:Boolean(active&&api.isPreviewArtwork?.(active.artwork)),imageLoaded:root.dataset.preview==='ready',editable:Boolean(template),editorReady,draft,sessionId:session,templateId:template?.id,closed,loader:loader.stats?.()}),getSnapshot:()=>active,getFigureState:()=>activeFigureState,getFigure:()=>activeFigure,destroy:()=>{clearSession();loader.releaseAll();root.remove();}};
}
