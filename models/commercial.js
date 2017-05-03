var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommercialSchema = new Schema({
  contact_name: {type: String, required: true},
  business_name: {type: String, required: true},
  physical_address: {type: String, required: true},
  mailing_address: {type: String},
  phone_number: {type: String, required: true},
  alt_phone_number: {type: String},
  fax_number: {type: String},
  email_address: {type: String},
  current_insurance: {type: String},
  limit_requested: {type: String},
  needed_commercial_coverage: {type: String},
  num_full_time_employees: {type: String},
  num_part_time_employees: {type: String},
  num_years_in_business: {type: String},
  business_and_client_description: {type: String},
  annual_gross_sales: {type: String},
  annual_payroll: {type: String},
  cost_subcontractor_work: {type: String},
  claims_last_five_years: {type: String},
  claims_description: {type: String},
  own_or_rent: {type: String},
  year_build: {type: String},
  percent_occupied: {type: String},
  sprinklers: {type: String},
  construction_type: {type: String},
  store: {type: String},
  basement: {type: String},
  square_footage: {type: String},
  alarm: {type: String},
  building_value: {type: String},
  contents_value: {type: String},
  other_info: {type: String},
})

mongoose.model('Commercial', CommercialSchema)
