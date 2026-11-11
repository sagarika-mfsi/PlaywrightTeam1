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
    const totalPagesCount = totalPages.count();
    expect(totalPagesCount).toBe(3);
})