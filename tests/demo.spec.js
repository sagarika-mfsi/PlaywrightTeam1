const {test,expect} = require('@playwright/test');
test(
    'my first playwright demo test', async ({page})=>{
        await page.goto('https://www.amazon.com/');
        await expect(page).toHaveTitle('Amazon.com. Spend less. Smile more.');
        await page.locator('input#twotabsearchtextbox').fill('laptop');
        await page.locator('#nav-search-submit-button').click();
    }
)