import Page from "./page";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SkyHomePage extends Page {
  /**
   * define selectors using getter methods
   */

  get mainroot() {
    return $(".sc-fzpmMD");
  }
  get popup() {
    return $(
      "div.message.type-modal button.message-component.message-button.no-children:nth-child(2)"
    ).click();
    //div.message.type-modal button.message-component.message-button.no-children:nth-child(2)
  }
  get frame() {
    return $("//iframe[contains(@src,'message_id=207015')]");
  }

  get agree() {
    return $(
      "//button[contains(@class,'message-component message-button no-children')][2]"
    );
  }
  get skyLink() {
    return $(".masthead-logo");
  }
  get signinlink() {
    return $(".tab-focus.sign-in-link");
  }
  get dealsLink() {
    return $("=Deals");
  }
  get editorialSection() {
    return $("#");
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  open() {
    super.open("/");
  }
  nowopen() {
    return super.nowopen("");
  }
  waitForSkyHomePageToLoad() {
    if (!this.accountMessage.isDisplayed()) {
      this.accountMessage.waitForDisplayed(5000);
    }
  }
  getMessage() {
    return this.accountMessage.getText();
  }

  searchskybar(value) {
    this.searchInput.setValue(value);
    this.searchBtn.click();
  }
  clearPopup() {
    this.popup.waitForDisplayed({ timeout: 50000 });
    this.popup.waitForExist({ timeout: 10000 });
    this.popup.click();
  }
  clickDeals() {
    this.dealsLink.isDisplayed();
    this.dealsLink.waitForExist({ timeout: 20000 });
    this.dealsLink.click();
  }
  getEditorialSection() {
    this.editorialSection.waitForExist({ timeout: 20000 });
    return this.editorialSection.getText();
  }
  clickSignin() {
    this.signinlink.isDisplayed();
    this.signinlink.click();
  }
}

export default new SkyHomePage();
