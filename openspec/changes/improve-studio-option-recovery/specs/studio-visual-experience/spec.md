# Spec Delta

## ADDED Requirements

### Requirement: 全站语言下拉框必须显示当前语言
全站语言入口 SHALL 使用具备可访问名称和键盘操作的下拉框，选项为 English 与中文，折叠时显示当前生效语言并保存偏好。切换 SHALL 原地更新界面文本，不重建正在编辑的草稿、清空额外要求或改变当前分类；控件命中区至少 44px。

#### Scenario: 默认语言与主动选择
- **WHEN** 用户没有已保存语言偏好，随后从语言下拉选择中文
- **THEN** 初始选中 English，选择后显示中文、界面使用简体中文，刷新仍选中文

#### Scenario: 编辑期间切换语言
- **WHEN** 用户调整角色、填写额外要求后切换语言
- **THEN** 当前 Artwork、Draft/session/revision、选择、额外要求和分类保持不变；界面、Prompt 和选项提示使用所选语言
