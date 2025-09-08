import {test, expect, Locator, Page} from '@playwright/test';

export class LoginPage{
    
    constructor(page)
    {
            this.page = page;
            this.loginButton = page.locator("button[data-variant$='light']");
            this.username = page.locator("[name='email']");
            this.password = page.locator("[name='password']");
            this.submitbutton = page.locator("[type ='submit']");
            this.userLogin = page.locator("[data-testid ='user-settings']");

    }

    async visit() {
    await this.page.goto('https://demo-saas.bugbug.io/');
    await expect(this.page).toHaveTitle(/Demo SaaS/);
  }

  async login(username,password){
    await this.loginButton.click()
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitbutton.click();
    await this.page.waitForLoadState("networkidle");
  }


async verifyLogin(memberName){
    await expect(this.userLogin).toContainText(memberName);
}
}


