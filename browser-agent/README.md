# Browser Agent — Free Browser Navigation for Claude

Give Claude extraordinary browser control. Navigate websites, click, fill forms, take screenshots, log in to services — directly from Claude Desktop or Claude Code.

**Free. No API key. Works on Windows, Mac, Linux.**

---

## Install

Open Claude Desktop or Claude Code and paste this:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-free
```

Claude reads the repo and configures everything automatically.

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
