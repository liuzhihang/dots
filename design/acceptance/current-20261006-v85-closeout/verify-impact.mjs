import assert from 'node:assert/strict';
import {readFile,writeFile} from 'node:fs/promises';
import {buildModularCoverageCases,calculateCompositionImpact} from '../../../dist/studio-composition-coverage.js';
const base=new URL('./',import.meta.url), repo=new URL('../../../',import.meta.url);
const source=JSON.parse(await readFile(new URL('source-after.json',base)));
const template=JSON.parse(await readFile(new URL('design/acceptance/current-20261006-v85/template-canvas/coverage-report.json',repo)));
const modules=JSON.parse(await readFile(new URL('design/acceptance/current-20261006-v85/module-canvas/coverage-report.json',repo)));
const cases=[...template.cases,...modules.cases];
const impact={};
for(const id of ['pilot-headphones-v1','pilot-round-glasses-v1','pilot-knit-scarf-v1']) impact[id]=calculateCompositionImpact({cases,change:{kind:'asset-version',id}});
assert.equal(impact['pilot-headphones-v1'].count,3);assert.equal(impact['pilot-round-glasses-v1'].count,2);assert.equal(impact['pilot-knit-scarf-v1'].count,1);
for(const kind of ['compositor','layout','tint']){impact[kind]=calculateCompositionImpact({cases,change:{kind}});assert.equal(impact[kind].count,27);}
impact.tags=calculateCompositionImpact({cases,change:{kind:'tag-filter'}});assert.equal(impact.tags.count,0);assert.deepEqual(impact.tags.requiredChecks,['default-random-pool','tag-filter']);
// Synthetic contracts only: no assets, geometry support or artistic approval are registered.
const fixtureAssets=['hair','hat','headphones','glasses'].map((category,i)=>({id:'fixture/'+category,version:'1.0.0',sha256:String(i).padStart(64,'0'),category,slots:[category],baseIds:['fixture/base'],poses:['fixture/front'],riskGroups:['fixture/three','fixture/four'],dependencies:[],excludes:[]}));
const fixtureRecipes=[3,4].map(strength=>({id:'fixture/recipe-'+strength,baseId:'fixture/base',poseId:'fixture/front',assetIds:fixtureAssets.slice(0,strength).map(a=>a.id),highRiskGroups:[{id:strength===3?'fixture/three':'fixture/four',strength,factorIds:fixtureAssets.slice(0,strength).map(a=>'asset.'+a.category)}]}));
const fixture=buildModularCoverageCases({assets:fixtureAssets,baseStates:[{id:'fixture/base'}],recipes:fixtureRecipes,seed:'closeout-3-4-v1'});
const highRisk=fixture.cases.filter(c=>c.coverageKind==='high-risk');assert.equal(highRisk.length,2);assert.deepEqual(highRisk.map(c=>c.strength).sort(),[3,4]);assert(highRisk.every(c=>c.assetIds.length===c.strength&&c.declaredRequired));assert(fixture.exclusions.length===0);
const result={sourceId:source.sourceId,cacheVersion:85,createdAt:new Date().toISOString(),status:'passed',scope:'Exact current capture impact + synthetic three/four-factor generation; no PNG rendering or art approval is inferred',actualCases:{templates:template.cases.length,modules:modules.cases.length,total:cases.length},impact,syntheticHighRisk:{registeredInRuntime:false,renderingExecuted:false,seed:fixture.seed,inventory:fixture.inventory,cases:highRisk}};
await writeFile(new URL('incremental-coverage.json',base),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({status:result.status,actualCases:result.actualCases,impacts:Object.fromEntries(Object.entries(impact).map(([k,v])=>[k,v.count])),syntheticHighRiskStrengths:highRisk.map(c=>c.strength)}));
