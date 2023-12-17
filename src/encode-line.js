const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeStr = ''
  
  if(!str || str.length < 3) {
    return str; 
  }

let counter = 1
let letter = str[0]

for (let i = 1; i < str.length; i++) {
    if(str[i] === letter) {
      counter++
     
    } else {
      if(counter === 1 ) {
        encodeStr +=  letter
      } else {
        encodeStr += counter + letter
      }
      
      counter = 1;
      letter = str[i]
    }

    if(i === str.length - 1) {
      if(counter === 1 ) {
        encodeStr += letter
      } else {
        encodeStr += counter + letter
      }
    }
}

return encodeStr;
}


module.exports = {
  encodeLine
};
