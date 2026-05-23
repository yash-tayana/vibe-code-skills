---
name: mistake-memory
description: Manages MISTAKE.md — a living log of past bugs, review findings, and wrong approaches so they are never repeated. Three modes: (A) capture a new mistake after a bug or review, (B) check MISTAKE.md before starting a task to avoid known pitfalls, (C) review and clean up old entries. Use when the user says "log this mistake", "add to mistake memory", "check for known mistakes", "what mistakes should I avoid", or "review mistake log".
---

# Mistake Memory Skill

You are the keeper of the team's mistake log. Your job is to ensure that every bug found in review, every wrong approach discovered in production, and every "we've been here before" moment gets captured — and that no one has to learn the same lesson twice.

---

## CRITICAL RULES

1. **MISTAKE.md lives at the root of the project.** Always read it before writing to it.
2. **Never delete entries without asking.** Mark them resolved instead.
3. **Be specific — always name the file, function, or module involved.** Vague entries are useless.
4. **Mode B (check) runs silently and fast.** Do not ask the user questions — just read and report.
5. **Every entry must have a "Check this when" trigger** so future agents know when to apply it.

---

## Step 1 — Detect the Mode

When this skill activates, identify which mode the user wants:

**Mode A — Capture a new mistake**
Triggered by: "log this mistake", "add this to mistake memory", "we just found a bug", "note this down", "remember this for next time"

**Mode B — Check before a task**
Triggered by: "check for known mistakes", "what should I avoid", "any past mistakes I should know about", or automatically when starting a new implementation task

**Mode C — Review and clean up**
Triggered by: "review mistake log", "clean up mistakes", "which mistakes are still relevant", "update mistake memory"

If unclear, ask:
```
What would you like to do with mistake memory?
A) Log a new mistake or finding
B) Check for mistakes relevant to what I'm about to work on
C) Review and clean up the existing log
```

---

## Mode A — Capture a New Mistake

### Step A1 — Gather the details

Ask these questions (one at a time, MCQ where possible):

**Q1:**
```
What type of task was being done when this mistake was made?
A) New feature development
B) Bug fix
C) Refactor
D) Performance / optimisation
E) Other (describe)
```

**Q2 — only if not already known:**
```
Which part of the codebase was involved? (name the file, module, or component)
> (free text)
```

**Q3:**
```
In one line — what went wrong?
> (free text)
```

**Q4:**
```
What was the root cause?
A) Wrong assumption about how a library/framework works
B) Missing validation or edge case handling
C) Incorrect understanding of the data model
D) Copy-paste / pattern applied in wrong context
E) Missing context about existing behavior
F) Other (describe)
```

**Q5:**
```
What is the correct approach going forward?
> (free text)
```

**Q6:**
```
When should a future developer or AI agent check this entry?
(e.g., "before modifying the payment flow", "whenever adding a new API endpoint")
> (free text)
```

### Step A2 — Write the entry

Read the current MISTAKE.md (create it if it doesn't exist). Append the new entry in this format:

```markdown
---

### [MISTAKE-NNN] [Short descriptive title]

**Date:** [Today's date]
**Task type:** [from Q1]
**Area:** [Module / component / file from Q2]
**Severity:** [High / Medium / Low — your assessment based on impact]

**What went wrong:**
[One paragraph — describe what was done and what the problem was. Be specific.]

**Root cause:**
[The underlying reason this happened — not just what went wrong but why]

**Correct approach:**
[What to do instead — specific enough that someone can follow it without context]

**Check this when:**
[Exact trigger phrase — when should a future developer or AI agent read this entry?]

**Status:** Active
```

Use sequential IDs: MISTAKE-001, MISTAKE-002, etc. Read existing entries to get the next number.

### Step A3 — Confirm

After writing:

> "Logged as MISTAKE-[NNN]: [title]
> MISTAKE.md updated. Consider committing this file to the repo so the whole team benefits."

---

## Mode B — Check Before a Task

### Step B1 — Understand the task

Ask (if not already described):
```
What are you about to work on? (brief description)
> (free text)
```

### Step B2 — Scan MISTAKE.md

Read the full MISTAKE.md. For each entry with Status: Active:
- Check if the "Check this when" trigger matches the task
- Check if the "Area" overlaps with files or modules in scope
- Check if the task type matches

### Step B3 — Report

If relevant entries found:
```
⚠️ Relevant past mistakes for this task:

**[MISTAKE-NNN] — [Title]**
Watch out for: [Correct approach in one sentence]
Full entry: MISTAKE.md → MISTAKE-[NNN]

[Repeat for each relevant entry]

Proceed with these in mind.
```

If no relevant entries:
```
✅ No past mistakes match this task area. Proceed.
```

Do not list irrelevant entries. Only surface what is genuinely applicable.

---

## Mode C — Review and Clean Up

### Step C1 — Read all entries

Read MISTAKE.md in full. List all entries with:
- ID and title
- Date
- Current status (Active / Resolved)
- Area

Present as a table:
```
| ID | Title | Date | Area | Status |
|----|-------|------|------|--------|
| MISTAKE-001 | [title] | [date] | [area] | Active |
```

### Step C2 — Ask what to do

```
What would you like to do?
A) Mark one or more as Resolved (code has been fixed / pattern no longer exists)
B) Update the wording of an entry
C) Add a new entry now
D) Nothing — just reviewing
```

### Step C3 — Apply changes

For "Resolved" entries, update the entry's Status line:
```
**Status:** Resolved — [one line saying what changed, e.g., "Validation was added in PR #142"]
```

Do not delete entries. Resolved entries serve as historical record.

---

## MISTAKE.md Format (Full File Structure)

When creating MISTAKE.md for the first time, use this header:

```markdown
# MISTAKE.md — [Project Name]

This file logs past mistakes, wrong approaches, and bugs found in review.
It is read by AI agents before starting tasks and by developers during code review.

**How to use:**
- Before starting a task: ask Antigravity to run the mistake-memory skill (Mode B)
- After a bug or review finding: run mistake-memory skill (Mode A) to log it
- Monthly: review and mark resolved entries (Mode C)

---

[entries go here]
```
