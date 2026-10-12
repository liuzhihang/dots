# Spec Delta

## MODIFIED Requirements

### Requirement: 详情资源必须分层加载并避免过时结果
封面、缩略图和基础元数据 SHALL 优先满足首屏查看；高清展示预览、精确 Template 的外观、配色、五官、配饰及适用家族的服装图层与选项，以及相关推荐仅按需加载。展示预览与 Template 图层可使用与其规范 PNG 源逐像素相等且完整登记的 WebP 传输派生；发布构建 MUST 校验源文件字节、尺寸、alpha、色彩配置及源/派生解码 RGBA 等同性，呈现前 MUST 将映射源路径、hash、尺寸和字节量匹配到规范登记，并校验实际派生文件的 hash、MIME、尺寸、字节量和 alpha。读取 WebP 时不得为重新执行构建期像素比较而提前请求 source-only PNG。完整原图 SHALL 仅在实际 Export 需要登记原始字节时读取：包括历史、pending、异常或资源失败作品的静态降级，以及有效 Template 作品未修改默认基线时的原图 Export；仅查看作品、加载 Template 或导出已修改 Draft MUST NOT 提前读取完整原图。同一登记资源的并发请求 SHALL 去重；资源使用者之间的取消和释放 MUST 安全，过时响应不得改写当前 Studio。所有公开角色均具备其自身获批 Template；静态降级只适用于历史、pending、异常或资源失败，不代表全覆盖。原图下载与 Export SHALL 保持原有 PNG 源字节及透明 PNG 格式，不得返回 WebP 派生。

#### Scenario: 打开详情但展示预览尚未返回
- **WHEN** 用户打开 Artwork 且高清展示预览或 Template 图层尚未返回
- **THEN** CharacterStudio 先显示已有封面、元数据和操作，普通静态详情不请求或等待原图完整字节及其 SHA

#### Scenario: 请求高分辨率展示资源
- **WHEN** 用户打开高清展示预览或打开绑定精确获批 Template 的作品
- **THEN** 系统按需读取对应登记展示预览或该 Artwork/version 精确绑定的完整家族适用类别 Template 资源；只有用户实际 Export 且该状态需要原始字节时，才按需读取登记原图，包括静态降级与有效 Template 未修改默认基线的 Export；仅查看、加载 Template 或导出已修改 Draft 不提前读取完整原图，也不把展示衍生图当作原图

#### Scenario: 同一资源被多个状态请求
- **WHEN** 面板、预览、调整选项或其它消费者需要同一登记资源或请求同一版本
- **THEN** 同一 key 的在途请求合并或复用有效缓存；一个消费者取消不使其他活动消费者失效，已无消费者的资源可安全中止或释放

#### Scenario: 快速切换和释放资源
- **WHEN** 用户从 Artwork A 快速切换到 B，关闭仍在加载的面板，或重开 A 后旧回调才到达
- **THEN** 旧请求、解码结果或已释放对象不得覆盖当前 Studio；操作中的消费者继续持有其版本快照，不再引用的资源可安全释放

#### Scenario: 展示与编辑按需读取无损 WebP 派生
- **WHEN** 用户打开登记的详情预览或 Template 图层，且其 PNG 源绑定了 WebP 传输派生
- **THEN** 系统核对映射元数据和实际派生字节，并只使用发布构建已验证与规范 PNG 源 RGBA 等同的派生；source-only PNG 不因验证而提前传输，原图 PNG 只在原始字节 Export 确有需要时读取，已修改 Draft 仍导出透明 PNG

#### Scenario: WebP 派生无法校验
- **WHEN** 按需加载的 WebP 传输派生缺失、源 hash 变化或解码证明失败
- **THEN** 系统将对应资源标记为不可用并给出可恢复错误，不将失败派生当作有效预览或编辑图层，也不提前读取原 PNG 冒充成功
