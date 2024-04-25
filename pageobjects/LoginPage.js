    class LoginPage {

        constructor(page){
            this.page=page;
            this.selectSignIndrop=page.locator("//div[@class='Login_boldOption__SaLnv']");
            this.yujaCredential=page.locator("//span[contains(text(),'YuJa Credentials')]")
            this.signInbutton=page.locator(".Login_signInButton__2M4u5").first();
            this.userName=page.locator("#username-input-box");
            this.password=page.locator("#input-pw");
            this.loginsubtitle=page.locator(".Login_subtitle__x5LoC").first();
        }

        async goTo(url){
           await this.page.goto(url);
           await this.page.waitForLoadState('networkidle');
    
        }

       async validLogin(username,password){
            await this.selectSignIndrop.click();
            await this.yujaCredential.click();
            await this.userName.type(username);
            await this.password.type(password);
            await this.signInbutton.click();
        }
    }
    module.exports = {LoginPage};