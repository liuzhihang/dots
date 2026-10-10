# 五系列多外观：首批20件目标与新5件候选

2026-10-10 用户再次明确：五种类型都应有多个外观，素材由Codex根据参考图创作；数量克制，后续新会话继续加角色。实查当前目录已批准15件，每系列3件。本轮增加每系列1件独立完整外观候选，**目标每类4件，共20件；目前运行目录仍是15件，新5件全部pending且未接入。** 20不是永久上限。

Dots/Grok的两套模板与28个合法Draft配置是另一条编辑能力工作线，不计作28件作品，也不限制图库只有两个外观。此次5件新作均无模板，不将三角/水滴接入现有球形模板，不把静态帽子或灯笼冒充可替换图层。

## 首批构成

| 系列 | 保留的3件批准作品（Artwork ID） | 新增第4件候选 |
|---|---|---|
| Dots | `candidate-dots-20261005` 耳机蓝球；`dots-rose-glasses` 玫粉眼镜；`dots-lilac-bucket` 浅紫渔夫帽 | `dots-butter-beret` 奶油黄圆角三角与海军蓝贝雷帽 |
| Grok Bot | `candidate-grok-20261005` 紫球；`grok-green-cloud` 绿云；`grok-teal-square` 青方 | `grok-coral-drop` 珊瑚水滴与白色胶囊眼 |
| Meta Muse | `candidate-meta-muse-20261005` 奶油包覆；`muse-rose-flowers` 玫粉持雏菊；`muse-sage-reading` 鼠尾草绿持合拢书 | `muse-lavender-lantern` 淡薰衣草包覆与琥珀灯笼 |
| People / 人物 | `candidate-humans-20261005` 栗发青绿针织；`human-bun-yellow` 丸子头黄帽衫；`human-blond-glasses` 金发眼镜 | `human-rust-jacket` 深棕卷bob、铁锈夹克与米色长裤 |
| Animals / 动物 | `candidate-animals-20261005` 柴犬；`animal-white-cat` 奶油白猫；`animal-gray-husky` 灰白哈士奇 | `animal-cocoa-bear` 可可棕圆耳熊、奶油口鼻、坐姿四掌 |

白色原创机器人、白兔这2件原有pending仍独立保留，不计入20件目标，不默认为批准；机器人不标Grok。Artwork名称/描述按真实图片写，不把静态持书、挥手造型或灯笼发光当成实际动画。

## 已生成的审阅候选

| 候选图 | 参考与Prompt | 当前视觉裁决 / 待办 |
|---|---|---|
| [贝雷帽 Dots v2](generated/dots-butter-beret-candidate-v2.png) | [精确提示词与参考映射](prompts/dots-butter-beret-prompts.md)；Photo5只取三角及贝雷帽灵感，现有Dots提供双黑眼与无肢体边界 | 轮廓区别于现有球体；一次定向修订已缩短绒丝。仍有边缘低alpha/色残点，待修整及用户审阅 |
| [珊瑚水滴 Grok](generated/grok-coral-drop-candidate-v1.png) | [精确提示词与参考映射](prompts/grok-coral-drop-prompts.md)；Photo2/8/14、批准紫Grok基准 | 无嘴/肢体/屏幕脸/毛绒，成对胶囊眼；一次纠错减少残点，少量透明边缘残点仍待处理 |
| [灯笼 Muse](generated/muse-lavender-lantern-candidate-v1.png) | [精确提示词与参考映射](prompts/muse-lavender-lantern-prompts.md)；批准奶油Muse+C01，不使用错误Muse的Photo9 | 连续包覆、桃色内嵌脸和短圆肢体，双手持灯；浅绒轮廓半透明碎边较多，待修整 |
| [铁锈夹克人物](generated/human-rust-jacket-candidate-v1.png) | [精确提示词与参考映射](prompts/human-rust-jacket-candidate-v1-prompts.md)；Photo18/24比例与原人物材质作参考 | 皮肤/头发/织物分离、完整双脚；初稿烘焙棋盘格已用一次生成编辑纠正，当前实际alpha。上下留白偏紧，边缘残点待处理 |
| [可可熊](generated/animal-cocoa-bear-candidate-v1.png) | [精确提示词与参考映射](prompts/animal-cocoa-bear-candidate-v1-prompts.md)；Photo27只取紧凑熊比例，不取衣服/饰物/字；原动物材质对照 | 圆耳、熊口鼻、四掌及坐姿清楚；一次构图修订留足边距。仍需深浅底边缘复验与用户美术确认 |

以上使用内置 image_gen；所有实际选定输出均1254×1254 RGBA，无手工像素处理/重采样。工具原输出路径及未选迭代在提示词记录中，当前目录保留交付图与Dots/Grok未选稿；另两件初稿原文件仍在工具生成目录，不进入候选清单。只读检查详见 [generation-manifest.json](generation-manifest.json)，alpha统计不等于边缘美术通过。

完整用户参考原件已保存在 [27图制作包](../material-production-20261010/references/) 与 [source-manifest](../material-production-20261010/source-manifest.json)，此处不重复拷贝；[reference-map](../material-production-20261010/reference-map.md)明确各图仅提供角色外观灵感，不能把旧宣传UI、台阶、Logo、统计等纳入D01页面或新素材。

## 后续接入与素材验收

1. Codex完成透明残点/色边和人物构图修整，保留修订版本与来源；检查深色、浅色、棋盘检查底上的完整轮廓，输出PNG中不含检查底。不要要求用户准备生产素材。
2. 每件按最终图补八类facts、双语标题/描述/别名与原始Prompt、来源与实际元数据；逐件艺术确认绑定精确hash，不借用原15件批准。
3. 网站apply获准后接入静态内容及展示缩略/高清预览，走同一ArtworkCard/Studio/View/Prompt/下载；无Template不显示Edit。五新作批准后目标20，未批准时目录继续显示真实合格数量，不为了凑数发布。
4. 扩展验证保留原15件字节及批准完整性，新增Artwork的data-only fixture证明无需专用页面/角色分支。动态数量从合格目录推导，不硬编码20。
5. 两套编辑模板继续独立制作拆层、mask和适配，用真实renderer验证预览/导出；这些静态候选不能替代本地编辑闭环。

长期流程、系列标准与Brief见 [角色新增规范](../../../../../design/character-authoring/README.md)，共用实现边界见 [组件契约](../../../../../design/character-authoring/components.md)。本轮未改业务代码，未提交、部署、sync或archive。新作品美术、20件目录接入、页面及模板工程验收均未完成。
