import { test, expect } from '@playwright/test';

test('renders the Thai home page and Thai guide links', async ({ page }) => {
  await page.goto('./th/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'th');
  await expect(page.getByRole('heading', { name: 'เลือก คู่มือ' })).toBeVisible();

  await expect(page.locator('a.guide-card')).toHaveCount(2);
  await expect(page.locator('a.guide-card').nth(0)).toHaveAttribute('href', /\/th\/elbaph-sabo\/$/);
  await expect(page.locator('a.guide-card').nth(1)).toHaveAttribute('href', /\/th\/mihawk\/$/);
  await expect(page.getByRole('link', { name: 'English', exact: true })).toHaveAttribute('href', /\/optcg-deck-learn\/$/);
});

test('renders the Thai Mihawk pilot and switches back to the matching English route', async ({ page }, testInfo) => {
  await page.goto('./th/mihawk/pilot/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'th');
  await expect(page.getByRole('heading', { name: 'เล่น Mihawk ทีละขั้นตอน' })).toBeVisible();

  const guideNavigation = page.locator('nav[aria-label="หน้าไกด์"]');
  await expect(guideNavigation.getByRole('link', { name: 'เด็ค', exact: true })).toBeVisible();
  await expect(guideNavigation.getByRole('link', { name: 'วิธีเล่น', exact: true })).toHaveClass(/active/);

  const mihawkCard = page.locator('button.card-image-button[data-card-id="OP14-020"]').first();
  await mihawkCard.click();

  const modal = page.locator('#card-modal');
  await expect(modal).toBeVisible();
  await expect(modal.locator('#card-modal-content h2')).toHaveText('Dracule Mihawk');
  await expect(modal.locator('#card-modal-content')).toContainText('ข้อความการ์ด');
  await expect(modal.locator('#card-modal-content')).toContainText('ถ้าลีดเดอร์ของคู่แข่ง มีคุณลักษณะ (ฟัน) ละก็');

  await modal.getByRole('button', { name: 'ปิดรายละเอียดการ์ด' }).click();
  await expect(modal).not.toBeVisible();

  if (testInfo.project.name === 'Pixel 5') {
    const documentWidths = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
      bodyWidth: document.body.scrollWidth,
    }));
    expect(documentWidths.documentWidth).toBeLessThanOrEqual(documentWidths.viewportWidth);
    expect(documentWidths.bodyWidth).toBeLessThanOrEqual(documentWidths.viewportWidth);
  }

  const englishLink = page.getByRole('link', { name: 'English', exact: true });
  await expect(englishLink).toHaveAttribute('href', /\/mihawk\/pilot\/$/);
  await englishLink.click();

  await expect(page).toHaveURL(/\/optcg-deck-learn\/mihawk\/pilot\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('nav[aria-label="Guide pages"] a.active')).toHaveText('Pilot');
});

test('renders the Thai Sabo pilot with its embedded combo guide', async ({ page }) => {
  await page.goto('./th/elbaph-sabo/pilot/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'th');

  const comboSection = page.locator('section[aria-labelledby="combo-lines-title"]');
  await expect(comboSection.getByRole('heading', { name: 'ทำคอมโบ' })).toBeVisible();
  await expect(comboSection).toContainText('ใช้คอมโบสั้นเหล่านี้หลังสร้างบอร์ด ตรวจ DON!! ก่อนเริ่ม');
  await expect(comboSection.locator('button.card-image-button')).toHaveCount(6);

  const guideNavigation = page.locator('nav[aria-label="หน้าไกด์"]');
  await expect(guideNavigation.getByRole('link', { name: 'เด็ค', exact: true })).toBeVisible();
  await expect(guideNavigation.getByRole('link', { name: 'วิธีเล่น', exact: true })).toHaveClass(/active/);
  await expect(guideNavigation.getByRole('link', { name: 'คอมโบ', exact: true })).toHaveCount(0);
});
