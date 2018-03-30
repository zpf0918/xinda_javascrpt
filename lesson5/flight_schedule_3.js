function checkFlightSchedule(callback) {
  console.log('开始查询航班信息');

  setTimeout(function() {
  	var scheduleInfo = {
  		start: '8/23 8:00',
  		end: '8/23 10:30',
  		from: 'Beijng',
  		to: 'ShangHai'
  	};

  	callback(scheduleInfo.start);
  }, 5000);
}

function callback(startTime) {
  console.log('通过反馈通道获得了信息');
  console.log(startTime);