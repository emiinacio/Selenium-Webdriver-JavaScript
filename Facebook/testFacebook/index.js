const {Builder} = require("selenium-webdriver")
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

options.setPreference("browser.download.dir", "C:\Users\emilyi\Selenium WebDriver")
options.setPreference("browser.donwload.folderList", 2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv")




const driver = new Builder("").forBrowser("firefox").build();

driver.get("https://facebook.com")

//Close the browser
await driver.quit();