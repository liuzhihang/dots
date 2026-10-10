# 真实编辑器最终验收

最终通过运行：[`run-2026-10-10T12-34-50-407Z/report.json`](run-2026-10-10T12-34-50-407Z/report.json)。执行命令为 `npm run test:editing`，退出码 0，完整[命令记录](../verification/editing-final.json)和[输出](../verification/editing-final.log)保留。以下结论只对应这次运行，不能由较早的完整或部分运行替代。

来源 manifest SHA：`83df339fb0f0d932171b46c065e8f8941a1599c6d2d3416f49d23456acfac70f`。两份 sources.json 字节一致，使用正式登记的14个真实PNG图层，不是 renderer 单测的生成 fixture。模板仍为 pending，只在本地审阅入口开放。

## 可直接查看的结果

- [Dots 完整操作录屏](run-2026-10-10T12-34-50-407Z/video-segments/dots-app-png-app-journey.webm)
- [Grok 完整操作录屏](run-2026-10-10T12-34-50-407Z/video-segments/grok-app-png-app-journey.webm)
- [Dots 实际导出的透明 PNG](run-2026-10-10T12-34-50-407Z/downloads/candidate-dots-20261005-dots-orb-v1-draft-r3.png)
- [Grok 实际导出的透明 PNG](run-2026-10-10T12-34-50-407Z/downloads/candidate-grok-20261005-grok-orb-v1-draft-r4.png)
- [28个精确配方及hash/alpha](run-2026-10-10T12-34-50-407Z/real-28-recipes.json)、[Dots 12配置审阅图](../visual/dots-orb-v1-all-configurations.png)、[Grok 16配置审阅图](../visual/grok-orb-v1-all-configurations.png)

两条连续录屏均包含 View → Edit → 点击实际颜色/眼睛/配饰选项 → 下载 Draft PNG → 在浏览器中打开下载文件 → 回到同一作品 View → 下载原图。原图分别与登记的 Artwork SHA 一致；Draft 均为1254×1254 RGBA透明PNG，未包含检查底色或界面。

## 通过范围

Dots 12、Grok 16 个合法配方逐份记录成功 revision、recipe key、输出 SHA、alpha SHA 和边界；每份预览与导出内容相同。Dots 眼镜与耳机的冲突组合保持明确拒绝。

20轮真实编辑/渲染/导出/销毁中，每轮都切换实际选项，成功状态只发布当前 Draft revision；共观察到30个旧renderer消费者取消。缩略图仍使用同一资源时保留共享请求，不能将没有底层fetch中断误判为取消失败。独立的受控挂起fetch检查观察到 Editor.destroy 中止4个请求；它是注入的取消验证，不声称远程服务器网络验收。销毁/最终释放后的leases、挂起请求、Blob URL、Bitmap和解码缓存均按合同清零。详见[循环与清理报告](run-2026-10-10T12-34-50-407Z/20-edit-cycles.json)。

[竞态报告](run-2026-10-10T12-34-50-407Z/editor-races.json)覆盖 A→B→A 乱序、最新图层失败/重试、缩略图失败/重试、关闭后的晚回调与新会话隔离。[退出保护](run-2026-10-10T12-34-50-407Z/dirty-exit-guards.json)验证关闭、返回、导航和相关作品跳转取消后保留当前草稿。最终整轮 console error、failed request、HTTP error 均为0。

## 失败与边界

最终注册后的前三次未通过运行保留各自失败记录：[底层fetch计数不适用共享consumer](run-2026-10-10T12-19-41-455Z/failed.json)、[循环点击默认项没有变更](run-2026-10-10T12-27-39-949Z/failed.json)、[Promise取消计数读取过早](run-2026-10-10T12-29-41-089Z/failed.json)。修正均限于QA观察与操作；页面、素材和源manifest未因此改变。先用[独立循环检查](run-2026-10-10T12-34-32-425Z/focused-editor-cycles.json)通过，再运行上述完整套件。旧素材运行及取消目录继续保留，不作为当前最终通过证据。

这些结果是本地 Chrome 工程验收。原Artwork批准、新默认Draft、全部组合及页面的用户艺术批准各自独立；Dots主体/绒毛与Grok默认眼型差异见[艺术审阅清单](../art-approval-review.md)。实体设备、Safari/Firefox和部署未验证；未授予公开编辑或发布资格。
