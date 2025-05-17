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
    this.itemRows = page.locator('table tbody tr');

    }
    async addingItem(costModel) {
     
    await this.btnAddCost.click();
    await this.txtItemName.fill(costModel.name);
    await this.btnValue.nth(2).click(); // quantity
    await this.txtAmount.fill(costModel.amount);
    await this.txtDate.fill(costModel.date);
    await this.monthInput.selectOption(costModel.month);
    await this.txtRemarks.fill(costModel.remarks);
    await this.btnSubmit.click();
    await this.page.waitForTimeout(500);
  }

    async getItemCount() {
    return await this.itemRows.count();
  }
}

export default AddItemPage;