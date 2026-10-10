# Target Requirements Catalog

这是一组本轮目标行为，不是可直接复制到specs的完整delta。
Codex必须先读取本地主规范，复用准确Capability与Requirement标题：已存在的使用MODIFIED并保留完整内容；新能力才使用ADDED；退出行为使用REMOVED。不得以全部ADDED绕过旧冲突。

## Gallery-first Entry

### Requirement: Single Gallery Entry
系统 SHALL 以角色库作为唯一首页，并提供当前真实内容的筛选、搜索、Prompt入口与角色选择；MUST NOT 保留独立场景首页或工作台导航。
#### Scenario: Initial visit
- **WHEN** 用户首次打开桌面或手机首页
- **THEN** 可以直接看到角色集合与用途，不必先完成动画或进入第二个画廊页面。
#### Scenario: Empty query result
- **WHEN** 筛选无匹配作品
- **THEN** 显示清楚的空状态和清空条件，不生成伪角色或假结果。

## Unified Studio

### Requirement: Shared View and Edit Context
系统 SHALL 在同一CharacterStudio中展示View/Edit，保持角色身份、预览位置与返回上下文；MUST NOT 叠加第二个工作台。
#### Scenario: Enter editing
- **WHEN** 用户对具备编辑模板的角色选择Edit
- **THEN** 原面板切换至该角色的Draft编辑，图库不重建，模板资源按需加载。
#### Scenario: Direct link and return
- **WHEN** 用户从角色链接直接进入或从图库关闭详情
- **THEN** 分别回到规范角色库或原筛选/滚动/focus；直接链接不依赖不存在的previous page。

### Requirement: Progressive Detail Availability
系统 SHALL 在高清预览或编辑资源就绪之前提供已知标题、封面、Prompt与可用操作；MUST NOT 因无关资源阻塞整个详情。
#### Scenario: Slow original file
- **WHEN** 原始PNG请求被延迟
- **THEN** View已可见、文字可读、Prompt可复制，高清状态单独呈现。
#### Scenario: Close before load
- **WHEN** 用户在预览加载中关闭或切换角色
- **THEN** 迟到任务不能改变新上下文，也不会重开已关闭面板。

## Bounded Editing

### Requirement: Truthful Editing Capabilities
系统 SHALL 只为存在完整可用模板与适配资源的角色提供真实编辑，区分已有变体和外部Prompt意图。
#### Scenario: View-only artwork
- **WHEN** 角色没有合格Template
- **THEN** 仍可以查看、下载和复制二创Prompt，但没有假装可实时编辑的控件或结果。
#### Scenario: Supported local edit
- **WHEN** 用户更改合法本地选项
- **THEN** Draft预览确实反映该选项，不能仅修改Prompt并报告图片更新。

### Requirement: Immutable Originals and Session Drafts
已发布Artwork SHALL 保持不可变；编辑 MUST 产生独立内存Draft并绑定基准版本。
#### Scenario: Reset and discard
- **WHEN** 用户重置或放弃草稿
- **THEN** 恢复基准配置，原作品文件/目录/Prompt没有被修改。
#### Scenario: Return to view
- **WHEN** 用户在同一会话从Edit切回View再返回
- **THEN** View清楚显示Original，Edit仍能继续该Draft，不混淆原文件与新结果。

### Requirement: Template-specific Legal Combinations
系统 SHALL 按明确模板和组合规则开放形状、颜色、眼睛、眼镜和配件；MUST NOT 推断任意角色的通用适配。
#### Scenario: Incompatible shape switch
- **WHEN** 目标形状不支持当前眼镜或帽子
- **THEN** 明确提示并让用户确认合法替换，不静默删掉选择、不显示穿模结果。
#### Scenario: Removing baked-in accessories
- **WHEN** 用户移除帽子
- **THEN** 使用真实无帽基底或合法完整版本；没有基底时不提供该能力。

### Requirement: Revision-safe Preview and Export
预览和导出 SHALL 绑定同一个最新成功Draft revision。
#### Scenario: Rapid selection
- **WHEN** 用户连续选择多个配件，资源乱序返回
- **THEN** 最终预览和导出只包含最后有效选择，不被旧回调覆盖。
#### Scenario: Export before completion
- **WHEN** 最新revision尚未完成或资源失败
- **THEN** 导出明确等待/报错，不下载旧图并伪报成功。

### Requirement: Transparent Export and Original Download
Download original SHALL 保留原字节；Export current PNG SHALL 生成当前编辑图像并保留透明背景。
#### Scenario: Export draft
- **WHEN** 用户在棋盘格预览上导出
- **THEN** 下载的新PNG不包含棋盘格、UI、底座、预览阴影或临时背景。
#### Scenario: Download original after editing
- **WHEN** 用户返回View下载原图
- **THEN** 文件与批准原资源一致，而非编辑后的Draft。

### Requirement: Correct Prompt Semantics
Prompt SHALL 区分保留、移除、替换，来自同一角色版本与配置，并标明尚未本地实现的意图。
#### Scenario: Unsupported external modification
- **WHEN** 用户表达只由ChatGPT完成的修改
- **THEN** 界面不改变实际资源状态，不把原图称为已经完成该修改的结果。

## Content and Identity

### Requirement: Accurate Character Identity
所有角色 SHALL 保持批准母版身份与系列材质；原型中误生示例 MUST NOT 直接覆盖母版。
#### Scenario: Grok and Muse
- **WHEN** 显示Grok与Muse内容
- **THEN** Grok保留软几何胶囊眼且不冒充屏幕脸机器人，Muse保留包覆体与内嵌脸面。
#### Scenario: Limb-free Dots
- **WHEN** 添加配件或展示轻动作
- **THEN** 无肢体母版不会自动增加手脚或改变角色结构。

### Requirement: Real Motion and Target Resources
系统 SHALL 只展示已存在并与当前版本匹配的变体、动画与目标资源包。
#### Scenario: Editing breaks animation match
- **WHEN** 静态Draft改变了没有对应动画的配件/形状
- **THEN** 不宣称原动画或Pet包已经适配该Draft；仍可导出正确静态图。

## Runtime Boundaries

### Requirement: Static Local-only Product
系统 SHALL 使用仓库静态内容与浏览器内存处理；MUST NOT 增加用户上传、数据库、远程写入、登录、模型API或后台管理。
#### Scenario: Local editing
- **WHEN** 用户修改并导出
- **THEN** 不需要登录、上传、模型请求或服务端存储，公共图库不产生新条目。

### Requirement: Legacy Product Retirement without Migration
系统 SHALL 从运行/发布路径退出旧随机、任意组装与兼容，但保留历史素材与证据。
#### Scenario: Old route/storage
- **WHEN** 浏览器存在旧项目数据或访问未知旧地址
- **THEN** 使用当前错误/未找到处理，不迁移、不读取旧schema，也不清除用户旧存储。

## Accessibility and Responsive Behavior

### Requirement: Accessible Responsive Studio
角色库与Studio SHALL 支持键盘、可辨focus、移动端返回/安全区域以及减少动态。
#### Scenario: Touch interaction
- **WHEN** 用户在手机点击角色
- **THEN** 一次点击打开单一详情面板，不要求先模拟Hover。
#### Scenario: Reduced motion
- **WHEN** 用户减少/暂停动态
- **THEN** 浏览、编辑、复制与导出保持完整，不以动画作为可操作前置条件。
