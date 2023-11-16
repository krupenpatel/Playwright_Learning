import { test } from "@playwright/test";
import moment from "moment";

test("date picker simple", async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    let date = "1995-12-09"
    await page.fill("id=birthday",date)
})

test("date picker", async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo') 
    await page.click("//input[@placeholder='Start date']")
    await selectDate(12,"December 2023");

    async function selectDate(date:number, monthYear:string) {
        const mmyy = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");
        let monthToSelect = monthYear;
        const thisMonth = moment(monthToSelect, "MMMM YYYY").isBefore();
        console.log(thisMonth);
        while (await mmyy.textContent() != monthToSelect) {
            if (thisMonth) {
                await prev.click();
            } else {
                await next.click();
            }
            await page.click(`//td[@class='day'][text()='${date}']`);
        }
    }
    /* await prev.click()
    await page.click("//td[@class='day'][text()='4']") */
})