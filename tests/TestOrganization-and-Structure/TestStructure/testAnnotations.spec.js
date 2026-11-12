const { test, expect } = require('@playwright/test');
test.only('Verify login functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test.skip('Verify payment functionality', async ({ page }) => {
    await page.goto('https://google.com');
});

test('skip this test', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Still working on it');
});

test.fail('Verify incorrect password', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.locator('#password').fill('wrong_password');

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory/);
    //test.fail();
});

test.fixme('Verify forgot password functionality', async () => {
    // Functionality is currently broken.
});

test('Large file upload', async ({ page }) => {

    test.slow();
    await page.goto('https://example.com');
    // Upload a large file

});