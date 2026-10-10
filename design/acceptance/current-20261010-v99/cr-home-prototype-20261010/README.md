# D01 首页原型修复验收

此目录记录当前 CR 与 D01 首页原型还原的实页证据。`visual/after-home-*` 是本轮修复截图；较早的 `before-home-*` 保留为中间基线，不代表最终状态。`compare-d01-home-1440.png` 将附件 D01 左上首页面板与当前桌面视口按相同宽度缩放并排展示。

## 本轮修复

- **P1 — Hero 群像像独立小图块且主体偏小。** 把专用 pending Hero 插画布置在 Hero 右侧约 80% 区域，使用 cover/right-position 裁切，并在插画左侧叠加渐隐蒙层。桌面标题、简短说明与双 CTA 留在左侧；群像与深色画布融合，无单独卡片边框。窄屏在标题与 CTA 后显示完整角色群像。
- **P2 — 桌面标题比例偏小。** 桌面 `h1` 调为 `clamp(48px, 4.9vw, 70px)`，说明文字桌面调为 17px；1440px 实际标题/说明字号为 70/17px，1206px 为 59/17px。两档分别验证 Small / Characters. / Big Possibilities. 都恰为三行，文字最右端到群像左侧约留 130px；description 最大宽度为 40ch，CTA 保持同排。768px 原覆盖保留为 35.3/15px，窄屏覆盖不变。
- **P2 — 首页筛选控件错位。** 768px 及以上显示桌面系列筛选与排序同排；手机搜索和排序同排，系列标签在单行横向滚动，图库保持 1440px 六列、768px 三列、390/320px 两列。
- **P2 — 768×1024 CharacterStudio 预览画布溢出。** 受控 Draft canvas 受预览区宽高约束并完整 contain；证据见 `visual/editor-canvas-768-contained.png`。实页尺寸抽查：768 预览 678×360、canvas 360×360；390 预览 350×320、canvas 320×320；320 预览 288×259、canvas 259×259。

Hero 使用的 `dots-gallery-hero-v99.webp` 仍是 **pending UI 装饰素材**：本次只验证排版与图像裁切，不代表用户美术批准；它不属于 Artwork、角色卡、Studio 预览或 PNG 导出。

## 实页验证

- 地址：`http://127.0.0.1:5182/#/`，页面标题 `Dots · Small Characters. Big Possibilities.`，导航为 Characters，15 张画廊卡片正常渲染。
- Browser 插件工作流不在本会话可用工具中；使用项目现有 Playwright 与本机 Chrome 实测，未安装依赖。截图脚本保存在 `/tmp/dots-home-visual-check.mjs`，调用 `node /tmp/dots-home-visual-check.mjs`。
- 1440×900、1206×900、768×1024、390×844、320×700 均检查英文与简体中文；Hero 图像自然尺寸 1536×1024、已加载，无页面横向溢出。桌面/平板/手机图库分别为 6/3/2 列。手机系列 chip 保持单行可滚动，搜索和排序各 44px 高且同排。
- 实际交互：切换中英文后标题/说明/搜索提示更新；把搜索输入设为 `purple`，结果状态变为 `1 个角色`，清空后恢复。Console 与 pageerror 均无错误。
- 静态校验：`node --check dist/studio.js` 与 `git diff --check -- dist/index.html dist/studio.css dist/studio.js dist/studio-detail.css` 通过。未运行 build、测试套件、部署或提交；由主任务统一执行。

## 主要截图

- `visual/final-home-desktop-1440-en.png` / `visual/final-home-desktop-1440-zh.png`：桌面中英首屏，含最终字号修复。
- `visual/final-home-desktop-1206-en.png` / `visual/final-home-desktop-1206-zh.png`：中宽桌面中英，含最终字号修复。
- `visual/final-home-tablet-768-en.png` / `visual/final-home-tablet-768-zh.png`：三列平板中英。
- `visual/final-home-mobile-390-en.png` / `visual/final-home-mobile-390-zh.png`：390px 中英。
- `visual/final-home-mobile-320-en.png` / `visual/final-home-mobile-320-zh.png`：320px 中英。
- `visual/final-home-fullpage-1440-en.png`：桌面整页。
- `visual/compare-d01-home-1440.png`：D01 与当前桌面并排。
