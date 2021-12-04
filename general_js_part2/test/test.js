const assert = require('assert');

const chunk = require('../arrays/chunk');
const compact = require('../arrays/compact');
const flatten = require('../arrays/flatten');
const fromPairs = require('../arrays/fromPairs');
const intersection = require('../arrays/intersection');
const isEqual = require('../arrays/isEqual');
const unique = require('../arrays/unique');
const without = require('../arrays/without');

describe('Arrays', function() {
  describe('chunk', function() {
    const data = [1, 2, 3, 4, 5, 6, 7];

    it('should split an array into parts of determined size', function() {
      assert.deepEqual(chunk(data, 2), [[1, 2], [3, 4], [5, 6], [7]]);
    });

    it('should split an array into parts of determined size', function() {
      assert.deepEqual(chunk(data, 3), [[1, 2, 3], [4, 5, 6], [7]]);
    });
  });

  describe('compact', function() {
    it('should return array without unnecessary elements, like false, undefined, empty strings, zero, null', function() {
      assert.deepEqual(compact([0, 1, false, 2, undefined, '', 3, null]), [1, 2, 3]);
    });
  });

  describe('flatten', function() {
    it('should return flatten array', function() {
      assert.deepEqual(flatten([1, 2, [3, 4, [5]]]), [1, 2, 3, 4, 5]);
    });
  });

  describe('from_pairs', function() {
    it('should return an object composed of key-value pairs', function() {
      assert.deepEqual(fromPairs([['a', 1], ['b', 2]]), { 'a': 1, 'b': 2 }
      );
    });
  });

  describe('intersection', function() {
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    const arr3 = ['a', 'b'];
    const arr4 = ['b', 'c'];
    const arr5 = ['b', 'e', 'c'];
    const arr6 = ['b', 'b', 'e'];
    const arr7 = ['b', 'c', 'e'];
    const arr8 = ['b', 'e', 'c'];

    it('should return an array of unique values that are included in all given arrays', function() {
      assert.deepEqual(intersection(arr1, arr2), [2]);
    });

    it('should return an array of unique values that are included in all given arrays', function() {
      assert.deepEqual(intersection(arr3, arr4, arr5), ['b']);
    });

    it('should return an array of unique values that are included in all given arrays', function() {
      assert.deepEqual(intersection(arr6, arr7, arr8), ['b', 'e']);
    });
  });

  describe('isEqual', function() {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4];
    const arr3 = [1, 2, 3, 5];
    const arr4 = [1, 2, 3, 4, 5];

    it('should return true if 2 arrays are identical', function() {
      assert.equal(isEqual(arr1, arr2), true);
    });

    it('should return true if 2 arrays are identical', function() {
      assert.equal(isEqual(arr1, arr3), false);
    });

    it('should return true if 2 arrays are identical', function() {
      assert.equal(isEqual(arr1, arr4), false);
    });
  });

  describe('unique', function() {
    it('should return a duplicate-free array', function() {
      assert.deepEqual(unique([1, 2, 1, 2, 3]), [1, 2, 3]);
    });

    it('should a duplicate-free array', function() {
      assert.deepEqual(unique(['', 2, 3, null, 2, undefined, undefined, 6 / 2, ' '], 'string', null), ['', 2, 3, null, undefined, ' ']);
    });
  });

  describe('without', function() {
    it('should return an array without listed values', function() {
      assert.deepEqual(without([1, 2, 3, 1, 2], 1, 2), [3]);
    });

    it('should return an array without listed values', function() {
      assert.deepEqual(without(['string', 2, 3, null, 2], 'string', null), [2, 3, 2]);
    });
  });
});
