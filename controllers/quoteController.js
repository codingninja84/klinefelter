var nodemailer = require('nodemailer')
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Auto = mongoose.model('Auto')
var Commercial = mongoose.model('Commercial')
var Home = mongoose.model('Home')
var Life = mongoose.model('Life')

module.exports = (function(){
  return {
    auto: function(req, res) {
      var newAutoQuote = new Auto(req.body)



      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
          user: 'klinefelter.quote.request@gmail.com',
          pass: 'password12345'
        }
      });

      let mailOptions = {
        from: '"Quote Request" <klinefelter.quote.request@gmail.com>', // sender address
        to: 'ianvtseng@gmail.com, rhanna1621@hotmail.com', // list of receivers
        subject: 'New Quote Request', // Subject line
        text: req.body, // plain text body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });



      newAutoQuote.save(function(err, data) {
        if (err) {
          console.log(err)
          console.log("Error saving Auto Quote")
        } else {
          console.log("New Auto Quote Saved")
          res.json(data)
        }
      })
    },
    commercial: function(req, res) {
      var newCommericalQuote = new Commercial(req.body)
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
