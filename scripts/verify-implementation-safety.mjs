import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'..');
const evidence='design/acceptance/current-20261010-v99';
const baselinePath=`${evidence}/apply-baseline.json`;
const baselineSha='f00391887922ffae736251e5044c914116090677e30170d8154aaad8d69018c4';
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const read=file=>fs.readFile(path.join(root,file));
const currentHash=async file=>{try{return hash(await read(file));}catch(e){if(e.code==='ENOENT')return null;throw e;}};
export async function verifySafety(){
 const bytes=await read(baselinePath);assert.equal(hash(bytes),baselineSha,'Frozen apply baseline changed');const baseline=JSON.parse(bytes);
 const release=JSON.parse(await read(`${evidence}/release-20261011/release-authorization.json`));
 assert.equal(release.baselineHead,baseline.head,'Release must retain the frozen implementation baseline');
 const head=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
 execFileSync('git',['merge-base','--is-ancestor',baseline.head,head],{cwd:root});
 const relocated=file=>file.startsWith(release.changeSource+'/')?release.changeArchive+file.slice(release.changeSource.length):file;
 const resolveHash=async file=>(await currentHash(file))??await currentHash(relocated(file));
 const rows=new Map(baseline.trackedFiles.map(r=>[r.path,r]));
 const allowed=file=>baseline.allowedFiles.includes(file)||file==='design-qa.md'||baseline.allowedRoots.some(prefix=>file.startsWith(prefix))||file.startsWith(release.changeArchive+'/')||release.specFiles.includes(file);
 const protectedFile=file=>baseline.protectedConfiguration.includes(file)||file.startsWith('dist/assets/characters/')||file.startsWith('dist/assets/looks/')||file.startsWith('historical-runtime/')||/^design\/acceptance\/(?!current-20261010-v99\/)/.test(file)||file.includes('/implementation/')||file.includes('/history/');
 const retirement=JSON.parse(await read(`${evidence}/retired-paths.json`));const retiredRows=Array.isArray(retirement)?retirement:retirement.files;
 const retired=new Map([...retiredRows,...release.retiredSpecs].map(r=>[r.from,r]));const changed=[],preserved=[];
 for(const row of baseline.trackedFiles){
  const actual=await resolveHash(row.path);if(actual===row.sha256){preserved.push(row.path);continue;}
  assert(!protectedFile(row.path),`Protected baseline path changed: ${row.path}`);assert(allowed(row.path),`Unrelated baseline path changed: ${row.path}`);
  if(actual===null){const moved=retired.get(row.path);assert(moved,`Removed file has no exact retirement: ${row.path}`);assert.equal(moved.sha256,row.sha256);assert.equal(await currentHash(moved.preservedAt),row.sha256);}
  changed.push({path:row.path,before:row.sha256,after:actual});
 }
 const sourceRows=baseline.trackedFiles.filter(r=>r.path.startsWith('dist/')&&r.sha256);
 for(const row of sourceRows)assert.equal(await currentHash(`${baseline.sourceSnapshot}/${row.path.slice(5)}`),row.sha256,`Frozen v98 source changed: ${row.path}`);
 for(const row of baseline.references)assert.equal(await resolveHash(row.path),row.sha256,`Chosen reference changed: ${row.path}`);
 for(const file of ['design-qa.md','scripts/verify-implementation-safety.mjs'])assert.equal(await currentHash(`historical-runtime/v98-before-dark-gallery/${file}`),rows.get(file).sha256,`Replaced historical document/script must be retained: ${file}`);
 const inventory=execFileSync('git',['ls-files','--cached','--others','--exclude-standard','-z'],{cwd:root,encoding:'utf8',maxBuffer:16*1024*1024}).split('\0').filter(Boolean);
 const added=[...new Set(inventory)].filter(file=>!rows.has(file));for(const file of added)assert(allowed(file),`New file outside authorized local implementation: ${file}`);
 return {revision:99,baselineHead:baseline.head,currentHead:head,baselineSha256:baselineSha,protectedCount:preserved.length,protectedConfigurations:baseline.protectedConfiguration,protectedHistoricalEvidence:['v96','v97','v98','prior OpenSpec implementation/history'],frozenSourceFiles:sourceRows.length,references:baseline.references.length,changed,added,retired:[...retiredRows,...release.retiredSpecs],changeArchive:release.changeArchive,authorization:release.authorization};
}
if(process.argv[1]===import.meta.filename){const report=await verifySafety();const outputDirectory=path.resolve(process.env.DOTS_EVIDENCE_DIR||path.join(root,'design/acceptance/current-20261010-v99/cr-polish-20261011/tests/implementation-safety'));await fs.mkdir(outputDirectory,{recursive:true});await fs.writeFile(path.join(outputDirectory,'implementation-safety.json'),JSON.stringify(report,null,2)+'\n');console.log(`Safety: HEAD/config/history protected; ${report.frozenSourceFiles} frozen source files; ${report.retired.length} exact retirements; ${report.changed.length} authorized changes.`);}
