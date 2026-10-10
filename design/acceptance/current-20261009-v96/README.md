# v96 静态角色体验 · 实施验收

后续发布：用户另行授权的网站预览已于 2026-10-09 发布为 Sites Version 44；见 [部署记录](deployment/README.md)。下文“未部署”等边界保留为实施收尾时点记录。

2026-10-09，本地 main，HEAD b22c3f0df8b010da74b99caf9a80c417157857d7，cache96，目录版本 artwork-catalog-20261009-v96。本次实施依据用户后续 $openspec-apply-change 指令，未将早先 Explore 请求当作实现授权。

工程检查通过，完成内部页面视觉对照。新场景素材和最终页面 **等待用户美术确认**。本地预览：http://127.0.0.1:5180/#/home（依赖本地预览进程，不是线上地址）。

## 实现范围

- 单露台首页，11 个稳定角色热区；hover/focus 短名称，点击或一次轻点立即打开详情。空背景与四个透明静态群组、一个独处姿态分层摆位。
- 15 件作品画廊，双语搜索、系列筛选、无结果及清空；共用详情 ID/version、直链、返回来源/查询/滚动/焦点恢复。
- 原始 Prompt 复制、真实原图下载、Open in ChatGPT、轻量双语指南。
- 详情内折叠修改 Prompt，保留/移除/替换意图隔离于原图、标签、基础 Prompt 与下载。
- 旧随机/揭晓/独立工作台退出运行与发布。生产真实动画 **0**，真实变体关系 **0**；没有空动作区或虚构安装能力。

## 冻结与保护

[构建清单](build-report.json) 登记 55 个发布文件 SHA-256；[浏览器报告](browser/report.json) 的 sourceSnapshot 绑定同一源码及资源，并核对测试前后不变。发布清单代表当前静态树，不代表候选美术已经批准发布。

实施前 6223 路径基线保存在 change 的 implementation/static-experience-v96/baseline.json。原有 dirty 与既有归档删除按基线保护，未 reset/clean 或覆盖无关工作。15 母图、品牌源图、历史证据原字节保留；64 个退出活动运行的代码/测试/资源按 retirement.json 映射保存于 historical-runtime/static-refocus-v96。dist 同时为源码与发布树，未整体清空。

[范围审计](scope-audit.json) 记录 hosting、OpenSpec 根配置、package-lock 的保护 hash。保留 Site 身份/访问设置、OpenSpec 1.14.1、Vite 8.3.2；未安装/升级依赖、提交、部署、sync 或 archive。主规范中的旧产品要求仅由当前 change delta 提出替换，本次尚未同步。

## 验证结果

最终一轮执行 npm run build && npm test && npm run test:browser && npm run test:downloads 全部成功；另运行当前 change 严格验证、安全检查、git diff --check。[命令与边界](verification-summary.json) 单独记录。

| 检查 | 覆盖 | 证据 |
| --- | --- | --- |
| build / 保护 | 55 发布文件；6130 基线记录原样保留（最后更新当前QA文档后）；64 精确退役映射，import/资源闭包 | build-report.json、scope-audit.json |
| catalog / query / router | 15 原图及15封面、89 typed facts、双语、多词AND与系列组合、非法路径/版本拒绝、隔离新增作品 fixture | 当前 scripts/verify-*.mjs；最终命令通过 |
| 详情 | 19项，Prompt意图隔离、变体原子切换 fixture、语言/加载竞态、权限/弹窗/404/hash/decode失败 | reference-detail/report.json |
| 动态 | 8项，离屏/后台/详情/用户暂停/减少动态合并及失败回落 | reference-detail/motion-report.json；生产动画0 |
| 实页综合 | 17项，四视口、双语、单次touch、全部15直链、焦点与历史、搜索、真实剪贴板、资源重试、storage拒绝 | browser/report.json |
| 原图下载 | 浏览器下载15份PNG，bytes/hash/尺寸/alpha与母图一致；另做视觉回看 | browser/downloads/、browser/download-alpha.json、poster/visual-review.md |
| 媒体网络 | 桌面首屏1,129,358 bytes，390首屏1,085,114 bytes；画廊全部滚动569,148 bytes，没有预取18.8MB原图 | browser/media-budget.json、browser/report.json |
| 发布反例 | 孤儿/缺失/越权/重复资源拒绝，合法新增资源可登记构建 | scripts/verify-publish-inventory.mjs |

实际 Chrome 截图为 browser/{home,gallery,detail,guide}-{1440,390,320,768}.png，尺寸分别为1440×900、390×844、320×700、768×1024。原型并排对照在 visual/；完整评审见根 [design-qa.md](../../../design-qa.md)。QA对照中的原型裁剪不作为生产资产。

过程失败 browser/failure.json、failed-state.png 保留，不算最终通过。最终状态以 browser/report.json、当前截图及最终命令为准。功能检查和视觉复核各自独立记录。

## 素材与批准

- 空背景：background-resource.json，terrace-background-v1.webp，P02空间/P01光色参考产生新像素；原始输出在 asset-sources/。
- 四个新群组：scene-unit-candidates-v1.json，版本v1，全部 artApproval=pending；使用C01–C03与登记母图。清单中“未把P01/P02输入生成器”仅适用于这四个群组，不适用于背景。
- 精确场景摆位、热区、ID/version与hash：scene-layout.json。家具随局部群组遮挡，不能据此宣称逐角色表情动画。
- 15显示封面及品牌副本：poster/asset-audit.json、poster/brand-derivative.json；不覆盖下载源文件。
- 原15母图批准、新场景版本批准、当前页面批准分别记录。后两者未收到用户确认，OpenSpec **3.7 / 8.3 未完成**。后续批准应绑定本次源码及素材hash，变化则重新记录。

## 未测边界

未做实体手机、Safari/Firefox、公网部署、真实弱网计时或线上访问设置验证。响应式/触控来自Chrome模拟环境。ChatGPT验证复制全文、外链及失败回退，未自动附图/发送，不保证外部预填。Fixture不代表真实生产动画，生成图不替代实页截图，build不替代用户美术确认。
