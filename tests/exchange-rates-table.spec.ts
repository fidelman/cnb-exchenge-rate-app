import { test, expect } from '@playwright/test';

const MOCKED_PAYLOAD = `11 Nov 2026 #217
Country|Currency|Amount|Code|Rate
Brazil|real|1|BRL|3.944
`

const MOCKED_FULFILL = {
  status: 200,
  contentType: 'text/plain',
  body: MOCKED_PAYLOAD,
}

test.describe('loads data', () => {
	test.beforeEach(async ({ page }) => {
		await page.route('**/cnb-api/**', async route => {
			await route.fulfill(MOCKED_FULFILL);
		});
  });

	test("has date", async ({page}) => {
		await page.goto('/');
		await expect(page.getByTestId('current-date')).toHaveText(/Validity for 11 Nov 2026/);
	})

	test("has proper data in the table", async ({page}) => {
		await page.goto('/');

		const userRow = page.getByTestId("exchange-rates-table").locator('tr').filter({ hasText: 'Brazil' });

		await expect(userRow.locator('td').nth(1)).toHaveText('real');
		await expect(userRow.locator('td').nth(2)).toHaveText('1');
		await expect(userRow.locator('td').nth(3)).toHaveText('BRL');
		await expect(userRow.locator('td').nth(4)).toHaveText('3.944');
	})
})

