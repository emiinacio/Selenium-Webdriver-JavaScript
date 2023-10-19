const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
let should = require("chai").should();

describe("Add todo tests", async () => {
  it("Successfully adds a todo to application", async () => {
    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //Add a todo
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Lambda", Key.ENTER);


    //assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    //assert using node assertion
    //   assert.strictEqual(todoText, "Lambda");

    //assert using chai should
    todoText.should.equal("Lambda");

    //Close the browser
    await driver.quit();
  });
});
