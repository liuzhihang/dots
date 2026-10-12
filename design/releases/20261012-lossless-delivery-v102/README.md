# 全角色图库无损交付 v102

本次延续全角色图库发布授权，增加无损 WebP 传输，保留已批准 PNG 源、原图下载、透明 PNG 调整导出和全部角色身份。图库内容继续使用 v100 的 44 件 Artwork、44 套 Template 和 540 个合法组合；v102 是代码与交付缓存版本。

[生产站点](https://dots.liuzhihang.chatgpt.site) 已发布为 Site 50 / v102，部署状态为 `succeeded`。精确部署、打包 hash 和被替代的 Site 49 回执见 [site-result.json](site-result.json)。

## 资源与交付

- 412 条 PNG 源映射到 356 个去重 WebP；356 组原始 RGBA 字节与浏览器 Canvas 像素对比均相同，见 [无损校验摘要](lossless-verification.json)。
- 仓库 `dist/` 精确保留 908 个文件；独立交付 stage 为 496 个文件，排除的 412 张详情/图层 PNG 留在源码中。原图导出所需 PNG 仍在交付目录。
- Sites helper 加入与受保护源文件相同的 hosting metadata 后，上传包有 497 个文件；gzip 包为 231,727,160 字节（220.99 MiB），低于 256 MiB 上限。打包校验将 helper 生成的 metadata 与应用静态清单分开核对。
- 用户批准记录、模板来源清单、全部源 PNG 和受保护配置的 513 项 SHA-256 保持不变；未改写历史批准或既有归档。

## 托管兼容

Site 49 的文件部署成功，但线上 WebP 返回 `application/octet-stream`，原有严格响应 MIME 检查使详情安全降级并禁用导出。v102 仅为已登记 WebP 接受该通用传输类型：字节量、完整 SHA-256、RIFF/VP8L 与尺寸校验通过后，才把 Blob 规范为 `image/webp` 用于解码。错误类型和错误字节仍被拒绝；这项处理不放宽 PNG 源合同。

## 验证与归档

- `npm test`、构建、44 个角色的 540 个合法调整组合、44 次原图及 44 次调整 PNG 下载、528 个双语布局案例和 4,808 个对比度目标均通过，见 [qa-summary.json](qa-summary.json)。`test:browser` 的页面、对比度和布局子检查分别执行，未把它记录为一次整套命令运行。
- 内置 Browser 实际打开生产图库和蓝帽云团详情，选择无配饰并导出透明 PNG；控制台无相关错误，下载的 1254 × 1254 PNG alpha 范围为 0–255。见 [线上交互记录](production-browser.json) 和 [实际页面截图](production-character-adjustment.jpg)。
- 无损交付 change 的 9 项任务已完成，6 份主规范已同步并复核，归档在 [2026-10-12-optimize-lossless-asset-delivery](../../../openspec/changes/archive/2026-10-12-optimize-lossless-asset-delivery/)；[归档回执](archive-result.json) 保留逐文件 hash。[规范同步审计](spec-sync-audit.json) 分别核对 delta、原有 Purpose 和未提及场景。全部 11 份主规范通过普通验证；既有说明长度警告仍保留。

## 重现

```sh
npm test
npm run build
npm run test:delivery
node scripts/stage-static-publish.mjs .artifacts/my-new-publish-stage
DOTS_QA_DIST=.artifacts/my-new-publish-stage/dist npm run test:downloads
DOTS_QA_DIST=.artifacts/my-new-publish-stage/dist npm run test:editing
npm run test:browser
npm run verify:release-safety
```

`generate-lossless-delivery.py --verify-only` 需要带 Pillow 的 Python，可校验全部源/派生 RGBA、alpha、ICC、hash 和清单；不重写任何源或交付图片。本轮使用已安装的 Codex bundled Python 3.12.14、Pillow 12.3.0 与 libwebp 1.6.0，没有新增依赖。生成器负例已验证错误像素、重复和缺失映射均被拒绝。

工程、浏览器、部署与 Git 回执分别记录；真实手机、ChatGPT 生图与 Pets 上传未作为本轮已验证结果。
