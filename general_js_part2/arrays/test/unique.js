const assert = require('assert');
const unique = require('../unique');

describe('Arrays', function() {
  describe('unique', function() {
    it('should return a duplicate-free array', function() {
      assert.deepEqual(unique([1, 2, 1, 2, 3]), [1, 2, 3]);
    });

    it('should a duplicate-free array', function() {
      assert.deepEqual(unique(['', 2, 3, null, 2, undefined, undefined, 6 / 2, ' '], 'string', null), ['', 2, 3, null, undefined, ' ']);
    });
  });
});
