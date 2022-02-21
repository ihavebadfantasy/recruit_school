/**
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */

const isEqual = (firstArray, secondArray) => {
  let res = false
  firstArray.forEach(el1 => {
    secondArray.forEach(el2 => {
      if (el1 === el2){
        res = true;
      }else {
        res = false
      }
    })
  })
  return res
}

module.exports = isEqual;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/isEqual
 */
