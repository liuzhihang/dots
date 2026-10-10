# Spec Delta

## MODIFIED Requirements

### Requirement: 资源类型与动态能力必须如实区分
系统 SHALL 区分 Artwork 原图、静态 Draft PNG、静态变体、实际动画、sprite sheet、目标包及 UI 场景。静态 Draft、动作拼贴、页面滚动或 Prompt MUST NOT 标为可播放动画、已制作动作或目标包；没有真实动画文件时只展示静态能力。

#### Scenario: 作品包含眨眼单帧或动作拼贴
- **WHEN** Artwork 有静态闭眼层/单帧或用户预览、导出 Template Draft
- **THEN** 只说明实际静态内容；静态闭眼层可作为受控编辑值，但不能自动标记成已批准表情变体、可播放动画、已制作动作或安装能力

#### Scenario: 查看真实动画资源
- **WHEN** 用户查看已登记且获批准的实际动画资源
- **THEN** 按登记类型和真实状态提供对应能力，不将静态 Draft 或场景资源当作动画

### Requirement: 目标格式资料必须记录来源端版本与验证状态
目标格式资料 SHALL 记录平台、端、版本、文件格式、尺寸、alpha、帧布局、状态/动作、制作方式、来源链接、查询时间和验证状态。官方文档、本地格式合同和实际目标环境验证 SHALL 分开；来源未说明的布局或端能力保持待验证。Artwork 与静态 Draft MUST NOT 因共用外观而继承目标平台资料或验证状态。

#### Scenario: Web官方说明只有文件尺寸而本机合同另有帧表
- **WHEN** 目标平台官方文档与某个本地文件合同描述不同格式或帧布局
- **THEN** 页面明确区分来源和适用范围，未知端能力保持待验证，不把本地合同当成官方跨端要求

#### Scenario: 静态 Draft 没有目标验证
- **WHEN** 用户导出 Template 生成的 Draft PNG
- **THEN** 页面只报告已回读验证的 PNG 格式、alpha 和尺寸，不展示 Dot/Pet 目标验证或安装能力

### Requirement: 普通PNG不得标为已验证的Dot或Pet安装包
CharacterStudio SHALL 只提供一个 Export 主操作：无 Template 时返回 Artwork 登记的原始字节，适配编辑时返回当前成功配置生成的 Draft PNG。两类文件 MUST 分别如实标识，且 MUST NOT 因透明、风格相似或带目标 Prompt 而显示为可直接安装、目标已验证或通用 Dot/Pet 支持。原图不得经 Canvas 重绘；Draft 导出单独标记为本地生成文件。目标环境未经测试时明确保持未验证。

#### Scenario: 下载蓝色Dots静态PNG
- **WHEN** 用户下载一个普通完整角色图
- **THEN** 标识为登记的静态 Artwork 文件并返回原始字节，不显示 Dot/Pet 安装能力

#### Scenario: 导出 Draft PNG
- **WHEN** 用户下载一个 Template 编辑结果
- **THEN** 标记为本地 Draft 静态 PNG，不伪称目标包、已批准 Artwork 或原图

### Requirement: 本期不得制作或开放未经授权的目标包
本期 SHALL 交付静态角色库、真实 Artwork 原图操作及受控 Template 的本地 Draft PNG；MUST NOT 制作 Pet sprite sheet、安装包或目标应用接入。未来目标资源需另有明确范围、实际文件及端/版本验证，不能用规划任务或占位 URL 当作现有能力。

#### Scenario: 首期目录没有目标包
- **WHEN** 用户打开作品的目标用途说明
- **THEN** 仅显示有来源的真实资料和验证状态，不存在 Pet 包导出或安装按钮，Artwork 原图和 Draft PNG 操作仍可分别使用

#### Scenario: Draft 不触发目标包能力
- **WHEN** 用户使用 Template 渲染或导出静态 Draft
- **THEN** 该动作只生成透明 PNG，不创建、登记或上传 sprite sheet、Pet 或目标应用包

### Requirement: 页面底色作品背景与目标alpha必须分开
页面与卡片 SHALL 使用设计底色承载角色而不写入 Artwork 文件；原图下载 MUST 返回登记字节且不经 Canvas 重绘。Draft PNG 可由受控 Template 在本地生成，但必须有独立资源标记、透明 alpha 验证和明确 revision；UI 画布或玻璃背景不得烘焙进原图或 Draft。场景资源不得混入角色下载或目标包。

#### Scenario: 在浅色卡片或深色随机弹窗中下载
- **WHEN** 用户对静态 Artwork 或模板编辑作品使用唯一 Export 操作
- **THEN** 静态作品输出登记原始字节，编辑作品输出与成功预览同 revision 的透明 PNG；文件不含 UI 底色、玻璃效果或新阴影，展示衍生图不充当原图

#### Scenario: 展示一般场景插画
- **WHEN** 页面展示用于视觉布局的背景资源；本次产品不再采用实体场景插画
- **THEN** 深色数字画布和玻璃只属于 UI，不作为角色 Artwork、Draft、动画或可安装目标资源
