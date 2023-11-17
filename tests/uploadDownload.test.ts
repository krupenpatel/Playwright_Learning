import { test } from "@playwright/test";

test("download file", async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')
    await page.type("#textbox","Krupen patel")
    await page.click("id=create")
    //await page.click('id=link-to-download')
    const [down] = await Promise.all([
        page.waitForEvent("download"),
        page.click('id=link-to-download')
    ])
    const fileName = await down.suggestedFilename()
    await down.saveAs(fileName)
    /* const path = await down.path()
    console.log(path) */
})

test("upload file", async ({page})=>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')
    /* await page.setInputFiles("//input[@type='file']",
    ["uploadFiles/enter.png","uploadFiles/Renm.png"]) */
    const [uploadFls] = await Promise.all([
         page.waitForEvent("filechooser"),
         await page.click("//input[@type='file']"),
    ])
    const isMultipal = uploadFls.isMultiple()
    console.log(isMultipal)
    uploadFls.setFiles(["uploadFiles/enter.png","uploadFiles/Renm.png"])
    await page.waitForTimeout(3000)
})