# v80 历史页面实现与独立评审记录

本目录记录 cache revision 80 的冻结输入：[source-snapshot.json](source-snapshot.json)，sourceId 为 `29e9a319a0b9f7da86c4497c26b144aa6ee228e075c6b98b32282161678d1fb1`，快照覆盖 123 个文件。页面证据和素材索引放在 [R01 reference-home 页面目录](../../../../../../design/reference-home-20261005/page)。这些页面、交互和评审文件保留为 v80 历史证据；最终证据版本正在更新，以覆盖静态发布根下仍引用 cache 70 的 QA HTML/脚本。v80 截图不改名、不替代后续来源。

## 已记录的真实页面与交互

- [pages-v80.json](../../../../../../design/reference-home-20261005/page/pages-v80.json) 将四个首页视口绑定同一 sourceId：1280、768、390、320 CSS px。记录均有两幅 hero、五张卡、15 个登记 Gallery 选项，全部列出图片 `ready: true`；每个视口 `bodyWidth === scrollWidth`，无页面水平溢出指标。对应首页图为 [1280](../../../../../../design/reference-home-20261005/page/home-1280-v80.png)、[768](../../../../../../design/reference-home-20261005/page/home-768-v80.png)、[390](../../../../../../design/reference-home-20261005/page/home-390-v80.png)、[320](../../../../../../design/reference-home-20261005/page/home-320-v80.png)。
- 家族卡区域另有 [768](../../../../../../design/reference-home-20261005/page/cards-768-v80.png)、[390](../../../../../../design/reference-home-20261005/page/cards-390-v80.png)、[320](../../../../../../design/reference-home-20261005/page/cards-320-v80.png) 页面图；创作引导区域有 [桌面](../../../../../../design/reference-home-20261005/page/intro-1280-v80.png) 和 [窄屏](../../../../../../design/reference-home-20261005/page/intro-320-v80.png) 页面图。
- [interactions-v80.json](../../../../../../design/reference-home-20261005/page/interactions-v80.json) 记录 15 项 Gallery、显式开始创作进入工作台、键盘问候、减少动态、创作引导 Prompt 不变以及无控制台警告/错误。PNG 控件在工作台已启用；实际 PNG 字节只引用 v75 的既有验证，算法和图库素材未变，因此**没有声称 v80 导出文件本轮已验证**。

## v80 独立评审与结论边界

独立的 [v80 页面视觉评审](../../../../../../design/reference-home-20261005/visual-review-v80.md) 对绑定 v80 的网页结果判为 passed，未发现 P0/P1/P2，保留的 P3 观察项见报告。独立的 [v80 代码评审](../../../../../../design/reference-home-20261005/code-review-v80.md) 没有发现目标交互的阻断缺陷，但指出 `dist/qa/*.html` 及关联脚本仍引用 cache 70；此问题已在 v81 修复，并由 [v81 代码评审](../../../../../../design/reference-home-20261005/code-review-v81.md) 复核。两份 v80 报告只证明当时的 v80 观察范围，不能替代后续冻结版本的证据。

用户对五组角色美术的明确确认仍未取得，实体手机也未测试。任务 3.3 只能由用户明确确认支持；v81 页面与内部视觉评审见 [current-v81 记录](../current-20261005-v81/README.md)。

R01 是构图、角色位置和风格参考，并不要求输出与设计图逐像素一致。人物和动物须原创；不得把用户从动漫截取的原图像素、裁切素材或完整可辨认角色用于网站。R01 中的登录、“我的空间”等示意入口不属于产品要求，本 change 不增加账号或用户空间功能。桌面家族卡当前约 246 CSS px 高于 R01 示例；该布局保留完整角色与底部文案所需空间，仍须纳入独立视觉评审判断。
