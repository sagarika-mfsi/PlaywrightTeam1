const { test, expect } = require('@playwright/test');

test('iFrame handling', async ({ page }) => {
    await page.goto('https://practice-automation.com/iframes/');

    const frame = page.frameLocator('#iframe-1');
    await frame.locator('.navbar__items a:nth-of-type(3)').click();

    const text = frame.getByRole('heading', { name: "Playwright MCP" });
    await expect(text).toBeVisible();

    await page.goto('https://ui.vision/demo/webtest/frames/', { waitUntil: 'domcontentloaded' });

    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    const inputBox = frame1.locator('input[name="mytext1"]');

    await expect(inputBox).toBeVisible();
    await inputBox.fill('hello test1');


})
//Query: W3c school iframe > no locator only accessibility locator was there no id, name
//then how to locate

test(
    'Interact with iframe textbox', async ({ page }) => {
        await page.goto('https://www.w3schools.com/html/html_iframe.asp');
        const iframe = page.frameLocator("iframe[title='W3Schools HTML Tutorial']");

        await iframe.locator('#tnb-google-search-container').click();
        await iframe.locator('#tnb-google-search-input').fill('js');

        await iframe.locator('#tnb-google-search-submit-btn').click();

        const text = iframe.locator('div.gsc-above-wrapper-area')
        await expect(text).toContainText('results');
    }
)

test(
    'multiple frames', async ({ page }) => {
        await page.goto('https://demoqa.com/frames', { waitUntil: 'domcontentloaded' });

        await expect(page.frameLocator('#frame1').locator('#sampleHeading')).toBeVisible();
        await expect(page.frameLocator('#frame2').locator('#sampleHeading')).toBeVisible();

        const allFrames = page.frames(); //include browser
        const total = page.locator('iframe'); ////only iframe elements
        console.log('Total frames:', allFrames.length);
        console.log('Total frames:', await total.count());

        for (let i = 0; i < allFrames.length; i++) {
            const frame = allFrames[i];
            console.log('Frame name:', frame.name());
            console.log('Frame URL:', frame.url());
        }

        const frame1Heading = await page.frameLocator('#frame1').locator('#sampleHeading').textContent();
        console.log(frame1Heading);

    }
)

test('Handle nested frames', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

    const parentFrame = page.frameLocator('#pact1');

    const childFrame = parentFrame.frameLocator('#pact2');

    const grandChildFrame = childFrame.frameLocator('#pact3');

    await grandChildFrame.locator('#glaf').fill('Sagarika');

    await expect(grandChildFrame.locator('#glaf')).toHaveValue('Sagarika');

    await page.goto('https://ui.vision/demo/webtest/frames/', { waitUntil: 'domcontentloaded' });

    const frame1 = page.frameLocator('frame[src="frame_3.html"]');
    await frame1.locator('iframe').waitFor({ state: 'attached' })

    const inputBox = frame1.locator('input[name="mytext3"]');
    await expect(inputBox).toBeVisible();
    await inputBox.fill('hello test1');

    const frame2 = frame1.frameLocator("iframe[src*='docs.google.com/forms']");
    await frame2.locator('#i6').check();
    await expect(frame2.locator('#i6')).toBeChecked();
});

test('Navigate and interact with multiple frames', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames', { waitUntil: 'domcontentloaded' });

    const allFrames = page.frames();

    console.log(allFrames.length);

})