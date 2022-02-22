/**
 Get an input from the user and strip out all the vowels.
 The letters A, E, I, O, Y and U are called vowels.

 eg. “I Love You” should return "Lv"
 * @param {String} str - input string
 * @returns {Boolean}
 */

const clearFromVowels = (str) => {
  const vowels = /[aeioyu]/gi
  return str.replace(vowels, '')
}

module.exports = clearFromVowels;

/**
 * To run the tests open console in current directory and type:
 * mocha ./strings/test/clearFromVowels
 */
