const { test, expect } = require('@playwright/test');

test('webTables in playwright', async ({ page }) => {
    await page.goto('https://practice-automation.com/tables/');

    const table = page.locator('#tablepress-1');
    const totalColumns = table.locator('thead tr th');
    const totalColumnsCount = await totalColumns.count();
    expect(totalColumnsCount).toBe(3);

    const totalRows = table.locator('tbody tr');
    const totalRowsCount = await totalRows.count();
    expect(totalRowsCount).toBe(10);

    const totalPages = page.locator('.dt-paging-button:not(.previous):not(.next)');
    const totalPagesCount = await totalPages.count();
    expect(totalPagesCount).toBe(3);

    for (let pageNo = 0; pageNo < totalPagesCount; pageNo++) {
        await totalPages.nth(pageNo).click();

        for (let i = 0; i < totalRowsCount; i++) {
            const rowNo = totalRows.nth(i);
            const cellData = rowNo.locator('td');

            for (let j = 0; j < await cellData.count(); j++) {
                console.log(await cellData.nth(j).textContent());
            }
            console.log("=========================================");
        }
    }
})

test('Pagination table automation', async ({ page }) => {

    await page.goto('file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/tables.html');

    const tableBody = page.locator('#tableBody');

    const pages = page.locator('#pagination button');

    const totalPages = await pages.count();
    console.log('Total pages:', totalPages);

    expect(totalPages).toBeGreaterThan(0);

    for (let p = 0; p < totalPages; p++) {

        await pages.nth(p).click();
        expect(await rows.count()).toBe(5);

        const rows = tableBody.locator('tr');

        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const cells = row.locator('td');

            for (let j = 0; j < await cells.count() - 1; j++) {
                const text = await cells.nth(j).textContent();

                if (text.includes('Bluetooth Adapter')) {
                    const checkbox = row.locator('td input[type="checkbox"]');
                    await checkbox.check();

                    await expect(checkbox).toBeChecked();
                }
            }
            console.log('----------------');
        }
    }
});