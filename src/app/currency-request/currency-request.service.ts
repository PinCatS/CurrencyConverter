import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export const CURRENCY_SERVICE_API_KEY = '0a2dce81e95e7bfba447228bd00102a8';
export const CURRENCY_SERVICE__API_URL = 'https://data.fixer.io/api';

@Injectable()
export class CurrencyRequestService {
  constructor(
    private http: HttpClient,
    @Inject(CURRENCY_SERVICE_API_KEY) private apiKey: string,
    @Inject(CURRENCY_SERVICE__API_URL) private apiUrl: string
  ) {}

  getCurrencies(baseCurrency: string, symbols?: string) {
    const options = {
      params: new HttpParams()
        .append('access_key', this.apiKey)
        .append('base', baseCurrency),
    };

    if (symbols && symbols.length > 0) {
      options.params.append('symbols', symbols);
    }

    return this.http.get(this.apiUrl + '/latest', options);
  }

  convert(from: string, to: string, amount: number) {
    const options = {
      params: new HttpParams()
        .append('access_key', this.apiKey)
        .append('from', from)
        .append('to', to)
        .append('amount', amount.toString()),
    };

    return this.http.get(this.apiUrl + '/convert', options);
  }
}
