import Currency from "../3-currency.js";

const dollar = new Currency('$', 'Dollars');

test("Currency class' getter and constructor have been set properly", () => {
  expect(dollar.code).toBe('$');
  expect(dollar.name).toBe('Dollars');
});