import { defineConfig } from '@playwright/test';
import { on } from 'events';

export default defineConfig({
  testMatch: ["tests/uploadDownload.test.ts"],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'on',
    launchOptions:{
      slowMo: 1000
    }
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
