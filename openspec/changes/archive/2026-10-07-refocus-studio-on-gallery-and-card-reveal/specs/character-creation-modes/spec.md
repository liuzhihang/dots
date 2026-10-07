# Spec Delta

## ADDED Requirements

### Requirement: 新产品必须围绕作品操作且不恢复旧创建模式
浏览、详情、随机、Prompt 和下载 SHALL 直接引用完整 Artwork 与其发布资源，不读取或写入活动项目、旧 schema、角色模式、Canvas 配方、导入导出 JSON 或恢复草稿。用户无需账户即可使用本期提供的真实作品与参考图模板辅助；无效/未知输入 SHALL 安全处理，不建立旧项目 reader、兼容别名、迁移或新旧双轨。

#### Scenario: 提供旧项目文件或存储
- **WHEN** 浏览器中存在旧项目存储，或用户提供 v1/v2 项目文件
- **THEN** 产品不读取、迁移、恢复或清除这些旧数据，不开放项目导入入口；未知输入按新产品安全规则处理

#### Scenario: 直接带走一张完整作品
- **WHEN** 用户从详情或 DrawResult 复制 Prompt 或下载
- **THEN** 操作只使用该作品冻结版本，不需要登录、创建模式切换、应用当前项目或执行组件合成

## REMOVED Requirements

### Requirement: 整图与组合模式必须共用同一份角色设定
**Reason**: Artwork/Composer 双模式及角色编辑会话已退出。
**Migration**: 不迁移内部模式状态；用户从新的 Artwork 目录浏览完整成品。

### Requirement: 项目 JSON 必须包装模式状态且保持现有角色 schema
**Reason**: 本产品不再保存、导入或导出项目 JSON，也无需保留 v1/v2 或角色 schema reader。
**Migration**: 不迁移旧项目文件，不保留 alias、恢复副本和双轨解析；源文件及历史证据仍留在用户/Git 管理范围。

### Requirement: 整图模式只展示并原样下载本地登记的完整作品
**Reason**: “整图模式”是旧工作台内部模式名，已由 Artwork 目录和作品详情直接操作替代。
**Migration**: 将符合资格的已制作完整图按新 Artwork 清单逐项登记；不迁移角色模式状态。

### Requirement: 组合模式必须由可信分层图真实合成当前输出
**Reason**: 自由组件组合、通用组合 renderer 和“应用组合”已经退出产品；有限的预先设计搭配由各自完整 Artwork 承接。
**Migration**: 不迁移组合输入、配方或 resolver 引用；已批准完整作品保留原素材、来源和历史审批记录。未来每种被选入随机池的有限搭配必须单独登记为完整作品。

### Requirement: 每个文本或图像导出动作必须绑定同一冻结状态
**Reason**: 其冻结主体是正在编辑的角色项目与 Canvas 模式。
**Migration**: 对应一致性要求由 Artwork/DrawResult 的资源版本和 Prompt 快照承接；不保留可编辑角色快照或诊断渲染状态。

### Requirement: 结构诊断不得冒充整图或组合成品
**Reason**: 结构诊断入口退出普通运行和发布范围。
**Migration**: 保留历史诊断材料和取消记录，不保留诊断入口、导出器或 3D/CPU 兼容调用。

### Requirement: 创建能力不得要求账号、上传或自动代发
**Reason**: 旧要求描述工作台和项目 JSON 的图像处理；新参考图为独立的文字模板辅助，图片在 ChatGPT 上传。
**Migration**: 不迁移图片到公共目录或外部服务；参考图安全及 ChatGPT 手动附图行为由参考图能力合同重新说明。

### Requirement: 用户界面必须区分内置形象画廊和创作工作台
**Reason**: 工作台永久退出，保留图库/工作台双入口会继续承诺旧产品能力。
**Migration**: 用户直接在 Artwork 详情复制 Prompt、下载已验证资源或打开参考图辅助；无需恢复角色项目。

### Requirement: 现行项目背景字段只能作为惰性元数据
**Reason**: 旧 schema 和背景字段在新作品目录无读取场景；透明作品合同直接绑定实际资源。
**Migration**: 不导入、迁移或导出这些字段；保留历史版本和审批证据，页面 UI 底色继续与资源像素区分。
