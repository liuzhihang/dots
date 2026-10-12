# 验证记录

基线：main 4991ab838ac6728777ce259b7b897f7da42de0d7。2026-10-12 在云工作区验证；未创建或复用 Codex 任务，未发布或合并。

## 已通过

- `npm run test:recovery`：44 模板、540 条合法配方数量不变；5015 次选项解释验证；每条建议路径的中间状态和最终配方均合法。独立审查额外检查 831 次恢复步骤，无不可达中间状态。
- Node 模拟编辑器：可见分类按需请求、503 缩略图仍可选、单项重试不触发主渲染或改变 revision、分类取消不记失败、新主预览抢占可选请求、旧结果不覆盖、语言切换保留草稿和分类、最新主预览失败保留旧画布且 exportPNG 返回 false、主重试恢复、销毁清理。
- `node --test scripts/browser-runtime.test.mjs`：7 项通过。
- 独立执行 `verify-artwork-catalog`、`verify-artwork-query`、`verify-motion`、`verify-publish-inventory`、`verify-router`、`verify-edit-templates`、`verify-preview-loader`：全部通过。
- `npm run build`：静态源码、资源闭包、hash 与批准记录通过。该脚本的 deploymentReady 字段不等于本 PR 已完成真实页面验收或获准发布。
- 修改的 JS 语法检查与 `git diff --check`。
- `openspec validate improve-studio-option-recovery --strict`。

## 已尝试但阻塞

- 完整 `npm test` 在浏览器依赖阶段受本地 Playwright CJS launcher 解析限制；显式选择 Playwright `index.mjs` 后 Chromium 启动仍受 `socket() Operation not permitted` 环境限制。没有用忽略安全约束或模拟结果冒充通过。
- 独立云浏览器正常访问本地 Vite URL 返回连接拒绝，未配置隧道、改网络或部署站点绕行。
- 因此真实浏览器的选择框键盘交互、桌面/手机视觉、透明 PNG 像素、Prompt 集成竞态与下载验收尚未完成。已更新相关浏览器脚本，需在可运行环境补跑；任务 4.2 保持未勾选，PR 保持 Draft。

## 范围保护

原图、缩略图源、模板数据、合法配方、approval、冻结历史、hosting、OpenSpec 配置、依赖版本与 lockfile 均未改动。没有补充任何角色或组合素材。缩略图仍来自现有图层，本轮减少隐藏分类加载与请求竞争，不宣称单张资源体积下降。

## PR 审查修复：模态内语言控件（2026-10-12）

外部审查确认先前 select 留在 inert 的 pageShell 中，编辑中不可操作。已改为同一 select 在 overlay 打开前进入标题栏，所有关闭和打开失败路径恢复原位；修正标题栏旧三列 CSS，明确四列同行。

- 删除语言回归里直接赋值并 dispatch change 的绕过方式；改为模态内位置、无 inert 祖先、实际点击/焦点/键盘检查。
- 增加 Close/Escape/Back/history 重复开关和多视口标题栏同行、不重叠、无溢出用例。
- 新增 Node 模拟 overlay 生命周期测试，覆盖唯一节点、焦点范围、拒绝退出、原生 close、打开抛错和 destroy；模拟测试通过，不等同真实浏览器交互验收。
- 真实浏览器仍受同一环境限制，4.2 仍未完成；没有借测试绕过宣称模态交互已通过。

## PR 审查修复：Escape 测试的原生菜单前置状态（2026-10-12）

本次修复基于 `28f4659540cf86295372790aac58a0bbb22efe65`，只修改浏览器测试和本验证记录，不修改产品的 Escape 行为、运行时代码、素材、依赖或配置。

- 生命周期用例保留 Back → Tab 的焦点可达检查；先按 Space 打开原生语言菜单，再通过 Home / ArrowDown / Enter 选择并确认。新增 `:open` 断言，分别确认菜单确已打开、确认后确已关闭，再执行一次 Escape 关闭 dialog；不派发模拟 change，也不以第二次 Escape 掩盖前置状态错误。
- 独立运行 `node --check scripts/verify-studio-browser.mjs`、`node scripts/verify-overlay-language-state.mjs` 和两项文件差异的 `git diff --check`，均通过。测试原文、overlay 源码及原验证记录的 Git blob SHA 已与基线校验一致。
- 使用已安装的 Playwright Node API 与 Chromium `144.0.7559.96` 做离线 DOM fixture 定向回归：原始按键片段在 1440×900、390×844 两个视口均复现一次 Escape 后 dialog 仍打开并等待超时；直接提取修复后的测试按键片段执行，在 1440×900、1206×1257、768×1024、390×844、320×700 五个视口分别验证 Escape / Close / Back / 原生 close，共 20 项通过。验证了键盘产生的可信 change 事件、焦点、同一语言节点恢复及无控制台错误。
- 证据边界：本轮 fixture 使用基线原始 overlay 模块，但 DOM、样式和语言文本更新为测试夹具；没有启动完整 Dots 应用，不代表真实 Draft / Prompt / history 路由、完整布局、美术、PNG 或下载验收通过。本轮容器无法解析 GitHub，浏览器访问本地服务器还受到 `ERR_BLOCKED_BY_ADMINISTRATOR` 限制，未修改策略或使用网络绕行。
- 完整 `npm test`、`test:browser`、`test:editing`、focused race 与 PNG 下载集成未在本轮执行；原任务 4.2 保持未勾选，PR 保持 Draft，change 未归档，不合并或部署。定向回归脚本、日志和截图作为本轮对话附件交付，不写入发布树或冻结历史。
