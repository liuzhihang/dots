const strings = {
  en: {
    skip:'Skip to content', back:'Back', close:'Close studio', gallery:'Characters',
    eyebrow:'SMALL CHARACTERS. ENDLESS STORIES.', galleryTitle:'Make It Your Dot.', galleryDescription:'Pick a character. Copy a prompt. Make it yours.',
    copyDotsPrompt:'Copy Dots Prompt', browse:'Browse characters', searchLabel:'Search characters', searchPlaceholder:'Search characters, colors, little details…',
    clearSearch:'Clear search',clearAll:'Clear all',sortLabel:'Sort characters',curated:'Curated',nameSort:'Name',
    emptyTitle:'No matching characters.',emptyDescription:'Try another word or clear your filters.',
    notFound:'This page isn’t here.',notFoundDescription:'The link or artwork version is unavailable.',backGallery:'Back to characters',
    footer:'Small characters. New possibilities.',feedback:'Feedback',feedbackShort:'Feedback',opensNewTab:' (opens in a new tab)',feedbackNotice:'Submit on GitHub. Sign-in required; submissions are public.',view:'View character',imageFailed:'Preview unavailable',retry:'Try again',
    copied:'Prompt copied.',copyFailed:'Copy wasn’t available. Select and copy the full prompt below.',count:n=>`${n} ${n===1?'look':'looks'}`,
    invalidQuery:'This filter is unavailable. Clear filters to continue.',
    discard:'Discard the unsaved changes to this character?',stay:'Keep editing',discardAction:'Discard changes'
  },
  'zh-CN': {
    skip:'跳到主要内容',back:'返回',close:'关闭工作室',gallery:'角色库',
    eyebrow:'小小角色，故事由你。',galleryTitle:'创作属于你的 Dots。',galleryDescription:'挑选角色，复制 Prompt，创作你的版本。',
    copyDotsPrompt:'复制 Dots Prompt',browse:'浏览角色',searchLabel:'搜索角色',searchPlaceholder:'搜索角色、颜色或小细节…',
    clearSearch:'清除搜索',clearAll:'清空筛选',sortLabel:'角色排序',curated:'精选顺序',nameSort:'按名称',
    emptyTitle:'没有匹配的角色。',emptyDescription:'换个关键词，或清空筛选再看看。',
    notFound:'没有找到这个页面。',notFoundDescription:'链接或作品版本暂不可用。',backGallery:'返回角色库',
    footer:'小小角色，新的可能。',feedback:'反馈建议',feedbackShort:'反馈',opensNewTab:'（在新标签页打开）',feedbackNotice:'通过 GitHub 提交，需登录；内容公开。',view:'查看角色',imageFailed:'预览暂不可用',retry:'重试',
    copied:'Prompt 已复制。',copyFailed:'未能自动复制，请选择并复制下方全文。',count:n=>`${n} 个形象`,
    invalidQuery:'此筛选条件不可用，请清空筛选继续浏览。',
    discard:'放弃这个角色尚未保存的修改？',stay:'继续编辑',discardAction:'放弃修改'
  }
};
export function t(language,key,...args){const value=strings[language]?.[key]??strings.en[key];return typeof value==='function'?value(...args):value;}
// New namespace only. No legacy route/storage migration or cleanup.
export function storedPreference(key,fallback){try{return localStorage.getItem(`dots-v99-${key}`)??fallback;}catch{return fallback;}}
export function savePreference(key,value){try{localStorage.setItem(`dots-v99-${key}`,value);}catch{/* Session behavior remains available. */}}
export const label=(record,language)=>record?.titleByLanguage?.[language]??record?.labelByLanguage?.[language]??record?.title??record?.label??'';
export function escapeHTML(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
