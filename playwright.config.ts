import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/spec",
  fullyParallel: true,
  reporter: [
    ["list"],
    ["html"]
  ],
  use: {
    baseURL: "https://automationbookstore.dev",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
})
