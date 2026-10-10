# 原型裁决、固定文案与响应式

已实际查看 source-package/references 下 D01、D02、C01、C02、C03 五张原始图片，附件17条文件校验和均匹配。D01/D02为1536×1024概念拼版，不是可直接等比放大的单页1440稿。两个最新编号与旧 P01/P02 露台无关。

| 原型区域 | 采用 | 本轮裁决/删除 |
|---|---|---|
| D01左上01 首页角色画廊 | 保留左文右群像、右侧约60%的大角色群像；标题按本轮最新用户追加改为两行“Make It / Your Dot.”（中文：“创造 / 你的 Dot。”）；1440桌面hero约440–500px高，其后是搜索/系列与完整角色网格 | 群像表现机器人、戴紫色耳机并系黄色领带的兔子、人物与 Meta Muse；机器人是独立身份，不对应Grok。保持Grok软几何与胶囊眼，Dots/Grok无手脚。品牌Dots；角色库唯一入口且无Guide导航。专用待审Hero插画保留D01暗色展示台与微光，只作UI装饰，不登记Artwork、不为图中角色创建或授予Artwork pending/approved状态；不进入卡片、Studio或导出。D03只补充Hero标语与群像，不覆盖D01其他页面或D02手机补充 |
| D01中上02 角色详情 | 同一CharacterStudio中显示预览、身份信息与真实操作；Prompt后置 | 详情与编辑共用同壳/同预览；无Template时保持静态，不造View模式或虚构能力；删心形/社交菜单、假作者/许可/1024统计、无资源变体轨道 |
| D01右上03 直接编辑 | 有精确获批Template时自动加载真实选项，同一成功预览直接编辑并导出PNG | 不设置View/Edit标签或mode；无适配不显示空Tab；棋盘格仅UI，不预设一切帽子都可摘/都可穿 |
| D01下方04 手机库 | 两列完整角色、短名称与系列 | 删底部重复导航、我/更多；用同一顶部导航和语言，不照搬长标题撑满首屏 |
| D01下方05 手机Studio | 同一面板承载静态详情或获批Template的直接编辑 | 单全屏面板/自然滚动，选项与三项主操作可达；静态Export返回原字节，编辑Export返回最新成功PNG |
| D01底部群像/说明 | 参考角色群像的比例与疏密，由专用pending Hero插画呈现；不是Artwork或独立角色资产 | 保留暗色展示台与微光仅限首页Hero；删无限创意、批量AI制作与泛化可编辑宣传，不把舞台装饰扩展到卡片/Studio/导出 |
| D02手机02/详情06 | 清楚的两列/纵向内容层级 | 仅补手机，不能成为第二套首页；不保留Me/Profile、收藏 |
| D02指南03 | 简短编号说明和少量实图 | 只说明真实选择/复制/本地编辑或去ChatGPT附图，不发明安装路径 |
| D02桌面/编辑其他区 | 不作为结构主稿 | 不混入第二首页、背景Tab、Popular、100+、6 Collections |
| C01 Muse | 奶油包覆轮廓、内嵌脸、短圆肢体 | D01/D02长毛耳朵白团不采用 |
| C02 Grok | 软几何与成对胶囊眼 | 原型屏幕脸机器人绝不标Grok；既有机器人仅独立pending候选 |
| C03 Dots及批准原图 | 短密绒、清晰轮廓、保留各自身份 | 原型毛绒过长、蓝Dots新增手脚不采用；不得为复刻蓝帽外观重绘15件原图 |

优先级：本轮最新用户裁决 > 原身份/来源/批准边界 > D01相应区域 > D02指定补充 > 历史对话/旧稿。选择主稿不代表批准每个像素、角色、能力或页面成品。

本轮最新首页补充参考为[用户原型 D03](source-package/references/D03-hero-ensemble-20261010.png)（1536×1024，SHA-256 `4e67012cfa68bbe6833606d6dd7149b6f2f6871c29bea409fdff862cf2c45057`）。D03只更新Hero标语“Make It / Your Dot.”（“创造 / 你的 Dot。”）和群像角色要求；D01仍是唯一页面主稿，D02仍只补手机，不用D03覆盖其他页面或重选全站方向。最终Hero群像已接入本地[装饰插画清单](../../../../../design/acceptance/current-20261010-v99/cr-simplification-20261010/hero/ensemble/manifest.json)，包含独立机器人、戴紫色耳机并系黄色领带的兔子、人物与Meta Muse；该插画仍待用户美术确认，只作UI装饰，不登记为Artwork或给图中角色授予Artwork状态。

## 页面尺寸与布局锁定起点

| 视口 | 角色库 | CharacterStudio |
|---|---|---|
| 1440×900 | 导航64px；主内容max1280、左右80；hero约440–500px高，左标题、右约60%角色群像；短介绍独立约束240px，不能限制hero总高；搜索/系列约96；6列、gap24；首屏按可用高度呈现网格 | 单壳max1120，外边距≥24，高≤calc(100dvh - 48px)；预览/控制约54:46，顶部固定关闭，内容单主要滚动；同一预览DOM位置 |
| 768×1024 | 左右24；banner 继续呈现标题与群像并按宽度重排，不以短介绍约束压缩群像；3列、gap20；系列可横向滚动且键盘可达，不能裁整个页面 | 同一全屏壳，内容纵向单滚动，安全区内可达返回/主操作 |
| 390×844 | 左右16；标题与角色群像按窄屏重排并保持可辨，短介绍自适应；不设整体banner固定高度；2列gap16，图片contain，不裁帽/耳/脚/尾；搜索满行，分类横向滚动 | 顶部固定header、自然滚动body；初次可见完整角色，选项/操作按实际空间可达，不强制固定预览 |
| 320×700 | 左右12，2列gap12，标题可换行、群像完整可辨，按钮按内容重排，不缩到难点；整体banner随内容增高，不按240px裁切 | 同一全屏，单滚动，安全区/底栏不遮挡；不出现独立小弹窗套全屏 |

上述尺寸是实施起点，验收以实页标题层级、角色群像可辨、网格可用和文本可读为准，不为守短介绍尺寸裁切Hero。此前“简介≤240px/紧凑banner”只约束短介绍区域，不是整个banner高度要求；最新确认优先采用左侧大标题、右侧大角色群像以及D01专用暗色展示台/微光。宽屏≤5列时必须记录实际调整理由；不能为了凑列数缩小到不可辨。

## 视觉tokens

bg #0B0D12；surface #141821；elevated #1C2230；text #F4F6FB；muted #A9B1C3；accent #7C3AED。边框白10%上下，hover轻表面，focus使用明确高对比边线而非仅阴影。正文16px起、次级14px起；桌面标题44–48px，手机30–34px。控件命中≥44px；长Prompt可换行、不横向挤压。

玻璃仅导航/搜索/Studio外壳；信息文本与控件实色，避免全父容器opacity；背景纯色时不强制blur。角色不统一染紫，图库默认无厚框/外发光。无blur/减少透明时用实色surface；reduce关闭非必要过渡且保留完整操作。对比度在合成背景实测（正文目标4.5:1、大字3:1），本规划不宣称已通过。

## 固定双语文案

| 位置 | EN | zh-CN |
|---|---|---|
| 品牌 | Dots | Dots |
| 导航 | Characters / 中文 | 角色库 / EN |
| 标题（本轮最新用户更新） | Make It / Your Dot. | 创造 / 你的 Dot。 |
| 说明 | Pick a character. Copy a prompt. Make it yours. | 挑选角色，复制 Prompt，创作你的版本。 |
| 介绍主操作 | Copy Dots Prompt | 复制 Dots 提示词 |
| 介绍次操作 | Browse characters ↓ | 浏览角色 ↓ |
| 搜索 | Search characters, styles, or accessories | 搜索角色、风格或配饰 |
| 系列 | All / Dots / Grok Bot / Meta Muse / People / Animals | 全部 / Dots / Grok Bot / Meta Muse / 人物 / 动物 |
| 排序 | Curated / Name | 精选 / 名称 |
| 输出状态 | Original / Current preview | 原作品 / 当前预览 |
| 主操作 | Copy Prompt / Use in ChatGPT / Export PNG | 复制 Prompt / 在 ChatGPT 中使用 / 导出 PNG |
| 未适配 | Local editing is not available for this character. | 这个角色尚未适配本地编辑。 |
| 外部意图 | Changes for ChatGPT — not rendered here | 交给 ChatGPT 的修改要求——本站尚未生成 |
| 脏草稿退出 | Keep editing / Discard changes | 继续编辑 / 放弃修改 |
| Pending | Preview · Pending review | 预览 · 待确认 |

“Copy Dots Prompt”使用独立的已审阅Dots通用身份Prompt，文案含短密绒/无新增肢体与可选参考图条件，不绑定任一随机作品，不从 pending 图推导。在 apply 的 `studio-content.js`/Prompt清单登记双语文字与来源，复制后说明在ChatGPT自行附图，不自动发送。

页面所有正文、aria、错误与Prompt按当前语言一致；保留品牌/系列专名不算混语。用户自由输入不自动翻译。产品不提供独立Guide页面或导航；流程提示只放在实际角色操作中，不写安装或使用目标包步骤。真实动画仅按需；UI hover不能叫眨眼/挥手。
