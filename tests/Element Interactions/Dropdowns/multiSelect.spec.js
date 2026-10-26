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