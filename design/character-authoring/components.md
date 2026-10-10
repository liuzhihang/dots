# 角色新增的共用组件契约

这是角色扩展的组件地图与资源 placement 约束。产品行为以 [Artwork 目录](../../openspec/specs/artwork-catalog/spec.md)、[Studio](../../openspec/specs/studio-creation-experience/spec.md) 和 [模板编辑](../../openspec/specs/bounded-character-editing/spec.md) 为准。沿用仓库现有 vanilla ESM；每次加角色先核对实际导出，不重复生成角色专用页面。

| 能力 / 文件 | 输入与职责 | 新角色的扩展点 / 验收 |
|---|---|---|
| 静态目录 / 已有 `studio-content.js`、`studio-artwork-catalog.js` | 用稳定 Artwork ID/version 解析 Character、事实、双语、原图、展示图、Prompt、逐件资格 | 增加数据与真实资源；来源/批准来自该作品，禁止复制历史 v83 批准。展示名去掉重复系列后缀，Meta Muse 的展示名为 Muse；seriesId 作为同一行描边标签，身份和资格数据不变。集中资格派生，避免内容、tag、卡片各自维护 ID 白名单 |
| 角色查询 / 已有 `studio-tags.js`、`studio-tag-browser.js` | 一次 eligible 集合消费文本、单系列、排序与语言；pending/Draft 不计入默认结果 | 新关键词从新数据派生，无 `if (id === newCharacter)`；有效作品加入后总数随目录变化，清空筛选返回真实全集 |
| ArtworkCard / `studio-card.js` | 只读 Artwork 摘要、当前语言、可信 thumbnail、真实能力标签；统一 `openArtwork(id, version)` 意图 | 无模板也显示正常作品卡；同一 contain/边界策略，不对某张 PNG 写特例位置；错误图局部回退且保留可访问标题 |
| CharacterStudio 详情/直接编辑 / `studio-detail.js` 与 `studio-overlay.js` | 一个会话拥有 Artwork snapshot、来源 context、可选 Template、Draft；同一宿主和唯一成功像素预览 | 资格、面板、滚动、操作和 dirty guard 以 Studio 与编辑主规范为准；不创建角色专用分支 |
| 资源解析与展示加载 / 已有 `studio-asset-loader.js`、`studio-preview-loader.js` | 目录 id/version/purpose 转受信任路径；壳/metadata/Prompt 先显示；高清按需 | 接入 thumbnail/detailPreview 不要求普通查看下载原图；新角色与旧角色共同使用请求去重、lease/LRU、迟到回调及释放规则 |
| Prompt / Export / 已有 `studio-prompt.js`、`studio-actions.js` | 静态作品 Prompt 与编辑后最近成功配置 Prompt 共用操作入口 | Prompt、用户额外要求、下载/导出的行为边界以 Studio 和模板编辑主规范为准 |
| Template 能力 / `studio-edit-templates.js`、`studio-editor.js` | 显式绑定 Artwork/version 与独立 Template/version；列能力、所需 layer、冲突及批准 | 普通 Artwork 可以完全没有 binding。新几何只有专门制作/验收后才有新 profile，不拉伸球形模板覆盖所有外观 |
| Draft / Renderer / `studio-draft.js`、`studio-renderer.js` | 合法 options → recipe/revision → 成功不可变像素面；同一结果服务预览与 PNG | 无新角色分支；层/anchor/mask 来自真实模板清单。固定画布和透视、明确层序；像素、Prompt、导出版本一致；导出不写目录 |

分类标签由真实 Template 能力数据生成；只有具备资源与合法选项的类别才显示。角色可按数据归入外观、五官、服装、配饰或物品等组，具体字段与可见状态由 [模板编辑规范](../../openspec/specs/bounded-character-editing/spec.md) 管理，不在本组件地图重复列举当前选项或 recipe 数量。

### 登记图层的 placement / transform

层定位是受信任的静态 Asset 元数据，用来把已登记的透明图层适配到其显式绑定的 Template 画布；它不是 Draft 选项，不接受用户任意缩放、旋转或拖动，也不能用来把任意角色强行套进现有模板。placement 属于模板源 manifest 中的 Asset 注册记录，和资源 `id/version/hash`、用途、尺寸及画布绑定；loader 会归一化并冻结它，同一注册元组 `id/version/purpose/path/hash` 若以不同 placement 重复注册则报冲突。它只调整这个已登记图层在已绑定画布内的位置，不修改原 PNG，也不获得其它角色/模板的通用适配能力。

当前 placement 结构只接受 `canvas`、`anchor`、`offset`、`transform` 四个字段：`canvas` 必须精确匹配正整数模板画布，`anchor` 固定为 `"canvas"`，`offset: [dx, dy]` 必须是有限数值且各轴绝对值不超过画布宽/高。可选 `transform` 只接受 `pivot: [x, y]`、`scale: [sx, sy]`、可选 `shear: [shx, shy]` 与 `rotationDegrees`；pivot 必须在画布内，两个 scale 都在 `[0.25, 4]`，两个 shear 都在 `[-2, 2]`，rotation 在 `[-45, 45]` 度。缺少 placement 时归一化为零偏移、原点 pivot、单位缩放、零 shear、零旋转；提供 transform 时 pivot/scale/rotationDegrees 必须齐全，shear 缺省为 `[0, 0]`。越界值、无效类型或任意额外字段均拒绝。矩阵在 pivot 周围用 scale 与 shear 构成线性变换，再旋转并应用 offset。

同一归一化 placement 矩阵必须同时用于 renderer 的真实图层合成、预览/最终导出像素和编辑器图层缩略图；缩略图可以为显示而裁切/等比缩放，但裁切框必须基于同一矩阵变换后的可见 alpha 边界，不能改变图层相对画布的位置。参与渲染的 offset、pivot、scale、shear、rotation 必须进入成功 recipe/revision；内容合同要求 placement 对同一 `id/version` 不可变，修订适配时递增资源版本并更新绑定，loader 会对相同注册元组的矛盾 placement 报冲突。随后重新渲染、验收导出与缩略图。任何未来 transform 字段必须先扩展唯一 manifest/schema、归一化校验和共享映射，再覆盖这三种输出；不能只改缩略图、只改导出或临时加某角色特例。

实际导出：`createArtworkCard(artwork, {language, onOpen, lookupAsset})`；`createDetailController({api, language, loader, ...callbacks})`；`bootStudio({detailOptions})`。卡片回调为 `onOpen(id, version, trigger)`。普通运行使用默认静态目录；隔离测试通过 `api` 和受信任资源 registry 注入新数据，不向产品增加测试开关。

目录 `createSnapshot` 冻结作品和下载资产；`createPreviewLoader({assetRegistry})` 只接受登记的 display 资源，模板资源在有资格的 Artwork 打开时登记；`downloadAsset(asset, {resolveAsset})` 保留原字节校验。隔离数据闭环见 `scripts/fixtures/new-artwork.mjs` 与 `scripts/verify-character-extension.mjs`，测试工厂不进 dist。

模板入口为 `getTemplateForArtwork`，公开仅接受精确批准的 Artwork/Template 绑定；打开这类作品时自动载入编辑器。候选只在产品外显式启用的审阅 harness 中使用 `reviewHarness:true`。`createDraft` 必须携带同一 reviewHarness、Artwork/version 与 Template/version；`createEditor` 的唯一 `previewElement` 挂到同一 Studio，`getSnapshot()` 返回成功的冻结 recipe/revision/options，不能把请求中的新值当成成功像素。没有 View/Edit 标签或 mode URL；用户界面不显示 Reset/Cancel 控件。

`.studio-original` 收纳只读原图元数据、原Prompt、原描述与原 tags；可编辑作品默认折叠，无 Template 的静态详情默认展开。编辑器不把原描述或原 tags 宣称为编辑后的事实。最新成功配置 Prompt 与 PNG Export 绑定最近成功预览；额外要求追加至 Prompt 但不进入本地渲染。选项开始新渲染时显示更新状态并禁用 PNG Export，成功后更新同一预览，失败时不导出未成功版本。无模板静态 Export 下载原图原字节。

编辑控件按能力数据生成可视选项：颜色色块、实际眼型/眼镜/配件图层缩略图及辅助名称；不能为新角色退回文字下拉框，也不能复用无关图标冒充素材。选中/焦点/None/缩略图失败可辨，至少44px，键盘与双语可用，320px不横向溢出。新配件需提供真实图层及定位/可视边界；编辑选项仍经同一合法性校验，不以缩略图存在授予新能力。

透明素材在产品页面中不显示棋盘网格。角色沿用深色展示面；眼型、眼镜和配件缩略图使用能同时辨识深浅图层的纯色底。色块仍显示实际选项色，None 使用明确占位标识。底色只在 CSS 中存在，不能填进原 PNG、缩略图资源或 Draft 导出。

## 内容扩展与能力扩展分开

新增完整静态外观只需要 Character/Artwork/Asset/Prompt、来源和资格。不同轮廓、服装、物种可以是新 Artwork，无需每次给 UI 增一个类型。仅新可编辑能力才涉及 Template profile 和 renderer 支持；若超出已有受控渲染机制，单独评估 change 范围，不能悄悄扩大所有角色支持面。

当前 Template 的能力与合法配置从精确 Artwork/Template 绑定和批准记录读取；新外观不能借用不适配的模板能力，也不能把完整成图假作独立图层。

## 必须证明的扩展行为

1. 在隔离 fixture 中增加 1 件完整有效 Artwork 及双语内容、资源；共用查询、卡片、详情、Prompt 和下载自动处理，不改页面分支。fixture 不进入发布 manifest。
2. 将该 fixture 改为 pending，默认 Gallery/search/tags 排除；完整受信任待审详情仍按候选合同显示，不能沿未知路径读取任意文件。
3. 无模板显示完整静态详情、原Prompt和原字节下载；只给 fake editable tag 不能加载编辑器。精确获批模板打开后自动直接编辑同一成功预览；缺 layer、不兼容 geometry 或未批准组合明确拒绝，不静默移除选项。
4. 动态目录数量增长时，既有批准素材 hash 和独立批准仍匹配；不能把总数固定为历史值，也不能把色卡/Draft 计作作品。浏览器断言从当前 eligible 数据取期望数，历史证据保持原数。
5. 快速从旧作品切到新作品并关闭：迟到图片/模板回调不覆盖当前会话，缓存与 Blob URL 正确释放；下载冻结所点的版本，不串图。
