# cache 86 人物耳机动态贴合修订

本轮修订完成工程实现与真实浏览器/PNG 检查，等待逐适配的用户美术确认；未提交、推送、保存 Sites 版本或部署。

- 源码：main / `4d952b907ef4823db7b5e9792726c80a4226eeb8` 上的 dirty 工作区；155 个冻结路径，source `sha256:680012556b6a8723fee179f93bb9b98a853793fc729c368f4ef0ee7c2aec820f`。当前工作区修改保留，版本不等于仓库 HEAD。
- 当前图库 15 look / 22 模板状态，对应 21 张实际完整 PNG（15 张默认图库 PNG、1 张 Dots 裸形与5张额外静态姿态/表情 PNG）；两个耳机状态共用同一 Dots 完整 PNG。
- 组件：3 个基础设计、3 张独立 PNG、耳机3部件+眼镜1部件+围巾1部件；没有新增换色/材质变体。7 项单组件适配、1 条双组件配方，8/8 真实可解/可绘制；0 项组件美术批准，0 项默认随机资格。
- 同一耳机 kit `pilot-headphones-v1 / 2.2.0`、同一未修改的 PNG/hash、同一 solver `1.2.0`，四个 Human 状态采用各自的 profile 和变换：棕发经典、棕发挥手、丸子头、金发原图眼镜。已有 Dots 适配也回归；耳罩保持等比缩放，头梁采用三锚点仿射解算并限制剪切/拉伸；左右肩部轮廓误差按 profile 单独检查。
- 前发、手指采用精确状态的可信多边形遮挡。裁切逐个相交，防止重叠洞被偶奇规则重新露出。金发眼镜人物采用连续的前置头梁，保留原图眼镜，无未经支持的宽遮挡。
- 这是维护者登记几何驱动的固定正面适配；没有实现任意上传图片识别、任意视角或任意姿态。

## 可审阅输出

[四个人物整图及局部对照](human-headphone-comparison.png)来自[真实 Canvas PNG](module-canvas/canvas/)；检查页面底色仅用于观察，真实导出保留 alpha。[对照 HTML](human-headphone-comparison.html)引用原导出，不改 PNG 像素。

[模块覆盖报告](module-canvas/coverage-report.json)逐项保存素材/配方/profile/fit 指纹、部件变换、尺寸、alpha、Canvas 与实际 PNG 哈希；[四状态几何报告](human-fit-engineering.json)记录耳位、耳罩几何范围、头梁 crown/shoulder 约束。当前批准/发布状态均 pending/internal，图鉴协调性记录仍 unreviewed；不以工程通过伪装人工批准。

[真实 Canvas 遮挡像素检查](real-cutout-pixels.json)验证两个重叠 cutout 的 union，并验证丸子头手指点 `(390,576)` 在遮挡后的像素与基底原图一致，耳罩仍有真实源像素。原图和组件 PNG/hash 未改。

## 验证范围

- [22 个模板的实际透明 PNG](template-canvas/coverage-report.json)全部通过；[字节回归](template-byte-regression.json)确认与 cache85 的22个对应导出 SHA 一致。
- [真实工作台浏览器回归](ui-browser-final-2/report.json)：1440/320/390/768 px，四个人物实际选择/切换、8配方、v2导入/刷新/撤销重做、相同输入重复 PNG/像素一致、unsupported/tampered plan拒绝、标签和焦点；pageerror 0。实体手机未测。
- [图鉴/标签/随机器浏览器报告](atlas-browser/report.json)：8组件在浅/深检查界面、详情、四种宽度标签/空结果/取消焦点和实际随机结果；0页面错误。
- [源码首页保持检查](home-design-preservation.json)：与 Site37/cache85 发布 checkout 比对，首页 HTML/脚本和共享 CSS 除版本查询外相同；本轮只增加工作台适配/修订组合逻辑。首页布局与艺术底色保留。
- [命令和边界](verification.json)：17项 Node脚本、真实浏览器、build、OpenSpec严格校验通过；build单独只证明诊断bundle。

## 证据与未完成边界

cache85 人形耳机和人形耳机+眼镜的[用户拒绝](../../modular-pilot-20261006/human-headphone-feedback-20261006.json)继续绑定旧源/profile/recipe/PNG。新结果不继承旧批准。其他首批组件也仍未获用户决定。

`source-before.json` 是实际cache85来源；`attempt-1-source-during-edit.json` / `attempt-1-fit-during-edit.json` 是实施中的临时失败记录。`ui-browser-initial` 的验证器标题匹配错误、`ui-browser-final-1` 的未展开子 details 错误已修复，最终证据在 `ui-browser-final-2`。历史与失败目录保留原样。

图鉴捕获开始时 source 为 `sha256:d3fc7789fc9a49c4459b12887288ed7c44ec7f5347b7c37fed168f5096787aca`；最终freeze仅因 `scripts/verify-studio-browser.mjs` 展开子details的验证器修正变为当前 source，运行页面/资源均未变。差异已逐路径核对；捕获包由同一共享设施生成，冻结脚本校验当前真实素材hash并绑定最终source，不另建捕获生成器。

用户美术确认仍需分别覆盖四个人物、Dots、其他单组件和完整双组件配方；未默认批准任何截图。OpenSpec工程任务完成不等于美术批准或上线。本轮没有线上回读、生产变更、访问范围变更或 Git 提交。
