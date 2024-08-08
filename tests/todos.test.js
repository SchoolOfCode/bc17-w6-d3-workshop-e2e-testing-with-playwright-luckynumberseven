import { test, expect } from "@playwright/test";

test("practice test should pass", async ({ page }) => {
  // Barebones test - just open a page
  await page.goto("http://localhost:3000");
});
