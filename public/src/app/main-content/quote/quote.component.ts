import { Component,  OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  animations: [
    trigger('auto-modal', [
     state('inactive', style({
       transform: "translateY(100%)",
       display: "none",
     })),
     state('active', style({
       display : "block",
     })),
     transition('inactive => active', animate('1000ms ease-in-out')),
     transition('active => inactive', animate('100ms ease-in-out')),
 ]),
 trigger('moveGear', [
  state('inactive', style({

  })),
  state('active', style({
    transform: "rotate(1080deg)",
  })),
  transition('inactive => active', animate('5000ms ease-in-out')),
  transition('active => inactive', animate('100ms ease-in-out')),
]),
 ]
})
export class QuoteComponent implements OnInit {
  autoState:string = 'inactive';
  gears:string = 'inactive'
  constructor() {}

  ngOnInit() {

  }

  toggleAuto(){
    this.autoState = this.autoState === 'inactive' ? 'active' : 'inactive';

  }

  moveGears(){
    this.gears = 'active';
  }

}
