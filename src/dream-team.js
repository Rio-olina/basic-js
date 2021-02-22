module.exports = function createDreamTeam(/* members */) {
	  let teamName = [];
  if (members.length === []) {return false};
  //if (Array.isArray(members)){
    members.forEach(item=> {
     if (typeof(item) !== 'string') {return false} else {
   teamName.push(item.trim()[0])};
     });
	if (teamName.length = 0) {return false}
	else
	{arr = teamName.sort().join('');
		 arr.toUpperCase();
	//if (arr.length = 0) {return false}
	 
  
	return arr} };
