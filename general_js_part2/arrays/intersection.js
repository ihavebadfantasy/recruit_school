/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */

const intersection = (...arrays) => {
  let res = [];
   arrays.forEach((el, indx )=> {
    el.forEach((elem,index) => {
      if(arrays.every(element => element.includes(elem))){
        res.push(elem)
      }
    })
    })

  return res.filter((el, index ) => res.indexOf(el) === index)


}

module.exports = intersection;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/intersection
 */
