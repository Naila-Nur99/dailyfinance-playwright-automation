import {test , expect} from "@playwright/test";
import jsonData from "../utils/userData.json";
import LoginPage from "../page/loginPage.js";
import AddItemPage from "../page/additemPage.js";


test.beforeEach(  "User Login"   , async ({page})=> {

    await page.goto("/");

    const latestUser =  jsonData[ jsonData.length -1   ];

    const login = new LoginPage(page);

    await login.doLogin( latestUser.email , latestUser.password  );

    await expect( page.getByText("Dashboard")  ).toBeVisible( { timeout : 20000 } );
    //await page.pause();


}  );

test("Add 1st item with all fields", async ({ page }) => {
    const itemPage = new AddItemPage(page);
    await itemPage.addingItem("Apple", "987", "2025-05-07","May", "Fresh");
  });


test("Add 2nd item with mandatory fields", async ({ page }) => {
    const itemPage = new AddItemPage(page);
    await itemPage.addingItem("Banana", "900", "2025-05-07", "May", "");
  });


test('Check if both items are showing in list', async ({ page }) => {
  // Wait for at least one row to appear
  await page.waitForSelector('tbody tr', { timeout: 10000 });

  // Get first row's first cell text
  const firstItem = await page.locator('tbody tr').first().locator('td').first().textContent();
  console.log("First item:", firstItem);
  expect(firstItem).toContain("Apple");

  // Get second row's first cell text
  const secondItem = await page.locator('tbody tr').nth(1).locator('td').first().textContent();
  console.log("Second item:", secondItem);
  expect(secondItem).toContain("Banana");
  await page.waitForTimeout(2000);
});

