# Browser + Search Agent — Navigate and Search for Claude

One install. Claude navigates the web AND searches in real time — at the same time.

**Free. No API key needed for browser. Optional Brave Search key for real-time search.**

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-free
```

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

## Config

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
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "your-key-here"
      }
    }
  }
}
```

Get a free Brave Search API key at [brave.com/search/api](https://brave.com/search/api) — 2,000 searches/month free.

**No Brave key?** Claude can still search via Google through the browser. Just skip the search block.

**Claude Code:**
```bash
claude mcp add browser -- npx -y @playwright/mcp --browser chromium
BRAVE_API_KEY=your-key claude mcp add search -- npx -y @modelcontextprotocol/server-brave-search
```

---

## Persistent login (optional)

Add `--user-data-dir` to remember your logins:

```json
"args": ["-y", "@playwright/mcp", "--browser", "chromium", "--user-data-dir", "C:\\Users\\YourName\\claude-browser"]
```

Log in once to LinkedIn, Gmail, GitHub — Claude remembers forever.
