import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';

export default defineConfig({
  fullyParallel :true,
  projects : [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"]
      }
    },
    {
      name: "edge",
      use: {
        ...devices["Desktop Edge"]
      }
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"]
      }
    }
  ],
  testMatch: ["pomtest/addToCart.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: 'only-on-failure',
    video: 'on',
    launchOptions:{
      //slowMo: 1000
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
