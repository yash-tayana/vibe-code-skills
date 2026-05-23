# 🌌 vibe-code-skills

Antigravity agent skills for AI-assisted development at Tayana. Part of the 5-workstream AI Dev Enablement initiative.

This repository is designed as an installable skills library for Google Antigravity. Anyone can discover and install these skills globally or locally without cloning the repository.

---

## 🧭 Available Agent Skills

| Skill | Trigger Keywords / Phrases | Primary Purpose |
| :--- | :--- | :--- |
| **`requirement-executor`** | `start working on requirement`, `execute the requirement`, `plan this requirement` | Reads `Requirement.md`, creates a phased plan + task list + progress tracker |
| **`code-wiki-builder`** | `build code wiki`, `document this codebase`, `create a wiki for this project` | Scans codebase, generates a structured AI-readable wiki per module |
| **`mistake-memory`** | `After any bug fix or PR review` | Extracts lessons/gotchas and appends them to `MISTAKE.md` |
| **`test-automation`** | `write tests`, `generate tests`, `add test coverage` | Generates unit + integration tests, wires tests to CI workflow |
| **`security-auditor`** | `audit code`, `check for security issues`, `do a security review` | Scans code for vulnerability vectors, auth holes, and leaked secrets |
| **`test-driven-development`**| `do TDD`, `use test driven development`, `red green refactor` | Guides implementation code using a strict Red-Green-Refactor TDD cycle |
| **`conventional-commits`** | `commit these changes`, `create a commit`, `write a PR summary` | Formats commit messages and PR documentation to conventional standards |
| **`api-first-design`** | `design an API`, `create OpenAPI spec`, `create graphQL schema` | Designs API contracts, endpoints, schemas, and specs before writing code |
| **`devops-architect`** | `create Dockerfile`, `set up CI/CD`, `generate Kubernetes yaml` | Scaffolds Dockerfiles, GitHub Actions pipelines, and Kubernetes/Helm configurations |
| **`performance-optimizer`** | `optimize query`, `profile code`, `check for memory leaks` | Detects execution bottlenecks, N+1 query loops, and memory leak profiles |
| **`frontend-craftsman`** | `style this component`, `make this interface look premium` | Enforces premium styling, glassmorphism, responsive grids, and clean a11y |

---

## 🚀 Setup & Installation (Zero Clone)

You can list and install skills directly from this GitHub repository **without cloning it** using `npx`.

### 1. Discovery
List all available skills and their detailed purpose metadata:
```bash
npx github:yash-tayana/vibe-code-skills list
```

### 2. Global Installation (Recommended)
Install skills to your global Antigravity folder (`~/.gemini/antigravity/skills/`) to make them available across all projects:

```bash
# Install a single skill
npx github:yash-tayana/vibe-code-skills install security-auditor

# Install all skills at once
npx github:yash-tayana/vibe-code-skills install --all
```

### 3. Local Workspace Installation
Install skills to your project's local workspace folder (`./.agent/skills/`) to keep them isolated to the current project:

```bash
# Install a single skill locally
npx github:yash-tayana/vibe-code-skills install security-auditor --local

# Install all skills locally
npx github:yash-tayana/vibe-code-skills install --all --local
```

*Note: Restart your Antigravity session after installing or updating skills to apply changes.*

---

## 🛠 Manual Installation

If you prefer to manually copy the files, place the folders from the `skills/` directory into either of the following paths:

- **Global Path**: `~/.gemini/antigravity/skills/<skill-name>/SKILL.md`
- **Local Path**: `.agent/skills/<skill-name>/SKILL.md`
