/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache =new Map(); // to store results
    let callCount = 0; // to count real fn calls

    const memoized = function(...args) {
        const key = JSON.stringify(args); // create unique key based on args order
        if (cache.has(key)) {
            return cache.get(key);
        }
        callCount++;
        const result = fn(...args);
        cache.set(key, result);
        return result;    
    };
    // helper to get call count
    memoized.getCallCount = function() {
        return callCount;
    };
    return memoized;
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */