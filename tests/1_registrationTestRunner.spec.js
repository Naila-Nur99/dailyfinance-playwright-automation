import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import jsonData from '../utils/userData.json';
import fs from 'fs'; // for file read write 
import RegistrationPage from '../page/registrationPage.js';
import {generateRandomId} from '../utils/utils.js';
import { getEmailList, getEmailRead } from '../utils/utils.js';

test( "Check if both toast message and congratulations mail get successfully"  , async ({page ,request}) => {
  
    await page.goto("/");

    const reg = new RegistrationPage(page);
    
    const userModel = {
    
        firstName : faker.person.firstName() ,
        lastName : faker.person.lastName(),
        email : "tasnimislam2334+"+ generateRandomId(1000,9999) + "@gmail.com",
        password : "1234",
        phoneNumber : `015${generateRandomId(10000000,99999999)}`,
        address : faker.location.city()

    }


   await reg.registerUser(userModel);
   await page.waitForTimeout(5000);

    const toastLocator = page.locator(".Toastify__toast");
    const msg = await toastLocator.textContent();
    expect(msg).toContain("successfully");

    const mailBody = await getEmailRead({ request });
    expect(mailBody).toContain("Welcome to our platform");

    jsonData.push(userModel);
    fs.writeFileSync("./utils/userData.json"  , JSON.stringify(jsonData,null ,2)  );

    // npx playwright test registrationTestRunner.spec.js


})




