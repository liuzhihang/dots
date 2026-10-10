# 设计实现与验收规则

1. 最新用户范围和当前 change delta 优先；读取 DESIGN.md 与 design/studio-visual-interaction-system.md。
2. P02 控制露台台阶、前中远景和疏密，P01 控制画廊、详情、手机层级与克制黄昏色；分别识别拼版页面面板。首页单一场景背景自适应铺满视口，不沿用固定624px Hero；类别控件只作为场景上的轻量 overlay，不做 Featured 作品区或大宣传卡。
3. 首页桌面、平板与手机分别核对完整合成静态场景图及真实可见角色热区，固定44px以上语义控件绑定Artwork ID/version；不叠透明角色群组。hover/focus显示短提示并沿该角色真实轮廓作描边动画；减少动态时显示静态描边。单击立即打开共享详情。平板不得保留被裁断角色的热点。
4. 原有15件已批准 Artwork 依各自原图范围保留。新增白色原创机器人、白兔等角色登记为独立候选身份，置于 `PREVIEW_*` 集合并标注待确认；完整候选可用同一作品详情地址查看，但默认画廊、搜索与 tags 只列已批准 Artwork。桌面、平板与手机 SceneArt、热点映射和页面呈现分别记为待确认，旧母图批准不扩大范围。
5. 成品事实和Prompt/下载同ID/version，修改意图仅作用于草稿。无实际资源的动画/变体/安装能力不显示。
6. 搜索多词AND、单系列AND；画廊开放浅色网格，完整轮廓、静态poster、可恢复失败。
7. 动画只按登记能力，offscreen/pageHidden/detailOpen/userPause/reduced-motion 合并暂停；没有资源不显示控件。
8. 功能检查与视觉比较分开；1440×900、390×844、320/768实页，真实剪贴板/下载；模拟视口不是实体设备。
9. 当前证据目录为design/acceptance/current-20261009-v98，绑定源码和资源hash；v97/v96目录及v98冻结基线保留，不覆盖。`previewOnlyFiles` 必须是 `files` 中待确认资源的明确子集；dist 仍是 Sites static.directory，候选未获确认时构建报告 `deploymentReady:false`，但这不代表运行时域名拦截或文件已从 Sites 目录移除。失败/pending不得改写为批准。
10. dist是源码和发布树；用精确manifest维护，旧运行移入历史并核对原字节。不reset/clean，不改其他dirty、不整体清空、不自动提交/部署/sync/archive。
