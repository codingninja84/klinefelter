import { Component,  OnInit, trigger, state, style, transition, animate, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { QuoteService} from '../quote.service'
import { AutoQuoteService} from './autoquote.service'
import { Driver } from './driver'
import {WindowRef} from './window-ref';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css'],
  animations: [
    trigger('driverInfo', [
     state('active', style({
       display: "block",
     })),
     state('inactive', style({
       transform: "translateX(-150%)",
       display : "none"
     })),
     transition('inactive => active', animate('800ms 1000ms ease-in-out')),
     transition('active => inactive', animate('1000ms ease-in-out')),

 ]),
 trigger('insuranceInfo', [
  state('active', style({
    display: "block",
  })),
  state('inactive', style({
    transform: "translateX(-150%)",
    display : "none"
  })),
  transition('inactive => active', animate('800ms 1000ms ease-in-out')),
  transition('active => inactive', animate('1000ms ease-in-out')),

]),
trigger('driverInfo', [
 state('active', style({
   display: "block",
 })),
 state('inactive', style({
   transform: "translateX(-150%)",
   display : "none"
 })),
 transition('inactive => active', animate('800ms 1000ms ease-in-out')),
 transition('active => inactive', animate('1000ms ease-in-out')),

]),
trigger('carInfo', [
 state('active', style({
   display: "block",
 })),
 state('inactive', style({
   transform: "translateX(-150%)",
   display : "none"
 })),
 transition('inactive => active', animate('800ms 1000ms ease-in-out')),
 transition('active => inactive', animate('1000ms ease-in-out')),

]),
trigger('final', [
 state('active', style({
   display: "flex",
 })),
 state('inactive', style({
   transform: "translateX(-150%)",
   display : "none"
 })),
 transition('inactive => active', animate('800ms 1000ms ease-in-out')),
 transition('active => inactive', animate('1000ms ease-in-out')),

]),
 ]
})
export class AutoComponent implements OnInit {
  @ViewChild('container') private myScrollContainer: ElementRef;
  driver: Driver;
  driver_name = "";
  driver_bday = "";
  driver_license_number = "";
  driver_license_state = "";
  tickets_accidents_last_five_years = "";

  constructor(private quote_service: QuoteService, private auto_service: AutoQuoteService, private winRef: WindowRef) { }



  ngOnInit() {
      console.log(this.winRef)
      console.log(this.winRef.nativeWindow)
  }

  clearDriver(){
    this.driver_name = "";
    this.driver_bday = "";
    this.driver_license_number = "";
    this.driver_license_state = "";
    this.tickets_accidents_last_five_years = "";
  }

  addDriver(){
    this.driver = new Driver(this.driver_name, this.driver_bday, this.driver_license_number, this.driver_license_state, this.tickets_accidents_last_five_years)
    console.log(this.driver)
    this.clearDriver();
    this.auto_service.drivers.push(this.driver)

  }


  create(postData){
  postData.value.drivers = this.auto_service.drivers
  this.quote_service.createQuote(postData)
  .then((data) => {
    console.log("Success in component", data)
  })
  .catch(err => console.log(err))
  }

  destroy(driver){
  this.auto_service.destroy(driver);
  }


//animation functions
  infoState ="active";
  insuranceState = "inactive";
  driverState = "inactive";
  carState = "inactive";
  finalState = "inactive";

  toggleInfo(){
    this.infoState = this.infoState === 'active' ? 'inactive' : 'active';
    this.toggleInsurance()
    }

  toggleInsurance(){
    this.insuranceState = this.insuranceState === 'inactive' ? 'active' : 'inactive';

  }

  toggleDriver(){
    this.driverState = this.driverState === 'inactive' ? 'active' : 'inactive';
    this.toggleInsurance()
  }

  toggleCar(){
    this.driverState = this.driverState === 'inactive' ? 'active' : 'inactive';
    this.carState = this.carState === 'inactive' ? 'active' : 'inactive';
  }

  toggleFinal(){
    this.carState = this.carState === 'inactive' ? 'active' : 'inactive';
    this.finalState = this.finalState === 'inactive' ? 'active' : 'inactive';
  }


}
