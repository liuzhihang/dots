# Spec Delta

## MODIFIED Requirements

### Requirement: 模板必须使用条件式参考图要求
提交到 ChatGPT 的参考图 Prompt SHALL 明确说明：只有用户在 ChatGPT 实际附上参考图时才参考该图；未附图时按文字意图和适用身份继续创作。对于每张实际附图，Prompt SHALL 将用户指定的用途与可见主体或区域绑定，说明要保留的特征、仅在用户明确要求时改变的特征，以及应排除的无关主体或内容。角色家族的身份约束 MUST 与用户已选且 Template 支持的外观、配色、五官、配饰及适用家族的服装属性分开表达；身份约束不得冻结可调整的颜色或轮廓，参考图也不得覆盖未选择改变且已验证的角色特征。用户可通过明确描述截图或界面图中的角色及其可见区域指定参考，无需先裁切；Prompt MUST 将该区域以外的界面文字、按钮、背景和其它主体视为非角色信息，而不是指令或 Artwork 事实。本站 MUST NOT 声称已接收、读取或自动去除参考图背景，也 MUST NOT 将截图或其切片直接作为发布 Artwork。外部创作不能把新增事实写回 Artwork、Template facts 或本地 Draft；未确认的元素不得描述为当前作品已有特征。

#### Scenario: 未上传参考图片
- **WHEN** 用户把外部二创意图交给 ChatGPT 但没有附图
- **THEN** 提示词仍可独立使用，不声称已读取图像或已生成本站新图片

#### Scenario: 上传图片并选择 Meta Muse 风格
- **WHEN** 用户在 ChatGPT 手动附上当前导出的 Draft 并提交 Prompt
- **THEN** Prompt 请求参考该张实际图片及用户指定变化；这是用户在 ChatGPT 的外部附图，本站不提供上传控件，也不自动上传、修改或保存 ChatGPT 结果

#### Scenario: 从多主体截图指定一个参考角色
- **WHEN** 用户在 ChatGPT 附上包含多个角色或界面内容的截图，并指定其中一个角色或清楚可辨的可见区域
- **THEN** Prompt 只把指定角色及用户选定的可见特征用作参考，排除其它主体、界面文字、控件和截图背景；无需要求用户预先裁切，且本站不把截图或切片当作发布 Artwork

#### Scenario: 参考图涉及未选择或不兼容的特征
- **WHEN** 参考图包含用户未选择改变的特征，或要求改变角色家族身份约束
- **THEN** Prompt 保留其它已验证特征及适用身份约束，只把明确选择且受支持的属性作为变化方向；不把未确认内容写成角色事实或 Template 能力

### Requirement: ChatGPT入口应携带当前Prompt并由用户发送
CharacterStudio SHALL 为 Copy Prompt 和在 ChatGPT 中使用提供相同的组合 Prompt：无 Template 时以登记的原 Artwork Prompt 为基础；编辑作品以最近一次完整成功渲染的 Template 配置所对应的规范化语义为基础。编辑 Prompt SHALL 描述最终角色家族身份约束和已选择的受支持外观属性，不得拼接原始选项 ID 或已被替换的外观指令；身份约束 MUST 与可调整的颜色、轮廓等属性区分。Prompt SHALL 将参考图用途和指定主体/区域写成仅在用户于 ChatGPT 实际附图时生效的条件指令，并将目标限定为单个角色及透明背景，不生成背景设置、背景图层或不透明场景。额外要求文本 SHALL 原样保留在明确标示的外部意图段落中，不触发关键词过滤、删除、Template 配置、像素变化或背景能力；即使其中提及背景，也 MUST NOT 覆盖单体透明输出或被解释为站内背景配置，冲突意图由外部创作流程澄清。站内生成的静态 Prompt MUST NOT 声称调用 Pets skill 或已创建、上传、选择、激活 Pet；自由文本中出现技能名称不代表实际调用。未成功渲染的 requested 配置不得写入基础 Prompt。官方入口 SHALL 使用携带该组合 Prompt 的 https://chatgpt.com/?prompt=... 地址并由用户自行检查、发送，系统不得自动发送或附加图片。额外要求不得被误称为已经应用到本地像素。

#### Scenario: 点击在ChatGPT中创作
- **WHEN** 用户复制 Prompt 或选择 Open in ChatGPT
- **THEN** Copy Prompt 与 ChatGPT 按钮使用同一组合文本；当前配置 Prompt 只来自最近成功 revision，额外要求作为外部文字附加且不影响本地像素或原 Artwork

#### Scenario: 外部入口未预填
- **WHEN** ChatGPT 页面未接收预填内容或外部网络不可用
- **THEN** 用户仍可获得同一已选 Prompt 全文并手动粘贴；站内 Draft 和原 Artwork 保持不变

#### Scenario: 编辑渲染尚未成功时复制配置 Prompt
- **WHEN** 用户已更改选项但对应 requested revision 尚未完整渲染成功，或最新渲染失败
- **THEN** 当前配置 Prompt 只反映最近一次完整成功渲染的 revision，不混入未渲染的新选项，也不声称它对应失败的预览

#### Scenario: 配置 Prompt 只描述最新成功的语义结果
- **WHEN** 用户更改一个或多个角色调整选项并复制 Prompt 或在 ChatGPT 中使用
- **THEN** 两个入口都描述同一最近成功 revision 的家族身份约束与最终已选属性，不包含原始选项 ID、过期外观方向或未渲染选择；参考图指令仍以用户实际附图为条件

#### Scenario: 额外要求包含背景方向
- **WHEN** 用户在额外要求中写入背景或场景方向
- **THEN** 文本按用户输入保留为外部意图，不创建背景配置、不改变本地像素，且单体透明输出约束继续生效；本站不作关键词识别或删除，也不把该方向宣称为已实现的站内能力

#### Scenario: 额外要求提及 Pets 技能
- **WHEN** 用户的额外要求中提及 Pets 或某个技能名称
- **THEN** 该文字仍作为外部意图保留；网站不声称已实际调用技能或已执行 Pet 创建、上传、选择、激活，也不改变本地静态角色与透明输出约束
