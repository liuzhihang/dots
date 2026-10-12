# Spec Delta

## MODIFIED Requirements

### Requirement: 美术确认必须绑定明确 Artwork 和资源范围
美术批准 SHALL 分别绑定具体 Artwork/Asset 版本及其用途。Template 基底、图层、合法组合所生成的预览样例、角色库页面和 CharacterStudio 呈现 SHALL 记录各自工程状态与用户确认范围；任一 Artwork 的批准 MUST NOT 自动批准 Template、导出 Draft 或新页面视觉。PNG 源文件字节、图层、姿态或用途变化时须重新确认受影响范围。为已登记 PNG 源资产提供 WebP 传输派生时，派生文件 hash 与工程校验 SHALL 单独记录；若源路径/hash、宽高、字节量绑定未变且已证明源与派生解码 RGBA 完全相等，则派生 hash 或 MIME 的差异仅属交付编码变化，不构成新的角色内容或艺术批准变化。该豁免不适用于像素不同、缺少 RGBA 等同性证明、图层或放置关系改变、或用途扩大的情形；派生校验失败时派生资源保持不可用。

#### Scenario: 使用已有图库批准记录
- **WHEN** 维护者把历史批准映射到当前目录
- **THEN** 只记录证据覆盖的、属于本 change 前历史基线的原 Artwork 版本、文件和用途；无法映射的图层或页面保持未确认

#### Scenario: 更新作品文件或增加动作变体
- **WHEN** 新增 Character/Artwork、Template 图层、支持组合、Artwork 版本、动作变体或页面呈现
- **THEN** 每个独立 Artwork、资源和用途按实际影响范围记录工程与美术状态；新静态外观须自己的来源与批准，旧原图批准不扩大到新的图层、Draft 样例、动作或页面

#### Scenario: 新身份不得继承相似角色批准
- **WHEN** 参考候选从已有角色拆分为独立原创身份，或由待审候选制作出新 Artwork/Template
- **THEN** 新身份、完整 Artwork、真实图层、兼容组合和页面用途分别绑定其来源及审批状态；相似轮廓、家族标签或引用同一参考图不继承其它身份的批准

#### Scenario: 等像素 WebP 派生不扩大美术批准范围
- **WHEN** PNG 源资产保持原始路径、hash、尺寸、字节量和用途不变，新增 WebP 传输派生且源/派生解码 RGBA hash 相等
- **THEN** 工程记录单独绑定 WebP 文件 hash、MIME、alpha、无损状态和等同性证据，既有 PNG 源资产批准继续适用；不要求对仅改变编码的派生重新作美术批准

#### Scenario: WebP 派生像素或放置关系发生变化
- **WHEN** WebP 派生无法证明与 PNG 源 RGBA 相等，或新的资源实际改变图层、锚点、层序、遮挡关系或用途
- **THEN** 该派生不得作为获批传输图层使用；相关新内容按受影响 Artwork、图层和用途范围重新工程核验并取得所需美术确认
