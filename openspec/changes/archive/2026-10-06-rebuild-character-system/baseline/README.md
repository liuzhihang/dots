# v27 可恢复基线

24 份未迁移配置覆盖 schema 6/7/8/9、Dots original/recreation、Grok、旧 Muse 人物及 Pets 柴犬/鸟类。持物样本故意区分保存配饰与动作临时道具。逐份 SHA-256 与源码归档路径见 manifest.json。源码归档来自原站 Git HEAD，未包含 OpenSpec 后续改造。恢复时解包到独立目录，勿覆盖当前工作区。

`legacy-preset-defaults.json` 另从同一固定 Git commit 抽取全部 57 个历史预设的原默认值（不是由新模型生成），清单单独记录 SHA-256。它验证新 `createPreset` 兼容路径没有改变旧材质、短卷发、肤色、配色、来源与 rendererVersion。
