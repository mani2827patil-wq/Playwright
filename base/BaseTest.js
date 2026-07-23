
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const data = require('../utils/testData');


test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const login = new LoginPage(page);
    await login.login(data.username, data.password);
})

module.exports = { test, expect};