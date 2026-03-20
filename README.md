# ClawCV — WonderCV 简历 AI Skills

> 在 AI 助手中完成简历分析、段落改写、岗位匹配、一页纸 PDF 导出和求职建议。

ClawCV 是 WonderCV 的求职与简历 skills 集合，适合在 Codex、Claude Code 等支持本地 skill 的环境中使用。这个仓库不再讲 MCP 配置，只保留 skill 的安装和直接使用方式。

- WonderCV / API Key: [wondercv.com/clawcv](http://wondercv.com/clawcv)

## Skills 一览

| Skill | 说明 | 触发词 |
|-------|------|--------|
| [resume-analysis](./resume-analysis/) | 整体诊断简历质量，输出评分、问题和改进建议 | “分析简历”“看看我的简历”“简历诊断” |
| [resume-rewrite](./resume-rewrite/) | 改写个人总结、工作经历、项目经历、技能和教育经历 | “优化简历”“改写工作经历”“润色项目经历” |
| [job-match](./job-match/) | 对照 JD 分析简历匹配度，找出差距和缺失关键词 | “岗位匹配”“看这个 JD 适不适合我”“对照职位改简历” |
| [pdf-export](./pdf-export/) | 整理成一页纸内容并导出 PDF | “导出 PDF”“生成一页纸简历”“最终版简历” |
| [ai-mentor](./ai-mentor/) | 提供求职策略、面试、薪资谈判和多版本简历建议 | “面试怎么准备”“职业规划”“薪资怎么谈” |
| [account-upgrade](./account-upgrade/) | 处理配额、绑定账号、升级权限、PDF 不可用等问题 | “怎么升级”“为什么不能导出 PDF”“绑定账号” |

## 快速开始

### 1. 获取 API Key

前往 [http://wondercv.com/clawcv](http://wondercv.com/clawcv) 获取 API Key，并按你的运行环境完成配置。

### 2. 安装 Skill

安装总入口 skill：

```bash
npx clawcv
```

或安装某一个子 skill：

```bash
npx clawcv resume-analysis
npx clawcv resume-rewrite
npx clawcv job-match
npx clawcv pdf-export
npx clawcv ai-mentor
npx clawcv account-upgrade
```

默认会安装到 `~/.codex/skills/`。

### 3. 直接使用

安装完成后，直接在对话里说：

```text
帮我分析这份简历
把我的工作经历改得更像产品经理
看一下这份 JD 和我的简历匹不匹配
帮我整理成一页纸并导出 PDF
给我一份面试准备建议
为什么我现在不能导出 PDF
```

## 典型工作流

### 简历优化

```text
1. /resume-analysis  → 看整体问题、得分和优先级
2. /resume-rewrite   → 按模块逐段优化
3. /pdf-export       → 整理成一页纸最终版
```

### JD 对照改写

```text
1. /job-match        → 找出匹配点、缺口和关键词
2. /resume-rewrite   → 针对性改写相关模块
3. /pdf-export       → 导出投递版本
```

### 求职辅导

```text
1. /resume-analysis  → 先判断当前简历状态
2. /ai-mentor        → 获取面试、规划、薪资或多版本建议
3. /resume-rewrite   → 把建议落到简历文本
```

### 权限处理

```text
1. /account-upgrade  → 查看当前限制和升级方式
2. /pdf-export       → 升级后再导出 PDF
```

## 权限说明

| 用户类型 | 简历分析 | 段落改写 | PDF 导出 | AI 导师 |
|----------|----------|----------|----------|---------|
| Guest | 3 次总量 | 2 次总量 | 不支持 | 简化版 |
| Pioneer | 20 次/天 | 10 次/天 | 10 次/天 | 完整版 |
| Paid | 不限 | 不限 | 不限 | 完整版 |

如果遇到配额不足、PDF 不可用、想绑定 WonderCV 账号等问题，使用 [account-upgrade](./account-upgrade/)。

## 相关链接

- [WonderCV / API Key](http://wondercv.com/clawcv)
- [总入口 Skill](./SKILL.md)

## License

MIT
