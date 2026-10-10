# Spec Delta

## MODIFIED Requirements

### Requirement: 事实特征不得与未来创作要求混淆
Artwork SHALL 只登记图像实际包含的角色风格、外形、五官、配色材质、衣物、头部配饰、身体饰品和随身道具；动作/表情 SHALL 对应实际制作的变体或动画，背景 SHALL 记录为资源事实。“none”“notApplicable”与“unknown” MUST 明确区分。未来希望新增或替换的元素 SHALL 仅进入独立 Prompt intent，不得污染 Artwork 事实、静态标签、基础 Prompt 或下载图像。角色身份示意 MUST 有来源及用途记录，不冒充完整成品或可装备组件。

#### Scenario: 图中没有帽子但参考 Prompt 要求新增帽子
- **WHEN** 用户在详情的“创作我的版本”中请求加帽子
- **THEN** 修改后的待复制 Prompt 包含该意图，原 Artwork 标签、基础 Prompt、原图和下载仍反映没有帽子的已登记成品

#### Scenario: 无道具与尚未核实道具
- **WHEN** 一个 Artwork 的某个事实已确认不存在，另一个 Artwork 的同一事实尚未核实
- **THEN** 前者保留明确无值，后者保留未知；未知不得被写成“无”或加入任何声称该事实存在的标签，也不得因字段缺失而当作该事实不存在

### Requirement: 作品资源必须来自可校验的登记引用
所有可查看或下载的角色、场景和动作资源 SHALL 登记类型、MIME、尺寸、字节量、版本、内容 hash、来源及适用用途；原图下载 SHALL 返回登记的原始文件字节。路由或 Prompt intent MUST NOT 注入任意资源路径、外部 URL 或作品 Prompt。未登记或无可靠来源的资源不得作为发布成品输出。

#### Scenario: 条件输入含未知资源引用
- **WHEN** 路由或 Prompt intent 带入目录外 ID、任意路径或 URL
- **THEN** 系统不将其作为资源读取，显示可恢复错误并保持可信目录范围

### Requirement: 同角色变体必须由明确关系与真实作品构成
同角色动作/表情系列 SHALL 仅关联已确认身份关系下实际制作的完整 Artwork 或独立变体，各变体独立绑定图像、特征、Prompt、资源状态与批准。相同风格、物种或类似颜色 MUST NOT 自动构成同一角色关系。详情 SHALL 只展示实际已发布的动作或变体；没有合格变体时隐藏整个变体区域，不显示“暂无”区块，不以示意拼贴、CSS 位移或未来 Prompt 补作现有变体。

#### Scenario: 同一已确认角色有可用眨眼版本
- **WHEN** 用户在详情选择已发布的眨眼变体
- **THEN** 图片、特征、Prompt 和下载引用同步切至该版本；加载失败时保留当前已成功版本，不输出旧图配新描述

#### Scenario: 已有姿态文件但确认范围待核定
- **WHEN** 姿态 PNG 存在且工程检查通过，但没有覆盖该文件的明确艺术确认
- **THEN** 该文件保留非发布候选状态，不能自动成为详情可下载的已批准动作；无其他合格变体时隐藏整个变体区块

### Requirement: 扩充作品与标签不得要求组件适配
维护者 SHALL 能通过登记完整图片、真实事实、标签、Prompt、版本和批准来新增作品或分类，同一作品可属于多标签。系统 MUST NOT 要求为新作品建立专用渲染分支或复制一套页面；无内容的分类不作为公开入口。

#### Scenario: 登记一种新的已批准完整角色图
- **WHEN** 维护者补齐新作品资源、事实、Prompt 和批准引用
- **THEN** 作品通过同一静态目录进入画廊和共享详情，不需要为其增加角色专用页面逻辑

## ADDED Requirements

### Requirement: 完整作品必须在静态目录中关联稳定资源与基础 Prompt
每张已发布 Artwork SHALL 拥有稳定 ID、名称、短描述、来源、身份、真实事实、标签、基础 Prompt 和资源引用；原图、缩略图、Prompt、已制作动作/变体和完整首页场景图 SHALL 分别登记版本及用途。首页角色热区、画廊和共用详情 MUST 引用同一 Artwork 身份；每种配色、外形、五官、衣物或配饰变化只有在作为完整作品制作并登记后才可展示。首页场景图中的角色、环境和接触关系是待批准的单张静态合成资源，不是角色新成品；系统 MUST NOT 叠加透明群组、运行时合成角色或将一件 Artwork 的部件适配到另一件作品。标签只描述和帮助查找作品，不赋予渲染、穿戴或安装能力。

#### Scenario: 查看一张发布作品
- **WHEN** 用户从画廊或首页场景打开一件已发布作品
- **THEN** 名称、图片、标签、来源和基础 Prompt 来自同一 Artwork 版本；详情操作无需进入工作台或编辑器

#### Scenario: 不同完整作品分别登记
- **WHEN** 目录中存在不同颜色、外形、五官、衣物或配饰的完整设计
- **THEN** 每件可浏览作品都对应独立登记的 Artwork；未登记的跨维搭配不会被生成或假定存在

### Requirement: 已发布作品与首页场景必须分别满足资源和批准条件
用户默认画廊 SHALL 仅包含已发布、维护者登记、来源有效、实际资源可用、Prompt/事实齐备且人工批准覆盖具体 Artwork 版本的完整作品。素材存在、工程可渲染、标签名称及自动测试成功 MUST NOT 自动授予发布或美术批准。来源、工程验证、美术批准和页面呈现确认 SHALL 分别记录；资源或呈现范围变更不能继承未覆盖的批准。当前15件原图批准继续只绑定各自原图版本；桌面、平板和手机完整场景及对应页面呈现必须分别记录状态，MUST NOT 增加、替代或扩大这15件原图批准。用户明确要求的新角色只能作为独立 pending preview 记录，不得进入已发布作品集合、默认画廊、搜索或 tags。

#### Scenario: 资源缺失或 hash 不匹配
- **WHEN** 已登记 Artwork 的必需原图不能通过资源检查
- **THEN** 原图下载不可用，页面说明资源失败并提供重试；已验证的文字 Prompt 仍可独立复制，不下载另一作品替代

#### Scenario: 已批准作品关联未批准的新场景
- **WHEN** 已批准 Artwork 被放入一个尚未获确认的首页场景
- **THEN** 原图批准继续只覆盖原有 Artwork 范围；场景图及其呈现状态单独待确认，不能将场景确认计入 15 件原图，也不能因场景待确认而改写原图历史状态

#### Scenario: 本地场景预览引用 pending 新角色
- **WHEN** 场景或可信详情地址引用一个已有独立身份、资源、Prompt 和版本记录的 pending preview Artwork
- **THEN** 该角色可进入共用详情并显示 `Preview · 待确认`；它不进入 ARTWORKS、默认搜索、tags 或发布资格，原始批准作品集合保持不变

### Requirement: 详情操作必须绑定同一 Artwork 资源版本
详情、Prompt 复制、图片下载和真实变体选择 SHALL 使用同一个明确的 Artwork、Asset 与 Prompt 版本。用户改变画廊查询或打开其他 Artwork MUST NOT 污染已经开始的复制或下载；变体切换 SHALL 原子更新详情中的图像、事实和 Prompt。不存在已发布变体时隐藏整个变体区域，不显示“暂无”占位。

#### Scenario: 更换详情或筛选时下载
- **WHEN** 用户对 Artwork A 发起下载后打开 Artwork B 或更改画廊筛选
- **THEN** 已发起的下载仍校验并输出 A 的登记文件，B 的图片、标签或 Prompt 不混入该操作

### Requirement: 静态目录必须区分身份、作品、资源与场景摆位
仓库静态目录 SHALL 以稳定 ID 登记 Character、Artwork、Asset、完整 SceneArt、ScenePlacement 和基础 Prompt，并明确引用关系。桌面、平板与手机 SceneArt SHALL 是同一露台的满屏完整静态构图。ScenePlacement SHALL 只映射该视口真实可见角色的 Artwork ID/version、固定热区和轮廓路径；不得引用透明角色图层、假动画，也不得自动成为可搜索或可下载 Artwork。

#### Scenario: 首页场景和画廊引用同一角色作品
- **WHEN** 用户点击完整静态场景图中的一个已登记角色热区
- **THEN** 首页热点绑定该视口图中真实可见的 Artwork ID/version；approved 角色进入已发布详情，符合目录与资源条件的 pending 角色进入同一详情并显示 pending 状态，不创建未登记姿态图或变体

### Requirement: Pending preview 与已发布目录必须分离
已批准内容 SHALL 与 `PREVIEW_ARTWORKS` / `PREVIEW_ASSETS` / `PREVIEW_PROMPTS` 分开。默认 ARTWORKS、画廊、搜索、tags 和已发布目录只读取 approved 集合；`getArtwork` / `getAsset` / `getPrompt` 可按稳定 ID 读取两类记录。`canOpenArtwork` / `isPreviewArtwork` SHALL 只允许完整登记的 pending 项目使用同一 `#/artwork/<id>?v=<version>` 详情地址，并标注 `Preview · 待确认`，不得授予发布或默认展示资格。

#### Scenario: pending preview 不进入默认目录
- **WHEN** 一个完整登记但未获批准的 Artwork 进入预览集合
- **THEN** 同版详情可显示其真实资源和 pending 标记；默认画廊、搜索、tags 与 ARTWORKS 不包含它，也不获得发布资格

### Requirement: 修改意图只影响待复制 Prompt
详情内 Prompt intent SHALL 仅存在于当前会话，区分保留、移除和替换；它 MUST NOT 改写作品事实、标签、基础 Prompt、原图或下载文件。

#### Scenario: 修改意图只影响待复制 Prompt
- **WHEN** 用户在详情选择保留、移除或替换角色元素并输入修改要求
- **THEN** 系统只生成该 Artwork 的待复制修改 Prompt；原作品事实、静态标签、基础 Prompt、原图及下载文件保持不变

### Requirement: 维护者可用静态资源和目录清单扩展内容
维护者 SHALL 能通过增加有来源的静态资源和目录记录、运行内容校验并构建静态站点来扩展角色与作品；新增内容 MUST 进入共用目录流程，不要求运行时服务、数据库、在线内容写入 API 或每角色专用分支。新角色的资源、事实、双语 Prompt 和来源须齐备后才能成为 pending preview；只有独立艺术确认覆盖具体 Artwork/Asset 版本，才可加入 approved 公共集合。manifest `files` SHALL 精确列出整个 dist；`previewOnlyFiles` SHALL 是其中带 pending 状态的子集。含 pending preview 的构建可用于本地审阅，但 MUST 报告 `deploymentReady: false`，且不能声称候选文件未在 Sites static.directory 内。

#### Scenario: 增加一个已批准 Artwork
- **WHEN** 维护者添加 Artwork 资源、关联 Asset、事实、Prompt 和批准记录，通过目录校验后构建并部署静态站点
- **THEN** 部署版本包含该作品，画廊和详情按清单发现它，无需在线内容写入或为该角色增加专用组件逻辑

#### Scenario: 新登记资源校验失败
- **WHEN** 新目录项引用缺失文件、错误 hash 或无来源资源
- **THEN** 内容校验指出该目录项，资源不会作为有效 Artwork 进入发布构建

#### Scenario: 新角色进入 pending 预览
- **WHEN** 维护者登记用户要求的白色原创机器人、白兔或其他新 Artwork，补齐来源、资源、真实事实和 Prompt，但尚未获用户美术确认
- **THEN** 记录只进入 PREVIEW_* 候选集合；可信同版详情地址可查看真实资源并显示待确认状态，默认查询和已发布作品集不出现它，构建报告不具备部署就绪状态

## REMOVED Requirements

### Requirement: 完整作品必须拥有稳定的资源与提示词关联
**Reason**: 原 requirement 将普通发布作品与随机发现预先设计变化绑定为同一运行合同；随机发现和对应抽取资格已退出本期范围。
**Migration**: 稳定 Artwork、原图、Prompt、变体、场景引用和不合成未登记作品的约束由新增“完整作品必须在静态目录中关联稳定资源与基础 Prompt”承接。

### Requirement: 发布资格必须同时满足内容资源与批准边界
**Reason**: 原 requirement 将画廊发布和随机池资格、揭晓线索批准合并；随机池与线索资格已退出本期范围。
**Migration**: 画廊资格、资源缺失处理、独立来源与工程状态，以及首页场景和原图各自的批准范围由新增“已发布作品与首页场景必须分别满足资源和批准条件”承接。

### Requirement: 所有结果操作必须使用同一冻结作品快照
**Reason**: 原 requirement 以抽取结果和再次抽取为操作上下文，该随机流程已退出本期范围。
**Migration**: 详情、Prompt 复制、原图下载和真实变体切换仍使用固定 Artwork/Asset/Prompt 版本，由新增“详情操作必须绑定同一 Artwork 资源版本”承接。

### Requirement: Artwork 必须记录八类事实并派生有效揭晓卡片
**Reason**: 随机揭晓、卡片及 DrawResult 已退出产品范围；作品事实不再驱动卡片清单或抽取资格。
**Migration**: 真实事实由“事实特征不得与未来创作要求混淆”和新增静态目录要求保留，供作品描述、搜索及 Prompt 辅助使用；动作和背景仍按真实资源记录。

### Requirement: Artwork 独立登记六类揭晓说明视觉
**Reason**: 产品不再展示揭晓线索卡，独立揭晓图、卡片批准和候选预览不再是图库能力。
**Migration**: 完整 Artwork 与首页 ScenePlacement 使用各自真实登记资源；来源、工程状态和艺术批准按实际资源用途独立记录，不保留线索素材合同。
