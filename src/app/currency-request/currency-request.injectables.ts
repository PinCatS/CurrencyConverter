import {
  CurrencyRequestService,
  CURRENCY_SERVICE_API_KEY,
  CURRENCY_SERVICE__API_URL,
} from './currency-request.service';

export const currencyServiceInjectables: Array<any> = [
  { provide: CurrencyRequestService, useClass: CurrencyRequestService },
  { provide: CURRENCY_SERVICE_API_KEY, useValue: CURRENCY_SERVICE_API_KEY },
  { provide: CURRENCY_SERVICE__API_URL, useValue: CURRENCY_SERVICE__API_URL },
];
