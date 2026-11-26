const { test, expect } = require('@playwright/test');
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

test(
    'viewport size for specific test', async ({ page }) => {
        await page.setViewportSize({
            width: 500,
            height: 500
        });

        await page.goto('https://www.flipkart.com/');
    }
)

test('Handle multiple pages', async ({ context }) => {

    const page1 = await context.newPage();
    await page1.goto('https://www.facebook.com/');

    const page2 = await context.newPage();
    await page2.goto('https://playwright.dev');

    const page3 = await context.newPage();
    await page3.goto('https://www.wikipedia.org');

    const allPages = context.pages();

    console.log('Total pages:', allPages.length);

    await expect(allPages[1]).toHaveTitle(/Playwright/);
});

test('Close a page', async ({ context }) => {

    const page1 = await context.newPage();
    await page1.goto('https://example.com');

    const page2 = await context.newPage();
    await page2.goto('https://playwright.dev');

    await page2.close();

});

test.only(
    'Handling multiple pages in playwright', async ({ browser }) => {

        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://freelance-learn-automation.vercel.app/login');

        const [newPage] = await Promise.all(
            [
                context.waitForEvent('page'),
                page.locator('#login_container a:nth-of-type(4)').click()
            ]
        )

        await newPage.close();
    }
)


test('Handle a new tab', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const popupPromise = page.waitForEvent('popup');

  await page.getByText('Click Here').click();

  const popup = await popupPromise;

  await expect(popup).toHaveURL(/\/windows\/new/);

  await expect(popup.locator('h3')).toHaveText('New Window');
});


test('newTab Handle', async ({page, context})=>{
    await page.goto('https://demoqa.com/browser-windows');

    const tabHandle = context.waitForEvent('page');
    await page.locator('#tabButton').click();
    const newTab = await tabHandle;

    await newTab.bringToFront();
    await expect(newTab.locator('#sampleHeading')).toHaveText('This is a sample page');

    await page.bringToFront();
    await page.close();
})