# 已核对来源与边界

核对日期：2026-10-10。

## 用户项目（只读）

通过已连接GitHub读取：`liuzhihang/dots`，远端main为`b22c3f0df8b010da74b99caf9a80c417157857d7`。
该提交描述的是旧六卡发现及归档；该快照`openspec/changes`仅返回`archive`目录。
这不证明当前用户本地没有未归档change，也不证明已部署版本是这个commit。不得checkout旧提交作为实施基线。

读取的文件：
- AGENTS.md：旧随机导航、无上传/账户、禁止runtime组装、原图不重绘、dist可编辑、保留Site身份。
- openspec/config.yaml：`schema: spec-driven`；文档中文，结构标题与SHALL/MUST保留英文。
- openspec/specs/modular-2d-composition/spec.md：旧组装退出与有限组合必须成品登记。
- openspec/specs/character-creation-modes/spec.md：围绕成品操作，不恢复旧创建模式。
- openspec/specs目录：用于定位需本地继续读取的能力，不等于已经读完全部主规范。

没有修改任何GitHub文件/分支、用户Library、Sites、权限或本地工作树。

## OpenSpec官方文档（2026-10-10读取）

https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md
https://github.com/Fission-AI/OpenSpec/blob/main/docs/commands.md
https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md
https://github.com/Fission-AI/OpenSpec/blob/main/openspec/specs/openspec-conventions/spec.md

文档列明Codex技能入口：`$openspec-propose`、`$openspec-update-change`、`$openspec-apply-change`。
具体仍按用户已安装的版本和skills/instructions工作；本次不要求升级。`openspec update`安装更新CLI与“修订change”不是同一操作，勿混淆。
正式change通常包含proposal、design、tasks、spec deltas。本包是面向当前本地对齐的规划材料，未执行项目OpenSpec验证。
