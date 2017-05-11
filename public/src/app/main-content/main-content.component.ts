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
 ]
})
export class MainContentComponent implements OnInit {
  referState = "inactive"
  constructor() { }

  ngOnInit() {
  }
  
  toggleRefer(){
    this.referState = this.referState == "inactive" ? 'active' : 'inactive'
  }

}
