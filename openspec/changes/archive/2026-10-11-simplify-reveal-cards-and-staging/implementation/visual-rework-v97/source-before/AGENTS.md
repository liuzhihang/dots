# 协作约定

开始任务前阅读 DESIGN.md、.agents/rules/design.md、README.md 及相关 OpenSpec change/spec。最新用户确认范围及当前 simplify-reveal-cards-and-staging delta 优先于尚未同步的旧主规范。沿用 OpenSpec CLI 1.14.1，不初始化、升级或自动 sync/archive。

## 当前产品

单场景互动首页、角色画廊（文本搜索及单系列筛选）、共用角色详情、静态指南；英文默认与简体中文。用户选择角色，复制 Prompt 或下载真实原图，再在 ChatGPT 自行附图创作。详情内“创作我的版本”仅改待复制文字，默认折叠并保留原身份。没有站内上传、后台、数据库、账号、收藏、模型调用、实时换装或独立工作台。旧随机/游戏退出活动运行与发布，不建立兼容适配器。

角色身份、成品、场景姿态、poster、实际动画及下载资源分别登记。八类 typed facts 保留真实 none/notApplicable/unknown，不能把未知当作无值。场景姿态不成为成品下载或动作变体。新增内容靠资源及清单，不加页面角色专用分支。

Dots 短密绒且无肢体基准不长手脚；Grok Bot 软几何及成对胶囊眼；Muse 奶油包覆体、内嵌脸面及短圆肢体；柴犬立耳橙白四足卷尾；人物保留皮肤/头发/衣料差异。旧母图批准不自动批准新场景或页面。

## 文件与验证

dist/ 同时是可编辑源码与 Sites 发布树，不可整体清空。按 design/static-publish-manifest.json 检查精确闭包；退役文件保存到 historical-runtime/static-refocus-v96 并核对 hash。保留来源、Git 历史、OpenSpec 归档与失败/取消记录，不 reset/clean，不覆盖其他 dirty。

当前 cache 为 96，唯一证据目录 design/acceptance/current-20261009-v96/。HTML/CSS/模块、catalog 和报告必须一致。15 原图原字节/alpha 不变；缩略图单独登记。功能、视觉、用户美术批准、实体设备及部署分别报告，不以 build 替代实页对照。检查 1440×900、390×844、320 与 768 边界、键盘/返回、双语、复制和实际下载。

保持 .openai/hosting.json、OpenSpec 根配置及依赖版本。本次 apply 不授权提交、部署、sync 或 archive。
