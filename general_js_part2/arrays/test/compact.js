const assert = require('assert');
const compact = require('../compact');

describe('Arrays', function() {
  describe('compact', function() {
    it('should return array without unnecessary elements, like false, undefined, empty strings, zero, null', function() {
      assert.deepEqual(compact([0, 1, false, 2, undefined, '', 3, null]), [1, 2, 3]);
    });
  });
});
