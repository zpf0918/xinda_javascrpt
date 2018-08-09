function callback() {
  console.log('我跑完了');
}

function rub(cb) {
  cb();
}

rub(callback);
