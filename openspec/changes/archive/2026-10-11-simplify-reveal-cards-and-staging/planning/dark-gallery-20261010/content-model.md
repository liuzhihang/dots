# 静态内容模型

状态：目标合同，未修改 catalog；实现仍使用仓库 ESM 与本地资源，不增加数据库/Provider。

| 实体 | 必需信息 | 不得混入 |
|---|---|---|
| Character | stable id、seriesId（当前五系列之一或未来有实际内容的系列）、双语名/别名、identityReference、来源与身份批准 | 具体配饰当永久身份、机器人冒充 Grok、用系列 ID 代替 Character ID |
| Artwork | 每个独立完整外观的 id/version、characterId、真实八类 facts、双语名称/短描述、原图/thumbnail/detailPreview、Prompt、来源及逐件 publication/artApproval；仅真实相关变体使用显式 variantGroup | 用户意图、Draft、色卡、姿态资源、重复副本或新模板自动批准；独立外观不能仅作为同一 Artwork 的 Prompt/变体选项 |
| Asset | id/version/hash、受信任同源 path、purpose、MIME/bytes/width/height/alpha、source、owner/ref、engineer/art/target/deploy状态 | 路由传入任意 path、无证据尺寸/许可 |
| Prompt | id/version、artworkId/version、EN/zh-CN 正文、来源及可用性 | 自动上传/分析/发送声明 |
| Template | id/version、适配 Artwork/version、geometryId、canvas、默认配置、有限选项、图层/遮罩引用、layer order/anchors、规则、能力、来源/工程/艺术资格 | 仅用 editable=true、旧 schema reader |
| Draft | sessionId、baseArtworkId/version、templateId/version、options、requestedRevision、renderedSnapshot、dirty、externalIntent | localStorage/IndexedDB持久化、目录新增成品 |
| RenderedSnapshot | recipeId/hash、revision、绑定身份版本、尺寸、完整透明像素面、资源lease、当前配置Prompt | 不同revision图像和文字混用 |
| AnimationAsset / TargetPackage | 实际文件、版本、匹配Artwork或精确Template recipe、端与验证状态 | 静态图自动继承动作/安装资格 |

## 首批静态外观目标与编辑试点

首批 Gallery 规划目标是 20 件独立完整静态 Artwork：Dots、Grok Bot、Meta Muse、人物、动物五系列各 4 件。当前批准的 15 件（每系列各 3 件）保持 ID/version、原图字节、身份与批准范围冻结；另为每系列创作 1 件新完整外观，共 5 件新候选：`dots-butter-beret`、`grok-coral-drop`、`muse-lavender-lantern`、`human-rust-jacket`、`animal-cocoa-bear`。五件均为 pending 候选且无 Template，按独立候选生产与来源记录目录 `planning/gallery-expansion-20261010/` 制作；分别完成来源、素材、facts、双语内容和对应美术批准后才进入默认 Gallery；20 是首批覆盖目标，不是永久上限。

图库数量只由互不重复、具有自己 Artwork ID/version 与完整登记资源的静态作品计算。Template/Draft 输出、合法配方、颜色/眼型色卡、动作或姿态资源、截图及重复文件都不充当首批外观。默认公开清单始终按当前真实批准状态动态求值；冻结原 15 件的完整性不意味着以后只能有 15 件公开作品。

首批 2 套编辑试点仅为 Dots 与 Grok Bot Template：Dots 12 个、Grok Bot 16 个合法配置，共 28 个编辑配方。它们验证受控本地编辑闭环，不代表 28 件 Gallery Artwork，也不为 Meta Muse、人物或动物提供模板。新增静态 Artwork 无需模板；Template 必须以实际 Artwork/version 显式绑定，并另行通过素材、工程及美术验收。

## 新角色与独立外观的扩展合同

新会话产出的角色和外观沿用本文件的 Character → Artwork → Asset/Prompt 结构：先登记身份、所属系列、参考/来源与身份边界；每个独立完整静态外观再建立自己的 Artwork ID/version、真实 facts、原图和展示资源、双语名称/描述/Prompt、来源、工程状态及逐件美术/发布状态。真正的动作/表情变体才使用 variantGroup。有效且已获批的静态数据自动进入共用角色卡片、CharacterStudio 详情、搜索和 Prompt；不新增专用页面、角色 ID 条件分支或渲染组件。pending 项不进入默认目录，未显式绑定且未验收 Template 的角色仍可静态查看而无 Edit。

长期角色创建流程、组件约定及可填写 Brief 由项目根目录 `design/character-authoring/README.md`、`design/character-authoring/components.md` 与 `design/character-authoring/templates/character-brief.yaml` 维护。本 change 只定义这些约定在现有静态 schema 中的映射，不复制或另建一套角色 schema。

当前 schema 的八类事实字段准确为：`characterStyle`（角色风格）、`appearance`（外观）、`facialFeatures`（面部特征）、`colorMaterial`（颜色/材质）、`clothing`（服装）、`headAccessory`（头部配件）、`bodyAccessory`（身体配件）、`prop`（道具）。Template 契约直接引用这些字段，不另建“作品事实”映射；`none / notApplicable / unknown` 保持区别。

Artwork snapshot 是只读原始输出合同。Draft 的派生配置和已成功渲染事实单独保存；未渲染的 requestedOptions 不能进入“已完成图片”Prompt。原始 Prompt、当前成功配置 Prompt、ChatGPT-only 请求分别输出；外部请求的 keep/remove/replace 不作用到本地事实，空 replace 不默认为 remove。

## 代表 Template 契约

模板 manifest 每项 layer 指定 assetRef、canvasSize、z、anchor/transform、可选maskRef、颜色作用域及适配范围；所有引用能在构建时解析。颜色不能由对整图滤镜推导。每个 option 有双语 label、requiredLayers、compatibleGeometryIds、conflicts、Prompt语义和批准范围。Shape 只有显式 template switch map 才开放；首批两套各自只有一个 geometry，不跨 Dots/Grok互切。

默认绑定：Dots 耳机蓝色/基准眼型/无眼镜/耳机；Grok 紫色/基准斜胶囊眼/无眼镜/无帽。原 Artwork 仍用现有扁平 PNG；Template 默认重建是新资源范围，需独立审阅，不冒充原字节。Reset 回默认配置；无模板的 Artwork 无 Draft 入口。

## 来源与能力资格

1. 正式图库消费原有 15 件 ARTWORKS 的已批准范围并保持其完整性；五件新增外观先在候选集合逐件 pending。PREVIEW_ARTWORKS / ASSETS / PROMPTS 保留独立集合及明确状态，不进入默认查询；后续任何数量的新增作品都按实际批准动态进入目录。
2. Template 公开 local-edit 条件为：binding有效、默认和全部公开合法选项有完整资源、工程验证通过、来源和艺术记录覆盖该模板/版本/组合范围。任何一项缺失均不授予能力。
3. pending Template 可在明确审阅 harness 中驱动同一 Studio，显示待确认，不能给普通卡片增加 Editable 标记，也不能进入发布集合。harness 不包含在生产manifest。
4. 原批准目录、候选目录、Template 候选、当前用户 Draft 分离；任何 Draft 导出都不新增公共 Artwork。新增完整作品按 Character/Artwork/Asset/Prompt 及逐件审核流程登记即可，不要求模板；新增编辑能力才需要真实模板适配，但无需页面专用角色分支。
5. 素材、运行可用、用户艺术批准、目标验证、部署各自字段/报告；包含 pending 的发布树继续 `deploymentReady:false`，不宣称通过域名判断或目录命名已隔离。

## 查询与路由输入

一个文本输入（多词AND、大小写/空白规范化）与一个 series（与文本AND），候选/草稿/退役资源排除。保留内部 typed facts 供检索；详情最多4个精选事实为静态文本，不增加隐藏多维筛选状态。排序首批仅已存在的 curatedOrder 与本地化 name，不增加 Popular/Latest（无可靠发布日期）。默认精选；未知series/sort提示并允许清除，禁止静默扩大结果。

仅登记 id/version 可解析资源；未知 Artwork/version 为not-found，不回退到另一版本输出。`mode=edit` 只是同一Studio的合法状态请求；不把option对象序列化到URL或恢复旧storage。轻量语言/动态偏好可以保存，失败仍用内存默认。
