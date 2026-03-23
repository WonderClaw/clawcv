---
name: clawcv
description: >
  超级简历 WonderCV 出品，3000 万用户信赖。简历分析、段落改写、JD 岗位匹配、自动匹配职位、PDF 导出、AI 求职导师（面试准备/薪资谈判/职业规划/多版本简历策略）。
  TRIGGER when: user shares a resume, asks for resume review/scoring/feedback, wants a section rewritten,
  asks to match resume to a job posting, wants career advice or interview prep, mentions CV/简历/求职.
  DO NOT TRIGGER when: user discusses general writing (non-resume), asks about other documents,
  or discusses topics unrelated to job seeking and career development.
version: 1.0.0
homepage: https://github.com/WonderClaw/clawcv
metadata: {"openclaw":{"emoji":"🦞","requires":{"env":["WONDERCV_API_KEY"]},"primaryEnv":"WONDERCV_API_KEY","os":["darwin","linux","win32"],"install":[{"id":"node","kind":"node","package":"clawcv","bins":["clawcv"],"label":"Install clawcv (npm)"}]}}
---

# ClawCV — WonderCV 简历与求职总入口

在对话中处理完整的简历优化链路：诊断简历、改写内容、对照岗位、导出投递版、补充求职建议。

## 什么时候使用

- 用户提交整份简历，希望获得整体评价
- 用户想优化某一段经历或整份简历
- 用户给出 JD，希望判断匹配度
- 用户要一页纸版本或 PDF
- 用户需要面试、职业规划、薪资谈判建议
- 用户遇到额度限制、账号绑定、升级权限问题

## 子 Skill 路由

| 场景 | 使用哪个 Skill |
|------|----------------|
| 整份简历诊断、评分、问题排查 | `/resume-analysis` |
| 改写个人总结、工作经历、项目经历、技能、教育经历 | `/resume-rewrite` |
| 简历和 JD 的匹配分析 | `/job-match` |
| 整理成一页纸并导出 PDF | `/pdf-export` |
| 面试、规划、薪资、多版本策略建议 | `/ai-mentor` |
| 配额、绑定账号、升级、PDF 权限问题 | `/account-upgrade` |

## 使用规则

1. 先判断用户最直接的目标，不要一次进入多个工作流。
2. 如果用户没有给完整简历，只收集完成当前任务所需的最少信息。
3. 任何改写都要保留事实，不编造项目、数字、职责和头衔。
4. 如果用户提供了目标岗位，优先按目标岗位来分析和改写。
5. 输出结果后，总是给出最自然的下一步建议。

## 共享约束

- 与用户保持同一种语言，默认中文。
- 简历文本明显不完整时，先索要补充内容再继续。
- 量化表达只能基于用户提供的数据；缺数据时提出补充建议，不要自行虚构。
- 如果用户目标是“导出 PDF”，但当前内容还不够完整，先补齐结构再导出。

## 直接使用

### 1. 获取 API Key

前往 [http://wondercv.com/clawcv](http://wondercv.com/clawcv) 获取 API Key，并在你的运行环境中完成配置。

### 2. 安装 Skill

```bash
npx clawcv
```

### 3. 常见说法

```text
帮我看看这份简历
把这段项目经历改得更有成果感
这个 JD 和我的背景匹配吗
帮我导出一页纸 PDF
给我一份面试准备建议
为什么我不能导出 PDF
```

## 推荐工作流

### 简历诊断到投递

```text
/resume-analysis → /resume-rewrite → /pdf-export
```

### JD 对照优化

```text
/job-match → /resume-rewrite → /pdf-export
```

### 求职策略补充

```text
/resume-analysis → /ai-mentor → /resume-rewrite
```

## 权限与升级

ClawCV 通过 WonderCV API Key 鉴权，功能额度按 API Key 对应的超级简历会员类型生效：

| 会员类型 | 简历分析 | 改写 | PDF |
|----------|----------|------|-----|
| 普通用户 | 20 次 | 20 次 | 10 次 |
| 月度会员 / 年度会员 | 50 次 | 50 次 | 50 次 |
| 终身会员 | 100 次 | 100 次 | 100 次 |

当用户问“为什么不能导出 PDF”“怎么升级”“怎么绑定账号”时，切到 `/account-upgrade`。
