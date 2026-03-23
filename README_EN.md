# WonderClaw ClawCV — WonderCV Professional Career AI Skills 🦞✨

> **Bring resume analysis, rewriting, job matching, PDF export, and career advice directly into your AI conversations.**

[![Platform: OpenClaw](https://img.shields.io/badge/Platform-OpenClaw-orange.svg)](https://github.com/WonderClaw/clawcv)
[![Platform: Claude_Code](https://img.shields.io/badge/Platform-Claude_Code-6b4fbb.svg)](https://anthropic.com/claude)
[![Version: v1.0.0](https://img.shields.io/badge/Version-v1.0.0-green.svg)](https://github.com/WonderClaw/clawcv)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://opensource.org/licenses/MIT)
[![Language: Node.js_18+](https://img.shields.io/badge/Node.js-18%2B-blue.svg)](https://nodejs.org/)

---

**ClawCV** is a collection of professional career Skills from [WonderCV](https://wondercv.com). Specifically designed for the **OpenClaw** ecosystem, it injects WonderCV's years of deep expertise in **professional resume methodology** and its **1.6M-word industry corpus** into your AI workflows via agents like **Codex CLI** or **Claude Code**.

---

## 🚀 Skills at a Glance (The Sharp Edge)

| Skill | Function | Trigger Phrase Example |
|:---|:---|:---|
| **[resume-analysis]** | Diagnose overall resume quality, output scores, issues, and improvement suggestions | "Analyze my resume" / "Resume diagnosis" |
| **[resume-rewrite]** | Rewrite summary, work/project experiences, and skills | "Optimize my resume" / "Rewrite work experience" |
| **[job-match]** | Evaluate match against JD, identify gaps and missing keywords | "Job matching" / "Is this JD a good fit for me?" |
| **[pdf-export]** | Organize content and export as a professional PDF | "Export PDF" / "Generate one-page resume" |
| **[ai-mentor]** | Interview prep, career planning, salary negotiation, multi-version strategies | "How to prepare for an interview" / "Salary negotiation" |
| **[account-upgrade]** | Manage quotas, link accounts, upgrade permissions | "How to upgrade" / "Why can't I export PDF" |

---

## 📦 Getting Started

### Step 1: Get Your API Key

Register at [wondercv.com/clawcv](https://wondercv.com/clawcv) and obtain your API Key.

### Step 2: Install into OpenClaw Environment

**Install all skills (Recommended):**

```bash
npx clawcv
```

**Install a specific skill:**

```bash
npx clawcv resume-analysis   # Resume Diagnosis
npx clawcv resume-rewrite    # Resume Rewriting
# ... and so on
```

**Note**: Skills are installed to `~/.codex/skills/` by default. This is the **OpenClaw** standard path, automatically recognized by both **Claude Code** and **Codex CLI**.

### Step 3: Configure API Key

Inject the power of **WonderClaw** into your AI environment:

**For OpenClaw (Codex CLI):**

```bash
export WONDERCV_API_KEY=your_api_key_here
# Recommended: add to ~/.zshrc or ~/.bashrc
```

**For Claude Code:**

```bash
claude config set WONDERCV_API_KEY your_api_key_here
```

### Step 4: Start Chatting

Once configured, just describe your needs in natural language:

```
Analyze this resume for me
Rewrite my work experience to sound more like a Product Manager
Help me organize and export a one-page PDF
Give me some interview prep advice
```

---

## 🤖 Typical Workflows

### Resume Optimization (Diagnosis to Export)

```
1. /resume-analysis  → Identify overall issues, scores, and priorities
2. /resume-rewrite   → Optimize work/project sections module by module
3. /pdf-export       → Organize into a one-page layout and export final PDF
```

### JD Matching & Tailoring

```
1. /job-match        → Find matches, gaps, and missing keywords
2. /resume-rewrite   → Tailor relevant modules specifically for the JD
3. /pdf-export       → Export a version customized for that specific role
```

---

## 🌟 Access Tiers (Quotas)

Daily quotas by account type:

| Tier | Resume Analysis | Section Rewrite | PDF Export | AI Mentor |
|:---|:---|:---|:---|:---|
| **Guest** | 3 (Total) | 2 (Total) | Not Supported | Lite Version |
| **Pioneer** | **20 / Day** | **10 / Day** | **10 / Day** | **Full Version** |
| **Paid** | Unlimited | Unlimited | Unlimited | Full Version |

> If you encounter quota issues or limited PDF access, use `/account-upgrade` or visit [wondercv.com/clawcv](https://wondercv.com/clawcv).

---

## 🦞 Environment Requirements

| Environment | Support | Notes |
|:---|:---|:---|
| **OpenClaw (Codex CLI)** | ✅ Full | Primary environment for all Skills |
| **Claude Code** | ✅ Full | Auto-loads Skills from `~/.codex/skills/` |
| **Other AI Terminals** | ✅ Compatible | Compatible with any host supporting local Skill protocols |
| **Web-based AI** | ❌ No | Cannot access local disk-based Skills |

**Dependencies:**

- Node.js 18+ (required for `npx clawcv` installation)
- Valid WonderCV API Key

---

## ❓ FAQ

**Q: OpenClaw or Claude Code can't find Skills after installation?**

1. Ensure you have run `npx clawcv`.
2. Check if `~/.codex/skills/` contains the corresponding skill folders.
3. For Claude Code, run `claude clear` to force a rescan of local Skills.

**Q: Why does OpenClaw prioritize the ~/.codex/skills/ path?**

This is the **OpenClaw** ecosystem standard, ensuring different AI tools (like Codex CLI and Claude Code) can share a single local Skill library, avoiding duplicate installations.

**Q: Getting "API Key invalid or not set" error?**

Verify that `WONDERCV_API_KEY` is correctly exported or set via `claude config`. You can check by running `echo $WONDERCV_API_KEY`.

**Q: Can I install multiple Skills at once?**

Yes. `npx clawcv` installs the full suite of "WonderClaw" gear by default. Skills are modular and automatically dispatched by the AI based on your intent.

---

© 2026 [WonderClaw](https://github.com/WonderClaw) | WonderCV AI Lab - Making Career Wonderful
