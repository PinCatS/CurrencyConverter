import { Component, OnInit } from '@angular/core';
import { Result } from '../result.model';
import { Currency } from '../currency-view/currency.model';

@Component({
  selector: 'currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.css'],
})
export class CurrencyViewComponent implements OnInit {
  result!: Result;
  loading: boolean;
  currencies!: Currency[];

  constructor() {
    this.loading = false;
    this.currencies = [];
  }

  updateResult(result: Result): void {
    this.result = result;
    this.currencies = this.buildCurrenciesList(this.result);
    //console.log(this.currencies);
  }

  buildCurrenciesList(result: Result) {
    return Object.entries(result.rates).map(([label, rate]) => ({
      label,
      rate: String(rate),
    }));
  }

  ngOnInit(): void {}
}
