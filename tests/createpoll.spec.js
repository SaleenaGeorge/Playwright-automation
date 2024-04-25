const { test,expect } =require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const {DashboardPage}=require('../pageobjects/DashboardPage');
const {CreatepollPage}=require('../pageobjects/CreatepollPage');
const DataSet1=JSON.parse(JSON.stringify(require('../testdata/login.json')))
const DataSet2=JSON.parse(JSON.stringify(require('../testdata/createpoll.json')))

test.only('Create poll test',async ({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();

const loginPage=new LoginPage(page);
const dashboardPage=new DashboardPage(page);
const createpollPage=new CreatepollPage(page);

loginPage.goTo(DataSet1.url);
loginPage.validLogin(DataSet1.userName,DataSet1.password);
//await expect(dashboardPage.userNamebutton).toContainText("Saleena");
dashboardPage.createPollClick();


//await expect(dashboardPage.userNamebutton).toContainText("Saleena");

dashboardPage.logout();

});

test('Login test2',async ({page})=>
{
await page.goto("https://www.staging-dev.engage.yuja.com/");


});