/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */

const unique = (array) => {
  let newArr = [];

  array.forEach((el)=>{

    if (!newArr.includes(el)){
      newArr.push(el);
    }
  })

  return newArr;
}

const data = [1, 2, 1, 2, 3];

module.exports = unique;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/unique
 */
