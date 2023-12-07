import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import SpcialHotPage from "../pages/SpcialHoPage";
import HomePage from "../pages/HomePage";
import * as data from "../testdata/addtodart.json";

const email = "krupen.patel@thecommerceteam.com";
const password = "Test@123";
/* test.use({
    browserName : "firefox"
}) */
test.describe("Page Object Model Test",async () => {
    test("Create account",async({page,baseURL})=>{
        const register=new RegisterPage(page)
        await page.goto(`${baseURL}route=account/register`)
        await register.enterFirstName(data.firstname)
        await register.enterLastName(data.lastname)
        await register.enterEmail(data.email)
        await register.enterPhone(data.phonenumber)
        await register.enterPassword(data.password)
        await register.enterConfirmPassword(data.password)
        expect(register.isSubscribeChecked()).toBeChecked()
        await register.clickTandC()
        await register.continueToRegister()
    })
    
    test("login",async({page,baseURL})=>{
        const logIn=new LoginPage(page)
        await page.goto(`${baseURL}route=account/login`)
        await logIn.login(email,password)
        expect(await page.title()).toBe("My Account")
    })
    
    test("add to cart product",async({page,baseURL})=>{
        const logIn=new LoginPage(page)
        const homePage=new HomePage(page)
        const spcialHot=new SpcialHotPage(page)
        await page.goto(`${baseURL}route=account/login`)
        await logIn.login(email,password)
        expect(await page.title()).toBe("My Account")
        await homePage.clickOnMenu()
        await spcialHot.addtocartProduct()
        const isMiniCartVisible= await spcialHot.isTostVisble()
        expect(isMiniCartVisible).toBeVisible()
    })
})