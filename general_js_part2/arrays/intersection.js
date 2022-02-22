/**
 * Task description: Write a method that creates an array of unique values that are included in all given arrays
 * Expected Result: ([1, 2], [2, 3]) => [2]
 * Task complexity: 4 of 5
 * @param {?} arrays - Arrays of primitive data types
 * @returns {Array}
 */

const intersection = (...arrays) => {
  // let res = [];
  // let elToCompare;
  // arrays.forEach((el, indx )=> {
  //   console.log('ELS====>>>',el);
  //   el.forEach((elem,index) => {
  //     elToCompare = elem;
  //     if (el[index] === elToCompare){
  //     res.push(elToCompare)
  //     }
  //   })
      // console.log('ELemsS====>>>',elem);
      // console.log('ELTOCOMPARE====>>>',elToCompare);
      // })
 const flat = arrays.flat(Infinity)
 const filtered = flat.filter((el, index ) => flat.indexOf(el) !== index)
 const res = filtered.filter((el, index ) => filtered.indexOf(el) === index)
  console.log(res);
  return res


}

module.exports = intersection;

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/intersection
 */
