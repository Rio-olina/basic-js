
module.exports = function getSeason(date) {
  let message = 'Unable to determine the time of year!';
if (arguments.length >0) {
let month = date.getUTCMonth();

if (month>11 || month <0) throw message;
if (typeof(month) !== 'number') throw message;

  	season = " ";
switch (month) {
      case 11:
      case 0:
      case 1:
        season = 'winter';
        break;
      case 2:
      case 3:
      case 4:
        season = 'spring';
        break;
      case 5:
      case 6:
      case 7:
        season = 'summer';
        break;
     default:
        season = 'autumn';
} return season;
};
	//if (typeof(season) !== 'string') throw message;	
	
	return message}
		
  

  
