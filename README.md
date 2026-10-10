# Dots

深色角色库与统一 CharacterStudio。挑选角色，复制 Prompt、在 ChatGPT 中使用或 Export；无 Template 作品的 Export 返回原图字节，有精确批准 Template 的作品打开后直接载入编辑器，使用同一成功像素预览编辑并导出透明 PNG。没有 Template 的作品仍显示完整静态详情。界面继承网站语言；默认英文，支持简体中文。网站不提供独立 Guide 页面。

本轮 change `openspec/changes/archive/2026-10-11-simplify-reveal-cards-and-staging/` 的12份 delta 已同步至 `openspec/specs/`；后续实现以主规范为准。沿用 OpenSpec CLI 1.14.1 / `spec-driven`，未经用户明确授权不初始化、升级 CLI，也不自动 sync/archive。本轮用户已于2026-10-11明确授权 Sites 发布、代码提交与 change 归档；该授权仅适用于本轮。

## 本机运行与验证

沿用现有Node/Vite 8.3.2，无新增框架或后端：

```sh
npm run dev -- --host 127.0.0.1 --port 5180 --strictPort
npm run build
npm test
npm run test:browser
npm run test:downloads
npm run test:editing
npm run test:performance
openspec validate --specs
```

## 本地审阅 Harness

`npm run dev:review` 在 127.0.0.1:5182 提供本地 CharacterStudio 审阅入口：`/__dots_review__/#/artwork/candidate-dots-20261005?v=v2` 或同地址的 `candidate-grok-20261005`。此入口由 scripts/serve-review.mjs 临时注入 reviewHarness，文件不进入 dist；它只影响本地审阅，不改变 Artwork、Template 的批准状态或公开资格。Pending 测试 fixture 仍用于验证未批准内容不会进入公开图库；正式入口按 Artwork 与 Template 的精确版本资格启用编辑能力。

打开带合格 Template 的作品后，编辑器按能力数据只显示非空 Appearance（外观）、Face（五官）、Clothing（服装）、Accessories（配饰）、Objects（物品）分类。当前两模板只有 Appearance/Color、Face/Eyes 与 Accessories 下的 Glasses/Accessory；原 option field key 和 12/16 recipe 不变。点击真实色块或素材缩略图就为同一预览启动渲染，键盘支持方向键、Home、End 与焦点可见状态。编辑标题为“微调作品”，说明为“预览与 Prompt 随选择同步更新。”；tab 切换不重置选择或 session。眼型缩略图使用真实图层、统一纯色底且无灰色方块；几何 SVG/CSS 图标居中且不替代素材。透明 PNG 保持 alpha。整个面板使用烟色玻璃；轻薄 header 无独立背景/分隔线，与可滚动 body 分离，分类 tabs 不 sticky；手机自然滚动，首次打开可见完整角色，但不要求预览在整个编辑期间固定。Copy Prompt 与在 ChatGPT 中使用为主操作，Export 为次级操作；静态 Export 返回登记原图的原始字节，编辑 Export 使用最新成功的透明 PNG，不提供重复原图按钮或 Reset/Cancel 控件。一个额外要求文本框替代逐项 keep/remove/replace 和折叠二创区；统一 Prompt 使用原始作品 Prompt 或最新成功配置 Prompt，加上用户额外要求。额外要求不改本地像素；ChatGPT 不自动附图或发送。编辑失败或渲染未完成时禁止导出新 PNG，页面关闭、返回、导航和切换 Artwork 的 dirty guard 继续生效。相关角色以紧凑固定宽度左对齐，常显于主预览下方，原始作品元数据只读并收在 `.studio-original` 中。所有操作及关闭/返回控件至少44px并保持可见命中区；两项主操作与次级 Export 层级清楚；内容滚动不能遮挡选项、按钮或完整角色。Dots 的耳机与 round 眼镜互斥，Shape 固定。

## 使用与维护

角色库是唯一页面与导航入口。首页 banner 保留 D01 左文右群像构图，使用左侧大字号两行渐变标题“Make It”/“Your Dot.”（中文 Hero 两行为“创造”/“你的Dot.”，浏览器标题精确为“创造你的Dot.”），右侧约占60%的大角色群像；1440px 桌面高度约440–500px。短介绍精确为英文“Pick a character. Make it yours in ChatGPT.”、中文“挑选角色，在 ChatGPT 中创作。”，Hero 不显示通用 Copy Dots Prompt 按钮。群像可呈现机器人、戴耳机并系领带的兔子、人物与 Meta Muse，机器人是独立身份，不改变 Grok Bot 的软几何胶囊眼身份，也不将 Grok 画成屏幕脸；Dots 与 Grok 仍无手脚。短介绍文案区域不超过240px，但不限制整体 banner 高度。专用首页 Hero 插画可包含 D01 的暗色展示台与微光，但只作为 UI 装饰素材，不登记为 Artwork 或为图中角色授予 Artwork pending/approved 状态，也不进入角色卡、Studio 预览或 PNG 导出；不复用概念拼版中的 UI。搜索文字与单系列共同筛选，可按策展顺序或名称排序。打开作品即显示元数据及分层操作，高清展示图异步加载。获批Template作品自动加载真实模板编辑器；没有Template的作品仍可查看完整静态详情、复制原Prompt与通过 Export 取回原字节。修改超出本地能力时将用户额外要求并入统一 Prompt，并明确标注该要求不改变本地像素。站内不会自动附图或发送。

新增角色请先读 [角色新增规范](design/character-authoring/README.md)、[组件扩展合同](design/character-authoring/components.md)，填写 character-brief.yaml，再依来源→制作→alpha/身份检查→登记→工程验证→用户美术确认的流程推进。每系列可以多个Character与多个独立Artwork；既有15件只是保护子集，不能硬编码为目录上限。展示名去掉重复系列后缀，Meta Muse 显示为 Muse，描边系列标签与名字同行；身份ID和seriesId保持独立。新增Artwork靠静态数据，无需改角色专用UI。

本轮共有24件已批准公开的 Artwork；Dots 与 Grok Bot 的全部外观均无手脚。两套精确版本 Template 均通过工程与美术确认，覆盖28种合法编辑组合，组合不增加作品计数。Meta Muse 的角色显示名为 Muse；各角色显示名不重复系列后缀，系列以描边标签与名字同行。未来模板公开资格仍须对应素材/配方版本通过工程和美术确认。[本轮验收](design/acceptance/current-20261010-v99/README.md)记录实际结果，[艺术审阅清单](design/acceptance/current-20261010-v99/art-approval-review.md)列出精确版本及已知身份差异，不因本README描述目标而宣称已通过。

## 内容与运行结构

studio.js/router管理唯一图库与来源；studio-detail/overlay管理一份CharacterStudio；studio-content/artwork-catalog/tags/tag-browser管理静态目录与查询；studio-edit-templates/draft/renderer/editor实现模板闭环；preview-loader分离展示图和asset-loader的真实原图下载；studio-motion仅处理真实登记动画。

`dist/` 同时是可编辑源码和Sites发布树，不能整体清空。`design/static-publish-manifest.json` 必须逐路径精确维护活动闭包；pending资源列于previewOnlyFiles（仍物理位于dist），构建 deploymentReady:false不等于部署隔离。旧活动源码按原字节保存于historical-runtime/v98-before-dark-gallery；来源、批准素材及历史验收保持。15张原图的字节/alpha不变，不能用新衍生图覆盖。

当前源码cache统一v99；新证据只写design/acceptance/current-20261010-v99/，不覆盖v98/v97/v96。保护 .openai/hosting.json、openspec/config.yaml、package-lock.json、vite.config.mjs与既有依赖版本。工程、实页视觉、用户美术确认、实体设备、目标包与部署分别报告；未测不得标通过。实际检查1440×900、390×844、320×700、768×1024双语、键盘/返回、复制/实际下载、全部28合法配方与两套完整编辑导出旅程。
