const { test } = require('@playwright/test');


test(
    'keyboard actions', async ({ page }) => {
        await page.goto('https://www.facebook.com/');
        const email = page.getByRole('textbox', { name: 'Email address or mobile number' });
        await email.pressSequentially('sagarikas@mindfiresolutions.com')

        const pwd = page.getByRole('textbox', { name: 'Password' });
        await pwd.type('test123', { delay: 1000 });
        await pwd.clear();
        await pwd.press('$');
        
        await page.getByRole('button', { name: 'Log in' }).press('Enter');
    }
)
test(
    'keyboard actions Google', async ({ page }) => {
        await page.goto('https://www.google.com/');
        const searchbox = page.getByRole('combobox', { name: 'Search' });
        await searchbox.fill('sagarika');
        await page.keyboard.press('Control+a');
        await page.keyboard.press('Control+c');
        await page.keyboard.press('Backspace');
        await page.keyboard.press('Control+v');
    })


test.only(
    'keyboard actions blinkit', async ({ page }) => {
        await page.goto('https://blinkit.com/');
        await page.getByText('Login').click();

        await page.keyboard.type('9861046024');
        await page.keyboard.down('ArrowLeft');
        await page.keyboard.down('Shift');

        for (let i = 1; i <= 5; i++) {
            await page.keyboard.down('ArrowLeft');
        }

        await page.keyboard.up('Shift');
        await page.keyboard.press('Backspace');
    }
)

