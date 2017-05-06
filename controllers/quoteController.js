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
      console.log("newAutoQuote stuff: " + newAutoQuote)
      console.log("req.body: " + req.body)
      console.log("req.body.params: " + req.body.params)


      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
          user: 'klinefelter.quote.request@gmail.com',
          pass: 'password12345'
        }
      });

      var html_content = '<body><h1>Auto Insurance Quote Request</h1><hr><p>First Name: '  + newAutoQuote.first_name + '</p><p>Last Name: ' + newAutoQuote.last_name + '</p><p>Address: ' + newAutoQuote.address + ' ' + newAutoQuote.apt_num + ' ' + newAutoQuote.city + ', ' + newAutoQuote.state + '</p><p>Phone Number: ' + newAutoQuote.phone_number + '</p><p>Email Address: ' + newAutoQuote.email_address + '</p><p>Previous Address: ' + newAutoQuote.pre_address + ' ' + newAutoQuote.pre_apt_num + ' ' + newAutoQuote.pre_city + ', ' + newAutoQuote.pre_state + '</p><p>Insured?: ' + newAutoQuote.insured + ' </p><p>Current Insurance: ' + newAutoQuote.current_insurance + '</p></p>Other Insurance: ' + newAutoQuote.other_insurance + '</p><p>Policy Expiration: ' + newAutoQuote.policy_expiration + '</p><p>Premium: ' + newAutoQuote.premium + '</p></p>Cancelled or renewed insurance in the last three years?: ' + newAutoQuote.cancelled_or_renewed_last_three_years + '</p><p>Rent or own home: ' + newAutoQuote.rent_or_own_home + '</p><p></p></body>'

      let mailOptions = {
        from: '"Quote Request" <klinefelter.quote.request@gmail.com>',
        to: 'ianvtseng@gmail.com, rhanna1461@hotmail.com',
        subject: 'New Quote Request',
        // text: "Name: " + newAutoQuote.first_name,
        html: "" + html_content + ""
      };

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

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
          user: 'klinefelter.quote.request@gmail.com',
          pass: 'password12345'
        }
      });

      let mailOptions = {
        from: '"Quote Request" <klinefelter.quote.request@gmail.com>',
        to: 'ianvtseng@gmail.com, rhanna1621@hotmail.com',
        subject: 'New Quote Request',
        text: "This is the form data placeholder",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });

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

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
          user: 'klinefelter.quote.request@gmail.com',
          pass: 'password12345'
        }
      });

      let mailOptions = {
        from: '"Quote Request" <klinefelter.quote.request@gmail.com>',
        to: 'ianvtseng@gmail.com, rhanna1621@hotmail.com',
        subject: 'New Quote Request',
        text: "This is the form data placeholder",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });

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

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
          user: 'klinefelter.quote.request@gmail.com',
          pass: 'password12345'
        }
      });

      let mailOptions = {
        from: '"Quote Request" <klinefelter.quote.request@gmail.com>',
        to: 'ianvtseng@gmail.com, rhanna1621@hotmail.com',
        subject: 'New Quote Request',
        text: "This is the form data placeholder",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });

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
