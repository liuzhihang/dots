# Spec Delta

## ADDED Requirements

### Requirement: 作品详情必须直接提供实际图片及带走操作
作品详情 SHALL 展示完整大图、名称、真实标签、对应 Prompt 和已支持的下载/参考图/ChatGPT 操作，无需先进入编辑页面。下载和复制 SHALL 使用同一冻结 Artwork/Asset/Prompt 版本；失败时显示原因和可靠恢复路径，不提供工作台、装备或应用组合操作。

#### Scenario: 从画廊或随机结果打开详情
- **WHEN** 用户打开已发布完整作品的详情
- **THEN** 用户可以直接查看图片、复制对应 Prompt 或下载登记资源，关闭/返回时恢复原画廊状态或同一 DrawResult

### Requirement: 详情变体必须原子切换已发布作品版本
详情 SHALL 仅显示明确同身份关系下已制作且已发布的动作/表情变体，切换成功时同时更新图片、标签、Prompt、下载引用及支持标识。新资源加载失败 SHALL 保留明确的当前已成功版本并提示失败；加载期间不得输出旧图配新描述。没有已发布变体 SHALL 隐藏该区块，不制作虚假占位或让空状态占据主路径。

#### Scenario: 切换真实动作变体
- **WHEN** 用户选中当前角色已发布的动作版本且资源加载成功
- **THEN** 大图、事实标签、Prompt、下载和目标标识一起切至该作品版本，返回原画廊查询不变

#### Scenario: 没有变体或变体加载失败
- **WHEN** 当前作品没有合格变体，或选择的变体资源校验失败
- **THEN** 无变体时隐藏区块，加载失败时显示真实失败，仍可使用当前已成功作品的操作，不宣称不存在的姿态已生成

### Requirement: 详情信息层级必须优先作品与直接操作
详情 SHALL 使用稳定静态标题栏“作品详情”、正文中的作品名称、完整 contain 预览、简短描述、精选标签、真实规格与复制/下载主操作；完整 Prompt SHALL 可展开，语言和全文操作保持可达。标题不重复，暂无变体时不占据主路径，参考图及 ChatGPT 为次级操作。

#### Scenario: 首次打开和重开详情
- **WHEN** 用户首次打开、切换作品或关闭后重开详情
- **THEN** 初始焦点在顶部静态标题且不使正文跳动，角色完整可见；按钮保留键盘 focus-visible，核心复制/下载在完整 Prompt 之前

## REMOVED Requirements

### Requirement: 用户必须可从页面找到真实可用的角色创作路径
**Reason**: 旧合同把主路径定义为图库加创作工作台及项目编辑。
**Migration**: 用户由首页、画廊、灵感游戏进入已发布 Artwork 发现流程；不迁移工作台路由或草稿。

### Requirement: 用户必须能使用 Prompt、项目配置和 ChatGPT 带走创作
**Reason**: 项目配置、JSON 导入导出和按编辑角色状态创建 Prompt 均不属于新产品。
**Migration**: 保留作品 Prompt 和 ChatGPT 手动续创入口；条件式参考图模板由 reference-creation 定义。不转换旧项目数据。

### Requirement: 创作入口必须区分固定作品、组合输出与 Prompt
**Reason**: 整图/Canvas 组合/Prompt-only 的编辑状态已取消。
**Migration**: 按静态作品、动作变体、实际动画资源和目标 Prompt 等真实资源类型显示能力，不恢复 Composer 模式。

### Requirement: 五组工作台的 Canvas 输出必须遵守已登记的完整形象和配方
**Reason**: 工作台 Canvas 组装输出已退出。
**Migration**: 保留已批准 PNG 原图作为 Artwork/Asset；新下载和透明字节验收由 artwork-catalog/acceptance contracts 承接。

### Requirement: 五组基准必须有真实的表情姿态变体
**Reason**: 要求五个 canonical 编辑基准各交付完整工作台姿势图，与按实际内容发布且不由缺口阻塞主闭环的范围不符。
**Migration**: 仅登记现有、确有来源/资源且经相应确认的完整变体；未制作动作作为创作要求，不补做通用配件或整套姿态包。
