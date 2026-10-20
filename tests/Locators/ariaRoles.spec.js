import { test, expect } from '@playwright/test';
test(
    'ARIA ROLES in playwright', async ({page})=>{
        
        await page.goto('https://www.naukri.com/');

        const register = page.getByRole('link', { name: 'Register' });
        await register.click();
        
        

    }
)