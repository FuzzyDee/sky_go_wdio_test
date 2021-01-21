import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SkyLoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  // get inputUsername () { return $('#username') }
  // get inputPassword () { return $('#password') }
  // get btnSubmit () { return $('button[type="submit"]') }
  get signin() {
    return $(".tab-focus.sign-in-link");
  }
  get userName() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get signInBtn() {
    return $("#signinButton");
  }
  get sorryMessage() {
    return $(".globalErrors.li");
  }

  enterSigninDetails(user, pass) {
    this.userName.waitForExist({ timeout: 10 });
    this.userName.setValue(user);
    this.password.setValue(pass);
    this.signInBtn.click();
  }
  enteruserName(txt) {
    this.userName.waitForExist({ timeout: 10 });
    this.userName.setValue(txt);
  }
  enteruserPassword(txt) {
    this.password.waitForExist({ timeout: 10 });
    this.password.setValue(txt);
  }
  clickSigninButton(txt) {
    this.signInBtn.waitForExist({ timeout: 10 });
    this.signInBtn.click();
  }
  /**
   * overwrite specifc options to adapt it to page object
   */
  signin() {
    this.signin.waitForExist({ timeout: 1000 });
    this.signin().click;
  }
  invalidmessage(txt) {
    this.sorryMessage.toHaveValue(txt);
    //this.sorryMessage().getText();
  }
  login() {
    return browser.url(`https://skyid.sky.com/signin`);
  }
}
export default new SkyLoginPage();
