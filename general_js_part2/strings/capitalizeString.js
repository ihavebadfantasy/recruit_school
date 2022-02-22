/**
 Get an input from the user and convert it into Capitalize format.
 eg. ‘London is the capital of great britain’ should return “London Is The Capital Of Great Britain”
 * @param {String} str - input string
 * @returns {String}
 */

const capitalizeString = (str) => {

  return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
}

module.exports = capitalizeString;

/**
 * To run the tests open console in current directory and type:
 * mocha ./strings/test/capitalizeString
 */
