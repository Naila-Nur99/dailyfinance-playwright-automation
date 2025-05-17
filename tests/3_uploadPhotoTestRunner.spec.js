import {test , expect} from "@playwright/test";
import UploadPhotoPage from "../page/uploadphotoPage.js";
import jsonData from "../utils/userData.json";
import LoginPage from "../page/loginPage.js";


test.beforeEach(  "User Login"   , async ({page})=> {

    await page.goto("/");

    const latestUser =  jsonData[ jsonData.length -1   ];

    const login = new LoginPage(page);

    await login.doLogin( latestUser.email , latestUser.password  );

    await expect( page.getByText("Dashboard")  ).toBeVisible( { timeout : 20000 } );
    //await page.pause();


}  );
test("Check if profile photo is uploaded successfully", async ({ page }) => {
    const upPhotoPage = new UploadPhotoPage(page);
    await upPhotoPage.UploadPhoto("assets/download.png");
  });

