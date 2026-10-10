# v97 发布回读

2026-10-09 原 Site 私有预览更新为 Version 45。部署 succeeded，URL https://dot.liuzhihang.chatgpt.site；访问策略与发布前逐字段一致。

- 发布使用隔离 Sites 源码目录，56个dist文件与冻结final-manifest完全一致，加官方打包位置hosting共57文件；archive-check.json验证hash与AppleDouble缺失。
- 本地main HEAD仍为b22c3f0df8b010da74b99caf9a80c417157857d7；未提交/推送GitHub，未sync/archive，未升级依赖。
- Sites源提交037fa2542c69a78dbb431742bfc95e166a99de37；前版本5个旧整景分层资源精确移至Site源码历史目录，退出发布。
- 首次发布准备因短期credential过期结束；刷新同一Site credential后成功。归档验证先按根目录hosting假设失败，随后按官方packager的dist/.openai/hosting.json布局回读，配置字节一致；未修改官方归档内容。
- 浏览器证据为本地冻结版本，发布成功为原生Sites回执；未额外抓取线上页或声称实体手机/Safari验收。用户艺术批准仍pending，OpenSpec3.7/8.3不勾选。

receipt.json记录部署/版本/URL；source-assembly.json与archive-check.json记录发布来源。没有存储credential或访问令牌。
