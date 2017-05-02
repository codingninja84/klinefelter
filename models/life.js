var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LifeSchema = new Schema({
  amount_of_death_benefit: {type: String},
  name: {type: String},
  address: {type: String},
  phone_number: {type: String},
  alt_phone_number: {type: String},
  email_address: {type: String},
  gender: {type: String},
  bday: {type: String},
  height: {type: String},
  weight: {type: String},
  use_tabacco: {type: String},
  pre_existing_health_conditions: {type: String},
  medications_and_dosage: {type: String},
  relationship_to_primary_insured: {type: String},
  child_one_name: {type: String},
  child_one_gender: {type: String},
  child_one_birthday: {type: String},
  child_one_height: {type: String},
  child_one_weight: {type: String},
  child_one_pre_existing_conditions: {type: String},
  child_one_medications_and_dosage: {type: String},
  child_two_name: {type: String},
  child_two_gender: {type: String},
  child_two_birthday: {type: String},
  child_two_height: {type: String},
  child_two_weight: {type: String},
  child_two_pre_existing_conditions: {type: String},
  child_two_medications_and_dosage: {type: String},
  child_three_name: {type: String},
  child_three_gender: {type: String},
  child_three_birthday: {type: String},
  child_three_height: {type: String},
  child_three_weight: {type: String},
  child_three_pre_existing_conditions: {type: String},
  child_three_medications_and_dosage: {type: String},
})

mongoose.model('Life', LifeSchema)
