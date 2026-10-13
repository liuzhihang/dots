# Spec Delta

## MODIFIED Requirements

### Requirement: 界面和操作提示必须支持英文与简体中文
角色库、CharacterStudio 静态详情/直接角色调整界面、状态和错误 SHALL 支持英文与简体中文，默认英文。角色调整入口在简体中文显示“角色调整”，英文显示“Character adjustments”；家族适用的一级 tabs 的中英文名称分别为“外观 / Appearance”、“配色 / Colors”、“五官 / Face”、“服装 / Clothing”及“配饰 / Accessories”。CharacterStudio SHALL 继承网站当前语言，不提供独立 detailLanguage 控件。用户内容、Artwork ID、Template revision、筛选和 Draft 选择 MUST NOT 因语言切换而改变。

#### Scenario: 切换语言
- **WHEN** 用户在搜索或 CharacterStudio 中切换语言
- **THEN** 界面及提示使用所选语言，当前 Artwork、筛选、Template 选择和 Draft revision 保持不变

#### Scenario: 网站语言切换时面板继承
- **WHEN** 用户切换全站语言或在已打开面板时切换到另一件作品
- **THEN** CharacterStudio 使用网站当前语言且不产生独立语言状态；仅切换语言时自由文本、Draft/session/revision保持不变；切换另一作品时继承当前语言，并按导航合同打开目标默认会话、清理旧补充要求

### Requirement: CharacterStudio 的主操作与滚动必须无遮挡
CharacterStudio 的 Copy Prompt 与在 ChatGPT 中使用 SHALL 为主操作，单一 Export 为次级操作；主操作与选项卡片 SHALL 至少44px；精细指针弹窗的返回、关闭、语言及分类导航允许至少36px，粗指针触屏的全部操作目标 SHALL 至少44px，保持清晰焦点样式，命中区域 MUST 与可见按钮矩形一致。面板 header SHALL 固定且轻薄无独立底色/分隔线，body SHALL 独立滚动，家族适用的角色调整分类 tabs MUST NOT sticky。内容滚动或玻璃 MUST NOT 遮挡预览、额外要求输入、选项或操作；相关角色常显在预览下方，以紧凑固定宽度左对齐。手机采用自然滚动，首次打开需显示完整角色，但不要求预览全程固定。角色调整 tabs 只含外观、配色、五官、配饰及适用家族的服装，不提供背景配置。

#### Scenario: 触控操作并滚动详情
- **WHEN** 用户在窄屏滚动家族适用类别角色调整选项、使用主操作或查看相关角色
- **THEN** 主操作和当前目标不会被 header 或剪裁容器挡住；页面可自然滚动访问，选项和按钮可见命中区域与实际点击矩形一致，透明角色 alpha 保持完整且可读

### Requirement: 全站语言下拉框必须显示当前语言
全站语言入口 SHALL 使用具备可访问名称和键盘操作的下拉框，选项为 English 与中文，折叠时显示当前生效语言并保存偏好。切换 SHALL 原地更新界面文本，不重建正在编辑的草稿、清空额外要求或改变当前分类；图库和粗指针触屏的控件命中区至少44px；精细指针弹窗语言控件采用至少36px的紧凑目标。

#### Scenario: 默认语言与主动选择
- **WHEN** 用户没有已保存语言偏好，随后从语言下拉选择中文
- **THEN** 初始选中 English，选择后显示中文、界面使用简体中文，刷新仍选中文

#### Scenario: 编辑期间切换语言
- **WHEN** 用户调整角色、填写额外要求后切换语言
- **THEN** 当前 Artwork、Draft/session/revision、选择、额外要求和分类保持不变；界面、Prompt 和选项提示使用所选语言

#### Scenario: 模态编辑期间的语言入口可达
- **WHEN** CharacterStudio 以模态面板打开且背景不可交互
- **THEN** 同一个全站语言下拉框位于模态标题栏内，能通过正常点击与 Tab 键访问；切换后焦点、草稿与额外要求保持，页面不存在第二个独立语言状态

#### Scenario: 模态关闭和重复打开
- **WHEN** 用户关闭、Escape、返回、历史导航退出，或模态打开失败后再次打开
- **THEN** 同一控件在页头和模态标题栏间正确恢复，ID 始终唯一；关闭或跨角色导航不弹出脏状态确认；关闭后控件回到页头，背景与焦点行为恢复
