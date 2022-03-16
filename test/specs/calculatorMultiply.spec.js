const Calculator = require('../../app/calculator');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('multiply', function() {
  let calculator; let spy;

  beforeEach(() => {
    calculator = new Calculator();
    spy = chai.spy.on(calculator, 'multiply');
  });

  afterEach(() => {
    calculator = null;
  });

  it('should return the product of params', function() {
    expect(calculator.multiply(1, 2)).to.be.equal(2);
  });

  it('should return the product of params', function() {
    expect(calculator.multiply(0, 2999)).to.be.equal(0);
  });

  it('should return the product of params', function() {
    expect(calculator.multiply(-1, -2)).to.be.equal(2);
  });
  it('should return an error if a param are not number type', function() {
    const callWithError = () => calculator.multiply('', 1);
    expect(spy).to.be.a.spy;
    expect(callWithError).to.be.throw('[ is not of type "Number.]');
  });
  it('should return an error if params are not number type', function() {
    const callWithError = () => calculator.multiply('a', 'b');
    expect(spy).to.be.a.spy;
    // eslint-disable-next-line max-len
    expect(callWithError).to.be.throw('[Both a and b are not of type "Number". They are strings]');
  });
});

