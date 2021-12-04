const assert = require('assert');
const flatten = require('../flatten');

describe('Arrays', function() {
  describe('flatten', function() {
    it('should return flatten array', function() {
      assert.deepEqual(flatten([1, 2, [3, 4, [5]]]), [1, 2, 3, 4, 5]);
    });
  });
});
