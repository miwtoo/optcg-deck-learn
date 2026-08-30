import { test, expect } from '@playwright/test';

test('operates the Elbaph Sabo 4 DON effect board', async ({ page }) => {
  await page.goto('./elbaph-sabo/pilot/');

  const board = page.locator('[data-effect-board][aria-label="4 DON!! · Saul → sixes"]');
  await expect(board).toBeVisible();

  const visibleSnapshot = board.locator('[data-effect-snapshot]:not([hidden])');
  const playerSide = visibleSnapshot.locator('.effect-board__side--player');
  const donZone = playerSide.locator('[data-zone="don"]');
  await expect(donZone).toBeVisible();
  await expect(donZone).toContainText('Active 1');
  await expect(donZone).toContainText('Rested 4');

  const previous = board.locator('[data-effect-previous]');
  const next = board.locator('[data-effect-next]');
  const reset = board.locator('[data-effect-reset]');
  const liveAction = board.locator('[data-effect-live]');
  const step = board.locator('[data-effect-step]');

  await expect(step).toHaveText('1 / 5');
  await expect(liveAction).toHaveText('Play Jaguar.D.Saul for 4 DON!!.');
  await expect(previous).toBeDisabled();
  await expect(next).toBeEnabled();

  await next.click();
  await expect(step).toHaveText('2 / 5');
  await expect(liveAction).toHaveText('Use Saul’s effect to look at the top 3 cards.');
  await expect(previous).toBeEnabled();

  await previous.click();
  await expect(step).toHaveText('1 / 5');
  await expect(liveAction).toHaveText('Play Jaguar.D.Saul for 4 DON!!.');
  await expect(previous).toBeDisabled();

  await next.click();
  await next.click();
  await expect(step).toHaveText('3 / 5');
  await reset.click();
  await expect(step).toHaveText('1 / 5');
  await expect(liveAction).toHaveText('Play Jaguar.D.Saul for 4 DON!!.');

  const boardCard = playerSide.locator('[data-card-id="OP13-004"]');
  await expect(boardCard).toBeVisible();
  await boardCard.click();

  const modal = page.locator('#card-modal');
  await expect(modal).toBeVisible();
  await expect(modal.locator('#card-modal-content h2')).toHaveText('Sabo');

  await modal.getByRole('button', { name: 'Close card details' }).click();
  await expect(modal).not.toBeVisible();
});
