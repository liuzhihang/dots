# 本轮规划校验记录

日期：2026-10-10。change：`simplify-reveal-cards-and-staging`。本文件记录规划及后续素材/维护规范检查；未实现新页面或模板。下面原规划的41项/80文件结果保留为当时记录，当前多外观补充结果见文末。

## 工具与 artifact 状态

- 沿用本地 OpenSpec **1.14.1**、**spec-driven** schema；未 init、升级或改根配置。
- `openspec status --change simplify-reveal-cards-and-staging --json`：exit 0，proposal/specs/design/tasks 均为 done。这里的 `isPlanningComplete: true` / `isComplete: true` 只表示规划 artifact 齐备。
- `openspec list --json`：exit 0，仅一个活跃 change，**0/41** 实施任务，状态 in-progress。全部任务未勾选，等待用户确认 apply。
- `openspec validate simplify-reveal-cards-and-staging --strict`：最终 exit 0，当前 change 通过。
- `openspec validate --all --strict`：最终 exit 0，**12 passed / 0 failed**（11份主规范和1个活跃 change）。

首次 change strict 曾 exit 1：MODIFIED 正文更名了主规范原 Scenario，校验器将其识别为场景遗漏。查验本机安装代码 `dist/core/specs-apply.js` 的 `diffScenarioNames` 约束后，保留准确 Scenario 标题，并重写正文为当前行为，再运行上述两项检查通过。旧随机、站内上传、浅色卡片等标题只保留为校验锚点或退役边界回归；不恢复旧功能，ChatGPT 中用户自行附图仍允许。具体说明见 [spec-alignment](spec-alignment.md)。

## 规范语义与标题核对

逐项读取本地11份主规范，并以准确 Requirement 标题核对12份 delta：现行54条全部有明确处理，**MODIFIED 39、REMOVED 15、ADDED 17**；MODIFIED/REMOVED 标题未匹配0，ADDED 与主规范重名0，同一标题重复操作0，未处理旧标题0。详细标题与处理理由见 [spec-alignment](spec-alignment.md)。

人工检查了统一 Studio、View/Edit 草稿保留、Reset/Cancel、所有离开出口 dirty guard、直链、原图与 Draft 输出分流、请求/缓存/迟到回调、D01/D02 优先级及28个模板配置。退出的是旧万能组装与兼容；受控 Template 可在隔离 Draft 中渲染，不能继续用旧全面禁运行时编辑的语义约束新模板。主规范和历史副本本轮不 sync 或改写。

## 来源与范围保护

| 检查 | 实际结果 |
|---|---|
| 附件 CHECKSUMS | 17条逐项通过；CHECKSUMS自身不在其列表 |
| 保存附件 vs 原始 ZIP | 18个文件逐字节一致 |
| 历史快照 vs manifest | 15份原规划文件 SHA-256 一致 |
| 历史快照 vs Git HEAD 原文件 | 15份逐字节一致；旧未完成艺术任务仍未完成 |
| 受保护文件 vs baseline | 80个文件 hash 全部一致，包含 dist、15批准原图、两 pending、主规范、规则、配置、依赖和发布 manifest |
| HEAD | 仍为 `b84e3db203a525755a839c100ec5bca8238f3fa3`，未改变 |
| Git 变更范围 | tracked diff + 全部 untracked 均在当前 change 目录，无范围外修改 |
| `git diff --check` | exit 0，无空白错误 |
| 文档相对链接 | proposal/design/tasks和规划文档的31个链接全部可达；独立审阅另确认总览的15个相对链接可达 |

这次历史留存是 change 内的审阅快照，不是 OpenSpec archive。未 checkout、reset、clean、提交或推送。附件是证据副本，不是覆盖本地主规范的安装包。

## 明确未运行或未验收

- 本轮未运行 build、单元/浏览器/下载/渲染/性能检查，未制作模板资源，也未生成新的运行验收报告；相关命令和具体门槛在 [acceptance-plan](acceptance-plan.md)。
- 详情慢的调用链结论来自源码阅读；实际耗时、冷/热对比及内存释放结果待 apply 建立基线后实测。
- 28个合法配置是实施范围，不是已通过结果；当前公开本地编辑模板数仍为0。
- 新页面、新模板默认重建、选项及组合未获本轮美术批准；实体设备、目标包与部署未验证。
- Sites 身份和访问设置保持本地原配置；新地址是用户提供的目标，本轮未验证远端内容或修改远端。

## 本轮交付边界

规划与检查记录可供用户确认；此记录不授予 apply、主规范 sync、Git 提交、部署或 archive 的后续权限。初版41项在多外观补充后为43项，仍等待apply；发布及其他工作流操作按用户授权边界执行。

## 多外观与可复用流程补充检查

用户后续授权素材制作及角色新增规范。当前已生成5件独立完整Artwork候选，每系列1件；规划目标15+5=20，各类4件，20非上限。两套模板的28配方不计入图库。实际图片和制作检查见 [gallery-expansion](../gallery-expansion-20261010/README.md)，所有候选pending、未接入。

| 检查 | 本次实际结果 |
|---|---|
| 当前change strict | exit0，Change valid |
| `openspec validate --all --strict` | exit0，12 passed / 0 failed；未sync或archive |
| 任务清单 | 43项未勾选；增加2.8五类素材与3.6数据扩展合同，未继承旧完成状态 |
| 80个保护项复核 | 79项hash不变；唯一例外README是用户新授权的角色维护入口，正文运行说明未重构。15原图、业务源码、主规范、配置和历史保护项不变 |
| 改动范围 | 当前change + design/character-authoring + 根README；项目外仅新增本机 `~/.codex/skills/dots-add-character/SKILL.md` |
| 图片文件检查 | 7张PNG中5张选作审阅候选、2张未选；实际均1254×1254 RGBA；逐文件bytes/hash/alpha/bbox存generation-manifest，未用脚本修改图片 |
| 长期规范及Brief | 角色/Artwork/Template分离、五类身份规则、参考/来源/艺术门槛、命名目录、静态内容/组件契约；模板和5份制作Brief的YAML可解析 |
| skill结构检查 | 当前bundled Python执行skill-creator quick_validate，修改后再次exit0，Skill is valid |
| skill独立试用 | 模拟“新增1只黑白奶牛猫，只做候选”，正确保持独立素材/无模板/不接入/不以20封顶；发现的规则入口、本地参考、路径和未apply模型依赖缺口已修订。未实际生成测试猫或业务写入 |
| 文档链接 | 检查新指南、根README、proposal/design/tasks与本轮素材Markdown共12份文件，本地链接无缺失 |
| `git diff --check` | exit0，无空白错误 |

未运行新网站build/browser/download/renderer/performance验收；没有新可公开编辑模板。素材仍有透明边缘残点/人物留白问题，后续修整、资源接入与艺术批准分别待完成。原Sites身份、访问设置和部署未操作。
