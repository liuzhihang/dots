# v98 远端审阅发布

用户于 2026-10-10 明确要求“发布到网站，我去确认一下”。这是将当前候选发布到原有 owner-private Site 的授权，艺术状态仍 pending；未将 OpenSpec 的用户确认任务勾选。

- 网站：https://dot.liuzhihang.chatgpt.site
- Sites 版本：46；源码 cache：98。
- 部署：`appgdep_6ac9a1c1360881919a5db87276d049fb`，native结果 `succeeded`。
- 已推送的 Sites 源码提交：`28bbb002732b384b87d9e2bcbbf49871dfbf347f`；保存版本的source字段与之相同。
- Site project、custom访问模式、owner-only allowlist、access revision 1及external visitor 0均未变化。
- 原项目工作树HEAD仍为 `b22c3f0df8b010da74b99caf9a80c417157857d7`，暂存区hash与本轮开始相同；未向GitHub提交或推送，未sync/archive。Sites专用源码提交位于独立临时目录。

## 核对记录

`source-manifest.json` 冻结59个dist文件与hosting；这些dist文件59/59与上轮真实浏览器及build快照相同，功能验证可复用。`archive-check.json` 对本地发布包逐文件核对：59运行文件+hosting，没有AppleDouble或symlink。原两张v97场景在独立Sites源码目录按精确路径退役，备份hash见 `sites-source-preparation.json`；本地项目原历史未动。

`deployment.json` 保存native部署、版本、源码提交与访问回读。Sites返回的已保存tar容器hash/大小与本地tar.gz及解压tar不同，不能宣称容器原字节相同；两个值分别保留。随后通过平台服务凭证只向该Site发出只读HTTP请求，`online-runtime-hashes.json`直接核验线上内容：58个静态文件原字节/hash一致；index.html的完整原始HTML保持，只多一处938字符的托管响应插入。动态插入内容不落盘。

实际IAB已回读cache98、满屏背景、背景内分类、Featured消失及17个角色入口；白色机器人原图与Prompt加载、共用详情及返回已操作。`online-home.jpg`、`online-robot-detail.jpg`为本轮真实线上截图。

## 恢复过程

官方source helper最初有间歇LibreSSL/TLS中断，失败未触发部署；保留原Site、独立目录和同一待推送提交继续。使用已安装bundled Git、正确GIT_EXEC_PATH及命令级HTTP/1.1/TLS1.2设置后完成推送和远端ref回读。没有改系统代理、网络设置或TLS证书校验；不能据此断言某个参数单独修复了根因。

发布后HTTP补充检查先因index的同源307规范化跳转失败，修正为仅跟随同源跳转；第二次发现HTTP HTML附加内容导致整响应hash不同，保留其差异摘要并验证源HTML无删除/替换。最终58个资源严格hash与HTML完整保留检查通过。工程、远端发布、浏览器实页、实体设备和用户美术确认仍分别记录；实体手机未测试，用户美术确认未完成。

此前v98 build和design-qa中的“未授权发布/未部署”属于2026-10-09本地apply阶段的历史状态，不覆盖本轮新授权及此发布回执。
