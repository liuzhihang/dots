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

## 本地完整验收与用户反馈修复（2026-10-13）

在 macOS 本地解除上述云环境阻塞，验收基于 PR head `dd383fbc98dbeae1158bcb90828ab8019e03336f` 加本轮修复。以上历史记录保持原文；本节记录当前结果。用户明确授权全部本地验收通过后合并 PR #4，并按静态发布清单部署至现有 dots Sites，随后完成线上交互和 PNG 复验。

本轮修复语言和排序 select 的重复箭头、文字空间及焦点框；选项卡片改用短提示，完整恢复步骤位于整行。默认耳机到 Cloud 会提示先手动选择无配饰；搜索仅遍历已有合法配方，中间状态均合法，不自动修改草稿。关闭、返回、Esc、图库与页面离开直接退出编辑，重开为默认配置；切换其他作品或版本仍保留草稿保护。

- `npm test`、`npm run build`、`npm run verify:release-safety`、OpenSpec 主规范校验和当前 change 严格校验均退出 0。44 模板、540 配方数量不变；5015 次选项解释、540 次渲染、3498 个 loader 引用及 history 4 项通过。
- 最终 `npm run test:browser` 退出 0：20 项主检查、21 张主流程截图、88 次 PNG 导出；双语五视口布局 528 项、880 张截图。对比度 4807 个目标通过项目阈值，最小 3.49:1；不宣称全部达到 4.5:1。
- 最终完整 `npm run test:editing` 退出 0：44/44 模板、540/540 配方通过真实 UI clipboard 与 PNG 导出，所有配置画布/PNG hash 匹配；20 次循环和 20 个过期消费者取消，销毁 pending fetch 1 次请求/1 次中止，销毁后 pending、leases、objectURLs、bitmaps 均为 0。A→B→A、失败重试、延迟结果及 dirty 退出复核通过。最终完整报告的请求、HTTP、console 错误均为 0。
- 透明输出检查通过 44 原图及 44 修改草稿的下载、源快照 hash 和真实 alpha；delivery 356 个独立图像对、412 个源码路径解码像素一致。performance 桌面冷/热、移动限速冷/热共 20 个样本通过。
- 内置 Browser 实际点击并用 Home/End/Enter 提交语言、排序；Cloud 按提示选择无配饰后可选，切换语言保留草稿；dirty 关闭无 JS dialog，重开为默认配置。桌面、390px 与 320px 标题栏无控件重叠或横向溢出，控制台错误和警告为 0。自动化原生 selectOption 仅验证状态处理；Chromium 155 自动键盘菜单无法提交 change 的限制，由上述内置 Browser 键盘检查独立补足。

前次长流程尾部曾把主动取消的 WebP 请求列为失败。已补充请求发起阶段及 fetch/body 完成观测，只有同阶段、完整 URL 相同且 signal 中止后以 AbortError 拒绝的请求才逐条匹配；HTTP、console 和未知请求失败继续严格失败。独立只读审查通过，最终完整重跑未出现这些取消失败，无需匹配放行。参考详情测试同时修正为等待可见分类，隐藏分类仍保持按需加载。

临时证据统一位于 `.artifacts/pr4-20261013/`：`engineering/final-*`、`final-browser/`、`final-editing-rerun/run-2026-10-13T01-22-06-820Z/`、`final-delivery/report.json`、`final-performance/report.json`、`builtin-browser-acceptance.json`。最终发布目录为 `final-stage/`，496 个应用文件、235921793 字节；412 个仅保留源码的 PNG 排除于发布包，源码原件保持不变。发布包另含 hosting 配置，逐文件 hash 一致。

本地合并门槛已通过；合并与线上发布证据随后单独记录，不用本地结果代替线上验收。未进行实体手机或新的人工美术批准。素材、模板配方、approval、冻结历史、hosting、依赖及 lockfile 均未修改；change 保持未归档，未同步主规范。
