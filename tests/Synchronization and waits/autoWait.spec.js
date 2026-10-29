const { test, expect } = require('@playwright/test');

test('Dynamic Loading: Auto-waiting and visibility', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    await expect(page).toHaveTitle('The Internet');

    const startButton = page.locator('#start button');
    await startButton.click();

    const visibleText = page.locator('#finish');
    await visibleText.waitFor();

    await expect(visibleText).toHaveText('Hello World!');

})

test('Dynamic Loading: Attached vs. visible', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
    await expect(page).toHaveTitle('The Internet');

    const hiddenText = page.locator('#finish');
    await hiddenText.waitFor({ state: 'hidden' });

    const startButton = page.locator('#start button');
    await startButton.click();

    await hiddenText.waitFor({ state: 'visible' });

    await expect(hiddenText).toHaveText('Hello World!');
})

test('Dynamic Controls: Wait for an element to disappear', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    await expect(page).toHaveTitle('The Internet');

    const checkbox = page.locator('#checkbox input');
    await expect(checkbox).toBeVisible();

    const removeButton = page.getByRole('button', { name: 'Remove' });
    await removeButton.click();

    await checkbox.waitFor({ state: 'hidden' });
    await expect(checkbox).not.toBeAttached();

    const addButton = page.getByRole('button', { name: 'Add' });
    await addButton.click()
    await expect(page.locator('#checkbox')).toBeVisible();
})

test('Notification Messages: Assertion retries and test stability', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
    await expect(page).toHaveTitle('The Internet');

    const notificationLink = page.getByRole('link', { name: 'Click here' });

    const msg = page.locator('#flash');
    await expect(msg).toContainText(/Action successful|Action unsuccesful, please try again/);

    for (let i = 0; i < 5; i++) {
        await notificationLink.click();
        await expect(msg).toBeVisible();
        await expect(msg).toContainText(/Action successful|Action unsuccesful, please try again/);
    }
})