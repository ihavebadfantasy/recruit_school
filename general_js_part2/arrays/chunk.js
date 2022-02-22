/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */

const chunk = (array, size) => {
  const copy = [...array]
  const res = []
 while (copy.length >= size) {
   let removed = copy.splice(0, size)
   res.push(removed)
 }
 if(copy.length < size) {
   res.push(copy)
 }
  return res
}

module.exports = chunk;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/chunk
 */
