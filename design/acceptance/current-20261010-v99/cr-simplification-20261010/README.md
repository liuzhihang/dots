# Dots v99：用户 CR 与最终 Hero

本次仅本地实现与验收，保留原15件已批准 Artwork、9件待审 Artwork 及两套 pending Template。页面、新增群像插画和28个模板组合仍待用户美术确认；未提交、推送、保存 Sites 或部署。

本地审阅：[首页](http://127.0.0.1:5182/__dots_review__/#/) · [Dots 编辑](http://127.0.0.1:5182/__dots_review__/#/artwork/candidate-dots-20261005?v=v2) · [Grok 编辑](http://127.0.0.1:5182/__dots_review__/#/artwork/candidate-grok-20261005?v=v2)。服务由 `npm run dev:review` 提供。

## 最终界面

- 保持 D01 主体布局，D03 只补充首页标语和角色群像。主标题为两行 Make It / Your Dot.，中文为“创造 / 你的 Dot。”。右侧群像包含 Dots、软几何 Grok、独立机器人、人物、Muse 与戴紫色耳机和黄色领带的白兔。Dots/Grok 无手脚。1536×1024 插画 WebP 为126138字节，完整记录在 [Hero manifest](hero/ensemble/manifest.json)，不登记为 Artwork 或 Template。
- 桌面搜索置于顶栏；手机搜索与排序位于 Hero 下方。画廊在1440/1206/768/390/320宽度分别6/6/3/2/2列。无 Guide 入口；旧 `#/guide` 为普通未找到页面。
- CharacterStudio 继承全站语言，无独立语言按钮。透明烟色玻璃壳保留背景轮廓；无 blur / 降低透明度使用实底。
- 同一预览直接编辑，可视 tabs 无 View/Edit 切换。相关角色常显于主预览下方。header 与滚动区域分离，tabs 不再悬浮遮挡。
- 操作统一为复制 Prompt、在 ChatGPT 中使用、导出。一个额外要求输入框只追加 Prompt，不改变像素。无结构化二创、Reset/Cancel 或重复的原图动作；只读原始资料仍可展开。
- 最新渲染未成功时三项动作不可用；编辑导出为最新成功 revision，静态导出仍为登记原字节。关闭、历史导航和切换角色保留同一 dirty guard。

最终实页截图：[1440英文](../cr-home-prototype-20261010/visual/final-home-desktop-1440-en.png) · [1440中文](../cr-home-prototype-20261010/visual/final-home-desktop-1440-zh.png) · [320手机](../cr-home-prototype-20261010/visual/final-home-mobile-320-en.png)。归一化原型对照和逐项视觉检查见 [局部设计 QA](../cr-home-prototype-20261010/design-qa.md)。旧 `visual/after-home*` 与首版 Hero 为中间版本，不作为最终首页证据。

## 实际验证

| 范围 | 结果与证据 |
| --- | --- |
| Core | `npm test` 通过：目录/查询/详情/历史/模板/renderer/loader/扩展/安全。命令和退出码见 [verification-commands.json](verification-commands.json)。 |
| 编辑与导出 | [完整编辑报告](editor/run-2026-10-10T14-55-47-804Z/report.json)：Dots12 + Grok16合法配方、两套完整实际PNG下载旅程、20次连续编辑、过期回调与资源释放均通过。28个输出 SHA 与前轮一致。 |
| 详情交互 | [browser/report.json](browser/report.json)：19项、21张截图、24张实际原图下载，含统一文本、ChatGPT链接拦截、dirty guard与错误恢复。此全流程运行早于最后装饰图替换；最终首页另验。 |
| 下载字节/alpha | [download-alpha.json](browser/download-alpha.json)：15批准原图与9待审源图均匹配登记字节、尺寸及各自RGB/RGBA状态。 |
| 按钮与可达性 | [layout.json](editor-layout/layout.json)：24组语言/模板/视口，40截图；真实按钮中心及角点命中、44px目标、相关角色位置、选项tabs及Canvas完整包含通过。 |
| 最终首页 | [hero-final/home/report.json](hero-final/home/report.json)：五视口×双语10/10；准确两行标题、实际群像hash、CTA命中及复制/浏览行为、网格列数、无横向溢出和页面错误。 |
| 最终对比度 | [hero-final/contrast/contrast.json](hero-final/contrast/contrast.json)：322个目标通过；普通文案≥4.5:1，大字号渐变字≥3:1，实测保守最低3.53:1。包含无blur和降低透明度。 |
| 性能/生命周期 | [performance-final/report.json](performance-final/report.json)：预览请求/缓存/释放和冷暖加载检查通过。此运行早于最终Hero装饰图替换；不将其作为新Hero下载性能结果。 |
| 构建/保护 | [build-report.json](build-report.json)：155路径，6962个历史基线hash完整。 [source-freeze.json](source-freeze.json)：本轮135个既有素材/保护文件未变，HEAD未变，28配方输出未变。 |
| OpenSpec | [spec-final.log](spec-final.log) 当前change严格校验通过；任务53/54完成，仅7.4美术确认保持未完成。 |
| 当前IAB | 最终代码和图接入后已刷新用户现有本地首页，回读中文两行标题及群像；与单独Chrome自动化证据分开记录。 |

命令日志见 [commands](commands/) 与 [tests](tests/)。没有为最后的静态Hero替换重复已通过的28配方和原图下载套件；以范围明确的首页、对比度和最终build复验覆盖新增变更。

## 修复记录与边界

已修复：平板Canvas被拉伸/裁切、header/tab遮挡、外部fragment取消后历史恢复、提示文案3.91:1对比不足、新群像头顶裁切。测试器的剪贴板等待、ChatGPT URL拦截残留、原始资料滚动采样及渐变字像素采样也已纠正，未削弱可见态阈值。

一次最终build发现参考清单改动触发原hash保护；已恢复原 REFERENCES.json 精确字节，D03单独登记，重跑 [build-ensemble-repaired.log](commands/build-ensemble-repaired.log) 通过。没有更改保护基线来规避检查。中间失败保留为历史，不标为通过。

未验证：实体手机、软件键盘、目标动画/Pet包、线上部署。页面及新素材艺术确认不由工程测试替代。最新待审精确范围见 [approval-scope.json](../approval-scope.json)。
