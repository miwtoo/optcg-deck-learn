import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://127.0.0.1:4321/optcg-deck-learn/',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'pnpm exec astro dev --host 127.0.0.1',
    url: 'http://127.0.0.1:4321/optcg-deck-learn/mihawk/pilot/',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Pixel 5',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
