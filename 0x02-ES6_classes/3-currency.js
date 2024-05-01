export default class Currency {
  constructor(code = '', name = '') {
    this._name = name;
    this._code = code;
  }

  set(code, name) {
    this._code = code;
    this._name = name;
  }

  get() {
    return this._code && this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
