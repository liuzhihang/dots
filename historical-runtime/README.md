# 旧产品非发布记录

这里保存重构前的运行源码、旧测试工具、QA 与未批准组件。74 份原始文件的字节和 hash 见 `design/acceptance/current-20261007-v87/runtime-retirement.json`：72 项活动路径退出，浏览器与透明输出验证脚本在原路径按新合同改写，旧字节保留于此。4 份原规则保存在 `docs/`，hash 另见 `design/acceptance/current-20261007-v87/document-retirement.json`。旧工具的相对路径及依赖已不适用于现产品，不是可执行验收命令。

内容退出新产品范围，不表示旧未通过任务变为通过。不得将此目录加入静态发布、入口模块图或 build。现有批准美术、来源、Git 历史、`design/acceptance/` 与 OpenSpec 归档仍在原位置保留。

`retired-assets/` 另保留45份未发布/未引用的静态图，位置与原字节hash见 `design/acceptance/current-20261007-v87/asset-retirement.json`。其中5个姿态仍待艺术确认，不进入发布目录；旧场景版本/展板不冒充新作品或动画。

2026-10-08 揭晓卡调整另保留 33 份旧扁平 SVG 及其原登记，位于 `retired-assets/reveal-svg-v1/`，原路径与 hash 见该目录的 `retirement.json`。旧制作脚本移入 `scripts/generate-reveal-visual-candidates.mjs`；这些图和工具不再进入当前构建或发布。新立体 PNG 仍待用户艺术确认，旧候选未因此转为通过。
