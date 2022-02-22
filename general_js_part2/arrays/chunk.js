/**
 * Task description: Write a method that splits an array into parts of determined size
 * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Task complexity: 3 of 5
 * @param {Array} array - An array of any elements
 * @param {number} size - size of chunks
 * @returns {Array}
 */

const chunk = (array, size) => {
    let arr = [...array];
    let result = [];

    while (arr.length > size) {
        let newArr = arr.splice(0, size);
        result.push(newArr);
    }

    result.push(arr);

    return result;
}

module.exports = chunk;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/chunk
 */
