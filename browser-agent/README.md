# Browser + Search Agent — Navigate and Search for Claude

One install. Claude navigates the web AND searches in real time — at the same time.

**Free. No API key needed for browser. Optional Tavily key for real-time search.**

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

- If running as **Claude Code** (CLI): config file is `~/.claude/settings.local.json` on Mac/Linux, or `C:\Users\<username>\.claude\settings.local.json` on Windows. Use `echo $USERPROFILE` or `whoami` to find the username.
- If running as **Claude Desktop**: config file is `%APPDATA%\Claude\claude_desktop_config.json` on Windows, or `~/Library/Application Support/Claude/claude_desktop_config.json` on Mac.

**Step 2 — Read the current config**

Read the config file. If it doesn't exist, create it with `{}`.

**Step 3 — Add the MCP servers**

Merge this into the `mcpServers` section (do NOT overwrite existing servers):

```json
"browser": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp", "--browser", "chromium"]
},
"search": {
  "command": "npx",
  "args": ["-y", "tavily-mcp@latest"],
  "env": {
    "TAVILY_API_KEY": "your-key-here"
  }
}
```

For persistent login (recommended), add `--user-data-dir` to the browser args:
- Windows: `"C:\\Users\\<username>\\claude-browser"`
- Mac/Linux: `"/Users/<username>/claude-browser"`

**Step 4 — Handle Tavily key**

Ask the user: "Do you have a Tavily API key? It's free at app.tavily.com (no credit card). If yes, paste it and I'll add it. If no, I'll skip search for now — you can add it later."

If they provide a key, replace `your-key-here` with their key.
If they skip, remove the `search` block entirely.

**Step 5 — Save and confirm**

Write the updated config. Then tell the user:

> "Done! Restart Claude for the changes to take effect.
> After restart, Claude can navigate any website and search the web in real time."

---

## What Claude can do

**Search**
- Real-time web search with sources
- Current news, prices, docs
- Any question that needs live data

**Navigate**
- Open any website and interact with it
- Log in to services and stay logged in
- Fill forms, click, extract content, take screenshots

**Both together**
- Search → navigate to the result → extract and summarize
- Find a company → go to their careers page → draft your application
- Search for news → navigate to the article → read the full text

---

## Manual config (if you prefer)

**Claude Desktop** — paste into your config file:

| OS | Config file |
|----|-------------|
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp", "--browser", "chromium"]
    },
    "search": {
      "command": "npx",
      "args": ["-y", "tavily-mcp@latest"],
      "env": {
        "TAVILY_API_KEY": "your-key-here"
      }
    }
  }
}
```

Get a free Tavily API key at [app.tavily.com](https://app.tavily.com) — 1,000 searches/month, no credit card needed.

**No key?** Claude can still search via Google through the browser. Just skip the search block.

**Claude Code:**
```bash
claude mcp add browser -- npx -y @playwright/mcp --browser chromium
```

---

## Persistent login (optional)

Add `--user-data-dir` to remember your logins:

```json
"args": ["-y", "@playwright/mcp", "--browser", "chromium", "--user-data-dir", "C:\\Users\\YourName\\claude-browser"]
```

Log in once to LinkedIn, Gmail, GitHub — Claude remembers forever.
