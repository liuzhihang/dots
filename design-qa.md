# 页面设计与交互 QA · 2026-10-05

final result: passed

本结果限定为页面布局、可达性和已实现的创作交互。五组新角色均为待用户确认的基准候选；本报告没有通过、勾选或替代 `rebuild-character-system` 的逐组美术验收。

## Source visual truth

- 已确认方向：`openspec/changes/rebuild-character-system/references/r01-confirmed-direction.jpg`，1280×720。
- 保留白色品牌导航、浅色城市主视觉、居中标题与随机入口、五张独立家族卡、底部创作入口。按已确认产品要求移除登录与用户空间；每组只出现一只基准，而非复制图中的多角色目录。
- Dots 使用蓝色既有基准方向；人物与动物为原创生成，未使用动漫截图像素。图像来源见同 change 下 `references/asset-provenance.md`。

## Implementation evidence

浏览器实际运行 `http://127.0.0.1:5173/`；默认展示精细 PNG，结构诊断仍是独立入口。证据目录：

`openspec/changes/refresh-studio-visual-design/references/browser-qa-20261005/`

| 页面 | 桌面证据 | 移动/平板证据 |
| --- | --- | --- |
| 首页 | `home-final-1280.png` / `home-final-viewport.png` | `home-final-768.png` / `home-final-390.png` / `home-final-320.png` |
| 创作区 | `workspace-final-1280.png` | `workspace-final-768.png` / `workspace-final-390.png` / `workspace-final-320.png` |
| 随机面板 | `random-final-1280.png` | `random-final-768.png` / `random-final-390.png` / `random-final-320.png` |

CSS 测试视口为 1280×720、768×1024、390×844、320×740。实际捕获为 1 倍像素；IAB 的页面捕获会扣除滚动条/浏览器内容边界：首页全页分别为 1265×833、753×1112、375×1743、305×1744，桌面工作台与随机为 1280×720。源图为 1 倍像素，未作 2 倍密度混比；比较结构与 CSS 尺寸时计入 15 px 滚动条差异。长页面截图保留全部纵向内容，不以 720 px 内强塞全部内容作为手机验收标准。

完整视图已对照 R01：标题层级、品牌位置、主视觉 250 px 高度、家族卡结构和柔和底色一致；新增工作台作为独立状态，保留原有状态模型。局部证据 `families-final-1280.png`（1224×212）对照 R01 的五卡区域，确认文字未被人物/动物遮住，五图的身份与配色没有跨组复用。主视觉同时在完整首页中检查，未使用不可用的局部截图作为证据。

## Iterations and findings

| 原问题 | 修复 | 修复后证据 |
| --- | --- | --- |
| 旧编辑器与 R01 页面层级不一致，缺首页与家族浏览 | 增加首页/工作台两个状态，共用原项目与历史 | 首页与工作台桌面截图 |
| 候选尚未加载、旧人物身形细长 | 加入五组真实透明 PNG，人物重制为大头短身；弃用图移出发布目录 | 首页五卡，资产来源表 |
| 旧 CSS 覆盖新布局、版本查询缓存旧样式 | 提高新壳选择器优先级，更新资源版本；直接核对 computed layout | 桌面工作台，PNG 预览区域完整 |
| Canvas 外部留白使角色过小；随机 grid 图片按固有尺寸超出容器 | 清除多余 padding，明确 Canvas 高度与图片定位尺寸 | 工作台与随机截图，角色完整显示 |
| 卡片文字与人物/动物头部重叠、说明文字过浅 | 缩小卡片图片范围，增强说明与操作文字对比度 | 家族卡局部；桌面最终配色截图 |
| Apply 后焦点返回隐藏的首页按钮、筛选重渲染丢焦点 | 将应用焦点转入工作台标题，筛选和工作台选择保持焦点；关闭回原入口 | 浏览器焦点读取：`stageName`；筛选为“人物”；Escape 为“随机灵感” |
| 全锁定仍更改 seed 并产生撤销记录、参考锁提示错误 | 全锁定复用配置并跳过无变化提交，明确参考图类型锁来源 | 真实页面全锁定保留首页状态、参考图锁说明；生命周期测试 |
| 组合成功未标明候选，listen Prompt 要求静态图没有的侧头 | 组合与导出说明标记待确认；有效 Dots 包覆写 listen 为正面静态佩戴 | 组合状态、Prompt 中英文验证 |

修复后未发现本范围内待处理的 P0/P1/P2 页面或交互问题。家族扩展与新配饰素材仍属于明确未开放的后续能力，不作已实现展示。

## Real-page interactions

- 首页：五组各一只候选；英文大小写搜索 `gRoK` 定位 Grok Bot，中文无匹配有恢复入口。筛选保留焦点，搜索/清除不改当前角色。
- 状态保持：Dots 的组合模式与透明背景切换到 Grok Bot 再返回仍保留；程序直接执行生产 `remember`/`switchFamily` 检查五组完整 wrapper、reference、notes、output 与 clone 隔离。
- Composer：Dots 的耳机开关与背景实际更换图层/Canvas。修改莓果粉这类不支持参数时显示 Prompt 创作说明并禁用当前 PNG，撤销恢复可用结果。Grok Bot 无包时显示缺项并禁用 PNG；其余三组同样由注册表的无包路径及回归检查覆盖。
- 文件回读：浏览器导出的 `蓝色-Dots-composition.png` 为 1600×1600 RGBA，左上 alpha=0、中心 alpha=253；Meta 原图下载与登记文件 SHA-256 相同。Meta 中文 Prompt TXT 与面板全文逐字一致。
- 中英复制：等复制完成状态后回读浏览器剪贴板，两种语言均与当前全文相同。首次即时读取早于异步写入完成，最终按完成播报复查通过。
- JSON：保存当前 Meta 参考项目、切换 Dots、经文件选择器重新导入，恢复 Meta 模式、参考文字及保留项。旧资产 ID 和 v6–v10 迁移继续有程序回归覆盖。
- 参考图：输入保留说明、启用保留项后 Prompt 同步；本站只保存文字，图片在 ChatGPT 添加。ChatGPT 入口实际点击会复制并请求打开 `https://chatgpt.com/`，未发送 Prompt、上传图片或验证外部生成结果。
- 随机：锁住 Grok Bot 质感后重抽保持“哑光软胶”；临时候选和取消前后的完整读取结果相同。应用动物配方后一次撤销回 Dots；抽取中退出，迟到回调没有改变项目。全锁定不新增变更。减少动态设置下保持同一应用/取消流程且立即出现配方。
- 无障碍：原生 dialog 内连续 18 次 Tab 焦点均留在面板；Escape 取消并恢复入口。参考图锁在无障碍树中标为“类型由参考图模式固定”，禁用其他家族。锁按钮提供明确名称与 pressed 状态，锁目标 36 px、主要操作 40–55 px。
- 响应式：三个页面在四个要求视口无页面级横向溢出；768/390/320 的 document clientWidth 与 scrollWidth 分别同为 753/375/305。窄屏的随机家族条内部横向滚动、主区纵向滚动，应用/返回可触达；重复打开滚动归零。
- 控制台：最终新浏览器会话加载并操作首页、工作台、随机，error/warn 列表为空；此前素材制作阶段的短暂缺图没有当成最终结果。

## Program validation and limits

本轮 `npm run build`、原 studio/recreations/atelier/character-system 回归通过。最终行为改动后 creation、creation-ui、family-navigation、fullscreen-random 回归与修改 JS 的语法检查再次通过；四个 change 的 OpenSpec strict validation 通过。

实际手机硬件与用户远程页面确认尚未完成。人物/动物原创性来源可追踪，软件角色候选也不是官方资产文件。以上程序、布局、文件格式、部署或本报告的 passed 都不能转化为五组角色的美术验收通过。
