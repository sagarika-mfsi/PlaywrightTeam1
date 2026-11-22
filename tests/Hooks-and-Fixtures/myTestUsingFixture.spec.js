const { test, expect } = require('./fixtures.js');

test('Verify products page', async ({ loggedInPage }) => {

    await expect(loggedInPage).toHaveURL(/inventory/);

});

test('Verify products heading', async ({ loggedInPage }) => {

    await expect(loggedInPage.locator('.title')).toHaveText('Products');

});