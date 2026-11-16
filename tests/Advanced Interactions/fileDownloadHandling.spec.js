const { test, expect } = require('@playwright/test');
import fs from 'fs'; 

test("single download", async ({ page }) => {
    await page.goto("https://testyard.onrender.com/practice/files");
    let downloadEvent = page.waitForEvent("download");
    await page.locator('[href*="sample.csv"]').click();
    let download = await downloadEvent;
 
    const fileName = download.suggestedFilename();
    expect(fileName).toBe("sample.csv");
 
    const filePath = `downloads/${fileName}`;
    await download.saveAs(filePath);
    expect(fs.existsSync(filePath)).toBeTruthy();
 
})


test('multiple file download', async ({ page }) => {
    await page.goto("https://testyard.onrender.com/practice/files");
    const files = [
        "sample.csv",
        "sample.json",
        "sample.txt"
    ];

    for (const file of files) {
        const downloadEvent = page.waitForEvent("download");
        await page.locator(`[href*="${file}"]`).click();
        const download = await downloadEvent;
        console.log(download.suggestedFilename());
        await download.saveAs(`downloads/${file}`);
    }

})