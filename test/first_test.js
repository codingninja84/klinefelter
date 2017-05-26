var chai = require("chai");
var expect = chai.expect;

describe("Mocha", function () {
    xit("runs correctly", function () {
        expect("hello").to.equal("hello");
        expect("hello").to.not.equal("goodbye");
        expect(24).to.be.below(25);
        expect(24).to.be.at.least(23);
    });
});

/* Inside first_test.js */
// var assert = require("assert");
// describe("Mocha", function () {
//     it("runs correctly", function () {
//         // This will fail tests if not true
//         // (try changing it to false, see what happens)
//         assert.equal("hello", "hello");
//     });
// });
//
// describe("the car", function () {
//     it("has 4 wheels", function () {
//          // Tests go here
//     });
//     it("can accelerate from 0mph to 60mph in less than 6 seconds", function () {
//         // Tests go here
//     });
//     it("deploys an airbag in an accident", function () {
//         // Tests go here
//     });
// });
