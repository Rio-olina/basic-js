module.exports = function countCats(matrix) {
  
  const cat = '^^';
  let sum = 0;
    matrix.forEach((subArray) => {
    subArray.forEach((item) => {
  
  if (item=== cat) {sum++} })
  })
   return sum
}
