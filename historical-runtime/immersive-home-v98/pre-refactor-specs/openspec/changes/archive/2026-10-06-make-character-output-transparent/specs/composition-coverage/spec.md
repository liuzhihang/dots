# Spec Delta

## MODIFIED Requirements

### Requirement: 当前有限模板与输出路径必须全量列入覆盖
覆盖目录 MUST 从当前可信 look 与已登记配方生成有限基线清单，并包含全部 15 个登记 look、12 个基准配方状态及 10 个固定完整模板状态（共 22 个模板状态），以及当前目录中的全部模块配方。背景不再是组合维度：每个状态只生成一份 `record.background: transparent` 输出，覆盖报告 MUST 保留内部 `backgroundCount: 1` 统计，不得生成棚拍、纯色等额外背景用例或将该字段描述为背景编辑能力。当前试点目录的 5 个模块配方 MUST 全部执行透明 Canvas PNG 回读。目录 MUST 分开报告 look 身份、配方状态、唯一 PNG 文件、声明应检验分母、明确规则排除数、可解算数和已执行的 pass/fail/blocked 数；Dots 的两个耳机状态即使读取同一张 PNG，也必须作为两个配置状态覆盖。每个适用的原始 PNG 与 Canvas 输出 MUST 回读实际字节、尺寸、alpha、SHA-256 和画面；Prompt 输出 MUST 回读实际剪贴板或 TXT 内容。任何要求 `transparent: false` 的捕获调用 MUST 仍返回透明 PNG。

#### Scenario: 生成当前有限基线覆盖报告
- **WHEN** 验收人员为当前登记目录生成覆盖报告
- **THEN** 报告包含 15 个 look、22 个模板状态、当前全部 5 个模块配方及各自的单一透明输出；每条组合记录以 `background: transparent` 和 `backgroundCount: 1` 表示，不生成背景笛卡尔积，并将相同 PNG 文件与不同 Dots 状态分别计数

#### Scenario: 回读当前 PNG 与 Prompt 产物
- **WHEN** 验收人员运行某个登记状态的 Gallery 原图、模板/模块 Canvas 导出或 Prompt 用例
- **THEN** 报告绑定实际 PNG 字节、画布尺寸、alpha、SHA-256、画面检查和对应 Prompt 回读；导出的角色像素保持透明，`transparent: false` 请求也不填入底色；没有回读的项目保持未验证

## ADDED Requirements

### Requirement: 新增模块配方继续使用单一透明输出
新增的可信模块配方 SHALL 继续按实际目录生成覆盖用例，并且每个配方状态只生成一个透明 Canvas PNG 输出；背景不构成组合维度。

#### Scenario: 新模块配方继续使用单一透明输出
- **WHEN** 可信目录新增一个已登记且可解算的模块配方
- **THEN** 增量覆盖为该配方生成一个透明 Canvas PNG 用例，报告按实际目录派生配方数，不生成背景变体
