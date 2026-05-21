#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// Colors
const reset = '\x1b[0m';
const bold = '\x1b[1m';
const green = '\x1b[32m';
const blue = '\x1b[34m';
const yellow = '\x1b[33m';
const cyan = '\x1b[36m';
const red = '\x1b[31m';

const skillsDir = path.join(__dirname, '../skills');

function printHelp() {
  console.log(`
${bold}${cyan}🌌 Vibe Code Skills — Antigravity Skills Installer${reset}

${bold}Usage:${reset}
  npx github:yash-tayana/vibe-code-skills <command> [options]

${bold}Commands:${reset}
  ${green}list${reset}                  List all available skills with descriptions
  ${green}install <skill-name>${reset}  Install a specific skill
  ${green}install --all${reset}         Install all available skills

${bold}Options:${reset}
  ${yellow}-l, --local${reset}           Install to project-specific workspace folder (${cyan}./.agent/skills/${reset})
  ${yellow}-g, --global${reset}          Install globally for all projects (${cyan}~/.gemini/antigravity/skills/${reset}) [Default]
  ${yellow}-h, --help${reset}            Show this help menu

${bold}Examples:${reset}
  npx github:yash-tayana/vibe-code-skills list
  npx github:yash-tayana/vibe-code-skills install security-auditor
  npx github:yash-tayana/vibe-code-skills install --all --local
`);
}

function getAvailableSkills() {
  if (!fs.existsSync(skillsDir)) {
    console.error(`${red}Error: Skills directory not found at ${skillsDir}${reset}`);
    process.exit(1);
  }

  const items = fs.readdirSync(skillsDir);
  const skills = [];

  for (const item of items) {
    const itemPath = path.join(skillsDir, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const skillMdPath = path.join(itemPath, 'SKILL.md');
      if (fs.existsSync(skillMdPath)) {
        const content = fs.readFileSync(skillMdPath, 'utf8');
        const frontmatterMatch = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
        let name = item;
        let description = '';

        if (frontmatterMatch) {
          const lines = frontmatterMatch[1].split('\n');
          for (const line of lines) {
            const parts = line.split(':');
            if (parts.length >= 2) {
              const key = parts[0].trim();
              const val = parts.slice(1).join(':').trim();
              if (key === 'name') name = val;
              if (key === 'description') description = val;
            }
          }
        }

        skills.push({ id: item, name, description, path: itemPath });
      }
    }
  }

  return skills;
}

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// Command execution entrypoint
const args = process.argv.slice(2);
const command = args[0];

if (!command || args.includes('-h') || args.includes('--help') || command === 'help') {
  printHelp();
  process.exit(0);
}

const isLocal = args.includes('-l') || args.includes('--local');
const targetDest = isLocal 
  ? path.join(process.cwd(), '.agent/skills')
  : path.join(os.homedir(), '.gemini/antigravity/skills');

const targetName = isLocal ? 'Local workspace (.agent/skills)' : 'Global Antigravity (~/.gemini/antigravity/skills)';

if (command === 'list') {
  console.log(`\n${bold}${cyan}Listing Available Agent Skills:${reset}\n`);
  const skills = getAvailableSkills();
  for (const skill of skills) {
    console.log(`  ${bold}${green}${skill.id}${reset}`);
    if (skill.description) {
      console.log(`    ${skill.description}`);
    }
    console.log('');
  }
} else if (command === 'install') {
  const skillArg = args[1];

  if (!skillArg) {
    console.error(`${red}Error: Please specify a skill name to install (or use --all)${reset}`);
    printHelp();
    process.exit(1);
  }

  const allSkills = getAvailableSkills();

  if (skillArg === '--all') {
    console.log(`${bold}${blue}Installing all ${allSkills.length} skills to ${targetName}...${reset}`);
    for (const skill of allSkills) {
      const destPath = path.join(targetDest, skill.id);
      try {
        copyRecursive(skill.path, destPath);
        console.log(`  ${green}✓${reset} Installed ${bold}${skill.id}${reset}`);
      } catch (err) {
        console.error(`  ${red}✗ Failed to install ${skill.id}: ${err.message}${reset}`);
      }
    }
    console.log(`\n${bold}${green}All skills successfully configured. Please restart your Antigravity session to activate.${reset}\n`);
  } else {
    const matchedSkill = allSkills.find(s => s.id === skillArg);
    if (!matchedSkill) {
      console.error(`${red}Error: Skill "${skillArg}" not found.${reset}`);
      console.log(`Run ${bold}npx github:yash-tayana/vibe-code-skills list${reset} to see available options.`);
      process.exit(1);
    }

    const destPath = path.join(targetDest, matchedSkill.id);
    console.log(`${bold}${blue}Installing ${matchedSkill.id} to ${targetName}...${reset}`);
    try {
      copyRecursive(matchedSkill.path, destPath);
      console.log(`${bold}${green}Success: Installed ${matchedSkill.id}!${reset}`);
      console.log(`Restart your Antigravity session to apply the changes.`);
    } catch (err) {
      console.error(`${red}Error copying files: ${err.message}${reset}`);
      process.exit(1);
    }
  }
} else {
  console.error(`${red}Unknown command: ${command}${reset}`);
  printHelp();
  process.exit(1);
}
