const assert = require('assert');
const isPalindrome = require('../palindrome');

describe('Strings', function() {
  describe('palindrome', function() {
    it('should return true if word is palindrom', function() {
      assert.equal(isPalindrome('madam'), true);
    });

    it('should return true if word is palindrom', function() {
      assert.equal(isPalindrome('Radar'), true);
    });

    it('should return true if word is palindrom', function() {
      assert.equal(isPalindrome('Radarz'), false);
    });
  });
});

