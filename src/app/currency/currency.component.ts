import { AfterViewChecked, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CurrencyGetService } from '../services/currency-get.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit, AfterViewChecked {

  constructor(private currency: CurrencyGetService, private cdRef: ChangeDetectorRef) { }

  USD: number = 0;
  EUR: number = 0
  GBP: number = 0;
  UAH: number = 0;


  config: any;

  rate!: any;

  ngOnInit(): void {
    this.getUSD();
    this.getEUR();
    this.getGBP();
  }

  getUSD() {
    this.currency.getCurrency('usd').subscribe((res: any) => {
      this.USD = res?.usd.uah.toFixed(2);
    })
  }

  getEUR() {
    this.currency.getCurrency('eur').subscribe((res: any) => {
      this.EUR = res?.eur.uah.toFixed(2);
    })
  }

  getGBP() {
    this.currency.getCurrency('gbp').subscribe((res: any) => {
      console.log(res);
      this.GBP = res?.gbp.uah.toFixed(2);
    })
  }

  ngAfterViewChecked(): void {

  }

}
