export class Driver {

  driver_name: string;
  driver_bday: string;
  driver_lic_number: string;
  driver_license_state: string;
  tickets_accidents_last_five_years: string;

  constructor(driver_name, driver_bday, driver_lic_number, driver_license_state, tickets_accidents_last_five_years){
    this.driver_name = driver_name;
    this.driver_bday = driver_bday;
    this.driver_lic_number = driver_lic_number;
    this.driver_license_state = driver_license_state;
    this.tickets_accidents_last_five_years = tickets_accidents_last_five_years;
  }
}
