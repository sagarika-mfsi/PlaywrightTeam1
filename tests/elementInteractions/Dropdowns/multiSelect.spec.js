const { test, expect } = require('@playwright/test');

test(
    'Multi-select dropdowns', async ({ page }) => {
        await page.goto('https://qaautomationlabs.com/testing/select-dropdown.php');
        await expect(page).toHaveTitle('Dropdown & Select Automation Practice — UI Automation Playground | QA Automation Labs');

        const dropdown = page.locator('#countryDropdown');
        await dropdown.selectOption(['Canada', 'India']);
        await expect(dropdown).toHaveValues(['India', 'Canada']);
    }
)

test('multi select', async ({ page }) => {
    await page.goto('https://www.playwrightautomation.com/practice.html#section-dropdowns');
    await expect(page).toHaveTitle('Practice Playground · Playwright Automation Practice');

    const dropdown = page.locator('#colors');
    await dropdown.selectOption([
        { label: 'H&M' },
        { label: 'Nike' }
    ]);
    await expect(dropdown).toHaveValues(['nike', 'hm']);

    const selectedOptions = dropdown.locator('option:checked');
    await expect(selectedOptions).toHaveCount(2);

})