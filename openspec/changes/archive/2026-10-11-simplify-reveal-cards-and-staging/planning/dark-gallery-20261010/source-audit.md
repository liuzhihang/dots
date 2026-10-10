# 本地源码与资源审计

审计基线：2026-10-10，`main` / `b84e3db203a525755a839c100ec5bca8238f3fa3`，OpenSpec CLI 1.14.1、`spec-driven`。源码快照来自 `baseline.json`；该快照在本规划包写入前记录为干净工作树。本审计只读现有业务代码和资产，并对两组模板原图及 Gallery poster 执行只读字节数/SHA-256 复核；没有运行 build、test、浏览器或网络操作，因此不提供真实耗时、INP 或现场性能结论。

## 当前实现与产品边界

当前可运行源码就在 `dist/`：`vite.config.mjs` 将 Vite root 指向 `dist`；顶层 `src/` 没有文件。`dist/` 同时承载可编辑 ES module 和 Sites static directory，不能作为普通构建输出整体删除。当前页面版本为 v98，`package.json` 锁定 Vite 8.3.2，项目未使用框架或后端。

`dist/index.html` 和 `dist/studio.js` 当前有独立的 `#/home`、`#/gallery`、`#/guide` 页面。首页依赖 `studio-home.js` 与 `studio-scenes.js` 加载满屏露台图和热点；Gallery 是另一套浅色网格。Artwork 通过 `studio-overlay.js` 的原生 dialog 打开 `studio-detail.js`；该现有 dialog 可以保留为共享 Studio 的外壳，但页面和状态需要改成 Gallery → 同一 CharacterStudio 的 View/Edit。当前 i18n 有 `en`、`zh-CN`，静态内容目录列五种 series 和15件已批准 Artwork。

`dist/studio-artwork-catalog.js` 将15件作品与 v83 批准记录、原图 SHA-256 和透明像素信息绑定；两件本地 preview 候选单独记为 pending。当前活跃的 Dots/Grok 样本可用作模板身份基准：

| 模板候选 | 活跃批准 Artwork | 实际原图 | 当前登记事实 | 不能由现有记录推出的能力 |
|---|---|---|---|---|
| Dots | `candidate-dots-20261005@v2` | `dist/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png`，1,720,054 bytes，1254×1254，SHA-256 `2f680b276f76c2a1c6faeb7d496f16a41327f1186bca27d0acf5197997309455` | 蓝色短绒圆球、一对黑色椭圆眼、贴合式头戴耳机；无嘴、无肢体。对应小尺寸 Gallery poster 为 53,964 bytes。 | 不能摘除耳机、改变眼睛/形状、加眼镜或使用任意配件；没有独立图层、mask 或无耳机基底。 |
| Grok Bot | `candidate-grok-20261005@v2` | `dist/assets/characters/grok-bot-purple-orb-candidate-v2.png`，971,168 bytes，1254×1254，SHA-256 `e4730f2957d64b8b2b7eb49c09a21f7a9c1ea352870bd2bf4c0649c7eeec0874` | 紫色柔和几何球形、一对平行倾斜的白色胶囊眼；无嘴、无肢体、无配饰。对应 Gallery poster 为 19,620 bytes。 | 不能重塑、换眼、加眼镜或加配件；没有独立眼睛层、body mask 或调色图层。 |

`dots-rose-glasses`、`dots-lilac-bucket`、`grok-green-cloud`、`grok-teal-square` 也是不同的批准完整 Artwork，原图分别位于 `dist/assets/looks/`。眼镜、帽子、云形和圆角方形是这些成品中已经烘焙的外观，不能将其当作可互换组件或同一 template 的合法状态。

当前 `dist/assets/` 没有发布中的 `poses/`、`atelier/`、`reveal/` 或可用于受控编辑的拆分 PNG/mask；`dist/assets/posters/` 的 WebP 是派生缩略图，不是可编辑或导出的角色层。当前静态发布清单还包含两件 pending companion PNG 与三张 pending terrace WebP：`dist/assets/companions/v98/animal-white-rabbit-v98-studio-candidate.png`、`dist/assets/companions/v98/robot-ivory-capsule-face-v98-studio-candidate.png`、`dist/assets/terrace/v98/terrace-fullscreen-{desktop,mobile,tablet}-v98.webp`。它们列于 `previewOnlyFiles`，但仍是 static directory 的文件。重构保留白兔和白色胶囊脸机器人的独立 `PREVIEW_*` 身份、pending 状态与同一受信任详情路径；机器人不改标为 Grok，二者不进入默认 Gallery、搜索或 tags。只有 terrace scenes 从活动运行/发布闭包退役，并保留其 hash、来源与 v98 验收记录。不要把 `previewOnlyFiles` 解读成域名拦截或部署隔离。

`historical-runtime/retired-assets/` 中能找到旧 Dots 无耳机整图、Dots/Grok wink 整图和旧 SVG 候选；它们是历史材料，不是当前 template 层资源。`design/acceptance/current-20261007-v87/asset-retirement.json` 明确记载 Dots 无耳机基底未列入 v83 `registeredLooks`、未获批准；Dots/Grok wink 也明确是未批准 pose 候选。`historical-runtime/retired-assets/reveal-svg-v1/retirement.json` 把旧 SVG 记录为 `oldArtApproval: pending`、`displayOnly: true`，替代原因为立体 PNG 候选；历史浏览器截图与 Canvas 输出仅是 QA 证据。新实现不得把这些归档截图或待审 SVG 当生产组件、批准素材或默认能力，也不需要恢复其旧 schema、项目保存或组合 UI。

当前作品目录定义 `getVariants()`，但没有任何 Artwork 实际登记 `variantGroupId`；当前目录也没有已登记的动画资源或动作包。`studio-motion.js` 提供播放协调器，当前入口只设置减少动态和详情打开原因，没有登记任何动画实例。因而“保留真实已有变体/动画”在本基线下的真实数量是零；只有重新核实到现行批准目录资源后才能展示变体/播放控件。

## Dots 与 Grok 代表模板的素材缺口

选定的能力集合是完整有限编辑闭环，不是“先只开放 body palette”。下面是规划范围，不表示已有素材或模板已 ready；完整层级、28 个合法配方及美术覆盖要求见 [template-capability-matrix.md](template-capability-matrix.md)。

| 模板 | 身份基准 | 选定范围与当前素材缺口 |
|---|---|---|
| Dots `dots-orb-v1` | `candidate-dots-20261005@v2`；固定蓝色短绒球体、双椭圆眼、耳机基准、无肢体。原图 1254×1254 保留不变。 | 2 色 × 2 静态眼型 ×（无耳机时无/圆眼镜两态，或保留耳机）共 12 个合法配置；眼镜与耳机的 4 个组合明确冲突。需要新制无配件基底、body color mask + shading、原/闭眼层、圆眼镜前后层与遮挡、耳机前后层与遮挡。 |
| Grok `grok-orb-v1` | `candidate-grok-20261005@v2`；固定紫色软几何球体、成对倾斜胶囊眼、无配饰、无肢体。原图 1254×1254 保留不变。 | 2 色 × 2 静态胶囊眼型 × 无/圆眼镜 × 无/软帽共 16 个计划配置；帽+眼镜仅在 Grok 专用前后层及遮挡通过美术验收后成立。需要无配件基底、body color mask + shading、两套眼层、专用圆眼镜与软帽前后层和遮挡。 |

两模板计划使用 `dist/assets/templates/dots-orb-v1/` 与 `dist/assets/templates/grok-orb-v1/` 下的新资源，目标画布 1024×1024（制作锁定前为计划值）；这是不同于已批准 1254×1254 原图的新模板输出尺寸，不能覆盖或重编码原图。现有完整成品、poster、历史无耳机图和 pose 候选都不能替代拆层素材。模板必须登记静态文件用途、尺寸、SHA-256、alpha、anchor、layer order、recipe revision 与组合批准范围。Draft 只在本次浏览器会话中存在；合法修改须真实改变预览，屏幕预览和透明 PNG 导出共用 renderer recipe/revision；原 Artwork snapshot 与批准原图 hash 保持不变。任何缺基底、缺图层或不兼容组合都必须拒绝并说明原因，不能悄悄丢弃用户选择。

## 详情加载调用链与慢点

下面是当前代码可证明的调用次序，不代表实际加载时间：

| 阶段 | 源码证据 | 当前行为与阻塞点 |
|---|---|---|
| 点击角色并打开面板 | `dist/studio.js:59-70`；`dist/studio-overlay.js:99-120` | `openArtwork()` push 详情 URL；`renderRoute()` 先同步打开共享 dialog，再调用 detail controller。面板外壳可以立即出现。 |
| 同步写入元数据 | `dist/studio-detail.js:619-676` | 同步解析本地 snapshot、标题、描述、标签、facts 和 variants，并显示“正在载入”。但根状态是 `loading`，原始复制、ChatGPT 和下载按钮被禁用。 |
| 同时加载封面与 Prompt | `dist/studio-detail.js:678-707` | `Promise.all([imageTask,promptTask])` 同时等待图片和 Prompt。即使本地 Prompt 已可读，完整图片任务仍决定何时继续 render/启用下载；image 成功后才把 `lease.url` 放入 `<img>`。 |
| 普通查看完整原图 | `dist/studio-detail.js:484-500` 调用 `dist/studio-asset-loader.js:95-127` | `fetch(..., cache:'no-cache')` 拉完整原图，读取 Blob；检查 PNG/MIME/登记尺寸/字节数/alpha 条件；`arrayBuffer()` 解析头部，再对完整 Blob 读一次 `arrayBuffer()` 做 SHA-256；创建 `ImageBitmap` 解码后关闭；然后建立 object URL。detail 又在 `loadVerifiedImage()` 对同一 URL 再用 `Image.decode()` 一次。Dots 示例每次 1.72 MB，Grok 示例每次约 0.97 MB；这是普通打开的前置工作。 |
| 操作按钮可用 | `dist/studio-detail.js:697-707` | 图片与 Prompt Promise settle 后才 render 图片；不论图片是否成功，下载按钮在 Promise 汇合后才启用。图片错误仍能保留文本，但操作等待过程没有解耦。 |
| 下载原图 | `dist/studio-detail.js:838-852`；`dist/studio-asset-loader.js:130-148` | 用户点击后 `downloadAsset()` 再次调用 `loadAsset()`，进行另一轮完整 fetch、字节检查、SHA、decode，再以 Blob URL 下载并在 finally dispose。普通查看与下载没有复用加载结果。 |

已有并发保护：打开新 Artwork 会递增 `sessionId`、abort 前一 `imageController` 并释放前一 `imageLease`；关闭会 abort、释放 lease、清空 view state；预览 loader 在读取后和图片解码后核对 abort/session token，并释放迟到 lease；variant 有 `variantRequest`、token、每个 variant 的 AbortController 与 stale-response 检查；相同 controller 中 `variantLoading` 阻止并发点击。已创建的 Blob URL 由 lease `dispose()` 幂等撤销。上述保护不等于资源缓存或请求去重：`loadAsset()` 无共享 in-flight Promise、无按 asset/version 缓存或解码缓存；`cache:'no-cache'` 要求重新验证；切换时 `subtle.digest()` 本身不能被 AbortController 中断，但其结果完成后会再检查 signal。重复详情、重试或随后的原图下载均可能重读资源。实际并发时序仍需浏览器验证。

### 新链路应如何拆分与验收

1. 打开同一 CharacterStudio 后，先同步展示 poster、标题、已登记事实和当前可用操作；按钮的可用条件只依赖对应操作本身。不要把全尺寸原图下载、SHA 或 decode 放入显示文字、复制 Prompt 或进入 View 的 barrier。
2. Poster / 浏览器高分辨预览 / 编辑模板图层 / 原图下载分别按需加载。初始封面可用目录中的小 WebP poster；进入 Edit 时才 import 编辑器和加载对应 template assets；显式原图下载始终读取原 PNG 原字节。
3. 复用同一版本化、同源资源请求时合并 in-flight read/decode；每个使用者拿独立取消订阅或引用计数，单个面板关闭不应误取消其他使用者。缓存使用明确上限；只对不可变版本化资源采用经过配置验证的浏览器缓存策略。
4. 在快速切换、语言切换、关闭、再次打开、下载与 Edit 交错时，以 Artwork ID/version、Draft revision、renderer revision 做响应所有权检查。迟到结果须撤销其 URL/关闭其 bitmap，不覆盖新状态；关闭时清理页面持有的预览 lease。
5. 用真实浏览器 Resource Timing / performance marks 记录 click → 面板出现 → 元数据和按钮可用 → poster → 高分辨率预览 → Edit chunk/首帧 → 导出。冷缓存/暖缓存、网络节流、图片失败、重复请求、快速切换分开报告。代码审计和本地受控模拟不能代替真实 Sites/手机上的 INP。

建议将 `verify-reference-detail.mjs` 现有浏览器旅程扩展成一个 View/Edit 的共享 shell 检查；替换当前 `verify-studio-browser.mjs` 中基于 terrace/hotspot 的断言；为 renderer/template 增加固定 revision 的真实 Canvas→透明 PNG 读回、预览与导出同 recipe、合法颜色确实改变像素、非法选项明确拒绝、原图 hash 仍不变的覆盖。性能/竞态检查必须断言首屏操作可用之前没有请求 full PNG，并验证重复打开去重、取消/lease 释放和快速切换不接受迟到结果。`verify-transparent-output.mjs` 当前只验证原图下载，不可当作 Draft 导出覆盖。当前脚本会写 acceptance/report 文件；本审计没有执行这些脚本或 build。
