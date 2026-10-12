const {test,expect} = require('@playwright/test');
test(
    'my first playwright demo test', async ({page})=>{
        await page.goto('https://www.amazon.com/');
    }
)