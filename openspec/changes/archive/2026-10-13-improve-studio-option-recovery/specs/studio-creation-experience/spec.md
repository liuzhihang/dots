# Spec Delta

## ADDED Requirements

### Requirement: 关闭角色调整必须直接退出且不弹出确认
CharacterStudio SHALL 在用户选择关闭、面板返回、Escape、返回角色库、浏览器历史回到角色库或离开当前页面时直接退出，不因内存 Draft 或额外要求偏离基线而弹出放弃修改确认或 beforeunload 提示。退出 SHALL 释放当前编辑会话，重新打开同一 Artwork SHALL 从其已批准 Template 默认值开始。该关闭行为不改变切换另一 Artwork 或已发布变体的现有 dirty guard。

#### Scenario: 修改后关闭角色调整
- **WHEN** 用户修改选项或额外要求，然后使用关闭按钮、面板返回、Escape 或导航返回角色库
- **THEN** 面板直接关闭，URL、滚动位置和焦点按原导航合同恢复，不弹出确认；同一角色再次打开时选项与额外要求回到默认基线

#### Scenario: 修改后通过浏览器历史退出或离开页面
- **WHEN** 用户在有内存 Draft 的角色调整中通过浏览器 Back/Forward 回到角色库，或刷新、关闭当前网页
- **THEN** 不产生放弃修改确认或 beforeunload 提示；Back/Forward 保持正确的路由和历史索引，过期编辑请求不能恢复已关闭会话
