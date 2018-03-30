function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  var scheduleInfo = {
  	start: '8/23 8:00',
  	end: '8/23 10:30',
  	from: 'Beijing',
  	to: 'shanghai'
  };

  callback(scheduleInfo.start);
}

function call(startTime) {
  console.log(startTime);
}

checkFlightSchedule(call);