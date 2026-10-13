# Proposal

## Why

Dots 网站目前没有源码与反馈入口，访客发现 Bug 或希望新增形象时，需要自行寻找仓库。为现有公开仓库增加可发现的入口与分类表单，可以降低反馈成本，也让维护者获得复现问题和理解形象需求所需的信息。

## What Changes

- 在角色库页头增加次级外链：桌面提供 GitHub 与“反馈建议 / Feedback”；窄屏保留“反馈 / Feedback”，GitHub 由页脚提供。页脚在所有宽度提供两个外链及登录、公开提交说明。
- GitHub 指向 `https://github.com/liuzhihang/dots`，反馈指向 `https://github.com/liuzhihang/dots/issues/new/choose`；使用普通 HTTPS 链接在新标签页打开，保留原图库状态。
- 规划三个中英同列的 GitHub Issue Forms：“问题反馈 / Bug report”“申请新增形象 / Character request”“功能与体验建议 / Suggestion”，以少量必填字段及可选附件收集信息。
- 明确站内导航仍只有 Characters，GitHub 与反馈属于外部辅助入口；Hero 仍只有“浏览角色”，不新增站内反馈页面、弹窗或路由。
- 明确 Issue 只是反馈记录，不代表形象已获批准、会自动生成或已加入角色库。

## Capabilities

### New Capabilities

- `github-feedback`: 规范官网到 GitHub 的反馈交接、三类表单、公开提交说明与模板生效验收。

### Modified Capabilities

- `family-navigation`: 澄清唯一站内页面与站外辅助入口的区别，保留现有图库/Studio 路由及状态恢复合同。
- `studio-visual-experience`: 为真实 GitHub/反馈外链限定例外，并规定桌面、窄屏及页脚的次级展示、双语和可访问性。

## Impact

- 后续实现主要涉及 `dist/index.html`、`dist/studio.css`、`dist/studio-i18n.js`，以及 `.github/ISSUE_TEMPLATE/` 下三个表单与选择器配置；复用当前原生 ES Modules/CSS，不增加依赖、后端、账号、GitHub API 调用或凭据。
- 复用并补充现有页头、语言、历史导航与浏览器布局检查；GitHub 表单结构检查属于仓库工具，不进入静态发布目录。
- 修改现有发布文件不扩大素材范围；如交付清单或缓存校验需要调整，仅按既有发布流程精确维护，不改托管配置、依赖或批准素材。
- 本 change 的当前阶段只生成规划文档。后续 apply 完成本地实现与验证后，Git 提交/推送、模板在远端默认分支生效、Site 部署、规范同步与归档均为独立步骤，须按当时授权执行；不以本提案或本地检查代替线上验收。
