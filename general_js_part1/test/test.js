const assert = require('assert');

const customApply = require('../apply');
const customBind = require('../bind');
const deepClone = require('../deepClone');

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

describe('deepClone', function() {
  const source = {
    name: 'Source',
    values: [1, [4, 5], 2, 3],
    reference: {
      name: 'reference',
      config: {
        speed: 2
      }
    }
  }

  const target = deepClone(source);

  it('should copy object by value', function() {
    target.values.push(4);

    assert.deepEqual(target.values, [1, [4, 5], 2, 3, 4]);
    assert.deepEqual(source.values, [1, [4, 5], 2, 3]);
  });

  it('should copy object by value', function() {
    target.values[1].push(6);

    assert.deepEqual(target.values[1], [4, 5, 6]);
    assert.deepEqual(source.values[1], [4, 5]);
  });

  it('should copy object by value', function() {
    target.name = 'Target';

    assert.equal(target.name, 'Target');
    assert.equal(source.name, 'Source');
  });

  it('should copy object by value', function() {
    target.reference.config.speed = 3;

    assert.equal(target.reference.config.speed, 3);
    assert.deepEqual(source.reference.config.speed, 2);
  });
});
