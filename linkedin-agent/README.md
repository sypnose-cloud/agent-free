# LinkedIn Agent — LinkedIn Navigation for Claude

Let Claude read and navigate LinkedIn — your feed, profiles, job listings, notifications — directly from your conversation.

**Free. Uses your existing LinkedIn session.**

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-free
```

Requires the [browser-agent](../browser-agent) — install it first.

---

## What Claude can do

- Read your LinkedIn feed
- View profiles and company pages
- Browse job listings
- Read notifications and messages
- Search for people and companies
- Draft posts (you approve before publishing)

---

## Usage

```
"Show me my LinkedIn notifications"
"Search LinkedIn for AI Engineer jobs in Spain"
"Find the profile of [person name] on LinkedIn"
"What are the top posts in my LinkedIn feed today?"
"Draft a LinkedIn post about [topic] for me to review"
```

---

## What it does NOT do automatically

- Post on your behalf without showing you the draft first
- Send connection requests without your approval
- Message people without your review

Claude always shows you what it's about to do and asks for confirmation.

---

## Requirements

- [browser-agent](../browser-agent) with `--user-data-dir` (for persistent login)
- LinkedIn account
- Log in to LinkedIn once — browser-agent remembers your session

---

## Config

Uses browser-agent. Add `--user-data-dir` to keep your LinkedIn session:

**Windows:**
```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": [
        "-y", "@playwright/mcp",
        "--browser", "chromium",
        "--user-data-dir", "C:\\Users\\YourName\\claude-browser"
      ]
    }
  }
}
```

**Mac/Linux:**
```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": [
        "-y", "@playwright/mcp",
        "--browser", "chromium",
        "--user-data-dir", "/home/yourname/.claude-browser"
      ]
    }
  }
}
```
