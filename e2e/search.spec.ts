import { expect, test } from "@playwright/test";

test("should find a unique beer called Buzz and display it", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox").fill("buzz");
  await page.waitForTimeout(2000);
  const searchResults = await page.getByRole("listitem").count();
  expect(searchResults).toBe(1);
});

test("should find at least 10 beers with the input 'ship'", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox").fill("ship");
  await page.waitForTimeout(2000);
  const searchResults = await page.getByRole("listitem").count();
  expect(searchResults).toBeGreaterThanOrEqual(10);
});

test("should display no item if no data is found", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox").fill("xxx");
  await page.waitForTimeout(2000);
  const searchResults = await page.getByRole("listitem").count();
  await expect(searchResults).toEqual(0);
});
