const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING',
 *  { repeatTimes: 3,
 *    separator: '**', 
 *    addition: 'PLUS', 
 *    additionRepeatTimes: 3, 
 *   additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options) {
    return str;
  }
  
  const {repeatTimes = 1,
         separator = '+',
         addition = '',
         additionRepeatTimes = 1,
         additionSeparator = '|'    
  } = options;

  let strings = []
  let additions = [];
  let addString;

  if(`${addition}`) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additions.push(`${addition}`)
    }
  }

  addString = additions.join(additionSeparator);
 
  for (let i = 0; i < repeatTimes; i++) {
    strings.push(str+addString)
    }
  

  return strings.join(separator); 
  
  
}


  

module.exports = {
  repeater
};


