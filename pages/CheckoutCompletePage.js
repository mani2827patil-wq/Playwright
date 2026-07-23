const {test, expect } = require('@playwright/test')

class CheckoutCompletePage {

    constructor(page) {
        this.page= page;
        this.checkoutCompleteTitle = page.locator('.title');
        this.thankyouMessgae = page.getByText('Thank you for your order!');
        this.completeText = page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        this.backButton = page.getByRole('button', { name: 'Back Home' });
        this.generatePDForderButton = page.getByRole('button', {name: 'Generate PDF order'});
        this.menuButton = page.getByRole('button', { name: 'Open Menu'});
        this.allItem = page.locator('#inventory_sidebar_link');
        this.about = page.locator('#about_sidebar_link');
        this.logout = page.locator('#logout_sidebar_link');
        this.resetAppState = page.locator('#reset_sidebar_link');

    }


    async validateCheckoutComplete(){
        await expect(this.checkoutCompleteTitle).toHaveText('Checkout: Complete!');
        await expect(this.thankyouMessgae).toHaveText('Thank you for your order!');
        await expect(this.completeText).toContainText('our order has been dispatched');
        await expect(this.backButton).toBeVisible();
        await expect(this.generatePDForderButton).toBeVisible();
    }

    async openMenu(){
        await this.menuButton.click();
    }

    async validateMenuItems(){
        await expect(this.allItem).toHaveText('All Items');
        await expect(this.about).toHaveText('About');
        await expect(this.logout).toHaveText('Logout');
        await expect(this.resetAppState).toHaveText('Reset App State');
    }

    async logoutFromApplication(){
        await this.logout.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    }


}

module.exports = CheckoutCompletePage;