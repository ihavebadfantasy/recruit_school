/**
 * Task description: Write a method that turns a deep array into a plain array
 * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 * Task complexity: 3 of 5
 * @param {Array} array - A deep array
 * @returns {Array}
 */

// const flatten = (array) => {
//   return array.flat(Infinity);
// }

let result = [];
const flatten = (array) => {
  if (!Array.isArray(array)) {
    result.push(array);
  }else{
    for (const el of array) {
      flatten(el);
    }
  }
  return result;
}

module.exports = flatten;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/flatten
 */
