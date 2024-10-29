import {test} from "@playwright/test";


test.describe("Test Group @group1", async ()=>{

    test.beforeAll( async ()=>{
        console.log("BeforeAll Test Group is executed successfully");
    });
    test.afterAll( async ()=>{
        console.log("AfterAll Test Group is executed successfully");
    });
        
    test.beforeEach( async ()=>{
        console.log("BeforeEach Test Group is executed successfully");
    });
    test.afterEach( async ()=>{
        console.log("AfterEach Test Group is executed successfully");
    });


    test("Test01", async () => {
        // Add test steps here
        console.log("Test01 is executed successfully");
      });

      test("Test02", async () => {
        // Add test steps here
        console.log("Test02 is executed successfully");
      });


      test("Test03", async () => {
        // Add test steps here
        console.log("Test03 is executed successfully");
      });

});