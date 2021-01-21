import homepage from "../pageobjects/skyhomepage";
import Resources from "../resources";

describe("Sky Home page", () => {
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
  it("should refresh the Sky Home ", () => {
    browser.refresh();
    browser.pause(3000);
    expect(browser).toHaveTitle(Resources.skyHomeTitle);
  });
});
