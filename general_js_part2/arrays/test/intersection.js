const assert = require('assert');
const intersection = require('../intersection');

describe('Arrays', function() {
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
});
