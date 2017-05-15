import { Injectable} from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from "@angular/http"
import { AutoComponent} from './auto/auto.component'
import 'rxjs'

@Injectable()
export class QuoteService {

  constructor(private http: Http) { }
  createQuote(quote){
    // console.log("in service", quote.form.value)
    // // console.log("Drivers in service: " + quote.form.value.drivers)
    // console.log("QUOTE: " + quote)
    // for (var k in quote) {
    //   console.log("Property: " + quote[k])
    // }

    console.log("Quote form value: " + quote.form)


    return this.http.post("/auto", quote.form.value)
    .map(data => data.json()).toPromise()
  }
}
