# Browser Agent — Free Browser Navigation for Claude

Give Claude extraordinary browser control. Navigate websites, click, fill forms, take screenshots, log in to services — directly from Claude Desktop or Claude Code.

**Free. No API key. Works on Windows, Mac, Linux.**

---

## Install in 30 seconds

### Claude Desktop

Open your config file and paste this:

| OS | Config file |
|----|-------------|
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": ["@playwright/mcp", "--browser", "chromium"]
    }
  }
}
```

**Restart Claude Desktop. Done.**

> First time only: run `npm install -g @playwright/mcp` if Claude says the browser tool isn't available.

---

### Claude Code (CLI)

```bash
claude mcp add browser -- npx @playwright/mcp --browser chromium
```

Done. No restart needed.

---

## What you can ask Claude now

```
"Open google.com and search for remote AI jobs"
"Go to my Gmail and show me unread emails"
"Take a screenshot of github.com/sypnose-cloud"
"Fill this form [URL] with name John, email john@example.com"
"Log in to LinkedIn and show me my notifications"
```

---

## Keep your logins between sessions (optional)

Add `--user-data-dir` to save your browser session:

**Windows:**
```json
"args": ["@playwright/mcp", "--browser", "chromium", "--user-data-dir", "C:\\Users\\YourName\\claude-browser"]
```

**Mac/Linux:**
```json
"args": ["@playwright/mcp", "--browser", "chromium", "--user-data-dir", "/home/yourname/.claude-browser"]
```

Log in once → Claude remembers forever.

---

## About

Built by [Sypnose](https://github.com/sypnose-cloud). MIT License.
