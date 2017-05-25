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
describe("Express Repo on GitHub", function () {
  it("has 'expressjs/express' in the title", function (done) {
      this.timeout(10000);
      var d = this.driver;  // Because we need to use it within the closure
      d.get("https://github.com/expressjs/express").then(function () {
          d.findElement(by.css("title")).getText().then(function (titleText) {
              expect(titleText).to.include("");
              done();  // `done` must happen AFTER we have completed everything
          });
      });
  });
});
