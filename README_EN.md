# WonderClaw ClawCV — WonderCV Resume AI Skills 🦞✨

[简体中文](./README.md) | [English](./README_EN.md)

> Bring resume analysis, rewriting, job matching, PDF export, and career advice directly into your AI conversations.

[![Platform: OpenClaw](https://img.shields.io/badge/Platform-OpenClaw-orange.svg)](https://github.com/WonderClaw/clawcv)
[![Platform: Claude_Code](https://img.shields.io/badge/Platform-Claude_Code-6b4fbb.svg)](https://anthropic.com/claude)
[![Version: v1.0.0](https://img.shields.io/badge/Version-v1.0.0-green.svg)](https://github.com/WonderClaw/clawcv)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://opensource.org/licenses/MIT)
[![Language: Node.js_18+](https://img.shields.io/badge/Node.js-18%2B-blue.svg)](https://nodejs.org/)

ClawCV is a collection of career AI skills from [WonderCV](https://wondercv.com), designed for AI environments that support local skills such as **Claude Code** and **Codex CLI**. Once installed, simply say "analyze my resume" in a conversation, and the AI will automatically invoke the corresponding workflow.

---

## 🚀 Skills Overview

| Skill | Function | Trigger Phrase Example |
|-------|----------|----------------------|
| [resume-analysis](./resume-analysis/SKILL.md) | Diagnose overall resume quality, output scores, issues, and suggestions | "Analyze resume" / "Resume diagnosis" |
| [resume-rewrite](./resume-rewrite/SKILL.md) | Rewrite summary, work/project experience, and skills | "Optimize resume" / "Rewrite work experience" |
| [job-match](./job-match/SKILL.md) | Evaluate match against JD, identify gaps and missing keywords | "Job matching" / "Is this JD a good fit?" |
| [pdf-export](./pdf-export/SKILL.md) | Organize into one-page format and export PDF | "Export PDF" / "Generate one-page resume" |
| [ai-mentor](./ai-mentor/SKILL.md) | Interview prep, career planning, salary negotiation, multi-version strategies | "How to prepare for interview" / "Salary tips" |
| [account-upgrade](./account-upgrade/SKILL.md) | Manage quotas, link accounts, upgrade permissions, PDF unavailable | "How to upgrade" / "Why can't I export PDF" |

---

## 📦 Quick Start

### Step 1: Get Your API Key

Register at [wondercv.com/clawcv](https://wondercv.com/clawcv) and obtain your API Key.

### Step 2: Install

```bash
npm install -g clawcv
```

> Requires Node.js 18+

### Step 3: Configure API Key

After installation, configure the API Key in your AI tool:

**Claude Code:**

```bash
claude config set WONDERCV_API_KEY your_api_key_here
```

**Codex CLI:**

```bash
export WONDERCV_API_KEY=your_api_key_here
```

Or write directly to `.env`:

```
WONDERCV_API_KEY=your_api_key_here
```

### Step 4: Start Using

Once configured, just say in your conversation:

```
Analyze this resume
Rewrite my work experience to sound more like a Product Manager
Check if this JD matches my resume
Help me organize and export a one-page PDF
Give me some interview prep advice
Why can't I export PDF right now
```

---

## 🤖 Typical Workflows

### Resume Optimization

From diagnosis to export-ready version:

```
1. /resume-analysis  → Identify issues, scores, and improvement priorities
2. /resume-rewrite   → Optimize work/project sections module by module
3. /pdf-export       → Organize into one-page layout, export final PDF
```

### JD-Targeted Tailoring

Customize your resume for a specific role:

```
1. /job-match        → Find matches, gaps, and missing keywords
2. /resume-rewrite   → Tailor relevant modules for the JD
3. /pdf-export       → Export a version customized for that role
```

### Career Coaching

From strategy to action:

```
1. /resume-analysis  → Assess current resume state
2. /ai-mentor        → Get interview, planning, salary, or multi-version advice
3. /resume-rewrite   → Apply suggestions to resume text
```

### Access Issues

```
1. /account-upgrade  → Check current limits, link account, or upgrade
2. /pdf-export       → Continue exporting after upgrade
```

---

## 🌟 Access Tiers

Quotas by account type:

| Tier | Resume Analysis | Section Rewrite | PDF Export | AI Mentor |
|------|----------------|-----------------|------------|-----------|
| Guest (Not logged in) | 3 total | 2 total | Not supported | Lite |
| Pioneer (Free registration) | 20/day | 10/day | 10/day | Full |
| Paid | Unlimited | Unlimited | Unlimited | Full |

> For quota issues, PDF unavailable, or account linking problems, use `/account-upgrade` or visit [wondercv.com/clawcv](https://wondercv.com/clawcv).

---

## 🦞 Environment Requirements

| Environment | Support |
|-------------|---------|
| Claude Code | ✅ Full support |
| OpenAI Codex CLI | ✅ Full support |
| Other AI tools with local skill support | ✅ Theoretically compatible |
| ChatGPT Web | ❌ No local skill support |

**Dependencies:**

- Node.js 18+ (for `npx clawcv` installation)
- Valid WonderCV API Key

---

## ❓ FAQ

**Q: Can't find skills after installation?**

Check if `~/.codex/skills/` contains the corresponding skill folders. If using Claude Code, restart the tool to auto-reload.

**Q: API Key invalid?**

Visit [wondercv.com/clawcv](https://wondercv.com/clawcv) to confirm if the Key has expired or been reset.

**Q: Why isn't the skill auto-invoked? Do I have to type /xxx manually?**

Different AI tools have different trigger mechanisms. Describing your needs in natural language (e.g., "analyze my resume") usually auto-routes; or explicitly type `/resume-analysis` to trigger manually.

**Q: Can I install multiple skills at once?**

Yes. `npx clawcv` installs all skills. Sub-commands install only the specified one. Multiple skills do not conflict.

**Q: Will my resume content be stored?**

ClawCV processes resume content within the conversation and does not actively persist it. See [WonderCV Privacy Policy](https://wondercv.com) for details.

---

## 🔗 Links

- [WonderCV Website](https://wondercv.com) — Online resume builder
- [Get API Key](https://wondercv.com/clawcv) — Register and obtain your Key
- [Main Skill Entry](./SKILL.md)

---

## License

MIT
