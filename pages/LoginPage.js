const { test, expect } = require('@playwright/test')


class LoginPage {

    constructor(page) {
        this.page= page;
        this.userName = page.getByPlaceholder('Username');
        this.passWord = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login'});
    }

    async login(username, password) {
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.loginButton.click();
    }

}
module.exports = LoginPage;