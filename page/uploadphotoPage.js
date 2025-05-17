class UploadPhotoPage{

    constructor(page){

        this.page = page;

        this.profileicon= page.locator("//button[@aria-controls= 'menu-appbar']");
        this.profilebtn= page.getByRole("menuitem",{name:"Profile"});
        this.editbtn= page.getByRole("button",{name:"EDIT"});
        this.fileInput = page.locator('input[type="file"]');
        this.uploadbtn= page.getByRole("button",{name:"UPLOAD IMAGE"});
        this.updatebtn= page.getByRole("button",{name:"UPDATE"});
        this.logoutbtn= page.getByRole("menuitem",{name:"Logout"});


    }

    async UploadPhoto(file){
        await this.profileicon.click();
        await this.profilebtn.click();
        await this.editbtn.click();
        await this.fileInput.setInputFiles(file);
        await this.page.waitForTimeout(1000);
        await this.uploadbtn.click();
        await this.page.waitForTimeout(1000);
        await this.updatebtn.click();
        await this.page.evaluate(() => {
        window.scrollBy(0, -300);
         });
        await this.profileicon.click();
        await this.logoutbtn.click();
    }


}

export default UploadPhotoPage;
