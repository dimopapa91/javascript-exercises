/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timer; // store the timer ID
    return function(...args) {
        // Clear the previous timer if it exists
        clearTimeout(timer);
        // Set a new timer.
        timer = setTimeout(() => {
            fn(...args); // Call the function with the provided arguments
        }, t);
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */