module.exports = class DepthCalculator {
  calculateDepth(arr) {
   
if ( typeof arr !== 'object' ){return 0}	 
let count = 1; 
	  arr.forEach(subArray => {
      if (Array.isArray(subArray))
 {count = Math.max(count, 1 + this.calculateDepth(subArray))}		  
     
    })
    return count; 
}}
