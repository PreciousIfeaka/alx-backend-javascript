const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe('calculateNumber', function () {
  describe('sum', function () {
    it('should be 1 + 3 = 4', function () {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('should be 1 + 3.7 = 5', function () {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should be 1.2 + 3.7 = 5', function () {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('should be 1.5 + 3.7 = 6', function () {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('should be -2 + 4 = 2', function () {
      assert.equal(calculateNumber('SUM', -2, 4), 2);
    });
    it('should be 2.6 + -4.7 = -2', function () {
      assert.equal(calculateNumber('SUM', 2.6, -4.7), -2);
    });
    it('should be -2.5 + -7.5 = -9', function () {
      assert.equal(calculateNumber('SUM', -2.5, -7.5), -9);
    });
  });
  describe('subtract', function () {
    it('should be 3 - 1 = 2', function () {
      assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
    });
    it('should be 1 - 3.7 = -3', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('should be 1.2 - 3.7 = -3', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it('should be 1.5 - 3.7 = -2', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('should be -2 - 4 = -6', function () {
      assert.equal(calculateNumber('SUBTRACT', -2, 4), -6);
    });
    it('should be 2.6 - -4.7 = 8', function () {
      assert.equal(calculateNumber('SUBTRACT', 2.6, -4.7), 8);
    });
    it('should be -2.5 - -7.5 = -9', function () {
      assert.equal(calculateNumber('SUBTRACT', -2.5, -7.5), 5);
    });
  });
  describe('divide', function () {
    it('should be 3 / 1 = 3', function () {
      assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
    });
    it('should be 1 / 3.7 = 0.25', function () {
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });
    it('should be 1.2 / 3.7 = 0.25', function () {
      assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    });
    it('should be 1.5 / 3.7 = 0.5', function () {
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });
    it('should be -2 / 4 = -0.5', function () {
      assert.equal(calculateNumber('DIVIDE', -2, 4), -0.5);
    });
    it('should be 2.6 / -4.7 = -0.6', function () {
      assert.equal(calculateNumber('DIVIDE', 2.6, -4.7), -0.6);
    });
    it('should be -2.5 / -5 = 0.4', function () {
      assert.equal(calculateNumber('DIVIDE', -2.5, -5), 0.4);
    });
    it('should be 1.4 / 0 = Error', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});