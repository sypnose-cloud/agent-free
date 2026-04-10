# Browser Agent — Free Browser Navigation for Claude

Give Claude extraordinary browser control: navigate websites, fill forms, click buttons, extract data, take screenshots — all from your Claude Desktop or Claude Code.

**Free. No API key needed. Works on Windows, Mac, and Linux.**

---

## What Claude can do with this agent

- Navigate any website
- Click, scroll, type in forms
- Take screenshots of pages
- Extract content from web pages
- Log in to services (Gmail, LinkedIn, GitHub...)
- Fill and submit forms
- Read page content and answer questions about it

---

## Requirements

- [Node.js](https://nodejs.org) 18 or higher
- [Claude Desktop](https://claude.ai/download) or [Claude Code](https://claude.ai/code)

---

## Installation

### Step 1 — Install the MCP package

```bash
npm install -g @playwright/mcp
```

> This installs Playwright's MCP server. It includes a bundled Chromium browser — no separate browser installation needed.

---

### Step 2 — Add to Claude Desktop

Open your Claude Desktop config file:

| OS | Path |
|----|------|
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Linux** | `~/.config/Claude/claude_desktop_config.json` |

Add this inside `"mcpServers"`:

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": [
        "@playwright/mcp",
        "--browser", "chromium"
      ]
    }
  }
}
```

**Restart Claude Desktop.** You should see a browser icon or "browser" listed in your tools.

---

### Step 2 (alternative) — Add to Claude Code

Run this command:

```bash
claude mcp add browser -- npx @playwright/mcp --browser chromium
```

Or add manually to `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": [
        "@playwright/mcp",
        "--browser", "chromium"
      ]
    }
  }
}
```

---

## Usage

Once installed, just tell Claude what you want:

```
"Open google.com and search for AI orchestration"
"Go to my Gmail and show me the last 5 emails"
"Navigate to github.com/sypnose-cloud and take a screenshot"
"Fill this form: [paste URL] with my name John and email john@example.com"
```

Claude handles everything automatically.

---

## Persistent login (optional)

Want Claude to remember your logins between sessions? Add a `--user-data-dir` pointing to a persistent profile directory:

**Windows:**
```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": [
        "@playwright/mcp",
        "--browser", "chromium",
        "--user-data-dir", "C:\\Users\\YourName\\claude-browser-profile"
      ]
    }
  }
}
```

**macOS / Linux:**
```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": [
        "@playwright/mcp",
        "--browser", "chromium",
        "--user-data-dir", "/home/yourname/.claude-browser-profile"
      ]
    }
  }
}
```

The first time you use it, log in to your services normally. Claude will remember them in future sessions.

---

## Troubleshooting

**Claude says "no browser tool available"**  
→ Restart Claude Desktop after editing the config file.

**`npx @playwright/mcp` not found**  
→ Make sure Node.js is installed: `node --version`. Then retry `npm install -g @playwright/mcp`.

**Browser opens but page doesn't load**  
→ Check your internet connection. The Chromium browser opens automatically.

**Permission error on macOS/Linux**  
→ Run `npm install -g @playwright/mcp` with `sudo` if needed, or use a Node version manager like `nvm`.

---

## About

Built by [Sypnose](https://github.com/sypnose-cloud) — AI orchestration infrastructure designed to give Claude real-world capabilities.

Free forever. MIT License.

---

## More agents

| Agent | Description |
|-------|-------------|
| [browser-agent](.) | Browser navigation — this one |
| [agent-sypnose](https://github.com/sypnose-cloud/agent-sypnose) | Browser + search connected to Sypnose knowledge system |
