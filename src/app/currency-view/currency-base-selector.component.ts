import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { currenciesList } from '../currencies.list';

@Component({
  selector: 'currency-base-selector',
  templateUrl: './currency-base-selector.component.html',
  styleUrls: ['./currency-base-selector.component.css'],
})
export class CurrencyBaseSelectorComponent implements OnInit {
  baseCurrencies: string[];
  base: string;
  @Output() onUpdate: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.baseCurrencies = currenciesList.map((item) => item.toUpperCase());
    this.base = this.baseCurrencies[0];
  }

  updateBase(value: string) {
    this.base = value;
    this.onUpdate.emit(this.base);
  }

  ngOnInit(): void {
    this.onUpdate.emit(this.base);
  }
}
