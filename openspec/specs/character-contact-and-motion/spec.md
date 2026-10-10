# character-contact-and-motion Specification

## Purpose

规范完整角色 Artwork 与透明资源的真实外观和接触关系，区分静态图片、完整变体及真实动画，不把旧组件适配或诊断当作发布能力。

## Requirements

### Requirement: 已发布完整作品必须符合身份和画面中的真实接触关系
每个已发布 Artwork SHALL 是身份、肢体数量、配饰位置、持物关系和遮挡均符合真实成图的完整作品；原 Artwork MUST NOT 在运行时被编辑或由组件重组。只有声明了所需图层、锚点及合法组合的 Template 才可在隔离 Draft 中更新支持属性，且结果不得违反角色身份与实际接触关系。

#### Scenario: 登记带有眼镜或头戴设备的成品
- **WHEN** 维护者将有来源和发布资格的完整角色图登记为 Artwork
- **THEN** 实际画面中的眼镜、耳机或帽子与角色接触自然且身份可辨；登记 Feature 不自动赋予其它角色相同图层或适配选项

#### Scenario: 登记人物或动物持物成品
- **WHEN** 完整作品显示人物手、动物爪或鸟翼持有道具
- **THEN** 原 Artwork 保留正确物种肢体与真实承托关系；未制作的抓握组合不会成为可选输出

#### Scenario: 受控 Draft 的接触关系
- **WHEN** 用户通过已适配 Template 更换当前支持的衣物或配件
- **THEN** Draft 只按登记锚点和合法遮挡规则渲染；没有对应图层、锚点或基底时选项不可用，不补造或随意移动肢体

### Requirement: 角色 Artwork 和透明导出必须保持真实 alpha
Artwork 原图 SHALL 保持其登记的透明像素和 alpha；原图下载 MUST 返回原始字节，不添加 UI 底色、棋盘格、地面或脚底阴影。Draft PNG 导出 SHALL 单独生成透明像素并校验导出 alpha；页面背景只属于 UI，MUST NOT 烘焙进 Artwork 或 Draft。

#### Scenario: 下载透明角色作品
- **WHEN** 用户下载透明 Artwork 或其登记的真实静态变体
- **THEN** 下载字节与该资源的登记版本一致，保留真实 alpha，不含 UI 背景或新增阴影

#### Scenario: 导出透明 Draft
- **WHEN** 用户通过受控 Template 导出当前 Draft
- **THEN** PNG 维持真实透明背景并回读验证 alpha；该输出明确标记为 Draft，不修改 Artwork 原图

#### Scenario: UI 使用浅色卡片承载透明图
- **WHEN** 角色库或 CharacterStudio 在深色页面中显示透明角色
- **THEN** 深色画布仅属于 UI 表面，Artwork 原图和 Draft 导出仍保持透明像素

### Requirement: 静态图片不得冒充角色动画或未制作动作
完整静态 Artwork、静态 Draft、真实静态变体和实际动画 SHALL 作为不同能力记录。Draft 的颜色、形状、静态眼型或配件编辑 MUST NOT 自动登记或冒充已发布动作/表情变体或可播放动画；没有登记且获批的动画资源时不得提供动画播放或动画导出入口。

#### Scenario: 查看同一角色的静态姿态变体
- **WHEN** 用户选择已登记并获批准的静态姿态变体
- **THEN** 展示其完整图像与对应 Prompt，不将多个静态图宣称为可播放动画

#### Scenario: 作品没有已制作动画
- **WHEN** 当前角色仅有静态 Artwork、静态变体或本地 Draft
- **THEN** 页面只提供对应静态资源，不显示动画控件、Pet 包入口或未制作动作的承诺

#### Scenario: Draft 使用静态眼型选项
- **WHEN** 用户选择 Template 明确支持的静态眼型，例如成对闭眼图层
- **THEN** 预览与导出仍标记为本地静态 Draft，不自动成为已批准表情变体或可播放眨眼动画

#### Scenario: 已登记动画的暂停条件
- **WHEN** 作品关联真实且获批的动画资源，同时页面不可见、角色离开视口、CharacterStudio 关闭、用户暂停或系统启用减少动态
- **THEN** 各暂停条件独立生效，只有所有适用条件清除后才继续播放；没有登记动画资源时不显示播放控件
