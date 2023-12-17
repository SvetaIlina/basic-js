const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let arr = [];
  
  if(domains.length) {
    domains.forEach(item => {
      arr.push(item.split('.').reverse());   
    })
  }


  arr.forEach((item) => {
    let key = '';
    for (let i = 0; i < item.length; i++) {
      key += `.${item[i]}`
      if(Object.keys(obj).includes(key)) {
        obj[key] ++;
      } else {
        obj[key] = 1;
      }
    } 
  })
  
   return obj;
  
}




module.exports = {
  getDNSStats
};
