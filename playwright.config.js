// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'cluster';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout : 40000,
  expect:{
    timeout : 60000
  },
  use: {
    headless:false,
    screenshot : "on",
    trace : "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});

