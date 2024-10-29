import { test , expect} from '@playwright/test';
import exp from 'constants';

test.describe("Test Group @group2", () => {

// create beforeEach function that will navigate to https://practice.cydeo.com/
test.beforeEach(async({page}) =>{

     await page.goto("https://practice.cydeo.com");
});
test.afterEach(async({page}) =>{

    await page.waitForTimeout(3000);
});

  test("Get title of the page", async ({page}) => {

  let actualTitle=await page.title();

  let expectedTitle="Practice";

  expect(actualTitle).toEqual(expectedTitle);


  });

  test("Get the URL of the page", async ({page}) => {

    let actualUrl= page.url();

    expect(actualUrl).toContain("cydeo");
  });

  test("Click A/B testing link @group2-3", async ({page}) => {

    //page.locator("text='A/B Testing'")
    let abTestingLink=page.getByText("A/B Testing");
   // expect(await abTestingLink.isEnabled()).toBeTruthy();//verify is clickabler
    await expect(abTestingLink).toBeEnabled();
  });



});