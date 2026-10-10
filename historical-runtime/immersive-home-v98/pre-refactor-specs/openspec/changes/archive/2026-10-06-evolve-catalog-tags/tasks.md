# Tasks

本表记录实施进度；勾选只对应已执行的范围，OpenSpec 规划完成不表示功能完成。不包含 Git 发布或 Sites 部署授权。

依赖按任务切片而非整个change建立：1.3–1.4的目录/查询和2.1–2.3的页面/状态可以先交付；2.4及3.3等待add-modular-2d-composition基础1.1–1.6。3.2消费add-composition-visual-regression的group1基础报告，不等待新素材或实际随机池集成。其他change的基础任务可在本change未完成时推进，未执行任务不得提前勾选。

## 1. 合同与目录

- [x] 1.1 确认本change范围和首个闭环，保存用户方案决定；核对开始实施时HEAD/工作区与设计基线差异，不覆盖既有文件。
- [x] 1.2 按delta窄范围更新AGENTS、DESIGN、设计规则、README及相关现行spec/Purpose，移除旧格式兼容要求，写明首页设计不变；保留来源/当前模板/旧3D取消/dist/发布边界，用strict与差异审查确认没有重写历史证据或固定内容上限。
- [x] 1.3 新增typed tag目录和Look—Tag关系，以当前15look提供有事实依据的首批标签；验证ID唯一、引用登记look、无空系列、每个look可以属于多标签且不复制作品。
- [x] 1.4 实现同维OR/跨维AND及文本规范化查询，当前首页family卡片入口内部映射到预置tag；测试组合条件、标签别名、多词、空结果/清除、未发布/退役隔离，不引入旧身份/schema兼容。

## 2. 页面与当前编辑状态

- [x] 2.1 仅在图库/工作台内容区接入常用/更多搜索标签及无专属场景的真实缩略图回退；实际页面对照确认首页布局、群像、卡片、主导航、首页文案、现有搜索/场景筛选不变，Grok/Muse仍可见，原随机按钮设计保留；仅全局项目菜单废弃兼容导出项随第二项删除，容器与其他功能保持。
- [x] 2.2 隔离标签浏览与startLook/commit，保留原familyDrafts；测试浏览前后角色/模式/artworkId/history相等，多个标签同look定制不创建副本，Dots与Muse草稿分别可恢复。
- [x] 2.3 增加受信任ID/hash/批准范围映射，解析当前15look确认并修正运行时说明；测试新hash/新姿态不继承、历史false不修改、美术与PNG字节/设备状态分开。
- [x] 2.4 在第二项基础1.1–1.6交付后更新模块缓存引用和相应现有验证断言；运行verify-family-navigation、verify-look-gallery、verify-creation、verify-module-cache，按唯一v2合同更新版本测试，保留退役/URL拒绝和真实库存检查，不保留旧版成功导入断言。

## 3. 实际验收与交接

- [x] 3.1 在桌面及320/390/768px真实页面核对图库/工作台标签搜索/抽屉/无结果/定制、键盘焦点和页面溢出，并与修改前冻结首页作视觉对照确认设计不变；冻结到新的design/acceptance目录，报告实际页面/版本和未验证设备。
- [x] 3.2 消费add-composition-visual-regression的group1基础报告，逐项回读现15look/22配方状态及三背景66个输出；before捕获只作对照，最终结果绑定本基础闭环完成后的同一source/资源版本。报告含失败/未执行，不等待实际随机池或新模块素材集成，也不因本change逻辑通过称全部导出通过。
- [x] 3.3 在第二项基础1.1–1.6完成唯一项目v2/角色VERSION10与当前模板adapter后，核对新版项目保存/恢复/导入导出、撤销重做与当前会话草稿；旧v1、纯角色、schema6–9及旧身份别名必须明确拒绝且不改活动作品。检查Prompt文本与参考说明保持，回读实际结果并记录范围。
- [ ] 3.4 交付基础闭环本地预览和冻结报告，取得涉及新页面范围的用户确认；核对本change必要任务与已知缺口后才完成或归档。依赖接口交付后可继续其他change的对应切片，无需等待所有change完成；不自动发布。

当前静态/自动化证据：`design/apply-scope-20261006.json`、`dist/studio-tags.js`、`dist/studio-composition-catalog.js`；本地 `verify-catalog-tags`、`verify-family-navigation`、`verify-look-gallery`、`verify-creation`、`verify-module-cache` 和 `openspec validate --all --strict` 已执行通过。真实页面、66 个模板/背景 PNG、项目与 Prompt 回读见 [v84 冻结报告](../../../../design/acceptance/current-20261006-v84/README.md)，来源为 b25/f2e7；桌面与 320/390/768 px 已检查。3.4 的新页面用户确认尚未取得，本 change 不宣称全部验收完成。
