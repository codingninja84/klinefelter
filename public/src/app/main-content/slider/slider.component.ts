import { Component,  OnInit, trigger, state, style, transition, animate } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('column', [
     state('left', style({
       transform: "translateX(-100%)",
       animationFillMode: "forwards"
     })),
     state('right', style({
       transform: "translateX(100%)",
     })),
     transition('middle => right', animate('1000ms ease-in-out')),
     transition('middle => left', animate('1000ms ease-in-out')),
     transition('left => right', animate('1000ms ease-in-out')),
     transition('right => left', animate('1000ms ease-in-out')),
 //     transition('active => inactive', animate('400ms ease-in-out'))
 ]),
 //   //sliderContent
 //   trigger('contentDiv', [
 //     state('active', style({
 //       width : "70%",
 //       scale: "(1.5)"
 //     })),
 //     state('inactive', style({
 //       opacity: "0",
 //       width: "20%"
 //     })),
 //     transition('inactive => active', animate('1000ms 400ms ease-in-out')),
 //     transition('active => inactive', animate('400ms ease-in-out'))
 //   ]),
 //
 //
 //   //previewText
 //   trigger('previewTextSlide3', [
 //     state('active', style({
 //       transform: "translateY(12vh)",
 //       opacity: ".5",
 //     })),
 //     state('inactive', style({
 //       opacity: "1",
 //     })),
 //     transition('inactive => active', animate('600ms ease-in-out')),
 //     transition('active => inactive', animate('400ms 600ms ease-in-out'))
 //   ]),
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
