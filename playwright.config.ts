import { defineConfig } from '@playwright/test';

export default defineConfig({
  testMatch: ["tests/login.spec.ts"],
  use: {
    headless: false
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
