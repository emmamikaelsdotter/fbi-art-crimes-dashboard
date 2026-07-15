import { test, expect } from '@playwright/test'

test('user can browse and open an art crime detail page', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'FBI Art Crimes' })).toBeVisible()

  const statusEl = page.getByRole('status')
  await expect(statusEl).toHaveText(/\d+ records/)
  const initialText = await statusEl.textContent()

  await page.getByPlaceholder('e.g. angel').fill('figure')
  await expect(statusEl).not.toHaveText(initialText!)

  const firstResult = page.getByRole('link', { name: /figure/i }).first()
  await firstResult.click()

  await expect(page).toHaveURL(/\/artcrimes\//)
  await expect(page.getByRole('link', { name: /back to list/i })).toBeVisible()
})
