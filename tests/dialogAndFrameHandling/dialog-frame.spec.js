import { test, expect } from '@playwright/test'

test("SimpleAlterHandling", async ({ page }) => {

    await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/")

    page.once('dialog', async dialog => {

        expect(dialog.type()).toBe('alert');

        expect(dialog.message()).toContain('I am an alert box!')

        await dialog.accept()

    })
    await page.getByText('Show alert box').click()

    await expect(page.getByText('You triggered and handled the alert dialog')).toBeVisible();

})

test("ConfirmAlterHandling", async ({ page }) => {

    await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/")

    page.once('dialog', async dialog => {

        expect(dialog.type()).toBe('confirm');

        expect(dialog.message()).toContain('I am a confirm alert')

        await dialog.accept()
        // await dialog.dismiss()

    })

    await page.getByText('Show confirm box').click()

    await expect(page.locator('#confirmreturn')).toHaveText('true')

})

test("PromptAlterHandling", async ({ page }) => {

    await page.goto("https://testpages.herokuapp.com/pages/basics/alerts-javascript/")

    page.once('dialog', async dialog => {

        expect(dialog.type()).toBe('prompt');

        expect(dialog.message()).toContain('I prompt you')

        expect(dialog.defaultValue()).toBe('change me')

        await dialog.accept('Test ABC')

        // await dialog.accept()
        await dialog.dismiss()

    })

    await page.getByText('Show prompt box').click()

    await expect(page.locator('#promptreturn')).toHaveText('Test ABC')

})

test('console events', async ({page})=>{
    await page.goto('https://www.facebook.com/');
    page.on('console', message => {
    console.log('Console type:', message.type());
    console.log('Console message:', message.text());
});

})