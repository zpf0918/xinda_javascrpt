function checkFlightSchedule(callback) {
  setTimeout(function() {
  	callback('查到是6:00的航班');
  }, 1000);
}

function callback(startTime) {
  console.log(startTime);
}

checkFlightSchedule(callback);
