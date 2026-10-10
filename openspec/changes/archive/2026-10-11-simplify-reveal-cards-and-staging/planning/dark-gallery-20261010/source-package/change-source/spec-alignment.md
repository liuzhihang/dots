# Local Spec Alignment Plan

## 已读取的远端事实

仅针对b22c3f0，不代表当前用户本地主规范。

### modular-2d-composition

已确认Requirement标题：
1. `旧组件组装能力必须退出普通运行和发布路径`
2. `有限设计组合必须以完整作品登记`

处理：保留旧任意组装、旧schema/reader/JSON恢复/迁移退出的约束；修订“所有Canvas/composition都退出”的过宽规则，为新的显式模板编辑划清边界。对只为随机池设定的完整Artwork要求，与新的未发布内存Draft分开；不把Draft自动登记为可发布成品。若改名使用工具支持的RENAMED，再按新的标题MODIFIED。

### character-creation-modes

已确认Requirement标题：
- `新产品必须围绕作品操作且不恢复旧创建模式`

处理：保留原作品无需账户即可查看/下载和不读取旧项目的约束；明确新的Template/Draft不等于恢复旧项目系统，不继续全面禁止本地配方与草稿。

### AGENTS.md

远端仍约定“首页/画廊/灵感游戏”、禁止runtime编辑与Canvas重绘下载。
处理：主导航变为角色库/指南；删除现役随机规则；精确拆分“原图下载不重绘”与“Draft导出允许Canvas”，保留批准、来源、安全修改和Site身份约束。

## 已发现、需读取本地完整内容后处理

- `artwork-catalog`：Artwork事实、版本与批准，扩展独立Template/Draft边界，不让意图污染事实。
- `catalog-tags`：搜索/筛选，不因为Tag存在就推导可渲染能力。
- `family-navigation`：五系列归为过滤条件，不创建五套导航或新旧入口并存。
- `fullscreen-randomizer`：现役产品退出，按本地准确标题形成REMOVED与去依赖任务。
- `character-contact-and-motion` / `character-families` / `character-visual-acceptance`：保留身份与艺术门槛，补模板适配、原型误差裁决。
- 其余本地新增的详情、Prompt、资源加载、下载、静态首页规格：由Codex完整检索后列映射，不假定远端目录完整等于本地。

## 生成正式delta的要求

1. 使用本地主规范中的准确Capability路径和Requirement标题，不能只复制本包新标题再全部ADDED。
2. MODIFIED包含完整要求及所有应保留Scenario；REMOVED包含Reason与Migration。这里的Migration应明确“本次无旧产品迁移，保留历史记录，不引入兼容代码”，不能凭模板添加迁移逻辑。
3. proposal中Capabilities、design决策、tasks与spec要求一致；不保留相互矛盾的SHALL/MUST。
4. 新capability只用于真正缺失的行为边界；已有同义规范应修订而非复制。
5. 规划仅写change内delta；实施时按授权更新协作设计文档，主规范sync在另行授权后执行。
6. 用本机安装版本的schema/instructions/validate生成并校验。不init/升级，不使用未经核实的新版本元数据字段。
