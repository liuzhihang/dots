# Spec Delta

## MODIFIED Requirements

### Requirement: 角色库必须作为唯一页面与导航入口
根路径 SHALL 直接呈现完整角色库，唯一站内页面导航只提供 Characters；页头或页脚 SHALL 允许明确区分的 GitHub 仓库与 Issue 反馈辅助外链，外链不属于站内页面或角色路由。产品 MUST NOT 提供 Guide 页面、`#/guide` 路由、独立宣传首页、重复角色目录入口、收藏、统计、用户空间或独立工作台；未知路由按 not-found 处理，不保留隐藏页面或兼容 alias。

#### Scenario: 打开根路径
- **WHEN** 用户访问应用根路径
- **THEN** 直接显示包含 D01 banner 的角色库、文本搜索及五个 series 筛选；不进入独立宣传首页或第二个图库页面

#### Scenario: 已移除的 Guide 地址
- **WHEN** 用户访问 `#/guide`
- **THEN** 显示普通可恢复的 not-found 状态，不加载隐藏页面、别名或跳转状态

#### Scenario: 外链不扩展站内页面
- **WHEN** 用户在页头或页脚访问 GitHub 或反馈建议
- **THEN** 通过新标签页打开仓库或 Issue 选择器，原图库查询、排序、滚动及历史保持；站内仍只有 Characters 页面，不建立反馈页、反馈弹窗或新的 hash 路由
