import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SkyDeals extends Page {
  /**
   * define selectors using getter methods
   */
  // get inputUsername () { return $('#username') }
  // get inputPassword () { return $('#password') }
  // get btnSubmit () { return $('button[type="submit"]') }
  get offerSection() {
    return $$("//div[contains(@class,'tab-content current')]");
  }
  //TP42
  get offerPrices() {
    return $$("//span[contains(@class,'c-price__main')]");
  }
  ///span[contains(@class,'u-width-1/1@large u-margin-y-large'])]
  /**
   * a method to encapsule automation code to interact with the page
   * .c-price__main:nth-child(-n+3)
   */

  getListOffers() {
    return this.offerSection.map((elem) => console.log(elem.getText()));
  }
  mapListOffers() {
    const offerslist = [];
    this.offerSection.map((elem) => offerslist.push(elem.getText()));
    return offerslist;
  }

  getPrices() {
    return this.offerPrices.map((elem) => console.log(elem.getText()));
  }
  mapListPrices() {
    const pricelist = [];
    this.offerPrices.map((elem) => pricelist.push(elem.getText()));
    return pricelist;
  }
  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    super.open("/");
  }
  nowopen() {
    return super.open("https://www.sky.com/shop/offers");
  }
}

export default new SkyDeals();
