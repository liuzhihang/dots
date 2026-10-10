# Dot Icon Studio · OpenSpec Explore 交接包

## 如何交给 Codex

在已有 dots 本地仓库的 Codex 会话中附上本ZIP（或解压后的目录），再发送 CODEX-EXPLORE.md 的完整内容。当前官方 Codex 集成常用 `$openspec-explore`；以本地实际安装的skill/别名为准，不为此升级或重新初始化OpenSpec。

也可以先调用已安装的 Explore skill，再说：

> 读取附件CODEX-EXPLORE.md、DESIGN-AND-SCOPE.md和全部reference图片。按本次静态重构范围执行Explore，仅分析和出计划，不写代码、不自动创建或修改change。先识别两张选定原型与本地实际实现。

不要仅提供ChatGPT会话链接。部分会话内容可能无法从Codex直接读取，本交接包是自包含的最新结论。

## 文件角色

- CODEX-EXPLORE.md：可直接发送的完整Explore指令。
- DESIGN-AND-SCOPE.md：本轮产品、视觉、角色、交互、静态架构与排除范围。
- REFERENCES.json：原始文件名、会话文件ID、重命名关系、尺寸与SHA256，用于避免引用错图。
- references/P01-selected-third.png：上一轮第三张，主要UI/画廊/详情/移动端参考。
- references/P02-selected-last.png：上一轮最后一张，仅补首页宽幅阶梯构图。
- references/C01-muse-identity.jpeg：Muse身份纠偏。
- references/C02-grok-identity.jpeg：Grok软几何与胶囊眼纠偏。
- references/C03-dots-material.jpeg：Dots短绒、轮廓与配件辅助参考。

P01/P02没有改图、裁图或重画。C01–C03不是第三套页面方案，也不是生产素材。

## 本轮不会做的事

无旧产品兼容、无用户上传、无数据库或对象存储服务、无登录/收藏/投稿、无站内聊天/生图、无MCP自动运营、无老虎机、无自由组装。内容由维护者在仓库维护并静态发布。

本包没有修改GitHub、Sites、本地用户仓库或任何OpenSpec change。没有包含或复制完整历史会话，也没有包含可直接上线的独立场景动画资产；它包含必要参考与最新决策摘要。

## 公开工作流参考

核对日期：2026-10-09。具体工具入口和现有项目规则以Codex本地安装为准。

- https://github.com/Fission-AI/OpenSpec/blob/main/docs/explore.md
- https://github.com/Fission-AI/OpenSpec/blob/main/docs/how-commands-work.md

Explore完成后，先由用户确认计划和change处理方式，再进入规划和实施。
