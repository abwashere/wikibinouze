/* 
A test to verify that navigation is working correctly.
*/

import { expect, test } from "@playwright/test";

test("should navigate from Home page to single Beer page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Wikibinouze/);
  await page.click("text=Buzz");
  await expect(page).toHaveURL("/beers/1");
  await expect(page.locator("h2")).toContainText("Buzz");
});

test("should navigate from a single Beer page to the Home page", async ({ page }) => {
  await page.goto("/beers/1");
  await page.click("text=Back");
  await expect(page).toHaveURL("/");
  await expect(page.locator("h1")).toContainText("Wikibinouze");
});
