# 代表模板能力、素材缺口与艺术门槛

本表是制作和验收计划。首批静态 Gallery 目标为 **20 个独立完整外观**：五个系列各 4 件，包含现有冻结 15 件（每系列 3 件）与每系列 1 件待制作、逐件审批的新候选；20 不是永久上限。新增候选未逐件批准前不进入默认 catalog。local-edit 仍只有 Dots/Grok 两套代表模板试点，28 个合法配方是编辑覆盖量，不是 Gallery 外观数；Draft、色卡、pose、截图和重复图也不能凑 Gallery 数量。当前已公开 local-edit 模板 **0**；现有完整图不等于已具备图层。

2026-10-10后续素材授权：用户只提供参考图，生成、分层、适配与技术修整由Codex负责，不要求用户补交生产素材包。[首批素材试作](../material-production-20261010/README.md)已保存两套无脸基底和完整外观候选；仍有边缘清理、材质/几何一致性与图层制作未完成，不能把候选当作可用模板。

## 基准与计划集合

| 项 | Dots pilot：dots-orb-v1 | Grok pilot：grok-orb-v1 |
|---|---|---|
| 原 Artwork | candidate-dots-20261005 @ v2 | candidate-grok-20261005 @ v2 |
| 批准原文件 | dist/assets/characters/dots-blue-plush-orb-headphones-candidate-v2.png | dist/assets/characters/grok-bot-purple-orb-candidate-v2.png |
| 身份 | 蓝色短密绒、圆润主体、无肢体、耳机基准 | 紫色软几何、成对白胶囊眼、无肢体，非机器人 |
| Color | blue 原色 / warm-yellow 新色 | purple 原色 / mint 新色 |
| Shape | 固定基准球体；不提供切换控件 | 固定基准软球体；不提供切换控件 |
| Eyes | 原成对眼 / 成对闭眼（静态图层，不叫动画） | 原斜胶囊眼 / 较直胶囊眼（均保持成对胶囊身份） |
| Glasses | none / round，针对本模板适配 | none / round，针对本模板适配 |
| Accessories | none / 原耳机 | none / 一顶软帽（新适配） |
| 默认配置 | blue + 原眼 + none + headphones | purple + 原眼 + none + none |
| 首批规则 | glasses+headphones 禁止；不提供帽子及抓握道具 | cap+glasses 仅经专用前后层/遮挡批准才合法 |
| 合法配置数 | 2×2×(2无耳机眼镜状态+1有耳机状态)=12 | 2×2×2×2=16 |
| 非法集合 | 2色×2眼×眼镜+耳机=4种，明确提示选择保留哪项 | 未登记帽子/耳机、多头饰、任意缩放/跨系列层均拒绝 |
| 当前素材/批准 | 批准原图保持；已有待审基底/外观候选，独立图层及模板未完成 | 批准原图保持；已有待审基底/外观候选，独立图层及模板未完成 |

颜色/眼型标签为本轮可调整制作参数，不能因为命名存在就给UI开放。首批 28 个合法配方都要工程检查；用户艺术确认至少覆盖两套默认重建、全部新增单项及边界交叉组合，未覆盖的组合不公开。不能把“单项批准”擅自扩大到所有组合；最终批准记录需显式写明覆盖的配置集合。

## 素材制作清单

下列目录是 apply 计划新路径，当前不存在。每套预定1024×1024透明画布，正式尺寸以制作结果登记；默认/所有图层同坐标、固定透视，不以UI截图裁片补足。更改尺寸必须整套一起审阅。

| Gap ID | 拟新增路径/内容 | 用途及制作任务 | 当前阻塞/验收 |
|---|---|---|---|
| T-D01 | dist/assets/templates/dots-orb-v1/body-neutral.png | 无耳机、无眼、无眼镜的完整主体，保留被遮住轮廓 | 真实隐藏区域缺失；新制，与原身份对照，不能擦耳机留洞 |
| T-D02 | 同目录 body-color-mask.png、body-shading.png | 主体颜色mask及独立短绒/光影，颜色变化不污染脸/耳机 | 需要可复现材质保留配方；深浅底边缘检查 |
| T-D03 | eyes/original.png、eyes/closed.png | 基准位置两套静态眼型 | 不改变身份，不伪称眨眼动画 |
| T-D04 | glasses/round-front.png、round-rear.png、occlusion-mask.png | 无耳机几何上的接触、镜腿与遮挡 | 与眼睛边缘不穿模，透明镜片不糊黑 |
| T-D05 | headphones/front.png、rear.png、occlusion-mask.png | 默认耳机前后关系与真实无耳机切换 | 默认重建匹配批准身份，去除后头顶完整 |
| T-G01 | dist/assets/templates/grok-orb-v1/body-neutral.png、body-color-mask.png、body-shading.png | 无脸/无配饰软几何主体、颜色与高光分离 | 不毛绒、不屏幕脸；轮廓透视一致 |
| T-G02 | eyes/angled-capsules.png、upright-capsules.png | 两组成对胶囊眼 | 数量、嵌入与透视正确，无拟人五官增生 |
| T-G03 | glasses/round-front.png、round-rear.png、occlusion-mask.png | Grok专用眼镜，不能复用Dots坐标 | 单项和有帽组合分别审阅 |
| T-G04 | cap/front.png、rear.png、occlusion-mask.png | 专用软帽、帽檐/眼镜遮挡 | 戴帽/无帽均真实；不能裁现图去帽 |
| T-B01 | 两套 template manifest、sources.json、approval records | 帧画布、alpha、hash、层序、anchor、合法集合、批准范围 | 可渲染与用户艺术确认分别记录 |
| P-01 | dist/assets/previews/ 内当前 Gallery 独立完整外观的 512/1024 display 衍生图；首批目标 20 件 | 详情preview，原图保持；256 poster只做thumbnail。现有冻结 15 件保持原内容；另 5 件候选须先完成制作、来源记录与逐件美术批准，批准后才进入默认 Gallery | 检查每件轮廓/颜色/尺寸/hash和总负载；缺图或待审候选不得当成已发布外观或填虚假能力；目录数量按实际批准 Artwork 动态计算，不硬编码为15或20 |

若实际制作无需某独立遮罩（例如一层足以正确遮挡），须在manifest明确 `notApplicable` 及理由，不能留下虚假文件路径。若有帽+眼镜无法通过Grok适配，不静默删选项：先列阻塞、收窄计划需用户知情；本轮不能把16项未覆盖却记满。

## 历史资源可读但不自动复用

`historical-runtime/retired-assets/dist/assets/characters/dots-blue-plush-orb-front-candidate-v2.png` 是候选，未进入 v83 registeredLooks；不是已经批准的无耳机基底。`historical-runtime/retired-assets/dist/assets/poses/dots-wink-v1.png`、同目录 `grok-wink-v1.png` 及旧 template-canvas 测试图不证明本轮编辑资源已存在/已批准。旧适配代码、schema、storage reader 不复活；仅在明确来源与新用途审查后才能考虑某张原素材作制作参考。

## 制作与验收顺序

1. 按 C03/C02 和批准原图固定身份与几何，制作不带配件基底；先人工核对轮廓/短绒/软几何/无肢体。
2. 完成默认配置分层重建；原图与新默认Draft并排，明确新范围pending。默认不通过就不扩大选项。
3. 制作颜色mask和第二眼型，检查变化局部性、透明边缘、材质，随后眼镜/耳机/帽子前后关系。
4. 登记允许集合和冲突理由，逐个渲染28配方，记录recipe/version/alpha/尺寸/资源hash。四种Dots冲突及所有未知选项走负例。
5. 在真实浏览器同一Studio中演示两套 View→Edit→Color/Eyes/Accessory真实变化→导出→打开文件→回View下载原图；草稿与原hash分别验证。
6. 用户艺术确认绑定模板版本与具体组合范围；未确认继续pending。两套缺一或只改Prompt，bounded editing与总体验收均不能完成。

## 其他系列

Meta Muse、人物、动物可按静态内容扩展合同增加独立完整外观，继续用共用卡片/详情/搜索/Prompt；无需先有模板，未绑定适配模板时如实只提供 View/Prompt/原图/实际已有变体且无 Edit，不借用上述几何。白机器人、白兔保持原 pending 身份与同一详情地址，机器人不进入Grok。扩充模板是独立素材工作；两套试点不限制 Gallery 静态外观总数，也不要求本轮穷举所有角色、动画或 Pet 包。
