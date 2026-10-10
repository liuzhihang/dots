# Dots 角色与外观新增规范

本目录是后续会话的稳定入口。适用于新增完整静态作品、同角色新外观，以及另行获准的模板适配。它不要求每个角色都有编辑模板，也不把本轮24件已批准 Artwork 变成永久数量上限。

2026-10-11：当前本地实施版本为 v99；暗色 Gallery / CharacterStudio 的合同与12份 delta 见 `openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/`。本目录与 [共用组件](components.md) 已落实到 vanilla ESM；工程验收见 design/acceptance/current-20261010-v99，用户美术批准独立记录。本轮24件 Artwork 已批准公开，2个 Template 均通过工程和美术确认；历史验收仍按原字节保留。未来先读取当时的 active change，不能把此处日期当成永远的源码版本。

## 先明确交付对象

| 对象 | 如何登记 | 不代表什么 |
|---|---|---|
| 新角色身份 Character | 系列、稳定身份、参考与区别 | 系列本身不是唯一角色，也不决定编辑能力 |
| 独立完整外观 Artwork | 独立 ID/version、完整原图、事实、双语内容及批准 | 不能只藏在另一作品的 Prompt、颜色按钮或 Draft 中 |
| 同角色真实变体 | 有真实资源且明确关联，保留版本及用途 | 同系列不同角色不自动成为 variants |
| 本地模板 Template | 显式绑定作品版本、真实分层、有限能力、合法组合及独立验收 | 一张透明 PNG 或静态配饰不等于可编辑层 |
| 用户 Draft | 当前 Studio 会话与成功 revision | 不自动登记为公共作品、动画或 Pet |

五系列均允许多个外观。本轮共有24件 Artwork 已通过用户美术确认并进入公开图库；28种合法编辑组合分属2个已通过工程与美术确认的 Template，不计入 Artwork 数量。后续会话仍按用户指定的系列、数量和区别增加，新作品逐项确认后再公开，不默认再扩充一整套。

## 从参考到可入库作品

1. **回读实际状态。** 阅读项目 AGENTS、DESIGN、README、OpenSpec 配置、主规范及 active change；检查 HEAD/dirty、目录、批准记录和重复外观。保留用户未提交改动。沿用已安装的 OpenSpec，相关 active change 优先修订；没有才在确有规范/实现变更时新建，不因纯素材候选机械新建 change。未经用户明确授权不初始化或升级 OpenSpec；sync、archive、提交和发布均按本轮明确授权的范围执行。判断本轮授权到素材、接入、艺术确认还是发布，已有授权不重复索取。
2. **填写制作 Brief。** 复制 [character-brief.yaml](templates/character-brief.yaml) 到本轮工作目录，写新身份还是现有身份新外观、所属系列、与已有作品区别、参考角色、保留和排除项。用户只有参考图也可以由 Codex 创作；无需用户提供分层生产素材。除用户另有要求，采用少量有明确区别的作品，不生成大量排列组合。
3. **制作原始完整作品。** 使用当前可用 imagegen 工作流，逐张明确输入是身份基准、材质参考还是外观灵感。角色为真实透明背景 PNG；完整呈现该角色应有的帽、耳、肢体、尾巴等外形并留合理边距。Dots 与 Grok 必须保持无手脚，不得为了“完整”添加肢体；其他系列依据身份和物种真实呈现。原型只指导网页，截图中的 UI、字幕、数字、Logo、地台和背景不进入角色。记录准确提示词、参考文件、工具返回路径和迭代裁决；项目资产复制到仓库，保留原输出，不覆盖已批准图。生成尺寸与请求不一致时记录实际值。
4. **检查并登记真实结果。** 人工检查身份/材质/肢体、接触遮挡、深浅及棋盘检查底上的边缘；工具只读核实 MIME、字节、hash、实际尺寸、alpha 和边界。低 alpha 散点或色边不能因“有透明通道”就视为合格。纠错另存版本，保存原因；不得把生成成功写成用户批准。用户参考只说明创作输入与身份/外观依据，不代表其来源许可已核实，也不批准由此制作的 Artwork、Template、Gallery 资格或发布。
5. **仅在接入获准时维护静态数据。** 原图、展示资源、来源记录、Character/Artwork/Asset/Prompt 与真实 facts 按当时唯一 schema 登记。待审集合与默认查询分离；有效且已批准的数据通过共用卡片、详情、搜索和 Prompt 出现，不新建角色专用页面/ID 分支。仅素材阶段的文件留在 design/change 的制作区，不加入 dist 或发布闭包。
6. **完成对应验收。** 工程、人工视觉核对、用户美术批准、设备与发布分别记录。用户的确认可覆盖明确的一批，但必须能对应精确文件/版本/hash，不从“继续实现”、参考图、来源记录或旧母图批准推断新作品批准。Artwork 的用户美术批准与可发布资格分开记录；接入或模板批准也不自动授权 Sites 发布。获准接入后做真实复制与原图下载；发布另按当时授权执行，不能随新增素材自动部署。

本 Brief 是制作记录，不是新运行 schema；不能把 YAML 作为第二内容数据库或构建时兼容适配层。

制作区约定：相关 active change 存在时使用 `openspec/changes/<id>/planning/character-production-<date>-<topic>/`；已有同轮明确制作区可沿用（本轮为 `planning/gallery-expansion-20261010/`）。没有相关 change 的纯素材工作放 `design/character-production/<date>-<topic>/`，无需为了放图创建 change。其中 `generated/<artwork-id>-candidate-vN.png`、`prompts/<artwork-id>-prompts.md`、`briefs/<artwork-id>.yaml` 和 manifest 分别保存图、提示词、Brief与实测记录；先查重，版本递增不覆盖。仓库内参考从 catalog 解析精确文件/version/hash，与用户附件一样登记角色和排除项。

## 系列身份与可扩展范围

| 系列 ID / 展示名 | 必须保持 | 允许用来丰富独立外观 |
|---|---|---|
| dots / Dots | 短密绒、清楚成对黑眼；无肢体基准不加手脚，避免长毛团 | 独立圆/圆角三角等轮廓、配色、适配头饰/眼镜；新轮廓不自动成为球形模板 Shape 选项 |
| grok / Grok Bot | 软几何、成对胶囊眼；无屏幕脸、机械机器人、毛绒或新增肢体 | 球、云、圆角方、水滴等明确轮廓与配色；眼型/配饰是否可编辑另验收 |
| meta-muse / Meta Muse | 连续奶油包覆体、暖桃色内嵌脸、短圆肢体 | 包覆配色、实际可持道具、完整静态姿态；不改成外置圆脸普通毛绒熊 |
| humans / People / 人物 | 皮肤、头发、衣料材质分离；完整合理解剖 | 不同发型、肤色、服饰、气质和姿态，依据提供图创作原创组合 |
| animals / Animals / 动物 | 对应物种可辨结构；不能所有物种套柴犬头 | 不同物种、毛色、耳尾口鼻和自然姿态；柴犬自身仍须立耳、橙白、四足、卷尾 |

参考中不存在的细节可合理创作，但要在结果中核实后才写入 facts。参考图来源可标用户提供，许可未核实保留 unknown；不据此宣称商业授权或官方合作。

## 内置 Characters 参考与代表外观

用户提供的设置截图可以直接作为外观参考，不要求提供每个颜色、眼型、眼镜、帽饰组合的截图。先用公开资料与已有截图核对，只有精确复现的特殊组合缺乏可见依据时，才针对性补充参考。公开资料能看到成品不代表提供了原始透明图或可编辑分层。

图库收录有辨识度的完整外观，不穷举编辑选项。2026-10-10 追加两件蛙形/心形外观的制作记录见 `openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/README.md`；这两件作品已包含在本轮已批准的24件 Artwork 中。参考驱动重制仍须记录来源且不得冒称官方原始素材；无手脚约束与精确版本审批继续适用。原型中的更多眼型与配件只有独立完成素材适配后才能扩展编辑器。

透明素材在产品中使用无棋盘网格的展示面，素材选项缩略图用纯色底。底色只用于显示，原图和导出继续保留 alpha；离线边缘检查底不得烘焙进素材。

## 资源与内容合同

- **原图**为实际生成/获准的完整 PNG，批准记录绑定原始字节；不能下载时重新 Canvas 绘制。15 件历史批准作品作为冻结子集单独保护，新作品各自建立来源与批准链，不冒用 v83 的 `makeApproval` 或 source snapshot。
- **展示资源**为独立、有来源引用的 thumbnail 与 display preview。目标 thumb 256px、detail 512/1024px 按显示需要制作并记录实际尺寸，保持比例、不裁掉肢体、不冒充图层；原尺寸不足时不虚报高清。当前通过 studio-display-assets.js 登记 256 poster 和 512/1024 detail preview，studio-preview-loader.js 按需加载；原图仅在实际下载时校验。原始参考与其派生资源都不能替代精确 Artwork/version/hash 的用户艺术确认。
- **事实**沿用实际 `CORE_FACT_DIMENSIONS`：`characterStyle`、`appearance`、`facialFeatures`、`colorMaterial`、`clothing`、`headAccessory`、`bodyAccessory`、`prop`。`known`=有证据；`none`=确实没有；`notApplicable`=不适用；`unknown`=未确定，后者不能自动改 none。额外动作/表情等 typed facts 也须真实，静态持书不声称阅读动画。
- **双语**名称、简述、别名、可复制 Prompt 根据实际最终图写，沿用具体模块的语言键（目前内容 `en`/`zh-CN`，Prompt target 的 language 字段由现有 schema 决定），不照搬制作愿望。无依据不写动作、尺寸、许可、安装或可编辑标签。
- **资格**候选与已批准作品分开；有效且获准的作品进入统一 eligible 查询。配饰 tag 不授予可编辑能力；未适配角色可完整查看、复制 Prompt 和下载原图。
- **发布树**仅在接入获准后逐路径维护 `design/static-publish-manifest.json`。`files` 是 dist 精确闭包，`previewOnlyFiles` 是其中 pending 子集，不是物理隔离。`dist/` 不整体清空。生成记录和未接入候选不塞入发布树。

## 实际接入点与验证

当前 ESM 内容分布在 `dist/studio-content.js`（双语、系列、poster、PREVIEW 内容）与 `dist/studio-artwork-catalog.js`（原图、Prompt、facts、资格/来源）。具体导出和字段先查源码；重构应减小重复登记点，但不为新增角色引入旧 schema 适配。查询/卡片/Studio 的共用契约详见 [components.md](components.md)。

当前 `CHARACTER_IDENTITIES` 使用独立身份 ID，与 `seriesId` 分开。新身份须同时登记双语 label；同身份的独立成品可以拥有多个 Artwork。新增完整外观不必新建 Template。不要重新使用系列 slug 充当所有作品的身份。

验证分为**冻结 15 件原图完整性子集**与**当前数据导出的数量、唯一性及引用检查**。新增后运行 catalog/query/build/browser/download 验证；不得将当前 22 条（含 7 pending）再次写成永久全量限制。五系列 taxonomy 与八类 facts 是产品约束；历史验收保留原始数量。

验收使用一个不进入发布的额外 Artwork fixture：只加有效资源/数据即可在共用查询、卡片、详情和 Prompt 中出现；无 Template 时无 Edit；pending 时不进入默认搜索。需要页面专用分支才能通过则扩展合同未完成。缺原图/错 hash/双语缺失/虚假 approval/重复 ID/非法 Template 绑定必须被拒绝。

接入后按影响运行现有 `npm run build`、`npm test`、`npm run test:browser`、`npm run test:downloads`，新增模板还需当时真实存在的 renderer/template 验证。先读取 package scripts，未实施的脚本不声称已跑。四视口 1440×900、390×844、320/768 边界、EN/zh-CN、键盘返回、实际下载均按任务影响检查。只交付制作候选时报告资产检查，不把全站运行验收写成已通过。

后续会话可以直接要求：“按角色新增规范，为 Animals 增加 1 件新外观，先制作候选”；或明确“将已确认的这 2 件作品接入现有图库并验证”。规范提供可复用路径，不把素材请求扩大为全站重构，也不额外强加未要求的模板、动画或发布。

## 最新无肢体身份参考

用户在本次 apply 追加的 [十张设置/角色参考](../acceptance/current-20261010-v99/identity-reference-20261010/README.md)补充了明确规则：**Dots 与 Grok Bot 全部无手脚**。Dots 可以有多种短密绒柔软轮廓；Grok Bot 可以有多种软几何轮廓和成对胶囊眼。轮廓、颜色、眼睛和可穿戴配件可形成不同独立外观；不得为了动作或持物新增四肢。截图中的 Characters 与 Pets 分开，不把静态角色自动登记为 Pet。以后新增会话优先使用这组身份约束，不能回到带肢体的旧营销参考。
