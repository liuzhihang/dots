# 2026-10-05 场景与姿态素材来源记录

本文件记录本轮 7 张关系场景和 5 张静态姿态 PNG 的来源、文件级检查和验收边界。三份原始记录按字节复制到本目录，未改写 prompt 状态、失败记录或原始说明：

- [首位艺术指导 agent 的场景记录](scene-art-original-agent.json)
- [升级后艺术指导 agent 的场景记录](scene-art-astra-agent.json)
- [姿态素材记录](pose-art-provenance.json)

## 文件级核对

2026-10-05 对下表 12 个 `dist/` 文件计算 SHA-256，并与相应 JSON 中的 selected 候选逐项比对；12 项全部一致。路径均相对于仓库根目录。这里的“素材检查”是生成图本身、透明 PNG 和来源记录的检查，不等同于页面美术验收。

| 文件 | 组装成员 / 姿态身份 | 素材检查来源 | SHA-256 |
| --- | --- | --- | --- |
| `dist/assets/scenes/hero-left-v1.png` | Teal 针织男孩；蓝色耳机 Dots、玫粉眼镜 Dots、淡紫渔夫帽 Dots；紫色球形 Grok、绿色云朵 Grok | 首位 agent 定向修正版；升级 agent 在现有记录中复查六个身份和 Dots/Grok 无肢体 | `2354b074d4a08255ce1069d8f565dc4aad9f7b1b1d42fe3238ceb25202ceba06` |
| `dist/assets/scenes/hero-right-v1.png` | 黄衣 bun 女孩；奶油、玫粉雏菊、鼠尾草绿书本三只 Meta Muse；柴犬、白猫 | gpt-6-astra/high 阶段的六身份图像观察记录 | `db278c83628b0b59ead4943b5b9d4c4b8f91eb1a396efd8ed121a955b9e435ca` |
| `dist/assets/scenes/family-dots-v1.png` | 蓝耳机、玫粉眼镜、淡紫渔夫帽三只 Dots | 三个指定 look 参考；记录检查触碰关系、三种配饰和无肢体约束 | `9a4c4b56a28e05850c865267e379c367168254ab3644b3ad060bbd4d7dcaf400` |
| `dist/assets/scenes/family-grok-v1.png` | 紫色球体、绿色云朵、青绿色圆角方块三只 Grok | 三个指定身份参考；记录检查形状区分、胶囊眼及无肢体/口鼻/道具 | `1df48ab7ed1b2425595af6e60192cc32090e1b2deb1d3b4e946ecb9edac66685` |
| `dist/assets/scenes/family-meta-muse-v1.png` | 奶油连续兜帽、玫粉雏菊、鼠尾草绿书本三只 Meta Muse | 首位 agent 生成记录；根曾在图库页面预览该组三人关系 | `3027ee097ed4286564a5d08e98c5893944c01d74a7688578e5a74930db42a35d` |
| `dist/assets/scenes/family-humans-v1.png` | Teal 针织男孩、黄衣 bun 女孩、金发圆眼镜男孩 | 三个原有人物候选作身份参考；观察记录描述共同托纸星、肩部接触和完整鞋/手 | `760c64926715fcd3f0665967daf923fd9baa0b439ac5a441d12655b6415c777d` |
| `dist/assets/scenes/family-animals-v1.png` | 橙白柴犬、灰耳白猫、灰白哈士奇 | 三个动物身份参考；边缘修正版的观察记录检查脸、爪、耳朵及尾巴边界 | `2bb9c14c1ea62a8f66f3714fe2a49eff0a3547879f0f6987c659ab5a74f7847e` |
| `dist/assets/poses/dots-wink-v1.png` | 蓝色短绒球体 Dots，耳机完整；一只闭眼、一只睁眼 | 姿态 JSON 中的透明 PNG 与白底预览检查；无嘴、鼻或肢体 | `4fbeb4da84da597e7bcc9533012ca7659e1a12a6e20bd479f098e4da7c805ac1` |
| `dist/assets/poses/grok-wink-v1.png` | 紫色哑光球体 Grok；一只白色胶囊眼、一条白色闭眼弧线 | 姿态 JSON 中的透明 PNG 与白底预览检查；记录注明修订后仍需根复看 | `0e1543e89fe3e7d21ee6830e7a9435ad1d8cfca59ab1a16fec686c4a48211e86` |
| `dist/assets/poses/human-wave-v1.png` | Teal 针织男孩，微笑挥手 | 姿态 JSON 中的透明 PNG 与白底预览检查；全身、双鞋和手部可见 | `a3dde33c5ab00f21a735dcb0373e584e954c615d1108332ba40d1924b8e8b308` |
| `dist/assets/poses/muse-wave-v1.png` | 奶油色连续兜帽 Meta Muse，开心挥手 | 姿态 JSON 中的透明 PNG 与白底预览检查；全身、脚掌和短绒表面可见 | `bd4a5fb9c81fabcb751c6943dbeea52515c92a4f6b2f80335582e485487cb6e1` |
| `dist/assets/poses/shiba-wave-v1.png` | 橙白柴犬坐姿，以一只前爪挥手 | 姿态 JSON 中的透明 PNG 与白底预览检查；耳朵、尾巴和爪子完整 | `8b3d1417cf4af554b6cbe8f3a0589dd24d0f07db98832b704c5b9a965548651c` |

五张 pose 是单张静态图像状态，不是动画。姿态记录说明原始 PNG 保持字节不变并确认有 alpha；白底 JPEG 仅作轮廓和表情检查，不作为交付素材。

## 来源与筛选记录

首位艺术指导 agent 的 scene JSON 保留其部分交接时点：Muse 首稿与修正后的 hero-left 已选，后来补齐的五个槽位由另一阶段完成。该 JSON 中 Muse 原始 prompt 明确标记为“根据任务简报重建、非逐字原文”；Muse alpha 清理 prompt 也标明仅为摘要。此处保留原标记，不将其改写为逐字 prompt。升级阶段 scene JSON 收录各场景原始 prompt、参考路径、输出路径、哈希、alpha 数据和图像观察；pose JSON 收录原始 prompt、参考图、输出哈希及预览检查。

场景和姿态参考路径均指向项目内既有角色候选、look 或该任务先前生成的候选。人物和动物沿用项目原创角色素材作为身份参考；这些 provenance 未列入用户提供的动漫截图或像素作为生成输入。

按根的调度，本轮遇到身份数量和 Dots 肢体问题后，艺术指导模型升级为 **gpt-6-astra，high reasoning**。两份场景 provenance 的生成器字段只写内置 ImageGen，没有模型/推理强度字段；模型升级这一项来自根的调度记录，不是 PNG 元数据。

记录中的淘汰原因如下：

- Muse alpha 边缘重绘改变了绒毛纹理，采用纹理更自然的首稿。
- 首版 hero-left 给粉色 Dots 加了手臂、给渔夫帽 Dots 加了小手；定向修正后两只 Dots 仅以球体接触，错误稿不在 `dist/`。
- 首版 hero-right 只有五个身份，缺少第三只 Meta Muse；由六身份版本替换，五身份稿不在 `dist/`。
- 升级阶段第一张动物群像的尾巴抵到画布左右边缘；图像编辑拉远构图后选用有边距的修正版。
- 姿态交付 JSON 记录五张最终候选，没有单独列出失败候选；这里不补造未记录的淘汰理由。

## 页面与用户验收边界

Muse 三人场景曾有根在实际图库页面的关系预览；这仅是该素材的页面预审。Hero-left 的来源记录要求根作最终页面复核，升级阶段其余场景记录也将浏览器验收保留给根。姿态 JSON 的 QA 方法限于透明度检查与白底预览，未包含 Browser/Sites 验收。完整页面的桌面与移动端截图和根的结论由本 change 的 scene review、tasks 与 release receipt 分别记录；本文件不把图像检查、哈希一致、构建、任务勾选或页面截图推算成五组用户美术确认。

本素材记录不声称用户已验收，也不陈述或推断站点发布成功。逐组用户美术确认须以用户明确反馈为准。
