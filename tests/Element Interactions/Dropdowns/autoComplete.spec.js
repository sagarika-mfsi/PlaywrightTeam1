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

    const opt = page.locator('#autosuggest_snippet_1 div.tw-flex-row');

    await expect(opt.first()).toBeVisible(); //wait for auto suggestion

    const options = await page.$$('#autosuggest_snippet_1 div.tw-flex-row');

    let selectedSuggestionText = '';
    for (let i = 0; i < options.length; i++) {

        const text = (await options[i].innerText()).trim(); // innerText matches rendered visible text
        //
        if (text.toLowerCase().includes('healthy')) {

            expect(text.toLowerCase()).toContain('healthy');
            selectedSuggestionText = text.toLowerCase();;
            await options[i].click();
            break;
        }
    }
    await expect(search).toHaveValue(selectedSuggestionText);
    await expect(page).toHaveURL('https://blinkit.com/s/?q=healthy%20biscuit');
}
)


