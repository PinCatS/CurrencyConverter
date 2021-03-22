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

  showErrorMessage(error: any): string {
    let errorMessage = '';
    if (this.error != null) {
    }
    return errorMessage;
  }

  ngOnInit(): void {}
}
