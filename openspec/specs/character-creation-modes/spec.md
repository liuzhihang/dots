# character-creation-modes Specification

## Purpose

定义用户如何从首页、图库、详情、随机与参考图文字入口查看、复制及带走完整 Artwork，保证操作绑定同一作品快照且不恢复旧编辑器。

## Requirements

### Requirement: 新产品必须围绕作品操作且不恢复旧创建模式
浏览、详情、随机、Prompt 和下载 SHALL 直接引用完整 Artwork 与其发布资源，不读取或写入活动项目、旧 schema、角色模式、Canvas 配方、导入导出 JSON 或恢复草稿。用户无需账户即可使用本期提供的真实作品与参考图模板辅助；无效/未知输入 SHALL 安全处理，不建立旧项目 reader、兼容别名、迁移或新旧双轨。

#### Scenario: 提供旧项目文件或存储
- **WHEN** 浏览器中存在旧项目存储，或用户提供 v1/v2 项目文件
- **THEN** 产品不读取、迁移、恢复或清除这些旧数据，不开放项目导入入口；未知输入按新产品安全规则处理

#### Scenario: 直接带走一张完整作品
- **WHEN** 用户从详情或 DrawResult 复制 Prompt 或下载
- **THEN** 操作只使用该作品冻结版本，不需要登录、创建模式切换、应用当前项目或执行组件合成
