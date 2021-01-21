import search from "../pageobjects/skysearchpage";
import homepage from "../pageobjects/skyhomepage";

describe("Sky Keyword Search", () => {
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

  it("should click the search icon ", () => {
    search.clicksearchIcon();
  });
  it("should search for keyword and verify the text value", () => {
    const elem = search.searchInput;
    expect(elem).toBeDisplayed();
    search.searchskybar("Sky");
    search.clicksearchBtn();
  });

  it("should show Editorial Section", () => {
    const result = search.getEditorialSection();
    search.isSearched();
    console.log("Results:" + result);
  });

  it("should see the keyword in an image and verify the value", () => {
    const result = search.getEditorialImage();
    console.log("Results:" + result);
  });
});
