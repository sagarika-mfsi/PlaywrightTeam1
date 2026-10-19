import { test, expect } from '@playwright/test';
test(
    'Practice CSS locators on Amazon', async ({ page }) => {
        await page.goto('https://www.amazon.in/');

        const searchBox = page.locator('input#twotabsearchtextbox');
        await expect(searchBox).toBeVisible();

        await searchBox.fill('laptop');
        await page.locator('#nav-search-submit-button').click();

        const products = page.locator('.s-product-image-container');
        console.log('Product count:', await products.count());

        const titles = page.locator('div[data-cy*="title"]');
        console.log(await titles.allTextContents());

        const prices = page.locator('span.a-price:nth-of-type(2)');
        console.log(await prices.allTextContents());
        
    });