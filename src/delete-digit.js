const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 const str = String(n);
 let strMax;
 for (let i = 0; i < str.length; i++) {
  if(str[i] < str[i + 1] || i === str.length -1) {
    strMax = str.slice(0, i) + str.slice(i+1)
    break;
  }
 }
 return +strMax;
}


module.exports = {
  deleteDigit
};

