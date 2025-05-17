import { test, expect } from '@playwright/test';
import jsonData from '../utils/userData.json';
import fs from 'fs'; // for file read write 
import ResetPasswordPage from '../page/resetPasswordPage.js';
import { getEmailRead } from '../utils/utils.js';

test("Click reset password is successful", async ({ page ,request}) => {
  await page.goto("/");

  const resetPass = new ResetPasswordPage(page);
  const latestUser = jsonData[jsonData.length - 1];
  await resetPass.resetPassLnk(latestUser.email);
  const mailBody = await getEmailRead({ request });
  const resetLink = mailBody.split(" ").find(word => word.startsWith("https://"));

  if (!resetLink) {
    throw new Error('Reset link not found in email body.');
  }
  await page.goto(resetLink);

  const doSetPass = new ResetPasswordPage(page);
  const newPassword = "12345";
  await doSetPass.resetPass(newPassword, newPassword);

  latestUser.password = newPassword;
  fs.writeFileSync("./utils/userData.json", JSON.stringify(jsonData, null, 2));

})


//npx playwright test resetPasswrdTestRunner.spec.js