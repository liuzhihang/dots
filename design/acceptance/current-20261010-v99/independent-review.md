# v99 独立交互与生命周期复查

## 结论

复查发现并修复了一个快速连续浏览器回退竞态：用户在未保存 Draft 时连续按两次 Back 并取消离开确认后，地址栏和 `history.state` 会落到图库条目，但 CharacterStudio 仍打开且内部路由仍指向详情。当前取消逻辑按原详情的 hash/index 保存恢复目标，在下一帧读取真实 `history.state.dotsIndex` 并校正历史位置；图库条目不通过 `replaceState` 伪装覆盖。复验通过。

本次范围内没有其他未解决的实现缺陷。当前生产 catalog 没有已登记的 `variantGroupId`，因此真实作品的变体切换分支尚无生产样本；该路径由隔离 fixture 验证，不能据此宣称生产变体可用。未执行最终 build 或部署，待 root 汇总素材 manifest 后运行。

## 复查范围

检查了 `dist/studio.js`、`dist/studio-detail.js`、`dist/studio-overlay.js`、`dist/studio-editor.js`、`dist/studio-renderer.js`、`dist/studio-draft.js`、`dist/studio-preview-loader.js`、`dist/studio-asset-loader.js`、`dist/studio-router.js` 与 `scripts/build-studio.mjs`。

重点覆盖同一 CharacterStudio 的 View/Edit、脏状态离开确认、详情/相关作品切换、快速历史回退、异步 Prompt 与语言切换、变体 fixture、原图下载快照、编辑渲染 revision 与资源释放，以及 QA helper 对 Sites 发布闭包的影响。

## 修复与证据

- `dist/studio.js` 保存被取消导航的目标 hash 和 `dotsIndex`，将并发历史事件合并到 `requestAnimationFrame` 后按当前真实 index 校正。历史事件在恢复中到达非目标条目时会继续校正，不再仅因 `restoring` 标志而忽略。接受 UI 退出后清除恢复目标。实现见 `dist/studio.js:17-28`、`dist/studio.js:56-80`。
- 首次复现步骤：打开 `candidate-dots-20261005`，在 Remix 中输入非空内容，然后执行 `history.back(); setTimeout(() => history.back(), 0)` 并取消出现的 `confirm` 与 `beforeunload`。旧实现的最终状态为 `hash=#/`、`dotsIndex=0`、overlay 仍打开；此时 Forward 又因 hash 与内部 `currentHash` 相同而不触发路由更新。
- 新增 `scripts/verify-studio-history.mjs` 并接入 `npm test`。使用本机 Playwright + Chrome 的本地 Vite 页面验证 7 条路径：单 Back 取消、双 Back 取消、dirty Back 的 popstate 中立刻排队 Forward 后取消、接受 Back 后 Forward、dirty Back 的 popstate 中立刻排队 Forward 后接受、dirty detail→真实 Guide future entry 的 Forward 取消/接受、接受 overlay Close。当前七条均通过；取消路径断言详情 URL/index、面板和原 Draft 文本保持一致，接受路径断言被关闭的 Draft 不会复活。
- 对异步关闭去重再次复验：在 dirty 详情中同步点击两次 `#overlayClose`，结果为一条 `confirm`、`hash=#/`、`overlay.open=false`、图库 `dotsIndex=0`。关闭锁在接受异步历史导航后保持到面板实际关闭，取消才允许重试，见 `dist/studio-overlay.js:60-68`。
- `npm test` 完整套件最后一次退出码为 0，覆盖 catalog/query/reference-detail（18 项）、motion（8 项）、publish inventory、router、history 当时的 6 项、编辑模板、Draft/renderer、preview loader、character extension 与 implementation safety。完整日志在 `/tmp/dots-v99-npm-test-history.log`；执行时间为 2026-10-10 19:25:45–19:26:01 +08:00。随后按审阅要求新增真实 dirty Forward future-entry 场景，新增后的 history focused 测试共 7 项并再次通过；完整 `npm test` 的 7 项版本待 root 最终重跑。首次运行曾因 reference-detail fixture 将未显式返回 `false` 的关闭回调视作可重试而失败；fixture 已改为明确返回取消状态，并增加已接受关闭只能调用一次的断言，随后整套通过。

## 其他审阅结果

- `studio-detail.js` 在详情打开时同步显示注册 poster 与可用操作，再异步读取高清预览；关闭或换作品会递增 session token、abort 未完成预览并释放 lease。迟到的预览结果会释放自身 lease，不会覆盖新作品。
- Prompt 请求同时按详情 session 和语言 request 序号验证成功与失败回调；旧语言请求的迟到失败不能覆盖新语言成功状态。原图下载闭包捕获点击时的 Artwork record，并由 source loader 校验登记的 PNG 字节、尺寸与 SHA-256。现有 reference-detail 测试还以延迟网络响应验证切换角色后仍下载点击时作品的原始字节。
- 变体请求按 request/session token 校验，过期预览 lease 会释放；异步失败保留当前作品。自动化仅用两件隔离 fixture 覆盖失败和成功切换。production catalog 当前零变体组，因此未观察到真实变体样本。
- 编辑器只在最新请求 revision 等于最新渲染 revision 时开放导出；失败或待处理结果不可导出。导出基于冻结的成功渲染快照，Cancel 清 Draft 并回 View，Reset 保持 Edit。renderer 和 preview loader 的测试覆盖图层缺失、迟到结果、lease/cache 与 bitmap/object URL 释放。
- `scripts/build-studio.mjs` 只将 `dist/` 树与发布 manifest 做精确闭包比对，并从 `dist/index.html` 遍历其运行时模块；`scripts/` 下的 QA helper 不会被纳入 Sites。其最终 build 本轮按 root 安排暂缓。

## 验证边界

浏览器 skill/plugin 在当前会话不可用，所以按已安装依赖使用本地 Playwright + Google Chrome；未访问线上 Sites，也未在实体手机上验收。本报告只记录本地代码与浏览器证据，不代表美术批准或部署就绪。
