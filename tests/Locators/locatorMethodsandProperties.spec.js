const { test, expect } = require('@playwright/test');

test(
    'Locator methods in playwright', async ({ page }) => {

        await page.goto('https://www.bewakoof.com/');
        await expect(page).toHaveTitle('Online Fashion Shopping for Men, Women, Accessories - Bewakoof.com')

        const searchbox = page.locator('.header_search_field_input__R0r_M');

        await searchbox.fill('tops');
        await searchbox.clear();
        await searchbox.fill('pants');
        await searchbox.press('Enter');

        await page.locator('.header_left_menu_list__xggfD li:nth-of-type(2)').hover();

        const loginLink = page.locator('a[data-testid="login-link"]');
        console.log(await loginLink.textContent());
    }
)