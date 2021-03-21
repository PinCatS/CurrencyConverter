import { Component, OnInit } from '@angular/core';
import { CurrencyRequestService } from '../currency-request/currency-request.service';

@Component({
  selector: 'currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.css'],
})
export class CurrencyViewComponent implements OnInit {
  data!: Object;
  loading: boolean;

  constructor(private currencyService: CurrencyRequestService) {
    this.loading = false;
  }

  makeRequest(): void {
    this.loading = true;
    this.currencyService.getCurrencies().subscribe(
      (data) => {
        this.data = data;
        this.loading = false;
      },
      (err) => {
        console.log('Request to get currencies failed.');
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {}
}
