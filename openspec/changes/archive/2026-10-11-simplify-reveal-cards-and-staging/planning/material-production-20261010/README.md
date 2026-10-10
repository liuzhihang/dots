# Dots / Grok 首批素材制作

用户在规划交付后明确：素材由 Codex 生成，用户提供参考图片即可。本目录承接这次素材试作授权；不要求用户交付分层文件、透明图、PSD、遮罩或配件包。页面仍按 D01 主稿 / D02 手机指南补充，不使用这些新参考重新选择页面方向。网站业务代码 apply 尚未执行。

## 本次可查看结果

| 模板 | 完整无脸无配饰基底候选 | 带五官的完整外观候选 | 本次选择 |
|---|---|---|---|
| Dots | [body v2](generated/dots-orb-v1/body-base-candidate-v2.png) | [default look v2](generated/dots-orb-v1/default-look-candidate-v2.png) | 缩短毛丝，保留蓝色圆体、黑眼、紫黑耳机和无肢体身份 |
| Grok | [body retry](generated/grok-orb-v1/grok-orb-v1-base-retry-candidate.png) | [default look](generated/grok-orb-v1/grok-orb-v1-default-look-candidate.png) | 紫色软几何体和成对斜白胶囊眼，无毛绒、机械脸或肢体 |

采用内置 image_gen，共生成8份PNG，其中4份选作当前审阅候选，另外4份保留迭代经过。所有图片均1254×1254 RGBA；提示词原定1024，但工具返回了基准图尺寸，因此按实际尺寸记录并保持原字节，未重采样。当前素材不是已经确认的公开 Artwork，也没有加入 `dist/`、目录或 Sites 发布闭包。

无脸基底用于下一步制作颜色、眼型和配件层；完整外观稿用于身份与材质对照。后者由生成工具产生，**不是相同renderer/recipe的分层重建证据**，不能通过两张图做差就宣称得到可靠眼睛或耳机层。

## 参考关系与制作责任

- [27张编号参考映射](reference-map.md)与[source manifest](source-manifest.json)：27/27原字节复制与hash一致。用户附件只用作视觉参考；许可未核实处保持unknown，不写虚假授权结论。
- Dots主基准仍为批准的蓝色耳机原图，Photo 12 / 6补充短密绒质感。未采用参考中新增的手脚、帽子、电脑、场景、平台、文字或统计。
- Grok主基准仍为批准的紫色球体，Photo 14 / 8补充软几何与胶囊眼关系。不会把白色机器人标为Grok。
- 人物、动物参考已归档，保留皮肤/头发/衣料/物种差异；本轮不扩大到全成品重做。Photo 9不替代D01，也不授予Muse新批准。
- [Dots完整提示词](dots-prompts.md) / [Grok完整提示词](prompts/grok-prompts.md)：包含输入用途、每次生成的实际文件和保留/迭代理由。

素材缺口是Codex的制作队列。后续由Codex继续完成基底定稿、颜色mask/材质分离、独立眼睛、眼镜、Dots耳机与Grok软帽前后层、遮挡及配方适配；用户只需对具体新稿给美术反馈，不承担生产素材准备。

## 实际检查与限制

[generation-manifest.json](generation-manifest.json)记录全部8份输出的字节数、SHA-256、尺寸、模式、alpha分布及主体范围。Pillow只读检查确认每张有真正alpha与完全透明像素，未用Python编辑图片。首次系统Python缺少Pillow，改用已安装的Codex bundled Python完成检查，没有安装依赖。

仍有低alpha轮廓外残留，不能以“RGBA”标记替代生产质量：Dots选定基底/外观在alpha≥16主体框外分别有7381/1013个非零像素，最大alpha为9/14；Grok分别为6547/6414，最大alpha为5/9。该检查是保守的框外噪点指标，未冒充完整连通域或深浅底合成验收。Dots选择v2以改进短绒，基底边缘数量并不比v1更好；Grok清理重试更差，明确保留但不选。

Grok较原基准约大1%、略圆；生成外观与基底之间也不能保证逐像素位置/材质恒定。这些均作为后续素材修整和美术核对项，由Codex继续处理。当前4份只用于审阅，`productionReady: false`、`artApproval: pending`、公开可编辑模板仍为0。

## 后续验收

沿用[原模板能力矩阵](../dark-gallery-20261010/template-capability-matrix.md)的Dots 12 / Grok 16合法配置及禁止组合；没有因为提供了更多参考图就开放所有形状或万能配件。最终仍须真实图层、同一渲染配方、预览/导出revision一致、透明PNG回读与具体组合美术确认。当前41项任务保持未完成；本轮只为其中素材制作部分提供候选，不宣称28组合或网站实现已经完成。

本轮未修改15张批准原图、主规范、根配置、依赖、业务代码或hosting设置；未提交、部署、sync或archive。

收尾回读：80个保护hash与原baseline一致，8份生成文件hash一致，27张参考均已归档；本轮相关文档62个相对链接可达，Git无当前change外变更，HEAD未变，`git diff --check`通过。当前change严格校验通过，任务仍0/41。未运行网站build/browser/28配置导出测试，这些没有因素材生成而通过。
