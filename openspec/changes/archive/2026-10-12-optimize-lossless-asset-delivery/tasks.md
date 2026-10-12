# Tasks

## 1. 登记无损交付资源

- [x] 1.1 为可用的详情预览和 Template PNG 源建立独立 WebP 交付映射，精确记录源 path/hash/尺寸/byteSize 与派生 path/hash/MIME/尺寸/byteSize/alpha/lossless/解码 RGBA 证明；运行生成器并核对已批准 PNG 的源 hash 未变化。
- [x] 1.2 扩展资源校验，逐项验证 PNG/WebP 文件 hash、字节量、宽高、alpha/透明度、色彩配置与解码 RGBA 相等，并要求 `sourceOnlyFiles` 与映射源集合精确相等；运行 verify-only 与负例验证拒绝缺项、重复、错源和不等像素。
- [x] 1.3 为映射生成、源完整性和失败状态增加自动化检查，并记录资源登记文档；运行新增检查与现有资源清单校验。

## 2. 接入详情与角色调整加载

- [x] 2.1 让登记详情预览和 Template 图层使用自身 PNG 源映射的已验证 WebP，保持 Artwork/Asset/Template 身份、revision、purpose、图层顺序、锚点与遮挡关系；使用 `createImageBitmap(..., {premultiplyAlpha: 'none'})` 避免默认 alpha 预乘量化差异，并运行预览加载器测试覆盖成功、缺失、hash/MIME/尺寸/alpha 不符及过时响应。
- [x] 2.2 保留原图下载和 Export 的 PNG 语义：未修改 Export 与登记原 PNG 原始字节一致，修改后的 Draft 为透明 PNG；运行下载、编辑与透明输出检查，并核对 WebP 字节不会作为用户导出结果。

## 3. 分离源文件和静态交付闭包

- [x] 3.1 将 PNG 图层源保留在仓库源闭包，并只把拥有经验证 WebP 派生的 PNG 预览/Template 图层登记为 `sourceOnlyFiles`；原图下载或未修改 Export 所需的 PNG 仍列入静态交付集，运行构建清单检查验证 `files`、映射源和 `sourceOnlyFiles` 的集合关系。
- [x] 3.2 从核验后的交付清单生成全新 `.artifacts/` stage；回读 `stage/dist/` 文件路径、字节量、SHA-256 并与 `files - sourceOnlyFiles` 完全比对，验证 staging 不会覆盖现有目录或改写仓库 PNG。

## 4. 集成验收

- [x] 4.1 运行 `npm test`、`npm run test:delivery`、`npm run test:browser`、`npm run test:downloads`、`npm run test:editing` 与 `npm run build`；记录代码、清单版本、浏览器环境、覆盖文件数和失败项，所有发布闭包 blockers 均已解决。`test:browser` 的页面、对比度、布局三项子检查分别执行；无损像素验证使用 v101 记录，其 356 组图片字节在 v102 中保持相同。
- [x] 4.2 在实际页面中打开代表详情与编辑器，核对透明预览、正确图层层序、错误资源安全状态及原图/PNG Draft 导出；将浏览器实际交互观察与自动测试结果分开记录。

## Workflow follow-up

- 全部实现与验收任务完成后，先核对候选主规范与本 change delta，再按项目流程同步并归档此 change。
- 归档前通过本 change 的精确静态交付 stage 发布已授权站点，并单独记录 stage、部署和线上回读证据。
- GitHub 源码提交与站点发布分开执行；按已授权范围提交源码并核对远端分支 SHA 和历史链完整性。
