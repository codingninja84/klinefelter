var chai = require("chai");
var expect = chai.expect;
var webdriver = require("selenium-webdriver");
var by = webdriver.By
var until = webdriver.until;
var chrome = require('selenium-webdriver/chrome');

before(function () {
    var path = require('chromedriver').path;
    var service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);
    var builder = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome());
    this.driver = builder.build();
});
after(function (done) {
    this.driver.quit().then(done);
});
describe("Klinefelter-Insurance Auto Quote Form Test", function () {
  it("Form submits properly", function (done) {
    this.timeout(100000);
    var d = this.driver;
    d.get("localhost:8000").then(function () {
      d.findElement(by.css("p")).getText().then(function (titleText) {
        expect(titleText).to.include("950 Pacific Ave Ste 640 Tacoma, Wa 98402");
        d.findElement(by.id("autoQuote")).click();
        d.findElement(by.name("first_name")).sendKeys("Ian");
        d.findElement(by.name("last_name")).sendKeys("Tseng");
        d.findElement(by.name("address")).sendKeys("5121 26th Ave NE");
        d.findElement(by.name("apt_num")).sendKeys("B");
        d.findElement(by.name("city")).sendKeys("Seattle");
        d.findElement(by.name("state")).sendKeys("WA");
        setTimeout(function() {
          d.findElement(by.id("next1")).click();
        }, 2000);
        setTimeout(function() {
          d.findElement(by.id("next2")).click();
        }, 5000);
        setTimeout(function() {
          d.findElement(by.id("next3")).click();
        }, 7000);
        setTimeout(function() {
          d.findElement(by.id("submit1")).click();
        }, 9000);
        setTimeout(function() {
          d.findElement(by.id("close1")).click();
        }, 11000);
        done();
      });
    });
  });
});
