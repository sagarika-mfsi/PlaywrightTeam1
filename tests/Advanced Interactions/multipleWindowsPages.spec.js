import { test, expect } from '@playwright/test'

test('Automate Multiple Tabs', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/windows")

    await expect(page.locator('h3')).toHaveText('Opening a new window')

    console.log("Parent page title:", await page.title());

    const [childPage] = await Promise.all([//operation1
        page.context().waitForEvent('page'), page.locator('text=Click Here').click()])

    await childPage.waitForLoadState()
    console.log("Child Window Title.", await childPage.title())
    await expect(childPage.locator('h3')).toHaveText('New Window')

    page.bringToFront();
    console.log("Back to parent page:", await page.title())

    await childPage.close();

}
)