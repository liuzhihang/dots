# 仓库内容与历史恢复

## 应纳入 Git 的内容

- `dist/` 是可编辑的应用源码和 Sites 发布树；正式 Artwork、Template 图层、预览素材和来源登记都是产品输入，继续版本管理。
- `scripts/`、测试 fixtures、依赖锁文件、构建配置及 `design/static-publish-manifest.json` 支持可重复开发和验证。
- `openspec/specs/` 保存现行合同；归档 change 的 proposal、design、tasks、delta、来源/批准记录保留历史原意。
- 当前主稿、角色身份参考、制作 brief/Prompt、素材来源/hash 清单和精确审批记录继续保留。
- `design/releases/` 保存精选发布记录与验收摘要；旧版通过、失败、待确认和取消状态不改写。

## 日常输出

测试、截图、下载样本、逐帧渲染和候选审阅包默认写入被忽略的 `.artifacts/`。`DOTS_EVIDENCE_DIR` 可指定一次运行的输出目录。下载验收会先执行真实浏览器下载，再读取同一目录的结果。需要长期留存的结果，筛选后写入 `design/releases/<release>/`，注明源码版本、运行命令和观察边界。

历史 `design/acceptance/`、归档 acceptance 目录与 `historical-runtime/` 不再接收新的日常输出。`.gitignore` 忽略这些目录中的未跟踪文件；其中已经跟踪的审批、来源与必要测试输入仍保留。

候选审阅工具只生成独立包，不修改素材登记或已有批准状态。`capture-candidate-review.mjs` 从当前 pending Artwork 制作审阅包；没有候选时明确退出。

当前 v100 的 44 套模板审阅范围见 [完整审核包](../openspec/changes/archive/2026-10-11-expand-character-gallery-and-adjustments/planning/character-production-20261011/reviews/gallery-adjustments-review-package-v1.md)，集成后的真实编辑、导出与构建结果见 [本地集成记录](releases/20261011-gallery-adjustments-v100/README.md)。新的日常工程结果由 `npm run test:editing` 写入 `.artifacts/studio-editing/run-*/`，其完整模板及组合清单来自实际目录。

`capture-template-review.mjs` 保留为 **v99 两套 legacy orb 模板的历史审阅工具**，仍要求旧字段与旧清单，不能用于当前 v100。以下命令只在独立恢复的 v99 工作树内，配合该旧树的编辑验收与构建报告使用：

```sh
node scripts/capture-template-review.mjs \
  --run-dir .artifacts/studio-editing/run-实际运行编号 \
  --build-report .artifacts/build/build-report.json \
  --output .artifacts/review-candidates/本次审阅包
```

可附加 `--artwork-review` 指向候选作品 JSON。`--output` 指定目录必须尚不存在，避免覆盖旧审阅与批准材料。`npm run qa:design` 消费 `test:browser` 生成的当前浏览器和编辑器布局截图；可以通过 `-- --browser-dir <目录> --layout-dir <目录>` 指定其他本次输出。

## 本次历史归档

本次只从当前 Git 文件树移除重复源码快照、原始 QA 图片/下载与可再生成报告；本地文件保留。逐文件记录见 [repository-history.json](repository-history.json)，含原路径、字节大小、Git blob、SHA-256、分类与原因。恢复基准为完整提交 `20d5a72a07ebe31dbbddcb2582bbe57c0c6f61e8`。

这次采用普通提交，没有重写历史，因此完整克隆仍会获取旧对象；当前文件树和后续提交更轻，现有 `.git` 体积不会随之消失。需要只获取当前源码时，可使用浅克隆；恢复历史证据或运行历史检查前需获取完整历史。

将清单中一个文件恢复到独立目录的示例（替换原路径，避免覆盖工作文件）：

```sh
mkdir -p .artifacts/recovered
git show '20d5a72a07ebe31dbbddcb2582bbe57c0c6f61e8:原路径' > .artifacts/recovered/原文件名
```

也可检查整个旧版本。以下命令仅创建本地恢复工作树，不改当前 checkout：

```sh
git worktree add --detach ../dots-history-20d5a72 20d5a72a07ebe31dbbddcb2582bbe57c0c6f61e8
```

`npm run verify:release-safety` 检查清单中的路径/大小/blob 与恢复提交一致、对象存在、文件已退出所选 Git index 且受 ignore 保护。附加 `-- --verify-local` 会要求清单内全部本地文件存在，并核对字节；该选项用于保留原文件的本地清理验收，不用于未恢复历史文件的新克隆。该检查需要 Git 历史；静态构建和普通测试不需要历史快照。

`scripts/verify-implementation-safety.mjs` 是 v99 实施当时的冻结授权审计，逻辑原样保留用于旧工作树回放，不作为所有后续变更的永久允许列表。当前应用构建仍检查精确发布闭包、登记素材及字节/hash；移走历史产物不会降低这些检查。
