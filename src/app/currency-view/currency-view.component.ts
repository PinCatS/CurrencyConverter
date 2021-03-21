import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  baseCurrencies: string[];
  base: string;
  @Output() onUpdate: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.loading = false;
    this.currencies = [];
    this.baseCurrencies = ['EUR', 'USD', 'RUB'];
    this.base = 'EUR';
  }

  updateResult(result: Result): void {
    console.log(result);
    this.result = result;
    this.currencies = this.buildCurrenciesList(this.result);
  }

  buildCurrenciesList(result: Result) {
    return Object.entries(result.rates).map(([label, rate]) => ({
      label,
      rate: String(rate),
    }));
  }

  updateBase(value: string) {
    this.base = value;
    this.onUpdate.emit(this.base);
  }

  ngOnInit(): void {}
}
