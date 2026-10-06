# 双模式逻辑检查 · 2026-10-05

本记录仅确认整图/组合的工作台逻辑。五组精细角色均未通过网页美术验收；不扩展、不归档、不保存 Sites 新版本、不发布。原失败候选与缺证记录保留在 [acceptance](../../acceptance/README.md)。

当前页面沿用原站设计结构，五组独立选择保持不变。整图默认展示四张有来源标记的历史完整 PNG，Meta Muse 没有整图；编辑更新设定与 Prompt，固定图不变。组合资产清单为空，所以五组组合 PNG 均禁用；旧程序化模型只经显式结构诊断入口可见。实际组合引擎已经实现，精细分层素材仍需制作与真实页面验收。

## 实际验证

- 本机 Chrome `http://127.0.0.1:5173/`：五组切换、整图/组合模式共享设定、颜色编辑不改固定图、缺素材不出现 Canvas/当前 PNG、模式撤销重做、项目 JSON 下载/导入/会话恢复。见 [页面流程](page-journeys.json)。早期参考检查因未匹配“未转换”措辞记为 false；已补明确文字，最后一次该检查为 true。2D 诊断由 SVG 图像显示，早期 `hasSvg:false` 指没有内联 SVG 节点，不表示渲染失败。
- 四张实际历史整图下载与原文件逐字节一致；两种模式的页面全文、浏览器剪贴板接口回读和实际 TXT 文件一致。见 [文件回读](download-readback.json) 与对应文本。本记录采用浏览器剪贴板接口，未将操作系统剪贴板视为同一验证目标。
- 320×740、390×844、768×1024 与桌面实际布局；水平宽度无溢出，历史示例与 Prompt 更新范围提示在小屏可见。检查后已恢复默认视口。此为浏览器视口检查，未执行实体手机验收。
- 本机 `/qa/creation-composer.html` 使用明确标识的 QA 几何图块，未进入角色清单。实际实体色背景预览的 Canvas→PNG→浏览器解码回读为 256×256，透明覆盖导出的角点 alpha=0，不透明角点 alpha=255，主体染色为 RGBA 174,56,191,255。配方替换后旧主体被移除，中心 RGBA 从染色值变为 0,0,0,0；不保留未选中的底层。图层前后关系见截图。外部路径被拒绝，失败后旧帧不能导出。见 [Canvas 回读](composer-fixture-readback.json)。这些几何图块与工程结果均不是角色美术验收。
- 过期导出在生产 `preparePreview` helper 的延迟 I/O 回归及组合渲染器 update/capture/dispose 生命周期回归中检查；切换模式/配置拒绝旧结果，没有为真实主页面人为拖慢网络。
- 打开 ChatGPT 仅复制 Prompt 并打开 `https://chatgpt.com/`；实际新标签页已回读并关闭，没有粘贴、附图或发送。参考流程明确本站不读取或转换图片。
- 最终页面加载后控制台无 error/warn，见 [控制台](final-console.json)。开发过程一次本地路径校验错误已修复，不作为最终加载状态。

## 程序检查

`npm run build`、六份 verify 脚本、OpenSpec strict 校验均通过，原 schema/来源/随机回归保留。命令与输出见 [program-checks.json](program-checks.json)。最终审阅发现并修复了“球体底图加心形条件层仍声明支持心形”的误报：结构编辑现在必须由完整 `variants` 配方独占图层，条件层 `when` 被拒绝，染色只检查当前配方选中的层；反例、配方替换与透明背景覆盖已补回归。组合包元数据要求版本和来源；项目文件仅以可信 ID 指定作品，不执行文字或旧配置恢复副本里的 URL/路径。

源代码按 [source-snapshot.json](source-snapshot.json) 的 SHA-256 固定。本记录对应私有 Git 的双模式逻辑提交，不对应 Sites 线上版本。OpenSpec 第 9 阶段完成；旧分组美术任务和用户逐组确认继续未完成。

## 页面截图

[桌面整图](artwork-desktop.png) · [组合缺素材](composer-desktop.png) · [320](artwork-320.png) · [390](artwork-390.png) · [768](artwork-768.png) · [Canvas 透明导出](composer-fixture-transparent.png) · [配方替换](composer-fixture-replacement.png) · [失败保护](composer-fixture-failed.png)
