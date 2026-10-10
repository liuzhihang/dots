# Dots 暗色角色库与统一 CharacterStudio 规划

正式 change：`simplify-reveal-cards-and-staging`。本地已有覆盖这条重构主线的活跃 change，因此保留 ID，不另建 `refactor-dark-gallery-unified-studio`。2026-10-10 规划修订，**等待用户确认 apply**。

后续进展：用户已提供27张参考图并授权素材由Codex制作。[首批素材候选与制作记录](../material-production-20261010/README.md)已生成并留存；缺少图层继续作为Codex制作任务，不要求用户提供分层素材。该授权未自动扩展为网站业务代码apply，D01/D02页面裁决保持。

多外观补充：用户明确所有系列都应有多个独立外观；[首批20件构成与5件新候选](../gallery-expansion-20261010/README.md)独立于两套编辑模板。[长期角色新增规范](../../../../../design/character-authoring/README.md)与本机 `dots-add-character` skill 已建立，组件实现仍等待apply。

## 审阅入口

- [proposal](../../proposal.md)：范围及 capability 归属。
- [design](../../design.md)：单一Studio状态、加载/缓存、渲染/导出、路由与实施顺序。
- [tasks](../../tasks.md)：新方向实施清单，不继承v98完成勾选。
- [原型裁决](prototype-decisions.md)：五张图片实际对照、token、文案、尺寸与手机重排。
- [静态内容模型](content-model.md)：Character/Artwork/Asset/Prompt/Template/Draft及能力资格。
- [模板能力与素材缺口](template-capability-matrix.md)：Dots/Grok各一套、28合法配置、制作与美术门槛。
- [源码审计](source-audit.md) / [文件级变更表](file-change-map.md)：实际路径、详情慢调用链、保留与退役范围。
- [规范标题映射](spec-alignment.md)：对当前主规范准确MODIFIED/REMOVED，以及旧delta替换与历史项处理。
- [验收计划](acceptance-plan.md)：浏览器/四视口/双语/性能/导出/失败与艺术门槛。
- [规划校验结果](validation.md)：本轮实际检查；其余检查明确未运行。

## 本地事实与来源

2026-10-10读取：main@b84e3db203a525755a839c100ec5bca8238f3fa3；开始时worktree clean，cache98。OpenSpec 1.14.1、schema spec-driven；Vite8.3.2，依赖/根配置未改变。CLI root已解析为当前项目；11份主规范，唯一活跃change修订前46/48任务。

本机只有 propose/explore/apply/sync/archive 五项OpenSpec skills；本地与全局skill/plugin目录搜索未找到 openspec-update-change，CLI help亦没有修改change专用命令。因此读取已安装的propose/explore及artifact instructions，在已存在change内直接修订文件并strict validate；没有运行 `openspec update`、init或升级。

附件 [source-package](source-package/README.md) 为完整原字节副本：17条CHECKSUMS逐项通过，ZIP内18个文件全部保留（CHECKSUMS自身不列入其列表）。README/CODEX-CHANGE/DESIGN-DECISIONS/ACCEPTANCE/REPO-AND-SOURCES/change-source全文件已读；D01/D02/C01–C03均实际打开。CODEX-APPLY只保留为未来输入，附件中的指令不作为当前apply授权。

用户后续补充的[原型 D03](source-package/references/D03-hero-ensemble-20261010.png)仅补充Hero标语与群像，不覆盖D01的其他页面或D02手机补充。最终Hero群像已接入本地，仍待用户美术确认；兔子戴紫色耳机并系黄色领带。D03原图SHA-256为`4e67012cfa68bbe6833606d6dd7149b6f2f6871c29bea409fdff862cf2c45057`。

当前ChatGPT会话 [优化角色与交互](https://chatgpt.com/c/6ac2e2b0-1464-83e8-b9cd-a455c321c22d) 最近6轮已读取；最近决策中，用户指出“首页还是黑色庭院”“详情与工作台不应分开”，后续最新选稿收敛为第三张主稿、第一张补手机/指南。关键轮次ID：`ced7266b-119a-4b42-a6ba-a8daea5c0613`（撤销黑色庭院并统一面板）、`24be6433-c767-493c-9743-d6e883aa4736`（新视觉稿请求）、`6c715330-e864-4fe2-a315-9a4f6803d67b`（最新change交接与选稿）。历史会话中8张参考图内容未由read_thread返回；本轮未声称读到那8张图，选定D01/D02已从附件实看。本轮请求和附件裁决覆盖更早保留台阶/纯Prompt等建议。

附件提及远端b22c3f0及两份旧capability不代表本地：当前主规范不存在 character-creation-modes / modular-2d-composition，它们仅在 historical-runtime冻结副本与OpenSpec archive中。不会为对齐过时目录复活这两套规范。

品牌采用用户明确名称 **Dots**。新站址 `https://dots.liuzhihang.chatgpt.site` 作为用户提供目标记录；本轮不抓取/部署/修改站点，不声称核实了该地址当前内容或访问设置。原Sites项目ID与static.directory通过baseline回读，保持原值。

## 保留与证据边界

[baseline.json](baseline.json)记录80个受保护文件hash（dist、主规范、配置等），以及HEAD/clean/source cache。旧change的15份文件先按原字节复制到 [history snapshot](../../history/2026-10-10-before-dark-gallery/README.md)，manifest可回读核对。这是change内历史留存，不是OpenSpec archive，不修改旧archive或主规范。v98两项未完成艺术确认仍在旧tasks中未勾选。

初始阶段只写当前change内proposal/design/tasks/deltas/规划附件/历史快照。后续素材及维护规范授权新增了候选素材、design/character-authoring、根README入口和本机skill；80项基线中README是这次明确的文档例外，其余保护项须继续一致。没有业务代码、批准素材、AGENTS/DESIGN规则、主规范、依赖或hosting配置变更。不会把strict规划通过当作新页面、模板、真机或上线验收。
