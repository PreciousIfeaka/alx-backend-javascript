import Currency from './3-currency';

export default class Pricing {
  constructor(amount = 0, currency = Currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get() {
    return this._amount && this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount = 0, conversionRate = 0) {
    return amount * conversionRate;
  }
}
