# Spec Delta

## MODIFIED Requirements

### Requirement: 普通PNG不得标为已验证的Dot或Pet安装包
CharacterStudio SHALL 只提供一个 Export 主操作：有效 Template 作品在默认配置未修改时返回该 Artwork/version 登记的透明原始 PNG；适配编辑且最新 revision 成功时返回匹配该 revision 的透明 Draft PNG。当前公开 Gallery Artwork 与成功编辑 Draft MUST 具有经验证的实际透明 alpha。无精确可用 Template 的历史、pending 或异常静态作品仍可降级返回其登记原始字节；若原图不透明，MUST 明确标识为“历史原图”，不得宣称透明，也不得计入当前 Gallery 全角色调整覆盖。各类文件 MUST 分别如实标识，且 MUST NOT 因透明、风格相似或带目标 Prompt 而显示为可直接安装、目标已验证或通用 Dot/Pet 支持。原图不得经 Canvas 重绘；Draft 导出单独标记为本地生成的静态 PNG。目标环境未经测试时明确保持未验证。

#### Scenario: 下载蓝色Dots静态PNG
- **WHEN** 用户下载一个普通完整角色图
- **THEN** 标识为登记的静态 Artwork 文件并返回原始字节，不显示 Dot/Pet 安装能力

#### Scenario: 导出 Draft PNG
- **WHEN** 用户下载一个 Template 编辑结果
- **THEN** 标记为本地 Draft 静态 PNG，不伪称目标包、已批准 Artwork 或原图

#### Scenario: 历史静态作品缺少可用 Template
- **WHEN** 用户通过无 Template 的历史、pending 或异常静态详情使用唯一 Export
- **THEN** 返回该 Artwork/version 登记原始字节；如果字节没有实际透明区域，明确标识为历史原图且不计作当前 Gallery 全角色调整覆盖，不得重绘或宣称透明

#### Scenario: 当前 Gallery Artwork 保持透明资源资格
- **WHEN** 系统登记或公开当前 Gallery Artwork
- **THEN** Artwork 原图必须是经验证的透明 PNG，且不能用历史不透明原图降级语义冒充当前公开角色的透明资源或调整覆盖

### Requirement: 页面底色作品背景与目标alpha必须分开
页面与卡片 SHALL 使用 CSS 设计底色承载角色而不写入 Artwork 文件；所有当前公开 Gallery Artwork 与成功编辑 Draft PNG MUST 保留经验证的真实透明 alpha，展示 UI 底色、玻璃效果或界面阴影 MUST NOT 烘焙进原图或 Draft。有效默认配置下的原图 Export 返回登记透明字节，编辑后 Export 绑定同一 Artwork/version、Template、最近成功 revision 与透明 PNG。历史静态降级继续返回登记原始字节，不透明时清楚标识为历史原图。界面不提供背景设置、背景 tab、独立背景图层或带背景导出。本站 MUST NOT 声称会自动读取或去除用户参考图、截图或界面图中的背景；截图或其切片不得直接用作发布角色 Artwork。场景资源不得混入角色下载或目标包。

#### Scenario: 在浅色卡片或深色随机弹窗中下载
- **WHEN** 用户对静态 Artwork 或模板编辑作品使用唯一 Export 操作
- **THEN** 静态有效作品输出登记的透明原始字节，编辑作品输出与成功预览同 revision 的透明 PNG；历史不透明静态降级仅返回登记原始字节并标识为历史原图；任何文件都不含 UI 底色或玻璃效果，展示衍生图不充当原图

#### Scenario: 展示一般场景插画
- **WHEN** 页面展示用于视觉布局的背景资源；本次产品不再采用实体场景插画
- **THEN** 深色数字画布和玻璃只属于 UI，不作为角色 Artwork、Draft、动画或可安装目标资源

#### Scenario: 校验当前角色或编辑 Draft 的透明像素
- **WHEN** 当前 Gallery Artwork 准备发布，或成功预览的 Draft 准备由唯一 Export 输出
- **THEN** 对应 PNG 的实际 alpha 经校验并保留透明区域；不透明背景或仅有全不透明 alpha 通道的文件不符合当前透明角色资源要求

#### Scenario: 参考图带有背景或来自界面截图
- **WHEN** 用户选择一张带背景的参考图，或在外部 ChatGPT 流程中附上包含角色和界面内容的截图
- **THEN** 本站不声称自动接收、分析、抠除或裁切该图；用户外部附图不会改变站内透明 Artwork/Draft，也不得直接成为发布角色文件

#### Scenario: Draft 透明度校验失败
- **WHEN** Draft PNG 的实际 alpha 校验失败或背景被合成进像素
- **THEN** 该 Draft 不得作为成功透明导出提供，且不得将展示用 CSS 背景解释为已移除的图像背景
