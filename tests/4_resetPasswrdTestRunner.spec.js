import { test, expect } from '@playwright/test';
import jsonData from '../utils/userData.json';
import fs from 'fs'; // for file read write 
import ResetPasswordPage from '../page/resetPasswordPage.js';
import {getEmailRead} from '../utils/utils.js';

test("Click Reset Link with Valid Email",async({page})=>{
    await page.goto("/");

    const resetPass = new ResetPasswordPage(page);

    const latestUser =  jsonData[ jsonData.length -1   ];

    await resetPass.resetPassLnk(latestUser.email);

    await page.waitForTimeout(2000);
    
})

test("Check if password is reset successfully",async({request, page })=>{

  await page.waitForTimeout(2000);
  const mailBody = await getEmailRead({ request });
  const resetLink = mailBody.split(" ").find(word => word.startsWith("https://"));

  if (!resetLink) {
    throw new Error('Reset link not found in email body.');
  }

  console.log('Reset Link:', resetLink);
  await page.goto(resetLink);

    const doSetPass = new ResetPasswordPage(page);
    const newPassword = "12345";
    await doSetPass.resetPass(newPassword,newPassword);

    const latestUser = jsonData[jsonData.length - 1];
latestUser.password = newPassword;

fs.writeFileSync("./utils/userData.json", JSON.stringify(jsonData, null, 2));

})

