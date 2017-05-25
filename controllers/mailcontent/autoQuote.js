module.exports = (function(){
  return {
    autoquote: function(newAutoQuote) {
      var drivers_string = ""
      for (var i = 0; i < newAutoQuote.drivers.length; i++) {
        if (i == 0) {
          drivers_string += "<p>Primary Driver:</p><li>Driver name: " + newAutoQuote.drivers[i].driver_name + "</li><li>Driver birthday: " + newAutoQuote.drivers[i].driver_bday + "</li><li>Driver license number: " + newAutoQuote.drivers[i].driver_license_number + "</li><li>Driver license state: " + newAutoQuote.drivers[i].driver_license_state + "</li><li>Driver accidents in the last 5 years?: " + newAutoQuote.drivers[i].tickets_accidents_last_five_years + "</l1>"
        } else {
          drivers_string += "<p>Other Driver</p><li>Driver name: " + newAutoQuote.drivers[i].driver_name + "</li><li>Driver birthday: " + newAutoQuote.drivers[i].driver_bday + "</li><li>Driver license number: " + newAutoQuote.drivers[i].driver_license_number + "</li><li>Driver license state: " + newAutoQuote.drivers[i].driver_license_state + "</li><li>Driver accidents in the last 5 years?: " + newAutoQuote.drivers[i].tickets_accidents_last_five_years + "</l1>"
        }
      }

      var html_content = '<body><h1>Auto Insurance Quote Request</h1><hr><p>First Name: '  + newAutoQuote.first_name + '</p><p>Last Name: ' + newAutoQuote.last_name + '</p><p>Address: ' + newAutoQuote.address + ' ' + newAutoQuote.apt_num + ' ' + newAutoQuote.city + ', ' + newAutoQuote.state + '</p><p>Phone Number: ' + newAutoQuote.phone_number + '</p><p>Email Address: ' + newAutoQuote.email_address + '</p><p>Previous Address: ' + newAutoQuote.pre_address + ' ' + newAutoQuote.pre_apt_num + ' ' + newAutoQuote.pre_city + ', ' + newAutoQuote.pre_state + '</p><p>Insured?: ' + newAutoQuote.insured + ' </p><p>Current Insurance: ' + newAutoQuote.current_insurance + '</p></p>Other Insurance: ' + newAutoQuote.other_insurance + '</p><p>Policy Expiration: ' + newAutoQuote.policy_expiration + '</p><p>Premium: ' + newAutoQuote.premium + '</p></p>Cancelled or renewed insurance in the last three years?: ' + newAutoQuote.cancelled_or_renewed_last_three_years + '</p><p>Rent or own home: ' + newAutoQuote.rent_or_own_home + '</p><p>Bodily injuary liability: ' + newAutoQuote.bodily_injury_liability + '</p><p>Property Damange Liability: ' + newAutoQuote.property_damage_liabilty + '</p><p>Medical Payments: ' + newAutoQuote.medical_payments + '</p><p>Uninsured Motorist Liability: ' + newAutoQuote.uninsured_motorist_liability + '</p><p>Uninsured Motorist Property: ' + newAutoQuote.uninsured_motorist_property + '</p><p>Underinsured Motorist Liability: ' + newAutoQuote.underinsured_motorist_liability + '</p><p>Underinsured Motorist Property: ' + newAutoQuote.underinsured_motorist_property + '</p><p>Comprehensive Deductible: ' + newAutoQuote.comprehensive_deductible + '</p><p>Collision Deductible: ' + newAutoQuote.collision_deductible + '</p>' + drivers_string + '<p>Vehicle Year: ' + newAutoQuote.vehicle_one_year + '</p><p>Vehicle Make: ' + newAutoQuote.vehicle_one_make + '</p><p>Vehicle Model: ' + newAutoQuote.vehicle_one_model + '</p><p>Vehicle Annual Miles: ' + newAutoQuote.vehicle_one_annual_miles + '</p><p>Vehicle VIN: ' + newAutoQuote.vehicle_one_vin + '</p> </body>'
      return html_content
    }
  }
})()
