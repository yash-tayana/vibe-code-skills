# vibe-code-skills

Antigravity agent skills for AI-assisted development at Tayana.

Part of the 5-workstream AI Dev Enablement initiative.

## Skills

| Skill | Trigger | Purpose |
|-------|---------|--------|
| `requirement-executor` | Add Requirement.md or say "start working on requirement" | Reads Requirement.md, creates phased plan + task list + progress tracker |
| `code-wiki-builder` | "build code wiki", "document this codebase" | Scans codebase, generates structured wiki per module |
| `mistake-memory` | After any bug fix or PR review | Extracts lesson and appends to MISTAKE.md |
| `test-automation` | "write tests", "generate tests" | Generates unit + integration tests, wires to CI |

## Installation

### Workspace (project-specific)
```bash
mkdir -p .agent/skills
cp -R skills/<skill-name> .agent/skills/
```

### Global (all projects)
```bash
mkdir -p ~/.gemini/antigravity/skills
cp -R skills/<skill-name> ~/.gemini/antigravity/skills/
```

Restart your Antigravity session after installing.

## How these skills connect

```
Codex (OpenAI)
  └── requirement-analyst skill  →  generates Requirement.md

Antigravity
  ├── requirement-executor       →  reads Requirement.md, plans + executes
  ├── code-wiki-builder          →  documents codebase for AI context
  ├── mistake-memory             →  captures lessons from bugs + reviews
  └── test-automation            →  generates + runs tests before release
```

## Structure

```
vibe-code-skills/
└── skills/
    ├── requirement-executor/
    │   └── SKILL.md
    ├── code-wiki-builder/
    │   └── SKILL.md
    ├── mistake-memory/
    │   └── SKILL.md
    └── test-automation/
        └── SKILL.md
```
