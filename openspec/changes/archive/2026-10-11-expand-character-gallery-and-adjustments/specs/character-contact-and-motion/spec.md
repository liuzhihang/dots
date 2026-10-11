# Spec Delta

## MODIFIED Requirements

### Requirement: 已发布完整作品必须符合身份和画面中的真实接触关系
每个已发布 Gallery Artwork SHALL 是符合其身份、肢体数量、配饰位置、衣物穿着、持物关系和遮挡的完整作品；原 Artwork MUST NOT 在运行时被编辑或由组件重组。Change 前 24 件已批准 Artwork 与本 change 后续获批并加入默认目录的每件 Artwork SHALL 通过自身 Artwork/version 精确绑定的 Template 提供家族适用类别真实调整。仅声明了所需基底、实际图层、锚点、遮罩、前后层关系和合法组合的 Template 才可在隔离 Draft 中更新支持属性；结果不得违反角色身份、物种解剖、材质或实际接触关系。系列或相似标签不得给其他 Artwork 继承图层或调整能力。


系统 SHALL 按家族提供以下调整范围：Dots / Grok Bot 取消服装 tab，只保留外观、配色、五官、配饰四类；Muse、动物、人物和独立机器人保留服装，共五类。Dots / Grok 的服装能力不适用，不以 None 控件充数，也不将衣物改名塞进配饰。每个适用类别仍须至少两个真实、合法可达且改变像素的结果。原有含围衣候选及检查记录保留为历史制作证据，不作为当前推荐或美术通过依据。

#### Scenario: 登记带有眼镜或头戴设备的成品
- **WHEN** 维护者将有来源和发布资格的完整角色图及相应调整素材登记为 Artwork/Template
- **THEN** 眼镜、耳机、帽子等实际画面与可选图层都按该角色的真实锚点贴合，接缝和前后关系自然且身份可辨；登记 Feature 不自动赋予其它角色相同图层或调整选项

#### Scenario: 登记人物或动物持物成品
- **WHEN** 完整作品显示人物手、动物爪或鸟翼持有道具
- **THEN** 原 Artwork 保留正确物种肢体与真实承托关系；只有制作并登记抓握图层、锚点、遮挡和合法组合后，持物才可成为可选输出，未制作的抓握组合不会成为选项

#### Scenario: 受控 Draft 的接触关系
- **WHEN** 用户通过已适配 Template 更换当前支持的服装或配饰
- **THEN** Draft 只按该 Artwork/version 登记的锚点、局部遮罩、层序和合法配方渲染；没有对应图层、锚点或基底时选项不可用，不补造或随意移动肢体，图层不得悬浮、穿插或错误遮挡

#### Scenario: 无肢体角色穿戴适配衣物
- **WHEN** 用户调整 Dots 或 Grok Bot 的服装或配饰
- **THEN** Dots 与 Grok Bot 保持无手脚和无其它肢体；不提供衣物或服装调整，配饰必须贴合其软体/几何主体，不制造握持或穿袖关系，也不得因前后层合成形成漂浮或穿插

### Requirement: 角色 Artwork 和透明导出必须保持真实 alpha
默认 Gallery 中的当前 Artwork SHALL 使用登记并验收为真实透明的 PNG；替换既有不透明资源时必须创建独立透明 Artwork/Asset 版本，保留原文件、历史 hash、来源和批准记录，不能把旧不透明字节改标为透明。原图下载 MUST 返回所选 Artwork/version 的登记原始字节，不添加 UI 底色、棋盘格、地面或脚底阴影。角色调整的预览、缩略图和 Draft SHALL 保持真实 alpha；未修改的有效透明默认配置导出登记原始字节，修改后的 Draft PNG SHALL 单独导出并回读验证 alpha。Gallery/CharacterStudio 的 CSS 底色只属于 UI，MUST NOT 烘焙进 Artwork、Template 图层、Draft 或 Export；产品不提供背景配置或带背景导出。

#### Scenario: 下载透明角色作品
- **WHEN** 用户下载当前 Gallery 中的透明 Artwork 或其登记的真实静态变体
- **THEN** 下载字节与该资源的登记版本一致，保留真实 alpha，不含 UI 背景或新增阴影；历史不透明字节只在明确的历史/降级资源语义下原样返回，不冒充当前透明 Gallery Artwork

#### Scenario: 导出透明 Draft
- **WHEN** 用户通过受控 Template 导出当前已成功渲染的角色调整 Draft
- **THEN** PNG 维持真实透明背景并回读验证 alpha；该输出明确标记为独立本地 Draft，不修改 Artwork 原图，渲染仍在进行或失败时不得导出

#### Scenario: UI 使用浅色卡片承载透明图
- **WHEN** 角色库、选项缩略图或 CharacterStudio 在深色页面和烟色玻璃界面中显示透明角色
- **THEN** 深色画布、玻璃或任何 CSS 展示色仅属于 UI 表面，不改变显示资源或前景 Draft 的 alpha，不进入 Prompt、原图或任何 PNG 导出；界面不提供用户可配置背景
