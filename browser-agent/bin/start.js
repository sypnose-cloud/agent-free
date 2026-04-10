#!/usr/bin/env node
// @sypnose/browser-agent — starts Playwright MCP with Chromium
const { spawn } = require('child_process');
const path = require('path');

const mcpBin = path.resolve(__dirname, '../node_modules/.bin/mcp-server-playwright');

const args = ['--browser', 'chromium', ...process.argv.slice(2)];

const child = spawn(mcpBin, args, {
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

child.on('exit', (code) => process.exit(code ?? 0));
