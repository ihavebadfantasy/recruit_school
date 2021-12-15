const assert = require('assert');
const reverse = require('../reverse');

describe('Strings', function() {
  describe('reverse', function() {
    it('should return a reversed string', function() {
      assert.equal(reverse('Parvez'), 'zevraP');
    });

    it('should return a reversed string', function() {
      assert.equal(reverse('f &^$ 456  '), '  654 $^& f');
    });
  });
});

