import { test , expect} from '@playwright/test';

   test.describe("Test Group  @day3", () => {

    let checkboxesLink;

    //create a beforeEach
    test.beforeEach(async ({page}) => {
        await page.goto("https://practice.cydeo.com");
        checkboxesLink=page.locator("a[href='/checkboxes']");

    });
    //create a afterEach
    test.afterEach(async ({page}) => {
        await page.waitForTimeout(3000);
    });

  test("check() checks the radio button and checkboxes if they havent checked", async ({ page }) => {
   


    await checkboxesLink.click();

    let checkbox1= page.locator("input#box1");
    
    await checkbox1.check();
    
    let checkbox2= page.locator("input#box2");

    await checkbox2.check();

   await expect(checkbox1).toBeChecked();// passing locator object (webelemant) to the assertion
  
  expect(await checkbox2.isChecked()).toBeTruthy();// method return the value
   // await expect(checkbox2).toBeChecked();

  });

  test("B", async ({ page }) => {
    
    await checkboxesLink.click();

    let checkbox1= page.locator("input#box1");
    let checkbox2= page.locator("input#box2");

    await checkbox1.uncheck();
    await checkbox2.uncheck();
    
    await expect(checkbox1).not.toBeChecked();
    expect(await checkbox2.isChecked()).toBeFalsy();// method return)

  });

  test("selectOption() used for dropdowns", async ({ page }) => {
  
   let dropdownLink= page.locator("text='Dropdown'");
   await dropdownLink.click();

 let simpleDropDownBox = page.locator("//select[@id='dropdown']");

 //select option by the value
 //await simpleDropDownBox.selectOption("1");

 //select by the text
 //simpleDropDownBox.selectOption({label:"Option 1"});
   
 //select by index
 simpleDropDownBox.selectOption({index:1});

});

test("innerText() retrives the visible text of the element", async ({ page }) => {

    let headerElement = page.locator("//span[@class='h1y']");

    let actualText = await headerElement.innerText();
    let expectedTest = "Test Automation Practice";

    expect(actualText).toEqual(expectedTest);

  });

  test("inputValue() only works with <input>, <textarea>, <select>", async ({ page }) => {

    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();

    let inputBox = page.locator("//input[@type='number']");

    await inputBox.fill("12345678");

    let inputValue = await inputBox.inputValue();

    expect(inputValue).toEqual("12345678");
    
  });

  test("getAttribute() retrives the attribute value", async ({ page }) => {

   let inputsLink = page.getByText("Inputs");
   let href = await inputsLink.getAttribute("href");

   expect(href).toEqual("/inputs");
    
  });


  test("state methods of locator object", async ({ page }) => {

    let availableExamples = page.locator("//span[@class='h2']");

    expect( await availableExamples.isVisible()).toBeTruthy();
    await expect(availableExamples).toBeVisible();

    console.log("----------------------------------------------------------------");

    let abTestingLink = page.getByText("A/B Testing");

    expect(await abTestingLink.isEnabled()).toBeTruthy();
    await expect(abTestingLink).toBeEnabled();
     
   });



});