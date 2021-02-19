//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  const cat = '^^';
	let arr1 = matrix.concat(...matrix)
  let sum = 0;
  for(i=0; i<arr1.length; i++){
    if (arr1[i]=== cat){sum++}
  }return sum;
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
