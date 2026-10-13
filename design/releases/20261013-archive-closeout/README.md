# 2026-10-13 归档与代码提交收尾

用户在 Site59/v110 发布与线上复验后明确授权“归档并提交代码”。本次归档两项相关 change，并提交基础形象、编辑器与UI、回归脚本及精选发布记录。

- [improve-studio-option-recovery](../../../openspec/changes/archive/2026-10-13-improve-studio-option-recovery/): PR #4 已合并；12/12任务完成，原 change 文件逐字保留。
- [move-appearances-into-gallery](../../../openspec/changes/archive/2026-10-13-move-appearances-into-gallery/): 30/30任务完成；同步固定形象、严格路由、无确认导航、选项素材与加载反馈，以及紧凑双语控件合同。

主规范按上述先后顺序合并，保留原有 Purpose 和未涉及的要求、场景。归档复核补全先前 change 新增的关闭场景，统一直接退出与语言控件恢复，明确桌面精细指针导航36px及触控/主操作44px例外。新增 gallery-looks 主规范保留已撰写 Purpose；README/DESIGN 的当前链接更新到归档目录。历史报告中的原命令、当时的未归档说明和实际验收结果保留。

## 验证

- 完整 `npm test`、`npm run build`、`npm run verify:release-safety` 退出0。
- 两项 change 在归档前的 strict 校验通过；归档后主规范普通校验12/12通过，无活动change。
- 主规范 strict 校验退出1，全部为描述超过500字符的长度告警，没有结构错误。归档前已有13条，合并完整MODIFIED合同后为15条；未为消除长度告警而拆改既有产品合同。
- `git diff --check` 通过。提交采用冻结的精确路径清单和独立Git index；临时QA和Sites工作包保留在忽略的`.artifacts/`。
- 保护配置、批准记录与素材来源保持原样；暂存检查仅要求删除新增源码 studio-gallery-looks.js 文件末尾的一个多余空行，未改变业务逻辑。线上仍为原发布的Site59/v110，本次没有再次部署。

[Site59/v110记录](../20261013-option-card-palette-v110/README.md)继续保留“功能通过、性能未通过”：线上首个可编辑画布116.804秒，超过60秒目标，实体设备/4G尚未覆盖。归档不代表这些限制已解决。
