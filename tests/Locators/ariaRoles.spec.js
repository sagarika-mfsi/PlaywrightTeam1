import { test } from '@playwright/test';
test(
    'ARIA ROLES in playwright', async ({page})=>{
        
        await page.goto('https://www.naukri.com/');

        const register = page.getByRole('link', { name: 'Register' });
        await register.click();

    }
)

test(
    'ARIA ROLES NYKAA', async ({page})=>{

        await page.goto('https://www.nykaa.com/');
        const loginButton = page.getByRole('button', { name: 'Sign in' });
        await loginButton.click();
    }
)


test.only(
    'ARIA ROLES Swiggy', async ({page})=>{

        await page.goto('https://www.amazon.in/');
        const searchbox = page.getByRole('searchbox')
        await searchbox.fill('toys');
    }
)