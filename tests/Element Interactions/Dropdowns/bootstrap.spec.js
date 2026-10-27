const { test, expect } = require('@playwright/test');

test('Bootstrap dropdown', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html');
    await expect(page).toHaveTitle('Practice Playground · Playwright Automation Practice');

    const dropdown = page.locator('#bd-job-title');
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toBeEnabled();

    await dropdown.click();

    const dropdownOptions = page.locator('#bd-job-title-menu>li');
    for (let i = 0; i < 10; i++) {
        await expect(dropdownOptions.nth(i)).toBeVisible();
    }

    const totalOptions = await dropdownOptions.count();
    expect(totalOptions).toBe(10);

    for (let i = 0; i < await dropdownOptions.count(); i++) {
        const option = dropdownOptions.nth(i);

        const text = await option.innerText();

        if (text.trim() === 'Automation Tester') {
            await option.click();
            break;
        }
    }

    const selectedValue = page.locator('span.bd-select-text');
    await expect(selectedValue).toBeVisible();
    await expect(selectedValue).toHaveText('Automation Tester');
})

test('approach2', async ({ page }) => {

    await page.goto('https://www.playwrightautomation.com/practice.html');

    await expect(page).toHaveTitle('Practice Playground · Playwright Automation Practice');

    const dropdown = page.locator('#bd-job-title');

    await expect(dropdown).toBeVisible();
    await expect(dropdown).toBeEnabled();

    await dropdown.click();

    const dropdownOptions = page.locator('#bd-job-title-menu > li');

    await expect(dropdownOptions).toHaveCount(10);

    for (let i = 0; i < 10; i++) {
        await expect(dropdownOptions.nth(i)).toBeVisible();
    }

    const automationTester = dropdownOptions.filter({ hasText: /^Automation Tester$/ });

    await expect(automationTester).toHaveCount(1);
    await automationTester.click();

    const selectedValue = page.locator('span.bd-select-text');

    await expect(selectedValue).toBeVisible();
    await expect(selectedValue).toHaveText('Automation Tester');

});