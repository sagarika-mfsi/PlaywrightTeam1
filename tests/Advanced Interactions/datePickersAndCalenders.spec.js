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

    const departure = page.locator(".DepartureDate");

    await expect(departure).toBeVisible();
    await departure.click();

    const departureDate = page.locator('div[aria-label*="December 20"]');

    await expect(departureDate).toBeVisible();
    await departureDate.click();

    await expect(departure).toContainText("20");

    console.log('Departure date selected successfully');

    const returnDate = page.locator('div[aria-label*="Return Date"]');

    await expect(returnDate).toBeVisible();
    await returnDate.click();

    const selectedReturnDate = page.locator('div[aria-label*="December 26"]');

    await expect(selectedReturnDate).toBeVisible();
    await selectedReturnDate.click();

    await expect(returnDate).toContainText("26");

    console.log('Return date selected successfully');

    console.log('Departure: ', await departure.textContent());
    console.log('Return: ', await returnDate.textContent());

});
