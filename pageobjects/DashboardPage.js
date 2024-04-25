class DashboardPage{
    constructor(page){
        this.page=page;
        this.userNamebutton=page.locator(".navDropdownText");
        this.logoutbutton=page.locator(".dropdown-item");
        this.createPollButton=page.locator("[class='DashboardPage_creatBtn__6XC+S']");
        this.createButton=page.locator(".Layout_gradientText__Kg0Pt ").nth(1);
        this.createPollSidebarButton=page.locator(".Layout_gradientText__Kg0Pt ").nth(2);
        this.createSurveySidebarButton=page.locator(".Layout_gradientText__Kg0Pt ").nth(3);
    }

    async logout(){
        await  this.userNamebutton.click();
        await this.logoutbutton.click();
    }

    async createPollClick(){
        await  this.createPollButton.click();
    }
    async createPollSidebarClick(){
        await  this.createButton.click();
        await  this.createPollSidebarButton.click();
    }
    async createSurveySidebarClick(){
        await  this.createButton.click();
        await  this.createSurveySidebarButton.click();
    }

}
module.exports = {DashboardPage};