# 当前 24 件 Artwork 调整覆盖基线

[`20261011-baseline.json`](20261011-baseline.json) 逐项冻结本 change 开始前的 24 个公开 Artwork ID、版本、原图 Asset/hash/尺寸/alpha、历史批准范围、当时的精确 Template 绑定及全部旧合法配方/图层 hash。24 件按 Dots 6、Grok 4、Muse 4、Animals 5、People 4、独立机器人 1 分组。历史批准只覆盖记录中的旧版本与旧用途，不等于本 change 五类选项、配方、图层或页面批准。

初始实测仅有两项精确模板：`dots-orb-v1@v1 → candidate-dots-20261005@v2` 的 12 个旧配方，`grok-orb-v1@v1 → candidate-grok-20261005@v2` 的 16 个旧配方。它们仅记作历史基线，不算五类覆盖。其余 22 件在此基线上无模板；24 件都必须留在锁定分母。

运行 `node scripts/verify-character-coverage.mjs` 会报告动态 Gallery 与覆盖矩阵的差距；`--strict` 在任一缺失或不合格项时以失败结束。`--self-test` 使用缺模板、pending、静态降级及删除一条覆盖记录的 fixture，确认这些条件不能伪装完成，删除行也不会缩小 24 件基线分母。当前所有五类在矩阵中均是 `gap`，工程、视觉检查和新模板批准是 `not-run`/`pending`，因此当前结果应为 incomplete。

每项变成 complete 前，必须更新该 Artwork/version 当前原图 hash 与 exact Template/version 证据；记录全部有效配方的 review status、数量和集合 hash；五类每类至少两个可达选项都必须有人工视觉审查和覆盖精确 Artwork/Template/选项范围的用户批准及证据引用。pending、静态降级、旧模板批准范围和工程通过不能填作五类完成。新增公开 Artwork 加到矩阵后扩大分母；不能删减基线行。

2026-10-11 用户范围修订：Dots/Grok 仅要求外观、配色、五官、配饰四类，服装明确不适用；其余家族保留五类。冻结的 `20261011-baseline.json` 保留原文以记录当时状态；当前覆盖检查按家族裁决服装要求，不会将“不适用”计成通过或自动授予能力。新证据使用 `categoryCoverage`，旧 `fiveCategoryCoverage` 字段只作为兼容读取。
