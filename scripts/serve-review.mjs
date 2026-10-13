import fs from 'node:fs/promises';
import path from 'node:path';
import {createServer} from 'vite';
// Local-only art review. This harness is outside dist and cannot enter the
// publish manifest; the public application has no query/storage bypass.
const route='/__dots_review__/';
const server=await createServer({configFile:path.resolve('vite.config.mjs'),server:{host:'127.0.0.1',port:Number(process.env.DOTS_REVIEW_PORT||5182),strictPort:true,hmr:false},plugins:[{name:'local-dots-art-review',configureServer(server){server.middlewares.use(route,async(req,res,next)=>{if(req.method!=='GET')return next();try{let html=await fs.readFile('dist/index.html','utf8');html=html.replace('data-cache="110"','data-cache="110" data-studio-boot="manual"').replace('<head>','<head><base href="/">').replace('<script type="module" src="./studio.js?v=110"></script>',`<script type="module">import {bootStudio} from '/studio.js?v=110';bootStudio({detailOptions:{reviewHarness:true}});</script>`);res.setHeader('Content-Type','text/html; charset=utf-8');res.setHeader('Cache-Control','no-store');res.end(html);}catch(error){next(error);}});}}]});
await server.listen();console.log(`Local pending-template review: http://127.0.0.1:${server.httpServer.address().port}${route}#/artwork/candidate-dots-20261005?v=v2`);
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,async()=>{await server.close();process.exit(0);});
