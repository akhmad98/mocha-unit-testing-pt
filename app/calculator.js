/**
 *
 * calculator to add and multiply
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {

  };

  /**
   *
   *
   * @param {Number} fparam first param to sum
   * @param {Number} sparam second param to sum
   * @return {Boolean} true if both are numbers
   * @memberof Calculator
   */
  #validator(fparam, sparam) {
    const paramsInValues = [fparam, sparam];
    const typeOfVars = [typeof fparam, typeof sparam];
    if (typeOfVars.every((el) => el === 'number')) {
      return true;
    } else if (typeOfVars.every((el) => el !== 'number')) {
      // eslint-disable-next-line max-len
      throw new Error(`[Both ${fparam} and ${sparam} are not of type "Number". They are ${typeOfVars[0]}s]`);
    } else {
      let notNumber;
      // eslint-disable-next-line prefer-const
      notNumber = paramsInValues.filter((el) => typeof el !== 'number')[0];
      throw new Error(`[${notNumber} is not of type "Number.]`);
    }
  }

  /**
   *
   *
   * @param {Number} a first param to sum
   * @param {Number} b second param to sum
   * @return {Number} sum
   * @memberof Calculator
   */
  add(a, b) {
    const found = this.#validator(a, b);
    if (found) {
      return a + b;
    }
  }

  /**
   *
   *
   * @param {Number} n first param to multiply
   * @param {Number} m second param to multiply
   * @return {Number} the product returns of n and m
   * @memberof Calculator
   */
  multiply(n, m) {
    const found = this.#validator(n, m);
    if (found) {
      return n * m;
    }
  }
}

module.exports = Calculator;
