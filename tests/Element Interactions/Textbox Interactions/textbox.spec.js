const { test, expect } = require('@playwright/test');

test('Textbox handling', async ({ page }) => {
    await page.goto('https://www.linkedin.com/login/');

    const email = page.getByRole('textbox', { name: 'Email or phone' });

    // Verify textbox is available
    await expect(email).toBeVisible();
    await expect(email).toBeEnabled();

    // Enter text
    await email.fill('sagarika');

    // Verify entered value
    await expect(email).toHaveValue('sagarika');

    // Replace the existing value
    await email.fill('sagarika123');
    await expect(email).toHaveValue('sagarika123');

    // Read the value
    const value = await email.inputValue();
    console.log(value);

    // Clear the textbox
    await email.clear();
    await expect(email).toHaveValue('');
});