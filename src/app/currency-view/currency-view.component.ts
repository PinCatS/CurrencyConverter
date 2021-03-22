import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Result } from '../result.model';
import { Currency } from '../currency-view/currency.model';

/**
 * TODO:
 * 1. Style the list: list for mobile, columns for desctop
 * 2. Style the dropdown
 * 3. Add error message in case of other bases
 * 4. Add input for converter
 * 5. Do convertion
 */

@Component({
  selector: 'currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.css'],
})
export class CurrencyViewComponent implements OnInit {
  result!: Result;
  loading: boolean;
  currencies!: Currency[];
  @Output() onUpdate: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.loading = false;
    this.currencies = [];
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

  ngOnInit(): void {}
}
