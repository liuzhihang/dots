# Dots v99 精确艺术审阅范围

活动 change：`simplify-reveal-cards-and-staging`。以下均为本地候选供审阅，技术测试不自动授予艺术批准。精确原图和配方 hash 由最终 [approval-scope.json](approval-scope.json)记录。

2026-10-10 最新追加：弹窗改为透明烟色玻璃，移除 View/Edit 模式。真实模板通过 Color/Eyes/Glasses/Accessory 分类标签直接修改同一预览；透明素材仍不显示棋盘格。以 [本次实现与验收](glass-wysiwyg-20261010/README.md)及 [桌面编辑器](glass-wysiwyg-20261010/visual/1440x900-en-edit-dots.png)为当前页面证据。此前 no-grid、D01/D02 对照保留为历史。精确待审页面 hash 见 approval-scope.json，修改前的 scope 保留于 glass-wysiwyg-20261010/before/design/acceptance/current-20261010-v99/。

## 追加两件基础 Characters

[两件深浅纯色底审阅图](builtins-no-grid-20261010/new-characters-review.png)。使用已有截图参考重制，非官方原始素材；不增加模板能力。参考、提示词、Brief、原图与 alpha 记录见 [制作记录](../../../openspec/changes/simplify-reveal-cards-and-staging/planning/character-production-20261010-builtins/README.md)。

| 精确候选 | 原图 SHA-256 | 本地详情 |
|---|---|---|
| dots-lime-frog-bow@v1 · 青柠蛙领结 | bc8aa7fa0fe4ea5e4ba2bf36f74703ed33d80036fdfd1cb7027571ed365c2d0f | [查看](http://127.0.0.1:5180/#/artwork/dots-lime-frog-bow?v=v1) |
| dots-pink-heart-shades@v1 · 粉心墨镜 | df3dcfc4468f6fe24f202395dd98957c4d439adb8c80b1357f4a91f9b07a1384 | [查看](http://127.0.0.1:5180/#/artwork/dots-pink-heart-shades?v=v1) |

两件均为 pending。当前目录为15件批准 + 9件待审；以下首批五件和旧两件候选均保持原状态。新增两件的透明主体完整，原生成文件中的低 alpha 外围散点已实测记录，尚未获得用户艺术确认。

## 页面与可视编辑

[本地角色库](http://127.0.0.1:5180/#/)沿用 D01 深色数字画布，角色库即首页；[D01 实页对照](visual/D01-combined-comparison.png)和[D02 手机/指南对照](visual/D02-combined-comparison.png)用于确认此前页面范围。眼睛、眼镜、配件使用真实缩略图，颜色使用色块；当前分类标签与手机固定预览的实页证据见 [本轮验收记录](glass-wysiwyg-20261010/README.md)。

页面审阅与角色素材批准分别记录。新素材保持 Dots/Grok 无手脚、各自材质与眼型，遵循[追加的身份参考](identity-reference-20261010/README.md)。

## 新增五件独立成品

[五件成品深/浅底对照](visual/new-artworks-review.png)。每件有独立原图、Prompt、八类事实及来源；不是 Template 色卡或姿态截图。默认画廊保留已批准15件，以下5件批准后五系列各有4件。原有白机器人、白兔两个候选仍按原待确认状态独立保留。

| 系列 | 精确候选 | 详情 |
|---|---|---|
| Dots | `dots-butter-beret@v2`，奶油黄圆角三角与深色贝雷帽，无手脚 | [查看](http://127.0.0.1:5180/#/artwork/dots-butter-beret?v=v2) |
| Grok Bot | `grok-coral-drop@v1`，珊瑚水滴与成对胶囊眼，无手脚 | [查看](http://127.0.0.1:5180/#/artwork/grok-coral-drop?v=v1) |
| Meta Muse | `muse-lavender-lantern@v1`，薰衣草包覆体与灯笼 | [查看](http://127.0.0.1:5180/#/artwork/muse-lavender-lantern?v=v1) |
| People | `human-rust-jacket@v1`，铁锈夹克人物 | [查看](http://127.0.0.1:5180/#/artwork/human-rust-jacket?v=v1) |
| Animals | `animal-cocoa-bear@v1`，可可熊 | [查看](http://127.0.0.1:5180/#/artwork/animal-cocoa-bear?v=v1) |

## 两套真实编辑模板

审阅服务器由 `npm run dev:review` 提供；生产入口保持资格限制。

- [Dots 可视编辑](http://127.0.0.1:5182/__dots_review__/#/artwork/candidate-dots-20261005?v=v2)：蓝/暖黄、原眼/闭眼、无/圆框眼镜、无/耳机，固定球形；耳机与眼镜互斥，12个合法配方。查看 [12配置精确对照](visual/dots-orb-v1-all-configurations.png)。
- [Grok 可视编辑](http://127.0.0.1:5182/__dots_review__/#/artwork/candidate-grok-20261005?v=v2)：紫/mint、斜/竖胶囊眼、无/圆框眼镜、无/软帽，固定球形；帽与眼镜适配，16个合法配方。查看 [16配置精确对照](visual/grok-orb-v1-all-configurations.png)。

对照图顶行是原 Artwork 与默认重建 Draft；其后每格对应真实 renderer 配方、revision及输出hash。应分别确认默认重建与全部列明组合，不将原15母图的批准扩展到新 Draft。28配方不算28件独立画廊成品，不附带动画或Pet资格。

需重点审阅的身份差异：Dots 分层主体比原 Artwork 更圆，绒毛更短密；Grok 默认斜胶囊眼为适配镜框采用了更扁、较水平的形态。它们保留无手脚和系列材质约束，但不是原 Artwork 的逐像素重建。这些差异明确留待用户确认，不能因组合工程检查通过而视为已接受。

## 待记录结论

页面、首批5件及追加2件成品、Dots默认与组合、Grok默认与组合目前分别为 **pending**。用户可逐组批准或指出具体作品/配置编号的修改；批准范围按当前精确版本记录。此审阅只决定艺术范围，发布仍依用户已有的独立授权边界执行。
