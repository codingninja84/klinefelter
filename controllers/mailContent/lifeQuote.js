module.exports = (function(){
  return {
    lifequote: function(newLifeQuote) {
      var html_content = '<body><h1>Life Insurance Quote Request</h1><hr><p>: Amount of Death Benefit' + newLifeQuote.amount_of_death_benefit + '</p><p>Name: ' + newLifeQuote.name + '</p><p>Address: ' + newLifeQuote.address + '</p><p>Phone Number: ' + newLifeQuote.phone_number + '</p><p>Email Address: ' + newLifeQuote.email_address + '</p><p>Gender: ' + newLifeQuote.gender + '</p><p>Birthday: ' + newLifeQuote.bday + '</p><p>Height: ' + newLifeQuote.height + '</p><p>Weight: ' + newLifeQuote.weight +'</p><p>Use Tabacco?: ' + newLifeQuote.use_tabacco +'</p><p>Pre-Existing Health Conditions: ' + newLifeQuote.pre_existing_health_conditions + '</p><p>Medications and Dosage: ' + newLifeQuote.medications_and_dosage + '</p></body>'
      return html_content
    }
  }
})()
