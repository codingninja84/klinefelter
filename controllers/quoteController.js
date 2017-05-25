var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Auto = mongoose.model('Auto')
var Commercial = mongoose.model('Commercial')
var Home = mongoose.model('Home')
var Life = mongoose.model('Life')
var autoform = require('./mailcontent/autoQuote.js')
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

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
          user: 'klinefelter.quote.request@gmail.com',
          pass: 'password12345'
        }
      });

      var html_content = '<body><h1>Commerical Insurance Quote Request</h1><hr><p>Contact Name: ' + newCommericalQuote.contact_name +  '</p><p>Business Name: ' + newCommericalQuote.business_name + '</p><p>Physical Address: ' + newCommericalQuote.physical_address + '</p><p>Mailing Address: ' + newCommericalQuote.mailing_address + '</p><p>Phone Number: '+ newCommericalQuote.phone_number + '</p><p>Alternate Phone Number: ' + newCommericalQuote.alt_phone_number + '</p><p>Fax Number: ' + newCommericalQuote.fax_number + '</p><p>Email Address: '+ newCommericalQuote.email_address + '</p><p>Current Insurance: ' + newCommericalQuote.current_insurance + '</p><p>Limit Requested: ' + newCommericalQuote.limit_requested + '</p><p>Needed Commercial Coverage: ' + newCommericalQuote.needed_commercial_coverage + '</p><p>Number of FTE: ' + newCommericalQuote.num_full_time_employees + '</p><p>Number of PTE: ' + newCommericalQuote.num_part_time_employees + '</p><p>Number of years in business: ' + newCommericalQuote.num_years_in_business + '</p><p>Business and Client Description: ' + newCommericalQuote.business_and_client_description + '</p><p>Annual Gross Sales: ' + newCommericalQuote.annual_gross_sales + '</p><p>Annual Payroll: ' + newCommericalQuote.annual_payroll + '</p><p>Cost of Subcontractor Work: ' + newCommericalQuote.cost_subcontractor_work + '</p><p>Claims in the last five years: ' + newCommericalQuote.claims_last_five_years + '</p><p>Claims Description: ' + newCommericalQuote.claims_description + '</p><p>Own or rent?: ' + newCommericalQuote.own_or_rent + '</p><p>Year build: ' + newCommericalQuote.year_build + '</p><p>Percent Occupied: ' + newCommericalQuote.percent_occupied + '</p><p>Sprinklers: ' + newCommericalQuote.sprinklers + '</p><p>Construction Type: ' + newCommericalQuote.construction_type + '</p><p>Store: ' + newCommericalQuote + '</p><p>Basement: ' + newCommericalQuote.basement + '</p><p>Square Footage: ' + newCommericalQuote.square_footage + '</p><p>Alarm: ' + newCommericalQuote.alarm + '</p><p>Building Value: ' + newCommericalQuote.building_value + '</p><p>Contents Value: ' + newCommericalQuote.contents_value + '</p><p>Other info: ' + newCommericalQuote.other_info + '</p></body>'

      let mailOptions = {
        from: '"Quote Request" <klinefelter.quote.request@gmail.com>',
        to: 'ianvtseng@gmail.com, rhanna1461@hotmail.com, abshirm@live.com',
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
        to: 'ianvtseng@gmail.com, rhanna1461@hotmail.com, abshirm@live.com',
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
        to: 'ianvtseng@gmail.com, rhanna1461@hotmail.com, abshirm@live.com',
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
