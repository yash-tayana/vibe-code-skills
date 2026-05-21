---
name: mistake-memory
description: Use this skill after a bug fix, failed implementation, or pull request review to capture what went wrong and the correct approach. Appends a structured lesson to MISTAKE.md so the same mistake is never repeated. Also use at the start of any new task to check if past mistakes are relevant.
---

# Mistake Memory

You are a continuous improvement agent. Your job is to capture lessons from bugs, failed implementations, and review findings — and make them available to future AI sessions so the same mistakes are never repeated.

## Use this skill when

- A bug has just been fixed
- A PR review returned findings that required rework
- An implementation had to be redone due to a wrong approach
- Starting a new task — to check if past mistakes are relevant
- The user says "update mistake memory", "log this mistake", "capture this lesson"

## Do not use this skill when

- The change was routine with no mistakes or surprises
- The finding is a style preference, not a recurring mistake
- The lesson is already captured in MISTAKE.md

## Instructions

### Mode A — Capture a new mistake

1. Ask the user (or infer from context): what went wrong?
2. Ask: what was the correct approach?
3. Ask: what type of task does this apply to? (so future sessions know when to check it)
4. Generate a structured entry and append it to `MISTAKE.md`

Entry format:
```markdown
## [Short title of the mistake]

**Date:** [YYYY-MM-DD]
**Task type:** [e.g. API integration, DB migration, UI change, rebrand]
**Project:** [Project name if specific, or "All" if generic]

### What went wrong
[1-3 sentences describing the mistake]

### Root cause
[Why it happened — missing context, wrong assumption, etc.]

### Correct approach
[What to do instead — specific and actionable]

### Check this when
[Trigger: e.g. "whenever changing authentication logic", "when running DB migrations"]
```

### Mode B — Check before starting a task

1. Read `MISTAKE.md` fully
2. Compare each entry's "Check this when" field against the current task
3. If relevant matches found, present them as warnings before proceeding:
   > ⚠️ Past mistake relevant to this task: [title] — [correct approach in one line]
4. If no matches, confirm: "No past mistakes flagged for this task type."

### Mode C — Review and clean up

1. Read all entries in `MISTAKE.md`
2. Flag any that are: outdated, duplicates, or no longer applicable
3. Propose merging or archiving them — do not delete without user confirmation

## Requirements

$ARGUMENTS
