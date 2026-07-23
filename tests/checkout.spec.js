
const { test, expect } = require('../base/baseTest');
const InventoryPage = require('../pages/InventoryPage')
const LoginPage = require('../pages/LoginPage')
const data = require('../test-data/users');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CheckoutOverviewPage = require('../pages/CheckoutOverviewPage');
const CheckoutCompletePage = require('../pages/CheckoutCompletePage');
const products = require('../test-data/products')


test('Verify checkout flow', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.sortProductName();
    await inventory.clickAddToCart();
    await inventory.clickShoppingCart()

    const cart = new CartPage(page);
    await cart.validateYourCart();
    await cart.clickCheckoutButton();

    const checkout = new CheckoutPage(page);
    await checkout.validateCheckout(); 
    await checkout.clickContinueButton();

    const checkoutOverview = new CheckoutOverviewPage(page);
    await checkoutOverview.verifyCheckoutOverviewPage();

    const checkoutData = await checkoutOverview.getCheckoutData();
    expect(checkoutData.productName).toBe(products.backpack.name);
    expect(checkoutData.quantity).toBe('1');
    expect(checkoutData.price).toBe(products.backpack.price);
    expect(checkoutData.total).toBe('Total: ' + products.backpack.total);
 
    await checkoutOverview.clickFinishButton();

    const completeCheckout = new CheckoutCompletePage(page);
    await completeCheckout.validateCheckoutComplete();
    await completeCheckout.openMenu();
    await completeCheckout.validateMenuItems();
    await completeCheckout.logoutFromApplication();
})