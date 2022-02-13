/**
 * Напишите свой собственный apply, он должен работать аналогично нативному. Пример:
 * function square(b) {
 *  return this.a * b;
 * }
 * const rec1 = { a: 2 }
 * Expected Result: square.customApply(rec1, 3) => 6

 * @param {Object | null} obj - object to take context from
 * @param {Array} args - array of original function arguments
 * @returns {Array}
 */

function customApply(obj, args) {
    if (!obj) {
        return this(...args);
    }
    for (const param in obj) {
        this.prototype[param] = obj[param];
    }
    this.prototype.fn = this;
    let newFn = new this();

    return newFn.fn(args);
}

module.exports = customApply;

/**
 * To run the tests open console in current directory and type:
 * mocha ./test/apply
 */

