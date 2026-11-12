const { test, expect } = require('@playwright/test');

test('Select departure date in flight booking', async ({ page }) => {

    await page.goto('https://www.makemytrip.com/flights/');

    await page.locator('label[for="departure"]').click();

    const calendar = page.locator('.DayPicker');
    await expect(calendar).toBeVisible();

    const month = calendar.locator('.DayPicker-Caption').first();
    console.log(await month.innerText());

    await calendar.locator('[aria-label="Sun Dec 20 2026"]').click();

});

test('Yatra flight datepicker handling', async ({ page }) => {

    await page.goto('https://www.yatra.com/');
    await page.waitForLoadState('domcontentloaded');
    
});