
const {test, expect} = require ('@playwright/test')

class CartPage{

  constructor(page){
    this.page = page;
    this.cartTitle = page.locator('.title');
    this.inventoryItemName =page.locator('.inventory_item_name');
    this.itemDescription = page.locator('.inventory_item_desc');
    this.cartQuality = page.locator('.cart_quantity')
    this.removeButton = page.getByRole('button', { name: 'Remove'});
    this.continueShoppingButton = page.getByRole('button', { name : 'Continue Shopping'});
    this.checkoutButton = page.getByRole('button', { name : 'Checkout'});
  }

  async validateYourCart(){
    await expect(this.cartTitle).toHaveText('Your Cart');
    await expect(this.inventoryItemName).toHaveText('Sauce Labs Backpack');
    await expect(this.itemDescription).toContainText('carry.allTheThings()');
    await expect(this.cartQuality).toHaveText('1');
    await expect(this.removeButton).toBeVisible();
    await expect(this.continueShoppingButton).toBeVisible();
  }

  async checkout(){
    await this.checkoutButton.click();
  }

}

module.exports= CartPage;