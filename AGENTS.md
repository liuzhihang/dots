# 协作约定

开始工作前先读 [产品与设计约定](DESIGN.md) 和 [设计审查规则](.agents/rules/design.md)，再读 README 中相关架构、命令和验收边界，并检查目标目录的 `AGENTS.md`。按任务范围读取对应 OpenSpec change/spec 与源代码；不要复制整份规范或把带日期的验收清单当作长期规则。

## 项目边界

- Dot Icon Studio 保留 Dots、Grok Bot、Meta Muse、人物、动物首批身份与预置标签；目录采用可扩展的 typed tags 和 Look—Tag 多对多关系，标签不赋予渲染能力。内置形象画廊与统一创作工作台是主流程，无需登录、账户或用户空间。
- 当前 15 个 `lookId` 是登记图库事实，不是家族卡/场景人数限制。只在明确登记和验证后，才能把单体素材加入图库或工作台。
- 页面展示群像、图库单体、工作台实际合成图和“结构诊断”渲染是不同资产与验收范围；不要互相替代。Site 35/cache 83 的五组当前 Gallery/工作台模板形象已获用户美术确认，但这不表示所有 PNG 导出字节或实体手机已验证。
- 人物和动物必须是原创身份。R01 可作构图与风格参考，不得直接把截图或动漫像素嵌入、裁切、抠取或复刻为角色资产。
- `dist/` 同时含可编辑页面与静态发布文件，不是可整体清理的构建目录。实时 3D 渲染源码在 `src/live/`；`dist/live-runtime.js` 由构建脚本生成。
- Git 与 Sites 发布彼此独立。保留 `.openai/hosting.json` 中现有 Site 身份、访问范围和发布设置；按明确文件清单窄范围提交，不清理或覆盖他人改动。
- 项目已有 OpenSpec 根配置；使用本机 OpenSpec 1.13.1。不要重初始化、自动升级或覆盖现有配置/specs。当前角色 PNG 模板、透明 Canvas 合成、Prompt 与版本化 2D 组合构成产品范围；角色背景不再编辑，角色预览/随机/PNG 与诊断捕获保持真实 alpha，Prompt 不读取背景值。新角色默认透明；当前 v2 / VERSION 10 中严格合法的背景值与组合输入作为惰性元数据保留，旧 schema 仍拒绝，不升级或迁移。用户已授权结束旧角色改造范围，原 11 项 3D 工程/精细基准目标按范围决策取消，不得伪装成已通过 3D；旧渲染器仍只作结构诊断。后续 QA 冻结输出写入 `design/acceptance/current-<本机日期>-v<cache版本>/`，用新目录且不得覆盖既有冻结证据。

- 首页现有布局、群像、场景卡、主导航、文案与搜索/场景筛选保持不变；只移除首页唯一背景功能按钮。首页插画和家族卡底色保持原样；标签与素材 UI 仅在图库和工作台，废弃兼容导出菜单项移除。
- 配置合法不等于可渲染。手动、精选、随机、恢复、预览、导出共享 resolver；默认随机须具备真实配方和实际合成结果。素材 ID/版本/hash、来源、能力与人工美术批准分别记录，不能自动接受截图基准。
- 可渲染不等于视觉协调。组件按已登记的基底几何、姿态和挂载合同动态解算；比例、接触、遮挡、材质光照与配色逐适配检查，几何与策略变更不得继承旧批准。
- 所有角色画面与角色 PNG 都是真透明输出：背景元数据不能进入 Prompt 或 render plan，capture 请求不透明背景也不能填充像素。该规则不作用于首页艺术底色或预览 UI 外框，也不重写历史美术确认记录。
- 本期不做用户上传、自定义公共标签、公开投稿、账号或审核系统。所有项目只读写 v2 + 角色 VERSION 10，不迁移或导出旧格式。

## 常用命令

需要 Node.js 20.19+ 或 22.12+。

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run build
node scripts/verify-studio.mjs
node scripts/verify-creation.mjs
node scripts/verify-creation-ui.mjs
node scripts/verify-look-gallery.mjs
node scripts/verify-family-navigation.mjs
node scripts/verify-module-cache.mjs
node scripts/verify-preview-capture.mjs
node scripts/verify-assembly-contact.mjs
openspec list
openspec validate --all --strict
```

构建与脚本只证明其覆盖的工程行为。视觉变更须在实际页面检查目标桌面及 320/390/768 px 视口；PNG 验收需检查实际字节与合成结果；用户美术确认须绑定具体冻结版本。未实际检查的页面、设备、导出或发布状态不得写成通过。
