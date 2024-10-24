//const {test}=require('@playwright/test'); old way of importing

import {test} from '@playwright/test'; // imports the test function from @playwright/test

test("Simple Playwright Automation Test01 @google", async ({page}) => {

    await page.goto("https://www.google.com");

    await page.waitForTimeout(3000);

    let searchBox= page.locator("//textarea[@class='gLFyf' and @id='APjFqb']");

    searchBox.fill("Playwright Automation");

    await page.waitForTimeout(3000);

});



test("Simple playwriht automation test2 @youtube", async ({page}) => {


    await page.goto("https://www.youtube.com");
})