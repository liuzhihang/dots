# 冻结 v98 详情打开基线

此目录记录重构前 `historical-runtime/v98-before-dark-gallery/dist` 的详情打开基线，服务运行于 `http://127.0.0.1:5181/`。基线目标为 Dots v2；在 Chrome 1440 × 900 下各测 5 次独立冷上下文，并在同一页面关闭后重开 5 次。点击时间由页面事件捕获，直到详情封面解码可用；同时记录面板、元数据、操作按钮和资源 Timing。

| 场景 | 面板 / 元数据 / 操作可见 p50 | 操作可用 / 预览解码 p50 | 每次原图响应 |
| --- | ---: | ---: | ---: |
| 冷启动（5 个新上下文） | 13.0 ms | 72.8 ms | 1,720,054 bytes |
| 热重开（同一页面 5 次） | 3.4 ms | 44.1 ms | 1,720,054 bytes |

冷、热样本均读取完整原图并重复 SHA-256 校验；“热”仅表示运行时页面/浏览器已打开，不表示无网络请求或零字节传输。测试是在本机静态快照中进行，不代表 Sites 网络或真实用户性能。详细逐次 Timing、请求、响应、浏览器和主机信息见 [v98-detail-performance.json](./v98-detail-performance.json)。

| 录屏 | 记录内容 |
| --- | --- |
| [cold-detail-demo.webm](./video/cold-detail-demo.webm) | 独立新上下文中打开 Dots v2 详情 |
| [hot-five-reopen-demo.webm](./video/hot-five-reopen-demo.webm) | 同一页面关闭并重开 Dots v2 详情 5 次 |

录屏在原始计时完成后单独采集，避免录制开销污染基线；它们是操作过程证据，不用于 Timing 数值计算。
