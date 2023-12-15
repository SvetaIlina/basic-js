const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5, [1, 2]]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
 
  calculateDepth(arr) {
    let depth = 1
    if (!Array.isArray(arr)) {
      return 0       
      } 
    
      arr.forEach ( item => {
        if (Array.isArray(item)) {
          let currentDepth = this.calculateDepth(item) + 1
          depth = Math.max(depth, currentDepth)
      }
        
      })
    
      return depth
  }
}



module.exports = {
  DepthCalculator
};
