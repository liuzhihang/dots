# cache 85：仅透明输出

源码基线：main / 4d952b907ef4823db7b5e9792726c80a4226eeb8，加当前未提交工作区。冻结 sourceId：sha256:9bcd516a91b2d366f1921073962909ee801b9bf75d765c83c2bdc1b200daa672。

背景选择与背景色控件已移除。新项目、模板/模块合成、随机结果、Prompt、2D/3D 诊断导出均采用透明输出；现行 v2/VERSION 10 的背景字段仅作惰性元数据，严格恢复不会重新启用背景渲染。旧格式仍拒绝。首页群像、场景卡、主导航和筛选保留，仅移除背景功能入口。

实际 Chrome/Playwright 检查 1440、320、390、768 px，共 8 次实际 PNG 下载，无页面/控制台错误、无横向溢出；验证当前 v2 精确导入与刷新恢复、随机应用和 transparent:false 负例。Browser 插件不可用，使用已安装 Playwright 与系统 Chrome。未验证实体手机。

模板图鉴实际捕获 22 状态，模块图鉴实际捕获 5 配方。Pillow 独立回读 27 张合成输出、8 张页面/诊断导出、27 张捕获源素材，共 62 份 PNG；均有零 alpha 与可见像素，尺寸、文件字节和 SHA256 见 png-byte-readback.json。页面背景/棋盘格只用于查看，不烘入 PNG。

构建、透明合同、模型/项目、模板、resolver、标签、随机、创建 UI、预览、覆盖与 cache 校验通过；OpenSpec 严格校验 16/16，git diff --check 通过。

本目录只记录工程与透明输出检查。新组件仍 pending-human-review，未自动授予美术批准，不覆盖任何历史冻结目录。发布结果另见 design/releases/20261006-site37-v85/。
