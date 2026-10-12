# Spec Delta

## ADDED Requirements

### Requirement: 无损传输派生的工程证明与美术批准分别记录
PNG 源资产及其 WebP 传输派生 SHALL 分别记录工程状态；派生证明 SHALL 绑定源路径、源 hash、尺寸和字节量，并单独记录派生 hash、MIME、alpha、无损状态及源/派生解码 RGBA 等同性。RGBA 等同只证明传输像素未改变，不扩大、取代或重置 PNG 源资产的美术批准范围。

#### Scenario: 核验等像素 WebP 传输派生
- **WHEN** 已批准的 PNG 源资产登记一个供详情预览或 Template 图层传输的 WebP 派生
- **THEN** 工程验收记录精确源路径、hash、宽高、字节量，以及派生文件 hash、`image/webp` MIME、宽高、字节量、alpha、无损标记和源/派生解码 RGBA hash 相等；原 PNG 的 Artwork/Asset 版本、美术批准和用途保持原范围

#### Scenario: WebP 派生工程证明不通过
- **WHEN** 派生资源的源绑定、派生 hash、格式、alpha、无损状态或解码 RGBA 等同性验证失败
- **THEN** 派生资源记为不可用并阻止传输使用；工程失败不改写 PNG 源资产的批准记录，也不能把派生资源记为已批准内容
