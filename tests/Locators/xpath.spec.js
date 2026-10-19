const { test, expect } = require('@playwright/test');

test(
    'xpath in playwright', async ({ page }) => {

        await page.goto('https://fudk.in/');

        await expect(page).toHaveTitle('Foodk');
        const pageTitle = page.locator('//html/head/title');

        await page.locator('//input[@data-testid="hero-location-input"]/..').click();
        await page.locator('xpath=//input[@placeholder="Enter your delivery location"]').fill('bhubaneswar');

        const findFoodButton = await page.locator('xpath=//a[contains(@data-testid,"find-food-btn")]');
        await expect(findFoodButton).toBeEnabled();
        await findFoodButton.click();

        await page.locator('(//a[text()="Restaurants"])[1]').click();

        await page.locator('//*[@type="text"]').fill('jyoti');
        const newOpt = page.locator('//*[@data-testid="restaurants-filter-new" or text()="New"]');

    }
)

test.only(
    'xpath axes practise', async ({ page }) => {
        await page.goto('https://www.bewakoof.com/');

        const allAncestorDiv = page.locator("(//span[text()='Offers'])[1]/ancestor::div");
        console.log(await allAncestorDiv.allTextContents());

        const searchBar = page.locator('//form[contains(@class,"header_search_containe")]/child::li/input');
        await searchBar.fill('tops');

        const leftHeaderItems = page.locator('//div[@class="header_header_left_container__Qzy8S"]/a/following-sibling::nav');
    }
)