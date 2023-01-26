var assert = require('assert');
var calc = require('./../app/calculator.js');

describe('ADD', () => {
  it('it should compute 5 + 2 and return 7', () => {
    assert.equal(calc.add(5, 2), 7);
  });
  it('it should compute 5 + 2 and return 8', () => {
    assert.equal(calc.add(5, 2), 8);
  });
});

describe('SUB', () => {
  it('it should compute 5 - 2 and return 3', () => {
    assert.equal(calc.sub(5, 2), 3);
  });
  it('it should compute 5 - 2 and return 2', () => {
    assert.equal(calc.sub(5, 2), 2);
  });
});

describe('MUL', () => {
  it('it should compute 5 * 2 and return 10', () => {
    assert.equal(calc.mul(5, 2), 10);
  });
  it('it should compute 5 * 2 and return 12', () => {
    assert.equal(calc.mul(5, 2), 12);
  });
});

describe('DIV', () => {
  it('it should compute 10 / 2 and return 5', () => {
    assert.equal(calc.div(10, 2), 5);
  });
  it('it should compute 10 / 2 and return 2', () => {
    assert.equal(calc.div(10, 2), 2);
  });
});