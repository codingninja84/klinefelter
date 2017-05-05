import { Component, OnInit } from '@angular/core';
import { QuoteService} from '../quote.service'
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  constructor(private quote_service: QuoteService) { }

  ngOnInit() {
  }
  create(postData){
  console.log("in component")
  this.quote_service.createQuote(postData)
  .then((data) => {
    console.log("Success in component", data)
  })
  .catch(err => console.log(err))
}


}
