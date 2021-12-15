const assert = require('assert');
const clearFromVowels = require('../clearFromVowels');

describe('Strings', function() {
  describe('clearFromVowels', function() {
    it('should return a string without vowels', function() {
      assert.equal(clearFromVowels('I Love You'), ' Lv ');
    });

    it('should return a string without vowels', function() {
      assert.equal(clearFromVowels('It was such a beautiful sunny day. We spend the whole day in our backyard garden.', ), 't ws sch  btfl snn d. W spnd th whl d n r bckrd grdn.');
    });
  });
});

