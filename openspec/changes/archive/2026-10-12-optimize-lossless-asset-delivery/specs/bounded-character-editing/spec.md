# Spec Delta

## MODIFIED Requirements

### Requirement: 模板能力必须由实际资源和可见图层声明
每个可用 Template SHALL 显式绑定适用 Character、Artwork 及其精确版本，并声明几何基底、家族适用类别可编辑属性、实际图层、支持值、revision 和来源；系列或相似标签 MUST NOT 自动授予模板能力。Change 前已批准的 24 件 Artwork 与本 change 后续获批并加入默认 Gallery 的每件 Artwork SHALL 在公开前具备逐件适配且获批的 Template，并在同一 CharacterStudio 中提供真实角色调整；不得通过删除或减少 Gallery 作品达到覆盖率。历史、pending、异常或资源校验失败的只读访问可安全降级，但不计作本 change 的全角色调整完成。复用渲染器不代表复用另一角色的素材、能力或批准；缺少精确登记资源时 MUST NOT 显示对应选项或宣称完成。Template 每一图层 SHALL 保持绑定其登记 PNG 源资源、源版本及独立图层放置；若运行时使用 WebP 传输派生，系统 MUST 将映射源路径、hash、尺寸和字节量匹配到 Template 的规范 PNG 资源，并校验派生自身的 hash、MIME、尺寸、字节量和 alpha；发布构建 SHALL 已证明无损状态与解码 RGBA 等同性。传输派生不得改变图层身份、次序、锚点、遮挡关系、兼容性或 Template revision。


系统 SHALL 按家族提供以下调整范围：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 缺少图层或无配件基底
- **WHEN** Template 没有眼镜图层、衣料覆盖基底或其它选项所需的实际素材
- **THEN** 编辑器不提供对应选项或摘除操作，也不以预览原图、Prompt、整体滤镜或挪动现有像素假装具备该能力；缺项阻止该 Artwork 达到全角色调整完成状态

#### Scenario: 候选原图尚未拆分
- **WHEN** 任一 Gallery Artwork 候选只有完整原图而没有经过登记、逐件适配和验收的 Template 资源
- **THEN** 候选图不证明其可编辑，产品不公开该候选的本地调整入口，并在规划记录素材缺口；只有待审或异常降级访问可显示静态详情，不能计作全角色调整完成，也不能通过移除已有 Gallery 角色降低覆盖分母

#### Scenario: Template 图层通过等像素 WebP 传输
- **WHEN** 一个已批准 Template 图层在角色调整中由其已登记 PNG 源的 WebP 传输派生提供
- **THEN** 系统只在源与派生 hash、MIME、尺寸、字节量、alpha、无损标记和解码 RGBA 等同性证明均通过后载入；Template 使用原 PNG 图层身份、revision、图层顺序、锚点和遮挡关系进行编辑与导出
