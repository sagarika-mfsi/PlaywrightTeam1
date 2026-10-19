const { test, expect } = require('@playwright/test');
test(
    'radioBox_Handle_playwright', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');

        await page.locator('#female').check();
        const ele = await page.getByLabel('Female');
        await expect(ele).toBeChecked();
        //await expect(ele.isChecked()).toBeTruthy();

        const male = await page.locator('#male');
        //console.log(await page.getByLabel('Male').count());
        await expect(male).not.toBeChecked();
    }
)

