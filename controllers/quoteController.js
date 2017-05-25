var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Auto = mongoose.model('Auto')
var Commercial = mongoose.model('Commercial')
var Home = mongoose.model('Home')
var Life = mongoose.model('Life')

var autoform = require('./mailContent/autoQuote.js')
var commercialform = require('./mailContent/commercialQuote.js')
var homeform = require('./mailContent/homeQuote.js')
var lifeform = require('./mailContent/lifeQuote.js')

var emailHandler = require('./mailcontent/emailHandler.js')

module.exports = (function(){
  return {
    auto: function(req, res) {
      var newAutoQuote = new Auto(req.body)
      var html_auto = autoform.autoquote(newAutoQuote)
      emailHandler.sendEmail(html_auto)

      newAutoQuote.save(function(err, data) {
        if (err) {
          console.log(err)
        } else {
          res.json(data)
        }
      })
    },

    commercial: function(req, res) {
      var newCommericalQuote = new Commercial(req.body)
      var html_commercial = commercialform.commercialquote(newCommericalQuote)
      emailHandler.sendEmail(html_commercial)

      newCommericalQuote.save(function(err, data) {
        if (err) {
          console.log(err)
          console.log("Error saving Commerical Quote")
        } else {
          console.log("New Commerical Quote Saved")
          res.json(data)
        }
      })
    },

    home: function(req, res) {
      var newHomeQuote = new Home(req.body)
      var html_home = homeform.homequote(newHomeQuote)
      emailHandler.sendEmail(html_home)

      newHomeQuote.save(function(err, data) {
        if (err) {
          console.log(err)
          console.log("Error saving Home Quote")
        } else {
          console.log("New Home Quote Saved")
          res.json(data)
        }
      })
    },

    life: function(req, res) {
      var newLifeQuote = new Life(req.body)
      var html_life = lifeform.lifequote(newLifeQuote)
      emailHandler.sendEmail(html_life)

      newLifeQuote.save(function(err, data) {
        if (err) {
          console.log(err)
          console.log("Error saving Life Quote")
        } else {
          console.log("New Life Quote Saved")
          res.json(data)
        }
      })
    }
  }
})()
