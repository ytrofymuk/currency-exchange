import { AfterViewChecked, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CurrencyGetService } from '../services/currency-get.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit, AfterViewChecked {

  constructor(private currency: CurrencyGetService, private cdRef: ChangeDetectorRef) { }

  conversion: any;

  rate = {
    rates: {
      EUR: 0
    }
  }

  ngOnInit(): void {
    this.getCurrency();
  }

  getCurrency() {
    this.currency.getCurrency().subscribe((res: any) => {
      this.rate = res;
      console.log(this.rate);
    })
  }

  ngAfterViewChecked(): void {
    this.conversion = this.rate.rates.EUR * 100 + " EUR"
    this.cdRef.detectChanges();
  }

}
