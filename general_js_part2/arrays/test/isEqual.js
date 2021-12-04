const assert = require('assert');
const isEqual = require('../isEqual');

describe('Arrays', function() {
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
});
