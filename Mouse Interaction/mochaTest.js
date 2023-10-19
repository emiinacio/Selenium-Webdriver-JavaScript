const { Builder, Browser, By, Key } = require("selenium-webdriver");

describe("", function () {
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get(
      "https://amazon.es"
    );
  });

  it("implicit wait", function () {});

  it("implicit wait", function () {});

  it("implicit wait", function () {});

  this.afterEach(async function() {
    await driver.quit();
  });
});
