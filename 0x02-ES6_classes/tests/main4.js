import Pricing from "../4-pricing.js";
import Currency from "../3-currency.js";

const money = new Pricing(1000, new Currency("N", "Naira"));
console.log(money.displayFullPrice());
console.log(Pricing.convertPrice(40, 1450));