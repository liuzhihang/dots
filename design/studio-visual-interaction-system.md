# Dots 深色角色库与 CharacterStudio v99

本轮 change `openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/` 的12份 delta 已同步至 `openspec/specs/`；后续实现以主规范为准。沿用 OpenSpec CLI 1.14.1 / `spec-driven`，未经用户明确授权不初始化、升级 CLI，也不自动 sync/archive。本轮用户已于2026-10-11明确授权 Sites 发布、代码提交与 change 归档；该授权仅适用于本轮。

网站品牌为 Dots，canonical / og:url 使用 https://dots.liuzhihang.chatgpt.site 。角色库就是首页，只有 Characters 导航。D01-main-third-dark-gallery-studio.png 是唯一主稿，D02-support-first-mobile-guide.png 仅补手机细节；它们是多页拼版，按面板分别实现。首页 banner 保留 D01 左侧多行大标题与右侧角色群像：英文两行“Make It”/“Your Dot.”保持不变，中文两行是“创造”/“你的Dot.”，浏览器标题精确为“创造你的Dot.”；短介绍为英文“Pick a character. Make it yours in ChatGPT.”、中文“挑选角色，在 ChatGPT 中创作。”，Hero 不显示通用 Copy Dots Prompt 按钮。D01暗色展示台和微光只进入独立首页 UI Hero插画，不登记为Artwork或进入卡片、Studio、导出。旧露台、庭院、城市、房间、台阶、角色卡/Studio发光底座、独立宣传首页、游戏、随机与独立工作台退出活动运行，不建立兼容层。

深色数字画布与局部烟黑玻璃，短介绍文案区可控制在240px内，这不是整体banner/hero的高度上限；1440px桌面D01 banner约440–500px。默认英文和简体中文；文本多词AND、单系列AND、curated/name真实排序。1440px六列、768px三列、390/320px两列，contain完整展示帽、耳、脚、尾。正文/次级文案对比度至少4.5:1，大字3:1，操作至少44px，键盘、reduce、无blur与安全区均须实际验证。

图库涵盖 Dots、Grok Bot、Muse、人物与动物等多系列完整外观。本轮登记的24件 Artwork 均已获用户美术确认并取得公开资格；两套精确版本 Template 均通过工程与美术确认，覆盖28种合法编辑组合。Hero 群像是已获确认的 UI 装饰素材，不计入 Artwork；编辑组合也不计为 Artwork。未来新增素材、组合与页面仍需对应版本的用户美术确认及准入验证，确认前不公开。

Character身份与seriesId分离；Artwork成品、Asset用途、Template能力、内存Draft、Prompt意图、实际动画/目标包独立登记。八类typed facts保留none/notApplicable/unknown区别。Dots短密绒；Grok软几何成对胶囊眼，不是机器人屏幕脸；Dots与Grok两类均无手脚，不从旧营销素材借用四肢；Muse包覆体、内嵌脸、短圆肢体；人物材质分区、动物物种特征保持。角色显示名去掉重复系列后缀，Meta Muse 显示为 Muse，描边系列标签与名字同行；身份ID及seriesId保持。新增内容靠资源与清单，不添加角色专用页面分支。

详情与编辑共用同一CharacterStudio壳、Artwork身份及预览位置，不提供View/Edit标签或mode URL。精确获批Template在打开作品时自动载入真实模板和可视选项，选择后直接更新同一预览；取消/重置控件不展示。关闭/Esc/历史返回与前进/导航/切Artwork均有同一丢弃确认，取消保留URL/草稿/焦点。草稿只存内存，不读、不删旧storage。

仅真实适配模板可本地改色/眼型/眼镜/配件并导出透明PNG。首批Dots固定球形12合法配置，Grok固定球形16配置；Dots耳机+眼镜4种冲突明确拒绝，可确认合法替换，不静默丢选项。能力按Appearance（外观）、Face（五官）、Clothing（服装）、Accessories（配饰）、Objects（物品）分组，仅显示真实非空tab。当前模板映射Appearance/Color、Face/Eyes、Accessories/{Glasses,Accessory}；field key 与合法recipe不变。颜色色块、五官/配件真实图层缩略图、不用文字下拉框。眼型缩略图使用统一纯色底、无灰色方块；几何SVG/CSS图标居中且不冒充素材。选中/焦点/失败可辨，至少44px且键盘可操作。模板素材与配方保持pending时仅外部审阅harness可测试，公开Edit需精确版本批准。预览与导出共用同一配方、成功revision和冻结像素；最新渲染未成功禁止导出。不继承动画或Pet能力。

打开作品先显示封面、元数据、Copy Prompt 与 ChatGPT 主操作，以及次级 Export；512/1024展示预览、编辑器、配件和相关内容按需加载，不以原图下载/哈希作为查看前置。预览loader按Asset ID/version/hash/purpose共享请求，最多4并发、64MiB解码缓存、16闲置条目，消费者lease与取消独立，迟到回调按session/revision丢弃并释放Bitmap/BlobURL。原图下载校验后原字节保存；Draft允许Canvas本地生成透明PNG，两者为不同操作。

原Prompt、成功配置Prompt与ChatGPT-only额外意图明确区分；自由文本不伪称已改像素。ChatGPT由用户自行附图、检查与发送。没有上传、账号/收藏、数据库、后台CMS/MCP、站内模型调用/聊天、公共投稿或旧schema/路由/storage迁移。动画/变体/许可/尺寸/下载目标只按真实登记显示。

## 路由、会话与图层

- `#/?q=&series=&sort=`：唯一首页/图库；默认curated，name按当前语言名称排序。
- `#/artwork/<id>?v=<version>`：同一CharacterStudio直接静态查看或载入符合资格的Template编辑；不使用mode参数。未知ID/version与旧home/gallery/random路径均not-found，无Template仍显示完整静态详情。
- `#/guide`：按普通未知路由显示not-found。

图库打开作品push一次历史；Template自动加载、分类切换与选项变化不新增历史。来源记录query/series/sort/scrollY/trigger；背景DOM保持，关闭恢复。直达详情安全返回规范图库。variant候选先读轻量预览和Prompt，成功后原子提交同版URL/内容/操作，失败保留上一成功版本。

参考token：bg #0B0D12、surface #141821、elevated #1C2230、text #F4F6FB、muted #A9B1C3、accent #7C3AED、border white 10%。导航64px，主区max1280；桌面Studio max1120 / max-height calc(100dvh - 48px)，54:46双列。手机同面板全屏，单主滚动，不加第二弹窗。

颜色mask限定body-alpha，材质/光影由body像素保留，眼与配件不染色。单前层可用的前提是真实遮挡正确并明确记录后层/额外mask不适用原因；不能用空层冒充完整。默认重建、所有单项与关键交叉组合使用真实renderer生成审阅图。

`dist/` 同时是可编辑源码和Sites发布树，不能整体清空。`design/static-publish-manifest.json` 必须逐路径精确维护活动闭包；pending资源列于previewOnlyFiles（仍物理位于dist），构建 deploymentReady:false不等于部署隔离。旧活动源码按原字节保存于historical-runtime/v98-before-dark-gallery；来源、批准素材及历史验收保持。15张原图的字节/alpha不变，不能用新衍生图覆盖。

当前源码cache统一v99；新证据只写design/acceptance/current-20261010-v99/，不覆盖v98/v97/v96。保护 .openai/hosting.json、openspec/config.yaml、package-lock.json、vite.config.mjs与既有依赖版本。工程、实页视觉、用户美术确认、实体设备、目标包与部署分别报告；未测不得标通过。实际检查1440×900、390×844、320×700、768×1024双语、键盘/返回、复制/实际下载、全部28合法配方与两套完整编辑导出旅程。
