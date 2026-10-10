import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(root, 'dist/assets/reveal');
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');

const baseDefs = `
<linearGradient id="shell" x1=".12" y1=".08" x2=".9" y2=".94"><stop stop-color="#fff"/><stop offset=".48" stop-color="#f3eff9"/><stop offset="1" stop-color="#d9d1e7"/></linearGradient>
<linearGradient id="softShell" x1=".12" y1=".08" x2=".92" y2=".94"><stop stop-color="#fff"/><stop offset=".48" stop-color="#f5eee9"/><stop offset="1" stop-color="#dccfcf"/></linearGradient>
<radialGradient id="face" cx=".38" cy=".28" r=".9"><stop stop-color="#fff2e8"/><stop offset="1" stop-color="#efc9b7"/></radialGradient>
<linearGradient id="hair" x1=".1" y1=".1" x2=".85" y2=".95"><stop stop-color="#85634f"/><stop offset=".55" stop-color="#654635"/><stop offset="1" stop-color="#4b342b"/></linearGradient>
<linearGradient id="goldHair" x1=".1" y1=".1" x2=".85" y2=".95"><stop stop-color="#f3ddae"/><stop offset=".56" stop-color="#dfc189"/><stop offset="1" stop-color="#c6a770"/></linearGradient>
<linearGradient id="earGlass" x1=".1" y1=".1" x2=".85" y2=".9"><stop stop-color="#f8d4e5"/><stop offset=".5" stop-color="#ba8fda"/><stop offset="1" stop-color="#8768bc"/></linearGradient>
<filter id="softShadow" x="-20%" y="-20%" width="140%" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="8"/><feOffset dy="7"/><feComponentTransfer><feFuncA type="linear" slope=".13"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<pattern id="fineKnit" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M3 0v12M9 0v12M0 3h12M0 9h12" stroke="#fff" stroke-opacity=".22" stroke-width="1"/><path d="M6 0v12" stroke="#4b756f" stroke-opacity=".12" stroke-width="1"/></pattern>
`;

function svg(body, defs = baseDefs, viewBox = '0 0 512 512') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="${viewBox}" fill="none"><defs>${defs}</defs>${body}</svg>\n`;
}

const appearance = {
  'dots-orb': {
    shortName: '圆球双椭圆眼', description: '圆润球形轮廓；正面只有一对黑色椭圆眼，不加嘴部。',
    factIds: ['shape:sphere', 'facial-features:black-oval-eyes', 'facial-features:no-visible-mouth'],
    body: `<g filter="url(#softShadow)"><circle cx="256" cy="256" r="174" fill="url(#shell)" stroke="#c7bfd3" stroke-width="5"/><ellipse cx="205" cy="224" rx="13" ry="27" fill="#302d38"/><ellipse cx="307" cy="224" rx="13" ry="27" fill="#302d38"/><ellipse cx="201" cy="216" rx="4" ry="7" fill="#fff"/><ellipse cx="303" cy="216" rx="4" ry="7" fill="#fff"/><path d="M121 151c30-40 73-63 121-68" stroke="#fff" stroke-width="9" stroke-linecap="round" opacity=".78"/></g>`
  },
  'grok-orb': {
    shortName: '圆球胶囊眼', description: '软几何球形，配一对平行倾斜的胶囊眼；不使用屏幕脸。',
    factIds: ['shape:sphere', 'facial-features:white-capsule-eyes', 'facial-features:no-visible-mouth'],
    body: `<g filter="url(#softShadow)"><circle cx="256" cy="256" r="169" fill="#cdb9ef" stroke="#a88ccd" stroke-width="5"/><ellipse cx="215" cy="234" rx="14" ry="30" transform="rotate(-14 215 234)" fill="#fff"/><ellipse cx="300" cy="215" rx="14" ry="30" transform="rotate(-14 300 215)" fill="#fff"/><path d="M148 146c29-30 65-49 105-54" stroke="#f7f3ff" stroke-width="10" stroke-linecap="round" opacity=".8"/></g>`
  },
  'grok-cloud': {
    shortName: '云形胶囊眼', description: '柔和云形外轮廓，保留一对成对的白色胶囊眼。',
    factIds: ['shape:cloud', 'facial-features:white-capsule-eyes', 'facial-features:no-visible-mouth'],
    body: `<g filter="url(#softShadow)"><path d="M120 337c-47 0-75-31-75-73 0-39 30-70 69-73 9-63 62-107 126-98 45 6 79 35 95 74 54-7 103 31 103 84 0 48-38 86-88 86H120Z" fill="#cfeee2" stroke="#88cdb6" stroke-width="5" stroke-linejoin="round"/><ellipse cx="211" cy="247" rx="13" ry="29" transform="rotate(-14 211 247)" fill="#fff"/><ellipse cx="294" cy="230" rx="13" ry="29" transform="rotate(-14 294 230)" fill="#fff"/><path d="M123 159c27-27 62-41 99-42" stroke="#f5fffb" stroke-width="10" stroke-linecap="round" opacity=".85"/></g>`
  },
  'grok-rounded-square': {
    shortName: '圆角方形胶囊眼', description: '饱满圆角方形外轮廓，带两枚平行倾斜的白色胶囊眼。',
    factIds: ['shape:rounded-square', 'facial-features:white-capsule-eyes', 'facial-features:no-visible-mouth'],
    body: `<g filter="url(#softShadow)"><rect x="77" y="92" width="358" height="328" rx="112" fill="#b9e8df" stroke="#78c4b5" stroke-width="5"/><ellipse cx="214" cy="234" rx="14" ry="30" transform="rotate(-14 214 234)" fill="#fff"/><ellipse cx="300" cy="215" rx="14" ry="30" transform="rotate(-14 300 215)" fill="#fff"/><path d="M137 151c35-32 73-44 113-44" stroke="#f4fffb" stroke-width="10" stroke-linecap="round" opacity=".85"/></g>`
  },
  'meta-muse-wrapped': {
    shortName: '包覆内嵌脸面', description: '连续包覆式奶油轮廓与内嵌脸面；短圆手臂靠近身体。',
    factIds: ['shape:hooded', 'facial-features:inset-peach-face', 'facial-features:dark-round-eyes', 'facial-features:soft-smile'],
    body: `<g filter="url(#softShadow)"><path d="M132 371V236c0-105 51-167 124-167s124 62 124 167v135c0 48-33 79-124 79s-124-31-124-79Z" fill="url(#softShell)" stroke="#d7c9c0" stroke-width="5"/><path d="M183 224c0-55 29-87 73-87s73 32 73 87v35c0 25-20 44-73 44s-73-19-73-44v-35Z" fill="url(#face)" stroke="#e8c4b0" stroke-width="3"/><circle cx="224" cy="231" r="10" fill="#473935"/><circle cx="288" cy="231" r="10" fill="#473935"/><path d="M236 258q20 17 40 0" stroke="#985f58" stroke-width="6" stroke-linecap="round"/><path d="M134 310c-34 20-45 52-27 77 18 24 51 14 74-9M378 310c34 20 45 52 27 77-18 24-51 14-74-9" fill="#eee4d9" stroke="#d7c9c0" stroke-width="5"/><path d="M175 117c24-25 49-37 81-40" stroke="#fff" stroke-width="9" stroke-linecap="round" opacity=".8"/></g>`
  },
  'human-chestnut': {
    shortName: '栗发精致Q版', description: '栗色分层发丝、圆润脸型与大棕眼；不展示衣物或配饰。',
    factIds: ['shape:chibi-person', 'facial-features:large-brown-eyes', 'facial-features:small-nose', 'facial-features:gentle-smile'],
    body: `<g filter="url(#softShadow)"><path d="M125 424c14-68 57-103 131-103s117 35 131 103" fill="#e8e2eb" stroke="#d2cbd5" stroke-width="4"/><path d="M150 211c-3-83 44-141 111-141 72 0 113 57 105 139l-12 91c-7 52-48 83-94 83s-87-31-94-83l-16-89Z" fill="url(#face)" stroke="#d6a991" stroke-width="4"/><path d="M143 201c-8-58 11-117 55-143 16-10 35-13 51-10 31-31 94-14 119 31 17 30 15 70 2 105-10-25-19-42-32-57-25 13-57 19-91 16-31-3-58 8-84 28-7 9-13 19-20 30Z" fill="url(#hair)" stroke="#5e4033" stroke-width="4"/><path d="M164 173c31-45 67-56 101-47M188 140c40-31 81-35 112-17M232 121c34-23 65-21 89-3" stroke="#ba9377" stroke-width="7" stroke-linecap="round" opacity=".75"/><ellipse cx="216" cy="238" rx="25" ry="29" fill="#fff"/><ellipse cx="299" cy="238" rx="25" ry="29" fill="#fff"/><ellipse cx="216" cy="240" rx="15" ry="21" fill="#70452f"/><ellipse cx="299" cy="240" rx="15" ry="21" fill="#70452f"/><ellipse cx="216" cy="242" rx="7" ry="13" fill="#241d1b"/><ellipse cx="299" cy="242" rx="7" ry="13" fill="#241d1b"/><circle cx="211" cy="231" r="6" fill="#fff"/><circle cx="294" cy="231" r="6" fill="#fff"/><path d="M251 268q6 7 12 0M232 291q25 19 50 0" stroke="#a56a60" stroke-width="5" stroke-linecap="round"/></g>`
  },
  'human-bun': {
    shortName: '栗发丸子头Q版', description: '栗色高丸子头、分层刘海与大棕眼；不展示衣物或配饰。',
    factIds: ['shape:chibi-person', 'facial-features:large-brown-eyes', 'facial-features:small-nose', 'facial-features:gentle-smile'],
    body: `<g filter="url(#softShadow)"><path d="M126 424c14-68 57-103 130-103s116 35 130 103" fill="#ece3d7" stroke="#d5c6b6" stroke-width="4"/><circle cx="257" cy="77" r="56" fill="url(#hair)" stroke="#5e4033" stroke-width="5"/><path d="M220 79q36-34 74 0M220 91q36-34 74 0" stroke="#ba9377" stroke-width="6" stroke-linecap="round"/><circle cx="257" cy="123" r="22" fill="#5d3d30" stroke="#4f342a" stroke-width="5"/><path d="M151 204c-4-68 38-130 108-130 72 0 113 61 102 139l-12 88c-7 53-49 83-94 83s-86-30-94-83l-10-97Z" fill="url(#face)" stroke="#d6a991" stroke-width="4"/><path d="M148 211c-12-56 7-106 50-134 19-13 40-17 61-12 34-19 76-1 94 33 16 30 17 68 7 102-15-23-25-39-40-51-27 20-64 26-97 16-27-8-53 10-75 46Z" fill="url(#hair)" stroke="#5e4033" stroke-width="4"/><path d="M182 170c19-28 46-43 74-43M238 147c25-22 52-25 78-16M176 201q-4 38 0 57" stroke="#ba9377" stroke-width="7" stroke-linecap="round"/><ellipse cx="216" cy="239" rx="25" ry="29" fill="#fff"/><ellipse cx="298" cy="239" rx="25" ry="29" fill="#fff"/><ellipse cx="216" cy="241" rx="15" ry="21" fill="#70452f"/><ellipse cx="298" cy="241" rx="15" ry="21" fill="#70452f"/><ellipse cx="216" cy="243" rx="7" ry="13" fill="#241d1b"/><ellipse cx="298" cy="243" rx="7" ry="13" fill="#241d1b"/><circle cx="211" cy="232" r="6" fill="#fff"/><circle cx="293" cy="232" r="6" fill="#fff"/><path d="M250 269q6 7 12 0M232 292q25 19 50 0" stroke="#a56a60" stroke-width="5" stroke-linecap="round"/><path d="M163 282q-9 47 10 78M348 282q9 47-10 78" stroke="#785545" stroke-width="6" stroke-linecap="round"/></g>`
  },
  'human-blond': {
    shortName: '浅金短发Q版', description: '浅金分层短发、圆润脸型与大棕眼；不展示眼镜或衣物。',
    factIds: ['shape:chibi-person', 'facial-features:large-brown-eyes', 'facial-features:small-nose', 'facial-features:gentle-smile'],
    body: `<g filter="url(#softShadow)"><path d="M126 424c14-68 57-103 130-103s116 35 130 103" fill="#eee8de" stroke="#dad0c5" stroke-width="4"/><path d="M151 211c-3-81 42-138 109-138 72 0 113 57 105 138l-12 90c-7 53-49 83-94 83s-86-30-94-83l-14-90Z" fill="url(#face)" stroke="#d6a991" stroke-width="4"/><path d="M145 208c-7-57 12-115 55-143 21-14 45-15 65-8 38-17 80 4 98 42 13 29 9 61-2 91-15-18-26-33-43-48-24 20-53 29-87 27-32-1-61 11-86 39Z" fill="url(#goldHair)" stroke="#bb9c68" stroke-width="4"/><path d="M169 166c23-35 55-49 85-45M224 138c27-27 58-31 88-18M279 142c19-15 38-18 54-11" stroke="#fff1cf" stroke-width="7" stroke-linecap="round"/><ellipse cx="216" cy="238" rx="25" ry="29" fill="#fff"/><ellipse cx="299" cy="238" rx="25" ry="29" fill="#fff"/><ellipse cx="216" cy="240" rx="15" ry="21" fill="#70452f"/><ellipse cx="299" cy="240" rx="15" ry="21" fill="#70452f"/><ellipse cx="216" cy="242" rx="7" ry="13" fill="#241d1b"/><ellipse cx="299" cy="242" rx="7" ry="13" fill="#241d1b"/><circle cx="211" cy="231" r="6" fill="#fff"/><circle cx="294" cy="231" r="6" fill="#fff"/><path d="M251 268q6 7 12 0M232 291q25 19 50 0" stroke="#a56a60" stroke-width="5" stroke-linecap="round"/></g>`
  },
  'animal-shiba': {
    shortName: '柴犬立耳茶白口鼻', description: '立起的三角耳、茶白口鼻与犬科鼻头，轮廓对应柴犬。',
    factIds: ['shape:shiba', 'facial-features:brown-eyes', 'facial-features:black-nose', 'facial-features:cream-muzzle'],
    body: `<g filter="url(#softShadow)"><path d="M130 193 105 73l126 68q25-8 51 0l125-68-25 120c19 33 25 72 13 112-16 60-72 104-157 104s-141-44-157-104c-12-40-6-79 13-112Z" fill="#e8ad68" stroke="#c98443" stroke-width="5" stroke-linejoin="round"/><path d="m129 112 82 46-64 34Z" fill="#f4ddc0"/><path d="m383 112-82 46 64 34Z" fill="#f4ddc0"/><ellipse cx="206" cy="250" rx="17" ry="22" fill="#533a2f"/><ellipse cx="306" cy="250" rx="17" ry="22" fill="#533a2f"/><circle cx="201" cy="244" r="5" fill="#fff"/><circle cx="301" cy="244" r="5" fill="#fff"/><path d="M199 293q57-44 114 0c-4 47-31 65-57 65s-53-18-57-65Z" fill="#f5e6ce" stroke="#dcc4a1" stroke-width="3"/><ellipse cx="256" cy="287" rx="16" ry="12" fill="#382e2c"/><path d="M242 310q14 14 28 0" stroke="#8c5c4f" stroke-width="5" stroke-linecap="round"/></g>`
  },
  'animal-cat': {
    shortName: '猫耳蓝眼细胡须', description: '三角猫耳、蓝色眼睛、粉鼻与细胡须，保留猫科口鼻。',
    factIds: ['shape:cat', 'facial-features:blue-eyes', 'facial-features:pink-nose', 'facial-features:feline-muzzle', 'facial-features:whiskers'],
    body: `<g filter="url(#softShadow)"><path d="m132 198-21-122 132 67q27-9 52 0L427 76l-21 122c21 32 27 74 15 113-18 59-76 96-165 96S109 492 91 433c-12-39-6-81 15-113Z" fill="#f4f0eb" stroke="#d9d1c7" stroke-width="5" stroke-linejoin="round"/><path d="m133 123 88 46-66 23Z" fill="#e9c9cb"/><path d="m379 123-88 46 66 23Z" fill="#e9c9cb"/><ellipse cx="202" cy="250" rx="19" ry="24" fill="#69a4cf"/><ellipse cx="310" cy="250" rx="19" ry="24" fill="#69a4cf"/><ellipse cx="202" cy="250" rx="7" ry="16" fill="#34404b"/><ellipse cx="310" cy="250" rx="7" ry="16" fill="#34404b"/><path d="M218 292q38-30 76 0-2 39-38 42-36-3-38-42Z" fill="#fff" stroke="#ddd2ca" stroke-width="3"/><path d="m246 286 12 9 12-9-12-9Z" fill="#dd9ba1"/><path d="M212 303 150 292M213 318 150 325M300 303 362 292M299 318 362 325" stroke="#aaa3a0" stroke-width="4" stroke-linecap="round"/></g>`
  },
  'animal-husky': {
    shortName: '哈士奇立耳灰白面罩', description: '立起三角耳、灰白面部面罩、犬科口鼻与深色鼻头。',
    factIds: ['shape:husky', 'facial-features:brown-eyes', 'facial-features:dark-nose', 'facial-features:husky-mask'],
    body: `<g filter="url(#softShadow)"><path d="m133 195-23-119 130 66q27-9 52 0l130-66-23 119c21 31 27 75 15 114-18 60-76 96-158 96S116 369 98 309c-12-39-6-83 15-114Z" fill="#c8ced5" stroke="#a1aab6" stroke-width="5" stroke-linejoin="round"/><path d="M143 198q44 17 71 58l42 76 42-76q27-41 71-58c-11 78-42 138-113 138s-102-60-113-138Z" fill="#f4f1ec"/><path d="m134 124 84 42-66 22ZM378 124l-84 42 66 22Z" fill="#e8ebee"/><ellipse cx="205" cy="245" rx="17" ry="21" fill="#554235"/><ellipse cx="307" cy="245" rx="17" ry="21" fill="#554235"/><circle cx="200" cy="239" r="5" fill="#fff"/><circle cx="302" cy="239" r="5" fill="#fff"/><path d="M211 291q45-34 90 0-3 44-45 48-42-4-45-48Z" fill="#f7f3ee"/><ellipse cx="256" cy="283" rx="16" ry="12" fill="#403a3b"/><path d="M244 307q12 12 24 0" stroke="#8a6e66" stroke-width="5" stroke-linecap="round"/></g>`
  }
};

const palettePairs = [
  ['blue-plush', '#4188e5', 'short-plush', 'asset:reveal:palette:blue-plush', 'candidate-dots-20261005', '蓝色短绒', '蓝色与短绒毛质感分开呈现。'],
  ['purple-matte', '#9874cf', 'soft-matte', 'asset:reveal:palette:purple-matte', 'candidate-grok-20261005', '紫色柔和哑光', '紫色主色与柔和哑光表面样片。'],
  ['cream-plush', '#e9dcc2', 'short-plush', 'asset:reveal:palette:cream-plush', 'candidate-meta-muse-20261005', '奶油短绒', '奶油色与柔软短绒样片。'],
  ['teal-knit', '#5eaaa1', 'knit-fabric', 'asset:reveal:palette:teal-knit', 'candidate-humans-20261005', '青绿针织', '青绿色与可见针织纹理样片。'],
  ['orange-fur', '#e89a4a', 'short-fur', 'asset:reveal:palette:orange-fur', 'candidate-animals-20261005', '暖橙短绒', '暖橙色与短毛纹理样片。'],
  ['pink-plush', '#ed91b2', 'short-plush', 'asset:reveal:palette:pink-plush', 'dots-rose-glasses', '莓粉短绒', '莓粉色与柔软短绒样片。'],
  ['lilac-plush', '#b69be8', 'short-plush', 'asset:reveal:palette:lilac-plush', 'dots-lilac-bucket', '浅紫短绒', '浅紫色与柔软短绒样片。'],
  ['green-matte', '#51bf92', 'soft-matte', 'asset:reveal:palette:green-matte', 'grok-green-cloud', '青绿柔和哑光', '青绿色与柔和哑光表面样片。'],
  ['teal-matte', '#43b9ae', 'soft-matte', 'asset:reveal:palette:teal-matte', 'grok-teal-square', '蓝绿柔和哑光', '蓝绿色与柔和哑光表面样片。'],
  ['sage-plush', '#a9b99b', 'short-plush', 'asset:reveal:palette:sage-plush', 'muse-sage-reading', '鼠尾草短绒', '鼠尾草绿与柔软短绒样片。'],
  ['yellow-fabric', '#efc950', 'soft-fabric', 'asset:reveal:palette:yellow-fabric', 'human-bun-yellow', '暖黄柔软衣料', '暖黄色与柔软衣料样片。'],
  ['blond-knit', '#d8bf8d', 'knit-fabric', 'asset:reveal:palette:blond-knit', 'human-blond-glasses', '浅金针织', '浅金色与针织纹理样片。'],
  ['white-fur', '#f1eee8', 'short-fur', 'asset:reveal:palette:white-fur', 'animal-white-cat', '奶油白短毛', '奶油白与细短毛纹理样片。'],
  ['gray-fur', '#a9afb8', 'short-fur', 'asset:reveal:palette:gray-fur', 'animal-gray-husky', '灰白短毛', '灰白色与细短毛纹理样片。']
];
const paletteFactIdsByKey = {
  'blue-plush': ['color:blue', 'material:short-plush'],
  'purple-matte': ['color:purple', 'material:soft-matte'],
  'cream-plush': ['color:cream', 'material:short-plush'],
  'teal-knit': ['color:teal', 'material:knit-fabric'],
  'orange-fur': ['color:orange', 'material:short-fur'],
  'pink-plush': ['color:pink', 'material:short-plush'],
  'lilac-plush': ['color:lilac', 'material:short-plush'],
  'green-matte': ['color:green', 'material:soft-matte'],
  'teal-matte': ['color:teal', 'material:soft-matte'],
  'sage-plush': ['color:sage', 'material:short-plush'],
  'yellow-fabric': ['color:yellow', 'material:soft-fabric'],
  'blond-knit': ['color:blond', 'material:knit-fabric'],
  'white-fur': ['color:white', 'material:short-fur'],
  'gray-fur': ['color:gray', 'material:short-fur']
};
const applicableArtworkIdsByKey = {
  'appearance/dots-orb': ['candidate-dots-20261005', 'dots-rose-glasses', 'dots-lilac-bucket'],
  'appearance/meta-muse-wrapped': ['candidate-meta-muse-20261005', 'muse-rose-flowers', 'muse-sage-reading'],
  'palette-material/pink-plush': ['dots-rose-glasses', 'muse-rose-flowers']
};
const featureFactsByKey = {
  'accessory/glasses-rose': ['head-accessory:round-glasses'],
  'accessory/glasses-clear': ['head-accessory:round-glasses'],
  'accessory/yellow-bucket-hat': ['head-accessory:yellow-bucket-hat'],
  'prop/daisy-bouquet': ['prop:flowers'],
  'prop/sage-closed-book': ['prop:closed-book']
};

const materialPatterns = {
  'short-plush': `<pattern id="texture" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M4 15q2-7 4-10m2 12q1-6 3-10m1 12q1-4 2-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-opacity=".64"/><circle cx="5" cy="5" r="1.3" fill="#fff" fill-opacity=".55"/></pattern>`,
  'soft-matte': `<linearGradient id="texture" x1=".1" y1=".1" x2=".9" y2=".9"><stop stop-color="#fff" stop-opacity=".38"/><stop offset=".45" stop-color="#fff" stop-opacity=".04"/><stop offset="1" stop-color="#332850" stop-opacity=".12"/></linearGradient>`,
  'knit-fabric': `<pattern id="texture" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M3 0v14M10 0v14M0 4h14M0 11h14" stroke="#fff" stroke-opacity=".5" stroke-width="1.6"/><path d="M7 0v14" stroke="#344f4b" stroke-opacity=".13" stroke-width="1"/></pattern>`,
  'soft-fabric': `<pattern id="texture" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M-3 12 12-3M3 17 17 3" stroke="#fff" stroke-opacity=".34" stroke-width="2"/><path d="M-3 4 10 17M4-3 17 10" stroke="#886d34" stroke-opacity=".12" stroke-width="1.2"/></pattern>`,
  'short-fur': `<pattern id="texture" width="15" height="15" patternUnits="userSpaceOnUse"><path d="M3 14q1-6 4-10m2 11q2-5 4-9" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-opacity=".56"/><path d="M1 4q2 3 3 6" stroke="#54483e" stroke-width="1" stroke-linecap="round" stroke-opacity=".16"/></pattern>`
};

const colors = {
  'short-plush': '#dfcbe5', 'soft-matte': '#d8d1e4', 'knit-fabric': '#c4ddd5', 'soft-fabric': '#f4e3aa', 'short-fur': '#e7d7c5'
};

function lighterColor(value, factor = 0.54) {
  const channels = value.slice(1).match(/.{2}/g).map(part => Number.parseInt(part, 16));
  return `#${channels.map(channel => Math.round(channel + (255 - channel) * factor).toString(16).padStart(2, '0')).join('')}`;
}

function darkerColor(value, factor = 0.6) {
  const channels = value.slice(1).match(/.{2}/g).map(part => Number.parseInt(part, 16));
  return `#${channels.map(channel => Math.round(channel * factor).toString(16).padStart(2, '0')).join('')}`;
}

function paletteSvg(color, material) {
  const dark = darkerColor(color, material === 'short-fur' ? .55 : .6);
  const materialTint = lighterColor(color, .52);
  const defs = `<linearGradient id="color" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${lighterColor(color, .14)}"/><stop offset="1" stop-color="${dark}"/></linearGradient>${materialPatterns[material]}`;
  return { body: `<g filter="url(#softShadow)"><rect x="55" y="64" width="402" height="384" rx="56" fill="url(#color)"/><path d="M89 97h175v315H89Z" fill="${color}"/><path d="M89 97h175v315H89Z" fill="url(#texture)"/><rect x="286" y="97" width="137" height="315" rx="38" fill="${materialTint}"/><rect x="286" y="97" width="137" height="315" rx="38" fill="url(#texture)" opacity=".88"/><path d="M315 128c29-20 64-19 89 1" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity=".8"/><path d="M110 375h128" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".42"/><path d="M110 393h84" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".3"/></g>`, defs };
}

const clothing = {
  'teal-knit-outfit': {
    shortName: '青绿针织衣装', description: '青绿色针织上衣、米白短裤和浅色运动鞋。', featureIds: ['clothing:teal-knit-top', 'clothing:ivory-shorts', 'clothing:light-sneakers'], owner: 'candidate-humans-20261005',
    body: `<g filter="url(#softShadow)"><path d="m124 128 52-29 44 21h52l44-21 52 29 37 177-60 18-17-77v135H155V246l-17 77-60-18 46-177Z" fill="#78aaa2" stroke="#527f79" stroke-width="6" stroke-linejoin="round"/><path d="M124 128 86 305l60 18 17-77v135h204V246l17 77 60-18-37-177-52-29-44 21h-52l-44-21-52 29Z" fill="url(#fineKnit)" opacity=".78"/><path d="M220 120 256 157l36-37-16-30h-40l-16 30Z" fill="#f2eee3" stroke="#d1c8b5" stroke-width="4"/><path d="M256 158v168" stroke="#e7e1d2" stroke-width="4"/><circle cx="256" cy="211" r="6" fill="#d9c595"/><circle cx="256" cy="252" r="6" fill="#d9c595"/><path d="m162 328 34 3-6 75H137l7-53ZM316 331l34-3 18 53 7 25h-54l-5-75Z" fill="#ece5d6" stroke="#d0c6b5" stroke-width="5"/><path d="M174 369h28M310 369h28" stroke="#d4c6aa" stroke-width="4"/><path d="M159 418q22-12 45 0v18h-54v-7q0-8 9-11ZM307 418q22-12 45 0l9 11v7h-54v-18Z" fill="#f3f1ec" stroke="#d3cec4" stroke-width="5"/><path d="M164 426h36M315 426h36" stroke="#b3a893" stroke-width="4" stroke-linecap="round"/></g>`
  },
  'yellow-hoodie-outfit': {
    shortName: '暖黄连帽衣装', description: '暖黄色连帽衫、米白短裤和黄白运动鞋。', featureIds: ['clothing:yellow-hoodie', 'clothing:ivory-shorts', 'clothing:yellow-white-sneakers'], owner: 'human-bun-yellow',
    body: `<g filter="url(#softShadow)"><path d="M168 129q8-66 88-66t88 66l48 31-31 155-61-12 2-65v126H208V238l2 65-61 12-31-155 50-31Z" fill="#f0cb54" stroke="#c59d39" stroke-width="6" stroke-linejoin="round"/><path d="M205 129q4-38 51-46 47 8 51 46l-51 46-51-46Z" fill="#e4b83c" stroke="#c59d39" stroke-width="5"/><path d="M243 171v51m26-51v51" stroke="#fff4ce" stroke-width="6" stroke-linecap="round"/><circle cx="243" cy="223" r="5" fill="#f8efcf"/><circle cx="269" cy="223" r="5" fill="#f8efcf"/><path d="M208 277h96v29h-96z" fill="#e4b83c"/><path d="M158 333h44l-4 63h-54l7-48ZM310 333h44l8 15 8 48h-54l-6-63Z" fill="#eee6d8" stroke="#d1c6b4" stroke-width="5"/><path d="M150 407q25-11 48 0v18h-55v-8q0-7 7-10ZM315 407q25-11 48 0l7 10v8h-55v-18Z" fill="#f7f0d8" stroke="#c9a849" stroke-width="5"/><path d="M159 414h37M324 414h37" stroke="#d1af48" stroke-width="4" stroke-linecap="round"/></g>`
  },
  'blue-knit-outfit': {
    shortName: '浅蓝针织衣装', description: '浅蓝衬衣、米白针织开衫、浅蓝长裤和米白运动鞋。', featureIds: ['clothing:light-blue-shirt', 'clothing:ivory-knit-cardigan', 'clothing:light-blue-trousers', 'clothing:ivory-sneakers'], owner: 'human-blond-glasses',
    body: `<g filter="url(#softShadow)"><path d="m166 144 42-23 45 20 45-20 42 23 36 163-54 16-22-74v117H212V249l-22 74-54-16 30-163Z" fill="#e8dfce" stroke="#c9bda9" stroke-width="6" stroke-linejoin="round"/><path d="M226 132h60l18 125h-96l18-125Z" fill="#a9c8dc" stroke="#84a8c1" stroke-width="4"/><path d="M256 140v115" stroke="#f7f2e8" stroke-width="4"/><path d="M166 144 208 121l30 13-24 24 21 151h-23V249l-22 74-54-16 30-163ZM346 144l-42-23-30 13 24 24-21 151h23V249l22 74 54-16-30-163Z" fill="#f0e8d9" stroke="#c9bda9" stroke-width="5"/><path d="M149 319h64l-8 82h-66l10-82ZM299 319h64l10 82h-66l-8-82Z" fill="#9abbd3" stroke="#759db8" stroke-width="5"/><path d="M146 407q26-11 52 0v18h-61v-8q0-7 9-10ZM314 407q26-11 52 0l9 10v8h-61v-18Z" fill="#f5f1e9" stroke="#d2cabc" stroke-width="5"/><path d="M150 414h43M322 414h43" stroke="#aaa18f" stroke-width="4" stroke-linecap="round"/><path d="M150 178h21M150 190h21M341 178h21M341 190h21" stroke="#d3c9b9" stroke-width="3"/></g>`
  }
};

const accessory = {
  'glasses-rose': {
    shortName: '玫粉圆框眼镜', description: '透明玫粉色圆框、细鼻梁与短镜腿，对应莓粉 Dots。', owner: 'dots-rose-glasses',
    body: `<g filter="url(#softShadow)" stroke-linecap="round" stroke-linejoin="round"><circle cx="164" cy="253" r="86" fill="#f2dce8" fill-opacity=".55" stroke="#d38aaf" stroke-width="18"/><circle cx="348" cy="253" r="86" fill="#f2dce8" fill-opacity=".55" stroke="#d38aaf" stroke-width="18"/><path d="M249 251q8-12 16 0" stroke="#bf79a2" stroke-width="17"/><path d="M78 238 40 223M434 238l38-15" stroke="#c27aa2" stroke-width="14"/><path d="M104 195q38-32 75-23M287 195q38-32 75-23" stroke="#fff" stroke-width="9" opacity=".8"/></g>`
  },
  'glasses-clear': {
    shortName: '透明圆框眼镜', description: '浅透明圆框、细鼻梁和短镜腿，对应金发人物实际佩戴款。', owner: 'human-blond-glasses',
    body: `<g filter="url(#softShadow)" stroke-linecap="round" stroke-linejoin="round"><circle cx="164" cy="253" r="86" fill="#e9f2f7" fill-opacity=".42" stroke="#aaaeb2" stroke-width="16"/><circle cx="348" cy="253" r="86" fill="#e9f2f7" fill-opacity=".42" stroke="#aaaeb2" stroke-width="16"/><path d="M249 251q8-12 16 0" stroke="#9da3a8" stroke-width="15"/><path d="M78 238 40 223M434 238l38-15" stroke="#9da3a8" stroke-width="12"/><path d="M104 195q38-32 75-23M287 195q38-32 75-23" stroke="#fff" stroke-width="9" opacity=".9"/></g>`
  },
  'yellow-bucket-hat': {
    shortName: '黄色软布渔夫帽', description: '明黄色软布帽冠与宽帽檐，带环绕帽檐的细缝线。', owner: 'dots-lilac-bucket',
    body: `<g filter="url(#softShadow)" stroke-linejoin="round"><path d="M155 301c-2-115 32-188 101-188s103 73 101 188H155Z" fill="#f2cf57" stroke="#cca942" stroke-width="6"/><path d="M176 177c47-34 113-34 160 0M160 279h192" stroke="#f9e6a3" stroke-width="6" opacity=".9"/><path d="M94 290q162-48 324 0l-29 70q-133 46-266 0l-29-70Z" fill="#e9bf42" stroke="#c39a35" stroke-width="6"/><path d="M105 316q151-40 302 0M139 348q117 30 234 0" stroke="#f7df8a" stroke-width="5"/><path d="M206 147c14-14 30-22 50-24" stroke="#fff5ce" stroke-width="8" stroke-linecap="round" opacity=".85"/></g>`
  }
};

const props = {
  'daisy-bouquet': {
    shortName: '白色雏菊花束', description: '数朵白色雏菊、金黄色花心与绿色花茎，对应作品中真实花束。', owner: 'muse-rose-flowers',
    body: `<g stroke-linecap="round" stroke-linejoin="round" filter="url(#softShadow)"><path d="M205 235 258 431M254 224 258 431M305 237 258 431M170 255 258 431M342 257 258 431" stroke="#598956" stroke-width="14"/><path d="M225 316 160 289l27 65M288 339l78-36-36 72M241 360l-66-16 37 60" fill="#86b77b" stroke="#6f9e66" stroke-width="7"/><g fill="#fffdf8" stroke="#eee4d7" stroke-width="2"><ellipse cx="160" cy="168" rx="23" ry="48"/><ellipse cx="160" cy="168" rx="23" ry="48" transform="rotate(45 160 168)"/><ellipse cx="160" cy="168" rx="23" ry="48" transform="rotate(90 160 168)"/><ellipse cx="160" cy="168" rx="23" ry="48" transform="rotate(135 160 168)"/><ellipse cx="276" cy="126" rx="21" ry="43"/><ellipse cx="276" cy="126" rx="21" ry="43" transform="rotate(45 276 126)"/><ellipse cx="276" cy="126" rx="21" ry="43" transform="rotate(90 276 126)"/><ellipse cx="276" cy="126" rx="21" ry="43" transform="rotate(135 276 126)"/><ellipse cx="359" cy="195" rx="22" ry="45"/><ellipse cx="359" cy="195" rx="22" ry="45" transform="rotate(45 359 195)"/><ellipse cx="359" cy="195" rx="22" ry="45" transform="rotate(90 359 195)"/><ellipse cx="359" cy="195" rx="22" ry="45" transform="rotate(135 359 195)"/></g><circle cx="160" cy="168" r="20" fill="#f0c84c"/><circle cx="276" cy="126" r="18" fill="#f0c84c"/><circle cx="359" cy="195" r="19" fill="#f0c84c"/><path d="M112 364q147 40 292 0l-15 25q-130 39-260 0Z" fill="#e6d2bf" stroke="#d1bba7" stroke-width="5"/></g>`
  },
  'sage-closed-book': {
    shortName: '鼠尾草绿合拢书', description: '一册竖直合拢的鼠尾草绿色硬壳书，带浅色书页和书脊。', owner: 'muse-sage-reading',
    body: `<g filter="url(#softShadow)" stroke-linejoin="round"><path d="M134 94h237q29 0 29 29v268q0 28-29 28H134q-34 0-34-34V128q0-34 34-34Z" fill="#829887" stroke="#5d7565" stroke-width="7"/><path d="M137 109h222q22 0 22 23v246H137q-18 0-18-18V127q0-18 18-18Z" fill="#a8baa7" stroke="#d2dbc9" stroke-width="4"/><path d="M138 109v269q0 14 15 14" stroke="#e6dfc9" stroke-width="9"/><path d="M174 159h133M174 181h111M174 203h122" stroke="#dce5d7" stroke-width="5" stroke-linecap="round" opacity=".8"/><path d="M354 131v232" stroke="#738779" stroke-width="4"/><path d="M329 315c-20 22-38 38-61 47 0-27 19-48 42-53 12-2 19 0 19 6Z" fill="#e2eadc" opacity=".75"/></g>`
  }
};

const drawings = [];
for (const [key, item] of Object.entries(appearance)) drawings.push({ key: `appearance/${key}`, ...item, owner: item.owner || ({'dots-orb':'candidate-dots-20261005','grok-orb':'candidate-grok-20261005','grok-cloud':'grok-green-cloud','grok-rounded-square':'grok-teal-square','meta-muse-wrapped':'candidate-meta-muse-20261005','human-chestnut':'candidate-humans-20261005','human-bun':'human-bun-yellow','human-blond':'human-blond-glasses','animal-shiba':'candidate-animals-20261005','animal-cat':'animal-white-cat','animal-husky':'animal-gray-husky'}[key]), slot: 'appearance', artworkRef: item.factIds.join(', ') });
for (const [key, color, material, id, owner, shortName, description] of palettePairs) {
  const palette = paletteSvg(color, material);
  drawings.push({ key: `palette-material/${key}`, shortName, description, owner, slot: 'paletteMaterial', factIds: paletteFactIdsByKey[key], artworkRef: paletteFactIdsByKey[key].join(' + '), body: palette.body, defs: palette.defs });
}
for (const [key, item] of Object.entries(clothing)) drawings.push({ key: `clothing/${key}`, ...item, slot: 'clothing', artworkRef: item.featureIds.join(', ') });
for (const [key, item] of Object.entries(accessory)) drawings.push({ key: `accessory/${key}`, ...item, slot: 'accessory', artworkRef: item.shortName });
for (const [key, item] of Object.entries(props)) drawings.push({ key: `prop/${key}`, ...item, slot: 'prop', artworkRef: item.shortName });

const entries = [];
for (const item of drawings) {
  const [category, slug] = item.key.split('/');
  const filename = `${slug}.svg`;
  const relativePath = `dist/assets/reveal/${category}/${filename}`;
  const data = svg(item.body, `${baseDefs}${item.defs || ''}`);
  const absolutePath = path.join(root, relativePath);
  await fs.mkdir(path.dirname(absolutePath), { recursive: true });
  await fs.writeFile(absolutePath, data, 'utf8');
  const bytes = Buffer.from(data);
  entries.push({
    id: `asset:reveal:${category}:${slug}`,
    version: 'v1-candidate',
    path: `./assets/reveal/${category}/${filename}`,
    sourcePath: relativePath,
    mime: 'image/svg+xml',
    byteSize: bytes.length,
    sha256: sha256(bytes),
    width: 512,
    height: 512,
    resourceKind: 'reveal-illustration',
    displayOnly: true,
    publicationStatus: 'candidate-preview',
    resourceStatus: 'verified-source',
    runtimeVerification: 'not-browser-checked',
    ownerArtworkId: item.owner,
    applicableArtworkIds: applicableArtworkIdsByKey[item.key] || [item.owner],
    artApproval: { status: 'pending', scope: 'independent reveal-only candidate; user visual review required' },
    sourceRef: `scripts/generate-reveal-visual-candidates.mjs#${item.key}`,
    purpose: 'reveal-only-display',
    slot: item.slot,
    shortName: item.shortName,
    description: item.description,
    factIds: item.factIds || item.featureIds || featureFactsByKey[item.key] || (item.key.startsWith('palette-material/') ? paletteFactIdsByKey[item.key.split('/')[1]] : []),
    artworkFactReference: item.artworkRef,
    sourceKind: 'code-authored-display-only-candidate'
  });
}

const headphonesPath = path.join(outputRoot, 'accessory/headphones.png');
try {
  const bytes = await fs.readFile(headphonesPath);
  entries.push({
    id: 'asset:reveal:accessory:headphones', version: 'v1-candidate', path: './assets/reveal/accessory/headphones.png',
    sourcePath: 'dist/assets/reveal/accessory/headphones.png', mime: 'image/png', byteSize: bytes.length, sha256: sha256(bytes), width: 1254, height: 1254,
    resourceKind: 'reveal-illustration', displayOnly: true, publicationStatus: 'candidate-preview', resourceStatus: 'verified-source',
    runtimeVerification: 'not-browser-checked', ownerArtworkId: 'candidate-dots-20261005', applicableArtworkIds: ['candidate-dots-20261005'],
    artApproval: { status: 'pending', scope: 'independent reveal-only candidate; user visual review required' },
    sourceRef: 'imagegen:01a11630-6f96-78f0-8cd8-d2b852712505; reference=asset:candidate-dots-20261005:original@v2#2f680b276f76c2a1c6faeb7d496f16a41327f1186bca27d0acf5197997309455',
    purpose: 'reveal-only-display', slot: 'accessory', shortName: '包耳式耳机', description: '黑色头带与黑色外壳、紫罗兰软垫的包耳式耳机；来源为蓝色 Dots 批准作品。',
    factIds: ['head-accessory:over-ear-headphones'], artworkFactReference: 'head-accessory:over-ear-headphones in candidate-dots-20261005', sourceKind: 'imagegen-display-only-candidate'
  });
} catch (error) {
  if (error?.code !== 'ENOENT') throw error;
}

const module = `// Generated by scripts/generate-reveal-visual-candidates.mjs. Candidate illustrations require user art review.\nexport const REVEAL_VISUAL_ASSETS = Object.freeze(${JSON.stringify(entries, null, 2)});\n`;
await fs.writeFile(path.join(root, 'dist/studio-reveal-visual-assets.js'), module, 'utf8');
const sourceManifest = {
  schema: 1,
  status: 'candidate-preview; all independently authored reveal illustrations await user visual approval',
  generatedBy: 'scripts/generate-reveal-visual-candidates.mjs',
  referenceArt: 'dist/assets/looks and dist/assets/characters; see per-entry ownerArtworkId and artworkFactReference',
  files: entries.map(({ id, path: assetPath, version, byteSize, sha256: digest, ownerArtworkId, applicableArtworkIds, sourceRef, slot, shortName, artApproval, factIds }) => ({ id, path: `dist/${assetPath.slice(2)}`, version, byteSize, sha256: digest, ownerArtworkId, applicableArtworkIds, sourceRef, slot, shortName, artApproval, factIds }))
};
await fs.writeFile(path.join(root, 'design/reveal-visual-candidates.json'), `${JSON.stringify(sourceManifest, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ created: entries.length, paths: entries.map(entry => entry.sourcePath), totalBytes: entries.reduce((sum, entry) => sum + entry.byteSize, 0) }, null, 2));
