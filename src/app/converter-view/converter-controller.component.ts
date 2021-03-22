import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyRequestService } from '../currency-request/currency-request.service';
import { ConversionResult } from './conversion-result.model';
import { Command } from './command.model';

@Component({
  selector: 'converter-controller',
  templateUrl: './converter-controller.component.html',
  styleUrls: ['./converter-controller.component.css'],
})
export class ConverterControllerComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() error: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  result: EventEmitter<ConversionResult> = new EventEmitter<ConversionResult>();
  command: Command;

  constructor(private currencyService: CurrencyRequestService) {
    this.command = new Command();
  }

  processCommand(value: string) {
    if (this.canWeDoRequest(value)) {
      const command = this.command.getCommand();
      if (command.from && command.to && command.amount) {
        this.makeConversion(command.from, command.to, command.amount);
        this.command = new Command();
      }
    }
  }

  makeConversion(from: string, to: string, amount: number) {
    this.loading.emit(true);
    this.currencyService.convert(from, to, amount).subscribe(
      (data: any) => {
        if (data.success) {
          this.result.emit(new ConversionResult(data.info.rate, data.result));
        } else {
          console.error(
            'Request to make conversion failed. API response.',
            data.error
          );
          this.error.emit(data.error);
        }
        this.loading.emit(false);
      },
      (err: any) => {
        console.error('Request to make conversion failed. Http response.', err);
        this.loading.emit(err);
        this.error.emit(true);
      }
    );
  }

  canWeDoRequest(value: string) {
    return this.command.fillCommand(value)?.isReady();
  }

  ngOnInit(): void {}
}
