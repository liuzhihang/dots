# Acceptance and Evidence Map

## Milestones and Dependencies

M1 → M2 → M3 → M4 → M5。M4的纯模板工具可在M2后开发，但验收需要M3结果绑定。一个主change，无新旧产品双轨；任何中间里程碑不代表已发布。任务编号对应 `tasks.md`。

| 里程碑 | 用户／工程可完成的闭环 | 完成门槛 |
| --- | --- | --- |
| M1 | 工程能够查询可信完整作品、绑定实际文件与Prompt，旧项目/组合不再是运行轴；不是独立发布里程碑 | 实际metadata、资格/资源检查、来源/批准分列、旧依赖退出清单 |
| M2 | 首页专题 → 画廊搜索 → 详情 → 复制对应Prompt／下载原图 → 回原结果位置 | 新导航/详情/状态恢复、真实资源与操作，原型结构保留 |
| M3 | 首页/画廊随机或游戏默认有效池 → 多卡逐停 → 同一完整作品 → 详情/带走/再次随机 | 共用引擎、结果后Feature锁定/空池/失败/取消/去重、冻结一致性；游戏页无范围控件 |
| M4 | 作品详情或全局入口 → 用户文字/保留项/风格 → 模板Prompt → 手动附图继续到ChatGPT | 无视觉分析/上传/自动代发；真实复制/跳转降级；静态与目标说明区分 |
| M5 | 用户查看可审查的完整本地候选，核定具体视觉范围与剩余设备/目标边界 | 新实页/实际下载证据、用户艺术确认、测试/生产清单/规范准备；发布另授权 |

## Requested Scenarios

| # | 合同／场景 | 对应delta | 任务／验证证据 |
| --- | --- | --- | --- |
| 1 | 图1构图及批准身份保留，旧工作台入口消失 | studio-visual-experience、character-families | 2.1、5.3；新版本桌面/320/390/768实页和用户反馈 |
| 2 | 专题进入标签画廊，关键词/多维/清空/无结果正确 | catalog-tags、family-navigation | 1.5、2.2、2.3、5.1；查询性质报告与实页结果 |
| 3 | 详情关闭恢复筛选、滚动、焦点 | family-navigation、studio-creation-experience | 2.4、2.6、5.2；滚动/activeElement/Back记录 |
| 4 | 同角色已制作已发布变体切换图片与Prompt | artwork-catalog、studio-creation-experience | 1.3、2.5、5.2；仅针对有批准资源的真实切换，缺变体路径另记；fixture不代替艺术确认 |
| 5 | 当前筛选随机属于有效发布池 | artwork-catalog、fullscreen-randomizer | 3.1、3.2、5.1；性质测试与池/结果快照 |
| 6 | 独立卡轨道顺序停止，全部停止才成品 | fullscreen-randomizer | 3.4、3.8、5.2；阶段/卡槽截帧及操作时序 |
| 7 | 特征/标签/图片/Prompt/下载同版本 | artwork-catalog、character-creation-modes | 2.5、3.5、4.1、5.4；冻结ID/hash/剪贴板/文件回读 |
| 8 | 多必备特征AND，空池不动画不放宽 | fullscreen-randomizer、catalog-tags | 3.1、3.2、5.1/5.2；硬锁交集、零池操作记录 |
| 9 | 无配饰、单候选、近期重复、缺资源 | fullscreen-randomizer、artwork-catalog | 3.2、3.3、3.6、5.2；真实提示/故障注入/无替换 |
| 10 | 关闭重开/跳过/reduced-motion无迟到更新 | fullscreen-randomizer | 3.6、3.7、5.2；Abort/token/结果与DOM变化记录 |
| 11 | 首页modal与游戏共用模型/算法 | fullscreen-randomizer、family-navigation | 3.1、3.8、5.5；同输入可控随机源下结果与生产依赖图 |
| 12 | 参考图不公开，模板不冒充识别 | reference-creation | 4.2、4.3、5.2；无站内文件控件、条件式Prompt、无图片外发、ChatGPT预填与故障降级 |
| 13 | 复制/下载/打开失败与降级真实 | reference-creation、character-creation-modes | 1.6、4.4、5.4；剪贴板禁用/Popup阻止/资源错误与manual路径 |
| 14 | 真alpha与无脚底阴影团 | target-resources、character-contact-and-motion | 1.2、5.3、5.4；实际PNG尺寸/alpha/hash与高对比底目视，不只查通道 |
| 15 | 普通PNG不标已验证Dot/Pet包 | target-resources | 4.5、4.6、5.2；支持标识/不存在包按钮/待验证说明 |
| 16 | 新成品/标签通过目录接入，无组件适配 | artwork-catalog、catalog-tags | 1.4、1.5、5.1；新增隔离合格fixture的检索/详情/抽取性质测试 |
| 17 | 无旧路由/schema兼容，未知输入安全处理 | family-navigation、character-creation-modes | 1.8、2.2、5.5；普通fallback、无reader/旧存储变动/URL注入 |
| 18 | 普通浏览/随机不加载工作台/Fit/3D | modular-2d-composition | 1.7、1.8、5.5；实际网络/模块图、发布清单、残留引用审查 |

## Status Ledger Contract

每个资源/页面分别填写：`engineeringImplementation`、`assetExists`、`resourceVerified`、`artApproval`、`targetValidation`、`published`；附source/cache/资源hash、实际范围及证据路径。`not-run/failed/pending/approved/out-of-scope`不能混用，任务勾选不自动改变其他状态。

- 构建/脚本/截图diff不能批准艺术，不自动接受新截图基准。
- 15个旧素材身份批准可依据hash匹配保留；新页面和未映射5姿态单独确认。未批准姿态不发布，基础图库可在没有已批准变体且隐藏版本区块的状态完成；不能声称真实变体切换全量验收。
- 没有Pet包/目标测试，本期记录为范围外或待验证，不写“包验收通过”。
- 新目录写入 `design/acceptance/current-<本机日期>-v<cache>/`，不存在才创建；原冻结记录保持。
- 桌面/模拟视口是具体浏览器证据，不代表实体手机、跨网访问或线上部署。
- 本change只准备候选和发布门槛，不含提交、保存Site、部署或权限变更任务。

## 当前验收退回：cache89

QA01–07 与 tasks 6.1–6.8 对应。本次必须重跑适用目录/抽取、资源、详情/标签跳转、复制/直接下载、动画/取消/移动端工程验证，另交完整多卡录屏。记录中的参考图文件选择/删除/重复上传不属于最新已确认的本站文字模板能力，标不适用；ChatGPT上传/发送由用户自行操作。现有挥手/持花/闭书可作为独立已发布作品验证；无已批准variant关系、Grok实际状态动画或Pet包，真实内容缺口不以fixture代替。用户视觉签字和实体Safari未完成不能勾5.3/5.8。

## cache90 视觉与交互增补

该表补充当前六槽合同，不改写 cache89 QA01–07 的记录或任务 6 勾选。

| # | 合同／场景 | 对应delta | 任务／验证证据 |
| --- | --- | --- | --- |
| 19 | 固定六卡顺序与八类底层事实；动作/表情不占槽、背景为规格 | artwork-catalog、fullscreen-randomizer | 7.1、7.3、7.4；模型映射、顺序截帧、冻结Artwork真实事实 |
| 20 | 桌面一排六张5:6卡；手机当前卡+邻卡横向轨道 | fullscreen-randomizer、studio-visual-experience | 7.4、7.8；桌面与320/390/768 CSS px实际浏览器；实体设备独立记录 |
| 21 | none/notApplicable快速停止；unknown不得进默认池 | artwork-catalog、fullscreen-randomizer | 7.3–7.5；空值、未知和池资格交叉测试，无静默替换 |
| 22 | 随机弹窗、游戏页和揭晓视图不提供范围/锁定控件；游戏用默认有效池，画廊随机冻结当前查询 | fullscreen-randomizer、studio-visual-experience | 7.4–7.5；检查默认候选池、画廊查询快照和容器共用，无隐式放宽 |
| 23 | 作品结果后锁定一个或多个Feature供下一抽；硬锁 AND | fullscreen-randomizer、catalog-tags | 7.5；耳机+眼镜交集、空池不解锁、当前结果快照不变 |
| 24 | 复制/下载是主操作；再随机/详情/ChatGPT次级 | fullscreen-randomizer、studio-creation-experience | 7.5–7.6；可见层级、Prompt与下载对应同一资源版本 |
| 25 | 特征视觉来自独立登记的 `revealVisuals`；`sourceRect` 仅为内部制作辅助 | character-visual-acceptance、artwork-catalog | 7.3、8.3；独立 Asset/hash/用途/短名/status；新候选 artApproval=pending |
| 26 | 保留图1页面关系并纠正角色身份；Dots既有Hero材质冲突未决 | studio-visual-experience、character-families | 7.2、7.8；双Hero/五专题、Grok/Muse真实身份；Dots美术变更等待用户裁决 |
| 27 | 当前会话/附件读取边界准确 | planning/evidence-and-prototype.md | 7.1；Photo 1 hash回读，九张图/ZIP/辅助图状态标未取得 |
| 28 | 结果阶段文案“遇见新的伙伴”，六项摘要先于角色图，之后名称/说明、主操作和次操作 | fullscreen-randomizer、studio-visual-experience | 8.2；DOM 顺序、实际实页层级与文案核对，Artwork原图像素未滤色 |
| 29 | 手机六项短摘要卡先于主图并可横向触控滚动 | fullscreen-randomizer、studio-visual-experience | 8.2、8.6；约116px卡片在320/390/768 CSS px模拟视口检查，分类/图/短名不截断，实体Safari独立记录 |
| 30 | 滚动候选逐项绑定各自来源Artwork/Asset；最终停卡与作品结果绑定唯一DrawResult | artwork-catalog、fullscreen-randomizer | 7.3、8.3–8.4；来源Artwork/Asset/hash与停值快照检查，候选不冒充最终值 |

Tasks 5.3、5.8、6.8 继续 pending；cache90 视觉页面与新特征示意须由用户按具体版本确认，桌面模拟也不代表 iPhone Safari 实测。参考图仍是文字模板，本站不接收或分析文件。

## cache91 P0 返修验收映射

cache90/Site41 运行记录是历史发布基线，不证明本轮 dirty source 或 Site 候选。用户实机验收退回的减少动态直达结果和移动端结果层级，按当前新合同和 §8 任务重新验证；不改写 cache90 冻结证据。

| # | 返修合同／场景 | 对应delta | 任务／新证据 |
| --- | --- | --- | --- |
| 31 | 普通动画六卡依序停下；第六卡与成品间留约900ms隐藏结果边界 | fullscreen-randomizer | 8.1、8.6；390 CSS px进程录屏与状态/DOM读数 |
| 32 | reduced-motion 六张真实静态卡全停，结果隐藏，等待“揭晓伙伴” | fullscreen-randomizer | 8.1、8.6；减少动态状态、computed运动值与点击前后截图 |
| 33 | 主动 skip 冻结同一 Artwork，不重抽，停止后等待同一边界 | fullscreen-randomizer | 8.1、8.4；skip前后Artwork ID、六卡事实和状态序列 |
| 34 | 六卡摘要→角色/说明→复制/下载→重抽/详情/ChatGPT | fullscreen-randomizer、studio-visual-experience | 8.2、8.6；DOM order、390和桌面页面几何 |
| 35 | 结果短卡约116px，分类/视觉/短名完整显示、不ellipsis | fullscreen-randomizer | 8.2；CSS尺寸、scroll/overflow/文本测量和实页截图 |
| 36 | 独立 `revealVisuals` 与缺失素材分开登记；candidate preview 不等于 art approval | artwork-catalog、character-visual-acceptance | 8.3；asset hash/visualStatus/artApproval inventory、用户人工复核待办 |
| 37 | 移动重抽复位真实滚动容器而非 window | fullscreen-randomizer | 8.5、8.6；overlayBody/dialog/view scrollTop与activeElement回读 |
| 38 | 全流程绑定冻结 Artwork/Asset/Prompt，关闭重开无迟到写入 | artwork-catalog、fullscreen-randomizer | 8.4、8.6；hash、剪贴板/下载、取消与重开记录 |

新证据目标目录 `design/acceptance/current-20261007-v91/`。A–G 阶段用同一 390 CSS px：A 初开六张等待卡；B 第1卡揭晓；C 第3卡停止/第4卡运行；D 第6卡停止但结果隐藏；E 结果；F Reduce 静态六卡等待按钮；G 重抽返回卡片舞台。每步记录 `phase`、`activeSlot`、`slotStopped`、`data-display-result`、`result.hidden/computed display`、实际滚动容器 `scrollTop` 与 `matchMedia`。完整录屏必需；同一记录列工程、素材存在、资源验证、用户艺术批准、目标验证和已发布状态。未经人工确认的独立 visual 标 `candidate-preview`/`artApproval=pending`；既有15张完整 Artwork 批准范围不变。
