const assert = require('assert');
const without = require('../without');

describe('Arrays', function() {
  describe('without', function() {
    it('should return an array without listed values', function() {
      assert.deepEqual(without([1, 2, 3, 1, 2], 1, 2), [3]);
    });

    it('should return an array without listed values', function() {
      assert.deepEqual(without(['string', 2, 3, null, 2], 'string', null), [2, 3, 2]);
    });
  });
});
