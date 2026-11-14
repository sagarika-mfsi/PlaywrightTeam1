const { test: base, expect } = require('@playwright/test');

const test = base.extend({

    loggedInPage: async ({ page }, use) => {

        console.log('Fixture setup');

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();
        console.log("Login successful");
        
        await use(page);
        console.log('Fixture teardown completed');
    }

});

module.exports = { test, expect };