import { Component,  OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  animations: [
    trigger('referral', [
     state('inactive', style({
       width: "0px",
     })),
     state('active', style({
       width: "10%",
     })),
     transition('inactive => active', animate('500ms ease-in-out')),
     transition('active => inactive', animate('100ms ease-in-out')),
 ]),
 trigger('triangleLeft', [
  state('inactive', style({
    borderRight: "35vw solid transparent",
    borderBottom: "0vw solid #f2f2f2",
    borderLeft: "20vw solid transparent"
  })),
  state('active', style({
    borderRight: "35vw solid transparent",
    borderBottom: "10vw solid #f2f2f2",
    borderLeft: "20vw solid transparent"
  })),
  transition('inactive => active', animate('1000ms ease-in-out')),
  transition('active => inactive', animate('100ms ease-in-out')),
]),
trigger('triangleRight', [
 state('inactive', style({
   borderRight: "16vw solid transparent",
   borderBottom: "0vw solid #f2f2f2",
   borderLeft: "27vw solid transparent"
 })),
 state('active', style({
   borderRight: "16vw solid transparent",
   borderBottom: "8vw solid #f2f2f2",
   borderLeft: "27vw solid transparent"
 })),
 transition('inactive => active', animate('1000ms 400ms ease-in-out')),
 transition('active => inactive', animate('100ms ease-in-out')),
]),
 ]
})
export class MainContentComponent implements OnInit {
  referState = "inactive";
  triState = "inactive";
  constructor() { }

  ngOnInit() {
  }

  toggleRefer(){
    this.referState = this.referState == "inactive" ? 'active' : 'inactive'
    this.triState = "active"
  }

}
