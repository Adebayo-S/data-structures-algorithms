// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let result = [0, 1];

    for (let i = 2; i < n; i++) {
        let last = result.length - 1;
        let next = result[last] + result[last - 1];
        result.push(next);
    }
    let fibSum = result[result.length - 1] + result[result.length - 2];
    return fibSum;
}

module.exports = fib;


function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}
