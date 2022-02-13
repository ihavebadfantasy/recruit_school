/**
 * Напишите имплементацию глубокого клонирования. Результатом работы этой функции будет полная копия объекта вне зависимости от степени вложенности свойств

 * @param {Object} source - object to copy
 * @returns {Object}
 */

const deepClone = (source) => {
  let objectCopy = Array.isArray(source) ? [] : {}
    if (typeof source != 'object') {
      return source;
    }
    for (const key in source) {
        const element = source[key];
        objectCopy[key]=deepClone(element);
    }
    return objectCopy;
}

module.exports = deepClone;

/**
 * To run the tests open console in current directory and type:
 * mocha ./test/deepClone
 */
