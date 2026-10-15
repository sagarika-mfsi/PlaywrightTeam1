const { test, devices } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test('browser handling', async () => {

    const browser = await chromium.launch();

    const context1 = await browser.newContext();
    const page1 = await context1.newPage();

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page1.goto('https://www.amazon.com/');
    await page2.goto('https://www.flipkart.com/');

    await browser.close();
});

test.only(
    'light mode', async ({ page }) => {
        await page.setViewportSize({
            width: 500,
            height: 500
        });

        await page.goto('https://www.flipkart.com/');
    }
)