import homepage from "../pageobjects/skyhomepage";
import { expect as expectChai } from "chai";
import Resources from "../resources";

describe("Navigate to Deals", () => {
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

  it("should navigate to Deals", () => {
    console.log("navigating to Deals from the Home Page");
    homepage.clickDeals();
    browser.pause(10);
    expect(browser).toHaveTitle(Resources.skyDealsTitle);
  });

  it("should be on the right page", () => {
    const url = browser.getUrl();
    expectChai(url).to.contains(Resources.skyDealspage);
    console.log("the page actually displays: " + url);
  });
});
