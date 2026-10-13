# Site 60 / v111：GitHub反馈与移动端单行导航

2026-10-13 已发布到 [Dots](https://dots.liuzhihang.chatgpt.site)。Sites 返回 succeeded，缓存111，现有站点身份与公开访问范围保持。用户授权“发布到线上 并归档，提交代码”。

## 本次变化

桌面页头提供GitHub及反馈建议，1100px及以下隐藏页头GitHub，600px及以下保留Dots.文字字标、角色库、反馈和原生语言下拉，页头60px单行；320px中英文也不重叠，触控目标至少44px。页脚始终提供两类外链及登录/公开说明，语言仍复用全站状态。Hero、素材与角色调整能力保持。

[GitHub反馈选择器](https://github.com/liuzhihang/dots/issues/new/choose)已提供问题、形象申请、功能/体验建议三类双语表单。默认分支四文件与本地逐字匹配；真实维护者页面已核对分类、必填标记、选填附件和形象需求免责声明，空白入口明确标识Maintainers only。未创建Issue、上传文件或点击Create；未使用另一普通贡献者账号或触发提交校验。分类下拉选项已从远端配置核对，内置Browser未可靠展开该下拉。

## 验证

- `npm test`、v111 build、完整 `npm run test:browser`均退出0：23项主流程、88次导出、3574个对比度目标0失败、528个编辑布局/生命周期用例及880张截图。总体最低3.49:1属于按3:1阈值检查的大标题，普通正文按4.5:1阈值；见engineering-checks.json。
- 构建1004文件、44批准作品/0pending；manifest仅从110改为111，素材闭包未增删。592个应用文件加托管元数据共593个文件全部核对SHA-256，无AppleDouble，412个source-only PNG保留于工作仓库且排除在上传包外。初次系统打包携带AppleDouble，被拒绝后用COPYFILE_DISABLE=1重打并复验。
- 正式stage的Figure与option缩略图检查通过。代码与发布文件的缓存引用整体统一111，无新增依赖；托管/OpenSpec配置、依赖及批准素材保持。
- 内置Browser实际线上检查1440/768/390/320px中英文共8组，确认cache111、页头/页脚目标、文案与320px单行，无页面溢出、框架错误层或console warn/error；桌面及320px截图已目检。线上角色调整和导出未重复运行；相关完整回归使用本地真实浏览器。
- 30个线上运行文件回读：29个JS/CSS逐字匹配冻结stage，index的原始前缀/结尾完整匹配，仅包含已识别的托管script插入。系统curl保持TLS验证并跟随同域重定向；没有宣称检查全部592个在线文件。
- OpenSpec主规范普通校验13/13通过，新github-feedback主规范strict通过。全库strict仍有8份既存规范的长段落警告，与同步前完全一致；未为了strict重写既有合同。

内置Browser的点击在本会话未可靠激活，角色/外链交互由既有Playwright与Chrome155本地回归验证；线上语言选择与实际布局由内置Browser观察。实体手机、Safari和移动网络未测试，既有加载性能问题本轮未处理。

## 发布与归档

- GitHub模板提交：`23ae2fafe16d895855d9e4d947facbdb405e3b15`。
- GitHub网站代码提交：`b0b72f75b668d9b3c89fefb4a5939c6cf727dd14`；提交/推送范围由独立index与精确路径清单核对。
- Sites独立源码提交：`3798af312466ea6d39c255c0d5eb12bf4279be44`，保存为Site60后部署；源码提交与GitHub提交分别记录。
- 部署ID：`appgdep_6ace0e8afc0c81919e1bc41d815c14ba`，回执与公开访问范围见site-native-result.json。
- `add-github-feedback-entry` 14/14任务完成后同步三份主规范（7新增、2修改），保留既有Purpose、未涉及条目与原场景；归档到 [2026-10-13-add-github-feedback-entry](../../../openspec/changes/archive/2026-10-13-add-github-feedback-entry/)，7个最终规划文件移动前后hash一致。

本目录保存精选发布证据。原始日志、完整浏览器结果、源码/包冻结清单和GitHub页面快照位于`.artifacts/20261013-github-feedback-release/`；前阶段v110本地记录保留为历史，不充当本次线上证据。
