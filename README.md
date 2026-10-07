# Dot Icon Studio

高质量完整角色图库、可扩展 typed tags 搜索、多卡片随机发现、图片与对应 Prompt、参考图文字模板辅助。用户从首页专题或画廊筛选找到角色，或在首页弹窗／灵感游戏逐卡揭晓一张真实成品；详情直接复制 Prompt、下载原 PNG，或自行在 ChatGPT 附参考图继续创作。本站不选择、预览、分析或上传参考图片。

保留 Dots、Grok Bot、Meta Muse、人物、动物及已批准美术。五组是首批内容专题，当前 15 张成品不限制未来数量。Dots 新制材料保持柔软短绒，Grok Bot 为软几何与双胶囊眼，Meta Muse 为包覆式奶油形体与内嵌脸面。已批准的光滑紫色 Hero 与短绒图库资源之间的材质冲突保持待用户裁决，不据此改写原 PNG 或批准记录。5 张姿态候选尚未证实批准覆盖，保留而不发布；暂无真实动画或可安装 Dot/Pet 包。没有工作台、组装、项目格式、旧版兼容、3D、账户或公共上传。

底层事实为角色风格、外形、五官、配色材质、衣物、头部配饰、身体饰品、随身道具八类。随机卡固定为角色风格 → 外形五官 → 配色材质 → 衣物 → 配饰 → 道具；动作是独立变体，背景是资源规格。桌面一排六张 5:6 卡，手机突出当前卡并露出邻卡。抽取前/动画中无条件面板；结果后可展开 Feature AND 锁定用于下次抽取。结果复制 Prompt/下载图片为主操作；再随机/详情/ChatGPT 为次级操作。完整视觉合同见 [视觉与交互系统](design/studio-visual-interaction-system.md)。

## 本机运行

Node.js 20.19+ 或 22.12+，锁定 Vite 8.3.2。

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run build
npm test
npm run test:browser
npm run test:downloads
openspec validate --specs --strict
```

默认本机地址 `http://127.0.0.1:5173/`。浏览器脚本需要已有 Playwright 与 Chromium／Chrome；可设置 `DOTS_PLAYWRIGHT_MODULE` 为模块绝对路径、`DOTS_CHROME_PATH` 为浏览器可执行文件、`DOTS_BASE_URL` 为预览地址。测试不自动安装浏览器，不建立外部图像服务。

`test:downloads` 在浏览器检查后读取实际下载文件，核对全部原图尺寸、hash 和 alpha；目视与艺术确认单独记录。`build` 验证当前静态发布源码、同版模块图、资源 hash 与生产允许清单，不清空或重写 `dist/`。`dist/` 同时是可编辑源码和原 Sites 静态发布目录。

## 结构与合同

- `dist/studio-artwork-catalog.js`：Artwork／Asset／Prompt／TargetProfile 的登记引用与资格；变体只有核定同身份且已发布才显示。
- `dist/studio-tags.js`：typed Feature 与标签查询，同维 OR、跨维 AND 与关键词；结果后的必备 Feature 由 draw 引擎全部包含。
- `dist/studio-draw.js`：纯抽取、冻结结果、条件指纹袋去重；`studio-fullscreen-random.js` 是弹窗和游戏共用的多卡视图。
- `dist/studio-asset-loader.js`：可信资源、MIME／hash／尺寸／解码、取消和原字节下载。
- `dist/studio.js`／`studio-overlay.js`：三页与单活动 dialog、返回、筛选／滚动／焦点恢复。
- `dist/studio-detail.js`／`studio-reference.js`／`studio-actions.js`：直接操作、描述和条件式模板 Prompt、携带 Prompt 打开 ChatGPT及手动降级。
- `dist/assets/`：保留的原美术与来源；场景底色不等于透明角色原图背景。
- `historical-runtime/`：退出运行与发布的旧模块、工具、QA／未批准组件及旧规则原文，保留原字节；这些文件不再是新验收命令，也不标成通过。
- `openspec/changes/archive/2026-10-07-refocus-studio-on-gallery-and-card-reveal/`：已归档的产品重构合同、实施任务与附表。2026-10-07 按用户明确指令同步主规范并带 9 项未完成验收归档；详情见 [归档交接](openspec/changes/archive/2026-10-07-refocus-studio-on-gallery-and-card-reveal/archive-closeout.md)，不将未通过美术或设备检查改成通过。

参考图入口不处理图片文件，只根据用户描述、保留项和风格生成条件式 Prompt。点击后以 `https://chatgpt.com/?prompt=...` 带入输入框，并复制作备用；用户自行在 ChatGPT 上传图片、检查与发送。参考站和实际输入框已核实当前行为，不能保证外部入口永久或所有端一致。

图库展示／资源存在／源文件核验／实际下载／艺术批准／目标验证／线上发布分别记录。普通 PNG 不能标为已验证的 Dot/Pet 安装资源。目标端、格式和文档边界见 change 的素材目标附表与目录 TargetProfile。

## 验收与发布边界

cache89 的工程回归记录仍在 `design/acceptance/current-20261007-v89/`，保持历史原状。cache90 候选与视觉修订证据在 `design/acceptance/current-20261007-v90/`；这些文件不表示新页面已获用户艺术批准。桌面及 320／390／768 CSS px 是本地浏览器模拟视口，实体设备与目标实装单独验证。新页面必须由用户确认具体候选；旧 cache83 成品批准只继承原素材范围。

批准美术、来源、旧冻结证据和 `.openai/hosting.json` 原 Site identity 保持。旧记录与规则原文见 [历史 README](historical-runtime/docs/README-before-refocus.md)。Git 提交、Sites 保存、部署、访问权限修改和规范同步各自需要授权；此 apply 不自动执行这些操作。

Site39/cache88 的历史视觉退回修复见该归档 change 的 QA01–07，原记录保持原字节。Site41/cache90 的移动实机验收再次退回，当前修复见 change §8：六卡摘要 → 完整角色/名称简述 → 复制/下载 → 次级操作。普通动画与主动跳过先停好六卡，经 `awaiting-reveal` 边界再揭晓；Reduced Motion 只展示静态六卡，点击“揭晓伙伴”后才显示角色。每张作品登记六类独立 `revealVisuals`，生产不默认裁原PNG，缺图排除随机资格；候选示意的艺术状态仍待确认。

`npm run test:reveal-process` 记录同一390 CSS px视口的A–G关键帧、三条流程完整MP4与状态时间线，逐帧中间文件只在被忽略的临时目录中编码并移除。`npm run test:reveal-layout` 检查桌面及320/390/768布局。`npm run test:instant-random` 检查首页/画廊单击开场、慢网洗牌、减少动态以及详情返回。cache92新证据放在 `design/acceptance/current-20261007-v92/`，cache91及以前的证据保持不变；构建、资源读取与截图不能替代用户视觉或实体设备确认。

当前每条 Artwork 是一套事先制作、登记并批准的有限组合。颜色、形状、五官、衣物、配饰可以随新增完整作品扩展，但目录不自动承诺任意交叉搭配。实际15套组合及缺口见该归档 change 的 [有限组合表](openspec/changes/archive/2026-10-07-refocus-studio-on-gallery-and-card-reveal/planning/bounded-combinations.md)。首页与画廊随机按钮一次点击即开场，后台加载期间可以洗牌，最终结果仍须等同一套卡片和原图准备完成后揭晓；减少动态采用静态六卡和“揭晓伙伴”。
