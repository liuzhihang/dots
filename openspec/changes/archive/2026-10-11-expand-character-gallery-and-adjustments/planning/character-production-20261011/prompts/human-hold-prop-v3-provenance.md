# 人物持物分支 v3 来源与验收记录

本记录将胸前持物姿势绑定到两个现有 Artwork 的具体版本。所有原始 ImageGen 输出和项目内 v1 副本均保留；`clean-v2` 仅是获授权的 alpha 派生版本，不覆盖 v1。所有分支保持 preview-only，用户美术批准仍为 pending。

## 角色与生成链

### 栗发青绿人物 / `candidate-humans-20261005@v1`

身份基准为 `dist/assets/characters/humans-chestnut-chibi-teal-knit-candidate-v1.png`，SHA-256 `56423f860f47bbad212875aeecdda40e6c86382b6d15a61b5c1a2ffd723fc521`。

| 分支 | ImageGen 原始输出（路径 / 输出 ID / SHA-256） | 生成时精确参考 | 原样 v1 项目副本 | alpha-only `clean-v2` |
|---|---|---|---|---|
| 站立、准备托住笔电 | `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-5902f69e-54fc-4093-88b1-e3895f4fcb1b.png` · `5902f69e-54fc-4093-88b1-e3895f4fcb1b` · `0df6eadb474bd7c5e68376bdb87311bc25d830417ce5c47c7958cb6a28ccf5dd` | 原 Artwork 上述路径 · `56423f860f47bbad212875aeecdda40e6c86382b6d15a61b5c1a2ffd723fc521` | [`../generated/human-adjustments-v3/chestnut-boy-laptop-ready-standing-v1.png`](../generated/human-adjustments-v3/chestnut-boy-laptop-ready-standing-v1.png) · `0df6eadb474bd7c5e68376bdb87311bc25d830417ce5c47c7958cb6a28ccf5dd` | [`../generated/human-adjustments-v3/chestnut-boy-laptop-ready-standing-clean-v2.png`](../generated/human-adjustments-v3/chestnut-boy-laptop-ready-standing-clean-v2.png) · `5636db4d33e6f88d10acc1244ae525d7f7ba81a8f2e33abb22ed8618e5d25f46` |
| 双手托住笔电 | `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-a59763ac-115f-43d4-b58c-0a87212ff786.png` · `a59763ac-115f-43d4-b58c-0a87212ff786` · `5d93a3a3368609e4652d958367afa2710f0f4119f2eac41ebc38d85360bad1f6` | 站立准备分支 v1 · `0df6eadb474bd7c5e68376bdb87311bc25d830417ce5c47c7958cb6a28ccf5dd` | [`../generated/human-adjustments-v3/chestnut-boy-laptop-held-v1.png`](../generated/human-adjustments-v3/chestnut-boy-laptop-held-v1.png) · `5d93a3a3368609e4652d958367afa2710f0f4119f2eac41ebc38d85360bad1f6` | [`../generated/human-adjustments-v3/chestnut-boy-laptop-held-clean-v2.png`](../generated/human-adjustments-v3/chestnut-boy-laptop-held-clean-v2.png) · `7b54e32efebeb938fd410a28283108aa7432067cbae68b839e0a858dff2e191a` |

注册语义允许准备姿势把双前臂移到躯干前方，双掌向上、手指自然微弯；此中间选项不含物品。独立持物选项要求人物双手托住打开的银色笔电底角、手指与边缘自然接触并有明确遮挡。该两步路径从默认站姿开始，每次只改一个字段。下颌/领口、左右袖口和鞋底的深色及暖浅合成局部检查通过；争议 ROI 在原图与 clean-v2 中最大 alpha 均为 3，黄色 RGB 只存在于近透明像素，不在实际合成中可见，因此未对其做额外裁切。

### 黄衣高丸子头女孩 / `human-bun-yellow@v1`

身份基准为 `dist/assets/looks/human-bun-yellow.png`，SHA-256 `f7a5f87daa25e1171f8c42db6ed8b668b695bf6f40cbed0aa31d5f8ca7052ccc`。

| 分支 | ImageGen 原始输出（路径 / 输出 ID / SHA-256） | 生成时精确参考 | 原样 v1 项目副本 | alpha-only `clean-v2` |
|---|---|---|---|---|
| 站立、准备托住相机 | `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-511a9d74-c0ed-4caa-98d5-3619411bc995.png` · `511a9d74-c0ed-4caa-98d5-3619411bc995` · `2a7868d359092ce0fa04f429029b918553bcee12a64d948721a5a85cea1cf153` | 原 Artwork 上述路径 · `f7a5f87daa25e1171f8c42db6ed8b668b695bf6f40cbed0aa31d5f8ca7052ccc` | [`../generated/human-adjustments-v3/bun-girl-camera-ready-standing-v1.png`](../generated/human-adjustments-v3/bun-girl-camera-ready-standing-v1.png) · `2a7868d359092ce0fa04f429029b918553bcee12a64d948721a5a85cea1cf153` | [`../generated/human-adjustments-v3/bun-girl-camera-ready-standing-clean-v2.png`](../generated/human-adjustments-v3/bun-girl-camera-ready-standing-clean-v2.png) · `8bf6ee1a4f30c22305d786a7758c81a4de849011267fea14f101dd5c8dc234fc` |
| 双手持相机 | `/Users/liuzhihang/.codex/generated_images/01a12762-8f4c-7403-9bd7-875a762a1a04/exec-91888cc9-b922-4935-a448-8936f17357c7.png` · `91888cc9-b922-4935-a448-8936f17357c7` · `8d6d27c3d19fbdc0afad75f77d6e1362420c60cdde9cc36c53ddf952349a6abb` | 站立准备分支 v1 · `2a7868d359092ce0fa04f429029b918553bcee12a64d948721a5a85cea1cf153` | [`../generated/human-adjustments-v3/bun-girl-camera-held-v1.png`](../generated/human-adjustments-v3/bun-girl-camera-held-v1.png) · `8d6d27c3d19fbdc0afad75f77d6e1362420c60cdde9cc36c53ddf952349a6abb` | [`../generated/human-adjustments-v3/bun-girl-camera-held-clean-v2.png`](../generated/human-adjustments-v3/bun-girl-camera-held-clean-v2.png) · `57f6fada3064d3289ca545faffe8f389dc367edd8393cc446fd2e3ed869bb13f` |

注册语义让女孩先放下挥手手臂、双手在胸前围出空的握持位置，该中间选项不含相机。持物分支要求右手握住相机机身快门附近，左手从下方承托镜头；不增加悬空肩带或分离部件。配方使用 `camera-ready-standing` → `camera-held` 单字段可达路径。root 已查看 8 配方深浅底联系图和 clean-v2 相机全尺寸暖底图，反馈手握机身及承托镜头自然；精确哈希 co-review 记录仍待登记。

## alpha 派生操作

2026-10-11 用户明确授权对本地候选做 alpha-only 清理并验证。四张 clean-v2 均由同名 v1 项目副本使用 `scripts/clean-candidate-alpha.py SOURCE NEW-OUTPUT --components 1` 单独生成，原文件保留。命令保留最大 alpha≥16 主连通域及 2px 柔边，不改 RGB、保留像素的 alpha 或画布尺寸。每张 sidecar 均记录授权、输入/输出 SHA 和统计：

| 候选 | sidecar | v1 → clean-v2 | 来源组件 → 保留 | 移除 alpha>0 像素 / alpha mass |
|---|---|---|---:|---:|
| 栗发男孩准备姿势 | [`../generated/human-adjustments-v3/chestnut-boy-laptop-ready-standing-clean-v2.alpha-cleanup.json`](../generated/human-adjustments-v3/chestnut-boy-laptop-ready-standing-clean-v2.alpha-cleanup.json) | `0df6…cf5dd` → `5636…25f46` | 1 → 1 | 5,558 / 6,363 |
| 栗发男孩持笔电 | [`../generated/human-adjustments-v3/chestnut-boy-laptop-held-clean-v2.alpha-cleanup.json`](../generated/human-adjustments-v3/chestnut-boy-laptop-held-clean-v2.alpha-cleanup.json) | `5d93…ad1f6` → `7b54…191a` | 1 → 1 | 5,561 / 6,567 |
| 黄衣女孩准备姿势 | [`../generated/human-adjustments-v3/bun-girl-camera-ready-standing-clean-v2.alpha-cleanup.json`](../generated/human-adjustments-v3/bun-girl-camera-ready-standing-clean-v2.alpha-cleanup.json) | `2a78…f153` → `8bf6…34fc` | 2 → 1 | 7,175 / 7,997 |
| 黄衣女孩持相机 | [`../generated/human-adjustments-v3/bun-girl-camera-held-clean-v2.alpha-cleanup.json`](../generated/human-adjustments-v3/bun-girl-camera-held-clean-v2.alpha-cleanup.json) | `8d6d…a6abb` → `57f6…bb13f` | 3 → 1 | 5,407 / 5,951 |

尺寸始终为 1254×1254；输出完整 alpha 统计登记在两个 v3 Template manifest。美术核对以 alpha 合成后的深色与暖浅色图为准，直接显示 RGBA 中的透明像素 RGB 不代表可见伪影。

## 工程报告与人工复核边界

| Template | 最终 manifest SHA-256 | 工程报告 SHA-256 | 深浅底全配方联系图 SHA-256 |
|---|---|---|---|
| `human-chestnut-boy-adjustments-v3` | `e3bc22df4e4fa166858583af13e421b1b9e4a8d91cde7454b4a6a9f744c7f087` | `31dc0fe394ffc8b9b758f14899e3d25af36671db8312f4c96a9ef060ac8ae470` | `f950c3729332badcbc3a4d49c685e9372fc929fdea40984a4f176e4bfee2e418` |
| `human-bun-girl-adjustments-v3` | `413d8a5f1923f3926e147908581968fd39aa12ebe12f3185b2d3787ee0dd3756` | `63c7de55622f8128c16ca7f7c35295d6c0eb4bc066b1792895dd5984f101c210` | `175c6783588da6cdc0a166139c0025fde9cb075bda949aedc5f1f2118ee27146` |

两份最终 manifest 均通过 `node scripts/verify-adjustment-candidate.mjs <manifest>`：8 个合法配方、12 个选项检查、40 个冲突检查，以及 1440×900、768×1024、390×844、320×700 四个浏览器视口。报告位于 `.artifacts/character-adjustments/human-{chestnut-boy,bun-girl}-adjustments-v3/report.json`。清理前的完整验证工件和联系图原样保存在 `.artifacts/character-adjustments/human-{chestnut-boy,bun-girl}-adjustments-v3-pre-clean-v2-snapshot/`；快照中的报告 SHA 分别为 `b457b36a8bcb19a841e38c84a2dd93a9e34ed400b897c52e1abd52b26f63c596` 与 `367169a9c11c1227cf146b97249c82486b5ccc60e8d433ca8a56e915047e9d4b`。

本记录不声称保存逐字 ImageGen prompt：当前可追溯数据保留了操作意图、准确参考路径/hash、工具输出 ID/路径/hash、项目原始副本与派生 hash；历史输入原文未持久化，不猜补。工程通过和内部深浅底审看均不等同于用户美术批准；模板候选仍不可公开发布，也不表示目标包已验证。
