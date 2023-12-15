const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }

  const newArr = arr.concat();
  const indexes = [];
  arr.forEach((item, i) => {
    if (typeof item == 'string') {
      indexes.push(i)
    }
  })
  
  indexes.forEach((i, index) => {
    if (i == 0  &&(arr[i] == '--discard-prev' || arr[i] == '--double-prev') ) {
      newArr.splice(i, 1)
      
    } else if (i == arr.length - 1 && (arr[i] == '--discard-next' || arr[i] == '--double-next') ) {
      newArr.splice(i, 1)
      
    }  else if (indexes[index+1] - indexes[index] == 2 && arr[indexes[index]] == '--discard-next' && (arr[indexes[index+1]] == '--double-prev' || arr[indexes[index+1]] == '--discard-prev' ) ) {
      newArr.splice(i + 2, 1)
    }
       
  })

  for (let i = 0; i < newArr.length; i++) {
    const item = newArr[i];
    switch (item) {
      case '--double-next':
        newArr.splice(i, 1, newArr[i+1] );
        break;
      case '--double-prev':
        newArr.splice(i, 1, newArr[i-1] );
        break;
      case '--discard-prev':
        newArr.splice(i-1, 2);
        i--
        break;
      case '--discard-next':
        newArr.splice(i, 2);
        i--
        break;
    }
  }
  
  return newArr;

}


module.exports = {
  transform
};
