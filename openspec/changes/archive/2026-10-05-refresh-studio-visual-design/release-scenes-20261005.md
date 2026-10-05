# 角色关系与真实姿态候选发布 v32

2026-10-05，已有 Dot Icon Studio 原站更新完成：[https://dot.liuzhihang.chatgpt.site](https://dot.liuzhihang.chatgpt.site)。用户最新要求整体 review 和优化，沿用此前远程查看原站的发布授权。

| 层级 | 回读结果 |
| --- | --- |
| 基线 | Git `5cf1b4751b03cb07f9b4894d29fec25f0bcd9a67`，原 Site v31 |
| 本轮运行源码 | `1250fdce605e8ed8d422534bded626a9b939a0ae`；精确 isolated index 提交 67 项冻结路径，工作树干净 |
| GitHub main | [private dots repository](https://github.com/liuzhihang/dots) 远端回读同一源码提交；首次 HTTPS 408 未成功，临时单次 HTTP/1.1 与 50MiB postBuffer 重试后成功，没有持久修改配置或 remote URL |
| 原 Site | `appgprj_6abf8f3128308191b2f8a2a9c6003704`；未创建新站 |
| 保存版本 | v32，`appgprj_6abf8f3128308191b2f8a2a9c6003704~appgver_93eaccfc0e448191b86975e16fc349ff`，source commit 回读为上述运行源码 |
| 部署 | `appgdep_6ac367b3984081919c200cfc117c8a23`，`succeeded`，2026-10-05T09:02:54.779024+00:00；failure_message=null |
| 访问策略 | custom，1 user/1 owner、0 外部访客、0 groups、revision 1、0 automations；与发布前相同 |
| 本地发布包 | 80 个 frozen dist 普通文件 + `dist/.openai/hosting.json`，81 files、10 dirs；44,617,084 字节文件内容。gzip 43,128,172 字节，SHA-256 `c9543dc7d725a9f1afa40b21c7ed34fcde8be0aa55518512f56b2ceb7834e93f` |
| 原生保存存储 | tar，81 files、44,687,360 bytes，content_hash `sha256:73e35b26a5d56d18243a627ad0f3c5a25d7eab545a3836b5858dcadf371d07da`；与本地 gzip 哈希是不同计量对象 |

检查完成：构建、10 个 verify 脚本、4 个 OpenSpec change 严格验证通过；最终窄屏修复后对应三个检查再次通过。OpenSpec 保持 1.13.1，无新依赖或 schema 升级。

独立源码/归档审查核对 67/67 提交文件、80/80 runtime 哈希、包路径集合及 81 个普通成员；无额外文件、链接、路径穿越、AppleDouble 或隐藏尾随内容，gzip 与 tar 结束区有效。原 hosting.json 字节及原站身份保持。官方 Site workflow 已推送精确源码并打包，原生私有保存部署调用返回成功，之后独立回读版本、源码、访问策略及部署状态。

本轮页面、输出和发现见 [scene-review-20261005.md](scene-review-20261005.md)，精确证据见 [冻结清单](references/scene-page-qa-20261005/source-manifest.json)、[发布回执](references/scene-page-qa-20261005/release-receipt.json)。后续文档提交只记录本次结果，不改变部署所用 runtime 内容。

七张伙伴关系场景、五组各一个真实静态姿态已供远程查看；没有新增图库身份，仍为 15 项。此次完成表示实现、检查、提交和部署完成，不能推算为用户逐组网页美术认可。真实远程手机和五组美术确认仍待反馈；角色 change 未归档。本站仍使用已确认蓝色短绒 Dots 基准；与 R01 更突出紫色球的差异留待用户反馈，不因截图或发布推定通过。没有仅为完成发布而导航生产网址。
