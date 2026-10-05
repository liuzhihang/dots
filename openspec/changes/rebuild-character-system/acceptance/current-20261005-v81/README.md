# v81 冻结页面实现证据

本目录的 [source-snapshot.json](source-snapshot.json) 冻结 cache revision 81，sourceId 为 `0a2daefce6cc18094ac2e40749ec42750c3b80837fa58de5fc57b4090288cc60`，包含 123 个路径。v81 统一了 `dist/` 下产品入口与可直接访问的 QA HTML/JavaScript/CSS 查询版本；完整静态运行入口不再遗留 v70/v80 cache 引用。独立 [code-review-v81.md](../../../../../design/reference-home-20261005/code-review-v81.md) 验证了 123 个文件哈希、source ID 重算和运行时边界，未发现阻断项。

## 实际页面捕获

[pages-v81.json](../../../../../design/reference-home-20261005/page/pages-v81.json) 将四个首页视口绑定 v81 sourceId：1280、768、390、320 CSS px。每项均记录两幅 Hero、五张卡、15 个已登记 Gallery 选项，所列图片全为 `ready: true`，且 `bodyWidth === scrollWidth`。页面图如下：

- 首页：[1280](../../../../../design/reference-home-20261005/page/home-1280-v81.png)、[768](../../../../../design/reference-home-20261005/page/home-768-v81.png)、[390](../../../../../design/reference-home-20261005/page/home-390-v81.png)、[320](../../../../../design/reference-home-20261005/page/home-320-v81.png)。
- 家族卡：[768](../../../../../design/reference-home-20261005/page/cards-768-v81.png)、[390](../../../../../design/reference-home-20261005/page/cards-390-v81.png)、[320](../../../../../design/reference-home-20261005/page/cards-320-v81.png)。
- 创作引导：[1280](../../../../../design/reference-home-20261005/page/intro-1280-v81.png)、[320](../../../../../design/reference-home-20261005/page/intro-320-v81.png)。

v81 的实际交互烟测见 [smoke-v81.json](../../../../../design/reference-home-20261005/page/smoke-v81.json)：本版本执行了粉色 mini look 到工作台、PNG 控件 enabled、键盘问候和零控制台错误检查。更广的 [interactions-v80.json](../../../../../design/reference-home-20261005/page/interactions-v80.json) 仍明确绑定 v80 sourceId；v81 只统一缓存查询版本，不伪装成另一轮完整交互回归或 PNG 下载。该记录涵盖 15 项 Gallery、显式 `startLookId` 入口、减少动态、创作引导选择等未改逻辑。PNG 导出控件已启用；实际 PNG 字节只引用 v75 已验证结果，本轮没有声称 v80 或 v81 重新下载验证。

## 发布记录

2026-10-06 已发布到原站 [Dot Icon Studio](https://dot.liuzhihang.chatgpt.site)，Site version **34**，部署状态 `succeeded`，保存版本回读的源码提交为 `7cbf99ce001e2a613b661d5ed5fee141c9a9f414`。原 owner-only 访问范围保持不变。详见 [site-release.json](site-release.json) 和 [独立发布包检查](package-review.json)：101 个运行时文件与提交逐字节一致，另有官方生成的 staging manifest，共 102 个文件。上传 gzip 与服务保存的规范化 tar 分别记录哈希。

发布记录在部署后单独提交，属于文档补充，不是上述站点源码提交的一部分。发布成功不替代美术确认或实体手机验收。

## 美术与用户验收边界

独立 v81 页面报告 [visual-review-v81.md](../../../../../design/reference-home-20261005/visual-review-v81.md) 对当前真实页面评为 passed，未发现 P0/P1/P2；P3 观察项保留在报告中。报告逐视口查看了首页、卡片、创作区并明确了素材和导出边界；代码缓存复核见 [code-review-v81.md](../../../../../design/reference-home-20261005/code-review-v81.md)。因此任务 3.2 的内部真实页面独立评审已完成。用户对五组角色美术的明确确认尚未取得，实体手机未测试；任务 3.3 继续未完成。

R01 是构图、服装层次和风格参考，素材不承诺与参考图逐像素相同。人物和动物保持原创身份，网站不使用用户动漫截图的原始像素、裁切、贴图或可辨认的完整动漫角色。R01 的登录、“我的空间”是示意元素，本 change 不新增账号或用户空间能力。桌面卡片约 246 CSS px，高于 R01 示意图，以容纳完整群像和底部文案；它仍由独立视觉评审复核效果。
