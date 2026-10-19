const { page } = require('@playwright/test');

test(
    'xpath in playwright', async ({ page }) => {
        //click login button(xpath)
        await page.locator("//button[text()='Log in']").click();


        //verify after login the button convert to logout---xpath
        const logoutLink = await page.locator("//a[text()='Log out']");
        await expect(logoutLink).toBeVisible();
    }
)