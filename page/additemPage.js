class AddItemPage{

    constructor(page){
        this.page =page;

    this.btnAddCost = page.locator('.add-cost-button');
    this.txtItemName = page.locator('#itemName');
    this.btnValue = page.locator('[type=button]');
    this.txtAmount = page.locator('#amount');
    this.txtDate = page.locator('#purchaseDate');
    this.monthInput = page.locator('#month');
    this.txtRemarks = page.locator('#remarks');
    this.btnSubmit = page.locator('[type=submit]');

    }
    async addingItem(name, amount, date, month, remarks) {
     
    await this.btnAddCost.click();
    await this.txtItemName.fill(name);
    await this.btnValue.nth(2).click(); // 3rd button
    await this.txtAmount.fill(amount);
    await this.txtDate.fill(date);
    await this.monthInput.selectOption(month);
    await this.txtRemarks.fill(remarks);
    await this.btnSubmit.click();
  }
}

export default AddItemPage;