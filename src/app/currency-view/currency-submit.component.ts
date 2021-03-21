import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyRequestService } from '../currency-request/currency-request.service';
import { Result } from '../result.model';

@Component({
  selector: 'currency-submit',
  templateUrl: './currency-submit.component.html',
})
export class CurrencySubmitComponent implements OnInit {
  @Input() baseCurrency!: string;
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() result: EventEmitter<Result> = new EventEmitter<Result>();

  constructor(private currencyService: CurrencyRequestService) {}

  makeRequest(): void {
    this.loading.emit(true);
    this.currencyService.getCurrencies(this.baseCurrency).subscribe(
      (data: any) => {
        if (data.success) {
          this.result.emit(new Result(data));
        } else {
          console.error('Request to get currencies failed.', data.error);
        }
        this.loading.emit(false);
      },
      (err: any) => {
        console.error('Request to get currencies failed.', err);
        this.loading.emit(false);
      }
    );
  }

  ngOnInit(): void {}
}
