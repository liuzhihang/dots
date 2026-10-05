# Spec Delta

## Purpose

明确页面如何将现有角色创作和带走能力组织成无需账号的路径，使用户能编辑形象、使用真实可用的图片模式、复制或导出 Prompt，并在 ChatGPT 中自行附加个人参考图片。

## ADDED Requirements

### Requirement: 用户必须可从页面找到真实可用的角色创作路径
系统 SHALL 在创作工作台清楚呈现当前支持的 Artwork（固定整图及 Prompt）与 Composer（真实分层组合及 Prompt）模式，并允许用户查看和编辑同一份当前角色设定。没有真实资产或当前参数超出资产支持范围时，页面 MUST 保留 Prompt 与项目配置能力，同时如实说明 PNG 能力不可用；固定历史整图 MUST 标明不会随当前设定变化。模式与输出约束遵循 `rebuild-character-system` 的既有合同。

#### Scenario: 在没有可用组合资产的家族中继续创作
- **WHEN** 用户进入当前没有可用组合包的家族并选择组合模式
- **THEN** 页面明确显示组合素材尚不可用，但允许继续编辑角色设定、查看/复制 Prompt 和保存项目 JSON，不展示虚构的角色生成预览或启用当前角色 PNG 导出

#### Scenario: 修改固定整图对应的角色设定
- **WHEN** 用户在 Artwork 模式修改颜色、表情、姿态或配饰
- **THEN** 页面更新共享角色设定和 Prompt，并明确静态整图仍是固定示例，不会被页面编辑结果伪装成新生成图

### Requirement: 用户必须能使用 Prompt、项目配置和 ChatGPT 带走创作
创作区 SHALL 提供页面可见的完整 Prompt 查看与复制、Prompt TXT 下载、项目 JSON 导入/导出，以及打开 ChatGPT 的入口。复制、TXT 与 ChatGPT 入口 MUST 使用同一份当前角色状态；ChatGPT 入口仅打开服务并提供 Prompt，不代替用户粘贴、附图或发送。

#### Scenario: 复制当前 Prompt
- **WHEN** 用户查看并复制当前角色的 Prompt
- **THEN** 复制结果与页面显示的完整 Prompt 对应当前冻结角色状态，并可通过页面或系统剪贴板回读核对

#### Scenario: 打开 ChatGPT 并使用自己的图片
- **WHEN** 用户选择在 ChatGPT 中继续创作
- **THEN** 页面打开 ChatGPT 并说明用户需要自行粘贴 Prompt、另附自己的图片并发送；页面不得声称本站已经上传、识别或将图片附加到会话

#### Scenario: 保存并恢复当前角色
- **WHEN** 用户导出再导入当前项目 JSON
- **THEN** 角色设定及创作模式按现有兼容合同恢复，且无需账号或云端用户空间

### Requirement: 创作入口必须区分固定作品、组合输出与 Prompt
系统 SHALL 在角色画面附近说明当前内容属于固定作品、真实组合结果、提示词设定或结构诊断中的哪一种。只有真实可用并成功渲染的当前 Composer Canvas 才能作为当前角色 PNG 导出；失败、缺资产和结构诊断均 MUST NOT 伪装为当前生成结果。

#### Scenario: 查看候选或历史图片
- **WHEN** 用户看到未验收候选或历史作品
- **THEN** 页面说明其状态、来源和固定属性，不称为当前配置已生成的角色或通过美术验收的基准

#### Scenario: 导出当前组合角色 PNG
- **WHEN** 当前家族有受信任组合包且所选设定完整落在包支持范围内，Canvas 已成功渲染
- **THEN** 页面仅从该当前 Canvas 提供 PNG 预览和导出，并保留准确的作品说明

### Requirement: Dots 必须提供同一基准的真实有限组合路径
本轮交付 SHALL 为 Dots 单只基准提供真实可用的正面 Composer 输出，包括裸主体与耳机正确贴合主体的两个互斥造型，以及实际合成的背景。该 Composer MUST 只声明并开放上述耳机开关和已支持的背景能力；其他造型参数不得伪称会改变输出。页面 SHALL 将其标记为待真实网页美术验收的候选，不能因此标记 Dots 或其他任何家族已获用户确认。Grok Bot、Meta Muse、人物、动物当前未提供同等真实组合包时 MUST 保留 Prompt 和项目配置能力并明确显示组合尚不可用。

#### Scenario: 为 Dots 切换裸主体和已贴合耳机
- **WHEN** 用户在 Dots Composer 中切换耳机开关
- **THEN** 页面通过互斥选择显示裸主体或耳机与主体正确接触的实际正面 Canvas，不能把耳机悬浮/穿入的另一张图叠在基准上充当组合

#### Scenario: Dots 修改 Composer 不支持的参数
- **WHEN** Dots 当前角色设定修改了 Composer 未声明支持的形状、表情或姿态
- **THEN** Prompt 保留相应设定，页面明确说明该参数不会改变 Composer 输出，不得展示参数已生效的虚假预览

#### Scenario: 其他家族暂时没有真实组合包
- **WHEN** 用户为 Grok Bot、Meta Muse、人物或动物打开 Composer
- **THEN** 页面显示该组组合素材尚不可用，并继续允许编辑设定、使用 Prompt 与保存项目配置
