import { test, expect } from '@playwright/test';

test('renders the Mihawk Pilot guide and card modal', async ({ page }) => {
  await page.goto('./mihawk/pilot/');

  await expect(page).toHaveTitle('Green Dracule Mihawk Pilot');
  await expect(page.locator('nav[aria-label="Guide pages"] a.active')).toHaveText('Pilot');

  for (const heading of [
    'Keep a line you can use.',
    'Follow the DON!! timeline.',
    'Resolve the lock in order.',
    'Know what each rest gives you.',
    'Keep the counter facts clear.',
  ]) {
    await expect(page.getByRole('heading', { name: heading })).toBeVisible();
  }

  const cardButtons = page.locator('.card-image-button');
  await expect(cardButtons.first()).toBeVisible();
  expect(await cardButtons.count()).toBeGreaterThan(0);

  const modal = page.locator('#card-modal');
  await cardButtons.first().click();
  await expect(modal).toBeVisible();
  await expect(modal.locator('#card-modal-content')).toContainText('Card text');
  await expect(modal.locator('#card-modal-content')).toContainText("If your opponent's Leader has the <Slash> attribute, this Leader gains +1000 power. [Activate: Main] [Once Per Turn] You may rest 1 of your cards: If there is a Character with a cost of 5 or more, set up to 3 of your DON!! cards as active. Then, you cannot play Character cards during this turn.");

  await modal.getByRole('button', { name: 'Close card details' }).click();
  await expect(modal).not.toBeVisible();

  const documentWidths = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    bodyWidth: document.body.scrollWidth,
  }));
  expect(documentWidths.documentWidth).toBeLessThanOrEqual(documentWidths.viewportWidth);
  expect(documentWidths.bodyWidth).toBeLessThanOrEqual(documentWidths.viewportWidth);
});
