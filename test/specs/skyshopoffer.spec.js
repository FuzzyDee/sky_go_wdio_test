import homepage from "../pageobjects/skyhomepage";
import deals from "../pageobjects/skydeals";
import { expect as expectChai } from "chai";
import Resources from "../resources";

describe("List of Offers", () => {
  before(() => {
    homepage.open();
    browser.pause(20);
    console.log("switching to the overlay iframe");
    browser.switchToFrame(homepage.frame);
    browser.pause(20);
    homepage.agree.click();
    console.log("Agree Button Clicked to clear overlay modal");
    // browser.pause(10);
    browser.refresh();
  });

  it("should navigate to /shop/offers", () => {
    console.log("navigating to Offers Page");
    homepage.clickDeals();
    expect(browser).toHaveTitle(Resources.skyDealsTitle);
  });

  it("should be on the '/shop/offers' page ", () => {
    const url = browser.getUrl();
    expectChai(url).to.equal(Resources.skyDealspage);
    console.log("the page actual displays: " + url);
  });

  it("should see list of offers with price to it", () => {
    console.log(deals.getListOffers());
  });

  it.only("should see list of prices to it", () => {
    console.log(deals.mapListPrices([4], [5], [6]));
  });
  it("should verify the offers in list", () => {
    const offers = deals.mapListPrices();
    expectChai(offers).to.deep.equal([
      "",
      "",
      "",
      "",
      "£39",
      "£25",
      "£57",
      "£43",
      "£39",
      "",
      "",
      "",
      "",
      "",
    ]);
  });
});
