function checkFlightSchedule(callback) {
  console.log('查一下航班，不挂电话，立即告诉我');

  var flight = {
    start: '8:00',
    end: '9:30',
    from: 'Beijing',
    end: 'Shanghai'
  };

  callback(flight.start);
}

function callback(startTime) {
  console.log(startTime);
}

checkFlightSchedule(callback);
