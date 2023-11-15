import { test } from "@playwright/test";

test("Hendaling Dropdown", async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    await page.selectOption("#select-demo",{
        label:"Tuesday"
    })
})

test("Multiselct Dropdown", async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    await page.selectOption("#multi-select",[{
        label: "Texas"
    },{
        label: "Florida"
    },{
        value: "Washington"
    }])
})

test("Jquery Dropdown", async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo')
    await selectCountry("India")
    async function selectCountry(countryname) {
        await page.click("#country+span")
        await page.locator("ul#select2-country-results").locator("li",{
        hasText: countryname
    }).click()
    }
    
})