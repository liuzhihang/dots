# Spec Delta

## MODIFIED Requirements

### Requirement: 作品资源必须来自可校验的登记引用
Artwork、封面、展示预览、Template 图层、Draft 输出及动态资源 SHALL 有登记类型、MIME、尺寸、字节量、版本、内容 hash、来源、用途和状态；原图下载 SHALL 返回当前 Artwork 登记 PNG 源资源的原始字节。图库中的当前角色原图和成功 Draft SHALL 是透明 PNG；若既有不透明 Artwork 由新的透明版本替换，替换图必须作为独立版本与资源登记，原文件、原 hash、历史来源及批准记录保持不变。历史不透明版本只可作为准确标注的历史资源提供原始字节，不得作为当前透明角色 Artwork 或透明成品宣称。界面底色仅用于 CSS 展示，不得写入角色原图、Template 图层、Draft 或导出；用户不可配置、导出或通过 Prompt 改变背景。单一 Export 入口只导出当前成功版本的透明 PNG，不得写回、覆盖或取代 Artwork 原图。所有 Template 图层和派生输出 MUST 有登记用途、精确源版本与 hash，且不得由任意资源路径或 URL 注入。路由与用户输入 MUST NOT 注入任意资源路径、URL、Template 图层或作品 Prompt；Draft 只能由受信任目录引用渲染。PNG 源资产的 WebP 传输派生 MUST 绑定准确 `sourcePath`、`sourceSha256`、`width`、`height` 与 `byteSize`；派生资源另行登记其 `path`、`sha256`、`mime`、`width`、`height`、`byteSize`、`alpha`、`lossless` 和 `decodedRGBA` 证明。派生图只有在标记无损、尺寸与源一致、alpha 与源一致且解码 RGBA 内容 hash 相同的情况下才可提供，且不能取代源文件、成为独立 Artwork/Template 图层身份或改变用途与图层放置。

#### Scenario: 条件输入含未知资源引用
- **WHEN** 路由、Template 选项或 Draft 输入引用目录外 ID、路径或 URL
- **THEN** 系统拒绝该引用并显示可恢复状态，不读取或导出未登记资源

#### Scenario: 导出资源缺少校验资料
- **WHEN** Template 图层或 Draft 输出缺少登记的版本、来源或必要图像信息
- **THEN** 系统不把它作为有效可导出资源，且不以缺失资源替换当前有效 Artwork

#### Scenario: 默认导出透明角色 PNG
- **WHEN** 用户通过单一 Export 入口导出成功的角色调整
- **THEN** 输出为登记画布尺寸的透明 PNG，不合成界面底色，输出绑定本次成功的 Artwork、Template、选项和 revision

#### Scenario: 界面展示底色不得进入透明角色文件
- **WHEN** 界面使用 CSS 底色展示透明角色、Template 图层或成功 Draft
- **THEN** 底色仅用于屏幕合成，不出现在原图、Prompt、Draft 像素或透明 PNG 导出中，也不提供背景配置或带背景导出

#### Scenario: 透明替换资源不覆盖不透明原图
- **WHEN** 维护者为既有不透明作品制作透明替换版本
- **THEN** 替换资源具有新的明确 Artwork/Asset 版本、来源、hash 和独立批准；旧原图、历史字节及历史批准记录仍可核对，未批准替换版本不得公开

#### Scenario: WebP 传输派生与 PNG 源像素完全一致
- **WHEN** 详情或角色调整读取已登记 PNG 源资产的 WebP 传输派生
- **THEN** 系统确认映射中的源路径、源 hash、源宽高和字节量匹配规范 PNG 资源，并验证实际派生文件的独立 hash、`image/webp` MIME、宽高、字节量、alpha、无损标记及发布构建已证明的 `decodedRGBA` 源/派生 hash 相等；浏览器不为验证映射而提前请求 source-only PNG。通过后仅按原资源身份、版本、用途和放置使用派生图，不把它作为原图下载或 PNG 导出结果

#### Scenario: WebP 源绑定或像素证明失败
- **WHEN** WebP 派生的源 PNG 缺失或 hash 不符，或派生文件的格式、alpha、尺寸、无损标记或解码 RGBA 相等证明不通过
- **THEN** 派生图不可用并显示可恢复错误，系统不得把它当作已验证图层或静默替换为未经校验的资源；原始 PNG 下载及透明 PNG 导出合同保持不变

#### Scenario: 托管服务以通用二进制 MIME 返回 WebP
- **WHEN** 已登记无损 WebP 的 HTTP 响应为 `application/octet-stream`
- **THEN** 系统仅在映射源绑定、实际字节量、SHA-256、无损 WebP 文件头与尺寸均验证通过后，将已验证 Blob 规范为 `image/webp` 用于解码；其他错误 MIME 仍被拒绝，通用二进制响应不得跳过任何内容校验
