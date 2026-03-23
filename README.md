# 超级龙虾 ClawCV — WonderCV 简历 AI Skills 🦞✨

> 把简历分析、改写、岗位匹配、PDF 导出和求职建议，直接带进你的 AI 对话里。

[![Platform: OpenClaw](https://img.shields.io/badge/Platform-OpenClaw-orange.svg)](https://github.com/WonderClaw/clawcv)
[![Platform: Claude_Code](https://img.shields.io/badge/Platform-Claude_Code-6b4fbb.svg)](https://anthropic.com/claude)
[![Version: v1.0.0](https://img.shields.io/badge/Version-v1.0.0-green.svg)](https://github.com/WonderClaw/clawcv)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://opensource.org/licenses/MIT)
[![Language: Node.js_18+](https://img.shields.io/badge/Node.js-18%2B-blue.svg)](https://nodejs.org/)

ClawCV 是 [超级简历 WonderCV](https://wondercv.com) 出品的求职 skill 集合，适用于 **Claude Code**、**Codex CLI** 等支持本地 skill 的 AI 环境。安装后，你可以直接在对话中说"帮我分析简历"，AI 会自动调用对应工作流完成任务。

---

## 🚀 Skills 一览

| Skill | 功能 | 触发词示例 |
|-------|------|-----------|
| [resume-analysis](./resume-analysis/SKILL.md) | 整体诊断简历质量，输出评分、问题和改进建议 | "分析简历" / "简历诊断" |
| [resume-rewrite](./resume-rewrite/SKILL.md) | 改写个人总结、工作/项目经历、技能 | "优化简历" / "改写工作经历" |
| [job-match](./job-match/SKILL.md) | 对照 JD 分析匹配度，找出差距和缺失关键词 | "岗位匹配" / "看这个 JD 适不适合我" |
| [pdf-export](./pdf-export/SKILL.md) | 整理成一页纸内容并导出 PDF | "导出 PDF" / "生成一页纸简历" |
| [ai-mentor](./ai-mentor/SKILL.md) | 面试准备、职业规划、薪资谈判、多版本策略 | "面试怎么准备" / "薪资怎么谈" |
| [account-upgrade](./account-upgrade/SKILL.md) | 处理配额、绑定账号、升级权限、PDF 不可用 | "怎么升级" / "为什么不能导出 PDF" |

---

## 📦 快速开始

### 第一步：获取 API Key

前往 [wondercv.com/clawcv](https://wondercv.com/clawcv) 注册并获取 API Key。

### 第二步：安装

```bash
npm install -g clawcv
```

> 需要 Node.js 18+

### 第三步：配置 API Key

安装完成后，在你的 AI 工具中配置 API Key：

**Claude Code：**

```bash
claude config set WONDERCV_API_KEY your_api_key_here
```

**Codex CLI：**

```bash
export WONDERCV_API_KEY=your_api_key_here
```

或者直接写入 `.env`：

```
WONDERCV_API_KEY=your_api_key_here
```

### 第四步：开始使用

配置完成后，直接在对话里说：

```
帮我分析这份简历
把我的工作经历改得更像产品经理
看一下这份 JD 和我的简历匹不匹配
帮我整理成一页纸并导出 PDF
给我一份面试准备建议
为什么我现在不能导出 PDF
```

---

## 🤖 典型工作流

### 简历优化流程

从诊断到导出投递版：

```
1. /resume-analysis  → 看整体问题、评分和改进优先级
2. /resume-rewrite   → 按模块逐段优化工作/项目经历
3. /pdf-export       → 整理成一页纸，导出最终版 PDF
```

### JD 对照改写

针对某个岗位定制简历：

```
1. /job-match        → 找出匹配点、缺口和缺失关键词
2. /resume-rewrite   → 针对性改写相关模块
3. /pdf-export       → 导出这份岗位专用版本
```

### 求职辅导

从求职策略到落地行动：

```
1. /resume-analysis  → 先判断当前简历状态
2. /ai-mentor        → 获取面试、规划、薪资或多版本建议
3. /resume-rewrite   → 把建议落实到简历文本
```

### 权限受限处理

```
1. /account-upgrade  → 查看当前限制、绑定账号或升级方式
2. /pdf-export       → 升级后继续导出 PDF
```

---

## 🌟 权限说明

不同账号类型的功能配额：

| 用户类型 | 简历分析 | 段落改写 | PDF 导出 | AI 导师 |
|----------|----------|----------|----------|---------|
| Guest（未登录）| 3 次总量 | 2 次总量 | 不支持 | 简化版 |
| Pioneer（免费注册）| 20 次/天 | 10 次/天 | 10 次/天 | 完整版 |
| Paid（付费）| 不限次数 | 不限次数 | 不限次数 | 完整版 |

> 遇到配额不足、PDF 不可用、无法绑定账号等问题，使用 `/account-upgrade` 或前往 [wondercv.com/clawcv](https://wondercv.com/clawcv)。

---

## 🦞 环境要求

| 环境 | 支持情况 |
|------|---------|
| Claude Code | ✅ 完整支持 |
| OpenAI Codex CLI | ✅ 完整支持 |
| 其他支持本地 skill 的 AI 工具 | ✅ 理论兼容 |
| ChatGPT 网页版 | ❌ 不支持本地 skill |

**运行依赖：**

- Node.js 18+（用于 `npx clawcv` 安装）
- 有效的 WonderCV API Key

---

## ❓ 常见问题

**Q：安装后找不到 skill？**

检查 `~/.codex/skills/` 目录是否存在对应 skill 文件夹。如果你使用 Claude Code，重启工具后会自动加载。

**Q：提示 API Key 无效？**

前往 [wondercv.com/clawcv](https://wondercv.com/clawcv) 确认 Key 是否过期或被重置。

**Q：为什么没有自动调用 skill，要手动输入 /xxx？**

不同 AI 工具的触发机制不同。直接在对话中描述需求（如"帮我分析简历"）通常会自动路由；或者明确输入 `/resume-analysis` 手动触发。

**Q：可以同时安装多个 skill 吗？**

可以。`npx clawcv` 会安装全部 skills，子命令安装则只安装对应那一个。多个 skill 不会冲突。

**Q：简历内容会被存储吗？**

ClawCV 在对话中处理简历内容，不会主动持久化存储。具体数据策略见 [WonderCV 隐私政策](https://wondercv.com)。

---

## 🔗 相关链接

- [WonderCV 官网](https://wondercv.com) — 在线简历制作工具
- [获取 API Key](https://wondercv.com/clawcv) — 注册账号并获取 Key
- [总入口 Skill 说明](./SKILL.md)

---

## License

MIT
