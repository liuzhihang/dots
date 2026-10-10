# 透明玻璃与直接编辑

本轮基于用户提供的 botpfp 三张截图，实现透明玻璃 CharacterStudio、分类标签和即时预览。标签仅分组现有模板的 Color、Eyes、Glasses、Accessory 能力；不新增 View/Edit 模式或额外素材能力。

## 本地查看

- [Dots 编辑审阅](http://127.0.0.1:5182/__dots_review__/#/artwork/candidate-dots-20261005?v=v2)
- [Grok 编辑审阅](http://127.0.0.1:5182/__dots_review__/#/artwork/candidate-grok-20261005?v=v2)
- [桌面 Dots](visual/1440x900-en-edit-dots.png) · [桌面 Grok](visual/1440x900-en-edit-grok.png) · [静态详情](visual/1440x900-en-static-muse.png)
- [390px 中文手机界面](visual/390x844-zh-CN-edit-dots.png) · [320px 手机选色](visual/interaction-320x700-dots-warm-yellow.png)

外部审阅服务由 `npm run dev:review` 启动。两套模板仍为 pending，仅审阅入口显示编辑控件；公开资格不变。公开无模板作品保留完整静态详情、Prompt 和原字节下载。

## 行为

- 可编辑作品打开后自动载入真实图层。点击颜色或图层缩略图立即请求同一画布更新；切换分类本身不修改 Draft、session 或 revision。
- 标签支持 ArrowLeft/ArrowRight、Home/End、Enter/Space，只有当前分类参与选项交互。Reset/Cancel 在原界面恢复模板默认。
- 最新渲染进行中或失败时，保留上一份成功预览并明确显示状态；当前配置 Prompt 与 PNG 导出只使用最新成功 revision。
- 原图、原 Prompt、原描述和原 tags 收在原作折叠区；不把原始配件描述冒充编辑后的事实。导出不改变原图，也不清除 dirty 状态。
- 页面透明素材保持无棋盘格，缩略图为纯色底；玻璃背景只属于界面，PNG 保留 alpha。
- 手机将预览保留在上方、选项在下方滚动；不支持 blur 或降低透明度时使用实底降级。

## 证据边界

[参考记录](reference/interaction-reference.json)保存三张用户截图及来源。参考站 HTML 读取成功，交互浏览访问超时；未声称复核过参考站的在线交互。实际实现通过本地页面检查。

最终命令结果、四视口双语截图、28 配方和两套实际导出旅程由本目录验收文件记录。历史 no-grid 与 View/Edit 证据不作为这次分类标签或玻璃效果的验收。

[最终汇总](final-summary.json) · [实际测试命令](verification-commands.json) · [源码哈希冻结](source-freeze.json) · [OpenSpec 进度](openspec-apply-final.json)。

本次 9.1–9.3 均完成，当前 change 为 48/49；7.4 用户美术确认保持未完成。

已通过的自动检查：

- `npm test`：目录、查询、路由、历史、模板、Draft、renderer、缓存、扩展与保护检查。
- [真实编辑旅程](editor/run-2026-10-10T13-47-55-623Z/report.json)：12 Dots + 16 Grok 配方，20 次快速编辑循环，迟到回调/失败重试/关闭取消，Dots/Grok 各一次真实导出与原字节下载。
- [实页检查](browser/final-2026-10-10T1405/report.json)：15 项检查、25 张截图、24 件原图实际下载；[PNG 回读](browser/download-alpha.json)验证尺寸、登记的 RGB/RGBA、alpha 和精确 hash。
- [玻璃对比度](accessibility/final-2026-10-10T1405/contrast.json)：296 个文本目标采用实际 Chrome 前景/透明文字背景配对截图取样，最低 5.57:1。
- [最终布局](editor-layout/final-2026-10-10T1405/report.json)：2 套模板 × 4 个视口 × 2 种语言，48 张截图；分类键盘操作、选项完整可见和命中、预览完整及滚动后导出可达。
- [最终视觉](visual/report.json)：24 个页面组合及真实改色、透明缩略图、降低透明度/动态效果、无 blur 模拟降级和关闭弹窗均通过，控制台错误为 0。
- [性能](performance/report.json)：受控桌面冷开中位数约 6ms、受控慢网手机冷开约 24ms；20 次开关与资源释放完成。这不是实体手机或现场 INP。
- `npm run build` 及 OpenSpec change/all strict 通过。[最终构建回读](build-readback.json)确认 154 条发布路径、所有素材和 28 份配方 PNG 字节不变。

原 15 件批准素材和全部 PNG 图层不变。7 件新作品、两套模板的默认重建/28 组合及当前页面继续等待用户艺术确认；工程检查不授予批准。未提交、推送、部署、修改站点访问设置或执行 OpenSpec sync/archive；实体设备和其他浏览器不在本地 Chromium 结果之内。
