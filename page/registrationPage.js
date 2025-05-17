class RegistrationPage{
// in js constructor name is not same as class name.it have to write 'constructor'
    constructor(page) //as we're working with page;so Page Ficture is used
    {
        //in java we declare element outside the constructor ,initialize inside the constructor
        //in js if we initialize inside the constructor then automatic get declared

        this.page =page; // put the 'page' into this.page variable so that  we can call it outside the constructor

        this.registrationLink = page.getByRole( "link", {name: "Register" });
        this.firstNametxt = page.getByLabel("First Name");
        this.lastNametxt = page.getByLabel("Last Name"); 
        this.email = page.getByLabel("Email");
        this.password = page.getByLabel("Password");
        this.phoneNumber = page.getByLabel("Phone Number");
        this.address = page.getByLabel("Address");
        this.genderRadiobtn = page.getByRole("radio");
        this.terms = page.getByRole("checkbox");
        this.regbtn = page.getByRole( "button", {name: "REGISTER" });

    }

    async registerUser(userModel)  // for action perform async is used
    {
        await this.registrationLink.click();
        await this.firstNametxt.fill(userModel.firstName);
        await this.lastNametxt.fill(userModel.lastName);
        await this.email.fill(userModel.email);
        await this.password.fill(userModel.password);
        await this.phoneNumber.fill(userModel.phoneNumber);
        await this.address.fill(userModel.address);
        await this.genderRadiobtn.nth(1).click();
        await this.terms.click();
        await this.regbtn.click();

    }

}

export default RegistrationPage;