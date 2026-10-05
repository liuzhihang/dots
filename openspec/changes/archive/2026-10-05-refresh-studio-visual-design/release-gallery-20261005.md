# 家族群像与画廊发布记录 · 2026-10-05

## 本轮实现与验证

原站更新到 **v31**：首页由 12 张独立角色素材组成，五张家族卡各 3 位成员；五组共 15 项内置形象提供筛选、搜索、原图与对应 Prompt，并以单一入口进入工作台。用户界面的 Artwork/Composer 页签移除，保留内部项目兼容。

工作台支持可信完整模板和背景 Canvas 合成，Dots 基准另有裸形/贴合耳机完整配方。高级外观等未登记配置只影响 Prompt/JSON，明确标记未渲染并阻止当前角色 PNG；没有冒充任意生图或换装。真实界面、下载和确认边界见 [gallery-qa-20261005.md](gallery-qa-20261005.md)。

构建、十个相关回归脚本与四个 active change 的严格 OpenSpec 校验通过；最终窄修另复查画廊、创作 UI、导航、模块缓存及创作导出。独立源码审核未发现发布阻断项。OpenSpec 1.13.1、依赖、角色 schema 10 与项目 JSON 文档 v1 未升级。

## 精确源码与发布包

基线 `c763bf52b3545a70a121d8154cf7847615d62b8f`；冻结的 72 路径清单使用独立 Git index 与 literal pathspec 精确提交。源码提交 **`47595d624318cc081986d46263552b8f51506f91`**，已推送既有私有 GitHub `main` 和原 Site source；两处回读均一致。后续提交仅补充本记录与任务状态，运行时文件保持与已部署源码一致。

冻结清单 SHA-256：`404c269d5d911b3f3ce220fe00a5c3fc880f325cab72f3b5c42822f10ad3bfbc`，副本保存于 [source-manifest.json](references/gallery-page-qa-20261005/source-manifest.json)。Sites workflow 使用已打开的隔离 checkout、同一源码提交和 `COPYFILE_DISABLE=1`，无额外源状态变动。

原始压缩包 SHA-256：**`a2c101ae6d9609712ceb0ff9b82707657a90d9829adfa75b5f64d286f15a5510`**。独立审核确认 68 个普通文件、8 个目录、29,001,981 文件内容字节；67 个静态文件与清单及冻结 checkout 逐字节一致，另有官方打包器生成的唯一 `dist/.openai/hosting.json`，Site identity 与 `static.directory: dist` 一致。没有重复成员、路径穿越、符号链接、AppleDouble、参考原图、QA 截图或已撤下错误素材。归档位置遵循官方 package-site.sh 的 `tar ... dist` 契约；源码清单里的 root hosting 项记录源配置，不代表归档根路径。

## 原站回读

| 项目 | 实际结果 |
| --- | --- |
| 原站 | https://dot.liuzhihang.chatgpt.site |
| Site ID | `appgprj_6abf8f3128308191b2f8a2a9c6003704` |
| 版本 | **31** |
| Version ID | `appgprj_6abf8f3128308191b2f8a2a9c6003704~appgver_006b800220e48191855f15dc5f6f44ce` |
| Source commit | `47595d624318cc081986d46263552b8f51506f91` |
| Deployment ID | `appgdep_6ac353ed46248191a979e0c33960893e` |
| 部署状态与时间 | `succeeded`，2026-10-05T07:38:32.589177+00:00 |
| Native archive | tar，68 个文件，29,061,120 bytes |
| Native 存储哈希 | `sha256:ad2b6cfb57c9123b6984dba6c6a4058500f11335554dabdf4750583246a3ac1e` |
| 访问策略 | active，custom owner-only，1 owner、0 外部访客、0 群组、revision=1 |
| 自动化 | 0，未新增 |

Native 保存的是规范化 tar，存储哈希与原始 gzip 包字节哈希分别记录。没有为完成发布额外抓取生产 URL，也没有绕过先前正常 owner 登录错误或更改权限；本机截图不能作为线上 DOM/手机证据。

## 尚待确认

用户真实手机与五组角色的逐组网页美术确认仍待反馈。本轮的有限 15 项是为落实用户要求的家族丰富度，不表示每组基准已经通过，也不解锁第 4 项和以后无限扩展。生成 PNG、构建、逻辑检查、页面 QA、任务勾选、Git 推送和 v31 部署成功均不表示角色美术验收通过；相关 change 不归档。
