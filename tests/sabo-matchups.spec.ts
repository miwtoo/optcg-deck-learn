import { test, expect } from '@playwright/test';

const chapters = [
  ['mirror', ['Premise', 'Game plan', 'Turn by turn (going first)', 'Going second', 'Late Game', 'Conclusion']],
  ['mihawk', ['Premise', 'Game plan', 'Turn by turn (going first)', 'Going second', 'Late Game', 'Conclusion']],
  ['xebec', ['Premise', 'Game plan', 'Turn by turn (going first)', 'Going second', 'Late Game', 'Conclusion']],
  ['kaido', ['Premise', 'Game plan', 'Turn by turn (going first)', 'Going second', 'Late Game', 'Conclusion']],
  ['strategies', ['Premise', 'VS ACE RED', 'VS ENEL P', 'VS ROBIN YP']],
] as const;

test.describe('Sabo matchup chapters', () => {
  test('shows the deck introduction and chapter table of contents', async ({ page }) => {
    await page.goto('./elbaph-sabo/');
    await expect(page.locator('h2')).toContainText(['Introduction to the deck', 'Conclusion', 'Decklist and tech options']);
    await expect(page.getByRole('heading', { name: 'Decklist 09/09' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Tech options', exact: true })).toBeVisible();
    await page.goto('./elbaph-sabo/matchups/');
    await expect(page.locator('.matchup-card')).toHaveCount(5);
    await expect(page.locator('.matchup-card').last()).toContainText('STRATEGIES VS ACE RED, ENEL P, ROBIN YP');
    await page.locator('.matchup-card').first().getByRole('link', { name: /Open chapter/ }).click();
    await expect(page).toHaveURL(/\/matchups\/mirror\/?$/);
  });

  for (const [slug, headings] of chapters) {
    test(`renders ordered sections for ${slug}`, async ({ page }) => {
      await page.goto(`./elbaph-sabo/matchups/${slug}/`);
      await expect(page.locator('.chapter-section h3')).toHaveText([...headings]);
      if (slug !== 'strategies') {
        await expect(page.locator('.curve-block')).toHaveCount(2);
        await expect(page.locator('.curve-block').first()).toContainText('Original book curve');
        await expect(page.locator('.historical-note')).toContainText('Original curve · not in the 09/09 deck list');
      } else {
        await expect(page.locator('.curve-block')).toHaveCount(0);
      }
    });
  }

  test('navigates between chapters and inspects a card', async ({ page }) => {
    await page.goto('./elbaph-sabo/matchups/mirror/');
    await expect(page.getByRole('link', { name: 'Next chapter →' })).toHaveAttribute('href', /mihawk/);
    await page.getByRole('link', { name: 'Next chapter →' }).click({ force: true });
    await expect(page).toHaveURL(/\/mihawk\/?$/);
    await page.locator('#matchup-chapter .chapter-section [data-card-id="OP17-087"]').first().click();
    const modal = page.locator('#card-modal');
    await expect(modal).toBeVisible();
    await expect(modal.locator('#card-modal-content h2')).toHaveText('Nico Robin');
    await modal.getByRole('button', { name: 'Close card details' }).click();
    await page.getByRole('link', { name: /Deck introduction/ }).first().click();
    await expect(page).toHaveURL(/\/elbaph-sabo\/?$/);
  });

  test('opens an opponent key card in every chapter', async ({ page }) => {
    for (const slug of ['mirror', 'mihawk', 'xebec', 'kaido', 'strategies']) {
      await page.goto(`./elbaph-sabo/matchups/${slug}/`);
      await page.locator('.key-card-lane').filter({ hasText: 'Opponent key cards' }).first().locator('[data-card-id]').first().click();
      await expect(page.locator('#card-modal')).toBeVisible();
      await page.locator('#card-modal').getByRole('button', { name: 'Close card details' }).click();
    }
  });

  test('keeps a curve chapter usable at Pixel 5 width', async ({ page }) => {
    await page.setViewportSize({ width: 393, height: 851 });
    await page.goto('./elbaph-sabo/matchups/mirror/');
    await expect(page.locator('.chapter-section')).toHaveCount(6);
    await expect(page.locator('.curve-block')).toHaveCount(2);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(393);
    await expect(page.locator('.chapter-nav')).toBeVisible();
    await expect(page.locator('.chapter-card-callout [data-card-id]').first()).toBeVisible();
  });
});
