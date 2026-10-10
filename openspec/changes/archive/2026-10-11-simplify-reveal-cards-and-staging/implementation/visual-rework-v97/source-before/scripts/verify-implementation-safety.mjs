import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const base='openspec/changes/simplify-reveal-cards-and-staging/implementation/static-experience-v96';
const read=async p=>JSON.parse(await fs.readFile(path.join(root,p),'utf8'));
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
export async function verifySafety(){
 const baseline=await read(`${base}/baseline.json`), contract=await read(`${base}/version-contract.json`);
 let retirement={files:[]};try{retirement=await read('historical-runtime/static-refocus-v96/retirement.json')}catch{}
 const moved=new Map(retirement.files.map(x=>[x.from,x]));let protectedCount=0;
 const changed=[];
 for(const record of baseline.files){
  let current=null;try{current=hash(await fs.readFile(path.join(root,record.path)))}catch{}
  if(current===record.sha256){protectedCount++;continue;}
  if(moved.has(record.path)){const m=moved.get(record.path);assert.equal(m.sha256,record.sha256);assert.equal(hash(await fs.readFile(path.join(root,m.to))),record.sha256);assert.equal(current,null);continue;}
  assert(record.sha256!==null,`Previously absent path unexpectedly restored: ${record.path}`);
  const editable=contract.allowedExistingPaths.includes(record.path)||contract.allowedPrefixes.some(p=>record.path.startsWith(p))||record.path===contract.taskTrackingPath;
  assert(editable,`Unrelated baseline path changed: ${record.path}`);
  assert(!contract.protectedPaths.includes(record.path),`Protected configuration changed: ${record.path}`);
  assert(!/^dist\/assets\/(characters|looks)\//.test(record.path),`Approved original changed: ${record.path}`);
  changed.push(record.path);
 }
 return {protectedCount,changed,retired:retirement.files.length};
}
if(process.argv[1]===import.meta.filename)console.log(JSON.stringify(await verifySafety(),null,2));
