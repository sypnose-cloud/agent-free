# Search Agent — Real-Time Web Search for Claude

Give Claude real-time web search. Ask questions, get answers with sources — directly inside your Claude conversation.

**Free. No API key required for basic use.**

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-free
```

---

## What Claude can do

- Search the web for current information
- Find recent news, documentation, prices
- Search specific websites
- Get structured answers with sources

---

## Usage

```
"Search the web for the latest AI news"
"What is the current Bitcoin price?"
"Find the Claude API documentation for tool use"
"Search GitHub for MCP server examples"
```

---

## Config

**Claude Desktop** — add to your config file:

```json
{
  "mcpServers": {
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

**Get a free Brave Search API key** at [brave.com/search/api](https://brave.com/search/api) — free tier includes 2,000 searches/month.

**Claude Code:**
```bash
BRAVE_API_KEY=your-key claude mcp add search -- npx -y @modelcontextprotocol/server-brave-search
```

---

## No API key? Use the browser agent

The [browser-agent](../browser-agent) can also search the web via Google — no key needed:

```
"Search Google for: latest AI agent frameworks"
```
