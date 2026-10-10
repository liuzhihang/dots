const strings = {
  en: {
    skip:'Skip to content', back:'Back', close:'Close studio', gallery:'Characters', guide:'Guide',
    eyebrow:'SMALL CHARACTERS. ENDLESS STORIES.', galleryTitle:'Make It Your Dot.', galleryDescription:'Pick a character. Copy a prompt. Make it yours.',
    copyDotsPrompt:'Copy Dots Prompt', browse:'Browse characters', searchLabel:'Search characters', searchPlaceholder:'Search characters, colors, little details…',
    clearSearch:'Clear search',clearAll:'Clear all',sortLabel:'Sort characters',curated:'Curated',nameSort:'Name',
    emptyTitle:'No matching characters.',emptyDescription:'Try another word or clear your filters.',
    notFound:'This page isn’t here.',notFoundDescription:'The link or artwork version is unavailable.',backGallery:'Back to characters',
    footer:'Small characters. New possibilities.',view:'View character',imageFailed:'Preview unavailable',retry:'Try again',
    copied:'Prompt copied.',copyFailed:'Copy wasn’t available. Select and copy the full prompt below.',count:n=>`${n} ${n===1?'character':'characters'}`,
    invalidQuery:'This filter is unavailable. Clear filters to continue.',
    guideTitle:'A little character. Your next idea.',guideDescription:'From a favorite face to something that feels like you.',
    steps:[['Find your character','Explore five series, search for a detail, and open a character to see its original artwork and Prompt.'],['Make it yours','Copy the Prompt or download the original. When a character has an adapted, approved template, Edit changes its supported colors, eyes, and accessories locally. For other changes, describe your idea in the ChatGPT remix section.'],['Take your creation with you','Export the current edited PNG or keep the original download. To create in ChatGPT, attach the image yourself, paste the Prompt, check it, and send. Only listed files and supported options are available.']],
    guideNote:'Original downloads and edited PNG exports are separate. Local edits leave the original unchanged. ChatGPT requests do not change the preview.',
    openChatGPT:'Open ChatGPT',guideFooter:'No account needed. No uploads or messages are sent by this site.',
    discard:'Discard the unsaved changes to this character?',stay:'Keep editing',discardAction:'Discard changes'
  },
  'zh-CN': {
    skip:'跳到主要内容',back:'返回',close:'关闭工作室',gallery:'角色库',guide:'指南',
    eyebrow:'小小角色，故事由你。',galleryTitle:'创作属于你的 Dots。',galleryDescription:'挑选角色，复制 Prompt，创作你的版本。',
    copyDotsPrompt:'复制 Dots Prompt',browse:'浏览角色',searchLabel:'搜索角色',searchPlaceholder:'搜索角色、颜色或小细节…',
    clearSearch:'清除搜索',clearAll:'清空筛选',sortLabel:'角色排序',curated:'精选顺序',nameSort:'按名称',
    emptyTitle:'没有匹配的角色。',emptyDescription:'换个关键词，或清空筛选再看看。',
    notFound:'没有找到这个页面。',notFoundDescription:'链接或作品版本暂不可用。',backGallery:'返回角色库',
    footer:'小小角色，新的可能。',view:'查看角色',imageFailed:'预览暂不可用',retry:'重试',
    copied:'Prompt 已复制。',copyFailed:'未能自动复制，请选择并复制下方全文。',count:n=>`${n} 个角色`,
    invalidQuery:'此筛选条件不可用，请清空筛选继续浏览。',
    guideTitle:'从小角色，到你的新想法。',guideDescription:'挑选喜欢的模样，赋予它你的故事。',
    steps:[['找到喜欢的角色','浏览五种系列，或搜索一个细节。打开角色，即可查看完整作品与原始 Prompt。'],['创作你的版本','复制 Prompt 或下载原图。角色有已适配并批准的模板时，可在编辑状态本地更改支持的颜色、眼型与配件。其他修改请在 ChatGPT 二创要求中描述。'],['带走你的作品','导出当前编辑 PNG，或单独下载原图。在 ChatGPT 创作时，请自行附图、粘贴 Prompt、检查并发送。下载与选项以实际提供的内容为准。']],
    guideNote:'原图下载与编辑 PNG 导出是两条独立操作。本地编辑不改变原作品，ChatGPT 二创要求不改变当前预览。',
    openChatGPT:'打开 ChatGPT',guideFooter:'无需账号。本站不会上传图片或代你发送消息。',
    discard:'放弃这个角色尚未保存的修改？',stay:'继续编辑',discardAction:'放弃修改'
  }
};
export function t(language,key,...args){const value=strings[language]?.[key]??strings.en[key];return typeof value==='function'?value(...args):value;}
// New namespace only. No legacy route/storage migration or cleanup.
export function storedPreference(key,fallback){try{return localStorage.getItem(`dots-v99-${key}`)??fallback;}catch{return fallback;}}
export function savePreference(key,value){try{localStorage.setItem(`dots-v99-${key}`,value);}catch{/* Session behavior remains available. */}}
export const label=(record,language)=>record?.titleByLanguage?.[language]??record?.labelByLanguage?.[language]??record?.title??record?.label??'';
export function escapeHTML(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
