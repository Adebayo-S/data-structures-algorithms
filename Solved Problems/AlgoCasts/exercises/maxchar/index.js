// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let counter = {};

    for (let char of str) {
        if (!counter[char]) {
            counter[char] = 1;
        } else {
            counter[char] += 1;
        }
    }

    let arr = Object.values(counter);
    let max = Math.max(...arr);

    for (let key of Object.keys(counter)) {
        if (counter[key] === max) {
            return key;
        }
    }
}

console.log(maxChar('aaanhd'));
module.exports = maxChar;

function maxChar(str) {
    let counter = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (counter[char]) {
            counter[char]++;
        } else {
            counter[char] = 1;
        }
    }

    for (let key in counter) {
        if (counter[key] > max) {
            max = counter[key];
            maxChar = key;
        }
    }

    return maxChar;
}
