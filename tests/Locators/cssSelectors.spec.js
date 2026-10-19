import { test } from '@playwright/test';
test(
    'CSS Locator', async ({ page }) => {
        await page.goto('https://www.facebook.com/');

        await page.locator('input[autocomplete*="username"]').fill('sagarikas@mindfiresolutions.com');
        //or
        //await page.click('input[autocomplete*="username"]');

        await page.locator('input[type="password"]').fill('test@123');

    })