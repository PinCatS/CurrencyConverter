import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyRequestService } from '../currency-request/currency-request.service';
import { Result } from '../result.model';

@Component({
  selector: 'currency-submit',
  templateUrl: './currency-submit.component.html',
  styleUrls: ['./currency-submit.component.css'],
})
export class CurrencySubmitComponent implements OnInit {
  @Input() baseCurrency!: string;
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() result: EventEmitter<Result> = new EventEmitter<Result>();
  @Output() error: EventEmitter<any> = new EventEmitter<any>();

  constructor(private currencyService: CurrencyRequestService) {}

  makeRequest(): void {
    this.loading.emit(true);
    this.currencyService.getCurrencies(this.baseCurrency).subscribe(
      (data: any) => {
        if (data.success) {
          this.result.emit(new Result(data));
        } else {
          console.error(
            'Request to get currencies failed. API response',
            data.error
          );
          this.error.emit(data.error);
        }
        this.loading.emit(false);
      },
      (err: any) => {
        console.error('Request to get currencies failed. Http response', err);
        this.loading.emit(err);
        this.error.emit(true);
      }
    );
  }

  ngOnInit(): void {}
}
