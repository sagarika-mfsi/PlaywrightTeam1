const { test, expect } = require('@playwright/test');

test(
    'checkbox handle', async ({ page }) => {

        await page.goto('https://www.way2automation.com/practicesite5.html');
        await expect(page).toHaveTitle('Way2Automation Practice site');

        const checkbox1 = page.getByLabel(' Automation');
        await expect(checkbox1).not.toBeChecked();
        await checkbox1.check();

        const preferences = [' Automation', ' API Testing', ' Performance', ' Security'];
        for (let options of preferences) {
            await page.getByLabel(options).check();
            await expect(page.getByLabel(options)).toBeChecked();
        }

        for (let options of preferences) {
            await page.getByLabel(options).uncheck();
            await expect(page.getByLabel(options)).not.toBeChecked();
        }
    }
)

test(
    'count and check', async ({ page }) => {

        await page.goto('https://www.way2automation.com/practicesite5.html');
        await expect(page).toHaveTitle('Way2Automation Practice site');

        const checkboxes = page.locator('input[type="checkbox"]');
        const total = await checkboxes.count()
        console.log(total);
        await expect(checkboxes).toHaveCount(total);

        for (let i = 0; i < total; i++) {
            await checkboxes.nth(i).check();
            await expect(checkboxes.nth(i)).toBeChecked();
        }
    }
)

test(
    'Checkbox handling with keyboard actions', async ({page})=>{
        await page.goto('https://www.way2automation.com/practicesite5.html');
        await expect(page).toHaveTitle('Way2Automation Practice site');

        const checkbox1 = page.getByLabel(' Automation');
        await checkbox1.focus();
        await page.keyboard.press('Space');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Space');
        
        await page.keyboard.press('Shift+Tab');
        await checkbox1.uncheck();

    }
)