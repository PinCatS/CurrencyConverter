import { currenciesList } from './currencies.list';

interface ICommand {
  from: string | null;
  to: string | null;
  amount: number;
}

export class Command {
  static MIN_REQUIRED_CMD_LENGTH: number = 10;
  static MIN_REQUIRED_CMD_WORDS: number = 3;
  command: ICommand;
  currencies = new Set(currenciesList);

  constructor() {
    this.command = {
      from: null,
      to: null,
      amount: 1,
    };
  }

  isReady() {
    return this.command.from && this.command.to && this.command.amount;
  }

  /**
   * 1000 usd to rub
   * 1000 from usd to rub
   * usd to rub
   * from usd to rub
   * usd from rub
   */
  fillCommand(value: string) {
    if (value.length < Command.MIN_REQUIRED_CMD_LENGTH) return;

    const words = value.toLowerCase().split(/\s+/);
    if (words.length < Command.MIN_REQUIRED_CMD_WORDS) return;

    const amount = Number.parseInt(words[words.length - 1]);
    if (!isNaN(amount)) {
      this.command.amount = amount;
      words.pop();
    }

    let word = words.pop();
    if (word && this.currencies.has(word)) {
      this.command.to = word;
    }

    let next_word = words.pop();
    if (next_word == 'from' || next_word == 'to') {
      if (next_word == 'from') {
        this.command.to = null;
        this.command.from = word ? word : null;
      }
      word = words.pop();
    }

    if (word && this.currencies.has(word)) {
      if (next_word == 'from') {
        this.command.to = word;
      } else {
        this.command.from = word;
      }
    }

    if (words.length) {
      word = words.pop();
      if (word) {
        if (!isNaN(Number.parseInt(word))) {
          this.command.amount = Number.parseInt(word);
        }
      }
    }

    return this;
  }

  getCommand(): ICommand {
    return this.command;
  }
}
