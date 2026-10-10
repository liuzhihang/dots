# OpenSpec 历史与主规范清理记录

## 范围

按用户最新确认，以完整角色作品和揭晓卡体验为当前产品方向。用户明确同意合并或移除已不适用的历史 spec/change，产品仍在开发，不为尚未发布的旧方案增加兼容层。本次整理主规范、项目设计文档及历史 change，不修改网站代码、素材或当前 change 的 proposal/design/tasks/specs，不提交、部署或归档当前 change。

核对到的 OpenSpec CLI 为 1.14.1；沿用仓库现有配置，没有升级或初始化。

## 当前主规范

保留 11 个仍承载当前行为的能力规范。把当前 change 的三个 delta 应用到主规范：

- artwork-catalog：八类完整事实派生 3–6 张有效卡；前三类必显，可选三类按真实已确认内容出现；中性风格示意、素材复用和无值省略规则。
- fullscreen-randomizer：每轮清单在滚动前固定；卡片只显示线索图与类别名；第一张防剧透；卡片收拢后在同一舞台显示完整角色。
- character-visual-acceptance：线索来源、适用作品、版本与审批独立记录；待审线索只可进入显式审阅预览，不进入公开默认随机池。

合并后移除仅定义旧组件系统、旧项目模式及组合矩阵的主规范：

- openspec/specs/modular-2d-composition/spec.md
- openspec/specs/character-creation-modes/spec.md
- openspec/specs/composition-coverage/spec.md

作品资源、可复现状态、真实下载与页面核验要求分别保留在 artwork-catalog、character-visual-acceptance 和 fullscreen-randomizer。移除 family-navigation 中专门处理旧工作台路径/项目恢复的条款；保留当前页面导航和 overlay 返回。将作品来源与当前维护者发布资格保留为现行规则；用户外部创作后上传成品及其存储/审核作为后续规划，不纳入本次交互 change。

## 纯规划归档清理

以下归档目录只有规划、任务清单、delta 和 OpenSpec 元数据，没有独立素材来源、用户艺术批准、发布回执或验收资源。按授权移除整目录：

- openspec/changes/archive/2026-10-05-add-fullscreen-randomizer/
- openspec/changes/archive/2026-10-05-refactor-family-navigation/
- openspec/changes/archive/2026-10-06-add-composition-visual-regression/
- openspec/changes/archive/2026-10-06-add-modular-2d-composition/
- openspec/changes/archive/2026-10-06-evolve-catalog-tags/
- openspec/changes/archive/2026-10-06-make-character-output-transparent/
- openspec/changes/archive/2026-10-06-refine-family-scene-composition/
- openspec/changes/archive/2026-10-06-upgrade-randomizer-to-rendered-recipes/

删除前任务清单状态（仅说明历史计划状态，不能作为本轮实现或验收依据）：

| 历史 change | 删除前任务状态 | 保留的限制/未通过状态 |
|---|---:|---|
| add-fullscreen-randomizer | 14/14 | 只记录旧任务完成状态；没有独立的当前视觉批准 |
| refactor-family-navigation | 12/12 | 只记录旧导航任务状态；不继承旧路由合同 |
| add-composition-visual-regression | 21/22 | 3.4 当时仍待用户对页面范围确认 |
| add-modular-2d-composition | 22/24 | 3.4、5.4 当时待逐项美术审查；cache85 精确版本 rejected 状态不改 |
| evolve-catalog-tags | 11/12 | 3.4 当时待用户预览确认 |
| make-character-output-transparent | 8/8 | 只记录旧任务状态，不代表当前作品或卡片验收 |
| refine-family-scene-composition | 15/15 | 完成记录引用 rebuild 的具体首页批准范围，不扩大该批准 |
| upgrade-randomizer-to-rendered-recipes | 16/18 | 5.4、5.5 当时仍待美术/用户预览确认 |

上述计划目录虽被移除，原报告、素材或状态证据若另存于 design/acceptance、design/modular-pilot 或其他被保留目录，仍按原状态保留。归档删除不会把 pending、rejected、cancelled 或未覆盖状态改成通过。

## 保留证据的历史归档

以下 change 仍含来源、批准、素材、发布回执、截图或验收日志，保留这些资源与状态记录，只删除已经失效的执行合同：

- 2026-10-05-refresh-studio-visual-design：保留 archive-status、QA、来源/批准记录、发布回执、截图、清单及资源；移除 proposal、design、tasks、delta specs 和 OpenSpec 元数据。新增短 README 指向只作历史证据的记录。
- 2026-10-06-rebuild-character-system：保留 acceptance、baseline、references、source audit、scope-decision、archive-status 和 history/pre-scope-20261006.json。后者记录原36项计划及取消范围，不作为执行合同。保留原任务勾选与11项3D取消事实；移除 proposal、design、tasks、delta specs 和 OpenSpec 元数据。README 说明历史范围和用户批准的资源边界。
- 2026-10-07-refocus-studio-on-gallery-and-card-reveal：保留 archive-closeout、验收映射、有限作品和参考图来源、归档验证日志及其余实际证据。删除 proposal、design、tasks、delta specs、过期清理图/内容目标/验证计划/cache90同步计划及 OpenSpec 元数据。归档时55/64完成、9项未完成的原状态保留；README 说明以当前主规范为准。closeout 对已移除的 tasks.md 链接改为历史状态说明。

## 文档与验证

根 AGENTS、DESIGN、README、设计审查规则和视觉交互文档已统一描述当前产品方向：动态3–6卡、卡片无描述、首卡不剧透、全卡停止后同屏揭晓。OpenSpec 规范、相对链接、被代码/脚本引用的保留路径以及严格校验结果将在本记录末尾追加。

## 本轮回读补充

- 清理后保留 11 个主规范；当前 change 加入严格验证共 12 项，全部通过。
- 只读复核 67 个根文档、主规范、当前 change 和保留归档 Markdown，检查 280 个本地链接，没有因删除造成的断链。character-families 中遗留的“首页或六卡”已窄改为“首页或揭晓卡”。
- 基线回读 5393 个历史图片/JSON/日志等证据、既有五个 skill 文件及 Site 身份文件，hash 全部一致；结果见当前候选目录 preserved-evidence-audit.json。Git HEAD 未变。
- 33 份旧 SVG 和旧 SVG 制作脚本原字节转入 historical-runtime，保留原登记与路径/hash映射；它们不再承担当前卡片视觉用途。原图库 Artwork 未修改。正式接入后的资源/build结果另见本轮最终验收记录。
