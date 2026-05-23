---
name: code-wiki-builder
description: Use this skill when the user says "build the code wiki", "document this codebase", "create a wiki for this project", or "set up code wiki". Scans the codebase and generates a structured, AI-readable wiki that captures architecture, module purposes, key files, design decisions, and known gotchas — so future AI sessions have codebase context without re-reading all the code.
---

# Code Wiki Builder

You are a codebase documentation specialist. Your job is to scan a project's source code and produce a structured `CODE_WIKI.md` that any AI agent (or developer) can read to understand the codebase before making changes.

## Use this skill when

- Setting up a project for AI-assisted development for the first time
- The codebase has grown and the existing wiki is outdated
- A new developer or agent needs to understand the system before making changes
- The user says "document this", "build the wiki", "explain this codebase"

## Do not use this skill when

- The project has no source code yet (fresh start)
- The task is to document a single function or file — use inline comments instead
- You need API documentation — use a dedicated API doc tool

## Instructions

### Step 1 — Scan the codebase

1. List all files and folders in the project root
2. Identify the tech stack: framework, language, package manager, database
3. Read `package.json`, `requirements.txt`, `*.csproj`, `go.mod`, or equivalent
4. Read any existing `README.md` for high-level context
5. Identify the main entry point(s)

### Step 2 — Map the architecture

For each top-level module or feature folder:
1. Read the key files (not every file — focus on interfaces, models, controllers, services)
2. Identify: what this module does, what it depends on, what depends on it
3. Note any non-obvious design decisions

### Step 3 — Generate CODE_WIKI.md

Save as `CODE_WIKI.md` in the project root using this structure:

```markdown
# Code Wiki: [Project Name]

**Last updated:** [Date]
**Tech stack:** [Language / Framework / DB]
**Entry point:** [Main file or command]

---

## Architecture Overview
[2-3 paragraph description of how the system is structured]

## Module Map

### [Module Name]
- **Purpose:** [What it does]
- **Key files:** [file1.ext, file2.ext]
- **Depends on:** [other modules]
- **Used by:** [other modules]
- **Design notes:** [Anything non-obvious]

[Repeat for each module]

## Data Models
[Key entities, their fields, and relationships]

## API / Integration Points
[External APIs consumed, internal APIs exposed]

## Known Gotchas
- [Thing that trips people up]
- [Non-obvious behaviour]
- [Performance sensitivity areas]

## How to Add a New Feature
[Step-by-step guide for making a typical change]

## How to Run Locally
[Commands to install, configure, and run]
```

### Step 4 — Confirm and summarise

After saving `CODE_WIKI.md`:
1. Tell the user how many modules were documented
2. Highlight the top 2-3 gotchas you found
3. Suggest adding `CODE_WIKI.md` to Antigravity project context for all future work

## Requirements

$ARGUMENTS
