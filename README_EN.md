# ClawCV — WonderCV 简历 AI Skill

> 把简历分析、改写、岗位匹配、PDF 导出和求职建议，直接带进你的 AI 对话里。


ClawCV 是 [超级简历 WonderCV](https://wondercv.com) 出品的 AI 求职 skill。安装配置后，你可以直接在 AI 对话里说"帮我分析简历"，AI 会自动调用对应能力处理任务，无需手动操作任何工具。

---

## 功能一览

| 能力 | 说明 | 触发说法示例 |
|------|------|------------|
| **简历分析** | 5 维度评分（完整性/清晰度/匹配度/成果感/结构），输出问题优先级和改进建议 | "帮我看看这份简历" / "简历哪里有问题" |
| **段落改写** | 改写个人总结、工作经历、项目经历、技能、教育经历，提供 1-3 个版本 | "优化我的工作经历" / "改写这段项目经历" |
| **岗位匹配** | 对照 JD 输出匹配分、优势、差距、缺失关键词 | "看看我和这个岗位匹不匹配" |
| **一页纸 PDF** | 整理并导出投递版 PDF，支持 4 种模板风格 | "导出 PDF" / "生成一页纸简历" |
| **AI 导师** | 8 大模块：整体评价、修改建议、职位匹配、面试问题、求职规划、薪资谈判、多版本简历、人工导师 | "面试怎么准备" / "薪资怎么谈" |
| **账号绑定** | 绑定 WonderCV 账号，升级会员解锁更多配额和完整功能 | "怎么升级" / "我要绑定账号" |

---

## Installation and Setup

### Step 1: Get an API key

Get your `SKILL_BACKEND_API_KEY` from WonderCV. You will need it for the setup below.

### Step 2: Install

#### OpenClaw

```bash
npx clawcv --api-key YOUR_API_KEY
```

#### Claude Code

```bash
claude mcp add clawcv -- npx clawcv --api-key YOUR_API_KEY
```

### Step 3: Add ClawCV to your AI tool

If you are configuring MCP manually, use the `npx` setup below. It does not require a global install.

**Claude Code** (`~/.claude/settings.json`):

```json
{
  "mcpServers": {
    "clawcv": {
      "command": "npx",
      "args": ["-y", "clawcv"],
      "env": {
        "SKILL_BACKEND_URL": "https://api.wondercv.com",
        "SKILL_BACKEND_API_KEY": "Your API Key"
      }
    }
  }
}
```

**Cursor** (Settings → MCP, or `~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "clawcv": {
      "command": "npx",
      "args": ["-y", "clawcv"],
      "env": {
        "SKILL_BACKEND_URL": "https://api.wondercv.com",
        "SKILL_BACKEND_API_KEY": "Your API Key"
      }
    }
  }
}
```

After saving the config, fully restart your AI tool. ClawCV will appear in the available tools list automatically.

### Step 4: Start using it

Just describe what you want in chat, and the AI will call ClawCV automatically:

```
Analyze this resume for me
Rewrite my work experience for a product manager role
How well does this job description match my resume?
Turn this into a one-page PDF resume
Give me interview prep suggestions
```

---

## 权限说明

| 用户类型 | 简历分析 | 段落改写 | 岗位匹配 | PDF 导出 | AI 导师 |
|----------|----------|----------|----------|----------|---------|
| 普通用户 | 20 次/天 | 20 次/天 | 20 次/天 | 10 次/天 | 简化版 |
| 会员用户 | 50 次/天 | 50 次/天 | 50 次/天 | 50 次/天 | 完整版（8 模块）|
| 终身会员 | 100 次/天 | 100 次/天 | 100 次/天 | 100 次/天 | 完整版（8 模块）|

配额每天 UTC 00:00 重置。在对话中说"我要绑定账号"即可触发绑定流程。

---

## 典型工作流

### 简历优化

```
1. 分析简历        → 看整体评分和高优先级问题
2. 改写关键段落    → 按模块逐段优化
3. 导出 PDF        → 整理成一页纸投递版
```

### JD 对照改写

```
1. 岗位匹配分析    → 找出差距和缺失关键词
2. 改写相关段落    → 针对性补入关键词和成果
3. 导出 PDF        → 导出这个岗位的专用版本
```

### 求职辅导

```
1. 简历分析        → 判断当前简历状态
2. AI 导师建议     → 面试准备 / 薪资谈判 / 职业规划
3. 改写落地        → 把建议落实到简历文本
```

---

## FAQ

**Q：安装后 AI 没有自动调用 ClawCV，怎么办？**

检查配置文件格式是否正确，然后完全重启 AI 工具（不是刷新，是退出重开）。也可以在对话中直接说"用 ClawCV 帮我分析简历"明确触发。

**Q：为什么 PDF 导出次数较少？**

普通用户每天可导出 10 次 PDF，会员用户和终身会员每天可导出 50-100 次。在对话中说"我要升级"了解升级方式。

**Q：session_id 是什么，需要我管理吗？**

不需要。AI 会自动维护 session_id，你只需要正常对话。session_id 用于跟踪配额和会话历史，24 小时后自动过期。

**Q：配额用完了怎么办？**

在对话中说"我要绑定账号"或"我想升级"，完成 WonderCV 账号绑定即可提升配额。各级别配额请参考上文[权限说明](#权限说明)。

**Q：改写结果只有 1 个版本，正常吗？**

普通用户每次只返回 1 个版本，会员用户和终身会员最多返回 3 个版本。

**Q：简历内容会被存储吗？**

会话数据（包括配额使用情况）会持久化到 WonderCV 后端以支持跨设备使用。简历文本在处理后不会被长期存储。

**Q：支持英文简历吗？**

支持。ClawCV 默认以用户输入语言回复，英文简历直接粘贴即可。

**Q：`SKILL_BACKEND_URL` 这个环境变量需要设置吗？**

不需要。默认连接 `https://api.wondercv.com`，开箱即用。仅在私有化部署或调试时才需要修改。

---

## 相关链接

- [WonderCV 官网](https://wondercv.com) — 在线简历制作工具
- [获取账号 / 升级会员](https://wondercv.com/clawcv)
---

## License

MIT
