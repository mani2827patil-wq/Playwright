const { test, expect } = require("playwright/test");
const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");
const data = require('../utils/testData');

test('Login Test', async ({ page }) => {

    await page.goto('/');

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.login(data.username, data.password)
    await inventory.verifyHomePage();
})

