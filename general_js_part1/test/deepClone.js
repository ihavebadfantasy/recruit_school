const assert = require('assert');

const deepClone = require('../deepClone');

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

