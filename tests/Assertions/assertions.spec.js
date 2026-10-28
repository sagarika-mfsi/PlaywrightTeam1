import { test, expect } from '@playwright/test';
//const { expect } = require('./custom-expect');

test('Built-in assertions', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const uname = page.locator('#user-name');
    const pwd = page.locator('#password');
    const loginButton = page.locator('#login-button');

    await expect(uname).toBeVisible();
    await expect(pwd).toBeEnabled();
    await expect(loginButton).toBeVisible();

    await uname.fill('standard_user');
    await pwd.fill('secret_sauce');
    await loginButton.click();

    await expect(page).toHaveURL(/inventory\.html$/);

    await expect(page.locator('span[data-test="title"]')).toHaveText('Products');

    await expect(page.locator('.inventory_item')).toHaveCount(6);


})

test('Hard vs. soft assertions', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    const loginButton = page.locator('#login-button');
    await expect(loginButton).toBeVisible();

    await expect.soft(page.locator('.login_logo')).toHaveText('test');

    await loginButton.click();
    console.log('Login button clicked');
})


test.only('Custom assertion logic', async ({ page }) => {
    expect('abc_123.jpg').toStartWithAssetPrefix();
})

expect.extend({
    toStartWithAssetPrefix(received) {
        const pass = received.startsWith('asset_');
        return {
            pass,
            message: () =>
                `Expected "${received}" to start with "asset_"`,
        };
    },
});

expect.extend({
    toHaveValidAssetExtension(received) {
        const lower = received.toLowerCase();
        const pass = lower.endsWith('.jpg') || lower.endsWith('.png') || lower.endsWith('.pdf')
        return {
            pass,
            message: () =>
                `Expected "${received}" to have a valid asset extension (.jpg, .png, or .pdf)`,
        };
    },
});

test('Custom assertion logic2', async () => {
    expect('abc_123.jpg').toStartWithAssetPrefix();
    // expect('abc_123.jpg').toStartWithAssetPrefix();
});

test.only('Custom assertion logic3', async () => {
    //expect('abc_123.jpg').toHaveValidAssetExtension();
    expect('abc_123.tiff').toHaveValidAssetExtension();
});
