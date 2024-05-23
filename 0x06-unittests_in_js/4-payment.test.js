
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () {
  let calNumStub = null;

  beforeEach(() => {
    calNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  it('should be called with the two arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calNumStub.calledWith('SUM', 100, 20)).to.be.true;
  });
  it('should be called once with arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calNumStub.calledOnce).to.be.true;
  });
  it('should call console log with the correct sum parameter', () => {
    sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 10')).to.be.true;
    console.log.restore();
  });

  afterEach(() => {
    sinon.restore();
  });
});
