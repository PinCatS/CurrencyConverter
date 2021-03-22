import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConversionResult } from './conversion-result.model';

@Component({
  selector: 'converter-view',
  templateUrl: './converter-view.component.html',
  styleUrls: ['./converter-view.component.css'],
})
export class ConverterViewComponent implements OnInit {
  loading: boolean;
  error: any;
  result!: ConversionResult;

  constructor() {
    this.loading = false;
    this.error = false;
  }

  updateResult(result: ConversionResult) {
    this.result = result;
  }

  showErrorMessage(error: any): string {
    let errorMessage = '';
    if (this.error != null) {
    }
    return errorMessage;
  }

  ngOnInit(): void {}
}
