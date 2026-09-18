import { test, expect } from '@playwright/test';

test('operates the Elbaph Sabo 4 DON effect board', async ({ page }) => {
  await page.goto('./elbaph-sabo/pilot/');

  const trigger = page.locator('[data-effect-board-trigger="sabo-saul-sixes-board"]');
  const effectModal = page.locator('#sabo-saul-sixes-board');
  await expect(trigger).toBeVisible();
  await expect(page.locator('[data-effect-board-modal]')).toHaveCount(1);
  await expect(effectModal).not.toBeVisible();

  await trigger.click();
  await expect(effectModal).toBeVisible();

  const board = effectModal.locator('[data-effect-board][aria-label="4 DON!! · Saul → 6K board"]');
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
  await expect(playerSide.locator('[data-zone="don"]')).toContainText('Active 1');
  await expect(playerSide.locator('[data-zone="don"]')).toContainText('Rested 4');

  await previous.click();
  await expect(step).toHaveText('1 / 5');
  await expect(liveAction).toHaveText('Play Jaguar.D.Saul for 4 DON!!.');
  await expect(previous).toBeDisabled();

  await next.click();
  await next.click();
  await next.click();
  await next.click();
  await expect(step).toHaveText('5 / 5');
  await expect(liveAction).toHaveText('Use 1 DON!! on Sabo when your cost-8-or-more Character is live. Saul qualifies. The four small bodies become 6K.');
  await expect(playerSide.locator('[data-zone="don"]')).toContainText('Active 0');
  await expect(playerSide.locator('[data-zone="don"]')).toContainText('Rested 4');

  await reset.click();
  await expect(step).toHaveText('1 / 5');
  await expect(liveAction).toHaveText('Play Jaguar.D.Saul for 4 DON!!.');
  await expect(playerSide.locator('[data-zone="don"]')).toContainText('Active 1');
  await expect(playerSide.locator('[data-zone="don"]')).toContainText('Rested 4');

  const boardCard = playerSide.locator('[data-card-id="OP13-004"]');
  await expect(boardCard).toBeVisible();
  await boardCard.click();

  const cardModal = page.locator('#card-modal');
  await expect(cardModal).toBeVisible();
  await expect(cardModal.locator('#card-modal-content h2')).toHaveText('Sabo');

  await cardModal.getByRole('button', { name: 'Close card details' }).click();
  await expect(cardModal).not.toBeVisible();

  await effectModal.getByRole('button', { name: 'Close board' }).click();
  await expect(effectModal).not.toBeVisible();
  await expect(trigger).toBeFocused();
});
