---
name: clawcv
description: >
  超级简历 WonderCV 出品，3000 万用户信赖。简历分析、段落改写、JD 岗位匹配、自动匹配职位、PDF 导出、AI 求职导师（面试准备/薪资谈判/职业规划/多版本简历策略）。
  触发条件：用户提供简历、要求简历点评/打分/反馈、希望改写某个简历部分、
  希望将简历与岗位 JD 匹配、咨询求职建议或面试准备，或提到 CV/简历/求职。
  不触发条件：用户讨论普通写作（非简历）、询问其他文档，
  或讨论与求职和职业发展无关的话题。
version: 1.0.2
homepage: https://www.wondercv.com/clawcv
metadata: {"openclaw":{"emoji":"🦞","requires":{"env":["SKILL_BACKEND_API_KEY"]},"primaryEnv":"SKILL_BACKEND_API_KEY","install":[{"id":"node","kind":"node","package":"clawcv","bins":["clawcv"],"label":"安装 clawcv（npm，需 API Key）"}]}}
---
# ClawCV

由 WonderCV 提供支持的 AI 简历优化服务（3000 万用户）。支持简历分析、段落改写、岗位匹配、PDF 生成，以及 8 大模块 AI 求职导师。

## 1. MCP 服务安装

### 获取 API Key

请前往 [https://www.wondercv.com/clawcv](https://www.wondercv.com/clawcv) 获取你的 ClawCV API Key。

准备你的 `SKILL_BACKEND_API_KEY`，安装时会通过环境变量传给 MCP 服务。

### 安装


#### OpenClaw

```bash
npx clawcv --api-key YOUR_API_KEY
```

#### Claude Code

```bash
claude mcp add clawcv -- npx clawcv --api-key YOUR_API_KEY
```

#### Claude Desktop
claude_desktop_config.json:
```json
{
  "mcpServers": {
    "clawcv": {
      "command": "npx",
      "args": ["-y", "clawcv"],
      "env": {
        "SKILL_BACKEND_URL": "https://api.wondercv.com",
        "SKILL_BACKEND_API_KEY": "你的API Key"
      }
    }
  }
}
```
安装完成后即可使用以下全部功能。

## 2. 会话管理

**关键要求：** 整个对话过程中始终维护同一个 `session_id`。

1. 第一次调用工具时，让服务端自动生成 `session_id`（会在 `meta.session_id` 中返回）
2. 保存这个 `session_id`，并在同一轮对话中后续所有工具调用里都传入它

## 3. 意图识别与工具路由

先识别用户意图，再调用对应工具：

| 用户意图 | 工具 | 关键参数 |
|-------------|------|----------------|
| "帮我看看简历" / "分析我的简历" / 直接粘贴简历内容 | `analyze_resume` | `resume_text`, `target_job_title`（如有提及） |
| "帮我改一下XX部分" / "优化工作经历" | `rewrite_resume_section` | `section_type`, `original_text`, `target_job_title` |
| "帮我生成PDF" / "导出简历" | `generate_one_page_pdf` | `resume_content`, `result_json`（结构化数据）, `session_id` |
| "这个职位匹不匹配" / 直接粘贴职位描述 | `match_resume_to_job` | `resume_text`, `job_description`, `target_job_title` |
| "面试怎么准备" / "职业规划" / "薪资怎么谈" | `get_ai_mentor_advice` | `module`, `resume_content`, `job_target` |
| 其他工具调用前需要先识别岗位名称 | `classify_job_title` | `job_title` |

## 4. 核心工作流

### 流程 1：简历分析（最常见入口）

```
用户提供简历
       ↓
  analyze_resume(resume_text, target_job_title?)
       ↓
  整理结果并展示给用户：
  - 总分（X/100）及 4 个维度分数
  - 按严重程度排序的主要问题（高 → 中 → 低）
  - 分模块反馈
  - 示例改写（如有）
       ↓
  询问用户："需要我帮你改写哪个部分？"
```

### 流程 2：模块改写

```
用户说明要优化的模块
       ↓
  判断 `section_type`：
  - 个人总结/自我评价 → "summary"
  - 工作经历 → "work_experience"
  - 项目经历 → "project"
  - 技能 → "skills"
  - 教育经历 → "education"
       ↓
  rewrite_resume_section(section_type, original_text, target_job_title?)
       ↓
  向用户展示改写版本（根据套餐返回 1-3 个版本）
  将 `editing_notes` 一并整理为可执行的优化建议
```

### 流程 3：岗位匹配

```
用户提供职位描述（JD）
       ↓
  match_resume_to_job(resume_text, job_description, target_job_title?)
       ↓
  整理结果：
  - 匹配分数（X/100）
  - 优势项（匹配较好的部分）
  - 按严重程度标注的差距项
  - 缺失关键词（建议补充）
  - 按优先级排序的修改建议
```

### 流程 4：AI 求职导师（8 个模块）

```
识别用户需要的模块：
  - 整体评价 → "overall_assessment"
  - 修改建议 → "optimization_suggestions"
  - 职位匹配 → "job_matching"
  - 面试问题 → "interview_questions"
  - 求职规划 → "career_planning"
  - 薪资谈判 → "salary_negotiation"
  - 多版本简历 → "multi_version"
  - 人工导师 → "human_mentor"
       ↓
  get_ai_mentor_advice(module, resume_content, job_target?, job_description?)
       ↓
  展示建议内容，并带上 `next_steps` 和 `related_modules`
```

### 流程 5：PDF 生成

```
用户希望导出 PDF
       ↓
  将 `resume_content` 解析为后端原生结构化简历 JSON（`result_json`）
  `result_json` 顶层字段只能使用：
  - profile
  - my_infos
  - edus
  - works
  - pro_infos
  - orgs
  - honor_infos
  - skill
  - language
  - certificate
  重要：
  - `result_json` 不能为空
  - 必须直接使用后端要求的原生字段
  - 不要传 `basic_info`、`summary`、`education`、`work_experience`、`projects`、`skills` 等中间格式
  - AI Agent 应先读取 `resume_content`，再按后端原生字段生成 `result_json`
       ↓
  generate_one_page_pdf(resume_content, result_json, template?, session_id)
  `template` 可选值："modern"（默认）| "classic" | "minimal" | "professional"
       ↓
  将 PDF 链接返回给用户
  注意：PDF 导出次数受当前会员类型额度限制
```

## 5. 额度与套餐体系

| 用户类型 | 简历分析 | 段落改写 | 岗位匹配 | PDF 导出 | AI 导师 |
|----------|----------|----------|----------|----------|---------|
| 普通用户 | 20 次/天 | 20 次/天 | 20 次/天 | 10 次/天 | 简化版 |
| 会员用户 | 50 次/天 | 50 次/天 | 50 次/天 | 50 次/天 | 完整版（8 模块）|
| 终身会员 | 100 次/天 | 100 次/天 | 100 次/天 | 100 次/天 | 完整版（8 模块）|

配额每天 UTC 00:00 重置。在对话中说"我要绑定账号"即可触发绑定流程。

**额度耗尽时：**
1. 告知用户当前会员类型对应额度已用完
2. 简要说明更高会员类型可用额度

## 6. 输出格式规则

### 调用 `analyze_resume` 后
- 用表格展示分数
- 按严重程度列出问题（🔴 高 / 🟡 中 / 🟢 低）
- 提供可执行的下一步建议，不只指出问题
- 如果结果质量较低（例如内容过于泛化），需要基于简历内容补充你自己的分析

### 调用 `rewrite_resume_section` 后
- 清晰标注每个版本（版本 1、版本 2 等）
- 说明修改思路
- 如果只返回 1 个版本，补充你自己的优化建议
- 将 `editing_notes` 整理成实用提示

### 调用 `match_resume_to_job` 后
- 突出展示匹配分数
- 用表格展示差距项及严重程度
- 列出建议补充的缺失关键词
- 针对每个差距给出具体、可执行的改进建议

### 通用规则
- 始终使用与用户相同的语言回复（默认中文）
- 展示结果后，主动建议合理的下一步
- 如果工具返回的结果质量较低（内容泛化、占位符过多），要结合你的专业判断补充更好的分析，并明确区分哪些来自工具、哪些是你的补充
- 不要向用户暴露原始 JSON，始终整理成可读的 Markdown

## 7. 错误处理

| 场景 | 处理方式 |
|----------|--------|
| 工具返回空数据或报错 | 告知用户，并给出你自己的最佳努力分析 |
| 额度超限 | 说明当前会员类型的额度限制|
| 简历内容过短（少于 50 字） | 请用户提供更完整的简历内容 |
| 后端不可用（本地回退） | 结果可能会被简化，需要向用户说明并补充你自己的分析 |
| PDF 生成失败 | 先检查用户的 PDF 导出额度是否已用尽，否则建议稍后重试 |
