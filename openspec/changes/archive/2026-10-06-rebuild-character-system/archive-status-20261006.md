# 归档记录 · 2026-10-06

**Change:** rebuild-character-system

**Schema:** spec-driven

**Archive:** openspec/changes/archive/2026-10-06-rebuild-character-system

用户明确确认 Site35/cache83 五组当前内置形象与工作台形象美术，并选择模板合成和Prompt为本阶段交付。保留任务25/25完成；原11项3D工程/精细基准要求取消，未勾为通过。原36项计划和20/36状态逐字留存在 [历史计划](history/pre-scope-20261006.json)，逐项处理见 [范围决策](scope-decision-20261006.json)，批准范围见 [模板人工确认](acceptance/current-20261005-v83/gallery-workbench-user-art-approval.json)。

## 规格与校验

- 六个能力delta已同步并逐条回读一致：新建character-families（10条）、character-contact-and-motion（7条）、character-visual-acceptance（7条）；character-creation-modes、studio-creation-experience、studio-visual-experience各修改两个完整requirement，所有未提及requirement及既有scenario保留。后两份主规格按素材和页面版本记录人工确认，冻结页面的旧候选标签只反映发布时状态。
- 主规格strict 8/8、归档changes strict 5/5通过。当前无活动change。
- 独立只读复核通过：六份delta与主规格一致，既有scenario保留，25项完成与11项取消及版本绑定确认记录一致，未扩大为3D或全量导出/实体手机验收。
- 全仓Markdown本地链接经URL解码检查441条有效；归档过程中旧有效链接均保留可访问，原URL编码图名可正常解析。
- verify-character-system通过57个旧预设、24个迁移、五组身份、接触边界及200次单基准随机检查；verify-atelier的7项检查通过；verify-creation的项目/原图/Prompt/迁移/可信配方和异步捕获检查通过。仅修测试对归档基线及已撤下资产的引用路径。
- freezer在独立临时项目中验证：新记录写入design/acceptance/current-日期-v缓存版本，重复冻结拒绝且不改QA快照，不重建OpenSpec活动目录。本次未对真实项目运行freeze。

## 保全与边界

原sourceId及源码提交绑定的是已发布Site35/cache83。四个归档相关工具脚本调整后，当前仓库工具字节与旧snapshot不同；dist/src、模板资源、package及既有发布runtime保持不变。历史source snapshots、矩阵、PNG、用户此前的首页确认和Site回执不追改。位置映射见 [归档路径记录](archive-location-20261006.json)。

607个原有未跟踪文件全部逐字节保留，其中604个随change目录迁移，未自动纳入Git提交。本次仅整理规范、文档和归档工具路径，没有保存/部署新的Site版本。当前全量PNG下载字节、所有剪贴板及实体手机未验证项不因人工美术确认或归档记为通过。
