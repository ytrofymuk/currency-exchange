import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, from, map, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyGetService {

  constructor(private http: HttpClient) { }

  getCurrency() {
    return this.http.get('https://api.apilayer.com/fixer/latest?symbols=EUR&base=USD', {
      headers: {
        'apikey': 'BOnk0Jdk8m4TNpttfZR1qQcnVI371aDh'
      }
    })
  }
}
