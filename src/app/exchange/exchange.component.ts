import { Component, OnInit } from '@angular/core';
import { CurrencyGetService } from '../services/currency-get.service';

let selectCurrency = [
  {
    name: 'USD',
    url: './assets/icons/united-states.png'
  },
  {
    name: 'EUR',
    url: './assets/icons/european-union.png'
  },
  {
    name: 'GBP',
    url: './assets/icons/united-kingdom.png'
  },
  {
    name: 'UAH',
    url: './assets/icons/ukraine.png'
  },
];

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  constructor(private currency: CurrencyGetService) { }

  baseValue!: number;
  secondaryValue!: number;
  currencyOption = selectCurrency;
  baseCurrencyValue!: string;
  secondaryCurrencyValue!: string;
  rate: any;


  calc() {
    let base = (this.baseCurrencyValue).toLowerCase();
    let secondary = (this.secondaryCurrencyValue).toLowerCase();
    this.currency.getCurrency(base).subscribe(res => {
      this.rate = res;
      this.rate = (this.rate[base][secondary]).toFixed(2);
    })
    this.baseValue = 0;
    this.secondaryValue = 0;
  }

  calcSecondary() {
    this.secondaryValue = Number((this.baseValue * this.rate).toFixed(2))
  }

  calcBase() {
    this.baseValue = Number((this.secondaryValue / this.rate).toFixed(2))
  }

  ngOnInit(): void {
    this.baseCurrencyValue = this.currencyOption[0].name;
    this.secondaryCurrencyValue = this.currencyOption[3].name;
    this.calc()
  }

}
