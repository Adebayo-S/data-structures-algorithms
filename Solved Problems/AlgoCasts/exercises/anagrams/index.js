// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let punctuation = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    let cleanA = stringA.split('').filter(char => {
        return punctuation.indexOf(char) === -1;
    }).join('').toLowerCase();

    let cleanB = stringB.split('').filter(char => {
        return punctuation.indexOf(char) === -1;
    }).join('').toLowerCase();

    if (cleanA.length !== cleanB.length) return false;

    let counterA = {};
    let counterB = {};

    for (let char of cleanA) {
        if (!counterA[char]) {
            counterA[char] = 1;
        } else {
            counterA[char]++;
        }
    }

    for (let char of cleanB) {
        if (!counterB[char]) {
            counterB[char] = 1;
        } else {
            counterB[char]++;
        }
    }

    for (let key in counterA) {
        if (counterA[key] !== counterB[key]) return false;
    }

    return true;
}

module.exports = anagrams;

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) return false;
    }

    return true;
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}


