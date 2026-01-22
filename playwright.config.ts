import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "html",

  use: {
    /* Set your production/test URL here */
    baseURL: "https://gruppenplatz.healthycloud.de/HC_GP_Public_Pages/",

    /* Failure Records */
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",

    /* Timeouts for stability */
    actionTimeout: 15000,
  },

  projects: [
    {
      name: "Google Chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },
  ],
  outputDir: "test-results/",
});
