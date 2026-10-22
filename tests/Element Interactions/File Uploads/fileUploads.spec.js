const { test, expect } = require('@playwright/test');

test(
    'single file upload', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/upload#google_vignette');
        await expect(page).toHaveTitle('Files Upload page for Automation Testing Practice');

        await page.locator('#fileInput').setInputFiles('tests/uploads/images.jpg');
        await expect(page.locator('#fileInput')).toHaveValue(/images.jpg/);
    }
)

test(
    'multiple file upload', async ({ page }) => {
        await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');


        await page.locator('#filesToUpload').setInputFiles(['tests/uploads/test.jpg', 'tests/uploads/images.jpg']);
        await expect(page.locator('#fileList li:nth-of-type(1)')).toHaveText('test.jpg');
        await expect(page.locator('#fileList li:nth-of-type(2)')).toHaveText('images.jpg');


        await page.locator('#filesToUpload').setInputFiles([]);
        await expect(page.locator('#fileList li')).toHaveText('No Files Selected');
    }
)


test(
    'file upload from system', async ({ page }) => {
        await page.goto('https://sahitest.com/demo/fileUpload.htm');
        await page.locator('(//form/input)[1]').setInputFiles('D:/Sagarika/learn_playwright/tests/uploads/test.jpg');
    }
)
