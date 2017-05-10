import { Component,  OnInit, trigger, state, style, transition, animate, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { QuoteService} from '../quote.service'
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
 ]
})
export class AutoComponent implements OnInit {
  @ViewChild('container') private myScrollContainer: ElementRef;

  constructor(private quote_service: QuoteService) { }



  ngOnInit() {
  }


   scrollToTop() {
     console.log(this.myScrollContainer)
        this.myScrollContainer.nativeElement.scrollTop;

   }

  create(postData){
  console.log("in component")
  this.quote_service.createQuote(postData)
  .then((data) => {
    console.log("Success in component", data)
  })
  .catch(err => console.log(err))
}
  infoState ="active";
  insuranceState = "inactive";
  driverState = "inactive";
  carState = "inactive";

  toggleInfo(){
    this.infoState = this.infoState === 'active' ? 'inactive' : 'active';
    this.toggleInsurance()
    this.scrollToTop()
  }

  toggleInsurance(){
    this.insuranceState = this.insuranceState === 'inactive' ? 'active' : 'inactive';
    console.log(this.insuranceState)
    this.scrollToTop()
  }

  toggleDriver(){
    this.driverState = this.driverState === 'inactive' ? 'active' : 'inactive';
    console.log(this.driverState)
    this.toggleInsurance()
    this.scrollToTop()
  }
  toggleCar(){
    this.driverState = this.driverState === 'inactive' ? 'active' : 'inactive';
    this.carState = this.carState === 'inactive' ? 'active' : 'inactive';
    console.log(this.carState)
    this.scrollToTop()

  }

  addDriver(){}

}
