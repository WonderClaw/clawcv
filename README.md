# 超级龙虾 ClawCV — WonderCV 专业求职 AI Skills 🦞✨

> **把简历分析、改写、岗位匹配、PDF 导出和求职建议，直接带进你的 AI 对话里。**

[![Platform: OpenClaw](https://img.shields.io/badge/Platform-OpenClaw-orange.svg)](https://github.com/WonderClaw/clawcv)
[![Platform: Claude_Code](https://img.shields.io/badge/Platform-Claude_Code-6b4fbb.svg)](https://anthropic.com/claude)
[![Version: v1.0.0](https://img.shields.io/badge/Version-v1.0.0-green.svg)](https://github.com/WonderClaw/clawcv)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://opensource.org/licenses/MIT)
[![Language: Node.js_18+](https://img.shields.io/badge/Node.js-18%2B-blue.svg)](https://nodejs.org/)

---

**ClawCV** 是 [超级简历 WonderCV](https://wondercv.com) 出品的专业求职 Skills 集合。它是专为 **OpenClaw** 生态设计的扩展组件，通过 **Codex CLI** 或 **Claude Code** 等 AI 终端，将 WonderCV 沉淀多年的**百万级行业语料库**与 **HR 专业求职逻辑**，以即插即用的 Skill 形式注入到你的 AI 工作流中。

---

## 🚀 Skills 一览 (The Sharp Edge)

| Skill | 功能 | 触发词示例 |
|:---|:---|:---|
| **[resume-analysis]** | 整体诊断简历质量，输出评分、问题和改进建议 | "分析简历" / "简历诊断" |
| **[resume-rewrite]** | 改写个人总结、工作/项目经历、技能 | "优化简历" / "改写工作经历" |
| **[job-match]** | 对照 JD 分析匹配度，找出差距和缺失关键词 | "岗位匹配" / "看这个 JD 适不适合我" |
| **[pdf-export]** | 整理成一页纸内容并导出 PDF | "导出 PDF" / "生成一页纸简历" |
| **[ai-mentor]** | 面试准备、职业规划、薪资谈判、多版本策略 | "面试怎么准备" / "薪资怎么谈" |
| **[account-upgrade]** | 处理配额、绑定账号、升级权限、PDF 不可用 | "怎么升级" / "为什么不能导出 PDF" |

---

## 📦 快速开始 (Getting Started)

### 第一步：获取 API Key

前往 [wondercv.com/clawcv](https://wondercv.com/clawcv) 注册并获取 API Key。

### 第二步：安装到 OpenClaw 环境

**安装全部 skills（推荐）：**

```bash
npx clawcv
```

**只安装某一个 skill：**

```bash
npx clawcv resume-analysis   # 简历分析
npx clawcv resume-rewrite    # 简历改写
# ... 其他同理
```

**说明**：Skills 默认安装到 `~/.codex/skills/`。这是 **OpenClaw** 的标准路径，**Claude Code** 和 **Codex CLI** 均会自动从该路径加载 Skills。

### 第三步：配置 API Key

在你的 AI 环境中注入 **超级龙虾** 的能量：

**在 OpenClaw (Codex CLI) 中配置：**

```bash
export WONDERCV_API_KEY=your_api_key_here
# 建议写入 ~/.zshrc 或 ~/.bashrc 以永久生效
```

**在 Claude Code 中配置：**

```bash
claude config set WONDERCV_API_KEY your_api_key_here
```

### 第四步：开始对话

配置完成后，直接在对话里描述需求：

```
帮我分析这份简历
把我的工作经历改得更像产品经理
帮我整理成一页纸并导出 PDF
给我一份面试准备建议
```

---

## 🤖 典型工作流

### 简历优化流程 (Diagnosis to Export)

```
1. /resume-analysis  → 看整体问题、评分和改进优先级
2. /resume-rewrite   → 按模块逐段优化工作/项目经历
3. /pdf-export       → 整理成一页纸，导出最终版 PDF
```

### JD 对照改写 (Customization)

```
1. /job-match        → 找出匹配点、缺口和缺失关键词
2. /resume-rewrite   → 针对性改写相关模块
3. /pdf-export       → 导出针对该岗位的专用版本
```

---

## 🌟 权限说明 (Access Tiers)

不同账号类型的功能配额：

| 用户类型 | 简历分析 | 段落改写 | PDF 导出 | AI 导师 |
|:---|:---|:---|:---|:---|
| **Guest（未登录）** | 3 次总量 | 2 次总量 | 不支持 | 简化版 |
| **Pioneer（免费注册）** | **20 次/天** | **10 次/天** | **10 次/天** | **完整版** |
| **Paid（付费）** | 不限次数 | 不限次数 | 不限次数 | 完整版 |

> 遇到配额不足、PDF 不可用、无法绑定账号等问题，使用 `/account-upgrade` 或前往 [wondercv.com/clawcv](https://wondercv.com/clawcv)。

---

## 🦞 环境要求与兼容性

| 环境 | 支持情况 | 说明 |
|:---|:---|:---|
| **OpenClaw (Codex CLI)** | ✅ 完美支持 | 核心运行环境，支持全量 Skill |
| **Claude Code** | ✅ 完美支持 | 自动加载 `~/.codex/skills/` 下的 Skills |
| **其他 AI 终端** | ✅ 理论兼容 | 只要支持加载本地本地 Skill 协议即可 |
| **网页版 AI** | ❌ 不支持 | 网页环境无法访问本地磁盘中的 Skills |

---

## ❓ 常见问题 (FAQ)

**Q：安装后 OpenClaw 或 Claude Code 找不到 Skill？**

1. 确认已运行 `npx clawcv`。
2. 检查本地路径 `~/.codex/skills/` 目录下是否有对应的文件夹。
3. 如果是 Claude Code，请执行 `claude clear` 重启工具以强制重新扫描 Skills。

**Q：为什么 OpenClaw 优先支持 ~/.codex/skills/ 路径？**

这是 **OpenClaw** 生态的标准规范，旨在让不同 AI 工具（如 Codex CLI 和 Claude Code）能够共享同一套本地 Skills 库，避免重复安装和配置。

**Q：提示 API Key 无效或未设置？**

确保环境变量 `WONDERCV_API_KEY` 已正确导出，或通过 `claude config` 完成设置。你可以通过 `echo $WONDERCV_API_KEY` 验证环境变量是否生效。

**Q：可以同时安装多个 Skill 吗？**

可以。`npx clawcv` 默认安装全套「超级龙虾」装备，多个 Skill 模块在本地互不干扰，由 AI 根据你的意图自动调度。

---

© 2026 [WonderClaw](https://github.com/WonderClaw) | 超级简历 AI 实验室，让求职直呼 Wonderful
