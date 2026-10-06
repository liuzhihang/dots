# 动物 独立记录

状态：**当前候选未通过；用户未批准；不允许扩展。**

身份/风格参考：R01；动漫图仅提炼通用风格。主要问题：颗粒绒面、边缘与道具层次仍需细化。所有中间截图都只能支持诊断，不能声明当前源码最终完整矩阵通过。

- 页面 URL：`http://127.0.0.1:5173/`；CPU `?renderer=software`。
- 可复现组合配置：[JSON](evidence/configs/animals-threeQuarter.json)；裸形及比例/动作夹具在同目录。配置属于中间候选，与最终快照差异见总记录。
- 实际日志中本组 41 次截图操作；记录数不是通过项数。正确宽度的截图记录：320 px=1，390 px=1，768 px=1。实体手机未执行。
- CPU 页面诊断记录 2 次；实际 CPU PNG 下载未完成。
- 实际 WebGL 下载：[PNG](evidence/animals-webgl.png)；1400×1400 RGBA、四角 alpha=0，文件分析见 [JSON](evidence/downloaded-png-analysis.json)。这是中间候选，不是最终通过。
- Prompt 剪贴板回读保存 1201 字符；尚未与最终版本逐字匹配，不能报全通过。

## 部分真实页面证据

- [animals-bare-threeQuarter](evidence/screens/animals-bare-threeQuarter.jpg)：1920×872；threeQuarter；idle；webgl；采集 2026-10-05T02:59:51.143Z。
- [animals-bare-side](evidence/screens/animals-bare-side.jpg)：1920×872；side；idle；webgl；采集 2026-10-05T03:00:10.930Z。
- [final-animals-bare-front](evidence/screens/final-animals-bare-front.jpg)：1920×872；front；idle；webgl；采集 2026-10-05T03:16:48.846Z。
- [final-animals-bare-threeQuarter](evidence/screens/final-animals-bare-threeQuarter.jpg)：1920×872；threeQuarter；idle；webgl；采集 2026-10-05T03:16:50.613Z。
- [final-animals-bare-side](evidence/screens/final-animals-bare-side.jpg)：1920×872；side；idle；webgl；采集 2026-10-05T03:16:52.654Z。
- [final-animals-front](evidence/screens/final-animals-front.jpg)：1920×872；front；work；webgl；采集 2026-10-05T03:16:56.843Z。
- [final-animals-threeQuarter](evidence/screens/final-animals-threeQuarter.jpg)：1920×872；threeQuarter；work；webgl；采集 2026-10-05T03:17:00.099Z。
- [final-animals-side](evidence/screens/final-animals-side.jpg)：1920×872；side；work；webgl；采集 2026-10-05T03:17:02.776Z。

## 待完成

先完成资产路线修订与精细基准，再复核全部规定的裸形/组合视角、开放比例与动作关键帧、桌面/320/390/768 px、WebGL/CPU、实际输出/alpha、下载和剪贴板回读。缺证与失败项保留未通过。生成素材、数值审计或构建不能解锁本组扩展。
