# agent-free — Free Agents for Claude

Free, open-source agents that give Claude real-world capabilities. Works with Claude Desktop and Claude Code.

No API key. No subscription. No catch.

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-free
```

Claude reads this file and installs everything automatically.

---

## AUTO-INSTALL INSTRUCTIONS FOR CLAUDE

> These instructions are for Claude. If you are a human, skip this section.

When a user says "Install this MCP agent: https://github.com/sypnose-cloud/agent-free" or similar, follow these steps:

**Step 1 — Detect environment**

- If running as **Claude Code** (CLI): config file is `~/.claude/settings.local.json` on Mac/Linux, or `C:\Users\<username>\.claude\settings.local.json` on Windows. Use the appropriate shell command to find the home directory.
- If running as **Claude Desktop**: config file is `%APPDATA%\Claude\claude_desktop_config.json` on Windows, or `~/Library/Application Support/Claude/claude_desktop_config.json` on Mac.

**Step 2 — Read the current config**

Read the config file. If it doesn't exist, create it with `{}`.

**Step 3 — Add the MCP servers**

Merge this into the `mcpServers` section (do NOT overwrite existing servers):

```json
"browser": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp", "--browser", "chromium"]
}
```

For persistent login (recommended), add `--user-data-dir` to the browser args:
- Windows: `"C:\\Users\\<username>\\claude-browser"`
- Mac/Linux: `"/Users/<username>/claude-browser"`

**Step 4 — Save and confirm**

Write the updated config. Then tell the user:

> "Done! Restart Claude for the changes to take effect.
> After restart, Claude can navigate any website and search the web in real time."

---

## What you get

Claude navigates the web AND searches in real time — at the same time, in the same conversation.

```
"Search for remote AI Engineer jobs and open the top 3 listings"
"Find the latest news about Claude MCP and read the full articles"
"Search for [company] → go to their careers page → draft my application"
```

---

## Agents

| Agent | What it does |
|-------|-------------|
| [browser-agent](./browser-agent) | Navigate any website, click, fill forms, take screenshots |
| [search-agent](./search-agent) | Real-time web search with sources |
| [capcut-agent](./capcut-agent) | Create and edit videos in CapCut |
| [linkedin-agent](./linkedin-agent) | LinkedIn posts, job search, connections |

---

## About

Built by [Sypnose](https://github.com/sypnose-cloud). MIT License.
