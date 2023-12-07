import { Page } from "@playwright/test";

export default class LoginPage{
    constructor(public page : Page){

    }

    async enterEmail(email: string){
        await this.page.locator("#input-email").fill(email)
    }

    async enterPassword(password: string){
        await this.page.locator("#input-password").fill(password)
    }

    async clickOnLogin(){
        await Promise.all([
            this.page.waitForLoadState(),
            await this.page.click("input[value='Login']")
        ])
    }

    async login(email:string,password:string){
        await this.enterEmail(email)
        await this.enterPassword(password)
        await this.clickOnLogin()
    }
}