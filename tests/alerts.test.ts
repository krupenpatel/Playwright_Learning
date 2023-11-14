import { expect, test } from '@playwright/test';

test("Hendaling Alerts", async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  page.on("dialog",async (alert)=>{
    const txt=alert.message()
    console.log(txt)
    await alert.accept()
  })
  await page.locator("button:has-text('Click Me')").nth(0).click()
});

test("Confirm Box", async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  page.on("dialog",async (alert)=>{
    const txt=alert.message()
    console.log(txt)
    await alert.dismiss()
  })
  await page.locator("button:has-text('Click Me')").nth(1).click()
  expect(page.locator("id=confirm-demo")).toContainText("Cancel!")
});