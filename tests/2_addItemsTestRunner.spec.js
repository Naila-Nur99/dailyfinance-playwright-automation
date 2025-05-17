import {test , expect} from "@playwright/test";
import jsonData from "../utils/userData.json";
import LoginPage from "../page/loginPage.js";
import AddItemPage from "../page/additemPage.js";


test.beforeEach(  "User Login"   , async ({page})=> {

    await page.goto("/");

    const latestUser =  jsonData[ jsonData.length -1   ];

    const login = new LoginPage(page);

    await login.doLogin( latestUser.email , latestUser.password  );

}  );

test("Check if the 2items are showing in item list", async ({ page }) => {
    const itemPage = new AddItemPage(page);
    
    const cost1 = {
        name: 'Apple',
        amount: '50',
        date: '2025-05-07',
        month: 'May',
        remarks: 'Fruit'
      };

      const cost2 = {
        name: 'Banana',
        amount: '30',
        date: '2025-05-07',
        month: 'May',
        remarks: ''
      };
      await itemPage.addingItem(cost1);
      await itemPage.addingItem(cost2);

      const count = await itemPage.getItemCount();
      expect(count).toBeGreaterThan(1);
  });



//npx playwright test addItemsTestRunner.spec.js

