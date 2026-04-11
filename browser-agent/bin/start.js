#!/usr/bin/env node
// @sypnose/browser-agent — starts Playwright MCP with Chrome
// Note: binary renamed from mcp-server-playwright to playwright-mcp in @playwright/mcp >= 0.0.60
const { spawn } = require('child_process');
const path = require('path');

// Try new binary name first, fall back to old name
const newBin = path.resolve(__dirname, '../node_modules/.bin/playwright-mcp');
const oldBin = path.resolve(__dirname, '../node_modules/.bin/mcp-server-playwright');
const fs = require('fs');
const mcpBin = fs.existsSync(newBin) ? newBin : oldBin;

const args = ['--browser', 'chrome', ...process.argv.slice(2)];

const child = spawn(mcpBin, args, {
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

child.on('exit', (code) => process.exit(code ?? 0));
