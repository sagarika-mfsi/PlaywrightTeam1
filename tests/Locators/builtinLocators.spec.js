import { test, expect } from '@playwright/test'
test(
    'playwright_Builtin locators', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //getByAltText
        const logo = await page.getByAltText('company-branding');
        await expect(logo).toBeVisible();

        //getByPlaceholder
        const uName = await page.getByPlaceholder('Username');
        const pwd = await page.getByPlaceholder('Password');
        await uName.fill('Admin');
        await pwd.fill('admin123');

        //getByRole
        const login = await page.getByRole('button', { type: "submit" });
        await login.click();

        //getByText
        const alternate = await page.locator('//div/ul/li/span/p').textContent();
        await expect(await page.getByText(alternate)).toBeVisible();

        //getByLabel
        //getByTestId
        //getByTitle
    }
)
