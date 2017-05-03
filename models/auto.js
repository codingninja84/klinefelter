var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AutoSchema = new Schema({
  name: {type: String, required: true},
  address: {type: String, required: true},
  phone_number: {type: String, required: true},
  email_address: {type: String, required: true},
  previous_address: {type: String},
  current_insurance: {type: String},
  company_name: {type: String},
  policy_expiration: {type: Date},
  annual_premium: {type: String},
  cancelled_or_renewed_last_three_years: {type: String},
  rent_or_own_home: {type: String},
  bodily_injury_liability: {type: String},
  property_damage_liabilty: {type: String},
  medical_payments: {type: String},
  uninsured_motorit_liability: {type: String},
  uninsured_motorit_property: {type: String},
  comprehensive_deductible: {type: String},
  collision_deductible: {type: String},
  rental_reimbursment: {type: String},
  towing_and_labor: {type: String},
  primary_driver_bday: {type: Date},
  primary_driver_license_number: {type: String},
  primary_driver_license_state: {type: String},
  primary_tickets_accidents_last_five_years: {type: String},
  secondary_driver_bday: {type: Date},
  secondary_driver_license_number: {type: String},
  secondary_driver_license_state: {type: String},
  secondary_tickets_accidents_last_five_years: {type: String},
  third_driver_bday: {type: Date},
  third_driver_license_number: {type: String},
  third_driver_license_state: {type: String},
  third_tickets_accidents_last_five_years: {type: String},
  vehicle_one_year: {type: String},
  vehicle_one_make: {type: String},
  vehicle_one_model: {type: String},
  vehicle_one_annual_miles: {type: String},
  vehicle_one_vin: {type: String},
  vehicle_two_year: {type: String},
  vehicle_two_make: {type: String},
  vehicle_two_model: {type: String},
  vehicle_two_annual_miles: {type: String},
  vehicle_two_vin: {type: String},
  vehicle_three_year: {type: String},
  vehicle_three_make: {type: String},
  vehicle_three_model: {type: String},
  vehicle_three_annual_miles: {type: String},
  vehicle_three_vin: {type: String},
})

mongoose.model('Auto', AutoSchema)