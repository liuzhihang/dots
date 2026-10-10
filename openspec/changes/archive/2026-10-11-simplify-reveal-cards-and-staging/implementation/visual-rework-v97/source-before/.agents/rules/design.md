# 设计实现与验收规则

1. 最新用户范围和当前 change delta 优先；读取 DESIGN.md 与 design/studio-visual-interaction-system.md。
2. P02 控制首页空间，P01 控制UI/详情/手机与黄昏色。只一场景。不得截取原型像素、嵌入整页图冒充页面。
3. 背景不烘焙重复角色；角色分层和稳定44px热区，hover/focus短回应，单击立即打开共享详情。
4. Dots/Grok/Muse/人物/动物身份按参考与登记母图核对，姿态另记pending；旧母图批准不扩大范围。
5. 成品事实和Prompt/下载同ID/version，修改意图仅作用于草稿。无实际资源的动画/变体/安装能力不显示。
6. 搜索多词AND、单系列AND；画廊开放浅色网格，完整轮廓、静态poster、可恢复失败。
7. 动画只按登记能力，offscreen/pageHidden/detailOpen/userPause/reduced-motion 合并暂停；没有资源不显示控件。
8. 功能检查与视觉比较分开；1440×900、390×844、320/768实页，真实剪贴板/下载；模拟视口不是实体设备。
9. v96唯一证据目录为design/acceptance/current-20261009-v96。每份最终证据绑定源码和资源hash。失败/pending不得改写为批准。
10. dist是源码和发布树；用精确manifest维护，旧运行移入历史并核对原字节。不reset/clean，不改其他dirty、不整体清空、不自动提交/部署/sync/archive。
