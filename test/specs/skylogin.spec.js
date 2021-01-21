import homepage from "../pageobjects/skyhomepage";
import skyId from "../pageobjects/skyloginpage";
import Resources from "../resources";

describe("Invalid Credentials", function () {
  before(() => {
    homepage.open();
    browser.pause(20);
    console.log("switching to the overlay iframe");
    browser.switchToFrame(homepage.frame);
    browser.pause(20);
    homepage.agree.click();
    console.log("Agree Button Clicked to clear overlay modal");
    browser.pause(10);
    browser.refresh();
  });

  it("should navigate to Sign In ", function () {
    homepage.clickSignin();
    browser.pause(1000);
    expect(browser).toHaveTitle(Resources.skySigninTitle);
  });

  it("should try Sign In with Invalid credentials", function () {
    skyId.enterSigninDetails("username", "passward");
    browser.pause(10);
    const message = skyId.invalidmessage(Resources.invalidMessage);
    console.log("page returns " + message);
  });
});
