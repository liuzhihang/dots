# 协作约定

开始工作前先读 [产品与设计约定](DESIGN.md) 和 [设计审查规则](.agents/rules/design.md)，再读 README 中相关架构、命令和验收边界，并检查目标目录的 `AGENTS.md`。按任务范围读取对应 OpenSpec change/spec 与源代码；不要复制整份规范或把带日期的验收清单当作长期规则。

## 项目边界

- Dot Icon Studio 保留 Dots、Grok Bot、Meta Muse、人物、动物五组。内置形象画廊与统一创作工作台是主流程，无需登录、账户或用户空间。
- 当前 15 个 `lookId` 是登记图库事实，不是家族卡/场景人数限制。只在明确登记和验证后，才能把单体素材加入图库或工作台。
- 页面展示群像、图库单体、工作台实际合成图和“结构诊断”渲染是不同资产与验收范围；不要互相替代。Site 35/cache 83 的五组当前 Gallery/工作台模板形象已获用户美术确认，但这不表示所有 PNG 导出字节或实体手机已验证。
- 人物和动物必须是原创身份。R01 可作构图与风格参考，不得直接把截图或动漫像素嵌入、裁切、抠取或复刻为角色资产。
- `dist/` 同时含可编辑页面与静态发布文件，不是可整体清理的构建目录。实时 3D 渲染源码在 `src/live/`；`dist/live-runtime.js` 由构建脚本生成。
- Git 与 Sites 发布彼此独立。保留 `.openai/hosting.json` 中现有 Site 身份、访问范围和发布设置；按明确文件清单窄范围提交，不清理或覆盖他人改动。
- 项目已有 OpenSpec 根配置；使用本机 OpenSpec 1.13.1。不要重初始化、自动升级或覆盖现有配置/specs。当前交付范围是 PNG 模板、背景合成与 Prompt；用户已授权结束旧角色改造范围，原 11 项 3D 工程/精细基准目标按范围决策取消，不得伪装成已通过 3D。旧渲染器只作结构诊断。后续 QA 冻结输出写入 `design/acceptance/current-<本机日期>-v<cache版本>/`，用新目录且不得覆盖既有冻结证据。

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
