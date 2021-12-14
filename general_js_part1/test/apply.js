const assert = require('assert');

const customApply = require('../apply');

describe('apply', function() {
  Function.prototype.customApply = customApply;

  it('should execute function in provided context', function() {
    const person = {
      name: 'Ann',
    }

    function greet(greeting) {
      return(greeting + ' ' + this.name);
    }

    assert.equal(greet.customApply(person, ['Hello']), 'Hello Ann');
  });

  it('should execute function in provided context', function() {
    function square(b) {
       return this.a * b;
      }
    const rec1 = { a: 2 };
    assert.equal(square.customApply(rec1, [3]), 6);
  });

  it('should execute function in provided context', function() {
    function sum(...args) {
      return args.reduce((acc, current) => acc + current, 0);
    }
    assert.equal(sum.customApply(null, [1, 2, 3, 4, 5 ]), 15);
  });
});
