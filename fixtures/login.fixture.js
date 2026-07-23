
const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const data = require('../utils/testData');


exports.test = base.test.extend({

   loggedInPage: async ({ page }, use) => {
        const login = new LoginPage(page);

        await page.goto('/');
        await login.login(data.username, data.password);

        await use(page);
    },
})

exports.expect = base.expect;