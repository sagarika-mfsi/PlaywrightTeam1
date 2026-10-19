const { test } = require('@playwright/test');

test(
    'mouse d&d using playwright', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        const src = page.locator('#draggable');
        const trg = page.locator('#droppable');


        //approach1
        //await src.dragTo(trg);


        //approach2
        await src.hover();
        await page.mouse.down();


        await trg.hover();
        await page.mouse.up();
    })
