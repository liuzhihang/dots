请在我当前打开的 liuzhihang/dots 本地项目中，使用已有 OpenSpec 工作流创建或修订本次 change。

建议名称：refactor-dark-gallery-unified-studio。
目标：取消庭院首页，角色库就是首页；深色数字画布＋局部烟黑玻璃；角色详情与有限真实编辑合并为同一个CharacterStudio的View/Edit两种状态。

【先确定change，不重新发散Explore】
读取本地分支/HEAD/dirty、AGENTS.md、DESIGN.md、设计规则、README、OpenSpec根配置/主规范/未归档changes及已有实现。
当前GitHub已读快照b22c3f0不代表我的本地或已部署版本，禁止checkout回它。
存在覆盖本次重构的未归档change就保留其ID并用本地openspec-update-change能力修订；没有才使用openspec-propose新建建议名称。
若存在多个实质冲突change，说明具体冲突再确认；不得自动归档、取消或假造旧验收通过。
沿用当前工具版本和schema，不init、不自动升级；CLI和skill名字以实际安装为准。
本轮先完成/更新proposal、design、tasks、delta specs、原型裁决表和素材缺口表，运行可用的严格校验；不修改业务代码，不提交/部署/sync/archive。

【输入与优先级】
完整读取README.md、DESIGN-DECISIONS.md、ACCEPTANCE.md、REPO-AND-SOURCES.md以及change-source所有文件；打开references中的图，不只读caption。
D01-main-third-dark-gallery-studio.png是最新一轮第3张，唯一主稿，主导首页/角色库、View/Edit架构与视觉。
D02-support-first-mobile-guide.png是最新一轮第1张，仅补移动端和指南。
不是早前“第三张＋最后一张露台”的方案。旧dots-openspec-explore-handoff.zip中的庭院布局和纯Prompt编辑禁令已被本次替代；只保留合法原素材与历史证据。
最新范围和本包明确裁决 > 角色身份母版 > D01对应页面 > D02指定辅助区 > 历史聊天/原型。
若聊天链接不能读取，基于本包继续并说明，不宣称已读全部聊天。

【从概念稿剔除的内容】
删除庭院/城市/台阶/房间；删除宇宙星空、巨大发光基座/镜面地面、过长Hero。
删除虚构100+与热度、收藏心形、登录/个人空间、宣传视频、随机抽卡与占位功能。
导航只有角色库、指南、语言。无单独Home/Gallery两套入口，更无独立工作台。
纠正Grok被画成机器人、Muse变成长毛白团、Dots长肢体和过度毛绒的问题。
图中标签/尺寸/许可/动画数量并非数据事实，必须来自实际资源。

【保留与排除】
保留五种角色系列、搜索/分类、共用Studio、原图下载、Prompt复制、真实已有变体/动画、轻量指南、EN/zh-CN。
允许：经过适配模板的浏览器本地编辑及透明PNG导出。
不做：用户上传/本站选图/拖拽导入、数据库/IndexedDB内容库、对象存储接入、账号/收藏、后台CMS/MCP、站内模型调用/聊天、公共投稿、任意换装/3D/通用适配、旧schema/URL/storage迁移。
用户去ChatGPT附图与维护者往仓库添加资源不属于本站上传。
编辑草稿只在当前会话内存；浏览器语言/减少动态等轻量偏好可以保存。原图与批准目录不被编辑草稿污染。

【关键行为】
1. 首页即角色网格。1440×900下短介绍＋一整排作品可见；不是黑色宣传海报。
2. 点角色立即打开同一Studio的View；文字/复制操作不被全尺寸图和编辑器资源阻塞。
3. View/Edit保持同一壳与左侧预览位置，按需加载Edit；手机单一全屏面板，返回恢复搜索/筛选/滚动/焦点。
4. 已适配模板的颜色/眼睛/眼镜/配件改动必须真实渲染到Draft；Shape只在允许的模板之间切换，不拉伸成品。
5. 已有变体、真实本地编辑、ChatGPT修改意图是三种能力，UI不得混淆。不可编辑作品仅展示实际能力，不能把Prompt输出当成成功编辑。
6. 原图下载保持原字节；Draft导出由当前渲染结果生成透明PNG，不下载旧图、不带棋盘格/底座/预览阴影。
7. 同一渲染配方支撑预览与导出；底图/眼睛/眼镜/配件分层、遮罩、顺序与冲突规则必须完整。戴帽成品不能直接裁帽后假称无帽基底。
8. 模板/选项变化时不合法配置明确提示，不静默丢弃；异步切换带会话/版本约束，旧回调不能覆盖新角色或新草稿。
9. 动画只用现有真实资源，编辑后的新配置不自动继承不匹配的动画/目标包。
10. 所有内容继续采用仓库静态清单和本地资源；不先建数据库Provider和伪API。

【素材与编辑质量门槛】
先做资源审计和模板能力矩阵，至少规划一个Dots与一个Grok代表模板的真实编辑闭环；不足的素材单列制作、授权、艺术验收任务。
不穷举所有作品组合。只开放有限合法组合；对首批有限合法集合做全组合检查（能自动的自动，接触/美术有人工确认），后续再扩展。
不允许为完成任务把全部角色降级为Prompt-only；也不允许用粗糙贴图、假色块、截取整张UI截图代替生产资源。
确实缺不可安全替代的素材时，完成其余可独立任务，明确阻塞；不能悄悄改变产品承诺。

【修订旧规范】
旧AGENTS/主规范可能全面禁止Canvas合成与runtime editing，并要求保留随机。
本次新边界是：原图仍不可篡改，但独立Draft允许模板内合成与导出；永久退出的是旧任意组装/兼容，不是所有Canvas使用。
重点读取character-creation-modes、modular-2d-composition、artwork-catalog、catalog-tags、family-navigation、fullscreen-randomizer，以及本地新增的页面/资源/Prompt/性能规范。
给出旧Requirement到保留/MODIFIED/REMOVED的映射，不能仅新增一套相反spec。
MODIFIED必须使用本地准确标题并包含完整原要求及所有应保留场景；REMOVED解释无产品迁移/无旧数据导入。
先生成change内delta，不直接提前同步主规范；AGENTS与设计约定的更新列入实施任务。

【加载与回归】
先记录当前版本的点击→容器→元数据/操作→预览→高清时间线；再修延迟挂载、重复fetch/decode、阻塞Promise.all和错误缓存。
display preview、download original、Edit资源分离；构建时校验原图hash/alpha，不能把完整校验作为普通View渲染前置。
使用有版本的同源资源，限制并发、按需加载和有界缓存，不以预载整个图库解决速度。
按ACCEPTANCE.md验证桌面/390/320/768、EN/zh-CN、冷/热缓存、缺资源、reduce、快速切换、真实下载与编辑导出。
不把本地实验p95称为现场INP；不把build通过称为视觉或艺术批准。

【本轮必须交付】
- 明确选择的change ID与本地事实。
- 正式proposal.md / design.md / tasks.md / specs deltas。
- 原型逐区域取舍、固定文案、tokens、手机重排和共享Studio状态图。
- 文件级保留/重构/移除表；批准资源、Git历史和旧验收证据保留，不整体清空dist。
- 模板/资源能力矩阵、缺口、代表模板的制作与验证路径。
- 可执行验收矩阵、性能实验条件与里程碑。
- 严格校验结果和真实剩余阻塞。

本包change-source是目标规则输入，不是可跳过本地对齐的完整delta安装包。不要直接复制覆盖openspec/specs。
计划完成后等待我确认再apply；不重新询问已确定的首页方向、是否用数据库、是否支持上传或是否保留旧版本。
