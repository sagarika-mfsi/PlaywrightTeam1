const { test } = require('@playwright/test');


test(
    'mouse hover and click actions  using playwright', async ({ page }) => {
        await page.goto('https://practice-automation.com/hover/');
        const ele = page.locator('#mouse_over');
        // await ele.hover();


        // await page.goto('https://practice-automation.com/click-events/');
        const mouseClick = page.locator('button[onclick="cowSound()"]');
        // await mouseClick.click({button:'right'});


        await page.goto('https://testautomationpractice.blogspot.com/');
        const doubleClick = page.locator('button[ondblclick="myFunction1()"]');
        // await doubleClick.dblclick();


    }
)
