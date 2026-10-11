# 21 张参考的逐主体归并与去重记录

状态：候选映射，不是 Artwork、Template 或美术批准。原始附件按字节保存在同目录 `originals/`，来源、原始路径、SHA-256、用途和排除项见 [`manifest.json`](manifest.json)。本轮实测 21 个文件、19 个 SHA-256 组；R08/R09 与 R10/R13 是不同字节的视觉重复，R17/R19/R20 是相同字节，按构图共 17 组。重复来源仍逐条保留。

`reuse` 指向现有准确身份/作品供身份或属性对照，不把参考像素当作产品素材；`variant-option` 指向同身份下待制作的真实选项/外观资源；`new-artwork` 是拟制作的独立完整外观候选，ID 均为工作名；`excluded` 表示该片段不单独产生作品或特征。所有新成品、图层和适配仍待制作、校验及独立批准。低清图只记可见证据，不把推断写成已核实事实。

## Dots：短绒、成对简洁眼、无手脚

| 候选主体与可见线索 | 来源区域 | 裁决及明确去向 | 保留/排除边界 |
|---|---|---|---|
| 蓝色短绒云团、黑色贝雷帽、成对黑眼 | R02 蓝色主体；R05/R10/R11/R12/R15/R16/R17/R18/R21 多处单体 | `new-artwork`：`candidate-dots-blue-beret-cloud`；同一云团跨图归并 | 只取连续低矮云团、短绒、帽体与眼睛；排除地台、场景和所有截图像素。R02/R21中的附肢不采用。|
| 黄色三角体、黑色圆眼镜 | R10/R11/R16/R17/R18/R21 的清楚卡片/单体 | `new-artwork`：`candidate-dots-yellow-glasses-triangle` | 与 `dots-butter-beret` 的黄色贝雷帽外观及 `dots-rose-glasses` 的圆团眼镜外观分别比较；三角轮廓与圆眼镜组合是独立可辨线索，不因颜色/眼镜重复合并。|
| 叶芽梨形、顶部双叶 | R07 绿色梨形主体；R10/R11/R16/R17/R18 同类绿色植芽角色 | `new-artwork`：`candidate-dots-leaf-pear` | 只把叶片作为附着轮廓/装饰核验；不照搬 R07 手脚、口部或背景。若叶片与身体边界不清，事实保持 unknown。|
| 橙色细长软团、紫色前袋/围裙、无叶片 | R07 橙色中间角色 | `variant-option`：`candidate-dots-leaf-pear`（canonical `dots-leaf-pear`）的配色灵感；归入保留原芽叶的梨形配色分支 | 只保留橙色作为同身份配色线索，不据此声称已有无叶外观或服装选项；紫色围裙/口袋仅是参考中可见内容，按当前无 Dots 服装选项决策排除。R07 的附肢不进入无肢体 Dots。|
| 紫色星形/五角软体 | R07 紫色主体；R10/R16/R17/R18 的紫色星/云轮廓 | `new-artwork`：`candidate-dots-violet-star` | R07 的手臂、脚和围巾排除；保留连续星形主体，无肢体。与多瓣云另行对比。|
| 紫色多瓣花云/花朵云团 | R10/R11/R16/R17 的紫色短绒卡片/单体 | `new-artwork`：`candidate-dots-flower-cloud` | 与五角星轮廓保持两个候选：花云为圆钝多瓣外沿，星形为角状辐射外沿；如果最终同轮廓则在制作审查时合并，不因颜色不同保留副本。不得保留图中脚状突起。|
| 绿色短绒圆角块 | R16 绿色方块；R10/R11/R15/R17/R18 的绿色短绒形象用于材质参照 | `new-artwork`：`candidate-dots-lime-rounded-square` | 目标是短绒 Dots，与 `grok-teal-square` 的光滑软几何外观明确区分；只使用连续块状轮廓，不增加手脚。|
| 蓝色/紫色/粉色圆团、耳机或简单表情 | R02/R05/R06/R08/R09/R10/R11/R12/R15/R17–R21 | `reuse`：`candidate-dots-20261005`、`dots-rose-glasses`、`dots-pink-heart-shades`；各自只作为对应身份/选项参照 | 颜色或重复出现不创建新身份。R06/R08/R09中的眨眼可作为静态五官候选，耳机色差/款式可作为配饰候选；截图示范本身不证明已有可编辑图层。排除所有肢体和场景。|
| 青柠蛙形/大眼与粉色爱心墨镜 | R02、R05、R10/R11、R15、R17/R18/R21 | `reuse`：`dots-lime-frog-bow` 与 `dots-pink-heart-shades` | 参考只对照现有外形/配饰；不把变色、换角度或合照重复计数。蛙眼突出部分是主体轮廓，不当作手脚。|
| 浅紫圆团黄渔夫帽、黄团黑贝雷帽 | R10/R11/R12/R15/R17/R18 等卡片；同现有作品图 | `reuse`：`dots-lilac-bucket`、`dots-butter-beret` | 帽子位置与前后遮挡供适配核查；不新造角色或把不同帽型混为同一个配件资源。|
| 厨师白团/白色帽饰、黑色酷团、赛博眼镜、橙色围裙/口袋、耳机配色 | R05/R10/R11/R15/R16/R17/R18 的小卡与编辑参考区；可辨度不一 | `variant-option`：映射 `dots-core`/`candidate-dots-20261005` 的五官或配饰线索；服装选项按当前 Dots 合同排除 | 不按“厨师/酷”等描述新增身份；墨镜、耳机等只有在真实独立资源和锚点齐备后才可称为可编辑配饰。橙色围裙/口袋不作为当前选项；不从界面按钮/图标推断能力。低清白团若不能确认其帽体或主体关系，不写入已核实 facts。|
| R03 大型紫圆与几何人物图中的颜色差异 | R03 左侧大圆 | `variant-option`：只作为已存在圆形软几何/尺寸变化的概念参照，优先 `candidate-grok-20261005` | 不按“Cora/Chief”等界面文字创建人物或 Dots 身份；眼睛/材质与系列不足以作为完整成品证据。|

## Grok Bot：无手脚、软几何主体、成对胶囊眼

R03、R04、R14 中每个独立几何主体均逐项判断。几何外形可以作为原创作品轮廓参考；具有圆眼、单眼或 V 形眼的参考不因此改变 Grok 的成对胶囊眼约束。重复的基础云、圆角方、球、水滴映射现有作品；只有可辨轮廓确实不同才列新候选。

| 几何主体与眼型证据 | 来源区域 | 裁决及明确去向 | 说明/排除 |
|---|---|---|---|
| 白色宽软拱/云拱，深色成对胶囊眼 | R01 主体；R10/R11/R15/R16/R17/R18/R21 的白色 Grok 单体 | `new-artwork`：`candidate-grok-white-arch` | 不与有屏幕脸和四肢的 `robot-ivory-capsule-face-v98-candidate` 合并；本体无肢体、不加面罩。|
| R01 紫色与青绿色软块 | R01 紫色块约为方形且下部被白拱/橙形遮住；青绿色块也接近方形 | `reuse`：`grok-teal-square` | 可见区域不足以证明独立纵向圆角矩形。R03 Pete 是近方形参照；R03 Ashley 另映射圆柱，不作为矩形证据。不得因紫/青颜色建立第二身份。|
| 绿色圆角方形/块，成对胶囊眼 | R01 绿色主体；R03 Pete；R04 绿/青圆角方；R14 橙圆角方 | `reuse`：`grok-teal-square` | 颜色差异合并为当前方形身份参考；R03/R04/R14 的边缘、视角差异不计独立角色。|
| 橙色横向短圆角胶囊，成对竖胶囊眼 | R01 橙色宽短主体；R03 Pixel；R04 横向椭圆主体 | `new-artwork`：`candidate-grok-horizontal-capsule` | 仅当宽短主体边界清楚且区别于圆角方时制作；R03 的 V/折角表情不照搬，维持成对胶囊眼。|
| 红色竖向圆柱，顶部可见椭圆弧面、侧面近直、底部圆收；倾斜的棕色柱状体 | R04 右上红色主体为清楚的竖圆柱；R03 Ashley 为倾斜投影/角度线索 | `new-artwork`：`candidate-grok-cylinder` | 两图归并为同一圆柱几何候选，不按颜色或视角再拆 Artwork。R03 Ashley 的圆形眼不沿用；最终成品需按 Grok 身份使用成对胶囊眼。与纵向圆角矩形区别在圆柱顶面/轴向体积，不能以圆眼为由排除形体。|
| 橙色立式蛋形/卵形，顶端较宽、向下圆收 | R04 中下部橙色主体 | `new-artwork`：`candidate-grok-egg`；当前制作输出为 `generated/grok-egg-candidate-v2.png`（pending） | 独立映射为圆滑卵形体，与尖端明显的 `grok-coral-drop` 水滴分开；色彩与原图眼型不复用，重绘成对胶囊眼。|
| 青/绿色云形主体，成对胶囊眼 | R01/R03/R04/R14 多处云形角色 | `reuse`：`grok-green-cloud` | 只映射同一软云轮廓；青绿/蓝色是配色参考，不重复建外观。|
| 粉/红色软三角，成对胶囊眼 | R03 Eileen；R04 红三角；R14 粉橙三角 | `new-artwork`：`candidate-grok-soft-triangle` | 三张参考的软圆角三角归并到一个轮廓候选；颜色合并。必须重新绘成光滑软几何并使用成对胶囊眼。|
| 橙/粉色软菱形/圆钝斜方 | R03 Larry；R04 粉色菱形 | `new-artwork`：`candidate-grok-soft-diamond` | 同一菱形外轮廓归并；不保留颜色或轻微旋转作为额外作品。R03 角色的眼睛和 UI 文本不复用。|
| 灰色/暗色半圆穹顶，V 形眼 | R03 Igor；R04 左中半圆 | `new-artwork`：`candidate-grok-half-dome` | 只保留半圆穹顶几何并改用符合 Grok 身份的成对胶囊眼；V 眼不是胶囊眼资产。|
| R04 紫色与棕色圆团；R14 紫色尖底软体 | R04 中央紫色大圆与右下棕圆；R14 紫色主体 | `reuse`：`candidate-grok-20261005`（R04 orb）与 `grok-coral-drop`（R14 水滴） | 参考外沿分别能由现有 orb 与水滴身份解释；没有清楚内凹豆形主体，因此取消 `candidate-grok-bean`，不因颜色或拍摄变形新建。R04 橙色纵向蛋形映射到 `candidate-grok-egg`，制作输出 `generated/grok-egg-candidate-v2.png`（pending）。|
| 六边软几何；立方体候选 | R03 Rae 蓝色主体、同图 Nova 红色主体；R04 绿色立方、R14 绿色/橙色小型多面体 | `variant-option`：Rae 蓝色正面/六边外沿外观映射到 `candidate-grok-rounded-cube`（规范 ID `grok-rounded-cube`），Nova/R04/R14 支持其立方候选 | 仅凭可见外沿相似合并去重；不声称 Rae 与 Nova 是同一个 3D 模型。Rae 的六边形没有独立盾形证据，不单列 Artwork；它保留为圆角立方候选的正面/蓝色外观参考。候选当前输出 `generated/grok-rounded-cube-candidate-v2.png`（pending）。不把“盾形”当作道具或材质。|
| R03 Ashley 棕色倾斜柱状体、圆形眼 | R03 中央偏左棕色主体 | `variant-option`：`candidate-grok-cylinder` 的倾斜几何/透视参照，不另计 Artwork | 形体作为圆柱候选证据保留；圆形眼与 Grok 胶囊眼不符，因此仅不复用眼型。不得把职位文字当身份或把该投影当另一个独立圆柱作品。|
| R03 Pixel 橙色椭圆体、折角/V 形眼 | R03 中右橙色主体 | `variant-option`：仅映射横向胶囊候选的比例线索 | V 眼不作为 Grok 可选眼型，不新建身份。|
| R04 棕色圆形、单个大圆眼与小点 | R04 右下主体 | `reuse`：仅轮廓映射现有 Artwork `candidate-grok-20261005`；`excluded`：单眼+小点的五官图案 | 保留近圆 orb 轮廓作为复用证据；只排除不符合 Grok 双胶囊眼约束的单眼构图，不把整只主体列为排除项，也不裁切/拼接参考像素来补眼。|
| R03/R04/R14 的标题、姓名、职位、邮箱、边框和拍屏纹理 | 对应整张参考 | `excluded` | 文案和 UI 不决定 Artwork、Character、series 或提示词；灰/白屏幕底不进入成品。|

## Meta Muse、Animals、People 与独立机器人

| 主体/要素 | 来源区域 | 裁决及准确目标 | 保留/排除边界 |
|---|---|---|---|
| 奶油包覆 Muse 与内嵌脸 | R05/R10/R11/R12/R15/R16/R17/R18/R21 | `reuse`：`candidate-meta-muse-20261005`；花束、书、灯笼分别参照 `muse-rose-flowers`、`muse-sage-reading`、`muse-lavender-lantern` | 保持连续包覆体、内嵌脸与 Muse 的短圆肢体；对照组图不是这些 Artwork 的原始像素。|
| 花冠/花园、苗芽或贴身绿植 | R10/R11/R16/R17/R18/R21 | `variant-option`：`meta-muse-core` 的头饰/附着道具候选 | 需先辨认是头饰、持物还是独立植物；不把背景植物、靠垫或未附着物体算作身体。|
| Muse 抱星，星体由短圆肢体真实承托 | R05 Muse 类目卡；R16 下排 Muse 单体；R10/R11/R15/R17/R18/R21 的重复线索 | `new-artwork`：`candidate-muse-holding-star` | 保持连续包覆和内嵌脸；单独制作完整透明外观，星形不能只是背景光/独立贴片。|
| 柴犬、灰白哈士奇、奶油白猫、白兔、可可熊 | R05/R10/R11/R12/R15/R16/R17/R18/R21 中清楚单体 | `reuse`：`candidate-animals-20261005`、`animal-gray-husky`、`animal-white-cat`、`animal-white-rabbit-v98-candidate`、`animal-cocoa-bear` | 仅对照物种身份；白兔当前不透明旧字节不能充作本轮透明素材，替换版本另行制作并保留旧 hash/批准。|
| 黑猫 | R10/R11/R15/R17/R18 | `variant-option`：`animal-white-cat` 同身份真实毛色/眼型变体，不另造 Character | 如形成独立完整 Artwork，仍要自有 ID/version/hash/批准；只改色不能增加新 Character。不得把白猫原图直接滤黑。|
| 熊猫 | R05 类目卡；R10/R11/R15/R17/R18 | `new-artwork`：`candidate-animal-panda` | 需要熊猫脸部遮罩、耳、四肢、体型的完整物种结构；不得把可可熊简单染黑白。|
| 小猪 | R05 Animals 拼图下方粉色主体；R10/R11/R15/R17/R18 中小型动物线索 | `new-artwork`：`candidate-animal-pig` | 粉色鼻口、耳和物种结构在原参考较小时需按可见线索原创并标记推断；不把屏幕小图宣称为官方原形。|
| 猴 | R05 Animals 拼图右侧小型暖棕动物轮廓 | `new-artwork`：`candidate-animal-monkey`，制作前复核物种识别 | 低分辨率仅支持“疑似灵长类/猴”候选，不把不清楚耳/尾部写入 known；原创结构和用户确认独立记录。|
| 小鸟与企鹅 | R05/R10/R11/R15 的动物拼图和小尺寸卡片；物种细节分辨率有限 | `new-artwork`：分别登记 `candidate-animal-small-bird` 与 `candidate-animal-penguin` 候选 | 两个独立候选，不合并为同一种；若再次看源图仍无法识别对应区域，则把该候选标 excluded/unresolved，不能凭低清图声称已发现官方鸟种。企鹅保留黑白体块/翅翼线索，小鸟按真实物种另行确认。|
| 人物：栗发人物、黄衣丸子头、金发眼镜、铁锈夹克人物 | R05/R10/R11/R12/R15/R17/R18/R21 单体/合照指定角色 | `reuse`：`candidate-humans-20261005`、`human-bun-yellow`、`human-blond-glasses`、`human-rust-jacket` | 合照可以作指定人物的可见外观参考；男女、发色、职位文字和重复截图不自动创建新身份。电脑/相机等转成有真实接触/锚点的同身份配件候选。|
| 人物电脑、相机、帽子、衣装与姿势 | R05/R06/R10/R11/R12/R15/R17/R18/R21 | `variant-option`：匹配上述人物身份的衣装/持物/发型选项 | 不把屏幕中的 UI 图标当层；人物保留合理解剖，手持道具必须有手部接触和遮挡，不给 Dots/Grok 添加手脚。|
| 白色屏幕脸、有四肢/机械身体的独立机器人 | R10/R11/R12/R15/R17/R18/R19/R20/R21 | `reuse`：身份 `original-robot-v98-candidate`、作品 `robot-ivory-capsule-face-v98-candidate`；单独制作透明替换版本 | 这是独立原创机器人，不属于 Grok；旧 RGB 文件、hash、来源和批准保持原样。外壳显示面、手脚和机械结构不作为 Dots/Grok 规范。|

## 附件级完整映射与排除

| ID | 角色/属性映射 | 文件级重复与排除 |
|---|---|---|
| R01 | Grok 白拱、紫色近方块与青绿色近方块（均复用 `grok-teal-square` 作为形体参照）、橙横胶囊 | 紫色块下缘被挡，比例不足以证明纵向矩形；排除标题、卡片框与场景底 |
| R02 | 蓝贝雷云新作品；绿色蛙形复用；粉墨镜复用；黄色遮挡小主体只作配件线索 | 排除类别字样和背景 |
| R03 | 紫圆、绿云、软三角、软菱形、半圆穹顶、Ashley 倾斜圆柱、Pete 青色近方块复用 `grok-teal-square`、橙横体、Nova 立方候选、Rae 映射为同候选的蓝色正面/六边轮廓选项、蓝水滴逐主体按 Grok 表裁决 | 排除姓名/职位/字体；不因组织标签建人物；Ashley 的圆眼不覆盖其圆柱几何证据；Rae 仅按轮廓相似映射，不断言与 Nova 是同一 3D 模型，也不新增身份 |
| R04 | 云、orb、菱形、软立方、半圆、红色竖圆柱、圆角方、三角、橙色立式蛋形、水滴；青方复用 `grok-teal-square`；棕圆轮廓复用 `candidate-grok-20261005` | R04 为拍屏照片；纹理不是角色材质；红圆柱与橙蛋形是不同轮廓候选；棕圆仅排除单眼+小点图案，不排除其 orb 轮廓；无豆形新候选 |
| R05 | Dots、Grok、Muse、People、Animals 家族卡中的指定单体；人物/动物及 Muse 候选见上表 | 排除导航、标题、促销词、界面按钮和整幅长场景 |
| R06 | 蓝色 Dot 的耳机/帽/背包/相机仅作选项概念线索 | 排除房间、地台、交互控件、动作附肢 |
| R07 | 蓝耳机 Dot 复用；绿叶芽梨与紫星新候选；橙色长软体仅作为 `dots-leaf-pear` 保留芽叶的橙色配色灵感，不新增无叶外观或服装选项 | 排除 GitHub Stars、文案、背景；橙体围裙/口袋按无 Dots 服装选项决策排除；所有 Dot 肢体排除 |
| R08 | 紫色耳机 Dot 候选外观、静态 wink 和耳机概念 | 与 R09 视觉重复；排除步骤 UI、房间、背景、附肢 |
| R09 | 同 R08 的主体和选项线索 | R08/R09 哈希不同、构图视觉重复，均保留源文件只计一次构图 |
| R10 | 蓝贝雷、黄眼镜三角、粉圆眼镜、绿蛙、紫星/花云、Grok、Muse、人物、柴犬/白兔/熊猫卡及独立机器人 | 与 R13 视觉重复；只取明确角色区域，不取整图发布 |
| R11 | Berry/Sky/Leaf/Cyber Dots，Grok Classic/Colorful，Muse Original/Garden，Chibi boy/girl，Shiba/Bunny/Black Cat/Panda；五金饰品仅作候选选项 | UI 卡片、点击状态、文案、工具栏均排除 |
| R12 | Blue Beret Dots、Muse、Grok、人物/动物，详情 variants 作为已有候选映射 | 排除设备边框、页面框架、推广区和场景 |
| R13 | 同 R10；不新增候选主体 | 与 R10 视觉重复但 hash 不同，保留来源追溯 |
| R14 | 三角、云、青绿圆角方复用 `grok-teal-square`、紫色水滴复用 `grok-coral-drop`、棕圆团复用 `candidate-grok-20261005`；裁切多面体仅作对照 | 排除 email 文本、白底和裁切之外界面；没有清楚豆形证据，不创建豆形 Artwork |
| R15 | Dots 配件/颜色、Muse、People、Shiba、Black Cat、Bunny、独立机器人；人物相机作选项 | 排除网页与手机 UI、标题、卡片边框 |
| R16 | 蓝贝雷云、黄眼镜三角、粉耳机圆、紫花云、绿短绒方、Muse抱星、人物与柴犬 | 紫形与 R07 星体分开；删除图中附肢，排除白色展示底/地台/阴影 |
| R17 | Gallery、detail 和 editor 中角色映射到上表既有/新候选；编辑选项仅为灵感 | R17/R19/R20 是同一字节；排除界面、灯效、台面、文案 |
| R18 | 多系列 hero、Gallery 和调整 panel 中角色映射到上表；无手脚核对 | 设计说明和屏幕 UI 不是指令或作品事实；角色外的场景不入资产 |
| R19 | 同 R17，无新增主体 | 与 R17/R20 字节完全相同 |
| R20 | 同 R17，无新增主体 | 与 R17/R19 字节完全相同 |
| R21 | 人物、白 Muse、独立机器人、兔、蓝贝雷 Dot、紫耳机 Dot、黄三角眼镜 Dot、绿蛙 Dot、粉心墨镜 Dot | 指定合照主体可作外观依据；排除地台、背景、粒子光效和 Dot/Grok 附肢 |

本表不会把 21 张截图数量换算成新角色数。新候选的独立 Artwork 数量须由实际输出轮廓、资产和后续批准决定；角色源素材、Prompt、模板、图层与所有历史原图分别保存，未批准候选保持 pending。
