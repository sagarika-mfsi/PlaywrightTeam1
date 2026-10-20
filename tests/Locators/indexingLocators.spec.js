import { test } from '@playwright/test';
test(
    'indexing locators in playwright', async ({page})=>{
       
        await page.goto('https://www.dominos.co.in/');

        const headerElements = page.locator('.brand-header__nav>a');
        await headerElements.first().click();
        await headerElements.last().click();
        await headerElements.nth(2).click();
        console.log(await headerElements.count());
    }
)