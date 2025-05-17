import {test , expect} from "@playwright/test";
import jsonData from "../utils/userData.json";
import LoginPage from "../page/loginPage.js";



test(  "Check if user can login with new password"   , async ({page})=> {

    await page.goto("/");

    const latestUser =  jsonData[ jsonData.length -1   ];
    const login = new LoginPage(page);
    await login.doLogin( latestUser.email , latestUser.password  );
    await page.waitForTimeout(1000);


}  );

//npx playwright test loginWithNewPassTestRunner.spec.js