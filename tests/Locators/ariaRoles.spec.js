import { test } from '@playwright/test';
test(
    'ARIA ROLES in playwright', async ({ page }) => {

        await page.goto('https://www.naukri.com/');

        const register = page.getByRole('link', { name: 'Register' });
        await register.click();

    }
)

test(
    'ARIA ROLES NYKAA', async ({ page }) => {

        await page.goto('https://www.nykaa.com/');
        const loginButton = page.getByRole('button', { name: 'Sign in' });
        await loginButton.click();
    }
)

test(
    'ARIA ROLES Swiggy', async ({ page }) => {

        await page.goto('https://www.amazon.in/');
        const searchbox = page.getByRole('searchbox')
        await searchbox.fill('toys');
    }
)

test.only(
    'ARIA LOCATORS', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        const textarea = page.getByRole('textbox', { name: "Address:" });
        await textarea.fill('hello world');

        const checkbox = page.getByRole('checkbox', { name: 'Wednesday' });
        await checkbox.check();
        //add assertions

        const radio = page.getByRole('radio', { name: 'Female' });
        await radio.check();
        //add assertions

        const heading = page.getByRole('heading', { name: 'Automation Testing Practice' });
        console.log(await heading.innerText());

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        const logo = page.getByRole('img', { name: 'naveenopencart' });
        await expect(logo).toBeVisible();

    }
)
