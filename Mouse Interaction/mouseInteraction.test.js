const { Builder, Browser, By, Key } = require("selenium-webdriver");
const { describe, it, beforeEach, afterEach } = require("@jest/globals");

describe("Mouse Interaction", () => {
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    await driver.get(
      "https://www.selenium.dev/selenium/web/mouse_interaction.html"
    );
  });

  it("Double Click", async () => {
    let element = await driver.findElement(By.id("click"));
    await driver.actions().doubleClick(element).perform();
    await driver.sleep(3000);
  });

  it("Click", async () => {
    let element = await driver.findElement(By.id("click"));
    await driver.actions().click(element).perform();
    await driver.sleep(3000);
  });

  it("Context menu", async () => {
    let element = await driver.findElement(By.id("click"));
    await driver.actions({ async: true }).contextClick(element).perform();
    await driver.sleep(3000);
  });

  it("SendKeys", async () => {
    let element = await driver.findElement(By.id("clickable"));
    await driver.actions({ async: true }).sendKeys(element, "test").perform()
    await driver.actions().keyDown(Key.COMMAND).sendKeys('a').perform()
    await driver.sleep(3000);
  });

  it("Drag & Drop", async () => {
    let srcElement = await driver.findElement(By.id("draggable"));
    let targetElement = await driver.findElement(By.id("droppable"));
    await driver.actions({ async: true }).dragAndDrop(srcElement,targetElement).perform()
    await driver.sleep(3000);
  });

  afterEach(async () => {
    await driver.quit();
  });
});
