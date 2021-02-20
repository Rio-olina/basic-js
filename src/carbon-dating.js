const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let message = false;

  if (typeof(sampleActivity) === 'string') {
    let numSampleActivity = parseInt(sampleActivity);
	if(numSampleActivity !== numSampleActivity) {return false};

    if (numSampleActivity > MODERN_ACTIVITY || numSampleActivity <= 0) {return false}
	
	else {
      const ln2 = 0.693;
      const k = ln2 / HALF_LIFE_PERIOD;
      const t = Math.log(MODERN_ACTIVITY / numSampleActivity) / k;
      message = Math.ceil(t);
    }
  }

  return message;
}
