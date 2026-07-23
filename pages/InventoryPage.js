
const { test, expect } = require('@playwright/test')

class InventoryPage {

    constructor(page) {
        this.page = page
        this.productText = page.getByText('Products');
        this.inventoryItemName = page.locator('.inventory_item_name').first();
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCartButton = page.locator('.shopping_cart_link')
    }


    async verifyHomePage() {
        await expect(this.productText).toHaveText('Products')
    }

    async addToCart() {
        await expect(this.inventoryItemName).toHaveText('Sauce Labs Backpack');
        await this.addToCartButton.click();
    }

    async shoppingCart() {
        await this.shoppingCartButton.click()

    }
}
module.exports = InventoryPage;