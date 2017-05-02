var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HomeSchema = new Schema({
  applicant_name: {type: String, required: true},
  applicant_bday: {type: Date},
  applicant_phone_number: {type: String, required: true},
  applicant_email_address: {type: String, required: true},
  co_applicant_name: {type: String},
  co_applicant_bday: {type: Date},
  co_applicant_phone_number: {type: String},
  co_applicant_email_address: {type: String},
  num_people_in_home: {type: String},
  address: {type: String},
  previous_addres: {type: String},
  is_property_insured: {type: String},
  annual_premium: {type: String},
  deductible_amount: {type: String},
  occupation: {type: String},
})

mongoose.model('Home', HomeSchema)
