class ResetPasswordPage{

    constructor(page){
        this.page=page;
        this.resetLink = page.getByRole( "link", {name: "Reset it here" });
        this.emailtxt = page.getByRole("textbox",{name:"Email"});
        this.resetLnkbtn= page.getByRole("button",{name:"SEND RESET LINK"});

        this.newpass= page.getByRole("textbox",{name:"New Password"});
        this.confirmpass= page.getByRole("textbox",{name:"Confirm Password"});
        this.resetPassbtn= page.getByRole("button",{name:"RESET PASSWORD"});

    }

    async resetPassLnk(email){

        await this.resetLink.click();
        await this.emailtxt.fill(email);
        await this.resetLnkbtn.click();
        await this.page.waitForTimeout(5000);
        
    }
    async resetPass(newpassword,confrimpassword) {
        await this.newpass.fill(newpassword);
        await this.confirmpass.fill(confrimpassword);
        await this.resetPassbtn.click();
    
    }
}

export default ResetPasswordPage;