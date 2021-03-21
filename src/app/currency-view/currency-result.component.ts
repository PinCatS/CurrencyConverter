import { Component, OnInit } from '@angular/core';
import { Result } from '../result.model';

@Component({
  selector: 'currency-result',
  templateUrl: './currency-result.component.html',
  styleUrls: ['./currency-result.component.css'],
})
export class CurrencyResultComponent implements OnInit {
  result!: Result;
  currencies!: Object[];

  constructor() {}

  buildCurrenciesList(result: Result) {
    this.currencies = Object.entries(result.rates).map(([label, rate]) => ({
      label,
      rate: String(rate),
    }));
    console.log(this.currencies);
  }

  ngOnInit(): void {}
}
