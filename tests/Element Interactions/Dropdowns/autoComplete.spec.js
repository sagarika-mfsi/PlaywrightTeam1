const { test, expect } = require('@playwright/test');

test('Auto suggestive dropdown', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');

    const searchbox = page.getByRole('combobox', { name: 'Search' });
    await searchbox.fill('testbook');

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
}
)

test('Auto suggestive dropdown Blinkit', async ({ page }) => {
    await page.goto('https://blinkit.com/');
    await expect(page).toHaveTitle('30,000+ products delivered to your doorstep | Blinkit');


    const searchbox = await page.waitForSelector('div.SearchBar__AnimationWrapper-sc-16lps2d-1');
    await searchbox.click();

    const search = page.getByRole('textbox', { name: 'Search for atta dal and more' });
    await search.fill('biscuits');

    await page.waitForSelector('#autosuggest_snippet_1 div.tw-flex-row');

    const options = await page.$$('#autosuggest_snippet_1 div.tw-flex-row');

    for (let i = 0; i < options.length; i++) {

        const text = await options[i].innerText(); // innerText matches rendered visible text
        //
        if (text.toLowerCase().includes('healthy')) {//match exact text
             
             //assert
            await options[i].click(); //
            //assert
            break;
        }
    }
    
    await expect(page).toHaveURL('https://blinkit.com/s/?q=healthy%20biscuit');

}
)