# cache90 候选验收账本

当前 change：`refocus-studio-on-gallery-and-card-reveal`。这是本地未提交工作树候选，仍处于验收修复阶段；未归档、未发布。Git HEAD 保持 `64db8f6cdfbda76f0f3851e63d5b4ec1c73e8592`，不能用这个旧提交代替当前 dirty-source。最终源清单见 `source-snapshot.json`，构建清单见 `build.json`。本轮 sourceId：`f5434ed76afc177e748ac3d59bb71260a0186651115eb892db3934f48c564b3e`，共 101 个源文件；4280 个受保护文件 hash、HEAD 与暂存区均保持原状。

## 输入与读取边界

- 实际读取 ChatGPT「优化角色与交互」最近五轮文本，留存 `chat-input.json`；本轮主参考附图留存 `main-design-reference.jpg`，原路径/hash 见 `reference-input.json`。
- 会话中九张身份附图、辅助随机材质图及 sandbox ZIP 未返回内容，未声称已查看。图中屏幕脸机器人、示例衣物/礼物、账户和收藏不是本轮批准能力。
- 已批准原图、两块 Hero 和五张专题插画保持原字节。现有 Hero/专题中的光滑紫色 Dots 与短绒图库作品差异仍待用户裁决；本轮没有改 PNG、生成替代群像或扩大批准范围。

## 本轮实现

八类独立视觉事实映射到六个固定槽位：角色风格 → 外形五官 → 配色材质 → 衣物 → 配饰 → 道具。动作/表情留作真实作品变体和搜索维度，背景留在资源规格。随机先冻结真实 Artwork/Asset/Prompt，再预载和顺序揭晓；过程候选各有来源，停止值与全部结果操作绑定同一版本。

桌面六卡同排，手机当前卡居中并露出邻卡；未开始时六张统一卡背。空值快速确认，未知事实或缺少所需语义视图的作品不进入默认池。图像卡使用真实原图的已登记局部视图；无衣物/配饰/道具显示明确空值，没有低质 SVG 替代或全量同图回退。

结果提供实际描述、尺寸和透明静态规格，复制/下载为主，重抽/详情/ChatGPT 为次级。手机先呈现角色和信息，再呈现主操作与紧凑特征轨道。硬锁仅在结果之后展开，用于下一抽的全部包含条件。游戏页使用默认有效池，画廊发起时保留当前查询，不新增范围面板。

详情桌面右栏/手机图下展示作品名、描述、四个精选标签与直接操作；完整事实和 Prompt 按需展开。修复移动端光学图片比例覆盖、随机结果完整人物裁切与静态标题输入框式焦点外观。参考图入口保持文字模板：用户在 ChatGPT 附图和发送；站内没有选图、预览、视觉分析或自动附件。

## 实际验证

| 检查 | 本轮证据与范围 |
| --- | --- |
| 单元/性质测试 | `unit/all-unit-report.json`：目录、查询、抽取、卡片生命周期四套通过；真实来源门槛、OR/AND、硬锁、none/NA/unknown、资源失败、取消与下载/复制竞态；Fake DOM/Blob 不作为 PNG 字节或视觉验收 |
| 浏览器回归 | `browser/report.json`：28 项通过；15 张原 PNG 下载、30 次中英 Prompt 剪贴板回读、15 张详情图实际绘制；错误/空池、AND 锁、下载 A/重抽 B、取消与返回、45 条退役静态 URL 404 |
| 详情/参考图专项 | `reference-detail/report.json`：15 项通过，0 外部请求、0 浏览器错误；变体只使用 test-only fixture，当前真实发布变体数仍为 0 |
| 六卡布局 | `layout/reveal-layout-report.json`：游戏/弹窗 × 1440、1280、768、390、320 CSS px，共 10 次；独立竖向候选轨道、顺序停止、全停后揭晓、手机居中跟随、主操作可达、reduced-motion、快速关闭重开 |
| 正常揭晓录屏 | `reveal-recording/report.json` 与 `video/reveal-flow.mp4`：白猫、眼镜 Dots、花束 Muse、针织衣人物、Grok 五款；332 帧，实测 21.74 秒、VFR 视频 21.92 秒；每款保留全停但结果尚未出现的证据 |
| 下载真实性 | `browser/download-alpha.json`：15 份实际下载的尺寸、原字节、SHA-256、非空内容和真实 alpha 与目录一致；`download-contrast-contact-sheet.png` 用同一下载字节在明暗面进行内部检查，不是新美术或艺术批准 |
| 卡片素材来源 | `feature-visuals/source-crop-ledger.json`：15 Artwork × 6 槽，5 组原图细节对照；sourceRect、Asset 版本/hash 和空值准确性可回读，展示质量待用户确认 |
| 主规范同步 | 当前 change 的 `planning/spec-sync-cache90.md`：14 capability（11 更新、3 新建），严格校验 15/15；幂等重放 14/14 与记录 hash 一致 |

浏览器采用本机已安装 Chrome/Playwright，产品实页地址 `http://127.0.0.1:5180/`，关闭 HMR；参考图专项使用本地 test fixture server。没有把模拟 CSS viewport 等同实体设备。ChatGPT URL 在测试中拦截并核对 Prompt 参数，未声称实测外部输入框或自动发送。

首次脚本失败和修复说明留存日志。实页定位的图片比例、完整图裁切、320px 主操作过低等真实问题已经修复。`reveal-recording-before-image-fix/` 保留前一内部录屏，最终录屏以 `reveal-recording/` 为准；cache89 及更早的冻结证据未覆盖。

## 独立状态与缺口

工程实现、素材存在、资源验证、艺术批准、目标验证、发布分别记录。新页面/局部视图的艺术确认、实体 iPhone Safari 地址栏/旋转/内部滚动验收仍未完成。任务 5.3、5.8、6.8、7.2、7.3、7.8 保持 pending；7.3 的素材来源工程完成不等于展示质量获准。

目前只有 15 张已批准完整静态作品，没有已发布同身份动作组或实际动画。5 张既存姿态候选不自动变成变体。Dot/Pet 只展示已查资料和验证状态；没有目标包制作/安装，普通 PNG 不标为安装包。缺失内容不伪造，不阻塞基础图库/随机/Prompt/原图闭环。

用户仅授权本轮继续实现、sync 与现行规则修订。未执行 Git 提交/暂存/推送、Sites 保存/部署、权限调整、sync 后归档或新美术批准。保留检查见 `preservation-check.json`。
