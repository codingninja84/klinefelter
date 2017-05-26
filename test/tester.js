// Inside `test/expressjs_test.js`
// As we had before ...
var chai = require("chai");
var expect = chai.expect;
// The star of the show!
var webdriver = require("selenium-webdriver");
// Now we can use `by` to search for elements
var by = webdriver.By
// Selenium will be running all its tests through Chrome. (You could download firefox or safari as well)
var chrome = require('selenium-webdriver/chrome');
// Inside `before` because we want it to happen before it tries to start any tests
before(function () {
    // Set up the chrome service
    var path = require('chromedriver').path;
    var service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);
    var builder = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome());
    // `this.driver` will be how we communicate with the browser
    this.driver = builder.build();
});
after(function (done) {
    // Shut off the driver once all of our tests have completed
    this.driver.quit().then(done);
});
describe("Klinefelter-Insurance Title Test", function () {
  it("has 'Klinefelter Insurance Group' in the title", function (done) {
    this.timeout(100000);
    var d = this.driver;  // Because we need to use it within the closure
    d.get("localhost:8000").then(function () {
      // console.log(d.findElement(by.id("whatup")).getText())
      d.findElement(by.css("p")).getText().then(function (titleText) {
        expect(titleText).to.include("950 Pacific Ave Ste 640 Tacoma, Wa 98402");
        d.findElement(by.id("autoQuote")).click();
        done();  // `done` must happen AFTER we have completed everything
      });
    });
  });
});
