import { Page } from "@playwright/test";

export default class HomePage{
    constructor(public page:Page){

    }

    async clickOnMenu(){
        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.page.hover("'Mega Menu'"),
            this.page.click("'Headphones'")
        ])
        
    }
}