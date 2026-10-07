import {readFile,writeFile,mkdir,stat} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url)),sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const entries=execFileSync('rg',['--files','src/live','dist','scripts','package.json','package-lock.json','vite.config.mjs'],{cwd:root,encoding:'utf8'}).trim().split('\n').filter(file=>file!=='dist/qa/character-source.json').sort();
const files=[];for(const file of entries){const bytes=await readFile(path.join(root,file));files.push({path:file,bytes:bytes.length,sha256:sha(bytes)});}
const revisionMatch=(await readFile(path.join(root,'dist/index.html'),'utf8')).match(/studio\.js\?v=(\d+)/);
if(!revisionMatch)throw new Error('Could not read the studio cache revision from dist/index.html');
const cacheRevision=revisionMatch[1];
const freezeDate=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date()).replaceAll('-','');
const acceptanceRoot=path.join(root,'design','acceptance');
const output=path.join(acceptanceRoot,`current-${freezeDate}-v${cacheRevision}`);
const gitHead=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();
const sourceId=sha(JSON.stringify(files));
try{
 await stat(output);
 throw new Error(`Refusing to replace existing acceptance snapshot directory: ${output}`);
}catch(error){if(error?.code!=='ENOENT')throw error;}
// Claim the version directory before touching dist/qa/character-source.json.
// mkdir is exclusive and also protects against a second freezer racing the
// preflight stat above.
await mkdir(acceptanceRoot,{recursive:true});
await mkdir(output);
const snapshot={format:'dots-local-source-snapshot',version:1,frozen:true,createdAt:new Date().toISOString(),gitHead,gitHeadScope:'baseline-commit-only; gitHead does not include dirty or untracked working-tree changes',sourceId,sourceIdScope:'SHA-256 over the listed working-tree file paths and contents',cacheRevision,characterSchema:10,rendererVersion:'atelier-4',files,userArtApproved:false};
const text=JSON.stringify(snapshot,null,2)+'\n';
await writeFile(path.join(output,'source-snapshot.json'),text,{flag:'wx'});
await writeFile(path.join(root,'dist/qa/character-source.json'),text);
console.log(`Frozen local source ${snapshot.sourceId}: ${files.length} files; no commit, deployment or art approval.`);
