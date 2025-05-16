import { test, expect } from '@playwright/test';

test('goes to microsoft azure', async ({ page, context }) => {
    await page.goto('/');
    const pagePromise = context.waitForEvent('page');
    await page.getByRole('link', { name: 'Visit Microsoft Azure' }).click();
    // Wait for the new page to load
    const newPage = await pagePromise;
    await expect(newPage).toHaveURL('https://azure.microsoft.com/en-us/');
});