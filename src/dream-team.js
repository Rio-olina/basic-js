module.exports = function createDreamTeam(/* members */) {
	 
  let message = false;
  let teamName = [];
  if (Array.isArray(members)){
    members.forEach(item=> {
    
if (typeof(item) !== 'string') throw message; else {
 
  teamName.push(item.trim()[0].toUpperCase())};
     });
    arr = teamName.sort().join('');
  //  });
 return arr };
