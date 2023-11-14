import { defineConfig } from '@playwright/test';

export default defineConfig({
  testMatch: ["tests/alerts.test.ts"],
  use: {
    headless: false,
    screenshot: 'only-on-failure'
  },
  reporter: [
    ["dot"],["json",{
      outputFile: "jsonreports/jsonreport.json"
    }],
    ["html",{
      open: "never"
    }]
  ]
});
