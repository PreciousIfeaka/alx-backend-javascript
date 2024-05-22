const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai");

describe('calculateNumber', function () {
  describe('sum', function () {
    it('should be 1 + 3 = 4', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should be 1 + 3.7 = 5', function () {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('should be 1.2 + 3.7 = 5', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('should be 1.5 + 3.7 = 6', function () {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    it('should be -2 + 4 = 2', function () {
      expect(calculateNumber('SUM', -2, 4)).to.equal(2);
    });
    it('should be 2.6 + -4.7 = -2', function () {
      expect(calculateNumber('SUM', 2.6, -4.7)).to.equal(-2);
    });
    it('should be -2.5 + -7.5 = -9', function () {
      expect(calculateNumber('SUM', -2.5, -7.5)).to.equal(-9);
    });
  });
  describe('subtract', function () {
    it('should be 3 - 1 = 2', function () {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });
    it('should be 1 - 3.7 = -3', function () {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('should be 1.2 - 3.7 = -3', function () {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
    it('should be 1.5 - 3.7 = -2', function () {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
    it('should be -2 - 4 = -6', function () {
      expect(calculateNumber('SUBTRACT', -2, 4)).to.equal(-6);
    });
    it('should be 2.6 - -4.7 = 8', function () {
      expect(calculateNumber('SUBTRACT', 2.6, -4.7)).to.equal(8);
    });
    it('should be -2.5 - -7.5 = -9', function () {
      expect(calculateNumber('SUBTRACT', -2.5, -7.5)).to.equal(5);
    });
  });
  describe('divide', function () {
    it('should be 3 / 1 = 3', function () {
      expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
    });
    it('should be 1 / 3.7 = 0.25', function () {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });
    it('should be 1.2 / 3.7 = 0.25', function () {
      expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });
    it('should be 1.5 / 3.7 = 0.5', function () {
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    });
    it('should be -2 / 4 = -0.5', function () {
      expect(calculateNumber('DIVIDE', -2, 4)).to.equal(-0.5);
    });
    it('should be 2.6 / -4.7 = -0.6', function () {
      expect(calculateNumber('DIVIDE', 2.6, -4.7)).to.equal(-0.6);
    });
    it('should be -2.5 / -5 = 0.4', function () {
      expect(calculateNumber('DIVIDE', -2.5, -5)).to.equal(0.4);
    });
    it('should be 1.4 / 0 = Error', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});