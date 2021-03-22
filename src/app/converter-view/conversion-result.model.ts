export class ConversionResult {
  rate: number;
  result: number;

  constructor(rate: number, result: number) {
    (this.rate = rate), (this.result = result);
  }
}
