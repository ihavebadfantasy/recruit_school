/**
 Get an input from the user and determine whether the string is palindrome.
 Palindrome is a word, phrase, or sequence that reads the same backwards as forwards,

 Examples of palindrome words “madam”, “level”, “radar”, “noon” and “malayalam”.
 Must be case insensitive
 * @param {String} str - input string
 * @returns {Boolean}
 */

const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('').toLowerCase();

  if(str.toLowerCase() === reversedStr) {
    return true
  }else {
    return false
  }
}

module.exports = isPalindrome;

/**
 * To run the tests open console in current directory and type:
 * mocha ./strings/test/palindrome
 */
