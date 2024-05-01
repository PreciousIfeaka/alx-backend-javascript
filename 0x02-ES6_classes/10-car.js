const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    // creates a new class instance with the same properties.
    return new this.constructor(this._brand, this._motor, this._color);
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    // calling the clonecar mwthod using Symbols.
    return new this.constructor[Symbol.species]();
  }
}
