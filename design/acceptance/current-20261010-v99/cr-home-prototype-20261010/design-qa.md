# D01 首页原型对照与实页验收

## 结论

当前首页保留 D01 的深色数字画布、左侧标题与操作、右侧角色群像和紧邻画廊的构图。主标题按 2026-10-10 的最新要求改为英文 **Make It / Your Dot.**，简体中文为 **创造 / 你的 Dot。**；原短语 **Small characters. Big possibilities.** 移至说明文字。新横幅群像加入机器人、兔子、人物与 Meta Muse，标题、说明和操作不压住这些角色。

`visual/compare-d01-home-1440.png` 将 D01 原型左上首页面板与当前 1440px 浏览器整页截图按等宽、近等高归一化并排。参考图未改动；板上展示的是实现与原型的排版比较，不是像素合成验收。

## 对照结果

| 维度 | D01 参考 | 当前实页 | 裁决 |
| --- | --- | --- | --- |
| 布局 | 左侧文案、右侧群像；筛选与画廊紧接 Hero | 桌面两栏，Hero 高度 1440px 为 500px、1206px 为 440px；手机先文案和按钮，再显示群像；随后搜索/排序、系列筛选与画廊 | 保留 D01 主结构，手机改为单列以保证标题和完整群像可读 |
| 标题 | Small / Characters. / Big Possibilities. 三行 | Make It / Your Dot. 两行；第二行使用紫至粉渐变 | 最新标语取代旧主标题；旧短语保留为说明文案 |
| 字号 | 参考图大标题占左侧显著比例 | 1440px 70px，1206px 59.1px，768px 35.3px，390px 35.9px，320px 28.8px | 桌面放大到主视觉比例；平板与手机沿用各自断点尺寸 |
| 颜色 | 深色背景、冷紫粉渐变强调、紫色主操作 | 数字画布底色 `#0b0d12`，标题渐变 `#c5adff → #dd9df8 → #f187cf`，主操作紫色 `#7c3aed` | 延续 D01 色彩层级；横幅左侧渐隐融入画布，不显示独立图片边框 |
| 群像 | 蓝色 Dots 与其他系列角色组成右侧群像 | 新版包含蓝色与紫色 Dots、Grok、独立机器人、戴紫耳机的兔子、人物、Meta Muse | 依 2026-10-10 新要求增加机器人、兔子、人物、Muse；角色头顶、兔耳和脸在五个视口均完整可见 |
| 控件 | 顶栏、搜索、系列筛选、排序、双主操作 | 顶栏 Dots / Characters、居中桌面搜索、语言切换；Hero 为 Browse characters / Copy Dots Prompt；桌面筛选和排序同排，手机搜索和排序同排、系列标签横向滚动 | 保留真实可用控件和 44px 触控高度，不增加收藏、假统计或额外导航 |

## 有意区别与产品边界

- 首页是角色库，不恢复独立宣传页、Guide 导航、场景页面或 View/Edit 模式。
- 主标题采用最新确认的 **Make It Your Dot.**，与 D01 中的三行旧文案不同；旧文案现在作为简短说明开头。
- 群像中的展示台、灯光和背景只属于横幅装饰插画。该素材登记为 `ui-hero-illustration`，不得成为 Artwork、角色卡、Studio 预览或导出内容。
- `dist/assets/banners/dots-gallery-hero-ensemble-v99.webp` 为 1536×1024、版本 `v99-ensemble-2`，SHA-256 `aaa7c0fe9e83e579fa0647f6994d58d84ca80831cb5b5c63cdc48a5537818091`。它目前是 `preview-only`、`artApproval: pending`、`deployed: false`；本报告只确认工程排版和裁切，不代表用户美术批准或上线。
- 画廊仍呈现实际登记的 15 张作品。横幅角色不作为新增 Artwork，也不改变角色目录或批准状态。

## 实页验证

- 页面：`http://127.0.0.1:5182/#/`；使用 Playwright 与本机 Chrome。当前会话没有 Browser 插件工具，因此本次按项目现有 Playwright 流程验证；没有安装依赖。
- 检查视口：1440×900、1206×900、768×1024、390×844、320×700；每个视口分别检查英文和简体中文。
- 五档均确认横幅资源已加载、标题文案与页面语言一致、无横向溢出；画廊列数依次为 6、6、3、2、2。Playwright 捕获的页面错误和 console error/warning 均为 0。
- 新群像在原始 `cover` 裁切中会切掉桌面人物头顶和手机头发上缘。将首页图片定位调整为桌面/平板 `100% 24%`、手机右侧 `24%` 后，人物头顶、兔耳及各角色脸部完整可见，同时保留横幅右侧群像布局。
- 本次未运行 build、完整测试套件或部署；由主任务统一执行。工程通过不替代用户对横幅美术的确认。

## 证据

- 归一化对照：[`visual/compare-d01-home-1440.png`](visual/compare-d01-home-1440.png)。参考来源为 `openspec/changes/simplify-reveal-cards-and-staging/planning/dark-gallery-20261010/source-package/references/D01-main-third-dark-gallery-studio.png`。
- 当前 1440px 英文整页：[`visual/final-home-fullpage-1440-en.png`](visual/final-home-fullpage-1440-en.png)。中英各视口截图见 `visual/final-home-desktop-*`、`final-home-tablet-*`、`final-home-mobile-*`。
- 自动测量：[`visual/final-home-ensemble-check.json`](visual/final-home-ensemble-check.json)。复现命令：`node /tmp/dots-final-home-ensemble.mjs`。
