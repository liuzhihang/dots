# cache95 揭晓视觉修复候选

本目录是 2026-10-08 本轮新增证据，未覆盖 cache93。当前为工程复核完成、用户视觉及素材批准 pending 的本地候选。

- 复核报告：`design-qa.md`
- 最终画面：`browser/final-desktop.png`、`final-320.png`、`final-390.png`、`final-768.png`、`final-game.png`
- 四卡及内联操作：`browser/four-card-desktop.png`、`four-card-390.png`、`takeaway-390.png`
- 下载、Prompt、控制台：`browser/download-check.json`、`copied-prompt.txt`、`console.json`
- 本轮前后保全：`before-source.json`、`preservation-check.json`
- 最终源码和资源：`source-manifest.json`

`browser/viewport-checks.json` 为手机收高修复前的测量，不能用其高度代表最终候选；最终320/390弹窗高644.03px，内容高642.03px，768弹窗高777.53px。旧 result/mobile-current/desktop-result 截图为中间态，部分原生截图有视口滞后，不作最终验收。最终截图通过浏览器渲染接口捕获并人工查看。

不将工程检查当作用户艺术批准；无实体手机/线上发布验证。
