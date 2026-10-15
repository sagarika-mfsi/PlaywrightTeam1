// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 40000,
  expect: {
    timeout: 60000
  },
  use: {
    headless: false,
    viewport: {
      width: 500,
      height: 500
    }

    // screenshot: "only-on-failure", //'on', 'off', 'only-on-failure', 'on-first-failure'
    // trace: "retain-on-failure", 
    // video: "retain-on-failure", 
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

