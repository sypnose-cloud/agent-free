# agent-free — Free Agents for Claude

Free, open-source MCP agents that give Claude real-world capabilities. Works with Claude Desktop and Claude Code.

No API key. No subscription. No catch.

---

## Agents

### [browser-agent](./browser-agent)

Give Claude full browser control — navigate websites, click, type, screenshot, extract data, fill forms, log in to services.

**Install in 2 steps:**
```bash
npm install -g @playwright/mcp
```
Then add to your Claude config. [Full instructions →](./browser-agent/README.md)

---

## Quick start (Claude Desktop)

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

Config file location:
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

Restart Claude Desktop. Done.

---

## About

Built by [Sypnose](https://github.com/sypnose-cloud) — AI orchestration infrastructure.

MIT License.
