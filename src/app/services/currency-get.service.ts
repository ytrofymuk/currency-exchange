import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyGetService {

  constructor(private http: HttpClient) { }


  getCurrency(currency: string) {
    return this.http.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
  }
}
