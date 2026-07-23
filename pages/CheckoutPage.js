const {test, expect} = require('@playwright/test')
const fakerUtils = require('../utils/fakerUtils')

class CheckoutPage {

    constructor(page) {
      this.page = page;
      this.checkoutTitle = page.locator('.title');
      this.firstName = page.getByPlaceholder('First Name');
      this.lastName = page.getByPlaceholder('Last Name');
      this.postalCode = page.getByPlaceholder('Zip/Postal Code');
      this.cancelButton = page.getByRole('button', { name : 'Cancel'});
      this.continueButton = page.getByRole('button', {name : 'Continue'});
    }
    

    async validateCheckout(){
     await expect(this.checkoutTitle).toHaveText('Checkout: Your Information');
     await expect(this.cancelButton).toBeVisible();
     await expect(this.continueButton).toBeVisible();
    }

    async clickContinueButton(){
        await this.firstName.fill(fakerUtils.getFirstName());
        await this.lastName.fill(fakerUtils.getLastName());
        await this.postalCode.fill(fakerUtils.getPostalCode());
        await this.continueButton.click();
    }
}
module.exports = CheckoutPage;