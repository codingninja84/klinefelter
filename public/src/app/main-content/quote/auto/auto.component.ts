import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  firstname: string = ""
  lastname: string = ""
  constructor() { }

  ngOnInit() {
  }

}
