const assert = require("assert");
const calculateNumber = require("./0-calcul");


describe('calculateNumber', () => {
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(1.2, 4), 5);
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(-1.5, 3.7), 3);
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(3.7, -1.5), 3);
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(2, 3.7), 6);
  });
  it('calculateNumber should return rounded sum of its arguments', () => {
    assert.equal(calculateNumber(-3.7, -1.2), -5);
  });
});
