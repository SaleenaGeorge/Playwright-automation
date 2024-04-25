const { test,expect } =require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashboardPage}=require('../pageobjects/DashboardPage');
const DataSet=JSON.parse(JSON.stringify(require('../testdata/login.json')))

test.only('@web login logout test',async ({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();

const loginPage=new LoginPage(page);
const dashboardPage=new DashboardPage(page);

loginPage.goTo(DataSet.url);
loginPage.validLogin(DataSet.userName,DataSet.password);
//await page.waitForLoadState('networkidle');
await expect(dashboardPage.userNamebutton).toContainText("Saleena");
 
dashboardPage.logout();
await expect(loginPage.loginsubtitle).toContainText("sign in");

});

test('Login test2',async ({page})=>
{
await page.goto("https://www.staging-dev.engage.yuja.com/");


});