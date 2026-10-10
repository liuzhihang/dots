# Design: Dark Gallery + Unified CharacterStudio

> 目标设计草案；模块名为建议职责，不要求不顾现有代码强制重命名。

## Context

本地工作树与已部署版本优先。当前只读远端快照仍是b22c3f0旧随机版本；不要回退用户新实现。主参考是本包D01（本次第3张），D02仅补手机和Guide。

## Decisions

### 1. 信息架构

一个角色库入口、一份Guide、一个CharacterStudio。View/Edit是同一角色上下文的状态，不是两个独立产品页面。
沿用项目适合静态托管的路由实现，选择唯一规范入口与角色地址，例如`#/`、`#/character/<id>?mode=view|edit`、`#/guide`；不需要为了改样式强制更换已合理的路径。不要同时维护新旧别名、schema reader或compat adapter。
筛选可编码在规范URL；View/Edit切换不为每个选项增加浏览器历史。站内关闭回到原位置，直接链接则提供返回角色库。未保存草稿关闭应可取消，统一由同一dirty guard处理。

### 2. 状态与数据职责

- `Character`：稳定身份、系列、名称与当前内容关系。
- `Artwork`：具体完整成品版本与事实特征、原图、封面、Prompt及资源状态；不可被Draft原地改写。
- `Template`：可编辑能力、无配饰基底/必要姿态、画布、眼睛/配饰层、遮罩、层序、默认值、有限候选集合、兼容规则及版本。
- `Draft`：当前浏览器会话中的修改；绑定baseArtworkId/version与templateId/version；记录选项与revision。不会自动写回公共图库。
- `PreviewAsset`、`AnimationAsset`、`OriginalAsset`、`TargetPackage`各自登记；不从有静态图推导动画或Pet可安装状态。

可以使用项目已有ES module或JSON目录及runtime validation，不为这些名字强制增加数据库表或多个Provider。

### 3. 能力分级

`view-only`：原图/Prompt/下载。
`variants`：已登记完整变体切换；不叫实时生成。
`local-edit`：该模板真实支持的选项、渲染、导出。
`chatgpt-intent`：把未本地实现的意图编译为外部二创Prompt；与local-edit明确分区，不能把本地未改的图当成完成结果。

`local-edit`必须有合格资源，不仅是布尔标志。角色图像的alpha/层序/接触质量验收与代码可渲染分别记录。对暂时没有模板的角色显示正常View与ChatGPT路径。

### 4. 有限编辑而非万能适配

保留Color/Shape/Eyes/Glasses/Accessories五维意图，但UI只展示当前模板可实现的子集。
颜色使用主体层/材质保留的遮罩方案，禁止整体hue-rotate污染眼睛帽子。镜片、镜腿、帽子/耳机前后层需要正确遮挡。
形状切换意味着选择另一套允许的base template，而不是拉伸已扁平化的作品。旧选项不适配时明确提示并由用户确认替换；不得静默丢失。
帽子与耳机可以互斥；无手脚角色不出现依赖抓握的装备选项。组合合法性由显式规则判断，不由标签命中决定。
不必预生成每张最终作品；允许复用经过适配的图层。在首批有限集合内验证所有可选合法组合，数量过大就缩小公开集合，而不是放任粗糙搭配。

### 5. 渲染、导出与异步安全

用统一的render recipe和composition函数在预览与导出两种分辨率工作。Canvas 2D是可评估的简单实现，不强制WebGL/3D。
每次输出绑定revision；用户快速改选项时，旧异步资源返回不能覆盖新的preview。导出使用当前revision的完整成功图像，失败时不可回退下载旧原图而报告成功。
原图下载原字节、原hash；Draft导出是新PNG，验证alpha、实际内容与尺寸，不要求它等于原hash。
深浅/棋盘格preview background是视图设置，默认透明导出不可烘焙它。禁用图片中的底座/地面阴影作为编辑层。
内存草稿只覆盖当前面板会话；同一会话View→Edit保持草稿，View仍明确原作品；discard/reset语义可测试。删除/变更原目录资源不是普通编辑行为。

### 6. 加载策略

点击即挂载面板，优先使用已有元数据与thumbnail；名称与Prompt不可被大图/编辑模块加载阻塞。
三个资源级别：列表thumbnail、详情preview、original/download。Edit的模板与选项lazy load；相关推荐和动画非阻塞。
构建阶段检查静态资源格式、尺寸、hash、alpha和引用关系；原图下载仍可按合同验证；普通View不执行完整下载＋hash＋decode再揭开整页。
按`id+version+size`做有界缓存与请求合并；取消单个消费者不能错误中断其他使用者，引用计数释放Blob/bitmap。固定版本资源使用合适缓存，访问受众与授权设置不得更改。
不得预取全图库、全部变体或全部动画。只有明确用户意图的当前/邻近资源可按预算预取；记录总字节、请求数与失败。
性能阈值是本次建议的实验验收目标，见ACCEPTANCE；不是本轮已测得结果或对所有网络的承诺。

### 7. 视觉与交互

沿DESIGN-DECISIONS的结构。暗色但可读、弱边界而非发光盒；logo用仓库真实brand mark而非拼版中的误生Logo。
主稿跨View/Edit保留相同预览位置与面板壳；不要使用两个独立UI拼接欺骗。
英文与中文切换真实可用且同一页当前语言一致。角色名、系列、Prompt版本来自同一内容源。
键盘focus、Esc关闭、单滚动区、mobile safe area和屏幕阅读标签列入实施；不存在的按钮不渲染。

## Alternatives Rejected

- 改黑色但保留庭院：不符合最新方向。
- 画廊与独立工作台两套状态/路由：割裂与重复加载。
- 全部仅Prompt配置：不满足最新有限真实编辑目标。
- 任意PNG+通用眼镜粘贴：重现接触和材质不协调。
- 为以后上DB先建CMS/远程API：超范围。
- 复制旧FitProfile/resolver再包兼容adapter：不是新模板的合理复用依据。

## Risks and Mitigations

模板资源不足：先做Dots/Grok代表模板、列缺口和艺术门槛，不假装完成。
透明眼镜边缘失真：统一尺度、遮挡和alpha合成验收，不能只通过JSON校验。
暗色下黑猫/帽子不可见：正确预览灯光与稳定表面，不更改原图颜色。
运行渲染与导出不一致：共享recipe与snapshot revision，有对比测试。
图库无限内容导致内存增长：有界缓存与按需资源，关闭/切换释放不用的对象。
旧规范冲突：实际标题级delta映射，保留历史而退出运行。

## Rollout

作为同一change分阶段实现，不用新旧版本开关并行。主规范sync、Git提交、Sites部署、archive均在另行授权后进行。无旧数据迁移；未知输入按当前合同安全处理，不解析旧schema，不读取或清除旧项目存储。
