const { test, expect } = require('@playwright/test')

class CheckoutOverviewPage {

    constructor(page){
        this.page = page;
        this.checkoutOverviewTitle = page.locator('.title');
        this.inventoryItemName = page.locator('.inventory_item_name');
        this.cartQuantity = page.locator('.cart_quantity');
        this.inventoryItemPrice = page.locator('.inventory_item_price');
        this.paymentInfo = page.locator('[data-test="payment-info-label"]');
        this.shippingInfo = page.locator('[data-test="shipping-info-label"]');
        this.priceTotal = page.locator('[data-test="total-info-label"]');
        this.itemTotal = page.locator('[data-test="subtotal-label"]');
        this.tax = page.locator('.summary_tax_label');
        this.total = page.locator('.summary_total_label');
        this.cancelButton = page.getByRole('button', {name : 'Cancel'});
        this.finishButton = page.getByRole('button', {name : 'Finish'});
    }

    async validateCheckoutOverview(){
        await expect(this.checkoutOverviewTitle).toHaveText('Checkout: Overview');
        await expect(this.paymentInfo).toHaveText('Payment Information:');
        await expect(this.shippingInfo).toHaveText('Shipping Information:');
        await expect(this.cancelButton).toBeVisible();
        await expect(this.finishButton).toBeVisible();

    }

    async getCheckoutData() {
    return {
        productName: await this.inventoryItemName.textContent(),
        quantity: await this.cartQuantity.textContent(),
        price: await this.inventoryItemPrice.textContent(),
        itemTotal: await this.itemTotal.textContent(),
        tax: await this.tax.textContent(),
        total: await this.total.textContent()
    };
}

    async finishCheckout(){
        await this.finishButton.click();
    }
}
module.exports = CheckoutOverviewPage;