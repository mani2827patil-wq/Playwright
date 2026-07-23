
const { test, expect } = require('../base/BaseTest');
const InventoryPage = require('../pages/InventoryPage')
const LoginPage = require('../pages/LoginPage')
const data = require('../utils/testData');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CheckoutOverviewPage = require('../pages/CheckoutOverviewPage');
const CheckoutCompletePage = require('../pages/CheckoutCompletePage');


test('Add product to cart', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.sortProductName();
    await inventory.addToCart();
    await inventory.shoppingCart()

    const cart = new CartPage(page);
    await cart.validateYourCart();
    await cart.checkout();

    const checkout = new CheckoutPage(page);
    await checkout.validateCheckout();
    await checkout.checkoutContinue();

    const checkoutOverview = new CheckoutOverviewPage(page);
    await checkoutOverview.validateCheckoutOverview();

    const checkoutData = await checkoutOverview.getCheckoutData();
    expect(checkoutData.productName).toBe('Sauce Labs Backpack');
    expect(checkoutData.quantity).toBe('1');
    expect(checkoutData.price).toBe('$29.99');
    expect(checkoutData.total).toBe('Total: $32.39');
 
    await checkoutOverview.finishCheckout();

    const completeCheckout = new CheckoutCompletePage(page);
    await completeCheckout.validateCheckoutComplete();
    await completeCheckout.openMenu();
    await completeCheckout.validateMenuItems();
    await completeCheckout.logoutFromApplication();
})