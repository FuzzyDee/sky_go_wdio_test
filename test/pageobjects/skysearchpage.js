import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SkySearchPage extends Page {
  /**
   * define selectors using getter methods
   */
  // get inputUsername () { return $('#username') }
  // get inputPassword () { return $('#password') }
  // get btnSubmit () { return $('button[type="submit"]') }
  get searchIcon() {
    return $(".search-toggle__icon");
  }
  get searchInput() {
    return $("//input[contains(@class,'c-form-input')]");
  }
  get searchBtn() {
    return $("//button[contains(@class,'search-submit-button')]");
  }
  get editorialSection() {
    return $("//div[contains(@class,'c-editorial-layer__inner')]");
  }
  get editorImage() {
    return $("//img[contains(@class,'c-editorial-layer')]");
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  clicksearchIcon() {
    this.searchIcon.click();
    browser.pause(1000);
  }

  searchskybar(txt) {
    this.searchInput.waitForExist({ timeout: 1000 });
    this.searchInput.setValue(txt);
  }
  clicksearchBtn() {
    this.searchBtn.click();
  }
  getEditorialSection() {
    this.editorialSection.waitForExist({ timeout: 20000 });
    return this.editorialSection.getText();
  }
  getEditorialImage() {
    this.editorImage.waitForExist({ timeout: 100 });
    return this.editorImage.isDisplayed();
  }
  isSearched() {
    this.editorialSection.waitForDisplayed(1000);
    return this.editorialSection.isDisplayed();
  }
}

export default new SkySearchPage();
