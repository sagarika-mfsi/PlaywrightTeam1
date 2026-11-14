const { test, expect } = require('../Hooks-and-Fixtures/fixtures.spec');

test('Verify products page', async ({ loggedInPage }) => {

    await expect(loggedInPage).toHaveURL(/inventory/);

});

test('Verify products heading', async ({ loggedInPage }) => {

    await expect(loggedInPage.locator('.title')).toHaveText('Products');

});