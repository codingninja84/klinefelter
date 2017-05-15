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

      // var newDriver = new Driver(driveName: req.body.drive_blah,)
      //
      // newAutoQuote.drivers.push(newDriver)

      console.log("newAutoQuote stuff: " + newAutoQuote)
      console.log("req.body: " + req.body)
      console.log("req.body.params: " + req.body.params)
      console.log("Make: " + newAutoQuote.vehicle_one_make)
      console.log("Vin: " +newAutoQuote.vehicle_one_vin)
      console.log("Model: " + newAutoQuote.vehicle_one_model)
      console.log("Annual Miles: " + newAutoQuote.vehicle_one_annual_miles)
      console.log("Year: " + newAutoQuote.vehicle_one_year)

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        auth: {
          user: 'klinefelter.quote.request@gmail.com',
          pass: 'password12345'
        }
      });

      var html_content = '<body><h1>Auto Insurance Quote Request</h1><hr><p>First Name: '  + newAutoQuote.first_name + '</p><p>Last Name: ' + newAutoQuote.last_name + '</p><p>Address: ' + newAutoQuote.address + ' ' + newAutoQuote.apt_num + ' ' + newAutoQuote.city + ', ' + newAutoQuote.state + '</p><p>Phone Number: ' + newAutoQuote.phone_number + '</p><p>Email Address: ' + newAutoQuote.email_address + '</p><p>Previous Address: ' + newAutoQuote.pre_address + ' ' + newAutoQuote.pre_apt_num + ' ' + newAutoQuote.pre_city + ', ' + newAutoQuote.pre_state + '</p><p>Insured?: ' + newAutoQuote.insured + ' </p><p>Current Insurance: ' + newAutoQuote.current_insurance + '</p></p>Other Insurance: ' + newAutoQuote.other_insurance + '</p><p>Policy Expiration: ' + newAutoQuote.policy_expiration + '</p><p>Premium: ' + newAutoQuote.premium + '</p></p>Cancelled or renewed insurance in the last three years?: ' + newAutoQuote.cancelled_or_renewed_last_three_years + '</p><p>Rent or own home: ' + newAutoQuote.rent_or_own_home + '</p><p>Bodily injuary liability: ' + newAutoQuote.bodily_injury_liability + '</p><p>Property Damange Liability: ' + newAutoQuote.property_damage_liabilty + '</p><p>Medical Payments: ' + newAutoQuote.medical_payments + '</p><p>Uninsured Motorist Liability: ' + newAutoQuote.uninsured_motorist_liability + '</p><p>Uninsured Motorist Property: ' + newAutoQuote.uninsured_motorist_property + '</p><p>Underinsured Motorist Liability: ' + newAutoQuote.underinsured_motorist_liability + '</p><p>Underinsured Motorist Property: ' + newAutoQuote.underinsured_motorist_property + '</p><p>Comprehensive Deductible: ' + newAutoQuote.comprehensive_deductible + '</p><p>Collision Deductible: ' + newAutoQuote.collision_deductible + '</p><p>Driver Name: ' + newAutoQuote.primary_driver_name + '</p><p>Drivery Bday: ' + newAutoQuote.primary_driver_bday + '</p><p>License Number: ' + newAutoQuote.primary_driver_license_number + '</p><p>License State: ' + newAutoQuote.primary_driver_license_state +'</p><p>Accidents in the last 5 years?: ' + newAutoQuote.primary_tickets_accidents_last_five_years + '</p><p>Vehicle Year: ' + newAutoQuote.vehicle_one_year + '</p><p>Vehicle Make: ' + newAutoQuote.vehicle_one_make + '</p><p>Vehicle Model: ' + newAutoQuote.vehicle_one_model + '</p><p>Vehicle Annual Miles: ' + newAutoQuote.vehicle_one_annual_miles + '</p><p>Vehicle VIN: ' + newAutoQuote.vehicle_one_vin + '</p> </body>'

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

      var html_content = '<body><h1>Commerical Insurance Quote Request</h1><hr><p>Contact Name: ' + newCommericalQuote.contact_name +  '</p><p>Business Name: ' + newCommericalQuote.business_name + '</p><p>Physical Address: ' + newCommericalQuote.physical_address + '</p><p>Mailing Address: ' + newCommericalQuote.mailing_address + '</p><p>Phone Number: '+ newCommericalQuote.phone_number + '</p><p>Alternate Phone Number: ' + newCommericalQuote.alt_phone_number + '</p><p>Fax Number: ' + newCommericalQuote.fax_number + '</p><p>Email Address: '+ newCommericalQuote.email_address + '</p><p>Current Insurance: ' + newCommericalQuote.current_insurance + '</p><p>Limit Requested: ' + newCommericalQuote.limit_requested + '</p><p>Needed Commercial Coverage: ' + newCommericalQuote.needed_commercial_coverage + '</p><p>Number of FTE: ' + newCommericalQuote.num_full_time_employees + '</p><p>Number of PTE: ' + newCommericalQuote.num_part_time_employees + '</p><p>Number of years in business: ' + newCommericalQuote.num_years_in_business + '</p><p>Business and Client Description: ' + newCommericalQuote.business_and_client_description + '</p><p>Annual Gross Sales: ' + newCommericalQuote.annual_gross_sales + '</p><p>Annual Payroll: ' + newCommericalQuote.annual_payroll + '</p><p>Cost of Subcontractor Work: ' + newCommericalQuote.cost_subcontractor_work + '</p><p>Claims in the last five years: ' + newCommericalQuote.claims_last_five_years + '</p><p>Claims Description: ' + newCommericalQuote.claims_description + '</p><p>Own or rent?: ' + newCommericalQuote.own_or_rent + '</p><p>Year build: ' + newCommericalQuote.year_build + '</p><p>Percent Occupied: ' + newCommericalQuote.percent_occupied + '</p><p>Sprinklers: ' + newCommericalQuote.sprinklers + '</p><p>Construction Type: ' + newCommericalQuote.construction_type + '</p><p>Store: ' + newCommericalQuote + '</p><p>Basement: ' + newCommericalQuote.basement + '</p><p>Square Footage: ' + newCommericalQuote.square_footage + '</p><p>Alarm: ' + newCommericalQuote.alarm + '</p><p>Building Value: ' + newCommericalQuote.building_value + '</p><p>Contents Value: ' + newCommericalQuote.contents_value + '</p><p>Other info: ' + newCommericalQuote.other_info + '</p></body>'

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
