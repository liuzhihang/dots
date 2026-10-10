import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {createServer} from 'vite';

const output=path.resolve(process.env.DOTS_EVIDENCE_DIR||'design/acceptance/current-20261010-v99/cr-polish-20261011/home');
await fs.mkdir(output,{recursive:true});
const bannerRelative='dist/assets/banners/dots-gallery-hero-ensemble-v99.webp';
const bannerBytes=await fs.readFile(bannerRelative);
const bannerSha256=crypto.createHash('sha256').update(bannerBytes).digest('hex');
assert.equal(bannerBytes.length,126138,'The approved test fixture is the exact registered ensemble candidate size.');
assert.equal(bannerSha256,'aaa7c0fe9e83e579fa0647f6994d58d84ca80831cb5b5c63cdc48a5537818091','The tested homepage banner matches its frozen preview hash.');

const {chromium}=await import(pathToFileURL(process.env.DOTS_PLAYWRIGHT_MODULE||'/Users/liuzhihang/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs'));
const server=await createServer({configFile:path.resolve('vite.config.mjs'),server:{host:'127.0.0.1',port:0,strictPort:true,hmr:false}});
await server.listen();
const origin=`http://127.0.0.1:${server.httpServer.address().port}`;
const browser=await chromium.launch({headless:true,executablePath:process.env.DOTS_CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const errors=[],checks=[],rows=[];
const viewports=[[1440,900],[1206,1257],[768,1024],[390,844],[320,700]];
const expectedTitles={en:['Make It','Your Dot.'],'zh-CN':['创造','你的Dot.']};

function assertHit(button,description){
  return button.evaluate(element=>{
    const rect=element.getBoundingClientRect();
    const inset=Math.min(8,rect.width/4,rect.height/4);
    const points=[[rect.left+inset,rect.top+inset],[rect.right-inset,rect.top+inset],[rect.left+inset,rect.bottom-inset],[rect.right-inset,rect.bottom-inset],[rect.left+rect.width/2,rect.top+rect.height/2]];
    return {rect:{left:rect.left,top:rect.top,right:rect.right,bottom:rect.bottom,width:rect.width,height:rect.height},visible:rect.width>0&&rect.height>0&&rect.top>=0&&rect.bottom<=innerHeight,hits:points.map(([x,y])=>{const target=document.elementFromPoint(x,y);return target===element||element.contains(target);})};
  }).then(result=>{
    assert(result.visible,`${description} is fully visible in the viewport: ${JSON.stringify(result)}`);
    assert(result.rect.height>=44,`${description} is at least 44px high: ${JSON.stringify(result)}`);
    assert(result.hits.every(Boolean),`${description} receives pointer hits at its center and inset corners: ${JSON.stringify(result)}`);
    return result;
  });
}

try{
  for(const language of ['en','zh-CN']){
    const context=await browser.newContext({viewport:{width:1440,height:900},permissions:['clipboard-read','clipboard-write'],reducedMotion:'reduce'});
    await context.addInitScript(value=>localStorage.setItem('dots-v99-language',value),language);
    const page=await context.newPage();
    page.setDefaultTimeout(10000);
    page.on('pageerror',error=>errors.push({language,message:error.message}));
    await page.goto(`${origin}/#/`,{waitUntil:'networkidle'});
    assert.equal(await page.locator('html').getAttribute('lang'),language);

    for(const [width,height] of viewports){
      await page.setViewportSize({width,height});
      await page.goto(`${origin}/#/`,{waitUntil:'networkidle'});
      await page.evaluate(()=>scrollTo(0,0));
      await page.waitForFunction(()=>{const image=document.querySelector('.gallery-intro-art img');return Boolean(image&&image.complete&&image.naturalWidth===1536&&image.naturalHeight===1024&&getComputedStyle(image).opacity==='1');});
      assert.equal(await page.locator('html').getAttribute('lang'),language);

      const titleLines=await page.locator('#galleryTitle .hero-title-line').allTextContents();
      assert.deepEqual(titleLines,expectedTitles[language],`${language} has exactly the two approved hero title lines at ${width}x${height}.`);
      const titleGeometry=await page.locator('#galleryTitle .hero-title-line').evaluateAll(lines=>lines.map(line=>({text:line.textContent.trim(),display:getComputedStyle(line).display,rect:(()=>{const r=line.getBoundingClientRect();return{left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height};})(),fits:line.scrollWidth<=line.clientWidth+1})));
      assert(titleGeometry.every(line=>line.display==='block'&&line.fits),`Hero title lines remain separate, unwrapped blocks at ${width}x${height}: ${JSON.stringify(titleGeometry)}`);
      assert(titleGeometry[0].rect.bottom<=titleGeometry[1].rect.top+1,`The title lines render as two visual rows at ${width}x${height}.`);

      const banner=await page.locator('.gallery-intro-art[aria-hidden="true"] img').evaluate(image=>({src:new URL(image.currentSrc).pathname,complete:image.complete,naturalWidth:image.naturalWidth,naturalHeight:image.naturalHeight,objectFit:getComputedStyle(image).objectFit,rect:(()=>{const r=image.getBoundingClientRect();return{left:r.left,top:r.top,right:r.right,bottom:r.bottom,width:r.width,height:r.height};})()}));
      assert.equal(banner.src,'/assets/banners/dots-gallery-hero-ensemble-v99.webp');
      assert.equal(banner.complete,true);assert.equal(banner.naturalWidth,1536);assert.equal(banner.naturalHeight,1024);assert.equal(banner.objectFit,'cover');
      assert(banner.rect.width>0&&banner.rect.height>0,`Decorative ensemble is visible at ${width}x${height}.`);

      const browse=page.locator('#browseCharacters');
      assert.equal(await page.locator('#heroCopy,#heroCopyFallback').count(),0,'The homepage has no generic Prompt-copy CTA or fallback panel.');
      assert.equal(await page.locator('.gallery-intro-copy .intro-actions > *').count(),1,'Browse is the sole hero action.');
      const browseHit=await assertHit(browse,`Browse Characters CTA at ${width}x${height}`);
      assert.equal((await browse.innerText()).trim(),language==='en'?'Browse characters':'浏览角色');
      const browseIcon=await browse.locator('img').evaluate(image=>{const icon=image.getBoundingClientRect(),label=image.parentElement.querySelector('span').getBoundingClientRect();return{alt:image.alt,left:icon.left,right:icon.right,top:icon.top,bottom:icon.bottom,labelRight:label.right,labelTop:label.top,labelBottom:label.bottom};});
      assert.equal(browseIcon.alt,'','The decorative Browse icon is hidden from assistive technology.');
      const labelCenter=(browseIcon.labelTop+browseIcon.labelBottom)/2,iconCenter=(browseIcon.top+browseIcon.bottom)/2;
      assert(browseIcon.left>=browseIcon.labelRight-1&&Math.abs(iconCenter-labelCenter)<=2,`Browse icon follows and vertically centers with its label: ${JSON.stringify(browseIcon)}`);
      await page.screenshot({path:path.join(output,`home-${width}-${language}.png`),fullPage:false});

      await browse.click();
      const browseResult=await page.evaluate(()=>({hash:location.hash,searchFocused:document.activeElement?.id==='gallerySearch',filterFocused:document.activeElement?.matches('#gallerySeries .gallery-series-filter__button'),scrollY,charactersTop:document.querySelector('#characters').getBoundingClientRect().top}));
      assert.equal(browseResult.hash,'#/');
      assert(width<=600?browseResult.searchFocused:browseResult.filterFocused,`Browse Characters reaches and focuses the gallery controls at ${width}x${height}: ${JSON.stringify(browseResult)}`);
      const pageLayout=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,columns:getComputedStyle(document.querySelector('.artwork-grid')).gridTemplateColumns.split(' ').length}));
      assert.equal(pageLayout.overflow,false,`No horizontal overflow at ${width}x${height}.`);
      if(width===1440||width===1206)assert.equal(pageLayout.columns,6);
      if(width===768)assert.equal(pageLayout.columns,3);
      if(width===390||width===320)assert.equal(pageLayout.columns,2);
      rows.push({width,height,language,titleLines,titleGeometry,banner,browseHit,browseIcon,browseResult,pageLayout});
      checks.push(`${width}x${height} ${language}: two-line title, exact ensemble, sole Browse hitbox/navigation, and gallery columns`);
    }
    await context.close();
  }
  assert.deepEqual(errors,[],'The home hero produced no page errors.');
  const report={revision:99,browser:browser.version(),environment:{platform:process.platform,hosting:'local-only'},banner:{path:bannerRelative,sha256:bannerSha256,byteSize:bannerBytes.length},viewports:rows,checks,errors};
  await fs.writeFile(path.join(output,'report.json'),JSON.stringify(report,null,2)+'\n');
  console.log(`Home hero: ${checks.length} viewport/language cases passed; banner ${bannerSha256}; no page errors.`);
}finally{await browser.close();await server.close();}
