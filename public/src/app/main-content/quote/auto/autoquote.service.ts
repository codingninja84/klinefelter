import { Injectable } from '@angular/core';
import {Driver} from './driver'

@Injectable()
export class AutoQuoteService {
  drivers: Array<Driver> = []
  index: number;
  constructor() { }

  destroy(driver){
    console.log("Driver name: " + driver.driver_name)
    for (let i = 0; i < this.drivers.length; i++){
      if (this.drivers[i].driver_name == driver.driver_name) {
        console.log("in if")
        this.drivers.splice(i, 1);
      }
    }
    console.log(this.drivers)
  }



}
