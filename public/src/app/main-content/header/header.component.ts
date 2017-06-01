import { Component,  OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('modal', [
     state('inactive', style({
       transform: "translateY(100%)",
       display: "none",
     })),
     state('active', style({
       display : "flex",
     })),
     transition('inactive => active', animate('1000ms ease-in-out')),
     transition('active => inactive', animate('100ms ease-in-out')),
 ]),
 ]
})
export class HeaderComponent implements OnInit {
  modalState = "inactive"
  constructor() { }

  ngOnInit() {
  }

  toggleVideo(){
    this.modalState = this.modalState === 'inactive' ? 'active' : 'inactive';
  }

}
