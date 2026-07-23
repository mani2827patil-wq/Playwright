
const { test, expect } = require('@playwright/test');

class InventoryPage {

    constructor(page) {
        this.page = page
        this.productText = page.getByText('Products');
        this.inventoryItemName = page.locator('.inventory_item_name').first();
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCartButton = page.locator('.shopping_cart_link');
        this.sortDropdown = page.locator('.product_sort_container');
    }


    async verifyHomePage() {
        await expect(this.page).toHaveURL('/inventory.html');
        await expect(this.productText).toHaveText('Products')
        const products = this.page.locator('.inventory_item');
        await expect(products).toHaveCount(6);
    }

    async addToCart() {
        await expect(this.inventoryItemName).toContainText('Sauce Labs');
        await expect(this.addToCartButton).toBeVisible();
        await this.addToCartButton.click();
    }

    async sortProductName() {
        await this.sortDropdown.selectOption('az');
        await this.sortDropdown.selectOption({ index: 1 });
        await this.sortDropdown.selectOption({
            label: 'Price (low to high)'
        });

    }

    async shoppingCart() {
        await this.shoppingCartButton.click()

    }
}
module.exports = InventoryPage;