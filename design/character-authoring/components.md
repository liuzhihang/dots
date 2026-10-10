# 角色新增的共用组件契约

这是当前 v99 的共用组件合同。继续使用仓库的 vanilla ESM，不引入 React 或另一套运行 schema。每次加角色先核对实际导出，再消费合同，不能重复生成角色专用页面。

| 能力 / 文件 | 输入与职责 | 新角色的扩展点 / 验收 |
|---|---|---|
| 静态目录 / 已有 `studio-content.js`、`studio-artwork-catalog.js` | 用稳定 Artwork ID/version 解析 Character、事实、双语、原图、展示图、Prompt、逐件资格 | 增加数据与真实资源；来源/批准来自该作品，禁止复制历史 v83 批准。展示名去掉重复系列后缀，Meta Muse 的展示名为 Muse；seriesId 作为同一行描边标签，身份和资格数据不变。集中资格派生，避免内容、tag、卡片各自维护 ID 白名单 |
| 角色查询 / 已有 `studio-tags.js`、`studio-tag-browser.js` | 一次 eligible 集合消费文本、单系列、排序与语言；pending/Draft 不计入默认结果 | 新关键词从新数据派生，无 `if (id === newCharacter)`；有效作品加入后总数随目录变化，清空筛选返回真实全集 |
| ArtworkCard / `studio-card.js` | 只读 Artwork 摘要、当前语言、可信 thumbnail、真实能力标签；统一 `openArtwork(id, version)` 意图 | 无模板也显示正常作品卡；同一 contain/边界策略，不对某张 PNG 写特例位置；错误图局部回退且保留可访问标题 |
| CharacterStudio 详情/直接编辑 / `studio-detail.js` 与 `studio-overlay.js` | 一个会话拥有 Artwork snapshot、来源 context、可选 Template、Draft；同一宿主和唯一成功像素预览 | 面板继承网站语言，无 detailLanguage 控件。精确获批 Template 打开时自动载入真实图层与可视选项；外观、五官、服装、配饰、物品分类仅显示真实非空能力。当前两模板映射 Appearance/Color、Face/Eyes、Accessories/{Glasses,Accessory}；相关角色紧凑固定宽度左对齐。整个面板为烟色玻璃，header 无独立背景/分隔线。Copy Prompt 与 ChatGPT 为主操作、Export 次级。编辑标题“微调作品”，原始资料只读；pending 保留在Artwork元数据/reviewHarness，不强制额外badge或长审阅说明 |
| 资源解析与展示加载 / 已有 `studio-asset-loader.js`、`studio-preview-loader.js` | 目录 id/version/purpose 转受信任路径；壳/metadata/Prompt 先显示；高清按需 | 接入 thumbnail/detailPreview 不要求普通查看下载原图；新角色与旧角色共同使用请求去重、lease/LRU、迟到回调及释放规则 |
| Prompt / Export / 已有 `studio-prompt.js`、`studio-actions.js` | 静态作品使用原Prompt，编辑作品使用最近成功配置Prompt；一个额外要求文本框只追加用户意图 | Copy Prompt 与 ChatGPT 按钮使用相同组合文本；额外要求不改本地像素。静态次级 Export 返回原Blob字节，编辑次级 Export 使用冻结成功 PNG；不设重复原图下载按钮，不自动附图/发送 |
| Template 能力 / `studio-edit-templates.js`、`studio-editor.js` | 显式绑定 Artwork/version 与独立 Template/version；列能力、所需 layer、冲突及批准 | 普通 Artwork 可以完全没有 binding。新几何只有专门制作/验收后才有新 profile，不拉伸球形模板覆盖所有外观 |
| Draft / Renderer / `studio-draft.js`、`studio-renderer.js` | 合法 options → recipe/revision → 成功不可变像素面；同一结果服务预览与 PNG | 无新角色分支；层/anchor/mask 来自真实模板清单。固定画布和透视、明确层序；像素、Prompt、导出版本一致；导出不写目录 |

### 编辑区分组与 Studio 文案（2026-10-11 CR）

选项 tabs 由 Template 能力数据生成：`Appearance`（外观）、`Face`（五官）、`Clothing`（服装）、`Accessories`（配饰）、`Objects`（物品）。当前两模板只显示 Appearance/Color、Face/Eyes、Accessories/{Glasses,Accessory}；原 option field key 和 12/16 recipe 不改。Clothing、Objects、形状、材质、发型、嘴巴和表情等类别或选项仅在未来 Template 明确具备真实资源与合法性时显示，当前不得加空 tab 或假选项。

`Appearance` 可承载真实形状/配色及未来真实材质/发型；`Face` 可承载眼睛、嘴巴、表情；`Clothing` 可承载上装、下装、套装；`Accessories` 可承载眼镜、帽子、耳机、首饰；`Objects` 可承载电脑、书本、花束等物品。这是未来数据分组方向，不代表当前模板具备这些字段或 recipe。tab 键盘行为、Draft/session/revision 隔离及成功预览语义沿用既有合同。

可编辑区标题中文为“微调作品”，其简短说明为“预览与 Prompt 随选择同步更新。”；Hero 页面 copy/title 按当前 OpenSpec change 中的双语精确字串维护。移除长篇审阅说明；Artwork pending 状态继续由目录元数据与外部 reviewHarness 管理，可保留已有 Artwork 标签，但不强制另加编辑器 badge，也不改变公开资格。

眼型缩略图显示实际注册图层，统一纯色衬底，不保留灰色方块；纯色背景不得进入透明素材像素。纯装饰界面图标使用几何 SVG/CSS 并居中，不能代替或冒充角色素材。

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

两套首批球形模板的 28 个配置只验证编辑能力。新黄色三角 Dots 与珊瑚水滴 Grok 属于静态候选，不能引用球形模板来宣称 Shape 可切换，也不能把完整成图假作独立帽子/脸/衣服层。

## 必须证明的扩展行为

1. 在隔离 fixture 中增加 1 件完整有效 Artwork 及双语内容、资源；共用查询、卡片、详情、Prompt 和下载自动处理，不改页面分支。fixture 不进入发布 manifest。
2. 将该 fixture 改为 pending，默认 Gallery/search/tags 排除；完整受信任待审详情仍按候选合同显示，不能沿未知路径读取任意文件。
3. 无模板显示完整静态详情、原Prompt和原字节下载；只给 fake editable tag 不能加载编辑器。精确获批模板打开后自动直接编辑同一成功预览；缺 layer、不兼容 geometry 或未批准组合明确拒绝，不静默移除选项。
4. 动态目录数量增长时，旧 15 原图 hash 及独立批准仍匹配；不能把总数锁为 15 或 20，也不能把色卡/Draft 计作作品。浏览器断言从当前 eligible 数据取期望数，历史证据保持原数。
5. 快速从旧作品切到新作品并关闭：迟到图片/模板回调不覆盖当前会话，缓存与 Blob URL 正确释放；下载冻结所点的版本，不串图。
