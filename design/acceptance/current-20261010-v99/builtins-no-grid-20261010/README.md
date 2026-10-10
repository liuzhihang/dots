# 基础 Characters 与无网格展示 · 追加验收

本次完成两件参考驱动的静态 Characters 候选及透明素材展示去网格。只在本地实现和验证；没有提交、推送或部署，未授予用户艺术批准。原始15件批准作品与两套模板像素源均保持不变。

## 直接查看

- [青柠蛙领结](http://127.0.0.1:5180/#/artwork/dots-lime-frog-bow?v=v1)、[粉心墨镜](http://127.0.0.1:5180/#/artwork/dots-pink-heart-shades?v=v1)：静态候选详情，复制 Prompt 与下载可用，没有 Edit。
- [两件深浅底审阅图](new-characters-review.png)、[桌面详情](ui/dots-lime-frog-bow-1440-en.png)、[手机详情](ui/dots-pink-heart-shades-390-zh-CN.png)。
- [去网格桌面编辑器](../no-grid-20261010/dots-edit-1440-en-options.png)、[手机编辑器](../no-grid-20261010/grok-edit-390-zh-CN-options.png)。
- [制作 Brief、参考、完整提示词与原始文件](../../../../openspec/changes/simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/README.md)。素材来自内置 image_gen，非官方原始文件。

## 实际验证

使用本机 Chrome 155 和项目既有 Playwright。此会话没有 Browser 插件技能，因此沿用项目 Playwright；本机服务 `http://127.0.0.1:5180`。环境不等于实体手机或线上站点。

| 检查 | 结果与证据 |
|---|---|
| 构建、目录、查询、原15件保护、资源闭包 | `npm run build`、`npm test` 通过；154条精确发布闭包，50条previewOnlyFiles，默认15件/待审9件 |
| 真实页面与交互 | [browser/report.json](browser/report.json)：四视口×双语、非空页面/无错误覆盖、导航/返回、搜索、全部24件复制和原字节下载通过 |
| 新增两件详情 | [ui/report.json](ui/report.json)：桌面英文、手机中文，正确页面/图像、真实剪贴板、Esc关闭、无Edit、pending搜索排除通过；无page/console errors |
| 无网格、可达性与alpha | [16项矩阵](../no-grid-20261010/report.json)：两模板×1440×900/768×1024/390×844/320×700×双语；48张截图，图层缩略图backgroundImage:none，44px、键盘、对比度、无横向溢出、Canvas透明像素通过 |
| 可见焦点 | [focus-check/report.json](../no-grid-20261010/focus-check/report.json)：两模板Space改色后，同一选项保持focus-visible与2px焦点描边 |
| 实际下载与alpha | `npm run test:downloads` 通过，[download-alpha.json](browser/download-alpha.json)：24件逐个原始SHA/字节/尺寸/登记的RGB或RGBA编码匹配；不把原有不透明候选说成透明 |
| OpenSpec与差异 | 当前change与all严格校验、git diff --check通过；命令记录在上级verification/builtins-*.json/log |
| 当前精确版本 | [source-freeze.json](source-freeze.json)、[closure-readback.json](closure-readback.json)：当前每个运行文件hash、scope、闭包与模板源回读一致 |

本次未改变renderer、Draft、editor JS、Template绑定或图层源：与before/build-report.json逐文件hash相同。此前 [28配方与两完整导出旅程](../editor/run-2026-10-10T12-34-50-407Z/report.json)继续保留，本轮没有重复跑或冒称新跑完整编辑/性能套件。原记录与前一approval-scope在before/中保留，当前approval-scope已追加两件作品并绑定本次页面文件hash。

## 观察与边界

去网格仅改变CSS，缩略图纯色底不进入PNG。颜色样本仍显示真实选项色，None继续使用明确占位，不全部涂成灰色。新增两件深浅底已人工查看：连续主体无手脚，蛙形/心形和领结/墨镜完整。材质与体积为重新绘制，不能声称官方像素级复刻；原生成alpha存在1–15的稀疏外围像素，已保留原文件和诊断，不以透明通道存在宣称完美抠图。

初次本地测量误用了没有Pillow的系统Python，改为已安装的bundled Python；未安装依赖。全alpha边界测量发现外围散点，如实保留在manifest，并另外记录alpha≥16的主体边距。临时UI断言先误将色块也要求为灰，焦点断言先使用了随pressed变化重绑定的locator；更正检查对象后通过，产品代码无需为测试改变。没有降低既有产品断言。

用户美术确认仍pending；更多眼型/配件、Pets、实体设备、Safari/Firefox、目标动画包与线上部署不在本次完成声明内。
