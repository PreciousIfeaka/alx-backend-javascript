import Currency from './3-currency';

export default class Pricing {
  constructor(amount = 0, currency = Currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount = 0) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    return amount * conversionRate;
  }
}
