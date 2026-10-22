const { test, expect } = require('@playwright/test');
test(
    'radioBox_Handle_playwright', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');

        await page.locator('#female').check();
        const ele = page.getByLabel('Female');
        await expect(ele).toBeChecked();
        expect(await ele.isChecked()).toBeTruthy();

        const male = page.locator('#male');
        console.log(await page.getByLabel('Male').count());
        await expect(male).not.toBeChecked();
    }
)

test(
    'radioBox_Handle', async ({ page }) => {
        await page.goto('https://www.way2automation.com/practicesite5.html');
        await expect(page).toHaveTitle('Way2Automation Practice site');

        const others = page.getByRole('radio', { name: 'Other' });
        const male = page.locator("//label[text()=' Male']");
        const female = page.locator('input[value="Female"]');

        await expect(others).toBeVisible();
        await others.check();
        await expect(others).toBeChecked();

        await expect(male).not.toBeChecked();
        await expect(female).not.toBeChecked();
    }
)

test(
    'multiple radio button', async ({ page }) => {
        await page.goto('https://www.way2automation.com/practicesite5.html');
        await expect(page).toHaveTitle('Way2Automation Practice site');

        const male = page.locator("//label[text()=' Male']");
        const female = page.locator('input[value="Female"]');

        const total = page.locator("//input[@name='gender']");
        await expect(total).toHaveCount(3);

        await male.check();
        await expect(male).toBeChecked();

        await female.check();
        await expect(female).toBeChecked();

        const checkedCount = await page.locator('input[name="gender"]:checked').count();
        expect(checkedCount).toBe(1);

    }
)
test(
    'keyboard actions on radio button', async ({ page }) => {
        await page.goto('https://www.way2automation.com/practicesite5.html');
        await expect(page).toHaveTitle('Way2Automation Practice site');

        const male = page.locator("//label[text()=' Male']");
        const female = page.locator('input[value="Female"]');

        await male.focus();
        await page.keyboard.press('Space');
        await expect(male).toBeChecked();

        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Space');
        await expect(female).toBeChecked();

    }
)