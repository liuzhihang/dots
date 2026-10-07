# cache 87 本地重构候选

本候选对应 `refocus-studio-on-gallery-and-card-reveal` 的 apply。基线为 main / `64db8f6cdfbda76f0f3851e63d5b4ec1c73e8592` / cache 86；当前为未提交的 cache 87 工作区。候选 sourceId 为 `08b2624c93505ba4282b1f1cf0242477232ff6df9e10571e4670fce9b88566a1`。源码及资源以 [source-snapshot.json](source-snapshot.json) 绑定，完整证据文件以 [artifact-manifest.json](artifact-manifest.json) 绑定。

本地预览：`http://127.0.0.1:5174/`。三页路径为 `#home`、`#gallery`、`#game`。这是本机 Vite 候选，不是线上 Site 版本；此前线上访问受登录/401 限制，本轮未做生产页面验收或改变访问权限。

## 实际闭环与范围

- 首页保留品牌、中央标题和左右群像、首批五组专题及浅色卡片。专题进入标签画廊；随机主按钮打开卡片揭晓。新增标签与作品从目录接入，不固定“五大家族”。
- 画廊 → 关键词/多维筛选 → 完整大图详情 → 复制中英文 Prompt/下载登记原图 → 回到原筛选、滚动和焦点。
- 首页/画廊弹窗或游戏页范围 → 同一抽取引擎先选定有效成品 → 四个独立卡槽依次停止 → 同一作品、Prompt 和原图。软筛选同维 OR/跨维 AND；所有必备特征同时包含；空池不放宽。
- 详情或页头参考入口 → 本地静态图片预览、手写要求与保留项 → 身份模板 Prompt → 用户在 ChatGPT 自行粘贴、附图和发送。A 方案无视觉分析、模型接口、上传或公共记录。
- 工作台、装备、自由组装、项目文件、旧 schema reader/恢复/迁移、旧路由兼容、3D 和诊断产品入口退出。`#workspace` 使用普通未知路径回退；旧存储不读取、迁移或删除。

## 输入与视觉核对

本轮实际收到并查看的是图 1 的 JPEG 附件 `1-Photo-1.jpg`，SHA-256 `edc95c9feff330451c82369f2b9b617c55d77d16bc0b654b7a5ce8521e74fc8a`。它对应用户指定的“dot_icon_studio_角色设计展板.png”方向；没有将展板整图嵌入网页或从中裁取角色。当前 Chat 仅已读取方向切换后的五轮；原起点历史尚未完整取得，不能称全量历史已读。读取边界见 change 的 `planning/evidence-and-prototype.md`。

| 图 1 项目 | 当前候选处理 | 状态 |
| --- | --- | --- |
| 品牌、中央标题、左右群像、明亮氛围、五组视觉专题 | 复用原独立 Hero/场景美术，真实 DOM 排版及专题入口 | 内部目视已检查；新页面用户确认待办 |
| 图库、大图详情、浅色表面 | 真实网格、筛选、dialog 与直接操作；页面表面不烘焙进原图 | 工程及模拟视口已检查 |
| 多张卡片逐步揭晓 | 四个独立轨道及相邻候选、按顺序停下；整图最后出现 | 时序与冻结绑定已检查；玩法视觉待用户确认 |
| 登录、空间、工作台、开始组装、永久五家族、虚假现场生成 | 从产品入口与文案移除 | DOM、路径、模块及网络已检查 |
| 展板示例的嘴、肢体、材质或品牌归属 | 保留既有批准资源身份；不把展板示例当作额外角色批准 | 15 个原图 hash 继承原批准范围；不扩大批准 |

查看 [首页桌面](browser/home-1440.png)、[首页 320](browser/home-320.png)、[画廊 768](browser/gallery-768.png)、[详情桌面](browser/detail-1440.png)、[随机 390](browser/random-390.png)、[游戏 320](browser/game-320.png)、[参考图 320](actions-reference-detail/reference-320.png)。内部目视检查发现并修正了专题标题与插画重叠、详情事实重复等问题；这些截图是候选审查资料，不是自动接受的艺术基准。

## 检查与证据

| 检查 | 实际结果及边界 | 证据 |
| --- | --- | --- |
| 目录、查询、抽取性质及资源工具 | 15 作品、56 typed tags、5 非发布姿态；引用/批准/hash、OR/AND、全部硬锁、空池、唯一候选、袋去重、未知值、资源故障、不可变快照和新增目录 fixture 通过 | [单元与定向检查日志](unit-and-component.log)；`scripts/verify-artwork-*.mjs` |
| 共用卡片视图 | 顺序停卡、全停才操作、预载、取消、资源隔离/主动重试、跳过、减少动态、返回停卡、迟到操作失效通过 | 同日志；`scripts/verify-card-reveal.mjs` |
| 详情/参考图定向浏览器 | 19 项通过；原子变体和失败保留机制使用隔离 fixture，实际目录没有已发布变体；静态 PNG/JPEG/WebP、损坏/伪类型/动画/超限、慢文件替换/移除、URL 回收、复制/TXT/打开降级和关闭后回调通过 | [定向报告](actions-reference-detail/report.json) |
| 完整本地浏览器闭环 | 20 组检查通过；四槽停止顺序 0→1→2→3；卡值、成图、Prompt、下载一致；改条件不改当前结果；详情→参考图的五种逐层退出/语言/626px 内滚动/焦点恢复、慢真实 A 下载→B、Back/Forward、404、锁定空池、快速重开、减少动态与未知输入通过 | [浏览器报告](browser/report.json)、[日志](browser-check.log) |
| 原图与文本实际产物 | 15 件原图通过真实浏览器下载；逐文件字节/hash/尺寸一致；30 次中文/英文 Prompt 剪贴板回读与对应作品记录一致；抽取结果另有实际下载和复制核对；TXT 与错误降级有独立浏览器用例 | 上述两份浏览器报告及下载文件 |
| alpha 与画面 | 15 件实际下载文件逐像素核对透明、半透明统计与登记值一致；高对比白/深底逐件目视无烘焙背景或脚底阴影团。alpha 检查本身不代替画面/艺术批准 | [alpha 报告](browser/download-alpha.json)、[白/深底 1](browser/download-contrast-1.jpg)、[白/深底 2](browser/download-contrast-2.jpg)、[白/深底 3](browser/download-contrast-3.jpg) |
| 响应式 | 首页/画廊/游戏/随机/详情/参考六种界面在 1440/768/390/320 CSS px 无横向溢出，实际键盘和可滚动操作检查通过 | `browser/*-<width>.png`；模拟 Chromium 视口，实体设备未测 |
| 构建与依赖 | 18 个入口/模块/样式文件校验；实际网络 14 个产品 JS，无工作台/fit/composer/Three；递归静态允许清单23资源、源 PNG、45旧资产URL404和同 cache imports 通过；build 不清空源目录 | [生产模块图](production-graph.json)、[构建日志](build.log)、浏览器 `moduleRequests` |
| OpenSpec | `openspec validate --all --strict`：12 项通过、0 失败；长条文提示为 INFO。14 capability 的只读同步预演已记录；主规范未同步、未归档 | [校验日志](openspec-validation.log)、[同步预演](spec-sync-preview.json) |
| 保护文件 | 985 个原未跟踪文件保持原路径原字节，活动 tasks 是唯一授权内容改动；52 个原美术文件字节全部保留，其中23原路径保留、29移到历史位置；旧验收、主规范、归档及Site配置原路径/hash不变 | [保留审计](protected-files-audit.json)、[基线](baseline.json) |

上述浏览器使用已有 Playwright 与本机 Chrome；Browser 插件不可用，没有安装新浏览器。所有页面、下载和交互证据都来自本次本地候选；历史 QA 不代替新检查。

## 内容、目标与独立状态

[内容盘点](content-inventory.json) 记录 20 个原始角色/姿态 PNG 的实际尺寸、alpha、hash、来源和批准映射；另有 29 张场景及 2 张历史 WebP 展板分类。两张 WebP 是单帧且无 alpha，不是角色动画。

| 对象 | engineeringImplementation | assetExists | resourceVerified | artApproval | targetValidation | published |
| --- | --- | --- | --- | --- | --- | --- |
| 六种新界面 | completed | 原美术存在 | 本地浏览器与工程检查通过 | pending：新页面候选 | 目标安装不适用；实体设备未测 | false：未部署 |
| 15 个发布目录成品 | completed | true | 原来源及本次真实下载通过 | 仅匹配 hash 的 v83 具体素材范围继承 | Dot/Pet 安装未做 | false：候选目录可发现，不等于线上发布 |
| 5 张原姿态 PNG | 登记候选 | true | 源文件核验；未作为新变体下载验收 | pending：没有逐文件批准覆盖 | not-run | false：不入作品池 |
| 真实动画/目标包 | 不在本期制作范围 | 未提供 | not-run | 不适用 | not-run | false |

真实已发布变体为 0；详情明确“暂无其他已发布变体”。同风格或同物种不自动连成同身份。待机、思考、执行、等待、受阻、完成、阅读、睡觉、聆听等后续内容未制作，不假装已有。特征卡目前复用有来源的完整作品缩略图并标“作品示意”；独立词条示意可后续制作，无需通用配件 PNG 或组件适配。

首期没有可安装 Pet 包或目标环境实装。官方复核及端/版本/格式/帧边界见 [目标资料复核](official-target-recheck.md)；本机 v1/v2 工具帧合同单独标识，不称 Web/所有端官方布局。普通静态 PNG 下载不代表 Dot/Pet 安装。参考图 A 不依赖外部服务、凭据或费用；真实视觉分析和 Pet 包制作需要另范围确认。

## 清理与规则

精确保留清单见 [runtime-retirement.json](runtime-retirement.json)：74 份旧文件的原字节在 `historical-runtime/`，72 个旧活动路径退出，浏览器与 alpha 验证脚本在原路径按新合同替换。工作台、组合/fit、3D、QA/编辑器与未批准组件不在发布树或模块图。45 个未发布/未引用的静态图另按 [asset-retirement.json](asset-retirement.json) 原字节迁移：5 姿态、2 atelier、1 裸形 Dots、1 旧背景、22 旧场景版本、14 WebP。dist/assets 仅保留15原图、brand和当前7展示场景；待核姿态无 runtime path，sourcePath指向保留文件，任何 fetch 前拒绝。4 份旧规则原文另见 [document-retirement.json](document-retirement.json)。旧代码退出或任务取消不改成验收通过。

复用：原美术/来源、场景、typed tags 查询语义、资源校验/取消、dialog、预载和失败处理。改造：Artwork 目录、事实/Prompt/Asset 绑定、三页与单 overlay、共用抽取与卡片视图。退出：Project/CharacterRecipe/FitProfile/Canvas 组装、装备/导入导出/恢复/兼容桥/3D 与旧范围测试。没有新增旧 reader、迁移脚本、双模式或特殊 #workspace 映射。

当前 AGENTS/DESIGN/设计规则/README 已按授权更新；主规范与历史归档仍保留原字节，实际 sync/archive 另授权。原 Site ID `appgprj_6abf8f3128308191b2f8a2a9c6003704`、`static.directory=dist` 和现有访问范围保持，没有提交、保存 Site、发布、改权限或安装目标资源。

## 任务收据与待用户确认

| 任务 | 本次落地与证据 |
| --- | --- |
| 1.1 | baseline + production-graph + protected-files-audit；精确保留/退出清单 |
| 1.2 | content-inventory、20 个源 PNG 解码、15 个真实下载/alpha、高对比目视 |
| 1.3 | 15 个原图与 v83 ID/hash 批准精确映射；5 姿态保留 pending 不发布 |
| 1.4 | artwork-catalog 模型/资格及目录测试；静态资源与 Prompt 引用绑定 |
| 1.5 | tags/tag-browser，56 词条与 OR/AND/别名/none/unknown 测试 |
| 1.6 | asset-loader 共用路径/MIME/hash/尺寸/解码/Abort/下载测试及原字节回读 |
| 1.7 | 新入口/Prompt/详情只依赖目录和轻量工具；生产模块图 |
| 1.8 | 精确退休清单、包/lock/build 更新；72运行路径及45静态图路径退出；旧存储未变 |
| 2.1 | 首页原型保留/调整/删除表、真实 DOM、候选图；用户艺术批准在 5.3 |
| 2.2 | 三页与专题标签入口；普通未知路由和无效查询测试 |
| 2.3 | 真实网格/搜索/标签/清空/空池/资源失败与主动重试实页检查 |
| 2.4 | 单 dialog 与 overlay；Tab/Esc/Back/Forward/五种参考图退出后的语言/滚动/焦点恢复/快速关闭重开 |
| 2.5 | 详情直接操作；无实际已发布变体如实展示；原子机制与失败由隔离 fixture 验证 |
| 2.6 | 实页筛选、scrollY=400、焦点与冻结随机结果返回恢复 |
| 2.7 | 桌面及 320/390/768 CSS px 三页和详情实页检查 |
| 3.1 | 纯 draw 引擎，有效池/硬锁/快照性质测试；同一实例两容器复用 |
| 3.2 | 空池动画前处理、唯一候选和 none/unknown 明确行为 |
| 3.3 | 规范化条件/成员指纹抽取袋、耗尽及跨条件避免相邻重复测试 |
| 3.4 | 四独立轨道与邻卡、0→1→2→3 停止、全停后成品/操作；真实事实比对 |
| 3.5 | 当前条件改变不改结果；成图/Prompt/下载实际字节与冻结 ID/hash 一致 |
| 3.6 | 预载故障/资源归属隔离、主动重试、Abort/回收/旧回调失效/关闭重开 |
| 3.7 | 跳过/减少动态先完成预载、直达同一冻结结果；键盘与焦点检查 |
| 3.8 | 首页/画廊弹窗与 game 使用同一引擎/视图；game 协调留在 studio.js，未重复建算法 |
| 4.1 | 30 中英作品 Prompt、引用验证、30 次实页剪贴板；参考模板与未来意图区分 |
| 4.2 | 静态三格式/实际 MIME/解码/20 MiB/40 MP、替换/移除/无外发/URL 回收 |
| 4.3 | A 方案的手写描述/保留项/身份模板；无识别或视觉 API |
| 4.4 | 复制/打开阻止与关闭后回调测试；全文/TXT/手动链接可靠降级 |
| 4.5 | 官方重新查询、TargetProfile 与中文支持标识；无包/安装假能力 |
| 4.6 | 15 成品、5 候选姿态、单帧展板/场景及动画/目标缺口如实分类 |
| 5.1 | 目录/查询/抽取性质与负例测试通过；新合格 fixture 不需适配 |
| 5.2 | 18 请求场景由单元、完整实页、19 定向检查组合覆盖；真实变体/实体设备边界明确 |
| 5.3 | **pending**：内部目视和原图对比已准备；需要用户确认具体 cache87 新页面与玩法视觉 |
| 5.4 | 15 实际下载、慢 A 下载→B 的实际 A 字节、逐像素 alpha、高对比目视、30 实际剪贴板和 TXT/错误用例 |
| 5.5 | 生产允许清单18代码/样式和23资源、实际14 JS 网络、45旧URL404、依赖与退休/保护审计 |
| 5.6 | 新验证脚本/build 通过；旧测试原文保留，资源/错误真实性检查继续适用 |
| 5.7 | 更新当前协作规则，14 capability 只读同步预演、strict通过；未实际 sync/archive |
| 5.8 | **pending**：候选与分列账本已冻结；依赖 5.3 和用户完整预览确认；发布仍另授权 |

候选目前为 35/37 项任务完成。只剩 5.3、5.8 的用户视觉/完整预览确认门槛；不会用构建、内部目视或任务勾选替代。确认对象是此 manifest 绑定的候选与呈现范围，不包含待批准姿态、真实动画、Pet 安装、实体设备或线上部署。
