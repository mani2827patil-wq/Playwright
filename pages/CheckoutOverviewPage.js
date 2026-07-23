const { test, expect } = require('@playwright/test')

class CheckoutOverviewPage {

    constructor(page){
        this.page = page;
        this.checkoutOverviewTitleLabel = page.locator('.title');
        this.productNameLabel = page.locator('.inventory_item_name');
        this.productQuantityLabel = page.locator('.cart_quantity');
        this.productPriceLabel = page.locator('.inventory_item_price');
        this.paymentInformationLabel = page.locator('[data-test="payment-info-label"]');
        this.shippingInformationLabel = page.locator('[data-test="shipping-info-label"]');
        this.priceTotal = page.locator('[data-test="total-info-label"]');
        this.itemTotalLabel = page.locator('[data-test="subtotal-label"]');
        this.taxLabel = page.locator('.summary_tax_label');
        this.totalLabel = page.locator('.summary_total_label');
        this.cancelButton = page.getByRole('button', {name : 'Cancel'});
        this.finishButton = page.getByRole('button', {name : 'Finish'});
    }

    async verifyCheckoutOverviewPage(){
        await expect(this.checkoutOverviewTitleLabel).toHaveText('Checkout: Overview');
        await expect(this.paymentInformationLabel).toHaveText('Payment Information:');
        await expect(this.shippingInformationLabel).toHaveText('Shipping Information:');
        await expect(this.cancelButton).toBeVisible();
        await expect(this.finishButton).toBeVisible();

    }

    async getCheckoutData() {
    return {
        productName: await this.productNameLabel.textContent(),
        quantity: await this.productQuantityLabel.textContent(),
        price: await this.productPriceLabel.textContent(),
        itemTotal: await this.itemTotalLabel.textContent(),
        tax: await this.taxLabel.textContent(),
        total: await this.totalLabel.textContent()
    };
}

    async clickFinishButton(){
        await this.finishButton.click();
    }
}
module.exports = CheckoutOverviewPage;