const assert = require('assert');

const customApply = require('../apply');
const customBind = require('../bind');

describe('bind', function() {
  Function.prototype.customApply = customApply;
  Function.prototype.customBind = customBind;

  it('should return a function that will be executed in provided context', function() {
    const person = {
      name: 'Ann',
    }

    function greet(greeting) {
      return(greeting + ' ' + this.name);
    }

    const greeter = greet.customBind(person, ['Hello']);

    assert.equal(greeter(), 'Hello Ann');
  });

  it('should return a function that will be executed in provided context', function() {
    function square(b) {
      return this.a * b;
    }

    const rec1 = { a: 2 };
    const getSquare = square.customBind(rec1, [3]);
    assert.equal(getSquare(), 6);
  });

  it('should return a function that will be executed in provided context', function() {
    function sum(args) {
      return args.reduce((acc, current) => acc + current, 0);
    }
    const getSum = sum.customBind(null, [1, 2, 3, 4, 5 ]);

    assert.equal(getSum(), 15);
  });
});
