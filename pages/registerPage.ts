import { Page } from "@playwright/test";

export default class RegisterPage{
    constructor(public page : Page){

    }
    
    async enterFirstName(firstName: string){
        await this.page.locator("#input-firstname").fill(firstName)
    }

    async enterLastName(lastName: string){
        await this.page.locator("#input-lastname").fill(lastName)
    }

    async enterEmail(email: string){
        await this.page.locator("#input-email").fill(email)
    }

    async enterPhone(phoneNo: string){
        await this.page.locator("#input-telephone").fill(phoneNo)
    }

    async enterPassword(passWord: string){
        await this.page.locator("#input-password").fill(passWord)
    }

    async enterConfirmPassword(cnfPassWord: string){
        await this.page.locator("#input-confirm").fill(cnfPassWord)
    }

     isSubscribeChecked(){
        return  this.page.locator("#input-newsletter-no")
    }

    async clickTandC(){
        return await this.page.click("label[for='input-agree']")
    }

    async continueToRegister(){
        await Promise.all([
            this.page.waitForLoadState("networkidle"),
          await this.page.click("input[value='Continue']")
        ])
    }
}