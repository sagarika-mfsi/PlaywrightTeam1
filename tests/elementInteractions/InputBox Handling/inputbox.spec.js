import { test, expect } from '@playwright/test';
test(
    'inputBox_Handling', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        const ele = await page.locator('id=name');
        await expect(ele).toBeEnabled();
        await expect(ele).toBeVisible();
        await expect(ele).toBeEmpty();
        await expect(ele).toBeEditable();
        await page.getByLabel('Name:').fill('SAGARIKA');
    }
)
