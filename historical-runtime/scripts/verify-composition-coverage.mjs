#!/usr/bin/env node
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {
  buildModularCoverageCases,
  buildTemplateCoverageCases,
  captureResolvedRenderMetadata,
  calculateCompositionImpact,
  COORDINATION_CHECKLIST,
  coordinationReviewMatches,
  createDefaultCoordinationReview,
  createCoverageFreezeRecord,
  coverageCaptureFilename,
  coverageSourceFilename,
  summarizeCoordinationReviews,
  summarizeCoverage,
  TEMPLATE_BACKGROUND_MODES,
  TEMPLATE_STATE_EXPECTATION,
  validateCaptureTarName,
  validateCoordinationReview,
  validateResolvedRenderMetadata,
  validateTransparentOutputAlpha,
  verifyDeclaredAssetEvidence
} from '../dist/studio-composition-coverage.js';
import {compositionFingerprint, getTemplateAssetStates, resolveTemplateComposition} from '../dist/studio-composition-resolver.js';
import {getModularRecipeApproval, getModularRecipeFingerprint, getTrustedModularCatalog} from '../dist/studio-composition-catalog.js';

const states = getTemplateAssetStates();
const template = buildTemplateCoverageCases({states, resolver: resolveTemplateComposition});
assert.equal(states.length, 22);
assert.equal(new Set(states.map(state => state.lookId)).size, 15);
assert.equal(template.inventory.baselineStateCount, 12);
assert.equal(template.inventory.fixedTemplateCount, 10);
assert.equal(template.cases.length, 22);
assert.equal(new Set(template.cases.map(item=>`${item.artworkId}::${item.stateId}`)).size,22,'template state identity must include look/artwork and recipe state');
const longCaseId=`module:${'very-long-stable-case-id/'.repeat(30)}`;
const shortCaptureName=coverageCaptureFilename('module',8,longCaseId);
assert.equal(shortCaptureName,'canvas/module-009.png');
assert.equal(validateCaptureTarName(shortCaptureName),shortCaptureName);
const longAssetId=`asset:${'future-component-family/'.repeat(30)}`;
const shortSourceName=coverageSourceFilename(17,longAssetId);
assert.equal(shortSourceName,'source/asset-018.png');
assert.equal(validateCaptureTarName(shortSourceName),shortSourceName);
assert.throws(()=>validateCaptureTarName(`canvas/${'x'.repeat(100)}.png`),/100 字节/,'USTAR names must fail closed instead of truncating long case IDs');
assert.throws(()=>validateCaptureTarName(`source/${'素材'.repeat(30)}.png`),/100 字节/,'USTAR filename limit must count UTF-8 bytes');
assert.deepEqual(TEMPLATE_BACKGROUND_MODES, ['transparent']);
assert.equal(TEMPLATE_STATE_EXPECTATION.backgroundCount,1);
assert.equal(TEMPLATE_STATE_EXPECTATION.outputCount,22);
assert.equal(template.integrity.length, 0);
assert(template.cases.every(item => item.resolvable && item.composition?.kind === 'template' && item.renderPlan));
assert(template.cases.every(item => item.background==='transparent' && item.backgroundCount===1 && item.config.background==='transparent'));
assert(template.cases.every(item => item.id.endsWith(':transparent')),'template case IDs identify the unique transparent output, not a background variant');
const refusedBackgroundOverride=buildTemplateCoverageCases({states:[states[0]],backgrounds:['solid'],resolver:resolveTemplateComposition,expected:null});
assert.equal(refusedBackgroundOverride.cases.length,1,'a legacy backgrounds argument must not expand the output denominator');
assert.equal(refusedBackgroundOverride.cases[0].background,'transparent');
assert.equal(refusedBackgroundOverride.cases[0].config.background,'transparent');
assert(refusedBackgroundOverride.integrity.some(item=>item.code==='unsupported-background-override'));
const transparentAlphaPass=validateTransparentOutputAlpha({width:4,height:4,transparentPixels:8,opaquePixels:6,partialAlphaPixels:2,alphaBounds:{x:1,y:1,width:2,height:2}});
assert.equal(transparentAlphaPass.valid,true);
assert.equal(transparentAlphaPass.visiblePixels,8);
const opaqueAlphaFail=validateTransparentOutputAlpha({width:4,height:4,transparentPixels:0,opaquePixels:16,partialAlphaPixels:0,alphaBounds:{x:0,y:0,width:4,height:4}});
assert.equal(opaqueAlphaFail.valid,false,'an opaque background must fail the output alpha contract');
assert(opaqueAlphaFail.errors.some(message=>message.includes('没有 alpha 为 0')));
const blankAlphaFail=validateTransparentOutputAlpha({width:4,height:4,transparentPixels:16,opaquePixels:0,partialAlphaPixels:0,alphaBounds:null});
assert.equal(blankAlphaFail.valid,false,'an entirely transparent output must fail rather than pass as an empty character');
const rawPngs = new Map();
for (const state of states) for (const asset of state.assets) {
  if (!rawPngs.has(asset.id)) {
    const bytes = readFileSync(resolve('dist', asset.src.slice(2)));
    const actualHash = createHash('sha256').update(bytes).digest('hex');
    const width = bytes.readUInt32BE(16), height = bytes.readUInt32BE(20);
    rawPngs.set(asset.id, {actualHash,width,height,bytes:bytes.length});
  }
  const observed = rawPngs.get(asset.id);
  const verification = verifyDeclaredAssetEvidence(asset,{exists:true,version:asset.version,sha256:observed.actualHash,width:observed.width,height:observed.height});
  assert.equal(verification.status,'pass',`${asset.id}: ${verification.errors.join('; ')}`);
}
assert.equal(rawPngs.size,21);
const sameDotsPngStates = states.filter(item => item.artworkId === 'candidate-dots-20261005' && item.recipeId.startsWith('headphones-'));
assert.equal(sameDotsPngStates.length, 2);
assert.deepEqual(sameDotsPngStates[0].assetRefs, sameDotsPngStates[1].assetRefs);
assert.equal(template.cases.filter(item => item.artworkId === 'candidate-dots-20261005' && item.recipeId.startsWith('headphones-')).length, 2);
const allPass = summarizeCoverage(template.cases, template.cases.map(item => ({id:item.id,status:'pass'})), {expectedDeclaredCount:22});
assert.equal(allPass.result, 'pass');
assert.equal(allPass.denominator, 22);

const fitProfileRef={id:'geometry/dots-bare-front-v1',version:'2.0.0',fingerprint:'profile-fingerprint'};
const fitProfile={...fitProfileRef,baseId:'dots-front',landmarks:{left:{x:0.2,y:0.5},right:{x:0.8,y:0.5}}};
const dynamicAsset={id:'asset/headphones/sprite-kit',version:'3.1.0',sha256:'d'.repeat(64),fitPolicy:{id:'headphone-arc-cups-v1',version:'1.0.0'},sourceParts:{asset:{id:'asset/headphones/sprite-kit',version:'3.1.0',sha256:'d'.repeat(64),width:900,height:300},parts:[{id:'band',sourceRect:{x:0,y:0,width:900,height:100},anchors:{left:{x:0.1,y:0.8},right:{x:0.9,y:0.8}},z:1,occlusion:{mode:'behind-base'}}]}};
const resolvedParts=[{id:'band',assetId:dynamicAsset.id,sourceRect:{x:0,y:0,width:900,height:100},transform:{a:1,b:0,c:0,d:1,e:20,f:30},rotation:0,z:1,occlusion:{mode:'behind-base'}}];
const dynamicResolverFitRefs=[{assetId:dynamicAsset.id,fitVersion:'fit-v1',fitFingerprint:'resolved-fit-fingerprint',fitProfileRef}];
const dynamicAggregateFitFingerprint=compositionFingerprint(dynamicResolverFitRefs);
const dynamicMetadata=captureResolvedRenderMetadata({renderPlan:{kind:'modular',width:1254,height:1254,recipe:{id:'headphones-dots',version:'2.0.0',fitProfileRef},modules:[{id:dynamicAsset.id,version:dynamicAsset.version,sha256:dynamicAsset.sha256,z:2,fitVersion:'fit-v1',fitFingerprint:'resolved-fit-fingerprint',fitProfileRef,parts:resolvedParts,occlusion:{mode:'above-base'}}]},composition:{inputs:{fitVersion:'resolver-v1',fitFingerprint:dynamicAggregateFitFingerprint,fitRefs:dynamicResolverFitRefs},resolvedFingerprint:'resolved-composition-fingerprint'}},{catalog:{assets:[dynamicAsset],baseGeometryProfiles:[fitProfile]}});
assert.equal(dynamicMetadata.resolvedFitVersion,'resolver-v1','the aggregate solver version stays distinct from a component fit version');
assert.equal(dynamicMetadata.resolvedFitFingerprint,dynamicAggregateFitFingerprint,'the project aggregate fingerprint covers its complete fit reference set');
assert.deepEqual(dynamicMetadata.resolverFitRefs,dynamicResolverFitRefs);
assert.deepEqual(dynamicMetadata.baseGeometryProfile,fitProfile);
assert.deepEqual(dynamicMetadata.fitInputs,[{assetId:dynamicAsset.id,version:dynamicAsset.version,sha256:dynamicAsset.sha256,fitPolicy:dynamicAsset.fitPolicy,sourceParts:dynamicAsset.sourceParts}]);
assert.deepEqual(dynamicMetadata.layers[0].parts,resolvedParts,'capture must preserve the actual resolved part transforms and occlusion');
assert.equal(dynamicMetadata.layers[0].fitProfileRef.id,fitProfile.id);
assert.equal(dynamicMetadata.resolvedFingerprint,'resolved-composition-fingerprint');
const dynamicSubject={fitProfileRef,baseGeometryProfile:fitProfile,componentRefs:[{id:dynamicAsset.id,version:dynamicAsset.version,sha256:dynamicAsset.sha256,fitPolicy:dynamicAsset.fitPolicy,sourceParts:dynamicAsset.sourceParts}]};
assert.deepEqual(validateResolvedRenderMetadata(dynamicMetadata,dynamicSubject),{valid:true,errors:[]});
assert.equal(validateResolvedRenderMetadata({...dynamicMetadata,resolvedFitFingerprint:null},dynamicSubject).valid,false,'a dynamic output without its actual fit fingerprint must not freeze as complete');
assert.equal(validateResolvedRenderMetadata({...dynamicMetadata,layers:[{...dynamicMetadata.layers[0],parts:[]}]},dynamicSubject).valid,false,'a dynamic output without resolved subparts must not freeze as complete');
assert.equal(validateResolvedRenderMetadata({...dynamicMetadata,baseGeometryProfile:{...fitProfile,landmarks:{changed:true}}},dynamicSubject).valid,false,'a dynamic output must preserve the exact geometry profile used by its review subject');
const secondDynamicAsset={id:'asset/glasses/sprite-kit',version:'1.4.0',sha256:'c'.repeat(64),fitPolicy:{id:'glasses-anchor-pair-v1',version:'2.0.0'},sourceParts:{asset:{id:'asset/glasses/sprite-kit',version:'1.4.0',sha256:'c'.repeat(64),width:800,height:300},parts:[{id:'frame',sourceRect:{x:0,y:0,width:800,height:300},anchors:{left:{x:.2,y:.5},right:{x:.8,y:.5}},z:3,occlusion:{mode:'above-base'}}]}};
const secondResolvedPart={id:'frame',assetId:secondDynamicAsset.id,sourceRect:{x:0,y:0,width:800,height:300},transform:{a:.8,b:0,c:0,d:.8,e:10,f:20},placement:{x:.1,y:.2,width:.8,height:.3,rotation:0},z:3,occlusion:{mode:'above-base'}};
const multiResolverFitRefs=[
  {assetId:secondDynamicAsset.id,fitVersion:'fit-v2',fitFingerprint:'glasses-fit-fingerprint',fitProfileRef},
  {assetId:dynamicAsset.id,fitVersion:'fit-v1',fitFingerprint:'headphone-fit-fingerprint',fitProfileRef}
];
const multiAggregateFitFingerprint=compositionFingerprint(multiResolverFitRefs);
const multiDynamicResolution={renderPlan:{kind:'modular',width:1254,height:1254,recipe:{id:'headphones-and-glasses',version:'1.0.0',fitProfileRefs:[fitProfileRef]},modules:[
  {id:dynamicAsset.id,version:dynamicAsset.version,sha256:dynamicAsset.sha256,z:2,fitVersion:'fit-v1',fitFingerprint:'headphone-fit-fingerprint',fitProfileRef,parts:resolvedParts,occlusion:{mode:'above-base'}},
  {id:secondDynamicAsset.id,version:secondDynamicAsset.version,sha256:secondDynamicAsset.sha256,z:3,fitVersion:'fit-v2',fitFingerprint:'glasses-fit-fingerprint',fitProfileRef,parts:[secondResolvedPart],occlusion:{mode:'above-base'}}
]},composition:{inputs:{fitVersion:'resolver-v1',fitFingerprint:multiAggregateFitFingerprint,fitRefs:multiResolverFitRefs},resolvedFingerprint:'multi-resolved-fingerprint'}};
const multiMetadata=captureResolvedRenderMetadata(multiDynamicResolution,{catalog:{assets:[dynamicAsset,secondDynamicAsset],baseGeometryProfiles:[fitProfile]}});
const multiSubject={fitProfileRefs:[fitProfileRef],baseGeometryProfiles:[fitProfile],componentRefs:[dynamicAsset,secondDynamicAsset].map(asset=>({id:asset.id,version:asset.version,sha256:asset.sha256,fitPolicy:asset.fitPolicy,sourceParts:asset.sourceParts,fitProfileRefs:[fitProfileRef]}))};
assert.equal(multiMetadata.resolvedFitFingerprint,multiAggregateFitFingerprint,'a multi-component output must retain the resolver fingerprint for the complete set');
assert.deepEqual(multiMetadata.resolverFitRefs,multiResolverFitRefs,'all per-component resolver refs remain in stable ID order');
assert.deepEqual(multiMetadata.resolvedFitFingerprints.map(item=>item.fitFingerprint),['headphone-fit-fingerprint','glasses-fit-fingerprint']);
assert.equal(multiMetadata.fitResults.length,2);
assert.deepEqual(validateResolvedRenderMetadata(multiMetadata,multiSubject),{valid:true,errors:[]});
assert.equal(validateResolvedRenderMetadata({...multiMetadata,fitResults:multiMetadata.fitResults.filter(item=>item.assetId!==secondDynamicAsset.id)},multiSubject).valid,false,'every dynamic component in a multi-asset recipe must have its own exact fit record');
const aggregateMultiMetadata=captureResolvedRenderMetadata({...multiDynamicResolution,composition:{inputs:{fitVersion:'resolver-v1',fitFingerprint:multiAggregateFitFingerprint,fitRefs:multiResolverFitRefs},resolvedFingerprint:'multi-resolved-fingerprint'}},{catalog:{assets:[dynamicAsset,secondDynamicAsset],baseGeometryProfiles:[fitProfile]}});
assert.equal(aggregateMultiMetadata.resolvedFitFingerprint,multiAggregateFitFingerprint,'the resolver aggregate fit fingerprint stays separate from per-module fingerprints');
assert.deepEqual(aggregateMultiMetadata.resolvedFitFingerprints,multiMetadata.resolvedFitFingerprints);
const missingAggregateMetadata=captureResolvedRenderMetadata({...multiDynamicResolution,composition:{inputs:{fitRefs:multiResolverFitRefs},resolvedFingerprint:'multi-resolved-fingerprint'}},{catalog:{assets:[dynamicAsset,secondDynamicAsset],baseGeometryProfiles:[fitProfile]}});
assert.equal(missingAggregateMetadata.resolvedFitFingerprint,null,'per-module fingerprints do not stand in for a missing resolver aggregate');
assert.equal(validateResolvedRenderMetadata(missingAggregateMetadata,multiSubject).valid,false,'a dynamic capture without resolver aggregate metadata cannot be frozen as complete');
assert.equal(validateResolvedRenderMetadata({...multiMetadata,resolverFitRefs:[...multiMetadata.resolverFitRefs].reverse()},multiSubject).valid,false,'the resolver fit reference manifest must retain stable asset-ID order');
assert.equal(validateResolvedRenderMetadata({...multiMetadata,resolverFitRefs:multiMetadata.resolverFitRefs.map(item=>item.assetId===dynamicAsset.id?{...item,fitFingerprint:'wrong'}:item)},multiSubject).valid,false,'a resolver fit reference cannot diverge from its rendered component result');
assert.equal(validateResolvedRenderMetadata({...multiMetadata,aggregateFitFingerprint:'0'.repeat(16),resolvedFitFingerprint:'0'.repeat(16)},multiSubject).valid,false,'the aggregate fingerprint must cover the complete ordered fit reference list');

const failedAssetCases = [{id:'required-missing-png',declaredRequired:true,resolvable:false}];
const missingFile = summarizeCoverage(failedAssetCases, [{id:'required-missing-png',status:'fail',reason:'PNG missing'}], {expectedDeclaredCount:1});
assert.equal(missingFile.denominator, 1);
assert.equal(missingFile.counts.fail, 1);
assert.equal(missingFile.result, 'fail');
const badHash = verifyDeclaredAssetEvidence({id:'asset/test.png',version:'1.0.0',sha256:'a'.repeat(64),src:'./assets/test.png',width:20,height:20},{exists:true,version:'1.0.0',sha256:'b'.repeat(64),width:20,height:20});
assert.equal(badHash.status,'fail');
const badVersion = verifyDeclaredAssetEvidence({id:'asset/test.png',version:'1.0.0',sha256:'a'.repeat(64),src:'./assets/test.png',width:20,height:20},{exists:true,version:'2.0.0',sha256:'a'.repeat(64),width:20,height:20});
assert.equal(badVersion.status,'fail');
const badDimensions = verifyDeclaredAssetEvidence({id:'asset/test.png',version:'1.0.0',sha256:'a'.repeat(64),src:'./assets/test.png',width:20,height:20},{exists:true,version:'1.0.0',sha256:'a'.repeat(64),width:21,height:20});
assert.equal(badDimensions.status,'fail');
const absentFile = verifyDeclaredAssetEvidence({id:'asset/test.png',version:'1.0.0',sha256:'a'.repeat(64),src:'./assets/test.png',width:20,height:20},{exists:false});
assert.equal(absentFile.status,'fail');
const renderFailure = summarizeCoverage([{id:'render-failed',declaredRequired:true,resolvable:true}],[{id:'render-failed',status:'fail',reason:'Canvas context unavailable'}],{expectedDeclaredCount:1});
assert.equal(renderFailure.denominator,1);
assert.equal(renderFailure.counts.fail,1);
assert.equal(renderFailure.result,'fail');
const allBlocked = summarizeCoverage([{id:'asset-a',declaredRequired:true},{id:'asset-b',declaredRequired:true}], [{id:'asset-a',status:'blocked'},{id:'asset-b',status:'blocked'}], {expectedDeclaredCount:2});
assert.equal(allBlocked.denominator, 2);
assert.equal(allBlocked.result, 'blocked');
const badExclude = summarizeCoverage([{id:'asset-a',declaredRequired:true,hardConstraintExcluded:true}], [], {expectedDeclaredCount:1});
assert.equal(badExclude.denominator, 1);
assert(badExclude.issues.some(item => item.code === 'unexplained-hard-exclusion'));
const allExcluded = summarizeCoverage([{id:'asset-a',declaredRequired:true,hardConstraintExcluded:true,hardConstraint:'explicit-pair-exclude',exclusionReason:'contract says exclude'}]);
assert.equal(allExcluded.denominator, 0);
assert(allExcluded.issues.some(item => item.code === 'all-required-cases-excluded'));
assert.equal(allExcluded.result, 'fail');

const bases = [{id:'dots-front',artworkId:'dots',headProfile:'round'},{id:'human-front',artworkId:'human',headProfile:'fringe'}];
const assets = [
  {id:'asset/hair/bob',version:'1.0.0',sha256:'a'.repeat(64),category:'hair',slots:['hair'],baseIds:['dots-front','human-front'],poses:['idle','wave'],riskGroups:['headgear'],dependencies:[],excludes:[],engineeringStatus:'available'},
  {id:'asset/hat/beret',version:'1.0.0',sha256:'b'.repeat(64),category:'hat',slots:['hat'],baseIds:['dots-front','human-front'],poses:['idle','wave'],riskGroups:['headgear'],dependencies:[],excludes:[],engineeringStatus:'available'},
  {id:'asset/headphones/band',version:'1.0.0',sha256:'c'.repeat(64),category:'headphones',slots:['headphones'],baseIds:['dots-front'],poses:['idle'],riskGroups:['headgear'],dependencies:[],excludes:['asset/hat/beret'],engineeringStatus:'missing'},
  {id:'asset/watch/blue',version:'1.0.0',sha256:'d'.repeat(64),category:'watch',slots:['wrist'],baseIds:['human-front'],poses:['wave'],riskGroups:['sleeve-watch'],dependencies:[],excludes:[],engineeringStatus:'available'}
];
const recipes = [
  {id:'headgear-recipe',baseId:'dots-front',poseId:'idle',assetIds:['asset/hair/bob','asset/hat/beret','asset/headphones/band'],highRiskGroups:[{id:'headgear',factorIds:['asset.hair','asset.hat','asset.headphones'],strength:3}],parameterChecks:[{id:'scale',representative:1,boundaries:[0.5,1.5]}]},
  {id:'curated',baseId:'human-front',poseId:'wave',assetIds:['asset/watch/blue'],approvalStatus:'approved',propertyChecks:['stable-refs']}
];
const moduleCoverage = buildModularCoverageCases({assets,baseStates:bases,recipes,seed:'fixed-fixture'});
assert.equal(moduleCoverage.inventory.singleAssetCases, 10);
assert.equal(moduleCoverage.inventory.componentAssetIdCount, new Set(assets.map(item=>item.id)).size);
assert.equal(moduleCoverage.inventory.singleComponentAdaptationCount, new Set(moduleCoverage.cases.filter(item=>item.coverageKind==='single-asset').map(item=>`${item.baseId}|${item.poseId}|${item.assetIds[0]}`)).size);
assert.equal(moduleCoverage.inventory.registeredRecipeCount, new Set(recipes.map(item=>item.id)).size);
assert.equal(moduleCoverage.inventory.multiComponentRecipeCount, new Set(recipes.filter(item=>item.assetIds.length>1).map(item=>item.id)).size);
assert(moduleCoverage.cases.some(item => item.assetIds.includes('asset/headphones/band') && item.coverageKind === 'single-asset'), 'declared missing asset remains a required case');
assert(moduleCoverage.exclusions.some(item => item.hardConstraint === 'asset.excludes'));
assert([...moduleCoverage.cases, ...moduleCoverage.exclusions].some(item => item.coverageKind === 'high-risk' && item.strength === 3));
assert(moduleCoverage.cases.some(item => item.coverageKind === 'approved-recipe'));
const catalog = getTrustedModularCatalog();
const currentRecipeApprovals = catalog.recipes.map(recipe => ({recipe,approval:getModularRecipeApproval(recipe,catalog)}));
const exactApprovalCoverage = buildModularCoverageCases({assets:catalog.assets,baseStates:catalog.baseStates,recipes:catalog.recipes.map(recipe=>({...recipe,approvalStatus:getModularRecipeApproval(recipe,catalog).status}))});
assert.equal(exactApprovalCoverage.inventory.componentAssetIdCount,new Set(catalog.assets.map(item=>item.id)).size);
assert.equal(exactApprovalCoverage.inventory.singleComponentAdaptationCount,7,'current PNG-state support covers seven actual adaptations, not the cross product of aggregate asset poses');
assert.equal(exactApprovalCoverage.cases.length,8,'current eight explicit recipes yield eight transparent output cases');
assert(exactApprovalCoverage.cases.every(item=>catalog.baseStates.find(base=>base.id===item.baseId)?.poseId===item.poseId),'a different PNG state cannot inherit another state pose from the same asset-wide list');
assert.equal(exactApprovalCoverage.inventory.registeredRecipeCount,new Set(catalog.recipes.map(item=>item.id)).size);
assert.equal(exactApprovalCoverage.inventory.multiComponentRecipeCount,new Set(catalog.recipes.filter(item=>item.assetIds.length>1).map(item=>item.id)).size);
assert.equal(exactApprovalCoverage.cases.filter(item=>item.coverageKind==='approved-recipe').length,currentRecipeApprovals.filter(item=>item.approval.status==='approved').length);
assert(currentRecipeApprovals.every(({recipe,approval})=>approval.status!=='approved'||approval.approvedAssetIds.length===recipe.assetIds.length));
const exactApprovalBase={id:'dots-front',assetRefs:[{id:'artwork/dots/base',version:'1.0.0',sha256:'f'.repeat(64)}]};
const exactApprovalRecipe={id:'exact-recipe',version:'2.0.0',baseId:exactApprovalBase.id,assetIds:['asset/approved/exact'],poseId:'idle',view:'front',layoutId:'dots-layout',styleId:'dots-style',placements:[],layerOrder:['asset/approved/exact'],highRiskGroups:[],gripId:null};
const exactChecklist=Object.fromEntries(COORDINATION_CHECKLIST.map(item=>[item.id,'pass']));
const exactApprovalAsset={id:exactApprovalRecipe.assetIds[0],version:'1.2.3',sha256:'e'.repeat(64),artApproval:{status:'approved',adaptations:[{approvalId:'approval/exact',baseId:exactApprovalRecipe.baseId,baseAssetRefs:structuredClone(exactApprovalBase.assetRefs),poseId:exactApprovalRecipe.poseId,view:exactApprovalRecipe.view,assetId:'asset/approved/exact',assetVersion:'1.2.3',assetSha256:'e'.repeat(64),recipeId:exactApprovalRecipe.id,recipeVersion:exactApprovalRecipe.version,recipeFingerprint:getModularRecipeFingerprint(exactApprovalRecipe),coordinationChecklist:structuredClone(exactChecklist),evidence:{sourceManifest:'design/acceptance/test/source-manifest.json',sourceId:`sha256:${'a'.repeat(64)}`,pages:[{path:'design/acceptance/test/approval.png',sha256:'b'.repeat(64),viewport:{width:100,height:100}}]}}]}};
const exactApprovalCatalog={assets:[exactApprovalAsset],baseStates:[exactApprovalBase]};
assert.equal(getModularRecipeApproval(exactApprovalRecipe,exactApprovalCatalog).status,'approved');
const reviewSubject={catalogVersion:1,baseId:exactApprovalBase.id,baseAssetRefs:structuredClone(exactApprovalBase.assetRefs),componentRefs:[{id:exactApprovalAsset.id,version:exactApprovalAsset.version,sha256:exactApprovalAsset.sha256}],poseId:exactApprovalRecipe.poseId,view:exactApprovalRecipe.view,recipeId:exactApprovalRecipe.id,recipeVersion:exactApprovalRecipe.version,recipeFingerprint:getModularRecipeFingerprint(exactApprovalRecipe)};
const defaultReview=createDefaultCoordinationReview({adaptationId:'a'.repeat(64),subject:reviewSubject});
assert(COORDINATION_CHECKLIST.every(item=>defaultReview.checklist[item.id]==='unreviewed'));
assert.equal(defaultReview.disposition,'pending');
assert.equal(validateCoordinationReview(defaultReview).valid,true);
assert.equal(coordinationReviewMatches(defaultReview,{adaptationId:defaultReview.adaptationId,subject:reviewSubject}),true);
const oldVersionReview={...defaultReview,subject:{...reviewSubject,recipeVersion:'1.9.0'}};
assert.equal(coordinationReviewMatches(oldVersionReview,{adaptationId:'c'.repeat(64),subject:reviewSubject}),false,'a sidecar for an old recipe version must not attach to the current adaptation');
const readyReview={...defaultReview,checklist:structuredClone(exactChecklist),disposition:'ready-for-explicit-confirmation'};
assert.equal(validateCoordinationReview(readyReview).valid,true);
const incompleteReady={...readyReview,checklist:{...exactChecklist,contact:'issue'}};
assert.equal(validateCoordinationReview(incompleteReady).valid,false);
const rejectedReview={...defaultReview,disposition:'rejected',dispositionReason:'耳机与 Dots 基底协调性被人工否定'};
assert.equal(validateCoordinationReview(rejectedReview).valid,true);
const invalidRejected={...defaultReview,disposition:'rejected',dispositionReason:''};
assert.equal(validateCoordinationReview(invalidRejected).valid,false);
const coordinationSummary=summarizeCoordinationReviews([{...defaultReview,engineeringStatus:'available',artApprovalStatus:'pending'},{...rejectedReview,adaptationId:'b'.repeat(64),engineeringStatus:'available',artApprovalStatus:'pending'}]);
assert.deepEqual(coordinationSummary.disposition,{pending:1,rejected:1,readyForExplicitConfirmation:0});
assert.deepEqual(coordinationSummary.engineering,{available:2,blocked:0,unknown:0});
assert.deepEqual(coordinationSummary.artApproval,{pending:2,rejected:0,approved:0,unknown:0});
assert.equal(coordinationSummary.checklist.contact.unreviewed,2);
assert.equal(getModularRecipeApproval({...exactApprovalRecipe,version:'2.0.1'},exactApprovalCatalog).status,'pending','approval must not transfer to another recipe version or fingerprint');
const nonPassingExactApprovalAsset={...exactApprovalAsset,artApproval:{...exactApprovalAsset.artApproval,adaptations:[{...exactApprovalAsset.artApproval.adaptations[0],coordinationChecklist:{...exactChecklist,contact:'issue'}}]}};
assert.equal(getModularRecipeApproval(exactApprovalRecipe,{assets:[nonPassingExactApprovalAsset],baseStates:[exactApprovalBase]}).status,'pending','a non-pass coordination item must keep exact art approval pending');
assert.equal(getModularRecipeApproval(exactApprovalRecipe,{...exactApprovalCatalog,baseStates:[{...exactApprovalBase,assetRefs:[{id:'artwork/dots/base',version:'2.0.0',sha256:'c'.repeat(64)}]}]}).status,'pending','approval must not transfer to different base asset bytes');
const genericApprovedAsset={...exactApprovalAsset,artApproval:{status:'approved',adaptations:[]}};
const genericApprovedCatalog={assets:[genericApprovedAsset],baseStates:[exactApprovalBase]};
assert.equal(getModularRecipeApproval(exactApprovalRecipe,genericApprovedCatalog).status,'pending','generic approved status without an exact adaptation must remain pending');
const exactApprovalOnlyCoverage=buildModularCoverageCases({assets:[genericApprovedAsset],baseStates:[bases[0]],recipes:[{...exactApprovalRecipe,approvalStatus:getModularRecipeApproval(exactApprovalRecipe,genericApprovedCatalog).status}]});
assert.equal(exactApprovalOnlyCoverage.cases.filter(item=>item.coverageKind==='approved-recipe').length,0);
assert.equal(moduleCoverage.inventory.seedPropertyCases, 1);
assert(moduleCoverage.cases.filter(item => item.coverageKind === 'parameter-boundary').length === 3);
const largeSampleAssets = Array.from({length:16},(_,index)=>({id:`asset/sample/${String(index).padStart(2,'0')}`,version:'1.0.0',sha256:String(index).padStart(64,'0'),category:`slot-${index}`,slots:[`slot-${index}`],baseIds:['dots-front'],poses:['idle'],riskGroups:[],dependencies:[],excludes:[]}));
const seededA = buildModularCoverageCases({assets:largeSampleAssets,baseStates:[bases[0]],seed:'stable-seed'});
const seededB = buildModularCoverageCases({assets:largeSampleAssets,baseStates:[bases[0]],seed:'stable-seed'});
const sampleSignature = coverage => coverage.cases.filter(item=>item.coverageKind==='seeded-sample').map(item=>`${item.id}:${item.assetIds.join(',')}`);
assert.deepEqual(sampleSignature(seededA),sampleSignature(seededB));
assert.equal(seededA.inventory.seededSamples,8);
const impossibleSampleAssets = largeSampleAssets.map(asset=>({...asset,slots:['same-slot']}));
const impossibleSamples = buildModularCoverageCases({assets:impossibleSampleAssets,baseStates:[bases[0]],seed:'blocked-seed',maxSampleAttempts:24});
assert.equal(impossibleSamples.inventory.seededSampleShortfalls,2);
assert(impossibleSamples.cases.every(item=>item.declaredRequired));
const impossibleSampleReport = summarizeCoverage([...impossibleSamples.cases,...impossibleSamples.exclusions],[],{expectedDeclaredCount:impossibleSamples.cases.length+impossibleSamples.exclusions.length});
assert.equal(impossibleSampleReport.denominator,impossibleSamples.cases.length);
assert.equal(impossibleSampleReport.counts.blocked,impossibleSamples.cases.length);
assert.equal(impossibleSampleReport.result,'blocked');
const allMissingResults = summarizeCoverage([...moduleCoverage.cases,...moduleCoverage.exclusions],moduleCoverage.cases.map(item=>({id:item.id,status:'fail',reason:'fault injection: declared resource unavailable'})),{expectedDeclaredCount:moduleCoverage.cases.length+moduleCoverage.exclusions.length});
assert.equal(allMissingResults.denominator,moduleCoverage.cases.length);
assert.equal(allMissingResults.hardConstraintExcluded,moduleCoverage.exclusions.length);
assert.equal(allMissingResults.counts.fail,moduleCoverage.cases.length);
assert.equal(allMissingResults.result,'fail');
const generatedImpact = calculateCompositionImpact({cases:moduleCoverage.cases,change:{kind:'new-asset',asset:{id:'asset/hat/new',category:'hat',slots:['hat'],baseIds:['dots-front'],poses:['idle'],dependencies:[],excludes:[],riskGroups:[]}},assets,baseStates:bases,recipes});
assert(generatedImpact.caseIds.some(id => id.includes('asset-hat-new')));
const layoutImpact = calculateCompositionImpact({cases:template.cases,change:{kind:'compositor'}});
assert.equal(layoutImpact.count, 22);
const tintImpact = calculateCompositionImpact({cases:template.cases,change:{kind:'tint'}});
assert.equal(tintImpact.count,22);
const dotsBaseImpact = calculateCompositionImpact({cases:template.cases,change:{kind:'base-image',id:'candidate-dots-20261005'}});
assert.equal(dotsBaseImpact.count,states.filter(state=>state.artworkId==='candidate-dots-20261005').length);
const tagImpact = calculateCompositionImpact({cases:template.cases,change:{kind:'tag-filter'}});
assert.equal(tagImpact.count, 0);
assert.deepEqual(tagImpact.requiredChecks,['default-random-pool','tag-filter']);
const themeCases=[{id:'theme-a',themeIds:['reading'],riskGroupId:'prop-grip',factors:{'asset.prop':'book'},assetIds:['book']}];
const themeImpact=calculateCompositionImpact({cases:themeCases,change:{kind:'theme-rule',id:'reading'}});
assert.deepEqual(themeImpact.caseIds,['theme-a']);

assert.throws(() => createCoverageFreezeRecord({sourceManifest:{sourceId:'sha256:fake',files:[],dirty:true},git:{dirty:true}}), /dirty snapshot/);
const frozen = createCoverageFreezeRecord({sourceManifest:{sourceId:'sha256:test',files:[{path:'dist/a.js',sha256:'f'.repeat(64)}]},git:{dirty:false,commit:'abc123'},browser:{cacheVersion:'83',userAgent:'test',viewport:{width:1440,height:900}},canvas:{width:1254,height:1254},cases:template.cases,report:allPass});
assert.equal(frozen.reviewState,'pending-human-review');
assert.equal(frozen.baselineAccepted,false);
assert.equal(frozen.denominator.declared,22);

console.log(JSON.stringify({result:'pass',template:template.inventory,rawPngByteChecks:{uniqueFiles:rawPngs.size,result:'pass'},module:moduleCoverage.inventory,approval:{exactRecipeApprovals:currentRecipeApprovals.filter(item=>item.approval.status==='approved').length,recipes:currentRecipeApprovals.length,genericStatusWithoutExactAdaptation:'pending'},seededSampling:{deterministic:true,cases:seededA.inventory.seededSamples,unresolvedRequiredCases:impossibleSamples.inventory.seededSampleShortfalls},hardConstraintExclusions:moduleCoverage.exclusions.length,denominatorFailureGuard:'pass',faultInjection:{requiredCasesRetained:allMissingResults.denominator,failed:allMissingResults.counts.fail,excludedByExplicitConstraints:allMissingResults.hardConstraintExcluded},impactGraph:'pass',freezeGuard:'pass'},null,2));
