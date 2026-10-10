# v99 静态目录与展示资源验收

默认图库当前仍只含 15 件已批准 Artwork；原 v83 批准身份、原图字节和 SHA-256 由 [verify-artwork-catalog.mjs](../../../../scripts/verify-artwork-catalog.mjs) 对照历史快照验证。15 是受保护的历史子集，不是目录的永久容量上限。5 件新增外观（Dots、Grok、Muse、人物、动物各一）分别登记为待确认候选，连同此前 2 件当时共 7 件 preview-only；它们可通过可信详情检查，但没有自动加入公开图库、搜索、标签或编辑能力。

此前 [generated-display-assets.json](./generated-display-assets.json) 登记了 22 张源图的 66 个同源派生展示资源：每件有最长边 256 px 的 poster，以及最长边 512 px、1024 px 的详情预览。派生使用 macOS `sips` 等比例缩放，保留透明 PNG；不改写原始 PNG，也不把派生图作为原图下载。构建闭包另行验证实际文件大小、尺寸和 SHA。

[extension-browser.json](./extension-browser.json) 记录 data-only 新 Character/Artwork fixture 在 Chrome 中经过共用查询、共用 card、共用 detail、Prompt 复制和原图下载的实测闭环。Fixture 仅在测试注入的目录和资源注册表中存在，下载解析器显式注入 fixture `getAsset`；测试复用登记白猫的原始字节，不增加公开内容或素材。

当前通过的命令：

```text
node scripts/verify-artwork-catalog.mjs
node scripts/verify-artwork-query.mjs
node scripts/verify-character-extension.mjs
node scripts/verify-publish-inventory.mjs
```

截至本记录：catalog 保留 15 个批准 Artwork、7 个待确认候选；显示资源有 66 个派生文件；fixture 浏览器闭环 8 项通过；查询索引 89 个已批准 typed facts。候选素材与派生完成只证明文件和数据登记，不构成新增艺术批准、模板批准或部署验收。

## 新外观人工像素复核

[五系列候选深/白底对照](../visual/new-artworks-review.png)使用浏览器真实 alpha 合成查看（1440px审阅板）。Dots保留无肢体短密绒三角体与贝雷帽；Grok为光滑珊瑚水滴和胶囊眼；Muse为连续包覆体、内嵌脸与短圆肢体；人物区分皮肤、发丝与衣料；熊保持物种辨识。完整轮廓、帽顶、手脚和足掌可见，没有把28个Draft计入新作。

原PNG在主体外有零星 alpha=1 的近透明像素（最大不透明度1/255），透明查看器可能把其未预乘RGB显示成鲜艳噪点。深/白底实际合成未见同强度色斑，不能把原生透明预览当作实际不透明图；也不宣称这些像素为alpha=0。记录保留原生成字节与阈值边界，全部新作仍pending。此项是人工工程初审，用户艺术确认另行决定。

## Characters 基础外观追加

2026-10-10：追加 `dots-lime-frog-bow@v1` 和 `dots-pink-heart-shades@v1`，当前总计15批准、9待审、24件原图与72件展示派生图。首批22张的派生记录保留，不改历史计数；两件新图的来源/alpha/提示词见 [制作记录](../../../../openspec/changes/simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/README.md)，当前登记以 studio-content.js / studio-display-assets.js 与154条build闭包为准。新增两件无Template，未进入默认查询。实际24件下载与透明统计见 [追加浏览器证据](../builtins-no-grid-20261010/browser/report.json) 和 [alpha回读](../builtins-no-grid-20261010/browser/download-alpha.json)。
