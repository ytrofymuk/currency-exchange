import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyGetService {

  constructor(private http: HttpClient) { }

  fullYear: any;
  month: any;
  day!: any;


  getCurrency(currency: string) {
    // return this.http.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    this.fullYear = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.day = new Date().getDate();
    if (this.month < 10) {
      this.month = "0" + this.month;
    }
    if (this.day < 10) {
      this.day = "0" + this.day;
    }
    return this.http.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${this.fullYear}-${this.month}-${this.day}/currencies/${currency}.json`)
  }
}
