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
    screenshot: "only-on-failure", //'on', 'off', 'only-on-failure', 'on-first-failure'
    trace: "retain-on-failure", //'off', 'on', 'on-first-retry', 'on-all-retries','retain-on-failure', 'retain-on-first-failure', 'retain-on-failure-and-retries'
    video: "retain-on-failure", //"retry-with-video", 'off', 'on', 'on-first-retry', 'on-all-retries','retain-on-failure', 'retain-on-first-failure', 'retain-on-failure-and-retries'
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

