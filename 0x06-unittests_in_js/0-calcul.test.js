const assert = require("assert");
const calculateNumber = require("./0-calcul");


describe('calculateNumber', () => {
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(1, 3.7), Math.round(1) + Math.round(3.7));
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(1, 3), Math.round(1) + Math.round(3));
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(1.2, 3.7), Math.round(1.2) + Math.round(3.7));
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(1.5, 3.7), Math.round(1.5) + Math.round(3.7));
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(0.3, 0.7), Math.round(0.3) + Math.round(0.7));
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(2, 3.7), Math.round(2) + Math.round(3.7));
  });
});
