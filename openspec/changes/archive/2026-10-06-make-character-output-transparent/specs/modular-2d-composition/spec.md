# Spec Delta

## ADDED Requirements

### Requirement: 2D角色渲染计划必须固定使用透明背景
所有 `template` 与 `modular` 角色渲染计划 SHALL 使用透明画布。共享解算器 MUST 忽略 v2 / VERSION 10 中合法的 `background` 与 `colors.background` 惰性元数据；不得将其写入 Prompt 或用于背景填充。新建角色和新建作品 SHALL 默认保存 `background: transparent`；从现有合法项目恢复或继续编辑时 SHALL 保留原背景元数据和 `composition.inputs`，不得另行归一化或因背景不再参与绘制而使既有有效指纹失效。无论调用方传入何种 capture 覆盖参数，实际角色 PNG MUST 具有透明 alpha；`transparent: false` MUST NOT 恢复不透明底色。上述规则不改变项目格式，也不放宽素材来源、hash、fit、遮挡和接触约束。

#### Scenario: 使用历史 v2 组合输入重新解算
- **WHEN** 已登记模板或模块作品引用现行 v2 中合法的历史背景输入与解析指纹
- **THEN** 共享解算器保留并验证原引用，输出角色图层到透明 Canvas，不按历史背景值绘制底色或拒绝该作品

#### Scenario: 生成新的模块组合
- **WHEN** 用户创建新角色或为现有合法项目编辑一个新的模块配方
- **THEN** 新角色默认保存 `background: transparent`；已有合法背景元数据按原值保留但不进入可编辑项或绘制计划，Canvas 仍只有透明角色像素

#### Scenario: 捕获参数要求不透明底色
- **WHEN** 渲染或验收调用请求 `transparent: false`
- **THEN** 角色输出仍使用真实透明 alpha；调用参数不能恢复工作台、棋盘格、白底或其他背景填充
