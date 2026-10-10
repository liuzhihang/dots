# Characters 基础外观补充 · 2026-10-10

用户选择先补 Characters 基础外观，更多眼型、眼镜与配件后续逐步增加。本轮补两件有明显轮廓区别的完整静态候选，避免穷举组合：青柠蛙领结、粉心墨镜。它们是参考用户截图制作的素材，**不是官方原始文件**，不增加 Template、Shape 控件、动画或 Pet 能力。

| Artwork / Character ID | 外观 | 文件与版本 | 状态 |
|---|---|---|---|
| dots-lime-frog-bow | 青柠蛙形短绒、两颗凸眼、黑领结、无肢体 | generated/dots-lime-frog-bow-candidate-v1.png | pending |
| dots-pink-heart-shades | 粉色心形短绒、圆黑墨镜、无肢体 | generated/dots-pink-heart-shades-candidate-v1.png | pending |

来源与参考用途在 [reference-source.json](reference-source.json)，逐件精确 SHA、尺寸与 alpha 在 [manifest.json](manifest.json)，制作记录在 briefs/，内置 image_gen 的完整提示词在 prompts/。原生成文件只复制，不清 alpha、不重编码；实际两件均为 1254×1254，不能按请求的 1024 冒报尺寸。256/512/1024 展示派生图另行登记。

深浅纯色底的 [浏览器审阅图](../../../../../design/acceptance/current-20261010-v99/builtins-no-grid-20261010/new-characters-review.png)可用于核对造型。主体与配件完整，页面展示尺度下未见明显背景块；alpha≥16 的可见主体在画布内留有边距。原图有稀疏的 alpha 1–15 像素延伸至部分外缘，实测已记录，不能仅因含透明通道就声称像素级干净。两款与截图缩略图相比都有重新绘制的材质和体积细节，仍待用户美术确认。

页面透明素材不使用棋盘网格，CSS 底色不进入文件。原图下载保留原始字节，不能把检查底或网页截图充当可下载素材。

## 收录与参考原则

- 收录少量代表性完整外观；颜色、眼型、眼镜、帽饰的排列组合不批量变成图库作品。
- 公开图片可以补充检索，但不假设官方公开了完整组合图或可复用的分层素材。已查看的 [官方帮助页](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot)仅说明可选择 Characters/Pets，没有在该页提供组合图片目录。
- 本轮使用用户已有截图，不要求逐个组合截图。以后若需要精确复现一个公开资料中缺少的特殊组合，只针对该组合补参考即可。
- 参考截图不等于对重制作品的艺术批准，也不授予官方合作、原始素材或商业许可声明。许可保留 unknown。
- 默认 Gallery 仍只显示15件已批准作品；本地目录的候选数随追加变为9。新作经共用详情/Prompt/下载展示，不写角色专用页面。
