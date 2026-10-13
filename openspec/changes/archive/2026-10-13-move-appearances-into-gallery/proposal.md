# Proposal

## Why

用户希望在图库选择基础外观，再在该形象内调整颜色、五官和配饰。首轮实现按 Artwork×appearance 生成90个来源入口，没有跨来源去重；蓝色、莓粉色和浅紫色圆球/云朵因此重复列出。用户明确纠正并授权归并同一基础外观，同时修正原生下拉按钮左侧留白。

## What Changes

- 保留90个内部 GalleryLook 来源绑定与44件原 Artwork/Template，新增83个公开 GalleryFigure。明确归并短绒圆球3个来源、短绒三瓣云朵5个来源、圆角三角2个来源；其余实际不同轮廓或身份维持独立，不按颜色、五官或配饰生成卡片。
- Figure编辑器固定基础外观，通过语义颜色、五官、配饰和适用服装选择已登记配方。跨来源变化切换到精确 Artwork/Template/Look/recipe，保持Figure会话、初始基线和补充要求，不拼装跨模板新组合。
- 全部540条原配方保持原来源及旧精确入口可用。公开选项对语义相同的值去重；相同语义配置有多个来源时，优先当前来源，再按稳定次序选取真实配方。
- 新增 `#/figure/<id>?v=<version>`，主图库和相关形象使用Figure。旧 Artwork/Look 链接保持精确绑定合同。
- 原生语言和排序select按当前选中文本收紧宽度，约10px文字至箭头间距；图库与触屏至少44px高，精细指针弹窗按用户后续要求收紧为36px；检查桌面/窄屏、中英文、焦点和键盘操作。

## Capabilities

### New Capabilities
- `gallery-looks`: 内部来源外观与公开基础形象的身份、分组、默认配方、语义选项、严格解析、路由和资源来源。

### Modified Capabilities
- `bounded-character-editing`: 固定基础形象下的跨来源合法配置、会话与异步成功快照。
- `studio-creation-experience`: 当前Figure展示与当前source结果操作分离，原始资料仍精确只读。
- `family-navigation`: Figure路由、恢复和下拉控件布局。
- `studio-visual-experience`: 统一不弹确认的语言控件恢复、跨角色语言继承与精细指针紧凑尺寸例外。

## Impact

涉及新Figure目录与编辑控制器、主图库/详情/路由、静态清单、受影响验证及文档。沿用现有renderer、素材和依赖，不改审批记录、原图、原Template数据、hosting、OpenSpec配置或锁文件。用户后续明确授权本地复验通过后发布现有 dots Sites 项目；GitHub 提交/推送、sync 和 archive 不在本阶段范围。
