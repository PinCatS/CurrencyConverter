import { Component, OnInit } from '@angular/core';
import { ConversionResult } from './conversion-result.model';

@Component({
  selector: 'converter-view',
  templateUrl: './converter-view.component.html',
  styleUrls: ['./converter-view.component.css'],
})
export class ConverterViewComponent implements OnInit {
  loading: boolean;
  error: any;
  result: ConversionResult | null;

  constructor() {
    this.loading = false;
    this.error = false;
    this.result = null;
  }

  updateResult(result: ConversionResult) {
    this.result = result;
  }

  resetResult() {
    if (this.loading == true) {
      this.error = null;
      this.result = null;
    }
  }

  getErrorMessage(): string {
    let errorMessage = '';
    if (this.error != null) {
      switch (this.error.code) {
        case 105:
          errorMessage =
            'Для выбора другой базы, подпишитесь на премиум подписку';
          break;
        default:
          errorMessage =
            'Что-то пошло не так. Попробуйте ещё раз через некоторое время';
      }
    }
    return errorMessage;
  }

  ngOnInit(): void {}
}
