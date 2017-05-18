import { Component,  OnInit, trigger, state, style, transition, animate } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('column', [
     state('left', style({
       transform: "translateX(-100%)",
     })),
     state('right', style({
       transform: "translateX(100%)",
     })),
     transition('middle => right', animate('1000ms ease-in-out')),
     transition('middle => left', animate('1000ms ease-in-out')),
     transition('left => right', animate('1000ms ease-in-out')),
     transition('right => left', animate('1000ms ease-in-out')),
 ]),
]

})
export class SliderComponent implements OnInit {

  leftState:string = 'middle';

  constructor() { }

  ngOnInit() {

  }

  toggleLeft() {

   this.leftState = "left";
   console.log(this.leftState)
 }

 toggleRight() {
   this.leftState = "right";
  // this.rightState = this.rightState === 'inactive' ? 'right' : 'inactive';
  // console.log(this.leftState)
  }
}
