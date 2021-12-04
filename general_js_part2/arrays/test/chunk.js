const assert = require('assert');
const chunk = require('../chunk');

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
});
