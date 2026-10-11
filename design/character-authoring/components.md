# 角色新增的共用组件契约

这是角色扩展的组件地图与资源 placement 约束。产品行为以 [Artwork 目录](../../openspec/specs/artwork-catalog/spec.md)、[Studio](../../openspec/specs/studio-creation-experience/spec.md) 和 [模板编辑](../../openspec/specs/bounded-character-editing/spec.md) 为准。沿用仓库现有 vanilla ESM；每次加角色先核对实际导出，不重复生成角色专用页面。

| 能力 / 文件 | 输入与职责 | 新角色的扩展点 / 验收 |
|---|---|---|
| 静态目录 / 已有 `studio-content.js`、`studio-artwork-catalog.js` | 用稳定 Artwork ID/version 解析 Character、事实、双语、原图、展示图、Prompt、逐件资格 | 增加数据与真实资源；来源/批准来自该作品，禁止复制历史 v83 批准。展示名去掉重复系列后缀，Meta Muse 的展示名为 Muse；seriesId 作为同一行描边标签，身份和资格数据不变。集中资格派生，避免内容、tag、卡片各自维护 ID 白名单 |
| 角色查询 / 已有 `studio-tags.js`、`studio-tag-browser.js` | 一次 eligible 集合消费文本、单系列、排序与语言；pending/Draft 不计入默认结果 | 新关键词从新数据派生，无 `if (id === newCharacter)`；有效作品加入后总数随目录变化，清空筛选返回真实全集 |
| ArtworkCard / `studio-card.js` | 只读 Artwork 摘要、当前语言、可信 thumbnail、真实能力标签；统一 `openArtwork(id, version)` 意图 | 无模板也显示正常作品卡；同一 contain/边界策略，不对某张 PNG 写特例位置；错误图局部回退且保留可访问标题 |
| CharacterStudio 详情/直接编辑 / `studio-detail.js` 与 `studio-overlay.js` | 一个会话拥有 Artwork snapshot、来源 context、可选 Template、Draft；同一宿主和唯一成功像素预览 | 资格、面板、滚动、操作和 dirty guard 以 Studio 与编辑主规范为准；不创建角色专用分支 |
| 资源解析与展示加载 / 已有 `studio-asset-loader.js`、`studio-preview-loader.js` | 目录 id/version/purpose 转受信任路径；壳/metadata/Prompt 先显示；高清按需 | 接入 thumbnail/detailPreview 不要求普通查看下载原图；新角色与旧角色共同使用请求去重、lease/LRU、迟到回调及释放规则 |
| Prompt / Export / 已有 `studio-prompt.js`、`studio-actions.js` | 静态作品 Prompt 与编辑后最近成功配置 Prompt 共用操作入口；schema v2 编辑 Prompt 只从最新成功快照读取双语 identity 与该家族实际适用类别（Dots/Grok: appearance、colors、face、accessories；其他受支持家族另含 clothing）的最终语义，不拼内部 ID、隐藏字段或旧外观文本；v1 仅按已登记选项标签兼容 | 始终加入条件式参考说明和透明输出契约；自由文本原样作为外部意图，不改本地像素或设置。Copy Prompt 与 ChatGPT URL 携带同一全文，由用户检查并发送；Prompt 和下载/导出边界以 Studio 与模板编辑主规范为准 |
| Template 能力 / `studio-edit-templates.js`、`studio-editor.js` | 显式绑定 Artwork/version 与独立 Template/version；列能力、所需 layer、冲突及批准 | 普通 Artwork 可以完全没有 binding。新几何只有专门制作/验收后才有新 profile，不拉伸球形模板覆盖所有外观 |
| Draft / Renderer / `studio-draft.js`、`studio-renderer.js` | 合法 options → recipe/revision → 成功不可变像素面；同一结果服务预览与 PNG | 无新角色分支；层/anchor/mask 来自真实模板清单。固定画布和透视、明确层序；像素、Prompt、导出版本一致；导出不写目录 |

getTemplateOptionFields(template) 是编辑器读取选项类别的唯一入口，getTemplateOptionAssetRefs(template, field, optionId) 返回该选项真实缩略图、合法配方图层和遮罩引用，getRequiredTemplateAssets(template, options) 返回当前配方资源及可选缩略图登记所需资源。UI 不从角色 ID 推导能力，也不以缩略图引用授予渲染资格。旧 schema v1 只报告实际存在的 color / eyes / glasses / accessory；这些能力不能冒充本轮四类或五类的完整覆盖。

首张当前预览完成后再读取选项缩略图，避免弱网下辅助图片抢占必需图层的带宽。每次资源请求仍先验证完整登记身份与用途；通过验证后，规范化路径、version、hash、MIME、字节数和尺寸都一致的物理图片共享请求和解码缓存。身体层与遮罩可以复用相同 PNG，但各自的 lease 保留精确身份、placement、独立取消与释放，不能借共享缓存绕过用途或注册校验。

schema v2 按家族提供字段：Dots/Grok 为 appearance、colors、face、accessories；Muse、动物、人物和独立机器人另有 clothing。Dots/Grok 不声明、不显示、不渲染服装，也不向 Prompt 输出服装语义。每个适用字段至少两个有双语标签及实际语义的选项；颜色必须声明真实区域和色值，选项语义放在 semanticByLanguage.en 与 semanticByLanguage['zh-CN']。模板的 identitySemanticsByLanguage 描述不随选项变化的身份。每项都必须至少出现在一个合法配方里；冲突项有明确原因，用户改动时原选择不被暗中移除。

v2 的 recipes 按家族逐条登记完整选择与有序 layers：Dots/Grok 含四个适用字段；Muse、动物、人物和独立机器人另含 clothing。每条配方引用实际资源，不根据选项数生成笛卡尔积；未列出的组合拒绝渲染。单层可声明 mask {asset, operation}，operation 仅支持 destination-in 和 destination-out；tint {optionField: 'colors', zone, mask, mode: 'preserve-lightness'} 只将已登记的颜色应用到命名材质区，并保留来源材质明暗与层 alpha。图层使用受信任的 source-over 顺序合成，前后穿戴需拆成真实图层，按逐件配方表达身体遮挡、脸部和适用服饰/饰品覆盖关系。缺失资源、所有者不匹配、不可达选项、非法 mask、颜色区或 placement 均阻断该模板。

### 登记图层的 placement / transform

层定位是受信任的静态 Asset 元数据，用来把已登记的透明图层适配到其显式绑定的 Template 画布；它不是 Draft 选项，不接受用户任意缩放、旋转或拖动，也不能用来把任意角色强行套进现有模板。placement 属于模板源 manifest 中的 Asset 注册记录，和资源 `id/version/hash`、用途、源位图尺寸及目标画布绑定；loader 会归一化并冻结它，同一注册元组 `id/version/purpose/path/hash` 若以不同 placement 重复注册则报冲突。它只调整这个已登记图层在已绑定画布内的位置，不修改原 PNG，也不获得其它角色/模板的通用适配能力。

placement 固定目标画布 `canvas`，接受 `anchor`、`offset`、可选 `sourceAnchor` 和 `transform`。`canvas` 必须精确匹配正整数模板画布；Asset 的 `width/height` 描述实际源 PNG，可以独立于 Template 画布尺寸，渲染不自动拉伸位图。旧 v1 的 `"canvas"` anchor 保持兼容且继续要求源图与 Template 同尺寸；v2 还可引用模板显式登记的命名锚点，例如 `"face.center"` 或 `"body.base"`。语义锚点必须同时存在于该模板，图层必须提供源位图范围内的 `sourceAnchor: [x, y]`，其点映射到模板锚点位置再加 `offset: [dx, dy]`；canvas anchor 不得带 `sourceAnchor`。目标偏移必须是有限数且各轴绝对值不超过 Template 画布宽/高。可选 `transform` 只接受 `pivot: [x, y]`、`scale: [sx, sy]`、可选 `shear: [shx, shy]` 与 `rotationDegrees`；pivot 必须在源位图内，两个 scale 都在 `[0.25, 4]`，两个 shear 都在 `[-2, 2]`，rotation 在 `[-45, 45]` 度。语义锚点变换必须绕该图层的 `sourceAnchor` 进行。缺少 placement 时仅同尺寸资源可归一化为零偏移、原点 pivot、单位缩放、零 shear、零旋转；独立尺寸资源必须显式登记 placement。提供 transform 时 pivot/scale/rotationDegrees 必须齐全，shear 缺省为 `[0, 0]`。越界值、无效类型或任意额外字段均拒绝。矩阵在源位图 pivot 周围用 scale 与 shear 构成线性变换，再旋转并将 sourceAnchor 映射到 Template 锚点并应用 offset。

同一归一化 placement 矩阵必须同时用于 renderer 的真实图层合成、预览/最终导出像素和编辑器图层缩略图；缩略图可以为显示而裁切/等比缩放，但裁切框必须基于同一矩阵变换后的可见 alpha 边界，不能改变图层相对画布的位置。参与渲染的 anchor、sourceAnchor、offset、pivot、scale、shear、rotation 与有序 layer refs 必须进入成功 recipe/revision 与冻结 snapshot；v2 命名 anchor 的实际模板点也记录在 snapshot。内容合同要求 placement 对同一 `id/version` 不可变，修订适配时递增资源版本并更新绑定，loader 会对相同注册元组的矛盾 placement 报冲突。随后重新渲染、验收导出与缩略图。任何未来 transform 字段必须先扩展唯一 manifest/schema、归一化校验和共享映射，再覆盖这三种输出；不能只改缩略图、只改导出或临时加某角色特例。

实际导出：`createArtworkCard(artwork, {language, onOpen, lookupAsset})`；`createDetailController({api, language, loader, ...callbacks})`；`bootStudio({detailOptions})`。卡片回调为 `onOpen(id, version, trigger)`。普通运行使用默认静态目录；隔离测试通过 `api` 和受信任资源 registry 注入新数据，不向产品增加测试开关。

目录 `createSnapshot` 冻结作品和下载资产；`createPreviewLoader({assetRegistry})` 只接受登记的 display 资源，模板资源在有资格的 Artwork 打开时登记；`downloadAsset(asset, {resolveAsset})` 保留原字节校验。隔离数据闭环见 `scripts/fixtures/new-artwork.mjs` 与 `scripts/verify-character-extension.mjs`，测试工厂不进 dist。

模板入口为 `getTemplateForArtwork`，公开仅接受精确批准的 Artwork/Template 绑定；打开这类作品时自动载入编辑器。候选只在产品外显式启用的审阅 harness 中使用 `reviewHarness:true`。`createDraft` 必须携带同一 reviewHarness、Artwork/version 与 Template/version；`createEditor` 的唯一 `previewElement` 挂到同一 Studio，`getSnapshot()` 返回成功的冻结 recipe/revision/options。v2 快照还冻结双语身份与家族适用类别的最终语义、Template/Artwork 版本、renderer revision、配方 ID/key、实际 Asset id/version/purpose/hash/placement 与层序；Prompt 只消费成功快照里的语义，不从 ID 或请求中推断。不能把请求中的新值当成成功像素。没有 View/Edit 标签或 mode URL；用户界面不显示 Reset/Cancel 控件。

`.studio-original` 收纳只读原图元数据、原 Prompt、原描述与原 tags；可编辑作品默认折叠，无 Template 的静态详情默认展开。编辑器不把原描述或原 tags 宣称为编辑后的事实。Prompt 始终描述最近成功预览对应的身份与受支持选项；额外要求追加至 Prompt 但不进入本地渲染。唯一 Export 的字节分支按本地选项相对登记基线判断，不按 Prompt 文本或总 dirty 状态判断：选项保持默认、恢复默认，或其它状态恢复登记基线且预览有效时，按需校验并返回该精确 Artwork/version 登记的原透明 PNG 原字节；本地选项确有变化时，仅导出最新成功预览的冻结 Draft PNG 快照。外部 Prompt 文字可触发 dirty guard，但不能改变上述分支或本地像素。当前 Gallery 与角色调整只产出透明 PNG；历史静态降级若登记原图不透明，界面明确标注“历史原图”，直接返回原字节、不声称透明，也不计入当前全角色调整覆盖。选项开始新渲染时显示更新状态并禁用 Draft Export，成功后更新同一预览，失败时不得导出未成功版本。

编辑控件按能力数据生成可视选项：外观使用完整真实几何基底，配色使用色块，五官/配饰以及适用家族的服装使用匹配角色的真实图层或材质缩略图及辅助名称；Dots/Grok 不显示服装控件。不能为新角色退回文字下拉框，也不能复用无关图标冒充素材。选中/焦点/None/缩略图失败可辨，至少44px，键盘与双语可用，320px不横向溢出。新选项需提供真实素材、定位/锚点及完整可达配方；编辑选项仍经同一合法性校验，不以缩略图存在授予新能力。Dots 与 Grok Bot 的基准形象不添加手脚，配饰须贴合实际无肢体轮廓。

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
