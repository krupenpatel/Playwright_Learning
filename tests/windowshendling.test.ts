import { test } from "@playwright/test";

test("Hendaling new window", async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ])
    console.log(newWindow.url())
})

test("Hendaling multipal window", async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo')
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])
    await multiPage.waitForLoadState()
    const pages = multiPage.context().pages()
    console.log("No of pages:"+ pages.length)
    
    pages.forEach(tab=>{
        console.log(tab.url())
    })
    let fbpage
    for (let index = 0; index < pages.length; index++) {
        const ur = pages[index].url()
        if(ur == "https://www.facebook.com/lambdatest/"){
            fbpage = pages[index] 
        }
    }
    await page[1].fill("","")
})