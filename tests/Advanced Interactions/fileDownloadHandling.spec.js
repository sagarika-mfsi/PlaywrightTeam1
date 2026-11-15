const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test('Download a file', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download');

    const downloadPromise = page.waitForEvent('download');

    await page.locator('#downloadButton').click();

    const download = await downloadPromise;

    const fileName = download.suggestedFilename();

    console.log('Downloaded file:', fileName);

    const filePath = path.join(__dirname, fileName);
    await download.saveAs(filePath);

    expect(fs.existsSync(filePath)).toBeTruthy();

    expect(fs.statSync(filePath).size).toBeGreaterThan(0);
});

