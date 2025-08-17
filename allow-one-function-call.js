/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false; // to track if the function has been called
    let result; // to store the result of the first call


    return function(...args){
        if (!called) {
            result = fn(...args); // call fn only once
            called = true;
            return result;
        }
        return undefined; // afterwards, always undefined
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
