// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// using the array.reduce
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;


// first draft
function reverse(str) {
    let strlen = str.length;
    strrev = '';
    for (let i = strlen - 1; i >= 0; i--) {
        strrev += str[i];
    }
    return strrev;
}

// // avoid writing classic forloops
function reverse(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// // using array.reverse
function reverse(str) {
    const arr = str.split(''); // converts string to array
    arr.reverse();
    return arr.join(''); // converts array to string
}
