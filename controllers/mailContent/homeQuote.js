module.exports = (function(){
  return {
    homequote: function(newHomeQuote) {
      var html_content = '<body><h1>Home Insurance Quote Request</h1><hr><p>Name: ' + newHomeQuote.applicant_name + '</p><p>Birthday: ' + newHomeQuote.applicant_bday + '</p><p>Phone Number: ' + newHomeQuote.applicant_phone_number + '</p><p>Email Address: ' + newHomeQuote.applicant_email_address + '</p><p>Co-Applicant Name: ' + newHomeQuote.co_applicant_name + '</p><p>Co-Applicant Birthday: ' + newHomeQuote.co_applicant_bday + '</p><p>Co-Applicant Phone Number: ' + newHomeQuote.co_applicant_phone_number + '</p><p>Co-Applicant Email Address: ' + newHomeQuote.co_applicant_email_address + '</p><p>Number of people in home: ' + newHomeQuote.num_people_in_home + '</p><p>Address: ' + newHomeQuote.address + '</p><p>Previous Address: ' + newHomeQuote.previous_address + '</p><p>Is Property Insured?: ' + newHomeQuote.is_property_insured + '</p><p>Annual Premium: ' + newHomeQuote.annual_premium + '</p><p>Deductible Amount: ' + newHomeQuote.deductible_amount + '</p><p>Occupation: ' + newHomeQuote.occupation + '</p></body>'
      return html_content
    }
  }
})()
