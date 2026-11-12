import { test, expect } from '@playwright/test';

const MOCKED_PAYLOAD = `11 Nov 2026 #217
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15.030
Brazil|real|1|BRL|3.944
Canada|dollar|1|CAD|15.389
Hungary|forint|100|HUF|6.679
`

const MOCKED_FULFILL = {
  status: 200,
  contentType: 'text/plain',
  body: MOCKED_PAYLOAD,
}

test.describe('loads form', () => {
  test.beforeEach(async ({ page }) => {
		await page.route('**/cnb-api/**', async route => {
			await route.fulfill(MOCKED_FULFILL);
		});
  });

	test("has default rate", async ({page}) => {
		await page.goto('/');
		await expect(page.getByTestId('value-from')).toHaveValue('1');
		await expect(page.getByTestId('default-currency-from')).toHaveText('CZK');
		await expect(page.getByTestId('currency-to')).toHaveValue('AUD');
		await expect(page.getByTestId('value-to')).toHaveText('15.03');
	})

	test("selects CAD and confirms the rate", async ({page}) => {
		await page.goto('/');
		await expect(page.getByTestId('value-from')).toHaveValue('1');
		await expect(page.getByTestId('default-currency-from')).toHaveText('CZK');
		await page.getByTestId('currency-to').selectOption('CAD');
		await expect(page.getByTestId('currency-to')).toHaveValue('CAD');
		await expect(page.getByTestId('value-to')).toHaveText('15.389');
	})

	test("selects BRL, changes CZK value to 6 and confirms the rate", async ({page}) => {
		await page.goto('/');
		await expect(page.getByTestId('value-from')).toHaveValue('1');
		await expect(page.getByTestId('default-currency-from')).toHaveText('CZK');
		await page.getByTestId('currency-to').selectOption('BRL');
		await page.getByTestId('value-from').fill('6');
		await expect(page.getByTestId('currency-to')).toHaveValue('BRL');
		await expect(page.getByTestId('value-to')).toHaveText('23.664');
	})

	test("selects HUF, as the default rate is not 1 and confirms the rate", async ({page}) => {
		await page.goto('/');
		await expect(page.getByTestId('value-from')).toHaveValue('1');
		await expect(page.getByTestId('default-currency-from')).toHaveText('CZK');
		await page.getByTestId('currency-to').selectOption('HUF');
		await expect(page.getByTestId('currency-to')).toHaveValue('HUF');
		await expect(page.getByTestId('value-to')).not.toHaveText('6.679');
		await expect(page.getByTestId('value-to')).toHaveText('0.067');
	})
})
