# Proposal

## Why

当前展示预览和模板图层以 PNG 传输，角色详情与编辑器需要下载较大的透明图层；若直接改写 PNG 或把 WebP 当作原作品，会破坏已批准源文件、PNG 导出和图层身份之间的边界。需要用可验证的无损 WebP 派生资源优化浏览器交付，同时保持 PNG 源文件和用户导出语义不变。

## What Changes

- 为登记的 PNG 源资源定义无损 WebP 派生交付记录，分别绑定源路径、源 hash、尺寸和字节量，以及派生文件自己的 hash、MIME、尺寸、字节量、alpha、无损标记与解码 RGBA 相等证明。
- 允许符合上述证明的 WebP 用于角色详情预览及已登记模板图层的浏览器传输，不改变规范资源身份、版本、用途、图层放置或美术批准范围。
- 保持登记 PNG 源文件、原图下载的原始字节以及 Draft 透明 PNG 导出的既有语义；WebP 不得成为新的 Artwork、图层或导出格式。
- 分离仓库中的源文件闭包与静态站点交付闭包；发布交付按独立、精确清单暂存，且包含运行时仍需读取的 PNG 原图资源。
- 为派生资源不可用、来源绑定失效或像素证明不一致定义安全失败行为，不静默降级为未经校验的图像。

## Capabilities

### New Capabilities

无。

### Modified Capabilities

- `artwork-catalog`：区分登记 PNG 源资源与无损 WebP 传输派生资源，同时保留原图下载与透明 PNG 导出合同。
- `bounded-character-editing`：允许已登记且像素相等的 WebP 传输模板图层，不改变规范图层身份、图层放置或编辑结果。
- `studio-creation-experience`：详情预览与编辑图层可按需加载已验证的 WebP 派生资源，原图导出仍使用登记 PNG。
- `studio-visual-experience`：明确区分源文件闭包和静态交付闭包，并要求发布暂存精确符合交付清单。
- `character-visual-acceptance`：分别验证 PNG 源绑定与 WebP 交付证明；传输编码不等于新的美术内容批准。
- `character-families`：将“hash 改变需重新确认”的边界限定到批准绑定的源内容与用途；通过 RGBA 等同性证明的交付派生不扩大艺术审阅范围。

## Impact

影响角色资源登记与校验、详情预览加载、模板图层读取、静态发布闭包和对应验收记录。预计需要扩展静态资源清单及浏览器加载契约，不新增依赖，也不改变用户可下载的原图或 PNG 编辑导出格式。
