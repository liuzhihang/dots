import {
  BASELINE_POSE_VARIANTS,
  CREATION_ARTWORKS,
  getCompositionPack,
  getCreationArtwork
} from './studio-creation-assets.js?v=86';
import {createLookCharacter, setCharacterValue} from './studio-model.js?v=86';
import {COMPOSITION_FIT_VERSION,getCompositionFitFingerprint,isValidNormalizedCutoutPolygon,resolveAnchorPairFit,resolveHeadphoneFit} from './studio-composition-fit.js?v=86';

export const COMPOSITION_CATALOG_VERSION = 1;

// This list is intentionally file-backed. It records the bytes currently in
// dist/assets, rather than counting enum values or thumbnails as components.
const ASSET_ROWS = [
  ['artwork/candidate-dots-20261005/headphones', './assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png', '2f680b276f76c2a1c6faeb7d496f16a41327f1186bca27d0acf5197997309455', 1254, 1254],
  ['artwork/candidate-dots-20261005/bare', './assets/characters/dots-blue-plush-orb-front-candidate-v2.png', '7222064cfaef4897b78495b112e85e1cc65ec46aa79778094179d43658e04988', 1254, 1254],
  ['artwork/candidate-grok-20261005/full', './assets/characters/grok-bot-purple-orb-candidate-v2.png', 'e4730f2957d64b8b2b7eb49c09a21f7a9c1ea352870bd2bf4c0649c7eeec0874', 1254, 1254],
  ['artwork/candidate-meta-muse-20261005/full', './assets/characters/meta-muse-cream-hooded-candidate-v1.png', '12ec7cee17f4948d5dd4258b3ad0fe5b44a38e9506b13f5ff39aa3856b3b3ea6', 1235, 1274],
  ['artwork/candidate-humans-20261005/full', './assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png', '56423f860f47bbad212875aeecdda40e6c86382b6d15a61b5c1a2ffd723fc521', 1254, 1254],
  ['artwork/candidate-animals-20261005/full', './assets/characters/animals-original-shiba-candidate-v1.png', 'f6e731ad99f85a20681588e14e2f93279707897da7ff50769f6f29bb62893c62', 1254, 1254],
  ['artwork/dots-rose-glasses/full', './assets/looks/dots-rose-glasses.png', 'a95261160aa0a6223bab0a3b38d080a4fa5b1b6315593bb6631d820732578d75', 1254, 1254],
  ['artwork/dots-lilac-bucket/full', './assets/looks/dots-lilac-bucket.png', '50ddea9f24e82c02b14cc5374d4b3ae08b00954aa4bcdcbb6aa24dc2a8b3d615', 1254, 1254],
  ['artwork/grok-green-cloud/full', './assets/looks/grok-green-cloud.png', 'd186c5b0837b15c6177b476729b463a7542fdc559d606c6d5818bbad274bad96', 1254, 1254],
  ['artwork/grok-teal-square/full', './assets/looks/grok-teal-square.png', '81b63d5a809c381f7617261ee4c186031acdc984bac7844d4820c732d44b5f6d', 1254, 1254],
  ['artwork/muse-rose-flowers/full', './assets/looks/muse-rose-flowers.png', 'd0865bc0a0df4e0e9451c702dac8db0a4bf7e6aa0820657edffa239d24b367be', 1254, 1254],
  ['artwork/muse-sage-reading/full', './assets/looks/muse-sage-reading.png', '82f85f8abce3d425381c54c3d54b116a4e9ab6af2f782792377bbd6ed79f0f3a', 1254, 1254],
  ['artwork/human-bun-yellow/full', './assets/looks/human-bun-yellow.png', 'f7a5f87daa25e1171f8c42db6ed8b668b695bf6f40cbed0aa31d5f8ca7052ccc', 1254, 1254],
  ['artwork/human-blond-glasses/full', './assets/looks/human-blond-glasses.png', '84d20915564eac63f5e33834e221bd73ef7530c8ea331c730503e9de0dafc0f6', 1254, 1254],
  ['artwork/animal-white-cat/full', './assets/looks/animal-white-cat.png', '6b6e0cc65b7edef88b0b19a948444a261a4050ccdcba942fd5941bc2aa2f499a', 1254, 1254],
  ['artwork/animal-gray-husky/full', './assets/looks/animal-gray-husky.png', '21fa19552ec9c93282985aecf80a1c89d38d15064cf27c3a8bafc8cacdb315ca', 1254, 1254],
  ['state/candidate-dots-20261005/wink', './assets/poses/dots-wink-v1.png', '4fbeb4da84da597e7bcc9533012ca7659e1a12a6e20bd479f098e4da7c805ac1', 1254, 1254],
  ['state/candidate-grok-20261005/wink', './assets/poses/grok-wink-v1.png', '0e1543e89fe3e7d21ee6830e7a9435ad1d8cfca59ab1a16fec686c4a48211e86', 1254, 1254],
  ['state/candidate-meta-muse-20261005/wave', './assets/poses/muse-wave-v1.png', 'bd4a5fb9c81fabcb751c6943dbeea52515c92a4f6b2f80335582e485487cb6e1', 1254, 1254],
  ['state/candidate-humans-20261005/wave', './assets/poses/human-wave-v1.png', 'a3dde33c5ab00f21a735dcb0373e584e954c615d1108332ba40d1924b8e8b308', 1254, 1254],
  ['state/candidate-animals-20261005/wave', './assets/poses/shiba-wave-v1.png', '8b3d1417cf4af554b6cbe8f3a0589dd24d0f07db98832b704c5b9a965548651c', 1254, 1254],
  ['historical/historical-dots-plush-headphones-v2', './assets/atelier/dot-plush-headphones-v2.png', 'b32a497c30a7b7973a00fb2e12b358e3899ceeab1e2ea02701577a7dbbb9e5d5', 1254, 1254],
  ['historical/historical-animal-shiba-scarf-v2', './assets/atelier/pet-shiba-scarf-v2.png', '3eb9864876ee26227083c16224669f9b0a8e9a014e15f31ea7279c415e03439a', 1254, 1254]
];

export const TRUSTED_ASSETS = Object.freeze(ASSET_ROWS.map(([id, src, sha256, width, height]) => Object.freeze({
  id, version: '1.0.0', sha256, src, width, height,
  kind: id.startsWith('state/') ? 'complete-state-png' : id.startsWith('historical/') ? 'historical-template-png' : 'complete-template-png',
  engineeringStatus: 'available',
  source: id.startsWith('historical/') ? 'imported-sites-v27' : 'imagegen-20261005'
})));

const ASSET_BY_ID = new Map(TRUSTED_ASSETS.map(asset => [asset.id, asset]));
const ASSET_BY_SRC = new Map(TRUSTED_ASSETS.map(asset => [asset.src, asset]));
let activeModularCatalog = null;

export function getTrustedAsset(id) {
  const asset = ASSET_BY_ID.get(id) ?? activeModularCatalog?.assets.find(item=>item.id===id);
  return asset ? structuredClone(asset) : null;
}

export function getTrustedAssetBySrc(src) {
  const asset = ASSET_BY_SRC.get(src) ?? activeModularCatalog?.assets.find(item=>item.src===src);
  return asset ? structuredClone(asset) : null;
}

// This is the exact 15-look identity set named in the immutable v83 approval
// record. The approval does not extend to unlisted state PNGs or new adapters.
export const REGISTERED_LOOK_APPROVALS = Object.freeze({
  'candidate-dots-20261005': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'candidate-grok-20261005': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'candidate-meta-muse-20261005': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'candidate-humans-20261005': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'candidate-animals-20261005': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'dots-rose-glasses': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'dots-lilac-bucket': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'grok-green-cloud': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'grok-teal-square': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'muse-rose-flowers': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'muse-sage-reading': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'human-bun-yellow': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'human-blond-glasses': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'animal-white-cat': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'}),
  'animal-gray-husky': Object.freeze({status:'approved', record:'gallery-workbench-user-art-approval.json', cacheRevision:'83'})
});

const APPROVED_DEFAULT_HASHES=Object.freeze({
  'candidate-dots-20261005':'2f680b276f76c2a1c6faeb7d496f16a41327f1186bca27d0acf5197997309455',
  'candidate-grok-20261005':'e4730f2957d64b8b2b7eb49c09a21f7a9c1ea352870bd2bf4c0649c7eeec0874',
  'candidate-meta-muse-20261005':'12ec7cee17f4948d5dd4258b3ad0fe5b44a38e9506b13f5ff39aa3856b3b3ea6',
  'candidate-humans-20261005':'56423f860f47bbad212875aeecdda40e6c86382b6d15a61b5c1a2ffd723fc521',
  'candidate-animals-20261005':'f6e731ad99f85a20681588e14e2f93279707897da7ff50769f6f29bb62893c62',
  'dots-rose-glasses':'a95261160aa0a6223bab0a3b38d080a4fa5b1b6315593bb6631d820732578d75',
  'dots-lilac-bucket':'50ddea9f24e82c02b14cc5374d4b3ae08b00954aa4bcdcbb6aa24dc2a8b3d615',
  'grok-green-cloud':'d186c5b0837b15c6177b476729b463a7542fdc559d606c6d5818bbad274bad96',
  'grok-teal-square':'81b63d5a809c381f7617261ee4c186031acdc984bac7844d4820c732d44b5f6d',
  'muse-rose-flowers':'d0865bc0a0df4e0e9451c702dac8db0a4bf7e6aa0820657edffa239d24b367be',
  'muse-sage-reading':'82f85f8abce3d425381c54c3d54b116a4e9ab6af2f782792377bbd6ed79f0f3a',
  'human-bun-yellow':'f7a5f87daa25e1171f8c42db6ed8b668b695bf6f40cbed0aa31d5f8ca7052ccc',
  'human-blond-glasses':'84d20915564eac63f5e33834e221bd73ef7530c8ea331c730503e9de0dafc0f6',
  'animal-white-cat':'6b6e0cc65b7edef88b0b19a948444a261a4050ccdcba942fd5941bc2aa2f499a',
  'animal-gray-husky':'21fa19552ec9c93282985aecf80a1c89d38d15064cf27c3a8bafc8cacdb315ca'
});

const object = value => value && typeof value === 'object' && !Array.isArray(value);
const sameApprovalValue=(left,right)=>canonical(left)===canonical(right);
function canonical(value) {
  if(Array.isArray(value))return `[${value.map(canonical).join(',')}]`;
  if(object(value))return `{${Object.keys(value).sort().map(key=>`${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`;
  return JSON.stringify(value);
}
function stableFingerprint(value) {
  const source=canonical(value);let a=0x811c9dc5,b=0x9e3779b9;
  for(let index=0;index<source.length;index++){const code=source.charCodeAt(index);a=Math.imul(a^code,0x01000193)>>>0;b=Math.imul(b^(code+index),0x85ebca6b)>>>0;}
  return `${a.toString(16).padStart(8,'0')}${b.toString(16).padStart(8,'0')}`;
}
const evidencePath=value=>typeof value==='string'&&value.startsWith('design/acceptance/')&&!value.split('/').includes('..')&&!value.includes('\\');
const COORDINATION_CHECKS=Object.freeze(['proportion','contact','occlusion','materialLighting','palette']);
const coordinationChecklistPassed=checklist=>object(checklist)&&
  Object.keys(checklist).length===COORDINATION_CHECKS.length&&
  COORDINATION_CHECKS.every(key=>Object.hasOwn(checklist,key)&&checklist[key]==='pass');
function validApprovalEvidence(evidence) {
  if(!object(evidence)||Object.keys(evidence).some(key=>!['sourceManifest','sourceId','pages'].includes(key))||!evidencePath(evidence.sourceManifest)||typeof evidence.sourceId!=='string'||!/^sha256:[a-f0-9]{64}$/.test(evidence.sourceId)||!Array.isArray(evidence.pages)||!evidence.pages.length)return false;
  return evidence.pages.every(page=>object(page)&&Object.keys(page).every(key=>['path','sha256','viewport'].includes(key))&&evidencePath(page.path)&&typeof page.sha256==='string'&&/^[a-f0-9]{64}$/.test(page.sha256)&&object(page.viewport)&&Number.isInteger(page.viewport.width)&&page.viewport.width>0&&Number.isInteger(page.viewport.height)&&page.viewport.height>0);
}
const readPath = (config, path) => path.split('.').reduce((node, key) => node?.[key], config);
const setPath = (config, path, value) => {
  const parts = path.split('.'), key = parts.pop();
  parts.reduce((node, part) => node[part], config)[key] = value;
};
const stateKey = (artworkId, recipeId) => `${artworkId}::${recipeId}`;
const LAYOUT_BY_FAMILY=Object.freeze({
  dots:'dots-orb-front',grok:'grok-soft-geometry-front','meta-muse':'meta-wrapped-front',
  humans:'human-chibi-front',animals:'species-animal-front'
});
const STYLE_BY_FAMILY=Object.freeze({
  dots:'dots-fine-plush',grok:'grok-matte-soft-polymer','meta-muse':'muse-cream-fabric-wrap',
  humans:'refined-chibi',animals:'species-specific-plush'
});
function poseCapability(config) {
  return config.family==='animals' && config.pose==='sit' && config.action==='idle'
    ?'front-seated-neutral'
    :config.camera==='front' && config.action==='idle' && config.expression==='calm'
      ?'front-neutral'
      :`front-${config.action}-${config.expression}`;
}
const approvedRecipe = artworkId => artworkId === 'candidate-dots-20261005'
  ? 'headphones-classic'
  : artworkId.startsWith('candidate-') ? 'classic' : 'fixed';

function templateApprovalStatus(artworkId,recipeId,assets,sha256=null){
  if(!REGISTERED_LOOK_APPROVALS[artworkId])return 'notApproved';
  if(recipeId!==approvedRecipe(artworkId))return 'pendingScopeMapping';
  const expectedHash=APPROVED_DEFAULT_HASHES[artworkId];
  const exact=Array.isArray(assets)&&assets.length===1&&assets[0]?.sha256===expectedHash&&
    getTrustedAsset(assets[0]?.id)?.sha256===expectedHash;
  return !exact||(sha256!==null&&sha256!==expectedHash)?'hashMismatch':'approved';
}

function configForRecipe(artworkId, recipeId) {
  const artwork = getCreationArtwork(artworkId);
  if (!artwork) return null;
  const config = createLookCharacter(artworkId);
  const pack = getCompositionPack(artwork.family, artworkId, config);
  if (!pack) return null;
  const variant = pack.variants?.find(item => item.id === recipeId);
  if (variant) for (const [path, value] of Object.entries(variant.values)) setPath(config, path, value);
  if (recipeId === 'fixed') return config;
  return variant ? config : null;
}

function selectedLayers(pack, recipeId) {
  const variant = pack.variants?.find(item => item.id === recipeId);
  if (pack.variants?.length && !variant) return null;
  const ids = variant ? new Set(variant.layerIds) : null;
  return pack.layers.filter(layer => !ids || ids.has(layer.id));
}

function stateAssetId(artworkId, recipeId, layer) {
  if (artworkId === 'candidate-dots-20261005' && layer.id === 'bare') return 'artwork/candidate-dots-20261005/bare';
  if (artworkId === 'candidate-dots-20261005' && layer.id === 'headphones') return 'artwork/candidate-dots-20261005/headphones';
  if (layer.src.includes('/poses/')) {
    const state = BASELINE_POSE_VARIANTS.find(item => item.artworkId === artworkId && item.assetPath === layer.src);
    if (state) return `state/${artworkId}/${state.id}`;
  }
  if (layer.src.includes('/looks/')) return `artwork/${artworkId}/full`;
  if (layer.src.includes('/characters/')) return `artwork/${artworkId}/full`;
  if (layer.src.includes('/atelier/')) return `historical/${artworkId}`;
  return null;
}

export function listTemplateAssetStates() {
  const states = [];
  for (const artwork of CREATION_ARTWORKS) {
    const pack = getCompositionPack(artwork.family, artwork.id, null);
    if (!pack) continue;
    const config = createLookCharacter(artwork.id);
    const recipeIds = pack.variants?.length ? pack.variants.map(item => item.id) : ['fixed'];
    for (const state of BASELINE_POSE_VARIANTS.filter(item => item.artworkId === artwork.id && item.assetStatus === 'available')) {
      if (pack.variants?.some(item => item.id === state.id)) continue;
      recipeIds.push(state.id);
    }
    for (const recipeId of recipeIds) {
      const stateConfig = configForRecipe(artwork.id, recipeId);
      if (!stateConfig) continue;
      const statePack = getCompositionPack(artwork.family, artwork.id, stateConfig);
      if (!statePack) continue;
      const layers = selectedLayers(statePack, recipeId);
      if (!layers?.length) continue;
      const assets = layers.map(layer => {
        const id = stateAssetId(artwork.id, recipeId, layer);
        const asset = getTrustedAsset(id);
        return asset ? {id:asset.id,version:asset.version,sha256:asset.sha256,src:asset.src,width:asset.width,height:asset.height} : null;
      });
      if (assets.some(asset => !asset)) continue;
      const approvalStatus = templateApprovalStatus(artwork.id,recipeId,assets,assets.length===1?assets[0].sha256:null);
      states.push(Object.freeze({
        id: stateKey(artwork.id, recipeId), lookId: artwork.id, artworkId: artwork.id,
        family: artwork.family, recipeId, stateId: recipeId,
        layoutId:LAYOUT_BY_FAMILY[artwork.family],styleId:STYLE_BY_FAMILY[artwork.family],poseId:poseCapability(stateConfig),view:'front',
        assetRefs: Object.freeze(assets.map(({id,version,sha256}) => Object.freeze({id,version,sha256}))),
        assets: Object.freeze(assets.map(asset => Object.freeze(asset))),
        layerIds: Object.freeze(layers.map(layer => layer.id)), width:statePack.width, height:statePack.height,
        approvalStatus,
        engineeringStatus: 'available', config: Object.freeze(structuredClone(stateConfig))
      }));
    }
  }
  return states.map(state => structuredClone(state));
}

export function getRegisteredLookApprovals() {
  return structuredClone(REGISTERED_LOOK_APPROVALS);
}

/** Resolve the explicit v83 approval only for the exact registered default PNG bytes. */
export function getTemplateApproval(artworkId,{recipeId=null,sha256=null}={}) {
  const record=REGISTERED_LOOK_APPROVALS[artworkId];
  if (!record) return {status:'notApproved',record:null,assetRefs:[]};
  const selectedRecipe=recipeId??approvedRecipe(artworkId);
  const state=listTemplateAssetStates().find(item=>item.artworkId===artworkId&&item.recipeId===selectedRecipe);
  if (!state) return {status:'missing',record:structuredClone(record),assetRefs:[]};
  return {status:templateApprovalStatus(artworkId,selectedRecipe,state.assets,sha256),record:structuredClone(record),assetRefs:cloneRefs(state.assetRefs)};
}
const cloneRefs=refs=>refs.map(ref=>structuredClone(ref));

export function validateModularAssetRecord(asset, {knownAssetIds = new Set()} = {}) {
  if (!object(asset)) throw new Error('模块素材记录必须是对象');
  const required = ['id','version','sha256','src','width','height','category','slots','baseIds','layoutIds','styles','poses','view','anchors','z','occlusion','dependencies','excludes','grip','tintPaths','riskGroups','source','usageScope','engineeringStatus','releaseStatus','artApproval'];
  if (required.some(key => !Object.hasOwn(asset,key))) throw new Error('模块素材合同缺少必需字段');
  const allowed=[...required,'fitPolicy','sourceParts'];
  if(Object.keys(asset).some(key=>!allowed.includes(key)))throw new Error('模块素材包含当前合同未登记字段');
  if (typeof asset.id !== 'string' || !/^[a-z0-9][a-z0-9._/-]{2,127}$/.test(asset.id) || knownAssetIds.has(asset.id)) throw new Error('模块素材 ID 无效或重复');
  if (typeof asset.version !== 'string' || !/^\d+\.\d+\.\d+$/.test(asset.version)) throw new Error('模块素材版本必须使用 semver');
  if (typeof asset.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(asset.sha256)) throw new Error('模块素材必须登记 SHA-256');
  if (typeof asset.src !== 'string' || !asset.src.startsWith('./assets/') || asset.src.includes('..') || /[?#\\]/.test(asset.src)) throw new Error('模块素材只能使用登记的本站本地文件');
  if (!Number.isInteger(asset.width)||!Number.isInteger(asset.height)||asset.width<1||asset.height<1||asset.width>8192||asset.height>8192) throw new Error('模块素材像素尺寸无效');
  for (const key of ['slots','baseIds','layoutIds','styles','poses','dependencies','excludes','tintPaths','riskGroups']) if (!Array.isArray(asset[key]) || asset[key].some(value => typeof value !== 'string'||!value.trim()) || new Set(asset[key]).size!==asset[key].length) throw new Error(`模块素材 ${key} 必须是无重复的非空字符串列表`);
  if (typeof asset.category!=='string'||!asset.category.trim()||!asset.slots.length||!asset.baseIds.length||!asset.layoutIds.length||!asset.styles.length||!asset.poses.length) throw new Error('模块素材必须声明分类、槽位、基底、布局、风格和姿态能力');
  if (!['front'].includes(asset.view)) throw new Error('模块素材当前只登记正面固定视角');
  const dynamicFit=Object.hasOwn(asset,'fitPolicy')||Object.hasOwn(asset,'sourceParts');
  if (!object(asset.anchors) || (!dynamicFit&&!Object.keys(asset.anchors).length) || Object.values(asset.anchors).some(point => !object(point) || !Number.isFinite(point.x) || !Number.isFinite(point.y)||point.x<0||point.x>1||point.y<0||point.y>1)) throw new Error('模块素材锚点必须是 0–1 范围内的归一化点');
  if (!Number.isInteger(asset.z)) throw new Error('模块素材图层顺序必须是整数');
  for (const key of ['occlusion','grip','source','usageScope','artApproval']) if (!object(asset[key])) throw new Error(`模块素材 ${key} 必须是对象`);
  if (asset.occlusion.mode!=='above-base'||!Array.isArray(asset.occlusion.covers)||asset.occlusion.covers.some(value=>typeof value!=='string')) throw new Error('当前模块渲染器只接受明确声明在完整基底上方的图层');
  if (typeof asset.grip.required!=='boolean'||(asset.grip.required&&(typeof asset.grip.gripId!=='string'||!asset.grip.gripId))||(!asset.grip.required&&asset.grip.gripId!==null)) throw new Error('模块素材抓握要求无效');
  if(asset.grip.required)throw new Error('当前模块目录尚无已渲染的抓握/接触配方，不接受需要抓握的模块素材');
  if (typeof asset.source.origin!=='string'||!asset.source.origin.trim()||typeof asset.source.generatedFile!=='string'||!asset.source.generatedFile.trim()||asset.source.derivedFromTemplatePixels!==false) throw new Error('模块来源必须可追溯且不得从完整模板裁切');
  if (asset.usageScope.type!=='project'||asset.usageScope.previewOnly!==true||asset.usageScope.publicListing!==false) throw new Error('当前模块素材只允许维护者内置项目预览');
  if (!['available','missing','pending-hash'].includes(asset.engineeringStatus)) throw new Error('模块素材工程状态无效');
  if (!['internal','approved','withheld'].includes(asset.releaseStatus)) throw new Error('模块素材发布资格无效');
  if (Object.keys(asset.artApproval).some(key=>!['status','record','adaptations'].includes(key))||!Array.isArray(asset.artApproval.adaptations)) throw new Error('模块素材美术批准记录结构无效');
  if (!['pending','approved','rejected'].includes(asset.artApproval.status)) throw new Error('模块素材美术批准状态无效');
  if (asset.artApproval.status==='approved'&&!evidencePath(asset.artApproval.record)) throw new Error('已批准模块必须引用 acceptance 决议记录');
  if (asset.artApproval.status!=='approved'&&asset.artApproval.record!==null) throw new Error('未批准模块不能伪造人工批准记录');
  if(dynamicFit){
    if(!Object.hasOwn(asset,'fitPolicy')||!Object.hasOwn(asset,'sourceParts'))throw new Error('动态适配素材必须同时登记 fitPolicy 与 sourceParts');
    if(asset.fitPolicy?.kind==='headphone-arc-cups-v1')validateHeadphoneFitAsset(asset);
    else if(asset.fitPolicy?.kind==='anchor-pair-rigid-v1')validateAnchorPairFitAsset(asset);
    else throw new Error('动态适配算法类型未登记');
  }
  const approvalIds=new Set();
  for(const adaptation of asset.artApproval.adaptations){
    const allowed=['approvalId','baseId','baseAssetRefs','poseId','view','assetId','assetVersion','assetSha256','recipeId','recipeVersion','recipeFingerprint','evidence','coordinationChecklist'];
    if(!object(adaptation)||Object.keys(adaptation).some(key=>!allowed.includes(key))||allowed.some(key=>!Object.hasOwn(adaptation,key)))throw new Error('模块适配批准记录字段无效');
    const validBaseRefs=Array.isArray(adaptation.baseAssetRefs)&&adaptation.baseAssetRefs.length>0&&adaptation.baseAssetRefs.every(ref=>object(ref)&&Object.keys(ref).every(key=>['id','version','sha256'].includes(key))&&typeof ref.id==='string'&&ref.id&&typeof ref.version==='string'&&/^\d+\.\d+\.\d+$/.test(ref.version)&&typeof ref.sha256==='string'&&/^[a-f0-9]{64}$/.test(ref.sha256));
    const checklist=adaptation.coordinationChecklist;
    const validChecklist=object(checklist)&&Object.keys(checklist).length===COORDINATION_CHECKS.length&&
      Object.keys(checklist).every(key=>COORDINATION_CHECKS.includes(key)&&['pass','issue','unreviewed'].includes(checklist[key]));
    if(typeof adaptation.approvalId!=='string'||!adaptation.approvalId.trim()||approvalIds.has(adaptation.approvalId)||typeof adaptation.baseId!=='string'||!adaptation.baseId||!validBaseRefs||typeof adaptation.poseId!=='string'||!adaptation.poseId||adaptation.view!=='front'||typeof adaptation.assetId!=='string'||!adaptation.assetId||typeof adaptation.assetVersion!=='string'||!/^[0-9]+\.[0-9]+\.[0-9]+$/.test(adaptation.assetVersion)||typeof adaptation.assetSha256!=='string'||!/^[a-f0-9]{64}$/.test(adaptation.assetSha256)||typeof adaptation.recipeId!=='string'||!adaptation.recipeId||typeof adaptation.recipeVersion!=='string'||!/^[0-9]+\.[0-9]+\.[0-9]+$/.test(adaptation.recipeVersion)||typeof adaptation.recipeFingerprint!=='string'||!/^[a-f0-9]{16}$/.test(adaptation.recipeFingerprint)||!validApprovalEvidence(adaptation.evidence)||!validChecklist)throw new Error('模块适配批准记录缺少精确基底、配方指纹、协调性检查或冻结证据');
    approvalIds.add(adaptation.approvalId);
  }
  return structuredClone(asset);
}

function validateHeadphoneFitAsset(asset){
  const policy=asset.fitPolicy,sourceParts=asset.sourceParts;
  const policyKeys=['id','version','kind','supports','headBounds','band','cup','faceClearancePx'];
  if(!object(policy)||Object.keys(policy).some(key=>!policyKeys.includes(key))||policyKeys.some(key=>!Object.hasOwn(policy,key))||!object(sourceParts)||Object.keys(sourceParts).some(key=>!['asset','parts'].includes(key))||!Object.hasOwn(sourceParts,'asset')||!Object.hasOwn(sourceParts,'parts'))throw new Error('动态耳机素材必须完整登记 fitPolicy 与 sourceParts');
  if(typeof policy.id!=='string'||!/^fit\/[a-z0-9][a-z0-9._/-]{2,127}$/.test(policy.id)||typeof policy.version!=='string'||!/^[0-9]+\.[0-9]+\.[0-9]+$/.test(policy.version)||policy.kind!=='headphone-arc-cups-v1'||asset.category!=='headphones')throw new Error('动态耳机 fitPolicy ID、版本、算法类型或素材分类无效');
  const supports=policy.supports,supportKeys=['bodyIds','view','poseIds','layoutIds','styleIds'];
  if(!object(supports)||Object.keys(supports).some(key=>!supportKeys.includes(key))||supportKeys.some(key=>!Object.hasOwn(supports,key))||!['bodyIds','poseIds','layoutIds','styleIds'].every(key=>Array.isArray(supports[key])&&supports[key].length>0&&supports[key].every(value=>typeof value==='string'&&value.trim())&&new Set(supports[key]).size===supports[key].length)||supports.view!=='front'||supports.poseIds.some(value=>!asset.poses.includes(value))||supports.layoutIds.some(value=>!asset.layoutIds.includes(value))||supports.styleIds.some(value=>!asset.styles.includes(value)))throw new Error('动态耳机 fitPolicy 支持范围无效或超出素材能力');
  const scaleRange=range=>object(range)&&Object.keys(range).length===2&&Number.isFinite(range.min)&&Number.isFinite(range.max)&&range.min>0&&range.max>=range.min&&range.max<=4;
  const ratioRange=range=>scaleRange(range)&&range.min<=2&&range.max<=2;
  if(!object(policy.headBounds)||Object.keys(policy.headBounds).some(key=>!['widthRatio','heightRatio','aspectRatio','mountSpanRatio'].includes(key))||!['widthRatio','heightRatio','aspectRatio','mountSpanRatio'].every(key=>ratioRange(policy.headBounds[key])))throw new Error('动态耳机头部几何比例范围无效');
  if(!object(policy.band)||Object.keys(policy.band).some(key=>!['minSpanScale','maxSpanScale','minRiseScale','maxRiseScale','maxAnisotropy','thicknessPx'].includes(key))||!['minSpanScale','maxSpanScale','minRiseScale','maxRiseScale'].every(key=>Number.isFinite(policy.band[key])&&policy.band[key]>0&&policy.band[key]<=4)||policy.band.maxSpanScale<policy.band.minSpanScale||policy.band.maxRiseScale<policy.band.minRiseScale||!Number.isFinite(policy.band.maxAnisotropy)||policy.band.maxAnisotropy<1||policy.band.maxAnisotropy>4||!Number.isFinite(policy.band.thicknessPx)||policy.band.thicknessPx<=0||policy.band.thicknessPx>256)throw new Error('动态耳机头梁缩放合同无效');
  if(!object(policy.cup)||Object.keys(policy.cup).some(key=>!['minScale','maxScale','contactTolerancePx','maxRotationDeg'].includes(key))||!['minScale','maxScale','contactTolerancePx','maxRotationDeg'].every(key=>Object.hasOwn(policy.cup,key))||!Number.isFinite(policy.cup.minScale)||!Number.isFinite(policy.cup.maxScale)||policy.cup.minScale<=0||policy.cup.maxScale<policy.cup.minScale||policy.cup.maxScale>4||!Number.isFinite(policy.cup.contactTolerancePx)||policy.cup.contactTolerancePx<0||policy.cup.contactTolerancePx>64||!Number.isFinite(policy.cup.maxRotationDeg)||policy.cup.maxRotationDeg<0||policy.cup.maxRotationDeg>180||!Number.isFinite(policy.faceClearancePx)||policy.faceClearancePx<0||policy.faceClearancePx>64)throw new Error('动态耳机杯体比例或接触范围无效');
  const source=sourceParts.asset;
  if(!object(source)||Object.keys(source).some(key=>!['id','version','sha256','width','height'].includes(key))||Object.keys(source).length!==5||source.id!==asset.id||source.version!==asset.version||source.sha256!==asset.sha256||source.width!==asset.width||source.height!==asset.height)throw new Error('耳机 sourceParts 未绑定同一份素材 ID、版本、哈希与尺寸');
  const parts=sourceParts.parts,expectedIds=['band','leftCup','rightCup'];
  if(!Array.isArray(parts)||parts.length!==expectedIds.length||parts.map(item=>item?.id).sort().join(',')!==[...expectedIds].sort().join(','))throw new Error('耳机 kit 必须恰有 band、leftCup、rightCup 三个独立源部件');
  const rects=[];
  for(const part of parts){
    const keys=['id','sourceRect','visibleRect','anchors','z','occlusion','contactNormal'];
    const allowedPartKeys=part?.id==='band'?keys.filter(key=>key!=='contactNormal'):keys;
    if(!object(part)||Object.keys(part).some(key=>!allowedPartKeys.includes(key))||allowedPartKeys.some(key=>!Object.hasOwn(part,key))||!object(part.sourceRect)||Object.keys(part.sourceRect).some(key=>!['x','y','width','height'].includes(key))||Object.keys(part.sourceRect).length!==4||![part.sourceRect.x,part.sourceRect.y,part.sourceRect.width,part.sourceRect.height].every(Number.isInteger)||part.sourceRect.x<0||part.sourceRect.y<0||part.sourceRect.width<1||part.sourceRect.height<1||part.sourceRect.x+part.sourceRect.width>asset.width||part.sourceRect.y+part.sourceRect.height>asset.height||!Number.isInteger(part.z)||!object(part.occlusion)||part.occlusion.mode!=='above-base'||!Array.isArray(part.occlusion.covers)||!part.occlusion.covers.length||part.occlusion.covers.some(id=>typeof id!=='string'||!id))throw new Error(`耳机部件 ${part?.id??''} 的 sourceRect、层序或遮挡合同无效`);
    const anchors=part.anchors,expectedAnchors=part.id==='band'?['leftTerminal','rightTerminal','crown','leftShoulder','rightShoulder']:['contactAnchor','bandJointAnchor'];
    if(!object(anchors)||Object.keys(anchors).some(key=>!expectedAnchors.includes(key))||expectedAnchors.some(key=>!Object.hasOwn(anchors,key))||expectedAnchors.some(key=>!normalizedPoint(anchors[key]))||(part.id!=='band'&&!validProfileNormal(part.contactNormal)))throw new Error(`耳机部件 ${part.id} 缺少有效局部锚点或法线`);
    const visible=part.visibleRect;
    if(!object(visible)||Object.keys(visible).length!==4||Object.keys(visible).some(key=>!['x','y','width','height'].includes(key))||![visible.x,visible.y,visible.width,visible.height].every(Number.isInteger)||visible.x<0||visible.y<0||visible.width<1||visible.height<1||visible.x+visible.width>part.sourceRect.width||visible.y+visible.height>part.sourceRect.height)throw new Error(`耳机部件 ${part.id} 可见像素包络无效`);
    rects.push({id:part.id,...part.sourceRect});
  }
  for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++){
    const a=rects[i],b=rects[j],overlap=a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y;
    if(overlap)throw new Error(`耳机 sourceParts 矩形相互覆盖：${a.id}/${b.id}`);
  }
  const byPart=new Map(parts.map(part=>[part.id,part]));
  if(!(byPart.get('band').z<byPart.get('leftCup').z&&byPart.get('band').z<byPart.get('rightCup').z)||byPart.get('leftCup').z===byPart.get('rightCup').z)throw new Error('耳机部件层序必须让头梁在两只耳罩后方且左右耳罩顺序确定');
  if(asset.baseIds.some(baseId=>parts.some(part=>!part.occlusion.covers.includes(baseId))))throw new Error('耳机 sourceParts 必须为每个声明支持基底分别登记遮挡覆盖');
}

function validateAnchorPairFitAsset(asset){
  const policy=asset.fitPolicy,sourceParts=asset.sourceParts;
  const policyKeys=['id','version','kind','anchorKind','supports','headBounds','scale','maxRotationDeg','maxAnchorErrorPx'];
  if(!object(policy)||Object.keys(policy).some(key=>!policyKeys.includes(key))||policyKeys.some(key=>!Object.hasOwn(policy,key))||!object(sourceParts)||Object.keys(sourceParts).some(key=>!['asset','parts'].includes(key))||!Object.hasOwn(sourceParts,'asset')||!Object.hasOwn(sourceParts,'parts'))throw new Error('双锚动态素材必须完整登记 fitPolicy 与 sourceParts');
  if(typeof policy.id!=='string'||!/^fit\/[a-z0-9][a-z0-9._/-]{2,127}$/.test(policy.id)||typeof policy.version!=='string'||!/^[0-9]+\.[0-9]+\.[0-9]+$/.test(policy.version)||policy.kind!=='anchor-pair-rigid-v1'||!['eyePupils','neckContacts'].includes(policy.anchorKind)||policy.anchorKind==='eyePupils'&&asset.category!=='eyewear'||policy.anchorKind==='neckContacts'&&asset.category!=='neckwear')throw new Error('双锚 fitPolicy ID、版本、算法、锚点类型或素材分类无效');
  const supports=policy.supports,supportKeys=['bodyIds','view','poseIds','layoutIds','styleIds'];
  if(!object(supports)||Object.keys(supports).some(key=>!supportKeys.includes(key))||supportKeys.some(key=>!Object.hasOwn(supports,key))||!['bodyIds','poseIds','layoutIds','styleIds'].every(key=>Array.isArray(supports[key])&&supports[key].length>0&&supports[key].every(value=>typeof value==='string'&&value.trim())&&new Set(supports[key]).size===supports[key].length)||supports.view!=='front'||supports.poseIds.some(value=>!asset.poses.includes(value))||supports.layoutIds.some(value=>!asset.layoutIds.includes(value))||supports.styleIds.some(value=>!asset.styles.includes(value)))throw new Error('双锚 fitPolicy 支持范围无效或超出素材能力');
  const ratioRange=range=>object(range)&&Object.keys(range).length===2&&Number.isFinite(range.min)&&Number.isFinite(range.max)&&range.min>0&&range.max>=range.min&&range.max<=4;
  if(!object(policy.headBounds)||Object.keys(policy.headBounds).some(key=>!['widthRatio','heightRatio','aspectRatio','mountSpanRatio'].includes(key))||!['widthRatio','heightRatio','aspectRatio'].every(key=>ratioRange(policy.headBounds[key]))||(policy.headBounds.mountSpanRatio!==undefined&&!ratioRange(policy.headBounds.mountSpanRatio))||!object(policy.scale)||Object.keys(policy.scale).some(key=>!['min','max'].includes(key))||Object.keys(policy.scale).length!==2||!ratioRange(policy.scale)||!Number.isFinite(policy.maxRotationDeg)||policy.maxRotationDeg<0||policy.maxRotationDeg>180||!Number.isFinite(policy.maxAnchorErrorPx)||policy.maxAnchorErrorPx<0||policy.maxAnchorErrorPx>64)throw new Error('双锚适配比例或接触范围无效');
  const source=sourceParts.asset;
  if(!object(source)||Object.keys(source).some(key=>!['id','version','sha256','width','height'].includes(key))||Object.keys(source).length!==5||source.id!==asset.id||source.version!==asset.version||source.sha256!==asset.sha256||source.width!==asset.width||source.height!==asset.height)throw new Error('双锚 sourceParts 未绑定同一份素材 ID、版本、哈希与尺寸');
  if(!Array.isArray(sourceParts.parts)||sourceParts.parts.length!==1)throw new Error('双锚适配当前必须登记且只登记一个完整组件源区域');
  const part=sourceParts.parts[0],keys=['id','sourceRect','anchors','z','occlusion'];
  if(!object(part)||Object.keys(part).some(key=>!keys.includes(key))||keys.some(key=>!Object.hasOwn(part,key))||part.id!=='anchorPair'||!object(part.sourceRect)||Object.keys(part.sourceRect).some(key=>!['x','y','width','height'].includes(key))||Object.keys(part.sourceRect).length!==4||![part.sourceRect.x,part.sourceRect.y,part.sourceRect.width,part.sourceRect.height].every(Number.isInteger)||part.sourceRect.x<0||part.sourceRect.y<0||part.sourceRect.width<1||part.sourceRect.height<1||part.sourceRect.x+part.sourceRect.width>asset.width||part.sourceRect.y+part.sourceRect.height>asset.height||!Number.isInteger(part.z)||part.z!==asset.z||!object(part.occlusion)||part.occlusion.mode!=='above-base'||!Array.isArray(part.occlusion.covers)||!part.occlusion.covers.length||part.occlusion.covers.some(id=>typeof id!=='string'||!id)||!object(part.anchors)||Object.keys(part.anchors).some(key=>!['left','right'].includes(key))||!normalizedPoint(part.anchors.left)||!normalizedPoint(part.anchors.right)||part.anchors.left.x>=part.anchors.right.x)throw new Error('双锚组件必须登记有效的完整源区域、左右锚点和遮挡规则');
  if(asset.baseIds.some(baseId=>!part.occlusion.covers.includes(baseId)))throw new Error('双锚 sourcePart 必须为每个声明支持基底分别登记遮挡覆盖');
}

const normalizedPoint=point=>object(point)&&Number.isFinite(point.x)&&Number.isFinite(point.y)&&point.x>=0&&point.x<=1&&point.y>=0&&point.y<=1;
function normalizedRect(rect){return object(rect)&&[rect.x,rect.y,rect.width,rect.height].every(Number.isFinite)&&rect.x>=0&&rect.y>=0&&rect.width>0&&rect.height>0&&rect.x+rect.width<=1&&rect.y+rect.height<=1;}
function containedRect(inner,outer){return normalizedRect(inner)&&normalizedRect(outer)&&inner.x>=outer.x&&inner.y>=outer.y&&inner.x+inner.width<=outer.x+outer.width&&inner.y+inner.height<=outer.y+outer.height;}
function validProfileNormal(normal){
  if(!normalizedPoint({x:(normal?.x+1)/2,y:(normal?.y+1)/2}))return false;
  const length=Math.hypot(normal.x,normal.y);
  return length>=.95&&length<=1.05;
}
function validateBaseGeometryProfile(profile,states){
  const required=['id','version','baseId','baseAssetRefs','bodyId','view','poseId','layoutId','styleId','canvas','landmarks','faceKeepout'];
  const allowed=[...required,'bandSeat','occlusionCutouts'];
  if(!object(profile)||Object.keys(profile).some(key=>!allowed.includes(key))||required.some(key=>!Object.hasOwn(profile,key)))throw new Error('基底几何 profile 字段无效');
  if(typeof profile.id!=='string'||!/^geometry\/[a-z0-9][a-z0-9._/-]{2,127}$/.test(profile.id)||typeof profile.version!=='string'||!/^[0-9]+\.[0-9]+\.[0-9]+$/.test(profile.version))throw new Error('基底几何 profile 必须有稳定 ID 和 semver 版本');
  if(typeof profile.bodyId!=='string'||!profile.bodyId.trim()||profile.view!=='front')throw new Error('基底几何 profile 必须声明身体结构和正面视角');
  const state=states.find(item=>item.id===profile.baseId);
  if(!state||profile.poseId!==state.poseId||profile.layoutId!==state.layoutId||profile.styleId!==state.styleId||!sameApprovalValue(profile.baseAssetRefs,state.assetRefs))throw new Error('基底几何 profile 与已登记基底、姿态、布局、风格或素材哈希不匹配');
  if(!object(profile.canvas)||Object.keys(profile.canvas).some(key=>!['width','height'].includes(key))||profile.canvas.width!==state.width||profile.canvas.height!==state.height)throw new Error('基底几何 profile 画布尺寸与可信基底不匹配');
  const landmarks=profile.landmarks;
  if(!object(landmarks)||Object.keys(landmarks).some(key=>!['headBounds','crown','earMounts','anchorPairs'].includes(key))||!normalizedRect(landmarks.headBounds))throw new Error('基底几何 profile 至少需要准确的头部边界');
  const hasHeadsetMarks=Object.hasOwn(landmarks,'crown')||Object.hasOwn(landmarks,'earMounts');
  if(hasHeadsetMarks){
    if(!normalizedPoint(landmarks.crown)||!object(landmarks.earMounts)||Object.keys(landmarks.earMounts).some(key=>!['left','right'].includes(key))||!landmarks.earMounts.left||!landmarks.earMounts.right)throw new Error('头戴组件 profile 必须完整标注头顶和左右耳挂点');
    if(landmarks.crown.x<landmarks.headBounds.x||landmarks.crown.x>landmarks.headBounds.x+landmarks.headBounds.width||landmarks.crown.y<landmarks.headBounds.y||landmarks.crown.y>landmarks.headBounds.y+landmarks.headBounds.height)throw new Error('基底几何 profile 的头顶点必须位于头部边界内');
    for(const [side,mount] of Object.entries(landmarks.earMounts)){
      if(!object(mount)||Object.keys(mount).some(key=>!['x','y','normal','cupSeat'].includes(key))||!normalizedPoint(mount)||!validProfileNormal(mount.normal)||mount.x<landmarks.headBounds.x||mount.x>landmarks.headBounds.x+landmarks.headBounds.width||mount.y<landmarks.headBounds.y||mount.y>landmarks.headBounds.y+landmarks.headBounds.height)throw new Error(`基底几何 profile 的 ${side} 耳挂点或外法线无效`);
    }
    for(const [side,mount] of Object.entries(landmarks.earMounts)){
      const seat=mount.cupSeat;
      if(!object(seat)||Object.keys(seat).length!==3||Object.keys(seat).some(key=>!['height','minHeadWidthRatio','maxHeadWidthRatio'].includes(key))||!Number.isFinite(seat.height)||seat.height<=0||seat.height>.5||!Number.isFinite(seat.minHeadWidthRatio)||!Number.isFinite(seat.maxHeadWidthRatio)||seat.minHeadWidthRatio<=0||seat.maxHeadWidthRatio<seat.minHeadWidthRatio||seat.maxHeadWidthRatio>.5)throw new Error(`基底 ${side} 耳侧尺寸合同无效`);
    }
    const band=profile.bandSeat;
    if(!object(band)||Object.keys(band).length!==4||Object.keys(band).some(key=>!['leftShoulder','rightShoulder','crown','maxContourErrorPx'].includes(key))||!['leftShoulder','rightShoulder','crown'].every(key=>normalizedPoint(band[key]))||!sameApprovalValue(band.crown,landmarks.crown)||!Number.isFinite(band.maxContourErrorPx)||band.maxContourErrorPx<0||band.maxContourErrorPx>16)throw new Error('头戴组件缺少可信两肩和发顶贴合合同');
    if(landmarks.earMounts.left.x>=landmarks.earMounts.right.x||landmarks.earMounts.left.normal.x>=0||landmarks.earMounts.right.normal.x<=0)throw new Error('基底几何 profile 的左右耳挂点顺序或外法线朝向无效');
    if(profile.faceKeepout&&!containedRect(profile.faceKeepout,landmarks.headBounds))throw new Error('基底几何 profile 的面部 keepout 必须位于头部边界内');
  }else if(profile.faceKeepout!==undefined&&profile.faceKeepout!==null){
    if(!containedRect(profile.faceKeepout,landmarks.headBounds))throw new Error('基底几何 profile 的 keepout 必须位于头部边界内');
  }
  if(landmarks.anchorPairs!==undefined){
    if(!object(landmarks.anchorPairs)||Object.keys(landmarks.anchorPairs).some(key=>!['eyePupils','neckContacts'].includes(key)))throw new Error('基底几何 profile 的锚点对分类无效');
    for(const [kind,pair] of Object.entries(landmarks.anchorPairs)){
      if(!object(pair)||Object.keys(pair).some(key=>!['left','right'].includes(key))||!normalizedPoint(pair.left)||!normalizedPoint(pair.right)||pair.left.x>=pair.right.x||Math.hypot((pair.right.x-pair.left.x)*profile.canvas.width,(pair.right.y-pair.left.y)*profile.canvas.height)<1)throw new Error(`基底几何 profile 的 ${kind} 左右锚点无效`);
      if(pair.left.x<landmarks.headBounds.x||pair.left.x>landmarks.headBounds.x+landmarks.headBounds.width||pair.left.y<landmarks.headBounds.y||pair.left.y>landmarks.headBounds.y+landmarks.headBounds.height||pair.right.x<landmarks.headBounds.x||pair.right.x>landmarks.headBounds.x+landmarks.headBounds.width||pair.right.y<landmarks.headBounds.y||pair.right.y>landmarks.headBounds.y+landmarks.headBounds.height)throw new Error(`基底几何 profile 的 ${kind} 锚点必须位于头部边界内`);
    }
  }
  if(profile.occlusionCutouts!==undefined){
    if(!hasHeadsetMarks||!object(profile.occlusionCutouts)||Object.keys(profile.occlusionCutouts).some(key=>!['band','leftCup','rightCup'].includes(key))||Object.values(profile.occlusionCutouts).some(polygons=>!Array.isArray(polygons)||polygons.length>8||polygons.some(points=>!Array.isArray(points)||points.length<3||points.length>64||!isValidNormalizedCutoutPolygon(points))))throw new Error('几何 profile 组件遮挡区域无效');
  }
  if(profile.faceKeepout!==undefined&&profile.faceKeepout!==null&&!normalizedRect(profile.faceKeepout))throw new Error('基底几何 profile keepout 矩形无效');
  return structuredClone(profile);
}

export function getBaseGeometryProfileFingerprint(profile){
  if(!object(profile))return '';
  return stableFingerprint(profile);
}

/** The fingerprint binds every layout, pose and placement value that can affect rendering. */
export function getModularRecipeFingerprint(recipe,catalog=null){
  if(!object(recipe))return '';
  const core={id:recipe.id,version:recipe.version,baseId:recipe.baseId,assetIds:recipe.assetIds,poseId:recipe.poseId,view:recipe.view,layoutId:recipe.layoutId,styleId:recipe.styleId,placements:recipe.placements,layerOrder:recipe.layerOrder,highRiskGroups:recipe.highRiskGroups,gripId:recipe.gripId,fitProfileRef:recipe.fitProfileRef??null};
  if(!recipe.fitProfileRef)return stableFingerprint(core);
  const trusted=catalog??activeModularCatalog;
  const profile=trusted?.baseGeometryProfiles?.find(item=>item.id===recipe.fitProfileRef.id);
  const assets=(recipe.assetIds??[]).map(id=>trusted?.assets?.find(item=>item.id===id));
  const resolvedFits=assets.map(asset=>{
    if(!asset?.fitPolicy||!asset.sourceParts||!profile)return null;
    const resolver=asset.fitPolicy.kind==='headphone-arc-cups-v1'?resolveHeadphoneFit:asset.fitPolicy.kind==='anchor-pair-rigid-v1'?resolveAnchorPairFit:null;
    if(!resolver)return {availability:'unsupported',reason:'未登记动态解算器'};
    const fit=resolver({baseGeometryProfile:profile,fitPolicy:asset.fitPolicy,sourceParts:asset.sourceParts});
    return {availability:fit.availability,fitVersion:fit.fitVersion,fitFingerprint:fit.fitFingerprint??null,reason:fit.availability==='available'?null:fit.reason};
  });
  return stableFingerprint({recipe:core,fitVersion:COMPOSITION_FIT_VERSION,geometryProfile:profile??null,fitAssets:assets.map(asset=>asset?{id:asset.id,version:asset.version,sha256:asset.sha256,fitPolicy:asset.fitPolicy??null,sourceParts:asset.sourceParts??null}:null),resolvedFits});
}

/** Art approval belongs to one exact base/component/recipe adaptation, not to every use of an asset. */
export function getModularRecipeApproval(recipe,catalog=null){
  const trusted=Array.isArray(catalog)?null:(catalog??activeModularCatalog);
  const assets=Array.isArray(catalog)?catalog:trusted?.assets??[];
  if(!object(recipe)||!Array.isArray(recipe.assetIds))return {status:'pending',approvedAssetIds:[],pendingAssetIds:[],approvalIds:[]};
  const baseStates=trusted?.baseStates??[];
  const baseState=baseStates.find(item=>item.id===recipe.baseId);
  const recipeFingerprint=getModularRecipeFingerprint(recipe,trusted);
  const approvedAssetIds=[],pendingAssetIds=[],approvalIds=[];
  for(const assetId of recipe.assetIds){
    const asset=assets.find(item=>item.id===assetId);
    const exact=asset?.artApproval?.adaptations?.find(item=>
      item.baseId===recipe.baseId&&item.poseId===recipe.poseId&&item.view===recipe.view&&
      baseState&&sameApprovalValue(item.baseAssetRefs,baseState.assetRefs)&&item.recipeFingerprint===recipeFingerprint&&validApprovalEvidence(item.evidence)&&
      coordinationChecklistPassed(item.coordinationChecklist)&&
      item.assetId===asset.id&&item.assetVersion===asset.version&&item.assetSha256===asset.sha256&&
      item.recipeId===recipe.id&&item.recipeVersion===recipe.version
    );
    if(asset?.artApproval?.status==='approved'&&exact){approvedAssetIds.push(assetId);approvalIds.push({assetId,approvalId:exact.approvalId});}
    else pendingAssetIds.push(assetId);
  }
  const rejected=recipe.assetIds.some(id=>assets.find(item=>item.id===id)?.artApproval?.status==='rejected');
  return {status:rejected?'rejected':pendingAssetIds.length===0&&recipe.assetIds.length>0?'approved':'pending',approvedAssetIds,pendingAssetIds,approvalIds};
}

function validatePlacement(placement,asset,baseState) {
  if (!object(placement)||Object.keys(placement).some(key=>!['assetId','sourceAnchor','targetAnchor','width','height'].includes(key))||placement.assetId!==asset.id) throw new Error('模块配方的绘制锚点记录无效');
  if (typeof placement.sourceAnchor!=='string'||!asset.anchors[placement.sourceAnchor]||!normalizedPoint(placement.targetAnchor)) throw new Error(`模块素材 ${asset.id} 的源锚点或目标锚点未登记`);
  if (![placement.width,placement.height].every(value=>Number.isFinite(value)&&value>0&&value<=1.6)) throw new Error(`模块素材 ${asset.id} 的绘制尺寸超出支持范围`);
  const aspect=(placement.width*baseState.width)/(placement.height*baseState.height),assetAspect=asset.width/asset.height;
  if (Math.abs(aspect-assetAspect)/assetAspect>.015) throw new Error(`模块素材 ${asset.id} 的绘制盒改变了原图比例`);
  return structuredClone(placement);
}

export function createModularCatalog({assets = [], recipes = [], grips = [], baseGeometryProfiles = []} = {}) {
  const templateStates=listTemplateAssetStates();
  if (!Array.isArray(assets)||!Array.isArray(recipes)||!Array.isArray(grips)||!Array.isArray(baseGeometryProfiles)) throw new Error('模块目录必须提供素材、配方、抓握和几何 profile 列表');
  const profileIds=new Set(),profileBases=new Set();
  const normalizedProfiles=baseGeometryProfiles.map(profile=>{
    const next=validateBaseGeometryProfile(profile,templateStates);
    if(profileIds.has(next.id)||profileBases.has(next.baseId))throw new Error('基底几何 profile ID 或基底状态重复');
    profileIds.add(next.id);profileBases.add(next.baseId);return next;
  });
  const profileById=new Map(normalizedProfiles.map(profile=>[profile.id,profile]));
  const baseStates=templateStates.map(state=>{
    const profile=normalizedProfiles.find(item=>item.baseId===state.id);
    return profile?{...state,geometryProfile:structuredClone(profile)}:state;
  });
  const ids = new Set(), normalized = assets.map(asset => {
    const next = validateModularAssetRecord(asset,{knownAssetIds:ids});
    ids.add(next.id); return next;
  });
  const assetById=new Map(normalized.map(asset=>[asset.id,asset]));
  if(grips.length)throw new Error('当前模块目录尚无已渲染的抓握/接触配方，不能仅凭抓握 ID 登记能力');
  const recipeIds = new Set();
  const normalizedRecipes = recipes.map(recipe => {
    const allowed=['id','version','baseId','assetIds','poseId','view','layoutId','styleId','placements','layerOrder','highRiskGroups','gripId','defaultEligible','fitProfileRef'];
    if (!object(recipe)||Object.keys(recipe).some(key=>!allowed.includes(key))||typeof recipe.id !== 'string' || !/^[a-z0-9][a-z0-9._/-]{2,127}$/.test(recipe.id) || recipeIds.has(recipe.id) || typeof recipe.version!=='string'||!/^\d+\.\d+\.\d+$/.test(recipe.version)) throw new Error('模块配方 ID 或 semver 版本无效');
    recipeIds.add(recipe.id);
    const baseState=baseStates.find(state=>state.id===recipe.baseId);
    if (!baseState) throw new Error('模块配方必须引用可信完整 PNG 基底状态');
    if (!Array.isArray(recipe.assetIds) || !recipe.assetIds.length || recipe.assetIds.some(id => !ids.has(id)) || new Set(recipe.assetIds).size !== recipe.assetIds.length) throw new Error('模块配方必须引用有效且不重复的模块素材');
    if (typeof recipe.poseId !== 'string' || recipe.poseId!==baseState.poseId || recipe.view !== 'front'||recipe.layoutId!==baseState.layoutId||recipe.styleId!==baseState.styleId) throw new Error('模块配方的基底、布局、风格或正面姿态不匹配');
    const modules=recipe.assetIds.map(id=>assetById.get(id));
    const dynamicModules=modules.filter(asset=>Object.hasOwn(asset,'fitPolicy')||Object.hasOwn(asset,'sourceParts'));
    const staticModules=modules.filter(asset=>!dynamicModules.includes(asset));
    const dynamic=dynamicModules.length>0;
    const occupiedSlots=new Set();
    for(const asset of modules){
      if(asset.engineeringStatus!=='available')throw new Error(`模块素材 ${asset.id} 当前工程资源不可用`);
      if(!asset.baseIds.includes(baseState.id)||!asset.layoutIds.includes(baseState.layoutId)||!asset.styles.includes(baseState.styleId)||!asset.poses.includes(recipe.poseId)||asset.view!==recipe.view)throw new Error(`模块素材 ${asset.id} 未声明支持此基底、布局、风格、姿态或视角`);
      for(const slot of asset.slots){if(occupiedSlots.has(slot))throw new Error(`模块配方存在槽位冲突：${slot}`);occupiedSlots.add(slot);}
      if(asset.dependencies.some(id=>!recipe.assetIds.includes(id)))throw new Error(`模块素材 ${asset.id} 缺少依赖素材`);
      if(asset.excludes.some(id=>recipe.assetIds.includes(id)))throw new Error(`模块素材 ${asset.id} 与所选素材互斥`);
      if(asset.grip.required&&(!recipe.gripId||recipe.gripId!==asset.grip.gripId||!gripIds.has(recipe.gripId)))throw new Error(`模块素材 ${asset.id} 缺少可信抓握配方`);
      if(!asset.grip.required&&recipe.gripId&&!gripIds.has(recipe.gripId))throw new Error('模块配方引用未登记抓握');
    }
    let placements;
    if(dynamic){
      if(!recipe.fitProfileRef||Object.keys(recipe.fitProfileRef).some(key=>!['id','version','fingerprint'].includes(key))||Object.keys(recipe.fitProfileRef).length!==3)throw new Error('动态适配配方必须引用一个精确 geometry profile');
      const profile=profileById.get(recipe.fitProfileRef.id);
      if(!profile||recipe.fitProfileRef.version!==profile.version||recipe.fitProfileRef.fingerprint!==getBaseGeometryProfileFingerprint(profile)||profile.baseId!==baseState.id)throw new Error('动态配方的 geometry profile 引用与可信基底不匹配');
      for(const asset of dynamicModules){
        const policy=asset.fitPolicy;
        if(!policy.supports.bodyIds.includes(profile.bodyId)||policy.supports.view!==profile.view||!policy.supports.poseIds.includes(profile.poseId)||!policy.supports.layoutIds.includes(profile.layoutId)||!policy.supports.styleIds.includes(profile.styleId))throw new Error(`动态 fitPolicy ${policy.id} 未声明支持当前 geometry profile`);
        if(policy.kind==='headphone-arc-cups-v1'&&(!profile.landmarks.crown||!profile.landmarks.earMounts||!profile.faceKeepout))throw new Error('头戴组件 geometry profile 缺少头顶、双耳挂点或面部 keepout');
        if(policy.kind==='anchor-pair-rigid-v1'&&!profile.landmarks.anchorPairs?.[policy.anchorKind])throw new Error(`动态组件 geometry profile 缺少 ${policy.anchorKind} 双锚点`);
      }
      if(!Array.isArray(recipe.placements)||recipe.placements.length!==staticModules.length||new Set(recipe.placements.map(item=>item?.assetId)).size!==staticModules.length||recipe.placements.some(item=>!staticModules.some(asset=>asset.id===item.assetId)))throw new Error('动态配方 placements 只能包含每个刚性组件的显式静态适配');
      placements=staticModules.map(asset=>validatePlacement(recipe.placements.find(item=>item.assetId===asset.id),asset,baseState));
    }else{
      if(recipe.fitProfileRef!==undefined)throw new Error('刚性模块配方不能引用动态 geometry profile');
      if(!Array.isArray(recipe.placements)||recipe.placements.length!==modules.length||new Set(recipe.placements.map(item=>item?.assetId)).size!==modules.length)throw new Error('模块配方必须为每个模块声明唯一绘制锚点');
      placements=recipe.assetIds.map(id=>validatePlacement(recipe.placements.find(item=>item?.assetId===id),assetById.get(id),baseState));
    }
    if(!Array.isArray(recipe.layerOrder)||recipe.layerOrder.length!==modules.length||new Set(recipe.layerOrder).size!==modules.length||recipe.layerOrder.some(id=>!recipe.assetIds.includes(id)))throw new Error('模块配方图层顺序必须恰好列出全部模块');
    const sortedLayerOrder=[...recipe.assetIds].sort((a,b)=>assetById.get(a).z-assetById.get(b).z);
    if(sortedLayerOrder.some((id,index)=>recipe.layerOrder[index]!==id)||sortedLayerOrder.some((id,index)=>index>0&&assetById.get(id).z===assetById.get(sortedLayerOrder[index-1]).z))throw new Error('模块配方图层顺序与资产 z 规则不一致');
    if (!Array.isArray(recipe.highRiskGroups) || recipe.highRiskGroups.some(group=>!object(group)||typeof group.id!=='string'||!Array.isArray(group.factorIds)||group.factorIds.some(id=>typeof id!=='string')||![3,4].includes(group.strength))) throw new Error('模块配方的高风险覆盖组必须显式声明因子 ID 与 3/4 因素强度');
    if(recipe.gripId!==null)throw new Error('当前模块目录尚无已渲染的抓握/接触配方，模块配方必须声明 gripId: null');
    if(typeof recipe.defaultEligible!=='boolean')throw new Error('模块配方必须显式声明默认随机资格');
    const normalizedRecipe={...structuredClone(recipe),placements};
    const approval=getModularRecipeApproval(normalizedRecipe,{assets:normalized,baseStates,baseGeometryProfiles:normalizedProfiles});
    const releaseApproved=modules.every(asset=>asset.releaseStatus==='approved');
    if(recipe.defaultEligible&&(approval.status!=='approved'||!releaseApproved))throw new Error('默认随机配方必须具有精确适配美术批准记录与发布资格');
    return normalizedRecipe;
  });
  return Object.freeze({version:1,assets:Object.freeze(normalized),recipes:Object.freeze(normalizedRecipes),baseStates:Object.freeze(baseStates.map(state=>structuredClone(state))),baseGeometryProfiles:Object.freeze(normalizedProfiles.map(profile=>structuredClone(profile))),grips:Object.freeze(grips.map(grip=>structuredClone(grip)))});
}

export function getTrustedModuleRecipes(catalog = null) {
  return structuredClone(catalog?.recipes ?? activeModularCatalog?.recipes ?? []);
}

export function getTrustedModularCatalog(){
  return structuredClone(activeModularCatalog??createModularCatalog());
}

/** Replace the code-owned modular registry; imported project JSON can never call this path. */
export function setTrustedModularCatalog(definition){
  activeModularCatalog=createModularCatalog(definition);
  return getTrustedModularCatalog();
}

const PILOT_COMPONENTS=Object.freeze([
  {id:'pilot-headphones-v1',name:'石墨紫绒动态头戴耳机',src:'./assets/modular/20261006-pilot/pilot-headphones-kit-v4.png',version:'2.2.0',sha256:'752814b890c50f04d2e2884f5d4c976969bde1667bff18a1e2b6feced4ca7b02',width:1254,height:1254,generatedFile:'exec-e8f542f3-c482-4d95-b29f-6935f0111f70.png',category:'headphones',slot:'headphones',z:19,profileBases:['candidate-dots-20261005::bare-classic','candidate-humans-20261005::classic','candidate-humans-20261005::wave','human-bun-yellow::fixed','human-blond-glasses::fixed'],
    fitPolicy:{id:'fit/headphone-first-pilot',version:'1.2.0',kind:'headphone-arc-cups-v1',supports:{bodyIds:[],view:'front',poseIds:[],layoutIds:[],styleIds:[]},headBounds:{widthRatio:{min:.4,max:.9},heightRatio:{min:.35,max:.88},aspectRatio:{min:.85,max:1.3},mountSpanRatio:{min:.68,max:.9}},cup:{minScale:.22,maxScale:.7,contactTolerancePx:1,maxRotationDeg:40},band:{minSpanScale:.45,maxSpanScale:1.3,minRiseScale:.5,maxRiseScale:1.3,maxAnisotropy:2.5,thicknessPx:24},faceClearancePx:8},
    parts:[
      {id:'band',sourceRect:{x:80,y:80,width:1095,height:460},visibleRect:{x:1,y:12,width:1087,height:429},anchors:{leftTerminal:{x:.030137,y:.921739},rightTerminal:{x:.963470,y:.921739},crown:{x:.499543,y:.060870},leftShoulder:{x:220/1095,y:165/460},rightShoulder:{x:870/1095,y:163/460}},z:20},
      {id:'leftCup',sourceRect:{x:40,y:710,width:310,height:510},visibleRect:{x:11,y:14,width:289,height:470},anchors:{contactAnchor:{x:.903226,y:.509804},bandJointAnchor:{x:.509677,y:.060784}},contactNormal:{x:1,y:0},z:21},
      {id:'rightCup',sourceRect:{x:905,y:710,width:310,height:510},visibleRect:{x:12,y:13,width:289,height:491},anchors:{contactAnchor:{x:.096774,y:.509804},bandJointAnchor:{x:.477419,y:.060784}},contactNormal:{x:-1,y:0},z:22}
    ]},
  {id:'pilot-round-glasses-v1',name:'棕色圆框眼镜',src:'./assets/modular/20261006-pilot/pilot-round-glasses-v1.png',version:'1.0.0',sha256:'6f4c292afd88852e1c9ef2c476a40b0473c435bec48699d707233d63a40a4481',width:1716,height:917,generatedFile:'exec-b87ace8b-ff25-40bd-801d-2ba48b1157a6.png',category:'eyewear',slot:'facewear',z:20,profileBases:['candidate-humans-20261005::classic'],
    fitPolicy:{id:'fit/glasses-human-pupils',version:'1.0.0',kind:'anchor-pair-rigid-v1',anchorKind:'eyePupils',supports:{bodyIds:[],view:'front',poseIds:[],layoutIds:[],styleIds:[]},headBounds:{widthRatio:{min:.5,max:.6},heightRatio:{min:.45,max:.56},aspectRatio:{min:.9,max:1.3}},scale:{min:.2,max:.5},maxRotationDeg:25,maxAnchorErrorPx:1},
    parts:[{id:'anchorPair',sourceRect:{x:0,y:0,width:1716,height:917},anchors:{left:{x:.2836391025,y:.5052276630},right:{x:.7153852839,y:.5053554479}},z:20}]},
  {id:'pilot-knit-scarf-v1',name:'青绿针织围巾',src:'./assets/modular/20261006-pilot/pilot-knit-scarf-v1.png',version:'1.0.0',sha256:'316d23017372854f3b29a91a7435e5fecdf74baab34d2e14f77c17558bc036d5',width:1536,height:1024,generatedFile:'exec-d0fa300f-6ec3-4cb2-b116-9b6bad18675a.png',category:'neckwear',slot:'neckwear',z:30,profileBases:['candidate-animals-20261005::classic'],
    fitPolicy:{id:'fit/scarf-shiba-neck',version:'1.0.0',kind:'anchor-pair-rigid-v1',anchorKind:'neckContacts',supports:{bodyIds:[],view:'front',poseIds:[],layoutIds:[],styleIds:[]},headBounds:{widthRatio:{min:.5,max:.7},heightRatio:{min:.45,max:.65},aspectRatio:{min:.8,max:1.3}},scale:{min:.2,max:.7},maxRotationDeg:25,maxAnchorErrorPx:1},
    parts:[{id:'anchorPair',sourceRect:{x:0,y:0,width:1536,height:1024},anchors:{left:{x:.2,y:.15},right:{x:.8,y:.15}},z:30}]}
]);

const HUMAN_LEFT_FRONT_HAIR=Object.freeze([{x:.248,y:.319},{x:.264,y:.310},{x:.279,y:.300},{x:.292,y:.289},{x:.306,y:.278},{x:.320,y:.267},{x:.334,y:.261},{x:.345,y:.264},{x:.352,y:.323},{x:.350,y:.400},{x:.335,y:.446},{x:.310,y:.423},{x:.280,y:.388},{x:.250,y:.350}]);
const HUMAN_RIGHT_FRONT_HAIR=Object.freeze([{x:.681,y:.253},{x:.695,y:.260},{x:.710,y:.271},{x:.729,y:.285},{x:.747,y:.297},{x:.762,y:.305},{x:.744,y:.344},{x:.722,y:.381},{x:.704,y:.390},{x:.696,y:.345},{x:.687,y:.295}]);
// Geometry annotations bind the existing base PNG bytes. Ear seats describe the
// visible cushion envelope, not a source sprite rectangle or fixed placement.
const PILOT_GEOMETRY_MARKS=Object.freeze([
  {id:'geometry/dots-bare-front-v1',version:'1.1.0',baseId:'candidate-dots-20261005::bare-classic',bodyId:'dots-plush-orb',landmarks:{headBounds:{x:.088,y:.114,width:.824,height:.810},crown:{x:.5,y:.123},earMounts:{left:{x:.175,y:.53,normal:{x:-1,y:0},cupSeat:{height:0.16865419354838712,minHeadWidthRatio:.12,maxHeadWidthRatio:.14}},right:{x:.825,y:.53,normal:{x:1,y:0},cupSeat:{height:0.17618980645161295,minHeadWidthRatio:.12,maxHeadWidthRatio:.14}}}},bandSeat:{leftShoulder:{x:.2659131247050715,y:.2353765342975653},rightShoulder:{x:.734092226710328,y:.2337359985552129},crown:{x:.5,y:.123},maxContourErrorPx:4},faceKeepout:{x:.345,y:.38,width:.31,height:.22}},
  {id:'geometry/human-classic-front-v1',version:'1.2.0',baseId:'candidate-humans-20261005::classic',bodyId:'human-chibi',landmarks:{headBounds:{x:.226,y:.027,width:.551,height:.508},crown:{x:.480,y:.045},earMounts:{left:{x:.330,y:.442,normal:{x:-.99,y:.14},cupSeat:{height:.145,minHeadWidthRatio:.14,maxHeadWidthRatio:.18}},right:{x:.705,y:.400,normal:{x:.99,y:-.14},cupSeat:{height:.147,minHeadWidthRatio:.14,maxHeadWidthRatio:.18}}},anchorPairs:{eyePupils:{left:{x:.405,y:.399},right:{x:.597,y:.370}}}},bandSeat:{leftShoulder:{x:.342,y:.167},rightShoulder:{x:.628,y:.133},crown:{x:.480,y:.045},maxContourErrorPx:12},occlusionCutouts:{band:[HUMAN_LEFT_FRONT_HAIR,HUMAN_RIGHT_FRONT_HAIR],leftCup:[HUMAN_LEFT_FRONT_HAIR],rightCup:[HUMAN_RIGHT_FRONT_HAIR]},faceKeepout:{x:.355,y:.283,width:.325,height:.224}},
  {"id":"geometry/human-bun-yellow-front-v1","version":"1.0.0","baseId":"human-bun-yellow::fixed","bodyId":"human-chibi","landmarks":{"headBounds":{"x":0.285,"y":0.005,"width":0.455,"height":0.53},"crown":{"x":0.51,"y":0.174},"earMounts":{"left":{"x":0.338,"y":0.423,"normal":{"x":-0.999,"y":-0.045},"cupSeat":{"height":0.112,"minHeadWidthRatio":0.14,"maxHeadWidthRatio":0.18}},"right":{"x":0.676,"y":0.425,"normal":{"x":0.999,"y":0.045},"cupSeat":{"height":0.112,"minHeadWidthRatio":0.14,"maxHeadWidthRatio":0.18}}}},"bandSeat":{"leftShoulder":{"x":0.384,"y":0.24},"rightShoulder":{"x":0.627,"y":0.24},"crown":{"x":0.51,"y":0.174},"maxContourErrorPx":12},"occlusionCutouts":{"band":[[{"x":0.29,"y":0.35},{"x":0.304,"y":0.333},{"x":0.323,"y":0.317},{"x":0.34,"y":0.306},{"x":0.358,"y":0.293},{"x":0.369,"y":0.288},{"x":0.371,"y":0.34},{"x":0.348,"y":0.395},{"x":0.328,"y":0.432},{"x":0.305,"y":0.403}],[{"x":0.651,"y":0.28},{"x":0.666,"y":0.292},{"x":0.687,"y":0.319},{"x":0.713,"y":0.328},{"x":0.726,"y":0.353},{"x":0.715,"y":0.39},{"x":0.698,"y":0.414},{"x":0.677,"y":0.388}]],"leftCup":[[{"x":0.346,"y":0.38},{"x":0.348,"y":0.425},{"x":0.34,"y":0.47},{"x":0.333,"y":0.491},{"x":0.329,"y":0.48},{"x":0.334,"y":0.441},{"x":0.332,"y":0.408}],[{"x":0.2551834130781499,"y":0.5015948963317385},{"x":0.2543859649122807,"y":0.4944178628389155},{"x":0.2567783094098884,"y":0.4904306220095694},{"x":0.2607655502392344,"y":0.48963317384370014},{"x":0.2687400318979266,"y":0.4944178628389155},{"x":0.28309409888357256,"y":0.5047846889952153},{"x":0.26395534290271133,"y":0.47926634768740034},{"x":0.2623604465709729,"y":0.47208931419457734},{"x":0.26555023923444976,"y":0.4688995215311005},{"x":0.26953748006379585,"y":0.46730462519936206},{"x":0.2743221690590112,"y":0.4696969696969697},{"x":0.27910685805422647,"y":0.47607655502392343},{"x":0.2942583732057416,"y":0.49760765550239233},{"x":0.27751196172248804,"y":0.4649122807017544},{"x":0.2767145135566188,"y":0.46012759170653905},{"x":0.2799043062200957,"y":0.45454545454545453},{"x":0.28548644338118023,"y":0.4529505582137161},{"x":0.2902711323763955,"y":0.45454545454545453},{"x":0.29505582137161085,"y":0.46012759170653905},{"x":0.30861244019138756,"y":0.4864433811802233},{"x":0.30303030303030304,"y":0.45933014354066987},{"x":0.30303030303030304,"y":0.45374800637958534},{"x":0.3062200956937799,"y":0.45055821371610844},{"x":0.31100478468899523,"y":0.4481658692185008},{"x":0.31658692185007975,"y":0.45055821371610844},{"x":0.32057416267942584,"y":0.45614035087719296},{"x":0.32854864433811803,"y":0.48724082934609253},{"x":0.3333333333333333,"y":0.47767145135566186},{"x":0.33891547049441784,"y":0.47208931419457734},{"x":0.3444976076555024,"y":0.4704944178628389},{"x":0.35007974481658694,"y":0.47208931419457734},{"x":0.35406698564593303,"y":0.4768740031897927},{"x":0.35406698564593303,"y":0.4824561403508772},{"x":0.34688995215311,"y":0.49920255183413076},{"x":0.3437001594896332,"y":0.5127591706539075},{"x":0.3317384370015949,"y":0.5334928229665071},{"x":0.32216905901116427,"y":0.5454545454545454},{"x":0.3014354066985646,"y":0.5470494417862839},{"x":0.2838915470494418,"y":0.5390749601275917},{"x":0.2751196172248804,"y":0.5271132376395534},{"x":0.2647527910685805,"y":0.5159489633173844},{"x":0.25757575757575757,"y":0.5095693779904307}]],"rightCup":[[{"x":0.679,"y":0.395},{"x":0.688,"y":0.405},{"x":0.685,"y":0.446},{"x":0.676,"y":0.496},{"x":0.66,"y":0.515},{"x":0.651,"y":0.515},{"x":0.665,"y":0.492},{"x":0.674,"y":0.442},{"x":0.673,"y":0.411}]]},"faceKeepout":{"x":0.365,"y":0.337,"width":0.286,"height":0.191}},
  {"id":"geometry/human-blond-glasses-front-v1","version":"1.0.0","baseId":"human-blond-glasses::fixed","bodyId":"human-chibi","landmarks":{"headBounds":{"x":0.252,"y":0.025,"width":0.486,"height":0.521},"crown":{"x":0.505,"y":0.047},"earMounts":{"left":{"x":0.318,"y":0.437,"normal":{"x":-0.99,"y":0.14},"cupSeat":{"height":0.122,"minHeadWidthRatio":0.14,"maxHeadWidthRatio":0.18}},"right":{"x":0.705,"y":0.398,"normal":{"x":0.99,"y":-0.14},"cupSeat":{"height":0.122,"minHeadWidthRatio":0.14,"maxHeadWidthRatio":0.18}}}},"bandSeat":{"leftShoulder":{"x":0.357,"y":0.166},"rightShoulder":{"x":0.647,"y":0.145},"crown":{"x":0.505,"y":0.047},"maxContourErrorPx":12},"faceKeepout":{"x":0.338,"y":0.298,"width":0.326,"height":0.19}},
  {"id":"geometry/human-wave-front-v1","version":"1.0.0","baseId":"candidate-humans-20261005::wave","bodyId":"human-chibi","landmarks":{"headBounds":{"x":0.31,"y":0.164,"width":0.43,"height":0.398},"crown":{"x":0.514,"y":0.174},"earMounts":{"left":{"x":0.362,"y":0.466,"normal":{"x":-0.999,"y":-0.045},"cupSeat":{"height":0.11,"minHeadWidthRatio":0.14,"maxHeadWidthRatio":0.18}},"right":{"x":0.675,"y":0.485,"normal":{"x":0.999,"y":0.045},"cupSeat":{"height":0.11,"minHeadWidthRatio":0.14,"maxHeadWidthRatio":0.18}}}},"bandSeat":{"leftShoulder":{"x":0.399,"y":0.253},"rightShoulder":{"x":0.628,"y":0.265},"crown":{"x":0.514,"y":0.174},"maxContourErrorPx":12},"occlusionCutouts":{"band":[[{"x":0.31,"y":0.37},{"x":0.33,"y":0.352},{"x":0.348,"y":0.338},{"x":0.368,"y":0.325},{"x":0.389,"y":0.314},{"x":0.41,"y":0.308},{"x":0.413,"y":0.357},{"x":0.39,"y":0.398},{"x":0.358,"y":0.433},{"x":0.338,"y":0.439},{"x":0.321,"y":0.41}],[{"x":0.656,"y":0.315},{"x":0.673,"y":0.325},{"x":0.689,"y":0.339},{"x":0.705,"y":0.354},{"x":0.721,"y":0.369},{"x":0.715,"y":0.397},{"x":0.7,"y":0.432},{"x":0.682,"y":0.456},{"x":0.673,"y":0.427},{"x":0.663,"y":0.381}]],"leftCup":[[{"x":0.2838915470494418,"y":0.5199362041467305},{"x":0.2838915470494418,"y":0.5159489633173844},{"x":0.2862838915470494,"y":0.5135566188197768},{"x":0.29106858054226475,"y":0.5135566188197768},{"x":0.2982456140350877,"y":0.5159489633173844},{"x":0.30462519936204147,"y":0.5199362041467305},{"x":0.29106858054226475,"y":0.5079744816586922},{"x":0.2894736842105263,"y":0.5015948963317385},{"x":0.291866028708134,"y":0.4960127591706539},{"x":0.2958532695374801,"y":0.49362041467304624},{"x":0.3014354066985646,"y":0.4944178628389155},{"x":0.30701754385964913,"y":0.4984051036682616},{"x":0.31658692185007975,"y":0.5103668261562998},{"x":0.3054226475279107,"y":0.4920255183413078},{"x":0.3038277511961722,"y":0.48564593301435405},{"x":0.3078149920255183,"y":0.48165869218500795},{"x":0.3133971291866029,"y":0.4800637958532695},{"x":0.3181818181818182,"y":0.48165869218500795},{"x":0.3229665071770335,"y":0.48724082934609253},{"x":0.3317384370015949,"y":0.5063795853269537},{"x":0.3277511961722488,"y":0.48484848484848486},{"x":0.3277511961722488,"y":0.4784688995215311},{"x":0.3309409888357257,"y":0.47527910685805425},{"x":0.335725677830941,"y":0.474481658692185},{"x":0.3397129186602871,"y":0.4768740031897927},{"x":0.34290271132376393,"y":0.4824561403508772},{"x":0.3484848484848485,"y":0.5},{"x":0.35167464114832536,"y":0.507177033492823},{"x":0.35645933014354064,"y":0.4984051036682616},{"x":0.3620414673046252,"y":0.4944178628389155},{"x":0.3668261562998405,"y":0.49521531100478466},{"x":0.3700159489633174,"y":0.5},{"x":0.36921850079744817,"y":0.507177033492823},{"x":0.361244019138756,"y":0.5263157894736842},{"x":0.35964912280701755,"y":0.539872408293461},{"x":0.3444976076555024,"y":0.5645933014354066},{"x":0.3269537480063796,"y":0.5685805422647527},{"x":0.3149920255183413,"y":0.5614035087719298},{"x":0.29904306220095694,"y":0.543859649122807},{"x":0.291866028708134,"y":0.5366826156299841},{"x":0.28548644338118023,"y":0.529505582137161}]],"rightCup":[[{"x":0.682,"y":0.411},{"x":0.694,"y":0.413},{"x":0.694,"y":0.443},{"x":0.683,"y":0.466},{"x":0.673,"y":0.481},{"x":0.67,"y":0.46},{"x":0.676,"y":0.437}]]},"faceKeepout":{"x":0.393,"y":0.364,"width":0.242,"height":0.178}},
  {id:'geometry/shiba-classic-front-v1',version:'1.0.0',baseId:'candidate-animals-20261005::classic',bodyId:'animal-shiba',landmarks:{headBounds:{x:.162,y:.035,width:.600,height:.555},anchorPairs:{neckContacts:{left:{x:.322,y:.555},right:{x:.673,y:.555}}}},faceKeepout:{x:.285,y:.285,width:.340,height:.170}}
]);

function pilotGeometryProfiles(states){
  return PILOT_GEOMETRY_MARKS.map(mark=>{
    const state=states.find(item=>item.id===mark.baseId);
    if(!state)throw new Error(`手工标注 geometry profile 基底状态不存在：${mark.baseId}`);
    return {id:mark.id,version:mark.version,baseId:state.id,baseAssetRefs:cloneRefs(state.assetRefs),bodyId:mark.bodyId,view:state.view,poseId:state.poseId,layoutId:state.layoutId,styleId:state.styleId,canvas:{width:state.width,height:state.height},landmarks:structuredClone(mark.landmarks),faceKeepout:structuredClone(mark.faceKeepout),...(mark.bandSeat?{bandSeat:structuredClone(mark.bandSeat)}:{}),...(mark.occlusionCutouts?{occlusionCutouts:structuredClone(mark.occlusionCutouts)}:{})};
  });
}

function pilotDefinition(){
  const states=listTemplateAssetStates();
  const baseGeometryProfiles=pilotGeometryProfiles(states);
  const assets=[],recipes=[];
  for(const row of PILOT_COMPONENTS){
    const bases=row.profileBases.map(id=>states.find(state=>state.id===id));
    if(bases.some(base=>!base))throw new Error(`试点模块基底状态不存在：${row.profileBases.join(', ')}`);
    const profiles=row.profileBases.map(id=>baseGeometryProfiles.find(profile=>profile.baseId===id));
    if(profiles.some(profile=>!profile))throw new Error(`试点模块缺少维护者 geometry profile：${row.profileBases.join(', ')}`);
    const covers=[...row.profileBases];
    const source={origin:'built-in-imagegen-20261006',generatedFile:row.generatedFile,derivedFromTemplatePixels:false};
    const sourceParts={asset:{id:row.id,version:row.version,sha256:row.sha256,width:row.width,height:row.height},parts:row.parts.map(part=>({...structuredClone(part),occlusion:{mode:'above-base',covers:[...covers]}}))};
    const fitPolicy=structuredClone(row.fitPolicy);
    fitPolicy.supports={
      bodyIds:[...new Set(profiles.map(profile=>profile.bodyId))],view:'front',
      poseIds:[...new Set(profiles.map(profile=>profile.poseId))],
      layoutIds:[...new Set(profiles.map(profile=>profile.layoutId))],
      styleIds:[...new Set(profiles.map(profile=>profile.styleId))]
    };
    const layoutIds=[...new Set(bases.map(base=>base.layoutId))],styles=[...new Set(bases.map(base=>base.styleId))],poses=[...new Set(bases.map(base=>base.poseId))];
    const asset={id:row.id,version:row.version,sha256:row.sha256,src:row.src,width:row.width,height:row.height,category:row.category,
      slots:[row.slot],baseIds:[...row.profileBases],layoutIds,styles,poses,view:'front',anchors:{},z:row.z,occlusion:{mode:'above-base',covers:['base']},dependencies:[],excludes:[],grip:{required:false,gripId:null},
      tintPaths:[],riskGroups:[],source,usageScope:{type:'project',previewOnly:true,publicListing:false},engineeringStatus:'available',releaseStatus:'internal',artApproval:{status:'pending',record:null,adaptations:[]},fitPolicy,sourceParts};
    assets.push(asset);
    for(const [index,base] of bases.entries()){
      const profile=profiles[index],fitProfileRef={id:profile.id,version:profile.version,fingerprint:getBaseGeometryProfileFingerprint(profile)};
      const recipeId=`pilot-${row.id.replace(/^pilot-/,'')}-on-${base.id.replaceAll('::','-')}`;
      recipes.push({id:recipeId,version:row.id==='pilot-headphones-v1'?'2.2.0':row.id==='pilot-round-glasses-v1'?'1.1.0':'1.0.0',baseId:base.id,assetIds:[row.id],poseId:base.poseId,view:'front',layoutId:base.layoutId,styleId:base.styleId,placements:[],layerOrder:[row.id],highRiskGroups:[],gripId:null,defaultEligible:false,fitProfileRef});
    }
  }
  const humanBase=states.find(state=>state.id==='candidate-humans-20261005::classic');
  const humanProfile=baseGeometryProfiles.find(profile=>profile.baseId===humanBase?.id);
  const headphone=assets.find(asset=>asset.id==='pilot-headphones-v1'),glasses=assets.find(asset=>asset.id==='pilot-round-glasses-v1');
  if(humanBase&&humanProfile&&headphone&&glasses){
    recipes.push({id:'pilot-headphones-and-round-glasses-on-candidate-humans-20261005-classic',version:'1.2.0',baseId:humanBase.id,assetIds:[headphone.id,glasses.id],poseId:humanBase.poseId,view:'front',layoutId:humanBase.layoutId,styleId:humanBase.styleId,placements:[],layerOrder:[headphone.id,glasses.id],highRiskGroups:[],gripId:null,defaultEligible:false,fitProfileRef:{id:humanProfile.id,version:humanProfile.version,fingerprint:getBaseGeometryProfileFingerprint(humanProfile)}});
  }
  return {assets,recipes,grips:[],baseGeometryProfiles};
}

/** Three trusted pilot components and eight explicit recipes; all adaptations remain preview-only pending art approval. */
export function createPilotModularCatalog(){return createModularCatalog(pilotDefinition());}

activeModularCatalog=createPilotModularCatalog();
