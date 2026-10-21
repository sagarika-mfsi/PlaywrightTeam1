const { test, expect } = require('@playwright/test');

test('Textbox handling', async ({ page }) => {
    await page.goto('https://www.linkedin.com/login/');

    const email = page.getByRole('textbox', { name: 'Email or phone' });

    await expect(email).toBeVisible();
    await expect(email).toBeEnabled();

    await email.fill('sagarika');

    await expect(email).toHaveValue('sagarika');

    await email.fill('sagarika123');
    await expect(email).toHaveValue('sagarika123');

    const value = await email.inputValue();
    console.log(value);

    await email.clear();
    await expect(email).toHaveValue('');
});