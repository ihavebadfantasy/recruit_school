/**
 * Get an input from the user using the prompt box and reverse the string.
 * e.g “Parvez” should return “zevrap”.
 * @param {String} str - input string
 * @returns {String}
 */

const reverse = (str) => {
  return str.split('').reverse().join('');
}

module.exports = reverse;

/**
 * To run the tests open console in current directory and type:
 * mocha ./strings/test/reverse
 */
