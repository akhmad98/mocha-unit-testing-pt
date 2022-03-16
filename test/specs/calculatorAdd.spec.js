const Calculator = require('../../app/calculator');
const chai = require('chai');
const spies = require('chai-spies');
const {expect} = require('chai');
chai.use(spies);

describe('add', function() {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    spy = chai.spy.on(calculator, 'add');
  });

  afterEach(() => {
    calculator = null;
  });

  it('should return true if params are number type', function() {
    expect(calculator.add(1, 2)).to.be.equal(3);
  });

  it('should return true if params are number type', function() {
    expect(calculator.add(1099, 2999)).to.be.equal(4098);
  });

  it('should return true if params are number type', function() {
    expect(calculator.add(-10, 11)).to.be.equal(1);
  });
  it('should return an error if a param are not number type', function() {
    const callWithError = () => calculator.add('', 1);
    expect(spy).to.be.a.spy;
    expect(callWithError).to.be.throw('[ is not of type "Number.]');
  });
  it('should return an error if params are not number type', function() {
    const callWithError = () => calculator.add('a', 'b');
    expect(spy).to.be.a.spy;
    // eslint-disable-next-line max-len
    expect(callWithError).to.be.throw('[Both a and b are not of type "Number". They are strings]');
  });
});


