/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */

const without = (array, ...args) => {

    let result = [];
    
    array.forEach((el) => {
        if (!args.includes((el))) {
            result.push(el);
        }
    })

    return result;
};

module.exports = without;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/without
 */
