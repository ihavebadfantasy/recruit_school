const assert = require('assert');
const fromPairs = require('../fromPairs');

describe('Arrays', function() {
  describe('from_pairs', function() {
    it('should return an object composed of key-value pairs', function() {
      assert.deepEqual(fromPairs([['a', 1], ['b', 2]]), { 'a': 1, 'b': 2 }
      );
    });
  });
});
