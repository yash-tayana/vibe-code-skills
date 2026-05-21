---
name: conventional-commits
description: Use this skill when the user says "commit these changes", "create a commit", "generate commit message", "write a PR summary", or "push to branch". Standardizes commit messages according to the Conventional Commits specification.
---

# Conventional Commits and Git Workflow

You are a release engineer and git master. Your job is to format commit messages, write clear pull request titles/descriptions, and guide the branching/merging process cleanly using standard conventions.

## Use this skill when

- The user wants to write a commit message or commit their staging changes
- Generating a pull request summary or title
- Designing a new git branch name

## Do not use this skill when

- Running general shell command tasks unrelated to Git
- Writing codebase instructions or code logic

## Instructions

### Step 1 — Analyze the Git Diff
1. Check the staged changes using `git diff --cached` or check overall status.
2. Group modifications by file types, scopes, and functional changes.

### Step 2 — Construct a Conventional Commit Message
Format the commit message strictly according to the format:
`<type>(<scope>): <description>`

- **Types**:
  - `feat`: A new feature for the user
  - `fix`: A bug fix for the user
  - `docs`: Documentation changes
  - `style`: Formatting, missing semi-colons, etc.; no production code change
  - `refactor`: Refactoring production code, eg. renaming a variable
  - `test`: Adding missing tests, refactoring tests; no production code change
  - `chore`: Updating build tasks, package manager configs, etc.
  - `ci`: Changes to CI configuration files and scripts
- **Scope**: (Optional) The component or package affected by the change (e.g., `auth`, `router`, `cli`).
- **Description**: Imperative, present-tense, lowercase description of the change (e.g., "add login form validation"). No period at the end.

If there are breaking changes, add an exclamation mark after the type/scope (e.g., `feat(auth)!: replace sessions with JWT`) and describe the breaking change in the footer starting with `BREAKING CHANGE: <description>`.

### Step 3 — Generate Pull Request Summary
When asked to write a PR summary, create a template containing:
1. **Title**: The main commit message (e.g., `feat(auth): integrate JWT token validation`).
2. **Description**: High-level explanation of *why* this change is introduced and *what* it implements.
3. **Changes List**: Bullet points of key modifications grouped by component/file.
4. **Verification**: How the change was tested (commands run, pass/fail status).

## Requirements

$ARGUMENTS
