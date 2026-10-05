# v31 之后的整体页面 review

本轮在当前源码的真实浏览器页面取证，基线 Git `5cf1b4751b03cb07f9b4894d29fec25f0bcd9a67`；静态站点预览 `127.0.0.1:59811`，版本查询参数 v62。2026-10-05。参考 R01 为用户提供的完整设计方向；未将参考网页像素或动漫人物/动物作为资产。以下四步分别记录可见结果，截图均在本轮修改业务代码前捕获。

| 步骤 | 健康状态 | 本轮证据与发现 |
| --- | --- | --- |
| 1. 首页与五族入口，1280×900 | 入口有效，角色关系较弱 | [首页](references/scene-page-qa-20261005/01-home-before.png)：左右 12 张独立图，各图正面站姿；三成员家族卡使用相同旋转/缩放模板。数量丰富，但没有共同视线、承托或接触。 |
| 2. Meta Muse 内置形象页，1280×900 | 浏览功能有效，表现单调 | [图库](references/scene-page-qa-20261005/02-gallery-before.png)：奶油、玫粉花束和鼠尾草捧书三个身份可辨；均为静态正面整图，缺少家族关系场景与真实表情状态入口。 |
| 3. Meta Muse 工作台，1280×900 | 导出保护准确，真实定制范围较窄 | [工作台](references/scene-page-qa-20261005/03-workbench-before.png)：完整模板和背景确实合成；高级动作/表情标注只影响 Prompt。普通使用者没有能改变画面的真实姿态选择。 |
| 4. 首页，390×844 | 导航可用，群像主次不足 | [手机](references/scene-page-qa-20261005/04-mobile-before.png)：两个小头像队列各自独立；按钮与角色间留白较大，群像尺寸太小，没形成有关系的伙伴。 |

保留的优点：五族结构与独立图库/工作台路径清楚；底色、字重、明亮氛围与 R01 方向一致；可信 PNG 配方、固定原图来源和高级设定的导出保护已经存在。保留这些真实能力，不把程序化诊断模型当成美术成品。

优先问题 P1：素材只支持机械堆叠、缺少角色间物理关系；工作台表情/动作主要是文字设定。P2：手机群像尺寸与节奏、触控/键盘问候反馈、对应家族图库的氛围。优化通过七张具名成员互动场景和五只基准各一套真实姿态 PNG 完成；场景不会进入单只导出、图库身份或项目配置。

边界：图库初次检查遇到旧本机服务器已退出，确认连接失败后恢复本机服务并重新捕获有效页面；该临时失败不作为线上缺陷。四步为本机浏览器 evidence，不代表真实远程手机或用户逐族美术验收。生成素材、代码、程序检查、发布状态和用户美术确认继续分别记录。

## 完成本轮实现后的实际检查

当前依赖查询参数为 v63。七张场景为独立透明插画，已有 12 个首页成员和每组 3 个身份保持；图库仍为 15 项。场景不进入单只导出、项目 assetId 或随机角色池。五组基准分别提供一张眨眼或问好静态状态；CSS 只为整个场景提供反馈，不模拟肢体动画。[素材及尝试来源](references/scene-page-qa-20261005/asset-provenance.md) 保留失败稿原因、PNG 原始哈希和 Muse prompt 来源限制。

| 实际操作 | 结果及证据 |
| --- | --- |
| 首页 1280×900、768×1024、390×844、320×844 | 七张关系插画正常载入；无页面横向溢出。390 初版左人物头部裁切，改为两侧各 50% 容器后复验完整；320 项目入口保留可读 accessible name。[桌面](references/scene-page-qa-20261005/07-home-after-1280.png)、[768](references/scene-page-qa-20261005/09-home-after-768.png)、[390](references/scene-page-qa-20261005/10-home-after-390.png)、[320](references/scene-page-qa-20261005/11-home-after-320.png)。 |
| 鼠标/触控入口、Enter 问候、返回工作台 | `aria-pressed`、气泡与 live status 同步；仅一侧选中。问候后柴犬工作台仍保留挥手、happy、sit、solid 和 #242036 草稿。[问候](references/scene-page-qa-20261005/08-home-greeting.png)。 |
| 五组图库筛选 | 每组恰好 3 卡、对应 scene 正常载入；全部家族仍为 15 卡。对应 18–22 五张截图；[Muse 首屏](references/scene-page-qa-20261005/20-gallery-meta-muse-1280.png)。 |
| 五组工作台真实状态 | Dots/Grok `wink`，Muse/人物/柴犬 `wave + happy`；柴犬解析仍为 `sit`。网页读取的 Prompt 与字段、available 配方一致；按钮实际更换完整 PNG。证据为 12–16 五张截图，[Muse](references/scene-page-qa-20261005/12-muse-wave-fixed-1280.png)、[Grok](references/scene-page-qa-20261005/14-grok-wink-1280.png)。 |
| Muse 尺寸问题复现与修复 | 经典图 1235×1274，wave 图 1254×1254。首次切换被 Composer 精确尺寸门禁拒绝；修复匹配完整状态时素材包使用对应图尺寸，未弱化校验。实页 wave Canvas 为 1254×1254、ready，导出启用。回归覆盖经典、五个变体、未匹配 tuple 与篡改尺寸。 |
| 5 次透明 PNG 下载 | 点击实际 UI 导出，分别检查新下载文件；均为 1600×1600 RGBA、alpha 0–255、透明角像素。五项完整哈希见 [实际下载记录](references/scene-page-qa-20261005/pose-export-checks.json)。未把原始 ImageGen PNG 当成工作台导出证明。 |
| 深色背景导出 | 柴犬 wave 的新下载 `暖橙柴犬-character (1).png` 为 1600×1600 RGBA、alpha 全 255，角像素 (36,32,54,255)，与 #242036 一致；没有将之前透明同名文件误当新导出。[页面](references/scene-page-qa-20261005/17-shiba-wave-dark-1280.png)、[下载记录](references/scene-page-qa-20261005/project-dark-checks.json)。 |
| 项目 JSON、撤销与重新导入 | 实际保存项目包装 v1、角色 v10 和 canonical 动物 artworkId；撤销 wave 恢复经典，再通过真实文件选择器导入刚保存 JSON，恢复 wave/happy/sit 与深色背景。恢复后 PNG 可导出。[字段与文件哈希](references/scene-page-qa-20261005/project-dark-checks.json)。 |
| 未提供造型的防护 | 用本页配置工具将 wave 柴犬 eyeScale 改为 1.15；页面显示“模板预览 · 不可导出”，PNG/放大均 disabled。恢复原配置后启用；没有把未渲染高级设定冒充当前图片。 |
| 手机工作台与图库 | 390 姿态按钮复验高度 44 px，无横向溢出；320 当前 Meta Muse 筛选完整进入可视区，caption 按逗号换行，没有孤字。[控件](references/scene-page-qa-20261005/24-workbench-controls-390.png)、[320 图库](references/scene-page-qa-20261005/26-gallery-muse-320.png)。 |
| reduced-motion 与浏览器错误 | 源码明确关闭新场景 transition、sparkle animation 和整体位移；未修改用户 OS 设置，因此系统开启该偏好的设备运行检查仍未完成。最后新载入页面的 console warning/error 列表为空。 |

独立视觉审查先看参考与最终首页，再看五组工作台和手机图库；反馈的 320 筛选裁切、孤字和 h1 过强焦点框均修正并由审查者复看。最终报告没有明显身份、裁切或布局阻断。独立代码审查发现 non-Shiba wave Prompt 无条件宣称坐姿，已按解析姿态修正并增加猫与柴犬实际措辞测试；最终缺图阻断随七张素材交付解除。

构建与检查：`npm run build`，10 项现有 verify 脚本全部通过；最终窄屏修正后重跑 family-navigation、look-gallery、module-cache 通过。`openspec validate --all --strict` 四个 change 通过，OpenSpec 保持 1.13.1。浏览器检查与独立 review 只证明本轮页面呈现、交互和输出一致性。用户远程手机、逐组角色美术认可仍待反馈；没有新增第 4 个家族成员、没有归档角色 change。
