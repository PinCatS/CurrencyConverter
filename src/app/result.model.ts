export class Result {
  base: string;
  date: Date;
  rates: Object;

  constructor(response?: any) {
    this.base = response && response.base;
    this.date = response && new Date(response.date);
    this.rates = response && response.rates;
  }
}
