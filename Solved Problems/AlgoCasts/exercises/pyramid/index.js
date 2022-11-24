// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let col = (n + (n - 1));
        let space = (col - (i + (i - 1))) / 2;
        let row = (' '.repeat(space)) + ('#'.repeat(i + (i - 1))) + (' '.repeat(space));
        console.log(row);
    }
}

module.exports = pyramid;
