import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyRequestService } from '../currency-request/currency-request.service';
import { Result } from '../result.model';

@Component({
  selector: 'currency-submit',
  templateUrl: './currency-submit.component.html',
})
export class CurrencySubmitComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() result: EventEmitter<Result> = new EventEmitter<Result>();

  constructor(private currencyService: CurrencyRequestService) {}

  makeRequest(): void {
    this.loading.emit(true);
    this.currencyService.getCurrencies().subscribe(
      (data) => {
        this.loading.emit(false);
        this.result.emit(new Result(data));
      },
      (err) => {
        console.log('Request to get currencies failed.');
        this.loading.emit(false);
      }
    );
  }

  ngOnInit(): void {}
}
