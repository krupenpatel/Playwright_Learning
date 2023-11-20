import { Page } from "@playwright/test";

export default class SpcialHotPage {
    constructor(public page : Page){

    }

    async addtocartProduct(){
        await this.page.hover("(//div[@class='carousel-inner']//div)[1]",{
            strict: false
        })

        await this.page.locator("(//button[@title='Add to Cart'])").nth(0).click()
    }

    async isTostVisble(){
        const toast =this.page.locator("//a[contains(text(),'View Cart')]");
        await toast.waitFor({state:"visible"})
        return toast

    }
}