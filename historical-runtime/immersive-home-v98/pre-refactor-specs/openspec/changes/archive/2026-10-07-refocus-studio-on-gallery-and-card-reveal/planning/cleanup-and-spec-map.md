# Runtime Cleanup and Spec Map

## Path Disposition

此表是后续apply的窄范围清单，不授权本propose修改任何列出的源码/素材/规则。删除前先提取仍适用的工具并读回引用；保留批准美术、来源、Git、归档及冻结证据。`dist/`不可整体清空。

| 分类 | 具体文件／资源 | 行动／完成条件 |
| --- | --- | --- |
| 复用 | `dist/studio-scenes.js`、当前Hero/五组专题场景、品牌标记，`dist/assets/characters`/`looks`有效成品 | 保持批准身份与图片字节，改内容入口映射；scene-only不自动入库 |
| 复用后改造 | `dist/studio-tags.js`、`dist/studio-tag-browser.js`、`dist/studio-tags.css` | 保留文本归一化和OR/AND，逐图Feature显式登记，更多筛选与焦点适配 |
| 改造 | `dist/index.html`、`dist/studio.js`、`dist/studio-home.js`、`dist/studio-looks.js` | 三页导航、完整作品详情/直接操作，删工作台DOM/项目菜单/定制事件/编辑器intro |
| 拆出后退休 | `dist/studio-creation-assets.js`、`dist/studio-model.js`、`dist/studio-catalog.js`、`dist/studio-art.js` | 将有效身份/来源/Prompt/PNG/姿态元信息迁入Artwork目录与Prompt模块；不保留角色schema/Project作为运行中间层 |
| 提取并改造 | `dist/studio-fullscreen-random.js/.css` | 保留安全路径/hash/尺寸解码/预载/Abort/token/focus/Esc/reduced-motion；换候选合同、删assemble/apply/project检查 |
| 提取工具 | `dist/studio.js`内copyText/copyAndOpen/download、modal基础 | 统一冻结Artwork操作输入，复制失败全文/TXT与手动链接；统一单overlay |
| 样式分离 | `dist/studio.css`、`dist/studio-layout.css`、`dist/studio-refresh.css`、`dist/studio-creation.css`、`dist/atelier.css` | 保留品牌/主页/卡片可用规则，删只供工作台/旧原型的选择器；无用途整文件在引用清零后删除 |
| 删除旧运行逻辑 | `dist/studio-creation.js`、`dist/studio-composer.js`、`dist/studio-composition-catalog.js`、`dist/studio-composition-resolver.js`、`dist/studio-composition-fit.js`、`dist/studio-composition-coverage.js`、`dist/studio-random.js` | 新入口/普通路由/随机/Prompt/下载均不可达；没有project reader/migration/兼容分支 |
| 退休旧动作控制 | `dist/studio-inspiration.js`、`dist/studio-pickers.js` | 可复用Prompt词句须校对入新模板，其“编辑当前角色”/诊断动作不保留 |
| 删除旧入口/兼容桥 | `dist/editor.html`、`dist/legacy-editor.html`、`dist/legacy-bridge.js`、`dist/app.js`、`dist/data.js`、`dist/renderer.js`、`dist/style.css` | 从当前工作树入口与发布清单退出；不保留legacy bridge跨格式恢复 |
| 退出发布 | `dist/shared-2d.js`、`dist/live-runtime.js`、`src/live/{live-preview,avatar-body,avatar-props,surface-fur,activity-system,software-renderer}.js` | 引用清零后删无用途代码或明确非发布历史工具；Three不出现在新页面模块图 |
| 退出发布并保存历史 | `dist/qa/*`、`dist/assets/qa/*`、未批准`dist/assets/modular/*`、不采用历史原型图 | 移至非发布位置或Git保留，发布包不含旧QA/兼容编辑器；冻结source JSON不重写 |
| 保留在非发布历史 | `historical-runtime/retired-assets/dist/assets/poses/*`、批准/来源JSON、`design/acceptance/**`、`openspec/changes/archive/**`、Git历史 | 五张待核定姿态原字节/hash保留；目录sourcePath指向历史路径，不能当作发布Asset；不自动批准或否决 |
| 依赖及命令 | `package.json`、lock、`vite.config.mjs` | 保留Vite；Three以及仅服务旧bundle的直接esbuild依赖在无用途后移除，Vite所需传递依赖不粗暴删除；新build/资源检查符合实际发布合同 |
| 协作规则 | `AGENTS.md`、`DESIGN.md`、`.agents/rules/design.md`、`README.md` | 后续apply更新产品/命令/验收范围，保留透明、来源、历史与Sites权限规则 |
| 保持 | `.openai/hosting.json` | Site identity/access/settings不变；构建/提交不等于发布 |

采用新的生产文件允许清单；不能仅隐藏按钮仍发布旧编辑器/QA页面。删除清单也不能包含依赖退出前仍被新UI使用的资产。清理报告逐项记录“保留工具/已无引用/非发布保存/具体删除”，不能用“全删旧代码”替代审查。

## Test Replacement Map

| 现有脚本 | 新合同／处理 |
| --- | --- |
| `scripts/verify-catalog-tags.mjs` | Artwork/Feature显式关系、词别名、同维OR/跨维AND、未知值/空池、添加作品/标签的性质测试 |
| `scripts/verify-look-gallery.mjs` | 完整manifest/资源/批准引用、事实与Prompt/版本；剥离makeProject依赖，保留实际PNG校验 |
| `scripts/verify-family-navigation.mjs` | 三页路由/专题查询、详情关闭/Back/Forward、筛选/滚动/焦点恢复；删除身份草稿与v2回读 |
| `scripts/verify-fullscreen-random.mjs` | DrawResult-only、多个硬锁AND、有效池、单候选/去重、预载失败/取消/重开、顺序卡片/跳过/shared game |
| `scripts/verify-module-cache.mjs` | 同版生产模块图，首页/画廊/游戏/随机不请求工作台/Fit/3D，不只做源码字符串断言 |
| `scripts/verify-transparent-output.mjs` | 从composition依赖中独立，实际原图下载的MIME/尺寸/hash/alpha/画面与UI底色分离；保留透明/输出真实性门槛 |
| `scripts/verify-studio-browser.mjs` | 重写实页首页/画廊/详情/随机/游戏/参考图，实际剪贴板/下载回读、焦点、失败、Back、320/390/768/reduced-motion |
| `scripts/verify-creation*.mjs`、`scripts/verify-assembly-contact.mjs`、`scripts/verify-composition-{resolver,fit,occlusion,coverage}.mjs`、`scripts/verify-modular-source.mjs` | 旧工作台/适配测试退出当前门槛，仍适用的资源安全/错误处理逻辑提取到新测试；原历史结果保留 |
| `scripts/verify-atelier.mjs`、`scripts/verify-studio.mjs`、`scripts/verify-character-system.mjs`、`scripts/verify-recreations.mjs`、`scripts/verify-preview-capture.mjs` | 旧模型/3D/Shared2D诊断测试退休或非发布历史保存，不能因旧测试留Three |
| `scripts/freeze-character-acceptance.mjs`、`scripts/freeze-composition-report.mjs`、`scripts/extract-character-matrix.py` | 旧冻结/矩阵工具退出新发布流程；新证据目录与新资源合同独立产生，不覆写旧source/QA |

## Spec and Rule Reconciliation

| 现行capability | 新delta边界 |
| --- | --- |
| catalog-tags | Artwork标签/事实查询，改首页冻结/工作台入口副本；来源与批准保留 |
| family-navigation | 三页导航、专题到画廊、overlay/页面状态；删角色草稿/Project路由副本 |
| studio-visual-experience | 图1Hero和专题布局保留，按钮/文案/导航按新语义；删工作台并纠正全首页冻结 |
| studio-creation-experience | 详情/真实变体/直接带走；删Canvas/配置/应用流程 |
| fullscreen-randomizer | 同一Artwork的六卡事实揭晓；抽取前/中无锁定面板，结果后可展开AND Feature硬锁；删单槽自由重抽和应用提交 |
| character-creation-modes | 删Project包装/模式/背景惰性字段/诊断；保留原图及冻结操作真实性 |
| character-families | 保留身份、原创、来源；五组是首批内容，不是固定渲染家族；不继续要求程序化材质实现 |
| character-contact-and-motion | 完整作品自然接触/物种结构、无阴影/透明真实性；删运行时适配与诊断取帧 |
| character-visual-acceptance | 作品/实页/实际文件/Prompt回读；工程/美术/目标/发布分列，取消与历史确认保留 |
| modular-2d-composition | 旧十条组件/fit/项目合同退休，明确运行/发布退出；不为此恢复组合依赖 |
| composition-coverage | 完整发布作品及资源路径覆盖、变更影响、冻结；删笛卡尔适配/图鉴/项目往返 |
| 新artwork-catalog | 作品/Asset/Prompt/Feature/变体/发布资格及扩展 |
| 新reference-creation | 文字模板，不选择/预览/分析/上传图片、ChatGPT降级 |
| 新target-resources | 文件类型与端/版本/来源/验证独立；首期无Pet包 |

上述旧合同共81条，delta逐条处理易冲突项；不能只增加新规格而留旧副本继续要求工作台。cache90 已获得明确主规范同步授权：按14个 CLI `existingOutputPaths` 语义合并，更新与新产品冲突的 Purpose，保留现有 capability 路径，不自动重命名目录、不退休仍有新增合同的规范、不改历史归档。

现行规则的冲突：AGENTS/DESIGN/设计规则/README中的“工作台主流程”“项目v2/V10”“所有入口共享组合resolver”“动态组件Fit”“结构诊断”“首页导航/文案完全不变”均由新范围取代；身份/原创、透明输出、批准边界、历史不可重写、窄提交、Site身份访问约束继续保留。历史归档不追改，旧未通过/取消任务不改为通过。

cache90视觉与交互修订另见 [`studio-visual-interaction-system.md`](../../../../../design/studio-visual-interaction-system.md)，包括本轮可读参考范围、两块Hero/五张专题卡保留、六个揭晓位置、八类事实、身份纠偏、结果后Feature锁定及实际视口要求。主参考副本位于 `design/acceptance/current-20261007-v90/main-design-reference.jpg`；未收到的九张附图、ZIP与辅助随机图不计作已审核像素。
