import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  // await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('laptops');
  // await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  let searchbox = page.getByRole('searchbox', { name: 'Search Amazon' });
  await searchbox.fill('laptops');
  await searchbox.press('Enter');
  await page.locator('#a-autoid-1').getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.locator('#nav-cart-count')).toContainText('1');
  await expect(page.getByRole('link', { name: 'Amazon', exact: true })).toBeVisible();
  await expect(page.getByRole('searchbox', { name: 'Search Amazon' })).toHaveValue('laptops');
});