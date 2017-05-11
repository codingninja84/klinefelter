import { Component,  OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('column', [
     state('inactive', style({
       display: "none"
     })),
     state('active', style({
       display: "block"
     })),
     transition('inactive => active', animate('500ms ease-in-out')),
     transition('active => inactive', animate('100ms ease-in-out')),
 ]),
 ]
})
export class FooterComponent implements OnInit {
  arrowState = "inactive";
  constructor() { }

  ngOnInit() {
  }

  toggleArrow(){
    this.arrowState = this.arrowState == "inactive" ? "active" : "inactive";
  }

}
