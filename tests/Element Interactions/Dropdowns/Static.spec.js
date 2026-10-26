const { test, expect } = require('@playwright/test');

test(
    'Static dropdown in playwright', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/dropdown');
        await expect(page).toHaveTitle('Dropdown menus page for Automation Testing Practice');

        const dropdown = page.locator('#dropdown');
        await dropdown.selectOption({ value: "1" });
        await expect(dropdown).toHaveValue('1');

        await dropdown.selectOption({ index: 2 });
        await expect(dropdown).toHaveValue('2');
    }
)

test(
    'Count and print the available options', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/dropdown');
        await expect(page).toHaveTitle('Dropdown menus page for Automation Testing Practice');

        const dropdown = page.locator('#dropdown');
        const optionCount = dropdown.locator('option');

        await expect(optionCount).toHaveCount(3);

        console.log(await optionCount.allTextContents());
        await expect(dropdown.locator('option')).toHaveText(['Please select an option', 'Option 1', 'Option 2']);

        const lastOption = optionCount.last();
        await expect(lastOption).toHaveText('Option 2');
    }
)