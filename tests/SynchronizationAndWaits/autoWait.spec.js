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

test('Slow Loading: Configure timeouts', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/slow', {timeout: 1,waitUntil: 'domcontentloaded'});

    await expect(page).toHaveTitle('The Internet');

    const heading = page.getByRole('heading', { name: 'Slow Resources' });

    await expect(heading).toBeVisible();
});

test('Explicit wait for element visibility', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.getByRole('button', { name: 'Start' }).click();

    const result = page.locator('#finish');

    await result.waitFor({ state: 'visible', timeout: 10000 });

    await expect(result).toContainText('Hello World!');
});

test('Wait until checkbox is detached', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

    const checkbox = page.locator('#checkbox');

    await expect(checkbox).toBeVisible();

    await page.getByRole('button', { name: 'Remove' }).click();

    await checkbox.waitFor({ state: 'detached', timeout: 10000 });

    await expect(checkbox).toHaveCount(0);

    await page.locator("//form/button[text()='Add']").click();
    await checkbox.waitFor({ state: 'visible', timeout: 10000 });

    await expect(checkbox).toBeVisible();
});

test('Explicit wait for URL change', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').fill('tomsmith');

    await page.locator('#password').fill('SuperSecretPassword!');

    page.getByRole('button', { name: 'Login' }).click()
    page.waitForURL('**/secure');

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

});

test('Wait for document load state', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/', { waitUntil: 'domcontentloaded' });

    await page.waitForLoadState('load');
    await expect(page).toHaveTitle('The Internet');
});

test('Assertion timeout example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.getByRole('button', { name: 'Start' }).click();

    const result = page.locator('#finish');

    await expect(result).toBeVisible({ timeout: 10000 });

    await expect(result).toContainText('Hello World!');
});

test('Action timeout example', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    const username = page.locator('#username');

    await username.fill('tomsmith', { timeout: 3000 });

    const password = page.locator('#password');

    await password.fill('SuperSecretPassword!', { timeout: 3000 });

    await page.getByRole('button', { name: 'Login' }).click({ timeout: 3000 });

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test('Navigation timeout example', async ({ page }) => {
    //test.setTimeout(60000); //Override timeout for an individual test
    await page.goto('https://the-internet.herokuapp.com/', { timeout: 15000, waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle('The Internet');
});