/**
 Get an input from the user and convert it into Capitalize format.
 eg. ‘London is the capital of great britain’ should return “London Is The Capital Of Great Britain”
 * @param {String} str - input string
 * @returns {String}
 */

const capitalizeString = (str) => {
  const strCopy = str.split(' ');
  const toUpper = strCopy.map(el => el.replace(el[0], el[0].toUpperCase())).join(' ')

  return toUpper
}

module.exports = capitalizeString;

/**
 * To run the tests open console in current directory and type:
 * mocha ./strings/test/capitalizeString
 */
