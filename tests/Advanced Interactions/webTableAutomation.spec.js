
const { test, expect } = require('@playwright/test');

test('Complete Web Table Handling', async ({ page }) => {

    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');

    const table = page.locator('#example');
    await expect(table).toBeVisible();

    const headers = table.locator('thead th');
    const columnCount = await headers.count();
    console.log('Total Columns:', columnCount);


    for (let i = 0; i < columnCount; i++) {
        const headerText = await headers.nth(i).innerText();
        console.log('Column:', headerText);
    }

    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log('Visible Rows:', rowCount);

    for (let i = 0; i < rowCount; i++) {
        const rowData = await rows.nth(i).innerText();
        console.log('Row', i + 1, ':', rowData);
    }

    // STEP 6: Fetch a particular row
    const targetRow = rows.filter({ hasText: 'Airi Satou' });
    await expect(targetRow).toBeVisible();

    console.log('Particular Row:', await targetRow.innerText());

    // Airi Satou's Office is in column index 2
    const office = await targetRow.locator('td').nth(2).innerText();
    console.log('Office:', office);

    await expect(targetRow).toContainText('Tokyo');
    await expect(targetRow).toContainText('Accountant');

    const searchBox = page.getByRole('searchbox');
    await searchBox.fill('Ashton Cox');

    const searchRow = table.locator('tbody tr').filter({ hasText: 'Ashton Cox' });
    await expect(searchRow).toBeVisible();
    console.log('Search Result:', await searchRow.innerText());

    await searchBox.clear();

    await page.getByRole('columnheader', { name: 'Age' }).click();

    const ageCells = table.locator('tbody tr td:nth-child(4)');
    const ages = await ageCells.allInnerTexts();

    const numericAges = ages.map(age => Number(age));
    console.log('Sorted Ages:', numericAges);

    expect(numericAges).toEqual([...numericAges].sort((a, b) => a - b));

    const nextButton = page.getByRole('button', { name: 'Next' });
    await nextButton.click();
    await expect(table.locator('tbody tr').first()).toBeVisible();

    console.log('Second Page First Row:', await table.locator('tbody tr').first().innerText());

    await page.getByRole('button', { name: 'Previous' }).click();

    const pageSize = page.locator('select.dt-input').first();
    await pageSize.selectOption('25');

    const newRowCount = await table.locator('tbody tr').count();
    console.log('Rows after changing page size:', newRowCount);
    expect(newRowCount).toBe(25);

    const allRecords = [];
    while (true) {
        const currentRows = table.locator('tbody tr');
        const currentCount = await currentRows.count();

        for (let i = 0; i < currentCount; i++) {

            const data = await currentRows.nth(i).innerText();
            allRecords.push(data);
        }

        const next = page.getByRole('button', { name: 'Next' });

        if (await next.isDisabled()) {
            break;
        }

        await next.click();
        await expect(table.locator('tbody tr').first()).toBeVisible();
    }

    console.log('All Records:', allRecords);
    console.log('Total Records Retrieved:', allRecords.length);

    expect(allRecords.length).toBe(57);

});
