/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */

const intersection = (...arrays) => {
    let intersection = [];
    arrays[0].forEach((el) => {
        if (arrays[1].includes(el) && !intersection.includes(el)) {
            intersection.push(el);
        }
    })
    if (arrays.length > 2) {
        for (let i = 2; i < arrays.length; i++) {
            let newIntersection = [];
            intersection.forEach((value => {
                if (arrays[i].includes(value)) {
                    newIntersection.push((intersection.slice(intersection.indexOf(value), intersection.indexOf(value) + 1).toString()));
                }
            }))
            intersection = newIntersection;
        }
    }
    return intersection;
}

module.exports = intersection;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/intersection
 */
