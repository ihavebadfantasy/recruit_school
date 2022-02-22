/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */

const fromPairs = (array) => {
  let obj = {};

  array.forEach(([key, value])=>{
    obj[key] = value;
  })

  return obj;
}

const data = [['a', 1], ['b', 2]];

module.exports = fromPairs;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/from_pairs
*/
