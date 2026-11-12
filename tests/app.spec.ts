import { test, expect } from '@playwright/test';

test("has general info", async ({page}) => {
  await page.goto('/');

  await expect(page).toHaveTitle("cnb-exchenge-rate-app");
  await expect(page.getByTestId('loading')).toBeVisible();
  await expect(page.getByTestId('title')).toHaveText('Central bank exchange rate fixing');
})

test("has loading text on load", async ({page}) => {
  await page.route('**/cnb-api/**', async route => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await route.continue();
  });

  await page.goto('/');

  await expect(page.getByTestId('loading')).toBeVisible();
  await expect(page.getByTestId('loading')).toBeHidden();
})

test("has error test on error", async ({page}) => {
  await page.route('**/cnb-api/**', async route => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Internal Server Error' }),
    });
  });

  await page.goto('/');

  await expect(page.getByTestId('error')).toBeVisible({ timeout: 10000 });
})
