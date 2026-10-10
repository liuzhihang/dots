# 设计实现与验收规则

1. 最新用户范围和当前 change delta 优先；读取 DESIGN.md 与 design/studio-visual-interaction-system.md。
2. P02 控制桌面首页空间，P01 控制画廊、详情、手机层级与克制黄昏色；分别识别拼版页面面板。只有一个露台场景，不得截取原型像素或嵌入整页图冒充页面。
3. 首页每个视口使用一张完整合成静态场景图，固定44px以上语义热区按图中真实可见角色绑定Artwork ID/version；不叠透明角色群组。hover/focus短提示，单击立即打开共享详情。≤600px使用专用手机竖幅；平板cover仅保留仍完整可见且可点击的热点。
4. Dots/Grok/Muse/人物/动物身份按参考与登记母图核对；桌面与手机SceneArt、热点映射和页面呈现单独记为待确认，旧母图批准不扩大范围。
5. 成品事实和Prompt/下载同ID/version，修改意图仅作用于草稿。无实际资源的动画/变体/安装能力不显示。
6. 搜索多词AND、单系列AND；画廊开放浅色网格，完整轮廓、静态poster、可恢复失败。
7. 动画只按登记能力，offscreen/pageHidden/detailOpen/userPause/reduced-motion 合并暂停；没有资源不显示控件。
8. 功能检查与视觉比较分开；1440×900、390×844、320/768实页，真实剪贴板/下载；模拟视口不是实体设备。
9. v97证据目录为design/acceptance/current-20261009-v97，绑定源码和资源hash；v96目录作为用户拒绝历史保留，不覆盖。失败/pending不得改写为批准。
10. dist是源码和发布树；用精确manifest维护，旧运行移入历史并核对原字节。不reset/clean，不改其他dirty、不整体清空、不自动提交/部署/sync/archive。
