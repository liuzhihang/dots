# character-families Specification

## Purpose

规范 Dot Icon Studio 首批角色视觉身份与原创来源边界，将身份作为可扩展作品属性，并使美术确认绑定具体 Artwork/Asset 版本。

## Requirements

### Requirement: 首批视觉身份必须保留差异且不构成固定家族模型
Artwork SHALL 保留 Dots、Grok Bot、Meta Muse、原创人物和原创动物的首批身份差异；五个系列均可包含多个互相独立的完整静态 Artwork。首批 Gallery 曾以每系列 4 件、合计 20 件作为初始目标；截至 2026-10-11，本轮用户批准公开目录共有 24 件独立作品。当前数量仅记录本次批准版本，不限制目录后续扩充。后续新 Artwork MUST 逐件获得自身资源、来源和美术批准后才可加入默认目录，不能把 Draft、色卡、姿态资源或重复副本算作 Gallery 外观。五个系列是可扩展目录内容，不是角色渲染类或模板通用适配。Dots SHALL 保持短密绒、简洁成对眼和无肢体基准；Grok Bot SHALL 保持软几何主体与成对胶囊眼，不得变为屏幕脸；Meta Muse SHALL 保持奶油包覆体、内嵌脸面和短圆肢体；柴犬及其它动物 SHALL 保留真实物种结构；人物 SHALL 保留皮肤、发丝与衣料差异。新 Template 和页面 SHALL 对照各自身份参考，不自动改写已批准文件。

#### Scenario: 浏览五种首批视觉身份
- **WHEN** 用户浏览 Dots、Grok Bot、Meta Muse、人物或动物系列
- **THEN** 五个系列各以多个独立 Artwork 呈现差异；当前批准发布版本共 24 件且只有逐件获批的 Artwork 进入默认 Gallery。未来新增 Artwork 仍须逐件获批；系列本身不能推导新图层、肢体或配件能力

#### Scenario: 新制作的角色示意遵循身份差异
- **WHEN** 制作或评审一个角色 Template、编辑 Draft 或页面视觉
- **THEN** Dots 不新增无肢体基准中不存在的手脚，Grok Bot 使用软几何与成对胶囊眼，Muse 保持奶油包覆轮廓和内嵌脸面；现有作品的材质、身份及批准范围不被静默重绘

#### Scenario: 新增标签或系列
- **WHEN** 新会话新增 Character、该身份下的独立 Artwork，或有实际内容的新系列
- **THEN** 维护者按共用 Character/Artwork/Asset/Prompt 字段记录素材、来源、事实和逐件状态；有效且获批的数据由共用卡片、详情、搜索与 Prompt 流程展示，不增加角色专用页面或角色 ID 条件分支。无 Template 的内容仍可作为静态作品使用，只有显式绑定并通过单独验收的 Template 才提供 Edit

### Requirement: 原创身份、来源和角色特征必须能分别核对
人物和动物 SHALL 保持原创身份并记录来源。参考材料 MUST NOT 以原图像素、裁切或可辨识身份复刻进入 Artwork、Template 图层或 Draft；软件内置身份 SHALL 与原创角色区分。Feature 和可编辑值 SHALL 基于实际成图、可用图层及其来源登记，不因相似标签扩大身份、素材或使用范围。

#### Scenario: 以参考插画制作原创人物或动物
- **WHEN** 维护者以参考插画制作人物或动物 Artwork、Template 资源
- **THEN** 输出不含参考截图像素，也不复刻可辨识完整身份；来源及原创/内置身份状态可核对

#### Scenario: 登记实际配饰与物种特征
- **WHEN** 维护者登记动物 Artwork 的耳朵、口鼻、毛色、项圈或其可编辑图层
- **THEN** Artwork facts 与原图一致，编辑能力仅来自明确关联的真实图层，不因系列标签被其它 Artwork 继承

### Requirement: 美术确认必须绑定明确 Artwork 和资源范围
美术批准 SHALL 分别绑定具体 Artwork/Asset 版本及其用途。Template 基底、图层、合法组合所生成的预览样例、角色库页面和 CharacterStudio 呈现 SHALL 记录各自工程状态与用户确认范围；任一 Artwork 的批准 MUST NOT 自动批准 Template、导出 Draft 或新页面视觉。hash、图层、姿态或用途变化时须重新确认受影响范围。

#### Scenario: 使用已有图库批准记录
- **WHEN** 维护者把历史批准映射到当前目录
- **THEN** 只记录证据覆盖的原 Artwork 版本、文件和用途；无法映射的图层或页面保持未确认

#### Scenario: 更新作品文件或增加动作变体
- **WHEN** 新增 Character/Artwork、Template 图层、支持组合、Artwork 版本、动作变体或页面呈现
- **THEN** 每个独立 Artwork、资源和用途按实际影响范围记录工程与美术状态；新静态外观须自己的来源与批准，旧原图批准不扩大到新的图层、Draft 样例、动作或页面
