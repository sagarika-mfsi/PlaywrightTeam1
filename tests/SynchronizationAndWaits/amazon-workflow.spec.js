
const { test, expect } = require('@playwright/test');

test('Amazon product search and add to cart workflow', async ({ page }) => {

    await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });

    const searchBox = page.locator('#twotabsearchtextbox');

    await searchBox.waitFor({ state: 'visible', timeout: 10000 });

    await searchBox.fill('wireless mouse');

    await searchBox.press('Enter');

    await page.waitForURL(/\/s\?/, { timeout: 15000 });

    const products = page.locator('div[data-component-type="s-search-result"]');

    await expect(products.first()).toBeVisible({ timeout: 15000 });

    await expect(products).not.toHaveCount(0);

    console.log('Search results displayed');

    const firstProduct = products.first().locator('h2 a');

    await firstProduct.click();

    const productTitle = page.locator('#productTitle');

    await productTitle.waitFor({ state: 'visible', timeout: 15000 });

    await expect(productTitle).toBeVisible();

    const productImage = page.locator('#landingImage');

    await productImage.waitFor({ state: 'visible', timeout: 10000 });

    await expect.poll(async () => {
        return productImage.evaluate(img =>
            img.complete && img.naturalWidth > 0
        );
    }, {
        timeout: 10000
    }).toBe(true);

    console.log('Product image loaded');

    const addToCart = page.locator('#add-to-cart-button');

    await addToCart.scrollIntoViewIfNeeded();

    await expect(addToCart).toBeVisible({
        timeout: 10000
    });

    await addToCart.click();

    const cartCount = page.locator('#nav-cart-count');

    await expect(cartCount).toHaveText(/[1-9]\d*/, {
        timeout: 15000
    });

    console.log('Cart count:', await cartCount.innerText());

    const cartLink = page.locator('#nav-cart');

    await expect(cartLink).toBeVisible();

    await cartLink.click();

    await page.waitForURL(/\/cart/, { timeout: 15000 });

    await expect(page).toHaveTitle(/Amazon/);

    const cartItems = page.locator('[data-name="Active Items"]');

    await expect(cartItems).toBeVisible({ timeout: 15000 });

    console.log('Cart page opened successfully');
});
