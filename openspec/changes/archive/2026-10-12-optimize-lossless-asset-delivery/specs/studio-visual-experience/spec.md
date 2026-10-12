# Spec Delta

## MODIFIED Requirements

### Requirement: 发布静态页面资源必须与作品清单版本一致
发布页面引用的角色清单、封面、透明原图、Template 家族适用类别图层、合法配方和静态代码 SHALL 来自同一有效发布版本；每个公开 Artwork/version 均 SHALL 精确绑定自己的获批 Template 与素材，不得混用其它作品的身份能力、图层、锚点、层序、选项或批准，也不得将未批准候选纳入默认角色库、搜索、标签或公开角色调整。变更前 24 件已批准 Artwork 与本 change 后续获批并拟加入默认 Gallery 的每件 Artwork 均须通过精确模板支持家族适用的非空 tabs、每类至少两个实际可达的不同透明像素结果；pending、异常及资源失败降级不计为全覆盖。已显式登记并可通过受信任详情地址打开的 pending Artwork 可随静态资源树保留，但详情必须只读并明确标记待确认。动态 Draft 只在本地生成，不自动进入静态发布闭包。仓库源文件闭包与静态交付闭包 SHALL 分别核对：`files` 精确列出 `dist/` 文件清单，`sourceOnlyFiles` SHALL 是其中所有已登记 WebP 派生所对应 PNG 预览/Template 源路径的精确集合；实际静态交付闭包为 `files` 减去 `sourceOnlyFiles`。独立上传 stage 的 `dist/` 子树 SHALL 恰好等于该交付闭包，且不得带入清单外资源。已登记为 `sourceOnlyFiles` 的规范 PNG 仍须保留在仓库；其 WebP 派生只有在逐像素等同性证据已由发布构建验证并包含在交付清单时才可代替 PNG 图层传输。角色原图下载或未修改 Export 仍依赖的登记 PNG MUST 保留在静态交付闭包。`previewOnlyFiles` SHALL 是发布清单中待确认候选文件的显式子集；若闭包含 pending 候选，构建报告 MUST 标记 `deploymentReady: false`。该状态表示本轮不具备发布就绪条件，不代表候选已从 Sites static.directory 物理隔离。

#### Scenario: 加载新发布的目录
- **WHEN** 浏览器载入角色库或 CharacterStudio
- **THEN** 页面模块、角色清单、透明作品资源及其 Template 引用对应同一发布版本，不启动旧随机或旧编辑器；未批准候选不进入默认发现和公开角色调整

#### Scenario: 打开显式登记的 pending 详情
- **WHEN** 用户通过登记的受信任地址打开 pending Artwork
- **THEN** 同一 CharacterStudio 显示真实登记资源和待确认状态，保持只读，不开放角色调整，也不将候选加入默认角色库、搜索或标签

#### Scenario: 校验静态发布清单
- **WHEN** 构建器生成静态发布报告
- **THEN** `manifest.files` 与 `dist/` 闭包完全一致，`previewOnlyFiles` 是其中 pending 候选文件的显式子集；只要闭包包含 pending 候选，`deploymentReady` 即为 `false`，且报告不声称候选已从 Sites 目录物理隔离

#### Scenario: 发布清单缺少 Template 资源
- **WHEN** 已发布 Template 引用缺失、版本不符或未登记的任一类别图层或合法配方
- **THEN** 对应 Artwork 的角色调整能力不可用并说明资源失败，不从其它版本或角色静默替换；该降级不计入全角色调整覆盖

#### Scenario: 上传 stage 与仓库源文件闭包分离
- **WHEN** 构建发布上传 stage，且 `sourceOnlyFiles` 中含有已登记 PNG 图层源、其经证明的 WebP 派生已列入 `files`，而原始 Artwork PNG 仍供原图下载或 Export 使用
- **THEN** stage 的 `dist/` 子树只含 `files` 减去 `sourceOnlyFiles` 的精确清单，上传前回读路径、字节数和 hash 均符合清单；PNG 源仍保留在仓库，原图下载所需 PNG 仍在 stage 中，未授权的清理不得改写或删除源 PNG
