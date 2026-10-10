# v96 预览发布

用户于 2026-10-09 明确要求先发布到网站预览。本次发布成功，Sites Version 44，原站点地址与仅本人访问设置不变。

55 个运行文件与 v96 构建/浏览器快照逐项 hash 相同；官方打包结果为 55 运行文件加 hosting 清单，共 56 文件。独立 Sites checkout 推送了对应 source commit，未提交或推送本地 GitHub 项目。旧远端 dist 的 47 个退役文件保存在 Sites 源仓库历史目录，不进入部署包。

receipt.json 是最终部署回执；source-assembly.json、archive-check.json 是源码与归档校验。上层 scope-audit / verification-summary 中“未部署”描述实施收尾时点，本文件记录之后获得授权的发布。场景/页面美术批准仍 pending，OpenSpec 3.7/8.3 未勾选；没有 sync/archive。

原生部署状态 succeeded，已回读当前版本44及未变访问策略。此次未补做线上浏览器验收，用户可从 https://dot.liuzhihang.chatgpt.site 预览。
