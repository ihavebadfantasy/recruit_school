const assert = require('assert');
const capitalizeString = require('../capitalizeString');

describe('Strings', function() {
  describe('capitalizeString', function() {
    it('should return a capitalized string', function() {
      assert.equal(capitalizeString('London is the capital of great britain'), 'London Is The Capital Of Great Britain');
    });
  });
});

