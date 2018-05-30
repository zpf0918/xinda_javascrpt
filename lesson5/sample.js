function run(callback) {
  console.log(' is running');
  if (typeof callback === 'function') {
    callback();
  } else {
    console.log('is not function');
  }
}


function callback() {
  console.log('end.');
}
run(callback);
