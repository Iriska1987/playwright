import { test } from '@playwright/test';

test("Search Youtube @youtube2", async ({ page }) => {
  // Your test steps go here
// navigate to youtube
await page.goto("https://www.youtube.com");

let searchBox= page.locator("//input[@id='search']");

searchBox.click();

//await searchBox.type("CYDEO");
await searchBox.fill("Cydeo");

await page.waitForTimeout(3000);

await searchBox.press("Enter");

await page.waitForTimeout(3000);

const firstVideo=page.locator("(//a[@id='video-title'])[1]");//first video title

await firstVideo.click();

await page.waitForTimeout(10000);

});