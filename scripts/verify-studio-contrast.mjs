import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import {createServer} from 'vite';
import {launchBrowser} from './browser-runtime.mjs';
import {resolveEvidenceDirectory} from './evidence-paths.mjs';
import {ARTWORKS} from '../dist/studio-artwork-catalog.js?v=100';
import {TEMPLATE_REGISTRY,getTemplateForArtwork,getTemplateOptionFields} from '../dist/studio-edit-templates.js?v=100';

const output=resolveEvidenceDirectory('.artifacts/studio-contrast');
await fs.mkdir(output,{recursive:true});
const server=await createServer({configFile:path.resolve('vite.config.mjs'),server:{host:'127.0.0.1',port:0,strictPort:true,hmr:false}});
await server.listen();
const origin=`http://127.0.0.1:${server.httpServer.address().port}`;
const html=(await fs.readFile('dist/index.html','utf8'))
  .replace('data-cache="100"','data-cache="100" data-studio-boot="manual"')
  .replace('<head>',`<head><base href="${origin}/">`)
  .replace('<script type="module" src="./studio.js?v=100"></script>','<script type="module">import {bootStudio} from "/studio.js?v=100";window.__dotsQAApp=bootStudio({detailOptions:{reviewHarness:false}});</script>');
const browser=await launchBrowser({headless:true});
const rows=[];
const failures=[];
const staticFixture=ARTWORKS.find(item=>!getTemplateForArtwork(item));
const templateCases=TEMPLATE_REGISTRY.map(template=>{
  const artwork=ARTWORKS.find(item=>item.id===template.artworkBinding.artworkId&&item.version===template.artworkBinding.artworkVersion);
  assert(artwork,`${template.id} has an exact catalog binding.`);
  assert.equal(getTemplateForArtwork(artwork)?.id,template.id,`${template.id} is eligible through public access.`);
  const tabs=template.schemaVersion===2?getTemplateOptionFields(template).map(field=>field.key):['colors','face','accessories'];
  return {series:template.id,id:artwork.id,version:artwork.version,templateId:template.id,tabs};
});
assert.equal(templateCases.length,ARTWORKS.filter(item=>getTemplateForArtwork(item)).length,'Every current publicly editable Artwork receives rendered contrast checks.');
assert(templateCases.length>0,'The current catalog has real publicly editable Artworks.');

async function contrastSample(page,{name,selectors,threshold=4.5}){
  const targets=await page.evaluate(({selectors,threshold})=>{
    const clippedRect=(rect,element)=>{
      let left=Math.max(0,rect.left),top=Math.max(0,rect.top),right=Math.min(innerWidth,rect.right),bottom=Math.min(innerHeight,rect.bottom);
      for(let ancestor=element;ancestor;ancestor=ancestor.parentElement){
        const style=getComputedStyle(ancestor),box=ancestor.getBoundingClientRect();
        if(/auto|scroll|hidden|clip/.test(style.overflowX)){left=Math.max(left,box.left+ancestor.clientLeft);right=Math.min(right,box.left+ancestor.clientLeft+ancestor.clientWidth);}
        if(/auto|scroll|hidden|clip/.test(style.overflowY)){top=Math.max(top,box.top+ancestor.clientTop);bottom=Math.min(bottom,box.top+ancestor.clientTop+ancestor.clientHeight);}
      }
      return right>left&&bottom>top?{x:left,y:top,width:right-left,height:bottom-top}:null;
    };
    const found=new Map();
    for(const selector of selectors){
      for(const element of document.querySelectorAll(selector)){
        const visible=element.getClientRects().length>0&&getComputedStyle(element).visibility!=='hidden';
        if(!visible)continue;
        const key=element;
        let target=found.get(key);
        if(!target){target={selector,rects:[],text:'',color:null,alpha:1};found.set(key,target);}
        const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);
        while(walker.nextNode()){
          const textNode=walker.currentNode;
          if(!textNode.nodeValue?.trim())continue;
          const range=document.createRange();range.selectNodeContents(textNode);
          const rects=[...range.getClientRects()].map(rect=>clippedRect(rect,textNode.parentElement||element)).filter(Boolean);
          if(!rects.length)continue;
          const style=getComputedStyle(textNode.parentElement||element);
          const values=style.color.match(/[\d.]+/g)?.map(Number)||[];
          if(values.length<3)continue;
          let opacity=1;for(let ancestor=textNode.parentElement||element;ancestor;ancestor=ancestor.parentElement)opacity*=Number(getComputedStyle(ancestor).opacity||1);
          target.color={rgb:values.slice(0,3),alpha:(values.length>3?values[3]:1)*opacity,fontSize:style.fontSize,fontWeight:style.fontWeight};
          target.text+=textNode.nodeValue.trim()+' ';
          target.rects.push(...rects.map(rect=>({x:rect.x,y:rect.y,width:rect.width,height:rect.height})));
        }
      }
    }
    const usable=[...found.entries()].filter(([,item])=>item.rects.length&&item.color&&item.color.alpha>0);
    usable.forEach(([element])=>element.classList.add('dots-contrast-mask'));
    const style=document.createElement('style');style.id='dots-contrast-mask-style';style.textContent='.dots-contrast-mask,.dots-contrast-mask *{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important}';document.head.append(style);
    return usable.map(([,item],index)=>({...item,id:index,threshold}));
  },{selectors,threshold});
  assert(targets.length>0,`${name} has visible text targets to sample.`);
  const cleanTargets=targets.map(({selector,rects,text,color})=>({selector,rects,text:text.trim().slice(0,120),color}));
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  const masked=await page.screenshot({fullPage:false});
  await page.evaluate(()=>{document.querySelectorAll('.dots-contrast-mask').forEach(element=>element.classList.remove('dots-contrast-mask'));document.querySelector('#dots-contrast-mask-style')?.remove();});
  const normal=await page.screenshot({fullPage:false});
  await fs.writeFile(path.join(output,`${name}-normal.png`),normal);
  await fs.writeFile(path.join(output,`${name}-text-transparent.png`),masked);
  const measured=await page.evaluate(async({beforePng,afterPng,targets})=>{
    const decode=async bytes=>{const image=new Image();image.src=`data:image/png;base64,${bytes}`;await image.decode();const canvas=document.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;const context=canvas.getContext('2d',{willReadFrequently:true});context.drawImage(image,0,0);return{width:canvas.width,height:canvas.height,pixels:context.getImageData(0,0,canvas.width,canvas.height).data};};
    const normal=await decode(beforePng),blank=await decode(afterPng);
    if(normal.width!==blank.width||normal.height!==blank.height)throw new Error('Contrast screenshots changed size.');
    const luminance=rgb=>rgb.map(value=>{const channel=value/255;return channel<=.04045?channel/12.92:((channel+.055)/1.055)**2.4;}).reduce((sum,value,index)=>sum+value*[.2126,.7152,.0722][index],0);
    const ratio=(left,right)=>{const a=luminance(left),b=luminance(right);return(Math.max(a,b)+.05)/(Math.min(a,b)+.05);};
    return targets.map(target=>{
      const hits=[];let changed=0;
      for(const rect of target.rects){
        const left=Math.max(0,Math.floor(rect.x)),top=Math.max(0,Math.floor(rect.y)),right=Math.min(normal.width,Math.ceil(rect.x+rect.width)),bottom=Math.min(normal.height,Math.ceil(rect.y+rect.height));
        for(let y=top;y<bottom;y++)for(let x=left;x<right;x++){
          const index=(y*normal.width+x)*4;const background=[blank.pixels[index],blank.pixels[index+1],blank.pixels[index+2]];const difference=Math.max(Math.abs(normal.pixels[index]-background[0]),Math.abs(normal.pixels[index+1]-background[1]),Math.abs(normal.pixels[index+2]-background[2]));
          if(difference<4)continue;changed++;
          const alpha=Math.min(1,Math.max(0,target.color.alpha));const foreground=target.color.rgb.map((value,channel)=>value*alpha+background[channel]*(1-alpha));hits.push({ratio:ratio(foreground,background),background,foreground,x,y});
        }
      }
      hits.sort((a,b)=>a.ratio-b.ratio);
      const min=hits[0];return{selector:target.selector,text:target.text,color:target.color,threshold:target.threshold,changedTextPixels:changed,sampledGlyphPixels:hits.length,minRatio:min?.ratio??null,worstPixel:min?{x:min.x,y:min.y,foreground:min.foreground,background:min.background}:null};
    });
  },{beforePng:normal.toString('base64'),afterPng:masked.toString('base64'),targets:cleanTargets});
  for(const row of measured){
    const passed=row.sampledGlyphPixels>0&&row.minRatio>=threshold;
    const result={scene:name,...row,passed};
    rows.push(result);
    if(!passed)failures.push({scene:name,selector:row.selector,text:row.text,threshold,measuredRatio:row.minRatio,sampledGlyphPixels:row.sampledGlyphPixels});
  }
  return measured;
}

async function gradientTextContrastSample(page,{name,selector,threshold=3}){
  const target=await page.evaluate(selector=>{
    const element=document.querySelector(selector);
    if(!element||!element.getClientRects().length)throw new Error(`Visible gradient text not found: ${selector}`);
    const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT),rects=[];
    while(walker.nextNode()){
      const node=walker.currentNode;if(!node.nodeValue?.trim())continue;
      const range=document.createRange();range.selectNodeContents(node);
      rects.push(...[...range.getClientRects()].filter(rect=>rect.width>0&&rect.height>0&&rect.right>0&&rect.bottom>0&&rect.left<innerWidth&&rect.top<innerHeight).map(rect=>({x:rect.x,y:rect.y,width:rect.width,height:rect.height})));
    }
    const style=getComputedStyle(element);
    return{rects,text:element.textContent.trim(),fontSize:style.fontSize,fontWeight:style.fontWeight,backgroundImage:style.backgroundImage};
  },selector);
  assert(target.rects.length>0,`${name} has visible gradient glyphs to sample.`);
  const normal=await page.screenshot({fullPage:false});
  await page.evaluate(selector=>{document.querySelector(selector).classList.add('dots-gradient-contrast-mask');const maskStyle=document.createElement('style');maskStyle.id='dots-gradient-contrast-mask-style';maskStyle.textContent='.dots-gradient-contrast-mask,.dots-gradient-contrast-mask *{background:none!important;background-image:none!important;background-clip:border-box!important;-webkit-background-clip:border-box!important;color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important}';document.head.append(maskStyle);},selector);
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  const masked=await page.screenshot({fullPage:false});
  await page.evaluate(()=>{document.querySelectorAll('.dots-gradient-contrast-mask').forEach(element=>element.classList.remove('dots-gradient-contrast-mask'));document.querySelector('#dots-gradient-contrast-mask-style')?.remove();});
  await fs.writeFile(path.join(output,`${name}-normal.png`),normal);
  await fs.writeFile(path.join(output,`${name}-text-transparent.png`),masked);
  const sample=await page.evaluate(async({normalPng,maskedPng,rects})=>{
    const decode=async bytes=>{const image=new Image();image.src=`data:image/png;base64,${bytes}`;await image.decode();const canvas=document.createElement('canvas');canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;const context=canvas.getContext('2d',{willReadFrequently:true});context.drawImage(image,0,0);return{width:canvas.width,height:canvas.height,pixels:context.getImageData(0,0,canvas.width,canvas.height).data};};
    const normal=await decode(normalPng),masked=await decode(maskedPng);
    const luminance=rgb=>rgb.map(value=>{const channel=value/255;return channel<=.04045?channel/12.92:((channel+.055)/1.055)**2.4;}).reduce((sum,value,index)=>sum+value*[.2126,.7152,.0722][index],0);
    const ratio=(left,right)=>{const a=luminance(left),b=luminance(right);return(Math.max(a,b)+.05)/(Math.min(a,b)+.05);};
    const thresholds=[64,96,128,160];const samples=Object.fromEntries(thresholds.map(value=>[value,[]]));let changed=0;
    for(const rect of rects){
      const left=Math.max(0,Math.floor(rect.x)),top=Math.max(0,Math.floor(rect.y)),right=Math.min(normal.width,Math.ceil(rect.x+rect.width)),bottom=Math.min(normal.height,Math.ceil(rect.y+rect.height));
      for(let y=top;y<bottom;y++)for(let x=left;x<right;x++){
        const index=(y*normal.width+x)*4,foreground=[normal.pixels[index],normal.pixels[index+1],normal.pixels[index+2]],background=[masked.pixels[index],masked.pixels[index+1],masked.pixels[index+2]],difference=Math.max(...foreground.map((value,channel)=>Math.abs(value-background[channel])));
        if(difference<8)continue;changed++;
        for(const cutoff of thresholds)if(difference>=cutoff)samples[cutoff].push({ratio:ratio(foreground,background),foreground,background,x,y});
      }
    }
    const summaries=Object.fromEntries(thresholds.map(cutoff=>{const rows=samples[cutoff].sort((a,b)=>a.ratio-b.ratio),minimum=rows[0];return[String(cutoff),{pixels:rows.length,minRatio:minimum?.ratio??null,worstPixel:minimum?{x:minimum.x,y:minimum.y,foreground:minimum.foreground,background:minimum.background}:null}];}));
    return{changedGlyphPixels:changed,deltaSamples:summaries,coreGlyphPixels:summaries['128'].pixels,minRatio:summaries['128'].minRatio,worstPixel:summaries['128'].worstPixel};
  },{normalPng:normal.toString('base64'),maskedPng:masked.toString('base64'),rects:target.rects});
  const passed=sample.changedGlyphPixels>0&&sample.coreGlyphPixels>20&&sample.minRatio>=threshold;
  const row={selector,text:target.text,fontSize:target.fontSize,fontWeight:target.fontWeight,backgroundImage:target.backgroundImage,threshold,method:'Paired screenshots; compare gradient glyph pixels with the same-frame underlying backdrop. Record minima at multiple RGB-change cutoffs; assert large-text contrast on glyph pixels with at least 128/255 channel change to exclude the weakest anti-aliased edge pixels.',...sample,passed};
  rows.push({scene:name,...row});
  if(!passed)failures.push({scene:name,selector,text:target.text,threshold,measuredRatio:sample.minRatio,changedGlyphPixels:sample.changedGlyphPixels,coreGlyphPixels:sample.coreGlyphPixels,worstPixel:sample.worstPixel});
  return row;
}

try{
  for(const language of ['en','zh-CN']){
    const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
    await context.addInitScript(value=>localStorage.setItem('dots-v99-language',value),language);
    const page=await context.newPage();
    await page.goto(`${origin}/#/`,{waitUntil:'networkidle'});
    assert.equal(await page.locator('html').getAttribute('lang'),language);
    await contrastSample(page,{name:`${language}-gallery`,selectors:['.hero-title-line[data-home-copy="titleFirst"]','.intro-description','#browseCharacters','.gallery-series-filter__button[aria-pressed="true"]','.result-count','.artwork-name','.artwork-series']});
    await gradientTextContrastSample(page,{name:`${language}-hero-gradient-title`,selector:'.hero-title-line[data-home-copy="titleSecond"]',threshold:3});
    if(staticFixture){
      const artwork=staticFixture;
      await page.goto(`${origin}/#/artwork/${artwork.id}?v=${artwork.version}`);
      await page.waitForFunction(()=>document.querySelector('.character-studio')?.dataset.preview==='ready');
      assert.equal(await page.locator('.character-studio').getAttribute('data-editable'),'false');
      await contrastSample(page,{name:`${language}-static-detail`,selectors:['.artwork-detail__title','.studio-series','.artwork-detail__description','.artwork-detail__tag','.studio-actions button','.prompt-direction>span','.studio-prompt-actions .prompt-direction-note','.studio-prompt-actions .chatgpt-hint','.studio-prompt>summary']});
    }
    await page.close();await context.close();

    for(const templateCase of templateCases){
      const series=templateCase.series;
      const reviewContext=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'});
      await reviewContext.addInitScript(value=>localStorage.setItem('dots-v99-language',value),language);
      const reviewPage=await reviewContext.newPage();
      await reviewPage.route('**/__contrast__/',route=>route.fulfill({contentType:'text/html',body:html}));
      await reviewPage.goto(`${origin}/__contrast__/#/artwork/${templateCase.id}?v=${templateCase.version}`);
      await reviewPage.waitForSelector('.studio-editor-controls[data-can-export="true"]',{timeout:30_000});
      assert.equal(await reviewPage.locator('.studio-editor-controls').getAttribute('data-template-id'),templateCase.templateId);
      assert.equal(await reviewPage.locator('.studio-editor-controls').getAttribute('data-review-only'),'false',
        `${templateCase.templateId} is measured through the public production eligibility path.`);
      assert.equal(await reviewPage.locator('html').getAttribute('lang'),language);
      assert.deepEqual(await reviewPage.locator('.studio-editor-tab[role="tab"]').evaluateAll(tabs=>tabs.map(tab=>tab.dataset.editorTab)),templateCase.tabs,'Rendered tabs match the exact Template capability.');
      for(const group of templateCase.tabs){
        await reviewPage.locator(`.studio-editor-tab[role="tab"][data-editor-tab="${group}"]`).click();
        await reviewPage.waitForFunction(expected=>document.querySelector(`.studio-editor-tab[data-editor-tab="${expected}"]`)?.getAttribute('aria-selected')==='true'&&!document.querySelector(`.studio-editor-category[role="tabpanel"][data-editor-tab="${expected}"]`)?.hidden,group);
        await contrastSample(reviewPage,{name:`${language}-${series}-editor-${group}`,selectors:['.overlay-header h2','#overlayBack','#overlayClose','.artwork-detail__title','.studio-editor-tabs .studio-editor-tab','.studio-editor-field-title','.studio-editor-option-label','.studio-editor-option-reason:not([hidden])','.studio-editor-controls [data-action="retry"]:not([hidden])']});
      }
      await reviewPage.locator('.studio-actions').scrollIntoViewIfNeeded();
      await contrastSample(reviewPage,{name:`${language}-${series}-editor-actions`,selectors:['.studio-actions button','.prompt-direction>span','.studio-prompt-actions .prompt-direction-note','.studio-prompt-actions .chatgpt-hint']});
      const originalSummary=reviewPage.locator('.studio-original>summary');
      await originalSummary.scrollIntoViewIfNeeded();
      assert.equal(await originalSummary.isVisible(),true,'The collapsed original-materials disclosure remains visible when scrolled into view.');
      await contrastSample(reviewPage,{name:`${language}-${series}-editor-original`,selectors:['.studio-original>summary']});
      await reviewContext.close();
    }
  }
  const ratios=rows.map(row=>row.minRatio).filter(Number.isFinite);
  const minimum=ratios.length?Math.min(...ratios):null;
  await fs.writeFile(path.join(output,'contrast.json'),JSON.stringify({revision:100,browser:browser.version(),method:'Pixel-sampled foreground/background contrast from paired installed-Chrome screenshots. Each visible text target is captured normally and again with its text color transparent; the second screenshot retains the actual glass, gradient, and backdrop composite. Changed glyph pixels are paired with the corresponding underlying screenshot pixels; computed foreground alpha/ancestor opacity is composited over each sampled background. Text threshold is 4.5:1. Artwork pixels are not UI text.',passed:failures.length===0,minimumRatio:minimum,failures,rows},null,2)+'\n');
  console.log(`Contrast: ${rows.length} rendered text targets sampled in both languages; minimum ${minimum?.toFixed(2)??'n/a'}:1; failures ${failures.length}.`);
  if(failures.length){console.error(`Contrast failures: ${JSON.stringify(failures,null,2)}`);process.exitCode=1;}
}finally{await browser.close();await server.close();}
